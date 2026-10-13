---
id: ex-sr-stationary-target-threshold
kind: example
title: "Threshold energy for a projectile on a stationary target"
status: published
origin: pipeline
domain: mathematics
deps:
  - def-sr-collision-datum-and-conservation
  - lem-sr-collision-necessary-conditions
  - def-sr-total-four-momentum-and-invariant-mass
  - lem-sr-center-of-momentum-frame
  - lem-sr-energy-momentum-observer-identities
  - def-sr-four-velocity-and-four-acceleration
  - def-rational-power
  - lem-rational-power-laws
  - def-lorentz-form-and-inertia
dependency_roles:
  def-sr-collision-datum-and-conservation: mathematical-premise
  lem-sr-collision-necessary-conditions: mathematical-premise
  def-sr-total-four-momentum-and-invariant-mass: mathematical-premise
  lem-sr-center-of-momentum-frame: mathematical-premise
  lem-sr-energy-momentum-observer-identities: mathematical-premise
  def-sr-four-velocity-and-four-acceleration: mathematical-premise
  def-rational-power: mathematical-premise
  lem-rational-power-laws: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
dependency_level: 16
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  scraped: []
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t; Section 4.3.2 p. 90 (the centre-of-mass energy is just barely enough to create a particle of mass M; accelerator threshold language) and p. 93 (the lab-frame initial momentum vector (E_o + m, E_o))"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
---

## Example

Let $m>0$, $\mu>0$ and consider a conserving causal on-shell collision datum
whose incoming side is two massive legs, a projectile of mass $m$ with energy
$E$ measured by the rest observer $n_2$ of the target, and a target of mass
$m$ at rest in that observer's frame, and whose outgoing side is massive with
masses $m$, $m$ and $\mu$. By
[[lem-sr-collision-necessary-conditions]]\,(c) with $m_1=m_2=m$ and
$\sum_l\mu_l=2m+\mu$,

$$E\ \ge\ \frac{c^2}{2m}\bigl[(2m+\mu)^2-2m^2\bigr]=mc^2+2\mu c^2+\frac{\mu^2c^2}{2m},$$

equivalently $T=E-mc^2\ \ge\ 2\mu c^2+\dfrac{\mu^2c^2}{2m}$. For $\mu=m$
this reads $E\ge7mc^2/2$ and $T\ge5mc^2/2$. These are necessary kinematic
thresholds under the adopted balance of the datum; the datum need not exist
for any concrete interaction and no process is asserted.

## Facts & Assumptions

**Given:** the affine Minkowski model $(A,V,\eta,C^+)$; $c>0$; $m>0$;
$\mu>0$; a conserving causal on-shell collision datum with the stated
incoming and outgoing legs, the incoming legs being $P_i=mU_i$,
$i\in\{1,2\}$, and $n_2:=U_2/c$ the rest observer of the target.

[F1] ([[lem-sr-collision-necessary-conditions]], Statement (c)): for a
mass-specified conserving causal on-shell datum with nonzero legs whose
incoming side is two-leg with $P_i=m_iU_i$, $m_i>0$, and with
$n_2=U_2/c$, $\gamma=-\eta(U_1/c,n_2)\ge1$, $E=E_{n_2}(P_1)=m_1c^2\gamma$
and invariant mass $M$ of the future timelike total, one has
$M^2=m_1^2+m_2^2+2m_2E/c^2$; if the outgoing side is mass-specified with
massive masses $\mu_1,\dots,\mu_L$ (possibly with null legs), then the
datum can conserve only if
$E\ge\frac{c^2}{2m_2}\bigl[(\sum_l\mu_l)^2-m_1^2-m_2^2\bigr]$ and
$T:=E-m_1c^2\ge\frac{c^2}{2m_2}\bigl[(\sum_l\mu_l)^2-(m_1+m_2)^2\bigr]$.

[F2] ([[def-sr-collision-datum-and-conservation]], Definition): a collision
datum records an event and the incoming and outgoing legs with side totals
formed as finite sums; it conserves when the totals are equal; a
mass-specified datum is on-shell with recorded masses, and a causal datum has
all legs in $\mathrm{cl}(C^+)$.

[F3] ([[def-sr-four-velocity-and-four-acceleration]], Definition): $U_2$ is
the four-velocity of a future timelike worldline with $\eta(U_2,U_2)=-c^2$,
and $n_2=U_2/c$ is future unit; $E_{n_2}(P_1)$ is the projectile energy
measured by the observer comoving with the target, so the target is at rest
in that observer's frame.

[F4] ([[def-rational-power]] and [[lem-rational-power-laws]]): for positive
reals the rational-power laws hold, so the displayed algebraic rearrangements
of positive expressions are legitimate; in particular
$\mu^2c^2/(2m)=(c^2/2m)\mu^2$ for $2m>0$.

## Verification

1.1 The hypotheses of [F1] are met by the stated datum: by [F2] it is a conserving causal on-shell datum with the two massive incoming legs $P_1=mU_1$ (projectile) and $P_2=mU_2$ (target), and by [F3] $n_2=U_2/c$ is the future unit observer comoving with the target, in whose frame the target is at rest and $E=E_{n_2}(P_1)$ is the projectile energy; so the datum can conserve only if the threshold inequality of [F1] holds. [F1, F2, F3]

2.1 Substituting $m_1=m_2=m$ and $\sum_l\mu_l=2m+\mu$ into the threshold of [F1] gives $E\ge\frac{c^2}{2m}\bigl[(2m+\mu)^2-m^2-m^2\bigr]$ and $T=E-mc^2\ge\frac{c^2}{2m}\bigl[(2m+\mu)^2-4m^2\bigr]$. [F1, step 1.1]

3.1 Expanding $(2m+\mu)^2-2m^2=2m^2+4m\mu+\mu^2$ and dividing by $2m>0$ gives $m+2\mu+\mu^2/(2m)$; multiplying by $c^2$ and using [F4] yields $E\ge mc^2+2\mu c^2+\frac{\mu^2c^2}{2m}$. [F4, step 2.1]

4.1 The kinetic-energy form: $T=E-mc^2\ge\bigl(mc^2+2\mu c^2+\frac{\mu^2c^2}{2m}\bigr)-mc^2=2\mu c^2+\frac{\mu^2c^2}{2m}$; for $\mu=m$ this gives $T\ge2mc^2+\frac{mc^2}{2}=\frac{5mc^2}{2}$ and, adding $mc^2$, $E\ge\frac{7mc^2}{2}$. [step 3.1]

5.1 Summary: for a conserving causal on-shell datum with a projectile and a co-moving target of equal mass $m$ and an outgoing massive side of total mass $2m+\mu$, the projectile energy in the target frame must satisfy $E\ge mc^2+2\mu c^2+\frac{\mu^2c^2}{2m}$, equivalently $T\ge2\mu c^2+\frac{\mu^2c^2}{2m}$, reducing to $E\ge7mc^2/2$ and $T\ge5mc^2/2$ at $\mu=m$; these are necessary kinematic thresholds under the adopted balance, not a claim that any process occurs. [step 3.1, step 4.1] ∎
