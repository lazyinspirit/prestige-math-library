---
id: thm-fourier-transform-converts-convolution-to-products
kind: theorem
title: Fourier transform turns L1 convolution into multiplication
deps: ["lem-l-one-fourier-transform-is-well-defined", "thm-fourier-translation-modulation-dilation-and-reflection-laws", "def-countable-choice", "thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces", "thm-tonelli-theorem-for-sigma-finite-product-spaces", "lem-borel-representatives-make-the-convolution-integrand-borel-measurable", "lem-convolution-is-independent-of-the-chosen-borel-representatives", "thm-l-one-convolution-exists-almost-everywhere-and-obeys-the-l-one-bound", "lem-complex-translation-and-approximate-identity-interfaces", "thm-completion-measurable-functions-have-base-measurable-representatives"]
status: published
origin: pipeline
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Semyon Dyatlov, MIT 18.155 (2022)
      url: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf
      locator: Proposition 11.10, pp.122–123
---

## Statement

Assume countable choice. If $f,g\in L^1(\mathbb R^n;\mathbb C)$, $n\ge1$, then $\widehat{f*g}(\xi)=\widehat f(\xi)\widehat g(\xi)$ for every $\xi\in\mathbb R^n$.

## Facts & Assumptions

**Given:** The stated functions and [[def-countable-choice]].

[F1] The complex convolution interface supplies representative-independent $L^1$ convolution and translation isometries, under countable choice ([[lem-complex-translation-and-approximate-identity-interfaces]]).

[F2] The product $f(x-y)g(y)$ of Borel representatives is jointly Borel measurable ([[lem-borel-representatives-make-the-convolution-integrand-borel-measurable]]).

[F3] Tonelli equates nonnegative iterated integrals on sigma-finite spaces ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F4] Fubini equates complex iterated integrals when the product integral of the modulus is finite ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F5] Translation obeys $\widehat{\tau_yf}(\xi)=e^{-2\pi iy\cdot\xi}\widehat f(\xi)$ ([[thm-fourier-translation-modulation-dilation-and-reflection-laws]]).

[F6] Null-equivalent $L^1$ representatives have the same transform at every frequency ([[lem-l-one-fourier-transform-is-well-defined]]).

[F7] Under countable choice, a completion-measurable real function has a base-measurable almost-everywhere equal representative ([[thm-completion-measurable-functions-have-base-measurable-representatives]]).

## Proof

1.1 Apply [F7] to the real and imaginary components of $f$ and $g$, changing infinite values on their null sets to zero, to obtain finite Borel representatives. Euclidean Lebesgue spaces are sigma-finite (the boxes $[-k,k]^n$ have finite volume and cover them). F2 gives product measurability. Translation invariance and Tonelli give $\iint |f(x-y)g(y)|\,dx\,dy=\int\|f\|_1|g(y)|\,dy=\|f\|_1\|g\|_1<\infty$. Thus the exponential-weighted integrand is also absolutely integrable at every fixed frequency, with this same bound. [F1, F2, F3, F7, given]

2.1 Fubini now permits exchanging the integrals in the transform of the convolution representative. The inner $x$ integral is the translation transform from F5, giving $\widehat{f*g}(\xi)=\int g(y)e^{-2\pi iy\cdot\xi}\widehat f(\xi)\,dy=\widehat f(\xi)\widehat g(\xi)$. The convolution is defined arbitrarily on its null exceptional set; F6 makes that choice irrelevant at every frequency. This proves the asserted equality, including when either input is zero. [F1, F4, F5, F6, step 1.1] ∎
