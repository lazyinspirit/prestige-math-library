---
id: thm-knot-determinant-is-order-of-double-cover-homology
kind: theorem
title: "Knot determinant is the order of double-cover homology"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 12
deps:
  - def-cyclic-branched-cover-of-a-knot
  - def-oriented-seifert-surface
  - def-knot-seifert-pairing-and-matrix
  - lem-double-branched-cover-homology-from-seifert-matrix
  - lem-square-integer-cokernel-finiteness-and-order
  - prop-the-first-hurewicz-map-in-degree-one-is-abelianization
  - thm-seifert-determinant-is-the-knot-alexander-polynomial
  - def-alexander-polynomial-from-the-first-elementary-ideal
  - lem-square-seifert-presentation-and-alexander-normalization
  - def-countable-choice
  - def-countable-choice-principle-for-foliation-pair
  - lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
  - thm-every-oriented-knot-bounds-a-seifert-surface
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Dale Rolfsen, Knots and Links"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf"
      locator: "Chapter 8.D, printed pp. 212–213; double-cover presentation, determinant and oddness"
    - title: "Charles Livingston, Seifert Forms and Concordance"
      url: "https://arxiv.org/pdf/math/0101035v3"
      locator: "Section 3, Theorem 3.1, printed pp. 406–407; the root formula is stated with Fox cited as source"
---

## Statement

Assume the Axiom of Choice. Let $K$ be a smooth oriented knot with Alexander polynomial $\Delta_K(t)$ normalized up to multiplication by $\pm t^k$. Then $H_1(\Sigma_2(K);\mathbb Z)$ is finite if and only if $\Delta_K(-1)\ne0$, and in that case
$$
|H_1(\Sigma_2(K);\mathbb Z)|=|\Delta_K(-1)|.
$$
Moreover, $\Delta_K(-1)$ is odd, so the first homology of every double branched cover is finite.

## Statement references

[[lem-double-branched-cover-homology-from-seifert-matrix|The double-cover homology presentation by $V+V^T$]]

[[lem-square-integer-cokernel-finiteness-and-order|The determinant criterion for a square integer presentation]]

[[thm-seifert-determinant-is-the-knot-alexander-polynomial|The Seifert determinant represents the Alexander polynomial]]

[[lem-square-seifert-presentation-and-alexander-normalization|The integer Laurent-polynomial normalization $\Delta_K(1)=\pm1$]]

[[def-oriented-seifert-surface|The definition and genus convention for a Seifert surface]]

[Rolfsen, *Knots and Links*, Chapter 8.D](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf)

[[thm-every-oriented-knot-bounds-a-seifert-surface|Existence of a connected compact oriented Seifert surface for every knot]]

[[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups|The compact surface normal form and free fundamental group]]

[[def-knot-seifert-pairing-and-matrix|The positive-push Seifert matrix convention]]

[[prop-the-first-hurewicz-map-in-degree-one-is-abelianization|First homology is the abelianization of the fundamental group]]

## Facts & Assumptions

**Given:** Full AC and a smooth oriented knot $K$.

[A1] Full AC is the choice-function axiom required by the cyclic branched-cover definition and Seifert determinant presentation. [[def-axiom-of-choice]]

[F1] For a positive-push Seifert matrix $V$, $H_1(\Sigma_2(K);\mathbb Z)\cong\operatorname{coker}(V+V^T)$. [[lem-double-branched-cover-homology-from-seifert-matrix]]

[F2] The cokernel of a square integer matrix is finite exactly when its determinant is nonzero, and then its order is the absolute determinant. [[lem-square-integer-cokernel-finiteness-and-order]]

[F3] $\det(V-tV^T)$ represents $\Delta_K(t)$ up to multiplication by $\pm t^k$. [[thm-seifert-determinant-is-the-knot-alexander-polynomial]]

[F4] $\Delta_K(t)$ is an integer Laurent polynomial and $\Delta_K(1)=\pm1$. [[def-alexander-polynomial-from-the-first-elementary-ideal]], [[lem-square-seifert-presentation-and-alexander-normalization]]

[F5] Full AC supplies the countable-choice hypotheses used by the surface-existence and surface-normal-form results: apply its choice function to the range of any sequence of nonempty sets and reuse the selected element at each index. Thus the sequence assertions in [[def-countable-choice]] and [[def-countable-choice-principle-for-foliation-pair]] hold. [[def-axiom-of-choice]]

[F6] Every smooth oriented knot bounds a connected compact smooth oriented embedded surface with its given boundary, which is a Seifert surface under [[def-oriented-seifert-surface]]. [[thm-every-oriented-knot-bounds-a-seifert-surface]]

[F7] For a connected compact oriented surface with one boundary component and genus $g$, the fundamental group is free of rank $2g$. [[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]]

[F8] A connected smooth surface $F$ is locally path-connected, so its path components are open and it is path-connected. The first Hurewicz map identifies $H_1(F;\mathbb Z)$ with the abelianization of $\pi_1(F)$; for the genus-$g$ surface in [F7], this gives $H_1(F;\mathbb Z)\cong\mathbb Z^{2g}$ and an ordered integral basis. [[prop-the-first-hurewicz-map-in-degree-one-is-abelianization]]

## Proof

**Given:** The data in the Statement and Facts & Assumptions. By [F5]--[F8], choose a connected compact smooth oriented Seifert surface $F$ with oriented boundary $K$ and an ordered integral basis of $H_1(F;\mathbb Z)$. Let $V$ be its positive-push Seifert matrix as defined in [[def-knot-seifert-pairing-and-matrix]], and put $D(t)=\det(V-tV^T)$. [A1, F5, F6, F7, F8, given, choose]

1.1 By [F1], the double-cover homology is presented by the square integer matrix $V+V^T=V-(-1)V^T$. Its determinant is $D(-1)$. By [F2], the homology is finite exactly when $D(-1)\ne0$, and then its order is $|D(-1)|$. The hypothesis needed by [F1] is the Axiom of Choice in [A1]. [A1, F1, F2, given, algebra]

2.1 By [F3], $D(-1)=\pm(-1)^k\Delta_K(-1)$ for some integer $k$, so $|D(-1)|=|\Delta_K(-1)|$ and the zero tests agree. This proves the finiteness criterion and order formula. [F3, step 1.1, algebra]

3.1 Write $\Delta_K(t)=\sum_{r=m}^n c_rt^r$ with integers $c_r$ and finitely many terms. Since $(-1)^r\equiv1\pmod2$ for every integer $r$, including negative $r$, [F4] gives $\Delta_K(-1)\equiv\sum_rc_r=\Delta_K(1)\equiv1\pmod2$. Thus $\Delta_K(-1)$ is odd and nonzero; step 1.1 then gives finiteness for every knot. [F4, step 1.1, step 2.1, algebra] ∎
