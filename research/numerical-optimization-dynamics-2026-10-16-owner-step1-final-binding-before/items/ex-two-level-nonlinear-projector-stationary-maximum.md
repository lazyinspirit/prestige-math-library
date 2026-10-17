---
id: ex-two-level-nonlinear-projector-stationary-maximum
kind: example
title: "A two-level nonlinear projector model has a stationary strict maximum"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-finite-basis-projector-energy-model
  - def-rank-r-orthogonal-projector-domain
  - prop-finite-projector-energy-reality-and-gradient
  - thm-finite-projector-commutator-stationarity
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

In $\mathbb C^2$ with $r=1$, let $H=\operatorname{diag}(1,-1)$, $h=0$,
$E_{xc}=0$, and define $G(A)=2\operatorname{tr}(HA)H$ on Hermitian $A$. Then
$G$ is a self-adjoint real-linear map, so it defines the allowed nonlinear
projector energy $E(P)=\operatorname{tr}(HP)^2$. At $P_0=e_1e_1^*$ the
commutator stationarity condition holds, but $P_0$ is a strict local maximum,
not a minimum.

## Facts & Assumptions

**Given:** $n=2$, $r=1$, $H=\operatorname{diag}(1,-1)$, $h=0$, $E_{xc}=0$, and $G(A)=2\operatorname{tr}(HA)H$.

[F1] A rank-one orthogonal projector has the form $uu^*$ for a unit vector $u$ ([[def-rank-r-orthogonal-projector-domain]]).

[F2] The energy gradient is $F(P)=h+G(P)+\nabla E_{xc}(P)$ ([[def-finite-basis-projector-energy-model]], [[prop-finite-projector-energy-reality-and-gradient]]).

[F3] A projector is stationary exactly when it commutes with its model gradient ([[thm-finite-projector-commutator-stationarity]]).

## Verification


1.1 For Hermitian $A,B$, $\operatorname{tr}(HA)$ and $\operatorname{tr}(HB)$ are real, and $\langle G(A),B\rangle_F=2\operatorname{tr}(HA)\operatorname{tr}(HB)=\langle A,G(B)\rangle_F$. Thus $G$ is self-adjoint and real-linear; the model's quadratic term is $\tfrac12\operatorname{tr}(P G(P))=\operatorname{tr}(HP)^2$. [F2, given, algebra]

2.1 For an arbitrary unit vector $u=(u_1,u_2)\in\mathbb C^2$, put $s=|u_2|^2$. Then $P=uu^*\in\mathcal P_1$ by [F1], $\operatorname{tr}(HP)=|u_1|^2-|u_2|^2=1-2s$, and $E(P)=(1-2s)^2$. A neighborhood of $P_0=e_1e_1^*$ is given by $0\le s<1/2$; every distinct projector there has $s>0$ and hence $(1-2s)^2<1=E(P_0)$. Thus $P_0$ is a strict local maximum in the full complex projector domain. [F1, step 1.1, algebra]

3.1 At $P_0$, $F(P_0)=G(P_0)=2H$, which is diagonal and therefore commutes with $P_0$. By [F3], $P_0$ is stationary, while step 2.1 shows it is not a local minimum. [F2, F3, step 2.1, algebra] ∎

