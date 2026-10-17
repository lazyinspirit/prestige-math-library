---
id: def-tgr-charged-liouville-data
kind: definition
title: Charged particle and Liouville data on a stationary Lorentzian domain
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
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
$u:=\xi/N$, so $g(u,u)=-1$. Its smooth
tangent-bundle data carry the supplier's explicit foundational assumption
[[def-countable-choice]] ($\mathrm{AC}_\omega$); no stronger choice principle
is added here.

Let $A$ be a smooth real one-form on $O$: for each $x\in O$, $A_x:T_xO\to\mathbb R$
is linear, and in every smooth chart $(x^a)$ its coefficients $A_a$ are smooth
and obey the covector transformation law $A'_i=A_a\,\partial x^a/\partial y^i$
on an overlapping chart $(y^i)$. The coefficients have units tesla metres.
Define $F$ in each chart by
$$F_{ab}:=(dA)_{ab}:=\partial_aA_b-\partial_bA_a.$$
This prescription defines a global smooth antisymmetric covariant two-tensor:
under a change of chart $x=x(y)$ the chain rule gives
$$F'_{ij}=F_{ab}\,\frac{\partial x^a}{\partial y^i}\frac{\partial x^b}{\partial y^j},$$
since the only additional term is
$A_a(\partial_i\partial_jx^a-\partial_j\partial_ix^a)=0$. Thus $F=dA$ is a two-form;
its components have units tesla. A global gauge compensator is a smooth real
function $\Lambda_\xi$ on $O$ satisfying
$$\mathcal L_\xi A=d\Lambda_\xi,\qquad (\mathcal L_\xi A)_a:=\xi^b\partial_bA_a+A_b\partial_a\xi^b$$
in every smooth chart. This defines the Lie-derivative coefficients globally:
under $x=x(y)$, put $J^a_i:=\partial x^a/\partial y^i$ and
$K^i_a:=\partial y^i/\partial x^a$. Substitution of
$A'_i=A_aJ^a_i$ and $\xi'^i=K^i_a\xi^a$ gives
$$ (\mathcal L_\xi A)'_i=\xi^b(\partial_bA_a)J^a_i+\xi^bA_aK^j_b\partial_jJ^a_i+A_cJ^c_j(\partial_iK^j_b)\xi^b+A_bJ^a_i\partial_a\xi^b. $$
Differentiating $J^c_jK^j_b=\delta^c_b$ and using
$\partial_jJ^a_i=\partial_iJ^a_j$ cancels the two middle terms, leaving
$(\mathcal L_\xi A)'_i=(\mathcal L_\xi A)_aJ^a_i$. The units of
$\Lambda_\xi$ are
tesla metres. No global compensator is assumed to exist for an arbitrary
smooth $A$. Define contraction by $(\iota_\xi F)_a:=\xi^bF_{ba}$.
When a global smooth compensator $\Lambda_\xi:O\to\mathbb R$ satisfying
$\mathcal L_\xi A=d\Lambda_\xi$ is supplied as additional data, set
$$\Psi_\xi:=\xi^aA_a-\Lambda_\xi,\qquad \Phi_\xi:=-c\Psi_\xi.$$
Thus $\Psi_\xi$ has units tesla metres and $\Phi_\xi$ has units volts.
These two scalars are defined only for such supplied compensated data;
the trajectory, mass shell, transport and ansatz below require no compensator.

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
metres, a supplied compensator changes by
$\Lambda_\xi\mapsto\Lambda_\xi+\xi(\chi)$. These definitions fix the sign
convention for $F$, the Lorentz force, and the potential terms used on this
page.
