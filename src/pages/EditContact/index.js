import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm/index.js';

export default function EditContact() {
  return (
    <>
      <PageHeader title="Editar Vinius" />
      <ContactForm buttonLabel="Salvar alterações" />
    </>
  );
}
