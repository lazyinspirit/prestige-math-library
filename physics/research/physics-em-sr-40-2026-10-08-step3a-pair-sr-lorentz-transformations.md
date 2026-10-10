# Step 3a scope report — pair `sr-lorentz-transformations` / `sr-lorentz-transformations-examples`

- Run: `physics-em-sr-40-2026-10-08`, role alpha, label
  `step3a-pair-sr-lorentz-transformations-5f65efc25ca72b45`.
- A page `sr-lorentz-transformations` (order 211, category `special-relativity`,
  `library: physics`, 17 items: 4 definitions, 8 lemmas, 3 theorems,
  1 `physics-theorem`, 1 physics remark; 15 domain-mathematics and 2
  domain-physics items). B page `sr-lorentz-transformations-examples`
  (order 212, 9 leaf items: 6 examples, 3 counterexamples; all mathematics).
  Batch 2; both pages carry the companion pairing 211/212.
- Scope decision: **sufficient** for the A page (recorded via
  `tools/physics-support/step3-decisions.mjs record-scope`). No omission found,
  no merger or enrichment recommended, no unmet prerequisite, no owner action
  requested.

## Inputs read

- `research/plan-spec.json` (pair entries, orders 211/212; A requires 16 pages;
  B requires the A page) and `research/plan-special-relativity-track.md`
  (SR02/`Lorentz Transformations` block: reservation, budget 34/10,
  requires `sr-spacetime-primitives`).
- Full source design `research/first-principles-2026-10-03/relativity/scaffold/special-relativity.md`
  (postulates/primitives | precise objects | SR02 inventory row),
  `scaffold/sr-supplier-proofs.md` S2/S3 (the Lorentz-algebra and
  tensor/current arguments), `scaffold/expanded-item-inventory.json`
  (SR02 home of exactly the two stable ids), `relativity/closure-ledger.json`
  (M01: S0–S2, "affine/Lorentz definitions, basis, cone, boosts and full C2
  affine-isometry classification"), and `research/prose-scaffold-splice.json`
  `proposed_item_homes` (`post-sr-inertial-covariance` →
  `sr-spacetime-primitives`; `thm-sr-proper-orthochronous-lorentz-algebra` and
  `thm-sr-tensor-and-current-transformation` → `sr-lorentz-transformations`).
- Run manifests `research/physics-em-sr-40-2026-10-08-batch-2.pages.json` and
  sibling batch-1 supplier manifest; coverage
  `research/physics-em-sr-40-2026-10-08-batch-2.coverage.json`; notes
  `…-batch-2.notes.md`; cross-batch dependency input
  `…-batch-2.cross-batch-dependencies.json`.
- Owner authoring direction `research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md`
  (including the published-context declaration repair), the Step-1 owner
  `ready` receipts `research/physics-em-sr-40-2026-10-08-step1-<id>.json` for
  all 26 items, and
  `research/physics-em-sr-40-2026-10-08-external-prerequisite-repair.json`
  (per-consumer supplier→home mapping and closure check).
- Intended-role interfaces:
  `research/first-principles-2026-10-03/relativity/sr-em-supplier-contract.json`
  (S2/S3 stable ids and conventions) and the downstream consumers in batches
  3–12, 23 and 37.

## Scope evidence (design vs content)

The SR02 design reservation names: def proper orthochronous group; M01 boost
verification/inverse/composition; pthm interval and cone invariance; post
inertial covariance; rem verbal-postulate reconstruction obligations; S3
generic tensor/covector/current mathematics before Doppler. Each is built:

- proper orthochronous group → `def-lorentz-map-and-lorentz-group`
  (linear/affine Lorentz maps, matrix criterion, O(V,eta), SO^+(V,eta));
- boost verification/inverse/composition → `def-lorentz-boost`,
  `lem-lorentz-map-preserves-metric-and-causal-structure`,
  `lem-boost-is-proper-orthochronous-with-inverse`,
  `lem-collinear-boost-composition-and-velocity-addition`,
  `lem-rapidity-parametrization-of-collinear-boosts`,
  `lem-boost-rotation-factorization`;
- M01 closure (full C² affine-isometry classification) →
  `thm-sr-affine-isometry-classification`; Lie-algebra/exponential suppliers →
  `lem-lorentz-lie-algebra-structure`, `lem-lorentz-exponential-map-and-rapidity`;
- assembled group interface → `thm-sr-proper-orthochronous-lorentz-algebra`
  (stable S2 id), whose clauses (i)–(iv) state boost/inverse/composition/rapidity,
  the SO^+ subgroup structure, the unique factorization L = B(-beta) Rhat and
  interval/causal/cone/orientation invariance, with the explicit disclaimer
  that det = 1 alone does not force orthochrony;
- pthm interval and cone invariance → `pthm-sr-interval-and-cone-invariance`
  (interval, causal-classification, present/past, future-null-line and
  orientation/volume-form invariance of inertial transitions, composition of
  transitions, conditional scope qualification, no empirical claim);
- post inertial covariance → homed on SR01 by the splice; consumed here as the
  physical premise of the pthm and the remark (no duplicate minted);
- reconstruction obligations → `rem-sr-verbal-postulate-reconstruction-obligations`
  (records the open reconstruction steps, asserts none as fact);
- S3 tensor/covector/current mathematics before Doppler →
  `def-ck-tensor-field-on-minkowski-space` plus
  `thm-sr-tensor-and-current-transformation` (stable S3 id) with vector,
  covector/phase, general (r,s), derivative/divergence, alternating/volume-form
  and four-current/density clauses, including the covector/phase transform that
  the Doppler consumer needs.

The four additional A items (`def-spatial-rotation-of-an-inertial-frame`,
`lem-inertial-chart-transitions-are-affine-lorentz`, and the two already listed
structure lemmas) are the support machinery those reservation items require;
they add no subject beyond "Lorentz transformations". The B page supplies the
worked instances of the A results: 1+1 matrix/metric/determinant/inverse and
numeric interval invariance, collinear composition and rapidity addition at
beta = 3/5, the boost-rotation factorization computation, noncommutativity and
improper/non-orthochronous and "rotation is not a boost" counterexamples,
tensor/covector/current component computations, and the primed-origin motion.
The 34/10 reservation is a budget including supplier-closure slots; the pair
closes with 17/9 while every reserved claim, example and qualification is
present (checked item-by-item; nothing dropped).

Domain boundary: the 15 mathematical items carry only mathematical deps; the
two physical items carry `physical_scope` and consume
`post-sr-inertial-covariance` / `post-sr-ideal-clocks-and-light` from batch 1.
The interface conventions match the EM contract row for the two stable ids:
passive boost `x'^0 = gamma(x^0 - beta.x)`, matrix criterion
`M^T eta_0 M = eta_0`, `epsilon_{0123} = +1`, and the Lambda / Lambda^{-1}
component orientation used by the S3 consumers.

## Source coverage

`coverage-checklist.mjs --require-destination` passes: 1 page, 44 harvested
results, 0 errors, 0 warnings. The 44 rows are 28 per-source content rows plus
16 canonical local-completion rows. Content dispositions: 8 `included` +
8 `inline` (all landing on existing pair items), 8 reasoned `out-of-scope`
(length-contraction/time-dilation reduction warning, axiom-system equivalence,
flatness narrative, area-lattice device, rotation noncommutativity, Thomas
precession physics, spacetime diagrams, manifold formulation) and 4 `deferred`
to named later in-run pages (`sr-spacetime-primitives`,
`sr-observer-measurements`; causal classification to SR01). Three
fetch-verified sources over exact load ranges: Crowell *Special Relativity*
§1.4 pp. 30–32, §§2.3–2.4 pp. 46–49, §8.3 pp. 174–176; Carroll *Lecture Notes
on GR* Ch. 1 eqs. (1.3)–(1.21); Reall Part III GR §2.2 pp. 26–28 (the DAMTP
original is superseded by a byte-identical Wayback copy, recorded as
`original_url`). Conversions (+−−−) → (−+++) and c = 1 → x^0 = ct are recorded
per source; source gaps (general six-parameter matrix; commutators left as an
ellipsis) are handled as explicitly labelled local completions with
`ai-altered` provenance rather than attributed to the sources. URL liveness is
3/3 for the pair (run-level 66/67; the single dead URL is an unrelated
Griffiths text) and source-backing lists all 7 authored results backed.

## Prerequisites (unmet-prerequisite screening)

- The 26 items have 227 dep/`justified_by` edges and 77 distinct targets: 51
  pinned published imported mathematical items, 12 same-page A items, 14
  batch-1 (`sr-spacetime-primitives`, order 209) scaffold items; a scripted
  scan of `items/`, `library/` placements, `research/math-imports.json` and
  all 40 batch manifests finds 0 unresolved targets. Every wikilink in the
  statements and strategies resolves and is declared in `deps`/`justified_by`
  (0 unresolved, 0 undeclared).
- The A page's 16 declared `requires` pages all exist in `plan-spec.json` with
  order < 211: `sr-spacetime-primitives` (209) and 15 published mathematical P
  pages (order ~80; the two entries without an explicit P status,
  `the-derivative-and-mean-value-theorems` and
  `the-inverse-function-theorem-completed`, resolve to published imported
  pages). The 25 direct imported supplier homes used by the pair are all
  inside the page's declared closure (32 pages): 15 are listed directly and
  10 (e.g. `rn-as-a-normed-space`, `matrices-and-the-matrix-of-a-linear-map`,
  `inner-product-spaces-and-orthogonality`, `the-total-derivative`) are
  inherited through `sr-spacetime-primitives`, as recorded by
  `external-prerequisite-repair.json` (`missing_consumer_homes_after` = 0).
- Consumer screening: A-page ids are consumed by 114 dependency edges from 17
  page-level consumers in batches 4–12 (SR) and 23/37 (EM:
  `em-lorentz-covariant-formulation` 9 edges,
  `em-primitives-and-postulates` 2 edges), consistent with the S2/S3 contract;
  `sr-worldlines-and-clocks` (batch 3) and the B page carry the page-requires
  edge. The B page is a leaf: 0 consumers of its items, and no other page
  homes any of the 26 ids.
- Result: **no unmet prerequisite found** — nothing the pair's planned items
  consume is absent from both the published library and the current scaffold.
  Uncertainty and limits: this review checked presence, identity, publication
  status and interface coverage, not the internal proofs of the pinned
  read-only import suppliers or the correctness of the unauthored scaffold
  proofs (Step 3b/5 work).

## Checks run (exact)

| Check | Command | Result |
|---|---|---|
| coverage | `node tools/physics-support/coverage-checklist.mjs research/physics-em-sr-40-2026-10-08-batch-2.coverage.json --require-destination` | 1 page, 44 harvested, 0 errors, 0 warnings |
| manifest deps | `node tools/physics-support/manifest-deps.mjs research/physics-em-sr-40-2026-10-08-batch-2.pages.json` | 26 items, 0 normalized, 0 errors |
| dep/link/consumer scan | scripted scan of `items/`, `library/`, `math-imports.json`, all 40 run manifests, and all `[[...]]` links | 77/77 targets resolve; 0 unresolved or undeclared links; 0 duplicate homes; 114 consumer edges; B leaf confirmed |
| plan ordering | scripted check of the 16 `requires` entries in `plan-spec.json` | all exist, all order < 211; B requires A (211 < 212) |
| step 3a state | `node tools/physics-support/step3-decisions.mjs check --run physics-em-sr-40-2026-10-08 --phase scope` | `sr-lorentz-transformations` listed as current scope review required (closed by this decision) |

## Observations (non-blocking)

- The batch-2 notes describe the B page as "9 leaf items (8 examples,
  1 counterexample set)"; the manifest kinds are 6 examples + 3
  counterexamples. The id list, leaf status and coverage are unaffected; this
  is a notes-wording discrepancy only, recorded here for honesty.
- No other scope-affecting discrepancy was found between the design, the
  splice, the coverage file and the current manifest.

## Decision

`sufficient` — the planned definitions (Lorentz maps and group, boost,
spatial rotation, C^k tensor fields), results (metric/causal preservation,
inverse/composition, rapidity, factorization, the group theorem, Lie algebra
and exponential, affine-isometry classification, chart transitions, tensor and
current component laws, and the conditional interval/cone invariance theorem)
and the 9 worked examples/counterexamples adequately cover the intended SR02
subject, with every promised claim and qualification present, exact supplier
resolution and no unmet prerequisite. Recorded in
`research/physics-em-sr-40-2026-10-08-step3a-review-sr-lorentz-transformations.json`.
No owner proceed/merge/enrich action is requested for this pair.
