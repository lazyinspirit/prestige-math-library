# Step 3a scope review — Classical Complex Algebraic Actions and Affine Embeddings

- Run: `frontier-38-owner-30`, batch 23, role alpha (step 3a scope review). This
  dispatch owns only this pair.
- A page: `classical-complex-algebraic-actions-and-affine-embeddings` (order 879).
- B page: `classical-complex-algebraic-actions-and-affine-embeddings-examples`
  (order 880).
- Scope decision: **sufficient** (receipt
  `research/frontier-38-owner-30-step3a-review-classical-complex-algebraic-actions-and-affine-embeddings.json`).
- This report decides scope only. It is not an item approval, a proof review, or
  an owner record, and it edits no scaffold, item, plan, coverage row, or engine
  state.

## Inputs read (exact paths)

- Dispatch brief and prompt:
  `research/frontier-38-owner-30-dispatch/alpha-step3a-pair-classical-complex-algebraic-actions-and-affine-embeddings-303eedae09b1e350.prompt.md`.
- Binding direction: `research/frontier-38-owner-30-owner-authoring-direction.md`
  (pair 879/880 bullet; local-prerequisite construction rule; source/gate
  discipline).
- Prose design: `research/plan-algebraic-geometry-expansion-track.md` AG-ACT-2
  (L33 order table, L209 design row, L299 f. anti-overclaim checklist — no
  AG-ACT-2-specific overlay exists in this plan).
- Contract: `research/plan-spec.json` rows 879/880 (`requires` arrays verbatim in
  the manifest; four items carry `local_addition: true`).
- Scope carrier: `research/frontier-38-owner-30-batch-23.pages.json` (A: 7 items,
  B: 3 items, with statements, deps, dependency levels, sources).
- Coverage: `research/frontier-38-owner-30-batch-23.coverage.json` (3 sources,
  16 harvested rows) and `...-batch-23.cross-batch-dependencies.json` (`[]`).
- Construction record: `research/frontier-38-owner-30-batch-23.notes.md` and the
  local packet `research/frontier-38-owner-30-local-prereq-879.md`.
- Readiness: `research/frontier-38-owner-30-step1-<id>.json` for all ten items
  (10/10 present, state `ready`).
- Published suppliers: `items/def-classical-affine-coordinate-ring.md`,
  `items/def-classical-affine-variety-morphism.md`,
  `items/thm-classical-polynomial-functions-equal-coordinate-ring.md`,
  `items/thm-classical-affine-global-regular-functions-coordinate-ring.md`,
  `items/thm-classical-affine-morphisms-coordinate-ring-antiequivalence.md`,
  `items/thm-classical-affine-nullstellensatz-correspondence.md`,
  `items/def-axiom-of-choice.md` (all `status: published`).
- Required pages: `library/algebraic-geometry/classical-affine-varieties-coordinate-rings-morphisms-and-rational-maps-interface.md`
  (published; 50 listed items) and
  `library/algebraic-geometry/dimension-constructible-images-and-dimensions-of-fibres.md`
  (published; 46 listed items) — every listed item of both pages is `published`.
- Consumer role: `research/plan-spec.json` shows the only consumers of this A page
  are B880 (itself) and the planned AG-ACT-3 A page
  `reductive-affine-invariant-theory-and-geometric-quotients` (881, not yet
  scaffolded; page-level requires only).

## Design vs delivered scaffold

- Every design id is present. A-page design ids
  `def-rational-action-on-affine-variety`,
  `thm-coordinate-ring-of-affine-action-is-locally-finite`,
  `lem-torus-rational-modules-and-gradings`,
  `thm-affine-algebraic-action-embeds-equivariantly-in-finite-dimensional-module`
  and B-page design ids `ex-torus-weights-and-affine-action`,
  `cex-abstract-group-action-is-not-algebraic-action` are all in the manifest.
- The four owner-mandated local additions are present and flagged
  `local_addition: true` in the plan and documented in the batch notes and packet:
  A `lem-classical-affine-algebraic-set-product-coordinate-ring`,
  `prop-affine-algebraic-actions-coordinate-ring-coaction`,
  `lem-complex-affine-group-comodule-local-finiteness`; B
  `ex-additive-translation-equivariant-parabola-embedding`. These close the
  named interfaces of the commissioned route (product-coordinate-ring,
  action/coaction, finite-dimensional comodule, local finiteness, torus grading,
  equivariant embedding, one extra worked embedding) and are not scope
  expansion.
- No commissioned claim is dropped or weakened at statement level: the action,
  equivariant-morphism and rational-module vocabulary with both tensor
  conventions; the locally finite coordinate-ring representation with no
  irreducibility, connectedness, or reductivity hypothesis; the torus
  grading dictionary in both directions including the algebra law and the
  opposite function/point weights; and the equivariant finite-dimensional closed
  embedding of the acted-on set, explicitly separated from group linearity.
  The B items carry the design's two examples plus the parabola embedding.
- Kind counts: A = 1 definition, 3 lemmas, 1 proposition, 2 theorems; B = 2
  examples, 1 counterexample. Both pages are far below the 100-item ceiling.
- `requires` arrays equal `plan-spec.json` verbatim. There is no 873/877 edge:
  the A page requires only the published classical affine interface and AV-5
  dimension pair, and all item deps stay inside the pair or in published items.

## Subject coverage (definitions, results, examples)

- Definitions: complex affine algebraic groups as group objects in affine
  algebraic sets with coordinate Hopf maps `Δ`, `ε`, `S`; algebraic left
  actions and equivariant morphisms; rational `G`-modules via finite-dimensional
  algebraic stability; inverse-pullback function action and its right-comodule
  form versus the opposite direct-action pullback convention.
- Structure: product coordinate rings `C[X]⊗C[Y] ≅ C[X×Y]` for possibly empty or
  reducible sets (with the three-factor iteration used for coassociativity);
  the action/coaction dictionary with equivariant maps as coaction-intertwining
  algebra maps; every comodule a directed union of finite-dimensional
  subcomodules; the coordinate ring of any algebraic affine action a rational
  module, with multiplicativity and unit preservation; the `T=(C*)^r` grading
  dictionary including intertwiners, the algebra grading `A_mA_n⊆A_{m+n}`,
  realization of reduced finitely generated graded algebras, and the opposite
  function/point weights; and the equivariant closed embedding `ev:X→W*` with
  dual action.
- Examples (B): the `(t,t⁻¹)` action on `A²` with degrees `(−1,1)`,
  `A_0=C[xy]` and dual-plane weights `(1,−1)`; the conjugate-translation
  abstract action of `(C,+)` on `A¹` whose joint map and `span(1,z)` matrix
  coefficient are nonregular; and the translation action embedded as the
  parabola `a=1, c=b²` with its ambient linear action.
- Exclusions match the design's boundary and carry reasons in the coverage
  file: Brion's non-rational left-translation action on `C(G)` (replaced by the
  pair's own counterexample) and Gille's faithful finite-dimensional
  representation theorem (group linearity, explicitly not the acted-on-set
  embedding; the published `lem-affine-algebraic-group-faithful-rational-representation`
  remains available and is not asserted here).
- Intended role: this pair is the classical complex action/rational-module layer
  that AG-ACT-3 (881) requires for invariant theory and that B880 exercises; it
  is a self-contained treatment of Brion §1.1's relevant content and needs no
  group-scheme or AG-ACT-1 material.

## Prerequisites and dependency scope

- Direct item deps across the ten items: 14 distinct ids — 7 in-pair and 7
  published; 0 missing, 0 unpublished, 0 pointing into another batch.
- Full transitive closure over `deps` plus all wikilinks from the ten items:
  1471 items reached — 1461 `published` items plus exactly the 10 in-pair draft
  items; 0 missing ids and 0 draft items that are not current-frontier scaffold.
  No path reaches `deferred-set-theory-beyond-choice` or any unbuilt pair.
- Page level: both `requires` pages are published and every item they list is
  `published`; the B page requires only the A page.
- Cross-batch: the batch-23 cross-batch file is `[]`, the run-level edge record
  has no entry naming this pair, and no sibling manifest declares a dependency
  into the pair. The consumer AG-ACT-3 is not yet scaffolded, so no item-level
  consumer edge exists to satisfy; its design contract needs exactly the
  rational-action, local-finiteness, and embedding interfaces supplied here.
- **Unmet prerequisites: none found.** No consuming planned item or result
  requires a claim absent from both the published library and the current
  scaffold, and no prerequisite outside the pair's own inventory is needed.
  (Observation, no action: the A page requires the published AV-5 dimension
  pair, which matches the design and is published, but no scaffold item consumes
  it — reporting only.)

## Source coverage

- Three independent, authoritative treatments supply the pair: Brion,
  *Introduction to actions of algebraic groups* (2010); Gille, *Introduction to
  reductive group schemes over rings*; Milne, *Algebraic Groups* (2022).
  The coverage harvest has 16 rows — 12 `included`, 2 `inline`, 2
  `out-of-scope` with written reasons — and `coverage-checklist` reports
  1 page, 16 harvested results, 0 errors, 0 warnings.
- Live re-check (2026-10-03): all three full texts re-downloaded and
  byte-identical to the stamped retrievals — Brion 678378 bytes, sha256_16
  `1abc97e4b6ff41d6`; Gille 805924 bytes, sha256_16 `4af2da88fd58a7da`;
  Milne 4838013 bytes, sha256_16 `f2ddd8fa4d263085`. The claimed sections were
  read and support the claimed scope: Brion Def. 1.4, Lemma 1.5, Defs. 1.6/1.8,
  Example 1.7 and the complete Prop. 1.9 argument (printed pp. 3–4); Gille
  Prop. 6.0.5 with both comodule diagrams, Prop. 6.2.1 and Theorem 6.3.1 with
  proofs (pp. 25–27, 30–32); Milne Remark 4.1 (printed pp. 83–84),
  Prop. 4.7/Cor. 4.8 (printed p. 86), Thm. 12.12/Rmk. 12.13 (printed p. 235).
- Mechanical checks re-run here: `coverage-checklist` on batch 23 → 0/0;
  `manifest-deps` on batch 23 → 10 items, 0 errors; repo-wide `depcheck` and
  `fwdcheck` → no error naming this pair's items.
- Minor annotation nuance (no scope impact): Milne's Theorem 12.12 statement
  begins on printed p. 234 (PDF p. 245) while the coverage row quotes printed
  p. 235; the claimed PDF range 245–246 is correct and the content matches.
  Recommend correcting the printed-page pointer at the next authorized edit.
- Note for later reviewers: Gille Theorem 6.3.1 and Milne Prop. 4.7 prove the
  finite-subcomodule statement with a vector-space basis, whereas the local
  `lem-complex-affine-group-comodule-local-finiteness` states a choice-free
  proof; whether that method claim holds is a proof-review question for Step 3b
  or Step 5 and does not affect scope. Similarly, Brion's Lemma 1.5 printed
  coefficient sentence says `V ⊂ C[G]` where the proof context is functions on
  `X`; the packet's reading (`V ⊂ C[X]`) matches the surrounding argument.

## Residual uncertainty

1. Proof correctness, statement-level truth, and the choice-free method claims
   are outside 3a; the manifest strategies are routes, not certified proofs.
2. This decision's receipt is bound to the current batch-23 A+B manifest hash.
   Any later item-list, title, kind, or statement change voids it and requires a
   fresh 3a decision.

## Decision

`sufficient`: the scaffolded pair carries every definition, result, example, and
counterexample the AG-ACT-2 design and the pair's library role require; its four
local additions are documented, owner-mandated prerequisites rather than scope
expansion; all dependencies resolve to published or in-pair material; and no
omitted topic or unmet prerequisite warrants enrichment or a pair merger.
