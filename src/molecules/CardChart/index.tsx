import { FiArrowLeft, FiArrowRight } from "react-icons/fi"
import { Chart, Container } from "./styles"
import { useCallback } from "react";

const CardChart = () => {
  const amountBars = Array.from(Array(12).keys())

  const fillZero = useCallback((value: number) => {
    const number = (value + 1).toString();

    return number.padStart(2, "0")
  }, []);

  return (
    <Container>
      <div>
        <FiArrowLeft />
        <strong>Stats</strong>
        <FiArrowRight />
      </div>

      <Chart>
        {amountBars.map((item) => (
          <div key={String(item)}>
            <div>
            <span></span>
            </div>

            <small>{fillZero(item)}</small>
          </div>
        ))}
      </Chart>
    </Container>
  )
}

export default CardChart