import React from 'react';
import { Button } from '@paljs/ui/Button';
import { InputGroup } from '@paljs/ui/Input';
import Link from 'next/link';

import Layout from 'Layouts';
import Auth, { Group } from 'components/Auth';

export default function RequestPassword() {
  return (
    <Layout title="Esqueci a Password">
      <Auth
        title="Esqueci a Password"
        subTitle="Insira o teu Email e recebererá um link de recopração de senha no teu email"
      >
        <form>
          <InputGroup fullWidth>
            <input type="email" placeholder="Endereço de Email" />
          </InputGroup>
          <Button status="Success" type="button" shape="SemiRound" fullWidth>
            Solicitar Password
          </Button>
        </form>
        <Group>
          <Link href="/auth/login">
            <a>Voltar para o Log In</a>
          </Link>
        </Group>
      </Auth>
    </Layout>
  );
}
