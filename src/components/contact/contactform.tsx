import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

interface FormData {
  email: string;
  message: string;
}

const FormContact: React.FC = () => {
  const [state, handleSubmit] = useForm("xgegglwe");

  return (
    <form className='form' onSubmit={handleSubmit}>
      <label htmlFor="email" className="text-[#388e3c]"> Adresse Email</label>
      <input id="email" type="email" name="email" className='inputColor' />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message" className="text-[#388e3c]">Message</label>
      <textarea id="message" name="message" className='inputColor'/>
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button className='bg-[#26A69A] hover:bg-[#FF6F00] text-white' type="submit" disabled={state.submitting}>
        Envoyer
      </button>

      {state.succeeded && <p className="text-[#388e3c]">Merci!</p>}
    </form>
  );
};

export default FormContact;