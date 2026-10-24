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

Let $M=[0,1]\times(\mathbb R/2\pi\mathbb Z)$ be the cylinder as a smooth manifold with boundary, with dimensionless product coordinates $x,y$; $dx,dy$ denote the global product and angular one-forms. Orient $M$ by the volume form $dx\wedge dy$ and define the graded integral $I(F)=\int_M F_{[2]}$.

The complex differential-form algebra is $\Omega^\bullet(M;\mathbb C)=\Omega^0\oplus\Omega^1\oplus\Omega^2$, where $C^\infty(M;\mathbb C)$ is the space of functions smooth up to $x=0,1$ and periodic in $y$, $\Omega^0=C^\infty(M;\mathbb C)$, $\Omega^1=\{a\,dx+b\,dy:a,b\in C^\infty(M;\mathbb C)\}$, $\Omega^2=\{c\,dx\wedge dy:c\in C^\infty(M;\mathbb C)\}$, and $\Omega^k=0$ for $k>2$. The product is the exterior product, determined by $dx\wedge dx=dy\wedge dy=0$ and $dy\wedge dx=-dx\wedge dy$. The exterior derivative is the degree-one linear map $d$ defined by $df=(\partial_x f)dx+(\partial_y f)dy$, $d(a\,dx+b\,dy)=(\partial_x b-\partial_y a)dx\wedge dy$, and $d\alpha=0$ for $\alpha\in\Omega^2$; these formulas give the graded Leibniz rule and $d^2=0$.

Take the odd derivation $Q=d$, dimensionless action $S=0$, even insertion $O=1$, and odd deformation $V=x\,dy$. For every dimensionless real $t$, $Z(t)=I(Oe^{-S-tQV})=-2\pi t$. The change occurs because $I(Q(Ve^{-S-tQV}))=2\pi\ne0$: this cycle violates the zero-boundary Q-invariance condition and therefore is not an instance of the finite-dimensional Ward identity.

## Facts & Assumptions

**Given:** The compact oriented cylinder $M$, its boundary circles, the graded integral of top-degree two-forms, $Q=d$, $S=0$, $O=1$, and $V=x\,dy$ as specified in the Example.

[A1] The integration cycle is the whole cylinder with its two boundary circles included; no boundary condition cancels their flux.

## Verification

1.1 The coefficient product rule in the displayed coordinate formulas gives $d(fg)=df\,g+f\,dg$ for $f,g\in\Omega^0$ and $d(f\alpha)=df\wedge\alpha+f\,d\alpha$, $d(\alpha f)=d\alpha\,f-\alpha\wedge df$ for $\alpha\in\Omega^1$; for $\alpha,\beta\in\Omega^1$, both sides of the graded-Leibniz identity have degree three and vanish because $\Omega^3=0$. Thus $d$ is an odd derivation. For $f\in\Omega^0$, $d^2f=(\partial_x\partial_yf-\partial_y\partial_xf)dx\wedge dy=0$ by equality of mixed partial derivatives, and $d^2=0$ on $\Omega^1\oplus\Omega^2$ because $d\Omega^2=0$. Thus $Q=d$ has $Q^2=0$. The differential gives $QV=d(x\,dy)=dx\wedge dy$. Since $(dx\wedge dy)^2=0$, the finite exterior-degree expansion is $e^{-tQV}=1-t\,dx\wedge dy$. Also $QS=QO=0$. [given, A1, algebra]

2.1 The degree-two part of $Oe^{-S-tQV}$ is $-t\,dx\wedge dy$, so $Z(t)=-t\int_0^1dx\int_0^{2\pi}dy=-2\pi t$. In particular, $Z'(t)=-2\pi$. [given, step 1.1, algebra]

3.1 Since $Qe^{-tQV}=-(Q^2V)t\,e^{-tQV}=0$, the graded Leibniz rule gives $Q(Ve^{-tQV})=(QV)e^{-tQV}=dx\wedge dy$. Its integral is $2\pi$, the nonzero flux from the boundary circles. Thus the integral fails the Q-invariance condition exactly at the boundary term. [given, A1, step 1.1, algebra] ∎
