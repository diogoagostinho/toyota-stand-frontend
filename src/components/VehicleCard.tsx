import { Card, CardBody, Link } from "@nextui-org/react";
import LoadingSkeleton from "./LoadingSkeleton";
import { useState } from "react";

function VehicleCard(props: {
  image: string;
  fuel: string[];
  name: string;
  description: string;
  price: string;
  horsepower: number;
  link: string;
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
    <Link href={props.link}>
      <Card
        shadow="md"
        className="border-none bg-background/60 dark:bg-default-100/50 w-[300px] h-[150px] md:w-[400px] md:h-[250px] "
        onLoad={handleCardLoad}
      >
        <CardBody className={isLoaded ? "p-0 flex-row h-full" : "hidden"}>
          <img className="object-cover w-1/2 md:w-3/5" src={props.image} />
          <div className="w-1/2 md:w-2/5 flex flex-col justify-between p-4">
            <div className="flex flex-col">
              <p className="font-normal pb-1 text-xs md:text-sm">{splitFuel}</p>
              <p className="font-black text-md md:text-xl">{props.name}</p>
              <p className="font-semibold text-xs md:text-lg">
                {props.description}
              </p>
            </div>
            <div className="flex flex-col pt-2 md:pt-4">
              <p className="font-semibold text-xs">Starting at:</p>
              <div className="flex justify-between">
                <p className="text-xs md:text-sm">${props.price}</p>
                <p className="hidden md:text-sm md:flex">
                  {props.horsepower.toString()}hp
                </p>
              </div>
            </div>
          </div>
        </CardBody>
        <LoadingSkeleton loaded={isLoaded} />
      </Card>
    </Link>
  );
}

export default VehicleCard;
