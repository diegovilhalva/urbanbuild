

const PreTitle = ({text,center}) => {
  return (
    <div className={`flex items-center gap-3 mb-4 ${center && "justify-center"}`}>
        <div className="w-2 h-2 bg-accent"></div>
        <p className="font-primary tracking-[3.2px] uppercase">{text}</p>
        <div className="w-2 h-2 bg-accent"></div>
    </div>
  )
}

export default PreTitle