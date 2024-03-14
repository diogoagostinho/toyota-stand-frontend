import { Accordion, AccordionItem, Link } from "@nextui-org/react";
import { useEffect } from "react";

function Faq() {
  useEffect(() => {
    document.title = "Toyota - FAQ";
  });
  return (
    <>
      <div className="pt-10 flex flex-col justify-center text-center">
        <h1 className="font-bold text-4xl">FAQ</h1>
        <p className="font-normal text-xl">Frequently Asked Questions</p>
      </div>
      <div className="mt-10 md:px-32 px-10 pb-10">
        <Accordion selectionMode="multiple">
          <AccordionItem
            key="1"
            aria-label="Is this website associated with TOYOTA and it's services?"
            title="Is this website associated with TOYOTA and it's services?"
          >
            <p>
              This website has <b>no association</b> with Toyota and it's
              trademarks or services. This website is only a demonstration of a
              reimagined Toyota Stand E-commerce website (auto stand). Diogo
              Agostinho is not by any way associated with Toyota (just a big
              fan!).
            </p>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="How was this website built?"
            title="How was this website built?"
          >
            <p>
              This website was built with the MERN stack (MongoDB, ExpressJS,
              ReactJS and NodeJS), along with many other libraries to help
              structure the app. The design was made with the help of NextUI, a
              tailwind components library.
            </p>
            <p className="py-4">
              If you wish to see more websites developed by me, just click on
              the following link to view my portfolio.
            </p>
            <Link
              color="primary"
              isExternal
              showAnchorIcon
              href="https://diogoagostinho.pt/"
            >
              My Portfolio
            </Link>
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Who developed this website?"
            title="Who developed this website?"
          >
            <p>
              That would be me! Diogo Agostinho, the following section has
              various links if you wish to contact me!
            </p>
            <div className="flex flex-col pt-4">
              <Link
                color="primary"
                isExternal
                showAnchorIcon
                href="https://diogoagostinho.pt/"
              >
                My Website
              </Link>
              <Link
                color="primary"
                isExternal
                showAnchorIcon
                href="https://github.com/diogoagostinho"
              >
                GitHub
              </Link>
              <Link
                color="primary"
                isExternal
                showAnchorIcon
                href="https://dev.to/diogoagostinho"
              >
                DEV.to
              </Link>
              <Link
                color="primary"
                isExternal
                showAnchorIcon
                href="https://www.linkedin.com/in/diogo-agostinho-b99a33224/"
              >
                LinkedIn
              </Link>
              <Link
                color="primary"
                isExternal
                showAnchorIcon
                href="https://twitter.com/agostinho_dev"
              >
                X (Twitter)
              </Link>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}

export default Faq;
