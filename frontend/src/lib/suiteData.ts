export type Metric = { label: string; value: string; note: string };
export const sourceSystems = [
  { name: 'AIScholarshipFinancialAidAssistant', ownership: 'Learners source capabilities and workflows', coverage: ['Learners', 'Programs', 'Classes'] },
  { name: 'AIScholarshipFinancialAidOperations', ownership: 'Programs source capabilities and workflows', coverage: ['Assignments', 'Assessments', 'Schedules'] },
  { name: 'AIScholarshipFinancialAidAnalytics', ownership: 'Classes source capabilities and workflows', coverage: ['Approvals', 'Resources', 'Compliance'] },
  { name: 'AIScholarshipFinancialAidWorkflow', ownership: 'Assignments source capabilities and workflows', coverage: ['Engagement', 'Analytics', 'Reports'] },
];
export const dashboardMetrics: Metric[] = [
  { label: 'Learners', value: '84', note: 'Active' },
  { label: 'Programs', value: '61', note: 'Open' },
  { label: 'Classes', value: '37', note: 'Need review' },
  { label: 'AI Tool Runs', value: '318', note: 'Last 24 hours' },
];
export const healthMetrics: Metric[] = [
  { label: 'Exceptions', value: '28', note: 'Open' },
  { label: 'Approvals', value: '46', note: 'Pending' },
  { label: 'Documents', value: '640', note: 'Tracked' },
  { label: 'Audit Items', value: '91%', note: 'Current' },
];
export const dashboardModules = ['Learners operating view', 'Programs operating view', 'Classes operating view', 'Assignments operating view', 'Assessments operating view', 'Schedules operating view', 'Approvals operating view', 'Resources operating view'];
export const workflowHighlights = ['Learners workflow with records, approvals, audit, and reporting', 'Programs workflow with records, approvals, audit, and reporting', 'Classes workflow with records, approvals, audit, and reporting', 'Assignments workflow with records, approvals, audit, and reporting', 'Assessments workflow with records, approvals, audit, and reporting'];
