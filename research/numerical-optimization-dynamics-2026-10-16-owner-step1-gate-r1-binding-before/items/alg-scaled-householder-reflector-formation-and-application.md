---
id: alg-scaled-householder-reflector-formation-and-application
kind: algorithm
title: "Scaled Householder reflector formation and application"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
  - def-householder-reflector
  - def-full-reduced-and-column-pivoted-computational-qr-factorisations
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Fundamentals of Numerical Computation, floating-point arithmetic"
      url: https://fncbook.com/floating-point/
    - title: "Fundamentals of Numerical Computation, Householder triangularization"
      url: https://fncbook.com/house/
    - title: "Fundamentals of Numerical Computation, QR factorization and least squares"
      url: https://fncbook.com/qr/
    - title: "Stuart and Voss, Matrix Analysis and Algorithms, Warwick lecture notes"
      url: https://www.seehuhn.de/publications/StuaVo08/numlinalg.pdf
---

## Definition

Input a real active column $x\in\mathbb F^r$ and trailing block $B\in\mathbb F^{r\times q}$, with entries in the floating-point system, $r\ge1$, and $q\ge0$. If $x=0$, return the identity action and copy $B$. Otherwise let $s=\max_i|x_i|>0$, compute $z_i=\operatorname{fl}(x_i/s)$ and $t=\operatorname{fl}(\sum_i z_i^2)$ by sequential rounded operations, then $\widehat r=\operatorname{fl}(s\operatorname{fl}(\sqrt t))$. Set $\sigma=1$ when $x_1=0$ and $\sigma=\operatorname{sign}(x_1)$ otherwise, $\widehat\alpha=-\sigma\widehat r$, $v_i=\operatorname{fl}(x_i-\widehat\alpha\,1_{i=1})$, $w=\operatorname{fl}(v^Tv)$, and $\widehat\tau=\operatorname{fl}(2/w)$. Compute $d=\operatorname{fl}(v^TB)$ by sequential rounded products and additions, $p_i=\operatorname{fl}(\widehat\tau v_i)$, $U_{ij}=\operatorname{fl}(p_i d_j)$, and $\widehat B_{ij}=\operatorname{fl}(B_{ij}-U_{ij})$. The complete active output is $C_+=[\widehat\alpha e_1\;\widehat B]$: write exact zeros below its first diagonal entry. This fixes the multiplication order and includes the column overwrite in the analyzed step. Return the first range failure on any invalid or out-of-range operation; return failure if $t$, $\widehat r$, or $w$ is not positive normal, or any intermediate is nonfinite. Otherwise return $(v,\widehat\tau,\widehat\alpha,C_+)$. Store these reflectors to represent the exact orthogonal product; a rounded explicit dense product is a separate output with its own arithmetic error. The exact reflector associated with nonzero stored $v$ is $H(v)=I-2vv^T/(v^Tv)$, using [[def-householder-reflector]] and the QR convention of [[def-full-reduced-and-column-pivoted-computational-qr-factorisations]]. This definition does not assert a local backward-error bound.

## Facts & Assumptions
**Given:** a finite input of the stated type and the operationwise arithmetic model.

[F1] [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]: each successful elementary operation returns a finite value, and an invalid or out-of-range operation returns a failure status.

## Proof

1.1 Every loop index ranges over the finite input length or matrix dimensions; any branch test in the definition is a comparison of already supplied finite values. [given, choose]

2.1 At each operation the model [F1] either returns a finite next value or the defined failure status, and every loop has its stated finite bound. Thus execution terminates with the specified output or first failure. [step 1.1, F1, algebra] ∎