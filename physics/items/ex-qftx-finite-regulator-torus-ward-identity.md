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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Example

Let $M=\mathbb R^2/(2\pi\mathbb Z)^2$ be the two-torus with dimensionless angular coordinates $x,y$ modulo $2\pi$; $dx,dy$ denote the induced global angular one-forms. Orient $M$ by the volume form $\mu=dx\wedge dy$ and define the graded integral $I(F)=\int_M F_{[2]}$.

The complex differential-form algebra is $\Omega^\bullet(M;\mathbb C)=\Omega^0\oplus\Omega^1\oplus\Omega^2$, where $C^\infty(M;\mathbb C)$ is the space of smooth functions periodic in both coordinates, $\Omega^0=C^\infty(M;\mathbb C)$, $\Omega^1=\{a\,dx+b\,dy:a,b\in C^\infty(M;\mathbb C)\}$, $\Omega^2=\{c\,dx\wedge dy:c\in C^\infty(M;\mathbb C)\}$, and $\Omega^k=0$ for $k>2$. The product is the exterior product, determined by $dx\wedge dx=dy\wedge dy=0$ and $dy\wedge dx=-dx\wedge dy$. The exterior derivative is the degree-one linear map $d$ defined by $df=(\partial_x f)dx+(\partial_y f)dy$, $d(a\,dx+b\,dy)=(\partial_x b-\partial_y a)dx\wedge dy$, and $d\alpha=0$ for $\alpha\in\Omega^2$; these formulas give the graded Leibniz rule and $d^2=0$.

Let the odd derivation be $Q=d$, set the dimensionless action $S=0$, choose the even insertion $O=1+\lambda\,dx\wedge dy$ for $\lambda\in\mathbb R$, and choose the odd deformation $V=\sin(x)\,dy$. For every dimensionless real $t$, the integral $Z(t)=I(Oe^{-S-tQV})$ equals $4\pi^2\lambda$. This is a finite-dimensional regulator toy integral only; it is not a model of the S4 field configuration space or a continuum physical prediction.

## Example references

[[thm-finite-dimensional-q-exact-deformation-invariance|Finite-dimensional Q-exact deformation theorem]]

## Facts & Assumptions

**Given:** The closed oriented torus $M$, its dimensionless coordinates and volume form, $Q=d$, $S=0$, $O=1+\lambda\,dx\wedge dy$, and $V=\sin(x)\,dy$ as specified in the Example.

[F1] [[thm-finite-dimensional-q-exact-deformation-invariance]]: if $Q$ is an odd derivation, $QS=QO=0$, $(Q^2V)e^{-S-tQV}=0$, the Q-exact boundary integral vanishes, and the integrand and its derivative have the stated compact-parameter L1 majorants, then the finite-dimensional graded integral is constant in $t$.

## Verification

1.1 The coefficient product rule in the displayed coordinate formulas gives $d(fg)=df\,g+f\,dg$ for $f,g\in\Omega^0$ and $d(f\alpha)=df\wedge\alpha+f\,d\alpha$, $d(\alpha f)=d\alpha\,f-\alpha\wedge df$ for $\alpha\in\Omega^1$; for $\alpha,\beta\in\Omega^1$, both sides of the graded-Leibniz identity have degree three and vanish because $\Omega^3=0$. Thus $d$ is an odd derivation. For $f\in\Omega^0$, $d^2f=(\partial_x\partial_yf-\partial_y\partial_xf)dx\wedge dy=0$ by equality of mixed partial derivatives, and $d^2=0$ on $\Omega^1\oplus\Omega^2$ because $d\Omega^2=0$. Hence $Q=d$ has $Q^2=0$. The torus has no boundary, and for every smooth periodic one-form $\alpha=a(x,y)\,dx+b(x,y)\,dy$, $\int_M d\alpha=\int_0^{2\pi}\int_0^{2\pi}(\partial_x b-\partial_y a)\,dx\,dy=0$ by periodicity. Thus $I(QF)=0$ for each admissible odd form $F$. Also $QS=QO=0$ and $QV=dV=\cos(x)\,dx\wedge dy$. [given, algebra]

2.1 The top-degree coefficient of $Oe^{-tQV}$ and its $t$-derivative are smooth on compact $M$ and bounded uniformly when $t$ ranges over any compact interval; a constant bound is integrable on $M$. Therefore all finite-dimensional hypotheses of [F1] hold. [given, F1, step 1.1]

3.1 Since $(dx\wedge dy)^2=0$, $e^{-tQV}=1-t\cos(x)\,dx\wedge dy$. Multiplying by $O$ gives top-degree part $(\lambda-t\cos(x))\,dx\wedge dy$, whose integral is $4\pi^2\lambda-t\int_0^{2\pi}\int_0^{2\pi}\cos(x)\,dx\,dy=4\pi^2\lambda$. This agrees with the constant value supplied by [F1]. [given, F1, step 2.1, algebra] ∎
