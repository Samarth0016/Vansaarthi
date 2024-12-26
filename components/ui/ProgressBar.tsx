interface ProgressItem {
    label: string;
    value: number | string;
    progress: number; // Progress should be a percentage (0-100)
}

interface ProgressBarProps {
    title?: string; // Optional title for the progress bar section
    items: ProgressItem[]; // Array of progress items
  }

const ProgressBar = ({ title, items }:ProgressBarProps) => (
    <div className="w-full flex items-center justify-center">
        <div className="p-2 md:p-4 w-full max-w-[600px]">
            {items.map((item, i) => (
              <div key={i} className="mb-4 md:mb-6">
                <div className="flex justify-between mb-2 text-sm md:text-base">
                  <span>{item.label}</span>
                  <span>{item.value}+</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 md:h-3">
                  <div className="bg-[#3BDE3B] h-2 md:h-3 rounded-full" style={{width: `${item.progress}%`}}/>
                </div>
              </div>
            ))}
        </div>
    </div>
);

export default ProgressBar;