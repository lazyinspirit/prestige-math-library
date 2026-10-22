# Batch 17 — authoring evidence

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: beta  
Assigned pair: `emg-fx02` / `emg-fx02-examples`  
Category and library: `einstein-maxwell-models-mathematics` / `mathematics`

## Plan and design comparison

The owner direction `research/physics-non-fluid-129-2026-10-21-r2-owner-authoring-direction.md` was absent. The batch-17 assignment, `research/plan-spec.json`, the track plan, and the complete `emg-fx02` design section were inspected. The plan-spec page IDs, A/B pairing, category, library, title, order, and declared page prerequisites agree; there is no plan-spec conflict. Batch 17 owns these two pages only.

The design requires a local proof of the zero-boundary Hölder inverse: weak construction by Poincare and Lax–Milgram, followed by a locally authored boundary Schauder route using trace/density, flattened boundary charts, the constant-coefficient Newtonian-potential Hölder estimate, reflection/localization, and continuation. The inverse carrier locally proves the weak construction and injectivity, but applies the exact pinned published global weak-to-strong theorem `thm-global-schauder-regularity-for-the-weak-dirichlet-laplacian` for the regularity and estimate. That theorem's full proof, current published statement, source status, and hypotheses were inspected. This gives a complete conditional mathematical argument for the stated isomorphism, but it does not satisfy the design's explicit local-authoring obligation. The mismatch is escalated; no local reconstruction is claimed.

Affected claims and placements:

- `lem-emg-fx-dirichlet-holder-inverse`, especially proof step 2.1's surjectivity and inverse bound. Proposed same-page suppliers, ordered before this lemma: local trace/density and boundary-chart results, a Newtonian-potential Hölder-kernel estimate, reflection/localization, and the continuation/limit argument. Alternatively, the owner may explicitly resolve the design conflict by authorizing the exact published global theorem as the proof route.
- `thm-emg-fx-small-dirichlet-data`, which consumes the inverse for the local branch, positivity argument's function space, and the `O(epsilon^4)` remainder.
- `ex-emg-fx-small-constant-field-ball`, which consumes that branch theorem.

The A page has five items and the B page one, below the 100-item cap. `lem-emg-fx-holder-cubic-map` is an explicit local A-page helper added to prove the bounded `C^{2,alpha}` to `C^{0,alpha}` inclusion and the positive inverse-power map's Fréchet differentiability before the branch theorem uses them. The design's local branch, fixed bounded-domain boundary data, local uniqueness, positivity, and `O(epsilon^4)` scope are retained. No asymptotically Euclidean, puncture, non-CMC, apparent-horizon, or global-uniqueness result is asserted.

## Item inventory, dependencies, and levels

Item levels are computed from in-run logical suppliers; external mathematical suppliers do not raise the level.

| Item | Page | Level | Direct dependencies |
|---|---|---:|---|
| `def-emg-fx-dirichlet-constraint-problem` | A | 2 | `def-emg-fx-conformal-seed`, `lem-emg-fx-conformal-constraints` |
| `lem-emg-fx-banach-implicit-constraint` | A | 0 | `def-banach-space`, `def-frechet-derivative-between-banach-spaces`, `def-c-k-map-between-banach-spaces`, `def-operator-norm`, `def-space-of-bounded-linear-operators`, `lem-mean-value-inequality-for-a-differentiable-banach-valued-curve`, `thm-complete-subspace-iff-closed`, `thm-banach-fixed-point`, `thm-chain-sum-product-and-composition-rules-for-banach-derivatives` |
| `lem-emg-fx-dirichlet-holder-inverse` | A | 3 | `def-emg-fx-dirichlet-constraint-problem`, `def-sobolev-space-wkp-and-its-norm`, `def-wkp-zero-as-a-sobolev-closure`, `def-weak-dirichlet-solution-for-a-divergence-form-operator`, `def-countable-choice`, `def-axiom-of-choice`, `cor-cauchy-schwarz-inequality-for-l-two`, `lem-w-one-two-is-a-hilbert-space`, `thm-lax-milgram`, `thm-poincare-inequality-for-w-one-p-zero`, `thm-global-schauder-regularity-for-the-weak-dirichlet-laplacian`, `thm-weak-maximum-principle-for-the-laplacian` |
| `lem-emg-fx-holder-cubic-map` | A | 3 | `def-emg-fx-dirichlet-constraint-problem`, `def-frechet-derivative-between-banach-spaces`, `def-c-k-map-between-banach-spaces`, `cor-mean-value-theorem`, `thm-extreme-value-metric`, `thm-heine-borel-rn`, `thm-holder-spaces-on-bounded-domains-are-banach-spaces` |
| `thm-emg-fx-small-dirichlet-data` | A | 4 | `def-emg-fx-dirichlet-constraint-problem`, `lem-emg-fx-dirichlet-holder-inverse`, `lem-emg-fx-banach-implicit-constraint`, `lem-emg-fx-holder-cubic-map`, `def-axiom-of-choice`, `def-countable-choice`, `thm-holder-spaces-on-bounded-domains-are-banach-spaces`, `thm-weak-maximum-principle-for-the-laplacian` |
| `ex-emg-fx-small-constant-field-ball` | B | 5 | `thm-emg-fx-small-dirichlet-data`, `def-emg-fx-dirichlet-constraint-problem` |

The six recorded item levels match the current in-run graph. A scoped recomputation reports `2, 0, 3, 3, 4, 5` respectively, with no level error for an assigned item.

## Upstream interface and cross-batch checks

The current Step-1 records were loaded and checked with `loadStep1Record` and `step1Decision` before the `emg-fx01` interface was used. `def-emg-fx-conformal-seed`, `lem-emg-fx-conformal-constraints`, and the contextual `prop-emg-fx-rn-isotropic-seed` all returned `closed: true`, `decision: ready`, with current hashes.

The actual definition gives `h=psi^4 bar-h`, `K=(tau/3)h+psi^-2 bar-A`, and the barred Maxwell fields. The actual constraint lemma gives the scalar term `-2(|bar-E|^2+|bar-B|^2)psi^-3` and both barred divergence identities. Setting `bar-h=delta`, `bar-R=0`, `bar-A=0`, `tau=0`, `Lambda=0`, and actual base fields `(bar-E,bar-B)=epsilon(bar-E0,bar-B0)` yields the local equation with `S=|bar-E0|^2+|bar-B0|^2`. The definition does not infer the momentum equation or existence from the scalar constraint. The batch cross-dependency array records the two current batch-16 item edges and the `emg-fx01` page edge as scoped `verified` checks, not independent proof approvals. The A-page manifest also declares the external page prerequisites `lax-milgram-and-weak-elliptic-solutions` and `completeness-and-uniform-continuity`; they are outside this run and therefore are not in-run cross-batch rows. Other root mathematical prerequisites are listed in item dependencies.

## Source coverage and retrieval

`research/physics-non-fluid-129-2026-10-21-r2-batch-17.coverage.json` records source URLs, exact locators, the supported item IDs, dispositions for all 16 harvested results, search history, candidate dispositions, per-item argument/dependency summaries, and fetch evidence. The A page has two independent full treatments for each analytic area, including the Gilbarg–Trudinger book and Schikorra's complete PDE lecture notes; the Banach arguments also use the complete NTU notes and Conway Chapter XII. The B example records Alcubierre et al. and Gilbarg–Trudinger as context, with the coefficient independently computed in its verification.

The complete cited texts and named reasoning were inspected. Schikorra §8.8 explicitly leaves flattening details to Gilbarg–Trudinger; Wang's half-ball theorem assumes a classical solution; neither was treated as a weak-to-strong proof. The exact published global theorem was read at its actual hypotheses and proof status. The four locally retained PDFs are recorded with path, byte size, and SHA-256 in coverage under `research/physics-non-fluid-129-2026-10-21-r2-batch-17-sources/raw/`. `source-fetch-check --stamp` verified all 9 source rows (6 newly stamped; prior same-run stamps reused for the repeated conformal sources). No active source remains unresolved. Optional Caltech and UNL candidates and the Stony Brook and Leon Simon scope dispositions remain in coverage history; no candidate retrieval claim is used as proof coverage.

## Checks and blockers

- `proof-layout.mjs` on all six changed items: 6 items, 20 steps, 0 defects.
- Scoped precheck: 5 proof-bearing items checked, 0 failing; the definition is not applicable.
- Scoped rendercheck: 6 items and 2 pages, all frontmatter parses and all math spans pass KaTeX; no delimiter or wikilink defects.
- Scoped depcheck: all 6 selected items and their dependency/page-cycle closure passed (2,052 items and 341 pages in the selected closure).
- Scoped physics-content validation: 6 selected items and 2 selected pages, 0 domain, library, role, link, or scope errors.
- Strict proof contracts: 6/6 items, 0 errors, 0 warnings. Every supplier excerpt, numbered step/input map, and eight boundary dispositions is present.
- Coverage checklist: 2 pages, 16 harvested results, 0 errors, 0 warnings.
- Source fetch check: 9/9 source rows verified; 0 unresolved drops.
- Full-run item-level CLI check is held by unfinished work outside batch 17. The current graph has 130 empty scaffold inventories and one unrelated level mismatch, `ex-gr-fx14-1` (recorded 3, computed 4). All six batch-17 item levels match their recomputed values.
- Full-run batch-dependency-level check reports the shared scheduler snapshot stale after the authored manifest changed. A read-only recomputation still gives batch 17 level 1 with `requires: ["16"]`. Engine state and the shared dependency-level snapshot were left to the owner.

## Step-1 readiness dispositions

The local definition, Banach implicit-function supplier, and Hölder cubic-map helper have complete current inputs, A-page placement, proof contracts, and scoped checks; their Step-1 records return `decision: ready` with current hashes. The inverse is `escalated` because the design-required local Schauder route is not authored here. The branch theorem and ball example are also `escalated` as consuming items of that unresolved design route, despite their complete conditional arguments. Their Step-1 records preserve those exact route-gap reasons. No independent proof approval is implied by these records.
