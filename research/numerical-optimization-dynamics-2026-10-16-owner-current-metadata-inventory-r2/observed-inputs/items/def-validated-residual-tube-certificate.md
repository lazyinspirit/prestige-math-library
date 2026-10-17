---
id: def-validated-residual-tube-certificate
kind: definition
title: "Finite rational residual-tube certificate for an ODE trajectory"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-euclidean-inner-product
  - def-first-order-ode-initial-value-problem-and-solution
  - def-intervals-rectangles-and-complex-balls
  - def-outward-rounded-interval-and-ball-operations
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Donald Estep, A Posteriori Error Bounds and Global Error Control for Approximation of Ordinary Differential Equations, SIAM Journal on Numerical Analysis 32 (1995)"
      url: "https://epubs.siam.org/doi/pdf/10.1137/0732001"
    - title: "Ernst Hairer, course notes, Chapter III: Équations Différentielles Ordinaires"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
---

## Definition

Fix a dimension $d\ge1$, rational times $a<T$, a rational initial vector $y_0$, and an ODE field $f$ represented by a finite acyclic expression DAG with rational constants, time/state inputs, and only $+,-,\times,\div$ nodes. Its domain consists of points where every division is defined. Write $D_yf$ for the matrix of partial derivatives with respect to the state coordinates. A **finite rational residual-tube certificate** consists of the following exact rational data:

1. A finite partition $a=t_0<t_1<\cdots<t_m=T$. On each panel $[t_j,t_{j+1}]$, a vector polynomial $U_j(t)$ with dyadic (hence rational) coefficients, whose neighboring endpoint values agree exactly. These stored coefficients define the actual reconstruction, including any endpoint correction or rounded stage value used by an implementation.
2. For each panel, a closed rational state box $X_j\subset\mathbb R^d$, rational bounds $L_j\ge0$, $\rho_j\ge0$, a rational $d_j\ge0$, and a polynomial radius $R_j(t)$ with rational coefficients. The radius polynomials agree at neighboring endpoints. For a panel's finite rational subdivision, the intended inequalities are $R_j(t)>0$, $R'_j(t)-L_jR_j(t)-\rho_j>0$, and $U_j(t)+[-R_j(t),R_j(t)]^d\subseteq X_j$.
3. A finite rational subdivision of every panel, with exact endpoint coverage, no gaps, and pairwise-disjoint interiors. It supplies cells on which each required range test below is performed. Rational cell endpoints and constants are enclosed by directed outward rounding to finite dyadic endpoints before interval evaluation; an unrepresentable or overflowing conversion cannot validate.
4. An initial check target $d_0\ge0$ with $\sum_i(U_0(a)_i-(y_0)_i)^2\le d_0^2$ and $d_0<R_0(a)$.

The certificate is **validated** only if outward-rounded real-interval evaluation on every supplied cell proves all three radius/tube inequalities, the range inclusion in $X_j$, that every division denominator in the field and its state derivatives excludes zero on the time-state box $[t_j,t_{j+1}]\times X_j$, and
$$\sum_{i=1}^d \sup|U'_{j,i}-f_i(t,U_j(t))|^2\le\rho_j^2,\qquad \sum_{i,k=1}^d \sup|\partial_{y_k}f_i(t,y)|^2\le L_j^2$$
there. Here each supremum is replaced in the check by the maximum absolute endpoint of a finite outward interval enclosure; the residual expression is evaluated at the actual polynomial $U_j$, so interpolation, stage, and storage errors already present in that reconstruction are included. Strict inequalities must have a certified positive interval lower endpoint; an inconclusive, nonfinite, unsupported, or failed test is not validation.

This format certifies only rational expression fields and polynomial reconstructions using the stated finite checks. It uses real intervals, not complex rectangles or balls, and does not claim an evaluator for transcendental functions or general library floating-point operations. The page proves the soundness of a validated certificate separately.

The finite DAG and real-interval conventions are those of [[def-intervals-rectangles-and-complex-balls]] and [[def-outward-rounded-interval-and-ball-operations]].
