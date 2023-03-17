function StatusItem({ text, isAllowed }: { text: string; isAllowed: boolean }) {
  return (
    <div className="flex items-center">
      <div
        className={`w-5 h-5 ml-3 mr-7 rounded-full border-2 border-violet-300 ${
          isAllowed ? "bg-green-600" : "bg-red-600"
        }`}
      ></div>
      <p className="font-Roboto text-lg">{text}</p>
    </div>
  );
}

export default StatusItem;
