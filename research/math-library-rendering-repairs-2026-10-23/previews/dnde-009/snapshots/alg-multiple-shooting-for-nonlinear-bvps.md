---
id: alg-multiple-shooting-for-nonlinear-bvps
kind: algorithm
title: "Finite-budget multiple shooting for a nonlinear two-point BVP"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-nonlinear-two-point-bvp-and-boundary-residual
  - def-certified-ivp-approximation-and-sensitivity-interface
  - prop-multiple-shooting-residual-block-jacobian
  - alg-finite-budget-newton-for-vector-residuals
  - alg-newton-correction-for-vector-residuals
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "R. Verfürth, Numerical Methods and Stochastics, Part I: Numerical Methods, Lecture Notes"
      url: "https://homepages.rub.de/ruediger.verfuerth/files/lectures/NMS.pdf"
verification:
  precheck: pending
---

## Definition

Fix a mesh $a=t_0<\cdots<t_N=b$, $N\ge1$, and an open product domain of segment starts $(s_0,\ldots,s_N)$ on which $B$ and every certified segment endpoint map are $C^1$, meaning they are totally differentiable with continuous derivative entries. Inputs are an initial tuple in this domain, a residual tolerance $\tau\ge0$, and a correction budget $M\in\mathbb N_0$. Each evaluator supplies an approximate endpoint map $\widetilde\Phi_i$ and its derivative. Form the computed square residual with rows $\widetilde\Phi_i(s_i)-s_{i+1}$ for $0\le i<N$ and $B(s_0,s_N)$; its block Jacobian is the matrix in [[prop-multiple-shooting-residual-block-jacobian]]. For $k=0,1,\ldots,M$, in this order:

1. Evaluate the residual, its Jacobian, and the approximate segment trajectories. If any evaluator fails, return the last valid tuple with status evaluator-failure and no residual certificate.
2. If the Euclidean norm of the residual is at most $\tau$, return the tuple and trajectories with status root-tolerance-met.
3. If $k=M$, return status iteration-budget-exhausted.
4. Solve the Newton correction equation with the displayed square Jacobian using [[alg-newton-correction-for-vector-residuals]]. A singular Jacobian returns status singular-jacobian.
5. If the proposed tuple is outside the open product domain, return the last tuple with status invalid-trial; otherwise accept it as the next iterate.

The procedure applies the finite-budget Newton checks to the $(N+1)d$ variables. Its residual-tolerance status concerns the approximate map that was evaluated. It does not certify that the segment approximations join, that an exact BVP solution exists, or that the procedure converges from arbitrary starts.


## Remarks

The schematic shows one segment, $0\le i<N$. Its computed endpoint and the next segment start are independent states; the dashed connector indicates their difference, not an equality or a trajectory. Vertical placement is schematic and does not impose a sign on any state component.

```tikz
\begin{tikzpicture}[>=stealth]
\draw[->] (0,2.3) -- (10,2.3);
\foreach \x in {0.4,3,6.5,9.4} {\draw (\x,2.2) -- (\x,2.4);}
\node[above] at (0.4,2.4) {$a=t_0$};
\node[above] at (1.7,2.4) {$\cdots$};
\node[above] at (3,2.4) {$t_i$};
\node[above] at (6.5,2.4) {$t_{i+1}$};
\node[above] at (8,2.4) {$\cdots$};
\node[above] at (9.4,2.4) {$t_N=b$};
\node (start) at (3,1) {$s_i$};
\node (endpoint) at (6.5,1) {$\widetilde\Phi_i(s_i)$};
\node (next) at (6.5,-0.6) {$s_{i+1}$};
\draw[->] (start) -- node[above] {$\widetilde\Phi_i$} (endpoint);
\draw[dashed] (endpoint) -- (next);
\node[right] at (6.8,0.2) {$r_i=\widetilde\Phi_i(s_i)-s_{i+1}$};
\end{tikzpicture}
```

The time axis indicates the segment's position in the ordered mesh; for $i=0$ or $i=N-1$ the corresponding mesh labels coincide. Each $s_j$ is in $\mathbb R^d$, each $r_i$ is in $\mathbb R^d$, and the boundary block is $B(s_0,s_N)\in\mathbb R^d$. Thus the computed residual $\widetilde F=(r_0,\ldots,r_{N-1},B(s_0,s_N))$ has $(N+1)d$ scalar entries for the $(N+1)d$ scalar unknowns. This picture does not assert that any residual block vanishes; the algorithm and its limitations remain as stated above.
