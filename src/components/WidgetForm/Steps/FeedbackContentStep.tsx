import { ArrowLeft } from "phosphor-react"
import { feedbackOptions, FeedbackType } from ".."
import { CloseButton } from "../../CloseButton"
import { ScreenshotButton } from "../ScreenshotButton"

type ThisProps = {
    type: FeedbackType,
    handleRestartFeed: () => void
}

export const FeedbackContentStep = ({ type, handleRestartFeed }: ThisProps) => {
    const feedbackTypeInfo = feedbackOptions[type];

    return (
        <>
            <header>
                <button type="button" onClick={() => { handleRestartFeed() }} className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100" title="Voltar">
                    <ArrowLeft weight="bold" className="w-4 h-4" />
                </button>
                <span className="text-xl leading-6 flex items-center gap-2">
                    <img src={feedbackTypeInfo.img} alt={feedbackTypeInfo.title} className="w-6 h-6" />
                    {feedbackTypeInfo.title}
                </span>
                <CloseButton />
            </header>
            <form className="my-4 w-full">
                <textarea
                    className="min-w-[300px] w-full min-h-[112px] text-sm placeholder:text-zinc-400 text-zinc-100 border border-zinc-600 bg-transparent rounded-md p-2 focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar-track-transparent scrollbar-thin scrollbar-thumb-zinc-700"
                    placeholder="Conte com detalhes o que está acontecendo..."
                />
                <footer className="flex gap-2 mt-2">
                    <ScreenshotButton />
                    <button
                        type="submit"
                        className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
                    >
                        Enviar feedback
                    </button>
                </footer>
            </form>
        </>
    )
}