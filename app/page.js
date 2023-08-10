'use client'

import Image from "next/image"
import { useState } from "react"

export default function Index() {
    const [index, setIndex] = useState(0)
    const [modalShow, setModalShow] = useState(true)
    const items = [
        {
            image: '/gold.jpg',
            title: 'GOLD Random Key',
            price: 259,
            description: `НАШИ ПОКУПАТЕЛИ ПРИЗНАЛИ НАШ GOLD RANDOM KEY ЛУЧШИМ РАНДОМОМ В РУНЕТЕ!<br/>
            <br/>
            Из этого кейса вы получите игру от 399 до 5499 рублей.<br/>
            Мы вернем ваши деньги, если игра в Steam окажется дешевле без учета скидок.<br/>
            <br/>
            Покупая GOLD Random Key вы не только экономите деньги, но и имеете шанс получить дорогую игру, включая такие хиты, как: Cyberpunk 2077, GTA V, Red Dead Redemption 2, Elden Ring, Resident Evil, DayZ, Rust, Call of Duty, Battlefield V и другие.<br/>
            <br/>
            Мы вручную отбираем самые лучшие игры в наши кейсы. Наша задача: всегда стараться радовать вас качеством наших товаров!<br/>
            <br/>
            Вам не понравилась игра в этом кейсе? Пожалуйста, напишите её название здесь и мы уберем её из наших рандомов: https://vk.cc/cel2st<br/>
            <br/>
            Посмотрите наши отзывы за 8 лет работы: https://vk.com/topic-89671768_31757173<br/>
            <br/>
            Товар приходит на почту
            <br/>
            Гарантии магазина: https://gmkbot.ru/polzovatelskoe-soglashenie<br/>`
        },
        {
            image: '/premium.jpg',
            title: 'Premium Random Key',
            price: 225,
            description: `Из этого кейса вы получите игру от 299 до 2599 рублей.<br/>
            Мы вернем ваши деньги, если игра в Steam окажется дешевле без учета скидок.<br/>
            <br/>
            Покупая Premium Random Key вы не только экономите деньги, но и имеете шанс получить дорогую игру, включая такие хиты, как: GTA V, Resident Evil, Rust, Terraria, DayZ, The Witcher, Stalker, Raft, Borderlands, For Honor, Stray и другие.<br/>
            <br/>
            Мы вручную отбираем самые лучшие игры в наши кейсы. Наша задача: всегда стараться радовать вас качеством наших товаров!<br/>
            <br/>
            Вам не понравилась игра в этом кейсе? Пожалуйста, напишите её название здесь и мы уберем её из наших рандомов: https://vk.cc/cel2st<br/>
            <br/>
            Посмотрите наши отзывы за 8 лет работы: https://vk.com/topic-89671768_31757173<br/>
            <br/>
            Товар приходит на почту
            <br/>
            Гарантии магазина: https://gmkbot.ru/polzovatelskoe-soglashenie<br/>`
        },
        {
            image: '/narod.jpg',
            title: 'Народный Рандом',
            price: 105,
            description: `Из этого кейса вы получите игру до 1999 рублей<br/>.
            <br/>
            Мы вручную отбираем самые лучшие игры в наши кейсы. Наша задача: всегда стараться радовать вас качеством наших товаров!<br/>
            <br/>
            Вам не понравилась игра в этом кейсе? Пожалуйста, напишите её название здесь и мы уберем её из наших рандомов: https://vk.cc/cel2st<br/>
            <br/>
            Посмотрите наши отзывы за 8 лет работы: https://vk.com/topic-89671768_31757173<br/>
            <br/>
            Товар приходит на почту
            <br/>
            Гарантии магазина: https://gmkbot.ru/polzovatelskoe-soglashenie<br/>`
        }
    ]

    return (
        <>
            <div className="flex gap-2 flex-wrap">
                {items.map((value, index) => (
                    <div key={index} className="bg-slate-900 p-5 shadow-md rounded-md w-full md:w-auto flex-col flex items-center">
                        <Image
                            src={value.image}
                            width={250}
                            height={250}
                            alt={value.title}
                        >
                        </Image>
                        <div className="pt-2 mb-2 w-full">
                            <div className="text-white text-xl">{value.title}</div>
                            <div className="text-white font-bold">{value.price} RUB</div>
                        </div>
                        <button onClick={() => {
                            setIndex(index)
                            setModalShow(true)
                        }} className="text-white bg-slate-800 w-full rounded-md p-2 shadow-xl hover:bg-slate-700">Купить</button>
                    </div>
                ))}
            </div>

            {/* card view */}
            {modalShow && 
            <>
                <div className={"fixed left-0 right-0 top-0 bottom-0 m-auto"} style={{backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
                <div className="fixed left-0 right-0 top-3 m-auto bg-slate-800 w-5/6 h-5/6 rounded-md p-5">
                    <div className="text-white text-2xl font-bold">{items[index].title}</div>
                    <div className="relative text-white text-sm overflow-y-auto h-4/6" dangerouslySetInnerHTML={{__html: items[index].description}}></div>
                    {/* <div className="text-white font-bold pt-3 pb-3">{items[index].price} RUB</div> */}
                    <div class="flex">
                        <div class="mb-3 xl:w-96">
                            <label for="exampleFormControlInput1" class="form-label inline-block mb-2 text-white"
                            >Email</label>
                            <input
                                type="text"
                                class="
                                    form-control
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-white
                                    bg-slate-700 bg-clip-padding
                                    border border-solid border-slate-700
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-white focus:bg-slate-600 focus:border-blue-600 focus:outline-none
                                "
                                id="exampleFormControlInput1"
                                placeholder="Email"
                            />
                        </div>
                    </div>
                    <div className="w-full flex flex-row gap-1 pt-3">
                        <button onClick={() => {
                            setModalShow(false)
                        }} className="text-white bg-red-500 hover:bg-red-400 rounded-md shadow-xl w-full p-3">Отмена</button>
                        <button className="text-white bg-green-500 hover:bg-green-400 rounded-md shadow-xl w-full p-3">Купить</button>
                    </div>
                    </div>
                </div>
            </>
            }
        </>
    )
}