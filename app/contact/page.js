'use client'
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
    return (
        <>
            <div className="bg-slate-900 p-5 rounded-md shadow-xl">
                <div className="text-white text-5xl">Сотрудничество и поддержка</div>
                <div className="pt-5 flex flex-col text-white text-lg">
                    <div className="flex">
                        <div className="p-2">Почта</div>
                        <div className="p-2">kislobloger@vk.com</div>
                    </div>
                    <div className="flex">
                        <div className="p-2">Номер телефона</div>
                        <div className="p-2">+79507642548</div>
                    </div>
                    
                    <div className="flex">
                        <div className="p-2">ВКонтакте</div>
                        <Link href={'https://vk.com/get_my_key'} className="p-2">https://vk.com/get_my_key</Link>
                    </div>
                    <div className="flex">
                        <div className="p-2">Телеграм</div>
                        <div className="p-2">@kislobloger000</div>
                    </div>
                </div>

                <div className="text-white text-5xl">Дополнительно</div>

                <div className="text-white text-lg flex flex-col gap-1 pt-5">
                    <Link href={'/polzovatelskoe-soglashenie'}>Пользовательское соглашение</Link>
                    <Link href={'/obrabotka-dannyh'}>Обработка данных</Link>
                    <Link href={'/konfidencialnost'}>Политика конфиденциальности</Link>
                </div>
            </div>
        </>
    )
}