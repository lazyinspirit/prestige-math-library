# Batch 43 Step-3a adjudication

Run: `bayesian-computational-statistics-62`; group: `batch-43`.

Scope: two touched obligations, no reader/refuter findings or page obligations. Read the scope, order task, reader report/findings, refuter report, and pre/post snapshots. Review proceeds in generated dependency order; no agents or judge cycles are dispatched.

## Completed level 2: alg-rauch-tung-striebel-smoother

Verdict: accepted_repair, repair_confidence: 1. Current raw source SHA-256 `6e7fbd01cd303bcc410463547f6540f5587ee5b6331f3294e2c848fca5a7b169` equals the reader-post hash; pre hash is `1aa0f0d313e6a1e2b677b3d2e4167cafe8a0b3359fc1e356819eeee587eca654`. Read the entire current Definition and direct suppliers alg-kalman-filter, def-linear-gaussian-state-space-model-with-independent-noises, and the Cholesky theorem including its induction/uniqueness proof. Row recurrences have matching rectangular dimensions, positive denominators and correct traversal; multiplying their equations gives the specified backward gain. The added instructions elaborate the existing solve, with unchanged gain and admissible inputs. No independently confirmed mathematical defect; no defect-ledger row is needed for this executable-detail enrichment. Forecast SPD and innovation SPD remain distinct, state/filter covariances may be singular, and T=0 returns the initial pair. Complete risk_review recorded in the batch contract.

Next: complete backward-kernel and singular-boundary risk reviews, then recursion theorem and scalar example; record exact source passages and final local checks.

## Completed level 3 risk reviews

Backward-kernel lemma: all steps and eleven direct suppliers read. The observed Gaussian block is Pforecast, explicitly SPD; state and residual covariance can be singular. Translation gives joint kernel measurability. The path-law ordered product makes future observations a kernel of X_next, and substitution of the historywise disintegration gives the arbitrary-event full-data RCD identity. Checked singleton history at k=0, final transition at k=T-1, and vacuous T=0. No defect or extra decision.

Singular-forecast example: all steps and six suppliers read. X0=X1=0 almost surely, S1=1, Pforecast=0. Constant delta0 satisfies every conditional event identity, including the displayed null observation singleton as an everywhere version. Ordinary inverse is undefined. No defect or extra decision. Both complete risk reviews recorded before higher-level adjudication.

Source: [Särkkä 2013](https://users.aalto.fi/~ssarkka/pub/cup_book_online_20131111.pdf), §§8.1–8.2, printed pp.134–137, Theorems 8.1–8.2, equations (8.2)–(8.15), PDF pp.153–156 (zero based), lines 8615–8841. Retrieved and read the complete relevant proofs; the reader’s PDF-access limitation is resolved for this review. The book gives the backward conditional decomposition and RTS formulas; local suppliers justify the PSD/singular and probability-kernel version claims without assuming densities.

Next: level 4 theorem and level 5 scalar example.

## Completed level 4: thm-rauch-tung-striebel-fixed-interval-recursion

Verdict: accepted_repair, repair_confidence: 1. Current raw SHA-256 `48cb0f90c48ce9631ff9e31369b27052ece16cb126f589a8395019a9d936679b` equals reader-post; pre is `2c856c97cc97488abc0f47be388101ffc7413d0abe501252a7280997a61e0def`. Read all four steps and fifteen direct suppliers. The new F13 and gain calculation explicitly connect the executable instructions to the backward-kernel gain; this is a sound elaboration of the existing unique linear solve. The kernel mixture satisfies the RCD identity by finite-measure equality on rectangles and pi-lambda extension. Independent Gaussian product coordinates show its mean is the algorithm update and its covariance is V+C Psmooth C^T, a sum of PSD matrices, equal to the displayed subtractive form. Backward induction includes time zero and the empty horizon. No mathematical defect confirmed; no ledger row. Risk review complete before the scalar example. No theorem Statement or dependency changed.

Next: scalar example arithmetic, consumer/interface records and local checks.

## Completed level 5 risk review

Read the scalar example and six suppliers. Independent Python Fraction computation reproduced forecasts (2,5/3), innovations (3,8/3), forward gains (2/3,5/8), backward gains (2/5,1/2), smoothed means (1/2,1,3/2), variances (5/8,1/2,5/8). All solve denominators are positive. The theorem gives the displayed everywhere version at data (1,2), including initial state and terminal filter. No defect or additional decision; risk review complete.

## Consumer and metadata disposition

The algorithm Definition elaboration retains the existing gain and solve domain. A current item reference/dependency search finds only the recursion theorem and the two examples as consumers; all are owned by batch 43 and have been read completely. Their actual uses remain sound. The theorem Statement is unchanged. No affected outside consumer was found, and no supplier repair or withdrawal is proposed.

The first strict proof-contract check found two stale citation quotes, in scalar-example F3 and singular-example F4, containing the pre-reader algorithm Definition. Refreshed those exact source quotes to the current Definition in this batch’s contract. This is mechanical citation synchronization, with no item edits, mathematical defect, or extra obligation. The algorithm and theorem remain accepted_repair, with confidence 1. Risk-review and quote changes explain the contract-only delta after reader-post. Existing manifest dependencies, provenance, and verification fields are unchanged.

All five complete risk reviews are recorded. No confirmed mathematical defect, published defect, unresolved prerequisite, escalation, historical-byte uncertainty, or blocker arose. Published content remains read-only; no published ledger entry is warranted. The shared frontier ledger receives a batch-owned consumer review note; stable IDs and all existing rows/withdrawals are preserved.

## Final local checks and handoff

- Initial risk report without `--require-reviewed`: six items routed, five HIGH/CRITICAL, zero errors. Final `node tools/risk-report.mjs research/bayesian-computational-statistics-62-batch-43.proof-contracts.json --require-reviewed`: six items, zero errors; all five required reviews complete.
- `node tools/proof-contract.mjs research/bayesian-computational-statistics-62-batch-43.proof-contracts.json --strict`: initially two stale algorithm citation quotes; after synchronization, six of six checked, zero errors or warnings.
- `node tools/tsx-run.mjs tools/precheck.mts` with the algorithm, backward-kernel lemma, singular example, theorem and scalar example paths: four proofs checked, zero failures; algorithm has no phase proof.
- `node tools/rendercheck.mjs` with those same five paths: all five pass real KaTeX and YAML parsing.
- Final `node tools/proof-layout.mjs items/alg-rauch-tung-striebel-smoother.md items/thm-rauch-tung-striebel-fixed-interval-recursion.md`: two items, four proof steps, zero defects. These reader-touched item sources were reviewed but not edited by this adjudicator.
- Exact rational scalar recurrence computation passed. Decision coverage equals exactly the two touched obligations. All six current item raw hashes equal their immutable reader-post snapshot hashes. Pre/post changed only the algorithm and theorem source carriers and corresponding contracts; manifests/pages retained their snapshot identities.

Outputs: this report and `research/bayesian-computational-statistics-62-alpha-batch-43-3a-decisions.json`, with two accepted_repair decisions and no defect IDs. Additional authorized changes are the five contract risk reviews, two synchronized citation quotes, and the batch-owned shared frontier ledger note. No item source, page, manifest, provenance, judge field or published carrier was changed. No native gate battery, judge, stamping or certification was run. No remaining local work or blocker; engine owns sealing and subsequent validation.
