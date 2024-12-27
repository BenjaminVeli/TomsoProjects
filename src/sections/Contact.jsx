import emailjs from '@emailjs/browser';

import { useRef, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  const formRef = useRef();
  
  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };


  // service_eycuf28
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try{
      emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Tomso',
          from_email: form.email,
          to_email: 'tomso.app@gmail.com',
          message: form.message
        },
        process.env.REACT_APP_EMAILJS_USER_ID
        )

        setLoading(false);

        alert('Tu mensaje ha sido enviado con éxito')
    } catch(error){
      setLoading(false);
      console.log(error);
      alert('Algo salió mal!')
    }
  }

  return (
    <section id="contacto" className="pb-28">
      <div className="container mx-auto c-space">


        <div className="relative min-h-screen flex items-center justify-center flex-col">
          
          <img src="/assets/img/terminal.png" alt="TerminalBackground" className="absolute inset-0 min-h-screen"/>
          <div className="contact-container">
            <h2 className="text-4xl md:text-6xl font-bold pb-4 text-white uppercase text-center">Contacto</h2>
            <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
              <label className="space-y-3">
                <span className="field-label">Nombre Completo:</span>
                <input type="text" name="name" value={form.name} onChange={handleChange} required className="field-input" placeholder="Ingresa tu nombre completo"/>
              </label>

              <label className="space-y-3">
                <span className="field-label">Correo electrónico:</span>
                <input type="email" name="email" value={form.email} onChange={handleChange} required className="field-input" placeholder="Ingresa tu correo electrónico"/>
              </label>

              <label className="space-y-3">
                <span className="field-label">Mensaje:</span>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className="field-input" placeholder="Hola, estoy interesando en ..."/>
              </label>

              <button type="submit" className="field-btn" disabled={loading}>
                {loading ? 'Enviando mensaje...' : 'Enviar mensaje'}
                <img src="/assets/img/arrow-up.png" alt="arrow-up" className="field-btn_arrow"/>
              </button>

            </form>

          </div>
        </div>


        <div className="border-t border-b border-gray-500 px-16 py-12 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* GitHub */}
            <a
              href="https://github.com/BenjaminVeli"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-start items-center md:justify-center text-white"
            >
              <FaGithub className="text-white text-3xl mr-4"/>GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/benjamin-jhosep-veli-mariano/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-start items-center md:justify-center text-white"
            >
              <FaLinkedin className="text-white text-3xl mr-4" />LinkedIn
            </a>

            {/* Gmail */}
            <a
              href="tomso.app@gmail.com"
              className="flex justify-start items-center md:justify-center text-white"
            >
              <SiGmail className="text-white text-3xl mr-4" />Gmail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
