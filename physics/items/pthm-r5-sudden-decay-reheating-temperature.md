---
id: pthm-r5-sudden-decay-reheating-temperature
kind: physics-theorem
title: "Reheating temperature in a sudden-decay modulus model"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
dependency_level: 2
deps:
  - def-r5-cosmology-4d-scalar-eft-data
  - post-r5-cosmology-4d-scalar-eft-model
  - post-gr-field-and-matter-assumptions
  - def-gr-flrw-friedmann-system
  - def-gr-flrw-model-data
  - lem-gr-flrw-ricci-and-einstein-tensors
  - def-gr-scalar-field-matter-model
  - prop-gr-scalar-field-stress-energy-conservation
  - def-gr-perfect-fluid-matter-model
dependency_roles:
  def-r5-cosmology-4d-scalar-eft-data: formulation-prerequisite
  post-r5-cosmology-4d-scalar-eft-model: physical-assumption
  post-gr-field-and-matter-assumptions: physical-assumption
  def-gr-flrw-friedmann-system: mathematical-premise
  def-gr-flrw-model-data: mathematical-premise
  lem-gr-flrw-ricci-and-einstein-tensors: mathematical-premise
  def-gr-scalar-field-matter-model: mathematical-premise
  prop-gr-scalar-field-stress-energy-conservation: mathematical-premise
  def-gr-perfect-fluid-matter-model: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
physical_scope: "An exact algebraic deduction inside the explicitly defined instantaneous-decay prescription: a homogeneous quadratic scalar and a comoving radiation fluid with p_r=rho_r/3 supply the total pre-decay stress, the flat-FLRW Einstein equation holds with zero cosmological term, and all pre-decay energy is instantaneously transferred to an ideal thermal bath at H=Gamma. It does not derive a modulus decay width, thermalization, a continuous-decay correction, a BBN threshold, or a string compactification."
sources:
  references:
    - title: "M. Cicoli, J. P. Conlon, A. Maharana, S. Parameswaran, F. Quevedo and I. Zavala, String Cosmology: from the Early Universe to Today, arXiv:2303.04819v2"
      url: "https://arxiv.org/pdf/2303.04819v2"
      locator: "Complete review. Read §5.1, PDF pp. 81–83, for the instantaneous-decay approximation, radiation density and reheating temperature; read §5.5.1, PDF pp. 92–94, for moduli domination and the conditional hard/soft cosmological moduli problem. The review's illustrative H_dec=Gamma/2 convention is not substituted for the H(t_d)=Gamma convention explicitly adopted here."
    - title: "Daniel Baumann, TASI Lectures on Inflation, arXiv:0907.5424v2"
      url: "https://arxiv.org/pdf/0907.5424"
      locator: "Complete 159-page lecture-note PDF. Read Lecture 1 §6.4, PDF p. 35 (zero-based page index 34; printed p. 35), Eqs. (91)–(92) and accompanying text: coherent scalar oscillations are matter-like, while the decay rate is model-dependent and the lecture does not derive reheating microphysics."
---

## Statement

Use Einstein-frame natural units $\hbar=c=k_B=1$ and the inherited FLRW coordinate convention of [[def-gr-flrw-model-data]]: $t$ and $a$ have length dimension, with dimensionless spatial coordinates and $\gamma$. Thus $[H]=[m]=[M_P]=[\Gamma]=[T]=\mathrm{mass}$, $[\rho_\phi]=[\rho_r]=[p_r]=\mathrm{mass}^4$, and $g_*$ is dimensionless. Let $J\subseteq\mathbb R$ be a nonempty open cosmic-time interval and take a spatially flat FLRW model datum from the FLRW model-data definition `def-gr-flrw-model-data`, with $M=J\times\Sigma$, $a\in C^\infty(J,(0,\infty))$, metric $g=-dt^2+a(t)^2\gamma$ and $H=\dot a/a$. Write $\pi_J:M\to J$ for the first-factor projection; in these units the smooth comoving unit timelike vector field is $n=\partial_t$. Let $M_P=(8\pi G_N)^{-1/2}>0$ be the reduced four-dimensional Planck mass and let $\Gamma>0$ be a constant decay rate of mass dimension one. Let $\phi\in C^\infty(J,\mathbb R)$ be a scalar time profile and set the spacetime scalar to $\Phi:=\phi\circ\pi_J$, so homogeneity means that $\Phi$ is independent of $x\in\Sigma$. In the one-field convention of the scalar EFT and scalar-field matter definitions (`def-r5-cosmology-4d-scalar-eft-data` and `def-gr-scalar-field-matter-model`), take target metric $G_{11}=1$, scalar coupling $K=1$, and constant $m>0$ of mass dimension one, with potential $V(\Phi)=m^2\Phi^2/2$, and comoving density profile $\rho_\phi(t)=(\dot\phi(t)^2+m^2\phi(t)^2)/2$. For the pre-decay radiation component, choose smooth profiles $\widetilde\rho_r,\widetilde p_r\in C^\infty(J,\mathbb R)$ and define the perfect-fluid fields on $M$ by $\rho_r=\widetilde\rho_r\circ\pi_J$ and $p_r=\widetilde p_r\circ\pi_J$. These factorization identities specify homogeneity; use the same comoving velocity field $n=\partial_t$ in the perfect-fluid matter model, so $T_r^{ab}=(\rho_r+p_r)n^an^b+p_rg^{ab}$. Here radiation means $p_r=\rho_r/3$ with $\rho_r\ge0$; its rest energy density is $\rho_r$. This equation of state is part of the model data, although the temporal stress calculation below depends only on the rest density. Let $\rho_{\rm tot}(t):=\rho_\phi(t)+\widetilde\rho_r(t)$ be the total comoving energy density; the scalar and fluid stress tensors are the only sources in the adopted zero-cosmological-term Einstein equation. For any pre-decay quantity $f$ with a left limit at $t_d$, write $f(t_d^-):=\lim_{t\uparrow t_d}f(t)$. A **sudden-decay model** here supplies a time $t_d\in J$ at which $H(t_d^-)=\Gamma$ and instantaneously transfers all of $\rho_{\rm tot}(t_d^-)$ into an ideal, immediately thermalized radiation bath with vanishing chemical potentials. Let $g_*:(0,\infty)\to(0,\infty)$ be the specified dimensionless effective number of relativistic degrees of freedom, so the adopted bath density is $\rho_{\rm rad}(T)=\pi^2g_*(T)T^4/30$. Any positive reheating temperature $T_{\rm RH}$ satisfying $\rho_{\rm rad}(T_{\rm RH})=\rho_{\rm tot}(t_d^-)$ then obeys

$$T_{\rm RH}=\left(\frac{90}{\pi^2g_*(T_{\rm RH})}\right)^{1/4}\sqrt{\Gamma M_P}.$$

The equation is implicit if $g_*$ depends on temperature and asserts no existence or uniqueness for that implicit equation. It is exact for this sudden-decay algebra; it gives no continuous-decay or entropy-injection correction and no universal string prediction for $\Gamma$.

## Statement references

[[def-r5-cosmology-4d-scalar-eft-data]]

[[post-r5-cosmology-4d-scalar-eft-model]]

[[def-gr-flrw-friedmann-system]]

[[def-gr-flrw-model-data]]

[[lem-gr-flrw-ricci-and-einstein-tensors]]

[[def-gr-scalar-field-matter-model]]

[[prop-gr-scalar-field-stress-energy-conservation]]

[[def-gr-perfect-fluid-matter-model]]

## Facts & Assumptions

**Given:** The four-dimensional Einstein-frame Planck convention, a spatially flat homogeneous scalar-plus-radiation model with zero cosmological term and additive comoving stress, the positive decay rate $\Gamma$, the supplied sudden-decay/total-energy-matching prescription, and the adopted equilibrium radiation-density relation with $g_*(T)>0$.

[F1] [[post-r5-cosmology-4d-scalar-eft-model]]: adopt the direct Einstein equation $G_{\mu\nu}=M_P^{-2}T_{\mu\nu}$ with zero cosmological term; any nonzero additional matter sector must have its stress tensor and couplings stated.

[F9] [[post-r5-cosmology-4d-scalar-eft-model]]: in the adopted natural-unit normalization, $M_P^2=(8\pi G_N)^{-1}$.

[F2] [[lem-gr-flrw-ricci-and-einstein-tensors]]: in the spatially flat FLRW case, the temporal Einstein component is $G_{00}=3\dot a^2/a^2=3H^2$ when $c=1$.

[F3] [[def-r5-cosmology-4d-scalar-eft-data]]: $M_P>0$ is the reduced Planck mass of mass dimension one and the scalar EFT is in Einstein frame with $\hbar=c=1$; this item additionally fixes $k_B=1$ so temperature is measured in energy units.

[F4] [[def-gr-flrw-friedmann-system]]: the Hubble function is $H=\dot a/a$ on the cosmic-time interval; the definition of the Friedmann system alone does not assert its physical derivation.

[F5] [[def-gr-scalar-field-matter-model]]: for the homogeneous canonical scalar with $K=1$, $c=1$, and $g_{00}=-1$, the covariant $00$ component of its candidate stress tensor is $\dot\phi^2/2+V(\phi)$.

[F6] [[prop-gr-scalar-field-stress-energy-conservation]]: the stated scalar candidate tensor is the Hilbert tensor of the scalar action under the declared compact-variation convention.

[F7] [[def-gr-perfect-fluid-matter-model]] defines a perfect-fluid datum by smooth rest-density and pressure fields $\varepsilon,p$ and a smooth future-directed unit timelike field $n$, with $T^{ab}=(\varepsilon+p)n^an^b+pg^{ab}$; here $\varepsilon=\rho_r$ and $p=p_r$. [[def-gr-flrw-model-data]] defines the FLRW comoving field as $c^{-1}\partial_t$; since $c=1$ here, $n=\partial_t$, so $n^0=1$ and $g^{00}=-1$. Substitution gives $T_{00}=\varepsilon=\rho_r$, independently of the pressure.

[F10] [[post-gr-field-and-matter-assumptions]]: a model supplies its nongravitational fields or matter and their explicit equations and couplings as model input.

[F11] [[def-gr-flrw-model-data]]: in product coordinates for the FLRW metric, $g_{00}=-c^2$, which is $-1$ in the units fixed here.

[A1] The field content is model input as in [F10]: a homogeneous canonical scalar and the smooth comoving radiation-fluid data specified in the Statement are the only pre-decay stress sources, their total tensor is the sum of the scalar and perfect-fluid tensors, and the adopted Einstein law applies to that total. The radiation equation of state is $p_r=\rho_r/3$; no averaged-pressureless approximation or controlled averaging family is required for the scalar, and the residual radiation fraction need not be zero.

[A2] At the supplied $t_d$, impose $H(t_d^-)=\Gamma$ and instantaneously set $\rho_{\rm rad}(T_{\rm RH})=\rho_{\rm tot}(t_d^-)$; the conversion is complete, with no unthermalized hidden products or additional entropy source.

[A3] Adopt $\rho_{\rm rad}(T)=\pi^2g_*(T)T^4/30$ for the specified ideal relativistic equilibrium bath, with $T>0$ and $g_*(T)>0$. No value, uncertainty, or microscopic prediction for $g_*$ or $\Gamma$ is asserted.

## Proof

1.1 Put $V(\phi)=m^2\phi^2/2$ on the pre-decay branch. The tensor formula in [F5], with $K=1$, $c=1$, the homogeneous field, and $g_{00}=-1$ from [F11], gives $T^\phi_{00}=\dot\phi^2-g_{00}(-\dot\phi^2/2+V)=\dot\phi^2/2+V=\rho_\phi$; [F6] confirms this candidate is the scalar action's Hilbert tensor. For the radiation fluid, [F7] gives $T_r^{00}=(\rho_r+p_r)(n^0)^2+p_rg^{00}=(\rho_r+p_r)-p_r=\rho_r$ since $n^0=1$ and $g^{00}=-1$; lowering both indices leaves $T^r_{00}=\rho_r$. By [A1] and [F10] the total source is the stated additive matter model, so $T_{00}=\rho_\phi+\rho_r=\rho_{\rm tot}$. This tensor computation does not require an averaged equation of state for the scalar and specifies no decay channel. [given, F5, F6, F7, F10, F11, A1, algebra]

2.1 The direct Einstein equation [F1] and exact flat-FLRW tensor component [F2], with $k=0$ and $c=1$, give $3H^2=8\pi G_N\rho_{\rm tot}$. By [F9], $8\pi G_N=M_P^{-2}$, hence $\rho_{\rm tot}=3M_P^2H^2$. This uses the spatially flat branch and zero cosmological term explicitly; it does not use an equation of state for the combined source. [F1, F2, F3, F4, F9, step 1.1, algebra]

3.1 Evaluate step 2.1 at the supplied pre-decay event. Since $H(t_d^-)=\Gamma$ by [A2], $\rho_{\rm tot}(t_d^-)=3M_P^2\Gamma^2$. [A2, step 2.1, algebra]

4.1 By [A2], the entire pre-decay energy becomes the thermal bath, and [A3] gives $\pi^2g_*(T_{\rm RH})T_{\rm RH}^4/30=3M_P^2\Gamma^2$. Multiplication by $30/(\pi^2g_*(T_{\rm RH}))$, permitted because $g_*(T_{\rm RH})>0$, yields $T_{\rm RH}^4=90M_P^2\Gamma^2/(\pi^2g_*(T_{\rm RH}))$. [A2, A3, step 3.1, algebra]

5.1 Since $T_{\rm RH}$, $M_P$, $\Gamma$ and $g_*(T_{\rm RH})$ are positive, taking the positive fourth root of step 4.1 gives the displayed equation. Its dimensions agree: $g_*$ is dimensionless and $\sqrt{\Gamma M_P}$ has mass dimension one, the dimension of $T_{\rm RH}$ in the adopted $k_B=1$ convention. No inversion of the possibly temperature-dependent function $g_*$ was used, so no uniqueness claim follows. [A3, F3, step 4.1, algebra] ∎
