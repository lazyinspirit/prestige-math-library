---
id: thm-l-two-fourier-inversion
kind: theorem
title: L2 Fourier inversion
deps: ["thm-plancherel", "cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space", "thm-l-one-l-two-agreement-of-fourier-transform", "prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets", "lem-complex-lp-completeness-density-and-inner-product", "def-countable-choice", "thm-dominated-convergence", "cor-c-one-change-of-variables-for-l-one-functions"]
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
    - title: Gerald Teschl, Topics in Real and Functional Analysis (2017)
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf
      locator: Equation (14.17), p.384
---

## Statement

Assume countable choice. On complex $L^2$, $\mathcal F_2^2f=Rf$, $Rf(x)=f(-x)$, and $\mathcal F_2^{-1}=R\mathcal F_2$. For $f\in L^2$, the truncated integrals $\int_{|x|\le R}f(x)e^{-2\pi ix\cdot\xi}\,dx$ converge in $L^2$ to $\mathcal F_2f$ as $R\to\infty$. The corresponding positive-sign integrals converge in $L^2$ to $\mathcal F_2^{-1}f$. No pointwise convergence is asserted.

## Facts & Assumptions

**Given:** [[def-countable-choice]].

[F1] Plancherel is unitary and obtained by Schwartz approximation ([[thm-plancherel]]).

[F2] On Schwartz space $\mathcal F^2=R$ ([[cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space]]).

[F3] Integral and norm transforms agree on the intersection ([[thm-l-one-l-two-agreement-of-fourier-transform]]).

[F4] Bounded measurable Euclidean sets have finite measure ([[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]).

[F5] Complex Cauchy–Schwarz holds ([[lem-complex-lp-completeness-density-and-inner-product]]).

[F6] Dominated convergence holds ([[thm-dominated-convergence]]).

[F7] The complex integral substitution formula applies to a C1 diffeomorphism ([[cor-c-one-change-of-variables-for-l-one-functions]]).

## Proof

**Proof technique:** direct.

1.1 Apply substitution to $|f|^2$ with the C1 diffeomorphism $x\mapsto-x$, whose absolute Jacobian is one. It gives $\|Rf\|_2=\|f\|_2$ and preserves null equivalence, so $R$ is an isometry on classes with $R^2=I$. For Schwartz approximants $u_j\to f$ supplied in [F1], [F2] gives $\mathcal F_2^2u_j=Ru_j$. Both sides converge in norm by [F1] and the reflection isometry, hence $\mathcal F_2^2f=Rf$. Associativity then gives $\mathcal F_2R=R\mathcal F_2$ and both inverse identities for $R\mathcal F_2$. [F1, F2, F7, given]

2.1 The closed ball $B_R=\{|x|\le R\}$ is measurable and finite-measure by [F4]. Thus for $f_R=\mathbf1_{B_R}f$, [F5] gives $\|f_R\|_1\le\lambda(B_R)^{1/2}\|f\|_2$, and $f_R\in L^2$ as well. [F6] applied to the explicit integer tails of $|f|^2$ gives $\|f_R-f\|_2\to0$ for all real $R\to\infty$ by monotonicity between integers. By [F3], its integral transform is $\mathcal F_2f_R$, and [F1] gives error norm $\|\mathcal F_2f_R-\mathcal F_2f\|_2=\|f_R-f\|_2\to0$. The positive-sign integral is the reflection of this integral transform; step 1.1 gives its limit $R\mathcal F_2f=\mathcal F_2^{-1}f$. [step 1.1, F1, F3, F4, F5, F6] ∎
