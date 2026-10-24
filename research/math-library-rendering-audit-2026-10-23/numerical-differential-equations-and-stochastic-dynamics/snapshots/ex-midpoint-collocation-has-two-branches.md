---
id: ex-midpoint-collocation-has-two-branches
kind: example
title: "A midpoint BVP residual can have two simple solution branches"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-nonlinear-two-point-bvp-and-boundary-residual
  - def-midpoint-collocation-residual-for-bvps
  - prop-midpoint-residual-zero-is-collocation
  - alg-midpoint-collocation-for-nonlinear-bvps
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "T. A. Driscoll and R. J. Braun, Fundamentals of Numerical Computation, Chapter 10"
      url: "https://fncbook.com/tpbvp/"

verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Example

For $y'=0$ on $[0,1]$ with scalar boundary residual $B(y(0),y(1))=y(0)^2-1$, the exact BVP has two constant solutions $y\equiv1$ and $y\equiv-1$. For every uniform mesh, the normalized implicit-midpoint collocation residual has exactly those two roots, and each root is simple.

## Verification

**Given:** The scalar vector field $f(t,y)=0$, the endpoint map $B(y_0,y_1)=y_0^2-1$, and a uniform mesh with $N\ge1$.

[F1] [[def-nonlinear-two-point-bvp-and-boundary-residual]]: BVP solutions satisfy the ODE and endpoint residual.

[F2] [[def-midpoint-collocation-residual-for-bvps]]: the interior normalized rows are $(Y_{i+1}-Y_i)/h$ and the last row is $Y_0^2-1$.

[F3] [[prop-midpoint-residual-zero-is-collocation]]: zeros of the residual are exactly the stated midpoint equations and boundary equation.

[F4] [[alg-midpoint-collocation-for-nonlinear-bvps]]: the algorithm applies finite-budget Newton to this square residual but does not select a global branch.

1.1 Since $y'=0$, every BVP solution is constant; the boundary equation is $y(0)^2-1=0$, whose real roots are $1$ and $-1$. Both constant curves satisfy the equation and endpoint condition. [given, F1, algebra]

2.1 At a residual zero, the interior rows from [F2] force $Y_{i+1}=Y_i$ for every $i$, so all nodes equal some $c$; the endpoint row then gives $c^2-1=0$. Thus the only residual zeros are the two constant node vectors $Y_i=1$ and $Y_i=-1$, in accord with [F3]. [F2, F3, step 1.1, algebra]

3.1 At either root, a vector $z=(z_0,\ldots,z_N)$ in the kernel of the residual Jacobian satisfies $z_{i+1}-z_i=0$ in every interior row, hence all $z_i=c$. The boundary row is $2Y_0z_0=0$; since $Y_0=\pm1$, this forces $c=0$. The square Jacobian has trivial kernel, so it is invertible and each root is simple. [F2, step 2.1, algebra]

4.1 Fact [F4] defines a finite Newton procedure but makes no branch-selection or global-convergence claim. The existence of both roots shows directly that the BVP and its collocation residual have no unique global solution branch. [F4, step 3.1] ∎
