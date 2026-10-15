import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';

const run = 'physics-td-qft-rpm-62-2026-10-14';
const owner = 'step5-v2-gate-r1-u2';
const lock = JSON.parse(readFileSync('.physics-autopilot/step5-shared-write.lock/owner.json'));
assert.equal(lock.owner, owner);
if (process.argv.includes('--render-only')) {
  // The renderer rereads the current ledger while the shared lock is held.
  const result = spawnSync(process.execPath, ['tools/physics-support/defect-ledger.mjs', 'render'], {stdio: 'inherit'});
  process.exit(result.status ?? 1);
}
const read = path => JSON.parse(readFileSync(path, 'utf8'));
const write = (path, value) => writeFileSync(path, JSON.stringify(value, null, 2) + '\n');

// Reread each owning batch and the live supplier inside this critical section.
const qftPath = `research/${run}-batch-49.proof-contracts.json`;
const qft = read(qftPath);
const supplier = readFileSync('items/thm-qft-example-finite-dyson-unitarity.md', 'utf8');
const statement = supplier.split('## Statement\n')[1].split('\n## ')[0];
const begin = statement.indexOf('For every pair of basis indices');
const end = statement.indexOf(' These are identities for this finite matrix model.', begin);
assert(begin >= 0 && end > begin);
const quote = statement.slice(begin, end);
assert(quote.includes('\\operatorname{Im}_{\\mathrm H}T_2'));
const qftCitations = qft.contracts['pthm-qft-example-regulated-probability-control'].citations;
const f7 = qftCitations.filter(c => c.fact === 'F7' && c.source === 'thm-qft-example-finite-dyson-unitarity');
assert.equal(f7.length, 1);
f7[0].quote = quote;
write(qftPath, qft);

const riskPath = `research/${run}-batch-11.proof-contracts.json`;
const risk = read(riskPath);
const riskItem = readFileSync('items/ex-tdmath-finite-ensemble-mismatch.md', 'utf8');
assert(riskItem.includes('a_1=(1+\\varepsilon^2)e^{-\\varepsilon\\min K}'));
assert(riskItem.includes('0<\\Delta<\\varepsilon'));
risk.contracts['ex-tdmath-finite-ensemble-mismatch'].risk_review = {
  status: 'complete',
  reviewer: owner,
  notes: 'Read both current verification steps and the exact Definition/Statement of all four cited mathematical suppliers. On J=(0,infinity), every nonempty compact K has a positive minimum; a0=1 and a1=(1+epsilon^2) exp(-epsilon min K) form a finite summable majorant for the two unit-weight energy terms. Thus the summable-canonical theorem applies, and Z=1+exp(-beta epsilon)>0 gives a strictly positive excited probability. Exponential positivity and monotonicity are supplied by the stated exponential/logarithm interfaces. Under 0<Delta<epsilon, the half-open shell [0,Delta) contains exactly the ground state and assigns excited probability zero. No limiting ensemble-equivalence assertion or empirical inference is made. For epsilon=2, Delta=1, beta=log 2, the canonical probability is 1/5 and the shell probability is zero. This records the current author-role risk examination, not independent acceptance.'
};
write(riskPath, risk);

const exteriorPath = `research/${run}-batch-21.proof-contracts.json`;
const exterior = read(exteriorPath);
const exteriorItem = readFileSync('items/ex-td-volume-sized-external-field.md', 'utf8');
assert(exteriorItem.includes('dimension $d\\geq2$'));
const f2 = exterior.contracts['ex-td-volume-sized-external-field'].citations.filter(c => c.fact === 'F2' && c.source === 'def-td-admissible-van-hove-and-tempered-exterior');
assert.equal(f2.length, 1);
f2[0].reviewed = {
  upheld: true,
  by: owner,
  reason: 'The Example explicitly fixes d>=2 and physical_scope states dimension at least two, exactly as the cited exterior Definition requires. F2 quantifies over every allowed exterior at that fixed dimension; it does not quantify over dimensions. With phi=0 each summand in W_n is zero; the empty exterior has all counts zero and belongs to Omega(0). The current verification distinguishes zero and nonzero c and excludes V=0 only from per-volume division. This is a faithful restatement in its existing hypotheses; the widening detector has matched dimension d inside the phrase allowed exterior.'
};
write(exteriorPath, exterior);

console.log(JSON.stringify({owner, contracts: [qftPath, riskPath, exteriorPath], item_writes: 0, historical_ledger_writes: 0}));
