---
id: thm-every-finite-dimensional-continuous-representation-of-a-compact-lie-group-is-unitarizable
kind: theorem
title: Finite-dimensional compact-group representations are unitarizable
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-continuous-and-unitary-representation-of-a-compact-lie-group, prop-integration-against-haar-is-invariant-under-translations-and-conjugation, def-axiom-of-choice, def-real-and-complex-inner-product-space, lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets, cor-every-vector-space-has-a-basis, prop-standard-coordinate-inner-products, thm-linearity-of-the-lebesgue-integral-on-l-one, prop-order-and-scalar-rules-for-the-nonnegative-integral, def-integrable-real-and-complex-functions-and-their-integrals]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §1, (4.3) and the averaging argument preceding Proposition 4.24"
    - title: "Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras"
      url: "https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf"
      locator: "§4.2, complete reducibility via averaging"
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice. Every finite-dimensional continuous complex
representation of a compact Lie group preserves some positive-definite
Hermitian inner product.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice, a compact Lie group $G$ with normalized Haar measure $\mu$, a finite-dimensional complex representation $\pi:G\to\operatorname{GL}(V)$ as in [[def-continuous-and-unitary-representation-of-a-compact-lie-group]], and a positive-definite Hermitian inner product $(\cdot,\cdot)_0$ on $V$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters here through the existence of $\mu$ and its invariance [L2].

[L1] A representation is a continuous homomorphism $\pi:G\to\operatorname{GL}(V)$ with $\pi(gh)=\pi(g)\pi(h)$ and $\pi(e)=\mathrm{id}_V$; its matrix entries in any basis are continuous functions on $G$; an inner product is linear in the first argument, conjugate-symmetric and positive definite ([[def-continuous-and-unitary-representation-of-a-compact-lie-group]], [[def-real-and-complex-inner-product-space]]).

[L2] For the normalized Haar measure $\mu$ and every integrable $f$, $\int_G f(gh)\,d\mu(g)=\int_G f(g)\,d\mu(g)$ for every $h\in G$ ([[prop-integration-against-haar-is-invariant-under-translations-and-conjugation]]).

[L3] Every left Haar integral is strictly positive on every nonzero nonnegative continuous compactly supported function; in particular, if a continuous $f\ge0$ on $G$ satisfies $f(g_0)>0$ for some $g_0$, then $\int_G f\,d\mu>0$ ([[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]]).

[L4] A finite-dimensional complex vector space admits a positive-definite Hermitian inner product: choose a basis ([[cor-every-vector-space-has-a-basis]]) and transport the standard inner product of $\mathbb C^n$ ([[prop-standard-coordinate-inner-products]]).

[L5] The Lebesgue integral is complex-linear on integrable functions, and for nonnegative Borel functions it is monotone and scalar-homogeneous; consequently, if a measurable $h$ satisfies $|h|\le c$ everywhere with $c\ge0$ and $\mu$ is a finite measure, then $\int|h|\,d\mu\le c\,\mu(G)<+\infty$, so $h$ is integrable with $\bigl|\int h\,d\mu\bigr|\le\int|h|\,d\mu$ ([[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[def-integrable-real-and-complex-functions-and-their-integrals]]).

## Proof

**Proof technique:** direct.

1.1 Fix a positive-definite Hermitian inner product $(\cdot,\cdot)_0$ on $V$ and a basis of $V$, and for $v,w\in V$ define $\langle v,w\rangle:=\int_G(\pi(g)v,\pi(g)w)_0\,d\mu(g)$. The integrand is a finite sum of products of the continuous matrix entries of $\pi$ with the coordinates of $w$, hence continuous on $G$, and it is bounded because $G$ is compact; so by [L5] the integral exists in $\mathbb C$ and the definition is unambiguous. [L1, L4, L5]

2.1 The form $\langle\cdot,\cdot\rangle$ is sesquilinear: for $a,b\in\mathbb C$ the identity $(\pi(g)(av+bv'),\pi(g)w)_0=a(\pi(g)v,\pi(g)w)_0+b(\pi(g)v',\pi(g)w)_0$ holds pointwise, and complex linearity of the integral [L5] turns it into $\langle av+bv',w\rangle=a\langle v,w\rangle+b\langle v',w\rangle$; conjugate symmetry follows pointwise from conjugate symmetry of $(\cdot,\cdot)_0$ together with reality of the integral of a real-valued function, and positive semidefiniteness follows because each integrand $(\pi(g)v,\pi(g)v)_0\ge0$ and the integral of a nonnegative function is nonnegative. [L5, step 1.1]

2.2 If $v\ne0$, the continuous function $\phi(g):=(\pi(g)v,\pi(g)v)_0$ is nonnegative and satisfies $\phi(e)=(v,v)_0>0$, so [L3] gives $\langle v,v\rangle=\int_G\phi\,d\mu>0$; the form is therefore positive definite. [L1, L3, step 1.1]

3.1 For every $h\in G$ and all $v,w\in V$ one has $\langle\pi(h)v,\pi(h)w\rangle=\int_G(\pi(g)\pi(h)v,\pi(g)\pi(h)w)_0\,d\mu(g)=\int_G(\pi(gh)v,\pi(gh)w)_0\,d\mu(g)=\langle v,w\rangle$, where the middle equality is the homomorphism property $\pi(g)\pi(h)=\pi(gh)$ of [L1] and the last equality is the right-translation invariance [L2] applied to $f(g)=(\pi(g)v,\pi(g)w)_0$. [L1, L2, step 2.2]

4.1 By steps 2.1, 2.2 and 3.1 the form $\langle\cdot,\cdot\rangle$ is a positive-definite Hermitian inner product preserved by every $\pi(h)$, so $\pi$ is unitary for it; the Axiom of Choice was used only through the existence and translation invariance of $\mu$ in [L2]. [A1, step 2.1, step 2.2, step 3.1] ∎
