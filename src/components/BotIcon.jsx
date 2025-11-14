export default function BotIcon({h,w, error = false}) {
    return (
        <div className="">
          <svg width={w} height={h} viewBox="0 0 60 60" className="text-[#cfd8dc]">
            {/* Bot head */}
            <rect x="10" y="20" width="40" height="30" rx="8" fill="currentColor"/>

            {/* Antennas */}
            <circle cx="18" cy="15" r="3" fill="#60a5fa"/>
            <line x1="18" y1="18" x2="18" y2="20" stroke="currentColor" strokeWidth="2"/>
            <circle cx="42" cy="15" r="3" fill="#60a5fa"/>
            <line x1="42" y1="18" x2="42" y2="20" stroke="currentColor" strokeWidth="2"/>

            {/* Eyes */}
            <circle cx="22" cy="32" r="4" fill="#60a5fa"/>
            <circle cx="38" cy="32" r="4" fill="#60a5fa"/>

            {
              error ? (
                <path d="M 20,42 Q 30,36 40,42" stroke="#94a3b8" strokeWidth="3" fill="none" strokeLinecap="round"/>
              ) : (
                <path d="M 20,40 Q 30,46 40,40" stroke="#60a5fa" strokeWidth="3" fill="none" strokeLinecap="round"/>
              )
            }
            
          </svg>
        </div>

        
    )
}