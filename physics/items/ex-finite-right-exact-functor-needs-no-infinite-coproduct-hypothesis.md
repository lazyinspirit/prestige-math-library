---
id: ex-finite-right-exact-functor-needs-no-infinite-coproduct-hypothesis
kind: example
title: "A finite right exact functor needs no infinite-coproduct hypothesis"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 6
justified_by: []
aliases: []
deps: [thm-eilenberg-watts-for-arbitrary-unital-rings, cor-finite-one-sided-exactness-is-equivalent-to-existence-of-the-corresponding-adjoint, cor-independent-set-is-no-larger-than-a-finite-spanning-set, def-dimension, def-hom-groups-and-induced-hom-maps, def-left-and-right-modules, def-module-homomorphism-kernel-image-and-cokernel, def-polynomial-ring-over-a-commutative-ring, def-products-and-coproducts, def-quotient-ring, def-simple-module, prop-finite-dimensional-module-categories-are-intrinsically-finite, thm-finite-eilenberg-watts-for-right-exact-linear-functors, thm-unit-isomorphisms-for-module-tensor-products, thm-universal-property-of-module-direct-sums]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Tensor Categories, §1.8 (Definitions 1.8.1–1.8.6, Proposition 1.8.10), printed pp.9–11"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "Fuchs, Schaumann, Schweigert, Eilenberg–Watts calculus for finite categories and a bimodule Radford S^4 theorem, arXiv:1612.04561v3, §2.1 (Lemma 2.1 (R1)-(R4))"
      url: "https://arxiv.org/pdf/1612.04561v3"
---

## Example

Let $k$ be a field, let $A=k[\varepsilon]/(\varepsilon^{2})$ be the algebra of
dual numbers ([[def-polynomial-ring-over-a-commutative-ring]],
[[def-quotient-ring]]) and let $S=A/(\varepsilon)$ be its simple module
([[def-simple-module]]). Then: (i) $A\text{-}\mathrm{mod}$ has no countable
coproduct of copies of $A$, so it is not cocomplete; (ii) nevertheless the functor
$T_S=S\otimes_A-$, the case $M=S$ of the finite Eilenberg–Watts theorem, is
right exact with right adjoint $\operatorname{Hom}_A(S,-)$, and it is classified
by its kernel $T_S(A)\cong S$. Its right exactness, its right adjoint and its
classification use only finite free presentations and the finite biproducts of
$A\text{-}\mathrm{mod}$; no infinite coproducts are formed. Thus the finite classification requires no additional preservation hypothesis about infinite coproducts. Preservation of coproducts that do exist remains a meaningful condition; nonexistence of one countable coproduct does not make that condition vacuous. No choice is used.

## Facts & Assumptions

**Given:** A field $k$, the algebra $A=k[\varepsilon]/(\varepsilon^{2})$ of dual numbers, its simple module $S=A/(\varepsilon)$, and the family of countably many copies of the regular module $A$ in $A\text{-}\mathrm{mod}$.

[L1] The algebra $A=k[\varepsilon]/(\varepsilon^{2})$ is a commutative unital $k$-algebra in which the class $\varepsilon$ of the indeterminate satisfies $\varepsilon^{2}=0$ and every element has the form $a+b\varepsilon$ with $a,b\in k$; hence $S=A/(\varepsilon)$ is a one-dimensional $k$-vector space with $\varepsilon S=0$ ([[def-polynomial-ring-over-a-commutative-ring]], [[def-quotient-ring]], [[def-dimension]]).

[L2] $A\text{-}\mathrm{mod}$, the category of finite-dimensional left $A$-modules, is a finite $k$-linear abelian category, hence locally finite: hom-spaces are finite-dimensional over $k$ and every object has finite length ([[prop-finite-dimensional-module-categories-are-intrinsically-finite]]).

[L3] The $A$-submodules of $S$ are exactly its $k$-subspaces, because $A=k\cdot1\oplus k\varepsilon$ and $\varepsilon S=0$; since $S$ is one-dimensional and nonzero, $S$ is a simple $A$-module ([[def-simple-module]], [[def-dimension]]).

[L4] For a left $A$-module $M$, evaluation at $1$ is a bijection $\operatorname{Hom}_A(A,M)\cong M$ of $k$-vector spaces, since an $A$-linear map is determined by its value at $1$ and $m\mapsto(a\mapsto am)$ realizes every $m\in M$ ([[thm-universal-property-of-module-direct-sums]], [[def-left-and-right-modules]], [[def-hom-groups-and-induced-hom-maps]]).

[L5] A coproduct of a family $(X_n)$ in a category is an object $X$ with morphisms $\jmath_n:X_n\to X$ such that every family of morphisms $X_n\to Y$ extends uniquely to $X\to Y$; in particular $\operatorname{Hom}(X,Y)\cong\prod_n\operatorname{Hom}(X_n,Y)$ for every $Y$, and in the category of $k$-vector spaces $\prod_nk=k^{\mathbb N}$ contains the countably many linearly independent vectors $e_n$ of finite support ([[def-products-and-coproducts]], [[def-hom-groups-and-induced-hom-maps]], [[def-dimension]]).

[L6] Hom-spaces of $A\text{-}\mathrm{mod}$ are finite-dimensional over $k$ since the category is locally finite, and an independent family in a space with a finite spanning set has at most that many elements ([[prop-finite-dimensional-module-categories-are-intrinsically-finite]], [[cor-independent-set-is-no-larger-than-a-finite-spanning-set]], [[def-dimension]]).

[L7] For the finite-dimensional $(A,A)$-bimodule $S$ the functor $T_S=S\otimes_A-$ is $k$-linear and right exact, has right adjoint $\operatorname{Hom}_A(S,-)$ taking finite-dimensional modules to finite-dimensional modules, and has kernel $T_S(A)=S\otimes_AA\cong S$; its classification uses only finite free presentations and finite biproducts, and its right exactness and adjoint do not use any coproduct beyond the finite biproducts of $A\text{-}\mathrm{mod}$ ([[thm-finite-eilenberg-watts-for-right-exact-linear-functors]], [[cor-finite-one-sided-exactness-is-equivalent-to-existence-of-the-corresponding-adjoint]], [[thm-unit-isomorphisms-for-module-tensor-products]], [[def-left-and-right-modules]], [[def-module-homomorphism-kernel-image-and-cokernel]]).

[L8] The arbitrary-ring Eilenberg–Watts theorem classifies right exact functors that preserve arbitrary coproducts; its domain is the category of all modules, where arbitrary coproducts exist ([[thm-eilenberg-watts-for-arbitrary-unital-rings]]).





## Verification

**Proof technique:** direct.

1.1 By [L1] the quotient $S=A/(\varepsilon)$ is one-dimensional over $k$ with $\varepsilon S=0$ and $S\cong k$, and by [L3] the $A$-submodules of $S$ are its $k$-subspaces, so $S\ne0$ is a simple $A$-module. [L1, L3, algebra]

1.2 The space $k^{\mathbb N}$ is infinite-dimensional: its vectors $e_n$ of finite support are linearly independent, so if it had a finite basis with $N$ elements then the $N+1$ vectors $e_0,\dots,e_N$ would contradict the bound of [L6]. [L5, L6]

1.3 (ii) By [L7] the functor $T_S$ is $k$-linear and right exact, has the right adjoint $\operatorname{Hom}_A(S,-)$ which preserves finite-dimensional modules, and has kernel $T_S(A)\cong S$; the classification of [L7] uses finite free presentations of finite-dimensional modules and only the finite biproducts of $A\text{-}\mathrm{mod}$, so no infinite coproduct is formed. [L7]

2.1 Suppose a coproduct $X$ of the countably many copies of $A$ existed in $A\text{-}\mathrm{mod}$. Taking $Y=S$ in the universal property of [L5] gives a bijection $\operatorname{Hom}_A(X,S)\cong\prod_{n\in\mathbb N}\operatorname{Hom}_A(A,S)$, and $\operatorname{Hom}_A(A,S)\cong S$ as $k$-vector spaces by evaluation at $1$ from [L4], The comparison is $k$-linear, since it sends $f$ to $(f\jmath_n)_n$ and therefore preserves pointwise addition and scalar multiplication. Hence $\operatorname{Hom}_A(X,S)\cong S^{\mathbb N}\cong k^{\mathbb N}$ as $k$-vector spaces by step 1.1. [L4, L5, step 1.1, given]

3.1 But $\operatorname{Hom}_A(X,S)$ for objects $X,S$ of $A\text{-}\mathrm{mod}$ is finite-dimensional by [L2] and [L6]. This contradicts step 2.1 together with step 1.2, so no such coproduct exists; in particular $A\text{-}\mathrm{mod}$ is not cocomplete, so it does not satisfy the cocompleteness hypothesis of the arbitrary-ring setting. [L2, L6, step 2.1, step 1.2]

4.1 The finite classification [L7] applies to $T_S$ without any additional hypothesis about infinite coproducts, despite the nonexistence of the countable coproduct in step 3.1. The arbitrary-ring theorem [L8] concerns the category of all modules, which has arbitrary coproducts; it is not applied to this finite category. Preservation of existing coproducts is still meaningful here (for example the countable coproduct of zero modules exists), so noncocompleteness alone does not make preservation vacuous. All presentations and biproducts used in the classification are finite, so no choice is used. [L7, L8, step 1.3, step 3.1] ∎
