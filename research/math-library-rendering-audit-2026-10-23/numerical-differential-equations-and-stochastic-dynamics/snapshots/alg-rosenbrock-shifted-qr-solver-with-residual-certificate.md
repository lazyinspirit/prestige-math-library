---
id: alg-rosenbrock-shifted-qr-solver-with-residual-certificate
title: "Reusable Householder QR solve for a shifted matrix with residual status"
kind: algorithm
status: published
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
      locator: "Lecture 4, ‘Dot products’ and ‘Beyond first order’"
---

## Definition

**Input:** a stored real square matrix $M\in\mathbb R^{d\times d}$ with $d\ge1$; a unit roundoff $u>0$ with $du<1$; and a terminating certificate evaluator `evaluator`. For each requested Euclidean or Frobenius norm of stored data, `evaluator` returns a finite stored nonnegative upper bound for the exact norm or `unavailable`. For each requested nonnegative expression formed from such upper bounds, $u$, and $d$, it returns a finite stored nonnegative upper bound for the exact expression or `unavailable`. Every returned bound is sound. All reflector, substitution, dot-product, and residual operations below use [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]; certificate-evaluator calls return certified bounds rather than relying on ordinary rounded evaluation of a bound expression.

Denote the top-level factor-only operation by `factor(M,u,evaluator)`. It returns either a reusable factor object or a factorization failure status.

1. Set $R:=M$. For each column $j=0,\ldots,d-1$, let $x$ be the active part of column $j$ of $R$ and $B$ the active trailing block to its right. Call [[alg-scaled-householder-reflector-formation-and-application]] on $(x,B)$. If it returns `range-failure`, return that status and no factor object. If it returns a marked `identity` or `reflector` result, replace the active block by its returned $C_+$, store its marker and (when present) $(v,\widehat\tau)$, and continue. For any other return, stop and return `factorization-failure` with no factor object. The resulting $R$ is upper triangular with its lower entries set to exact zeros by the called procedure; this is the full/reduced computational QR convention of [[def-full-reduced-and-column-pivoted-computational-qr-factorisations]].
2. If any diagonal entry $R_{jj}$ is zero, return `singular-factor`. Otherwise return a factor object containing the original stored $M$, $R$, the ordered stored reflectors, $u$, and the certificate evaluator. The factor object's operation `solve(b,epsilon)`, whose input is any stored real $b\in\mathbb R^d$ and finite $\epsilon\ge0$, is:
   1. Apply the stored reflector updates in the same order, each using the successful rounded dot, scaling, product, and subtraction operations specified by [[alg-scaled-householder-reflector-formation-and-application]], to obtain $c$. Return the first `range-failure` if an operation fails.
   2. Compute $x$ by descending rounded back substitution for $Rx=c$. For $i=d-1,d-2,\ldots,0$, initialize $s:=0$; for $j=i+1,i+2,\ldots,d-1$ in increasing order, compute $p:=\operatorname{fl}(R_{ij}x_j)$ and then $s:=\operatorname{fl}(s+p)$; next compute $t:=\operatorname{fl}(c_i-s)$ and $x_i:=\operatorname{fl}(t/R_{ii})$. If any product, addition, subtraction, or division fails, return the first `range-failure`. This is the descending recurrence of [[def-forward-and-back-substitution-for-triangular-systems]] with its rounded operation order made explicit.
   3. Compute $\widehat v_i$ for $i=0,\ldots,d-1$ as the rounded left-to-right dot product of row $i$ of the original $M$ with $x$: initialize the accumulator with $\operatorname{fl}(M_{i0}x_0)$ and for $j=1,\ldots,d-1$ compute $p:=\operatorname{fl}(M_{ij}x_j)$ and then replace the accumulator $s$ by $\operatorname{fl}(s+p)$. Set the resulting accumulator to $\widehat v_i$. Then compute each $\widehat r_i:=\operatorname{fl}(\widehat v_i-b_i)$. Return the first `range-failure` if any operation fails.
   4. Request evaluator bounds $\overline m\ge\|M\|_F$, $\overline x\ge\|x\|_2$, $\overline b\ge\|b\|_2$, $\overline v\ge\|\widehat v\|_2$, and $\overline r\ge\|\widehat r\|_2$. If any request is unavailable, return `(residual-unverified, x, null)`. Request a certified upper bound $\overline W$ for $\gamma_d\overline m\,\overline x+u(\overline v+\overline b)$, where $\gamma_d:=du/(1-du)$. If this request is unavailable, return `(residual-unverified, x, null)`. Request a certified upper bound $\rho$ for $\overline r+\overline W$; if unavailable, return `(residual-unverified, x, null)`. By [[lem-rosenbrock-stage-residual-certificate]], $\rho\ge\|Mx-b\|_2$. Return `(success, x, rho)` if $\rho\le\epsilon$; otherwise return `(residual-not-certified, x, rho)`.

This is a factor-only operation followed by an independently callable solve operation: the factor object accepts each later stored right-hand side and tolerance without receiving a precomputed list. Each solve performs one triangular solve and one residual check using the same stored factorization. A returned residual bound is an equation-residual certificate, not a forward-error estimate; converting it to forward error requires a separate inverse bound. No rank-revealing guarantee, sparse cost bound, or success guarantee for an ill-conditioned matrix is part of this procedure.

Factorization terminates with `singular-factor`, `range-failure`, `factorization-failure`, or a reusable factor object. Each call to the object's `solve` operation terminates with `success`, `range-failure`, `residual-unverified`, or `residual-not-certified`, together with any completed approximate solution and residual bound.
