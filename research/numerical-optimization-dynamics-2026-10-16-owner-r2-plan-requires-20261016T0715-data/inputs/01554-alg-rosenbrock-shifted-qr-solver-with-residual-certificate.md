---
id: alg-rosenbrock-shifted-qr-solver-with-residual-certificate
title: "Reusable Householder QR solve for a shifted matrix with residual status"
kind: algorithm
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
  - alg-scaled-householder-reflector-formation-and-application
  - lem-rosenbrock-stage-residual-certificate
  - def-forward-and-back-substitution-for-triangular-systems
  - def-full-reduced-and-column-pivoted-computational-qr-factorisations
  - def-householder-reflector
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Daniel Kressner, Advanced Numerical Analysis, §3.5 Rosenbrock methods"
      url: "https://www.epfl.ch/labs/anchp/wp-content/uploads/2018/05/AdvancedNA2015.pdf"
      locator: "§3.5, printed pp. 42–44: one common direct factorization reused across Rosenbrock stages"
    - title: "David Bindel, CS 6210 Matrix Computations, Lecture 4: Dot products and residual-based bounds"
      url: "https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-09-10.html"
      locator: "Lecture 4, ‘Dot products’ and ‘Residual-based bounds’"
---

## Definition

**Input:** a stored real square matrix $M\in\mathbb R^{d\times d}$, $d\ge1$; a finite list of stored real right-hand sides $b^{(1)},\ldots,b^{(s)}\in\mathbb R^d$, $s\ge1$; residual tolerances $\varepsilon_1,\ldots,\varepsilon_s\ge0$; a unit roundoff $u$ with $du<1$; and a norm-certificate routine which either returns an exact norm or a certified upper bound for each requested Euclidean or Frobenius norm, or returns `unavailable`. All arithmetic uses [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]].

1. Set $R:=M$. For each column $j=0,\ldots,d-1$, let $x$ be the active part of column $j$ of $R$ and $B$ the active trailing block to its right. Call [[alg-scaled-householder-reflector-formation-and-application]] on $(x,B)$. This applies the reflector in [[def-householder-reflector]] using the operation order specified by the called procedure. If it returns `range-failure`, return that status and no factor object. Otherwise replace the active block by its returned $C_+$, store its $(v,\widehat\tau)$, and continue. The resulting $R$ is upper triangular with its lower entries set to exact zeros by the called procedure; this is the full/reduced computational QR convention of [[def-full-reduced-and-column-pivoted-computational-qr-factorisations]].
2. If any diagonal entry $R_{jj}$ is zero, return `singular-factor`. Otherwise return a factor object containing $R$ and the ordered stored reflectors. Its operation `solve(b,epsilon)` is:
   1. Apply the stored reflector updates in the same order, each using the successful rounded dot, scaling, product, and subtraction operations specified by [[alg-scaled-householder-reflector-formation-and-application]], to obtain $c$.
   2. Compute $x$ by descending rounded back substitution for $Rx=c$, using the recursion of [[def-forward-and-back-substitution-for-triangular-systems]]. Return the first `range-failure` if any operation fails.
   3. Compute $\widehat v=\operatorname{fl}(Mx)$ row by row and $\widehat r=\operatorname{fl}(\widehat v-b)$. Request certified norm bounds for $M,x,b,\widehat v,\widehat r$. If any bound is unavailable, return `(residual-unverified, x, null)`. Otherwise use [[lem-rosenbrock-stage-residual-certificate]] to form $\rho\ge\|Mx-b\|_2$. Return `(success, x, rho)` if $\rho\le\epsilon$; otherwise return `(residual-not-certified, x, rho)`.

A factor object is reused for every right-hand side in the input list: the procedure performs one shifted-matrix factorization and one triangular solve plus one residual check per right-hand side. A returned residual bound is an equation-residual certificate, not a forward-error estimate; converting it to forward error requires a separate inverse bound. No rank-revealing guarantee, sparse cost bound, or success guarantee for an ill-conditioned matrix is part of this procedure.

The operation terminates with one of `success`, `singular-factor`, `range-failure`, `residual-unverified`, or `residual-not-certified` for each right-hand side, together with any completed approximate solution and residual bound.
