---
id: ex-sr-causal-classification-computation
kind: example
title: "Worked causal classification of explicit displacements"
status: published
origin: session
domain: mathematics
dependency_level: 5
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
deps: [def-causal-classification-of-lorentz-vectors, def-time-orientation-and-future-causal-sets, lem-timelike-cone-has-two-convex-components, def-sr-affine-minkowski-model, def-inertial-frame-and-inertial-chart]
dependency_roles:
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
sources:
  references:
    - title: "B. Crowell, Special Relativity, rev. 2020-12-10, sections 1.3-1.4 pp. 23-31 and Ch. 2 pp. 43-51 (signature (+---) converted to (-+++))"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Example

Worked classification in an inertial frame of the model. Let
$(A,V,\eta,C^+)$ be an oriented time-oriented affine Minkowski space and let
$x$ be an inertial chart with frame $(o;e_0,e_1,e_2,e_3)$ and
$E(u)=\sum_au^ae_a$. Vector coordinates mean $E^{-1}(v)\in\mathbb R^4$,
so $E^{-1}(e_a)=(\delta_a^0,\delta_a^1,\delta_a^2,\delta_a^3)$.
The chart $x$ itself acts on events in $A$, not on vectors in $V$. Computing with the components
$\eta_{ab}=\operatorname{diag}(-1,1,1,1)_{ab}$:

- $v=(1,1,0,0)$ has $\eta(v,v)=0$ and $v^0=1=\lvert v_{\mathrm{vec}}\rvert$, so
  $v$ is future null;
- $w=(2,1,0,0)$ has $\eta(w,w)=-4+1=-3<0$ and
  $w^0=2>1=\lvert w_{\mathrm{vec}}\rvert$, so $w$ is future timelike;
- $z=(1,2,0,0)$ has $\eta(z,z)=-1+4=3>0$, so $z$ is spacelike;
- $u=(-1,1,0,0)$ has $\eta(u,u)=0$ and $u^0=-1<0$, so $u$ is past null;
- $e_0=(1,0,0,0)$ is future timelike with $\eta(e_0,e_0)=-1$, and $-e_0$ is
  past timelike.

In particular no future causal displacement is spacelike, and the coordinate
descriptions $v\ne0$, $v^0\ge\lvert v_{\mathrm{vec}}\rvert$ (future causal)
and $v\ne0$, $v^0\le-\lvert v_{\mathrm{vec}}\rvert$ (past causal) reproduce
the sign classification. The nonzero condition excludes the cone vertex,
which belongs to both closed cones but is not causal.

## Facts & Assumptions

**Given:** An inertial chart $x$ of $(A,V,\eta,C^+)$ with frame $(o;e_0,e_1,e_2,e_3)$ and the coordinate vectors listed in the Example.

[L1] In an $\eta$-orthonormal basis $\eta(v,w)=-v^0w^0+v^1w^1+v^2w^2+v^3w^3$, so $\eta(v,v)=-(v^0)^2+\lvert v_{\mathrm{vec}}\rvert^2$ ([[lem-timelike-cone-has-two-convex-components]], statement).

[L2] A vector is timelike when $\eta(v,v)<0$, null when $v\ne0$ and $\eta(v,v)=0$, spacelike when $\eta(v,v)>0$ ([[def-causal-classification-of-lorentz-vectors]]).

[L3] For a fixed time orientation, the closed cones are $\operatorname{cl}(C^+)=\{v^0\ge\lvert v_{\mathrm{vec}}\rvert\}$ and $\operatorname{cl}(C^-)=\{v^0\le-\lvert v_{\mathrm{vec}}\rvert\}$, and a nonzero null vector is future null exactly when it lies in $\operatorname{cl}(C^+)$ and past null exactly when it lies in $\operatorname{cl}(C^-)$ ([[def-time-orientation-and-future-causal-sets]], [[lem-timelike-cone-has-two-convex-components]]).

[L4] An inertial frame's basis is $\eta$-orthonormal and its first vector is future, and the frame's coordinates of $v$ are its coordinates in the ordered basis ([[def-inertial-frame-and-inertial-chart]]).

## Verification

**Proof technique:** direct computation with the diagonal form.

1.1 The displacement $v=(1,1,0,0)$ satisfies $\eta(v,v)=-1+1=0$ and $v\ne0$, so $v$ is null by [L2]; since $v^0=1=\lvert v_{\mathrm{vec}}\rvert$, the vector lies in $\operatorname{cl}(C^+)$ and is future null by [L3]. [L1, L2, L3, algebra]

1.2 The displacement $w=(2,1,0,0)$ satisfies $\eta(w,w)=-4+1=-3<0$, so $w$ is timelike by [L2]; since $w^0=2>1=\lvert w_{\mathrm{vec}}\rvert$, it lies in $C^+$ and is future timelike by [L3]. [L1, L2, L3, algebra]

1.3 The displacement $z=(1,2,0,0)$ satisfies $\eta(z,z)=-1+4=3>0$, so $z$ is spacelike by [L2]. [L1, L2, algebra]

1.4 The displacement $u=(-1,1,0,0)$ satisfies $\eta(u,u)=-1+1=0$ and $u\ne0$, so $u$ is null by [L2]; since $u^0=-1=-\lvert u_{\mathrm{vec}}\rvert$, it lies in $\operatorname{cl}(C^-)$ and is past null by [L3]. [L1, L2, L3, algebra]

1.5 The frame vector $e_0$ has coordinates $(1,0,0,0)$ by [L4], so $\eta(e_0,e_0)=-1<0$ and $e_0^0=1>0=\lvert(e_0)_{\mathrm{vec}}\rvert$: $e_0$ is future timelike; negating, $-e_0$ has $\eta(-e_0,-e_0)=-1<0$ and $(-e_0)^0=-1<0$, so $-e_0$ is past timelike. [L1, L2, L3, L4, algebra]

2.1 For any displacement $y$, membership in $\operatorname{cl}(C^+)$ is exactly the condition $y^0\ge\lvert y_{\mathrm{vec}}\rvert$ by [L3], which forces $\eta(y,y)=-(y^0)^2+\lvert y_{\mathrm{vec}}\rvert^2\le0$ by [L1]; hence no future causal displacement is spacelike, and the coordinate inequalities of [L3] reproduce the classifications computed in steps 1.1 through 1.5 for the five displayed displacements. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, L1, L3] ∎
