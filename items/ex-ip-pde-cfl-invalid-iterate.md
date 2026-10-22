---
id: ex-ip-pde-cfl-invalid-iterate
kind: example
title: A CFL-violating finite-element iterate is rejected before inversion
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - alg-ip-finite-element-pde-tikhonov
  - thm-ip-finite-element-pde-tikhonov-status-soundness-and-termination
  - def-ip-pde-solver-admissibility-contract
  - def-matching-affine-simplicial-meshes
  - def-reference-finite-element-and-unisolvent-dofs
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
---

## Example

Let $\Omega=(0,1)^2$ and triangulate its square by joining the center $O=(1/2,1/2)$ to the four corners. Use continuous piecewise-affine finite elements with zero boundary values and row-sum lumped mass. The only free nodal basis function is $\phi$, with value $1$ at $O$ and $0$ at each corner. The one-coordinate semidiscrete heat equation is $m_h\dot U+k_hU=0$, where $m_h=1/3$ and $k_h=4$. Treat the initial coefficient $q=U^0$ as the inversion parameter, take $\Theta_h=\mathbb R$ and $Q_h=\{1\}$, and let the one-step state $u=U^1$ satisfy $R_h(q,u)=u-(1-12\Delta t)q=0$ with observation $G_h(q,u)=u$. A forward-Euler step of size $\Delta t=1/4$ sends $U^0$ to $U^1=(1-12\Delta t)U^0=-2U^0$. Its scalar stability condition is $|1-12\Delta t|\le1$, equivalently $0\le\Delta t\le1/6$. Use the exact projection $P_{Q_h}(z)=1$, exact state/adjoint and objective-interval routines, $y^\delta=0$, $q_0=1$, $\alpha=1$, $\delta=0$, $\kappa=1$, $\tau_g=1$, $L=1$, $\tau_u=\tau_p=0$, and set $N_{\rm iter}=1$, $N_{\rm solve}=2$, $N_{\rm eval}=1$, and $N_{\rm backtrack}=1$. The declared admissibility predicate checks this explicit-step stability condition before solving; at $q_{\rm init}=1$ it rejects the time step, so the inversion algorithm returns `inadmissible` before a state solve.

The diagram shows the four exact triangular cells and the only interior degree of freedom. It is illustrative; the mass and stiffness calculations in the verification use the stated vertices and affine basis.

```tikz
\begin{tikzpicture}[scale=2]
  \coordinate (A) at (0,0);
  \coordinate (B) at (1,0);
  \coordinate (C) at (1,1);
  \coordinate (D) at (0,1);
  \coordinate (O) at (0.5,0.5);
  \draw[thick] (A)--(B)--(C)--(D)--cycle;
  \draw (A)--(O)--(B);
  \draw (B)--(O)--(C);
  \draw (C)--(O)--(D);
  \draw (D)--(O)--(A);
  \fill (O) circle (0.035);
  \fill (A) circle (0.025);
  \fill (B) circle (0.025);
  \fill (C) circle (0.025);
  \fill (D) circle (0.025);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[above left] at (D) {$D$};
  \node[right] at (O) {$O$};
\end{tikzpicture}
```

## Example references

[[def-matching-affine-simplicial-meshes|Matching affine simplicial mesh convention]]

[[def-reference-finite-element-and-unisolvent-dofs|Finite-element spaces and degrees of freedom]]

[[def-ip-pde-solver-admissibility-contract|Declared PDE and CFL admissibility contract]]

[[alg-ip-finite-element-pde-tikhonov|Finite-budget inversion algorithm]]

[[thm-ip-finite-element-pde-tikhonov-status-soundness-and-termination|Sound inadmissible status]]

## Facts & Assumptions

**Given:** The four-triangle mesh, zero boundary degrees of freedom, the center basis function $\phi$, row-sum lumped mass, the scalar semidiscrete heat equation, parameter set $Q_h=\{1\}$ with $q=U^0$, state residual $R_h(q,u)=u-(1-12\Delta t)q$, observation $G_h(q,u)=u$, the stated exact routines and finite algorithm inputs, and $\Delta t=1/4$.

[F1] A matching affine simplicial mesh is a finite face-to-face cover with disjoint simplex interiors ([[def-matching-affine-simplicial-meshes]]).

[F2] A unisolvent finite element gives a unique shape function for each nodal degree of freedom ([[def-reference-finite-element-and-unisolvent-dofs]]).

[F3] The algorithm tests the declared admissibility predicate before any PDE solve and returns `inadmissible` when it is false ([[alg-ip-finite-element-pde-tikhonov]], [[def-ip-pde-solver-admissibility-contract]]).

[F4] The theorem verifies that the algorithm's `inadmissible` status is returned only on a failed admissibility check ([[thm-ip-finite-element-pde-tikhonov-status-soundness-and-termination]]).

## Verification

**Given:** The data in the Example.

1.1 Each of the four triangles has area $1/4$. On each triangle, $\phi$ is the affine barycentric coordinate of the center, so its gradient has magnitude $2$. The row-sum lumped mass contribution at the center is $|K|/3=1/12$ on each triangle, hence $m_h=4/12=1/3$. The stiffness is $k_h=\sum_K\int_K|\nabla\phi|^2=4\cdot4\cdot(1/4)=4$. [given, F1, F2, algebra]

2.1 Dividing the semidiscrete equation by $m_h$ gives $\dot U=-(k_h/m_h)U=-12U$. By the specified forward-Euler update, $U^1=U^0+\Delta t\dot U^0=(1-12\Delta t)U^0=-2U^0$. The scalar amplification has modulus at most one exactly when $-1\le1-12\Delta t\le1$, which is equivalent to $0\le\Delta t\le1/6$; $\Delta t=1/4$ violates it. [given, step 1.1, algebra]

3.1 The model's admissibility predicate requires this explicit-step condition. Since the given step fails it, [F3] shows that the algorithm returns `inadmissible` before calling either state or adjoint solver. This conclusion concerns the declared discrete stability condition, not a stability theorem for the continuous heat equation. [given, F3, step 2.1] ∎
