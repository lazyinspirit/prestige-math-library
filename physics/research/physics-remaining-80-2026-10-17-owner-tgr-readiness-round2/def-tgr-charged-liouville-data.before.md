---
id: def-tgr-charged-liouville-data
kind: definition
title: Charged particle and Liouville data on a stationary Lorentzian domain
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-tgr-stationary-thermal-carriers
  - def-countable-choice
dependency_roles:
  def-tgr-stationary-thermal-carriers: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by:
  - lem-tgr-charged-liouville-preserves-mass-shell
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, General Relativity lecture notes, §4.3.2, Killing fields and conserved particle quantities"
      url: https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S4.html
    - title: "Igor Bogush, Kirill Kobialko and Dmitri Gal’tsov, Constructing massive particles surfaces in static spacetimes, arXiv:2402.03266v1, §II"
      url: https://arxiv.org/html/2402.03266
---

## Definition

Use SI dimensions and the signature $(-,+,+,+)$. Take the geometric data of
[[def-tgr-stationary-thermal-carriers]]: $O$ is a nonempty connected open domain in a
smooth oriented, time-oriented Lorentzian four-manifold $(M,g)$, $\nabla$ is the
Levi–Civita connection, and $\xi$ is a smooth future-directed timelike Killing
field with dimensionless components in physical length coordinates $x^0=ct$
and $x^i$ measured in metres. Put $N:=\sqrt{-g(\xi,\xi)}>0$ and
$u:=\xi/N$, so $g(u,u)=-1$. The current carrier item is a draft and the
TGR-ET01 page manifest remains empty, so this definition uses the inspected
interface conditionally and does not certify proof approval. Its smooth
tangent-bundle data carry the supplier's explicit foundational assumption
[[def-countable-choice]] ($\mathrm{AC}_\omega$); no stronger choice principle
is added here.

For a smooth real one-form $A$ on $O$, define the electromagnetic two-form by
$$F_{ab}:=(dA)_{ab}:=\partial_aA_b-\partial_bA_a.$$
Here $A_a$ has units tesla metres and $F_{ab}$ has units tesla. A global gauge
compensator is a smooth real function $\Lambda_\xi$ on $O$ satisfying
$$(\mathcal L_\xi A)_a:=\xi^b\partial_bA_a+A_b\partial_a\xi^b =\partial_a\Lambda_\xi.$$
The units of $\Lambda_\xi$ are tesla metres. Define contraction by
$(\iota_\xi F)_a:=\xi^bF_{ba}$ and set
$$\Psi_\xi:=\xi^aA_a-\Lambda_\xi,\qquad \Phi_\xi:=-c\Psi_\xi.$$
Thus $\Psi_\xi$ has units tesla metres and $\Phi_\xi$ has units volts.

Let $c>0$ be the speed of light, let $m>0$ be a particle rest mass in
kilograms, let $q\in\mathbb R$ be its charge in coulombs, and put
$M:=mc^2>0$ joules. A charged massive Lorentz trajectory is a $C^2$ curve
$x:J\to O$, where $J$ is an open real interval, parametrized by physical
length $s_m=c\tau$ in metres, with future unit tangent
$w:=dx/ds_m$, $g(w,w)=-1$, energy four-vector $P:=Mw$, and equation
$$\nabla_wP^a=cqF^a{}_bw^b,\qquad F^a{}_b:=g^{ac}F_{cb}.$$
In particular $g(P,P)=-M^2$ and $P$ is future directed. This is a conditional
definition of curves satisfying the equation; it makes no existence claim.

The future massive shell for this definition is the subset
$$\mathcal P_M^+(O):=\{(x,P)\in TO:g_x(P,P)=-M^2,\ P\text{ future directed}\}.$$
On the full tangent bundle $TO$, define charged transport as the vector field
whose integral curves, with parameter $\lambda=s_m/M$, satisfy
$$\frac{dx^a}{d\lambda}=P^a,\qquad \nabla_{dx/d\lambda}P^a=cqF^a{}_bP^b.$$
In a smooth chart its expression is
$$\mathcal L_{F,q}:=P^a\partial_{x^a}+\left(-\Gamma^a{}_{bc}P^bP^c+cqF^a{}_bP^b\right)\partial_{P^a}.$$
The restriction of this field to $\mathcal P_M^+(O)$ is justified by
[[lem-tgr-charged-liouville-preserves-mass-shell]]. For any smooth real scalar
$\zeta$ and smooth vector field $\beta$ with components in inverse joules,
define the dimensionless charged exponential ansatz on the shell by
$$f(x,P):=\exp\!\left(\zeta(x)+g_x(\beta(x),P)\right),\qquad \beta_b:=g_{bc}\beta^c.$$
The equation $\mathcal L_{F,q}f=0$ means that the derivative of this function
along the restricted charged transport vector field vanishes.

Under a smooth gauge change $A\mapsto A+d\chi$, with $\chi$ in tesla square
metres, the corresponding compensator changes by
$\Lambda_\xi\mapsto\Lambda_\xi+\xi(\chi)$. These definitions fix the sign
convention for $F$, the Lorentz force, and the potential terms used on this
page.
