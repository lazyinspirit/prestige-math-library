---
id: thm-ros2-global-second-order
kind: theorem
title: Global second-order convergence of the ROS2 W-method
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: [alg-rosenbrock-ros2-step, lem-ros2-w-method-order-two-expansion, lem-ros2-step-map-lipschitz]
dependency_level: 2
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Peter Benner and Hermann Mena, Rosenbrock methods for solving differential Riccati equations, §II, pp. 3–4"
      url: "https://cscproxy.mpi-magdeburg.mpg.de/preprints/2011/MPIMD11-06.pdf"
    - title: "Luca Bonaventura, Lecture Notes on Numerical Methods for Large ODE Systems, §§2.3 and 5.3, pp. 44–47, 90–92"
      url: "https://www.researchgate.net/publication/386290653_LECTURE_NOTES_ON_NUMERICAL_METHODS_FOR_LARGE_ODE_SYSTEMS"
---

## Statement

Suppose the hypotheses of [[lem-ros2-w-method-order-two-expansion]] and [[lem-ros2-step-map-lipschitz]] hold uniformly on $0\le t\le T$, and the exact solution and numerical iterates stay in the stated compact tube. For $Y_0=y(0)$ and step $h$ with $Nh\le T$, the ROS2 method with exact $f_t$ and a bounded state-Lipschitz matrix field $W(t,y)$ has a constant $C_T$ independent of $h$ and $N$ such that
$$
\max_{0\le n\le N}\|Y_n-y(t_n)\|\le C_T h^2.
$$
One may take $C_T=CT e^{L_RT}$ when the local defect constant is $C$ and the step stability constant is $L_R$ from the preceding lemmas. If additionally $h_0\ge1$, the weaker choice $C_T=C h_0T e^{L_RT}$ is also valid. The exact Jacobian choice $W=D_yf$ is included when it satisfies the same bounds. No claim is made for unbounded or discontinuous $W$, approximate $f_t$, or iterates leaving the tube.

## Facts & Assumptions

**Given:** A $C^2$ time-dependent ODE, exact and numerical trajectories in a compact tube, uniform stage inverse bounds, and a bounded Lipschitz choice of $W$ as specified in the statement.

[F1] [[alg-rosenbrock-ros2-step]] defines the exact-J and W-method stages, with the same stage matrix in both solves.

[F2] [[lem-ros2-w-method-order-two-expansion]] gives a local defect bound $\|\Psi_h(y(t_n))-y(t_{n+1})\|\le Ch^3$.

[F3] [[lem-ros2-step-map-lipschitz]] gives $\|\Psi_h(u)-\Psi_h(v)\|\le(1+L_Rh)\|u-v\|$ on the tube.

## Proof

1.1 Set $e_n=\|Y_n-y(t_n)\|$. Since $Y_{n+1}=\Psi_h(Y_n)$, insert $\Psi_h(y(t_n))$ and apply [F2] and [F3] to get $e_{n+1}\le(1+L_Rh)e_n+Ch^3$. [given, F1, F2, F3, algebra]

2.1 Induction from $e_0=0$ yields $e_n\le Ch^3\sum_{j=0}^{n-1}(1+L_Rh)^j\le Cn h^3e^{L_Rnh}$, using $1+x\le e^x$ for $x\ge0$. [given, step 1.1, algebra]

3.1 Since $nh\le T$ and $n\le T/h$, step 2.1 gives $e_n\le CT e^{L_RT}h^2$. Taking the maximum over $n$ proves the claim with $C_T=CT e^{L_RT}$. If $h_0\ge1$, multiplying this coefficient by $h_0$ only increases it, yielding the stated optional weaker bound. [given, step 2.1, algebra] ∎
