import React, { useCallback, useState, useRef } from 'react';
import Layout from '../../Layouts';
import styled from 'styled-components';
import { InputGroup, Button, Card, CardBody, Toastr, ToastrRef, ToastrProps, CardFooter } from '@paljs/ui';
import Link from 'next/link';

const Input = styled(InputGroup)`
  margin-bottom: 15px;
`;
const ButtonMargin = styled(Button)`
  margin-right: 20px;
  a {
    color: #ffffff;
    text-decoration: none;
    &:hover {
      color: #ffffff;
    }
  }
`;
export default function UpdateUser() {
  const [data] = useState<ToastrProps>({
    position: 'topEnd',
    status: 'Success',
    duration: 4000,
    hasIcon: true,
    destroyByClick: true,
    preventDuplicates: false,
  });

  const toastrRef = useRef<ToastrRef>(null);

  const showToastr = () => {
    toastrRef.current?.add('Usuario Atualizado com sucesso', 'Sucesso', { ...data });
  };
  const handleClickButton = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    showToastr();
  }, []);

  return (
    <Layout title="Atualizar usuario">
      <Toastr ref={toastrRef} />
      <form>
        <Card>
          <header>Atualizar usuario</header>
          <CardBody>
            <Input fullWidth>
              <input type="text" placeholder="Insira o Nome..." />
            </Input>
            <Input fullWidth>
              <input type="text" placeholder="Insira o email..." />
            </Input>
            <Input fullWidth>
              <input type="text" placeholder="Insira a password..." />
            </Input>
            <Input fullWidth>
              <input type="text" placeholder="Repita a password" />
            </Input>
          </CardBody>
          <CardFooter>
            <ButtonMargin type="submit" onClick={handleClickButton}>
              Registrar
            </ButtonMargin>
            <ButtonMargin type="submit">
              <Link href="/users/list-user">Canselar</Link>
            </ButtonMargin>
          </CardFooter>
        </Card>
      </form>
    </Layout>
  );
}
