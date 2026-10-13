---
id: lem-complex-specht-modules-are-self-dual
kind: lemma
title: Complex Specht modules are self-dual with real-valued characters
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [def-column-antisymmetrizer-polytabloid-and-specht-module,
       def-invariant-inner-product-on-a-tabloid-module,
       def-young-subgroup-tabloid-and-permutation-module,
       lem-specht-module-has-nondegenerate-self-pairing-in-characteristic-zero,
       def-dual-complex-representation,
       thm-characters-of-direct-sums-tensor-products-and-duals,
       prop-basic-value-properties-of-a-complex-character,
       thm-complex-irreducibles-of-symmetric-groups-are-specht-modules,
       def-orthogonality-and-orthogonal-complement]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups (complete lecture notes)"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
      locator: "Chapter 9, Definition 9.1 and Remark 9.2, printed p. 31: the symmetric invariant bilinear form on the tabloid permutation module. Nondegeneracy on the complex Specht subspace is proved locally below using conjugation."
    - title: "Peter Webb, A Course in Finite Group Representation Theory (complete author-hosted textbook, 294 pp.)"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
      locator: "§3.1, printed pp. 25–26: the dual action and Proposition 3.1.3(3), giving the contragredient character formula; §3.2, p. 29: the class-function inner product."
---

## Statement

For every $n\ge0$ and $\lambda\vdash n$ the complex Specht module $S^\lambda$
carries a nondegenerate symmetric $S_n$-invariant bilinear form
$$b(x,y)=\sum_T x_Ty_T$$
given by the coefficientwise product in the tabloid basis, so
$v\mapsto b(v,-)$ is an isomorphism of $\mathbb C S_n$-modules
$S^\lambda\to(S^\lambda)^*$; equivalently $S^\lambda$ is self-dual.
Consequently $\chi^\lambda(g^{-1})=\chi^\lambda(g)$ for every $g\in S_n$, that
is, every irreducible character of $S_n$ is real-valued.

## Facts & Assumptions

**Given:** An integer $n\ge0$, a partition $\lambda\vdash n$, the tabloid module $M^\lambda$ with its tabloid basis, and the complex Specht module $S^\lambda\subseteq M^\lambda$.

[F1] The tabloid module $M^\lambda$ has the finite tabloid basis, and $S^\lambda$ is the complex span of the polytabloids $e_s=\kappa_s\cdot\{s\}$, where $\kappa_s=\sum_{\gamma\in C_s}\operatorname{sgn}(\gamma)\gamma$ acts through the permutation action on tabloids ([[def-column-antisymmetrizer-polytabloid-and-specht-module]], [[def-young-subgroup-tabloid-and-permutation-module]]).

[F2] The tabloid-basis Hermitian form $\langle x,y\rangle=\sum_T\overline{x_T}y_T$ is positive definite, the tabloid basis is orthonormal for it, and it is $S_n$-invariant ([[def-invariant-inner-product-on-a-tabloid-module]]).

[F3] $S^\lambda\ne0$ and $S^\lambda\cap(S^\lambda)^\perp=\{0\}$ ([[lem-specht-module-has-nondegenerate-self-pairing-in-characteristic-zero]], [[def-orthogonality-and-orthogonal-complement]]).

[F4] The dual representation acts by $(g\cdot f)(v)=f(g^{-1}\cdot v)$, and $\chi_{V^*}(g)=\overline{\chi_V(g)}$ for a finite-dimensional complex representation $V$ ([[def-dual-complex-representation]], [[thm-characters-of-direct-sums-tensor-products-and-duals]]).

[F5] For a finite-dimensional complex representation of a finite group, $\chi(g^{-1})=\overline{\chi(g)}$ ([[prop-basic-value-properties-of-a-complex-character]]).

## Proof

**Proof technique:** direct.

1.1 Define $b(x,y)=\sum_Tx_Ty_T$ for $x=\sum_Tx_TT$ and $y=\sum_Ty_TT$ in $M^\lambda$. The expression is a finite sum of products of two complex numbers, so $b$ is a symmetric bilinear form; writing $\overline{x}=\sum_T\overline{x_T}T$ for the coefficientwise conjugate, $b(x,y)=\sum_Tx_Ty_T=\sum_T\overline{\overline{x_T}}y_T=\langle\overline{x},y\rangle$ by [F2]. If $\sigma\in S_n$ permutes the tabloid basis, then the coefficient of $T$ in $\sigma x$ is $x_{\sigma^{-1}T}$, so $b(\sigma x,\sigma y)=\sum_Tx_{\sigma^{-1}T}y_{\sigma^{-1}T}=\sum_Tx_Ty_T=b(x,y)$ after reindexing the finite basis. Hence $b$ is $S_n$-invariant. [F1, F2, algebra]

1.2 The Specht module is stable under coefficientwise conjugation: $\overline{S^\lambda}=S^\lambda$. Each polytabloid is a finite integer combination of tabloid basis vectors, since $\kappa_s$ permutes the tabloid basis with signs $\pm1$, so $\overline{e_s}=e_s$ by [F1]. For $x=\sum_sc_se_s\in S^\lambda$ one has $\overline{x}=\sum_s\overline{c_s}e_s\in S^\lambda$; the conjugation map is an involution of the complex vector space $M^\lambda$, so applying it twice gives equality. [F1, algebra]

2.1 The form $b$ is nondegenerate on $S^\lambda$. Let $x\in S^\lambda$ with $b(x,y)=0$ for all $y\in S^\lambda$. By step 1.1 this says $\langle\overline{x},y\rangle=0$ for all $y\in S^\lambda$, so $\overline{x}\in(S^\lambda)^\perp$. Since $\overline{x}\in S^\lambda$ by step 1.2, [F3] forces $\overline{x}=0$, hence $x=0$. Conversely, if $x\ne0$ then $\overline{x}\ne0$ and the same identity exhibits some $y\in S^\lambda$ with $b(x,y)\ne0$, because $\overline{x}\notin(S^\lambda)^\perp$ by [F3] and the orthogonal complement is defined by vanishing against every vector of the subspace ([[def-orthogonality-and-orthogonal-complement]]). [F2, F3, step 1.1, step 1.2]

3.1 The map $\Phi:S^\lambda\to(S^\lambda)^*$, $\Phi(v)=b(v,-)$, is $\mathbb C$-linear and $S_n$-equivariant for the dual action of [F4]: for $w\in S^\lambda$, $\Phi(\sigma v)(w)=b(\sigma v,w)=b(v,\sigma^{-1}w)=\Phi(v)(\sigma^{-1}w)=(\sigma\cdot\Phi(v))(w)$ by $S_n$-invariance of $b$ from step 1.1. By nondegeneracy from step 2.1 and finite-dimensionality of $S^\lambda$, $\Phi$ is injective; since $\dim_{\mathbb C}(S^\lambda)^*=\dim_{\mathbb C}S^\lambda$, it is an isomorphism. Thus $S^\lambda\cong(S^\lambda)^*$ as $\mathbb C S_n$-modules. [F4, step 1.1, step 2.1, algebra]

4.1 By step 3.1 the character of $S^\lambda$ equals the character of its dual, so for every $g\in S_n$ the dual-character formula [F4] gives $\chi^\lambda(g)=\chi_{(S^\lambda)^*}(g)=\overline{\chi^\lambda(g)}$; hence $\chi^\lambda(g)$ is real. Combining with [F5] gives $\chi^\lambda(g^{-1})=\overline{\chi^\lambda(g)}=\chi^\lambda(g)$ for every $g\in S_n$. Every irreducible complex character of $S_n$ is a Specht character $\chi^\lambda$ by [[thm-complex-irreducibles-of-symmetric-groups-are-specht-modules]], so all of them are real-valued. [F4, F5, step 3.1, algebra] ∎

No form of the Axiom of Choice is used: the tabloid form, coefficientwise conjugation and the character comparison are finite-dimensional over $\mathbb C$.
