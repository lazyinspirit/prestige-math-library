---
id: ex-rosenbrock-indefinite-hessian-requires-descent-safeguard
kind: example
title: "An indefinite Rosenbrock Hessian makes the raw Newton direction ascend"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-inexact-newton-krylov-with-descent-safeguard
  - lem-strong-wolfe-step-exists-on-a-bounded-below-ray
  - def-wolfe-and-strong-wolfe-conditions
  - def-jacobian-matrix-and-gradient
  - def-hessian-and-euclidean-critical-point
  - def-euclidean-inner-product
  - def-krylov-subspace-of-a-matrix-and-start-vector
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pending
sources:
  references: []
---

## Example

For the Rosenbrock objective $f(x,y)=100(y-x^2)^2+(1-x)^2$ at
$(x,y)=(0,1/100)$, the Hessian is indefinite and the unshifted Newton
correction is an ascent direction. With shift $\lambda=3$, the linear solve
produces a descent direction, and the objective is bounded below on its ray;
a strong Wolfe interval therefore exists. A finite search budget may still
return failure before finding a step.

Use the deterministic Krylov procedure which, for a two-dimensional operator
$A$ and right-hand side $b$, forms $V=[b\ Ab]$ when $M\ge2$.
If $V$ and $V^TAV$ are invertible, it returns
$p=V(V^TAV)^{-1}V^Tb$ with iteration count $m=2$; otherwise it returns
`no-candidate`. On other input dimensions or budgets below two it returns
`no-candidate`. Its candidate lies in $K_2(A,b)$ by construction.
Take $M\ge2$, $N\ge1$, $E,Z\ge1$, $\eta_k=\bar\eta=0$,
$\gamma=2$, $c_1=1/10000$, and $c_2=2/5$, with the shift parameters below.


## Facts & Assumptions

**Given:** The objective and point in the Example, descent threshold $\sigma=1/10$, regularization seed $\lambda_0=3$, a regularization cap $\lambda_{\max}\ge3$, and attempt budget $J\ge1$.

[F1] [[def-jacobian-matrix-and-gradient]]: the gradient is the vector of first partial derivatives in Euclidean coordinates.

[F2] [[def-hessian-and-euclidean-critical-point]]: the Hessian matrix consists of the second partial derivatives.

[F3] [[alg-inexact-newton-krylov-with-descent-safeguard]]: the first linear system is unshifted; a failed residual or descent check triggers a positive shift, and a regularized candidate is accepted only after recomputing its residual and checking descent.

[F4] [[lem-strong-wolfe-step-exists-on-a-bounded-below-ray]]: for a $C^1$ objective bounded below on an entire feasible descent ray, a strong Wolfe interval exists.

## Verification

**Given:** The Rosenbrock objective, the point $(0,1/100)$, $\sigma=1/10$, $\lambda_0=3$, $\lambda_{\max}\ge3$, and $J\ge1$.

1.1 Put $r:=y-x^2$. Differentiating gives $g=(-400xr+2(x-1),200r)$ and $H_f=\begin{bmatrix}1200x^2-400y+2&-400x\\-400x&200\end{bmatrix}$. At the given point, $g=(-2,2)$ and $H=\operatorname{diag}(-2,200)$. The quadratic form of $H$ is negative on $(1,0)$ and positive on $(0,1)$, so $H$ is indefinite. [given, F1, F2, algebra]

2.1 For $b=-g=(2,-2)$ and either $A=H$ or $A=H+3I_2$, $\det[b\ Ab]=-808\ne0$, and both operators are invertible. Hence the specified projected solver returns the exact solution $Ap=b$ in $K_2(A,b)$, using $m=2\le M$. The unshifted Newton solve $Hp=-g$ gives $p=(-1,-1/100)$ and $g^Tp=99/50>0$. It is therefore not a descent direction and fails the algorithm's descent check. [given, F3, step 1.1, algebra]

2.2 For shift $\lambda=3$, $H+3I_2=\operatorname{diag}(1,203)$ and the exact shifted solve gives $p=(2,-2/203)$. Its residual is zero, while $g^Tp=-4-4/203<-4$. Also $\|g\|_2=2\sqrt2<3$ and $\|p\|_2<3$, hence $-(1/10)\|g\|_2\|p\|_2>-9/10$ and $g^Tp<-(1/10)\|g\|_2\|p\|_2$. Thus the shifted candidate passes the stated residual and descent tests. [given, F3, step 1.1, algebra]

3.1 The Rosenbrock objective is nonnegative on $\mathbb R^2$, and the shifted direction has $g^Tp<0$. The entire ray is feasible because $D=\mathbb R^2$. Apply [F4] to conclude that a nonempty interval of strong Wolfe steps exists for this direction. This existence result does not guarantee that any specified finite expansion/zoom budget reaches the interval. [given, F4, step 2.2] ∎
