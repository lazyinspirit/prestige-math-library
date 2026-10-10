---
id: ex-sr-equal-mass-head-on-collision-mass
kind: example
title: "Two equal masses in head-on motion: system mass exceeds the sum of the masses"
status: draft
origin: pipeline
domain: mathematics
deps:
  - ex-sr-four-momentum-at-beta-three-fifths
  - lem-sr-energy-momentum-observer-identities
  - lem-sr-four-momentum-in-inertial-frame
  - def-sr-total-four-momentum-and-invariant-mass
  - lem-sr-center-of-momentum-frame
  - lem-sr-collision-necessary-conditions
  - def-sr-collision-datum-and-conservation
  - def-inertial-frame-and-inertial-chart
  - def-sr-four-velocity-and-four-acceleration
  - def-lorentz-form-and-inertia
  - def-sr-affine-minkowski-model
dependency_roles:
  ex-sr-four-momentum-at-beta-three-fifths: mathematical-premise
  lem-sr-energy-momentum-observer-identities: mathematical-premise
  lem-sr-four-momentum-in-inertial-frame: mathematical-premise
  def-sr-total-four-momentum-and-invariant-mass: mathematical-premise
  lem-sr-center-of-momentum-frame: mathematical-premise
  lem-sr-collision-necessary-conditions: mathematical-premise
  def-sr-collision-datum-and-conservation: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-sr-four-velocity-and-four-acceleration: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
dependency_level: 16
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t; Section 4.3.2 p. 90 (mass is not additive; M^2 = m1^2 + m2^2 + 2 p1 . p2)"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
---

## Example

Let $m>0$ and let two massive particles at a common event have four-momenta
$P_1=m\gamma(c,w)$ and $P_2=m\gamma(c,-w)$ with $w=(3c/5,0,0)$ and
$\gamma=5/4$. Their total is $Q=P_1+P_2=(5mc/2,0,0,0)$, which is future
timelike with invariant mass $M=5m/2$. Since the first basis vector $e_0$
already equals $Q/(Mc)$, the displayed frame is a center-of-momentum frame;
moreover $M=5m/2>2m=m_1+m_2$, the mass excess is $M-2m=m/2$, and the
corresponding excess rest energy $(M-2m)c^2=mc^2/2$ equals the total kinetic energy of the two particles
relative to $e_0$ ($mc^2/4$ each). Thus the rest mass of the system is not the
sum of the rest masses of its parts. The computation is exact at
$\gamma=5/4$ and asserts no collision.

## Facts & Assumptions

**Given:** the affine Minkowski model $(A,V,\eta,C^+)$; $c>0$; $m>0$; an
inertial frame in which $P_1=m\gamma(c,w)$, $P_2=m\gamma(c,-w)$ with
$w=(3c/5,0,0)$ and $\gamma=5/4$.

[F1] ([[ex-sr-four-momentum-at-beta-three-fifths]], Example): at
$w=(3c/5,0,0)$ one has $\gamma_w=5/4$, and $P=mU$ with $U=\gamma_w(c,w)$ has
components $(5mc/4,3mc/4,0,0)$, observer energy $E_{e_0}(P)=5mc^2/4$, spatial
momentum $q_{e_0}(P)$ with coordinates $(3mc/4,0,0)$ and kinetic energy
$T_{e_0}(P)=mc^2/4$.

[F2] ([[def-inertial-frame-and-inertial-chart]] and
[[def-lorentz-form-and-inertia]]): the frame basis $(e_0,e_1,e_2,e_3)$ is
$\eta$-orthonormal with $\eta(e_0,e_0)=-1$ and $\eta(e_i,e_i)=1$, $\eta$ is
bilinear, components of a sum of vectors add, and for a vector with
components $(v^0,v^1,v^2,v^3)$ one has
$\eta(v,v)=-(v^0)^2+(v^1)^2+(v^2)^2+(v^3)^2$.

[F3] ([[def-sr-total-four-momentum-and-invariant-mass]], Definition): the
total $Q$ of a finite list is the finite sum, and if $Q$ is future timelike
then its invariant mass is $M=\sqrt{-\eta(Q,Q)}/c$.

[F4] ([[lem-sr-center-of-momentum-frame]], Statement (a)): for future timelike
$Q$ with invariant mass $M$ an inertial frame with $e_0=Q/(Mc)$ exists, and
in it $q_{e_0}(Q)=0$ and $E_{e_0}(Q)=Mc^2$.

[F5] ([[lem-sr-energy-momentum-observer-identities]], Statement (b)): for
$P=mU$ with $m>0$, $U$ future timelike with $\eta(U,U)=-c^2$, and $n$ future
unit, $E_n(P)=mc^2\gamma$ and $T_n(P)=mc^2(\gamma-1)$ with
$\gamma=-\eta(U/c,n)\ge1$, and $T_n(P)=0$ if and only if $U=cn$.

[F6] ([[lem-sr-collision-necessary-conditions]], Statement (a)): for a
mass-specified conserving causal on-shell collision datum
([[def-sr-collision-datum-and-conservation]]) with future timelike total $Q$
of invariant mass $M$, each side satisfies $M\ge\sum m_\ell$ over its massive
legs, with equality if and only if the side is massive-only and every massive
leg is at rest in the center-of-momentum frame.

## Verification

1.1 With $w=(3c/5,0,0)$ and $\gamma=5/4$, [F1] applied to $P_1=m\gamma(c,w)$ gives the components $P_1=(5mc/4,3mc/4,0,0)$; replacing $w$ by $-w$ leaves $\gamma$ unchanged and changes the sign of the spatial part, so $P_2=m\gamma(c,-w)$ has components $(5mc/4,-3mc/4,0,0)$. Both $P_i$ are $m$ times the four-velocity $\gamma(c,\pm w)$ of a massive particle, hence future timelike with $\eta(P_i,P_i)=-m^2c^2$. [F1, F2]

1.2 By [F2] components add, so $Q=P_1+P_2=(5mc/2,0,0,0)$; then $\eta(Q,Q)=-(5mc/2)^2<0$, so $Q$ is future timelike ($Q^0>0$), and [F3] gives $M=\sqrt{-\eta(Q,Q)}/c=(5mc/2)/c=5m/2$. [F2, F3]

2.1 The displayed frame is a center-of-momentum frame: $Q/(Mc)=(5mc/2,0,0,0)/((5m/2)c)=(1,0,0,0)=e_0$, so by [F4] $q_{e_0}(Q)=0$ and $E_{e_0}(Q)=Mc^2=5mc^2/2$; by [F5] each particle has $T_{e_0}(P_i)=mc^2(\gamma-1)=mc^2/4$, so the total kinetic energy relative to $e_0$ is $mc^2/2$. [F4, F5, step 1.2]

3.1 Strictness of the mass inequality: the triple $(p;(P_1,P_2);(P_1,P_2))$ with any event $p$ is a mass-specified conserving causal on-shell collision datum with nonzero legs, so [F6] gives $M\ge m_1+m_2=2m$ for the common total; equality would require every massive leg to satisfy $T_{e_0}(P_i)=0$, hence $U_i=ce_0$ by [F5], contradicting $T_{e_0}(P_i)=mc^2/4>0$ from [step 2.1]. Therefore $M>2m$, in agreement with $M=5m/2$ from [step 1.2]. [F5, F6, step 1.1, step 2.1]

4.1 Mass excess: writing $T_{\mathrm{total}}:=T_{e_0}(P_1)+T_{e_0}(P_2)=mc^2/2$ from [step 2.1], one has $(M-2m)c^2=(5m/2-2m)c^2=mc^2/2=T_{\mathrm{total}}$. Since $c>0$, division by $c^2$ gives $M-2m=m/2=T_{\mathrm{total}}/c^2>0$; hence the invariant mass of the system exceeds the sum of the rest masses of its parts by the total kinetic energy in the center-of-momentum frame divided by $c^2$. [step 1.2, step 2.1, step 3.1] ∎
