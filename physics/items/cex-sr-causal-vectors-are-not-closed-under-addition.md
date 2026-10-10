---
id: cex-sr-causal-vectors-are-not-closed-under-addition
kind: counterexample
title: "The causal vectors of a Lorentz vector space are not closed under addition"
status: draft
origin: session
domain: mathematics
dependency_level: 5
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
proof_strategy: direct
deps: [def-lorentz-form-and-inertia, def-causal-classification-of-lorentz-vectors, def-sr-affine-minkowski-model, def-inertial-frame-and-inertial-chart, def-time-orientation-and-future-causal-sets, lem-timelike-cone-has-two-convex-components]
dependency_roles:
  def-lorentz-form-and-inertia: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
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

## Statement refuted

Statement refuted: "the set of causal vectors of a Lorentz vector space is a
linear subspace of $V$, in particular closed under addition"
([[def-causal-classification-of-lorentz-vectors]]).

## Facts & Assumptions

**Given:** An inertial frame of an oriented time-oriented affine Minkowski space
$(A,V,\eta,C^+)$ with $\eta=\operatorname{diag}(-1,1,1,1)$ in the frame's
coordinates, and the displacements $u=(1,0,0,0)$ and $w=(-1,9/10,0,0)$.

[L1] $\eta(v,v)=-(v^0)^2+(v^1)^2+(v^2)^2+(v^3)^2$ in an $\eta$-orthonormal
basis ([[def-inertial-frame-and-inertial-chart]],
[[def-lorentz-form-and-inertia]]).

[L2] A vector is timelike when $\eta(v,v)<0$, null when $v\ne0$ and
$\eta(v,v)=0$, spacelike when $\eta(v,v)>0$, and causal when timelike or null
([[def-causal-classification-of-lorentz-vectors]]).

[L3] The future closed cone is $\{v:v^0\ge\lvert v_{\mathrm{vec}}\rvert\}$ and
the past closed cone is $\{v:v^0\le-\lvert v_{\mathrm{vec}}\rvert\}$; a
timelike vector in the first is future timelike and one in the second is past
timelike ([[def-time-orientation-and-future-causal-sets]],
[[lem-timelike-cone-has-two-convex-components]]).

## Counterexample

1.1 The displacement $u=(1,0,0,0)$ satisfies $\eta(u,u)=-1<0$, so $u$ is timelike by [L2]; since $u^0=1>0=\lvert u_{\mathrm{vec}}\rvert$, it is future timelike by [L3]. [L1, L2, L3, algebra]

1.2 The displacement $w=(-1,9/10,0,0)$ satisfies $\eta(w,w)=-1+81/100=-19/100<0$, so $w$ is timelike by [L2]; since $w^0=-1\le-9/10=-\lvert w_{\mathrm{vec}}\rvert$, it is past timelike by [L3]. [L1, L2, L3, algebra]

2.1 The sum has coordinates $u+w=(0,9/10,0,0)$, so $\eta(u+w,u+w)=81/100>0$ by [L1] and $u+w$ is spacelike by [L2]. Both summands $u,w$ are causal (indeed timelike) by steps 1.1 and 1.2, while their sum is not; hence the set of causal vectors is not closed under addition and is not a linear subspace, refuting the displayed statement. Moreover $-u=(-1,0,0,0)$ is causal by step 1.1 and past timelike, not future causal, so the future causal set is not closed under negation either. [step 1.1, step 1.2, L1, L2, L3, algebra] ∎

## Remarks

This counterexample refutes the closure of the **full** causal set under
addition. It makes no claim about sums of two future causal vectors: that
closure is a different statement, proved with the causality material, and the
displayed witnesses involve one future and one past timelike vector.
