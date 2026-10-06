---
id: lem-projective-space-products-are-linearly-independent-in-rational-oriented-bordism
kind: lemma
title: "Products of complex projective spaces are linearly independent in rational oriented bordism"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [lem-projective-space-products-have-triangular-characteristic-number-matrix, thm-characteristic-numbers-are-cobordism-invariants, def-pontryagin-number-of-a-closed-oriented-manifold, def-unoriented-and-oriented-bordism-groups, thm-cartesian-product-makes-bordism-a-graded-ring, lem-characteristic-numbers-of-products-follow-the-whitney-sum-and-kunneth-formulas, def-axiom-of-choice, prop-zero-dimensional-bordism-groups]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Milnor and James Stasheff, Characteristic Classes (original pagination; chapters 16-18 of the re-typeset scan)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "Corollary 17.5, printed p. 202, using Theorem 16.8 and its proof, printed pp. 194-195: independence of the projective-space products through their Pontryagin numbers."
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Proposition 12.16, printed pp. 104-105: independence of the projective-space products"
dependency_level: 3
---

## Statement

Assume AC ([[def-axiom-of-choice]]), inherited from the characteristic-number
and projective-space suppliers. Let $k\ge1$ and let
$P_J=\mathbb{CP}^{2j_1}\times\cdots\times\mathbb{CP}^{2j_r}$
range over the products of complex projective spaces indexed by the partitions
$J$ of $k$. Then the classes $[P_J]$ are linearly independent in the rational
oriented bordism group $\Omega_{4k}^{SO}\otimes\mathbb Q$; equivalently, if
$\sum_J c_J[P_J]=0$ with $c_J\in\mathbb Q$ then all $c_J=0$. Consequently
$$\dim_{\mathbb Q}\bigl(\Omega_{4k}^{SO}\otimes\mathbb Q\bigr)\ \ge\ p(k),$$
the number of partitions of $k$.

## Facts & Assumptions

**Given:** An integer $k\ge1$, the partitions $J$ of $k$, the classes $[P_J]\in\Omega_{4k}^{SO}$ of the projective-space products with their product complex orientations, and rational coefficients $c_J$.

[F1] [[thm-characteristic-numbers-are-cobordism-invariants]]: oriented-cobordant closed oriented $4k$-manifolds have equal Pontryagin numbers, so for each partition $I$ of $k$ the Pontryagin number is a well-defined function on the oriented bordism classes of [[def-unoriented-and-oriented-bordism-groups]].

[F2] [[def-pontryagin-number-of-a-closed-oriented-manifold]] defines the number componentwise over the connected components, so $p_I[M\sqcup N]=p_I[M]+p_I[N]$; the group operation on $\Omega^{SO}_{4k}$ is $[M]+[N]=[M\sqcup N]$ and the classes of products are the well-defined products in [[thm-cartesian-product-makes-bordism-a-graded-ring]] ([[def-unoriented-and-oriented-bordism-groups]]). Hence $p_I$ is additive for the group operation, $p_I([M]+[N])=p_I[M]+p_I[N]$.

[F3] [[lem-projective-space-products-have-triangular-characteristic-number-matrix]]: the ordinary Pontryagin-number matrix $A_{I,J}=\langle p_I(TP_J),[P_J]\rangle$, with rows and columns indexed by the partitions of $k$, is invertible over $\mathbb Q$; [[lem-characteristic-numbers-of-products-follow-the-whitney-sum-and-kunneth-formulas]] identifies the numbers of the products with the evaluations used in that matrix.

## Proof

1.1 Each Pontryagin number is additive. By [F1], $p_I$ is constant on oriented cobordism classes, hence well defined on $\Omega^{SO}_{4k}$; by the componentwise definition and the disjoint-union group law [F2], $p_I[M\sqcup N]=p_I[M]+p_I[N]$ for closed oriented $4k$-manifolds, so $p_I:\Omega^{SO}_{4k}\to\mathbb Z$ is a group homomorphism. Extending scalars, $(z\otimes q)\mapsto q\,p_I[z]$ is $\mathbb Z$-balanced and $\mathbb Q$-bilinear, hence induces a linear functional $p_I\otimes\mathbb Q:\Omega^{SO}_{4k}\otimes\mathbb Q\to\mathbb Q$; the balancing relation $p_I[nz\otimes q]=nq\,p_I[z]=p_I[z\otimes nq]$ holds by the definition of the tensor product. [F1, F2]

2.1 Suppose $\sum_Jc_J[P_J]=0$ in $\Omega^{SO}_{4k}\otimes\mathbb Q$. Applying the functional $p_I\otimes\mathbb Q$ for every partition $I$ of $k$ and using additivity [F2] gives $\sum_JA_{I,J}c_J=0$ for every $I$, that is, the matrix equation $A\,c=0$ with $A_{I,J}=\langle p_I(TP_J),[P_J]\rangle$ as in [F3]. [F2, F3, step 1.1]

3.1 By [F3] the matrix $A$ is invertible over $\mathbb Q$, so $A c=0$ forces $c=0$: all coefficients vanish and the classes $[P_J]$ are linearly independent in $\Omega^{SO}_{4k}\otimes\mathbb Q$. A linearly independent family of $p(k)$ vectors in a vector space gives the lower bound $\dim_{\mathbb Q}(\Omega^{SO}_{4k}\otimes\mathbb Q)\ge p(k)$. [F3, step 2.1]

4.1 Boundary and convention remarks. For $k=0$, [[prop-zero-dimensional-bordism-groups]] gives the positive point generator; there is one partition, the empty one, with $P_\varnothing$ a point, $\Omega^{SO}_0\otimes\mathbb Q\cong\mathbb Q$ on the positive point class, and $p(k)=1$; the lower bound is still correct and no independence beyond a nonzero class is claimed, but the statement is formulated for $k\ge1$ where the products have positive dimension. The argument gives only a lower bound: it neither produces a rational Hurewicz theorem nor any spanning family, and no upper bound on $\Omega^{SO}_{4k}\otimes\mathbb Q$ is asserted. The number $p(k)$ counts the partitions of $k$, and the index set of [F3] is exactly that finite set. No choice beyond the cited suppliers is used. [F3, step 3.1] ∎
