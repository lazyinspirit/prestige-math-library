# Batch 34 authoring notes

## Scope and plan comparison

- Run `physics-non-fluid-129-2026-10-21-r2`, batch 34, assigned pair `gr-fx06-trapped-surfaces-and-incompleteness` and `gr-fx06-trapped-surfaces-and-incompleteness-examples` only.
- The retained GR-track design at `research/plan-general-relativity-frontier-expansion-track.md` gives the A page order 8011. The current controlling `research/plan-spec.json` and the run manifest assign orders 765/766. The current plan controls; the A/B pages and manifest use 765/766. Their planned page prerequisites otherwise match the design exactly.
- Added `def-gr-fx-future-null-geodesic-completeness` on A to make the affine completeness and finite-endpoint conclusion precise.
- Added `lem-gr-fx-cauchy-slices-are-diffeomorphic` on A because the temporal-splitting supplier constructs its own Cauchy slice. This local lemma transfers connectedness and noncompactness from the specifically hypothesized slice to that product-flow slice, with the projection and inverse proved smooth.
- A has five items and B has two examples, below the 100-item cap. Both library pages are frontmatter-only. The other page prerequisites from the current plan are preserved exactly; they are outside this run’s assigned batch inventory.
- No published content, shared plan, root mathematical original, imported mathematical supplier, engine state, or verdict was changed.

## Item inventory and dependency levels

Item levels use the maximum level of direct suppliers assigned anywhere in this run; external published items do not raise the level. The current assigned graph is:

| Item | In-run suppliers | Level |
|---|---|---:|
| `def-gr-fx-future-null-geodesic-completeness` | none | 0 |
| `lem-gr-fx-cauchy-slices-are-diffeomorphic` | none | 0 |
| `def-gr-fx-trapped-surface-and-black-region` | `def-gr-fx-null-screen-geometry` (batch 29, level 1) | 2 |
| `lem-gr-fx-trapped-boundary-compactness` | `def-gr-fx-trapped-surface-and-black-region` (2), batch-29 null-screen (1), Raychaudhuri (2), focal exclusion (3) | 4 |
| `thm-gr-fx-penrose-incompleteness` | compactness lemma (4) | 5 |
| `ex-gr-fx06-1` | A-page definition, compactness lemma, and theorem | 6 |
| `ex-gr-fx06-2` | A-page definition, compactness lemma, and theorem | 6 |

The two B examples retain the design’s links to all three A-page results. The first checks a concrete round-sphere calculation and explicitly says why that sphere does not instantiate the trapped-surface premise of the A results. The second verifies all hypotheses of the compact-boundary result and all Penrose hypotheses other than noncompactness of the Cauchy slice.

## Supplier interfaces and proof route

- The batch-29 page `gr-fx01-hypersurface-and-null-geometry` contains the exact local null-normal, screen, Raychaudhuri, index-form, and focal-exclusion suppliers used by this batch. `loadStep1Record` and `step1Decision` report these direct item suppliers hash-current `ready` at authoring time:
  - `lem-gr-fx-null-normal-plane-and-screen`: `c9d25f60f4c5e302d3f1afea5967f6bf1a2ab759a4fe5c6d144284cdf446c4ad`
  - `def-gr-fx-null-screen-geometry`: `dc07403e0d9e36a4e7897a24e4ed27f1974af319360cd68401cd29185c184c18`
  - `prop-gr-fx-null-raychaudhuri`: `03da6cde27a617b9ad6078dd35d9dabd6562f0c09b94d06265bbbfb60fdbe1c8`
  - `lem-gr-fx-null-screen-index-form`: `c8d4afdaea02839bd71aa72c2098c71972407b477b806b947c309baf9aa97e12`
  - `lem-gr-fx-null-focal-boundary-exclusion`: `2a118f7f19dc84d7942cc7001431415592e35916842b4b81426297540c72805a`
- The compactness proof uses local future null normal branches only. It rescales each branch by a positive factor so the observer pairing is −1, obtains a uniform negative expansion bound from compactness, and applies Raychaudhuri with the direct null-Ricci hypothesis. The focal-exclusion supplier requires continuation of the generator and its variation slightly past the focal instant; the consuming argument records that condition and supplies it by future null completeness and smooth dependence of geodesic ODE solutions. Its current interface matches this use.
- The Penrose proof derives Countable Choice and Dependent Choice from AC, obtains the global temporal product flow, and transfers the given Cauchy slice’s connectedness and noncompactness using the added diffeomorphism lemma. The compact achronal boundary maps injectively to the flow slice; AC is used by invariance of domain to make the image open, compactness makes it closed, and connectedness/noncompactness give the contradiction. The conclusion is affine null incompleteness only.
- The de Sitter B example uses the full global hyperboloid, not the contracting subregion used in Witten’s illustrative exercise. It proves its own Cauchy, Ricci, null-completeness, and expansion calculations. In the TikZ orbit-space diagram the poles are regular axes, the top and bottom are spacelike conformal boundaries, and the radial null rays have slope ±1. They are labeled `C±`, not null infinity; the diagram is explanatory and is not used in a proof.
- The trapped-surface definition is patchwise and does not assume a global null frame. Its completion data include a smooth boundary time orientation agreeing with the physical interior orientation, a null generator direction on the designated three-dimensional boundary, and locally absolutely continuous causal curves defined in half-space charts. Chart invariance is justified from smooth local extensions, the half-space chain rule, and the finite disjoint-interval absolute-continuity definition. The conformal factor preserves the interior causal character, and the chosen orientation agrees with the physical future cone. The black region and event horizon are relative to this supplied completion and its specified future null boundary. A marginally outer trapped condition uses a supplied outward ray field; the source conventions’ possible extra condition on the other expansion is not silently added.
- The Ricci inequality is assumed directly. No Einstein equation, matter energy condition, curvature blow-up, singular point in the manifold, cosmic-censorship conclusion, or unqualified event-horizon existence is inferred.

## Source review and provenance

The coverage file records source URLs, exact locators, harvested section results, item mappings, dispositions, and per-source limitations. The full-text treatments are:

- Edward Witten, *Light Rays, Singularities, and All That*, current arXiv v6 (2023): §§5.2–5.6, §6.2, and Appendix B. Its theorem discussion uses Einstein’s equation and the null energy condition, whereas the local theorem assumes null Ricci convergence directly. Its global Minkowski no-trapped-surface claim is stronger than the assigned round-sphere example and is recorded out of scope. Its de Sitter exercise also studies a noncompact-Cauchy subregion; the B example constructs the full global model separately.
- Senovilla and Garfinkle, *The 1965 Penrose singularity theorem*, arXiv v2 (2015): §4.1, §4.2, Theorem 2, and the compact-boundary/topological proof strategy. It supports the incompleteness distinction and theorem route, not as a substitute for the complete local proof.
- Jaramillo, Valiente Kroon, and Gourgoulhon, *From Geometry to Numerics*, arXiv v2 (2008): §§2.1–2.2 and §6.2.2. It supports the global/asymptotic black-hole distinction and the quasi-local trapped-surface/MOTS discussion. The source uses an orientability assumption for globally selected null normals and a different null-pair normalization; the local definition supplies patchwise branches and uses `g(ell,k)=-2`.
- The source inventory’s label `JVG` is this Jaramillo–Valiente Kroon–Gourgoulhon review. Its label `OLD` refers to the retained GR track, original scaffold and repair overlay. `OLD` is historical planning evidence, not an independent full-text proof source, so it is not counted among the treatments.
- All three PDFs were accessible as full text during review. `source-fetch-check --stamp` verified and stamped 3/3 PDFs on 2026-10-21: Witten v6, 107 pages, 2,183,103 bytes, SHA-256 prefix `ab05b8fd79d17e03`; Senovilla–Garfinkle v2, 52 pages, 749,013 bytes, prefix `dc0479b6e8985a7e`; Jaramillo et al. v2, 72 pages, 992,205 bytes, prefix `2c7d085566882b2e`. No retrieval failure, retry, source drop, or unresolved source-resolution record occurred.

## Cross-batch dependencies

`physics-non-fluid-129-2026-10-21-r2-batch-34.cross-batch-dependencies.json` is a JSON array with one row for each of the eight direct edges into batch 29: the required page, the trapped definition’s null-screen input, the compactness lemma’s four batch-29 inputs, and each B example’s direct null-screen input. Each row is `verified` for the scoped statement/hypothesis/current-readiness check only; none records independent proof approval. The focal-exclusion row records the continuation condition and how the consumer supplies it. The null screen-index form is a transitive prerequisite through focal exclusion, so it is discussed here and not added as an unsupported direct edge.

## Scoped authoring checks and readiness

- Normative precheck: **5 proof-bearing items, 5 pass, 0 fail**.
- Proof layout after the final item edit: **7 changed items, 37 steps, 0 defects**. Strict proof-contract check: **5/5 items, 0 errors, 0 warnings**.
- Coverage checklist: **1 A page, 14 harvested results, 0 errors, 0 warnings**. Source-fetch check: **3/3 sources fetch-verified**. Citation fidelity: **67 citations checked, 0 quote misses, 0 widening candidates**.
- Scoped content checks passed: manifest dependencies **7 items, 0 errors**; content policy **7 items, 0 errors or warnings**; rendercheck **9 item/page files, 0 errors or warnings**.
- Focused dependency audit on the seven assigned items and their transitive closure: **0 errors and 0 warnings** (1,925 dependency-closure items and 317 prerequisite pages checked).
- Scoped dependency-level check over batches 29, 33 and 34: **6 pages, 21 items, 0 errors**. Batch 34 levels are **0, 0, 2, 4, 5, 6, 6** in supplier-first order. The required run-wide `item-dependency-levels.mjs check --run physics-non-fluid-129-2026-10-21-r2` reports **87 unrelated empty scaffold inventories** and one unrelated mismatch: `lem-nrqmx-finite-symplectic-implementers` is labelled 2 but computes to 1. The run-wide batch-level check reports the shared batch dependency-levels record stale after current manifest changes. These run-wide/shared records are outside this batch’s edit scope and remain for owner reconciliation.
- Rechecked the five direct batch-29 item prerequisites with current `loadStep1Record` and `step1Decision`; all remain hash-current `ready`. The eight direct cross-batch rows remain scoped `verified` checks, not independent proof approvals.
- Recorded Step 1 readiness for all seven assigned items with `step1-decisions.mjs record`; a fresh `loadStep1Record`/`step1Decision` check reports all seven `ready` and hash-current. Records use each item's full direct dependency list and do not confer independent proof approval.
- Readiness records author completion only; they do not confer independent proof approval.
