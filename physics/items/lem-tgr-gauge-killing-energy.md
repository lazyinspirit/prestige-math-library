---
id: lem-tgr-gauge-killing-energy
kind: lemma
title: Gauge-compensated charged Killing energy
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-tgr-charged-liouville-data
  - def-countable-choice
  - cor-zero-derivative-implies-constant
dependency_roles:
  def-tgr-charged-liouville-data: mathematical-premise
  def-countable-choice: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "David Tong, General Relativity lecture notes, §4.3.2, Killing fields and conserved particle quantities"
      url: https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S4.html
    - title: "Igor Bogush, Kirill Kobialko and Dmitri Gal’tsov, Constructing massive particles surfaces in static spacetimes, arXiv:2402.03266v1, §II"
      url: https://arxiv.org/html/2402.03266
    - title: "Kai Shi, Yu Tian, Xiaoning Wu, Hongbao Zhang and Chuanjia Zhu, Thermodynamic equilibrium condition and the first law of thermodynamics for charged perfect fluids in electromagnetic and gravitational fields, §§2–3"
      url: https://arxiv.org/pdf/2108.08729
---

## Statement

Use the Lorentzian geometry, units, charge sign, potential $A$, field $F=dA$,
compensator $\Lambda_\xi$, and $C^2$ charged trajectory $x(s_m)$ of
[[def-tgr-charged-liouville-data]]. Assume the global potential symmetry
$\mathcal L_\xi A=d\Lambda_\xi$. Define
$$H_\xi:=-g(P,\xi)+q\Phi_\xi=-g(P,\xi)-cq\Psi_\xi.$$
Then $\iota_\xi F=-d\Psi_\xi$, and $H_\xi$ is constant along every interval
on which the trajectory obeys the stated Lorentz equation. It is invariant under
$A\mapsto A+d\chi$, $\Lambda_\xi\mapsto\Lambda_\xi+\xi(\chi)$. Replacing the
potential reference by $\Phi_\xi+C_0$ changes $H_\xi$ by $qC_0$.

This is a conditional mathematical statement about curves satisfying the
displayed equation. It asserts neither existence of such curves for arbitrary
initial data nor that the model describes nature.

## Facts & Assumptions

**Given:** A connected domain $O$, a smooth future timelike Killing field
$\xi$, a global smooth real one-form $A$ with $F=dA$, a smooth scalar
$\Lambda_\xi$ with $\mathcal L_\xi A=d\Lambda_\xi$, and a $C^2$ future unit
trajectory $x(s_m)$ with $P=Mw$, $M=mc^2>0$, satisfying
$\nabla_wP^a=cqF^a{}_bw^b$.

[F1] [[def-tgr-charged-liouville-data]]: $P=Mw$ with $g(w,w)=-1$,
$F_{ab}=\partial_aA_b-\partial_bA_a$,
$(\mathcal L_\xi A)_a=\xi^b\partial_bA_a+A_b\partial_a\xi^b$,
$(\iota_\xi F)_a=\xi^bF_{ba}$,
$\Psi_\xi=\xi^aA_a-\Lambda_\xi$, and $\Phi_\xi=-c\Psi_\xi$.

[F2] [[def-countable-choice]]: every sequence of nonempty sets has a choice
function. This inherited assumption is part of the actual draft stationary
thermal geometry carrier; the trajectory calculation invokes no stronger
choice principle.

[F3] [[cor-zero-derivative-implies-constant]]: a real function continuous on
an interval and differentiable at each interior point, with zero derivative at
each such point, is constant on the interval.

[A1] The stationary field satisfies the Killing equation
$\nabla_{(a}\xi_{b)}=0$, and the Lorentz force equation is
$\nabla_wP^a=cqF^a{}_bw^b$.

## Proof



1.1 In any coordinate chart, $(\iota_\xi F)_a=\xi^b(\partial_bA_a-\partial_aA_b)$ and $d(\iota_\xi A)_a=\partial_a(\xi^bA_b)$. Adding these identities gives $(\iota_\xi F)_a+d(\iota_\xi A)_a=\xi^b\partial_bA_a+A_b\partial_a\xi^b=(\mathcal L_\xi A)_a$. Using $\mathcal L_\xi A=d\Lambda_\xi$ and [F1], this yields $\iota_\xi F=d\Lambda_\xi-d(\iota_\xi A)=-d\Psi_\xi$. [given, F1, algebra]

2.1 Metric compatibility and $P=Mw$ yield
$$\frac{d}{ds_m}g(P,\xi) =cq\,g(F^\sharp(w),\xi)+M w^a w^b\nabla_b\xi_a =cq\,(\iota_\xi F)(w) =-cq\,w(\Psi_\xi).$$
The middle Killing term vanishes because $w^aw^b$ is symmetric and
$\nabla_{(a}\xi_{b)}=0$; the force contraction has the displayed sign since
$g(F^\sharp(w),\xi)=\xi^cF_{cb}w^b$. [given, F1, F2, A1, step 1.1, algebra]

3.1 Since $d\Psi_\xi/ds_m=w(\Psi_\xi)$ and $q\Phi_\xi=-cq\Psi_\xi$,
$$\frac{dH_\xi}{ds_m} =-\frac{d}{ds_m}g(P,\xi)-cq\,w(\Psi_\xi) =0.$$
The curve is $C^2$ and the fields are smooth, so $H_\xi$ is $C^1$ and hence
continuous on $J$. Its derivative is zero by step 2.1; since the open interval
$J$ is order-convex, [F3] makes $H_\xi$ constant there. [given, F3, step 2.1, algebra]

4.1 Under $A'=A+d\chi$, $dA'=F$ because the coordinate mixed partials of the smooth scalar $\chi$ commute. Also $(\mathcal L_\xi d\chi)_a=\xi^b\partial_b\partial_a\chi+(\partial_a\xi^b)\partial_b\chi=\partial_a(\xi^b\partial_b\chi)$, so $\Lambda'_\xi:=\Lambda_\xi+\xi(\chi)$ satisfies $\mathcal L_\xi A'=d\Lambda'_\xi$. Since $(\iota_\xi d\chi)=\xi(\chi)$, $\Psi'_\xi=\Psi_\xi$ and $H'_\xi=H_\xi$. Replacing $\Lambda_\xi$ by $\Lambda_\xi+C_0/c$ leaves $d\Lambda_\xi$ fixed and sends $\Phi_\xi$ to $\Phi_\xi+C_0$, so $H_\xi$ changes by $qC_0$. [given, F1, algebra] ∎
## Remarks

For a global grand-canonical multiplier $\mu_K$, the reference shift
$\Phi_\xi\mapsto\Phi_\xi+C_0$ is accompanied by
$\mu_K\mapsto\mu_K+qC_0$; hence $H_\xi-\mu_K$ is reference independent. The
source treatments are context only: the proof above fixes its own Lorentz-force
and potential conventions and does not assume a fluid model.
