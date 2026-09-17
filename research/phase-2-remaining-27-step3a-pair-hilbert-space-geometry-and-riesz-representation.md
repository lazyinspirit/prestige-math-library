# Step 3a scope review — `hilbert-space-geometry-and-riesz-representation`

Run: `phase-2-remaining-27` · Batch: 1 · Role: alpha (scope only; no item or
proof approvals, no owner records)

Pair under review:

- A page `hilbert-space-geometry-and-riesz-representation` (26 items),
- B page `hilbert-space-geometry-and-riesz-representation-examples` (8 items).

**Decision: `sufficient`.** No merger and no scaffold enrichment recommended.

## Review basis

I read the current batch-1 manifest and coverage
(`research/phase-2-remaining-27-batch-1.pages.json`,
`research/phase-2-remaining-27-batch-1.coverage.json`), the binding prose design
`research/plan-functional-analysis-track.md` §5 FA-13/FA-14 together with the
binding amendment §14.4 and the harvest/ledger sections §6, §8, §9, §11.2,
§11.3, §11.8, the binding owner direction
`research/phase-2-remaining-27-owner-authoring-direction.md`, the plan entries
in `research/plan-spec.json` (orders 288.071/288.072), the Step-1 drift review
`research/phase-2-remaining-27-alpha-step1-drift.md` (this page: `no-drift`),
`research/phase-2-remaining-27-step1-owner-repair.md` (no scope change; its two
repaired edges are Algebraic Geometry / Scheme Theory pages),
`research/phase-2-remaining-27-batch-1.notes.md`, the empty batch-1
cross-batch ledger, the unified frontier ledger, and the run scope ledger.
No owner `proceed`/merge/enrich record exists for this pair, so nothing was
assumed. I did not edit any scaffold, item, page or other pair.

The plan controls one point of divergence from the design prose: the A page's
page-level `requires` is the published
`banach-valued-integration-and-the-radon-nikodym-property` page (its transitive
closure contains the design's FA-1/2/7/10 suppliers), while the needed older
suppliers are named at item level and are all published. The Step-1 drift
review accepted this, and it is not a scope gap.

## Inventory versus the design

The A inventory is exactly §5 FA-13's 25 items in design order, plus the one
§14.4 insertion `lem-inner-product-is-jointly-continuous` placed before the
completion pairing, with the owner-directed rename of the colliding planned id
`def-orthogonal-projection` to `def-hilbert-orthogonal-projection` (the
published finite-dimensional id is untouched). The B inventory is the design's
8 items verbatim. There are no unplanned items on either page, and no design
item is missing.

Subject coverage is complete for the pair's role:

- inner product, Cauchy–Schwarz, induced norm, parallelogram, polarization
  (items 1–5);
- Hilbert space, joint continuity of the pairing, completion (6–8);
- orthogonality, Pythagoras, closed orthogonal complements (9–11);
- closest point in a closed convex set, variational characterization,
  orthogonal decomposition, Hilbert projection and its properties, double
  orthogonal complement for linear subspaces (12–18);
- Hilbert Riesz representation and canonical reflexivity (19–20);
- Hilbert adjoint, adjoint identities, the transpose/adjoint dictionary,
  self-adjoint/positive/unitary/normal vocabulary, kernel–range orthogonality
  (21–24);
- the two non-load-bearing remarks: agreement with concrete $L^2$ projection,
  and the recorded PDE ownership of Lax–Milgram (25–26).

Conspicuous exclusions are deliberate boundaries with named owners, not
omissions: orthonormal families, Bessel, Parseval, ONB classification and
Fourier series belong to the FA-14 pair (same batch); compact/Riesz–Schauder
and Hilbert–Schmidt/trace-class material to FA-15/16 and §14.5's square-kernel
pair; spectral calculus to FA-18–21; Lax–Milgram and sesquilinear-form
vocabulary to PDE (design §3 seam, recorded by item 26); Riesz–Markov–Kakutani
to MT-20 (the naming split is recorded in the design); weak topologies to
FA-8/FA-10; general Hilbert tensor products are out of scope per §11.3.

## Source coverage

The page's coverage records 3 sources and 21 harvested result rows, every one
`included` or `inline` (0 dropped, deferred or out-of-scope). Every item
carries Bühler–Salamon and MIT 18.102 references; the four choice-sensitive
items (`def-hilbert-space`, `thm-projection-onto-a-nonempty-closed-convex-set`,
`thm-orthogonal-decomposition-by-a-closed-subspace`,
`thm-riesz-representation-for-hilbert-space`) additionally carry
Blackadar–Farah–Karagila for the sequential-versus-σ-completeness distinction.

I spot-checked the locators against the actual arguments rather than the
ledger text:

- Bühler–Salamon: the coverage's `fetch_verified` hash prefix
  `8ffd5f868b480006` matches a cached copy of the same ETH notes
  (`/tmp/bs.pdf`, 452 pp., 8 June 2017). Extracted text confirms §1.3.3
  *Hilbert Spaces* opening on printed p. 38 (Lemma 1.40 Cauchy–Schwarz p. 38,
  Definition 1.41 and Example 1.42 p. 39, Theorems 1.43 Riesz and 1.44 closest
  point pp. 39–41) and §5.3.1–5.3.2 with Theorem 5.35 on p. 236,
  Definition 5.36 p. 237, Lemmas 5.37–5.38 p. 238, Definition 5.39 p. 239.
  Minor locator nit only: the coverage's span "pp. 235–239" begins after the
  §5.3.1 heading (printed p. 233) but covers every cited result.
- Blackadar–Farah–Karagila: numbering verified against the published version
  (Münster J. Math. text): Definition 1.0.1 (σ-completeness), Definition 2.0.1
  (Hilbert space), Theorem 2.0.4 (closest vector with the ZF nested-balls
  proof), Corollary 2.0.5 (orthogonal decomposition), Theorem 2.0.6 (Riesz,
  conjugate-linear isometry, reflexivity) — matching the coverage rows.
- MIT 18.102: I did not re-fetch this 820,929-byte file (no cached copy), so
  the row's result numbering (Thms 178/180–181/184–185, Def 182, Prop 183,
  Ex 186) is accepted on the recorded fetch, not independently re-read. The
  mathematical content claimed by those rows is standard and is independently
  backed by the Bühler–Salamon rows I did read.

## Dependencies and role

- The pair declares 40 distinct published prerequisite items; all 40 exist in
  `items/` with status `published` (checked). There is no in-run cross-batch
  item dependency (batch-1 ledger `[]`).
- In-run consumers: 8 pages, 46 consumer items, 65 dependency edges rest on
  this pair (FA-14; compact Lie groups; the square-kernel pair; the compact
  self-adjoint pair and its examples; continuous functional calculus; spectral
  measures; unbounded self-adjoint operators). Every referenced id is on the A
  page. The frontier ledger records all 80 edges that declare a batch-1
  supplier as reviewed `verified`.
- The B items are leaves; nothing outside the pair consumes them.

## Observations and uncertainty (non-blocking, owner-held)

1. Overlapping published ownership, already recorded in the batch-1 notes: the
   published, judged item `thm-hilbert-spaces-are-reflexive-by-riesz-representation`
   (hosted on `library/functional-analysis/banach-valued-integration-and-the-radon-nikodym-property.md`,
   audited 2026-09-14, assumes AC_ω) proves Riesz representation plus canonical
   reflexivity in aggregate, overlapping planned items 19–20; the published
   `lem-closed-l-two-subspaces-have-orthogonal-projections` (assumes AC)
   overlaps the general projection construction and is used only by
   `rem-l2-projection-agreement`. These are canonical-reconciliation questions
   after this pair publishes, not scope gaps in the pair.
2. No published file references any of the 34 new item ids, and none of the ids
   collides with an existing item file, so the pair introduces no forward
   references from published content.
3. The B page has no standalone Riesz-representation example: the theorem is
   exercised indirectly through `ex-adjoints-of-shifts-multiplication-and-integral-operators`,
   whose adjoints are produced by Riesz. This matches the design's B inventory,
   so I do not treat it as an omission; flagged so the owner can enrich if
   desired.
4. `thm-double-orthogonal-complement-is-closure` is deliberately stated for
   linear subspaces, per §14.4; the arbitrary-subset form
   $S^{\perp\perp}=\overline{\operatorname{span}S}$ is therefore not stated on
   the page.
5. Harvest scope, for transparency: this page's coverage rests on
   Bühler–Salamon + MIT (+ Blackadar–Farah–Karagila on the choice-sensitive
   items). The design's §11.8 matrix also names Teschl §§1.3, 2.2–2.4 and
   Brezis §§5.1–5.2 as further checks in the same cell, but no Teschl/Brezis
   rows are recorded here (Teschl appears on the FA-14 coverage). Each item
   still carries two full treatments, so the two-source requirement holds.
6. Scope only: I did not audit proofs, contract text or harvest faithfulness —
   that is Step 5's work. My confidence in the *scope* verdict is high; the
   proof status of the pair is untouched by this review.

## Decision

`sufficient` (A26/B8). The planned definitions, results and examples cover the
intended subject — Hilbert-space geometry, projection, adjoints and Hilbert
Riesz representation — with every exclusion named as a boundary or owned by a
specified later page. Recommend neither a merger nor enrichment; Step 3b may
author this pair as a scope.
