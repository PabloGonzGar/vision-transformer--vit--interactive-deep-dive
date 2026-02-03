
import { SlideType, SlideData, ReferenceItem } from './types';

export const SLIDES: SlideData[] = [
  { id: 0, type: SlideType.COVER, title: "Vision Transformers: Una imagen vale más que 16x16 palabras", subtitle: "Un nuevo paradigma en visión por computadora", label: "Diapositiva 00" },

  { id: 1, type: SlideType.LIMITS, title: "El Techo de Cristal de las CNNs Tradicionales", subtitle: "Limitaciones fundamentales de las CNN que llevaron al desarrollo de ViT.", label: "Slide 1.0" },

  { id: 2, type: SlideType.ARCHITECTURE, title: "Transformer Encoder: Modularidad y Flujo de Datos", subtitle: "Desglose paso a paso del procesamiento de imágenes.", label: "Diapositiva 2" },

  { id: 3, type: SlideType.SELF_ATTENTION, title: "Mecanismo de Auto-Atención (Self-Attention)", subtitle: "El motor global de comprensión de contexto.", label: "Diapositiva 3: Lógica del Tensor" },

  { id: 4, type: SlideType.BENCHMARKS, title: "Benchmarks y el Fenómeno del Pre-training", subtitle: "Escalabilidad con datasets masivos vs CNNs.", label: "Diapositiva 4 / Rendimiento" },

  { id: 5, type: SlideType.ETHICS, title: "Marco Regulatorio y Aplicabilidad Industrial", subtitle: "IA responsable, cumplimiento y Green AI.", label: "Diapositiva 5: Ética" },

  { id: 6, type: SlideType.REFERENCES, title: "Referencias Bibliográficas", subtitle: "Fuentes clave utilizadas en esta investigación.", label: "Slide 6" },
  
  { id: 7, type: SlideType.CONCLUSION, title: "¡Gracias por su atención!", subtitle: "El futuro de la visión es atencional.", label: "Final" },
];

export const REFERENCES: ReferenceItem[] = [
  { title: "Paper Original", description: "Foundational paper introducing the ViT architecture.", author: "Dosovitskiy et al. (2020) - An Image is Worth 16x16 Words", tag: "Core", icon: "article",src:'https://arxiv.org/abs/2010.11929' },
  { title: "Scalability", description: "Research on scaling laws and optimization.", author: "Zhai et al. (2022) - Scaling Vision Transformers", icon: "trending_up",src:'https://arxiv.org/abs/2106.04560' },
  { title: "Official Repository", description: "Official implementation source code and pre-trained models.", author: "Google Research - Vision Transformer (GitHub)", icon: "code",src:'https://github.com/google-research/vision_transformer' },
  { title: "Educational Resources", description: "Interactive tutorials and implementations.", author: "Hugging Face - Transformers Documentation", icon: "school",src:'https://huggingface.co/docs/transformers/model_doc/vit' },
  { title: "Critical Analysis", description: "Training data-efficient image transformers & distillation.", author: "Touvron et al. (2021) - DeiT", icon: "biotech",src:'https://arxiv.org/abs/2012.12877' },
];
