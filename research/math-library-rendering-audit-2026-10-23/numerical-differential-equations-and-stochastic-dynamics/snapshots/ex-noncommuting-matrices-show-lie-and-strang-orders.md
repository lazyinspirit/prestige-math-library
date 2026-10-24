---
id: ex-noncommuting-matrices-show-lie-and-strang-orders
kind: example
title: "Noncommuting two-by-two matrices distinguish Lie and Strang local errors"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-exact-split-flows-lie-strang-and-bracket
  - lem-lie-strang-local-error-expansions
  - def-matrix-product-and-identity-matrix
  - lem-exponential-series-of-a-bounded-operator
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Ernst Hairer, Geometric Numerical Integration, Lecture 2: Symplectic Integrators"
      url: "https://www.unige.ch/~hairer/poly_geoint/week2.pdf"
      locator: "§5, Lie–Trotter and Strang splitting, PDF pp. 12–14."
generation:
  role: example
---

## Example

On $\mathbb R^2$, let $a(x)=Ax$ and $b(x)=Bx$, where
$$A=\begin{pmatrix}0&1\\0&0\end{pmatrix},\qquad B=\begin{pmatrix}0&0\\1&0\end{pmatrix}.$$
The fields are smooth and their exact flows exist globally. With the bracket convention in [[def-exact-split-flows-lie-strang-and-bracket]], the Lie split has a nonzero $h^2$ local defect and the symmetric Strang split has a nonzero $h^3$ local defect at $x=e_1=(1,0)^T$.

## Facts & Assumptions

**Given:** The two matrices and the corresponding linear vector fields on $\mathbb R^2$.

[F1] [[def-exact-split-flows-lie-strang-and-bracket]]: for linear fields $a(x)=Ax$, $b(x)=Bx$, the bracket is $[a,b](x)=(BA-AB)x$.

[F2] [[lem-lie-strang-local-error-expansions]]: the Lie defect is $\frac12h^2[a,b](x)+O(h^3)$ and the Strang defect has leading coefficient $-\frac1{24}[a,[a,b]](x)-\frac1{12}[b,[a,b]](x)$ at order $h^3$.

[F3] [[def-matrix-product-and-identity-matrix]]: matrix products are computed by row-by-column multiplication.

[F4] [[lem-exponential-series-of-a-bounded-operator]]: every finite matrix $M$ has an everywhere-defined exponential $e^{tM}$ with $e^0=I$ and derivative $Me^{tM}$, so its linear ODE flow exists for all real $t$.

## Proof

1.1 By [F4], the linear fields have global exact flows. Direct multiplication gives $BA=\begin{pmatrix}0&0\\0&1\end{pmatrix},\quad AB=\begin{pmatrix}1&0\\0&0\end{pmatrix},\quad C:=BA-AB=\begin{pmatrix}-1&0\\0&1\end{pmatrix}.$ By [F1], $[a,b](x)=Cx$. [F1, F3, F4, algebra]

2.1 Multiplying once more gives $CA-AC=\begin{pmatrix}0&-2\\0&0\end{pmatrix},\qquad CB-BC=\begin{pmatrix}0&0\\2&0\end{pmatrix}.$ These are the matrices of $[a,[a,b]]$ and $[b,[a,b]]$ under the same convention. [F1, F3, step 1.1, algebra]

2.2 At $e_1$, $Ce_1=-e_1\ne0$, so [F2] gives Lie local defect $-\frac12h^2e_1+O(h^3)$, whose leading coefficient is nonzero. Thus its local error has exact order two. [F2, step 1.1, algebra]

3.1 The Strang leading matrix from step 2.1 is $-\frac1{24}(CA-AC)-\frac1{12}(CB-BC)=\begin{pmatrix}0&1/12\\-1/6&0\end{pmatrix}.$ It sends $e_1$ to $(0,-1/6)^T\ne0$, so [F2] gives a nonzero cubic leading local defect and exact local order three. [F2, step 2.1, algebra] ∎

