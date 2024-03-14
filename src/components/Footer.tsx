import { Accordion, AccordionItem, Link } from "@nextui-org/react";

function Footer() {
  return (
    <>
      <div className="hidden md:flex justify-evenly bg-neutral-100 dark:bg-neutral-900 py-10">
        <div className="flex flex-col gap-5">
          <h2 className="font-bold">Helpful Links</h2>
          <div className="flex flex-col gap-2">
            <Link
              isExternal
              href="https://www.toyota.com/dealers/directory/"
              color="foreground"
            >
              Dealers
            </Link>
            <Link
              isExternal
              href="https://www.toyota.com/local-specials/"
              color="foreground"
            >
              Local Specialists
            </Link>
            <Link
              isExternal
              href="https://www.toyota.com/rental/"
              color="foreground"
            >
              Rent a Toyota
            </Link>
            <Link
              isExternal
              href="https://www.toyotacertified.com/"
              color="foreground"
            >
              Toyota Used Cars
            </Link>
            <Link isExternal href="https://toyotaims.com/" color="foreground">
              Toyota Insurance
            </Link>
            <Link
              isExternal
              href="https://careers.toyota.com/"
              color="foreground"
            >
              Careers
            </Link>
            <Link
              isExternal
              href="https://www.toyota.com/racing/"
              color="foreground"
            >
              Toyota Racing
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-bold ">Tools</h2>
          <div className="flex flex-col gap-2">
            <Link
              isExternal
              href="https://www.toyota.com/configurator/"
              color="foreground"
            >
              Build Your Toyota
            </Link>

            <Link
              isExternal
              href="https://www.toyota.com/what-fits-my-budget/"
              color="foreground"
            >
              What Fits My Budget?
            </Link>
            <Link
              isExternal
              href="https://www.toyota.com/payment-estimator/"
              color="foreground"
            >
              Payment Estimator
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:hidden bg-neutral-100 dark:bg-neutral-900 py-10 px-4">
        <Accordion showDivider={false} selectionMode="multiple">
          <AccordionItem
            key="1"
            aria-label="Helpful Links"
            title="Helpful Links"
          >
            <div className="flex flex-col gap-4">
              <Link
                isExternal
                href="https://www.toyota.com/dealers/directory/"
                color="foreground"
              >
                Dealers
              </Link>
              <Link
                isExternal
                href="https://www.toyota.com/local-specials/"
                color="foreground"
              >
                Local Specialists
              </Link>
              <Link
                isExternal
                href="https://www.toyota.com/rental/"
                color="foreground"
              >
                Rent a Toyota
              </Link>
              <Link
                isExternal
                href="https://www.toyotacertified.com/"
                color="foreground"
              >
                Toyota Used Cars
              </Link>
              <Link isExternal href="https://toyotaims.com/" color="foreground">
                Toyota Insurance
              </Link>
              <Link
                isExternal
                href="https://careers.toyota.com/"
                color="foreground"
              >
                Careers
              </Link>
              <Link
                isExternal
                href="https://www.toyota.com/racing/"
                color="foreground"
              >
                Toyota Racing
              </Link>
            </div>
          </AccordionItem>
          <AccordionItem key="2" aria-label="Tools" title="Tools">
            <div className="flex flex-col gap-4">
              <Link
                isExternal
                href="https://www.toyota.com/configurator/"
                color="foreground"
              >
                Build Your Toyota
              </Link>
              <Link
                isExternal
                href="https://www.toyota.com/what-fits-my-budget/"
                color="foreground"
              >
                What Fits My Budget?
              </Link>
              <Link
                isExternal
                href="https://www.toyota.com/payment-estimator/"
                color="foreground"
              >
                Payment Estimator
              </Link>
            </div>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="flex justify-center pt-8 pb-6 bg-neutral-100 dark:bg-neutral-900">
        <p>
          Developed By{" "}
          <a
            className="font-semibold"
            target="_blank"
            href="https://github.com/diogoagostinho"
          >
            Diogo Agostinho
          </a>
        </p>
      </div>
    </>
  );
}

export default Footer;
