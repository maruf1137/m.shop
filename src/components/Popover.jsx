import React, { useState } from "react";
import { Popover } from "@headlessui/react";
import { usePopper } from "react-popper";

const PopoverTest = () => {
  let [referenceElement, setReferenceElement] = useState();
  let [popperElement, setPopperElement] = useState();
  let { styles, attributes } = usePopper(referenceElement, popperElement);

  return (
    <>
      <Popover>
        <Popover.Button ref={setReferenceElement}>Solutions</Popover.Button>

        <Popover.Panel
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          {/* ... */}
        </Popover.Panel>
      </Popover>
    </>
  );
};

export default PopoverTest;
