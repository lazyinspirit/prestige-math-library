---
id: ex-na-conditional-three-dimensional-flow-computation
kind: example
title: A conditional three-dimensional computation with no uniqueness claim
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 10
deps:
  - def-na-mini-navier-stokes-backward-euler-scheme
  - thm-na-mini-be-step-existence-energy
  - thm-na-ns-weak-solution-uniqueness-2d-and-weak-strong-3d
  - def-na-stokes-zero-mean-pressure-and-velocity-spaces
  - def-wkp-zero-as-a-sobolev-closure
  - def-countable-choice
  - ex-na-mini-backward-euler-energy-budget
  - thm-na-discrete-helmholtz-projection-and-pressure-schur
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references: []
generation:
  role: example
---

## Example

Let $D=(0,1)^3$, $f=0$, and choose a nonzero $\chi\in C_c^\infty(0,1)$, for example a smooth bump supported in $(1/4,3/4)$. Put $\psi(x,y,z)=\chi(x)\chi(y)\chi(z)$ and
$$u_0=(\partial_y\psi,-\partial_x\psi,0).$$
This supplies explicit smooth no-slip data for a three-dimensional MINI backward Euler computation; initialize the discrete scheme with $u_h^0=P_{Z_h}u_0$.

## Facts & Assumptions

**Given:** Countable Choice, $\nu>0$, the unit cube, the displayed compactly supported initial field, zero forcing, and any shape-regular matching mesh and finite time partition.

[F1] The L2 orthogonal projector $P_{Z_h}$ exists, and the MINI backward Euler equations have a solution and every solution satisfies the discrete energy inequality. ([[thm-na-discrete-helmholtz-projection-and-pressure-schur]], [[def-na-mini-navier-stokes-backward-euler-scheme]], [[thm-na-mini-be-step-existence-energy]])

[F2] In three dimensions the uniqueness result is conditional on a strong solution branch with the regularity and equation hypotheses stated there. ([[thm-na-ns-weak-solution-uniqueness-2d-and-weak-strong-3d]])

[F3] $H^1_0(D)$ is the $H^1$-closure of compactly supported smooth fields. ([[def-wkp-zero-as-a-sobolev-closure]], [[def-na-stokes-zero-mean-pressure-and-velocity-spaces]])

## Verification

1.1 The field $u_0$ is smooth and compactly supported in $D$, so it belongs to $H^1_0(D)^3$. Its divergence is $\partial_x\partial_y\psi-\partial_y\partial_x\psi=\chi'(x)\chi'(y)\chi(z)-\chi'(x)\chi'(y)\chi(z)=0,$ by direct product differentiation. Thus $u_0\in V_\sigma$ and has zero boundary trace. [F3, given, algebra]

2.1 For any mesh and finite partition, [F1] supplies a discrete trajectory; with $f=0$, its kinetic energy, time jumps and accumulated viscous dissipation obey the budget in [[ex-na-mini-backward-euler-energy-budget]]. If the continuum data admit a strong branch satisfying [F2], the comparison theorem makes that branch unique among energy weak solutions on its interval. Without that additional strong-solution hypothesis, neither the scheme's existence nor its energy budget selects a unique three-dimensional weak trajectory or asserts that the computed flow is turbulent. [F1, F2, given, step 1.1, algebra] ∎
