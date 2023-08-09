'use client'

import Image from "next/image"

export default function Index() {
    const items = [
        {
            image: '/gold.jpg',
            title: 'GOLD Random Key',
            price: 259
        },
        {
            image: '/premium.jpg',
            title: 'Premium Random Key',
            price: 225
        },
        {
            image: '/narod.jpg',
            title: 'Народный Рандом',
            price: 105
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
                        <button className="text-white bg-slate-800 w-full rounded-md p-2 shadow-xl hover:bg-slate-700">Купить</button>
                    </div>
                ))}
            </div>
        </>
    )
}