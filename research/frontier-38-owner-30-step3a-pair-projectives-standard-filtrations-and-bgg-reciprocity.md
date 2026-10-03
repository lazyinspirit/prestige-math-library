# Step 3a scope review — `projectives-standard-filtrations-and-bgg-reciprocity`

- Run `frontier-38-owner-30`, role alpha, label
  `step3a-pair-projectives-standard-filtrations-and-bgg-reciprocity-f5f8ed5a3a345601`;
  batch 7, A order 510.009 / B order 510.010, category `lie-theory`. Owned pair
  only; no scaffold, item, manifest, plan, coverage or owner record edited.
  Reviewed 2026-10-03.
- Decision: **sufficient**. The A page carries all sixteen RL-5 design rows
  plus thirteen consumed local prerequisites; the B page carries the five
  designed leaves plus two sourced hypothesis tests. No omitted topic of the
  designed subject, no unmet prerequisite, no consumer outside the pair. No
  merge or enrichment is proposed; two records-only notes and one Step 3b
  interface note are listed below.

## Evidence read

- Prose design `research/plan-representation-theory-lie-track.md` RL-5
  L958–995: role paragraph L960–964, A inventory L966–983 (16 ids), B leaf
  table L985–995 (5 ids); binding source-heading contract I21–I25
  L1565–1569; Lin-L8 out-of-scope heading note L1662; RL-5 rows of the pair
  table L786 and the requires matrix L114, L813.
- `research/plan-spec.json` orders 510.009/510.010: title, category, companion
  pointers and the five page `requires` agree with the manifest; both plan
  entries carry empty `items` arrays, so the design tables govern the
  inventory (same convention as the sibling batches of this run).
- Manifest `research/frontier-38-owner-30-batch-7.pages.json` (A 29 items,
  B 7 items, all draft) and `…-batch-7.cross-batch-dependencies.json` = `[]`.
  Construction notes `…-batch-7.notes.md` (inventory, proof route, the
  replacements for the in-flight attempt, receipt re-records). Scope ledger
  lists both pages owed, batch 7. No owner Step-3a receipt or owner decision
  names this pair; the binding owner clause “the BGG projective-Verma claim
  uses a finite block truncation with its exact hypotheses”
  (`…-owner-authoring-direction.md`) is followed by
  `def-truncated-category-o-at-a-finite-weight-ideal` and
  `lem-maximal-verma-is-projective-in-a-finite-truncation`.
- Drift: `…-alpha-step1-drift.md` L137–141, verdict `no-drift`, confirming the
  live RL-5 design already uses the finite-ideal/maximality form and the
  corrected `sl2` counterexample.
- Coverage `research/frontier-38-owner-30-batch-7.coverage.json` (ready):
  A page 33 included / 9 inline / 14 out-of-scope / 3 already-published;
  B page 9 / 3 / 2; 73 harvested results, 0 undecided; 7/7 sources
  fetch-verified. First-hand re-runs: `manifest-deps` 36 items, 0 errors;
  `coverage-checklist` 2 pages / 73 results, 0 errors; `source-fetch-check`
  7/7 verified and 7/7 resolved; `depsource` 0 unresolved.
- Sources re-fetched and read directly (2026-10-03); byte counts and
  `sha256_16` reproduce the stored stamps exactly:
  - Etingof 18.757 full notes, 3,494,075 bytes, `421fa52f61680e63`, 162 pp.
    Read §16.1 Cor. 16.1 and proof (printed p. 85), §16.2 Prop. 16.2 (p. 86),
    §16.3 Prop. 16.4 / Cor. 16.5 / Cor. 16.6 with proofs (pp. 86–88),
    §20.1 Lemma 20.1 (pp. 100–101), §20.2 Thm 20.3 and Cor. 20.5
    (pp. 101–103), §20.3 Thm 20.6 and Example 20.8 (pp. 103–105), §23.1
    (p. 114), §23.2 Lemma 23.4 (pp. 116–118), §24.1 Thm 24.1 and Remark 24.2
    (pp. 119–121).
  - Lin Chen Lecture 8, 398,363 bytes, `2a3a03801d95beba`, 10 pp. — §3
    Lemmas 3.14/3.16; §4 Thm 4.3, Thm 4.4(1)–(4), Cor. 4.9, Lemma 4.10 and
    proof, Appendix A.
  - Lin Chen Lecture 9, 353,100 bytes, `a5b1dc05c5752345`, 7 pp. — §1
    Thm-Def 1.1/1.2, Thm 1.4, Lemmas 1.5–1.8, Warning 1.9; §2 Prop-Def 2.1
    and Thm 2.2; §3 Constructions 3.1/3.6/3.7/3.17, Lemmas 3.2/3.3/3.5,
    Defs 3.8/3.9, Remarks 3.10, Example 3.11, Thm 3.12 with sketch,
    Thm 3.13, Examples 3.15/3.16, Exercise 3.18.
  - Gaitsgory catO.pdf, 483,626 bytes, `2e86f71dfd3f77e6`, 61 pp. — §4.23–4.28
    as the second independent treatment.

## Inventory against the design

- A: all sixteen design ids are present with the design's content and roles:
  truncation at a finite downward-closed ideal; maximal-label Verma
  projectivity in the truncation; tensoring and block projection preserving
  projectives; enough projectives; indecomposable/uniqueness of projective
  covers; Verma flags and multiplicities; independence of the flag;
  standard filtrations of projectives; Hom-counting; Δ–∇ orthogonality;
  BGG reciprocity; costandard flags of injectives; translation functors,
  exactness/biadjointness, and the wall theorem. The design row
  `thm-projectives-in-category-o-have-verma-flags` (“finite standard
  filtration with only μ ≥ λ”) is covered by that theorem plus
  `cor-projective-standard-labels-lie-above-the-head` (nonzero multiplicity
  forces μ − λ ∈ Q+, and the λ-factor occurs once); the split is stated on the
  theorem itself.
- The thirteen added items are all consumed, none is padding:
  `lem-maximal-label-vectors-in-a-finite-truncation-are-singular`
  (projectivity), `lem-dominant-weights-are-maxima-of-their-weyl-orbits`
  (maximality and the `sl2` tests),
  `lem-finite-dimensional-tensors-reach-every-block-simple` (enough
  projectives), `lem-finite-length-objects-decompose-into-indecomposables`
  (covers and injectives),
  `lem-tensoring-with-a-finite-dimensional-module-preserves-verma-flags`
  (projective flags and the wall computation),
  `lem-maximal-weight-verma-peels-off-a-standard-filtration` and
  `lem-direct-summands-of-verma-filtered-objects-are-verma-filtered`
  (standard flags of projectives),
  `lem-hom-to-costandards-counts-verma-flag-factors` (reciprocity),
  `cor-projective-standard-labels-lie-above-the-head` (design row content),
  `def-dot-action-facets-and-single-wall-translation-data`,
  `lem-single-wall-tensor-weight-exclusion`,
  `lem-weight-norm-bound-for-finite-dimensional-simple-modules`,
  `lem-dominant-norm-distance-comparison` (wall).
- B: exactly the five design leaves plus
  `ex-truncation-projectivity-does-not-mean-block-projectivity` and
  `cex-standard-filtrations-are-not-closed-under-quotients`. Both additions
  fit the design's own B-page role (“finite checks and hypothesis tests”),
  test the maximality hypothesis (Etingof Prop. 16.4 applied to a one-element
  ideal) and Lin L9 Warning 1.9, and carry complete arguments. No leaf
  duplicates an A proof; all B deps point at A items or published items.
- Conventions checked statement-level against the sources: the maximality
  hypothesis in `lem-maximal-verma-…` matches the argument in Etingof §16.3
  (“all weights of any X ∈ O_χ are not > λ−ρ”, printed p. 86) recast without
  the ρ-shift; `def-dot-action-facets-…` matches Lin L9 Defs 3.8–3.9
  (dot-antidominant λ, wall μ, translating weight ν, W_μ = {1, s_α});
  the wall theorem (a)/(b) matches Lin L9 Thm 3.12(1)/(2) and Etingof
  Remark 24.2's two-factor flag, with the `sl2` computation being Lin L9
  Example 3.16; reciprocity (P(μ):Δ(λ)) = [Δ(λ):L(μ)] = [M(λ):L(μ)] matches
  Lin L9 Thm 2.2 and Etingof Thm 20.6; the `sl2` block labels {n, −n−2} and
  the nonsplit sequence match the published
  `ex-the-regular-integral-sl2-block-of-category-o`.

## Source coverage

- The four fetched texts are exactly the stamped ones; my re-fetch reproduced
  every byte count and 16-hex digest. The enumerated dispositions cover the
  design's E757 §16/§20/§23–24 and Lin L8–L9 ranges result by result, and
  every “included”/“inline” row names an item that exists in this manifest
  (the three “already-published” rows name published RL-4/HA items).
- Declined headings re-checked against the full texts and endorsed:
  E757 Cor. 16.6(ii) (projectives free over U(n−); the local route never uses
  it), E757 Lemma 20.1/Cor. 20.2 general Ext^i vanishing (only Ext^1 is
  consumed), E757 Thm 20.3 converse (only the forward direction), E757
  §§20.4–20.5 Jantzen/BGG theorem, Lin L9 Lemma 1.5, Lemma 1.8, Remark 2.4,
  Thm 3.13, Construction 3.17/Exercise 3.18 (the `sl2` example derives its
  rank-one case locally), Gaitsgory Lemma 4.25/Thm 4.26/Prop. 4.28. No
  declined heading is consumed by any item of the pair or by another page of
  the run.
- Coverage-record nuance (records only): two item citations lie outside the
  enumerated rows — Etingof §16.1 Cor. 16.1 used by
  `lem-dominant-weights-are-maxima-of-their-weyl-orbits`, and §23.1 used by
  `lem-verma-flag-multiplicities-are-independent-of-the-flag`. I read both
  passages; Cor. 16.1 (p. 85) states exactly the maximality-in-orbit
  conditions, and §23.1 (p. 114) states that the Verma classes form a basis
  of K(O), which supports multiplicity independence. Suggested owner action:
  add the two rows to the coverage file; no scaffold change.

## Prerequisites and dependency closure

- All five page `requires` are published library pages
  (`library/lie-theory/category-o-finiteness-duality-and-blocks.md`,
  `library/differential-geometry/semisimple-lie-algebras-cohomology-and-levi-theory.md`,
  `library/homological-algebra/projective-and-injective-resolutions.md`,
  `library/homological-algebra/ext-and-balanced-resolutions.md`,
  `library/homological-algebra/yoneda-extensions-and-homological-dimension.md`).
  Every prerequisite result consumed in the pair's transitive closure was
  located in a published item and checked for the required clause and
  hypotheses: `def-restricted-dual-of-a-weight-module`,
  `prop-restricted-duality-is-an-exact-involution-on-category-o`,
  `def-standard-and-costandard-objects-in-category-o`,
  `thm-central-character-summands-split-into-linkage-blocks`,
  `prop-the-grothendieck-group-of-o-has-simple-and-standard-bases`,
  `def-projective-object`, `def-essential-epimorphism-and-projective-cover`,
  `thm-projective-object-characterisations`,
  `thm-long-exact-ext-sequence-in-the-first-variable`,
  `thm-yoneda-ext-one-is-naturally-isomorphic-to-derived-ext-one`,
  `lem-simple-highest-weight-modules-are-restricted-self-dual`.
- All 77 distinct declared dependency ids resolve: 48 to `items/*.md` with
  `status: published` and nonempty statements, 29 to items of this same
  batch-7 scaffold; none resolves only to a plan entry.
- No unmet prerequisite in the dispatch's sense (a required claim absent from
  both the published library and the current scaffold). Two proof steps are
  consequences of scaffolded definitions rather than stored items — closure
  of Verma-filtered objects under extensions (used in
  `lem-direct-summands-…`) and comparability of two maximal elements of a
  finite ideal (used in `lem-maximal-label-vectors-…`) — both immediate from
  `def-verma-flag-and-its-multiplicities` and the order definition, so no
  scaffold addition is required.
- No consumer outside the pair: a scan of all 30 batch manifests of this run
  found no other page or item referencing this pair's page ids or item ids
  (in `requires`, `deps`, `justified_by`, `forward_refs`, `companion`);
  the pair's only in-run consumer is its own B page. RL-6 (`the-bgg-resolution`)
  consumes RL-4 and RL-3 suppliers, not this page.

## Scope judgement

The intended subject is the classical BGG package for category O: construction
of enough projectives by finite-dimensional tensoring inside a finite block
truncation, the standard-filtration theorem for projectives, the Δ–∇
orthogonality that converts Hom into flag multiplicities, BGG reciprocity via
restricted duality, injective costandard duals, and the rank-one wall
behaviour of translation functors used by the `sl2` examples. The planned
definitions, results and examples cover that subject at the scope the design
commissions (I21–I25 map onto the manifest item for item), with the
hypotheses the owner direction requires (finite ideal; maximality, not
antidominance) and with the two smallest-rank hypothesis tests visible on the
B page.

Deliberate design-consistent boundaries, all with recorded reasons and no
consumer: freeness of projectives over U(n−) and general Ext^i vanishing;
the converse Ext^1-characterization of standard filtrations; the Cartan-matrix
identity C = D^T D (Etingof Cor. 20.7); Jantzen filtration and the BGG
theorem of E757 §20.4–20.5; tilting objects (Lin L9 Remark 2.4); block
equivalences (Thm 3.13); the most-singular construction Ξ_μ ≅ P_μ
(Construction 3.17/Exercise 3.18); classification of projective functors
(E757 §23.3). None is claimed by the design and none is needed by the
examples or by any current consumer.

## Owner-actionable notes (not scope defects)

1. Coverage records: add the Etingof §16.1 (Cor. 16.1) and §23.1 rows named
   above. Records only.
2. Step 3b interface detail (no scaffold change): the published
   `def-essential-epimorphism-and-projective-cover` is phrased for modules
   with `def-projective-module`/`thm-projective-module-characterizations`,
   whereas the A items use the abelian-category notions
   `def-projective-object`/`thm-projective-object-characterisations`; the
   authored items should bridge them explicitly (O is a full subcategory of
   U(g)-mod).
3. Pre-existing published-source defect already recorded in the batch notes:
   three published RL-4 items cite a dead Humphreys URL. Every Humphreys
   locator on this pair is title-only and redundantly covered by the fetched
   treatments; nothing in this pair depends on it.

## Uncertainty

- Statement-level review only; proofs and proof layout are Step 3b/Step 5
  work and were not adjudicated here.
- `lem-weight-norm-bound-for-finite-dimensional-simple-modules` carries a
  Knapp locator that is not among the four fetch-verified texts. The claim is
  provable locally from its published deps, and the norm comparison is really
  used in Etingof §23.2/§24.1; under the owner direction a missing second
  locator is not a blocker. Recorded, not escalated.
