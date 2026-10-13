---
id: ex-sr-null-pair-invariant-mass
kind: example
title: "Collective mass of a pair of oppositely directed massless momenta"
status: published
origin: pipeline
domain: mathematics
deps:
  - lem-sr-energy-momentum-observer-identities
  - def-sr-observed-energy-momentum-and-kinetic-energy
  - def-sr-total-four-momentum-and-invariant-mass
  - lem-sr-center-of-momentum-frame
  - lem-sr-collision-necessary-conditions
  - lem-sr-finite-future-causal-sums
  - def-causal-classification-of-lorentz-vectors
  - def-time-orientation-and-future-causal-sets
  - lem-timelike-cone-has-two-convex-components
  - def-inertial-frame-and-inertial-chart
  - def-lorentz-form-and-inertia
  - def-rational-power
  - lem-rational-power-laws
dependency_roles:
  lem-sr-energy-momentum-observer-identities: mathematical-premise
  def-sr-observed-energy-momentum-and-kinetic-energy: mathematical-premise
  def-sr-total-four-momentum-and-invariant-mass: mathematical-premise
  lem-sr-center-of-momentum-frame: mathematical-premise
  lem-sr-collision-necessary-conditions: mathematical-premise
  lem-sr-finite-future-causal-sums: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-rational-power: mathematical-premise
  lem-rational-power-laws: mathematical-premise
dependency_level: 16
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  scraped: []
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t; Section 4.3.2 p. 90 Example 7 (two light waves with momenta (E,E) and (E,-E) have total momentum (2E,0) and collective mass 2E)"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
---

## Example

Let $e_0,e_1$ be the first two vectors of an inertial frame, $E_1,E_2>0$, and
let $P_1=(E_1/c)(e_0+e_1)$, $P_2=(E_2/c)(e_0-e_1)$. Both are nonzero future
null vectors with $E_{e_0}(P_i)=E_i$, and their total is
$Q=((E_1+E_2)/c)e_0+((E_1-E_2)/c)e_1$, a future timelike vector with
invariant mass $M=2\sqrt{E_1E_2}/c^2$; for $E_1=E_2=E$ this gives
$Q=(2E/c)e_0$ and $M=2E/c^2$. If instead $P_2=(E_2/E_1)P_1$ (parallel
momenta), then $Q$ is future null, $M=0$ by convention and there is no
center-of-momentum frame. In the opposite-direction case with $E_1\ne E_2$
the first basis vector is not the center-of-momentum vector; the
center-of-momentum frame exists by [[lem-sr-center-of-momentum-frame]] but
differs from the displayed frame. The arithmetic is exact and no measurement
is asserted.

## Facts & Assumptions

**Given:** the affine Minkowski model $(A,V,\eta,C^+)$; $c>0$; the first two
vectors $e_0,e_1$ of an inertial frame; $E_1,E_2>0$; the vectors
$P_1=(E_1/c)(e_0+e_1)$ and $P_2=(E_2/c)(e_0-e_1)$.

[F1] ([[def-inertial-frame-and-inertial-chart]] and
[[def-lorentz-form-and-inertia]]): the frame basis is $\eta$-orthonormal with
$\eta(e_0,e_0)=-1$, $\eta(e_1,e_1)=1$, $\eta(e_0,e_1)=0$; $\eta$ is bilinear,
so $\eta(P_1,P_2)=(E_1E_2/c^2)\bigl(\eta(e_0,e_0)-\eta(e_1,e_1)\bigr)$ and
components add.

[F2] ([[lem-timelike-cone-has-two-convex-components]], Statement): in an
$\eta$-orthonormal basis whose first vector is timelike,
$\mathrm{cl}(C^+)=\{v:v^0\ge|v_s|\}$ for the naming of $C^+$ containing the
first vector, and $C^+$ is closed under multiplication by positive reals.

[F3] ([[def-causal-classification-of-lorentz-vectors]] and
[[def-time-orientation-and-future-causal-sets]]): a vector is null when
$\eta(v,v)=0$ and $v\ne0$, timelike when $\eta(v,v)<0$, and future null when
it is null and lies in $\mathrm{cl}(C^+)$.

[F4] ([[def-sr-observed-energy-momentum-and-kinetic-energy]], Definition):
$E_n(P)=-c\,\eta(P,n)$ for $P\in\mathrm{cl}(C^+)$ and future unit $n$.

[F5] ([[def-sr-total-four-momentum-and-invariant-mass]], Definition): the
total of a finite list is the finite sum; the invariant mass of a future
timelike total is $M=\sqrt{-\eta(Q,Q)}/c$; for a future null total $M=0$ by
convention.

[F6] ([[lem-sr-center-of-momentum-frame]], Statement (a)–(c)): a future
timelike $Q$ with invariant mass $M$ has an inertial frame with
$e_0=Q/(Mc)$ and $q_{e_0}(Q)=0$; if an inertial frame satisfies
$q_{e_0}(Q)=0$ then $e_0=Q/(Mc)$; a nonzero future null vector has no
center-of-momentum frame.

[F7] ([[lem-sr-collision-necessary-conditions]], Statement (d)): for future
null $P_i=(E_i/c)(e_0+s_i)$ with unit $s_i$ and $\sigma=s_1\cdot s_2$, the
total is future timelike for $\sigma<1$ with
$M=\sqrt{2E_1E_2(1-\sigma)}/c^2$, and for $\sigma=1$ ($\theta=0$, parallel
spatial directions) it is future null with $M=0$ and no center-of-momentum
frame.

[F8] ([[lem-rational-power-laws]] and [[def-rational-power]]): for $a>0$ the
nonnegative square roots multiply, so
$\sqrt{4E_1E_2/c^2}=2\sqrt{E_1E_2}/c$ for $E_1,E_2>0$ and $c>0$.

## Verification

1.1 Both vectors are nonzero future null: by [F1] and [F2], $P_1$ has components $(E_1/c)(1,1,0,0)$, so $v^0=E_1/c=|v_s|$ and $\eta(P_1,P_1)=(E_1/c)^2(-1+1)=0$ with $P_1\ne0$; [F3] then makes $P_1$ future null, and the same computation with the sign of the second component reversed applies to $P_2=(E_2/c)(e_0-e_1)$. [F1, F2, F3]

1.2 The observer energies are the stated ones: by [F4] and [F1], $E_{e_0}(P_1)=-c\,\eta(P_1,e_0)=-c(E_1/c)\bigl(\eta(e_0,e_0)+\eta(e_1,e_0)\bigr)=E_1$ and likewise $E_{e_0}(P_2)=-c(E_2/c)(-1)=E_2$. [F1, F4]

1.3 The total: components add by [F1], so $Q=P_1+P_2=((E_1+E_2)/c)e_0+((E_1-E_2)/c)e_1$; then $\eta(Q,Q)=-(E_1+E_2)^2/c^2+(E_1-E_2)^2/c^2=-4E_1E_2/c^2<0$, so $Q$ is future timelike with $Q^0>0$, and [F5] and [F8] give $M=\sqrt{4E_1E_2/c^2}/c=2\sqrt{E_1E_2}/c^2$. [F1, F5, F8]

2.1 Center-of-momentum frame and the equal-energy case: by [F4]-type computation in the frame, $q_{e_0}(Q)=Q+\eta(Q,e_0)e_0=((E_1-E_2)/c)e_1$, so the displayed frame is a center-of-momentum frame exactly when $E_1=E_2$; for $E_1=E_2=E$ one has $Q=(2E/c)e_0$, $M=2E/c^2$ and $Q/(Mc)=e_0$, while for $E_1\ne E_2$ the center-of-momentum vector $Q/(Mc)$ has a nonzero $e_1$ component and differs from $e_0$, the frame existing by [F6]. [F6, step 1.3]

2.2 The parallel case: if $P_2=(E_2/E_1)P_1$ then $Q=(1+E_2/E_1)P_1$ is a positive multiple of the nonzero future null $P_1$, hence future null by [F2] and [F3]; the case $\sigma=1$ of [F7] (the two vectors as the two legs of the trivially conserving datum $(p;(P_1,P_2);(P_1,P_2))$) gives the same conclusion, and [F5] then sets $M=0$ while [F6] shows that no center-of-momentum frame exists. [F2, F3, F5, F6, F7, step 1.1]

3.1 All claims of the example are verified: the future null vectors $P_1,P_2$ have observer energies $E_1,E_2$; their total is future timelike with $M=2\sqrt{E_1E_2}/c^2$, equal to $2E/c^2$ when $E_1=E_2=E$; the displayed frame is the center-of-momentum frame exactly in that equal-energy case and otherwise differs from it; and parallel momenta give a future null total with $M=0$ and no center-of-momentum frame. [step 1.1, step 1.2, step 1.3, step 2.1, step 2.2] ∎
