---
id: prop-tgr-ideal-evaporation-accounting
kind: proposition
title: Exact ideal emitter mass ODE and entropy accounting
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 4
deps:
  - thm-tgr-photon-planck-flux
dependency_roles:
  thm-tgr-photon-planck-flux: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Mehran Kardar, MIT OpenCourseWare 8.333 Statistical Mechanics I, Lecture 20, photon-gas section"
      url: "https://ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/368b2180e6efa1417ab336d79b2df6db_MIT8_333F13_Lec20.pdf"
    - title: "University of Mississippi PHY 727 course notes, Lecture 18: The Photon Gas"
      url: "https://www.phy.olemiss.edu/~luca/phys727/Topics/L18_photons.pdf"
---

## Statement

Assume the exact Planck energy and coarse entropy flux formulas of [[thm-tgr-photon-planck-flux]]. Use SI units: $G$ is in $\mathrm{m^3\,kg^{-1}\,s^{-2}}$, $c$ in $\mathrm{m\,s^{-1}}$, $\hbar$ in $\mathrm{J\,s}$, and $k_B$ in $\mathrm{J\,K^{-1}}$. Fix a normalization of the asymptotic time and energy reference, a dimensionless fraction $0<\eta\le1$, an initial mass $M_0>0$ in kilograms, and a cutoff $0<M_{\min}<M_0$. Let $M(t)>0$ be a $C^1$ mass function on an interval containing $0$ and its first cutoff time, with $M(0)=M_0$. For each $M>0$ define the model quantities
$$r_H=\frac{2GM}{c^2},\qquad A_H=4\pi r_H^2,\qquad \kappa=\frac{c^2}{4GM},\qquad T_\infty=\frac{\hbar c\kappa}{2\pi k_B},\qquad S_B(M)=\frac{k_Bc^3A_H}{4G\hbar}+S_0.$$
Here $r_H$ is in metres, $A_H$ in square metres, $\kappa$ is the fixed-reference inverse-length parameter in inverse metres, $T_\infty$ is in kelvins, and $S_0$ is a fixed entropy offset in joules per kelvin. Adopt an effective far-field emitter with area $A_{\rm eff}=\eta A_H$ and power $P=A_{\rm eff}\sigma T_\infty^4$ in watts, where $\sigma$ is the coefficient in [[thm-tgr-photon-planck-flux]]. Adopt the mass-balance equation $c^2M'(t)=-P(t)$, with $t$ in seconds measured by the fixed asymptotic time parameter; terminate the model at the first time $M(t)=M_{\min}$. Then the exact solution until that cutoff is
$$M(t)=(M_0^3-3\alpha t)^{1/3},\qquad \alpha=\frac{\eta\hbar c^4}{15360\pi G^2},\qquad \tau=\frac{M_0^3-M_{\min}^3}{3\alpha}.$$
The parameter $\alpha$ has units $\mathrm{kg^3\,s^{-1}}$. The model exports energy $c^2(M_0-M_{\min})$ in joules through cutoff. Define its coarse exported entropy by $S_{\rm rad}(t)=\int_0^t(4/3)P(t')/T_\infty(t')\,dt'$, in joules per kelvin. Then
$$S_B(M_0)-S_B(M_{\min})>0.$$
$$S_{\rm rad}(\tau)=\frac43[S_B(M_0)-S_B(M_{\min})].$$
$$\Delta(S_B+S_{\rm rad})=\frac13[S_B(M_0)-S_B(M_{\min})]\ge0,$$
where $\Delta(S_B+S_{\rm rad})=S_B(M_{\min})+S_{\rm rad}(\tau)-S_B(M_0)$ and $S_{\rm rad}(0)=0$. This is an exact conditional calculation in the fixed-reference effective-area model. It is not a theorem about a material patch of a null horizon, an exact time-dependent Einstein solution, quantum backreaction, reference-independent Stefan emission, or a universal generalized second law.

## Facts & Assumptions

**Given:** The positive constants and masses, the definitions of $r_H,A_H,\kappa,T_\infty,S_B,A_{\rm eff},P$, the fixed asymptotic reference, the adopted mass-balance equation, and the cutoff in the Statement.

[F1] [[thm-tgr-photon-planck-flux]], Statement: in its explicitly defined isotropic ray model, $F=\sigma T^4$ and $F_S=(4/3)F/T$, with $\sigma=\pi^2k_B^4/(60\hbar^3c^2)$. Its finite-box trace deduction uses the exact batch 45 diagonal-occupation draft interface, recorded as Step-1-ready but not independently accepted.

[A1] The relation $c^2M'=-P$ and the proportional effective area are adopted definitions of this mathematical model, not consequences about actual gravitational dynamics.

[A2] The asymptotic generator, energy, time, and temperature normalization is held fixed over $0\le t\le\tau$; no alternative normalization is silently substituted into the flux law.

## Proof

1.1 Substitution of $r_H=2GM/c^2$ gives $A_H=16\pi G^2M^2/c^4$, $\kappa=c^2/(4GM)$, $T_\infty=\hbar c^3/(8\pi GMk_B)$, and $S_B(M)=4\pi k_BG M^2/(\hbar c)+S_0$. Differentiating the last expression yields $T_\infty\,dS_B/dM=c^2$. [given, A2, algebra]

2.1 By [F1] the effective-area power is $P=\eta A_H\sigma T_\infty^4=\eta\hbar c^6/(15360\pi G^2M^2)$. The adopted balance equation [A1] is therefore $M'=-\alpha M^{-2}$ with $\alpha=\eta\hbar c^4/(15360\pi G^2)>0$. [given, A1, F1, step 1.1, algebra]

3.1 Along any positive solution, $(M^3)'=3M^2M'=-3\alpha$, hence the initial condition forces $M(t)^3=M_0^3-3\alpha t$. The positive cube root is differentiable and satisfies the ODE until it reaches the positive cutoff, giving the stated solution and time $\tau=(M_0^3-M_{\min}^3)/(3\alpha)$. This also proves uniqueness among positive solutions because every such solution has the same cube. [given, step 2.1, algebra]

3.2 Integrating $P=-c^2M'$ from $0$ to $\tau$ gives $\int_0^\tau P\,dt=c^2(M_0-M_{\min})$. Differentiating $S_B(M(t))$ and using step 1.1 and $M'=-P/c^2$ yields $S_B'=-P/T_\infty$. [given, step 1.1, step 2.1, algebra]

4.1 The entropy flux in [F1], multiplied by the stated area $A_{\rm eff}$, is $S_{\rm rad}'=(4/3)P/T_\infty$. Thus $(S_B+S_{\rm rad})'=P/(3T_\infty)\ge0$ and integration gives the two endpoint entropy formulas. Since $S_B(M)=4\pi k_BG M^2/(\hbar c)+S_0$ has positive quadratic coefficient and $M_0>M_{\min}>0$, its difference is positive and the offset cancels. No physical generalized-second-law conclusion follows beyond this stipulated model. [given, A1, F1, step 1.1, step 3.2, algebra] ∎
