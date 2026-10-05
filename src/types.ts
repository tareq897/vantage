export type ThemeMode = 'light' | 'dark';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  iconName: string;
  badge: string;
}

export interface RecruitmentStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  turnaround: string;
  deliverable: string;
  icon: string;
}

export interface PartnerBrand {
  id: string;
  name: string;
  category: string;
  subtitle: string;
  description: string;
  isPlaceholder?: boolean;
}

export interface InquiryFormData {
  fullName: string;
  companyName: string;
  country: string;
  email: string;
  phone: string;
  serviceInterest: 'Policy Development' | 'Recruitment' | 'HR Consulting' | 'Training' | 'Payroll' | 'Full-Suite Package';
  message: string;
}
