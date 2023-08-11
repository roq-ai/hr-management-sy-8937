import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PerformanceEvaluationInterface {
  id?: string;
  employee_id: string;
  team_lead_id: string;
  evaluation_date: any;
  evaluation: string;
  created_at?: any;
  updated_at?: any;

  user_performance_evaluation_employee_idTouser?: UserInterface;
  user_performance_evaluation_team_lead_idTouser?: UserInterface;
  _count?: {};
}

export interface PerformanceEvaluationGetQueryInterface extends GetQueryInterface {
  id?: string;
  employee_id?: string;
  team_lead_id?: string;
  evaluation?: string;
}
