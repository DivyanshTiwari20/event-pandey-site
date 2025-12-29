export type EventType = 'wedding' | 'corporate' | 'political' | 'other';

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  eventType: EventType;
  date: string;
  guestCount: number;
  notes: string;
}