import { Check } from "@phosphor-icons/react";
import * as CheckRadix from "@radix-ui/react-checkbox";

function Checkbox({ text }: { text: string }) {
  return (
    <div className="flex items-center">
      <CheckRadix.Root
        className="flex h-9 w-9 items-center justify-center rounded-md bg-white border-2 border-violet-300 mr-6 overflow-hidden"
        defaultChecked
      >
        {/* id="c1"*/}

        <CheckRadix.Indicator className="text-white font-bold text-lg bg-green-300 w-full h-full flex items-center justify-center">
          <Check size={30} weight="bold" />
        </CheckRadix.Indicator>
      </CheckRadix.Root>
      <label className="font-Roboto text-lg">{text}</label>
      {/* htmlFor="c1 */}
    </div>
  );
}

export default Checkbox;
