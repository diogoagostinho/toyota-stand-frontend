import { Card, CardBody, Button, Link } from "@nextui-org/react";
import { useState } from "react";
import LoadingSkeleton from "./LoadingSkeleton";

function VehicleCardVertical(props: {
  image: string;
  fuel: string[];
  name: string;
  description: string;
  price: string;
  horsepower: string;
  link: string;
  nameId: string;
}) {
  let splitFuel = props.fuel.toString();

  if (props.fuel.length > 1) {
    splitFuel = splitFuel.split(",").join(" | ");
  }

  const [isLoaded, setIsLoaded] = useState(false);

  const handleCardLoad = () => {
    setIsLoaded(true);
  };

  return (
    <Card
      shadow="md"
      className=" border-1 border-foreground-100  bg-background/60 dark:bg-default-100/50 w-[350px] h-[300px]"
      onLoad={handleCardLoad}
    >
      <CardBody
        className={
          isLoaded ? "p-4 flex-col h-full w-full justify-center" : "hidden"
        }
      >
        <div className="flex justify-center items-center pt-8">
          <img
            className="w-[250px] align-middle"
            src={`https://raw.githubusercontent.com/diogoagostinho/toyota-stand/main/client/public/models/${props.nameId}.png`}
          />
        </div>
        <div className="flex justify-between items-end pb-2 px-1">
          <div className="flex flex-col text-left">
            <p className="font-normal pb-1 text-xs">{splitFuel}</p>
            <p className="font-black text-lg">{props.name}</p>
          </div>
          <div className="flex flex-col text-right">
            <p className="font-semibold text-xs">Starting at:</p>
            <p>${props.price}</p>
          </div>
        </div>
        <Link
          className="flex flex-col h-full w-full justify-center"
          href={props.link}
        >
          <Button className="bg-red-500 text-white w-full" radius="sm">
            See More
          </Button>
        </Link>
      </CardBody>
      <LoadingSkeleton loaded={isLoaded} />
    </Card>
  );
}

export default VehicleCardVertical;
