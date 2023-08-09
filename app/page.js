'use client'

import Image from "next/image"

export default function Index() {
    const items = [
        {
            image: 'https://sun9-14.userapi.com/impg/0hrwzX38l4vq-WUecA2a8zwH3AOoHfkZXoalBg/D126kjy08NE.jpg?size=510x510&quality=95&sign=cf2df511a7e8d25064b223d1c54745a7&c_uniq_tag=b0fdHvZnDoiYPEf0vjYM0ls0TsTHSkuyZMcK5HfoCno&type=album',
            title: 'GOLD Random Key',
            price: 259
        },
        {
            image: 'https://sun9-44.userapi.com/impg/gSuOkDUBMTpkP2fggf2sAMW7FZRU50yA4Zo4aQ/nxy7n9kXoPE.jpg?size=510x510&quality=95&sign=e1aace1beeb1a5334b155ee1dc142f8a&c_uniq_tag=g2vR4jnI9Z7fuffD75XiBn7J8F2lCfFSvo4ctYIbhE0&type=album',
            title: 'Premium Random Key',
            price: 225
        },
        {
            image: 'https://sun9-59.userapi.com/impg/XkCqidFPzrfg-VfEUFCIoMHIZLZummd7_aNi9w/GOkVykYOQ6o.jpg?size=510x510&quality=95&sign=356f27ec5a289167f59302684e8378fe&c_uniq_tag=pOaL1bJR8KrmuODGw33F6IIxIOOzPdJBHXeOX2vDbdY&type=album',
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
                            loader={() => value.image}
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