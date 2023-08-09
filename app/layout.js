'use client'
import Link from 'next/link'
import './globals.css'
import Image from 'next/image'

export const metadata = {
  title: 'GMK — раздача цифровых ключей Steam',
  description: 'Магазин ключей Steam в чат-боте. Мы создали сервис, где купить игру можно за пару кликов. Мы вручную отбираем в кейсы игры с положительными отзывами и оставляем только интересные. Наши кейсы гарантировано окупаются. Мы вернем деньги, если игра окажется дешевле, чем написано в описании товара. Мы ценим ваше доверие и время. Переходите в чат-бот и попробуйте наш сервис!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className='bg-slate-950'>
          <div className='top-0 absolute w-full bg-slate-900 shadow-xl flex justify-between items-center pl-1 pr-1 md:pl-10 md:pr-10'>
            <Link className='p-5 flex items-center'
              href={'/'}
            >
              <Image
                loader={() => "https://sun9-62.userapi.com/impg/Eha2ZpOEppOL1o8NbogwMtEy2b112xLDLWwiAw/lFLmIXwAvjU.jpg?size=2438x2438&quality=95&sign=e28cf586f26723abcc8ea1d09bd6cd9a&type=album"}
                src="https://sun9-62.userapi.com/impg/Eha2ZpOEppOL1o8NbogwMtEy2b112xLDLWwiAw/lFLmIXwAvjU.jpg?size=2438x2438&quality=95&sign=e28cf586f26723abcc8ea1d09bd6cd9a&type=album"
                width={50}
                height={50}
                alt="Logo"
                className='rounded-xl'
              />
              <div className='text-white text-5xl pl-3'>
                GMK
              </div>
            </Link>
            <div>
              <Link className='text-white text-md' href={'/contact'}>Контакты</Link>
            </div>
          </div>
          <div className='mt-24 pl-1 pr-1 md:pl-10 md:pr-10'>
            {children}
          </div>
      </body>
    </html>
  )
}
