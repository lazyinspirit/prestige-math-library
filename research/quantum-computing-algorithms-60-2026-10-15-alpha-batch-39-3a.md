# Batch 39 Step 3a adjudication

Run: `quantum-computing-algorithms-60-2026-10-15`; group: `batch-39`.

Reviewed in generated dependency order. Scope owes two touched and two refuter decisions; reader findings and page-only obligations are empty. Published suppliers remain read-only.

## Completed review checkpoints

- `lem-qa-15-continuous-markov-derivative-bound`: refuter:39:2 confirmed nonfatal. Added F12 to interpolation triangle estimate 4.1 and the same finite triangle use in 2.1; contract inputs and citation uses synchronized. All six steps checked, including distinct roots, derivative sum identity, common signs on outer intervals, centered difference, degree-zero and endpoint cases. Exact supplier statements checked. Carothers Chapter 5 Lemma 5.19 and Theorems 5.21–5.22 (cached text lines 5450–5695) support the route; local proof fills the omitted algebra. Risk review complete; repair confidence 1. No Statement change or consumer repair.
- `lem-qa-15-grid-return-derivative`: all steps checked against exact differentiability, compact-extrema and MVT interfaces. Nearest grid distance ≤1/2 yields h≤1+D; coincident endpoints and h≤1 handled explicitly. Risk review complete; no defect or decision owed.

- `lem-qa-15-branch-density-degree`: all six steps and direct supplier interfaces checked. Zero conditional probability gives a positive trace-zero operator and hence zero, preserving linear unnormalized updates; finite tree induction raises degree by at most two per XOR conjugation. Risk review complete; no defect.
- `lem-qa-15-query-amplitude-degree`: all four steps checked, including T=0, N=0 and fixed unitaries between queries. XOR affine updates agree with de Wolf §11.2, printed pp.90–91; Childs §21.3 uses the phase-oracle equivalent context. Risk review complete; no defect.

- `lem-qa-15-symmetrization`: amended_repair: retained the reader proof repair, with manifest synchronization (triangle supplier added to deps, supplier checks and current proof obligations). Exact current raw hash equals post-reader `cc987d7922660398204a412a88d6c4abc4a273812f360f6e59c8293f3e01c991`; pre-reader item/contract hashes differ and post-reader contract contains F5. Counting gives each size-s subset multiplicity s!(N−s)!, and (t)s/(N)s remains valid for integer t<s by its zero factor. N=0, s=0, empty D and zero reduction work. The statement is unchanged; current approval is of the finite-average support repair. No further item edit.
- `prop-qa-15-promise-domain-scope`: explicit point indicator works for proper and empty D and N=0; off-promise polynomial freedom does not assert algorithmic probability freedom. Risk review complete; no defect.
- `thm-qa-15-acceptance-degree-bound`: all output and leaf sums, real-part coefficients, multilinear reduction and integer minimum checked. Includes zero polynomials, N=0, T=0, empty D. Q notation is within the complexity definition’s error domain. Risk review complete; no defect.
- `ex-qa-15-or-polynomial-small-n`: refuter:39:1 confirmed nonfatal. Added F1 to 2.1 and made its inherited terminal output rule explicit; contract input/citation uses and item/manifest proof provenance synchronized. All four cube probabilities and the 00/11 exact promise checked. No Statement change; risk review complete; repair confidence 1.

- `thm-qa-15-exact-degree-or`: product upper bound and N roots of the nonzero q−1 prove equality, including N=1. Risk review complete; no defect.
- `thm-qa-15-or-approximate-degree-lower-bound`: amended_repair: retained the reader title repair. Current raw hash equals post-reader `f4f15c4de07a5177501a6217d9681cf1b250af6e4cc92a2939edbba539e1c915`, versus pre-reader `6bf806d50b16cbff989a19da51142fbc46f27fcdeb18864da50685064c1ab666`; contract unchanged across reader snapshots. Mirrored corrected title into manifest. Normalization (q+epsilon)/(1+2epsilon), positive jump c, D≤ah and h≤1+D give a≥c/(1+c)=(1−2epsilon)/2, splitting a≥1 before division by 1−a. Error endpoints and N=1 checked. Risk review complete; repair confidence 1. No Statement change. The manifest’s prior QA01 integration escalation is preserved for owner disposition; it is not cleared here. The current claim relies solely on the explicit local oracle-only interface, not an identification with QA01.
- `thm-qa-15-parity-approximate-degree`: strict alternating signs give one interior IVT root in every disjoint unit interval; root count and exact product representative prove degree N. Query conclusion is ceiling(N/2). Risk review complete; no defect.
- `cex-qa-15-off-cube-values-are-unconstrained`: checked fixed two-query NAND witness, copying/reset branches and address transitions. Layer values 1,1,0 give q(t)=1−t(t−1)/2 and q(1/2)=9/8. Risk review complete; no defect.

## Sources and boundaries

Read exact current direct supplier Statement/Definition sections for the routed proofs (and model/output normalization interfaces); did not re-audit all transitive published foundational proofs. Read complete relevant source arguments in cached full texts: Carothers Chapter 5 Lemma 5.19 and Theorems 5.21–5.22, printed pp.57–60 (`research/quantum-computing-algorithms-60-2026-10-15-batch-39-sources/carothers.txt`, lines 5450–5695); Childs Chapter 21 §§21.3–21.6, printed pp.98–101 (`research/quantum-computing-planning/sources/qc_r6/childs-lecture-notes.txt`, lines 8911–9171); de Wolf §11.2, printed pp.90–92 (`research/quantum-computing-planning/sources/qc_r3/de-wolf-1907.09415.txt`, lines 7211–7408). Source URLs are retained in current carriers and the batch source-evidence artifact. Childs uses a phase oracle for its amplitude induction; de Wolf supplies the exact XOR update. The general approximation normalization is verified locally rather than assuming approximants are probabilities.

No defective published item, affected outside consumer, substantial unmet local prerequisite or proposed withdrawal was identified. No Statement/Definition changed. Existing historical escalations and dependency records are retained; no owner escalation was cleared. Four closed defect rows accompany the four decisions. Reader findings remain empty, with no additional reader decision. Only the two explicit support repairs changed item bytes; the two accepted reader carriers are retained.

## Decisions and local validation

Exactly four decisions: both touched carriers are `amended_repair` because necessary manifest synchronization extends the reader carrier, while preserving the reader’s item edits; both refuter obligations use route `flagged` and verdict `confirmed_nonfatal`. Their closed ledger rows are `qc60-b39-3a-symmetry-triangle`, `qc60-b39-3a-or-title`, `qc60-b39-3a-markov-triangle`, and `qc60-b39-3a-example-output`. Repair confidence is 1.

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-qa-15-continuous-markov-derivative-bound.md items/ex-qa-15-or-polynomial-small-n.md`: both unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts` on those same two explicit paths: 2 checked, 0 failing.
- `node tools/rendercheck.mjs` on those same two explicit paths: 2 files, YAML and actual KaTeX pass.
- Final `node tools/proof-layout.mjs items/lem-qa-15-continuous-markov-derivative-bound.md items/ex-qa-15-or-polynomial-small-n.md`: 2 items, 9 steps, 0 defects. No item edit or formatter followed this command.
- `node tools/risk-report.mjs research/quantum-computing-algorithms-60-2026-10-15-batch-39.proof-contracts.json`: initial routing read; final rerun with `--require-reviewed`: 0 errors, all eleven HIGH/CRITICAL entries complete (13 total proof entries routed).
- `node tools/proof-contract.mjs research/quantum-computing-algorithms-60-2026-10-15-batch-39.proof-contracts.json --strict`: final 0 errors, 0 warnings, 13/13 checked. Initial check reported missing symmetrization F4 use at 2.1; corrected that contract mapping without a mathematical change or extra defect row.
- Defect-ledger append: four valid closed rows appended and generated view refreshed under the tool’s append lock.

One exploratory invocation used nonexistent `tools/proof-contracts.mjs`; it did not run a check. Corrected to the actual singular `proof-contract.mjs` command above. No judging, stamping or gate battery was performed. The engine owns current hashes and subsequent gates. No local blocker remains; prior owner escalation evidence is preserved.
