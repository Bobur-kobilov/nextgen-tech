// Central company configuration - now imports from constants
import { COMPANY_DATA, OFFICES_DATA, SERVICES_DATA } from '@/constants/data';

export const COMPANY = {
  ...COMPANY_DATA,
  offices: OFFICES_DATA,
  services: SERVICES_DATA
} as const;