import Head from 'next/head';
import Image from 'next/image';
import { FormEvent, useState } from 'react';

import { Button } from '../components/Button';
import { Heading } from '../components/Heading';
import { Input } from '../components/Input';
import { Text } from '../components/Text';
import { maskCardNumber } from '../utils/maskInput/maskCardNumber';
import { maskCvc } from '../utils/maskInput/maskCvc';
import { maskExpMonth } from '../utils/maskInput/maskExpMonth';
import { maskExpYear } from '../utils/maskInput/maskExpYear';

export default function Home() {
  const [cvc, setCvc] = useState<string>('');
  const [cardNumber, setCardNumber] = useState<string>('');
  const [expMonth, setExpMonth] = useState<string>('');
  const [expYear, setExpYear] = useState<string>('');
  const [cardHolderName, setCardHolderName] = useState<string>('');
  const [confirmed, setConfirmed] = useState(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const handleSaveCard = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isNaN(Number(expMonth)) || Number(expYear) <= 0) {
      return setHasError(true);
    }
    if (isNaN(Number(expYear)) || Number(expYear) <= 0) {
      return setHasError(true);
    }
    if (isNaN(Number(cvc)) || cvc.length !== 3) {
      return setHasError(true);
    }
    if (
      isNaN(Number(cardNumber.replace(/[^0-9]/g, ''))) ||
      cardNumber.replace(/[^0-9]/g, '').length !== 16
    ) {
      return setHasError(true);
    }
    if (cardHolderName.length < 3) {
      return setHasError(true);
    }
    setConfirmed(true);
  };
  return (
    <>
      <Head>
        <title>Cadastrar cartão</title>
      </Head>
      <div className="min-h-screen min-w-screen flex flex-col lg:flex-row">
        <div className="relative flex flex-1">
          <div className="absolute grid bg-main-mobile lg:bg-main-desktop h-[50%] lg:h-full w-full lg:w-[70%] bg-cover" />
          <div className="h-full w-full flex lg:flex-col flex-1 justify-center items-center lg:items-end lg:py-5 flex-col-reverse gap-5">
            <div className="relative z-10  ml-10 lg:ml-0  flex justify-end items-center max-[350px]:h-[8rem] max-[350px]:w-[12.6rem] h-[10rem] w-[18rem] lg:h-[15rem] lg:w-[27rem] mx-24">
              <Image
                src="/bg-card-front.png"
                width={447}
                height={245}
                alt="Parte da frente de um cartão"
                className="absolute w-full h-full"
              />
              <div className="absolute flex flex-col p-4 justify-between  w-full h-full">
                <Image
                  src="/card-logo.svg"
                  alt="Logo do Cartão"
                  height={50}
                  width={50}
                />
                <Text size="lg" className="text-white">
                  {cardNumber || '0000 0000 0000 0000'}
                </Text>
                <div className="flex  justify-between ">
                  <Text size="lg" className="text-white">
                    {cardHolderName || 'Jonas'}
                  </Text>
                  <Text size="lg" className="text-white">
                    {expMonth || '00'}/{expYear || '00'}
                  </Text>
                </div>
              </div>
            </div>
            <div className="relative  ml-8 lg:ml-0 translate-y-12 lg:translate-y-0 max-[350px]:h-[8rem] max-[350px]:w-[12.6rem]  flex justify-end items-center h-[10rem] w-[18rem] lg:h-[15rem] lg:w-[27rem] ">
              <Image
                src="/bg-card-back.png"
                width={447}
                height={245}
                alt="Parte de trás de um cartão"
                className="absolute "
              />
              <div className="absolute flex justify-center">
                <Text size="lg" className="pr-8 lg:pr-16 text-white ">
                  {cvc || '000'}
                </Text>
              </div>
            </div>
          </div>
        </div>
        <main className="flex flex-1 flex-col">
          {confirmed ? (
            <div className=" items-center justify-center flex-1 p-4 flex flex-col gap-3">
              <Image
                src="/icon-complete.svg"
                width={50}
                height={50}
                alt="Ícone de confirmação de salvamento do cartão"
              />
              <Heading size="lg">Obrigado!</Heading>
              <Text size="lg" className="text-[#8e8593]">
                Os dados do seu cartão foi salvo
              </Text>
              <Button className="max-w-xs" onClick={() => setConfirmed(false)}>
                Continuar
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSaveCard}
              className="max-w-md lg:my-auto max-h-96 mx-auto my-1 p-4  lg:ml-10 flex flex-col gap-3"
            >
              <Text size="lg" asChild>
                <label>
                  Nome do Titular
                  <Input
                    placeholder="Marcelo Augusto"
                    autoComplete="cc-name"
                    value={cardHolderName}
                    onChange={(e) => setCardHolderName(e.target.value)}
                  />
                  <Text size="sm" className="text-red-500">
                    {hasError && cardHolderName.length < 3
                      ? 'Insira um nome com mais de 3 caracteres'
                      : ''}
                  </Text>
                </label>
              </Text>
              <Text size="lg" asChild>
                <label>
                  Numero do Cartão
                  <Input
                    placeholder="0000 0000 0000 0000"
                    autoComplete="cc-number"
                    value={cardNumber}
                    maxLength={19}
                    onChange={(e) =>
                      setCardNumber(maskCardNumber(e.target.value))
                    }
                  />
                  <Text size="sm" className="text-red-500">
                    {hasError &&
                    (isNaN(Number(cardNumber.replace(/[^0-9]/g, ''))) ||
                      cardNumber.replace(/[^0-9]/g, '').length !== 16)
                      ? 'Insira um número de cartão valido'
                      : ''}
                  </Text>
                </label>
              </Text>

              <div className="flex flex-1 gap-3">
                <Text size="lg" asChild>
                  <label>
                    Data de Validade
                    <div className="flex-1   w-full  flex gap-3">
                      <Input
                        placeholder="MM"
                        autoComplete="cc-exp-month"
                        value={expMonth}
                        onChange={(e) =>
                          setExpMonth(maskExpMonth(e.target.value))
                        }
                      />
                      <Input
                        placeholder="YY"
                        autoComplete="cc-exp-year"
                        value={expYear}
                        onChange={(e) =>
                          setExpYear(maskExpYear(e.target.value))
                        }
                      />
                    </div>
                    <Text size="sm" className="text-red-500">
                      {hasError &&
                      (isNaN(Number(expMonth)) ||
                        Number(expMonth) <= 0 ||
                        isNaN(Number(expYear)) ||
                        Number(expYear) <= 0)
                        ? 'Insira uma data de validade valida'
                        : ''}
                    </Text>
                  </label>
                </Text>
                <Text size="lg" asChild>
                  <label className="w-full">
                    CVC
                    <Input
                      placeholder="000"
                      autoComplete="cc-csc"
                      value={cvc}
                      onChange={(e) => setCvc(maskCvc(e.target.value))}
                    />
                    <Text size="sm" className="text-red-500">
                      {hasError && (isNaN(Number(cvc)) || cvc.length !== 3)
                        ? 'Insira um cvc valido'
                        : ''}
                    </Text>
                  </label>
                </Text>
              </div>

              <Button type="submit">Confirme</Button>
            </form>
          )}
        </main>
      </div>
    </>
  );
}
