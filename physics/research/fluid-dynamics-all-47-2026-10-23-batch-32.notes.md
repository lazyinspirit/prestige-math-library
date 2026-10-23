# Batch 32 — Random fields and dependent fluid statistics

Run: `fluid-dynamics-all-47-2026-10-23`; pair: `fd-st01`.

## Plan and design reconciliation

The controlling design is `research/plan-fluid-dynamics-refresh-track.md`, lines 1072–1097. It assigns A page `fd-st01`, B page `fd-st01-examples`, category `fluid-dynamics-mathematics`, library `mathematics`, orders 669/670, and page requirements `banach-valued-integration-and-the-radon-nikodym-property`, `mcmc-clt-and-monte-carlo-standard-error`, and `product-measures-and-the-fubini-tonelli-theorems`. The current `research/plan-spec.json` agrees on those page interfaces, titles, category, library, order and companion; its item arrays are empty scaffolding placeholders. No design/plan conflict remains to record. The design names four items but omits formulations and proof routes; two local A-page lemmas were added as required intermediates for sensor well-definedness and Bochner tensor integrability. `inventory_expansion_required` is true for those two helpers. No shared plan or imported source was changed.

The dependency-level snapshot records batch 32 at batch level 0 with no earlier batch requirements. Item levels are computed from in-run item dependencies only: definition 0, both local lemmas 1, and the Reynolds theorem, sensor CLT proposition and AR(1) example 2.

## Imported supplier inspection

All 51 external item edges and all three external page edges in the cross-batch dependency array were checked against current read-only carriers and the exact `research/math-imports.json` SHA-256 pins; every row is `verified`. This scoped status records current interfaces, not independent proof acceptance. The imported MCMC theorem `thm-mcmc-clt-sufficient-regimes` has a complete current proof of its six regimes and explicitly assumes full AC. The Bochner criterion, bounded-linear-map interchange, Tonelli and Fubini proofs were inspected; their exact measurability/integrability hypotheses are recorded in the consuming Facts and contracts. Riesz–Fischer’s current statement requires countable choice and its proof uses that choice to select a sequence of representatives; the tensor helper and expected theorem therefore state AC_omega. `status: draft`, pending precheck or independent approval alone was not treated as a dependency gap.

Inspected imported supplier interfaces include: the quotient Lp norm and Minkowski bounds; Holder and linearity of the Lebesgue integral; probability and product-sigma-algebra definitions; strong measurability; Riesz–Fischer completeness; Bochner criterion and bounded-map interchange; Tonelli and Fubini; countable rational-box basis facts for finite-dimensional measurability; the exact six-regime MCMC theorem; the covariance long-run-variance definition; Markov-kernel, invariant/stationary, irreducibility, aperiodicity, recurrence, ergodicity, reversibility, total-variation, geometric-series, weak-convergence and dominated-convergence interfaces. Imported item byte pins match their current mirrors.

## Full-text source reading and fetch evidence

Every locatable passage below was inspected in full. Coverage enumerates 12 harvested results, including the specific RANS passage deliberately marked out of scope. `source-fetch-check --stamp` succeeded for all seven coverage entries: 7/7 full PDFs verified, one successful fetch each, no recovery retries and no dropped sources. Repeated Geyer and Jones entries serve the separate B page and carry the same fetched SHA.

### fd-st01 sources

- **Gerald Teschl, Topics in Real and Functional Analysis, Section 11.6** — `https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07%2110_23_44_AM.pdf`; Lemmas 11.30–11.31 and Theorem 11.32, printed pp. 332–335; full-text section inspected. Fetch: 563 pages, 2619066 bytes, SHA-256 prefix `d172dae775f1274f`, stamped 2026-10-22T15:08:42.810Z. Harvest disposition and item mapping are in the coverage ledger.
- **Terence Tao, An Introduction to Measure Theory** — `https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf`; Section 1.7, Tonelli Theorem 1.7.15 and proof, Fubini Theorem 1.7.21 and proof, PDF pp. 200–206; full-text section inspected. Fetch: 265 pages, 1338765 bytes, SHA-256 prefix `64498329b65eea01`, stamped 2026-10-22T15:08:42.920Z. Harvest disposition and item mapping are in the coverage ledger.
- **Caroline Terquem, Fluids** — `https://www.physics.ox.ac.uk/system/files/file_attachments/notes.pdf`; Sections 1.1.2 and 6.3.1, PDF pp. 7 and 117–120; full-text passages inspected. Fetch: 126 pages, 10350218 bytes, SHA-256 prefix `5877424bb4926b5f`, stamped 2026-10-22T15:08:48.487Z. Harvest disposition and item mapping are in the coverage ledger.
- **Galin L. Jones, On the Markov Chain Central Limit Theorem, arXiv:math/0409112v2** — `https://arxiv.org/pdf/math/0409112`; Section 4.1, Theorem 9 and Corollaries 1–5, PDF pp. 9–12; full-text section inspected. Fetch: 24 pages, 214797 bytes, SHA-256 prefix `b72c62e1652cfa00`, stamped 2026-10-22T15:08:48.548Z. Harvest disposition and item mapping are in the coverage ledger.
- **Charles J. Geyer, Markov Chain Monte Carlo Lecture Notes** — `https://www.stat.umn.edu/geyer/f05/8931/n1998.pdf`; Sections 4.8.1–4.9, printed pp. 132–135; full-text sections inspected. Fetch: 166 pages, 1273158 bytes, SHA-256 prefix `fbac196e9485510b`, stamped 2026-10-22T15:08:51.351Z. Harvest disposition and item mapping are in the coverage ledger.

### fd-st01-examples sources

- **Charles J. Geyer, Markov Chain Monte Carlo Lecture Notes** — `https://www.stat.umn.edu/geyer/f05/8931/n1998.pdf`; Sections 4.8.1–4.9, printed pp. 132–135; full-text sections inspected. Fetch: 166 pages, 1273158 bytes, SHA-256 prefix `fbac196e9485510b`, stamped 2026-10-22T15:08:53.590Z. Harvest disposition and item mapping are in the coverage ledger.
- **Galin L. Jones, On the Markov Chain Central Limit Theorem, arXiv:math/0409112v2** — `https://arxiv.org/pdf/math/0409112`; Section 4.1, Theorem 9 and Corollaries 1–5, PDF pp. 9–12; full-text section inspected. Fetch: 24 pages, 214797 bytes, SHA-256 prefix `b72c62e1652cfa00`, stamped 2026-10-22T15:08:53.658Z. Harvest disposition and item mapping are in the coverage ledger.

## Item checkpoints

### `def-fd-random-velocity-sensor-law` — dependency level 0

Defines finite-volume vector-valued spatial L2 as a normed quotient with explicit norm, a finite-second-moment Borel law, a weighted integral sensor and its centered observable. The sensor is not point evaluation; completeness is not asserted here. SI velocity and sensor-weight units are stated.

Dependencies: `def-l-p-space-as-a-quotient-by-null-functions`, `thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space`, `thm-minkowski-inequality-for-integrals`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `def-probability-measure`; justified-by interface: `lem-fd-sensor-pairing-is-well-defined`

Sources and locators: Teschl §11.6, printed pp. 332–335; Tao §1.7, PDF pp. 199–206; Terquem §§1.1.2, 6.3.1, PDF pp. 7, 117–120 (terminology only).

Decision: complete local draft; exact proof/definition and current supplier excerpts are recorded in `research/fluid-dynamics-all-47-2026-10-23-batch-32.proof-contracts.json`. Placement is A page `fd-st01`.

### `lem-fd-sensor-pairing-is-well-defined` — dependency level 1

Proves representative-independent integrability, linearity, continuity and Borel measurability of S_psi, and square-integrability/finite centering of f_psi. Holder controls all pairings.

Dependencies: `def-fd-random-velocity-sensor-law`, `def-l-p-space-as-a-quotient-by-null-functions`, `def-probability-measure`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `thm-holder-inequality-for-integrals`.

Sources and locators: Teschl §11.6, Lemmas 11.30–11.31, printed pp. 332–334; Tao §1.7, Theorem 1.7.21, PDF pp. 204–206.

Decision: complete local draft; exact proof/definition and current supplier excerpts are recorded in `research/fluid-dynamics-all-47-2026-10-23-batch-32.proof-contracts.json`. Placement is A page `fd-st01`.

### `lem-fd-velocity-tensor-is-bochner-integrable` — dependency level 1

Proves the continuous bilinear L2 x L2 to matrix L1 tensor map, representative independence, strong measurability, Bochner integrability, and E||U tensor U||_1=E||U||_2^2. AC_omega is explicit and used only through Riesz-Fischer completeness to obtain Banach targets; no full AC or DC.

Dependencies: `def-fd-random-velocity-sensor-law`, `def-countable-choice`, `thm-riesz-fischer-completeness-of-l-p`, `def-l-p-space-as-a-quotient-by-null-functions`, `def-strongly-measurable-banach-valued-function`, `thm-bochner-integrability-criterion`, `thm-holder-inequality-for-integrals`.

Sources and locators: Teschl §11.6, Lemmas 11.30–11.31, printed pp. 332–334; Tao §1.7, Theorems 1.7.15 and 1.7.21, PDF pp. 200–206.

Decision: complete local draft; exact proof/definition and current supplier excerpts are recorded in `research/fluid-dynamics-all-47-2026-10-23-batch-32.proof-contracts.json`. Placement is A page `fd-st01`.

### `thm-fd-expected-weak-reynolds` — dependency level 2

Under AC_omega, a square-integrable strongly measurable H-valued U, and an explicitly product-measurable representative, proves the weak pairing identity E[U tensor U]=bar u tensor bar u+R in the stated L1 sense. The proof establishes m=bar u, product measurability, Fubini/Tonelli hypotheses and R integrability. R is positive covariance; there is no density, dynamics, incompressibility, stationarity or closure assumption.

Dependencies: `def-fd-random-velocity-sensor-law`, `def-countable-choice`, `thm-riesz-fischer-completeness-of-l-p`, `lem-fd-sensor-pairing-is-well-defined`, `lem-fd-velocity-tensor-is-bochner-integrable`, `def-probability-measure`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `def-strongly-measurable-banach-valued-function`, `thm-holder-inequality-for-integrals`, `thm-bounded-linear-maps-commute-with-bochner-integration`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-rationals-countable`, `lem-q-and-irrationals-dense-r`.

Sources and locators: Teschl §11.6, Lemmas 11.30–11.31 and Theorem 11.32, printed pp. 332–335; Tao §1.7, Theorems 1.7.15 and 1.7.21 with proofs, PDF pp. 200–206; Terquem §6.3.1 terminology only, with its RANS hypotheses not imported.

Decision: complete local draft; exact proof/definition and current supplier excerpts are recorded in `research/fluid-dynamics-all-47-2026-10-23-batch-32.proof-contracts.json`. Placement is A page `fd-st01`.

### `prop-fd-sensor-long-run-clt` — dependency level 2

Under full AC and the complete current Harris-ergodic stationary-chain hypotheses, transfers all six exact total-variation/moment sufficient regimes of the inspected MCMC theorem to the centered sensor observable. It includes zero variance and asserts neither finite-sample normality nor MCSE-estimator consistency.

Dependencies: `def-fd-random-velocity-sensor-law`, `lem-fd-sensor-pairing-is-well-defined`, `def-axiom-of-choice`, `thm-mcmc-clt-sufficient-regimes`, `def-long-run-variance-for-stationary-markov-chain`, `def-measure-kernel-and-probability-kernel`, `def-time-homogeneous-markov-chain-with-transition-kernel`, `def-invariant-and-stationary-distribution-for-a-markov-kernel`, `def-phi-irreducible-chain`, `def-general-state-aperiodic-markov-chain`, `def-harris-recurrent-markov-chain`, `def-geometric-and-uniform-ergodicity-for-mcmc-clt`, `def-polynomial-ergodicity-with-integrable-rate-envelope`, `def-general-state-reversibility-by-symmetric-flow-measure`, `def-l-p-space-as-a-quotient-by-null-functions`, `def-total-variation-distance-for-probability-laws`, `def-ergodic-measure-preserving-system`, `def-measure-preserving-transformation-and-system`.

Sources and locators: Jones, arXiv:math/0409112v2, §4.1, Theorem 9 and Corollaries 1–5, PDF pp. 9–12; Geyer, §§4.8.1–4.9, printed pp. 132–135.

Decision: complete local draft; exact proof/definition and current supplier excerpts are recorded in `research/fluid-dynamics-all-47-2026-10-23-batch-32.proof-contracts.json`. Placement is A page `fd-st01`.

### `ex-fd-ar1-long-run-variance` — dependency level 2

For a stipulated centered stationary jointly Gaussian AR(1), nu=Law(X0), iid Gaussian innovations independent of X0, |rho|<1 and eta>0, directly derives gamma_k=eta^2 rho^k/(1-rho^2), absolute summability, the Gaussian CLT and covariance long-run variance eta^2/(1-rho)^2. The normalized ideal spatial sensor returns X_n. It is a mathematical example, not a reported observation.

Dependencies: `def-fd-random-velocity-sensor-law`, `lem-fd-sensor-pairing-is-well-defined`, `def-axiom-of-choice`, `def-probability-measure`, `def-time-homogeneous-markov-chain-with-transition-kernel`, `def-invariant-and-stationary-distribution-for-a-markov-kernel`, `def-moments-variance-and-covariance`, `thm-geometric-series`, `def-weak-convergence-of-borel-probability-measures`, `thm-dominated-convergence`, `def-long-run-variance-for-stationary-markov-chain`.

Sources and locators: Geyer, §§4.8.1–4.9, printed pp. 132–135; Jones, §4.1, Theorem 9 and Corollaries 1–5, PDF pp. 9–12 (general asymptotic MCMC context; the AR(1) calculation is local).

Decision: complete local draft; exact proof/definition and current supplier excerpts are recorded in `research/fluid-dynamics-all-47-2026-10-23-batch-32.proof-contracts.json`. Placement is B page `fd-st01-examples`.

## Scoped checks, readiness and remaining obligations

- `coverage-checklist.mjs`: pass, 2 pages and 12 harvested results; no warnings. Both A and B coverage entries have two independent treatments, with book/full lecture-note primary backing on A and B.
- `source-fetch-check.mjs --stamp`, followed by check mode: pass, 7/7 sources full-text verified; zero recovery failures and no source-resolution fallback needed.
- `proof-contract.mjs --strict`: pass for all 6 assigned items, 39 exact fact/source citations, 20 proof steps, exact supplier excerpts, all eight boundary cases per item, and applicable finite checks.
- `content-policy.mjs` on the assigned manifest: pass, 6 items, 0 errors/warnings. `depcheck.mjs` on the assigned item list: pass, 0 errors/warnings; dependency closure 1,509 items and 408 pages.
- `proof-layout.mjs` on the six explicitly changed items after final proof edits: pass, 20 numbered steps, 0 defects.
- Batch-local `dependencyLevels` recomputation: pass for all six items at levels 0/1/1/2/2/2 with no cycles. The required run-wide `item-dependency-levels.mjs check --run` still reports empty inventories for `fd-f03`, `fd-f03-examples`, `fd-px01`, `fd-px01-examples`, `fd-px02`, `fd-px02-examples`, `fd-px03`, `fd-px03-examples`, `fd-s03`, `fd-s03-examples`, `fd-ps01`, `fd-ps01-examples`, `fd-ps02`, `fd-ps02-examples`, `fd-w02`, `fd-w02-examples`, `fd-pn01`, `fd-pn01-examples`, `fd-pn02`, `fd-pn02-examples`, `fd-pda01`, `fd-pda01-examples`, `fd-ples01`, `fd-ples01-examples`, `fd-pg01`, `fd-pg01-examples`, `fd-pmp01`, `fd-pmp01-examples`, `fd-l01`, `fd-l01-examples`, `fd-bl01`, `fd-bl01-examples`, `fd-pbl01`, and `fd-pbl01-examples`. It also reports stale levels for `post-fd-boundary-data` (0, computed 2), `pthm-fd-cauchy-momentum-angular` (0, computed 3), `pthm-fd-control-volume-balances` (0, computed 3), `pthm-fd-energy-decomposition` (1, computed 3), `post-fd-weak-balances` (0, computed 3), `pthm-fd-conservation-jump-laws` (1, computed 4), `ex-fd-conduction-energy-entropy` (2, computed 4), `cex-fd-vacuum-velocity-determination` (0, computed 1), `thm-fd-kinetic-h` (1, computed 2), `thm-fd-collision-maxwellian` (2, computed 3), `prop-fd-maxwellian-moments` (3, computed 4), `thm-fd-controlled-euler-passage` (4, computed 5), `def-fd-conserving-bgk` (4, computed 5), `thm-fd-homogeneous-bgk-limit` (5, computed 6), `prop-fd-bgk-entropy-rate` (6, computed 7), `cex-fd-collision-support` (1, computed 2), `ex-fd-bgk-initial-layer` (5, computed 7), and `rem-fd-kinetic-limit-status` (4, computed 7). No batch-32 item has a dependency-level error. These cross-batch findings are reported to the owner and were not edited outside assignment scope.
- Run-wide `proof-contract-coverage.mjs` is also blocked by the unrelated empty frontier inventory `fd-f03`; strict contract validation for this complete batch passes. Run-wide Step 1 readiness remains open for other batches; `loadStep1Record` and `step1Decision` now confirm all six batch-32 records current and closed.
- Cross-batch dependency file: 54 rows (51 item edges, 3 page edges), each current and `verified`; no open batch-32 external edge. The original native ENOSPC result and attempt history remain unchanged.

All six assigned items and both frontmatter-only draft pages are complete. Current batch-32 readiness is recorded as `ready` only after checking each direct supplier interface, proof contract, page placement, source coverage and scoped validations. This is authorship readiness, not independent review, proof approval, publication or push authorization. No mathematical or physical blocker remains in this assignment.


### Owner scope restoration (2026-10-22T15:51:57.604Z)

Owner /root integrated the round1 scientific repair documented in research/fluid-dynamics-all-47-2026-10-23-owner-random-sampling-readiness-resolution/review.json and repair-plan.json, preserving the approved general Banach, weak Reynolds, stationary mixing, selected-observable and failure-aware UQ scope alongside the existing sound branches. Exact contract quotations and actual proof-step coverage were checked against final sources; no new source-reading or independent proof approval is attributed. Ordinary reviews/gates remain pending.
Original native checks and readiness observations above concern their historical bytes. Current source readiness is recorded separately by root; final consumer36/44/46/47 checks remain pending until native writers drain.
