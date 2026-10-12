# Step 3a scope review — `equivariant-constructible-perverse-foundations`

- Run: `frontier-44-special-representation-examples-28`; role alpha; label
  `step3a-pair-equivariant-constructible-perverse-foundations-d7c140e6628f47bb`.
- Pair: A `equivariant-constructible-perverse-foundations` / B
  `equivariant-constructible-perverse-foundations-examples` (batch 41, orders
  1818 / 1822; the batch holds only this pair). Owned pair only; no scaffold,
  item, plan or owner record edited. Reviewed 2026-10-10.
- Decision: **sufficient** for the intended subject as designed. No omitted
  topic, result or example requiring enrichment or a pair merger was found.
  One non-blocking prerequisite uncertainty is flagged below for the owner
  (item 3's Stiefel/Grassmannian CW hand-off).

## Evidence read

- Prose design: `research/plan-klr-foundation-prerequisites.md`
  §"Equivariant Constructible Perverse Foundations" L947–1028 (A suppliers
  L951–1020, B example L1021–1027). The batch-41 notes locator "L795" is
  stale (that line is in the preceding Hodge section); the section start is
  L947, consistent with the notes' own L945 remark.
- Owner decisions: `research/frontier-44-special-representation-examples-28-owner-authoring-direction.md`
  ("Owner same-frontier prerequisite extension — 2026-10-09") requires these
  21 appended pairs in-run, suppliers before consumers, no narrowing of
  approved scope. Drift: `…-alpha-step1-drift.md` L328–331 and
  `…-alpha-step1-append-1-drift.md` L95–98 both record "no-drift (order 1818;
  declared closure complete; no change)". No pair-specific owner scope
  decision or step-3a receipt exists yet for this page.
- Manifests: `research/frontier-44-special-representation-examples-28-batch-41.pages.json`
  (A 8 items; B 1 item; requires A = 11 pages, B = 3 pages, printed above).
  Design carrier drafts (all 9 items present):
  `research/frontier-44-special-representation-examples-28-klr-foundation-constructible-drafts/`.
- Coverage: `…-batch-41.coverage.json`. Re-ran
  `node tools/coverage-checklist.mjs …-batch-41.coverage.json --require-destination`
  → 2 pages, 45 harvested results, 0 errors, 0 warnings; re-ran
  `node tools/source-fetch-check.mjs --coverage …` → 5/5 fetch-verified,
  0 documented drops. Fetch stamps 2026-10-09T13:06:29–53Z (Bernstein–Lunts
  Part I, sha256_16 `d5c84bf06367288d`; BBD Astérisque 100; Hatcher AT).
- Dependency records: A/B item `deps`, page `requires`,
  `…-batch-41.cross-batch-dependencies.json` (31 reviewed edges), consumer
  cross-batch files of batches 44/45/48/49, and current
  `node tools/validate-plan.mjs research/plan-spec.json --run …` → exit 0
  ("no item-level cycles, forward references, B-page dependencies, or
  unresolved ids among the 100 page(s) with item lists").

## Inventory against the design

The scaffold matches the design item for item — same 8 A ids/kinds/titles in
the same proof order, and the single B example; nothing was dropped or
narrowed. Scaffold `deps` are strict supersets of each carrier draft's
declared inputs for all 9 items (checked programmatically: 0 declared inputs
dropped anywhere; e.g. item 2 additionally consumes the batch-40 derived
adjunction supplier `lem-bounded-analytic-field-sheaves-have-derived-tensor-hom-and-pullback-pushforward-adjunctions`,
as the batch-41 notes record).

1. `def-equivariant-constructible-derived-category-for-complex-algebraic-varieties`
   (definition; simplicial action nerve, Cartesian cohomology, constructible
   restriction; well-definedness discharged by item 4 via `justified_by`).
2. `lem-locally-trivial-acyclic-fibers-give-bounded-derived-pullback-equivalences`
   (n-acyclic pullback/Hom comparison; keeps the corrected `r = a−b`
   retract-versus-extension boundary).
3. `lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom`
   (Stiefel/frame resolutions `U_N → B_N`, `X_N = (U_N×X)/G`, gap `r_N`).
4. `lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom`
   (triangulated model, idempotent completeness, no derived full faithfulness).
5. `thm-constructible-six-functors-proper-base-change-and-verdier-duality`
   (six operations, base change, normalized dualizing object, no unnormalized
   stack shift).
6. `lem-general-linear-stiefel-perverse-normalization-is-exact-and-conservative`
   (binding shift `s_N = dim_C B_N`).
7. `thm-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes`
   (equivariant heart, IC simples, division-algebra endomorphism ring).
8. `thm-equivariant-constructible-ext-is-degreewise-finite-and-compatible-with-characteristic-zero-scalars`
   (degreewise finiteness, no finite total Ext, no preserved simplicity).
9. B: `ex-equivariant-constructible-ext-on-a-point-is-degreewise-finite-not-total-finite`
   (G = C^× on a point; Ext = k in nonnegative even degrees; restriction to
   the point not derived fully faithful).

## Source coverage

- Bernstein–Lunts Part I: §1.9.1–1.9.4 + App. A2–A4 → items 2/3; §2.1.1–2.1.7,
  §2.2.1–2.2.5, §2.4–2.5 → items 3/4; §2.3, §4.1, App. B1–B6 → items 1/4
  (inline); §2.7.1–2.7.2 → B item; §2.8 → item 1; §3.1 → item 3;
  §3.2–3.5 → item 5; §3.6 → item 8; §5.1–5.2 → items 6/7.
- BBD §1.4.1–1.4.26 and §2.1.1–2.1.23 → item 7; Hatcher Thm 4.41 and the
  CP^n cell computation → items 3 and 9.
- Dispositions audited: §2.6 (change of groups), §3.7 (Ind_*/Ind_!) and
  §4.2–4.3 (D_X-module, étale) are out-of-scope; §5.3 (decomposition theorem)
  is deferred to `projective-perverse-hard-lefschetz-and-decomposition`
  (batch 48), which declares this pair as a prerequisite. I checked the four
  declared consumers (batches 44/45/48/49) by statement/strategy scan: none
  uses restriction/induction over subgroups or D-module/étale coefficients;
  B44's flag argument uses the Borel stabilizer only to describe an orbit,
  and its convolution is built from the equivariant six operations. The
  out-of-scope reasons stand.
- Minor annotations (non-blocking): BL §2.7.2's general classifying-space
  description is carried only by the narrower C^× example; and item 6 has no
  direct coverage-row destination (it is attributed through the §5.1/§2.5
  rows and the ordinary perverse suppliers). `coverage-checklist` passes
  either way.

## Intended role and consumers

- Pages declaring this pair in `requires`: batch 44
  `equivariant-borel-moore-correspondence-convolution-and-constructible-ext`
  (15 item edges: items 1, 4, 5), batch 45
  `proper-cohomological-descent-and-constructible-hypercovers` (page-level
  only), batch 48 `projective-perverse-hard-lefschetz-and-decomposition`
  (item 8), batch 49 `quiver-full-flag-projective-semisimplicity` (6 item
  edges: items 1, 3, 4, 5, 6, 7) — plus the B companion. Every consumer edge
  names an item that exists here; no consumer demands a missing result.
- The single-example B page conforms to the design and to this run's B-page
  pattern (17 of 50 B pages carry one item).

## Prerequisite audit

- Page requires: A's 11 pages are published except `analytic-constructible-sheaf-foundations`
  (batch 30, 6 items), `constructible-incidence-and-cochain-models` (batch 36,
  2 items), `complex-algebraic-stratified-topology` (batch 37, 17 items),
  `analytic-derived-six-operations-and-duality` (batch 40, 9 items); B's other
  two pages are published. All four in-run suppliers exist with item lists.
- Item deps: 0 unresolved among the 9 items; every `[[…]]` id appearing in
  statements/strategies resolves to a published item or an in-run scaffold
  item.
- Load-bearing supplier claims spot-checked against their current statements:
  batch-36 simplicial Čech descent (simplicial coinduced injectives, Cartesian
  descent equivalence) → item 1; batch-36 incidence model and batch-37 finite
  conical cochain models → items 2/3/8; batch-30 injective models and the
  constructible definition → items 1/2; batch-40
  `lem-bounded-analytic-field-sheaves-have-derived-tensor-hom-and-pullback-pushforward-adjunctions`,
  `lem-analytic-constructible-sheaves-admit-coherent-six-operations`,
  `thm-ordinary-middle-perverse-t-structure-…` and
  `lem-smooth-complex-pullback-is-exact-for-the-middle-perverse-t-structure`
  → items 2/5/6/7/8. Declaration-level adequacy holds for each use recorded
  in the strategies.
- The batch-41 notes' "out-of-closure notion pages — owner reconciliation
  required" paragraph (notes L95–118) is superseded by the current manifest:
  `def-algebraic-group-action-and-scheme-theoretic-stabilizer` (items 1, 3, 9),
  `def-simplicial-object-and-simplicial-commutative-ring` (item 1) and
  `def-complex-projective-space-and-holomorphic-charts` (item 9) are all
  declared deps now, all three pages lie in the declared closure (the first
  two via `algebraic-spaces-stacks-and-derived-algebraic-geometry-foundations`,
  the third via B's `divisors-riemann-roch-and-duality`), and validate-plan
  passes. No owner action is needed beyond reconciling the stale note text on
  the next edit of that shared file.

## Flagged findings (uncertainty, not confirmed scope gaps)

1. Item 3's finite CW bookkeeping, already recorded as an authoring obligation
   in the batch-41 notes: the strategy applies `thm-cohomological-serre-spectral-sequence`,
   whose hypothesis is a Serre fibration over a *path-connected CW complex*,
   to sphere bundles over Stiefel manifolds `V_k(C^N)`. The corpus supplies
   the ingredients (`lem-a-closed-smooth-manifold-has-the-homotopy-type-of-a-finite-cw-complex`,
   `lem-second-countable-smooth-manifolds-have-cw-homotopy-type`,
   `cor-homology-of-spheres` with the universal-coefficient items for the
   fibre computation, and `thm-schubert-cells-give-the-stable-grassmannian-cw-structure`
   on the already-in-closure page `topological-vector-bundles-and-grassmannian-classification`),
   but none of those edges is declared and no single item states the complex
   Stiefel-manifold CW/simple-connectivity facts. This is a potential unmet
   prerequisite (uncertain: the author may discharge it inline or with an
   alternate route). Recommended scaffold addition for the owner: declare the
   published Schubert-CW / closed-manifold-to-finite-CW edges (for items 3
   and 9), or add one local supplier lemma for the Stiefel CW/simple-connectivity
   hand-off, so Step 5 is not asked to rule on an undeclared supplier.
2. Item 9's "one cell in each even degree" model of `P^{N-1}` likewise relies
   on the published Schubert-CW theorem (Gr_1 case) without a declared edge;
   same recommendation, smaller.
3. Residual review uncertainty: the out-of-scope audit of §2.6/§3.7/§4.2–4.3
   is declaration-level plus strategy scan of the four consumer pairs (which
   are still being constructed concurrently), not a full proof read.

## Verdict

The planned definitions, results and example adequately cover the intended
subject of this pair: the equivariant constructible derived category for
products of `GL_n` on complex varieties, its finite Stiefel resolution models,
six operations with normalized duality, the equivariant middle-perverse
t-structure with IC simples, and Ext finiteness/scalar extension, plus the
point example exhibiting the non-finiteness phenomenon. No omission of a
topic, result or example that the design or the declared consumers need was
found; the flagged CW hand-off is a dependency-bookkeeping uncertainty, not a
scope deficiency. Decision: **sufficient**; no merge or enrichment proposed;
the owner may optionally apply the recommended edge additions.
