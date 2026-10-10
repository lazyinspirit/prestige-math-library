---
id: cex-sr-massless-momentum-not-mu-at-zero-mass
kind: counterexample
title: "A massless four-momentum is not obtained from the massive formula at m = 0"
status: draft
origin: pipeline
domain: mathematics
deps:
  - def-sr-observed-energy-momentum-and-kinetic-energy
  - lem-sr-energy-momentum-observer-identities
  - def-causal-classification-of-lorentz-vectors
  - def-time-orientation-and-future-causal-sets
  - lem-timelike-cone-has-two-convex-components
  - def-lorentz-form-and-inertia
  - def-sr-four-velocity-and-four-acceleration
  - def-inertial-frame-and-inertial-chart
  - def-sr-affine-minkowski-model
dependency_roles:
  def-sr-observed-energy-momentum-and-kinetic-energy: mathematical-premise
  lem-sr-energy-momentum-observer-identities: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-sr-four-velocity-and-four-acceleration: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
dependency_level: 14
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  scraped: []
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t; Sections 4.3.5 pp. 96-97 (the equation p = m gamma v becomes an indeterminate form as m -> 0 and is not general enough to define a massless momentum; self-check A on p. 89 asks for the case m = 0)"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1; PDF page = printed page + 7; printed p. 27 (the four-velocity is defined only for timelike trajectories; null paths give extra problems)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## Statement refuted

The four-momentum of an ideal massless particle is obtained by setting $m=0$
in $P=mU$, where $U$ is a future timelike four-velocity with
$\eta(U,U)=-c^2$.

## Facts & Assumptions

**Given:** the affine Minkowski model $(A,V,\eta,C^+)$; $c>0$; an inertial
frame $(o;e_0,e_1,e_2,e_3)$; a future timelike $U$ with $\eta(U,U)=-c^2$
([[def-sr-four-velocity-and-four-acceleration]]); the observer quantities
$E_n$ of [[def-sr-observed-energy-momentum-and-kinetic-energy]] for a future
unit observer $n$.

Here **massless four-momentum** means a nonzero future null vector of $V$;
the refutation is purely algebraic and asserts no physical interpretation.

[F1] ([[def-lorentz-form-and-inertia]], Definition): $\eta$ is a symmetric
bilinear form on $V$, so $\eta(v,0)=0$ and $\eta(0,0)=0$ for all $v$, and
$\eta(\lambda v,\mu w)=\lambda\mu\,\eta(v,w)$ for real $\lambda,\mu$; in an
$\eta$-orthonormal ordered basis $\eta(e_0,e_0)=-1$, $\eta(e_1,e_1)=1$ and
$\eta(e_0,e_1)=0$.

[F2] ([[def-causal-classification-of-lorentz-vectors]], Definition): $v$ is
timelike when $\eta(v,v)<0$, null when $v\ne0$ and $\eta(v,v)=0$, spacelike
when $\eta(v,v)>0$, and the zero vector is none of timelike, null or
spacelike.

[F3] ([[def-inertial-frame-and-inertial-chart]], Definition): an inertial
frame's basis $(e_0,e_1,e_2,e_3)$ is $\eta$-orthonormal with $e_0\in C^+$, so
$e_0$ is future timelike and $\eta(e_0,e_0)=-1$.

[F4] ([[lem-timelike-cone-has-two-convex-components]], Statement): in an
$\eta$-orthonormal basis whose first vector is timelike,
$\mathrm{cl}(C^+)=\{v:v^0\ge|v_s|\}$ for the naming of $C^+$ containing the
first vector, where $v=v^0e_0+v_s$ and $|v_s|=\sqrt{(v^1)^2+(v^2)^2+(v^3)^2}$.

[F5] ([[def-time-orientation-and-future-causal-sets]], Definition): a vector
is future null when it is nonzero, $\eta(v,v)=0$ and $v$ lies in
$\mathrm{cl}(C^+)$, and future causal when it is future timelike or future
null.

[F6] ([[def-sr-observed-energy-momentum-and-kinetic-energy]], Definition):
$E_n(P)=-c\,\eta(P,n)$ for $P\in\mathrm{cl}(C^+)$.

[F7] ([[lem-sr-energy-momentum-observer-identities]], Statement (a)): for
nonzero future causal $P$, $E_n(P)>0$ and, for future null $P$,
$E_n(P)=c\,|q_n(P)|$.

## Counterexample

1.1 The case $m=0$: for the future timelike $U$ one has $0\cdot U=0$, so the massive formula at $m=0$ produces the zero vector; by [F1] and [F6], $\eta(0,0)=0$ and $E_n(0)=-c\,\eta(0,n)=0$, and by [F2] the zero vector is not a nonzero future null vector since it is not null (nullity requires $P\ne0$). [F1, F2, F6]

1.2 The witness of a genuine massless momentum: in the inertial frame of [F3] choose $E>0$ and set $P:=(E/c)(e_0+e_1)$. Then [F1] gives $\eta(P,P)=(E/c)^2\bigl(\eta(e_0,e_0)+2\eta(e_0,e_1)+\eta(e_1,e_1)\bigr)=(E/c)^2(-1+0+1)=0$ and $P\ne0$; its coordinates are $(v^0,v^1,v^2,v^3)=(E/c)(1,1,0,0)$, so $v^0=E/c=|v_s|$ and [F4] places $P$ in $\mathrm{cl}(C^+)$; hence $P$ is future null by [F5]. Moreover $E_{e_0}(P)=-c\,\eta(P,e_0)=-(E)\bigl(\eta(e_0,e_0)+\eta(e_1,e_0)\bigr)=E>0$ by [F1] and [F6], in agreement with [F7]. [F1, F3, F4, F5, F6, F7]

2.1 The case $m>0$: for every $m>0$, [F1] gives $\eta(mU,mU)=m^2\eta(U,U)=-m^2c^2<0$, so $mU$ is timelike by [F2]; if $mU=P$ then $\eta(mU,mU)=\eta(P,P)=0$, a contradiction with $mU$ timelike. Therefore no $m>0$ produces the future null witness $P=mU$, and by [step 1.1] no $m=0$ does either: no value $m\ge0$ in the massive formula $P=mU$ produces the massless momentum $P$. [F1, F2, step 1.1, step 1.2]

3.1 Combining the two cases, the statement is refuted: setting $m=0$ in $P=mU$ gives the zero vector, which is not a nonzero future null four-momentum and has zero energy in every frame, while a nonzero future null four-momentum such as the witness of [step 1.2] is not of the form $mU$ for any $m\ge0$ and any future timelike $U$ with $\eta(U,U)=-c^2$. This refutes direct substitution with a defined normalized timelike $U$; the argument leaves mass-dependent limits and physical formulation choices open. [step 1.1, step 1.2, step 2.1] ∎
