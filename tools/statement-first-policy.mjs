// Run-local opt-in: legacy/live frontiers never acquire new editorial duties.
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
export const policyPath = (root, run) => join(root, 'research', `${run}-statement-first.json`);
export function readStatementPolicy(root, run, domain) {
  if (!/^[a-zA-Z0-9_-]+$/.test(run ?? '')) return null;
  const file = policyPath(root, run);
  if (!existsSync(file)) return null;
  const policy = JSON.parse(readFileSync(file, 'utf8'));
  if (policy.version !== 1 || policy.run !== run || policy.domain !== domain || policy.standard !== 'statement-first-v1')
    throw Error(`Invalid statement-first policy: ${file}`);
  return policy;
}
export function isFreshStatementRun(root, run, stateDir) {
  if (!/^[a-zA-Z0-9_-]+$/.test(run ?? '')) throw Error('Invalid run name');
  return !existsSync(join(stateDir, 'state.json')) && !existsSync(join(stateDir, 'config.json'))
    && !readdirSync(join(root, 'research')).some(name => name.startsWith(`${run}-`));
}
export function writeStatementPolicy(root, run, domain) {
  writeFileSync(policyPath(root, run), JSON.stringify({version: 1, run, domain, standard: 'statement-first-v1'}, null, 2) + '\n', {flag: 'wx'});
}
export const statementDirections = `
## Uninterrupted statements: every item class

Every assigned item's statement, definition, formulation or example description
must be complete and uninterrupted by hyperlinks. This applies to definitions,
algorithms, theorems, lemmas, propositions, corollaries, examples, counterexamples,
false statements, remarks, open problems, postulates, physics theorems, thought
experiments and reported experiments. Preserve all hypotheses, notation,
quantifiers, conclusions, attribution, physical scope and empirical qualifications.
Use plain mathematical terms in place of inline links; remove citation-only
parentheticals without removing assumptions. Keep existing clean wording.

Move ALL hyperlinks after the COMPLETE section into an immediately following
level-two section named with the original heading followed by ' references', e.g. 'Definition references',
'Statement references', 'Example references', 'Postulate references' or
'Observations references'. 'Statement refuted' uses 'Statement references'.
Every reference occupies its own source line and paragraph, separated from the
next by a blank line, with a meaningful visible label. Include wikilinks,
Markdown/reference-style links, autolinks and HTML anchors. Do not delete links,
attribution or logical dependencies as a substitute for moving them. Keep source
metadata, deps/justified_by and relevant proof facts. Proofs, Refutations,
Verifications, Counterexample proof arguments and Facts & Assumptions retain
necessary supplier links; mathematical formulas, lists and pseudocode are allowed
inside complete statements. Remarks with prose headings use the same rule.

Authors and authorized repairers enforce this across their assigned scope;
read-only reviewers report violations. Preserve original claim strength and
published status. Respect existing write boundaries and imported source protection.
Changes to an original Statement/Definition or physical public interface retain
the SAME reviewer's direct/indirect consumer duties; escalate outside repairs.
The native workflow's counters, gates, models, ownership and proof requirements
remain mandatory. This editorial instruction grants no acceptance or publication.
`;
