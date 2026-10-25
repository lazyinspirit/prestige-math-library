---
id: lem-solovay-borel-code-and-regularity-absoluteness
kind: lemma
title: Borel-code, measure, category, and perfect-set absoluteness
status: published
origin: pipeline
deps: [def-well-founded-borel-evaluation-codes, def-property-of-baire-for-subsets, def-nowhere-dense-meagre-and-residual-subsets, def-lebesgue-outer-measure, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, thm-lebesgue-measure-is-a-complete-measure, def-perfect-set-r, thm-solovay-inner-model-satisfies-dependent-choice, thm-choice-implies-dependent-implies-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: well-founded-induction
verification:
  audited: 2026-09-14
sources:
  references:
    - {title: "Solovay 1970, Part II §1, especially Lemma 1.6", url: "https://people.math.ethz.ch/~fdalio/ZKmodel.pdf"}
---

## Statement

Shared well-founded Borel codes evaluate identically on shared reals in Solovay intermediate models. Every Borel code uniformly yields a coded open set modulo an explicitly coded sequence of closed nowhere-dense sets.  A displayed code for rational covers witnesses nullness upward, and transfers in both directions between models with the same reals; the analogous assertion holds for a displayed sequence of closed nowhere-dense codes. Coded nonemptiness and perfectness are transferred only between models with the same reals, or from an explicit pruned splitting-tree certificate. DC supplies Countable Choice and hence the completed null ideal and countable ideal closures used in the Solovay model.

## Facts & Assumptions

**Given:** Transitive models among the ground, intermediate, $M$, and $V[G]$, and a Borel code belonging to both compared models.

[F1] [[def-well-founded-borel-evaluation-codes]]: Borel evaluation is well-founded recursion through complement and countable union nodes.

[F2] [[def-lebesgue-outer-measure]] defines outer measure through countable elementary-set covers. [[def-nowhere-dense-meagre-and-residual-subsets]] and [[def-property-of-baire-for-subsets]] define meagreness through an actual sequence of nowhere-dense witnesses.

[F3] [[def-perfect-set-r]]: a perfect set is closed and has no isolated point; the empty set is perfect, so nonemptiness is a separate condition wherever it is needed.

[F4] [[thm-solovay-inner-model-satisfies-dependent-choice]] and [[thm-choice-implies-dependent-implies-countable-choice]] give Countable Choice in $M$.  Under that hypothesis [[thm-lebesgue-measure-is-a-complete-measure]] supplies the complete Lebesgue measure and its countable closure.

## Proof

1.1 Induction on the well-founded code gives $B^{N}=B^{W}\cap\mathbb R^N$: basic rational intervals are absolute, and complement and countable union commute with intersection with the shared reals. If the two models have the same reals, evaluations are identical. [F1]

2.1 A coded open or closed set has the same rational basis/tree description.  If a Borel set is null, F2 says that for each $j$ there is a countable elementary-set cover of cost below $2^{-j}$; Countable Choice selects these covers, and pairing their indices and coding their real endpoints gives one real witness.  Conversely that displayed witness proves outer measure zero.  Thus such a witness remains valid in an outer transitive model, and when the two models have the same reals it transfers in both directions.  A displayed sequence of closed nowhere-dense Borel codes behaves identically: closedness and the rational-basis test for empty interior are absolute on shared reals, and the same sequence witnesses meagreness.  This is the coded content used below; no claim that the two bare definitions in F2 manufacture witnesses by themselves is made. [F1, F2, F4, step 1.1]

3.1 A simultaneous induction on a Borel code produces an open-mod-meagre pair together with an explicit sequence of closed nowhere-dense codes covering the error. A basic open code uses itself and the empty sequence; for complements, replace the complement of the current open set by its interior and append its closed nowhere-dense boundary; for countable unions, union the open representatives and pair the two natural indices of all exception sequences.  The construction is recursive from the Borel code, so the witness lies in every model containing that code.  Countable Choice from F4 closes the meagre ideal under the displayed union, while F4 supplies completeness and countable closure for the null ideal in $M$; the ground and forcing models have ambient Choice. [F1, F2, F4, step 2.1]

4.1 For a coded closed set in two models with the same reals, nonemptiness is absolute and absence of isolated points is equivalent to the rational splitting test: every basic interval meeting the set contains two disjoint smaller basic intervals meeting it. The real witnesses transfer in both directions. Alternatively, an explicit pruned binary tree whose successor cylinders are disjoint certifies nonemptiness and supplies branches by F4 inside $M$ (and by Choice in the ambient forcing models). These are exactly the two perfect-set transfers used below. A closed code can acquire a new branch in an outer model with new reals, so no such blanket downward absoluteness, and no absoluteness for arbitrary uncoded sets, is claimed. [F3, F4, step 1.1, step 3.1] ∎
