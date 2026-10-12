import fs from 'node:fs';
import path from 'node:path';
import { loadStep3 } from '../../../tools/step3-decisions.mjs';
import { step1Decision, recordStep1 } from '../../../tools/step1-decisions.mjs';

const root = process.cwd();
const run = 'physics-cm-qm-gr-79-2026-10-11';
const evidence = path.join('research', run + '-crash-recovery/batch41-focused-interface-review');
const state = JSON.parse(fs.readFileSync(path.join(root, '.physics-autopilot', run, 'state.json'), 'utf8'));
const dispatch = state.dispatches['1-scaffold:batch-40'];
if (!dispatch?.endedAt || !dispatch.lastExitOk) throw Error('Exact40 native writer has not drained');
const claims = JSON.parse(fs.readFileSync(path.join(root, 'research', run + '-batch-40.pages.json'), 'utf8'))
  .flatMap(page => page.items);
const snapshot = loadStep3(root, run);
const subjects = [
  'thm-nrqm-controlled-dynamics-dollard-integrable-remainder',
  'thm-nrqm-controlled-dynamics-dollard-channel-completeness',
];
const rows = [];
for (const item of subjects) {
  const claim = claims.find(row => row.id === item);
  const prior = step1Decision(snapshot, item);
  const file = path.join(root, 'research', run + '-step1-' + item + '.json');
  const backup = path.join(root, evidence, 'before-repair', path.basename(file));
  if (fs.existsSync(file) && !fs.existsSync(backup)) fs.copyFileSync(file, backup);
  const reason = item.endsWith('integrable-remainder')
    ? 'The all-sign Fourier comparison and single-log remainder have a complete local analytic repair. Current CC-only Statement still names Coulomb self-adjoint/essential-spectrum suppliers whose actual supplied proof hypotheses include AC. The proposed AC+CC comparison/completeness evidence is concrete; no CC-only spectral prerequisite or hypothesis exception is accepted. Evidence: ' + evidence + '/proposed-dollard-ac-after.md.'
    : 'Current CC-only full attractive-Coulomb completeness uses radial spectral/group suppliers explicitly stated under AC+CC. Infinite-bound-spectrum quotation and continuous assembly repaired; full range-inclusion/commutant/completeness proof is supplied in proposed AC+CC after evidence. CC-only supplier closure or explicit hypothesis-scope exception remains required. Evidence: ' + evidence + '/proposed-dollard-ac-after.md.';
  const row = recordStep1(root, { run, item, decision: 'escalated', dependencies: claim.deps,
    reason, owner: false });
  rows.push({ item, previousDecision: prior.row?.decision, decision: row.decision,
    sha256: row.sha256, archived: path.relative(root, backup) });
}
fs.writeFileSync(path.join(root, evidence, 'native-escalations.json'), JSON.stringify(rows, null, 2) + '\n');
console.log(JSON.stringify(rows));
