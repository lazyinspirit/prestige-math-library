---
id: lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization
kind: lemma
title: Euclidean Gaussian transform with the 2π normalization
deps: ["lem-l-one-fourier-transform-is-well-defined", "cor-c-one-change-of-variables-for-l-one-functions", "thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces", "thm-tonelli-theorem-for-sigma-finite-product-spaces", "thm-dominated-convergence", "thm-gaussian-integral", "thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line", "thm-differentiation-under-the-integral-sign", "lem-complex-integration-by-parts-on-intervals-and-decaying-lines", "thm-exponential-beats-every-polynomial", "thm-sine-and-cosine-derivatives", "cor-complex-exponential-cartesian-form-modulus-and-eulers-identity", "def-countable-choice"]
status: published
origin: pipeline
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Semyon Dyatlov, MIT 18.155 (2022)
      url: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf
      locator: Proposition 11.14, pp.123–124, first proof
---

## Statement

Assume countable choice. For $n\ge1$, $t>0$, and $\xi\in\mathbb R^n$,
$$\mathcal F(e^{-\pi t|x|^2})(\xi)=t^{-n/2}e^{-\pi|\xi|^2/t}.$$
Every polynomial times a positive real Gaussian is absolutely integrable.

## Facts & Assumptions

**Given:** $n\ge1$, $t>0$ and [[def-countable-choice]].

[F1] The real improper Gaussian integral equals $\sqrt\pi$ ([[thm-gaussian-integral]]).

[F2] Nonnegative convergent improper integrals agree with Lebesgue integrals under countable choice ([[thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line]]).

[F3] Exponential growth dominates each nonnegative integer power ([[thm-exponential-beats-every-polynomial]]).

[F4] Complex differentiation under the integral is valid under an integrable derivative majorant ([[thm-differentiation-under-the-integral-sign]]).

[F5] Complex integration by parts on the line holds for integrable products and vanishing product boundaries; its finite-interval FTC also holds ([[lem-complex-integration-by-parts-on-intervals-and-decaying-lines]]).

[F6] Absolutely integrable product integrals may be exchanged ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F7] The $C^1$ Lebesgue substitution formula uses the absolute determinant ([[cor-c-one-change-of-variables-for-l-one-functions]]).

[F8] Euler's formula and real trigonometric derivatives give $(e^{-2\pi ix\xi})'_\xi=-2\pi ix e^{-2\pi ix\xi}$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-sine-and-cosine-derivatives]]).

## Proof

1.1 For $c>0$ and integer $m\ge0$, F3 bounds $|x|^m e^{-cx^2/2}$ on the tails, and it is bounded on a compact middle interval by continuity. Thus $|x|^me^{-cx^2}\le C e^{-cx^2/2}$. F1, F2 on both half-lines (reflect the negative half), and F7 give integrability of these majorants and $\int e^{-\pi x^2}\,dx=1$. In several dimensions bound a polynomial by a finite sum of monomials and factor the Gaussian; successive nonnegative integration gives the product of the finite one-dimensional bounds. [F1, F2, F3, F6, F7, given]

2.1 Put $G(\xi)=\int e^{-\pi x^2}e^{-2\pi ix\xi}\,dx$ in dimension one. F4 applies on every frequency interval with derivative majorant $2\pi|x|e^{-\pi x^2}$ from step 1.1. Hence $G'(\xi)=-2\pi i\int xe^{-\pi x^2}e^{-2\pi ix\xi}\,dx$. Apply F5 to $u=e^{-\pi x^2}$ and $v=e^{-2\pi ix\xi}$: both derivative products are integrable by step 1.1 and $uv\to0$ at both ends. Since $u'=-2\pi xu$ and $v'=-2\pi i\xi v$, it follows that $\int xu v=-i\xi G(\xi)$, and therefore $G'=-2\pi\xi G$. [F4, F5, F8, step 1.1]

3.1 The product rule gives $(e^{\pi\xi^2}G(\xi))'=0$. Applying the finite-interval complex FTC to its real and imaginary parts shows this product is constant, equal to $G(0)=1$. Thus $G(\xi)=e^{-\pi\xi^2}$. F6 tensors this formula in $n$ coordinates; absolute integrability is supplied by step 1.1. Finally substitute $y=\sqrt t\,x$ using F7; the Jacobian is $t^{n/2}$ and the frequency becomes $\xi/\sqrt t$. This gives exactly the claimed formula. Countable choice is inherited from F2 and F7, and the argument uses neither later Schwartz theory nor a Fourier inversion theorem. [F2, F5, F6, F7, step 1.1, step 2.1] ∎
