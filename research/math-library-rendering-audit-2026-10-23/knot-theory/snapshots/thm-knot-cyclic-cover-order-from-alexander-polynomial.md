---
id: thm-knot-cyclic-cover-order-from-alexander-polynomial
kind: theorem
title: "Cyclic-cover homology order from the Alexander polynomial"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 13
deps:
  - def-cyclic-branched-cover-of-a-knot
  - def-alexander-polynomial-from-the-first-elementary-ideal
  - lem-cyclic-cover-order-root-product-and-rational-sphere-test
  - def-oriented-seifert-surface
  - def-knot-seifert-pairing-and-matrix
  - def-countable-choice
  - def-countable-choice-principle-for-foliation-pair
  - lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
  - prop-the-first-hurewicz-map-in-degree-one-is-abelianization
  - thm-every-oriented-knot-bounds-a-seifert-surface
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Dale Rolfsen, Knots and Links"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf"
      locator: "Chapter 8.D, printed pp. 212–215; cyclic-cover homology presentations"
    - title: "Charles Livingston, Seifert Forms and Concordance"
      url: "https://arxiv.org/pdf/math/0101035v3"
      locator: "Section 3, Theorem 3.1, printed pp. 406–407; root formula stated with Fox cited as source"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume the Axiom of Choice. Let $K$ be a smooth oriented knot and let $q\ge2$. If $\zeta_q$ is any primitive $q$-th root of unity, then $H_1(\Sigma_q(K);\mathbb Z)$ is finite exactly when $\Delta_K(\zeta_q^j)\ne0$ for every $1\le j<q$, and in that case
$$
|H_1(\Sigma_q(K);\mathbb Z)|=\prod_{j=1}^{q-1}|\Delta_K(\zeta_q^j)|.
$$

## Statement references

[[lem-cyclic-cover-order-root-product-and-rational-sphere-test|The root-product test and proof for cyclic-cover homology]]

[[def-alexander-polynomial-from-the-first-elementary-ideal|The Alexander polynomial normalization]]

[[def-oriented-seifert-surface|The definition and genus convention for a Seifert surface]]

[Rolfsen, *Knots and Links*, Chapter 8.D](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf)

[Livingston, “Seifert Forms and Concordance,” Theorem 3.1](https://arxiv.org/pdf/math/0101035v3)

[[thm-every-oriented-knot-bounds-a-seifert-surface|Existence of a connected compact oriented Seifert surface for every knot]]

[[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups|The compact surface normal form and free fundamental group]]

[[def-knot-seifert-pairing-and-matrix|The positive-push Seifert matrix convention]]

[[prop-the-first-hurewicz-map-in-degree-one-is-abelianization|First homology is the abelianization of the fundamental group]]

## Facts & Assumptions

**Given:** Full AC, a smooth oriented knot $K$, and $q\ge2$.

[A1] Full AC is the choice-function axiom required by the root-product lemma. [[def-axiom-of-choice]]

[F1] The root-product lemma gives the finiteness criterion and order for any primitive $q$-th root. [[lem-cyclic-cover-order-root-product-and-rational-sphere-test]]

[F2] $\Delta_K(t)$ is defined up to multiplication by $\pm t^k$. [[def-alexander-polynomial-from-the-first-elementary-ideal]]

[F3] Full AC supplies the countable-choice hypotheses used by the surface-existence and surface-normal-form results: apply its choice function to the range of any sequence of nonempty sets and reuse the selected element at each index. Thus the sequence assertions in [[def-countable-choice]] and [[def-countable-choice-principle-for-foliation-pair]] hold. [[def-axiom-of-choice]]

[F4] Every smooth oriented knot bounds a connected compact smooth oriented embedded surface with its given boundary, which is a Seifert surface under [[def-oriented-seifert-surface]]. [[thm-every-oriented-knot-bounds-a-seifert-surface]] For a connected compact oriented surface with one boundary component and genus $g$, the fundamental group is free of rank $2g$. [[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]]

[F5] A connected smooth surface $F$ is locally path-connected, so its path components are open and it is path-connected. The first Hurewicz map identifies $H_1(F;\mathbb Z)$ with the abelianization of $\pi_1(F)$; for the genus-$g$ surface in [F4], this gives $H_1(F;\mathbb Z)\cong\mathbb Z^{2g}$ and an ordered integral basis. [[prop-the-first-hurewicz-map-in-degree-one-is-abelianization]]

## Proof

**Given:** The data in the Statement and Facts & Assumptions.

1.1 By [F3]--[F5], choose a connected compact smooth oriented Seifert surface $F$ for $K$ and an ordered integral basis of $H_1(F;\mathbb Z)$. Let $V$ be its positive-push Seifert matrix as defined in [[def-knot-seifert-pairing-and-matrix]]. The hypotheses of [F1] then hold for this $K,F,V,q$, and the selected primitive root $\zeta_q$. Hence it gives the stated nonvanishing criterion and product formula for this root. [A1, F1, F3, F4, F5, given, choose]

2.1 If $\zeta_q'$ is another primitive $q$-th root, then $\zeta_q'=\zeta_q^r$ for some integer $r$ relatively prime to $q$. Multiplication by $r$ permutes the nonzero residue classes modulo $q$, so the nonvanishing conditions and the product over $j=1,\ldots,q-1$ are unchanged. [F1, F2, step 1.1, algebra] ∎
