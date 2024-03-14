import { useEffect, useState } from "react";
import HomeHero from "../components/HomeHero";
import {
  Tabs,
  Tab,
  Button,
  Link,
  Card,
  Image,
  CardBody,
  CardHeader,
} from "@nextui-org/react";
import axios from "axios";
import VehicleCard from "../components/VehicleCard";

function Home() {
  useEffect(() => {
    document.title = "Toyota";
  });

  const [cars, setCars] = useState([]);
  const [trucks, setTrucks] = useState([]);
  const [suvs, setSuvs] = useState([]);
  const [alternatives, setAlternatives] = useState([]);
  const [grs, setGrs] = useState([]);

  useEffect(() => {
    axios
      .get("https://plum-lemur-veil.cyclic.app/vehicles/cars")
      .then((cars) => setCars(cars.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get("https://plum-lemur-veil.cyclic.app/vehicles/trucks")
      .then((trucks) => setTrucks(trucks.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get("https://plum-lemur-veil.cyclic.app/vehicles/suvs")
      .then((suvs) => setSuvs(suvs.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get("https://plum-lemur-veil.cyclic.app/vehicles/alternatives")
      .then((alternatives) => setAlternatives(alternatives.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get("https://plum-lemur-veil.cyclic.app/vehicles/grs")
      .then((gr) => setGrs(gr.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <HomeHero />

      <div className="w-full pt-14">
        <h1 className="md:text-4xl text-2xl font-semibold text-center">
          Explore All Vehicles
        </h1>
        <div>
          <Tabs
            className="flex justify-center text-center pt-6 "
            variant="underlined"
          >
            <Tab className="text-md md:text-lg" key="cars" title="Cars">
              <div
                className={
                  "flex flex-row flex-wrap gap-6 justify-center px-10 sm:px-10 xl:px-10 2xl:px-40"
                }
              >
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {cars.map((car: any) => (
                  <VehicleCard
                    key={car.name}
                    image={car.image}
                    fuel={car.fuel}
                    name={car.name}
                    description={car.description}
                    price={car.price}
                    horsepower={car.horsepower}
                    link={car.link}
                  />
                ))}
              </div>
            </Tab>

            <Tab className="text-md md:text-lg" key="trucks" title="Trucks">
              <div
                className={
                  "flex flex-row flex-wrap gap-6 justify-center px-10 sm:px-10 xl:px-10 2xl:px-40"
                }
              >
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {trucks.map((truck: any) => (
                  <VehicleCard
                    key={truck.name}
                    image={truck.image}
                    fuel={truck.fuel}
                    name={truck.name}
                    description={truck.description}
                    price={truck.price}
                    horsepower={truck.horsepower}
                    link={truck.link}
                  />
                ))}
              </div>
            </Tab>
            <Tab className="text-md md:text-lg" key="suvs" title="SUVs">
              <div
                className={
                  "flex flex-row flex-wrap gap-6 justify-center px-10 sm:px-10 xl:px-10 2xl:px-40"
                }
              >
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {suvs.map((suv: any) => (
                  <VehicleCard
                    key={suv.name}
                    image={suv.image}
                    fuel={suv.fuel}
                    name={suv.name}
                    description={suv.description}
                    price={suv.price}
                    horsepower={suv.horsepower}
                    link={suv.link}
                  />
                ))}
              </div>
            </Tab>
            <Tab
              className="text-md md:text-lg"
              key="alternative"
              title="Alternative Fuel"
            >
              <div
                className={
                  "flex flex-row flex-wrap gap-6 justify-center px-10 sm:px-10 xl:px-10 2xl:px-40"
                }
              >
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {alternatives.map((alternative: any) => (
                  <VehicleCard
                    key={alternative.name}
                    image={alternative.image}
                    fuel={alternative.fuel}
                    name={alternative.name}
                    description={alternative.description}
                    price={alternative.price}
                    horsepower={alternative.horsepower}
                    link={alternative.link}
                  />
                ))}
              </div>
            </Tab>
            <Tab className="text-md md:text-lg" key="gr" title="GR">
              <div
                className={
                  "flex flex-row flex-wrap gap-6 justify-center px-10 sm:px-10 xl:px-10 2xl:px-40"
                }
              >
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {grs.map((gr: any) => (
                  <VehicleCard
                    key={gr.name}
                    image={gr.image}
                    fuel={gr.fuel}
                    name={gr.name}
                    description={gr.description}
                    price={gr.price}
                    horsepower={gr.horsepower}
                    link={gr.link}
                  />
                ))}
              </div>
            </Tab>
          </Tabs>
          <div className="flex justify-center pt-10 px-10 sm:px-10 xl:px-10 2xl:px-40 rounded-2xl">
            <div className="w-full bg-center bg-cover rounded-2xl bg-[url('/thumbs/suprabackground.jpg')]">
              <div className="flex items-center justify-center rounded-2xl w-full h-full bg-gray-900 bg-opacity-50 py-12">
                <div className="text-center">
                  <div className="container px-4 mx-auto">
                    <div className="max-w-4xl mx-auto text-center">
                      <h2 className="mt-8 mb-6 text-3xl lg:text-4xl font-bold text-gray-100">
                        Find the perfect Toyota for you
                      </h2>
                      <Link href="/vehicles">
                        <Button
                          size="lg"
                          radius="sm"
                          variant="flat"
                          className="bg-red-500 text-white"
                        >
                          See All Vehicles
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 md:px-20 px-10">
        <h1 className="md:text-5xl text-3xl font-semibold text-center">
          Discover Toyota
        </h1>
        <div className="pt-6 flex justify-center flex-wrap gap-6 *:cursor-pointer">
          <div className="hover:opacity-95">
            <Link isExternal href="https://www.toyota.com/racing/">
              <Card className="py-4 ">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">FEATURED</p>
                  <small className="text-default-500">Welcome race fans!</small>
                  <h4 className="font-bold text-large">Toyota Racing</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl w-[270px] h-[150px]"
                    src="/thumbs/toyotaracing.jpg"
                  />
                </CardBody>
              </Card>
            </Link>
          </div>
          <div className="hover:opacity-95">
            <Link isExternal href="https://www.toyota.com/gr86/">
              <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">NEWS</p>
                  <small className="text-default-500">86 the competition</small>
                  <h4 className="font-bold text-large">
                    New GR86 TRUENO Edition
                  </h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl w-[270px] h-[150px]"
                    src="/thumbs/gr86trueno.jpg"
                  />
                </CardBody>
              </Card>
            </Link>
          </div>
          <div className="hover:opacity-95">
            <Link isExternal href="https://www.toyota.com/rental">
              <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">RENTALS</p>
                  <small className="text-default-500">
                    Rent a Toyota today
                  </small>
                  <h4 className="font-bold text-large">Toyota Rentals</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl w-[270px] h-[150px]"
                    src="/thumbs/rentals.jpg"
                  />
                </CardBody>
              </Card>
            </Link>
          </div>
          <div className="hover:opacity-95">
            <Link isExternal href="https://careers.toyota.com/">
              <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">CAREERS</p>
                  <small className="text-default-500">
                    Get a job at Toyota!
                  </small>
                  <h4 className="font-bold text-large">Toyota Careers</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl w-[270px] h-[150px]"
                    src="/thumbs/careers.jpg"
                  />
                </CardBody>
              </Card>
            </Link>
          </div>
          <div className="hover:opacity-95">
            <Link isExternal href="https://www.toyota.com/bz4x/">
              <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">NEWS</p>
                  <small className="text-default-500">
                    Brand new 2024 bZ4X
                  </small>
                  <h4 className="font-bold text-large">2024 bZ4X</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl w-[270px] h-[150px]"
                    src="/thumbs/newbz4x.jpg"
                  />
                </CardBody>
              </Card>
            </Link>
          </div>
          <div className="hover:opacity-95">
            <Link isExternal href="https://www.toyotacertified.com/">
              <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">USED VEHICLES</p>
                  <small className="text-default-500">
                    Toyota's certified used cars
                  </small>
                  <h4 className="font-bold text-large">Toyota Certified</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl w-[270px] h-[150px]"
                    src="/thumbs/certified.jpg"
                  />
                </CardBody>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
