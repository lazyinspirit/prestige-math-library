---
id: ex-gaussian-two-node-nystrom-exact-separable-equation
kind: example
title: A two-node Gaussian Nyström rule solves a rank-two separable equation exactly
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-nystrom-quadrature-and-finite-rank-operators
  - lem-finite-node-equation-reconstruction-equivalence
  - def-countable-choice
  - def-gauss-moment-data
  - def-gauss-quadrature-rule
  - thm-gauss-rule-exact-through-degree-2m-minus-1-and-positive-weights
  - thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice is used only to identify the continuous Riemann integrals with the Lebesgue-measure integrals in the Gaussian exactness interface. The finite-rank algebra uses no choice."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Andreas Neubauer and Ronny Ramlau, Lecture Notes: Integral Equations and Boundary Value Problems, §3.3"
      url: "https://www.jyu.fi/en/file-download/download/public/28300"
      locator: "Method 3.12 and its finite linear system, printed pp. 60–61."
---

## Example

Assume Countable Choice. Let $\mu$ be Lebesgue measure on $[0,1]$, take $\alpha=1/4$, $\beta=1/2$,
and set $k(x,y)=\alpha+\beta xy$ and $f(x)=1$. The equation
$$u(x)-\int_{[0,1]}k(x,y)u(y)\,d\mu(y)=1$$
has the unique solution
$$u(x)=\frac{80+24x}{57}.$$
The two-node Gaussian rule for $\mu$ gives the exact same solution and a
nonsingular two-by-two grid system. The continuous integrals can equivalently
be read as Riemann integrals under Countable Choice.

## Facts & Assumptions

**Given:** Countable Choice, $\mu$ Lebesgue measure on $[0,1]$, the kernel $k(x,y)=\alpha+\beta xy$ with $\alpha=1/4$, $\beta=1/2$, and $f(x)=1$.

[A1] [[def-countable-choice]] and [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]: for continuous integrands, the Riemann and Lebesgue integrals on $[0,1]$ agree under Countable Choice.

[F1] [[def-gauss-moment-data]]: an order-$2m-1$ datum is a finite positive measure of positive mass whose support has at least $m+1$ points and whose moments through degree $2m-1$ are finite; Lebesgue measure on $[0,1]$ meets these conditions for $m=2$.

[F2] [[def-gauss-quadrature-rule]]: the Gaussian rule $Q_2$ uses its two nodes and weights to approximate integration against $\mu$.

[F3] [[thm-gauss-rule-exact-through-degree-2m-minus-1-and-positive-weights]]: for this order-3 datum, $Q_2(p)=\int p\,d\mu$ for every polynomial $p$ of degree at most $3$.

[F4] [[def-nystrom-quadrature-and-finite-rank-operators]]: the Nyström equation replaces each integral $\int k(x,y)u(y)d\mu(y)$ by its quadrature rule and reconstructs $u$ from its nodal values.

[F5] [[lem-finite-node-equation-reconstruction-equivalence]]: solutions of the grid system reconstruct function solutions, and the nullspaces of its matrix and reconstructed operator are linearly isomorphic.

## Verification

**Given:** The data above and the two moments $m_0:=\int_0^1u(y)\,dy$, $m_1:=\int_0^1yu(y)\,dy$ of a solution.

1.1 Since $Ku(x)=\alpha m_0+\beta x m_1$, any solution is affine and has the form $u(x)=1+\alpha m_0+\beta x m_1$. Integrating this identity against $1$ and against $y$ gives $\begin{pmatrix}1-\alpha&-\beta/2\\-\alpha/2&1-\beta/3\end{pmatrix} \begin{pmatrix}m_0\\m_1\end{pmatrix} =\begin{pmatrix}1\\1/2\end{pmatrix}.$ At the specified parameters the determinant is $(3/4)(5/6)-(1/4)(1/8)=19/32\ne0$, and solving gives $m_0=92/57$, $m_1=16/19$, hence $u(x)=(80+24x)/57$. [given, A1, algebra]

2.1 The function $u$ is affine and $yu(y)$ is quadratic, so [F3] gives $Q_2(u)=m_0$ and $Q_2(yu)=m_1$. Substituting these two exact quadrature moments into the Nyström formula [F4] yields $1+\alpha m_0+\beta x m_1=u(x)$ for every $x$; thus the continuous solution is also a Nyström solution. [given, F1, F2, F3, F4, step 1.1]

3.1 Any solution $v$ of the inhomogeneous two-node Nyström equation has the form $v(x)=1+\alpha Q_2(v)+\beta xQ_2(yv)$, hence is affine. Exactness [F3] then makes its two moments satisfy the same nonsingular system in step 1.1, so those moments and the reconstructed function are unique; step 2.1 supplies existence. A nonzero vector in the grid-matrix kernel would, by the nullspace correspondence [F5], give a nonzero homogeneous solution, which could be added to this solution and contradict uniqueness. Thus the grid matrix is nonsingular, and its reconstruction is the displayed solution. [F3, F4, F5, step 1.1, step 2.1, algebra] ∎