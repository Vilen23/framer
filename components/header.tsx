import { FaApple } from "react-icons/fa";
import { Container } from "./container";
import { Button } from "./button";

export const Header = () => {
  return (
    <>
      <header className="bg-backgroundContrast relative z-20 text-white ">
        <Container className="flex items-center min-h-[--header-row-height]  ">
          <a href="/" className="px-6 h-[--header-row-height] flex items-center -ml-6">
            <FaApple className="text-white" size={18}/>
          </a>
        </Container>
      </header>
      <div className="bg-backgroundContrast sticky top-0  text-white z-20 ">
        <Container className="flex items-center min-h-[--header-row-height] justify-between">
          <p className="text-xl font-semibold">Apple TV+</p>
          <Button size="small">Stream now</Button>
        </Container>
      </div>
    </>
  );
};
