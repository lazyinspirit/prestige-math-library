---
id: ex-deligne-product-of-finite-vector-space-categories
kind: example
title: "The Deligne product of finite vector spaces is finite vector spaces"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-axiom-of-choice, def-abelian-category, def-algebra-over-a-commutative-ring, def-deligne-product-of-finite-linear-categories, def-dimension, def-equivalence-and-adjoint-equivalence-of-categories, def-k-linear-category-and-k-linear-functor, def-vector-space, thm-finite-deligne-products-exist-by-tensor-product-algebras, thm-tensor-product-of-algebras-over-a-commutative-ring]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Tensor Categories, author final version, §1.11 (Definition 1.11.1 and Proposition 1.11.2 with its coalgebra-realization sketch), printed pp.15–16"
      url: https://math.mit.edu/~etingof/egnobookfinal.pdf
    - title: "Fuchs, Schaumann, Schweigert, Eilenberg–Watts calculus for finite categories and a bimodule Radford S^4 theorem, arXiv:1612.04561v3, §2.1 (Lemma 2.1 and (2.1)), §2.3 ((2.6)–(2.9)), §2.4 (Proposition 2.8, Corollary 2.9 and (2.18)–(2.31)), §§3.1–3.2 (Definition 3.1, Theorem 3.2, Lemma 3.3, Proposition 3.4 and Corollaries 3.5–3.7), §3.5 (Definition 3.14, Lemmas 3.15–3.16 and (3.56)–(3.58))"
      url: https://arxiv.org/pdf/1612.04561v3
dependency_level: 5
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a field and let $\mathbf{vect}$ be the category of finite-dimensional $k$-vector spaces ([[def-vector-space]], [[def-dimension]]), a finite $k$-linear abelian category whose algebra model is $k\text{-}\mathrm{mod}$ for the algebra $k$ ([[def-algebra-over-a-commutative-ring]], [[def-k-linear-category-and-k-linear-functor]], [[def-abelian-category]]). Then [[thm-finite-deligne-products-exist-by-tensor-product-algebras]] with $R=S=k$ identifies $\mathbf{vect}\boxtimes\mathbf{vect}$ with $k\otimes_kk\text{-}\mathrm{mod}=\mathbf{vect}$: the tensor-product algebra is $k\otimes_kk\cong k$ ([[thm-tensor-product-of-algebras-over-a-commutative-ring]]), the universal bifunctor is the ordinary tensor product $\otimes_k:\mathbf{vect}\times\mathbf{vect}\to\mathbf{vect}$, and the universal property is that of [[def-deligne-product-of-finite-linear-categories]]. The equivalence respects the universal bifunctors up to canonical natural isomorphism ([[def-equivalence-and-adjoint-equivalence-of-categories]]).

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a field and let $\mathbf{vect}$ be the category of finite-dimensional $k$-vector spaces ([[def-vector-space]], [[def-dimension]]), a finite $k$-linear abelian category whose algebra model is $k\text{-}\mathrm{mod}$ for the algebra $k$ ([[def-algebra-over-a-commutative-ring]], [[def-k-linear-category-and-k-linear-functor]], [[def-abelian-category]]). Then [[thm-finite-deligne-products-exist-by-tensor-product-algebras]] with $R=S=k$ identifies $\mathbf{vect}\boxtimes\mathbf{vect}$ with $k\otimes_kk\text{-}\mathrm{mod}=\mathbf{vect}$: the tensor-product algebra is $k\otimes_kk\cong k$ ([[thm-tensor-product-of-algebras-over-a-commutative-ring]]), the universal bifunctor is the ordinary tensor product $\otimes_k:\mathbf{vect}\times\mathbf{vect}\to\mathbf{vect}$, and the universal property is that of [[def-deligne-product-of-finite-linear-categories]]. The equivalence respects the universal bifunctors up to canonical natural isomorphism ([[def-equivalence-and-adjoint-equivalence-of-categories]]).

## Facts & Assumptions

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]), a field $k$, $\mathbf{vect}$ the category of finite-dimensional $k$-vector spaces, the algebra $k$, and the algebra $k\otimes_kk$.

[F1] A left $k$-module is exactly a $k$-vector space, and the finite-dimensional $k$-vector spaces form the category $\mathbf{vect}$, so the algebra model of $\mathbf{vect}$ is $k\text{-}\mathrm{mod}$ ([[def-algebra-over-a-commutative-ring]], [[def-vector-space]], [[def-dimension]]).

[F2] The $k$-algebra $k\otimes_kk$ has multiplication $(a\otimes b)(a'\otimes b')=aa'\otimes bb'$ and unit $1\otimes1$ ([[thm-tensor-product-of-algebras-over-a-commutative-ring]]).

[F3] For finite-dimensional $k$-algebras $R,S$ the category $(R\otimes_kS)\text{-}\mathrm{mod}$ with the tensor bifunctor is a Deligne product of $R\text{-}\mathrm{mod}$ and $S\text{-}\mathrm{mod}$, and a Deligne product is unique up to an equivalence respecting the universal bifunctors, its universal property being an equivalence between $k$-linear right exact functors out of it and $k$-linear bifunctors right exact in each variable ([[thm-finite-deligne-products-exist-by-tensor-product-algebras]], [[def-deligne-product-of-finite-linear-categories]]).

## Verification

1.1 The algebra $k$ is finite-dimensional and unital over the field $k$ [F1], and the multiplication of [F2] on $k\otimes_kk$ satisfies $(a\otimes b)(a'\otimes b')=aa'\otimes bb'$; the $k$-linear map $k\to k\otimes_kk$, $a\mapsto a\otimes1$, has the multiplication map $k\otimes_kk\to k$, $\sum_ia_i\otimes b_i\mapsto\sum_ia_ib_i$, as a two-sided inverse, so $k\otimes_kk\cong k$ as $k$-algebras and $(k\otimes_kk)\text{-}\mathrm{mod}=\mathbf{vect}$ [F1]. [given, F1, F2]

2.1 By [F3] with $R=S=k$, the category $(k\otimes_kk)\text{-}\mathrm{mod}$ together with the tensor bifunctor $(X,Y)\mapsto X\otimes_kY$ is a Deligne product of $k\text{-}\mathrm{mod}$ and $k\text{-}\mathrm{mod}$; under the algebra isomorphism of step 1.1, a module over $k\otimes_kk$ is a $k$-vector space, so $(k\otimes_kk)\text{-}\mathrm{mod}=\mathbf{vect}=k\text{-}\mathrm{mod}$, and the universal bifunctor is the ordinary tensor product $\otimes_k$ on $\mathbf{vect}$ ([[def-k-linear-category-and-k-linear-functor]]). [step 1.1, F3]

3.1 Hence $\mathbf{vect}\boxtimes\mathbf{vect}$ is identified with $\mathbf{vect}$, the universal bifunctor being $\otimes_k:\mathbf{vect}\times\mathbf{vect}\to\mathbf{vect}$, and its universal property is exactly the defining property of a Deligne product of finite $k$-linear categories [F3]; since Deligne products are unique up to an equivalence respecting the universal bifunctors, the identification respects the universal bifunctors up to canonical natural isomorphism ([[def-equivalence-and-adjoint-equivalence-of-categories]], [[def-deligne-product-of-finite-linear-categories]]). [step 2.1, F3] ∎
