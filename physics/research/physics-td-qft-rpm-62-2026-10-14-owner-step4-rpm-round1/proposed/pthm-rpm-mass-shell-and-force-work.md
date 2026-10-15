---
id: pthm-rpm-mass-shell-and-force-work
kind: physics-theorem
title: "Mass shell, observer energy and inertial work"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 7
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [post-rpm-prescribed-force-law, lem-rpm-shell-tangent-force-ivp, def-rpm-mechanical-momentum-and-observer-energy, def-gr-observer-and-rest-space, lem-gr-observer-projection-decomposition, lem-gr-observer-pairing-with-future-causal-vectors, lem-sr-four-force-and-work-energy-identities, lem-gr-parallel-transport-and-geodesic-speed, def-inertial-frame-and-inertial-chart]
dependency_roles:
  post-rpm-prescribed-force-law: physical-assumption
  lem-rpm-shell-tangent-force-ivp: mathematical-premise
  def-rpm-mechanical-momentum-and-observer-energy: formulation-prerequisite
  def-gr-observer-and-rest-space: mathematical-premise
  lem-gr-observer-projection-decomposition: mathematical-premise
  lem-gr-observer-pairing-with-future-causal-vectors: mathematical-premise
  lem-sr-four-force-and-work-energy-identities: mathematical-premise
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
  def-inertial-frame-and-inertial-chart: formulation-prerequisite
physical_scope: "Conditional constant-mass mass-shell and observer-decomposition identities; coordinate work relation only in flat inertial charts; variable-mass formula is kinematic only."
sources:
  references:
    - title: "Sean Carroll, Lecture Notes on General Relativity, complete lecture notes, Ch. 1 four-momentum and Ch. 3 covariant derivative"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "David Tong, General Relativity, author-hosted lecture-note chapter excerpt, §1.1.1 and observer-frame discussion"
      url: "https://www.davidtong.org/pdfs/teaching/general-relativity/gr1.pdf"
verification:
  precheck: pass
---

## Statement

For a massive body with constant $m>0$, $P=mU$, $g(U,U)=-c^2$, and the force law of [[post-rpm-prescribed-force-law]],

$$g(P,P)=-m^2c^2.$$

For every observer $n$ at the event, the energy and spatial momentum defined in [[def-rpm-mechanical-momentum-and-observer-energy]] satisfy

$$E_n(P)^2=m^2c^4+c^2g(q_n(P),q_n(P)),\qquad E_n(P)>0.$$

For a nonzero future-null $P$, $E_n(P)=c\sqrt{g(q_n(P),q_n(P))}$. In a flat inertial frame $(o;e_0,e_1,e_2,e_3)$ with $n=e_0$ and inertial chart $x^0=ct$ from [[def-inertial-frame-and-inertial-chart]], let $E=E_n(P)$, let $\mathbf p$ be the spatial coordinates of $q_n(P)$ in $(e_1,e_2,e_3)$, set $\mathbf v=d\mathbf x/dt$, and define $\mathbf F=d\mathbf p/dt$. Then $dE/dt=\mathbf F\cdot\mathbf v$ under the constant-mass force hypotheses. If $m(\tau)>0$ is $C^1$, $U$ is $C^1$ with $g(U,U)=-c^2$, and $P=m(\tau)U$, then the kinematic identity $g(U,D_\tau P)=-c^2\dot m$ holds; it specifies no variable-mass law.

## Facts & Assumptions

**Given:** A future unit timelike tangent $U$, constant $m>0$ on the massive branch, an observer $n$, and the force assumptions of the Statement.

[F1] The prescribed force is orthogonal to $U$ and the local IVP preserves $g(U,U)=-c^2$ ([[post-rpm-prescribed-force-law]], [[lem-rpm-shell-tangent-force-ivp]]).

[F2] For an observer, $q_n(P)=P+g(P,n)n$ and $g(q_n(P),q_n(P))=g(P,P)+g(P,n)^2$ ([[def-rpm-mechanical-momentum-and-observer-energy]], [[lem-gr-observer-projection-decomposition]]).

[F3] Pairing a future timelike vector with a future observer is strictly negative ([[lem-gr-observer-pairing-with-future-causal-vectors]]).

[F4] In a flat inertial chart with constant mass, the four-force work identity gives $dE/dt=\mathbf F\cdot\mathbf v$ ([[lem-sr-four-force-and-work-energy-identities]]).

[F5] For $C^1$ fields along a $C^1$ curve, use $(D_\tau V)^a=\dot V^a+\Gamma^a{}_{bc}\dot x^bV^c$. The coordinate product rule and metric compatibility give $\frac{d}{d\tau}g(V,W)=g(D_\tau V,W)+g(V,D_\tau W)$ at this regularity, exactly as in [[lem-gr-parallel-transport-and-geodesic-speed]] Proof 1.1–2.1. Thus the variable-mass clause needs no smoothness beyond its stated $C^1$ hypotheses.

## Proof

1.1 From $P=mU$ and $g(U,U)=-c^2$, $g(P,P)=m^2g(U,U)=-m^2c^2$. Write $a=-g(P,n)$ and $q=q_n(P)$; then $P=a n+q$, $g(q,n)=0$, and [F2] gives $g(q,q)=g(P,P)+g(P,n)^2$. Since $E_n=ca$, rearrangement yields $E_n^2=m^2c^4+c^2g(q,q)$. [given, F2, algebra]

1.2 The vectors $P$ and $n$ are future timelike, so [F3] gives $g(P,n)<0$ and therefore $E_n=-cg(P,n)>0$. For null $P$, since $g(P,P)=0$, [F2] yields $g(q,q)=g(P,n)^2$, and positivity selects $E_n=c\sqrt{g(q,q)}$. [F2, F3, algebra]

2.1 Under the flat inertial constant-mass hypotheses, [F1] identifies the prescribed force with the derivative of the mechanical momentum, and [F4] supplies the coordinate work relation. If $P=m(\tau)U$, differentiating $g(U,U)=-c^2$ using metric compatibility gives $g(U,D_\tau U)=0$; hence $g(U,D_\tau P)=\dot m\,g(U,U)+m g(U,D_\tau U)=-c^2\dot m$. This last identity imposes no dynamics for $m$. [given, F1, F4, F5, algebra] ∎
