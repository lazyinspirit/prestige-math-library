---
id: thm-rational-oriented-bordism-is-detected-by-pontryagin-numbers
kind: theorem
title: "Rational oriented bordism is detected by Pontryagin numbers"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-axiom-of-choice, prop-products-of-complex-projective-spaces-span-rational-oriented-bordism, lem-projective-space-products-have-triangular-characteristic-number-matrix, thm-characteristic-numbers-are-cobordism-invariants, lem-characteristic-numbers-of-products-follow-the-whitney-sum-and-kunneth-formulas, def-pontryagin-number-of-a-closed-oriented-manifold, def-unoriented-and-oriented-bordism-groups, thm-cartesian-product-makes-bordism-a-graded-ring, lem-rationalization-is-exact-and-commutes-with-singular-homology, prop-zero-dimensional-bordism-groups]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "John Milnor and James Stasheff, Characteristic Classes (original pagination; chapters 16-18 of the re-typeset scan)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "Corollary 18.9 and Corollary 18.10, printed pp. 216-217, and the following remark on Wall's theorem"
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Theorem 11.46 and Proposition 12.16, printed pp. 97-105: the rational structure and the projective-space basis"
    - title: "Tom Weston, An Introduction to Cobordism Theory"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "Section 18, printed pp. 32-34: detection of $\\Omega^{SO}\\otimes\\mathbb Q$ by Pontryagin numbers"
dependency_level: 9
---

## Statement

Assume AC, inherited from the rational spanning proposition. Let $M$ and $N$ be
closed oriented $n$-manifolds. Then $M$ and $N$ are equal in
$\Omega_n^{SO}\otimes\mathbb Q$ if and only if all of their Pontryagin numbers
agree. Equivalently, the map
$$\Omega_n^{SO}\otimes\mathbb Q\longrightarrow \prod_{J}\mathbb Q,\qquad [M]\otimes1\longmapsto \bigl(p_{J}[M]\bigr)_{J},$$
is injective; it is an isomorphism after restricting to the finitely many
partitions $J$ of $n/4$ when $4\mid n$, and both sides are zero when
$4\nmid n$. In particular, if all Pontryagin numbers of a closed oriented
manifold vanish, then some positive multiple of it is an oriented boundary. The
statement is rational only; the integral refinement with Stiefel-Whitney
numbers is Wall's theorem, recorded separately.

## Facts & Assumptions

**Given:** Closed oriented $n$-manifolds $M,N$, with rational coefficients for all tensor products below, and the family of Pontryagin-number functionals indexed by the partitions $J$ of $n/4$ in the case $4\mid n$.

[F1] [[prop-products-of-complex-projective-spaces-span-rational-oriented-bordism]]: for every $k\ge0$ the products $P_J$ indexed by the partitions $J$ of $k$ form a $\mathbb Q$-basis of $\Omega_{4k}^{SO}\otimes\mathbb Q$, and $\Omega_*^{SO}\otimes\mathbb Q$ is the polynomial algebra on the classes $[\mathbb{CP}^{2j}]$, so in particular $\Omega_n^{SO}\otimes\mathbb Q=0$ for $4\nmid n$.

[F2] [[thm-characteristic-numbers-are-cobordism-invariants]] and [[def-pontryagin-number-of-a-closed-oriented-manifold]]: each Pontryagin number is constant on oriented cobordism classes and additive over disjoint unions, hence a well-defined linear functional on $\Omega_{4k}^{SO}\otimes\mathbb Q$ by $[M]\otimes q\mapsto q\,p_J[M]$; [[def-unoriented-and-oriented-bordism-groups]] and [[thm-cartesian-product-makes-bordism-a-graded-ring]] give the group and ring structure used to form rational combinations.

[F3] [[lem-projective-space-products-have-triangular-characteristic-number-matrix]] and [[lem-characteristic-numbers-of-products-follow-the-whitney-sum-and-kunneth-formulas]]: the Pontryagin-number matrix $A_{I,J}=\langle p_I(TP_J),[P_J]\rangle$ of the projective-space products is invertible over $\mathbb Q$.

[F4] [[lem-rationalization-is-exact-and-commutes-with-singular-homology]]: an element $z$ of an abelian group satisfies $z\otimes1=0$ in $A\otimes\mathbb Q$, where $A$ is that group if and only if some positive integer kills $z$; [[prop-zero-dimensional-bordism-groups]] gives $\Omega_0^{SO}\cong\mathbb Z$ with the positively oriented point as generator. [[def-axiom-of-choice]] is assumed exactly as declared by these suppliers.

## Proof

1.1 The case $4\mid n$. Write $n=4k$ and expand a rational bordism class uniquely in the basis of [F1]: $z=\sum_Jq_J[P_J]$ with $q_J\in\mathbb Q$. Applying the linear functional $p_I\otimes\mathbb Q$ [F2] gives $p_I[z]=\sum_Jq_JA_{I,J}$ with the invertible matrix $A$ of [F3]; hence the map $z\mapsto(p_I[z])_I$ is a $\mathbb Q$-linear isomorphism from $\Omega_{4k}^{SO}\otimes\mathbb Q$ onto $\prod_I\mathbb Q$ (finitely many coordinates). Applying this to $[M]-[N]=[M]+[-N]$ shows that $M$ and $N$ agree in $\Omega_{4k}^{SO}\otimes\mathbb Q$ exactly when all their Pontryagin numbers agree, since $A$ is invertible and the vector of differences $(p_I[M]-p_I[N])_I$ vanishes if and only if the differences of coefficients vanish. [F1, F2, F3]

1.2 The case $4\nmid n$. By [F1] the group $\Omega_n^{SO}\otimes\mathbb Q$ is zero, there is no degree-$n$ monomial in the Pontryagin classes, and the product over the empty index set is the zero vector space; the asserted equivalence and isomorphism hold vacuously. For $n=0$ the empty partition gives the single monomial $1$, [F4] identifies $\Omega_0^{SO}\otimes\mathbb Q\cong\mathbb Q$ through the signed count, and the value $p_\varnothing$ of the positively oriented point is $1$, so the one-by-one map is the identity. [F1, F4]

2.1 Multiple of a boundary. Suppose all Pontryagin numbers of a closed oriented $n$-manifold $M$ vanish. By steps 1.1 and 1.2 the class $[M]\otimes1$ is zero in $\Omega_n^{SO}\otimes\mathbb Q$. By the fraction criterion [F4] there is a positive integer $s$ with $s[M]=0$ in $\Omega_n^{SO}$, that is, the sum of $s$ copies of the class is zero. Since the group operation is disjoint union [F2], $s[M]=[M\sqcup\cdots\sqcup M]$, so some positive multiple of $M$ is null-cobordant, i.e. an oriented boundary. This is the rational multiple-boundary consequence; the theorem makes no integral single-copy assertion, and the integral refinement is recorded separately. [F2, F4, step 1.1, step 1.2]

3.1 Conventions and boundaries. The product on the right of the displayed map runs over the finitely many partitions of $n/4$ when $4\mid n$ and is the empty product otherwise; the target is a finite-dimensional rational vector space and no completion occurs. For the empty manifold all numbers are zero and its class is zero. The statement uses only rational coefficients, and the cited suppliers carry their own choice declarations, so no further choice is made. [F1, F2, F3, step 1.1, step 1.2, step 2.1] ∎
