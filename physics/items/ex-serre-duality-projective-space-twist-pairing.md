---
id: ex-serre-duality-projective-space-twist-pairing
kind: example
title: The projective-space twist pairing in Serre duality
status: published
origin: pipeline
landmark: false
deps:
  - lem-projective-space-top-cohomology-residue-pairing
  - thm-serre-duality-projective-space-twisting-sheaves
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "R. Hartshorne, Algebraic Geometry"
      url: https://doi.org/10.1007/978-1-4757-3849-0
      locator: "Chapter III, Section 5 and Section 7 (worked monomial pairings)"
---

## Statement

Assume the Axiom of Choice. Let $k$ be a field and consider $\mathbb P^2_k$
with the residue trace of
[[lem-projective-space-top-cohomology-residue-pairing]]. Then the class
$x_0^2\in H^0(\mathbb P^2_k,\mathcal O(2))$ pairs to $1$ with the class
$x_0^{-3}x_1^{-1}x_2^{-1}\in H^2(\mathbb P^2_k,\mathcal O(-5))$ and to $0$
with every other monomial basis class of $H^2(\mathbb P^2_k,\mathcal O(-5))$;
in particular the pairing
$H^0(\mathcal O(2))\times H^2(\mathcal O(-5))\to k$ of
[[thm-serre-duality-projective-space-twisting-sheaves]] is nondegenerate on
the basis monomial $x_0^2$, and the six monomial basis classes of
$H^2(\mathcal O(-5))$ are each detected by a degree-two monomial.

## Facts & Assumptions

**Given:** the field $k$, the projective plane $\mathbb P^2_k$ with homogeneous coordinates $x_0,x_1,x_2$, and the two monomial classes displayed in the statement.

[F1] For $n\ge1$ and $d\ge0$ the pairing $H^0(\mathbb P^n_k,\mathcal O(d))\times H^n(\mathbb P^n_k,\mathcal O(-n-1-d))\to k$ is the coefficient of $(x_0\cdots x_n)^{-1}$ in the product of the representing monomials; $H^0(\mathcal O(d))$ has as a $k$-basis the degree-$d$ monomials and $H^n(\mathcal O(-n-1-d))$ the all-negative monomials of total degree $-n-1-d$. ([[lem-projective-space-top-cohomology-residue-pairing]])

[F2] For every $d$ and $q$ the evaluation pairing $H^q(\mathcal O(d))\times H^{n-q}(\mathcal O(-d-n-1))\to k$ using the residue trace is perfect. ([[thm-serre-duality-projective-space-twisting-sheaves]])

[F3] The Axiom of Choice is [[def-axiom-of-choice]].

## Proof

1.1 The two bases. For $n=2$ and $d=2$ the first space $H^0(\mathbb P^2_k,\mathcal O(2))$ has the six degree-two monomials $x_0^2,x_0x_1,x_0x_2,x_1^2,x_1x_2,x_2^2$ as a basis, and the second space $H^2(\mathbb P^2_k,\mathcal O(-5))$ has the six all-negative monomials of total degree $-5$ as a basis, namely $x_0^{e_0}x_1^{e_1}x_2^{e_2}$ with $e_0,e_1,e_2<0$ and $e_0+e_1+e_2=-5$: writing $f_i=-e_i\ge1$ gives $f_0+f_1+f_2=5$, so there are $\binom{5-1}{2}=6$ such classes, among them $x_0^{-3}x_1^{-1}x_2^{-1}$. [F1]

1.2 The nonzero pairing. Multiplying the two displayed classes gives $$x_0^2\cdot x_0^{-3}x_1^{-1}x_2^{-1}=x_0^{-1}x_1^{-1}x_2^{-1},$$ whose coefficient in $x_0^{-1}x_1^{-1}x_2^{-1}$ is $1$; by the coefficient description of the pairing in [F1] one has $\langle x_0^2,x_0^{-3}x_1^{-1}x_2^{-1}\rangle=1$, and $t(x_0^2\cup x_0^{-3}x_1^{-1}x_2^{-1})=1$ for the residue trace $t$ of [F2]. [F1, F2]

2.1 All cross pairings vanish. Let $x_0^{e_0}x_1^{e_1}x_2^{e_2}$ be a basis class of $H^2(\mathcal O(-5))$ different from $x_0^{-3}x_1^{-1}x_2^{-1}$. Its product with $x_0^2$ has exponent vector $(2+e_0,e_1,e_2)$, and the coefficient of $x_0^{-1}x_1^{-1}x_2^{-1}$ in that monomial is $1$ exactly when $(2+e_0,e_1,e_2)=(-1,-1,-1)$, that is $e_0=-3$, $e_1=e_2=-1$; if $e_0\ne-3$ the first coordinate is wrong and the pairing is $0$, while if $e_0=-3$ the total-degree condition $e_0+e_1+e_2=-5$ forces $e_1+e_2=-2$ with $e_1,e_2<0$, so $e_1=e_2=-1$ and the class is the one already treated. Hence the pairing of $x_0^2$ with every other basis class is $0$ by the coefficient description of [F1]. [F1, step 1.1, step 1.2]

3.1 Nondegeneracy on the displayed class. Step 1.2 exhibits a class pairing to $1$ with $x_0^2$, so $x_0^2$ is detected by the pairing; conversely, for each of the six basis classes $x^{\underline e}$ of $H^2(\mathcal O(-5))$ the monomial $x^{\underline a}$ of degree $2$ with $a_i=-1-e_i\ge0$ satisfies $\langle x^{\underline a},x^{\underline e}\rangle=1$ by the bijection of [F1], so every basis class is detected, in accordance with the perfectness of the pairing recorded in [F2]. The Axiom of Choice is assumed in the statement and declared as the dependency [[def-axiom-of-choice]] ([F3]); it is inherited through the two named suppliers and no further choice is made. [F1, F2, F3, step 1.2, step 2.1] ∎
