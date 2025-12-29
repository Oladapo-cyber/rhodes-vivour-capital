export interface PortfolioCompany {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  roi: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export enum InsightCategory {
  COMMODITY = "Commodity Trading",
  AGRICULTURE = "Agriculture",
  AITECH = "A.I. Labs",
  GENETICS = "Genetic Research",
  SUSTAINABILITY = "Sustainability"
}

export interface GeneratedInsight {
  topic: string;
  content: string;
  timestamp: Date;
}