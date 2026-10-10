---
id: ex-sr-perfectly-inelastic-collision-rest-mass
kind: example
title: "A conserving two-into-one collision datum and the non-uniqueness of its final state"
status: draft
origin: pipeline
domain: mathematics
deps:
  - ex-sr-equal-mass-head-on-collision-mass
  - def-sr-total-four-momentum-and-invariant-mass
  - def-sr-collision-datum-and-conservation
  - lem-sr-collision-necessary-conditions
  - lem-sr-center-of-momentum-frame
  - lem-sr-energy-momentum-observer-identities
  - thm-sr-proper-time-and-observer-decomposition
  - def-sr-four-velocity-and-four-acceleration
  - def-inertial-frame-and-inertial-chart
  - def-lorentz-form-and-inertia
dependency_roles:
  ex-sr-equal-mass-head-on-collision-mass: mathematical-premise
  def-sr-total-four-momentum-and-invariant-mass: mathematical-premise
  def-sr-collision-datum-and-conservation: mathematical-premise
  lem-sr-collision-necessary-conditions: mathematical-premise
  lem-sr-center-of-momentum-frame: mathematical-premise
  lem-sr-energy-momentum-observer-identities: mathematical-premise
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-sr-four-velocity-and-four-acceleration: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
dependency_level: 17
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  scraped: []
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t; Section 4.3.2 p. 90 (all the centre-of-mass energy is available for producing new particles, and it is just enough to create a single particle of mass M)"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
---

## Example

In the setting of [[ex-sr-equal-mass-head-on-collision-mass]], the datum with
incoming side $(P_1,P_2)$ and the single outgoing vector
$Q=(5mc/2,0,0,0)=(5m/2)c\,e_0$ is an on-shell conserving collision datum: $Q$
is massive with mass $5m/2$ and four-velocity $ce_0$, and $P_1+P_2=Q$. The
outgoing rest mass $5m/2$ exceeds the incoming sum $2m$ by $m/2$, and the
incoming total kinetic energy $mc^2/2=(M-2m)c^2$ has become rest energy. The
final state is not unique: the same total $Q$ is also the sum of two outgoing
massive legs at rest with masses $m$ and $3m/2$ (four-velocities $ce_0$), so
four-momentum conservation fixes only the total, not the number or masses of
the outgoing particles. The datum is a mathematical configuration and no
interaction is asserted.

## Facts & Assumptions

**Given:** the affine Minkowski model $(A,V,\eta,C^+)$; $c>0$; $m>0$; the
inertial frame and the incoming four-momenta $P_1,P_2$ of the equal-mass
example.

[F1] ([[ex-sr-equal-mass-head-on-collision-mass]], Example): in the displayed
frame $P_1,P_2$ are the four-momenta of two massive particles of mass $m$ with
components $(5mc/4,\pm3mc/4,0,0)$, their total is
$Q=P_1+P_2=(5mc/2,0,0,0)$, $Q$ is future timelike with invariant mass
$M=5m/2$, the displayed frame is a center-of-momentum frame, each particle has
kinetic energy $mc^2/4$ there, and $(M-2m)c^2=mc^2/2$ is the total kinetic
energy.

[F2] ([[def-sr-collision-datum-and-conservation]], Definition): a collision
datum records an event and the incoming and outgoing legs with side totals
formed as finite sums, and conserves when the totals are equal; a leg $P$ is
massive with mass $m'>0$ if $P=m'U'$ for some future timelike $U'$ with
$\eta(U',U')=-c^2$; a mass-specified datum is on-shell with recorded masses,
and a causal datum has all legs in $\mathrm{cl}(C^+)$.

[F3] ([[def-lorentz-form-and-inertia]] and
[[def-inertial-frame-and-inertial-chart]]): the frame basis is
$\eta$-orthonormal with $\eta(e_0,e_0)=-1$, components of sums and scalar
multiples are computed componentwise, and for $\lambda>0$ the vector
$\lambda(ce_0)$ has components $(\lambda c,0,0,0)$.

[F4] ([[lem-sr-collision-necessary-conditions]], Statement (a)): for a
mass-specified conserving causal on-shell datum with future timelike total $Q$
of invariant mass $M$, each side satisfies $M\ge\sum m_\ell$ over its massive
legs, with equality if and only if the side is massive-only and every massive
leg is at rest in the center-of-momentum frame.

[F5] ([[lem-sr-energy-momentum-observer-identities]], Statement (b)): for
$P=m'U'$ with $m'>0$, $U'$ future timelike with $\eta(U',U')=-c^2$, and $n$
future unit, $T_n(P)=m'c^2(\gamma-1)$ with $\gamma=-\eta(U'/c,n)\ge1$, and
$T_n(P)=0$ if and only if $U'=cn$; in particular a massive leg with
four-velocity $ce_0$ is at rest in the frame of $e_0$.

## Verification

1.1 The outgoing leg: by [F3], $Q=(5mc/2,0,0,0)=(5m/2)(ce_0)$ with $\eta(ce_0,ce_0)=c^2\eta(e_0,e_0)=-c^2$, and $5m/2>0$; hence by the massive-leg clause of [F2] the vector $Q$ is a massive leg with mass $5m/2$ and four-velocity $ce_0$, future timelike, and its recorded mass equals the invariant mass $5m/2$ computed in [F1]. [F1, F2, F3]

2.1 The datum: $(p;(P_1,P_2);(Q))$ with any event $p$ is mass-specified (recorded masses $m,m,5m/2$), on-shell (all three legs massive by [F1] and [step 1.1]), causal (all legs future timelike), and conserving because $P_1+P_2=Q$ by [F1] and [F2]; its common total is $Q$ with invariant mass $M=5m/2$. [F1, F2, step 1.1]

3.1 The mass inequality and the rest-energy interpretation: by [F4] applied to the incoming side, $M=5m/2\ge m_1+m_2=2m$, with equality only if both incoming massive legs are at rest in the center-of-momentum frame; by [F1] each has kinetic energy $mc^2/4\ne0$ there, so [F5] gives $U_i\ne ce_0$ and equality fails, $5m/2>2m$. The excess $(M-2m)c^2=mc^2/2$ equals the incoming total kinetic energy by [F1], and in the datum it is the rest energy of the single outgoing leg beyond the incoming rest energies. [F1, F4, F5, step 2.1]

4.1 Non-uniqueness of the final state: define the alternative outgoing side $(Q'_1,Q'_2)$ with $Q'_1:=m(ce_0)=(mc,0,0,0)$ and $Q'_2:=(3m/2)(ce_0)=(3mc/2,0,0,0)$. By [F2] and [F3] both are massive legs with four-velocities $ce_0$ and masses $m$ and $3m/2$, so they are at rest in the center-of-momentum frame, and $Q'_1+Q'_2=(5mc/2,0,0,0)=Q$; hence $(p;(P_1,P_2);(Q'_1,Q'_2))$ is a second conserving mass-specified causal on-shell datum with the same incoming side and the same total but a different number and masses of outgoing legs. [F1, F2, F3, step 3.1]

5.1 Summary: the two-into-one datum with outgoing leg $Q$ conserves and has outgoing rest mass $5m/2>2m$, the mass excess being $m/2$, whose rest energy $(M-2m)c^2=mc^2/2$ equals the incoming total kinetic energy; and the same total $Q$ is realised by the alternative outgoing pair of masses $m$ and $3m/2$ at rest, so four-momentum conservation alone fixes only the total, not the number or masses of the outgoing particles. [step 3.1, step 4.1] ∎
