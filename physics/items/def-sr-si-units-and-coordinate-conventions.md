---
id: def-sr-si-units-and-coordinate-conventions
kind: definition
title: "SI units and coordinate conventions of the special-relativity framework"
status: draft
origin: session
domain: physics
dependency_level: 5
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-sr-affine-minkowski-model, def-inertial-frame-and-inertial-chart, def-ck-and-multi-index-notation-in-several-variables]
dependency_roles:
  def-sr-affine-minkowski-model: formulation-prerequisite
  def-inertial-frame-and-inertial-chart: formulation-prerequisite
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
physical_scope: "SI coordinate and unit conventions for the flat classical special-relativity framework with ideal events, inertial charts and ideal clocks and light. The item declares units and dimensional bookkeeping only; it makes no claim that any quantity is fundamental in other frameworks and supplies no empirical measurement of c."
sources:
  references:
    - title: "BIPM, SI defining constants: exact numerical value of the speed of light in vacuum"
      url: "https://www.bipm.org/en/measurement-units/si-defining-constants"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1 pp. 2-7 and 25-27, equations (1.97)-(1.100) (PDF pp. 9-14 and 32-34)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), sections 2.1-2.2 pp. 25-28 (PDF pp. 26-29); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "B. Crowell, Special Relativity, rev. 2020-12-10, sections 1.3-1.4 pp. 23-31 and Ch. 2 pp. 43-51 (signature (+---) converted to (-+++))"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Definition

This framework fixes the following SI coordinate and unit conventions for the
oriented time-oriented affine Minkowski space $(A,V,\eta,C^+)$ and its inertial
charts ([[def-sr-affine-minkowski-model]],
[[def-inertial-frame-and-inertial-chart]]).

1. **Adopted conversion constant.** The framework uses a positive constant $c$
   with unit metre per second, $\mathrm m/\mathrm s$, interpreted as the
   **speed of light in vacuum** under the framework's light postulate. In SI
   its numerical value is exactly $299\,792\,458$ by the definition of the
   metre (BIPM, *SI defining constants*, table row $c$). This exact unit
   convention does not prove that the ideal-light model describes nature;
   measurements and realizations of units still have uncertainty.
2. **Coordinates.** In every inertial chart $x=(x^0,x^1,x^2,x^3)$ define the
   coordinate-time map $t:A\to\mathbb R$ by $t(p)=x^0(p)/c$, with unit second
   $\mathrm s$, and assign unit metre $\mathrm m$ to every $x^a$. An **at-rest
   line of this frame** is $s\mapsto o+cs e_0+\sum_{i=1}^3r^ie_i$, $s\in\mathbb R$,
   for fixed spatial coordinates $(r^1,r^2,r^3)$ in metres; its coordinate
   time is $s$. Interpreting coordinate-time differences as readings of
   synchronized ideal clocks on these lines is a physical assumption stated
   in the clock postulate, not a consequence of assigning units.
3. **Metric components.** The matrix $\eta_{ab}=\eta(e_a,e_b)$ in the frame is
   $\operatorname{diag}(-1,1,1,1)$ with **dimensionless** entries. Thus
   $I(p,q)=\eta(q-p,q-p)=-(\Delta x^0)^2+\sum_{i=1}^3(\Delta x^i)^2$
   carries unit $\mathrm m^2$.
4. **Proper time of a straight segment.** For a timelike displacement $q-p$,
   the affine straight segment is $s\mapsto p+s(q-p)$, $s\in[0,1]$. Define its
   positive **proper-time length** as

   $$\tau:=c^{-1}\sqrt{-\eta(q-p,q-p)}.$$

   It has unit second, since $c^{-1}$ converts the square-root interval in
   metres into seconds. This length is positive even if the segment is
   oriented toward the past; a physical advancing clock uses future orientation.
5. **Kinematic bookkeeping.** Let $J\subseteq\mathbb R$ be an open interval
   with parameter $\tau$ in seconds, and let $\gamma:J\to A$ have $C^2$
   coordinates $y=x\circ\gamma:J\to\mathbb R^4$
   ([[def-ck-and-multi-index-notation-in-several-variables]]). With
   $E(u)=\sum_au^ae_a$, require $U(\tau):=E(y'(\tau))\in C^+$ and
   $\eta(U,U)=-c^2$. This is the **proper-time normalization** used here for
   units; the general construction of a proper-time parameter is developed
   later. The **four-velocity** is $U:J\to V$, with components $U^a=(y^a)'$
   and unit $\mathrm m/\mathrm s$. The **four-acceleration** is
   $\mathcal A=E(y''):J\to V$, with unit $\mathrm m/\mathrm s^2$.
   For a positive constant mass parameter $m$ in kilograms, define
   **four-momentum** $P=mU:J\to V$, with unit
   $\mathrm{kg}\,\mathrm m/\mathrm s$, and **energy measured by this frame**
   $\mathcal E=cP^0=-c\eta(e_0,P):J\to\mathbb R$, with unit joule
   $\mathrm J=\mathrm{kg}\,\mathrm m^2/\mathrm s^2$. The equality follows from
   $\eta(e_0,P)=-P^0$. These are definitions for dimensional bookkeeping;
   the physical particle interpretation and dynamics belong to later pages.
6. **Temporal-coordinate convention.** Replacing $x^0$ by $t=x^0/c$ pulls
   the interval expression back to $-c^2(\Delta t)^2+\sum_i(\Delta x^i)^2$.
   Thus $g_{tt}=-c^2$ has unit $\mathrm m^2/\mathrm s^2$, the spatial
   components remain dimensionless, and mixed time-space components have unit
   $\mathrm m/\mathrm s$ (and equal zero in this inertial chart). Formulas
   must be transformed when changing this convention.
7. **Natural units.** A presentation with $c=1$ identifies temporal and spatial
   units by this conversion factor; it requires an explicit restoration table
   for $c$. It does not assert that the SI numerical value of $c$ is $1$.

**Status.** These are conventions and dimensional bookkeeping for the model.
The SI numerical value of $c$ is exact by unit definition; the physical
interpretation and applicability of the model remain adopted and empirically
testable. SI unit status does not make a quantity primitive in the theory.
