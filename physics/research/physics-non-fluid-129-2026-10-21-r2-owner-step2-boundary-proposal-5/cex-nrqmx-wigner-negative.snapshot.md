---
id: cex-nrqmx-wigner-negative
kind: counterexample
domain: mathematics
library: mathematics
title: A first excited oscillator state has negative Wigner values
status: draft
origin: pipeline
dependency_level: 2
deps:
  - def-nrqmx-weyl-symbol-wigner
  - thm-nrqmx-wigner-marginals
  - thm-nrqm-oscillator-hermite-recurrence
  - thm-nrqm-oscillator-oscillator-scaling-and-exact-realization
  - lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization
  - thm-dominated-convergence
  - def-countable-choice
dependency_roles:
  def-nrqmx-weyl-symbol-wigner: mathematical-premise
  thm-nrqmx-wigner-marginals: mathematical-premise
  thm-nrqm-oscillator-hermite-recurrence: mathematical-premise
  thm-nrqm-oscillator-oscillator-scaling-and-exact-realization: mathematical-premise
  lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Gianfausto Dell’Antonio, Lectures on the Mathematics of Quantum Mechanics, Volume II (2016)
      url: https://people.sissa.it/~gianfa/sito-web/%20Dell%27Antonio%20%20Mathematics%20of%20Quantum%20Mechanics%20II%20.pdf
      locator: Lecture 1, §1, Wigner distributions and oscillator states, printed pp. 15–20
    - title: Stéphane Nonnenmacher, Introduction to Semiclassical Analysis, lecture notes (2019)
      url: https://www.imo.universite-paris-saclay.fr/~stephane.nonnenmacher/enseign/Cours-Semiclassical-Analysis2019-lecture1-8.pdf
      locator: §3.3, Weyl quantization and Wigner representation, printed pp. 16–18
verification:
  precheck: pending
---

## Statement

Assume Countable Choice and $0<\epsilon\le1$. In the one-dimensional oscillator with $m=\omega=1$, $\hbar=\epsilon$, the normalized first excited state is
$$ \psi^\epsilon_1(x)=\sqrt{\frac{2}{\epsilon}}(\pi\epsilon)^{-1/4} x\,e^{-x^2/(2\epsilon)}. $$
Its Wigner function is
$$ W_\epsilon[\psi^\epsilon_1](x,\xi) =\frac1{\pi\epsilon} \left(\frac{2(x^2+\xi^2)}{\epsilon}-1\right) e^{-(x^2+\xi^2)/\epsilon}. $$
It is strictly negative on the disk $x^2+\xi^2<\epsilon/2$. Consequently the assertion that every normalized Schwartz vector has a nonnegative Wigner function is false.

## Statement references

[[thm-nrqmx-wigner-marginals]]

[[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]]

## Facts & Assumptions

**Given:** Countable Choice, $0<\epsilon\le1$, and the one-dimensional oscillator conventions of the Statement.

[A1] Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] $H_1(y)=2y$, $g_0(y)=\pi^{-1/4}e^{-y^2/2}$, and $g_1=H_1g_0/\sqrt2=\sqrt2\,y g_0$; scaling by $\ell=\sqrt\epsilon$ gives the displayed normalized oscillator state ([[thm-nrqm-oscillator-hermite-recurrence]], [[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]]).

[F2] The Wigner integral uses the normalization and Fourier sign in [[def-nrqmx-weyl-symbol-wigner]]; for $u\in\mathcal S$ it is real and integrable ([[thm-nrqmx-wigner-marginals]]).

[F3] $G_\epsilon(\xi):=\int e^{-y^2/(4\epsilon)}e^{-iy\xi/\epsilon}dy
=2\sqrt{\pi\epsilon}\,e^{-\xi^2/\epsilon}$ ([[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]]).

[F4] Differentiation under this Gaussian integral is valid because the first two differentiated integrands are dominated by integrable polynomial multiples of $e^{-y^2/(4\epsilon)}$; dominated convergence justifies the limit ([[thm-dominated-convergence]]).

## Proof
**Given:** The data of the Statement and [A1], [F1]–[F4].

1.1 By [F1] and the oscillator scaling $\ell=\sqrt\epsilon$, the first excited state is $$ \ell^{-1/2}g_1(x/\ell) =\epsilon^{-1/4}\sqrt2\,\frac{x}{\sqrt\epsilon}\,\pi^{-1/4} e^{-x^2/(2\epsilon)} =\sqrt{\frac2\epsilon}(\pi\epsilon)^{-1/4} x e^{-x^2/(2\epsilon)}. $$ The oscillator realization makes it a normalized Schwartz vector. [A1, F1, algebra]

1.2 Write $A^2=2\epsilon^{-1}(\pi\epsilon)^{-1/2}$. The product in the Wigner integrand is $$ \psi^\epsilon_1(x+y/2)\overline{\psi^\epsilon_1(x-y/2)} =A^2\left(x^2-\frac{y^2}{4}\right) e^{-x^2/\epsilon-y^2/(4\epsilon)}. $$ By [F4], $G_\epsilon''(\xi)=\int(-y^2/\epsilon^2)e^{-y^2/(4\epsilon)}e^{-iy\xi/\epsilon}dy$. Differentiating the explicit Gaussian in [F3] gives $$ \int y^2e^{-y^2/(4\epsilon)}e^{-iy\xi/\epsilon}dy =-\epsilon^2G_\epsilon''(\xi) =(2\epsilon-4\xi^2)G_\epsilon(\xi). $$ Substitution in the Wigner definition [F2] therefore yields $$ W_\epsilon[\psi^\epsilon_1](x,\xi) =(2\pi\epsilon)^{-1}A^2e^{-x^2/\epsilon} \left(x^2G_\epsilon(\xi)-\frac14(2\epsilon-4\xi^2)G_\epsilon(\xi)\right) =\frac1{\pi\epsilon} \left(\frac{2(x^2+\xi^2)}{\epsilon}-1\right) e^{-(x^2+\xi^2)/\epsilon}. $$ Every factor and sign follows from the displayed negative-sign Fourier convention. [F1, F2, F3, F4, algebra]

2.1 The exponential and the prefactor $1/(\pi\epsilon)$ are strictly positive. Thus $W_\epsilon[\psi^\epsilon_1](x,\xi)<0$ exactly when $2(x^2+\xi^2)/\epsilon-1<0$, which is the disk $x^2+\xi^2<\epsilon/2$. This normalized Schwartz vector refutes universal Wigner nonnegativity. [step 1.1, step 1.2, algebra] ∎

