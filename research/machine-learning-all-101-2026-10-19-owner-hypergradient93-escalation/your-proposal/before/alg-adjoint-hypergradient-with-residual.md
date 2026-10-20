---
id: alg-adjoint-hypergradient-with-residual
kind: algorithm
title: "Adjoint hypergradient with a measured linear-solve residual"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - alg-forward-over-reverse-hessian-vector-product
  - alg-reverse-mode-automatic-differentiation
  - cor-hessian-is-symmetric
  - def-ck-and-multi-index-notation-in-several-variables
  - def-finite-straight-line-computational-program
  - def-smooth-bilevel-learning-problem
  - thm-forward-over-reverse-computes-hessian-vector-product
  - thm-reverse-mode-computes-gradient
  - thm-total-derivative-computes-directional-and-partial-derivatives
justified_by:
  - cor-hessian-is-symmetric
  - thm-total-derivative-computes-directional-and-partial-derivatives
verification:
  precheck: n/a
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "MIT OpenCourseWare 18.S096, Matrix Calculus for Machine Learning and Beyond, Lecture 4 Part 2, §§6.3.1–6.3.2"
      url: "https://ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec06.pdf"
---

## Definition

Input positive dimensions $p,d$, open sets $\Theta\subseteq\mathbb R^p$ and $W\subseteq\mathbb R^d$, $C^2$ and $C^1$ scalar functions $f:\Theta\times W\to\mathbb R$ and $g:W\times\Theta\to\mathbb R$, a point $(\theta,w)\in\Theta\times W$, and finite real-arithmetic computational graphs whose outputs equal $f$ and $g$ on open neighborhoods of the evaluated inputs. The graph primitives for $f$ are $C^2$ and those for $g$ are $C^1$. Here $C^1$ means total differentiability with continuous derivative, $C^2$ means the derivative map is $C^1$, and all graph evaluations must remain on one unique strict branch. Define $F=\nabla_w f$, $H=D_wF$, $B=D_\theta F$, $c=\partial_\theta g$ with $w$ held fixed, and $d=\nabla_w g$; all gradients are column vectors. Also input a tolerance $\tau\ge0$, a positive integer solve budget $N$, a number $\mu>0$, and a valid certificate that the evaluated inner Hessian is symmetric and satisfies $x^THx\ge\mu\|x\|_2^2$ for every $x\in\mathbb R^d$. Finally input a deterministic solver $S$ with the following contract: on a real symmetric positive-definite linear operator and a right-hand side, $S$ terminates within $N$ iterations and returns either a failure status or a vector $\widetilde v$ and a report saying whether its own stopping test passed. The algorithm does not trust that report as an accuracy certificate; it recomputes the residual. All derivative and solver operations in this definition use exact real arithmetic.

If any graph evaluation is outside its declared domain, return DOMAIN_ERROR. If any piecewise primitive is at a branch boundary or has no unique strict active branch, return NONDIFFERENTIABLE and no gradient. Otherwise, use reverse mode on $f$ and take the state block of its returned gradient as the inner residual $r_{\rm in}:=\nabla_w f(\theta,w)$. Use reverse mode on $g$ and take its parameter and state blocks as $c:=\partial_\theta g(w,\theta)$ and $d:=\nabla_w g(w,\theta)$. In these expressions $c$ is the derivative with $w$ held fixed, and $d$ and $c$ are column vectors.

For any $u\in\mathbb R^d$, apply forward-over-reverse Hessian-vector differentiation to $f$ at $(\theta,w)$ in direction $(0,u)\in\mathbb R^p\times\mathbb R^d$. Let $\pi_\theta$ and $\pi_w$ denote projection onto the parameter and state coordinates of the returned vector. Define $M_Hu:=\pi_w\bigl(D(\nabla f)(\theta,w)(0,u)\bigr)$ and $M_Bu:=\pi_\theta\bigl(D(\nabla f)(\theta,w)(0,u)\bigr)$. Hessian symmetry makes $M_Hu=Hu=H^Tu$ and $M_Bu=B^Tu$.

Call $S$ on $M_H$ and right-hand side $d$ with tolerance $\tau$ and budget $N$. If $S$ returns failure, return $(r_{\rm in},\text{SOLVER\_FAILURE})$ with no hypergradient. If it returns a vector $\widetilde v$, compute the actual linear residual $\rho:=d-M_H\widetilde v$ and the reported hypergradient estimate $\widehat h:=c-M_B\widetilde v$. Return $(\widehat h,r_{\rm in},\rho,\text{CONVERGED})$ exactly when the solver reports its stopping test passed and $\|\rho\|_2\le\tau$; otherwise return the same numerical values with status TOLERANCE_OR_BUDGET_NOT_MET. The procedure makes no floating-point accuracy claim.

## Definition references

[[def-smooth-bilevel-learning-problem|Stationarity residual, Hessian and mixed derivative, outer objective, and column-gradient convention]]

[[def-finite-straight-line-computational-program|Finite C1 and C2 real-arithmetic graphs and strict-branch convention]]

[[alg-reverse-mode-automatic-differentiation|Reverse-mode gradient procedure]]

[[thm-reverse-mode-computes-gradient|Exact reverse-mode gradient on a fixed strict branch]]

[[alg-forward-over-reverse-hessian-vector-product|Forward-over-reverse Hessian-vector procedure]]

[[thm-forward-over-reverse-computes-hessian-vector-product|Exact Hessian-vector products on a fixed strict branch]]

[[def-ck-and-multi-index-notation-in-several-variables|Coordinate definition of $C^2$ by continuous iterated partial derivatives]]

[[thm-total-derivative-computes-directional-and-partial-derivatives|Coordinate partials of a totally differentiable map]]

[[cor-hessian-is-symmetric|Symmetry of the C2 Hessian]]

## Remarks

The solver is a supplied finite procedure, so its termination contract is an input requirement. The algorithm verifies the residual even when the solver reports success. Its estimate is still returned with a non-success status when the solver produces a vector whose residual misses the requested tolerance.

Under this algorithm's derivative-map convention, $Df$ is a $C^1$ map. Apply the total-derivative theorem to the coordinate representation of $Df$: each coordinate partial of $Df$ is the corresponding entry of $D(Df)$ and varies continuously. The coordinates of $Df$ are the first partials of $f$, so this supplies the continuous second coordinate partials required by the coordinate-$C^2$ definition and the Hessian-symmetry corollary. That symmetry applies to the full Hessian of $f$, hence its state block is $H=H^T$ and its parameter block in the state direction is $B^T$, as used above.

## Computation graph

The solid arrows show the vector data used for the adjoint estimate: the state derivative of the outer loss is solved against the transposed inner Hessian, then the mixed derivative maps the adjoint vector back to parameter space, where it is subtracted from the direct parameter derivative. The dashed arrows show the independently recomputed linear residual. The state-space vectors have dimension $d$ and the parameter-space vectors have dimension $p$. This diagram summarizes the data flow; the derivative and error proofs do not rely on it.

```tikz
\begin{tikzpicture}[>=stealth]
  \node[draw,align=center] (d) at (0,0) {$d=\nabla_w g$};
  \node[draw,align=center] (solve) at (3.4,0) {solve $H^T\widetilde v=d$};
  \node[draw,align=center] (cross) at (6.8,0) {$B^T\widetilde v$};
  \node[draw,align=center] (out) at (10.4,0) {$\widehat h=c-B^T\widetilde v$};
  \node[draw,align=center] (c) at (8.7,1.6) {$c=\partial_\theta g$};
  \node[draw,align=center] (resid) at (3.4,-1.7) {$\rho=d-H^T\widetilde v$};
  \draw[->] (d.east) -- (solve.west);
  \draw[->] (solve.east) -- node[above] {$\widetilde v$} (cross.west);
  \draw[->] (cross.east) -- node[above] {$-$} (out.west);
  \draw[->] (c.east) -- node[right] {$+$} (out.north);
  \draw[dashed,->] (d.south) to[bend right=18] (resid.west);
  \draw[dashed,->] (solve.south) -- (resid.north);
\end{tikzpicture}
```
