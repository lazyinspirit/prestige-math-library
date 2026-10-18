# Batch 31 authoring notes

Run `numerical-analysis-remaining-71-2026-10-17`; role `beta`; pair `mixed-finite-elements-and-stokes-stability`.

## Authority and design decisions

Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the owner-authoring direction, the batch task, the dependency-level JSON, `plan-spec.json`, and the complete assigned design sections. The owner-authoring direction controls stale task/design text; the current plan controls conflicts between designs.

The older numerical-analysis design at `research/plan-numerical-analysis-track.md` §NA-34 (L492) allows “mini or Taylor–Hood.” The repaired spatial design at `research/plan-numerical-spatial-track.md` §347 and the current plan-spec record for this page require the exact P1+bubble/P1 MINI pair in dimensions two and three. The repaired spatial design and plan-spec agree, and the owner-authoring direction makes them controlling. Taylor–Hood is used only for the local B-page pressure-mode calculation. The A page records this conflict and the resolution.

The owner completion at `research/plan-numerical-analysis-track.md` L807–809 and `research/plan-numerical-analysis-mixed-foundation.md` require the continuous right inverse on every bounded connected Lipschitz domain, with the finite star-shaped cover, zero-mean tree decomposition, kernel verification, Fourier derivative estimate, and local completion proved before Stokes, inf-sup, BNB, Fortin, or MINI consumers. Those local suppliers were added on the A page. The narrower exact MINI mesh class is polygonal/polyhedral and conforming. No cross-batch prerequisite was assigned, and the batch input recorded dependency level 0.

## Inventory and dependencies

The output manifest contains 26 A items and 4 B items. Per-item levels were recomputed from the direct in-run dependencies and mirrored in item frontmatter; the maximum is 8. Same-batch suppliers precede their consumers. Full item IDs, exact direct dependencies, and levels are in `research/numerical-analysis-remaining-71-2026-10-17-batch-31.pages.json`.

| Level | A-page items |
|---:|---|
| 0 | `lem-na-zero-mean-of-zero-boundary-divergence`; `lem-na-homogeneous-dirichlet-poincare`; `lem-na-homogeneous-dirichlet-korn-identity`; `lem-na-lipschitz-domain-finite-star-shaped-cover`; `def-na-star-shaped-bogovskii-integral`; `thm-na-infsup-bounded-right-inverse-hilbert`; `lem-na-scott-zhang-boundary-preserving-p1-interpolant` |
| 1 | `def-na-stokes-zero-mean-pressure-and-velocity-spaces`; `lem-na-finite-cover-zero-mean-data-decomposition`; `lem-na-bogovskii-kernel-support-and-divergence`; `thm-na-babuska-brezzi-kernel-coercivity` |
| 2 | `lem-na-bogovskii-truncated-derivative-fourier-formula`; `def-na-fortin-operator`; `thm-na-mixed-galerkin-quasioptimality`; `def-na-mini-element-p1-bubble-p1-spaces` |
| 3 | `lem-na-bogovskii-fourier-ray-and-derivative-ltwo-bound`; `lem-na-fortin-transfers-discrete-infsup`; `lem-na-mini-element-local-and-global-dimensions`; `def-na-discrete-weak-and-exact-divergence-free-spaces` |
| 4 | `thm-na-star-shaped-bogovskii-bounded-right-inverse` |
| 5 | `thm-na-bounded-lipschitz-domain-divergence-right-inverse` |
| 6 | `thm-na-continuous-stokes-divergence-infsup` |
| 7 | `thm-na-mini-element-fortin-stability`; `thm-na-weak-stokes-solvability-lipschitz-domain` |
| 8 | `thm-na-mini-element-h1-pressure-error`; `thm-na-discrete-helmholtz-projection-and-pressure-schur` |

The B-page levels are 0: `ex-na-taylor-hood-pressure-mode`; 3: `ex-na-mini-element-bubble-moment`; and 4: `cex-na-q1-p0-checkerboard-pressure-mode`, `ex-na-weakly-versus-exactly-divergence-free-mini-velocity`.

## Mathematical and axiom audit

Supplier bodies were read before relying on them. The A page uses the actual FE-mesh suppliers for matching affine simplices, shape scaling, face traces/Gauss–Green, reference Poincaré–Wirtinger, Bramble–Hilbert, and zero-boundary P1 spaces; the actual Hilbert, L2, Riesz, Lax–Milgram, Hölder/Cauchy–Schwarz, Fubini/Tonelli, compactness, distributional-derivative, Fourier/Plancherel, rank-nullity, mollifier, and convolution suppliers are cited item by item.

Countable Choice is explicit where used for H0 closure sequences, Fourier/Plancherel interfaces, L2 density, mollification, Hilbert completeness, and Lax–Milgram. The finite cover/tree choices and the Taylor--Hood local polynomial calculation are choice-free. The bubble-moment example carries the Countable Choice hypothesis of its affine-simplex Gauss--Green supplier. No full Axiom of Choice is asserted. The H1 face-average interpolant uses facet dual moments, never point-evaluates an arbitrary H1 function, and is proved on all H1 inputs so it also supplies the pressure approximation; its zero-boundary property is the H0 restriction. The weak and pointwise divergence kernels remain distinct.

The full Scott–Zhang argument was repaired to handle arbitrary H2 inputs. The earlier boundary-correction step had assumed zero trace while the pressure interpolant was applied to a general H1 pressure; the final item states and proves the H1-to-P1 map and the H2 estimate without that hidden boundary assumption. The Hilbert right-inverse statement now makes its nonempty supremum explicit when Q is nonzero. The Bogovskii kernel statement records the positive-kernel L2 majorant used by the truncated-field limit, and its affine change-of-variables Countable Choice branch is declared.

## Source retrieval and disposition

The source ledger is `research/numerical-analysis-remaining-71-2026-10-17-batch-31.coverage.json`. It records 7 full-text sources, locators, 58 harvested-result dispositions, the items supported by each result, and the disposition for every result. The independent A-page treatments are Guermond’s full MATH 661 Chapters 49, 50, 53, 54, and 55 and the complete Boffi–Brezzi–Fortin textbook with the selected Chapter 5 and Chapter 8 ranges read. Durán’s complete 17-page article was a third treatment for the Bogovskii argument; its actual proof does not supply the local support, finite-cover, or tree-partition arguments authored here. Retrieval was verified by inspection and `source-fetch-check --stamp`: 7/7 URLs verified. `url-sweep` reports 7/7 live; `source-backing --require-verified` reports all 16 authored source results backed. There were no retrieval failures or recovery retries, so no source-resolution escalation was needed. No source is dropped or used as a substitute for a proof.

## Scoped checks

| Check | Result |
|---|---|
| `precheck` | 25 proof items passed; 0 failed |
| `proof-layout` | 25 items, 93 steps, 0 defects |
| `proof-contract --strict` | 25/25 items, 0 errors, 0 warnings |
| `rendercheck` | 32 files (30 items and 2 pages), passed |
| `content-policy` | 30 items, 0 errors, 0 warnings |
| `manifest-deps` | 30 items, 0 normalized, 0 errors |
| `item-dependency-levels` | 30 items, maximum level 8, passed |
| `depcheck` | Selected item/page checks and prerequisite cycle checks passed |
| `coverage-checklist --require-destination` | 58 harvested results, 0 errors, 0 warnings |
| `source-fetch-check` | 7/7 sources verified and resolved |
| `url-sweep --fail-on-dead` | 7/7 live, 0 failures |
| `source-backing --require-verified` | 16 authored results backed |

No test suite was run. These are authoring and mechanical consistency results, not independent mathematical approval. All assigned changes are draft-only; published content, shared plans, engine state, and verdicts were left to the owner. All 30 assigned items now have Step 1 `ready` records with their direct dependencies and evidence recorded. The run-level readiness check remains open because other pairs/items in the 961-item run are still incomplete; no other pair records were changed. The batch’s completion evidence does not constitute acceptance.
