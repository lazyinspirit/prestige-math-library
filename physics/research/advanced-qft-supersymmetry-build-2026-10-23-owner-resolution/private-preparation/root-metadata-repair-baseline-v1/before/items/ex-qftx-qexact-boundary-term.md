---
id: ex-qftx-qexact-boundary-term
kind: example
title: A Q-exact deformation with a nonzero boundary term
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-qexact-field-theory-localization-examples
deps: []
dependency_roles: {}
dependency_level: 0
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references: []
physical_scope: "A finite-dimensional graded integral on a compact manifold with boundary, included only to exhibit the boundary obstruction; it is not an S4 field theory, empirical result, or continuum claim."
generation:
  role: example
verification:
  precheck: pending
---

## Example

Let $M=[0,1]\times(\mathbb R/2\pi\mathbb Z)$ be the cylinder with dimensionless coordinates $x,y$, orientation and volume form $dx\wedge dy$, differential-form algebra $\Omega^\bullet(M;\mathbb C)$, and graded integral $I(F)=\int_M F_{[2]}$. Take the odd derivation $Q=d$, dimensionless action $S=0$, even insertion $O=1$, and odd deformation $V=x\,dy$. For every dimensionless real $t$, $Z(t)=I(Oe^{-S-tQV})=-2\pi t$. The change occurs because $I(Q(Ve^{-S-tQV}))=2\pi\ne0$: this cycle violates the zero-boundary Q-invariance condition and therefore is not an instance of the finite-dimensional Ward identity.

## Facts & Assumptions

**Given:** The compact oriented cylinder $M$, its boundary circles, the graded integral of top-degree two-forms, $Q=d$, $S=0$, $O=1$, and $V=x\,dy$ as specified in the Example.

[A1] The integration cycle is the whole cylinder with its two boundary circles included; no boundary condition cancels their flux.

## Verification

1.1 The differential gives $QV=d(x\,dy)=dx\wedge dy$. Since $(dx\wedge dy)^2=0$, the finite exterior-degree expansion is $e^{-tQV}=1-t\,dx\wedge dy$. Also $Q^2=0$ and $QS=QO=0$. [given, A1, algebra]

2.1 The degree-two part of $Oe^{-S-tQV}$ is $-t\,dx\wedge dy$, so $Z(t)=-t\int_0^1dx\int_0^{2\pi}dy=-2\pi t$. In particular, $Z'(t)=-2\pi$. [given, step 1.1, algebra]

3.1 Since $Qe^{-tQV}=-(Q^2V)t\,e^{-tQV}=0$, the graded Leibniz rule gives $Q(Ve^{-tQV})=(QV)e^{-tQV}=dx\wedge dy$. Its integral is $2\pi$, the nonzero flux from the boundary circles. Thus the integral fails the Q-invariance condition exactly at the boundary term. [given, A1, step 1.1, algebra] ∎
