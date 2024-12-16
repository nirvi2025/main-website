"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import React from "react";

type CounterProps = {
    end: number;
    decimals?: number;
};
const Counter:React.FC<CounterProps> = ({ end, decimals = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });
  return (
      // <CountUp
      //     end={end ? end : 100}
      //     duration={3}
      //     decimals={decimals ? decimals : 0}
      // >
        <span ref={ref}>
          {inView && (
              <CountUp
                  end={end}
                  duration={3}
                  decimals={decimals ? decimals : 0}
                  className="count"
                  data-from="0"
                  data-to={end}
              />
          )}
        </span>
      // </CountUp>
  );
};

export default Counter;
