import React from 'react';
import Layout from 'Layouts';
import styled from 'styled-components';
import faker from 'faker';
import { Button, InputGroup, Card } from '@paljs/ui';
import Link from 'next/link';
import DataTable from 'react-data-table-component';
const createUser = () => ({
  id: faker.random.uuid(),
  name: faker.internet.userName(),
  email: faker.internet.email(),
  address: faker.address.secondaryAddress(),
  bio: faker.lorem.sentence(),
  image: faker.image.avatar(),
});

const MyDataTable = styled(DataTable)``;

const createUsers = (numUsers = 5) => new Array(numUsers).fill(undefined).map(createUser);

const fakeUsers = createUsers(2000);

const TextField = styled.input`
  height: 32px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;

  &:hover {
    cursor: pointer;
  }
`;

const ClearButton = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 34px;
  width: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ButtonLink = styled(Button)`
  a {
    color: #ffffff;
    text-decoration: none;
    &:hover {
      color: #ffffff;
    }
  }
`;
const FilterComponent = ({ filterText, onFilter, onClear }: any) => (
  <>
    <InputGroup>
      <TextField
        id="search"
        type="text"
        placeholder="Fitrar por nome"
        aria-label="Search Input"
        value={filterText}
        onChange={onFilter}
      />
    </InputGroup>

    <ClearButton type="button" onClick={onClear}>
      x
    </ClearButton>
  </>
);

const columns = [
  {
    name: 'Nome',
    selector: 'name',
    sortable: true,
    cell: function cellTextElement(obj: any): JSX.Element {
      return <Card>{obj.name}</Card>;
    },
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
    cell: function cellTextElement(obj: any): JSX.Element {
      return <Card>{obj.email}</Card>;
    },
  },
  {
    name: 'Endereço',
    selector: 'address',
    sortable: true,
    cell: function cellTextElement(obj: any): JSX.Element {
      return <Card>{obj.address}</Card>;
    },
  },
  {
    name: 'Alterar',
    selector: 'id',
    sortable: false,
    cell: function cellButtonElement(obj: any): JSX.Element {
      return (
        <ButtonLink type="button">
          <Link href={`${obj.id}`}>Editar</Link>
        </ButtonLink>
      );
    },
  },
  {
    name: 'Excluir usuario',
    selector: 'id',
    sortable: false,
    cell: function cellButtonElement(obj: any): JSX.Element {
      return (
        <Button
          type="button"
          onClick={() => alert(`Tem a certeza que pretende excluir de forma permanente o usuario de id ${obj.id}`)}
        >
          Excluir
        </Button>
      );
    },
  },
];

const ListUser = () => {
  const [filterText, setFilterText] = React.useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
  const filteredItems = fakeUsers.filter(
    (item) => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
  );

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText('');
      }
    };

    return (
      <FilterComponent
        onFilter={(e: any) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);
  return (
    <Layout title="List">
      <MyDataTable
        title="Lista de Usuarios"
        columns={columns}
        data={filteredItems}
        pagination
        paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
        persistTableHead
        customStyles={{ rows: { style: { backgroundColor: 'transparent' } } }}
      />
    </Layout>
  );
};
export default ListUser;
