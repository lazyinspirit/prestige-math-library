/** A renumbered workflow cannot reinterpret another revision's receipts. */
export function assertWorkflowRevision(data: any, revision?: string, hasResults = false): void {
  if (!revision || data.workflowRevision === revision) return;
  if (data.workflowRevision || data.stage || Object.keys(data.stages ?? {}).length
    || Object.keys(data.dispatches ?? {}).length || hasResults) {
    throw new Error('Workflow revision differs: use a fresh run and state directory. Historical receipts cannot be adopted under new stage numbering.');
  }
}
