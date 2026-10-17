---
id: def-gauss-quadrature-rule
kind: definition
title: The m-node Gaussian quadrature rule for a positive measure
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-gauss-moment-data
  - thm-monic-gauss-orthogonal-polynomials-exist-uniquely
  - thm-gauss-orthogonal-polynomial-has-simple-interior-zeros
  - def-cardinal-polynomial-interpolation
  - def-integrable-real-and-complex-functions-and-their-integrals
justified_by:
  - lem-gauss-quadrature-rule-data-well-defined
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "John A. Gubner, Gaussian Quadrature and the Eigenvalue Problem, §§2–5, 2020"
      url: "https://gubner.ece.wisc.edu/gaussquad.pdf"
    - title: "MATH 373 Lecture Notes, Lecture 14: Gaussian Quadrature, §§10.2–10.5"
      url: "https://sites.math.rutgers.edu/~falk/math373/lecture14.pdf"
    - title: "Walter Gautschi, The Interplay Between Classical Analysis and (Numerical) Linear Algebra, §2.1"
      url: "https://web.stanford.edu/class/cme335/Golub.pdf"
---

## Definition

Let $(a,b,m,2m-1,\mu)$ be moment data as in
[[def-gauss-moment-data]]. Let $p_m$ be its monic degree-$m$ orthogonal
polynomial and write its ordered roots as
$a<x_1<\cdots<x_m<b$, as established in
[[thm-gauss-orthogonal-polynomial-has-simple-interior-zeros]]. For
$i=1,\ldots,m$, define the Lagrange cardinal polynomial
$$ \ell_i(X):=\prod_{\substack{1\le j\le m\\j\ne i}}\frac{X-x_j}{x_i-x_j} $$
using the convention of [[def-cardinal-polynomial-interpolation]]. Define
the **Gaussian quadrature weights** and the **m-node Gaussian rule** by
$$ w_i:=\int_{[a,b]}\ell_i(x)\,d\mu(x),\qquad Q_m(f):=\sum_{i=1}^{m}w_i f(x_i) $$
for any real-valued function $f$ defined at the nodes. This definition
asserts no accuracy; well-definedness of the nodes, cardinal polynomials,
weights, and finite sum is proved in
[[lem-gauss-quadrature-rule-data-well-defined]].
