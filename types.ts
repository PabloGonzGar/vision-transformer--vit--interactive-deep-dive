
export enum SlideType {
  COVER = 'COVER',
  LIMITS = 'LIMITS',
  ARCHITECTURE = 'ARCHITECTURE',
  SELF_ATTENTION = 'SELF_ATTENTION',
  BENCHMARKS = 'BENCHMARKS',
  ETHICS = 'ETHICS',
  REFERENCES = 'REFERENCES',
  CONCLUSION = 'CONCLUSION'
}

export interface SlideData {
  id: number;
  type: SlideType;
  title: string;
  subtitle?: string;
  label?: string;
}

export interface ReferenceItem {
  title: string;
  description: string;
  author: string;
  tag?: string;
  icon: string;
}
