import { useState, type FormEvent } from 'react';
import styled from 'styled-components';
import { Section, Container, SectionTitle, Button } from './common';

// Get your free access key at https://web3forms.com/
// Replace this with your actual access key
const WEB3FORMS_ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE';

const ContactGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing['2xl']};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ContactInfo = styled.div``;

const ContactIntro = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  line-height: 1.8;
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.md};

  svg {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    color: ${({ theme }) => theme.colors.primary};
    margin-top: 2px;
  }
`;

const ContactLabel = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.dark};
  opacity: 0.6;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const ContactValue = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.forest};
`;

const ContactLink = styled.a`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.forest};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const FormWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing['2xl']};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const FormGroup = styled.div``;

const Label = styled.label`
  display: block;
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.dark};
`;

const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  border: 2px solid ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.base};
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  border: 2px solid ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.base};
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const SubmitButton = styled(Button)`
  width: 100%;
`;

const SuccessMessage = styled.div`
  background: ${({ theme }) => theme.colors.forest};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  text-align: center;
`;

const ErrorMessage = styled.div`
  background: #fee2e2;
  color: #dc2626;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

const LicenseIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
  </svg>
);

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('subject', 'New Contact Form Submission - PinesConcrete');
    formData.append('from_name', 'PinesConcrete Website');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please try again or call us directly.');
    }
  };

  return (
    <Section id="contact">
      <Container>
        <SectionTitle>Get in Touch</SectionTitle>

        <ContactGrid>
          <ContactInfo>
            <ContactIntro>
              Ready to start your next concrete project? Contact us today for a free
              quote and consultation. We service Werri Beach, Gerringong, Kiama, and
              the greater South Coast area.
            </ContactIntro>

            <ContactDetails>
              <ContactItem>
                <PhoneIcon />
                <div>
                  <ContactLabel>Phone</ContactLabel>
                  <ContactLink href="tel:0438703109">0438 703 109</ContactLink>
                </div>
              </ContactItem>

              <ContactItem>
                <LocationIcon />
                <div>
                  <ContactLabel>Location</ContactLabel>
                  <ContactValue>Werri Beach, NSW</ContactValue>
                </div>
              </ContactItem>

              <ContactItem>
                <LicenseIcon />
                <div>
                  <ContactLabel>Contractor License</ContactLabel>
                  <ContactValue>255088C</ContactValue>
                </div>
              </ContactItem>
            </ContactDetails>
          </ContactInfo>

          <FormWrapper>
            {status === 'success' ? (
              <SuccessMessage>
                <strong>Thank you!</strong>
                <p>We'll get back to you as soon as possible.</p>
              </SuccessMessage>
            ) : (
              <Form onSubmit={handleSubmit}>
                {/* Honeypot field for spam protection */}
                <input type="checkbox" name="botcheck" style={{ display: 'none' }} />
                
                {status === 'error' && (
                  <ErrorMessage>{errorMessage}</ErrorMessage>
                )}

                <FormGroup>
                  <Label htmlFor="name">Name</Label>
                  <Input type="text" id="name" name="name" required />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="phone">Phone</Label>
                  <Input type="tel" id="phone" name="phone" required />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" id="email" name="email" required />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="message">Project Details</Label>
                  <TextArea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    required
                  />
                </FormGroup>

                <SubmitButton 
                  type="submit" 
                  $variant="primary" 
                  $size="lg"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </SubmitButton>
              </Form>
            )}
          </FormWrapper>
        </ContactGrid>
      </Container>
    </Section>
  );
}
