"use client";

import { useState } from "react";
import { contactSection, services } from "@/data/homepage";
import { useEnquiry } from "./EnquiryContext";
import styles from "./ContactForm.module.css";

const emptyForm = { name: "", phone: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(emptyForm);
  const [sent, setSent] = useState(false);
  const { interests, toggleInterest, clearInterests } = useEnquiry();
  const { title, submitLabel, resetLabel } = contactSection.form;

  const updateField = (field: keyof typeof emptyForm, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // TODO: send the form data to an API / email service
    setSent(true);
  };

  const resetForm = () => {
    setForm(emptyForm);
    clearInterests();
    setSent(false);
  };

  if (sent) {
    const interestText = interests.length ? interests.join(", ") : "working with JVS";
    return (
      <div className={`${styles.form} ${styles.success}`}>
        <span className={styles.successIcon}>✓</span>
        <h3 className={styles.successTitle}>Thank you, {form.name}.</h3>
        <p className={styles.successText}>
          We’ve noted your interest in {interestText}. The JVS team will reach you on {form.phone}.
        </p>
        <button type="button" onClick={resetForm} className={styles.resetButton}>
          {resetLabel}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3 className={styles.title}>{title}</h3>

      <div className={styles.row}>
        <label className={styles.label}>
          Full name
          <input
            required
            value={form.name}
            onChange={(e) => updateField("name", e.target.value)}
            placeholder="Your name"
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Phone
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            placeholder="+91"
            className={styles.input}
          />
        </label>
      </div>

      <div className={styles.label}>
        I’m interested in
        <div className={styles.chips}>
          {services.map((service) => {
            const selected = interests.includes(service.title);
            return (
              <button
                key={service.title}
                type="button"
                aria-pressed={selected}
                onClick={() => toggleInterest(service.title)}
                className={`${styles.chip} ${selected ? styles.chipSelected : ""}`}
              >
                {service.title}
              </button>
            );
          })}
        </div>
      </div>

      <label className={styles.label}>
        Message
        <textarea
          rows={3}
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
          placeholder="A few lines about what you need"
          className={styles.input}
        />
      </label>

      <button type="submit" className={styles.submit}>
        {submitLabel} <span>→</span>
      </button>
    </form>
  );
}
