---
id: pthm-tgr-area-entropy-calibration
kind: physics-theorem
title: Conditional area entropy coefficient with free offset
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 13
deps:
  - def-tgr-framework-units
  - def-countable-choice
  - pthm-tgr-kn-family-mechanics
  - post-tgr-thermodynamic-horizon-identification
  - prop-tgr-kn-first-law-smarr
  - pthm-tgr-reduced-horizon-temperature
  - lem-tgr-first-law-calibration-freedom
  - thm-chain-rule-for-total-derivatives
  - cor-mean-value-theorem
dependency_roles:
  def-tgr-framework-units: formulation-prerequisite
  def-countable-choice: mathematical-premise
  pthm-tgr-kn-family-mechanics: physical-result
  post-tgr-thermodynamic-horizon-identification: physical-assumption
  prop-tgr-kn-first-law-smarr: mathematical-premise
  pthm-tgr-reduced-horizon-temperature: physical-result
  lem-tgr-first-law-calibration-freedom: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
proof_strategy: direct
physical_scope: >
  Conditional deduction on the selected connected, strictly subextremal,
  zero-magnetic-flux stationary Kerr–Newman family, using the exact SI family
  differential, the explicitly adopted reversible heat and entropy state
  function, and the pointwise reduced exponential-current reference-temperature
  field obtained by matching each branch parameter to that member's
  same-normalized geometric surface gravity. It does not assert a general
  Hawking or KMS theorem, a dynamical-process first law, an empirical
  temperature, a microstate count, or an absolute entropy zero.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Robert M. Wald, The Thermodynamics of Black Holes, Living Reviews in Relativity 4 (2001), 6"
      url: https://arxiv.org/pdf/gr-qc/9912119
      locator: "Complete 46-page review; §2, PDF pp. 6–10, on the stationary mechanical first law and the classical-versus-thermodynamic distinction; §3, PDF pp. 10–16, on the additional quantum temperature context."
    - title: "Pietro Benetti Genolini, Introduction to black hole thermodynamics, lecture notes for the Roberto Salmeron School in Mathematical Physics (2025), arXiv:2512.24929v1"
      url: https://arxiv.org/pdf/2512.24929v1
      locator: "Complete 84-page lecture notes; §1.3, PDF pp. 14–16, and §2.1, PDF pp. 18–20, on the mechanical first law, the thermodynamic identification, and the initially unspecified area-entropy coefficient."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Use the physical Kerr–Newman family parameterized by the connected strict subextremal domain
$$\mathcal P:=\{(m,a,q)\in\mathbb R^3:m>0,\ m^2>a^2+q^2\},$$
with its current SI parameter map and selected horizon conventions from [[pthm-tgr-kn-family-mechanics]]. Assume $\mathrm{AC}_\omega$ as defined in [[def-countable-choice]], the mathematical premise used by the current Kerr–Newman and reduced spectral supplier proofs. Let $S_H:\mathcal P\to\mathbb R$ be the $C^1$ entropy state function adopted in [[post-tgr-thermodynamic-horizon-identification]], measured in $\mathrm{J\,K^{-1}}$. Assume that postulate's reversible-heat identity $\delta Q_{\rm rev}=dE_{\rm par}-\Omega_{\rm SI}dJ_{\rm SI}-\Phi_{\rm SI}dQ_e=T_KdS_H$ on $\mathcal P$. Also assume its pointwise temperature identification: for each $x=(m,a,q)\in\mathcal P$, the reduced branch parameter is held fixed at $\kappa=\kappa_{\rm geom}(x)=s(x)/D(x)>0$, and the smooth reference-temperature field is $T_K:\mathcal P\to(0,\infty)$ with $T_K(x)=T_{\rm red}(x)=\hbar c\kappa_{\rm geom}(x)/(2\pi k_B)$. Then there is a constant $s_*\in\mathbb R$, with units $\mathrm{J\,K^{-1}}$, such that throughout $\mathcal P$
$$S_H=\frac{k_B}{4\ell_P^2}A_H+s_*=\frac{k_Bc^3}{4G_N\hbar}A_H+s_*,\qquad \ell_P^2:=\frac{G_N\hbar}{c^3}.$$
The deduction determines the area coefficient within this adopted model and leaves the entropy zero unselected. It does not identify $S_H$ with a statistical microstate count or an outside-state entropy.

## Facts & Assumptions

**Given:** The connected strict subextremal family, its exact physical and mathematical first-law interfaces, and the additional thermodynamic and reduced-temperature assumptions stated below.

[F1] [[def-tgr-framework-units]]: $G_N,c,\hbar,k_B>0$ have the stated SI units, and on a supplied null generator $\kappa_{\rm acc}=c^2\kappa_{\rm geom}$, with $\kappa_{\rm geom}$ in $\mathrm{m^{-1}}$ and $\kappa_{\rm acc}$ in $\mathrm{m\,s^{-2}}$. The entropy formula defines $\ell_P^2:=G_N\hbar/c^3$ explicitly.

[F2] [[pthm-tgr-kn-family-mechanics]]: on the selected strict subextremal, zero-magnetic-flux physical family, with $G_N,c,\mu_0$ fixed, the exact SI identity is
$$dE_{\rm par}=\frac{\kappa_{\rm acc}c^2}{8\pi G_N}\,dA_H+\Omega_{\rm SI}\,dJ_{\rm SI}+\Phi_{\rm SI}\,dQ_e,$$
where $E_{\rm par}$ is in joules, $A_H$ in $\mathrm{m^2}$, $J_{\rm SI}$ in $\mathrm{kg\,m^2\,s^{-1}}$, $Q_e$ in coulombs, $\Omega_{\rm SI}$ in $\mathrm{s^{-1}}$, and $\Phi_{\rm SI}$ in volts; $\kappa_{\rm acc}>0$ on this strict domain.

[F3] [[prop-tgr-kn-first-law-smarr]]: on $\mathcal P$, with $A=4\pi(r_+^2+a^2)$, $j=ma$, $\kappa_{\rm KN}=\sqrt{m^2-a^2-q^2}/(r_+^2+a^2)$, $\Omega_{\rm KN}=a/(r_+^2+a^2)$, and $\Phi_{\rm KN}=qr_+/(r_+^2+a^2)$, the mathematical family differential is
$$dm=\frac{\kappa_{\rm KN}}{8\pi}\,dA+\Omega_{\rm KN}\,dj+\Phi_{\rm KN}\,dq.$$

[A2] [[def-countable-choice]]: every sequence $(X_n)_{n\in\mathbb N}$ of nonempty sets has a choice function $f$ with $f(n)\in X_n$ for every $n$. The full current spectrum supplier explicitly assumes this axiom.

[L1] [[pthm-tgr-reduced-horizon-temperature]]: for each reduced exponential-current branch with $E>0$, constant parameter $\kappa>0$, positive $\gamma_{\rm red}$, and the adopted two-state rates, the effective reference temperature defined by the stationary excited-to-ground ratio is $T_{\rm red}=\hbar c\kappa/(2\pi k_B)$. At each $x\in\mathcal P$, the postulate uses the branch instance whose Killing flow and reference normalization match $\chi_x$, with branch parameter fixed at $\kappa=\kappa_{\rm geom}(x)$; it yields the pointwise field $T_K(x)=\hbar c\kappa_{\rm geom}(x)/(2\pi k_B)$. The supplier's Statement explicitly assumes Countable Choice, retained here in [A2], as required by its cited spectrum supplier. This use retains the selected reduced model, positive gap, positive rate, same-generator identification and reference normalization; it does not use the supplier's optional stationary-bath clause.

[F4] [[lem-tgr-first-law-calibration-freedom]]: a connected mathematical family first-law product does not select a unique positive temperature scale or absolute entropy offset; every stated offset leaves the differential unchanged.

[F5] [[thm-chain-rule-for-total-derivatives]]: for totally differentiable maps between Euclidean spaces, the derivative of a composite is the composite of the derivatives.

[F6] [[cor-mean-value-theorem]]: if a real function is continuous on a closed interval and differentiable in its interior, its endpoint difference equals its derivative at an interior point times the interval length.

[A1] [[post-tgr-thermodynamic-horizon-identification]]: on $\mathcal P$, the one-form $\delta Q_{\rm rev}=dE_{\rm par}-\Omega_{\rm SI}dJ_{\rm SI}-\Phi_{\rm SI}dQ_e$ satisfies $\delta Q_{\rm rev}=T_K\,dS_H$, where $T_K:\mathcal P\to(0,\infty)$ and, at every $x\in\mathcal P$, the reduced branch parameter is held fixed at $\kappa=\kappa_{\rm geom}(x)$ and $T_K(x)=T_{\rm red}(x)=\hbar c\kappa_{\rm geom}(x)/(2\pi k_B)$.

## Proof

1.1 Under the mathematical premise [A2], by [F2], the work-subtracted one-form $\delta Q_{\rm rev}$ defined in [A1] is exactly $\frac{\kappa_{\rm acc}c^2}{8\pi G_N}dA_H$ on $\mathcal P$: the angular-momentum and electric-charge work terms cancel with the same terms in its definition. The physical postulate [A1] identifies this one-form with the product of the family field $T_K$ and $dS_H$. Hence
$$T_K\,dS_H=\frac{\kappa_{\rm acc}c^2}{8\pi G_N}\,dA_H.$$
This is conditional on the selected stationary-family and thermodynamic assumptions. [given, A2, F2, A1, algebra]

1.2 For each $x\in\mathcal P$, apply [L1] to the reduced branch whose constant parameter is $\kappa=\kappa_{\rm geom}(x)$, as specified in [A1]. Thus $T_K(x)=T_{\rm red}(x)=\hbar c\kappa_{\rm geom}(x)/(2\pi k_B)$. By [F1], $\kappa_{\rm acc}(x)=c^2\kappa_{\rm geom}(x)>0$, so $T_K(x)=\hbar\kappa_{\rm acc}(x)/(2\pi c k_B)>0$ at every family point. [given, A2, F1, L1, A1, algebra]

2.1 At each $x\in\mathcal P$, evaluate the one-form equality in step 1.1 on an arbitrary tangent vector and divide by the positive scalar $T_K(x)$ from step 1.2. Using [F1] gives the one-form identity
$$dS_H=\frac{c^2\kappa_{\rm acc}}{8\pi G_N}\frac{2\pi c k_B}{\hbar\kappa_{\rm acc}}\,dA_H=\frac{k_Bc^3}{4G_N\hbar}\,dA_H=\frac{k_B}{4\ell_P^2}\,dA_H.$$
The coefficient has units $\mathrm{J\,K^{-1}\,m^{-2}}$, so the right-hand side has entropy units $\mathrm{J\,K^{-1}}$. [step 1.1, step 1.2, F1, algebra]

3.1 For arbitrary $x_0=(m_0,a_0,q_0)$ and $x_1=(m_1,a_1,q_1)$ in $\mathcal P$, put $v_i=(a_i,q_i)$ with its Euclidean norm and let $\gamma(t)=(1-t)x_0+tx_1$ for $0\le t\le1$. Since $m_i>\|v_i\|_2$, for every such $t$,
$$m(t)=(1-t)m_0+tm_1>(1-t)\|v_0\|_2+t\|v_1\|_2\ge\|(1-t)v_0+tv_1\|_2=\sqrt{a(t)^2+q(t)^2}.$$
Thus the segment stays in $\mathcal P$. Set $R:=S_H-\frac{k_B}{4\ell_P^2}A_H$; step 2.1 gives $dR=0$. The path $\gamma$ is smooth; since $\mathcal P$ is open, it maps a neighborhood of every $t\in(0,1)$ into $\mathcal P$. The chain rule [F5] gives $(R\circ\gamma)'(t)=dR_{\gamma(t)}(x_1-x_0)=0$. Also $R\circ\gamma$ is continuous on $[0,1]$ and differentiable on $(0,1)$, so [F6] yields $R(x_1)=R(x_0)$. [F3, step 2.1, F5, F6, construct]

4.1 Since $x_0,x_1$ were arbitrary, $R$ has one constant value $s_*$ on the connected family $\mathcal P$, proving the displayed formula. No reference value of $S_H$ was adopted; adding any constant to it leaves [A1] unchanged, in accord with the mathematical calibration freedom [F4]. This fixes the conditional area coefficient but not an entropy zero. [A1, F4, step 3.1] ∎

## Remarks

The reduced-temperature result is used only at its specified effective-model interface, including its explicit Countable Choice premise. The separate reversible heat identification is essential: the theorem makes no claim that the reduced model describes every black hole or that the postulated $S_H$ is a microscopic state count.
