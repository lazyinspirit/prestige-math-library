# Batch 13 notes — `beltrami-equation-and-measurable-riemann-mapping`

Run `frontier-43-complex-representation-15`, role beta (Step 1 scaffold), batch 13, attempt 1.

Pair: A page `beltrami-equation-and-measurable-riemann-mapping` (order 1620) and B page
`beltrami-equation-and-measurable-riemann-mapping-examples` (order 1621), category `complex-analysis`.
Outputs: `research/frontier-43-complex-representation-15-batch-13.pages.json` (10 A items + 5 B items),
`research/frontier-43-complex-representation-15-batch-13.coverage.json`,
`research/frontier-43-complex-representation-15-batch-13.cross-batch-dependencies.json` (30 consumer-side rows),
the 15 item-readiness receipts `research/frontier-43-complex-representation-15-step1-<item>.json`, and this file.
A readiness record is not mathematical approval: Step 3 authors the proofs and Step 5 reviews them.

## Inputs read

- `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/beta-scaffold.md`, and the batch task file
  `research/frontier-43-complex-representation-15-beta-13.task.md`.
- Owner direction `research/frontier-43-complex-representation-15-owner-authoring-direction.md`, read in full; it is
  binding. Its Batch-13 paragraph fixes this page: preserve `thm-holder-regularity-beltrami-solutions` in full (all
  integers k ≥ 0 and 0 < α < 1, exact exponent α, local C^{k+1,α} diffeomorphism), author the three local lemmas in
  their displayed order immediately before it, keep the measurable Riemann mapping existence proof on the
  approximation/normalized-compactness route, and carry the choice assumptions of the actual suppliers.
- Step-1 resolution `research/frontier-43-complex-representation-15-beltrami-step1-resolution.md`, read in full: the
  placement, the exact published supplier interfaces, the complete local Hölder construction (freezing, rescaling,
  cutoff, contraction, weak factorization, nonzero Jacobian via injectivity) and the source-retrieval record.
- Design `research/plan-complex-analysis-track.md` §CA-QC-2 (L4144 ff.) and `research/plan-spec.json` entries for both
  pages (orders, ids, titles, categories, companions, `requires`).
- Drift review `research/frontier-43-complex-representation-15-alpha-step1-drift.md`: verdict for this page
  `drift-applied — add schauder-and-lp-elliptic-estimates (order 1064)`, with the owner resolution that commissions
  the three local lemmas; both are reflected in the current plan and in this manifest.
- The published supplier items examined at statement level: the Hölder-space definition and Banach theorem, the
  Newtonian-potential items (`def-newtonian-potential`, `def-laplace-fundamental-solution-with-positive-minus-laplacian-sign`,
  `thm-newtonian-potential-for-holder-data-is-classical`, `lem-cancellation-formula-for-second-derivatives-of-newtonian-potentials`),
  the weak- and distributional-derivative interfaces, `thm-weyl-lemma-for-the-laplacian`,
  `thm-continuous-partials-and-cauchy-riemann-imply-holomorphic`, `lem-c-k-boundary-flattening-preserves-wkp-locally`,
  `cor-injective-holomorphic-derivative-nonzero`, `thm-euclidean-inverse-function-theorem`, the reflexivity/Banach–Alaoglu
  interfaces, `thm-uniformization-simply-connected-riemann-surfaces`, `thm-biholomorphic-self-maps-riemann-sphere-are-mobius`,
  `thm-three-point-transitivity-mobius-transformations`, and the Riemann-sphere charts/compactification items.
- The batch-12 manifest `research/frontier-43-complex-representation-15-batch-12.pages.json`, read in full, as the
  in-run supplier of the quasiconformal interface (statement-level reading; its items are scaffolded but not yet authored).

## Design vs plan

- The design and the plan agree on the pair: ids, orders, categories, titles, companions and the A-page inventory.
  The design table already contains `lem-local-holder-cauchy-transform-estimate`,
  `lem-nondegenerate-local-holder-beltrami-coordinates`, `lem-weak-beltrami-factorization-in-holder-coordinates` and
  `thm-holder-regularity-beltrami-solutions`, so the owner resolution is already spliced into the plan text; no id or
  statement conflict was found.
- **Recorded conflict (plan omission, left to the owner).** The design's existence route is Lyubich §§14.1–14.5, whose
  §14.2/§14.4 step passes from local solutions to a global solution through the uniformization theorem for simply
  connected Riemann surfaces. The plan's `requires` list for order 1620 does not name
  `hyperbolic-riemann-surfaces-and-uniformization` (order 1616), which houses the published
  `thm-uniformization-simply-connected-riemann-surfaces` used at item level by
  `lem-smooth-beltrami-coefficients-admit-quasiconformal-solutions`. The dependency is backward (1616 < 1620) and the
  supplier is published, so no forward edge or missing supplier results, and items may cite published content from any
  earlier page; the omission concerns only the page-level `requires` declaration, which the owner may wish to complete.
  This note records the conflict; the plan was not edited by this batch.
- The design's conditional warning about a Beurling-transform route is honoured literally: no item on this page assumes
  or proves an L^p bound of the Hilbert/Beurling transform or invertibility of `I - μS`, and the Hölder exponent α is
  never replaced by an ellipticity-limited exponent.

## Inventory

A page (10 items). The design's eight rows — `def-measurable-beltrami-coefficient`,
`def-weak-solution-beltrami-equation`, `thm-measurable-riemann-mapping-sphere`,
`cor-local-integrability-beltrami-structures`, `lem-local-holder-cauchy-transform-estimate`,
`lem-nondegenerate-local-holder-beltrami-coordinates`, `lem-weak-beltrami-factorization-in-holder-coordinates`,
`thm-holder-regularity-beltrami-solutions` — plus two added prerequisites, both used only by the measurable Riemann
mapping theorem:

| added item | why it exists |
|---|---|
| `lem-smooth-beltrami-coefficients-admit-quasiconformal-solutions` | the approximation route needs global solutions for smooth coefficients; supplied by the page's own local charts plus the published uniformization theorem (Lyubich §14.2/§14.4). It gives existence for the approximants only, never a global L^p inversion. |
| `lem-area-and-l2-derivative-bounds-for-quasiconformal-maps` | the weak-limit passage needs a uniform bound on `∫_B |Df_n|^2`, which follows from the area bound `∫_E J_f ≤ |f(E)|` and `J_f ≥ (1-k²)|f_z|²`; the area bound is Bishop's Lemma 4.4 argument (Vitali plus Lebesgue differentiation), not a multiplicity formula. |

B page (5 items), one per design companion entry: `ex-constant-coefficients-and-affine-solutions` (constant
coefficients and affine solutions), `ex-piecewise-affine-approximations` (piecewise-affine/piecewise-constant
approximation of a measurable coefficient with the same bound), `ex-normalization-by-mobius-maps` (normalizing a
solution by a Möbius postcomposition, computed on the affine model), `ex-pullback-of-a-measurable-ellipse-field`
(pullback law under λζ and 1/ζ, with eccentricity preserved) and
`cex-uniqueness-of-beltrami-solutions-without-normalization` (the identity and 1/z solve μ ≡ 0, so normalization is
essential).

Dependency levels were computed by `tools/item-dependency-levels.mjs` from the declared `deps` after every edit; the
labels run 0–13 and were re-checked after the last dependency change. The only notable consequence is that the
normalized existence theorem sits at level 11 because it consumes the level-9 compactness and composition items of
batch 12.

## Choice record

- **Countable Choice only:** `def-measurable-beltrami-coefficient`, `def-weak-solution-beltrami-equation`,
  `lem-local-holder-cauchy-transform-estimate`, `lem-nondegenerate-local-holder-beltrami-coordinates`,
  `lem-weak-beltrami-factorization-in-holder-coordinates`, `ex-piecewise-affine-approximations`,
  `ex-pullback-of-a-measurable-ellipse-field`. These are the measure/Sobolev/Hölder interfaces and the local
  contraction; none touches a quasiconformal map, and the contraction needs only completeness of the Hölder space.
- **Axiom of Choice:** `thm-measurable-riemann-mapping-sphere`, `cor-local-integrability-beltrami-structures`,
  `lem-smooth-beltrami-coefficients-admit-quasiconformal-solutions`,
  `lem-area-and-l2-derivative-bounds-for-quasiconformal-maps`, `thm-holder-regularity-beltrami-solutions`,
  `ex-constant-coefficients-and-affine-solutions`, `ex-normalization-by-mobius-maps`,
  `cex-uniqueness-of-beltrami-solutions-without-normalization`. AC is inherited from the published ACL
  characterisation behind batch-12's analytic definition, from the reflexivity/Banach–Alaoglu inputs of the
  compactness theorem, and (for the existence lemma) from the uniformization theorem; each `axiom_use` field names the
  exact interface. No item silently drops a supplier's choice assumption, and no item upgrades a supplier's
  Countable-Choice-only hypothesis.

## Sources and harvest

Four sources were harvested as full text, fetched once with `source-fetch-check --stamp` and re-checked by
`url-sweep` and `source-backing`:

| source | kind | fetch stamp | harvest |
|---|---|---|---|
| Lyubich, *Conformal Geometry and Dynamics of Quadratic Polynomials* vol. I | monograph | 35 507 640 B, 702 pp., sha256_16 `291912b9e5206cf2` | Ch. 2 §§14.1–14.6 (printed pp. 195–198) and §§14.10.1–14.10.3 (pp. 200–201), 14 rows |
| Bishop, *Quasiconformal Mappings* (Stony Brook Math 627) | course-notes | 1 616 042 B, 164 pp., sha256_16 `a28bc4e2e00841a1` | Ch. 2 §1 and Ch. 3 §§1–6 (printed pp. 47–55, 85–105), 8 rows |
| Astala–Clop–Faraco–Jääskeläinen–Koski, *Nonlinear Beltrami operators, Schauder estimates and bounds for the Jacobian* | paper | 445 822 B, 17 pp., sha256_16 `7c51f46aa3d7006a` | Introduction and Theorems 1.1–1.3 (pp. 1543–1545), §§2.1–2.4 (pp. 1545–1554), §3 (pp. 1554–1556), 8 rows |
| Hunter, *Notes on Partial Differential Equations* | lecture-notes | 1 597 256 B, 242 pp., sha256_16 `0dbade1806f7a1ea` | §2.7.1–§2.7.2 (printed pp. 37–43), 4 rows |

At Step 1, the coverage file contained 35 harvested rows: **2 included** (`thm-measurable-riemann-mapping-sphere`, `lem-local-holder-cauchy-transform-estimate`), **16 inline**, **5 already-published**, **2 deferred** (Lyubich §§14.8–14.9 to
Teichmüller-type deformation material and to `owner-decision` respectively) and **10 out-of-scope**. This corrects the
aggregate disposition tally recorded in the initial Step-1 note; per-item dispositions are unchanged. The expected
low-yield warning counts only the 2 included rows; the other rows are inline uses, valid deferrals or reasoned declines.

Full-text reading note: the four documents were downloaded with `curl` at harvest time and read through installed
PyMuPDF; the locators above name the exact printed ranges. No source was dropped, so no `source_resolution` record is
needed. Lyubich §§14.7–14.9 were read for scope and disposition only; the reading claims are limited to the ranges
recorded in the coverage file.


## Step 3b coverage update

The new prerequisite `lem-local-postcomposition-chain-rule-for-w-one-two` adds one published supplier result to the
existing coverage record: Kinnunen, *Sobolev Spaces* (2026), Ch. 1 §1.8, Theorem 1.21, printed pp. 19–20, for the
Meyers–Serrin density input only. The postcomposition chain rule itself is proved locally. Its full-document stamp is
255f17a2dd431f95a188be5b69a5eb16b92e45d8eead77dec5ea56921df31beb (168 pp.; current fetch verification is recorded
in the coverage file). The current file has 38 harvested rows with dispositions 2 included / 18 inline / 6 already
published / 2 deferred / 10 out-of-scope. Current `coverage-checklist --require-destination` reports 0 errors and its
expected 2/38 low-yield warning; current `source-fetch-check --coverage` verifies all 5/5 full-text stamps. The
Bishop Ch. 3 §4 row is narrowed to Lemma 4.4 and Corollary 4.5; Lemma 4.6/reverse-Hölder context is not an inline
claim, matching the Step 3a F4 disposition.
The pullback example adds two inline source rows for Bishop’s linear-coordinate/ellipse convention and Lyubich’s chartwise conformal-structure convention; both are covered by the existing fetch stamps.

## Checks run (actual results)

| check | actual result |
|---|---|
| `node tools/manifest-deps.mjs <batch-13 manifest>` | `15 item(s), 0 normalized, 0 error(s)` |
| `node tools/manifest-deps.mjs <all 15 manifests>` | `261 item(s), 0 normalized, 0 error(s)` |
| `node tools/content-policy.mjs --manifest-only <all 15 manifests>` | `261 scoped item(s), 0 error(s), 0 warning(s)` (the count grows as sibling batches finish scaffolding) |
| `node tools/item-dependency-levels.mjs check --run frontier-43-complex-representation-15` | all 15 batch-13 labels match the computed levels; the only errors are `empty scaffold inventory` for the pairs other batches have not scaffolded |
| `node tools/coverage-checklist.mjs research/...-batch-13.coverage.json --require-destination` | 1 page, 35 harvested results, 0 errors, 1 expected low-yield warning (2/35 `included`, explained above) |
| `node tools/source-fetch-check.mjs --coverage research/...-batch-13.coverage.json --stamp` | 4/4 sources fetch-verified (4 newly stamped) |
| `node tools/source-fetch-check.mjs --coverage research/...-batch-13.coverage.json` | 4/4 sources resolved from the stamps (no network) |
| `node tools/url-sweep.mjs --coverage research/...-batch-13.coverage.json --out /tmp/b13-url-liveness.json` | 4/4 live, 0 failed, 0 suspect |
| `node tools/source-backing.mjs --coverage ... --liveness /tmp/b13-url-liveness.json` | 2 authored results, every one still backed by an openable source |
| `node tools/frontier-dependency-ledger.mjs refresh --run frontier-43-complex-representation-15` | refreshed; batch 13's 30 consumer-side rows all carry a review, and the only supplier-side edge without one is batch 14's page row |
| `node tools/frontier-item-gate.mjs --run frontier-43-complex-representation-15 --tool validate-plan` | exit 0: reading order and declared page prerequisites are acyclic and consistent over the 30 frontier pages; one `redundant-prereq` warning names this page (`requires smooth-approximation-and-sobolev-extension` directly but reaches it through `schauder-and-lp-elliptic-estimates`), a consequence of the owner's drift repair and a plan-level, not scaffold-level, observation |
| `node tools/frontier-item-gate.mjs --run frontier-43-complex-representation-15 --tool depcheck` | FAIL, `focus-item-unknown` for every manifest item without an authored carrier (this batch included). The documented Step-1 state; rerun after authoring |
| `node tools/frontier-item-gate.mjs --run frontier-43-complex-representation-15 --tool extcheck` | FAIL with 261 `focus-item-unknown` errors, one per scaffolded item that has no authored carrier yet (including this batch's ids). This is the documented Step-1 state, identical to batch 12's, and is re-checked at Step 3 after authoring |
| `node tools/step1-decisions.mjs check --run frontier-43-complex-representation-15` | 261 run items, 255 ready; **zero work rows belong to batch 13**; the remaining work rows are the unscaffolded pairs of other batches |
| `git status` | this batch modified only `research/frontier-43-complex-representation-15-batch-13.*` and wrote its 15 receipts |

## Cross-batch record

- Declared edges involving batch 13: one page edge (this page `requires`
  `extremal-length-and-planar-quasiconformality`, batch 12) and 29 item-level edges into batch-12 items
  (`def-acl-sobolev-quasiconformal-homeomorphism`, `def-beltrami-coefficient-and-maximal-dilatation`,
  `def-geometric-quasiconformal-homeomorphism`, `thm-composition-and-inverse-quasiconformal`,
  `thm-one-quasiconformal-is-conformal`, `thm-geometric-and-analytic-quasiconformality-equivalent`,
  `thm-normalized-quasiconformal-compactness`,
  `lem-circular-dilatation-quasisymmetry-and-analytic-quasiconformality`). All 30 have rows in
  `research/frontier-43-complex-representation-15-batch-13.cross-batch-dependencies.json` with status `open` and
  evidence naming the supplier statement, its declared hypotheses and the exact consumer use. Status is left `open`
  deliberately: the batch-12 items are scaffolded but not yet authored, so only their statements and declared
  prerequisites have been checked, not proofs.
- Batch 13 is the supplier of one page edge for batch 14 (`quasisymmetry-welding-and-conformal-removability`
  requires this page); the review row belongs to batch 14's consumer input.
- Assumption propagation: the AC carried by the eight items listed above must be carried by batch-14 consumers of
  this page; the Countable-Choice-only items (`def-measurable-beltrami-coefficient`,
  `def-weak-solution-beltrami-equation` and the three local lemmas) stay usable in choice-free contexts.

## Published defects and observations

- No defective published **statement** was found among the consumed suppliers: each linked item exists, is published,
  and states the hypotheses used (in particular the Newtonian-potential Hölder theorem with its cancelled Hessian
  formula, the Hölder-space Banach theorem for arbitrary open domains, the Sobolev coordinate-change lemma at k = 1,
  the Weyl lemma, the injective-holomorphic derivative theorem, and the uniformization theorem under AC).
- Observation for the canonical ledger (no repair proposed, outside this batch's ownership): the plan's `requires`
  list for order 1620 omits `hyperbolic-riemann-surfaces-and-uniformization` (order 1616), whose published
  uniformization theorem the design's own source route (Lyubich §14.2) requires. Evidence: design text L4144 ff. and
  the item-level dependency of `lem-smooth-beltrami-coefficients-admit-quasiconformal-solutions` on
  `thm-uniformization-simply-connected-riemann-surfaces`. Impact: none on availability or ordering, since the page is
  published and earlier.

## Unresolved findings and escalations

- None for this pair. No page split is needed: the page carries 10 items against the hard cap of 100, and the whole
  local closure (local charts, weak factorization, regularity, plus the two existence/estimate lemmas) lives on the
  same A page as the results it supports.
- The two added prerequisites are genuine closure work, not inventory padding; if the owner prefers the existence step
  folded into `thm-measurable-riemann-mapping-sphere`, no statement changes, only the manifest granularity.

## Decisions (15/15 `ready`)

Every item was recorded with `node tools/step1-decisions.mjs record --run
frontier-43-complex-representation-15 --item ID --decision ready --dependencies '<manifest deps>' --reason '<strategy,
examined suppliers, source stamps>'`. Each reason names the proof strategy, the examined supplier IDs and the fetch
stamps recorded above; no item is escalated. The records were written after the final manifest edit; any later
manifest change invalidates them and they must be re-recorded before the Step-3 gate.
