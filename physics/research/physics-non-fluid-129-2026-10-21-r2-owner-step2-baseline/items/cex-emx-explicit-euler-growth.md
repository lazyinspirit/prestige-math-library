---
id: cex-emx-explicit-euler-growth
kind: counterexample
title: "Explicit Euler grows a free oscillator"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 1
domain: mathematics
library: mathematics
deps:
  - def-emx-matrix-maxwell-system
justified_by: []
dependency_roles:
  def-emx-matrix-maxwell-system: mathematical-premise
physical_scope: "Pure mathematics; no physical premise."
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
aliases: []
verification:
  precheck: pending
sources:
  references:
    - title: "Gilbert Strang, The Wave Equation and Staggered Leapfrog, MIT 18.086 lecture notes, §5.3"
      url: "https://math.mit.edu/classes/18.086/2006/am53.pdf"
      locator: "Section 5.3, forward-time and leapfrog schemes, PDF pp. 3–6."
    - title: "J. Zank, Topics in Finite Elements, Part I: Wave Equation, University of Vienna lecture notes"
      url: "https://www.mat.univie.ac.at/~zank/lehre/2020SS_lecture_notes_wave_equation.pdf"
      locator: "Chapter 2, §2.3, leapfrog energy comparison, PDF pp. 12–17."
---

## Statement refuted

For every finite compatible matrix system with $S=0$ and $j=0$, the forward Euler step, defined by $e_1=e_0+h\dot e(t_0)$ and $b_1=b_0+h\dot b(t_0)$ for $h>0$, preserves the system energy for every initial state.

## Statement refuted references

[[def-emx-matrix-maxwell-system]]

## Facts & Assumptions

**Given:** The one-dimensional data $M_e=M_b=C=[1]$, $S=0$, $D=G=[0]$, zero forcing, a step size $h>0$, and initial scalars $e_0,b_0$ not both zero.

[F1] The finite compatible matrix system obeys $M_e\dot e=C^TM_bb-Se-j$ and $\dot b=-Ce$, with energy $W=\tfrac12(e^TM_ee+b^TM_bb)$ ([[def-emx-matrix-maxwell-system]]).

## Counterexample

1.1 The data satisfy the defining matrix assumptions: $M_e,M_b$ are positive definite, $S$ is positive semidefinite, and $DC=CG=0$. With $j=0$, [F1] reduces to $\dot e=b$ and $\dot b=-e$. [given, F1, algebra]

2.1 The forward Euler rule in the refuted statement therefore gives $e_1=e_0+h b_0$ and $b_1=b_0-h e_0$. [given, step 1.1, algebra]

3.1 Expanding gives $W(e_1,b_1)=\tfrac12((e_0+h b_0)^2+(b_0-h e_0)^2)=(1+h^2)\tfrac12(e_0^2+b_0^2)=(1+h^2)W(e_0,b_0)$. Because $h>0$ and the initial pair is nonzero, $W(e_0,b_0)>0$ and $1+h^2>1$, so the step strictly increases energy. This refutes the universal preservation claim. [given, step 2.1, F1, algebra] ∎
