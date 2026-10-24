---
id: ex-qftx-finite-regulator-torus-ward-identity
kind: example
title: A finite Q-exact torus integral with constant value
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-qexact-field-theory-localization-examples
deps:
  - thm-finite-dimensional-q-exact-deformation-invariance
dependency_roles:
  thm-finite-dimensional-q-exact-deformation-invariance: mathematical-premise
dependency_level: 2
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references: []
physical_scope: "A dimensionless finite-dimensional graded integral used only as an illustration of the Ward identity; it is not identified with the S4 field configuration space and gives no continuum or empirical prediction."
generation:
  role: example
verification:
  precheck: pending
---

## Example

Let $M=\mathbb R^2/(2\pi\mathbb Z)^2$ be the two-torus with dimensionless angular coordinates $x,y$ modulo $2\pi$, orientation and volume form $\mu=dx\wedge dy$, differential-form algebra $\Omega^\bullet(M;\mathbb C)$, and graded integral $I(F)=\int_M F_{[2]}$. Let the odd derivation be $Q=d$, set the dimensionless action $S=0$, choose the even insertion $O=1+\lambda\,dx\wedge dy$ for $\lambda\in\mathbb R$, and choose the odd deformation $V=\sin(x)\,dy$. For every dimensionless real $t$, the integral $Z(t)=I(Oe^{-S-tQV})$ equals $4\pi^2\lambda$. This is a finite-dimensional regulator toy integral only; it is not a model of the S4 field configuration space or a continuum physical prediction.

## Example references

[[thm-finite-dimensional-q-exact-deformation-invariance|Finite-dimensional Q-exact deformation theorem]]

## Facts & Assumptions

**Given:** The closed oriented torus $M$, its dimensionless coordinates and volume form, $Q=d$, $S=0$, $O=1+\lambda\,dx\wedge dy$, and $V=\sin(x)\,dy$ as specified in the Example.

[F1] [[thm-finite-dimensional-q-exact-deformation-invariance]]: if $Q$ is an odd derivation, $QS=QO=0$, $(Q^2V)e^{-S-tQV}=0$, the Q-exact boundary integral vanishes, and the integrand and its derivative have the stated compact-parameter L1 majorants, then the finite-dimensional graded integral is constant in $t$.

## Verification

1.1 The torus has no boundary, and for every smooth periodic one-form $\alpha=a(x,y)\,dx+b(x,y)\,dy$, $\int_M d\alpha=\int_0^{2\pi}\int_0^{2\pi}(\partial_x b-\partial_y a)\,dx\,dy=0$ by periodicity. Thus $I(QF)=0$ for each admissible odd form $F$. Also $QS=QO=0$, $Q^2=0$, and $QV=dV=\cos(x)\,dx\wedge dy$. [given, algebra]

2.1 The top-degree coefficient of $Oe^{-tQV}$ and its $t$-derivative are smooth on compact $M$ and bounded uniformly when $t$ ranges over any compact interval; a constant bound is integrable on $M$. Therefore all finite-dimensional hypotheses of [F1] hold. [given, F1, step 1.1]

3.1 Since $(dx\wedge dy)^2=0$, $e^{-tQV}=1-t\cos(x)\,dx\wedge dy$. Multiplying by $O$ gives top-degree part $(\lambda-t\cos(x))\,dx\wedge dy$, whose integral is $4\pi^2\lambda-t\int_0^{2\pi}\int_0^{2\pi}\cos(x)\,dx\,dy=4\pi^2\lambda$. This agrees with the constant value supplied by [F1]. [given, F1, step 2.1, algebra] ∎
