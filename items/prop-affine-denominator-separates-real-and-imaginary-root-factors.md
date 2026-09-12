---
id: prop-affine-denominator-separates-real-and-imaginary-root-factors
kind: proposition
title: Affine denominator separates real and imaginary root factors
deps: ["thm-kac-moody-denominator-identity", "def-null-root-central-coroot-and-affine-level", "prop-roots-of-an-untwisted-affine-lie-algebra", "thm-loop-and-affine-gcm-presentations-are-isomorphic", "lem-the-affine-simple-root-alpha-zero-is-delta-minus-the-highest-root", "lem-finite-weyl-positive-roots-and-simple-reflections"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Kleshchev, Sections 6.1-6.3 and 10.3
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Chapter 12
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

For the untwisted affine algebra of a finite simple Lie algebra with positive roots $\Phi_0^+$ and rank $\ell$, put $q=e^{-\delta}$. Its normalized denominator is
$$P=\prod_{n\ge1}(1-q^n)^\ell\prod_{\alpha\in\Phi_0^+}\left(\prod_{n\ge0}(1-e^{-\alpha}q^n)\prod_{n\ge1}(1-e^{\alpha}q^n)\right).$$
The first product is imaginary, of multiplicity $\ell$ per root; both real families have multiplicity one. The shifted denominator is $e^\rho P$.

## Facts & Assumptions

**Given:** The normalized untwisted loop realization and its standard positive simple roots.

[F1] The denominator identity uses actual root multiplicities by [[thm-kac-moody-denominator-identity]].

[F2] The null root convention is [[def-null-root-central-coroot-and-affine-level]].

[F3] [[prop-roots-of-an-untwisted-affine-lie-algebra]] gives the root list, multiplicities and root spaces.

[F4] [[thm-loop-and-affine-gcm-presentations-are-isomorphic]] identifies these with the GCM roots.

[F5] The highest root satisfies $\theta-\beta\in Q_+$ for every finite root $\beta$, and $\delta=\alpha_0+\theta$, by [[lem-the-affine-simple-root-alpha-zero-is-delta-minus-the-highest-root]].

[F6] Every finite root has simple coordinates of one sign by [[lem-finite-weyl-positive-roots-and-simple-reflections]].

## Proof

1.1 F3 and F4 give real roots $\alpha+n\delta$ for every finite root $\alpha$ and integer $n$, with multiplicity one. Their positive members are those with $n>0$, together with $n=0$ and $\alpha\in\Phi_0^+$. For $n>0$ and $\alpha\in\Phi_0^+$, F5 gives $$\alpha+n\delta=n\alpha_0+(n\theta+\alpha)\in Q_+.$$ For $\alpha=-\beta$ with $\beta\in\Phi_0^+$, it gives $$-\beta+n\delta=n\alpha_0+(n-1)\theta+(\theta-\beta)\in Q_+.$$ These exhaust the two finite-root signs by F6. Negation handles $n<0$, while $n=0$ has the finite-root sign. Imaginary positive roots are exactly $n\delta$, $n\ge1$, because $\delta=\alpha_0+\theta\in Q_+$; F3 gives their multiplicity $\ell$. The value $n=0$ gives Cartan weight zero and is not a root. [F2, F3, F4, F5, F6, algebra]

2.1 Split the finite roots in step 1.1 into $\alpha\in\Phi_0^+$ and their negatives. Their exponentials are respectively $e^{-\alpha}q^n$ for $n\ge0$ and $e^{\alpha}q^n$ for $n\ge1$. Imaginary roots contribute $q^n$ for $n\ge1$. Inserting these disjoint exhaustive families, with their multiplicities, in F1's product gives the displayed expression. No root is lost or repeated, and regrouping is permitted because each coefficient has only finitely many contributing root factors, as in F1. Rank one gives exponent one on the imaginary product, whereas larger rank retains $\ell$. This is a formal reindexing with no analytic convergence or AC assumption. [F1, step 1.1, algebra] ∎
