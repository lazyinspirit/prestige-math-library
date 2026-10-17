---
id: alg-complex-scaled-householder-reflector-step
kind: algorithm
title: "Scaled complex Householder reflector step with explicit range status"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
  - def-householder-reflector
  - thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "James Demmel, Math 221 Lecture 16: Hessenberg QR iteration"
      url: https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_16.html
    - title: "David Bindel, CS 6210 Matrix Computations, Hessenberg QR iteration"
      url: https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-10-29.html
---

## Definition

Use the operationwise real/complex model of [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]. Inputs are a complex column $x\in\mathbb C^m$ with $m\ge1$ and a complex trailing block $B\in\mathbb C^{m\times q}$ with $q\ge0$. Each scalar operation below is rounded in the stated order; each complex product is expanded into the six real operations specified by that model. A failure returns the first operation index, partial column, and partial block.

1. Write $x_i=a_i+ib_i$. If every $a_i=b_i=0$, return the identity, $\widehat x=x=0$, $\widehat B=B$, and status zero-column.
2. Set $s=\max_i\max(|a_i|,|b_i|)>0$. Compute $a_i/s$ and $b_i/s$ with positive-real division, and then $t=\sum_i((a_i/s)^2+(b_i/s)^2)$ by left-to-right rounded real operations. If a required operation is out of range, return range-failure. Compute $\widehat r=s\,\operatorname{fl}(\sqrt t)$; range-failure is returned if this is not finite and normal.
3. If $x_1=0$, set $\phi=1$. Otherwise compute $r_1=\operatorname{fl}(\sqrt{a_1^2+b_1^2})$ and $\phi=(a_1/r_1)+i(b_1/r_1)$ by positive-real divisions. Set $\widehat\alpha=-\phi\widehat r$, $v=x-\widehat\alpha e_1$, $w=\sum_i((\operatorname{Re}v_i)^2+(\operatorname{Im}v_i)^2)$, and $\widehat\tau=2/w$, using the same sequential rounded convention. If $w$ is not positive normal, return breakdown; any other invalid or out-of-range operation returns range-failure. For each $i$, then compute $c_i=\operatorname{fl}(\widehat\tau v_i)$ componentwise; a failure here returns range-failure.
4. For each column $\ell$ of $B$, compute $d_\ell=v^*B_{:,\ell}$ as a left-to-right rounded complex dot product. For each row $i$, compute $g_{i\ell}=\operatorname{fl}(c_i d_\ell)$ and $\widehat B_{i\ell}=\operatorname{fl}(B_{i\ell}-g_{i\ell})$. On success, explicitly set the transformed active column to $\widehat x_1=\widehat\alpha$ and $\widehat x_i=0$ for $i>1$; these are exact overwrite operations, and the routine makes no equality claim between $\widehat x$ and $P(v)x$. Return range-failure at the first invalid intermediate; otherwise return $(v,\widehat\tau,\widehat\alpha,\widehat x,\widehat B)$ and status success.

The exact reflector associated with a nonzero stored vector $v$ is $P(v)=I-2\widetilde v\widetilde v^*$, where $\widetilde v=v/\|v\|_2$, as in [[def-householder-reflector]]. The computed update uses $\widehat\tau$ and rounded products; this definition alone makes no backward-error claim for that update.

## Facts & Assumptions

**Given:** A finite complex input column and trailing block of the stated dimensions, and the operationwise arithmetic model.

[F1] [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]: complex products use six rounded real operations; complex division is only by a positive real scalar; invalid or out-of-range operations return range-failure.

[F2] [[thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries]]: the exact reflector associated with a nonzero vector is unitary and can map that vector to a multiple of $e_1$.

## Proof

1.1 Every loop is over the finite input dimensions. The zero-column branch returns immediately; every other branch uses the finite sequences in the definition. [given, choose]

2.1 By [F1], each scalar operation either returns its specified finite rounded value or the defined first failure status. Thus the procedure terminates with a success, zero-column, breakdown, or range-failure result. [step 1.1, F1, algebra]

3.1 On a successful nonzero branch, $v\ne0$ because otherwise the exact reflector formula would not be defined; for every returned nonzero $v$, [F2] makes $P(v)$ unitary. No equality between $P(v)B$ and the rounded $\widehat B$ is asserted. [F2, algebra] ∎
