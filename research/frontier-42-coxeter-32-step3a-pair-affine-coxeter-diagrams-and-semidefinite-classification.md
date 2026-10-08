# Step 3a scope review — A/B pair `affine-coxeter-diagrams-and-semidefinite-classification`

Run: `frontier-42-coxeter-32` · role: alpha · batch 27 · design label CG-23 · orders 1770/1771
A page: `affine-coxeter-diagrams-and-semidefinite-classification` · B page: `affine-coxeter-diagrams-and-semidefinite-classification-examples`

**Decision: `sufficient`** — scope only. No item approval, no owner record, no scaffold edit.

## Inputs read

- Manifests/evidence: `research/frontier-42-coxeter-32-batch-27.pages.json` (both pages, all 13
  items: statements, strategies, deps, sources), `...-batch-27.coverage.json`,
  `...-batch-27.notes.md`, `...-batch-27.cross-batch-dependencies.json` (68 rows: 2 page + 66
  item), `...-batch-27-url-liveness.json`, and the 13 Step-1 readiness records.
- Design: `research/plan-coxeter-groups-track.md` §CG-23 (L496–507);
  `research/plan-spec.json` orders 1770/1771; `research/coxeter-scaffold/inventory.json` (CG-23:
  the three contracts, exact ids/kinds); `research/coxeter-scaffold/independent-audit.md`
  (the absolute-value/zero-propagation route for the positive radical);
  `research/coxeter-scaffold/geometric-source-report.md` (affine criterion).
- Plan/owner: `research/frontier-42-coxeter-32-owner-scope.json`;
  `...-owner-authoring-direction.md`; `...-scope-ledger.json` (batch-27 rows);
  `...-alpha-step1-drift.md` §CG-23 (**no-drift**, "No prerequisite gap"). Only the B page
  consumes this A page inside the run; the pair has no other in-run consumer.
- Library role/prose: `library/coxeter-groups/affine-coxeter-diagrams-and-semidefinite-classification{,-examples}.md`
  (draft prose targets, empty item lists pending Step 3b).
- Checks I ran: `coverage-checklist --require-destination` → 2 pages, 67 harvested, **0 errors,
  1 advisory**; `source-fetch-check --coverage` → **6/6 fetch-verified, 6/6 resolved**;
  `item-dependency-levels check --run` → 302 items / 64 pages, no errors;
  `step3-decisions check --phase scope` → this pair open pending this review, all seven upstream
  supplier pairs already closed `sufficient`; `validate-plan` (page level — item lists are not
  spliced yet) → no `undeclared-prereq` finding for this pair, one plan-wide `redundant-prereq`
  WARN; mechanical resolution of every dep id, every `[[…]]` target and the full transitive
  dependency closure; requires-closure computation; A→B dependency scan.
- Primary-source spot check: the stamped Davis copy itself, re-fetched here (4220570 bytes,
  sha256_16 `ccefbb950fdcfce9`, identical to the batch fetch stamp), plus a web check of the
  affine-list conventions.

## Scope reconciliation (design ↔ plan-spec ↔ manifest ↔ prose)

- Identity, titles, category, companion pointers and `requires` in `plan-spec.json` and batch 27
  equal plan §CG-23 and the library prose scaffolds; no drift (Step-1 verdict no-drift).
- **A page (8 items) = the three design contracts with exact ids** —
  `def-cg-irreducible-affine-coxeter-type` (A1), `lem-cg-positive-radical-and-affine-gram-exclusions`
  (A2), `thm-cg-affine-gram-classification-and-euclidean-realization` (A8) — **plus five
  documented local additions**, each carrying a necessary piece of the designed route:
  `def-cg-standard-affine-diagrams` (the list the theorem names), `lem-cg-affine-slice-simplex-and-wall-reflections`
  (slice, simplex, facet reflections, intersection rule), `lem-cg-similar-euclidean-simplices-from-shared-facet-normal-gram`
  (similarity bridge), `lem-cg-affine-type-crystallographic-alcove-diagrams` (crystallographic
  facet data), `lem-cg-affine-diagram-enumeration` (the A2 contract's enumeration sentence,
  realized as its own lemma, exactly as the batch notes record). No addition narrows a promised
  claim or expands the subject.
- **Subject coverage.** Definitions: affine form type with radical quotient, slice, walls, alcove
  (A1); standard A–G tilde diagrams with small-rank coincidences (A3, A6(4)(7)). Results: positive
  radical, corank one, positive definiteness of proper principal submatrices, domination (A2);
  faithful isometric slice action, alcove simplex with facet normals of Gram matrix `C` (A4);
  simplex similarity from equal facet-normal Gram matrices (A5); crystallographic realization and
  `W_a = Q^∨ ⋊ W` (A6); complete enumeration of connected positive semidefinite corank-one
  diagrams (A7); classification iff-theorem with Euclidean realization, fundamental domain and
  length formula (A8). Examples: B1–B5 below. The design's exclusions are respected and recorded
  (no Kac–Moody classification, no twisted Lie-theoretic diagrams, no hyperbolic theory: A1(5),
  A6, A8(4), B3(v)); `Ã₁` is the only `∞` label and is separated explicitly (A3(7), A7(i), B2,
  matching Davis Theorem 6.8.12's finite-label hypothesis).
- **B page (5 items) = the five promised companion behaviours item-for-item**: Ã₂ radical vector
  and slice (B1); Ã₁ versus the finite dihedral families and the label 4 (B2); B̃ versus C̃ with both
  kernel vectors and the B/C scaling duality (B3); reducible semidefinite forms factorwise with
  the square chamber (B4); an indefinite (3,3,5) form that is infinite but not affine (B5). The
  prose scaffold's "dependency leaf" role holds: no item outside the pair consumes this B page or
  any B-homed item, and no A item depends on a B-homed item (full manifest scan).

## Source coverage

- Three independent treatments per page (Davis, *Geometry and Topology of Coxeter Groups*;
  Davis–Moussong notes; Xiong, *Lectures on Affine Weyl Groups*); 6/6 sources fetch-verified with
  durable stamps and 3/3 URLs live.
- 67 harvested rows, all dispositioned with a per-row decision: A page 19 included / 10 inline /
  10 deferred / 13 out-of-scope; B page 8 included / 6 inline / 0 deferred / 1 out-of-scope. The
  single advisory `coverage-low-yield` (19/52 on the A page) is **confirmed appropriate**: it is
  the design's own division of labour — this pair consumes its two required supplier pages
  (finite classification; affine alcoves) instead of rebuilding them — and the remaining declines
  are spherical/hyperbolic simplex theory, general polytope/mirror machinery, regular-cell-complex
  regularity, twisted/loop models and classical models, none of which the design admits. All 23
  declines carry 23 distinct written reasons; all 10 deferrals name a run page that really
  scaffolds the deferred heading (finite-coxeter-diagrams ×2, affine-reflections ×5,
  coxeter-presentations ×1, finite-reflection-arrangements ×1).
- My own reading of the stamped primary source confirms the decisive anchors the scaffold rests
  on: Davis Lemma 6.3.5 (the `|c_i|` argument) and Lemma 6.3.7 (printed pp. 79–81), Theorem 6.8.12
  with its `no m_ij = ∞` hypothesis, Table 6.1 (Euclidean list Ã₁, B̃₂, G̃₂, F̃₄, Ẽ₆–Ẽ₈, Ãₙ, B̃ₙ,
  C̃ₙ, D̃ₙ), Theorem 6.9.1, Appendix B "Euclidean Tessellations" (C̃ₙ = (4,3,…,3,4); the n = 1, 2
  cube-tessellation cases are Ã₁ and B̃₂; G̃₂ = (6,3)/(3,6); F̃₄ = (3,3,4,3)/(3,4,3,3)),
  Theorem C.1.3, Lemma C.2.3 (`det 2A = 3 − 2√5` and `4 − 2√5` for Z₄, Z₅) and Lemma C.3.1
  (domination). I also re-derived the standard-list data independently: determinant zero with
  positive proper principal minors for Ã₂ (3,3,3), B̃₂ = C̃₂ (4,4), F̃₄ (3,3,4,3), G̃₂ (3,6); the
  B̃ₙ/C̃ₙ facet attachments from θ = e₁+e₂ respectively θ = 2e₁; and the B3(iii) kernel vectors
  (1,√2,…,√2,1) and (1,1,2,…,2,√2). A web check (Wikipedia "Coxeter group" §Affine Coxeter
  groups: Ã₁ = I₂(∞) with matrix [[1,∞],[∞,1]]; the affine Schläfli criterion "all non-negative,
  at least one zero"; affine table entries F̃₄ = [3,4,3,3], G̃₂ = [6,3]) agrees with the scaffold's
  conventions. Reading depth: I did not re-read Davis outside the quoted anchors or Xiong beyond
  spot checks — the beta's full-range readings are the recorded evidence, and everything I did
  check is consistent with them.

## Prerequisites and dependency audit

- 84 distinct declared supplier ids for the 13 items: 52 resolve to published `items/` and 32 to
  current in-run scaffolds (batches 2, 4, 7, 9, 13, 21, 24 and this batch); **0 unresolved**.
  Every `[[…]]` target in every statement and strategy resolves the same way (223 item–reference
  pairs). The full transitive closure — 48 in-run items across 9 pages (this pair plus seven
  supplier pages) — resolves with no dangling edge, no plan-only id and no A→B item dependency.
- Every in-run supplier page lies inside the pair's `requires` closure (computed from
  `plan-spec.json`: coxeter-presentations, real-forms, canonical-roots, tits-cones,
  finite-coxeter-diagrams, crystallographic-root-lattices, affine-reflections are all inside).
  The only page named by this pair's records but outside the closure is
  `finite-reflection-arrangements-and-spherical-coxeter-complexes`, and it is a coverage
  *deferral destination*, not a dependency of any item.
- Claim-level spot checks confirm the cited clauses exist in the suppliers' current statements:
  `lem-cg-affine-reflection-identities-and-local-finiteness` (4) really states `W_a = Q^∨ ⋊ W`;
  `thm-cg-affine-alcove-transitivity-presentation-and-length` (1)–(4) cover
  transitivity/presentation/length/conventions; `lem-cg-highest-root-and-fundamental-alcove`
  (1)–(3) give dominance/alcove/reducible conventions; `thm-cg-dual-chamber-intersections-and-point-stabilizers`
  (4)–(5) are the point-stabilizer and intersection clauses; `thm-cg-root-length-criterion-and-faithfulness`
  (3) is faithfulness; `lem-cg-reflection-form-invariance-and-rank-two-orders` (2)–(3) supply the
  reflection identities and rank-two orders; `thm-cg-finite-coxeter-classification-including-h-and-dihedral`
  (1)–(4) supply the finite list and coincidences; `thm-cg-crystallographic-finite-type-and-lattice-stability`
  (1)–(4) supply the A–G crystallographic criterion and duality.
- **No unmet prerequisite found** (confirmed at the level of availability and declared-clause
  presence, not proof content). The 68 cross-batch rows are all `open` only because the suppliers'
  proofs are Step-3b work; each row already records consumer, supplier, required claim and use.

## Advisories (recorded; no scope change, no action requested at Step 3a)

1. `coverage-low-yield` (19/52): confirmed appropriate, reasons above.
2. Page-level `redundant-prereq` WARN from `validate-plan`: the A page requires
   `finite-coxeter-diagrams-and-complete-classification` directly although it is also reached
   through `affine-reflections-coroot-translations-and-alcoves`. This is a plan-wide pattern (112
   such warnings across the run) and a `requires`-list hygiene matter for the owner/Step 4; it
   does not affect item availability.
3. The Step-1 record "the determinant enumeration and slice construction remain draft
   obligations" is consistent with this Step-3a verdict (scope, not proof completion).

## Noted for later stages (non-scope observations; they do not affect this decision)

- `ex-cg-a-tilde-1-infinity-edge-versus-finite-dihedral` (ii) says "the translates (2k,2k+1) of
  the alcove tile the line". The W-orbit of the alcove is the full unit-interval family
  {(k,k+1) : k ∈ Z} (the reflection t : (0,1) ↦ (1,2) is in the group), so the parenthetical
  family omits the odd translates; the tiling and simple-transitivity conclusions themselves are
  correct. Wording to tighten at authoring (3b) or review (5).
- `ex-cg-b-tilde-versus-c-tilde-diagrams` (iv) concludes non-isomorphism "as Coxeter groups since
  their diagrams differ". Non-isomorphism of the Coxeter *systems* is immediate; the abstract-group
  statement needs its standard justification (e.g. the translation lattices Q^∨(B_n) and Q^∨(C_n)
  are non-isomorphic W-modules — for n = 3, Q^∨(B₃) has zero W-invariants while Q^∨(C₃) ≅ Z³
  contains Z·(1,1,1) — or an appeal to the classification). The claim lies inside the design's
  "duality behind the difference" and is true; the burden is in the proof.
- I did not verify any proof (none exists yet); this is a scope assessment only.

## Decision and next action

- Recorded via `node tools/step3-decisions.mjs record-scope --run frontier-42-coxeter-32
  --page affine-coxeter-diagrams-and-semidefinite-classification --decision sufficient`, with a
  reason naming this report path and the evidence above.
- Next action: Step 3b authors the 8 A items and 5 B examples in dependency order (batch suppliers
  first, in their own batches). The pair needs no enrichment, no merger and no scaffold edit. If
  the owner or an author changes any item's statement, title or inventory, the scope hash changes
  and this decision must be re-recorded for the new scope; `requires`-only or coverage-record
  edits do not change the scope hash.
