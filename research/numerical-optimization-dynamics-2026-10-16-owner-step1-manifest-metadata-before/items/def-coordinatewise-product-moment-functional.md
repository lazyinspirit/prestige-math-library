---
id: def-coordinatewise-product-moment-functional
kind: definition
title: Coordinatewise product-moment functional for tensor polynomials
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-gauss-moment-data
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

For $d\ge1$, let $(a_j,b_j,m_j,2m_j-1,\mu_j)$ be Gaussian moment data for
each coordinate $j=1,\ldots,d$, and write
$M^{(j)}_k:=\int x^k\,d\mu_j(x)$. A **coordinatewise tensor polynomial** is a
finite coefficient family $(c_\alpha)$ indexed by multi-indices
$\alpha=(\alpha_1,\ldots,\alpha_d)$ with
$0\le\alpha_j\le2m_j-1$, evaluated by
$$ P(x_1,\ldots,x_d)=\sum_{\alpha}c_\alpha\prod_{j=1}^{d}x_j^{\alpha_j}. $$
Define its **coordinatewise product-moment value** by
$$ I_\otimes(P):=\sum_{\alpha}c_\alpha\prod_{j=1}^{d}M^{(j)}_{\alpha_j}. $$
The coefficient family is part of the formal polynomial data, so this finite
sum is unambiguous. This definition specifies the product-moment functional
used for coordinatewise exactness without requiring a measure-product
construction.
