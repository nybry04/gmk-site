from flask import Flask
from flask import request
from flask import Response
import uuid
import hmac
import hashlib
import requests
import urllib.parse
import json
import random
import hashlib

SHOP_ID = "f1e069cc-4d61-4fef-a297-d8675fde3169"
SECRET_KEY = "39b8bea201b1099af2fcc678b9e505a8d4b996ee"
OPTIONAL_SECRET_KEY = "3fb81aba1012de2b013cd5b7b23cac0a6239d692"
VK_GROUP_TOKEN = "84e1bab55987956ac9022b2cfda22e05626cad6b343f121ecca29d4644227dcd83adced1589dba4c8710f"
ADMIN_ID = 679812332


class LavaAPI:
    def __init__(self, api_token: str, shop_id: str):
        self.api_token = api_token
        self.shop_id = shop_id
        self.headers = {}
        self.url = "https://api.lava.ru"

    @staticmethod
    def sortDict(data: dict):
        sorted_tuple = sorted(data.items(), key=lambda x: x[0])
        return dict(sorted_tuple)

    class CreateInvoiceError(Exception):
        pass

    class AuthError(Exception):
        pass

    def signer_func(self, data):
        jsonStr = json.dumps(data).encode()

        sign = hmac.new(bytes(self.api_token, 'UTF-8'), jsonStr, hashlib.sha256).hexdigest()
        return sign

    def create_invoice(self, orderId: int, sum: float, hookUrl: str, successUrl: str, custom_fields: str):
        data = { "shopId": self.shop_id, "orderId": orderId, "sum": str(sum), "hookUrl": hookUrl, "successUrl": successUrl, "custom_fields": custom_fields }

        headers = self.headers
        headers['Signature'] = self.signer_func(data)

        resp = requests.post("https://api.lava.ru/business/invoice/create", json=data, headers=headers)
        print(resp.content.decode('utf-8').replace("'", '"'))
        return resp.content.decode('utf-8').replace("'", '"')

app = Flask(__name__)
lava = LavaAPI(SECRET_KEY, SHOP_ID)

@app.route('/site-ok', methods=['POST'])
def site_ok():
    print('siteok')
    cf = str(request.get_json()['custom_fields'])
    # sum:count:email:text
    sum = cf.split(':')[0]
    count = cf.split(':')[1]
    email = cf.split(':')[2]
    text = cf.split(':')[3]
    resp = requests.post(
        url=f'https://api.vk.com/method/messages.send?access_token={VK_GROUP_TOKEN}&user_id={ADMIN_ID}&random_id=0&message={urllib.parse.quote(f"Покупка через сайт. Сумма: {sum} Количество: {count} Почта: {email} Дополнительно: {text}")}&v=5.131'
        )
    print(str(resp.content))
    return 'ok'

@app.route('/generate-payment')
def generate_payment():
    sum = float(request.args.get('sum'))
    hookUrl = request.args.get('hook')
    successUrl = request.args.get('success')
    customFields = request.args.get('fields')
    resp = lava.create_invoice(random.randint(100, 1_000_000), sum, hookUrl, successUrl, customFields)
    return Response(resp, mimetype='application/json')


app.run(host='0.0.0.0', port=9181)