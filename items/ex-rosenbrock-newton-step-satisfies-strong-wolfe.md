---
id: ex-rosenbrock-newton-step-satisfies-strong-wolfe
kind: example
title: "The standard Rosenbrock start accepts a full Newton step"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-inexact-newton-krylov-with-descent-safeguard
  - alg-bracketing-zoom-strong-wolfe-search
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

For $f(x,y)=100(y-x^2)^2+(1-x)^2$ at $(x_0,y_0)=(-6/5,1)$, use an exact
unshifted Newton solve, descent threshold $\sigma=1/10$, and strong Wolfe
parameters $c_1=1/10000$, $c_2=2/5$. The initial unit trial satisfies both
strong Wolfe inequalities, so the bracketing search returns $t=1$.

Use the deterministic Krylov procedure which, for a two-dimensional operator
$A$ and right-hand side $b$, forms $V=[b\ Ab]$ when $M\ge2$.
If $V$ and $V^TAV$ are invertible, it returns
$p=V(V^TAV)^{-1}V^Tb$ with iteration count $m=2$; otherwise it returns
`no-candidate`. On other input dimensions or budgets below two it returns
`no-candidate`. Its candidate lies in $K_2(A,b)$ by construction.
Take $M\ge2$, $N\ge1$, $E,Z\ge1$, $J=0$, $\eta_k=\bar\eta=0$,
$\gamma=2$, and $\lambda_0=\lambda_{\max}=1$.


## Facts & Assumptions

**Given:** The Rosenbrock objective and parameters in the Example.

[F1] [[def-jacobian-matrix-and-gradient]]: the gradient is the vector of first partial derivatives in Euclidean coordinates.

[F2] [[def-hessian-and-euclidean-critical-point]]: the Hessian matrix consists of the second partial derivatives.

[F3] [[alg-inexact-newton-krylov-with-descent-safeguard]]: with $\lambda=0$, the algorithm accepts a candidate only after it verifies the Newton residual bound and strict descent test.

[F4] [[alg-bracketing-zoom-strong-wolfe-search]]: the expansion phase tests $t=1$ first and returns a step only after both strong Wolfe inequalities are checked.

[F5] [[def-wolfe-and-strong-wolfe-conditions]]: a strong Wolfe step satisfies Armijo decrease and $|\phi'(t)|\le c_2|\phi'(0)|$.

## Verification

**Given:** The objective, initial point, and parameters of the Example.

1.1 Put $r:=y-x^2$. Direct differentiation using [F1]–[F2] gives $\nabla f=(-400xr+2(x-1),200r)$ and $H_f=\begin{bmatrix}1200x^2-400y+2&-400x\\-400x&200\end{bmatrix}$. At $(-6/5,1)$, $r=-11/25$, $g=(-1078/5,-88)$, and $H=\begin{bmatrix}1330&480\\480&200\end{bmatrix}$. [given, F1, F2, algebra]

1.2 With $b=-g$, direct calculation gives $\det[b\ Hb]=-14221856/5\ne0$ and $\det H=35600\ne0$. Thus $V$ and $V^THV$ are invertible. The specified solver returns $p\in K_2(H,b)$ with $V^T(Hp-b)=0$; since $V$ is invertible, $Hp=b$. Solving $Hp=-g$ gives $p=(11/445,847/2225)$; substitution into the matrix product verifies the equation exactly. Hence the recomputed unshifted residual is zero and $g^Tp=-86394/2225<-38$. Also $\|g\|_2<234$ and $\|p\|_2<41/100$, so $g^Tp<-38<-(1/10)(234)(41/100)<-\sigma\|g\|_2\|p\|_2$. The descent safeguard accepts this direction. [given, F3, algebra]

2.1 The full trial is $(x_1,y_1)=(-523/445,3072/2225)$, with $y_1-x_1^2=-121/198025$. Thus $f(x_0,y_0)=121/5$, while $f(x_1,y_1)=(968/445)^2+100(121/198025)^2<5$. Since $\phi'(0)=g^Tp>-39$, the Armijo right side is greater than $121/5-39/10000>24$; therefore the full trial satisfies Armijo. [given, F1, F5, step 1.2, algebra]

2.2 At the trial point, $|x_1|<6/5$, $|x_1-1|<11/5$, and $|y_1-x_1^2|<1/1600$. The gradient formula of step 1.1 gives $|(\nabla f(x_1,y_1))_1|<47/10$ and $|(\nabla f(x_1,y_1))_2|<1/8$. Since $|p_1|<1/40$ and $|p_2|<2/5$, it follows that $|\phi'(1)|=|\langle\nabla f(x_1,y_1),p\rangle|<1/5$. Meanwhile $c_2|\phi'(0)|>(2/5)38>15$. The strong curvature inequality therefore holds. [given, F1, F5, step 1.2, algebra]

3.1 Steps 2.1 and 2.2 verify both strong Wolfe tests at the first trial $t=1$. By [F4] the search returns this verified full step. This example is a single accepted update and gives no global convergence claim. [F4, step 2.1, step 2.2] ∎
