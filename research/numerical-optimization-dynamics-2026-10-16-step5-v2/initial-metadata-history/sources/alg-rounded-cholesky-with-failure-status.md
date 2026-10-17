---
id: alg-rounded-cholesky-with-failure-status
kind: algorithm
title: "Failure-aware rounded Cholesky factorization"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
  - lem-finite-arithmetic-schedule-termination-and-count
  - def-cholesky-factorisation-with-positive-diagonal
  - thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Fundamentals of Numerical Computation, floating-point arithmetic"
      url: https://fncbook.com/floating-point/
    - title: "Fundamentals of Numerical Computation, Cholesky factorization"
      url: https://fncbook.com/structure/
    - title: "Stuart and Voss, Matrix Analysis and Algorithms, Warwick lecture notes"
      url: https://www.seehuhn.de/publications/StuaVo08/numlinalg.pdf
---

## Definition

Input a Hermitian positive-definite matrix $A\in\mathbb C^{n\times n}$, $n\ge1$, whose real and imaginary components are in the floating-point system, using the convention of [[def-cholesky-factorisation-with-positive-diagonal]]; real matrices are included. Initialize every entry of $\widehat L$ to zero. Process columns $j=1,\ldots,n$ in increasing order. For the diagonal, initialize $s=0$ and, for $k=1,\ldots,j-1$ in increasing order, compute
$$r_k=\operatorname{fl}(\Re(\widehat l_{jk})^2),\quad t_k=\operatorname{fl}(\Im(\widehat l_{jk})^2),\quad q_k=\operatorname{fl}(r_k+t_k),\quad s=\operatorname{fl}(s+q_k),$$
in that order. Then compute $p_j=\operatorname{fl}(a_{jj}-s)$. If an operation fails, or if $p_j$ is not positive and normal, return `failure` with pivot $j$ and the first failing operation location. Otherwise compute $\widehat l_{jj}=\operatorname{fl}(\sqrt{p_j})$; if it is not positive and normal, return `failure` at pivot $j$.

For each $i=j+1,\ldots,n$ in increasing order, initialize the complex accumulator $c_{ij}=0$. For $k=1,\ldots,j-1$ in increasing order, compute the complex product $w_{ik}=\widehat l_{ik}\overline{\widehat l_{jk}}$ using exactly the six real operations of the complex-product convention in [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]], then update
$$\Re(c_{ij})\gets\operatorname{fl}(\Re(c_{ij})+\Re(w_{ik})),\qquad \Im(c_{ij})\gets\operatorname{fl}(\Im(c_{ij})+\Im(w_{ik})).$$
After this dot product, compute $r_{ij}=a_{ij}-c_{ij}$ by one rounded real subtraction for each component, then compute each component of $\widehat l_{ij}=r_{ij}/\widehat l_{jj}$ by one rounded real division. The empty dot product is zero. On any failure return `failure` with pivot $j$ and its first failing operation location (stage, column, row, inner index, component, and operation where applicable), with the diagonal and row loops ordered as stated. If all columns finish, return `success(\widehat L)`. By [[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]], exact positive definiteness ensures an exact factor exists, but does not ensure the rounded algorithm succeeds.


## Remarks

The finite column, row and inner-index loops unroll to an initialized arithmetic schedule. Each rounded operation returns a value or failure under the operationwise model, and each pivot test compares already computed values. The separate result [[lem-finite-arithmetic-schedule-termination-and-count]] supplies termination with the specified completion or first-failure return; no arithmetic-success or backward-error conclusion follows from termination alone.
