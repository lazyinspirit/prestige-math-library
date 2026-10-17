---
id: def-tensor-product-gauss-rule
kind: definition
title: Tensor-product Gaussian quadrature
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
deps:
  - def-gauss-quadrature-rule
  - lem-gauss-quadrature-rule-data-well-defined
  - def-finite-sum
  - def-monoid-finite-product
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
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

Let $d\ge1$ and, for each coordinate $j=1,\ldots,d$, let
$Q_j(f)=\sum_{i=1}^{m_j}w_i^{(j)}f(x_i^{(j)})$ be a well-defined Gaussian rule
as in [[def-gauss-quadrature-rule]] and
[[lem-gauss-quadrature-rule-data-well-defined]]. Its **tensor-product
quadrature rule** is
$$ Q_{\otimes}(f):= \sum_{i_1=1}^{m_1}\cdots\sum_{i_d=1}^{m_d} \left(\prod_{j=1}^{d}w_{i_j}^{(j)}\right) f\left(x_{i_1}^{(1)},\ldots,x_{i_d}^{(d)}\right). $$
Its node set is the Cartesian product of the one-dimensional node sets; the
displayed finite sum is its value on any real-valued function defined on that node set.
