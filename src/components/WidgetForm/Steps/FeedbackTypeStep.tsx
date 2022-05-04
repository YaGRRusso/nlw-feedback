import { feedbackOptions } from ".."
import { FeedbackType } from '..'

type ThisProps = {
    onclick: (key: FeedbackType) => void
}

export const FeedbackTypeStep = ({ onclick }: ThisProps) => {
    return (
        <div className="flex py-8 gap-2 w-full">
            {Object.entries(feedbackOptions).map(([key, value]) => (
                <button
                    key={key}
                    className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center justify-center gap-1 border-2 border-transparent hover:border-violet-500 focus:border-violet-500 outline-none"
                    onClick={() => { onclick(key as FeedbackType) }}
                    type='button'
                >
                    <img src={value.img} alt={value.title} />
                    <span>{value.title}</span>
                </button>
            ))}
        </div>
    )
}