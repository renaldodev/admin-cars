import React, { useCallback, useState, useRef } from 'react';
import Layout from '../../Layouts';
import styled from 'styled-components';
import { InputGroup, Button, Card, CardBody, Toastr, ToastrRef, ToastrProps } from '@paljs/ui';

const Input = styled(InputGroup)`
  margin-bottom: 15px;
`;

export default function AddUser() {
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
    toastrRef.current?.add('Usuario adicionado com sucesso', 'Sucesso', { ...data });
  };
  const handleClickButton = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    showToastr();
  }, []);

  return (
    <Layout title="Add User">
      <Toastr ref={toastrRef} />
      <form>
        <Card>
          <header>Adicionar usuarios</header>
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
            <Button type="submit" onClick={handleClickButton}>
              Registrar
            </Button>
          </CardBody>
        </Card>
      </form>
    </Layout>
  );
}
