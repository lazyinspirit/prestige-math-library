---
id: ex-gaussian-two-node-nystrom-exact-separable-equation
kind: example
title: A two-node Gaussian Nyström rule solves a rank-two separable equation exactly
status: published
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
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-continuous-implies-integrable
  - thm-riemann-stieltjes-fundamental-theorems-for-c1-integrators
  - lem-derivative-of-a-power
  - thm-linearity-of-the-integral
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice is used only to identify the continuous Riemann
  integrals with the Lebesgue-measure integrals in the Gaussian exactness
  interface. The finite-rank algebra uses no choice."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Andreas Neubauer and Ronny Ramlau, Lecture Notes: Integral Equations and
        Boundary Value Problems, §3.3"
      url: "https://www.jyu.fi/en/file-download/download/public/28300"
      locator: "Method 3.12 and its finite linear system, printed pp. 60–61."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
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

[F1] [[def-gauss-moment-data]]: an order-$2m-1$ datum is a finite positive measure of positive mass whose support has at least $m+1$ points and whose moments through degree $2m-1$ are finite; for this example, the Lebesgue measure on $[0,1]$ meets these conditions by [F6] and [F7].

[F2] [[def-gauss-quadrature-rule]]: the Gaussian rule $Q_2$ uses its two nodes and weights to approximate integration against $\mu$.

[F3] [[thm-gauss-rule-exact-through-degree-2m-minus-1-and-positive-weights]]: for this order-3 datum, $Q_2(p)=\int p\,d\mu$ for every polynomial $p$ of degree at most $3$.

[F4] [[def-nystrom-quadrature-and-finite-rank-operators]]: the Nyström equation replaces each integral $\int k(x,y)u(y)d\mu(y)$ by its quadrature rule and reconstructs $u$ from its nodal values.

[F5] [[lem-finite-node-equation-reconstruction-equivalence]]: solutions of the grid system reconstruct function solutions, and the nullspaces of its matrix and reconstructed operator are linearly isomorphic.

[F6] The relative Lebesgue measure of $[0,1]$ is $1$, and every relatively open neighborhood of $0$, $1/2$, or $1$ contains a closed subinterval of positive length. Each such interval has its length as measure ([[thm-lebesgue-measure-of-a-box-of-every-kind]]), so all three points lie in the relative support of $\mu$.

[F7] The functions $y^j$ for $0\le j\le3$ are continuous, bounded, and Riemann integrable ([[thm-continuous-implies-integrable]]). Under [A1] they are Lebesgue integrable with finite moments, so the order-3 moment condition holds.

[F8] For $j=0,1,2$, the Riemann moment is $\int_0^1 y^j\,dy=1/(j+1)$ by the Riemann–Stieltjes fundamental theorem applied to $y^{j+1}/(j+1)$ ([[thm-riemann-stieltjes-fundamental-theorems-for-c1-integrators]], [[lem-derivative-of-a-power]]); [A1] gives the same Lebesgue moments.

[F9] The Riemann integral is linear on continuous functions on $[0,1]$ ([[thm-linearity-of-the-integral]]).

## Verification

**Given:** The data above and the two moments $m_0:=\int_{[0,1]}u(y)\,d\mu(y)$, $m_1:=\int_{[0,1]}yu(y)\,d\mu(y)$ of a solution.

1.1 By [A1], the continuous integrands may be integrated as Riemann integrals. Since $Ku(x)=\alpha m_0+\beta x m_1$, any solution is affine and has the form $u(x)=1+\alpha m_0+\beta x m_1$. Integrating this identity against $1$ and against $y$, using [F8] for the moments and [F9] for linearity, gives $\begin{pmatrix}1-\alpha&-\beta/2\\-\alpha/2&1-\beta/3\end{pmatrix} \begin{pmatrix}m_0\\m_1\end{pmatrix} =\begin{pmatrix}1\\1/2\end{pmatrix}.$ At the specified parameters the determinant is $(3/4)(5/6)-(1/4)(1/8)=19/32\ne0$, and solving gives $m_0=92/57$, $m_1=16/19$, hence $u(x)=(80+24x)/57$. [given, A1, F7, F8, F9, algebra]

2.1 The datum conditions in [F1] hold by [F6] and [F7]. The function $u$ is affine and $yu(y)$ is quadratic, so [F3] gives $Q_2(u)=m_0$ and $Q_2(yu)=m_1$. Substituting these two exact quadrature moments into the Nyström formula [F4] yields $1+\alpha m_0+\beta x m_1=u(x)$ for every $x$; thus the continuous solution is also a Nyström solution. [given, F1, F2, F3, F4, F6, F7, step 1.1]

3.1 Any solution $v$ of the inhomogeneous two-node Nyström equation has the form $v(x)=1+\alpha Q_2(v)+\beta xQ_2(yv)$, hence is affine. Exactness [F3] then makes its two Lebesgue moments satisfy the same nonsingular system in step 1.1, so those moments and the reconstructed function are unique; step 2.1 supplies existence. A nonzero vector in the grid-matrix kernel would, by the nullspace correspondence [F5], give a nonzero homogeneous solution, which could be added to this solution and contradict uniqueness. Thus the grid matrix is nonsingular, and its reconstruction is the displayed solution. [F1, F3, F4, F5, F6, F7, step 1.1, step 2.1, algebra] ∎
