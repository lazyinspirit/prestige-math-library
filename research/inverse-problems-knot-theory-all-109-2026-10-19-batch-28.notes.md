# Batch 28 authoring notes — Nonlinear Landweber with discrepancy stopping

## Control and plan comparison

- Run owner direction: `research/inverse-problems-knot-theory-all-109-2026-10-19-owner-authoring-direction.md`; new content remains draft.
- Assigned design: `research/plan-inverse-problems-track.md`, IP-28 at lines 669–684. The controlling `research/plan-spec.json` agrees on the A/B page identities, category, order, and the three page-level prerequisites. No plan/design conflict found.
- The design's A inventory is retained: `alg-ip-nonlinear-landweber-discrepancy` and `thm-ip-nonlinear-landweber-fejer-and-finite-stopping`. Its B leaves are retained: an initial residual below the discrepancy threshold, a start outside the valid local ball, and exact data.
- Active run status was recomputed from `.autopilot/inverse-problems-knot-theory-all-109-2026-10-19` at 2026-10-19T04:45:33Z: Step 1 scaffold is 77/109 covered; batches 21, 24, 28, 30, 32, 46, 47, 48 and 24 more are missing; no worker is in flight. The run remains held for owner repair/recertification, with artifact completion deferred until authoring coverage is complete and writers drain. This batch adds its authored records only; no runtime state or verdict is changed.

## Scaffold inventory and dependency order

Scheduling input: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-dependency-levels.json`, input SHA-256 `41dd33146255b664e55b75603e7c764ee3bde257d4079845e209411309d97f62`; batch 28 is level 5 and requires batches 25 and 27. Item levels count only in-run item suppliers.

| Level | Item | Kind | In-run logical dependencies |
|---:|---|---|---|
| 3 | `alg-ip-nonlinear-landweber-discrepancy` | algorithm | `def-ip-nonlinear-forward-map` (batch 25, level 1); `def-ip-tangential-cone-condition` (batch 25, level 2) |
| 4 | `thm-ip-nonlinear-landweber-fejer-and-finite-stopping` | theorem | `alg-ip-nonlinear-landweber-discrepancy` (batch 28, level 3); batch 25 forward-map and TCC definitions |
| 4 | `ex-ip-landweber-initial-discrepancy-stop` | example | algorithm (level 3); batch-25 TCC definition (level 2) |
| 5 | `cex-ip-landweber-outside-local-ball-stalls` | counterexample | algorithm (level 3), theorem (level 4), batch 25 TCC definition (level 2) |
| 5 | `ex-ip-landweber-exact-data-no-finite-stop` | example | algorithm (level 3), theorem (level 4) |

All published Hilbert-space suppliers remain external context and do not raise item levels. The manifest was populated before the item carriers. No cycle is present in this inventory.

## Supplier inspection and conventions

- Batch 25 actual draft `def-ip-nonlinear-forward-map` defines `F:U→Y` on an open set between real Hilbert spaces, exact data `F(x†)`, and a bounded real-linear Fréchet derivative at each point. The actual `def-ip-tangential-cone-condition` is a one-basepoint condition on an increment ball. IP-28 states the stronger uniform two-point inequality for all pairs in its declared outer ball, as in Clason's Assumption 11.2; it does not infer uniformity from the one-basepoint definition. The actual batch-25 residual/derivative comparison lemma is not used.
- Batch 27's actual `def-ip-variational-source-condition` and `thm-ip-vsc-nonlinear-regularization-rate` were inspected. That theorem concerns supplied approximate/global minimizers of nonlinear Tikhonov functionals and additional VSC, index, and parameter-coupling assumptions. IP-28 proves Landweber Fejér decrease and exact/noisy discrepancy convergence; it claims no VSC rate or minimum-norm identification. Thus the plan's IP-27 page prerequisite is retained, but no logical item edge to the VSC theorem is fabricated.
- Published `def-hilbert-space-adjoint`, `thm-riesz-representation-for-hilbert-space`, and `thm-hilbert-adjoint-properties` were inspected. The adjoint identity uses the first-variable-linear inner-product convention. The Riesz/adjoint suppliers require the Axiom of Countable Choice, `AC_ω`; IP-28 carries that exact axiom and does not escalate it to arbitrary AC. The proof uses adjoints only through their defining identity and the supplier's `||A*||=||A||` result.
- The outer-ball hypotheses are `\bar B_{2r}(x_0)⊂U`, an exact solution `x†∈\bar B_r(x_0)`, `||F'(x)||≤1` on the outer ball, and the uniform two-point TCC there with `0≤η<1/2`. The discrepancy constant is `τ>2(1+η)/(1−2η)`. Exact-data convergence and noisy-data convergence are stated as separate clauses. No residual monotonicity is claimed.

## Source reading and retrieval history

- Christian Clason, *Regularization of Inverse Problems*, full lecture notes, `https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf`; Chapter 11, Assumption 11.2, Lemma 11.3, and Theorems 11.4–11.6 with complete proofs (PDF pp. 102–105). Read the full Fejér estimate, first-discrepancy stopping bound, exact-data residual summability and Cauchy argument, and noisy-data limit argument.
- S. Hubmer, E. Sherina, S. Kindermann, and K. Raik, *A numerical comparison of some heuristic stopping rules for nonlinear Landweber iteration*, full paper, `https://epub.oeaw.ac.at/0xc1aa5576_0x003dd6da.pdf`; §2.1, equations (2.1)–(2.3), PDF pp. 3–4. Read the full section on local TCC, step-size scaling, the discrepancy constant, and the practical caveat that the sufficient constant can be large and the exact TCC constant may be unknown. It is used as an independent treatment/caveat, not as a proof supplier.
- A separate Neubauer course-note PDF was explored as another possible treatment (`https://www.impan.pl/BC/Arch/2008/08NeubauerCourse.pdf`): the indexed full-text excerpt was inspected, but direct web opening and `curl` both returned redirect-loop failures. A book mirror search result at `https://www.nzdr.ru/data/media/biblio/kolxoz/M/MN/Kaltenbacher%20B.%20Iterative%20regularization%20methods%20for%20nonlinear%20ill-posed%20problems%20%28de%20Gruyter%2C%202008%29%28ISBN%203110204207%29%28200s%29_MN_.pdf` returned 404. These non-selected search results are not cited or used; the successful Clason full notes and Hubmer et al. full paper satisfy the two-treatment source coverage. No mathematical obligation is dropped.
- `node tools/source-fetch-check.mjs --coverage research/inverse-problems-knot-theory-all-109-2026-10-19-batch-28.coverage.json --stamp` passed 2/2: Clason PDF 767,120 bytes, 119 pages, SHA-256 prefix `e68c3b104572b248`; Hubmer et al. PDF 2,208,861 bytes, 26 pages, SHA-256 prefix `241ccd2b5db35e6d`. `node tools/coverage-checklist.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-28.coverage.json --require-destination` passed 1 A page / 10 harvested results, with zero errors and zero warnings.

## Item checkpoints

### `alg-ip-nonlinear-landweber-discrepancy`

- **Claim and convention:** Defines the real-Hilbert ideal update, one-step admissibility hypotheses, uniform two-point TCC interface on the outer ball, first discrepancy test, and finite-budget statuses. The TCC/noise witness is analytical input, not a computational test.
- **Sources:** Clason, *Regularization of Inverse Problems*, Chapter 11 §§11.1–11.2; Hubmer et al., §2.1, equations (2.1)–(2.3). The complete source texts are fetch-stamped and coverage-recorded.
- **Direct dependencies / level:** `def-ip-nonlinear-forward-map`, `def-ip-tangential-cone-condition`, `def-frechet-derivative-between-banach-spaces`, `def-hilbert-space`, `def-real-and-complex-inner-product-space`, `def-hilbert-space-adjoint`, `thm-hilbert-adjoint-properties`, `def-countable-choice`, `def-operator-norm`; level 3. Batch-25 suppliers are draft carriers with current owner-reconciled interface readiness; their bodies were inspected.
- **Decision:** `ready`, `owner:false`; the hash-bound record is `research/inverse-problems-knot-theory-all-109-2026-10-19-step1-alg-ip-nonlinear-landweber-discrepancy.json`.
- **Unresolved work / next action:** No batch-local prerequisite or authoring obligation remains. Native independent review and run-level gates are still owed.

### `thm-ip-nonlinear-landweber-fejer-and-finite-stopping`

- **Claim and convention:** For real Hilbert spaces, continuously operator-norm differentiable `F`, outer ball `\bar B_{2r}(x_0)⊂U`, exact solution in `\bar B_r(x_0)`, derivative norm at most one, uniform two-point TCC with `0≤η<1/2`, and `τ>2(1+η)/(1−2η)`, proves the stated one-step Fejér bound, first noisy discrepancy stopping with `N<Cδ^{-2}` and `C=1+d_0^2/(c_ττ^2)`, exact-data residual-square summability and strong convergence to an exact solution, and uniform noisy-data convergence to that exact-data limit. It claims no rate, finite exact-data stop, or minimum-norm selection.
- **Proof route:** The proof has 20 canonical phase.steps. It derives the noise/TCC remainder estimate, expands the squared error, proves finite stopping, and separates the exact and noisy convergence branches. The exact-data Cauchy argument chooses a minimum-residual index on each finite block; it does not assume residual monotonicity. The noisy-data contradiction uses bounded/unbounded stopping-index subsequences and Fejér decrease relative to the exact-data limit. `AC_ω` is explicit for the Hilbert-adjoint interface and the countable bad-data selection; no stronger choice axiom is claimed.
- **Sources and locators:** Clason, full Chapter 11 Assumption 11.2, Lemma 11.3, Theorems 11.4–11.6 and complete proofs, PDF pp. 102–105; Hubmer et al., full §2.1, equations (2.1)–(2.3), PDF pp. 3–4. The one-basepoint supplier TCC is not strengthened by implication; uniformity is stated as a theorem hypothesis.
- **Direct dependencies / level:** `alg-ip-nonlinear-landweber-discrepancy`, `def-ip-nonlinear-forward-map`, `def-ip-tangential-cone-condition`, `def-frechet-derivative-between-banach-spaces`, `def-hilbert-space`, `def-real-and-complex-inner-product-space`, `def-hilbert-space-adjoint`, `thm-hilbert-adjoint-properties`, `def-countable-choice`, `def-operator-norm`, `thm-cauchy-schwarz-in-an-inner-product-space`, `cor-inner-product-induces-a-norm`, `def-series`, `thm-nonnegative-series-bounded-partial-sums`, `thm-reals-cauchy-complete`, `thm-of-archimedean`, `thm-well-ordering-principle`; level 4.
- **Decision:** `ready`, `owner:false`; the hash-bound record is `research/inverse-problems-knot-theory-all-109-2026-10-19-step1-thm-ip-nonlinear-landweber-fejer-and-finite-stopping.json`. The contract’s derivations, inputs and fact uses match the final canonical steps.
- **Unresolved work / next action:** No batch-local mathematical prerequisite or authoring obligation remains. Native independent review and run-level gates are still owed.

### `ex-ip-landweber-initial-discrepancy-stop`

- **Claim and convention:** For `F(x)=x`, `x_0=x^\dagger=y=0`, `δ=1`, `y^δ=1`, `τ>2`, and `M=0`, the initial residual meets the threshold and the algorithm returns `stopped` before the budget check. Its verification has canonical steps 1.1 and 2.1.
- **Sources:** Clason, Chapter 11 discrepancy convention; the exact algorithm interface is cited in the carrier.
- **Direct dependencies / level:** `alg-ip-nonlinear-landweber-discrepancy`, `def-ip-tangential-cone-condition`; level 4.
- **Decision:** `ready`, `owner:false`; the hash-bound record is `research/inverse-problems-knot-theory-all-109-2026-10-19-step1-ex-ip-landweber-initial-discrepancy-stop.json`.
- **Unresolved work / next action:** No batch-local obligation remains; native review and run-level gates remain external.

### `cex-ip-landweber-outside-local-ball-stalls`

- **Claim and convention:** For `F(x)=x^2-1`, exact datum `0`, and `x_0=0`, the zero derivative makes every exact-data update stationary at residual one although `x^\dagger=1` is a solution. At the start the TCC remainder equals the data difference for every nonzero increment, so no positive-radius TCC neighborhood has `η<1`; this witness is outside the theorem’s hypotheses.
- **Sources:** The actual batch-25 one-basepoint TCC definition; Clason, Chapter 11 Assumption 11.2 for the stronger uniform theorem interface.
- **Direct dependencies / level:** `alg-ip-nonlinear-landweber-discrepancy`, `thm-ip-nonlinear-landweber-fejer-and-finite-stopping`, `def-ip-tangential-cone-condition`; level 5.
- **Decision:** `ready`, `owner:false`; the hash-bound record is `research/inverse-problems-knot-theory-all-109-2026-10-19-step1-cex-ip-landweber-outside-local-ball-stalls.json`.
- **Unresolved work / next action:** No batch-local obligation remains; native review and run-level gates remain external.

### `ex-ip-landweber-exact-data-no-finite-stop`

- **Claim and convention:** For `F(x)=x/2`, `x_0=1`, `x^\dagger=y=0`, and `δ=0`, the ideal iterates are `(3/4)^n` with positive residual at every finite index; they converge to the unique exact solution but no finite discrepancy stop occurs. Every finite budget therefore returns `budget_exhausted`. Verification uses canonical steps 1.1 and 2.1.
- **Sources:** Clason, Chapter 11 exact-data convergence theorem and proof; the algorithm interface is cited directly.
- **Direct dependencies / level:** `alg-ip-nonlinear-landweber-discrepancy`, `thm-ip-nonlinear-landweber-fejer-and-finite-stopping`; level 5.
- **Decision:** `ready`, `owner:false`; the hash-bound record is `research/inverse-problems-knot-theory-all-109-2026-10-19-step1-ex-ip-landweber-exact-data-no-finite-stop.json`.
- **Unresolved work / next action:** No batch-local obligation remains; native review and run-level gates remain external.

## Pages and cross-batch evidence

- A and B pages are YAML-frontmatter-only, have empty bodies, preserve their inventories and draft status, and are below the 100-item cap. The B page retains the A-page prerequisite. `page_layout` has not been authored; the engine owns that transition.
- `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-28.cross-batch-dependencies.json` records the page-level batch-25 and batch-27 interfaces and all direct batch-25 item edges as `verified`, with actual supplier statements and relevant proof/body distinctions. The published Hilbert/Riesz/adjoint dependencies are in the item manifests. These are author-side compatibility findings, not independent review or acceptance.
- The batch-25 `owner-ip3-ip25-reconciliation/acceptance.json` is explicitly scoped to supplier page/interface readiness after native author handoffs; it states that full native audit/gate acceptance is not supplied. The actual supplier definitions and proofs were inspected. The batch-27 VSC page is retained as a page prerequisite, but no item-level VSC theorem edge or VSC rate claim is invented.

## Final scoped checks

- `node tools/tsx-run.mjs tools/precheck.mts <five items>`: 4 proof-bearing items checked, 0 failing; the algorithm definition has no proof section.
- `node tools/proof-layout.mjs <five items>`: 5 items, 26 steps, 0 defects.
- `node tools/proof-contract.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-28.proof-contracts.json --strict`: 4/4 proof-bearing items checked, 0 errors and 0 warnings.
- Scoped `depcheck` and `fwdcheck`: selected five items and their prerequisite cycle checks passed. `citecheck`: 5 items, no recognized unsupported elementary move. `rendercheck`: five items plus two pages, all seven passed real KaTeX/YAML checks. `content-policy`: five items, 0 errors and 0 warnings.
- Direct statement-first check: all five item statements/descriptions have no inline hyperlinks; both page frontmatter blocks parse and both page bodies are empty.
- Scoped dependency-level recomputation loaded all current run manifests as supplier context and checked the eight-item in-run dependency closure: 0 errors; assigned levels are 3, 4, 4, 5, 5. Manifest and carrier dependencies/levels match. No cycle was found in this closure.
- `coverage-checklist --require-destination`: one A page and 10 harvested results, 0 errors and 0 warnings. `source-fetch-check`: 2/2 source texts fetch-verified; both fetch stamps were previously written and remain current.
- `step1-decisions record` wrote `ready`, `owner:false` for all five assigned items with their exact manifest dependency IDs. A targeted current-hash `step1Decision` audit reports all five records closed. The run-wide `step1-decisions check` remains open: 1,050 items loaded, 522 ready, 528 outstanding. The run is not accepted or published by these author records.

## Current run-wide blockers

- The native `node tools/item-dependency-levels.mjs check --run inverse-problems-knot-theory-all-109-2026-10-19` exits 1 because of 26 empty inventories on 13 other pages: `inverse-problem-benchmarking-and-shift`, `open-frontiers-in-learned-inverse-problems`, `hyperbolic-dehn-filling-and-exceptional-slopes`, `fox-milnor-factorization-and-slice-obstructions`, `casson-gordon-invariants-and-sliceness-obstructions`, `freedman-theorem-and-topological-sliceness`, `satellite-operators-and-knot-concordance-filtrations`, `colored-jones-invariant-and-volume-conjecture`, `tau-invariant-and-the-four-ball-genus`, `epsilon-and-upsilon-concordance-invariants`, `character-varieties-and-the-a-polynomial`, `open-questions-in-knot-polynomials-and-surgery`, and `zero-traces-and-conway-nonsliceness` (each with its `-examples` page).
- The same full-run check reports 17 stale `dependency_level` labels outside batch 28: `lem-ip-tv-vanishing-noise-primal-compactness` 7→6; `lem-ip-tv-level-set-uniform-density-and-hausdorff` 8→7; `thm-ip-2d-tv-level-set-convergence` 9→8; `ex-ip-tv-circular-radon-zero-truth` 10→9; `ex-ip-tv-bessel-deblurring-source-certificate` 10→9; `cex-knot-kt-21-boundary-case` 15→16; `lem-ni-holomorphic-disk-and-jsj-analytic-inputs` 8→9; `thm-knot-floer-detects-seifert-genus` 8→9; `lem-ni-fiberedness-sutured-floer-and-gabai-inputs` 9→10; `thm-fibered-knot-has-rank-one-top-knot-floer-homology` 9→10; `thm-rank-one-top-knot-floer-detects-fiberedness` 10→11; `ex-knot-kt-43-worked-cases` 11→12; `lem-rational-ball-b2-bounds-lens-l4` 0→4; `lem-slice-disk-double-cover-is-rational-homology-ball` 0→5; `cor-double-cover-d-invariant-obstructs-smooth-slice` 5→7; `thm-bridge-one-is-unknot-and-signature-crossing-change-bound` 16→17; and `thm-unknotting-number-at-least-half-levine-tristram-signature` 15→16. The native checker reports no cycles and no batch-28 item-level errors; no outside item or page was edited.
- Autopilot status at 2026-10-19T04:45:33Z is still `1-scaffold` (77/109 covered; batch 28 remains listed as missing while artifact completion is deferred until authoring coverage is complete and writers drain). Run-level owner repair/recertification, other frontier assignments, independent reviews and later stages remain outside this batch.
