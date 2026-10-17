---
id: thm-rosenbrock-euler-global-first-order
kind: theorem
title: First-order global error for Rosenbrock-Euler
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: [alg-rosenbrock-euler-step, lem-rosenbrock-euler-local-defect, lem-rosenbrock-euler-step-map-lipschitz]
dependency_level: 2
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Ralf Kornhuber, Notes on Numerical Methods for ODEs and Numerical Linear Algebra, §1.8, pp. 33–37"
      url: "https://numerik.mi.fu-berlin.de/wiki/WS_2021/NumericsII_Dokumente/NumericsIIKornhuber_rev5.pdf"
    - title: "Luca Bonaventura, Lecture Notes on Numerical Methods for Large ODE Systems, §2.3, pp. 43–47"
      url: "https://www.researchgate.net/publication/386290653_LECTURE_NOTES_ON_NUMERICAL_METHODS_FOR_LARGE_ODE_SYSTEMS"
verification:
  precheck: pending
---

## Statement

Let $K\subset U\subset\mathbb R^d$ be compact and convex, let $f\in C^2(U,\mathbb R^d)$, and assume the bounds and uniform inverse hypothesis of [[lem-rosenbrock-euler-local-defect]] and [[lem-rosenbrock-euler-step-map-lipschitz]] hold with constants $F,L,H,B,h_0$. Let an exact solution $y(t)$ and the numerical iterates $Y_n$ stay in $K$ for $0\le t_n=nh\le T$, with $Y_0=y(0)$ and $0<h\le h_0$. Define $C_0:=FL(B+1/2)$ and $L_*:=BL+h_0B^2HF$. Then
$$
\|Y_n-y(t_n)\|\le C_0T e^{L_*T}h\qquad(0\le t_n\le T).
$$
Thus this exact-J method has global order at least one on the stated compact tube. The theorem is conditional on the iterates remaining in that tube.

## Facts & Assumptions

**Given:** A $C^2$ autonomous vector field and the exact and numerical trajectories satisfying the compact-tube and inverse hypotheses in the statement.

[F1] [[alg-rosenbrock-euler-step]] defines the step map $\Phi_h$ by the exact solve $(I-hDf(y))k=f(y)$ and $y^+=y+hk$.

[F2] [[lem-rosenbrock-euler-local-defect]] gives $\|\Phi_h(y(t_j))-y(t_{j+1})\|\le C_0h^2$.

[F3] [[lem-rosenbrock-euler-step-map-lipschitz]] gives $\|\Phi_h(u)-\Phi_h(v)\|\le(1+L_*h)\|u-v\|$ on $K$.

## Proof

1.1 Set $e_j=\|Y_j-y(t_j)\|$. Since $Y_{j+1}=\Phi_h(Y_j)$, insert $\Phi_h(y(t_j))$ and apply [F2] and [F3] to obtain $e_{j+1}\le(1+L_*h)e_j+C_0h^2$. [given, F1, F2, F3, algebra]

1.2 Starting with $e_0=0$, induction on $n$ in the recurrence of step 1.1 gives $e_n\le C_0h^2\sum_{j=0}^{n-1}(1+L_*h)^j\le C_0n h^2e^{L_*nh}$; the last inequality follows from $1+x\le e^x$ for $x\ge0$. [given, step 1.1, algebra]

1.3 Since $nh=t_n\le T$, step 1.2 yields $e_n\le C_0T e^{L_*T}h$. [given, step 1.2, algebra] ∎
