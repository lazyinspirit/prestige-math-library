# Batch 31 authoring and evidence notes

Run: `physics-non-fluid-129-2026-10-21-r2`  
Pair: `gr-fx03-geometric-cauchy-stability` and `gr-fx03-geometric-cauchy-stability-examples`

## Scope, plan and dependencies

The current plan assigns the A page order **759** and its B page order **760**. The design file `research/plan-general-relativity-frontier-expansion-track.md`, line 101, still says **8005**. This is the sole plan/design conflict found; the current `research/plan-spec.json` and the dispatch agree, so the pages and manifest use 759/760. The planned `requires` edges agree across the design, plan and manifest.

The A page has four items and the B page has two. The fixed-gauge topology definition is the local setup; a pullback-comparison definition was added on A because no inspected earlier item stated the exact covariant pullback formula needed by B example 1. The scoped dependency graph is acyclic:

| Item | Level | In-batch suppliers |
| --- | ---: | --- |
| `def-gr-fx-fixed-gauge-data-topology` | 0 | — |
| `def-gr-fx-metric-pullback-comparison` | 0 | — |
| `thm-gr-fx-finite-slab-stability` | 1 | fixed-gauge topology definition |
| `prop-gr-fx-geometric-observable-continuity` | 2 | finite-slab stability theorem |
| `ex-gr-fx03-1` | 3 | both definitions, theorem, proposition |
| `ex-gr-fx03-2` | 3 | theorem, proposition |

The complete direct dependency lists and roles are in each item and mirrored in the batch pages manifest. All out-of-batch suppliers used here were inspected at their current published statements and proofs. The main interfaces used are: GR14’s periodic symmetric-hyperbolic system, existence, uniqueness, smooth persistence, Sobolev and composition/commutator bounds; GR15’s complete-data maximal-development and data-fixing isometry statements, which make no quantitative arbitrary-long-time stability claim; and the connection/free-fall items’ Levi-Civita, geodesic-coordinate and proper-time results. The local harmonic constraint-propagation and initial-constraint statements are used only for the explicitly conditional Einstein interpretation. Mathematical suppliers for the two examples include the exact trigonometric, inverse-function, mean-value, exponential, factorial and positivity statements listed in their `deps`.

No supplier was escalated. A missing run-specific Step 1 readiness record or a supplier’s pending verification label was not treated as a mathematical gap; the actual current statements and proofs were checked. The scalar growth example is mathematical and does not claim the GR fixed-gauge hypotheses apply to it.

## Mathematical and physical scope

The main estimate is a forced (H^{s-1}) comparison for (H^s) classical solutions, proved by subtraction, a weighted energy, justified Fourier-smoothing convergence, and a regularized square-root Gronwall step. The neighborhood result uses the common compact state margin, smooth-data persistence, and uniform local times for time-translated coefficients on the compact slab. The Einstein conclusion is conditional on one fixed harmonic reduction, complete constrained data, propagated auxiliary conditions and conserved matter stress. Its slice continuation uses the compact torus and local constraint propagation; it does not infer a uniform collar for noncompact data or a global-in-time theorem. Fluid shocks, vacuum boundaries, vanishing sound speed and dust flow crossings remain outside the stated branches.

The observable proposition assumes a common chart compactly contained in the slab, compact position-velocity range and a uniform timelike margin. The first B example directly computes the pullback components and proper time. The second solves (z_t=2tz) exactly and rules out a (T)-independent (Ce^{CT}) bound for general symmetric-hyperbolic systems. Neither worked case is an empirical observation.

For dimensional clarity, the fixed SI convention takes the system time coordinate to be (x^0=ct_{m phys}) in metres and the torus coordinates to be dimensionless angles. Thus (g_{00}), (g_{0i}), and (g_{ij}) carry units (1), metres, and square metres respectively; state components are divided by fixed unit scales before forming the numerical Euclidean state. (R_z) bounds that normalized state and (R_t) bounds its (x^0)-derivative. The worked flat torus metric uses a length (L) in its spatial coefficients and a length ℓ for the curve parameter.

## Source inspection and dispositions

Two independent Cauchy/energy treatments were read in full at the relevant sections: Friedrich–Rendall and Métivier. Hunter’s notes were read in full at the cited chapter, but that chapter is a symmetric **boundary-value** theory; only its energy identity is an inline calculation check, and its boundary coercivity/existence/uniqueness results are recorded out of scope. Sbierski’s full PDF was inspected through Section 2, Definition 2.1 and Remark 2.5 for the pullback convention. The exact URL, locator, supported item, disposition and reading qualification for every harvest are recorded in the coverage file.

| Source | Locator and use | Fetch evidence |
| --- | --- | --- |
| [Friedrich–Rendall, *The Cauchy Problem for the Einstein Equations*](https://arxiv.org/pdf/gr-qc/0002074) | §§3.1, 5.1, 5.3; energy framework, constrained local development and common-region Cauchy stability. Five findings are already published; two local FX03 findings are included. | 97 PDF pages, 782,835 bytes, SHA-256 prefix `f0467892d8775984` (successful stamp 2026-10-11). |
| [Métivier, *The Mathematics of Nonlinear Optics*](https://www.math.u-bordeaux.fr/~gmetivie/NLO2008.pdf) | Ch. 3 §§3.1, 3.3–3.4; Definition 3.1, Theorem 3.2, Proposition 3.4, Lemma 3.5, Theorem 3.7 and continuation lemmas. Four results are inline cross-checks; the periodic forced and geometric proof remains local. | 170 PDF pages, 777,247 bytes, SHA-256 prefix `64b9a0a211c69351` (stamped 2026-10-21). |
| [Hunter, *Notes on Partial Differential Equations*](https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf) | Ch. 8 §§8.1–8.3; Propositions 8.2–8.3 are inline energy checks; six BVP-specific findings are out of scope. | 242 PDF pages, 1,597,256 bytes, SHA-256 prefix `0dbade1806f7a1ea` (successful stamp 2026-10-11). |
| [Sbierski, *On the Existence of a Maximal Cauchy Development for the Einstein Equations*](https://arxiv.org/pdf/1309.7591) | §2, Definition 2.1 and Remark 2.5; both findings are inline checks for the local pullback definition and B example 1. | 25 PDF pages, 630,229 bytes, SHA-256 prefix `43e03ecafa05cb95` (successful stamp 2026-10-11). |

`source-fetch-check --stamp` reports **4/4 fetch-verified and 4/4 resolved**, with zero new stamps on the final check and no documented drops. The coverage checklist counts 25 results in total: 21 source harvests (five already-published, two included, two Hunter energy findings inline, six Hunter BVP findings out of scope, two Sbierski findings inline and four Métivier findings inline) plus four canonical local entries. The four canonical local findings are included. The checklist retains its low-yield warning (**6/25**); its Alpha confirmation request concerns these recorded dispositions, not a missing retrieval or an omitted mathematical prerequisite. No selected source was dropped. The exploratory Ringström mirror’s HTTP 404 and a direct FR cURL HTTP 404 followed by successful prior-stamp/browser verification are preserved in `retrieval_history`; neither failed candidate is used as evidence. The independent-source search and selected Métivier treatment are also recorded there.

## Cross-batch records

`research/physics-non-fluid-129-2026-10-21-r2-batch-31.cross-batch-dependencies.json` is the required JSON array and is empty: there is no incoming cross-batch item/page edge owned by this consumer batch. Read-only dependency-ledger inspection shows later batches 37–39 depend on the FX03 page; these downstream observations do not belong as batch-31 review rows.

The dependency-level input records batch 31 at level 0 with `requires: []`. A fresh read-only recomputation of all 129 batch rows also gives batch 31 level 0, no prerequisites, maximum level 5, and the same graph rows as the recorded graph. The shared batch-dependency digest is stale because manifest bytes changed; it was left untouched as owner-level derived scheduling state.

## Step 1 readiness

Hash-bound non-owner `ready` records were written for all six items in dependency order with their complete direct dependency lists and item-specific evidence. A fresh `loadStep1Record`/`step1Decision` check reports all six closed and current with `owner: false`. These records establish authoring readiness only; draft status, `verification.precheck: pending`, and later independent review remain separate gates.

## Checks and remaining run-wide findings

- Scoped six-item dependency calculation: levels 0, 0, 1, 2, 3, 3; no cycle or label mismatch.
- Focused `depcheck`: 6 selected items, 2 selected pages, 0 errors and 0 warnings; 2,300-item/299-page dependency closure.
- Strict proof-contract check: 6/6 items, 0 errors and 0 warnings. Contracts were regenerated from the current proof text, with exact supplier statement excerpts, step inputs, boundary cases and finite example checks.
- Proof layout: 6 items, 22 steps, 0 defects.
- Manifest dependency and item-interface mirror checks pass for all six items; the cross-batch JSON shape is valid with 0 edges.
- `coverage-checklist`: 1 page, 25 harvested findings, 0 errors, the noted low-yield warning.
- The full-run item-level scan remains non-passing because it reports 188 empty scaffold inventories in other batches. No other batch was edited.
- `batch-dependency-levels.mjs check` remains non-passing on the stale shared digest; the fresh read-only recomputation above confirms the actual batch-31 graph and level. No shared schedule, plan, engine state or verdict was changed.

These records establish Step 1 authoring readiness only. They are not independent proof approval or a claim that later review gates have passed.
