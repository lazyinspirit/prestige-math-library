---
id: pthm-tgrx-hydrostatic-variation
kind: physics-theorem
title: Hydrostatic susceptibility and Tolman variables
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: physics
library: physics
dependency_level: 2
deps:
  - post-tgrx-hydrostatic-effective-model
  - def-tgrx-static-hydrostatic-data
  - def-riemannian-volume-density
dependency_roles:
  post-tgrx-hydrostatic-effective-model: physical-assumption
  def-tgrx-static-hydrostatic-data: formulation-prerequisite
  def-riemannian-volume-density: mathematical-premise
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

[F2] [[def-tgrx-static-hydrostatic-data]]: $N$ is smooth and strictly positive, $dV_h$ is the Riemannian volume density on compact $\Sigma$, and $p$ is $C^2$ on an open domain containing the local profiles.

[F3] [[def-riemannian-volume-density]]: the Riemannian density has positive coordinate coefficient $\sqrt{\det(h_{ij})}$ and is integrated independently of orientation.

[A1] The pointwise convexity condition $p_{\mu\mu}(T_0/N(x),(\mu_0-q\Phi(x))/N(x))\ge0$ holds for every $x\in\Sigma$ when asserting the nonnegative conclusion.

## Proof

1.1 Choose a closed interval $I_0\subset U$ whose interior contains $\mu_0$, and for $r\in I_0$ define $f(r,x)=N(x)p(T_0/N(x),(r-q\Phi(x))/N(x))/(k_BT_0)$. The image of $I_0\times\Sigma$ in $D$ is compact, so $p_\mu$ and $p_{\mu\mu}$ are bounded and uniformly continuous there. Since $N$ is continuous and positive on compact $\Sigma$, its image has a minimum $N_{\min}>0$; also $dV_h(\Sigma)<\infty$. The one-variable mean value theorem and uniform continuity of $\partial_r f$ make the difference quotients of $f$ converge uniformly in $x$ to $\partial_r f=p_\mu(T_0/N,(r-q\Phi)/N)/(k_BT_0)$. For these quotients $q_h$, the estimate $|\int_\Sigma q_h\,dV_h-\int_\Sigma\partial_r f\,dV_h|\le dV_h(\Sigma)\sup_x|q_h(x)-\partial_r f(r,x)|$ tends to zero. Thus differentiation passes through the finite-volume integral and yields $\partial_{\mu_0}W_{\rm hs}=\int_\Sigma p_\mu/(k_BT_0)\,dV_h$. [given, F1, F2, algebra]

2.1 Applying the same uniform difference-quotient argument to $\partial_r f$, whose derivative is $\partial_r^2 f=p_{\mu\mu}(T_0/N,(r-q\Phi)/N)/(N k_BT_0)$, gives $\partial_{\mu_0}^2W_{\rm hs}=\int_\Sigma p_{\mu\mu}/(N k_BT_0)\,dV_h$. The factors $N$ cancel once in the first derivative, while the second derivative retains the positive factor $1/N$. [step 1.1, F1, F2, algebra]

3.1 By [A1], each integrand value in the second formula is nonnegative because $N(x)>0$, $k_B>0$, and $T_0>0$. By [F3], the Riemannian volume density is positive, so its integral is nonnegative and therefore $\chi_{\rm hs}\ge0$. [step 2.1, F3, A1, algebra] ∎
