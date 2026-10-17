---
id: ex-na-clenshaw-curtis-integrates-quadratics
kind: example
title: "Three-point Clenshaw–Curtis integration of a quadratic"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: clenshaw-curtis-and-extrapolation-quadrature-examples
dependency_level: 7
deps: [def-na-clenshaw-curtis-quadrature, thm-na-clenshaw-curtis-interpolation-coefficients, def-na-clenshaw-curtis-dct-i, lem-na-chebyshev-integral-moments, def-chebyshev-polynomials-first-and-second-kind]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: None. The three-node transform and moment evaluation are finite exact arithmetic.
sources:
  references:
    - title: "Lloyd N. Trefethen, Is Gauss Quadrature Better than Clenshaw–Curtis?, §2"
      url: "https://courses.grainger.illinois.edu/cs591mh/fa2012/trefethen/Clenshaw-Curtis.pdf"
      locator: "Printed pp. 69–70, Clenshaw–Curtis coefficient transform and integral formula."
    - title: "L. Ridgway Scott, Numerical Analysis, 2nd ed., §13.4.1"
      url: "https://www.math.utah.edu/~feldman/teaching_files/F18/natwo.pdf"
      locator: "Printed p. 236, Clenshaw–Curtis interpolatory quadrature."

---

## Example

For the three-point rule ($n=2$) on $[-1,1]$, the nodes are $1,0,-1$ and the quadrature weights in that order are $1/3,4/3,1/3$. Hence it integrates $1$, $x$, and $x^2$ exactly, with respective values $2$, $0$, and $2/3$.

## Facts & Assumptions

**Given:** The degree $n=2$ Clenshaw–Curtis rule on $[-1,1]$ and the sample data of the polynomials $1,x,x^2$ at its three nodes.

[F1] [[def-na-clenshaw-curtis-dct-i]]: for $n=2$, $X_k=y_0+(-1)^ky_2+2y_1\cos(k\pi/2)$.

[F2] [[thm-na-clenshaw-curtis-interpolation-coefficients]]: $a_0=X_0/4$, $a_1=X_1/2$, and $a_2=X_2/4$.

[F3] [[lem-na-chebyshev-integral-moments]]: $\mu_0=2$, $\mu_1=0$, and $\mu_2=-2/3$.

[F4] [[def-na-clenshaw-curtis-quadrature]]: $Q_{2,[-1,1]}(f)=\sum_{k=0}^2a_k\mu_k$ since $d=1$.

[F5] [[def-chebyshev-polynomials-first-and-second-kind]]: $T_0(x)=1$, $T_1(x)=x$, and $T_2(x)=2x^2-1$.

## Proof

1.1 For sample values $(y_0,y_1,y_2)$ at $(1,0,-1)$, [F1] and the exact values $\cos(0)=1$, $\cos(\pi/2)=0$, $\cos(\pi)=-1$ give $X_0=y_0+2y_1+y_2$, $X_1=y_0-y_2$, and $X_2=y_0-2y_1+y_2$. Substituting [F2] into [F4] gives $Q_2(f)=\frac{y_0+2y_1+y_2}{2}-\frac{y_0-2y_1+y_2}{6}=\frac{y_0}{3}+\frac{4y_1}{3}+\frac{y_2}{3}.$ [given, F1, F2, F4, algebra]

2.1 For $1$, the sample vector is $(1,1,1)$ and the rule gives $2$. For $x$, the vector is $(1,0,-1)$ and the rule gives $0$. For $x^2$, it is $(1,0,1)$ and the rule gives $2/3$. Direct integration gives these same values, respectively $2$, $0$, and $[x^3/3]_{-1}^1=2/3$. Equivalently, [F5] gives $x^2=(T_0+T_2)/2$, and [F3] gives integral $\mu_0/2+\mu_2/2=2/3$. Thus all three evaluations agree with the exact integrals. [given, F3, F5, step 1.1, algebra] ∎
