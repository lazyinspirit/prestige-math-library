---
id: pthm-emg-xs-kn-horizons
kind: physics-theorem
title: Rotating model horizons and selected causal escape
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 10
deps:
  - pthm-emg-xs-kn-model
  - def-emg-xs-si-parameters
  - thm-emg-xs-kn-extension
  - prop-emg-xs-kn-horizon-data
  - thm-emg-xs-kn-escape
  - def-emg-causal-solution-and-horizon-vocabulary
  - def-countable-choice
dependency_roles:
  pthm-emg-xs-kn-model: physical-result
  def-emg-xs-si-parameters: formulation-prerequisite
  thm-emg-xs-kn-extension: mathematical-premise
  prop-emg-xs-kn-horizon-data: mathematical-premise
  thm-emg-xs-kn-escape: mathematical-premise
  def-emg-causal-solution-and-horizon-vocabulary: mathematical-premise
  def-countable-choice: mathematical-premise
physical_scope: >
  Conditional conversion of local horizon geometry and the selected escape
  boundary of the electric Kerr–Newman solution family to SI parameters. The
  selected ingoing model does not establish a maximal extension, an event
  horizon in a conformal completion, a black-hole observation, or empirical
  validity.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2, complete 30-page full text"
      url: "https://arxiv.org/pdf/1410.6626"
      locator: "Section 3.3, equations (3.18)-(3.23): horizon radii and stationary limits; Section 4, Energy and thermodynamics, the unnumbered area formula before (4.1) and angular-velocity and potential formulas after (4.2). Signed surface gravity and SI conventions are supplied by the exact local mathematical result and conversions."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, complete 238-page arXiv version"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
      locator: "Chapter 7, equations (7.124)-(7.128), printed p. 209 (PDF p. 216): uncharged Kerr horizons and stationary limits; the charged formulas and local horizon data use the named mathematical suppliers."
---

## Statement

Let $m_*>0$, $J,Q_e\in\mathbb R$ be the selected SI mass, angular-momentum and electric-charge inputs, with zero magnetic flux. Use [[def-emg-xs-si-parameters]] to set
$$M=\frac{G_Nm_*}{c^2},\qquad a=\frac{J}{m_*c},\qquad q=\sqrt{\frac{G_N}{4\pi\varepsilon_0c^4}}Q_e,\qquad \alpha=\sqrt{\frac{4\pi G_N}{\mu_0c^4}}.$$
Assume $M>0$ and $M^2\ge a^2+q^2>0$. In the selected ingoing KN model let
$$r_\pm=M\pm\sqrt{M^2-a^2-q^2},\qquad R_\pm=r_\pm^2+a^2,\qquad \chi_\pm=\partial_v+\frac{a}{R_\pm}\Psi,$$
where $\Psi=X\partial_Y-Y\partial_X$ is the smooth rotation field on the unit sphere and $v$ has length units. For either root $r_H=r_\pm$, with $r_{\rm other}$ the other root, the selected horizon data of [[prop-emg-xs-kn-horizon-data]] give
$$\operatorname{Area}(S_H)=4\pi R_H,\quad \Omega_{H,\mathrm{geom}}=\frac a{R_H},\quad \kappa_{H,\mathrm{geom}}=\frac{r_H-r_{\rm other}}{2R_H},\quad -\mathcal A_{\mathrm{in}}(\chi_H)=\frac{q r_H}{R_H}.$$
Thus the area is in m$^2$, $\Omega_{H,\mathrm{geom}}$ and the signed $\kappa_{H,\mathrm{geom}}$ are in m$^{-1}$, and the associated SI angular rate and signed acceleration convention are
$$\Omega_{H,\mathrm{SI}}=c\,\frac a{R_H}\quad\text{and}\quad \kappa_{H,\mathrm{acc,SI}}=c^2\,\frac{r_H-r_{\rm other}}{2R_H}.$$
With $A_{\mathrm{SI}}=\mathcal A_{\mathrm{in}}/\alpha$ and time-normalized generator $\chi_{H,\mathrm{SI}}=c\chi_H$, the gauge-normalized horizon voltage is
$$-A_{\mathrm{SI}}(\chi_{H,\mathrm{SI}})=\frac{c q r_H}{\alpha R_H};$$
This voltage normalization uses the displayed ingoing gauge, whose coordinate limit is specified as follows: for each fixed $v$ and $\omega\in S^2$, both coefficient functions in the global one-form expression $\mathcal A_{\mathrm{in}}=-qr\Sigma^{-1}dv+aqr\Sigma^{-1}\beta$ tend to zero as $r\to+\infty$. At extremality the two roots coincide and the signed surface gravity is zero. Conditional on the current exact draft interface of [[thm-emg-xs-kn-escape]] and the relative-boundary convention of [[def-emg-causal-solution-and-horizon-vocabulary]], the selected escape set on $\mathcal M_{\mathrm{in}}$ has relative boundary $r=r_+$. These are properties of the chosen solution family and escape observable, not a maximal-extension or observational claim.

## Facts & Assumptions

**Given:** The selected electric SI inputs, $G_N,c,\mu_0>0$, the zero-magnetic-flux KN branch, the parameter inequality in the Statement and the chosen ingoing model.

[F1] [[def-emg-xs-si-parameters]]: $M=G_Nm_*/c^2$, $a=J/(m_*c)$, $q_e=\sqrt{G_N/(4\pi\varepsilon_0c^4)}Q_e$, $\mathcal F=\alpha F$, and $\alpha=\sqrt{4\pi G_N/(\mu_0c^4)}$; the coordinates $x^0=ct$ and $v$ have length units.

[F2] [[pthm-emg-xs-kn-model]]: with zero magnetic flux, the SI-rescaled KN datum on its stated pole-free domains and full-sphere exterior is a conditional solution of the equation-based $\Lambda=0$, $j=0$, $T^m=0$ model; the mathematical verification remains a draft premise, not independent proof acceptance.

[F3] [[thm-emg-xs-kn-extension]]: the selected product $\mathcal M_{\mathrm{in}}=\mathbb R_v\times(0,\infty)_r\times S^2$ carries the smooth ingoing metric and potential $\mathcal A_{\mathrm{in}}=-qr\Sigma^{-1}(dv-a\beta)$, with $\beta=X\,dY-Y\,dX$ and $\Sigma>0$; its field-equation continuation is conditional on the current KN-verification draft.

[L1] [[prop-emg-xs-kn-horizon-data]]: for $M>0$ and $M^2\ge a^2+q^2>0$, each root $r_H$ has future null Killing generator $\chi_H=\partial_v+(a/R_H)\Psi$, area $4\pi R_H$, signed $\kappa_H=\Delta'(r_H)/(2R_H)=(r_H-r_{\rm other})/(2R_H)$, and $-\mathcal A_{\mathrm{in}}(\chi_H)=qr_H/R_H$; the supplier proof remains draft and is used conditionally.

[L2] [[thm-emg-xs-kn-escape]]: on the selected ingoing product and for $M>0$, $M^2\ge a^2+q^2>0$, the exact current statement gives escape set $\{r>r_+\}$ and its relative boundary $\{r=r_+\}$ for the named path class; its proof is draft and not independently accepted.

[F4] [[def-emg-causal-solution-and-horizon-vocabulary]]: the escape boundary is taken relative to the selected manifold, and the escape set uses continuous future piecewise-$C^1$ causal paths with finite $C^1$ subdivisions on compact parameter intervals.

[A1] Geometric time is $t=v/c$, so the time-normalized generator is $c\chi_H$ when the angular rate is $c(a/R_H)$; the SI one-form is $A_{\mathrm{SI}}=\mathcal A_{\mathrm{in}}/\alpha$. The gauge for the voltage is the displayed potential, whose contraction tends to zero at infinity.

[A2] [[def-countable-choice]]: the inherited geometric electrovac and intrinsic horizon-area conventions use only $\mathrm{AC}_\omega$, meaning each specified countable family of nonempty sets has a choice function. No new selection is made in these finite parameter conversions, and full AC is not used.

## Proof

1.1 The exact SI map [F1] gives the displayed real length parameters $M,a,q$ and positive normalization $\alpha$. Setting magnetic flux to zero makes the KN datum's geometric charge exactly $q=q_e$; no ADM/Komar identification is involved. The stated inequality gives $D=M^2-a^2-q^2\ge0$ and $\sqrt D<M$, since $a^2+q^2>0$; hence both roots are positive. [given, F1, F2, A2, algebra]

2.1 The factorization $\Delta=(r-r_+)(r-r_-)$ identifies these roots on the smooth selected ingoing model [F3]. The area, generator, signed surface gravity and displayed-gauge potential formulas then apply to either root by [L1]. [F2, F3, L1, step 1.1, algebra]

2.2 When $D=0$, $r_+=r_-=M$, so the signed difference formula in [L1] gives $\kappa_H=0$. When $D>0$, it gives positive outer and negative inner values under the displayed sign convention. [L1, step 1.1, algebra]

2.3 Apply [L2] with the exact path class and relative topology in [F4]. Its current statement yields the selected escape boundary $r=r_+$ on $\mathcal M_{\mathrm{in}}$. This use is conditional on that draft supplier and says nothing about a conformal completion or maximal extension. [L2, F3, F4, step 1.1]

3.1 By [F1] and [A1], changing from length-time generator $\chi_H$ to the SI time generator multiplies it by $c$, while the SI potential is $\mathcal A_{\mathrm{in}}/\alpha$. Therefore $-A_{\mathrm{SI}}(c\chi_H)=(c/\alpha)(-\mathcal A_{\mathrm{in}}(\chi_H))=cqr_H/(\alpha R_H)$. Also $[a/R_H]=\mathrm m^{-1}$, so its SI angular rate is $c a/R_H$; $[\kappa_H]=\mathrm m^{-1}$, so the stated acceleration convention is $c^2\kappa_H$. The area formula has units of square metres. Finally $\Sigma=r^2+a^2\cos^2\theta\ge r^2$, so $r/\Sigma\le1/r\to0$; the two coefficient functions $-qr/\Sigma$ and $aqr/\Sigma$ of $\mathcal A_{\mathrm{in}}$ in the $(dv,\beta)$ expression in the Statement vanish in the specified fixed-$(v,\omega)$ limit. [F1, F3, L1, A1, step 2.1, algebra]

4.1 The horizon formulas in steps 2.1-2.2 and the SI conversions in step 3.1 establish the claimed identifications on the specified model, conditional on the named draft mathematical interfaces. The escape boundary in step 2.3 uses the selected-model path convention. The $\mathrm{AC}_\omega$ premise [A2] is inherited as stated; no full choice principle, empirical measurement, or global event-horizon claim has been added. [A2, step 2.1, step 2.2, step 2.3, step 3.1] ∎
