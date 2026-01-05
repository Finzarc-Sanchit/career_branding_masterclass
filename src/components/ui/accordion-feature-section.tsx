import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

interface FeatureItem {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface Feature197Props {
  features: FeatureItem[];
}

const Feature197 = ({ features }: Feature197Props) => {
  const [activeTabId, setActiveTabId] = useState<number | null>(1);
  const [activeImage, setActiveImage] = useState(features[0]?.image || "");

  return (
    <div className="flex w-full items-start justify-between gap-12">
      <div className="w-full md:w-1/2">
        <Accordion
          type="single"
          className="w-full"
          defaultValue="item-1"
          onValueChange={(value) => {
            const id = value ? parseInt(value.replace("item-", "")) : null;
            setActiveTabId(id);
            if (id) {
              const feature = features.find(f => f.id === id);
              if (feature) {
                setActiveImage(feature.image);
              }
            }
          }}
        >
          {features.map((tab) => (
            <AccordionItem key={tab.id} value={`item-${tab.id}`} className="border-charcoal/10">
              <AccordionTrigger
                className="cursor-pointer py-6 !no-underline transition hover:text-accent"
              >
                <h6
                  className={`text-xl md:text-2xl font-bold text-left ${tab.id === activeTabId ? "text-charcoal" : "text-charcoal/70"}`}
                >
                  {tab.title}
                </h6>
              </AccordionTrigger>
              <AccordionContent>
                <p className="mt-3 text-body text-lg leading-relaxed">
                  {tab.description}
                </p>
                <div className="mt-6 md:hidden">
                  <img
                    src={tab.image}
                    alt={tab.title}
                    className="h-full max-h-80 w-full rounded-[2rem] object-cover shadow-lg"
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="relative m-auto hidden w-1/2 overflow-hidden rounded-[2.5rem] bg-charcoal/5 md:block">
        <img
          src={activeImage}
          alt="Feature preview"
          className="aspect-[4/3] rounded-[2rem] object-cover shadow-2xl"
        />
      </div>
    </div>
  );
};

export { Feature197 };

