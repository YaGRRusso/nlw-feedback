import { feedbackOptions } from ".."
import { FeedbackType } from '..'
import { CloseButton } from "../../CloseButton"

type ThisProps = {
    setFeedbackType: (key: FeedbackType) => void
}

export const FeedbackTypeStep = ({ setFeedbackType }: ThisProps) => {
    return (
        <>
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>
                <CloseButton />
            </header>
            <div className="flex py-8 gap-2 w-full">
                {Object.entries(feedbackOptions).map(([key, value]) => (
                    <button
                        key={key}
                        className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center justify-center gap-1 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 outline-none"
                        onClick={() => { setFeedbackType(key as FeedbackType) }}
                        type='button'
                    >
                        <img src={value.img} alt={value.title} />
                        <span>{value.title}</span>
                    </button>
                ))}
            </div>
        </>
    )
}