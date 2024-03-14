import {
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useMemo, useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import VehicleCardVertical from "../components/VehicleCardVetical";

function Vehicles() {
  useEffect(() => {
    document.title = "Toyota - Vehicles";
  });

  const [selectedCategory, setSelectedCategory] = useState(
    new Set(["All Vehicles"])
  );
  const selectedValue = useMemo(
    //@ts-expect-error replaceAll
    () => Array.from(selectedCategory).join(", ").replaceAll("_", " "),
    [selectedCategory]
  );
  const [selectedFilter, setSelectedFilter] = useState("a-z");

  const [allVehicles, setAllVehicles] = useState([]);
  const [cars, setCars] = useState([]);
  const [trucks, setTrucks] = useState([]);
  const [suvs, setSuvs] = useState([]);
  const [alternatives, setAlternatives] = useState([]);
  const [grs, setGrs] = useState([]);

  //@ts-expect-error event
  const handleSelectionFilter = async (e) => {
    setSelectedFilter(e.currentKey.toString());
  };

  useEffect(() => {
    if (selectedFilter == "a-z") {
      const getData = async () => {
        await axios
          .get("https://plum-lemur-veil.cyclic.app/vehicles/all")
          .then((vehicles) => setAllVehicles(vehicles.data))
          .catch((err) => console.log(err));
      };
      getData();
    }
    if (selectedFilter == "highest") {
      const getData = async () => {
        await axios
          .get("https://plum-lemur-veil.cyclic.app/vehicles/all/highprice")
          .then((vehicles) => setAllVehicles(vehicles.data))
          .catch((err) => console.log(err));
      };
      getData();
    }
    if (selectedFilter == "lowest") {
      const getData = async () => {
        await axios
          .get("https://plum-lemur-veil.cyclic.app/vehicles/all/lowprice")
          .then((vehicles) => setAllVehicles(vehicles.data))
          .catch((err) => console.log(err));
      };
      getData();
    }
    if (selectedFilter == "horsepower") {
      const getData = async () => {
        await axios
          .get("https://plum-lemur-veil.cyclic.app/vehicles/all/horsepower")
          .then((vehicles) => setAllVehicles(vehicles.data))
          .catch((err) => console.log(err));
      };
      getData();
    }
  }, [selectedFilter]);

  useEffect(() => {
    if (selectedFilter == "a-z") {
      const getData = async () => {
        await axios
          .get("https://plum-lemur-veil.cyclic.app/vehicles/cars")
          .then((cars) => setCars(cars.data))
          .catch((err) => console.log(err));
      };
      getData();
    }
    if (selectedFilter == "highest") {
      const getData = async () => {
        await axios
          .get("https://plum-lemur-veil.cyclic.app/vehicles/cars/highprice")
          .then((cars) => setCars(cars.data))
          .catch((err) => console.log(err));
      };
      getData();
    }
    if (selectedFilter == "lowest") {
      const getData = async () => {
        await axios
          .get("https://plum-lemur-veil.cyclic.app/vehicles/cars/lowprice")
          .then((cars) => setCars(cars.data))
          .catch((err) => console.log(err));
      };
      getData();
    }
    if (selectedFilter == "horsepower") {
      const getData = async () => {
        await axios
          .get("https://plum-lemur-veil.cyclic.app/vehicles/cars/horsepower")
          .then((cars) => setCars(cars.data))
          .catch((err) => console.log(err));
      };
      getData();
    }
  }, [selectedFilter]);

  useEffect(() => {
    if (selectedFilter == "a-z") {
      const getData = async () => {
        await axios
          .get("https://plum-lemur-veil.cyclic.app/vehicles/trucks")
          .then((cars) => setTrucks(cars.data))
          .catch((err) => console.log(err));
      };
      getData();
    }
    if (selectedFilter == "highest") {
      const getData = async () => {
        await axios
          .get(
            "https://plum-lemur-veil.cyclic.app/vehicles/cars/trucks/highprice"
          )
          .then((cars) => setTrucks(cars.data))
          .catch((err) => console.log(err));
      };
      getData();
    }
    if (selectedFilter == "lowest") {
      const getData = async () => {
        await axios
          .get(
            "https://plum-lemur-veil.cyclic.app/vehicles/cars/trucks/lowprice"
          )
          .then((cars) => setTrucks(cars.data))
          .catch((err) => console.log(err));
      };
      getData();
    }
    if (selectedFilter == "horsepower") {
      const getData = async () => {
        await axios
          .get(
            "https://plum-lemur-veil.cyclic.app/vehicles/cars/trucks/horsepower"
          )
          .then((cars) => setTrucks(cars.data))
          .catch((err) => console.log(err));
      };
      getData();
    }
  }, [selectedFilter]);

  useEffect(() => {
    if (selectedFilter == "a-z") {
      const getData = async () => {
        await axios
          .get("https://plum-lemur-veil.cyclic.app/vehicles/suvs")
          .then((cars) => setSuvs(cars.data))
          .catch((err) => console.log(err));
      };
      getData();
    }
    if (selectedFilter == "highest") {
      const getData = async () => {
        await axios
          .get("https://plum-lemur-veil.cyclic.app/vehicles/suvs/highprice")
          .then((cars) => setSuvs(cars.data))
          .catch((err) => console.log(err));
      };
      getData();
    }
    if (selectedFilter == "lowest") {
      const getData = async () => {
        await axios
          .get("https://plum-lemur-veil.cyclic.app/vehicles/suvs/lowprice")
          .then((cars) => setSuvs(cars.data))
          .catch((err) => console.log(err));
      };
      getData();
    }
    if (selectedFilter == "horsepower") {
      const getData = async () => {
        await axios
          .get("https://plum-lemur-veil.cyclic.app/vehicles/suvs/horsepower")
          .then((cars) => setSuvs(cars.data))
          .catch((err) => console.log(err));
      };
      getData();
    }
  }, [selectedFilter]);

  useEffect(() => {
    if (selectedFilter == "a-z") {
      const getData = async () => {
        await axios
          .get("https://plum-lemur-veil.cyclic.app/vehicles/alternatives")
          .then((cars) => setAlternatives(cars.data))
          .catch((err) => console.log(err));
      };
      getData();
    }
    if (selectedFilter == "highest") {
      const getData = async () => {
        await axios
          .get(
            "https://plum-lemur-veil.cyclic.app/vehicles/alternatives/highprice"
          )
          .then((cars) => setAlternatives(cars.data))
          .catch((err) => console.log(err));
      };
      getData();
    }
    if (selectedFilter == "lowest") {
      const getData = async () => {
        await axios
          .get(
            "https://plum-lemur-veil.cyclic.app/vehicles/alternatives/lowprice"
          )
          .then((cars) => setAlternatives(cars.data))
          .catch((err) => console.log(err));
      };
      getData();
    }
    if (selectedFilter == "horsepower") {
      const getData = async () => {
        await axios
          .get(
            "https://plum-lemur-veil.cyclic.app/vehicles/alternatives/horsepower"
          )
          .then((cars) => setAlternatives(cars.data))
          .catch((err) => console.log(err));
      };
      getData();
    }
  }, [selectedFilter]);

  useEffect(() => {
    if (selectedFilter == "a-z") {
      const getData = async () => {
        await axios
          .get("https://plum-lemur-veil.cyclic.app/vehicles/grs")
          .then((cars) => setGrs(cars.data))
          .catch((err) => console.log(err));
      };
      getData();
    }
    if (selectedFilter == "highest") {
      const getData = async () => {
        await axios
          .get("https://plum-lemur-veil.cyclic.app/vehicles/grs/highprice")
          .then((cars) => setGrs(cars.data))
          .catch((err) => console.log(err));
      };
      getData();
    }
    if (selectedFilter == "lowest") {
      const getData = async () => {
        await axios
          .get("https://plum-lemur-veil.cyclic.app/vehicles/grs/lowprice")
          .then((cars) => setGrs(cars.data))
          .catch((err) => console.log(err));
      };
      getData();
    }
    if (selectedFilter == "horsepower") {
      const getData = async () => {
        await axios
          .get("https://plum-lemur-veil.cyclic.app/vehicles/grs/horsepower")
          .then((cars) => setGrs(cars.data))
          .catch((err) => console.log(err));
      };
      getData();
    }
  }, [selectedFilter]);

  function MappingVehicles() {
    //@ts-expect-error currentKey
    if (selectedCategory.currentKey == "All Vehicles") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return allVehicles.map((vehicle: any) => (
        <VehicleCardVertical
          key={vehicle.name}
          image={vehicle.image}
          fuel={vehicle.fuel}
          name={vehicle.name}
          description={vehicle.description}
          price={vehicle.price}
          horsepower={vehicle.horsepower}
          link={vehicle.link}
          nameId={vehicle.nameId}
        />
      ));
      //@ts-expect-error currentKey
    } else if (selectedCategory.currentKey == "Cars") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return cars.map((vehicle: any) => (
        <VehicleCardVertical
          key={vehicle.name}
          image={vehicle.image}
          fuel={vehicle.fuel}
          name={vehicle.name}
          description={vehicle.description}
          price={vehicle.price}
          horsepower={vehicle.horsepower}
          link={vehicle.link}
          nameId={vehicle.nameId}
        />
      ));
      //@ts-expect-error currentKey
    } else if (selectedCategory.currentKey == "Trucks") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return trucks.map((vehicle: any) => (
        <VehicleCardVertical
          key={vehicle.name}
          image={vehicle.image}
          fuel={vehicle.fuel}
          name={vehicle.name}
          description={vehicle.description}
          price={vehicle.price}
          horsepower={vehicle.horsepower}
          link={vehicle.link}
          nameId={vehicle.nameId}
        />
      ));
      //@ts-expect-error currentKey
    } else if (selectedCategory.currentKey == "SUVs") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return suvs.map((vehicle: any) => (
        <VehicleCardVertical
          key={vehicle.name}
          image={vehicle.image}
          fuel={vehicle.fuel}
          name={vehicle.name}
          description={vehicle.description}
          price={vehicle.price}
          horsepower={vehicle.horsepower}
          link={vehicle.link}
          nameId={vehicle.nameId}
        />
      ));
      //@ts-expect-error currentKey
    } else if (selectedCategory.currentKey == "Alternative Fuel") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return alternatives.map((vehicle: any) => (
        <VehicleCardVertical
          key={vehicle.name}
          image={vehicle.image}
          fuel={vehicle.fuel}
          name={vehicle.name}
          description={vehicle.description}
          price={vehicle.price}
          horsepower={vehicle.horsepower}
          link={vehicle.link}
          nameId={vehicle.nameId}
        />
      ));
      //@ts-expect-error currentKey
    } else if (selectedCategory.currentKey == "GR") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return grs.map((vehicle: any) => (
        <VehicleCardVertical
          key={vehicle.name}
          image={vehicle.image}
          fuel={vehicle.fuel}
          name={vehicle.name}
          description={vehicle.description}
          price={vehicle.price}
          horsepower={vehicle.horsepower}
          link={vehicle.link}
          nameId={vehicle.nameId}
        />
      ));
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return allVehicles.map((vehicle: any) => (
        <VehicleCardVertical
          key={vehicle.name}
          image={vehicle.image}
          fuel={vehicle.fuel}
          name={vehicle.name}
          description={vehicle.description}
          price={vehicle.price}
          horsepower={vehicle.horsepower}
          link={vehicle.link}
          nameId={vehicle.nameId}
        />
      ));
    }
  }

  return (
    <>
      <div className="py-8">
        <h1 className="text-4xl font-bold text-center">Toyota Vehicles</h1>
      </div>
      <div className="px-10 sm:px-10 xl:px-10 2xl:px-40 justify-center pb-10">
        <div className="flex flex-col justify-center text-center">
          <div className="flex flex-col justify-center gap-6 align-middle items-center pb-6">
            <Dropdown>
              <DropdownTrigger>
                <Button variant="faded" className="capitalize">
                  {selectedValue}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Single selection example"
                variant="flat"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedCategory}
                //@ts-expect-error onSelectionChange
                onSelectionChange={setSelectedCategory}
              >
                <DropdownItem key="All Vehicles">All Vehicles</DropdownItem>
                <DropdownItem key="Cars">Cars</DropdownItem>
                <DropdownItem key="Trucks">Trucks</DropdownItem>
                <DropdownItem key="SUVs">SUVs</DropdownItem>
                <DropdownItem key="Alternative Fuel">
                  Alternative Fuel
                </DropdownItem>
                <DropdownItem key="GR">GR</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Select
              onSelectionChange={handleSelectionFilter}
              size="sm"
              label="Order By:"
              className="max-w-xs"
              defaultSelectedKeys={["a-z"]}
              variant="faded"
            >
              <SelectItem key="a-z" value="a-z">
                A-Z
              </SelectItem>
              <SelectItem key="highest" value="highest">
                Highest Price
              </SelectItem>
              <SelectItem key="lowest" value="lowest">
                Lowest Price
              </SelectItem>
              <SelectItem key="horsepower" value="horsepower">
                Horsepower
              </SelectItem>
            </Select>
          </div>
          <div className="flex justify-center flex-wrap gap-6 ">
            <MappingVehicles />
          </div>
        </div>
      </div>
    </>
  );
}

export default Vehicles;
