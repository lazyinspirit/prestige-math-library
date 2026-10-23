# Batch 35 Step 3a adjudication

Run: `fluid-dynamics-all-47-2026-10-23`; group: `batch-35`; role: Alpha.

Scope: four touched obligations in generated order; reader and refuter finding arrays are empty. No page obligations. No agents, judges, stamps, publication or engine transitions were initiated.

## History binding

For each of the four touched items, replacing only its current Definition, Statement or Remark section with its owning batch-35 manifest statement reproduces the exact frozen pre-reader raw SHA-256. This was calculated independently, rather than inferred from the reader narrative. All current raw item hashes equal the frozen post-reader hashes. Thus the pre-reader bodies, unchanged proofs/references/metadata and exact interface differences are recoverable; no unknown historical delta is asserted. The definition changes only the integer horizon and ensemble size; the filter changes the integer horizon and null-set qualification; identifiability expands the pressure illustration; the remark changes the integer horizon and ensemble size. Manifest statement mirrors are being synchronized after these verified comparisons.

## Completed item: def-fd-fluid-coefficient-observation-model

Verdict: accepted_repair; repair_confidence: 1. The previously implicit integer horizon and member count are now explicit. This is a nonfatal precision repair: finite lists and recursions already imposed their intended discrete interpretation. The model defines ordered bases, coefficient/observation/transition maps, Gaussian noise independence, covariance signs, innovation solves, divisor-N update and deterministic realized-error interface. The local dimensions and gains agree with `alg-kalman-filter`, `alg-ensemble-kalman-filter` and `def-linear-gaussian-state-space-model-with-independent-noises`; all three complete supplier definitions and `def-axiom-of-choice` were opened. Cholesky solves compute the displayed gain without a numerical inverse. For zero horizon the Kalman loop is empty; for zero ensemble spread the positive observation covariance still makes the update solve invertible. AC is confined to the stochastic branch and not newly required for deterministic coefficient algebra.

Consumer review: current item/reference search finds the local filter, identifiability proposition, EnKF remark and outside `post-fd-fluid-observation-and-noise` and `pthm-fd-conditional-fluid-filter-law`. The physical postulate and theorem explicitly use integer horizons already and consume only the same finite coefficient/Gaussian equations and observation matrix. No use of noninteger horizons or ensemble sizes exists there. Their public interfaces need no repair, so no further-hop propagation is required. The outside symbolic one-sensor example uses horizon one and remains compatible. Mathematical claims remain conditional model statements with no empirical measurement premise.

Next: finish identifiability risk review, then exact-filter risk review, then the EnKF remark and final scoped checks.

## Completed item: prop-fd-finite-observation-identifiability

Verdict: accepted_repair; repair_confidence: 1. The original pressure-gauge illustration named an undefined representation/direction. The reader supplies the function space, linear representation Pi, nonzero constant direction and explicit observational kernel condition without changing the core equivalence or error estimate. Read all four current proof steps, exact square-root/SVD statements and their complete local proofs, and reader/refuter evidence. R positive definite makes its symmetric square root injective and invertible; W preserves kernels. On nonzero E the full domain singular-value list includes zeros when dim(E)>p or rank is deficient, so the unit-sphere infimum is attained and is positive iff G restricted to E is injective. Both directions checked. In the full-column-rank case, orthogonal expansion uniquely minimizes the squared weighted residual and yields the stated inverse-minimum-gain error bound by a finite sum of squared coordinates. Zero G, one-dimensional E, singular G and exact error zero are covered; E=0 is excluded. The pressure constant direction is defined by Pi and lies in ker(G); the complement fixes only this direction, and G descends to the quotient since its span is in the kernel. Neither construction asserts removal of other null directions. No stochastic error law, confidence statement or general PDE result follows. No new choice use. The only item consumer is the unchanged two-mode example, which uses the unchanged kernel conclusion. Axler fourth edition 7.65, 7.68 and 7.70 with proof (printed pp.271-274) support the singular-value convention; local square-root and SVD suppliers furnish the exact results. No unresolved defect.

The risk command reported CRITICAL 12; its complete review is now recorded in the owning contract. The untouched example was opened: G=[1,0] annihilates (0,1) and G(a+tv)=Ga for every scalar t. No consumer repair is needed. The two completed manifest interfaces now match current source. Next: exact-filter risk review.

## Completed item: prop-fd-linear-fluid-filter-interface

Verdict: accepted_repair; repair_confidence: 1. Integer indexing is explicit and the undefined nonsingular-observation qualifier is replaced by the precise chosen-version qualification. Read both authored proof steps and all four direct supplier definitions/statements; read the full exact-Kalman supplier proof, one-step conditioning lemma, conditional-Gaussian theorem and filtering-law definition. Step 1.1 matches finite integer horizon, changing positive state/observation dimensions, real F/H matrices, mutually independent Gaussian initial/process/observation vectors, PSD covariances, AC and SPD innovations exactly. Step 2.1 applies the supplied everywhere-defined kernel theorem, not merely a formal Gaussian-density calculation. The supplier proves measurability and the conditional event identity by independent-noise extension, Gaussian conditioning and integration over histories. T=0 is the singleton empty history and prior Gaussian. Zero/singular state, process and observation covariances remain allowed; no inverse of these is used. Only solved S matrices must be SPD. Values at null histories are those of a selected version, without asserting uniqueness there. The existing proof unchanged by reader is valid under that reading. Outside pthm-fd-conditional-fluid-filter-law F7, 2.1 and 3.1 explicitly use this same version and carry the null-set qualification; local EnKF remark fixes the chosen Kalman law. No consumer repair. Law et al. 4.1 Theorem 4.1/Corollary 4.2 (printed pp.78-80) gives classical nonsingular context; the stronger singular-covariance and variable-dimension claims are supplied by the complete local published proof, not attributed to that narrower book theorem. No empirical premise or unresolved gap.

The risk command reported CRITICAL 8; its complete review is recorded in the owning contract. Next: EnKF remark supplier comparison, final ledgers and checks.

## Completed item: rem-fd-fluid-enkf-scope

Verdict: accepted_repair; repair_confidence: 1. Integer horizon and ensemble cardinality make the finite sampling model explicit, without changing the convergence claim. All five direct dependencies were opened. The complete published large-ensemble proof was read: iid Gaussian reference members are coupled with identical inputs; exchangeability and L4 proximity give sample-covariance convergence; positive R bounds innovation inverses; gain convergence and uniform higher moments close the finite induction; bounded-Lipschitz empirical averages converge using L1 proximity and the iid reference variance bound. The reference-ensemble and uniform-moment proofs were also read. The remark matches fixed data, finite horizon, changing finite dimensions, independent Gaussian per-member perturbations, PSD prior/process and SPD observation covariances, and the supplier's divisor-N convention exactly. Its k=0 case is an iid prior average; no uniform-in-time, finite-N posterior independence, nonlinear, localization/inflation or transport convergence is asserted. Its technical sampling/convergence and modified-procedure terms are explicitly defined. It has no outside item consumer. The A-page placement remains unchanged and frontmatter-only. No diagram is present or needed for these matrix arguments.

## Source fidelity and limits

Read [Axler, fourth edition, §7E, 7.65/7.68/7.70 and proof, printed pp.271–274](https://linear.axler.net/LADR4e.pdf). Singular values include zeros up to the domain dimension, so the underdetermined case has zero minimum gain; the full SVD statement and local square-root proof supply the exact algebra used above.

Read [Law, Stuart and Zygalakis, §4.1 Theorem 4.1 and Corollary 4.2 with proofs, printed pp.78–80, and §4.2.3, pp.82–83](https://arxiv.org/pdf/1506.07825v1). The book gives the ordinary covariance/gain formulas under stricter nonsingularity assumptions and uses divisor N-1 for its displayed ensemble covariance. Exact singular-covariance and divisor-N claims here rely on the inspected published local suppliers, not an inflated attribution to this source.

Read [Mandel, Cobb and Beezley, §3 reference-ensemble construction/Lemma 4 and §4 Lemma 5, Theorem 1/proof and Corollary 1, pp.5–7](https://arxiv.org/pdf/0901.2951v2). These passages provide the iid reference/coupling and fixed-time convergence context. The inspected local proof explicitly supplies the stated per-member Gaussian process draws and finite sequence of dimensions. No full transitive foundational supplier audit or experimental-source review is claimed: this scope contains mathematical finite models and no measured data. Reviewer confidence concerns the conditional arguments, not empirical validity.

## Metadata and dependency maintenance

Synchronized exactly four manifest statement mirrors with the current item sections; preserved item/page identities, inventories, dependencies, roles, publication status and page bodies. Added two missing consumer-owned page-prerequisite rows to the batch-35 cross-batch record, for relations-functions-and-quotients and state-space-models-as-probability-laws. Their actual published page inventories and prose were opened, their immutable import pins matched, and the reached AC/state-space definitions were reviewed above. The previous three rows remain unchanged. This resolves the reader's metadata discrepancy without inventing a content finding. Updated only this batch's frontier-ledger note. No mathematical original, import, published content, outside consumer or judge record was edited; there was no prior judge record on the touched carriers to invalidate.

## Checks and disposition

Four exact preimage reconstructions match frozen pre-reader item hashes; all four current item hashes match frozen post-reader hashes. Four accepted repairs are recorded, each with confidence 1 and its own closed nonfatal ledger row. No routed reader/refuter finding, published defect, proposed withdrawal or outstanding mathematical escalation exists in this scope. Final local check results follow below. Engine decision stamping and the complete gate battery remain pending.

## Final local check results

- `node tools/physics-support/risk-report.mjs research/fluid-dynamics-all-47-2026-10-23-batch-35.proof-contracts.json`: 3 routed items, 0 errors. The required two CRITICAL reviews were then completed; the same command with `--require-reviewed` passed with 0 errors.
- `node tools/physics-support/proof-contract.mjs research/fluid-dynamics-all-47-2026-10-23-batch-35.proof-contracts.json --strict`: 3/3 proof contracts checked, 0 errors or warnings.
- `node tools/tsx-run.mjs tools/physics-support/precheck.mts` with the four touched item paths: both proof-bearing propositions passed, 2 checked, 0 failing; definition/remark have no applicable proof steps.
- `node tools/physics-support/rendercheck.mjs` with the four touched item paths and two owning page paths: 6 files passed YAML, KaTeX and delimiter/link-in-math checks.
- Final `node tools/physics-support/proof-layout.mjs` with all four touched item paths: 4 items, 6 steps, 0 defects. No item was edited by Alpha.
- Defect-ledger append validated and appended exactly four fixed nonfatal rows, then regenerated its derived Markdown view. No mechanical discovery error was recorded as a content defect.
- Independent consistency script: exactly four owed touched decisions; current item SHA-256 values equal frozen post-reader values; each current manifest statement equals its source section; each decision references exactly one fixed stage-3a ledger row. All assertions passed.

Help discovery: proof-contract `--help` printed usage with exit 2; precheck has no help mode and initially treated `--help` as a nonexistent filename. Both were followed by the explicit successful scoped commands above; neither was treated as a mathematical failure.

History bindings (pre-reader → unchanged current/post-reader raw SHA-256):

| Item | Pre | Current/post |
|---|---|---|
| `def-fd-fluid-coefficient-observation-model` | `6a18bffefac142074fcde6d456da19e6ff870f267cf8c62b9751441127590b0d` | `9ed5bced9845d940ecd981e3db5133bc24bddb148a50b44d3f81a44df38409ac` |
| `prop-fd-finite-observation-identifiability` | `a9495cdd26320ccfaaa6c66cdbd4249a06992f0e7b977fd312d0cb1271448509` | `fe3acf1cc7d32b95256b195432cc66d3dd62cb43a9fc753ec816e308c7977bb6` |
| `prop-fd-linear-fluid-filter-interface` | `a0bffc1c1ecd33dc76f4cb569f03cb269853e7f943fb6f68f481d2ce874a6a3b` | `537553bad42f4df22291600f9221e93a5d9fc084ec61049d44ca9f2356cbfc45` |
| `rem-fd-fluid-enkf-scope` | `a6792a0321b347774a15f9eecc129e8d5d7c48a071963aa37c44edaae8ee7a07` | `c0c0fe39ca645bb7e9952b0cb896a910720d41092b2e940661c81e8fdd9f8ecd` |

All assigned local work is complete. No unresolved prerequisite or outside consumer disposition remains. The engine owns current decision hashes, coverage and stage gates; these focused checks do not assert engine acceptance or publication.
