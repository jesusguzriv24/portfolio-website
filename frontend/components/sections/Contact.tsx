"use client";

import React, { useState } from "react";
import { Input } from "@heroui/input";
import { Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { addToast } from "@heroui/toast";
import { Icon } from "@iconify/react";
import FadeIn from "@/components/ui/FadeIn";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Jesus Guzman Rivera',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      if (result.status === 200) {
        addToast({
          title: "¡Mensaje enviado!",
          description: "Tu mensaje ha sido enviado correctamente. Te responderé pronto.",
          color: "success",
        });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      addToast({
        title: "Error al enviar",
        description: "No se pudo enviar el mensaje. Por favor, inténtalo de nuevo.",
        color: "danger",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-125px)] scroll-mt-20 mt-28"
    >
      <div className="container max-w-4xl px-6 mx-auto">
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl sm:text-4xl font-bold text-transparent bg-gradient-to-b from-[#1984ff] to-[#024591] bg-clip-text">
              Contacto
            </h2>
            <p className="px-8 text-md text-muted-foreground">
              ¿Tienes un proyecto en mente? ¡Hablemos y hagámoslo realidad!
            </p>
          </div>
        </FadeIn>

        <div className="flex justify-center">
          <div className="w-full max-w-3xl">
            <FadeIn>
              <div className="p-8 border shadow-lg bg-foreground/5 border-primary/20 rounded-2xl">
                <h3 className="mb-6 text-2xl font-bold text-center text-foreground">
                  Envíame un mensaje
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <Input
                      name="name"
                      label="Nombre completo"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={handleInputChange}
                      variant="bordered"
                      radius="lg"
                      classNames={{
                        inputWrapper:
                          "border-primary/30 data-[hover=true]:border-primary/50",
                      }}
                      disabled={isLoading}
                      required
                    />
                    <Input
                      name="email"
                      type="email"
                      label="Correo electrónico"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      variant="bordered"
                      radius="lg"
                      classNames={{
                        inputWrapper:
                          "border-primary/30 data-[hover=true]:border-primary/50",
                      }}
                      disabled={isLoading}
                      required
                    />
                  </div>
                  <Textarea
                    name="message"
                    label="Mensaje"
                    placeholder="Cuéntame sobre tu proyecto..."
                    value={formData.message}
                    onChange={handleInputChange}
                    variant="bordered"
                    radius="lg"
                    minRows={5}
                    classNames={{
                      inputWrapper:
                        "border-primary/30 data-[hover=true]:border-primary/50",
                    }}
                    disabled={isLoading}
                    required
                  />
                  <div className="flex justify-center">
                    <Button
                      type="submit"
                      color="primary"
                      size="lg"
                      radius="lg"
                      className="px-8"
                      isLoading={isLoading}
                      disabled={isLoading}
                      startContent={
                        !isLoading && <Icon icon="mdi:send" className="text-lg" />
                      }
                    >
                      {isLoading ? 'Enviando...' : 'Enviar mensaje'}
                    </Button>
                  </div>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;