import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import Error from "./Error";
import {
  Container,
  HStack,
  VStack,
  Image,
  Heading,
  Text,
  Button,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import Loader from "./Loader";
import { Link } from "react-router-dom";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [pages, setPages] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const currencySym = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const changePage = (page) => {
    setPages(page);
    setLoading(true);
  };

  const btns = new Array(132).fill(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${pages}`
        );
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };

    fetchData();
  }, [currency, pages]);

  if (error) {
    return <Error message={"Error while fetching the coins"}/>
  }

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <RadioGroup value={currency } onChange={setCurrency} p={"8"} >
            <HStack spacing={"4"} justifyContent={'center'}>
              <Radio value="inr">INR</Radio>
              <Radio value="usd">USD</Radio>
              <Radio value="eur">EUR</Radio>
            </HStack>
          </RadioGroup>
        

          <HStack wrap={"wrap"} justifyContent={'space-evenly'}>
            {coins.map((i) => (
              <CoinsInfo
                id={i.id}
                key={i.id}
                name={i.name}
                price={i.current_price}
                currencySym={currencySym}
                img={i.image}
                symbol={i.symbol}
              />
            ))}
          </HStack>

          <HStack w={"full"} overflow={"auto"} p={"8"} >
            {btns.map((item, index) => (
              <Button
                key={index}
                bgColor={"blackAlpha.900"}
                color={"white"}
                onClick={() => changePage(index + 1)}
              >
                
                {index + 1}
              </Button>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

const CoinsInfo = ({ id, name, img, symbol, price, currencySym = "₹" }) => (
  <Link to={`${id}`}>
    <VStack
      w={"52"}
      shadow={"lg"}
      p={"8"}
      borderRadius={"lg"}
      transition={"all 0.3s"}
      m={"4"}
      css={{
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Image src={img} w={"10"} h={"10"} objectFit={"contain"} alt="coins" />
      <Heading size={"md"} noOfLines={"1"}>
        {symbol}
      </Heading>

      <Text noOfLines={"1"}>{name}</Text>
      <Text noOfLines={"1"}>{price ? `${currencySym}${price}` : "NA"}</Text>
    </VStack>
  </Link>
);

export default Coins;
