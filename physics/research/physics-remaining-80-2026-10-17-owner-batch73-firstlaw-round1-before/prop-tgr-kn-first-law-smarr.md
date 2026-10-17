---
id: prop-tgr-kn-first-law-smarr
kind: proposition
title: Verified Kerr-Newman family first law and Smarr identity
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 9
deps:
  - def-tgr-horizon-screen-family
  - prop-emg-xs-kn-horizon-data
  - lem-tgr-schwarzschild-horizon-data
  - lem-tgr-first-law-calibration-freedom
dependency_roles:
  def-tgr-horizon-screen-family: mathematical-premise
  prop-emg-xs-kn-horizon-data: mathematical-premise
  lem-tgr-schwarzschild-horizon-data: mathematical-premise
  lem-tgr-first-law-calibration-freedom: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), complete 238-page lecture notes"
      url: https://arxiv.org/pdf/gr-qc/9712019
      locator: "Chapter 7, equations (7.148)–(7.156), printed pp. 215–216 (PDF pp. 221–222), for Kerr area, surface gravity and classical first-law context; its derivation is restricted to Kerr and not used here."
    - title: "Robert M. Wald, The Thermodynamics of Black Holes, Living Reviews in Relativity 4 (2001), 6"
      url: https://arxiv.org/pdf/gr-qc/9912119
      locator: "Section 2, equations (5), (7)–(9), PDF pp. 6–8, for stationary mechanical first-law scope and the distinction between the classical identity and thermodynamic identification."
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2"
      url: https://arxiv.org/pdf/1410.6626
      locator: "Section 4, equations (4.1)–(4.2), printed pp. 20–21 (PDF pp. 21–22), for KN area and the separate thermodynamic analogy; the differential and Smarr identities are proved here."
verification:
  precheck: pending
---

## Statement

On the strictly subextremal open parameter family $\mathcal P$ of [[def-tgr-horizon-screen-family]], use the outer-horizon functions $(r_+,D,A,j,\kappa_{\rm KN},\Omega_{\rm KN},\Phi_{\rm KN})$ defined there. These functions give the exact selected-model outer-horizon data throughout $\mathcal P$: [[prop-emg-xs-kn-horizon-data]] verifies every point with $a^2+q^2>0$, and [[lem-tgr-schwarzschild-horizon-data]] verifies the remaining point $a=q=0$. On $\mathcal P$ the following identities of one-forms and functions hold:
$$dm=\frac{\kappa_{\rm KN}}{8\pi}\,dA+\Omega_{\rm KN}\,dj+\Phi_{\rm KN}\,dq,$$
$$m=\frac{\kappa_{\rm KN}A}{4\pi}+2\Omega_{\rm KN}j+\Phi_{\rm KN}q.$$
For each fixed pair $(a_0,q_0)$, on the connected subfamily $I_{a_0,q_0}:=\{m>\sqrt{a_0^2+q_0^2}\}$ these reduce to $dm=(\kappa_{\rm KN}/8\pi)dA$. Hence, for every $b>0$ and $s_*\in\mathbb R$, the functions
$$T_b:=b\kappa_{\rm KN},\qquad S_{b,s_*}:=\frac{A}{8\pi b}+s_*$$
satisfy $T_b\,dS_{b,s_*}=dm$ on that fixed-parameter subfamily. Distinct $b$ and distinct offsets give distinct real-valued functions there, so the geometric first-law product alone fixes neither this temperature scale nor the absolute entropy offset. These are mathematical functions; no operational temperature, physical entropy, quantum calibration, or process statement is asserted.

## Facts & Assumptions

**Given:** The open set $\mathcal P=\{(m,a,q)\in\mathbb R^3:m>0,\ m^2>a^2+q^2\}$, the functions of [[def-tgr-horizon-screen-family]], the exact selected-model outer-horizon interfaces, and the abstract calibration lemma stated below.

[F1] [[def-tgr-horizon-screen-family]]: $s=\sqrt{m^2-a^2-q^2}>0$, $r_+=m+s$, $D=r_+^2+a^2$, $A=4\pi D$, $j=ma$, $\kappa_{\rm KN}=s/D$, $\Omega_{\rm KN}=a/D$, and $\Phi_{\rm KN}=qr_+/D$ are smooth on $\mathcal P$; $D>0$.

[F2] [[prop-emg-xs-kn-horizon-data]]: for $M>0$ and $M^2\ge a^2+q^2>0$, the exact selected ingoing KN model has an outer null Killing horizon with $\Omega_H=a/R_H$, $\kappa_H=(r_H-r_{\rm other})/(2R_H)$, section area $4\pi R_H$, and constant potential $q r_H/R_H$. With $M=m$ and $r_H=r_+$, these equal the functions in [F1] wherever $a^2+q^2>0$. The supplier proves these interface formulas locally and asserts no uniqueness or formation theorem.

[F3] [[lem-tgr-schwarzschild-horizon-data]]: at $a=q=0$, the exact selected ingoing KN metric has the null Killing horizon $r=2m$, future generator $\partial_v$, area $16\pi m^2$, signed surface gravity $1/(4m)$, and zero angular velocity, potential and angular-momentum parameter.

[F4] [[lem-tgr-first-law-calibration-freedom]]: if a nonempty connected smooth parameter space has smooth $E,A,\kappa$, constant $C>0$, $\kappa>0$ and $dE=C\kappa\,dA$, then for every $b>0,s_*\in\mathbb R$, $T_b=b\kappa$ and $S_{b,s_*}=(C/b)A+s_*$ satisfy $T_b\,dS_{b,s_*}=dE$, with distinct scales and offsets remaining distinct.

[A1] The parameter domain is the open smooth subset $\mathcal P$; all differentials are ordinary differentials of its real-valued coordinate functions. No physical units or empirical assumptions are attached to these parameters.

## Proof

1.1 Each point of $\mathcal P$ either has $a^2+q^2>0$ or is the single point with $a=q=0$. In the first case, $m>0$ and $m^2>a^2+q^2>0$, so [F2] applies with $M=m$. At the remaining point, [F3] supplies the exact Schwarzschild horizon data. Thus the geometric functions used in the proposition agree with the selected-model horizon data everywhere on $\mathcal P$. [F1, F2, F3, A1, algebra]

1.2 Put $s=\sqrt{m^2-a^2-q^2}>0$, so $r_+=m+s$ and $r_-=m-s$. Then $\Delta(r):=r^2-2mr+a^2+q^2=(r-r_+)(r-r_-)$, and $\Delta(r_+)=0$. Differentiating this identity on the open parameter domain gives
$$(r_+-m)\,dr_+=r_+\,dm-a\,da-q\,dq.$$
Also $dA=8\pi(r_+\,dr_++a\,da)$ and $dj=a\,dm+m\,da$. [F1, A1, algebra]

2.1 Multiply the proposed first-law right side by $D$ and substitute [F1]:
$$D\left(\frac{\kappa_{\rm KN}}{8\pi}dA+\Omega_{\rm KN}dj+\Phi_{\rm KN}dq\right)=(r_+-m)(r_+\,dr_++a\,da)+a(a\,dm+m\,da)+q r_+\,dq.$$
Using step 1.2 to replace $r_+(r_+-m)dr_+$ by $r_+^2dm-a r_+da-q r_+dq$, the $da$ and $dq$ coefficients cancel, leaving $(r_+^2+a^2)dm=Ddm$. Since $D>0$, division yields the first identity. [F1, step 1.2, algebra]

2.2 For the Smarr identity, [F1] gives
$$D\left(\frac{\kappa_{\rm KN}A}{4\pi}+2\Omega_{\rm KN}j+\Phi_{\rm KN}q\right)=(r_+-m)D+2ma^2+q^2r_+.$$
The horizon equation $\Delta(r_+)=0$ gives $q^2=2mr_+-r_+^2-a^2$. Substitution and expansion reduce the right side to
$$(r_+-m)(r_+^2+a^2)+2ma^2+r_+(2mr_+-r_+^2-a^2)=m(r_+^2+a^2)=mD.$$
Division by $D>0$ proves the Smarr identity. [F1, step 1.2, algebra]

3.1 Fix $(a_0,q_0)$ and let $I_{a_0,q_0}=(\sqrt{a_0^2+q_0^2},\infty)$, a nonempty connected open interval. The restrictions of the functions in [F1] are smooth and $\kappa_{\rm KN}>0$. Step 2.1 with $da=dq=0$ gives $dm=(1/(8\pi))\kappa_{\rm KN}\,dA$ on this interval. Apply [F4] with $E(m)=m$, $C=1/(8\pi)$ and $\kappa=\kappa_{\rm KN}$; it gives, for every $b>0,s_*\in\mathbb R$, $T_b=b\kappa_{\rm KN}$ and $S_{b,s_*}=A/(8\pi b)+s_*$ with $T_b\,dS_{b,s_*}=dm$. Since the interval is nonempty and $\kappa_{\rm KN}>0$, unequal $b$ yield unequal $T_b$ there; unequal offsets give unequal $S_{b,s_*}$ while changing neither its differential nor the product. This proves the calibration claim without assigning these functions physical meanings. [F1, F4, step 2.1, A1, algebra] ∎

## Remarks

The first identity is a differential identity on the exact selected family, not a dynamical-process law. The proof uses the exact horizon formulas on $\mathcal P\setminus\{a=q=0\}$ and the separately proved Schwarzschild special case at the excluded point of [[prop-emg-xs-kn-horizon-data]]. No extremal differentiation or thermodynamic identification is inferred.

