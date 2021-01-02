import { Button } from '@paljs/ui/Button';
import { InputGroup } from '@paljs/ui/Input';
import { Checkbox } from '@paljs/ui/Checkbox';
import React from 'react';
import Link from 'next/link';

import Auth, { Group } from 'components/Auth';
import Layout from 'Layouts';

export default function Login() {
  const onCheckbox = () => {
    // v will be true or false
  };
  return (
    <Layout title="Login">
      <Auth title="Login" subTitle="Ola! Faça o Login com seu email">
        <form>
          <InputGroup fullWidth>
            <input type="email" placeholder="Endereço de Email" />
          </InputGroup>
          <InputGroup fullWidth>
            <input type="password" placeholder="Password" />
          </InputGroup>
          <Group>
            <Checkbox checked onChange={onCheckbox}>
              Lembrar password
            </Checkbox>
            <Link href="/auth/request-password">
              <a>Esqueci a password?</a>
            </Link>
          </Group>
          <Button status="Success" type="button" shape="SemiRound" fullWidth>
            Login
          </Button>
        </form>
      </Auth>
    </Layout>
  );
}
