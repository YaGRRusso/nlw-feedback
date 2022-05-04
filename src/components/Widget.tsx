import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'

export const Widget = () => {
    return (
        <Popover className='fixed bottom-5 right-5'>

            <Popover.Panel>Hello World</Popover.Panel>

            <Popover.Button className='bg-violet-500 rounded-full px-3 h-12 text-white flex items-center group'>
                <ChatTeardropDots className='w-6 h-6' />
                <span className='max-w-0 group-hover:max-w-xs overflow-hidden transition-all duration-300 ease-linear'>
                    <span className='pl-2'></span>
                    Feedback
                </span>
            </Popover.Button>

        </Popover>
    )
}