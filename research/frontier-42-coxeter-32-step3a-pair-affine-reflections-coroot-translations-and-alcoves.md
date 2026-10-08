# Step 3a scope review — A/B pair `affine-reflections-coroot-translations-and-alcoves`

Run: `frontier-42-coxeter-32` · role: alpha · batch 24 · design label CG-19 · orders 1764/1765
A page: `affine-reflections-coroot-translations-and-alcoves` · B page: `affine-reflections-coroot-translations-and-alcoves-examples`

**Decision: `sufficient`** — scope only. No item approval, no owner record, no scaffold edit.

## Inputs read

- Manifests/evidence: `research/frontier-42-coxeter-32-batch-24.pages.json` (both pages, all 11
  items: statements, strategies, deps, sources), `...-batch-24.coverage.json`,
  `...-batch-24.notes.md`, `...-batch-24.cross-batch-dependencies.json`, and the merged
  `...-cross-batch-dependencies.json` (13 batch-24 rows: 11 item + 2 page; all reviewed; all
  `open` only because their suppliers are authored later in this same Step 3, batches 2/4/21).
- Design: `research/plan-coxeter-groups-track.md` §CG-19 (L449–467: five local supplier contracts
  plus the B-companion sentence); `research/coxeter-scaffold/inventory.json` (CG-19 entry, five
  contracts, definition justifier `lem-cg-affine-reflection-identities-and-local-finiteness`);
  `research/coxeter-scaffold/independent-audit.md` (route row: gallery disk moves replace the
  bounded-inequality/translation-uniqueness shortcut); `research/coxeter-scaffold/geometric-source-report.md`
  §"Crystallographic affine alcoves" (L47 ff); `research/coxeter-scaffold/algebraic-source-report.md`
  §"Elementary affine Weyl theory, independent of loop algebras" (L44 ff).
- Plan/owner: `research/plan-spec.json` orders 1764/1765; `research/frontier-42-coxeter-32-owner-scope.json`;
  `research/frontier-42-coxeter-32-owner-authoring-direction.md`; `research/frontier-42-coxeter-32-scope-ledger.json`
  (batch-24 rows); `research/frontier-42-coxeter-32-alpha-step1-drift.md` §CG-19 (**no-drift**).
  No owner or review Step-3a receipt exists for this pair yet.
- Library role/prose: `library/coxeter-groups/affine-reflections-coroot-translations-and-alcoves{,-examples}.md`
  (draft prose targets with empty item lists pending Step 3b); the five `requires` pages; published
  supplier items under `items/`.
- Read-only checks run by me: `coverage-checklist --require-destination` → 2 pages, 44 harvested
  results, **0 errors, 1 advisory warning** (`coverage-low-yield`, 7/38 on the A page);
  `source-fetch-check --coverage …` → **12/12 fetch-verified, 12/12 resolved**; `step3-decisions
  check --phase scope` → this pair open with "current scope review required"; mechanical resolution
  of every dep id and every `[[…]]` link in the 11 items.

## Scope reconciliation (design ↔ plan-spec ↔ manifest ↔ prose)

- Identity, orders, category, companion pointers and `requires` in `plan-spec.json` and the batch-24
  manifest equal plan §CG-19 and the library prose scaffold; the plan entries carry empty `items`
  arrays, so the design file is the item-level source. No drift (step-1 verdict no-drift; the
  run drift-evidence records list this pair with the plan locators for CG-19).
- **A page (7 items) = the five design contracts + two permitted local additions** (owner direction
  allows "mathematically necessary local additions"; the audit-selected gallery-disk route needs
  facet/type bookkeeping and rank-two residues before the presentation theorem):
  1. `def-cg-affine-root-hyperplane-reflection-and-alcove` — walls `H_{α,k}={x:B(x,α)=k}`,
     reflections `r_{α,k}=x−(B(x,α)−k)α^∨`, alcoves as components of the complement, `W_a`, coroot
     translations `t_λ`, `Q^∨⋊W` with explicit multiplication; all structural assertions are
     explicitly deferred to the named lemmas and non-crystallographic types are excluded.
  2. `lem-cg-affine-reflection-identities-and-local-finiteness` — `r_{α,k}=t_{kα^∨}∘s_α`,
     involution, pointwise-fixed wall, arrangement preservation, local finiteness/openness/convexity
     of alcoves, translations by simple coroots via `r_{α,1}r_{α,0}`, and `W_a=Q^∨⋊W` with unique
     Euclidean decomposition.
  3. `lem-cg-highest-root-and-fundamental-alcove` — highest-root dominance with positive simple
     coefficients, `A={B(·,α_s)>0, B(·,θ)<1}` nonempty bounded open simplex and an alcove with its
     `|S|+1` facets, reducible and A₁ conventions.
  4. `lem-cg-affine-alcove-separation-and-facet-types` (addition) — separation by one wall and
     triangle identity, trivial affine stabiliser of `A`, well-defined facet type map, panel rules.
  5. `lem-cg-affine-point-stabilizers-and-vertex-residues` (addition) — finiteness/generation of
     point stabilisers, local link with allowed angles `{2,3,4,6}`, vertex types, rank-two boundary
     words trivial in the abstract group.
  6. `lem-cg-affine-generic-gallery-paths-and-disk-moves` — discreteness/full rank of `Q,Q^∨`,
     generic galleries, boundary-fixed generic disks, backtrack/rank-two move calculus, and
     triviality of abstract words carrying `A` back to itself.
  7. `thm-cg-affine-alcove-transitivity-presentation-and-length` — generation by the facet
     reflections and transitivity, Coxeter presentation and simple transitivity on alcoves,
     `ℓ(g)=#` separating walls, and an explicit scope clause declining the loop-realisation and
     extended-group identifications.
- The independent-audit route is preserved: A6 supplies the disk move calculus and A7 uses it for
  injectivity and the trivial alcove stabiliser — no bounded-inequality shortcut is assumed.
- **B page (4 items) = the four promised companion behaviours**, one each: A₁ line (alcoves,
  translations, infinite-dihedral presentation, root-vs-coroot convention warning);
  A₂/B₂ alcove shapes with corner data, facet types and Coxeter matrix; root-vs-coroot translation
  lattices with `[Q:Q^∨]=2` in B₂ and the dual-convention warning; extended affine Weyl group
  `P^∨⋊W`, quotient `P^∨/Q^∨` and non-trivial alcove stabilisers. B is a dependency leaf
  (verified mechanically: 0 external deps on B items).
- Deliberate declines are confined to subjects outside this pair (torus/π₁ image of the walls,
  affine weak/Bruhat order, reflection length, loop-algebra realisation, Tits cone, Steinberg torus,
  unitary-dual applications), each with a reason and a home elsewhere in the library or run. I
  confirm the `coverage-low-yield` advisory (7/38) is appropriate for this deliberately focused pair.

## Source coverage

- A page 8 sources / B page 4 (12 entries, 8 unique URLs): Morgan (Columbia Lecture XII), Magyar
  arXiv:0705.3826, Lewis–McCammond–Petersen–Schwer (Trans. AMS 371), Perrin Kac–Moody notes,
  Aguiar–Petersen (FPSAC 2013), Davis (book manuscript), Knapp (Ch. II), Vogan (MIT notes); the A
  page has at least two independent treatments (monograph/book plus lecture notes and/or papers).
- Every harvested row carries a disposition (`inline` with an item id, `included`,
  `already-published`, or `out-of-scope` with reason); fetch stamps are present and verify 12/12;
  the batch URL sweep is 8/8 live (`...-batch-24-url-liveness.json`).
- Independent spot-checks of the example mathematics (scope-level sanity, not a proof audit): the
  A₁ walls `Z`, reflections `2k−x`, alcove `(0,1)` and infinite-dihedral presentation; the A₂
  vertices `v₁=(1,1/√3)`, `v₂=(0,2/√3)` and `m₀₁=m₀₂=3`; the B₂ corner data and
  `m₀₁=2, m₀₂=m₁₂=4` — recomputed consistently with the stated conventions.
- Coverage-mapping note (advisory d below): Perrin Theorem 12.2.19 (loop-model Weyl group ≅ Ŵ) is
  marked `inline` to A7, but A7(4) deliberately declines that identification; that harvested row
  should be re-pointed to the published loop-realisation home or the decline recorded explicitly.

## Prerequisites and role

- All **63 unique dep ids** of the 11 items resolve: **49 published** items on disk (load-bearing
  ones spot-checked with `status: published` and matching statements: `def-reduced-crystallographic-euclidean-root-system`,
  `def-coroot-and-dual-root-system`, `prop-highest-root-exists-and-is-unique-in-an-irreducible-finite-root-system`,
  `thm-the-weyl-group-acts-simply-transitively-on-weyl-chambers`, `def-finite-convex-cell-complex-and-linear-subdivision`,
  `lem-finite-convex-cell-complexes-admit-compatible-triangulations`, `thm-coordinate-map-for-a-finite-dimensional-normed-space`),
  plus **14 in-run** ids: the 7 own items, 5 batch-2 items of `coxeter-presentations-exchange-and-reduced-word-theorems`,
  and 2 batch-21 items of `crystallographic-root-lattices-and-weyl-group-interfaces`. **No prerequisite id is
  absent from both the published library and the current scaffold**, and every `[[…]]` wikilink in
  statements/strategies resolves to such an id.
- Cross-batch rows: 13 reviews (11 item + 2 page), each naming the required claim, hypotheses and use
  location; verified hypothesis matches include finite `S` with entries in `{2,3,4,6}∪{∞}` for the
  Coxeter-presentation suppliers and positive-definite crystallographic scaling for the rank-two
  label and type-list suppliers. All rows are `open` solely because batches 2/4/21 are authored
  later in this run; no unreviewed or orphaned batch-24 edge.
- Page `requires`: `homotopy-and-homotopy-equivalence`, `simplicial-subdivision-and-simplicial-approximation`
  and `root-systems-dynkin-diagrams-and-cartan-killing-classification` are published pages on disk;
  `crystallographic-root-lattices-and-weyl-group-interfaces` (batch 21) and `real-forms-and-reflection-geometry`
  (batch 4) are in-run drafts with reviewed open page edges.
- Role: the pair is the geometric affine-Weyl supplier for CG-23
  `affine-coxeter-diagrams-and-semidefinite-classification` (batch 27), whose items declare 16
  item-level deps on A1–A4 and A7; it consumes the in-run crystallographic/real-forms interfaces and
  published geometry/homotopy items; the B page is a leaf. This matches the design's stated role
  ("builds the affine Weyl group directly as a Euclidean isometry group before comparison with the
  separately proved loop-algebra model").

## Findings

1. **Sufficient scope.** The planned definitions, results and examples cover the intended subject
   item-for-item against plan §CG-19 and the scaffold inventory: every promised clause has a home
   (A1–A3, A6, A7 are the five contracts; A4–A5 are the local intermediate additions the route
   needs), the B companion realises all four promised behaviours, conventions and abstentions are
   explicit, and source coverage is complete. No omitted topic or result; no merger or enrichment
   is required.
2. **No unmet prerequisite absent from both the published library and the current scaffold.** All
   deps and wikilinks resolve; the only open prerequisite rows are in-run edges whose suppliers are
   scheduled and reviewed.
3. Advisories (non-blocking; no scaffold edits made by this review):
   a. **Generic-position ingredient for A6 not declared.** The finite bad-set avoidance used to
      perturb galleries/disks has no declared dep. The ingredient exists in the published library —
      `lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces`
      states the linear case over an infinite field (its own proof already uses an affine line), and
      the affine case is a short local adaptation; `thm-baire-category-r` is also available. A6's
      strategy says "the same finite bad-set avoidance as in (A2)(3)", but A2(3) states no such
      lemma. Recommended for Step 3b: declare the published finite-union lemma (or derive the affine
      case locally) and state the avoidance step explicitly. Confirmed declaration gap, not a
      missing result.
   b. **Batch-4 style citation.** A2's strategy cites `lem-cg-dual-action-and-chamber-faces-exist`
      (batch 4) for "style" only, with no item dep. The batch-24 notes already flag the page-level
      edge for Step 3 confirmation or narrowing; carry the same disposition.
   c. **Batch-2 item deps outside the page `requires` list.** A5–A7 declare deps on batch-2 HH-11
      items although `coxeter-presentations-exchange-and-reduced-word-theorems` is not in the plan's
      `requires` list for CG-19. The edges are reviewed and reviewed-open; the owner may consider
      recording the page-level edge, but this is a declaration-hygiene matter, not a scope change.
   d. **Perrin Theorem 12.2.19 coverage mapping** (see "Source coverage"): re-point or record the
      decline; no scope change, since the design excludes the loop model from this pair.
4. **Honest uncertainty.** Item proofs do not exist yet, so this is a scope assessment only. The
   high-risk obligations are A5–A7 (finite general-position disk argument, generation of point
   stabilisers, triviality of rank-two circuit words); the drift review's "Remaining" line and the
   batch-24 notes §9.2 record these as Step-3 authoring burdens. Their planned statements and
   suppliers are present at scope level; I have not verified any completed proof (none exists) and
   report no scope-level shortfall from that.

## Decision and next action

- Recorded via `node tools/step3-decisions.mjs record-scope --run frontier-42-coxeter-32
  --page affine-reflections-coroot-translations-and-alcoves --decision sufficient` with a reason
  naming this report path and the scope evidence above.
- Next action: Step 3b authors the 7 A items and 4 B examples in dependency order (batches 2/4/21
  suppliers first, in their own batches); batch 27 consumes the pair. If the owner applies advisory
  (a) or any other change to an item's statement/title/inventory, the scope hash changes and this
  decision must be re-recorded after the edit; `requires`-only or coverage-record edits do not
  affect the scope hash.
