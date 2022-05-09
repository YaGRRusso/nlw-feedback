import { ArrowLeft } from "phosphor-react"
import { FormEvent, useState } from "react"
import { feedbackOptions, FeedbackType } from ".."
import { api } from "../../../lib/api"
import { CloseButton } from "../../CloseButton"
import { Loading } from "../../Loading"
import { ScreenshotButton } from "../ScreenshotButton"

type ThisProps = {
    type: FeedbackType,
    handleRestartFeed: () => void,
    onFeedbackSent: () => void
}

export const FeedbackContentStep = ({ type, handleRestartFeed, onFeedbackSent }: ThisProps) => {
    const feedbackTypeInfo = feedbackOptions[type];
    const [screenshoot, setScreenshot] = useState<string | null>(null);
    const [feedbackComment, setFeedbackComment] = useState('');
    const [isSendingFeedback, setIsSendingFeedback] = useState(false)

    const handleSubmitFeedback = async (ev: FormEvent) => {
        ev.preventDefault()

        setIsSendingFeedback(true)
        await api.post('/feedbacks', {
            feedbackType: type,
            comment: feedbackComment,
            screenshot: screenshoot
        })
        onFeedbackSent()
    }

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
            <form className="my-4 w-full" onSubmit={ev => handleSubmitFeedback(ev)}>
                <textarea
                    className="min-w-[300px] w-full min-h-[112px] text-sm placeholder:text-zinc-400 text-zinc-100 border border-zinc-600 bg-transparent rounded-md p-2 focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar-track-transparent scrollbar-thin scrollbar-thumb-zinc-700"
                    placeholder="Conte com detalhes o que está acontecendo..."
                    value={feedbackComment}
                    onChange={(ev) => { setFeedbackComment(ev.target.value) }}
                />
                <footer className="flex gap-2 mt-2">
                    <ScreenshotButton
                        screenshotImg={screenshoot}
                        onScreenshotTook={setScreenshot}
                    />
                    <button
                        type="submit"
                        disabled={feedbackComment.length === 0 || isSendingFeedback}
                        className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
                    >
                        {isSendingFeedback ? <Loading /> : 'Enviar feedback'}
                    </button>
                </footer>
            </form>
        </>
    )
}