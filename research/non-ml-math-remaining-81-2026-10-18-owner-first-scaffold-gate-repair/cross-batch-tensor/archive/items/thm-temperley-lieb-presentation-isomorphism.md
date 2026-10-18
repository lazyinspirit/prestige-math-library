---
id: thm-temperley-lieb-presentation-isomorphism
kind: theorem
title: "The generator presentation is the planar diagram algebra over every commutative ring"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [def-temperley-lieb-diagram-category, def-temperley-lieb-generator-presentation, thm-temperley-lieb-diagram-category-laws, thm-temperley-lieb-diagrams-have-catalan-cardinality, thm-temperley-lieb-generator-normal-form, lem-temperley-lieb-generators-satisfy-local-relations, thm-temperley-lieb-diagram-generators-span, def-free-module-on-a-set-and-standard-basis, thm-universal-property-of-free-modules, def-matrices-over-a-commutative-ring, def-ring-matrix-product-identity-and-transpose, thm-ring-matrix-arithmetic-laws, def-determinant-of-a-square-matrix, thm-determinant-multiplicative, cor-square-matrix-invertible-iff-determinant-is-a-unit, def-invertible-element]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Ridout and Yvan Saint-Aubin, Standard Modules, Induction and the Structure of the Temperley-Lieb Algebra, §2"
      url: "https://arxiv.org/pdf/1204.4505"
      locator: "§2, PDF/printed pp. 4–11: relations, normal form, path count, and diagram generation; their dimension argument is stated over C."
    - title: "Dana C. Ernst, Michael G. Hastings, and Sarah K. Salmon, Factorization of Temperley–Lieb diagrams"
      url: "https://msp.org/involve/2017/10-1/involve-v10-n1-p07-s.pdf"
      locator: "§§2–4, printed pp. 96–106: type-A algebra, faithful diagram basis, and factorization."
    - title: "David Guichard, Combinatorics and Graph Theory, Section 3.5: Catalan Numbers"
      url: "https://www.whitman.edu/mathematics/cgt_online/cgt.pdf"
      locator: "§3.5, printed p. 69: the Catalan count used after the local diagram bijection."
---

## Statement

Let $R$ be a commutative ring with unit, $\delta\in R$, and $n\ge0$. The homomorphism $\pi_n:P_n(R,\delta)\to\mathrm{TL}_n(R,\delta)$ sending $u_i$ to $d_i$ is an isomorphism. Consequently the Jones normal forms of [[thm-temperley-lieb-generator-normal-form]] are an $R$-basis of the presented algebra, and both algebras are free of rank $C_n$. This holds without a field assumption and without requiring $\delta$ to be nonzero or invertible.

## Facts & Assumptions

**Given:** $R,\delta,n$ as above; $P_n(R,\delta)$ and $\mathrm{TL}_n(R,\delta)$; their diagram generators, relations, normal forms, and Catalan counts.

[F1] The assignment $u_i\mapsto d_i$ extends to a unital $R$-algebra homomorphism $\pi_n:P_n(R,\delta)\to\mathrm{TL}_n(R,\delta)$. ([[lem-temperley-lieb-generators-satisfy-local-relations]])

[F2] Every basis diagram of $\mathrm{TL}_n(R,\delta)$ is a product of the $d_i$; hence $\pi_n$ is surjective. ([[thm-temperley-lieb-diagram-generators-span]])

[F3] The images of the finite set $\mathcal N_n$ of Jones normal forms span $P_n(R,\delta)$, and $\mathcal N_n$ is in bijection with Dyck paths of semilength $n$. ([[thm-temperley-lieb-generator-normal-form]])

[F4] The diagram basis $\mathcal D(n,n)$ is in bijection with Dyck paths of semilength $n$, so $|\mathcal D(n,n)|=C_n$. ([[thm-temperley-lieb-diagrams-have-catalan-cardinality]])

[F5] For a set $X$, the free module $R^{(X)}$ has basis $(e_x)_{x\in X}$; any map on this basis extends uniquely to an $R$-linear map. ([[def-free-module-on-a-set-and-standard-basis]], [[thm-universal-property-of-free-modules]])

[F6] A matrix records the coordinates of a linear map on the chosen finite bases; the product formula $(AB)_{ij}=\sum_k a_{ik}b_{kj}$ makes composition correspond to matrix multiplication, and $I_n$ has diagonal entries $1$ and off-diagonal entries $0$. ([[def-free-module-on-a-set-and-standard-basis]], [[thm-universal-property-of-free-modules]], [[def-matrices-over-a-commutative-ring]], [[def-ring-matrix-product-identity-and-transpose]], [[thm-ring-matrix-arithmetic-laws]])

[F7] For same-sized square matrices over a commutative ring, $\det(AB)=\det(A)\det(B)$. ([[thm-determinant-multiplicative]])

[F8] A positive-sized square matrix over a commutative ring is invertible if its determinant is a unit. ([[cor-square-matrix-invertible-iff-determinant-is-a-unit]])

[F9] The determinant is given by the Leibniz formula, so $\det(I_N)=1$ for every $N\ge1$; a unit is an element with a two-sided multiplicative inverse. ([[def-determinant-of-a-square-matrix]], [[def-invertible-element]])

## Proof

**Proof technique:** direct.

1.1 The homomorphism $\pi_n$ is well defined by [F1], and it is surjective by [F2], because its image contains every diagram basis vector. [F1, F2]

2.1 Let $q:R^{(\mathcal N_n)}\to P_n(R,\delta)$ send the standard basis vector indexed by $N$ to the class of $N$. It is $R$-linear by [F5] and surjective by [F3]. Hence $S:=\pi_n\circ q:R^{(\mathcal N_n)}\to R^{(\mathcal D(n,n))}$ is surjective, using the diagram basis in [F4]. [F3, F4, F5, step 1.1]

3.1 The explicit path encodings in [F3] and [F4] give a bijection between $\mathcal N_n$ and $\mathcal D(n,n)$ by composing the first with the inverse of the second. Both finite free modules in step 2.1 therefore have rank $C_n$. This rank is positive: the identity matching belongs to $\mathcal D(n,n)$ by [F1], so [F4] implies $C_n\ge1$. Order the standard bases by this bijection. For each basis vector $e_N$, the coordinates of $S(e_N)$ are the $N$th column of a matrix $A$; [F5] gives the finite-basis map representation, and [F6] identifies composition with matrix multiplication. Thus $S$ is represented by a square matrix $A$ of size $C_n$. [F1, F3, F4, F5, F6, step 2.1, construct]

4.1 Step 2.1 established that $S$ is surjective. For each member of the finite basis indexed by $\mathcal D(n,n)$, choose one preimage under $S$; only finitely many choices are made. By [F5] these assignments extend linearly to a right inverse $B$ of $S$. With the bases fixed in step 3.1, $B$ is represented by a square matrix and $S\circ B=I_{C_n}$, so $AB=I_{C_n}$. [F4, F5, F6, step 2.1, step 3.1, choose]

5.1 Taking determinants and using [F7] gives $\det(A)\det(B)=\det(I_{C_n})=1$ by [F9]. Since $R$ is commutative, $\det(B)$ is a two-sided inverse of $\det(A)$, so $\det(A)$ is a unit. [F6, F7, F9, step 4.1, algebra]

6.1 By [F8], $A$ is invertible, hence $S$ is an isomorphism. If $q(x)=0$, then $S(x)=0$ and injectivity of $S$ gives $x=0$; thus the already-surjective $q$ is an isomorphism. For any $y\in P_n(R,\delta)$ with $\pi_n(y)=0$, choose $x$ with $q(x)=y$ using surjectivity of $q$; then $S(x)=0$, whence $x=0$ and $y=0$. Thus $\pi_n$ is injective as well as surjective, proving the claimed isomorphism and the basis assertion. [F1, F2, F3, F4, F8, step 2.1, step 4.1, step 5.1] ∎

## Remarks

The ring-theoretic independence argument is what extends the normal-form count to arbitrary commutative rings: a surjective square matrix has a right inverse, so its determinant is a unit. No specialization argument, flatness assumption, division by $\delta$, or semisimplicity hypothesis is used.
