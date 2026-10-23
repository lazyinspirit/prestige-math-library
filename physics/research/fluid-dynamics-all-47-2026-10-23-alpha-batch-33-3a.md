# Batch 33 Step 3a adjudication

Run: `fluid-dynamics-all-47-2026-10-23`; group: `batch-33`.

## Completed level 0

`refuter:33:1`, `rem-fd-fluid-sobol-interface`, Proof 1.3: **confirmed_nonfatal**, repair confidence 1. The original conclusion is sound but abbreviates the centered-to-uncentered calculation. The repair states the hybrid law, product integrability, covariance expansion and cancellation of m². Statement, hypotheses, dependencies, manifest inventory and provenance remain unchanged. Closed defect: `fluid-dynamics-all-47-2026-10-23-3a-batch-33-sobol-expansion-fixed`.

Checked every proof step: true one-factor index 1; independent two-row denominator count K with probabilities 1/4,1/2,1/4; conditional ratio mean 5/6; optional ratio asymptotics only with AC, L4 and positive variance. Exact suppliers: the three Sobol/projection definitions, covariance definition, pick-freeze theorem, algorithm, ratio theorem, and AC definition. The high-risk review is complete in the owning contract. No diagrams occur or are required.

Sources inspected: [Owen, Variance Components and Generalized Sobol Indices](https://arxiv.org/pdf/1205.1774), §2/§2.1 (product ANOVA and hybrid convention); [DTU UQ notes](https://www2.compute.dtu.dk/~apek/UQ2018/lecture1.pdf), PDF pages 79–82 (cross-product mean and centering). General finite-product scope comes from the exact local suppliers, not an assumed extension of cube-only notation.

Next: review the level-2 observable interface and its sensor suppliers, then level-3 sampling theorem, algorithm and corollary, published finding and final focused checks.

## Completed level 2

`def-fd-random-fluid-observable`: current Definition and both draft sensor suppliers read, including the pairing proof. H is the supplier's finite-positive-measure L² quotient; J=S_psi is continuous, representative-independent and square-integrable under exactly the supplied law. General Banach-state sensors use their boundedness; selected PDE maps and scalar composite measurability remain hypotheses. No selection theorem, point evaluation, IID law or convergence is inferred. Zero laws and supplied measurable representatives are correctly separated. Risk review complete; no decision owed and no edit needed.

Next: read the sampling theorem and exact direct statistical suppliers.

## Completed level 3 and published finding

`thm-fd-observable-sampling-bias-split`: all eight proof steps and thirteen direct suppliers independently checked. Finite variance addition and mean-square expansion give sigma_h²/n+b_h² for Y in L1 and Y_h in L2; the tail argument requires epsilon_s>0 and the external bias/variance bounds. This includes n=1, variance zero and equality of bias allocation. Measurable pointwise and Lipschitz certificates bound expectations; a Bernoulli witness excludes replacing the true bound with its empirical mean. Callback conditioning changes the law unless success is almost sure; the zero-probability completion case supplies no conditional claim. Actual infinite IID sequences, AC and positive variance are confined to the indicated asymptotic branch. DCT controls zero denominators and normal-CDF continuity gives the interval liminf. No repair needed; risk review complete.

`reader:33:1`, published `def-standard-normal-and-normal-laws`: **confirmed_nonfatal**. The current Definition still has the three malformed clauses quoted in the original reader finding. Inspected all eight declared prerequisite definitions/statements: AC; density normalization; indefinite integral measure; probability measure; law; pushforward probability; continuous-map measurability; Dirac function. They justify the density probability measure and affine law, including sigma=0. The sampling consumer F6/4.1 uses only the explicitly displayed normal density and continuity/no atoms, so its conclusion remains valid. Published bytes unchanged. Maintenance remains OPEN for the mathematics owner: replace inserted result titles by grammatical mathematical assertions, retaining all equations, AC, parameters and references; then apply original-mathematics consumer/import controls. Closed local disposition is nonfatal-recorded, not a published repair.

Additional sources: [DTU notes](https://www2.compute.dtu.dk/~apek/UQ2018/lecture1.pdf), PDF pages 3–8 and 14–16; [NASA CFD error classification](https://www.grc.nasa.gov/WWW/wind/valid/tutorial/errors.html), Classification of Errors and Physical Approximation Error, used only as interpretation context. Owen Chapter 2 request returned HTTP403; no new full-chapter reading or external theorem acceptance is claimed. Local complete arguments and exact supplier hypotheses carry the conclusions.

Next: finalize the algorithm's guard/manifest comparison, then the corollary risk review and focused validation.

## Completed level 4

`touched:33:alg-fd-uq-observable-budget`: **amended_repair**, repair confidence 1. Current raw SHA256 `343ea42dbcb1aebbca3aea35f7d3147d2777791b0f6cf37f5b74fbbd81da7968` equals the post-reader source hash. Replacing only its Definition with the original manifest text reconstructs raw SHA256 `e0c8e036355351d0433daf342fa0bfd4300032237cc164c05b842642713d5196`, exactly the pre-reader hash. Thus the historical source delta is recoverable: two overlapping guard outputs became an explicit absence-first, numeric-validation-second priority. No historical uncertainty or owner-resolution exception is needed. The manifest Definition mirror was stale; it is now synchronized to the accepted carrier. The algorithm source needs no additional edit.

All actual supplier uses checked: observable definition, sampling/bias theorem and estimator definition. Fixed mode calls every index exactly once without resampling; certified mode guards before sampling and uses a finite ceiling with positive denominator. Boundary cases: both absent certificate/oracle and invalid numeric data return not-certified; with both supplied, invalid data return invalid-input; V_h=0 gives N=1 and no sample variance. A true certificate remains an external premise. Search of items/library found only the corollary as item consumer and fd-st02 as page placement. The corollary Statement and Proof 1.2 use the prescribed guards generically and require no change; the page has no narrative body. No necessary outside consumer repair or further interface propagation. Closed defect: `fluid-dynamics-all-47-2026-10-23-3a-batch-33-guard-priority`.

Next: complete the corollary's contract-only touched disposition and risk review.

## Completed level 5

`touched:33:cor-fd-uq-observable-budget-guarantees`: **reviewed_no_defect**, change_kind audit_enrichment, defect_ids empty. Its raw source SHA256 `d64f88923f4d6a65db49b30670b131e06d388915d61ea6ee4fbbf8496950130e` is identical in pre/post snapshots and current source; the reader only rebound the exact algorithm supplier quotation in its contract. Independent review of the full Statement, six proof steps and seven direct suppliers found no defect.

Completion iff every draw lies in A is checked both ways; independence yields p^N and 1-p^N<=N(1-p). Rectangle conditional probabilities give the changed law for 0<p<1, with no conditional certificate at p=0. At p=1, measurable zero extensions preserve independence, laws and moment identities. The centered-square expansion gives unbiased sample variance and squared standard error. Bernoulli zero samples justify the diagnostic warnings. Certified numeric guards give a positive denominator and finite N>=max(1,V_h/(delta epsilon_s²)); the sampling theorem then proves both bounds. At zero variance N=1 is valid and the nonnegative centered square vanishes almost surely, without sample variance. Finite-return and exact-real-arithmetic hypotheses limit termination/complexity honestly. Gaussian interpretation requires an actual infinite IID sequence and the stated extra assumptions. Risk review complete.

No assigned original Statement changed in this adjudication; only Sobol Proof 1.3 was expanded. No diagram is present or required in the routed scope. No empirical observations, physical premises or experimental precision are introduced.

Next: focused reflow/precheck/render/proof-layout and risk-report verification, final decisions and consumer-ledger note.

## Local checks and handoff

Executed after the final item edit:

- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/rem-fd-fluid-sobol-interface.md`: exit 0, unchanged.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/rem-fd-fluid-sobol-interface.md`: exit 0, one item passed.
- `node tools/physics-support/rendercheck.mjs items/rem-fd-fluid-sobol-interface.md`: exit 0, real KaTeX and renderer YAML checks passed.
- `node tools/physics-support/proof-layout.mjs items/rem-fd-fluid-sobol-interface.md`: exit 0, one item, six steps, zero defects; this is the final changed-item layout check after reflow.
- `node tools/physics-support/proof-contract.mjs research/fluid-dynamics-all-47-2026-10-23-batch-33.proof-contracts.json --strict`: exit 0, six of six items checked, zero errors, one shotgun-bracket heuristic warning on the unchanged sampling theorem. Its 1.1 moment/variance argument actually uses F1/F2/F3 and A1 as tagged; the complete scientific risk review checks the remaining steps individually. The warning is not a new mathematical finding.
- `node tools/physics-support/defect-ledger.mjs validate --run fluid-dynamics-all-47-2026-10-23`: exit 0, 240 current-run rows, zero errors at execution time. The initial session-local Sobol ledger taxonomy transcription is superseded by the valid active `sobol-expansion-fixed` row; the scientific finding and original source history are preserved.
- `node tools/physics-support/risk-report.mjs research/fluid-dynamics-all-47-2026-10-23-batch-33.proof-contracts.json` was run before reviews, then with `--require-reviewed` after the four required complete reviews: exit 0, zero errors, six items routed.
- Exact JSON inventory check: four decisions, precisely the two touched and two finding obligations, no extras. Both assigned A/B page bodies remain empty and compact-v1 is preserved.

Final decisions: refuter Sobol calculation confirmed nonfatal and repaired; reader normal-law prose confirmed nonfatal and recorded read-only; algorithm source repair accepted with stale manifest quotation amended (`amended_repair`); corollary contract quotation enrichment reviewed without defect. All four required risk reviews are complete. Report and decisions are the exact task-named paths. The batch-33 cross-batch input and shared frontier dependency notes retain all stable IDs/edges; published maintenance was merged under the prescribed exclusive lock and only this session's lock was released. No substantial prerequisite blocker or necessary outside consumer repair remains. Published normal-law maintenance remains OPEN to its original mathematics owner.

No judge, acceptance stamp, dispatch, native gate battery, publication or stage transition was performed. The engine owns final carrier hashing, collection and gates.
