'use client'
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
    return (
        <>
            <div className="bg-slate-900 p-5 rounded-md shadow-xl">
                <div className="text-white text-5xl">Контакты</div>
                <div className="pt-5 flex text-white text-lg">
                    <div className="p-2">ВК</div>
                    <Link href={'https://vk.com/get_my_key'} className="p-2">https://vk.com/get_my_key</Link>
                </div>

                <div className="text-white text-5xl">Дополнительно</div>

                <div className="text-white text-lg flex flex-col gap-1 pt-5">
                    <Link href={'/polzovatelskoe-soglashenie'}>Пользовательское соглашение</Link>
                    <Link href={'/obrabotka-dannyh'}>Обработка данных</Link>
                </div>
            </div>
        </>
    )
}