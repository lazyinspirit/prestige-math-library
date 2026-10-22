---
id: pthm-tgrx-hydrostatic-variation
kind: physics-theorem
title: Hydrostatic susceptibility and Tolman variables
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: physics
library: physics
dependency_level: 2
deps:
  - post-tgrx-hydrostatic-effective-model
  - def-tgrx-static-hydrostatic-data
  - def-riemannian-volume-density
  - prop-riemannian-volume-is-the-radon-measure-of-the-riemannian-density
  - thm-density-measure-integration-agrees-with-smooth-density-integration
  - def-countable-choice
  - thm-heine-borel-rn
  - thm-finite-products-of-compact-spaces
  - thm-compactness-under-continuous-maps
  - thm-heine-cantor-metric
  - cor-mean-value-theorem
  - thm-chain-rule-for-total-derivatives
dependency_roles:
  post-tgrx-hydrostatic-effective-model: physical-assumption
  def-tgrx-static-hydrostatic-data: formulation-prerequisite
  def-riemannian-volume-density: mathematical-premise
  prop-riemannian-volume-is-the-radon-measure-of-the-riemannian-density: mathematical-premise
  thm-density-measure-integration-agrees-with-smooth-density-integration: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-finite-products-of-compact-spaces: mathematical-premise
  thm-compactness-under-continuous-maps: mathematical-premise
  thm-heine-cantor-metric: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
justified_by: []
physical_scope: "Conditional derivative identity and nonnegativity of the model chemical-potential response in the compact smooth static-background functional; no trace, microscopic existence, convergence, or empirical conclusion."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Nabamita Banerjee et al., Constraints on Fluid Dynamics from Equilibrium Partition Functions, arXiv:1203.3544v2, §§1.1, 2.3.1, and 2.5 (2012)"
      url: https://arxiv.org/pdf/1203.3544
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Fix the background data $\Sigma,h,N,\Phi,q,T_0,p$ of the adopted compact hydrostatic functional and vary only its chemical-potential parameter $\mu_0$ inside the open interval $U$ specified by that model. The local temperature profile $T=T_0/N$ has constant Killing-normalized value $NT=T_0$; this is the model's Tolman profile. Write $p_\mu$ and $p_{\mu\mu}$ for the first and second derivatives of the pressure function with respect to its chemical-potential argument, evaluated at $(T_0/N(x),(\mu_0-q\Phi(x))/N(x))$. Then

$$\partial_{\mu_0}W_{\rm hs}=\int_\Sigma\frac{p_\mu(T_0/N,(\mu_0-q\Phi)/N)}{k_BT_0}\,dV_h,\qquad \partial_{\mu_0}^2W_{\rm hs}=\int_\Sigma\frac{p_{\mu\mu}(T_0/N,(\mu_0-q\Phi)/N)}{N k_BT_0}\,dV_h.$$

The model chemical-potential susceptibility $\chi_{\rm hs}:=\partial_{\mu_0}^2W_{\rm hs}$ is nonnegative if $p_{\mu\mu}(T_0/N(x),(\mu_0-q\Phi(x))/N(x))\ge0$ for every $x\in\Sigma$. With the stated SI conventions, $W_{\rm hs}$ is dimensionless and $\chi_{\rm hs}$ has units $\mathrm{J^{-2}}$. This is a deduction inside the adopted effective model, not an empirical charge-fluctuation claim.

## Statement references

[[post-tgrx-hydrostatic-effective-model]]

[[def-tgrx-static-hydrostatic-data]]

[Nabamita Banerjee et al., *Constraints on Fluid Dynamics from Equilibrium Partition Functions*](https://arxiv.org/pdf/1203.3544)

[Pavel Kovtun, *Lectures on hydrodynamic fluctuations in relativistic theories*](https://arxiv.org/pdf/1205.5040)

## Facts & Assumptions

**Given:** A compact nonempty smooth spatial manifold $\Sigma$ without boundary, smooth $h,N,\Phi$, $N>0$, fixed $q\in\mathbb R$ and $T_0>0$, $p\in C^2(D)$, and an open interval $U$ around $\mu_0$ on which all local $(T,\mu)$ profiles remain in $D$; hold these background inputs fixed while varying $\mu_0$.

[F1] [[post-tgrx-hydrostatic-effective-model]]: $W_{\rm hs}=(k_BT_0)^{-1}\int_\Sigma Np(T_0/N,(\mu_0-q\Phi)/N)\,dV_h$ on the specified parameter interval, with the background held fixed.

[F2] [[def-tgrx-static-hydrostatic-data]]: $N$ is smooth and strictly positive, $dV_h$ is the Riemannian volume density on compact $\Sigma$ with $\operatorname{vol}_h(\Sigma)<\infty$, and $p$ is $C^2$ on an open domain containing the local profiles.

[F3] [[def-riemannian-volume-density]]: in local coordinates $dV_h=\sqrt{\det(h_{ij})}\,|dx^1dx^2dx^3|$ and its coordinate coefficient is positive.

[F4] [[prop-riemannian-volume-is-the-radon-measure-of-the-riemannian-density]] associates the Borel measure $\operatorname{vol}_h$ to $dV_h$. Under $\mathrm{AC}_\omega$ [A2], [[thm-density-measure-integration-agrees-with-smooth-density-integration]] defines integration of Borel functions against this measure and gives linearity and order preservation for integrable functions. Since $\operatorname{vol}_h(\Sigma)<\infty$, every bounded Borel $g:\Sigma\to\mathbb R$ is integrable and $|\int_\Sigma g\,dV_h|\le\|g\|_\infty\operatorname{vol}_h(\Sigma)$.

[F5] A closed bounded interval in $\mathbb R$ is compact ([[thm-heine-borel-rn]], claim 3), and a finite product of compact spaces with the product topology is compact ([[thm-finite-products-of-compact-spaces]]).

[F6] A continuous image of a compact space is compact ([[thm-compactness-under-continuous-maps]], claim 1).

[F7] A continuous function from a compact metric space to a metric space is uniformly continuous ([[thm-heine-cantor-metric]]).

[F8] For a real function continuous on a closed interval and differentiable in its interior, the mean value theorem gives a point where its derivative equals the interval difference quotient ([[cor-mean-value-theorem]]).

[F10] The chain rule for total derivatives applies to the profile map $r\mapsto G(r,x)$ and the $C^2$ pressure function $p$ ([[thm-chain-rule-for-total-derivatives]]).

[F11] Continuous real-valued functions on a nonempty compact space attain their extrema ([[thm-compactness-under-continuous-maps]], claim 2).

[A1] The pointwise convexity condition $p_{\mu\mu}(T_0/N(x),(\mu_0-q\Phi(x))/N(x))\ge0$ holds for every $x\in\Sigma$ when asserting the nonnegative conclusion.

[A2] Adopt $\mathrm{AC}_\omega$ as defined in [[def-countable-choice]], the explicit assumption of the intrinsic density-integration supplier [F4].

[A3] The adopted SI Boltzmann constant satisfies $k_B>0$.

## Proof

1.1 Choose a nondegenerate bounded closed interval $I_0\subset U$ whose interior contains $\mu_0$. It is compact by [F5], so $I_0\times\Sigma$ is compact by [F5]. Define $G(r,x)=(T_0/N(x),(r-q\Phi(x))/N(x))$. This map is continuous and takes values in $D$, so its image $K\subset D$ is compact by [F6]. With the Euclidean subspace metric, K is a compact metric space. Since $p\in C^2(D)$, $p_\mu$ and $p_{\mu\mu}$ are continuous and bounded on $K$ by [F11], and uniformly continuous there by [F7]. Also $N$ attains a minimum $N_{\min}>0$ on compact $\Sigma$ by [F11]. For $r\in I_0$ put $f(r,x)=N(x)p(G(r,x))/(k_BT_0)$. For sufficiently small $h$ with $r+h\in I_0$, the mean value theorem [F8] gives a point $r_h(x)$ between $r$ and $r+h$ with $(f(r+h,x)-f(r,x))/h=\partial_r f(r_h(x),x)$. The profiles satisfy $|G(r_h(x),x)-G(r,x)|\le |h|/N_{\min}$ uniformly in $x$, so uniform continuity of $p_\mu$ makes these quotients converge uniformly to $\partial_r f(r,x)=p_\mu(G(r,x))/(k_BT_0)$ by [F10]. By [F4] and finite total volume [F2], the difference between the integrals is bounded by $\operatorname{vol}_h(\Sigma)\sup_x|(f(r+h,x)-f(r,x))/h-\partial_r f(r,x)|$, which tends to zero. Hence differentiation passes through the finite-volume integral and yields $\partial_{\mu_0}W_{\rm hs}=\int_\Sigma p_\mu/(k_BT_0)\,dV_h$. [given, F1, F2, F4, F5, F6, F7, F8, F10, F11, A2, algebra]

2.1 Differentiating $\partial_r f=p_\mu(G)/(k_BT_0)$ by [F10] gives $\partial_r^2 f=p_{\mu\mu}(G)/(N k_BT_0)$. The same mean value argument, now using uniform continuity of $p_{\mu\mu}$ on $K$ and $1/N\le1/N_{\min}$, shows that the difference quotients of $\partial_r f$ converge uniformly in $x$ to $\partial_r^2 f$. Applying the density-integral estimate from [F4] therefore gives $\partial_{\mu_0}^2W_{\rm hs}=\int_\Sigma p_{\mu\mu}/(N k_BT_0)\,dV_h$. [step 1.1, F1, F2, F4, F7, F8, F10, A2, algebra]

3.1 By [A1], each integrand value in the second formula is nonnegative because $N(x)>0$, $k_B>0$ by [A3], and $T_0>0$. By [F3] the Riemannian density is positive, and [F4] makes its integral nonnegative; hence $\chi_{\rm hs}\ge0$. [step 2.1, F3, F4, A1, A2, A3, algebra] ∎
