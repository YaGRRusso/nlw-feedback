import { CloseButton } from "../../CloseButton"

import SuccessImg from '../../../assets/success.svg'

type ThisProps = {
    handleRestartFeed: () => void
}

export const FeedbackSuccessStep = ({ handleRestartFeed }: ThisProps) => {
    return (
        <>
            <header>
                <CloseButton />
            </header>
            <div className="flex flex-col items-center justify-center py-10 w-[304px]">
                <img src={SuccessImg} alt="sucesso" />
                <span className="text-xl mt-2">Agradecemos o feedback!</span>
                <button
                    onClick={() => handleRestartFeed()}
                    className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none"
                >
                    Quero enviar outro
                </button>
            </div>
        </>
    )
}