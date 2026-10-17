---
id: lem-csm-gaussian-mark-moments
kind: lemma
title: Gaussian mark normalization, moments, and exponential controls
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps:
  - thm-dominated-convergence
  - thm-gaussian-integral
  - thm-integration-by-parts
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
dependency_roles:
  thm-dominated-convergence: mathematical-premise
  thm-gaussian-integral: mathematical-premise
  thm-integration-by-parts: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, complete course text"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
      locator: "§4.2, printed pp.192–198 / PDF viewer pp.220–226, complete classical phase-space measure and Gaussian momentum factors."
    - title: "David Tong, Statistical Physics, complete author-hosted lecture notes"
      url: "https://davidtong.org/teaching/statistical-physics/statmechhtml/S1"
      locator: "§§1.2–1.3, canonical phase-space density and Maxwell momentum law."
---

## Statement

Let $d\ge1$, mass $m>0$ in kilograms, reference momentum $p_*>0$ in kg m s$^{-1}$, energy scale $E_0>0$ in joules, and dimensionless inverse temperature $b>0$. On $\mathbb R^d$ use $r(dp)=dp/p_*^d$ and $K(p)=|p|^2/(2mE_0)$. Then
$$\kappa_b:=\int e^{-bK(p)}r(dp)=\left(\frac{2\pi mE_0}{bp_*^2}\right)^{d/2},\qquad \nu_b(dp)=\kappa_b^{-1}e^{-bK(p)}r(dp)$$
is a probability with $E_{\nu_b}p_i=0$, $E_{\nu_b}p_ip_j=(mE_0/b)\delta_{ij}$, and $E_{\nu_b}K=d/(2b)$. For each $g$ among $K,p_i,p_ip_j$, and tilt parameter $t$ in reciprocal units to $g$, the centered logarithmic moment-generating function
$$c_g(t):=\log E_{\nu_b}\exp(t(g-E_{\nu_b}g))$$
is finite and twice continuously differentiable on a neighborhood of $0$, with $c_g(0)=c'_g(0)=0$. In particular $c_g(t)=O(t^2)$ as $t\to0$. Here $p_i$ has momentum units and $K$ is energy in units of $E_0$. For the optional physical-temperature parametrization, fix a positive scalar conversion parameter $k_B$ with units J K$^{-1}$ and take $T>0$ in kelvin; then $b=E_0/(k_BT)$.

## Facts & Assumptions

**Given:** The constants and dimension specified above.

[F1] [[thm-gaussian-integral]]: $\int_{\mathbb R}e^{-x^2}dx=\sqrt\pi$.

[F2] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative product-measurable functions can be integrated by iterated integrals on the sigma-finite product reference.

[F3] [[thm-integration-by-parts]]: one-dimensional integration by parts holds for continuously differentiable functions on bounded intervals.

[F4] [[thm-dominated-convergence]]: a pointwise convergent measurable family dominated by an integrable function has convergent integrals.

## Proof

**Given:** The constants, reference, and suppliers in Facts & Assumptions.

1.1 Substitute $u=\sqrt{b/(2mE_0)}\,p$ in each one-dimensional integral; [F1] gives
$$\int_{\mathbb R}e^{-bp^2/(2mE_0)}dp=\sqrt{2\pi mE_0/b}.$$
Tonelli [F2] factors the nonnegative d-dimensional integral into d such terms. Dividing by p_*^d gives κ_b, so ν_b has mass one. [F1, F2, algebra]

1.2 For g=K or g=p_i p_j, use |p_i p_j|≤(p_i²+p_j²)/2 and K=|p|²/(2mE_0). For g=p_i, completing a square gives |t p_i|≤a p_i²/2+t²/(2a) for any a>0. For sufficiently small |t| these bounds dominate the unnormalized MGF integrands and their first two t-derivatives by a polynomial times exp(-a_0|p|²), for some a_0>0. That majorant is integrable: each polynomial factor is bounded after absorbing half the Gaussian exponent and the remaining Gaussian integral is finite by [F1] and [F2]. Dominated convergence [F4] makes each MGF twice continuously differentiable near zero; positivity makes its logarithm twice continuously differentiable as well. [F1, F2, F4, algebra]

2.1 Oddness gives E p_i=0 and E p_i p_j=0 for i≠j. On [-R,R], integration by parts [F3] with u(p)=p and v'(p)=p exp(-ap²), where a=b/(2mE_0), gives
$$\int_{-R}^R p^2e^{-ap^2}dp=\frac{1}{2a}\int_{-R}^R e^{-ap^2}dp-\frac{R e^{-aR^2}}{a}.$$
The boundary term tends to zero and both integrals converge by Gaussian domination. Divide by the normalization from step 1.1 and let R→∞ to obtain E p_i²=1/(2a)=mE_0/b. Therefore E K=Σ_i E p_i²/(2mE_0)=d/(2b). [F1, F3, step 1.1, algebra]

3.1 At t=0 the centered log MGF is zero; its derivative is E(g-Eg)=0, using the means in step 2.1. Its second derivative is finite and continuous by step 1.2. Taylor's theorem at zero then gives c_g(t)=c_g''(ξ_t)t²/2=O(t²) near zero. [step 1.2, step 2.1, algebra] ∎
