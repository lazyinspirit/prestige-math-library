---
id: thm-tgr-electrochemical-stationarity
kind: theorem
title: Global electrochemical redshift from charged Liouville stationarity
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
deps:
  - def-tgr-charged-liouville-data
  - lem-tgr-charged-liouville-preserves-mass-shell
  - lem-tgr-gauge-killing-energy
  - lem-tgr-killing-thermal-normalization
  - lem-tgr-mass-shell-polynomial-rigidity
  - cor-zero-total-derivative-on-a-convex-open-set-is-constant
  - def-countable-choice
dependency_roles:
  def-tgr-charged-liouville-data: mathematical-premise
  lem-tgr-charged-liouville-preserves-mass-shell: mathematical-premise
  lem-tgr-gauge-killing-energy: mathematical-premise
  lem-tgr-killing-thermal-normalization: mathematical-premise
  lem-tgr-mass-shell-polynomial-rigidity: mathematical-premise
  cor-zero-total-derivative-on-a-convex-open-set-is-constant: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Jorge A. Rueda, Remo Ruffini and She-Sheng Xue, The Klein first integrals in an equilibrium system with electromagnetic, weak, strong and gravitational interactions, §4"
      url: https://arxiv.org/html/1104.4062
    - title: "Kai Shi, Yu Tian, Xiaoning Wu, Hongbao Zhang and Chuanjia Zhu, Thermodynamic equilibrium condition and the first law of thermodynamics for charged perfect fluids in electromagnetic and gravitational fields, §§2–3"
      url: https://arxiv.org/pdf/2108.08729
    - title: "David Tong, General Relativity lecture notes, §4.3.2"
      url: https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S4.html
    - title: "Igor Bogush, Kirill Kobialko and Dmitri Gal’tsov, Constructing massive particles surfaces in static spacetimes, arXiv:2402.03266v1, §II"
      url: https://arxiv.org/html/2402.03266
---

## Statement

Let $O$ be a connected domain with the stationary Lorentzian data, potential
$A$, field $F=dA$, Killing field $\xi$, lapse $N=\sqrt{-g(\xi,\xi)}$, future
unit stationary observer $u=\xi/N$, and charged transport on the future mass
shell from [[def-tgr-charged-liouville-data]]. Let $m>0$, $q\in\mathbb R$,
$\beta:=u/(k_BT)$ for a smooth proper-temperature scalar $T:O\to(0,\infty)$,
and $\zeta:=\mu/(k_BT)$ for a smooth chemical-potential scalar
$\mu:O\to\mathbb R$. Define $f(x,P)=\exp(\zeta+g(\beta,P))$. Without any global
potential-symmetry assumption,
$$\mathcal L_{F,q}f=0\quad\Longleftrightarrow\quad \beta\text{ is Killing and }d\zeta=-cq\,\iota_\beta F.$$

If, in addition, a global smooth compensator satisfies
$\mathcal L_\xi A=d\Lambda_\xi$, define $\Phi_\xi=-c(\iota_\xi A-\Lambda_\xi)$.
Then the stationarity conditions above are equivalent to the existence of
constants $T_K>0$ and $\mu_K\in\mathbb R$ such that
$$NT=T_K,\qquad \beta=\frac{\xi}{k_BT_K},\qquad N\mu+q\Phi_\xi=\mu_K.$$
With $E_{\rm loc}:=-g(P,u)$ and
$H_\xi:=-g(P,\xi)+q\Phi_\xi$, the same exponent then has both forms
$$\zeta+g(\beta,P)=-\frac{E_{\rm loc}-\mu}{k_BT} =-\frac{H_\xi-\mu_K}{k_BT_K}.$$
Here $N$ is dimensionless, $T,T_K$ are kelvins, $\mu,\mu_K,E_{\rm loc},H_\xi$
are joules per particle, $\Phi_\xi$ is volts, $q$ is coulombs, and
$\beta\cdot P$ and $\zeta$ are dimensionless. All claims are mathematical
conditional deductions from the displayed smooth data; no equilibrium state,
particle ensemble, or physical realization is asserted to exist.

## Facts & Assumptions

**Given:** Connected smooth time-oriented Lorentzian domain with signature
$(-,+,+,+)$, smooth $F=dA$ for a global $A$, future timelike Killing field
$\xi$, $m>0$, and smooth fields $T>0$ and $\mu$ with
$\beta=u/(k_BT)$ and $\zeta=\mu/(k_BT)$. A global compensator is additionally
assumed only in [A2].

[F1] [[def-tgr-charged-liouville-data]]: the future shell is
$g(P,P)=-M^2$ with $P$ future, $M=mc^2>0$; charged transport has covariant
vertical acceleration $cqF^a{}_bP^b$; and
$f=\exp(\zeta+g(\beta,P))$.

[F2] [[lem-tgr-charged-liouville-preserves-mass-shell]]: this charged transport
vector field restricts to a well-defined vector field on the future massive
shell.

[F3] [[lem-tgr-gauge-killing-energy]]: if
$\mathcal L_\xi A=d\Lambda_\xi$, then
$H_\xi=-g(P,\xi)+q\Phi_\xi=-g(P,\xi)-cq\Psi_\xi$ is constant along the
charged trajectory and $\iota_\xi F=-d\Psi_\xi$.

[F4] [[lem-tgr-killing-thermal-normalization]]: for the fields of the stationary thermal
carrier, $\beta$ is Killing if and only if $NT=T_K$ for a positive constant
$T_K$; when this holds $\beta=\xi/(k_BT_K)$, and those formulas conversely
make $\beta$ Killing.

[F5] [[lem-tgr-mass-shell-polynomial-rigidity]]: in a four-dimensional time-oriented Lorentz
vector space, for $M>0$, a symmetric bilinear form $A$ and covector $b$ with
$A(P,P)+b(P)=0$ for every future vector $P$ satisfying $g(P,P)=-M^2$ must both
vanish. Its separate null-shell clause is not used here.

[F6] [[cor-zero-total-derivative-on-a-convex-open-set-is-constant]]: a smooth
real function on a convex open subset of Euclidean space whose total
derivative vanishes everywhere is constant.

[F7] [[def-countable-choice]]: every sequence of nonempty sets has a choice
function. It is the inherited foundational assumption of the smooth tangent-bundle carrier; no stronger choice principle is used here.

[A1] $F=dA$ for a global smooth real one-form $A$; no condition on
$\mathcal L_\xi A$ is used in the first stationarity equivalence.

[A2] For the global electrochemical conclusion only, there is a global smooth
compensator $\Lambda_\xi$ with $\mathcal L_\xi A=d\Lambda_\xi$ on all of $O$;
no local potential patching or merely closed, non-exact $\iota_\xi F$ is
substituted.

[A3] $k_B>0$ is a fixed constant in joules per kelvin, $T$ is smooth and
positive, $\mu$ is smooth, and $q$ may be zero. The exponential $f$ is
strictly positive.

## Proof



1.1 Since $f>0$, $\mathcal L_{F,q}f=0$ is equivalent to
$\mathcal L_{F,q}(\zeta+g(\beta,P))=0$. In a chart, the connection term in the
vertical part of $\mathcal L_{F,q}$ combines with
$P^a\partial_a\beta_b$ to give $P^aP^b\nabla_a\beta_b$; its electromagnetic
part gives $cq\beta^aF_{ab}P^b$. Thus on the future shell
$$\frac{\mathcal L_{F,q}f}{f} =P^aP^b\nabla_{(a}\beta_{b)} +P^b\bigl(\nabla_b\zeta+cq\beta^aF_{ab}\bigr).$$
The stationarity equation sets this quadratic-plus-linear expression to zero
for every future massive shell vector. [given, F1, F2, A1, A3, algebra]

2.1 If $\mathcal L_{F,q}f=0$, apply [F5] pointwise to
$A_{ab}:=\nabla_{(a}\beta_{b)}$ and
$b_b:=\nabla_b\zeta+cq\beta^aF_{ab}$. It gives
$\nabla_{(a}\beta_{b)}=0$ and
$d\zeta=-cq\,\iota_\beta F$. Conversely these equations make both terms in
the expression of step 1.1 vanish for every shell vector, so
$\mathcal L_{F,q}f=0$. This proves the first equivalence using the exact massive-shell clause of [F5]. [given, F5, F7, step 1.1, algebra]

3.1 Now impose the additional global condition [A2]. In the stationary setting
$\beta=u/(k_BT)$ is collinear with $\xi$.
When the first condition holds, the thermal-normalization interface [F4] gives a
constant $T_K>0$ with
$NT=T_K$ and $\beta=\xi/(k_BT_K)$. By [F3],
$\iota_\xi F=-d\Psi_\xi$ and $\Phi_\xi=-c\Psi_\xi$, hence
$\iota_\xi F=d\Phi_\xi/c$. Substitution into the second condition gives
$$d\zeta=-cq\,\iota_\beta F =-\frac{cq}{k_BT_K}\,\iota_\xi F =-\frac{q}{k_BT_K}\,d\Phi_\xi.$$
Therefore $d(\zeta+q\Phi_\xi/(k_BT_K))=0$. [given, A2, F3, F4, step 2.1, algebra]

3.2 Conversely, under [A2], suppose the three displayed redshift equations
hold. Then
$\beta=\xi/(k_BT_K)$ is Killing since $T_K$ is constant and $\xi$ is Killing.
Also $\zeta+q\Phi_\xi/(k_BT_K)=\mu_K/(k_BT_K)$ is constant, so
$d\zeta=-q\,d\Phi_\xi/(k_BT_K)=-cq\,\iota_\beta F$ by [F3]. Step 2.1 then
gives $\mathcal L_{F,q}f=0$. [given, A2, F3, step 2.1, algebra]

4.1 Around every point choose a chart whose image contains a convex open ball.
The chain rule and
$d(\zeta+q\Phi_\xi/(k_BT_K))=0$ give zero total derivative for the coordinate
representative on that ball, so [F6] makes it
constant there. It is therefore locally constant on $O$. The level set of
this function through any chosen point is nonempty and open, and its
complement is also open because the function is locally constant. Connectedness
of $O$ forces that level set to be all of $O$. Write its constant value as
$\mu_K/(k_BT_K)$. Multiplying
$\zeta+q\Phi_\xi/(k_BT_K)=\mu_K/(k_BT_K)$ by $k_BT_K=k_BNT$ yields
$N\mu+q\Phi_\xi=\mu_K$. [given, F6, step 3.1, algebra]

5.1 Finally [F3] gives $H_\xi=-g(P,\xi)+q\Phi_\xi$. Since
$\xi=Nu$ and $E_{\rm loc}=-g(P,u)$, $-g(P,\xi)=NE_{\rm loc}$. Using
$NT=T_K$ and $N\mu+q\Phi_\xi=\mu_K$,
$$-\frac{H_\xi-\mu_K}{k_BT_K} =-\frac{NE_{\rm loc}+q\Phi_\xi-\mu_K}{k_BNT} =-\frac{E_{\rm loc}-\mu}{k_BT} =\zeta+g(\beta,P).$$
This is an algebraic equality of dimensionless exponents; it asserts no
statistical preparation or normalization. [given, A2, F1, F3, step 4.1, algebra] ∎
## Remarks

The source treatments cover narrower fluid or symmetry-invariant-potential
settings. The local proof keeps the exact whole-mass-shell condition and the
global potential symmetry explicit. The TGR-ET01 thermal-normalization and massive-shell suppliers provide the
exact connected-domain and positive-mass interfaces used above.
