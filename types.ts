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
  TECH = "Technology",
  HEALTH = "Healthcare",
  ENERGY = "Clean Energy",
  FINANCE = "FinTech"
}

export interface GeneratedInsight {
  topic: string;
  content: string;
  timestamp: Date;
}