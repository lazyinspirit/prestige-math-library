---
id: def-gauss-polynomial-moment-inner-product
kind: definition
title: The polynomial moment pairing
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-gauss-moment-data
  - def-inner-product-space
  - def-real-polynomial-degree-leading-coefficient-and-monic
  - def-integrable-real-and-complex-functions-and-their-integrals
justified_by:
  - thm-gauss-polynomial-moment-pairing-is-an-inner-product
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

Fix moment data $(a,b,m,r,\mu)$ as in
[[def-gauss-moment-data]]. For an integer $k$ with $0\le k\le m$ and
$2k\le r$, let $V_k=\mathbb R^{k+1}$ with its coordinatewise real vector-space
operations. For $c=(c_0,\ldots,c_k)\in V_k$, let
$P_c(x)=\sum_{j=0}^{k}c_jx^j$, the evaluation of the formal polynomial with
that coefficient list ([[def-real-polynomial-degree-leading-coefficient-and-monic]]).
Define the **polynomial moment pairing** on $V_k$ by
$$ \langle c,d\rangle_\mu:=\int_{[a,b]}P_c(x)P_d(x)\,d\mu(x). $$
This is a candidate real inner product in the sense of
[[def-inner-product-space]]; its well-definedness and positive definiteness
under the stated support and moment hypotheses are proved in
[[thm-gauss-polynomial-moment-pairing-is-an-inner-product]].
