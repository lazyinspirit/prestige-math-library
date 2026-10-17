---
id: pthm-tgr-free-vacuum-acceleration-temperature
kind: physics-theorem
title: Free-vacuum effective acceleration thermometer
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 8
deps:
  - def-countable-choice
  - post-tgr-exponential-current-and-spectral-thermometer
  - def-tgr-framework-units
  - lem-tgr-timelike-scalar-acceleration
  - lem-tgr-spectral-thermometer
  - post-tgr-stationary-equilibrium
  - lem-tgr-killing-thermal-normalization
  - pthm-tgr-tolman-ehrenfest
  - thm-derivative-of-exponential
dependency_roles:
  def-countable-choice: mathematical-premise
  post-tgr-exponential-current-and-spectral-thermometer: physical-assumption
  def-tgr-framework-units: formulation-prerequisite
  lem-tgr-timelike-scalar-acceleration: mathematical-premise
  lem-tgr-spectral-thermometer: mathematical-premise
  post-tgr-stationary-equilibrium: physical-assumption
  lem-tgr-killing-thermal-normalization: mathematical-premise
  pthm-tgr-tolman-ehrenfest: physical-result
  thm-derivative-of-exponential: mathematical-premise
physical_scope: "Effective temperature in the selected massless Minkowski-vacuum, temporally smeared scalar and two-state Markov model for uniform proper acceleration. The optional Rindler equilibrium comparison requires an explicit reference match; no point-field, all-order detector, empirical, or general Hawking claim is made."
empirical_premises: []
proof_strategy: direct
strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Preskill, Quantum Field Theory in Curved Spacetime, complete Caltech lecture notes"
      url: "https://preskill.caltech.edu/ph236c/Preskill_QFT_curved_spacetime.pdf"
      locator: "Complete 151-page PDF; §4.3, printed pp. 55–58, for the uniformly accelerated point-detector calculation, and §4.7, pp. 71–74, for the Rindler interpretation. The local compact-test and Markov claims are proved or stated by the named suppliers."
    - title: "Robert M. Wald, The Thermodynamics of Black Holes"
      url: "https://arxiv.org/pdf/gr-qc/9912119"
      locator: "Complete 46-page review; §3, printed pp. 11–16. The boost/KMS discussion supports context only; no general KMS conclusion is transferred."
    - title: "Luís C. B. Crispino, Atsushi Higuchi, and George E. A. Matsas, The Unruh effect and its applications"
      url: "https://arxiv.org/pdf/0710.5373"
      locator: "Complete 53-page review; §III.A.1–2, PDF pp. 19–22, including the massless point-detector response, detailed balance, and finite/infinite-duration qualifications."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice ($\mathrm{AC}_\omega$) as defined in [[def-countable-choice]]. Use the massless acceleration branch of [[post-tgr-exponential-current-and-spectral-thermometer]] with proper acceleration $a>0$ in metres per square second, gap $E>0$ in joules, $c>0$ in metres per second, $\hbar>0$ in joule-seconds, $k_B>0$ in joules per kelvin, and $\gamma_{\rm acc}>0$ in square metres per square second. The adopted rates are $r_\uparrow=\gamma_{\rm acc}S_a(E/\hbar)$ and $r_\downarrow=\gamma_{\rm acc}S_a(-E/\hbar)$. The unique stationary excited-state probability of the defined two-state model and its effective temperature are

$$p_* = \frac{1}{1+e^{2\pi cE/(a\hbar)}},\qquad T_{\rm eff}=\frac{\hbar a}{2\pi c k_B}.$$

For any nonzero real $h\in C_c^\infty(\mathbb R)$ and switching duration $\mathsf T>0$ seconds, let $Q_{\mathsf T}^{(a)}(\nu)=R_{\mathsf T}^{(C_a)}(\nu)/(\mathsf T\|h\|_2^2)$ and $K_h=(2\pi\|h\|_2^2)^{-1}\int_\mathbb R|z||\widehat h(z)|^2dz$, with the definitions in [[lem-tgr-spectral-thermometer]]. Then the leading switched coefficient obeys $|Q_{\mathsf T}^{(a)}(\nu)-S_a(\nu)|\le\operatorname{Lip}(S_a)K_h/\mathsf T$. This is a coefficient estimate and does not assert an all-order transition probability.

On the Minkowski right Rindler wedge $W_R=\{(x^0,x^1,x^2,x^3):x^1>|x^0|\}$, use length coordinates $x^0=ct$, metric $\eta=\operatorname{diag}(-1,1,1,1)$, $\rho=\sqrt{(x^1)^2-(x^0)^2}>0$, and the boost Killing field $\chi_\kappa=\kappa(x^1\partial_{x^0}+x^0\partial_{x^1})$ with $\kappa>0$ in inverse metres. Its lapse is $N=\sqrt{-\eta(\chi_\kappa,\chi_\kappa)}=\kappa\rho$. The orbit at fixed $\rho$ has proper acceleration $a(\rho)=c^2/\rho$, so the effective model temperature there is $T_U(\rho)=\hbar c/(2\pi k_B\rho)$. With reference event on $\rho_0=\kappa^{-1}$, $N(\rho_0)=1$ and $T_K^{\rm acc}:=T_U(\rho_0)=\hbar c\kappa/(2\pi k_B)$, hence $T_U(\rho)=T_K^{\rm acc}/N(\rho)$. On the future Rindler horizon $x^0=x^1>0$, direct differentiation gives $\nabla_{\chi_\kappa}\chi_\kappa=\kappa\chi_\kappa$, so the generator's $\kappa_{\rm geom}$ is $\kappa$ under the definition of [[def-tgr-framework-units]]. Rescaling $\chi_\kappa$ by $b>0$ rescales $N$ and $T_K^{\rm acc}$ by $b$ while leaving the proper model temperature unchanged.

If a selected stationary bath of [[post-tgr-stationary-equilibrium]] is additionally adopted on $W_R$ with its selected Killing field identified with this same $\chi_\kappa$, and its reference proper temperature is identified with $T_U(\rho_0)$, then the bath's local proper temperature agrees with $T_U(\rho)$ by [[pthm-tgr-tolman-ehrenfest]]. Both identifications are extra model assumptions. No general Unruh-state, KMS, horizon-formation, Hawking-radiation, or empirical thermometer claim follows.

## Facts & Assumptions

**Given:** Countable Choice and the acceleration branch, its coupling and two-state rate equation from [[post-tgr-exponential-current-and-spectral-thermometer]], with $a,E,c,\hbar,k_B,\gamma_{\rm acc}>0$ and the stated units.

[A1] [[post-tgr-exponential-current-and-spectral-thermometer]] adopts the massless acceleration branch and rates proportional to the two spectral values. It also states that these are effective rate-model inputs, not exact QFT transition probabilities.

[A2] [[post-tgr-stationary-equilibrium]] adopts a smooth positive proper-temperature field on a connected domain with a selected future-timelike Killing field and Killing inverse-temperature vector.

[A3] For the optional Rindler bath comparison, identify the selected bath's Killing field with $\chi_\kappa$ and its reference proper temperature at $\rho_0=\kappa^{-1}$ with $T_U(\rho_0)$. These are additional physical model identifications.

[F1] [[lem-tgr-timelike-scalar-acceleration]] defines the massless field by temporal smearing of a future-directed proper-time hyperbola and gives the tested covariance $C_a$ and its conditional spectrum $S_a(\nu)=\nu/[2\pi c^2(e^{2\pi c\nu/a}-1)]$, its continuous value at zero, and $S_a(-\nu)=e^{2\pi c\nu/a}S_a(\nu)$ for $\nu>0$. Its actual Statement makes the spectral conclusion conditional on the named batch-74 suppliers; those current carriers are draft and have hash-current Step 1 ready records, which are authoring-readiness evidence only.

[F2] [[lem-tgr-spectral-thermometer]] proves the exact acceleration-branch two-state solution and temperature, and the finite-switch coefficient estimate above, under the stated Fourier hypotheses. Its accelerated conclusions are conditional on its actual batch-74 spectrum input.

[F3] [[def-tgr-framework-units]] uses length coordinates and defines $\kappa_{\rm geom}$ only on a supplied smooth null hypersurface and generator satisfying $\nabla_\chi\chi=\kappa_{\rm geom}\chi$.

[F4] [[lem-tgr-killing-thermal-normalization]] gives $N_\xi T=T_K$ when the inverse-temperature field of a connected stationary carrier is Killing.

[F5] [[pthm-tgr-tolman-ehrenfest]] gives the consequent local relation $T=T_K/N_\xi$ and its constant-rescaling convention.

[F6] [[thm-derivative-of-exponential]] gives $(e^x)'=e^x$, which yields the derivatives of the hyperbolic functions used below.

[A4] Assume Countable Choice [[def-countable-choice]], retaining the hypothesis of the mathematical spectral and tested-field suppliers used here.

## Proof

1.1 Under the Countable Choice assumption [A4], the acceleration construction in [F1] uses the stated smooth future-directed timelike hyperbola and its actual tested field; the spectrum clause is conditional on the exact current batch-74 contour and exponential-current interfaces in [F1]. Applying [F2] to the rates from [A1] gives the stationary probability $p_*=1/(1+e^{2\pi cE/(a\hbar)})$, the Boltzmann ratio $p_*/(1-p_*)=e^{-E/(k_BT_{\rm eff})}$, and $T_{\rm eff}=\hbar a/(2\pi c k_B)$. The same supplier gives the stated $K_h/\mathsf T$ bound for every declared switch. [A4, A1, F1, F2, given]

2.1 For $\rho>0$ define $\gamma_\rho(\tau)=(\rho\sinh(c\tau/\rho),\rho\cosh(c\tau/\rho),0,0)$. Differentiation using [F6] gives $\eta(\dot\gamma_\rho,\dot\gamma_\rho)=-c^2$ and $\eta(\ddot\gamma_\rho,\ddot\gamma_\rho)=c^4/\rho^2$, so the curve is future timelike, parametrized by proper seconds, with acceleration magnitude $c^2/\rho$. The field $\chi_\kappa$ has norm $-\kappa^2\rho^2$, hence $N=\kappa\rho$. Substituting $a=c^2/\rho$ into step 1.1 yields $T_U(\rho)=\hbar c/(2\pi k_B\rho)=T_K^{\rm acc}/N$ with the stated reference normalization. [F3, F6, step 1.1, given, algebra]

3.1 In the flat length-coordinate chart, $\chi^0=\kappa x^1$ and $\chi^1=\kappa x^0$. Thus $(\nabla_\chi\chi)^0=\kappa^2x^0$ and $(\nabla_\chi\chi)^1=\kappa^2x^1$. On $x^0=x^1>0$ this equals $\kappa\chi$, verifying the claimed surface-gravity coefficient under [F3]. Replacing $\chi$ by $b\chi$ multiplies $\kappa,N,T_K^{\rm acc}$ by $b$, so their ratio at every fixed orbit is unchanged. [F3, step 2.1, algebra]

4.1 Under the additional bath and reference-match assumptions [A2]–[A3], its lapse is the $N$ of step 2.1 because its Killing field is $\chi_\kappa$. Then [F4]–[F5] give the bath temperature $T_{\rm bath}(\rho)=T_K^{\rm bath}/N(\rho)$ and $T_K^{\rm bath}=T_{\rm bath}(\rho_0)=T_U(\rho_0)=T_K^{\rm acc}$. Therefore $T_{\rm bath}(\rho)=T_U(\rho)$ throughout the connected wedge. This is the explicitly assumed comparison of two model constructions. [A2, A3, F4, F5, step 2.1] ∎

