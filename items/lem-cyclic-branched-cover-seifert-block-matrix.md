---
id: lem-cyclic-branched-cover-seifert-block-matrix
kind: lemma
title: "Seifert block presentation of cyclic branched-cover homology"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-cyclic-branched-cover-of-a-knot
  - def-oriented-seifert-surface
  - def-knot-seifert-pairing-and-matrix
  - lem-seifert-pairing-well-defined
  - lem-branched-cover-surgery-presentation-from-seifert-surface
  - thm-poincare-lefschetz-duality
  - thm-long-exact-sequence-of-a-pair-in-singular-homology
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
      locator: "Chapter 8.D, printed pp. 212–214; double-cover matrix and general cyclic-cover presentation"
    - title: "Jozef H. Przytycki and Akira Yasuhara, Linking Numbers in Rational Homology 3-Spheres, Cyclic Branched Covers and Infinite Cyclic Covers"
      url: "https://arxiv.org/pdf/math/0111203v1"
      locator: "Section 3, printed pp. 12–14; block matrix M_{q,V}, whose surgery presentation is attributed to Akbulut–Kirby"
---

## Statement

Assume the Axiom of Choice. Let $K$ be a smooth oriented knot, let $F$ be a connected compact oriented Seifert surface of genus $g$, and choose any ordered integral basis $a_1,\ldots,a_{2g}$ of $H_1(F;\mathbb Z)$ with positive-push Seifert matrix $V_{ij}=\operatorname{lk}(a_i^+,a_j)$. For an integer $q\ge2$, let $M_q(V)$ be the symmetric block matrix of size $2g(q-1)$ whose $2g\times2g$ block in position $(k,\ell)$, for $1\le k,\ell\le q-1$, is $V+V^T$ if $k=\ell$, $-V^T$ if $\ell=k+1$, $-V$ if $k=\ell+1$, and $0$ if $|k-\ell|\ge2$. Then
$$
H_1(\Sigma_q(K);\mathbb Z)\cong\operatorname{coker}(M_q(V)).
$$
For $q=2$ this presentation matrix is $V+V^T$; when $g=0$ the empty matrix has trivial cokernel.

## Statement references

[[def-oriented-seifert-surface|Connected compact oriented spanning surfaces and their genus]]

[[def-knot-seifert-pairing-and-matrix|The positive-push Seifert matrix convention]]

[[lem-seifert-pairing-well-defined|Bilinearity and basis-change behavior of the Seifert pairing]]

[[lem-branched-cover-surgery-presentation-from-seifert-surface|The framed-link matrix of the branched 4-manifold]]

[[def-cyclic-branched-cover-of-a-knot|The exterior cover and filling that define $\Sigma_q(K)$]]

[[thm-poincare-lefschetz-duality|Poincaré–Lefschetz duality for the handlebody pair]]

## Facts & Assumptions

**Given:** Full AC, the oriented knot $K$, a connected compact oriented Seifert surface $F$, an ordered integral basis of $H_1(F;\mathbb Z)$, its positive-push matrix $V$, and $q\ge2$.

[A1] Full AC is the choice-function axiom used by the cyclic-cover and duality suppliers. [[def-axiom-of-choice]]

[F1] The cover $\Sigma_q(K)$ is the boundary of the $q$-fold branched cover of $B^4$ along a push-in of $F$. [[def-cyclic-branched-cover-of-a-knot]], [[lem-branched-cover-surgery-presentation-from-seifert-surface]]

[F2] For the disk-band basis, that 4-manifold has one $0$-handle and $2g(q-1)$ $2$-handles, with intersection matrix $M_q(V)$. [[lem-branched-cover-surgery-presentation-from-seifert-surface]]

[F3] Poincaré–Lefschetz duality identifies $H^2(W;\mathbb Z)$ with $H_2(W,\partial W;\mathbb Z)$ by capping with the relative fundamental class. [[thm-poincare-lefschetz-duality]]

[F4] The homology long exact sequence of the pair $(W,\partial W)$ is exact. [[thm-long-exact-sequence-of-a-pair-in-singular-homology]]

[F5] The Seifert pairing is bilinear on homology classes; changing an integral basis by $P\in\operatorname{GL}_{2g}(\mathbb Z)$ changes its matrix to $P^TVP$. [[def-knot-seifert-pairing-and-matrix]], [[lem-seifert-pairing-well-defined]]

## Proof

**Given:** The data in the Statement and Facts & Assumptions. First use the disk-band basis from the surgery construction, and write $Y=\partial W=\Sigma_q(K)$ and $m=2g(q-1)$.

1.1 The handle decomposition in [F2] has cellular chain groups $C_2(W;\mathbb Z)=\mathbb Z^m$, $C_1(W;\mathbb Z)=0$, and $C_0(W;\mathbb Z)=\mathbb Z$. Hence $H_2(W;\mathbb Z)=\mathbb Z^m$, $H_1(W;\mathbb Z)=0$, and $H^2(W;\mathbb Z)=\mathbb Z^m$. By [F3], $H_2(W,Y;\mathbb Z)=\mathbb Z^m$ as well. [A1, F2, F3, given, algebra]

2.1 In the handle bases, the map $j:H_2(W;\mathbb Z)\to H_2(W,Y;\mathbb Z)$ sends each absolute handle class to its intersection coordinates with the relative dual handle classes. A diagonal coordinate is the handle framing, and an off-diagonal coordinate is the linking of the corresponding attaching circles; by [F2] this matrix is $M_q(V)$. [F2, F3, step 1.1, given, construct]

3.1 The pair sequence [F4] contains $H_2(W;\mathbb Z)\xrightarrow{j}H_2(W,Y;\mathbb Z)\longrightarrow H_1(Y;\mathbb Z)\longrightarrow H_1(W;\mathbb Z)=0$. By [F1], $Y=\partial W=\Sigma_q(K)$. Exactness and step 2.1 therefore give $H_1(\Sigma_q(K);\mathbb Z)\cong\operatorname{coker}(M_q(V))$ in the disk-band basis. [F1, F2, F3, F4, step 1.1, step 2.1, algebra]

4.1 For any other ordered integral basis, [F5] gives $V'=P^TVP$ with $P$ unimodular. Let $P_q=\operatorname{diag}(P,\ldots,P)$ with $q-1$ diagonal blocks. Blockwise substitution in the definition shows $M_q(V')=P_q^TM_q(V)P_q$. Left and right multiplication by unimodular integer matrices preserve the isomorphism class of the cokernel, so the presentation holds in the stated basis. For $q=2$ the block matrix has the single block $V+V^T$, and for $g=0$ it is empty. [F5, step 3.1, algebra] ∎
