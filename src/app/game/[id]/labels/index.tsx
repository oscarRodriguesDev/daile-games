
interface LabelProps {
    name: string;
}
export function Label({ name }: LabelProps) {
    return (
        <div
            className=" flex-grow sm:flex-grow-0 bg-slate-200 px-3 py-1 text-black text-center  rounded-lg hover:font-bold duration-200"
        >
            {name}
        </div>
    )
}