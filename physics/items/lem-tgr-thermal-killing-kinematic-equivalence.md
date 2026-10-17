---
id: lem-tgr-thermal-killing-kinematic-equivalence
kind: lemma
title: Exact thermal Killing kinematic equivalence
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
deps: [def-tgr-stationary-thermal-carriers, def-gr-killing-field, thm-gr-killing-and-on-shell-matter-identities, thm-gr-nondegenerate-levi-civita-and-tensor-derivative]
dependency_roles:
  def-tgr-stationary-thermal-carriers: mathematical-premise
  def-gr-killing-field: mathematical-premise
  thm-gr-killing-and-on-shell-matter-identities: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
sources:
  references:
    - title: "José Santiago and Matt Visser, Tolman-like temperature gradients in stationary spacetimes, §§II–V"
      url: "https://arxiv.org/pdf/1807.02915"
    - title: "Rubén O. Acuña-Cárdenas, Carlos Gabarrete, and Olivier Sarbach, An introduction to the relativistic kinetic theory on curved spacetimes, §VI.2"
      url: "https://arxiv.org/pdf/2106.09235"
---

## Statement

Let $O$ be a connected open set in a smooth time-oriented Lorentzian
four-manifold, let $u$ be a smooth future unit timelike vector field on $O$
($g(u,u)=-1$), and let $T:O\to(0,\infty)$ be smooth. Define
$\beta:=u/(k_BT)$, $h_{ab}:=g_{ab}+u_au_b$,
$D:=u^a\nabla_a$, $a_b:=u^a\nabla_au_b$,
$\theta:=\nabla_au^a$ and
$\sigma_{ab}:=h_a{}^ch_b{}^d\nabla_{(c}u_{d)}-\theta h_{ab}/3$ as in
[[def-tgr-stationary-thermal-carriers]]. Then $\beta$ is a Killing field of
$g$ (equivalently $\nabla_{(a}\beta_{b)}=0$ by
[[def-gr-killing-field]] and
[[thm-gr-killing-and-on-shell-matter-identities]]) if and only if
$$DT=0,\qquad \theta=0,\qquad \sigma_{ab}=0,\qquad h_a{}^b\nabla_b\log T=-a_a.$$
No hypersurface-orthogonality or vanishing-vorticity condition is assumed.

## Facts & Assumptions

**Given:** A smooth future unit timelike field $u$, a positive smooth scalar
$T$, and the metric-selected connection and kinematic definitions of
[[def-tgr-stationary-thermal-carriers]].

[F1] The connection is torsion-free and metric-compatible, and the definitions
give $u^au_a=-1$, $u^aa_a=0$, and
$h_a{}^b=\delta_a{}^b+u_au^b$
([[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]],
[[def-tgr-stationary-thermal-carriers]]). Killing means $\mathcal L_\beta g=0$,
equivalently $\nabla_{(a}\beta_{b)}=0$
([[def-gr-killing-field]],
[[thm-gr-killing-and-on-shell-matter-identities]]).

## Proof

1.1 Differentiating $u^bu_b=-1$ gives $u^b\nabla_au_b=0$. Decompose the
first derivative slot into its component parallel to $u$ and its rest-space
projection: $\nabla_au_b=-u_a a_b+h_a{}^c h_b{}^d\nabla_cu_d$.
Symmetrizing the rest-space term and using the definitions of expansion and
shear yields
$\nabla_{(a}u_{b)}=-u_{(a}a_{b)}+\sigma_{ab}+\theta h_{ab}/3$.
Differentiating $\beta=u/(k_BT)$ then gives
$$\nabla_{(a}\beta_{b)}=(k_BT)^{-1}\left[-u_{(a}(a_{b)}+\nabla_{b)}\log T)+\sigma_{ab}+\tfrac13\theta h_{ab}\right].$$
[given, F1, algebra]

2.1 Contracting this identity with $u^au^b$ shows that
$\nabla_{(a}\beta_{b)}=0$ implies $D\log T=0$, hence $DT=0$ because
$T>0$. [step 1.1, algebra]

2.2 Projecting both indices with $h$ gives
$\sigma_{ab}+\tfrac13\theta h_{ab}=0$. Taking its $h$-trace gives
$\theta=0$, since $h$ has rank three and $\sigma$ is trace-free; substituting
back gives $\sigma_{ab}=0$. [step 1.1, algebra]

2.3 Contracting one index with $u$ and projecting the other with $h$ gives
$h_a{}^b(a_b+\nabla_b\log T)=0$. Thus the displayed temperature-gradient
condition also follows from the Killing equation. [step 1.1, algebra]

3.1 Conversely, the four stated conditions make the parallel, mixed and
rest-space projections in step 1.1 all zero. Since
$T_xM=\operatorname{span}\{u_x\}\oplus u_x^\perp$ at every $x\in O$, these
projections determine the full symmetric tensor
$\nabla_{(a}\beta_{b)}$; it is zero, so $\beta$ is Killing. In particular,
the acceleration/temperature-gradient relation alone omits the necessary
conditions $DT=0$, $\theta=0$ and $\sigma=0$. [step 1.1, step 2.1, step 2.2, step 2.3, algebra] ∎
