'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Index() {
    const [index, setIndex] = useState(0)
    const [modalShow, setModalShow] = useState(false)
    const [modalCount, setModalCount] = useState(1)
    const items = [
        {
            image: '/xcom2.jpg',
            title: 'XCOM 2',
            price: 229,
            description: `XCOM2 - это продолжение признанной игроками и критиками стратегии XCOM: Enemy Unknown. Двадцать лет минуло с тех пор, как человечество проиграло войну с захватчиками из другого мира, и на Земле теперь царит новый порядок. После лет работы в подполье, остаткам XCOM предстоит восстать из пепла и сокрушить врага.`
        },
        {
            image: '/punks.jpg',
            title: 'Bunker Punks',
            price: 115,
            description: `Bunker Punks - это динамичный шутер от первого лица, действие которого происходит в антиутопическом будущем. Управляйте группой революционеров и совершайте набеги на корпоративные цитадели в поисках припасов, оружия и доспехов. Настройте свой бункер, обучите свою банду и разрушьте корпоративное правительство.`
        },
        {
            image: '/civ.jpg',
            title: 'Sid Meier\'s Civilization 5 GOLD Edition',
            price: 299,
            description: `Sid Meier's Civilization V - пятая часть в знаменитой стратегической серии Civilization. Станьте Властелином Мира - создайте и развивайте цивилизацию от зари человечества до космической эры. Объявляйте войны, ведите переговоры, открывайте новые технологии, сходитесь лицом к лицу с величайшими правителями в истории и создайте сильнейшую империю в мире.`
        },
        {
            image: '/rice.jpg',
            title: 'Rise of Industry',
            price: 299,
            description: 'Rise of Industry – экономическая стратегия, в которой вы примерите на себя роль промышленника в начале XX века. Постройте свою империю и управляйте ей в рамках живого развивающегося по ходу игры мира, который постоянно подстраивается под ваш игровой стиль.'
        },
        {
            image: '/trap.jpg',
            title: 'Deathtrap',
            price: 250,
            description: 'Deathtrap — это игра в жанре «защита башни», объединенная с элементами стратегии и action-rpg. Игра, полная жутких трюков, машин смерти, вращающихся лезвий и брызгов крови.'
        },
        {
            image: '/aragami.jpg',
            title: 'Aragami',
            price: 350,
            description: 'Вы арагами, дух отмщения, наделенный способностью подчинять тени своей воле. Вас призвала Ямико, девушка, заточенная в городе-крепости Кюрю. Отправляйтесь в страшное путешествие, полное нераскрытых тайн и пролитой крови, чтобы узнать правду об истинной сущности арагами.'
        },
        {
            image: '/arm.jpg',
            title: 'Armello',
            price: 351,
            description: 'Armello — игра в жанре фэнтези на базе настольных игр. Это стратегия, карточная тактика с элементами RPG и куча приключений. Воюйте, нанимайте агентов, используйте магию, яды и уловки на пути к трону!'
        },
        {
            image: '/sc.jpg',
            title: 'ScourgeBringer',
            price: 229,
            description: 'ScourgeBringer - это высокоскоростной свободно движущийся roguelite платформер. Помогите Kyhra изучить неизвестное и проложить путь через античные машины, охраняющие печать ее прошлого, а возможно и спасти человечество.'
        },
        {
            image: '/grime.jpg',
            title: 'GRIME',
            price: 115,
            description: 'Уничтожайте... Поглощайте... Вырастайте... GRIME — беспощадный приключенческий ролевой экшен; вам предстоит вооружиться мутирующим оружием, сокрушить врагов и поглотить их останки чёрной дырой, чтобы укрепить свое вместилище.'
        },
        {
            image: '/frost.jpg',
            title: 'Frostpunk',
            price: 600,
            description: 'Frostpunk – первая игра в жанре "выживание общества". Как правитель последнего города на земле вы будете управлять его жителями и инфраструктурой. Какие решения вы примете во имя выживания? Как себя поведете в переломный момент? Кем при этом станете?'
        }
    ]

    return (
        <>
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-5 m-1 shadow-md rounded-md w-full md:w-auto flex-col md:flex-row flex items-center">
                <Image
                    src={'/adware.jpg'}
                    width={400}
                    height={1_000_000}
                    alt={'logo2'}
                    className="rounded-xl shadow-2xl"
                />
                <div className="ml-3 text-white">
                    <div>Вручную отбираем интересные игры.</div>
                    <br />
                    <div>Добавляем игры в товары почти каждый день и устраиваем тематические дни разных игр. Следите за обновлениями на сайте и группе.</div>
                    <br />
                    <div>Более 1 000 отзывов за 8 лет работы: </div>
                    <Link className="underline" href={'https://vk.com/topic-89671768_31757173'}>vk.com/topic-89671768_31757173</Link>
                    <br/>
                    <div>💙 Нам важно, чтобы вам понравилось у нас и вы стали нашим постоянным клиентом.</div>
                </div>
            </div>
            <div className="flex gap-2 flex-wrap justify-around">
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
                            setModalCount(1)
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
                    <div className="relative text-white text-sm overflow-y-auto h-[35%]" dangerouslySetInnerHTML={{__html: items[index].description}}></div>
                    {/* <div className="text-white font-bold pt-3 pb-3">{items[index].price} RUB</div> */}
                    <div className="mt-5 flex justify-center flex-col md:flex-row items-center">
                        <div className="mb-3 xl:w-96">
                        <div className="text-white">Email</div>
                            <input
                                type="text"
                                className="
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
                        <div className="mb-3 xl:w-96">
                            <div className="ml-1 text-white">Количество</div>
                            <input
                                type="number"
                                defaultValue={1}
                                min={1}
                                max={10000}
                                className="
                                    form-control
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    mr-1
                                    ml-1
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
                                placeholder="Количество"
                                onChange={(el) => {
                                    let n = parseInt(el.target.value)
                                    if(isNaN(n)) {
                                        setModalCount(1)
                                        return
                                    }
                                    if(n < 1) {
                                        setModalCount(1)
                                        el.target.value = '1'
                                        return
                                    }
                                    if(n > 1000){
                                        setModalCount(1000)
                                        el.target.value = '1000'
                                        return
                                    }
                                    setModalCount(n)
                                }}
                            />
                        </div>
                        <div className="ml-3 text-white mb-[-0.5rem]">
                            <input id="agreecheckbox" type="checkbox" className="inline-block mr-1"/>
                            Я согласен с <Link href={'/polzovatelskoe-soglashenie'} className="underline">правилами/условиями</Link> магазина
                        </div>
                    </div>
                    <div className='w-full flex flex-row gap-5 justify-center'>
                        <div className='w-16 h-11 bg-center bg-no-repeat' style={{ backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iMjciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMi4zNTggMjMuNjU5YTEzLjYwNCAxMy42MDQgMCAwMS04Ljc5NyAzLjIwMUM2LjA3MSAyNi44NiAwIDIwLjg2IDAgMTMuNDZTNi4wNzIuMDYgMTMuNTYxLjA2YzMuMzU3IDAgNi40MjkgMS4yMDUgOC43OTcgMy4yMDFhMTMuNjA0IDEzLjYwNCAwIDAxOC43OTYtMy4yYzcuNDkgMCAxMy41NjIgNS45OTggMTMuNTYyIDEzLjQgMCA3LjQtNi4wNzIgMTMuNC0xMy41NjIgMTMuNGExMy42MDQgMTMuNjA0IDAgMDEtOC43OTYtMy4yMDJ6IiBmaWxsPSIjRUQwMDA2Ii8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMi4zNTggMjMuNjU5YzIuOTE2LTIuNDU4IDQuNzY1LTYuMTE1IDQuNzY1LTEwLjE5OVMyNS4yNzQgNS43MiAyMi4zNTggMy4yNjFhMTMuNjA0IDEzLjYwNCAwIDAxOC43OTctMy4yYzcuNDkgMCAxMy41NjEgNS45OTggMTMuNTYxIDEzLjQgMCA3LjQtNi4wNzEgMTMuNC0xMy41NjEgMTMuNGExMy42MDQgMTMuNjA0IDAgMDEtOC43OTctMy4yMDJ6IiBmaWxsPSIjRjlBMDAwIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMi4zNTggMjMuNjU5YzIuOTE1LTIuNDU4IDQuNzY0LTYuMTE1IDQuNzY0LTEwLjE5OVMyNS4yNzMgNS43MiAyMi4zNTggMy4yNjFjLTIuOTE2IDIuNDU4LTQuNzY1IDYuMTE1LTQuNzY1IDEwLjIgMCA0LjA4MyAxLjg0OSA3Ljc0IDQuNzY1IDEwLjE5OHoiIGZpbGw9IiNGRjVFMDAiLz48L3N2Zz4=")' }}></div>
                        <div className='w-16 h-11 bg-center bg-no-repeat' style={{ backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDkiIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMi41IDE1LjcxNkg4LjM4TDUuMjkzIDMuNTg1Yy0uMTQ3LS41NTgtLjQ1OC0xLjA1Mi0uOTE2LTEuMjg0QzMuMjMzIDEuNzE2IDEuOTczIDEuMjUuNiAxLjAxN1YuNTVoNi42MzZjLjkxNiAwIDEuNjAzLjcwMSAxLjcxNyAxLjUxNmwxLjYwMyA4Ljc1MUwxNC42NzMuNTVoNC4wMDVMMTIuNSAxNS43MTZ6bTguNDY4IDBoLTMuODlMMjAuMjguNTVoMy44OWwtMy4yMDMgMTUuMTY2em04LjIzNy0xMC45NjVjLjExNS0uODE2LjgwMS0xLjI4NCAxLjYwMy0xLjI4NCAxLjI2LS4xMTcgMi42MzEuMTE4IDMuNzc2LjdMMzUuMjcuOTAyQTkuNjAyIDkuNjAyIDAgMDAzMS43MjQuMkMyNy45NDguMiAyNS4yIDIuMyAyNS4yIDUuMjE2YzAgMi4yMTkgMS45NDYgMy4zODMgMy4zMiA0LjA4NSAxLjQ4Ni43IDIuMDU5IDEuMTY2IDEuOTQ0IDEuODY2IDAgMS4wNS0xLjE0NCAxLjUxNy0yLjI4NyAxLjUxNy0xLjM3NCAwLTIuNzQ4LS4zNS00LjAwNS0uOTM1bC0uNjg3IDMuMjY4YzEuMzc0LjU4MiAyLjg2LjgxNyA0LjIzNC44MTcgNC4yMzQuMTE1IDYuODY1LTEuOTg0IDYuODY1LTUuMTM0IDAtMy45NjctNS4zNzktNC4yLTUuMzc5LTUuOTQ5ek00OC4yIDE1LjcxNkw0NS4xMS41NWgtMy4zMThjLS42ODcgMC0xLjM3My40NjctMS42MDIgMS4xNjZsLTUuNzIgMTRoNC4wMDRsLjgtMi4yMTZoNC45MmwuNDU5IDIuMjE2SDQ4LjJ6TTQyLjM2NSA0LjYzNGwxLjE0MyA1LjcxNmgtMy4yMDRsMi4wNi01LjcxNnoiIGZpbGw9IiMxNzJCODUiLz48L3N2Zz4=")' }}></div>
                        <div className='w-16 h-11 bg-center bg-no-repeat' style={{ backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDQiIGhlaWdodD0iMTgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zNi40MjIgMS4ySDI2LjRjLjU0IDMuNTU4IDMuNzcyIDYuODg3IDcuMzI4IDYuODg3aDcuOTc0Yy4xMDctLjM0NC4xMDctLjgwNC4xMDctMS4xNDggMC0zLjIxNC0yLjM3LTUuNzM5LTUuMzg3LTUuNzM5eiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzE1NDBfMTM3MSkiLz48cGF0aCBkPSJNMjcuNSAxNy4yODJWOC42OGgxNC4wMThjLS40MTYgMS40OTgtMS40MjEgMi43NTItMi43MiAzLjQ0MWw0LjMxMyA1LjE2aC01LjcxbC0zLjE2OS00LjU4N0gzMi4yOHY0LjU4OEgyNy41eiIgZmlsbD0iIzREQjQ1RiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjAuNDc0IDEuMnYxNi4wN2g1LjA0NlYxLjJoLTUuMDQ2ek0wIDE3LjI3VjEuMmg0Ljg0OXMxLjQgMCAyLjE1NSAyLjI5NmMxLjk0IDYuMDgzIDIuMTU1IDYuODg3IDIuMTU1IDYuODg3cy40MzEtMS40OTMgMi4xNTUtNi44ODdDMTIuMDcgMS4yIDEzLjQ3IDEuMiAxMy40NyAxLjJoNC44NXYxNi4wN2gtNC44NVY4LjY2aC0uNTM4bC0yLjY5NCA4LjYxSDguMDgyTDUuMzg4IDguNjZoLS41Mzl2OC42MUgweiIgZmlsbD0iIzREQjQ1RiIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xNTQwXzEzNzEiIHgxPSIyNi4zNzMiIHkxPSI0LjY0MyIgeDI9IjQxLjgwOSIgeTI9IjQuNjQzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzAwQjRFNiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzA4OENDQiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg==")' }}></div>
                        <div className='w-16 h-11 bg-center bg-no-repeat' style={{ backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgNi4zNjFsMy41NjEgNi4zMjd2My44NThMLjAwNCAyMi44NiAwIDYuMzYxeiIgZmlsbD0iIzVCNTdBMiIvPjxwYXRoIGQ9Ik0xMy42NzQgMTAuMzg2bDMuMzM4LTIuMDMzIDYuODMtLjAwNi0xMC4xNjggNi4xOXYtNC4xNTF6IiBmaWxsPSIjRDkwNzUxIi8+PHBhdGggZD0iTTEzLjY1NiA2LjMyNGwuMDE4IDguMzc2LTMuNTctMi4xOFYwbDMuNTUyIDYuMzI0eiIgZmlsbD0iI0ZBQjcxOCIvPjxwYXRoIGQ9Ik0yMy44NDEgOC4zNDdsLTYuODMuMDA2LTMuMzU1LTIuMDI5TDEwLjEwNSAwIDIzLjg0IDguMzQ3eiIgZmlsbD0iI0VENkYyNiIvPjxwYXRoIGQ9Ik0xMy42NzQgMjIuODk1di00LjA2M2wtMy41Ny0yLjEzOS4wMDMgMTIuNTMzIDMuNTY3LTYuMzN6IiBmaWxsPSIjNjNCMjJGIi8+PHBhdGggZD0iTTE3LjAwMyAyMC44ODFMMy41NjEgMTIuNjg4IDAgNi4zNmwyMy44MjcgMTQuNTEyLTYuODI0LjAwOHoiIGZpbGw9IiMxNDg3QzkiLz48cGF0aCBkPSJNMTAuMTA3IDI5LjIyNmwzLjU2Ny02LjMzIDMuMzI5LTIuMDE1IDYuODIzLS4wMDgtMTMuNzIgOC4zNTN6IiBmaWxsPSIjMDE3RjM2Ii8+PHBhdGggZD0iTS4wMDQgMjIuODZsMTAuMTMtNi4xNjYtMy40MDYtMi4wNzctMy4xNjcgMS45M0wuMDA0IDIyLjg2eiIgZmlsbD0iIzk4NDk5NSIvPjwvc3ZnPg==")' }}></div>
                        <div className='w-16 h-11 bg-center bg-no-repeat' style={{ backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIyLjAwMiAxOC41MjVjLjQ3Ni4yMS42OC45MDkuNjggMS4yNTguMDY3LjU2LS4wNjkuODQtLjI3Mi44NC0uMjA0IDAtLjQ3Ni0uMjEtLjc0Ny0uNy0uMjcyLS40OS0uNDA4LS45NzgtLjI3Mi0xLjI1OC4yMDQtLjE0LjQwOC0uMjEuNjExLS4xNHpNMTkuMjE4IDIwLjY5MmMuMjcyIDAgLjYxMS4xNC45NS40Mi41NDQuNDg5Ljc0OCAxLjA0OC40NzYgMS40NjgtLjEzNi4yMS0uNDc1LjM1LS43NDcuMzUtLjM0IDAtLjY3OS0uMTQtLjg4My0uMzUtLjU0My0uNDktLjY3OS0xLjE4OS0uMzQtMS42MDguMDY5LS4xNC4yNzItLjI4LjU0NC0uMjh6IiBmaWxsPSIjRjI4QTFBIi8+PHBhdGggZD0iTTEyLjc2NyAyNi4yMTVDNS43MDQgMjYuMjE1IDAgMjAuMzQzIDAgMTMuMTQyIDAgNS45NDIgNS43MDQgMCAxMi43NjcgMGM3LjA2MiAwIDEyLjc2NyA1Ljg3MiAxMi43NjcgMTMuMTQyIDAgMi40NDctLjY4IDQuNzU0LTEuNzY2IDYuNzExLS4wNjguMDctLjEzNi4wNy0uMTM2LS4wNy0uNDc1LTMuMjE1LTIuMzc3LTQuOTYzLTUuMDkzLTUuNTIyLS4yNzItLjA3LS4yNzItLjIxLjA2OC0uMjEuODgzLS4wNyAyLjAzNy0uMDcgMi43MTYuMDcuMDY4LS4zNS4wNjgtLjcuMDY4LS45NzkgMC00Ljc1My0zLjgwMy04LjY2OC04LjQyLTguNjY4LTQuNjE4IDAtOC40MjEgMy45MTUtOC40MjEgOC42NjggMCA0Ljc1NCAzLjgwMyA4LjY2OSA4LjQyIDguNjY5aC40MDhjLS4xMzYtLjc3LS4yMDQtMS41MzgtLjEzNi0yLjM3NyAwLS41Ni4xMzYtLjYzLjM0LS4yMSAxLjE1NCAyLjA5NyAyLjg1MiAzLjkxNSA2LjExMSA0LjY4NCAyLjY0OS42MjkgNS4yOTcgMS4zMjggOC4yMTcgNS4wMzMuMjcyLjM1LS4xMzUuNy0uNDA3LjQyLTIuOTItMi42NTctNS41NjktMy41NjYtOC4wMTMtMy41NjYtMy4wNTYuMDctNC44OS40Mi02LjcyMy40MnoiIGZpbGw9IiNGMjhBMUEiLz48L3N2Zz4=")' }}></div>
                        <div className='w-16 h-11 bg-center bg-no-repeat' style={{ backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTgiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE1NDBfNDU4OCkiPjxjaXJjbGUgY3g9IjExLjk2NiIgY3k9IjExLjg0MyIgZmlsbD0iI0ZDM0YxRCIgcj0iMTEuODQzIi8+PHBhdGggZD0iTTE2LjIxNyAxOC43NTJoLTIuNDE0VjYuODAyaC0xLjA3OGMtMS45NzQgMC0zLjAwNi45ODctMy4wMDYgMi40NiAwIDEuNjcuNzEzIDIuNDQ1IDIuMTg2IDMuNDMybDEuMjE1LjgyLTMuNDkyIDUuMjM4SDcuMDNsMy4xNDMtNC42NzdDOC4zNjcgMTIuNzg1IDcuMzUgMTEuNTI1IDcuMzUgOS40YzAtMi42NTcgMS44NTMtNC40NjQgNS4zNi00LjQ2NGgzLjQ5MnYxMy44MTdoLjAxNXoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMzEuMDM0IDEzLjI1OHY1LjQ5NEgyOS4yN1Y0LjcxOWg0LjQ3M2MxLjMwNCAwIDIuMzI5LjM5MiAzLjA3NCAxLjE3Ni43NDUuNzc3IDEuMTE4IDEuODE1IDEuMTE4IDMuMTEzIDAgMS4zNDktLjM1NyAyLjM5LTEuMDcgMy4xMjItLjcwNy43MjYtMS43MDYgMS4xMDItMi45OTcgMS4xMjhoLTIuODM0em0wLTEuNTEzaDIuNzA5Yy43ODMgMCAxLjM4NC0uMjM1IDEuODAyLS43MDQuNDE3LS40NjkuNjI2LTEuMTQuNjI2LTIuMDE0IDAtLjg0Mi0uMjE1LTEuNTE2LS42NDUtMi4wMjQtLjQzLS41MDgtMS4wMjItLjc2MS0xLjc3NC0uNzYxaC0yLjcxOHY1LjUwM3pNNDUuNDM0IDE1LjA5aC00Ljc0MmwtMS4wOSAzLjY2MmgtMS44MTFsNC41Mi0xNC4wMzNoMS41MTNsNC41MyAxNC4wMzNoLTEuODEybC0xLjEwOC0zLjY2M3ptLTQuMjgtMS41MjRoMy44MjZsLTEuOTE3LTYuMzgtMS45MDkgNi4zOHpNNTMuMDA5IDExLjc2NGwyLjg3Mi03LjA0NWgxLjk5NWwtMy45OSA4Ljh2NS4yMzNoLTEuNzY0di01LjIzNGwtMy45OS04LjhoMi4wMDVsMi44NzIgNy4wNDZ6IiBmaWxsPSIjMTIxMjEyIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iY2xpcDBfMTU0MF80NTg4Ij48cGF0aCBmaWxsPSIjZmZmIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSguMTIzKSIgZD0iTTAgMGg1Ny43NTN2MjMuNjg2SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+")' }}></div>
                        <div className='w-16 h-11 bg-center bg-no-repeat' style={{ backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDkiIGhlaWdodD0iMjEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04Ljg5OCAyLjY4NmMtLjU3LjcwNC0xLjQ4NCAxLjI2LTIuMzk3IDEuMTgtLjExNC0uOTUyLjMzMy0xLjk2My44NTYtMi41ODdDNy45MjguNTU1IDguOTI3LjAzOSA5LjczNiAwYy4wOTUuOTkxLS4yNzYgMS45NjMtLjgzOCAyLjY4NnptLjgyOCAxLjM2OGMtLjgwNS0uMDQ4LTEuNTM5LjI1Mi0yLjEzMi40OTUtLjM4MS4xNTYtLjcwNC4yODgtLjk1LjI4OC0uMjc2IDAtLjYxMy0uMTM5LS45OS0uMjk1LS40OTUtLjIwNS0xLjA2MS0uNDQtMS42NTUtLjQyOC0xLjM2LjAyLTIuNjI1LjgyMi0zLjMyIDIuMTAxLTEuNDI3IDIuNTU4LS4zNyA2LjM0NCAxLjAwOSA4LjQyNi42NzUgMS4wMyAxLjQ4NCAyLjE2IDIuNTUgMi4xMjEuNDY4LS4wMTguODA1LS4xNjcgMS4xNTQtLjMyMi40MDItLjE3Ny44MTktLjM2MiAxLjQ3LS4zNjIuNjMgMCAxLjAyOS4xOCAxLjQxMi4zNTIuMzY0LjE2NS43MTQuMzIyIDEuMjMzLjMxMiAxLjEwNC0uMDIgMS43OTgtMS4wMyAyLjQ3My0yLjA2MWE5LjI0MyA5LjI0MyAwIDAwMS4wOTgtMi4zNWwuMDA2LS4wMmEuMjM3LjIzNyAwIDAwLS4wMjYtLjAxM2MtLjI0NC0uMTE2LTIuMTA2LTEuMDA0LTIuMTI0LTMuMzg3LS4wMTgtMiAxLjQ3Ny0zLjAxMiAxLjcxMy0zLjE3MmEuNzYyLjc2MiAwIDAwLjAyOC0uMDJjLS45NTEtMS40NjYtMi40MzUtMS42MjUtMi45NS0xLjY2NXptNy42MzkgMTIuNThWMS4xOGg1LjU2NWMyLjg3MyAwIDQuODggMi4wNjEgNC44OCA1LjA3NSAwIDMuMDEzLTIuMDQ1IDUuMDk1LTQuOTU2IDUuMDk1aC0zLjE4N3Y1LjI4M2gtMi4zMDJ6bTIuMzAyLTEzLjQzMmgyLjY1NGMxLjk5NyAwIDMuMTM5IDEuMTEgMy4xMzkgMy4wNjNzLTEuMTQyIDMuMDczLTMuMTQ5IDMuMDczaC0yLjY0NFYzLjIwMnpNMzUuNDEgMTQuNzhjLS42MDggMS4yMDktMS45NSAxLjk3Mi0zLjM5NSAxLjk3Mi0yLjE0IDAtMy42MzQtMS4zMjgtMy42MzQtMy4zMyAwLTEuOTgzIDEuNDQ1LTMuMTIzIDQuMTE5LTMuMjkxbDIuODczLS4xNzlWOS4xYzAtMS4yNi0uNzktMS45NDMtMi4xOTgtMS45NDMtMS4xNiAwLTIuMDA3LjYyNC0yLjE3OCAxLjU3NmgtMi4wNzRjLjA2Ni0yLjAwMiAxLjg3NC0zLjQ2IDQuMzE5LTMuNDYgMi42MzUgMCA0LjM0NyAxLjQzOCA0LjM0NyAzLjY2OHY3LjY5MmgtMi4xM1YxNC43OGgtLjA0OXptLTIuNzc3LjEzOWMtMS4yMjggMC0yLjAwOC0uNjE1LTIuMDA4LTEuNTU3IDAtLjk3MS43NTItMS41MzYgMi4xODgtMS42MjZsMi41Ni0uMTY4di44NzJjMCAxLjQ0OC0xLjE4IDIuNDc5LTIuNzQgMi40Nzl6bTEyLjAyNCAyLjMxOWMtLjkyMyAyLjcwNi0xLjk3OSAzLjU5OC00LjIyNCAzLjU5OC0uMTcxIDAtLjc0Mi0uMDItLjg3NS0uMDZ2LTEuODUzYy4xNDMuMDIuNDk1LjA0LjY3NS4wNCAxLjAxOCAwIDEuNTg5LS40NDYgMS45NDEtMS42MDZsLjIxLS42ODQtMy45MDEtMTEuMjVoMi40MDdsMi43MSA5LjEyOWguMDQ4bDIuNzEyLTkuMTNoMi4zNGwtNC4wNDMgMTEuODE2eiIgZmlsbD0iIzAwMCIvPjwvc3ZnPg==")' }}></div>
                    </div>
                    <div className="w-full flex flex-row gap-1 pt-3">
                        <button onClick={() => {
                            setModalShow(false)
                            setModalCount(1)
                        }} className="text-white bg-red-500 hover:bg-red-400 rounded-md shadow-xl w-full p-3">Отмена</button>
                        <button className="text-white bg-green-500 hover:bg-green-400 rounded-md shadow-xl w-full p-3" onClick={() => {
                            window.location.replace('https://gmkbot.ru/gpr?a=' + (items[index].price * modalCount))
                        }}>Купить за {items[index].price * modalCount}</button>
                    </div>
                    </div>
                </div>
            </>
            }
        </>
    )
}