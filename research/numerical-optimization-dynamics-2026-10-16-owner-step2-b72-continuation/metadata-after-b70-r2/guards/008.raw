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

Input a real active column $x\in\mathbb F^r$ and trailing block $B\in\mathbb F^{r\times q}$ with entries in the floating-point system, $r\ge1$, $q\ge0$. If every component of $x$ is zero, return the identity action and a copy of $B$, with the active output column set to exact zeros, so that $C_+=[0e_1\;B]$; return $(v=0,\widehat\tau=0,\widehat\alpha=0,C_+)$ marked `identity`. Otherwise compute $s=\max_{1\le i\le r}|x_i|>0$, and then, in increasing $i$, compute $z_i=\operatorname{fl}(x_i/s)$. Initialize $t=0$ and, in increasing $i$, compute $a_i=\operatorname{fl}(z_i z_i)$ followed by $t=\operatorname{fl}(t+a_i)$. Compute $h=\operatorname{fl}(\sqrt t)$ and then $\widehat r=\operatorname{fl}(s h)$. Set $\sigma=1$ if $x_1=0$ and $\sigma=\operatorname{sign}(x_1)$ otherwise, and set $\widehat\alpha=-\sigma\widehat r$ using the exact sign change. Compute $v_1=\operatorname{fl}(x_1-\widehat\alpha)$, then copy $v_i=x_i$ exactly for $i=2,\ldots,r$.

Initialize $w=0$ and, in increasing $i$, compute $a_i=\operatorname{fl}(v_i v_i)$ followed by $w=\operatorname{fl}(w+a_i)$. Then compute $\widehat\tau=\operatorname{fl}(2/w)$. For each column $j=1,\ldots,q$ in increasing order, initialize $d_j=0$ and, in increasing $i$, compute $a_{ij}=\operatorname{fl}(v_i B_{ij})$ followed by $d_j=\operatorname{fl}(d_j+a_{ij})$. After all $d_j$ have been computed, in increasing $i$ compute $p_i=\operatorname{fl}(\widehat\tau v_i)$. Then, in increasing $j$ and within each column in increasing $i$, compute $U_{ij}=\operatorname{fl}(p_i d_j)$ and $\widehat B_{ij}=\operatorname{fl}(B_{ij}-U_{ij})$ in that order. The complete active output is $C_+=[\widehat\alpha e_1\;\widehat B]$, with exact zeros written below its first diagonal entry. If any elementary operation fails, return the first range failure with its stage and indices in the order above. Also return failure if $t$, $\widehat r$, or $w$ is not positive normal, or any intermediate is nonfinite. Otherwise return $(v,\widehat\tau,\widehat\alpha,C_+)$ marked `reflector`. For a separate block $Y$, apply the stored reflector by computing its sequential column dots in increasing column order, then the vector $p_i=\operatorname{fl}(\widehat\tau v_i)$ in increasing $i$, and then each rounded product and subtraction by increasing column and row; omit the target-column overwrite. Store reflector factors with their identity/reflector marker to represent the exact orthogonal product; a rounded explicit dense product is a separate output with its own arithmetic error. For a nonzero stored $v$, the associated exact reflector is $H(v)=I-2vv^T/(v^Tv)$, using [[def-householder-reflector]] and the QR convention of [[def-full-reduced-and-column-pivoted-computational-qr-factorisations]]. This definition does not assert a local backward-error bound.

## Facts & Assumptions
**Given:** a finite input of the stated type and the operationwise arithmetic model.

[F1] [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]: each successful elementary operation returns a finite value, and an invalid or out-of-range operation returns a failure status.

## Proof

1.1 Every loop index ranges over the finite input length or matrix dimensions; any branch test in the definition is a comparison of already supplied finite values. [given, choose]

2.1 At each operation the model [F1] either returns a finite next value or the defined failure status, and every loop has its stated finite bound. Thus execution terminates with the specified output or first failure. [step 1.1, F1, algebra] ∎
