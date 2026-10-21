---
id: lem-cyclic-cover-order-root-product-and-rational-sphere-test
kind: lemma
title: "Root-product test for cyclic branched-cover homology"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 12
deps:
  - def-cyclic-branched-cover-of-a-knot
  - def-oriented-seifert-surface
  - def-knot-seifert-pairing-and-matrix
  - lem-cyclic-branched-cover-homology-is-alexander-module-coinvariants
  - def-alexander-polynomial-from-the-first-elementary-ideal
  - thm-seifert-matrix-presents-knot-alexander-module
  - thm-seifert-determinant-is-the-knot-alexander-polynomial
  - lem-seifert-matrix-skew-part-is-surface-intersection
  - lem-square-integer-cokernel-finiteness-and-order
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
      locator: "Section 3, Theorem 3.1, printed pp. 406–407; root-product formula stated with Fox cited as source"
    - title: "Jozef H. Przytycki and Akira Yasuhara, Linking Numbers in Rational Homology 3-Spheres, Cyclic Branched Covers and Infinite Cyclic Covers"
      url: "https://arxiv.org/pdf/math/0111203v1"
      locator: "Section 3, printed pp. 12–14; cyclic-cover block computations"
---

## Statement

Assume the Axiom of Choice. Let $K$ be a smooth oriented knot, let $F$ be a connected compact oriented Seifert surface of genus $g$, and let $V$ be its positive-push Seifert matrix in an ordered integral basis of $H_1(F;\mathbb Z)$. Write $\Delta_K(t)$ for the Alexander polynomial normalized up to multiplication by $\pm t^k$, and let $q\ge2$ with $\zeta_q$ a primitive $q$-th root of unity. Then $H_1(\Sigma_q(K);\mathbb Z)$ is finite if and only if $\Delta_K(\zeta_q^j)\ne0$ for every $1\le j<q$, and, when it is finite,
$$
|H_1(\Sigma_q(K);\mathbb Z)|=\prod_{j=1}^{q-1}|\Delta_K(\zeta_q^j)|.
$$
The same criterion and order hold when $\Delta_K(t)$ is replaced by $\det(V-tV^T)$.

## Statement references

[[lem-cyclic-branched-cover-homology-is-alexander-module-coinvariants|Cyclic branched-cover homology as Alexander-module coinvariants]]

[[thm-seifert-matrix-presents-knot-alexander-module|The Seifert-matrix presentation of the Alexander module]]

[[thm-seifert-determinant-is-the-knot-alexander-polynomial|The Seifert determinant represents the Alexander polynomial]]

[[lem-seifert-matrix-skew-part-is-surface-intersection|The Seifert matrix skew part is unimodular surface intersection]]

[[lem-square-integer-cokernel-finiteness-and-order|The determinant criterion for a square integer presentation]]

[Rolfsen, *Knots and Links*, Chapter 8.D](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf)

[Livingston, “Seifert Forms and Concordance,” Theorem 3.1](https://arxiv.org/pdf/math/0101035v3)

## Facts & Assumptions

**Given:** Full AC, $K,F,V,q$, and the primitive root $\zeta_q$ in the Statement.

[A1] Full AC is the choice-function axiom required by the cyclic-cover definition and coinvariant lemma. [[def-axiom-of-choice]]

[F1] $H_1(\Sigma_q(K);\mathbb Z)\cong A_K/(t^q-1)A_K$, where $A_K$ is the infinite-cyclic-cover Alexander module with positive-meridian deck action $t$. [[lem-cyclic-branched-cover-homology-is-alexander-module-coinvariants]]

[F2] $A_K$ has presentation $\operatorname{coker}(V-tV^T)$ over $\mathbb Z[t,t^{-1}]$. [[thm-seifert-matrix-presents-knot-alexander-module]]

[F3] $V-V^T$ is the matrix of the integral intersection form on $F$, hence has determinant $\pm1$. [[lem-seifert-matrix-skew-part-is-surface-intersection]]

[F4] $\det(V-tV^T)$ represents $\Delta_K(t)$ up to multiplication by $\pm t^k$. [[thm-seifert-determinant-is-the-knot-alexander-polynomial]]

[F5] The cokernel of a square integer matrix is finite exactly when its determinant is nonzero, and then its order is the absolute determinant. [[lem-square-integer-cokernel-finiteness-and-order]]

## Proof

**Given:** The data in the Statement and Facts & Assumptions. Put $D(t)=\det(V-tV^T)$ and $R_q=\mathbb Z[t]/(t^q-1)$.

1.1 Quotienting the module presentation in [F2] by $(t^q-1)A_K$ gives $A_K/(t^q-1)A_K\cong\operatorname{coker}(V-tV^T:R_q^{2g}\to R_q^{2g})$ as abelian groups. The group $R_q^{2g}$ is free abelian of rank $2gq$ on $t^ka_i$ for $0\le k<q$ and $1\le i\le2g$, so this map is represented by a square integer matrix $Q_q$. [A1, F1, F2, given, algebra]

2.1 After tensoring with $\mathbb C$, multiplication by $t$ on $R_q\otimes\mathbb C$ is diagonalizable: its eigenvalues are the $q$ distinct roots $\zeta_q^j$ for $0\le j<q$, each with one-dimensional eigenspace. On the corresponding $2g$-dimensional summand, $Q_q$ acts by $V-\zeta_q^jV^T$. Therefore $\det Q_q=\prod_{j=0}^{q-1}\det(V-\zeta_q^jV^T)$. The $j=0$ factor is $\det(V-V^T)=\pm1$ by [F3]. Thus $\det Q_q\ne0$ exactly when every factor with $1\le j<q$ is nonzero, and its absolute value is the product of the absolute values of those factors. [F3, step 1.1, algebra]

3.1 By [F1], the group in question is $\operatorname{coker}(Q_q)$. Applying [F5] shows it is finite exactly when $\det Q_q\ne0$, with order $|\det Q_q|$; if any nontrivial-root factor vanishes, the square integer cokernel has positive free rank and is infinite. [F1, F5, step 2.1, algebra]

4.1 By [F4], $D(t)=\pm t^k\Delta_K(t)$ for some integer $k$. At every root of unity, $|\pm(\zeta_q^j)^k|=1$, so $|D(\zeta_q^j)|=|\Delta_K(\zeta_q^j)|$. Hence the determinant-root criterion and product from step 3.1 give exactly the Alexander-polynomial criterion and order in the Statement, including the empty-matrix case $g=0$. [F4, step 2.1, step 3.1, algebra] ∎
