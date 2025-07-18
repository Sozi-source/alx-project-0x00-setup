import Card from "@/components/Card"
import Button from "@/components/Button";
import { ButtonProps } from "@/interfaces";

const landingPage: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />


      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Small Buttons</h2>
        <div className="flex gap-2">
          <Button title="Small Rounded-sm" className="text-sm rounded-sm" />
          <Button title="Small Rounded-md" className="text-sm rounded-md" />
          <Button title="Small Rounded-full" className="text-sm rounded-full" />
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Medium Buttons</h2>
        <div className="flex gap-2">
          <Button title="Medium Rounded-sm" className="text-base rounded-sm" />
          <Button title="Medium Rounded-md" className="text-base rounded-md" />
          <Button title="Medium Rounded-full" className="text-base rounded-full" />
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Large Buttons</h2>
        <div className="flex gap-2">
          <Button title="Large Rounded-sm" className="text-lg rounded-sm px-6 py-3" />
          <Button title="Large Rounded-md" className="text-lg rounded-md px-6 py-3" />
          <Button title="Large Rounded-full" className="text-lg rounded-full px-6 py-3" />
        </div>
      </div>
    </div>
  );
};

export default landingPage;

