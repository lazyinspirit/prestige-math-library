# Batch 14 notes — `em-minkowski-mathematical-prerequisites` / `-examples`

Run `physics-em-sr-40-2026-10-08`, role beta, 2026-10-08. Scope: exactly one A/B
pair, orders 307/308, category `classical-electromagnetism-mathematics`,
library `mathematics`. Final inventory: **4 A items + 1 B item**, all five
recorded `ready` at Step 1 with current dependency hashes. No item file, page,
plan, published item, engine state or verdict was edited.

Owner direction `research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md`
was read first. It authorizes local mathematical suppliers and forbids trimming
promised claims; both were applied (see "Inventory decisions").

## Design vs plan

Design section `research/plan-classical-electromagnetism-track.md` L402–L485
(the "Em Minkowski Mathematical Prerequisites" reservation, quoting
`proposed-inventory.json` and `mathematical-prerequisites.md#M08`,
`mathematical-example-verifications.md#...hypothesis-boundaries`). Compared with
`research/plan-spec.json` entries 307/308:

- page ids, kinds, orders, category, library, A/B companion links, titles and
  the six declared `requires` pages (`dual-spaces-bilinear-forms-and-inertia`,
  `linear-algebra-methods-in-combinatorics`, `rn-as-a-normed-space`,
  `the-derivative-and-mean-value-theorems`, `the-inverse-function-theorem-completed`,
  `the-total-derivative`) agree exactly. **No plan conflict.**
- The design's item `deps` blocks are not item-specific: the same four analysis
  items (`def-ck-euclidean-maps-and-diffeomorphisms`,
  `def-euclidean-inner-product`, `thm-algebra-of-derivatives`,
  `thm-chain-rule-for-total-derivatives`) appear in 26–27 of the 217 inventory
  items and are unrelated to, e.g., the polynomial boost computation. The
  scaffold therefore keeps every design-specific dependency and replaces the
  boilerplate block with the dependencies each recorded statement and proof
  step actually consumes; no claim was weakened and no supplier was dropped
  without a replacement (details per item below). The Mathlib-independent
  Step-1 review already flagged the same class of noise in sibling pairs.

## Inventory decisions (recorded, not silent)

1. **`lem-em-proper-time-reparametrization` (new local supplier, level 1).**
   M08's middle paragraph (C¹ future timelike curve, τ = c⁻¹∫√(−η(z′,z′)),
   τ′ > 0, η(U,U) = −c², null curves not parametrizable, straight lines) is a
   promised claim of the design but was given **no item id** in either inventory;
   it is also the construction that the B example's null-line check tests. It is
   carried as one local mathematical supplier on the same A page, so the pair
   preserves the claim instead of dropping it, and the example's declared
   dependency set stays meaningful. A=4 is far below the 100-item cap; no page
   split is required. `inventory_expansion_required: false` on the three
   original items is retained: no expansion beyond M08 is needed.
2. **Example enrichment (one clause).** The design's B inventory declares the
   example's deps as all three original A items, but its worked text exercises
   only the definition, the boost and the proper-time construction. One exact
   check was added to the example in its declared role ("hypothesis boundaries"):
   for the symmetric nonzero form F = η one has Φ = id and η(v,Φ(v)) = −1 ≠ 0,
   so the antisymmetry hypothesis of the contraction lemma is genuine. The
   example's design text is otherwise preserved verbatim in substance; nothing
   was weakened or made empirical.
3. The design's example text, the M08 statements and hypotheses, the (−,+,+,+)
   convention with c retained, and the explicit "tensor is a multilinear map,
   not an array" clause are all preserved. The physical reading of straight
   lines as inertial trajectories is explicitly excluded from the mathematical
   claim (recorded as a physical premise, not proved).

## Dependency verification (actual uses, not declared edges)

All 37 distinct out-of-run suppliers exist on disk as **published** items and
were inspected (statements, hypotheses, home pages):

- `def-em-minkowski-affine-space` (level 0): affine structure on R⁴, η and its
  matrix/nondegeneracy, causal classification and C⁺, standard orientation,
  Lorentz maps with LᵀηL = η, proper/orthochronous, frames, tensor
  transformation laws, and the separate positive c. Suppliers checked:
  `def-function-space`, `def-vector-space`, `def-euclidean-inner-product`,
  `def-standard-bilinear-form-on-a-coordinate-space`,
  `def-bilinear-symmetric-skew-and-alternating-forms`,
  `def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form`,
  `def-transpose-of-a-linear-map`, `def-linear-basis`,
  `def-coordinate-column-and-matrix-of-a-linear-map`,
  `def-linear-isomorphism-and-invertible-linear-map`,
  `thm-change-of-basis-for-a-bilinear-form-is-congruence`,
  `def-orientation-of-a-finite-dimensional-real-vector-space`,
  `def-determinant-of-a-linear-operator`, `def-real-order`. The congruence
  theorem is used in exactly its stated direction (matrix of a bilinear form in
  the new basis is PᵀAP); invertibility of an η-preserving linear map is proved
  from nondegeneracy, it is not assumed.
- `lem-em-boost-preserves-metric` (level 1): boost formula, metric preservation,
  det = 1, future-cone preservation. Suppliers `def-em-minkowski-affine-space`,
  `def-linear-map`, `def-rational-power`, `lem-rational-power-laws`,
  `lem-of-square-monotone`, `def-real-order`. The design's
  `thm-algebra-of-derivatives`/`thm-chain-rule-for-total-derivatives` are **not**
  used (no derivative occurs in the computation) and were removed for that
  reason.
- `lem-em-proper-time-reparametrization` (level 1): continuity of g and √g,
  primitive τ with τ′ > 0, strictly increasing τ, inverse differentiability,
  chain rule for z∘τ⁻¹, η(U,U) = −c², null and straight-line cases. Suppliers
  `def-ck-euclidean-maps-and-diffeomorphisms`,
  `def-vector-valued-derivative-and-integral`,
  `def-vector-valued-functions-limits-and-continuity`,
  `thm-componentwise-limits-and-continuity`,
  `thm-algebra-of-continuous-functions`, `def-continuity-real`,
  `thm-of-square-roots`, `lem-of-square-monotone`, `thm-continuous-inverse`,
  `thm-composition-of-continuous-functions`,
  `cor-primitives-of-a-continuous-function`,
  `thm-monotonicity-from-the-derivative`, `def-derivative`,
  `cor-differentiable-implies-continuous`, `thm-derivative-of-an-inverse`,
  `thm-chain-rule`, `cor-zero-derivative-implies-constant`, `def-interval` —
  all read; every hypothesis matched (open interval, C¹ on an open set, τ′ ≠ 0
  for the inverse rule, componentwise reassembly, primitives of continuous
  functions). Home pages are earlier in the real-analysis reading order
  (continuity and differentiation are before `the-total-derivative`, which this
  page requires); no forward or circular edge; no AC use.
- `lem-em-antisymmetric-tensor-contraction` (level 1): skew-symmetric F,
  Φ from the flat-map bijection plus nondegeneracy, η(u,Φ(u)) = 0, and the
  conditional invariance of η(U,U) for mU′ = qΦ(U). Suppliers listed in the
  manifest; `def-vector-valued-derivative-and-integral` covers the R⁴-valued
  curve and `thm-algebra-of-derivatives` the product rule on the four coordinate
  squares. No AC use; the conditional clause is not asserted as a force law.
- `ex-…-hypothesis-boundaries` (level 2): depends on all four A items; B page is
  a leaf; no physical premise.

Dependency levels recomputed: 0, 1, 1, 1, 2 (design values 0, 1, 1, 2 preserved).
`node tools/physics-support/item-dependency-levels.mjs check --run
physics-em-sr-40-2026-10-08` reports no finding about any batch-14 item (its
only errors are `empty scaffold inventory` for sibling batches still being
scaffolded concurrently).

## Sources (harvested, stamped, read)

Two independent full lecture-note treatments, both fetched and stamped by
`source-fetch-check --stamp` (2/2), and read directly:

1. **David Tong, Dynamics and Relativity**, Cambridge Part IA Mathematical
   Tripos (Lent 2013), `https://davidtong.org/pdfs/teaching/dynamics-and-relativity/dynrel.pdf`
   — §7.1–§7.4.7, printed pp. 107–145 (PDF pp. 113–151), complete. The `original_url`
   `https://www.damtp.cam.ac.uk/user/tong/relativity/dynrel.pdf` is recorded as
   history: node/TLS verification of that host fails in this environment
   (`UNABLE_TO_VERIFY_LEAF_SIGNATURE`; page opened with `curl -k`), and the
   request redirects to the author-hosted copy that was stamped. The url-sweep
   treats `original_url` as a declared superseded URL.
2. **Sean M. Carroll, Lecture Notes on General Relativity**, arXiv:gr-qc/9712019v1,
   `https://arxiv.org/pdf/gr-qc/9712019` — Chapter 1, printed pp. 1–30 (PDF
   pp. 8–37), complete. The SR-track reader (`research/first-principles-2026-10-03/relativity/reader-carroll`)
   independently records a full 238-page read of this same source, corroborating
   provenance and locators.

37 harvest rows, 0 errors/warnings: M08 items disposed `included`/`inline`;
kinematics, particle dynamics, accelerated observers and stress-energy disposed
`deferred` to existing plan pages (`sr-observer-measurements`,
`sr-lorentz-transformations`, `sr-proper-time-comparisons`, `sr-energy-momentum`,
`sr-accelerated-observers`, `em-lorentz-covariant-formulation`,
`em-energy-momentum-and-angular-balance`); units-convention, historical and
diagram material disposed `out-of-scope` with specific reasons. Source
conventions: Tong uses (+,-,-,-) and c = 1 discussion, Carroll uses (−,+,+,+)
with c retained; the pair keeps the run's declared (−,+,+,+, c retained)
convention (`sr-to-em-mapping.json`) and the harvest notes the dictionary.

## Checks actually run (exact results)

- `step1-decisions.mjs record` ×5: all five recorded `ready`, one at a time, in
  dependency order (def → boost → proper-time → contraction → example).
- `step1-decisions.mjs check --run …`: run-wide exit 1 with 101 work rows for
  sibling batches; **none of the five batch-14 items appears** in `work`.
- `item-dependency-levels.mjs check --run …`: exit 1 only for sibling batches'
  empty inventories; no cycle, no label error, no finding about batch 14.
- `manifest-deps.mjs` (batch-14 manifest): 5 items, 0 missing, 0 errors.
- `content-policy.mjs --manifest-only` (batch-14 manifest): 5 scoped items,
  0 errors, 0 warnings.
- `coverage-checklist.mjs … --require-destination`: 1 page, 37 harvested
  results, 0 errors, 0 warnings.
- `source-fetch-check.mjs --stamp` then check mode: 2/2 fetch-verified,
  2/2 resolved, 0 drops.
- `url-sweep.mjs --coverage <batch-14> --out /tmp/… --recover --fail-on-dead`:
  2/2 live, 0 failed, 0 recoverable, 0 suspect.
- `source-backing.mjs`: 4 authored results, every one backed by an openable
  source.
- `manifest-deps.mjs` and `content-policy.mjs --manifest-only` over all current
  run manifests: 46 items, 0 errors/0 warnings.
- `manifest-integrity.mjs --run …`: 80 pages owed, 80 present, no scope drift.
- `validate-plan.mjs research/plan-spec.json`: exit 0 (plan untouched).
- `extcheck.mjs --quiet`: exit 0.
- `drift-review-check.mjs --run …`: 40 pages reviewed, no blocked edges.

## Cross-batch ledger

`research/physics-em-sr-40-2026-10-08-batch-14.cross-batch-dependencies.json`
written as `[]`: this batch consumes **no** in-run supplier, so it declares no
cross-batch edge, and an empty input is valid per
`briefs/tasks/frontier-dependency-ledger.md`. The refreshed unified ledger shows
two declared edges where this page is the **supplier**
(`em-primitives-and-postulates` ← batch 23 and
`em-variational-mathematical-prerequisites` ← batch 15, both via `requires`);
those consumer batches own the review rows.

## Escalations, defects, blockers

- Escalations: none. All five items `ready`.
- Published defects found in the used prerequisites: none; every supplier used
  is `status: published` and its statement was read against the use made of it.
- Open uncertainty carried forward honestly: the boost lemma and the
  proper-time lemma are stated for the mathematical structures fixed here;
  the physical identification of C⁺ with the future light cone, of c with the
  vacuum speed of light, and of the conditional four-force equation with the
  Lorentz force are physical premises handled by later pairs
  (`post-em-minkowski-physical-model`, `post-em-lorentz-coupling`), not by this
  pair.

These records certify Step-1 readiness (complete proof strategy, met
prerequisites, harvested sources), **not** independent mathematical acceptance.
Step 3 authors and reviews the items.
