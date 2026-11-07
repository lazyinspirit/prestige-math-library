---
id: thm-nontrivial-ray-class-hecke-l-nonvanishing-at-one
kind: theorem
title: Nontrivial finite-order ray-class Hecke L-functions do not vanish at one
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 15
deps:
- def-finite-order-ray-class-hecke-character-and-l-function
- thm-primitive-hecke-l-analytic-continuation-and-functional-equation
- lem-imprimitive-ray-class-hecke-finite-euler-correction
- lem-nonnegative-dirichlet-series-holomorphic-half-plane
- lem-ray-class-character-product-positive-ideal-coefficients
- thm-ray-class-group-finite
- thm-finite-order-hecke-l-euler-product
- lem-trivial-ray-hecke-character-has-a-positive-simple-pole
- thm-gamma-meromorphic-continuation
- cor-gamma-function-has-no-zeros
- def-euler-gamma-function
- def-axiom-of-choice
- def-countable-choice
- def-dependent-choice
proof_strategy: direct
axiom_use: AC, Countable Choice and DC are retained as in the original Statement. The proof uses the local
  Mellin/Taylor/positive-Euler route; it does not use class-field existence or Artin reciprocity.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Jürgen Neukirch, Algebraic Number Theory, Chapter VII §13, Lemma 13.3
    url: https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf
    locator: Printed543–544 states the theorem via a class-field proof. The independent local proof below
      instead reconstructs Taylor positivity and the ray-character Euler product.
  - title: J. S. Milne, Class Field Theory, version 4.03
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
    locator: Chapter VI §4, Theorems 4.8–4.10 and Corollary 4.10, class-field nonvanishing and density
      argument.
---

## Statement

Assume AC, Countable Choice, and Dependent Choice. Let $K$ be a number field, let $\mathfrak m$ be a modulus, and let $\chi$ be a nontrivial finite-order ray-class Hecke character modulo $\mathfrak m$. Then the Hecke L-function $L(s,\chi)$, initially defined by its absolutely convergent ideal series for $\operatorname{Re}(s)>1$, has an analytic continuation to a neighborhood of $s=1$ and satisfies $L(1,\chi)\ne0$.

## Statement references

[[def-finite-order-ray-class-hecke-character-and-l-function]]

[[thm-primitive-hecke-l-analytic-continuation-and-functional-equation]]

## Facts & Assumptions

**Given:** AC, Countable Choice and Dependent Choice; the modulus and nontrivial character in the unchanged Statement.

[F1] A nontrivial primitive character has entire completed L-function. Every character is induced by a primitive one, with the exact finite Euler deletion formula; the inducing character is nontrivial when the original is. [[thm-primitive-hecke-l-analytic-continuation-and-functional-equation]] [[lem-imprimitive-ray-class-hecke-finite-euler-correction]]

[F2] Gamma is holomorphic and nonzero on the right half-plane, and the positive-real conductor powers are entire and nonzero. [[thm-gamma-meromorphic-continuation]] [[cor-gamma-function-has-no-zeros]] [[def-euler-gamma-function]] [[def-finite-order-ray-class-hecke-character-and-l-function]]

[F3] The trivial ray-character function is $\zeta_K(s)\prod_{\mathfrak p\mid\mathfrak m_0}(1-(N\mathfrak p)^{-s})$; $\zeta_K$ has a simple pole at $1$ with positive residue and no other pole on $\operatorname{Re}s>0$. [[thm-finite-order-hecke-l-euler-product]] [[lem-trivial-ray-hecke-character-has-a-positive-simple-pole]]

[F4] The finite product over all characters of the ray class group has nonnegative Dirichlet coefficients dominating the $h$th powers of all prime-to-modulus ideals, where $h$ is the group's order. [[lem-ray-class-character-product-positive-ideal-coefficients]] [[thm-ray-class-group-finite]]

[F5] A nonnegative Dirichlet series convergent for real $s>1$ and holomorphic on $\operatorname{Re}s>0$ converges at every positive real argument. [[lem-nonnegative-dirichlet-series-holomorphic-half-plane]]

[A1] The stated choice branch is retained through these analytic and number-field suppliers. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

1.1 By [F1], every nontrivial character's primitive inducing completed function is entire. On $\operatorname{Re}s>0$ its real gamma arguments have positive real part, as do its complex gamma arguments. Division by the nonzero holomorphic factors in [F2] and multiplication by the finite entire deletions in [F1] prove that every nontrivial character modulo the given modulus has a holomorphic L-function on that whole half-plane, not merely at $1$. [A1, F1, F2, given, algebra]

2.1 Suppose one such character has $L(1,\chi)=0$. Put $P(s)=\prod_{\eta\in\widehat G}L(s,\eta)$, where $G$ is the finite ray class group. The only possible pole in the right half-plane is the trivial factor's simple pole at $1$ by [F3]. The supposed zero cancels it, so step 1.1 makes $P$ holomorphic on $\operatorname{Re}s>0$. Its nonnegative Dirichlet expansion in [F4] is absolutely convergent for $\operatorname{Re}s>1$, and [F5] therefore forces convergence at $s=1/h$, where $h=|G|$. [F3, F4, F5, step 1.1, algebra]

3.1 But [F4] bounds that nonnegative series below by $\sum_{(\mathfrak b,\mathfrak m_0)=1}(N\mathfrak b)^{-1}$. This latter sum diverges: if it were finite, all its sums at real $s>1$ would be bounded by that finite value, whereas [F3] makes their Euler product tend to infinity as $s\downarrow1$. Each finite deletion in [F3] has positive value $1-(N\mathfrak p)^{-1}$ there. This contradiction proves that every nontrivial $L(1,\chi)$ is nonzero. Holomorphy near $1$ is step 1.1. The proof uses no Artin factorization; in particular it neither deletes ramified factors from the trivial Artin character nor assumes the held class-field-existence chain. [F3, F4, step 2.1, algebra] ∎ 