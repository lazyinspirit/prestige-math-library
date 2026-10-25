---
id: lem-ctrl1-single-and-multiple-shooting-nlps-are-equivalent
kind: lemma
title: "Exact single and multiple shooting have the same reduced feasible controls"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 8
deps: [def-ctrl1-control-mesh-and-piecewise-constant-parameterization, alg-ctrl1-runge-kutta-shooting-and-collocation-transcription, def-ctrl1-smooth-transcription-data]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "S. Gros and M. Diehl, Numerical Optimal Control, draft course manuscript, Chapter 13 §§13.1–13.2"
      url: "https://www.syscop.de/files/2019ss/NOC/book-NOCSE.pdf"
      locator: "Printed pp. 229–239: recursive single shooting and continuity-constrained multiple shooting."
    - title: "J. Monnier, Optimal Control of ODEs: The Linear-Quadratic (LQ) Case, course notes, Chapter 2 §2.4"
      url: "https://pedagotech.inp-toulouse.fr/130908/res/2-optimal-control-ode.pdf"
      locator: "Printed pp. 20–22: finite-dimensional shooting parameterizations for ODE control problems."
---

## Statement

Fix a mesh, controls $u_0,\ldots,u_{N-1}$, and a successful deterministic Runge–Kutta interval map $\Phi_j$ from [[alg-ctrl1-runge-kutta-shooting-and-collocation-transcription]]. In the single-shooting NLP, define states recursively from $X_{0,0}=x_0$ and $X_{j+1,0}=\Phi_j(X_{j,0},u_j)$. In the multiple-shooting NLP, impose the same initial state and continuity equations. Then projection from the multiple-shooting feasible set onto its control coordinates is a bijection onto the single-shooting feasible controls. Any objective and node constraints that use the same recursively determined states have identical reduced values and feasibility. This is an algebraic equivalence of the discrete NLPs; it is not an equivalence to the continuous ODE problem.

## Facts & Assumptions

**Given:** The fixed mesh, the deterministic interval maps, and controls for which every interval map succeeds.

[F1] An interval map is available only after its explicit stages or implicit stage residual solve return a successful status; it assigns exactly one deterministic endpoint to that successful start/control pair, and single shooting applies it recursively ([[alg-ctrl1-runge-kutta-shooting-and-collocation-transcription]]).

[F2] The multiple-shooting variables satisfy $X_{0,0}=x_0$ and $X_{j+1,0}=\Phi_j(X_{j,0},u_j)$ ([[alg-ctrl1-runge-kutta-shooting-and-collocation-transcription]]).

## Proof

1.1 Given any control tuple feasible in single shooting, calculate $X_{1,0}=\Phi_0(x_0,u_0)$, then each later $X_{j+1,0}=\Phi_j(X_{j,0},u_j)$. Uniqueness of each deterministic map makes this recursively defined state tuple well-defined; by construction it satisfies every multiple-shooting continuity equation. [F1, given, construct]

2.1 Conversely, a multiple-shooting feasible tuple has fixed $X_{0,0}=x_0$ and satisfies each continuity equation. Induction on $j$ forces its $X_{j,0}$ to equal the recursive single-shooting value for the same controls. Hence there is exactly one multiple-shooting state tuple for each feasible control tuple and the projection is bijective. [F1, F2, step 1.1, induction]

3.1 Under this bijection the states at all shared nodes agree. Therefore every node constraint has the same value and every objective formed from the same node/stage values is identical. Thus reduced feasibility and objective values coincide. [step 1.1, step 2.1, given, algebra] ∎
