FROM python:3
WORKDIR /usr/app
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 9181
CMD [ "python", "./main.py" ]