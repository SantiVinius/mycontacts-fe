import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm/index.js';

export default function NewContact() {
  return (
    <>
      <PageHeader title="Novo contato" />
      <ContactForm buttonLabel="Cadastrar" />
    </>
  );
}
