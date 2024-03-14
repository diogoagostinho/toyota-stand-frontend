import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Button, Image, Tab, Tabs } from "@nextui-org/react";

function VehiclePage() {
  const carRef = useRef(0);
  const carId = location.pathname.split("/")[2].toString();
  const [car, setCar] = useState([]);

  useEffect(() => {
    console.log(carId);

    const fetchCar = async () => {
      try {
        const res = await axios.get(
          `https://plum-lemur-veil.cyclic.app/vehicles/${carId}`
        );
        if (res.data == "") {
          carRef.current = 0;
        } else {
          setCar(res.data);
          carRef.current = 1;
          document.title = "Toyota " + res.data[0].name;
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchCar();
  }, [carId]);

  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {car.map((item: any) => (
        <div key={item.nameId}>
          <div
            //@ts-expect-error --image-url
            style={{ "--image-url": `url(${item.bannerImage})` }}
            className={"w-full bg-center bg-cover bg-[image:var(--image-url)]"}
          >
            <div className="flex justify-between items-end w-full h-full pt-64 pb-6 sm:pb-10 px-4">
              <div className="text-left">
                <div className="container px-4 mx-auto ">
                  <div className="max-w-4xl text-white mx-auto  sm:text-left drop-shadow-2xl">
                    <h2 className="text-2xl md:text-4xl pb-1 sm:pb-3 font-bold drop-shadow-xl leading-10 tracking-tight sm:leading-none">
                      Toyota {item.name}
                    </h2>
                    <p className="drop-shadow-xl text-md md:text-xl">
                      {item.description}
                    </p>
                    <p className="drop-shadow-xl text-sm md:text-md">
                      Starting at ${item.price} / {item.horsepower}hp
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-foreground-100 rounded-xl m-5 sm:m-10 px-10 sm:px-20 py-10 sm:py-20 text-center flex flex-col justify-center items-center gap-4">
            <img
              src={`https://raw.githubusercontent.com/diogoagostinho/toyota-stand/main/client/public/badges/${item.nameId}.png`}
              className="max-w-32 sm:max-w-60 drop-shadow-lg"
            />
            <h1 className="text-xl sm:text-4xl font-bold">{item.bigDesc}</h1>
            <p className="text-lg sm:text-xl font-normal w-full sm:w-1/2">
              {item.smallDesc}
            </p>
            <img
              className="w-[300px] sm:w-[500px] pt-5 sm:pt-10"
              src={`https://raw.githubusercontent.com/diogoagostinho/toyota-stand/main/client/public/models/${item.nameId}.png`}
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center gap-10 sm:gap-14 pb-10 lg:px-0 px-10">
            <div className="flex flex-col-reverse sm:flex-row justify-center gap-5 md:gap-10">
              <img
                src={item.ctaImage1}
                className="rounded-3xl w-full sm:w-44 md:w-64 h-44 md:h-64 object-cover shadow-md"
              />
              <div>
                <h2 className="text-center sm:text-left font-bold text-lg md:text-2xl pt-2 md:pt-4">
                  Discover what makes the {item.name} stand out.
                </h2>
                <p className="font-normal text-md md:text-lg pt-2 md:pt-4 max-w-xl">
                  {item.name}'s available performance gives you the confidence
                  to venture farther, no matter the forecast. {item.name}'s
                  robust engine is also ready to deliver a thrilling drive,
                  every drive.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-10">
              <div>
                <h2 className="text-center sm:text-left font-bold text-lg md:text-2xl pt-2 md:pt-4">
                  Pay all the attention to detail.
                </h2>
                <p className="font-normal text-md md:text-lg pt-2 md:pt-4 max-w-xl">
                  {item.name}'s sleek interior features an available color
                  Head-Up Display to help you stay focused on the road ahead.
                  And the available touchscreen floating display allows you to
                  connect with your compatible mobile device to access your
                  favorite apps.
                </p>
              </div>
              <img
                src={item.ctaImage2}
                className="rounded-3xl w-full sm:w-44 md:w-64 h-44 md:h-64 object-cover shadow-md"
              />
            </div>
          </div>
          <div className="py-8 mb-10 bg-foreground-100 px-10 lg:px-0">
            <h1 className="font-bold text-xl md:text-3xl text-center pb-4">
              Explore {item.name}'s the design
            </h1>
            <div className="flex flex-wrap flex-col gap-4 justify-center items-center">
              <Tabs variant="underlined">
                <Tab
                  className="text-md font-semibold"
                  key="exterior"
                  title="Exterior"
                >
                  <Image width={650} src={item.exteriorImage} />
                </Tab>
                <Tab
                  className="text-md font-semibold"
                  key="interior"
                  title="Interior"
                >
                  <Image width={650} src={item.interiorImage} />
                </Tab>
              </Tabs>
            </div>
          </div>
          <div className="px-20 flex flex-col justify-center items-center">
            <h1 className="font-bold text-xl md:text-3xl text-center">
              {item.name}'s Specifications
            </h1>
            <p className="text-sm md:text-md pt-3">Starting at:</p>
            <div className="flex flex-col justify-center gap-6 text-lg w-full md:w-[600px] py-10">
              <div className="flex flex-col sm:flex-row sm:text-left text-center sm:justify-between">
                <h2 className="font-bold">Fuel</h2>
                <h2>
                  {item.fuel[1]
                    ? item.fuel[0] + " & " + item.fuel[1]
                    : item.fuel[0]}
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row sm:text-left text-center sm:justify-between">
                <h2 className="font-bold">Engine</h2>
                <h2>{item.engine}</h2>
              </div>
              <div className="flex flex-col sm:flex-row sm:text-left text-center sm:justify-between">
                <h2 className="font-bold">Performance</h2>
                <h2>
                  {item.horsepower}hp @ {item.performance}
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row sm:text-left text-center sm:justify-between">
                <h2 className="font-bold">Weight</h2>
                <h2>{item.weight} lb</h2>
              </div>
              <div className="flex flex-col sm:flex-row sm:text-left text-center sm:justify-between">
                <h2 className="font-bold">Price</h2>
                <h2>${item.price}</h2>
              </div>
            </div>
          </div>
          <div
            //@ts-expect-error --image-url
            style={{ "--image-url": `url(${item.bannerImage})` }}
            className={
              "rounded-2xl m-10 bg-center bg-cover bg-[image:var(--image-url)] "
            }
          >
            <div className="bg-neutral-900 bg-opacity-65 rounded-2xl py-10">
              <h1 className="text-white text-3xl font-bold text-center pb-10">
                Interested?
              </h1>
              <div className="flex flex-col justify-center items-center text-white">
                <p className="pb-6 text-lg">
                  Find the {item.name} that fits you best!
                </p>
                <Button
                  size="lg"
                  className="bg-red-500 text-white font-normal text-center"
                >
                  Toyota Dealer
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default VehiclePage;
