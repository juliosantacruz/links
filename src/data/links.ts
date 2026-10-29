import type { IconName } from '../components/icons';
import type { StringKey } from '../i18n/strings';

export interface Link {
  id: string;
  /** Clave en src/i18n/strings.ts */
  label: StringKey;
  href: string;
  icon: IconName;
  /** Ocupa las dos columnas en la vista bento */
  wide?: boolean;
  /** Estilo sólido de acento */
  accent?: boolean;
  /** Descarga el archivo en lugar de abrir una pestaña */
  download?: boolean;
}

export const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');

export const links: Link[] = [
  { id: 'linkedin', label: 'linkedin', href: 'https://www.linkedin.com/in/julio-santacruz/', icon: 'linkedin' },
  { id: 'github', label: 'github', href: 'https://github.com/juliosantacruz', icon: 'github' },
  { id: 'portfolio', label: 'portfolio', href: 'https://juliosantacruz.dev/', icon: 'globe', wide: true },
  { id: 'instagram', label: 'instagram', href: 'https://www.instagram.com/juliosantacruz.dev/', icon: 'instagram' },
  { id: 'devto', label: 'devto', href: 'https://dev.to/julio_santacruz', icon: 'devto' },
  {
    id: 'cv',
    label: 'cv',
    href: `${base}${encodeURIComponent('Julio Santacruz_Fullstack Dev_Resume.pdf')}`,
    icon: 'download',
    wide: true,
    accent: true,
    download: true,
  },
];
