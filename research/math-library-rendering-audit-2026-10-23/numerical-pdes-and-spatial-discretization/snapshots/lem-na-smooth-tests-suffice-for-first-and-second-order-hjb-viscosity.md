---
id: lem-na-smooth-tests-suffice-for-first-and-second-order-hjb-viscosity
kind: lemma
title: Smooth test functions suffice for the first- and second-order HJB viscosity notions
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps: [def-na-first-order-hjb-cauchy-problem, def-na-periodic-diagonal-controlled-diffusion-hjb-problem, def-na-second-order-parabolic-viscosity-solution, def-mollifier-family-generated-by-a-unit-mass-smooth-bump, lem-smooth-bump-between-concentric-euclidean-balls, thm-euclidean-semicontinuous-extreme-value-theorem, thm-heine-cantor-metric, thm-ftc-first-part, thm-continuous-implies-integrable]
justified_by: []
aliases: []
dependency_level: 4
proof_strategy: direct
axiom_base: No choice principle is used; maximizers are handled uniformly over their compact maximizing sets.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Hung Vinh Tran, Hamilton–Jacobi Equations: Theory and Applications, 2020 author manuscript"
      url: https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf
      locator: "Chapter 1 §§1–2, test-function and viscosity definitions, printed pp. 15–22."
    - title: "Michael G. Crandall, Hitoshi Ishii, and Pierre-Louis Lions, User's guide to viscosity solutions of second order partial differential equations"
      url: https://arxiv.org/pdf/math/9207212
      locator: "§2, test-function viscosity definitions and second-order parabolic conventions, printed pp. 9–13 and 49–50."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

For the continuous first-order Hamiltonian of
[[def-na-first-order-hjb-cauchy-problem]], requiring the subsolution or
supersolution inequality only for smooth ($C^\infty$) local test functions is
equivalent to requiring it for all $C^1$ tests. For the diagonal second-order
operator of [[def-na-periodic-diagonal-controlled-diffusion-hjb-problem]], the
same equivalence holds between smooth tests and all $C^{1,2}$ tests in
[[def-na-second-order-parabolic-viscosity-solution]]. The result is local in
space-time and applies to upper semicontinuous subsolutions and lower
semicontinuous supersolutions.

## Facts & Assumptions

**Given:** A local upper contact (or lower contact) of an upper
semicontinuous (or lower semicontinuous) function with a $C^1$ or $C^{1,2}$
test function, and a continuous PDE residual depending on the corresponding
first or second derivatives.

[F1] A compactly supported smooth bump can be chosen equal to one on a smaller
ball and between zero and one; scaling and dividing by its positive integral
gives a nonnegative unit-mass mollifier supported in any prescribed small ball
([[lem-smooth-bump-between-concentric-euclidean-balls]],
[[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]]).

[F2] Every continuous derivative is uniformly continuous on a compact metric
set ([[thm-heine-cantor-metric]]).

[F3] A finite-valued upper semicontinuous function on a compact Euclidean set
attains its maximum, and a lower semicontinuous function attains its minimum
([[thm-euclidean-semicontinuous-extreme-value-theorem]]).

[F4] The first-order HJB residual is $\phi_t+H(x,t,D\phi)$, while the
second-order residual is $\phi_t-\max_a\{\sum_j(\alpha_j^a\phi_{x_jx_j}+
b_j^a\phi_{x_j})+f^a\}$; both are continuous in the indicated derivatives
([[def-na-first-order-hjb-cauchy-problem]],
[[def-na-periodic-diagonal-controlled-diffusion-hjb-problem]],
[[def-na-second-order-parabolic-viscosity-solution]]).

[F5] If $g$ is continuous on a closed interval, its integral exists and the
integral from a fixed endpoint has derivative $g$
([[thm-continuous-implies-integrable]], [[thm-ftc-first-part]]).

## Proof

1.1 Start with an upper contact at $z_0=(x_0,t_0)$ for a $C^1$ or $C^{1,2}$ test $\phi$. On a closed Euclidean space-time ball $K$ contained in the interior cylinder, define $\widetilde\phi(z)=\phi(z)+\varepsilon(|x-x_0|^4+|t-t_0|^4)$ for $\varepsilon>0$. The added term and all derivatives relevant to the chosen test class vanish at $z_0$, while $u-\widetilde\phi$ is strictly smaller than $u(z_0)-\phi(z_0)$ at every other point of the contact neighborhood. Thus the original and strictified tests have the same PDE residual at $z_0$. [F4, algebra]

2.1 Choose a nonnegative unit-mass mollifier $\rho_\delta$ supported in the ball of radius $\delta$ from [F1], with $\delta$ small enough that its convolution samples only points in the contact neighborhood. Choose a smooth cutoff equal to one on a neighborhood of $K$ and supported inside that contact neighborhood using [F1], multiply $\widetilde\phi$ by it, and extend the product by zero. Convolve this compactly supported function with $\rho_\delta$ to obtain $\phi_\delta$. Rewriting the convolution with the smooth kernel as $\int g(y)\rho_\delta(z-y)\,dy$ shows by uniform difference quotients on the compact support that $\phi_\delta$ is $C^\infty$. On $K$ it coincides with convolution of $\widetilde\phi$ alone. For a $C^1$ function $g$, [F5] gives $$\frac{g(z+h e_j)-g(z)}h=\int_0^1\partial_jg(z+\theta h e_j)\,d\theta$$ when the indicated derivative exists. Uniform continuity of $\partial_jg$ on the compact neighborhood makes these difference quotients converge uniformly as $h\to0$. Integrating this uniform limit against $\rho_\delta$ proves $\partial_j(\rho_\delta*g)=\rho_\delta*\partial_jg$. For a second spatial derivative, apply this identity first to $g=\widetilde\phi$ and then to $g=\partial_j\widetilde\phi$; this uses only the continuous second derivative, not a third derivative. Apply it once for time and once for each first spatial derivative. Thus $D^\alpha\phi_\delta= \rho_\delta*D^\alpha\widetilde\phi$ for exactly the derivatives required in the $C^1$ or $C^{1,2}$ class. By [F2], $$\sup_{z\in K'}|D^\alpha\phi_\delta(z)-D^\alpha\widetilde\phi(z)| \le\sup_{z\in K',\ |y|\le\delta}|D^\alpha\widetilde\phi(z-y)-D^\alpha\widetilde\phi(z)|\longrightarrow0$$ on each smaller compact ball $K'$. Hence the approximants converge in $C^1$ or $C^{1,2}$, respectively. [F1, F2, F5, step 1.1, algebra]

3.1 The upper semicontinuous function $u-\phi_\delta$ attains a maximum on $K$ by [F3]. The strict gap from step 1.1 and uniform convergence from the preceding approximation step imply that, for every fixed neighborhood of $z_0$, all maximizing points lie in that neighborhood once $\delta$ is sufficiently small; the boundary of $K$ is excluded for the same reason. At any such maximizing point $z_\delta$, adding the constant $u(z_\delta)-\phi_\delta(z_\delta)$ makes $\phi_\delta$ a smooth upper test. Apply the assumed smooth-test inequality there. [F3, step 1.1, step 2.1]

4.1 The maximizing points in step 3.1 approach $z_0$ uniformly over the maximizing set, and the required derivatives of $\phi_\delta$ converge uniformly to those of $\widetilde\phi$ on $K'$ by step 2.1. Continuity of the PDE residual [F4] therefore lets the smooth-test inequalities pass to the residual of $\widetilde\phi$ at $z_0$, which equals that of $\phi$ by step 1.1. This proves the upper-test implication. For a lower contact, replace maxima by minima and reverse the inequalities; the same uniform gap and derivative convergence apply. Since smooth tests are themselves in both larger test classes, the reverse implications are immediate. [F3, F4, step 1.1, step 2.1, step 3.1] ∎