# Batch 1 Step 3a adjudication

Run: `machine-learning-all-101-2026-10-19`; group: `batch-1`; scope: batch 1 only.

Read the dispatched order, scope, reader report/findings, refute-1 artifact and pre/post snapshots. Obligations: reader:1:1, reader:1:2, and touched:1:ex-gaussian-point-mass-endpoint-coupling-bound. Refuter has no findings. Initial risk-report routes eight HIGH/CRITICAL items. Current Git HEAD at entry: 603500781c.

## Completed item: deterministic Ito increment lemma (level 0)

Claim and conventions: coordinatewise scalar Ito integrals of deterministic positive C1 g have N_d(0,(v(t)-v(s))I_d) increments independent of F_s. Reviewed the complete five-step proof and the twelve exact supplier statements listed in the item. Deterministic projection of bounded elementary coefficients, the variance inequality, Tonelli, scalar isometry and L2 norm continuity justify the approximation. Ordinary and event-weighted characteristic functions pass to the limit; uniqueness identifies conditional laws for every positive-probability event, and null events are immediate. Adapted continuous versions justify finite-list independence. No endpoint or choice gap found.

Reader:1:1: confirmed_nonfatal. finite_smoke[0].checked_in named nonexistent step 5.1; replaced it by Statement and steps 1.1, 1.2, 2.1, 3.1, 4.1. Complete Alpha risk_review recorded before moving to level 1. Sources independently opened: Duke Probability Workbook, Gaussian Ito Integrals (complete exercise; proof route, not a supplied proof), and NYU Stochastic Calculus Notes Lecture 7, sections 1.1–1.2, PDF pages 1–2 (deterministic Gaussianity stated as prior context; local proof supplies it). URLs remain in item metadata. No claim relies on a source supplying the missing local argument.

Additional source repair: the NYU lecture was misattributed to Särkkä and Solin. The NYU course home page identifies Jonathan Goodman and links Lecture 7; corrected the metadata and reference label to Goodman and sections 1.1–1.2. This is bibliographic only; Statement, proof, dependencies, manifest interface and provenance classifications remain unchanged. Source: https://math.nyu.edu/~goodman/teaching/StochCalc2007/ .

## Completed item: smoothed-law definition (level 1)

Reader:1:2: confirmed_nonfatal. Corrected finite_smoke[0].checked_in to Definition and steps 1.2, 1.3, 2.1, 3.1, 4.1 (there is no step 6.1). All six proof steps and thirteen exact supplier statements checked. The SDE data satisfy the complete/usual filtration, adapted increment independence, initial L2, measurability, zero state-Lipschitz and bounded-growth hypotheses. Positive lower noise bound gives strictly positive variances; scaling and product normals normalize the kernels. Tonelli on Borel products proves the law/transition identities, including s=0 and singular initial measures. Completing the square has center (bx+ay)/(a+b) and covariance ab/(a+b); integration yields precisely phi_(a+b). Checked R=0 and d=1. Full AC covers inherited CC. Alpha risk_review complete; no change to Definition or consumers.

## Completed item: density and forward equation (level 2)

Reviewed all six steps and eleven exact suppliers. Local finite-measure Gaussian derivative bounds prove the claimed spatial smoothness and C1 time regularity on positive strips. Continuous paths give narrow continuity at zero. Compact-support integration by parts gives the weak identity, with bounded test derivatives controlling the omitted initial interval. The backward heat test has uniform terminal limits for spatial derivatives and time derivative, and cutoff residual O(L^-1+L^-2) uniformly against any probability-valued solution. Its restriction to [0,t] extends to the stipulated test domain [0,T] by h(s,x)=f(x)-(s-t)g(t)^2 Delta f(x)/2 for s>t, so the implicit continuation is immediate nonfatal exposition. Bounded Fourier tests plus scalar uniqueness and Cramer–Wold prove equality of laws. Hunter Theorem 5.5 (printed p.131, PDF p.137) requires Lp initial data; it is only context here. Alpha risk_review complete; no source repair needed.

## Completed level-2 endpoint and two-point example

Endpoint: all three proof steps and nine suppliers checked. The current batch-50 Wasserstein Definition and its two-step product-coupling/Tonelli proof were read directly. Finite second moments precede the ordered coupling (X_epsilon,X_0); its cost is exactly d v(epsilon). The elementary tail estimate and uniform continuity on the compact ball of radius R+1 give weak convergence for every bounded continuous test. epsilon=T, R=0, d=1 and epsilon down to zero are included; no density/score at zero or non-endpoint error guarantee is asserted.

Two-point example: both steps and both suppliers checked. The finite support lies in the required ball; Dirac integration gives exactly the stated convex mixture, including alpha=0, alpha=1 and a=b. Time-zero and positive-time laws are distinguished. Both Alpha risk reviews complete without source repairs. The pre-existing open Wasserstein page-interface workflow record remains untouched; it is not a missing mathematical prerequisite for these explicit coupling uses.

## Completed item: mixture score (level 3)

All five steps and five suppliers checked. Positive p normalizes the posterior; compact support supplies bounded moments and local differentiation majorants. The quotient rule gives partial_i m_j=C_ji/v, so the score Jacobian is -I/v+C/v^2. Posterior variance in direction u is at most R^2|u|^2, yielding the stated operator norm and growth bounds, then segment integration proves global Lipschitz. R=0 gives zero covariance; endpoint divergence is not suppressed. No repair required; Alpha risk_review complete.

## Completed item: touched point-mass coupling example (level 3)

Verdict: accepted_repair; repair_confidence: 1. Read both proof steps and six exact suppliers. The original authenticated archive at `research/machine-learning-all-101-2026-10-19-owner-step3-authenticated-preimages/preimage/items/ex-gaussian-point-mass-endpoint-coupling-bound.md` hashes to pre snapshot af6ab2fa2b507a2c47914ff71370eba1778878b6411bacdbbe853bc1e9028461. The post archive at `research/machine-learning-all-101-2026-10-19-owner-step3-authenticated-reader-post/batch-1/sources/items/ex-gaussian-point-mass-endpoint-coupling-bound.md` hashes to post snapshot 363a69ac98e705354e8b2e718a0030c648d7b8b882bd12579fba299fd1491a72; current item equals that archive exactly. Only proof 2.1 changed: arbitrary couplings and constructed pushforward now have marginals (mu_epsilon,delta_a). The original omission was nonfatal polish since coordinate-swap transports couplings without changing quadratic cost. Current proof directly establishes every coupling has the common cost d c^2 epsilon and constructs one via x to (x,a); finite Gaussian moments justify the W2 domain. No statement/dependency change and no further edit needed. Alpha risk_review complete.

Additional lemma locator correction: Särkkä–Solin section 4.1 is printed pp.42–45, PDF pp.50–53, rather than PDF pp.42–45. Corrected the explicit PDF range while retaining the reference and mathematical content.

## Completed item: singular-line example (level 3)

Both steps and all six suppliers checked, including the box-measure Statement and full proof and the explicit CC use. The embedding of unit-interval Lebesgue probability is continuous and supported in the unit ball. Rectangles of area 2/n prove planar nullity (the box supplier also directly covers zero-width boxes). The pushforward Gaussian convolution has normalization 1/(2 pi v) and the displayed exponent; positivity and infinite spatial differentiability hold at every positive time. Alpha risk_review complete; no consumer repair.

## Read-only published supplier alert

`thm-lebesgue-measure-of-a-box-of-every-kind`, sources.references[0], labels a URL as Hunter Measure Theory Proposition 2.7 but the linked PDF title page is François Golse, Mean-Field Limits in Statistical Dynamics, arXiv:2201.02005. The exact URL was independently opened: https://metaphor.ethz.ch/x/2022/fs/401-4820-22L/notes/Mean-Field_Limits_in_Statistical_Dynamics_Golse.pdf . The local volume proof and actual consumer use remain sound; this is a bounded nonfatal bibliographic alert, not a mathematical refutation. Published content is unchanged. Owner strategy: authenticate the intended Hunter source and replace the mismatched URL or correct the attribution, retaining theorem/interface; do not guess a URL. Recorded under A-P in the published ledger with its original bounded review history retained.

## Decisions and repair records

Exactly three owed obligations are decided in the companion decisions JSON (`version: 1`, `group: batch-1`):

- `reader:1:1`: confirmed_nonfatal; closed fixed defect `ml101-b1-3a-ito-smoke-locator`.
- `reader:1:2`: confirmed_nonfatal; closed fixed defect `ml101-b1-3a-smoothing-smoke-locator`.
- `touched:1:ex-gaussian-point-mass-endpoint-coupling-bound`: accepted_repair; closed fixed nonfatal-polish defect `ml101-b1-3a-coupling-order`.

Additional bounded findings have no invented routed obligations: `ml101-b1-3a-nyu-author` and `ml101-b1-3a-ito-book-pdf-pages` are fixed; `ml101-b1-3a-published-box-source` is closed as nonfatal-recorded with owner maintenance pending in the published ledger. All six rows were appended through the serialized defect-ledger tool at caught_at_stage 3a-adjudicate. Completed repairs carry repair_confidence 1. The canonical generated defect view was not regenerated (`append --no-render`); engine closure owns any subsequent view/gate preparation.

The only locally edited item is the deterministic-integral lemma, with bibliographic metadata/reference-label corrections. Its Statement, Facts and Proof are byte-identical to the authenticated original sections. No mathematical statement/definition interface, item inventory, dependencies, manifest strategy or provenance classification changed, so no propagated consumer repair is needed. No verification.judge record was present. Reader's coupling item remains byte-identical to the authenticated post-reader carrier. Its updated contract derivation remains consistent with the actual proof. Every HIGH/CRITICAL contract has a new specific Alpha risk_review; the moderate untouched/unflagged point-mass-score example has no routed obligation and was not re-adjudicated.

The frontier-dependency ledger records the exact owned Wasserstein consumer uses, the published box-source alert, and preserves stable IDs, existing workflow records and proposed dispositions. No published source was edited. The published ledger was reread/merged under this worker's exclusively created `research/.published-consumer-ledger.lock`, and only that owned lock was released; the single existing box-theorem classification row was moved to A-P, with prior history retained and counts incremented.

## Sources and scope limits

Independently opened primary-source locations used in this review:

- [Goodman course home page](https://math.nyu.edu/~goodman/teaching/StochCalc2007/) and [Lecture 7](https://math.nyu.edu/~goodman/teaching/StochCalc2007/notes/l7.pdf), sections 1.1–1.2, PDF pp.1–2: attribution, prior deterministic Gaussianity context and adapted step sums.
- [Mattingly, Gaussian Ito Integrals](https://sites.duke.edu/probabilityworkbook/gaussian-ito-integrals/), complete exercise: step approximation/characteristic-function route, not a supplied proof.
- [Särkkä–Solin](https://users.aalto.fi/~asolin/sde-book/sde-book.pdf), section 4.1, Brownian Definition 4.1 and equation (4.6), printed pp.42–45 / PDF pp.50–53: confirms corrected locator. Chapter 5 section 5.2 Theorem 5.4, printed p.61 / PDF p.69: forward-equation context presupposes the density; it does not supply the singular-start proof.
- [Hunter](https://math.ucdavis.edu/~hunter/pdes/pde_notes.pdf), section 5.1.2 Theorem 5.5 and full short proof, printed p.131 / PDF p.137: Lp-data smoothing and differentiation context; that hypothesis is not substituted for finite singular measure data.
- [Tang et al.](https://arxiv.org/pdf/2605.19391), section 1, equations (1.1)–(1.3), PDF p.2: Gaussian posterior-mean identity under suitable integrability, satisfied by compact support. The current score's covariance identity and bound were independently derived locally.
- [Golse title page](https://metaphor.ethz.ch/x/2022/fs/401-4820-22L/notes/Mean-Field_Limits_in_Statistical_Dynamics_Golse.pdf), PDF p.1: establishes the published title/URL mismatch. No intended Hunter replacement URL was guessed.

Lawler's linked book was opened for identity/contents context; no claim of reading its full integral chapter in this dispatch is made. The required arguments were reviewed directly in current local proofs and exact supplier statements. Previously reported author/reader source readings remain attributed to their original reports.

No assigned carrier contains a TikZ/tikzcd diagram, and none is needed for these analytic proofs. All eight reviewed statements/definitions/examples are uninterrupted by links; their existing reference sections remain. Both page carriers remain frontmatter-only with compact-v1 preserved. There is no page-only obligation in this dispatch.

## Local checks and remaining owner work

Actual checks, all exit 0:

- Initial `node tools/risk-report.mjs research/machine-learning-all-101-2026-10-19-batch-1.proof-contracts.json`: eight required HIGH/CRITICAL reviews, plus one moderate item.
- Final same command with `--require-reviewed`: 0 errors, nine items routed; eight specific Alpha reviews complete.
- `node tools/proof-contract.mjs research/machine-learning-all-101-2026-10-19-batch-1.proof-contracts.json --strict`: 0 errors, 0 warnings, 9/9 checked.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-deterministic-ito-integral-has-gaussian-independent-increments.md items/ex-gaussian-point-mass-endpoint-coupling-bound.md`: 2 checked, 0 failing.
- `node tools/rendercheck.mjs` on those same two explicit paths: both YAML and all math parse successfully with the actual parser/KaTeX.
- After the final item edit, one batched `node tools/proof-layout.mjs items/lem-deterministic-ito-integral-has-gaussian-independent-increments.md items/ex-gaussian-point-mass-endpoint-coupling-bound.md`: 2 items, 7 steps, 0 defects. No item was edited afterward.
- `node tools/defect-ledger.mjs validate --run machine-learning-all-101-2026-10-19`: 19 current-run rows checked, 0 errors.
- Focused read-only assertions: decisions equal exactly the three scoped obligations; eight reviewed statements contain no links; no diagram fences; both page bodies empty and compact-v1 present; lemma mathematical sections unchanged; no prior judge record.

Live status was recomputed from `.autopilot` during this dispatch: run remains active in Step 3a, with this batch's adjudication owed at that observation. No historical RESUME file was used. No engine transitions, agent dispatches, judgments, stamps, certification or publication were initiated.

No substantial missing prerequisite or unresolved local mathematical blocker. Owner follow-up: published box-source bibliography maintenance and the already-open batch-1 Wasserstein prerequisite-page interface record, retained without claiming a page audit. The engine owns final hashes, gate battery, scheduling and subsequent transitions.

