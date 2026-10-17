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

On the strictly subextremal open parameter family $\mathcal P$ of [[def-tgr-horizon-screen-family]], use the outer-horizon functions $(r_+,D,A,j,\kappa_{\rm KN},\Omega_{\rm KN},\Phi_{\rm KN})$ defined there. These functions give the exact selected-model outer-horizon data throughout $\mathcal P$: [[prop-emg-xs-kn-horizon-data]] verifies every point with $a^2+q^2>0$, and [[lem-tgr-schwarzschild-horizon-data]] verifies the Schwarzschild slice $m>0$, $a=q=0$. On $\mathcal P$ the following identities of one-forms and functions hold:
$$dm=\frac{\kappa_{\rm KN}}{8\pi}\,dA+\Omega_{\rm KN}\,dj+\Phi_{\rm KN}\,dq,$$
$$m=\frac{\kappa_{\rm KN}A}{4\pi}+2\Omega_{\rm KN}j+\Phi_{\rm KN}q.$$
For each fixed pair $(a_0,q_0)$, on the connected subfamily $I_{a_0,q_0}:=\{m>\sqrt{a_0^2+q_0^2}\}$ with $a=a_0$ and $q=q_0$, the correct pullback retains the angular-momentum work term $dj=a_0\,dm$:
$$\frac{\kappa_{\rm KN}}{8\pi}\,dA=\frac{r_+^2}{D}\,dm.$$
For every $b>0$ and $s_*\in\mathbb R$, define on $\mathcal P$
$$T_b:=b\kappa_{\rm KN},\qquad S_{b,s_*}:=\frac{A}{8\pi b}+s_*.$$
Their product on this fixed-$(a,q)$ subfamily is therefore $T_b\,dS_{b,s_*}=(r_+^2/D)\,dm$.

There is also a work-free subfamily for each fixed pair of angular-momentum and charge values $(j_0,q_0)\in\mathbb R^2$. Put
$$m_0:=\sqrt{\frac{q_0^2+\sqrt{q_0^4+4j_0^2}}2},\qquad J_{j_0,q_0}:=(m_0,\infty),\qquad \iota_{j_0,q_0}(m):=(m,j_0/m,q_0).$$
This is a smooth parametrization into $\mathcal P$ of the connected subfamily with $j=j_0$ and $q=q_0$. On this subfamily $dj=dq=0$, $\kappa_{\rm KN}>0$, and
$$dm=\frac{\kappa_{\rm KN}}{8\pi}\,dA=T_b\,dS_{b,s_*}.$$
All functions in these subfamily identities mean their pullbacks by the indicated parametrizations. On each of the two types of subfamily, distinct positive $b$ and distinct offsets give distinct real-valued functions, so the geometric first-law product alone fixes neither this temperature scale nor the absolute entropy offset. These are mathematical functions; no operational temperature, physical entropy, quantum calibration, or process statement is asserted.

## Facts & Assumptions

**Given:** The open set $\mathcal P=\{(m,a,q)\in\mathbb R^3:m>0,\ m^2>a^2+q^2\}$, the functions of [[def-tgr-horizon-screen-family]], the exact selected-model outer-horizon interfaces, and the abstract calibration lemma stated below.

[F1] [[def-tgr-horizon-screen-family]]: $s=\sqrt{m^2-a^2-q^2}>0$, $r_+=m+s$, $D=r_+^2+a^2$, $A=4\pi D$, $j=ma$, $\kappa_{\rm KN}=s/D$, $\Omega_{\rm KN}=a/D$, and $\Phi_{\rm KN}=qr_+/D$ are smooth on $\mathcal P$; $D>0$.

[F2] [[prop-emg-xs-kn-horizon-data]]: for $M>0$ and $M^2\ge a^2+q^2>0$, the exact selected ingoing KN model has an outer null Killing horizon with $\Omega_H=a/R_H$, $\kappa_H=(r_H-r_{\rm other})/(2R_H)$, section area $4\pi R_H$, and constant potential $q r_H/R_H$. With $M=m$ and $r_H=r_+$, these equal the functions in [F1] wherever $a^2+q^2>0$. The supplier proves these interface formulas locally and asserts no uniqueness or formation theorem.

[F3] [[lem-tgr-schwarzschild-horizon-data]]: at $a=q=0$, the exact selected ingoing KN metric has the null Killing horizon $r=2m$, future generator $\partial_v$, area $16\pi m^2$, signed surface gravity $1/(4m)$, and zero angular velocity, potential and angular-momentum parameter.

[F4] [[lem-tgr-first-law-calibration-freedom]]: if a nonempty connected smooth parameter space has smooth $E,A,\kappa$, constant $C>0$, $\kappa>0$ and $dE=C\kappa\,dA$, then for every $b>0,s_*\in\mathbb R$, $T_b=b\kappa$ and $S_{b,s_*}=(C/b)A+s_*$ satisfy $T_b\,dS_{b,s_*}=dE$, with distinct scales and offsets remaining distinct.

[A1] The parameter domain is the open smooth subset $\mathcal P$; all differentials are ordinary differentials of its real-valued coordinate functions. No physical units or empirical assumptions are attached to these parameters.

## Proof

1.1 Each point of $\mathcal P$ either has $a^2+q^2>0$ or lies on the Schwarzschild slice $m>0$, $a=q=0$. In the first case, $m>0$ and $m^2>a^2+q^2>0$, so [F2] applies with $M=m$. On that entire slice, [F3] supplies the exact Schwarzschild horizon data. Thus the geometric functions used in the proposition agree with the selected-model horizon data everywhere on $\mathcal P$. [F1, F2, F3, A1, algebra]

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

3.1 Fix $(a_0,q_0)$ and let $I_{a_0,q_0}=(\sqrt{a_0^2+q_0^2},\infty)$ with the parametrization $m\mapsto(m,a_0,q_0)$. This is a nonempty connected open interval in the strict family, where $\kappa_{\rm KN}>0$ and $D>0$. Here $da=dq=0$ but $dj=a_0\,dm$, so step 2.1 gives $dm=(\kappa_{\rm KN}/(8\pi))dA+(a_0^2/D)dm$. Since $D=r_+^2+a_0^2$, rearrangement yields $(\kappa_{\rm KN}/(8\pi))dA=(r_+^2/D)dm$. For the displayed functions $T_b,S_{b,s_*}$ one always has $T_b\,dS_{b,s_*}=(\kappa_{\rm KN}/(8\pi))dA$ by direct differentiation. Their product on this fixed-$(a,q)$ subfamily is therefore the asserted weighted form; it equals $dm$ when $a_0=0$. Since $\kappa_{\rm KN}>0$ on this nonempty interval, unequal positive $b$ give different $T_b$ there, and unequal offsets give different $S_{b,s_*}$ without changing its differential. [F1, step 2.1, A1, algebra]

4.1 Now fix $(j_0,q_0)$ and set $y_\pm:=(q_0^2\pm\sqrt{q_0^4+4j_0^2})/2$, so $y_-\le0\le y_+=m_0^2$. Since $m>m_0\ge0$, $m>0$ and $a=j_0/m$ is smooth. The strict family inequality is equivalent to $m^4-q_0^2m^2-j_0^2>0$. With $y=m^2>0$ this polynomial is $(y-y_+)(y-y_-)$; its second factor is positive, so the inequality holds exactly when $m>m_0$. Thus $\iota_{j_0,q_0}$ parametrizes the whole fixed-$(j,q)$ subfamily over the nonempty connected interval $J_{j_0,q_0}$. Its first coordinate is $m$, so it is injective with nonzero differential and the first-coordinate projection is its smooth inverse onto its image. All restricted functions are smooth and $\kappa_{\rm KN}>0$. Along this parametrization $j=m(j_0/m)=j_0$ and $q=q_0$, hence $dj=dq=0$; step 2.1 yields $dm=(\kappa_{\rm KN}/(8\pi))dA$. Apply [F4] on this interval with $E(m)=m$, $C=1/(8\pi)$ and the restricted $A,\kappa_{\rm KN}$. It gives the asserted work-free product and its distinct scales and offsets. Together with step 3.1, this proves both the weighted fixed-$(a,q)$ restriction and the work-free fixed-$(j,q)$ calibration without dropping a work term or assigning a physical meaning. [F1, F4, step 2.1, step 3.1, A1, algebra] ∎

## Remarks

The first identity is a differential identity on the exact selected family, not a dynamical-process law. The proof uses the exact horizon formulas on $\mathcal P\setminus\{a=q=0\}$ and the separately proved Schwarzschild slice excluded by the nonzero-rotation-or-charge hypothesis of [[prop-emg-xs-kn-horizon-data]]. No extremal differentiation or thermodynamic identification is inferred.

