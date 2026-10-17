---
id: texp-tgr-horizon-entropy-difference
kind: thought-experiment
title: Entropy difference with unfixed entropy zero
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 14
deps:
  - def-countable-choice
  - pthm-tgr-area-entropy-calibration
  - pthm-tgr-kn-family-mechanics
dependency_roles:
  def-countable-choice: mathematical-premise
  pthm-tgr-area-entropy-calibration: physical-result
  pthm-tgr-kn-family-mechanics: physical-result
proof_strategy: direct
physical_scope: >
  Conditional entropy difference for two positive-mass states on the selected
  zero-spin, zero-charge Schwarzschild slice of the same connected,
  strictly subextremal stationary family, under the adopted reversible-heat
  identification and pointwise reduced-branch temperature matching. It is a
  model deduction with no measured black-hole entropy, microstate count,
  general Hawking claim, or selected absolute entropy zero.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Robert M. Wald, The Thermodynamics of Black Holes, Living Reviews in Relativity 4 (2001), 6"
      url: https://arxiv.org/pdf/gr-qc/9912119
      locator: "Complete 46-page review; §2, PDF pp. 6–10, on the stationary first law and the additional thermodynamic identification."
    - title: "Pietro Benetti Genolini, Introduction to black hole thermodynamics, lecture notes for the Roberto Salmeron School in Mathematical Physics (2025), arXiv:2512.24929v1"
      url: https://arxiv.org/pdf/2512.24929v1
      locator: "Complete 84-page lecture notes; §2.1, PDF pp. 18–20, on area-proportional entropy with an initially unspecified coefficient and the separate quantum calibration."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Assume $\mathrm{AC}_\omega$ as defined in [[def-countable-choice]], inherited from the conditional mathematical spectrum input. Let $m_{*,1},m_{*,2}>0$ be two physical mass parameters on the zero-angular-momentum, zero-electric-charge Schwarzschild slice of the selected family in [[pthm-tgr-kn-family-mechanics]]. Assume the conditional area calibration [[pthm-tgr-area-entropy-calibration]] with its full hypotheses on the same connected family, including the adopted reversible-heat identification and the pointwise reduced-branch assignment from [[post-tgr-thermodynamic-horizon-identification]]. Then the entropy difference between these two model states is
$$S_H(m_{*,2})-S_H(m_{*,1})=\frac{4\pi k_BG_N}{\hbar c}\left(m_{*,2}^2-m_{*,1}^2\right).$$
The additive entropy constant cancels. This is a conditional model deduction, not an observation or a construction of a statistical microstate count.

## Facts & Assumptions

**Given:** Two positive SI mass parameters on the selected zero-spin, zero-charge family slice and the current restricted entropy calibration.

[F1] [[pthm-tgr-kn-family-mechanics]]: the physical map is $m=G_Nm_*/c^2$, $a=J_{\rm SI}/(m_*c)$, and $q=\sqrt{G_N/(4\pi\varepsilon_0c^4)}Q_e$; on the selected family $s=\sqrt{m^2-a^2-q^2}$, $r_+=m+s$, $D=r_+^2+a^2$, and $A_H=4\pi D$. The joint zero-spin, zero-charge Schwarzschild point is included by its separate exact horizon-data supplier.

[F2] [[pthm-tgr-area-entropy-calibration]]: under its actual hypotheses—$\mathrm{AC}_\omega$, the exact SI family differential on the connected, strict-subextremal, zero-magnetic-flux stationary Kerr–Newman family, the adopted $C^1$ entropy state function and reversible-heat identity, and for each family point $x$ a reduced-branch instance whose Killing flow and reference normalization match that member's generator and whose positive-gap/positive-rate conditions hold, with constant parameter $\kappa=\kappa_{\rm geom}(x)$ and $T_K(x)=\hbar c\kappa_{\rm geom}(x)/(2\pi k_B)$—the theorem gives $S_H=k_BA_H/(4\ell_P^2)+s_*$ throughout that family for one constant $s_*$, with $\ell_P^2=G_N\hbar/c^3$. This consumer uses only the formula on its Schwarzschild slice.

[A2] [[def-countable-choice]]: every sequence $(X_n)_{n\in\mathbb N}$ of nonempty sets has a choice function.

[A1] $m_{*,1},m_{*,2}>0$ label two admitted states on that same selected slice and connected family domain to which [F2] applies.

## Proof

1.1 Under [A2], for either mass $m_*>0$, set $J_{\rm SI}=Q_e=0$. The map in [F1] gives $a=q=0$ and $m=G_Nm_*/c^2>0$; hence $s=m$, $r_+=2m$, and $D=4m^2$. Therefore
$$A_H(m_*)=4\pi D=16\pi m^2=\frac{16\pi G_N^2m_*^2}{c^4}.$$
This is the selected stationary-family area, not a process or observation. [given, F1, A1, A2, algebra]

1.2 Under [A2], apply [F2] at both states in [A1]. The same constant $s_*$ cancels, giving
$$S_H(m_{*,2})-S_H(m_{*,1})=\frac{k_B}{4\ell_P^2}\left(A_H(m_{*,2})-A_H(m_{*,1})\right).$$
[F2, A1, A2, algebra]

2.1 Substitute the two areas from step 1.1 into step 1.2 and use $\ell_P^2=G_N\hbar/c^3$. The coefficient simplifies to $4\pi k_BG_N/(\hbar c)$, which has units $\mathrm{J\,K^{-1}\,kg^{-2}}$ before multiplication by the squared-mass difference; the result has units $\mathrm{J\,K^{-1}}$ and vanishes when $m_{*,1}=m_{*,2}$. [step 1.1, step 1.2, F2, A1, A2, algebra] ∎

## Remarks

The calculation concerns two hypothetical members of one selected stationary model family. It reports no measurement and assigns no preferred zero of entropy.
