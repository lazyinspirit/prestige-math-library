---
id: ex-two-stage-rosenbrock-factorization-reuse
title: "Two stage right-hand sides reuse one shifted-Jacobian factorization"
kind: example
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-two-stage-rosenbrock-w-method
  - alg-rosenbrock-shifted-qr-solver-with-residual-certificate
  - alg-scaled-householder-reflector-formation-and-application
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
  - lem-rosenbrock-stage-residual-certificate
proof_strategy: direct
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "WIAS Berlin, Numerical Methods for Stiff Ordinary Differential Equations, §2.4"
      url: "https://www.wias-berlin.de/people/john/LEHRE/NUMERIK_II_24_25/ode_2.pdf"
      locator: "§2.4, Remark 2.36, printed p. 45: one common factorization reused across stages"
    - title: "Daniel Kressner, Advanced Numerical Analysis, §3.5 Rosenbrock methods"
      url: "https://www.epfl.ch/labs/anchp/wp-content/uploads/2018/05/AdvancedNA2015.pdf"
      locator: "§3.5, printed pp. 42–44: common factorization reused across stages"
---

## Statement

Take $J=\operatorname{diag}(-1,-2)$, $f(y)=Jy$, $y=(1,2)^T$, $h=1$, and the W-method approximation $\widetilde J=0$, $\widetilde T=0$. Choose a stored finite system containing $0,\pm\frac12,\pm1,\pm2,\pm4$ in its normal range, with unit roundoff $0<u\le1/100$. Let a terminating certificate evaluator return norm upper bounds $2$ for $\|W\|_F$ and $5$ for each displayed vector norm, and return certified upper bounds at most $1/2$ for the residual-bound expressions in both solves. Take stage tolerances $\varepsilon_1=\varepsilon_2=1$. Then $W=I_2$ and both stage right-hand sides use its single factor object. The exact stages are $k_1=(-1,-4)^T$, midpoint state $(1/2,0)^T$, $F_1=(-1/2,0)^T$, and $q_2=F_1-k_1=(1/2,4)^T$. The prescribed QR factorization succeeds and is reused for both stage solves. No stability or rounding-cost claim is made.

## Facts & Assumptions

**Given:** $J=\operatorname{diag}(-1,-2)$, $y=(1,2)^T$, $h=1$, $\widetilde J=\widetilde T=0$, a stored finite system containing the displayed dyadic values in normal range with $u\le1/100$, the stated norm upper bounds, and residual tolerances one.

[F1] [[alg-two-stage-rosenbrock-w-method]]: both stages use the same $W$ and the method factors $W$ once.

[F2] [[alg-rosenbrock-shifted-qr-solver-with-residual-certificate]]: the factor object stores one QR factorization and each solve uses one triangular substitution.

[F3] [[alg-scaled-householder-reflector-formation-and-application]]: on each nonzero stored active column, the specified finite arithmetic forms a reflector, updates the trailing block, and returns either the stored reflector data or a declared failure.

[F4] [[lem-rosenbrock-stage-residual-certificate]]: the exact linear residual is bounded by the computed residual and the explicit dot-product and subtraction allowance.

[F5] [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]: a successful operation on an exact zero or normal result returns its round-to-nearest value, and exact representable results are unchanged.

## Proof

**Given:** The data in the Statement.

1.1 The W approximation is $\widetilde J=0$, so $W=I_2$. For the first active column $x=(1,0)^T$, [F3] has $s=1$, $\widehat r=1$, $\widehat\alpha=-1$, $v=(2,0)^T$, $w=4$, and $\widehat\tau=1/2$. Its trailing-block dot is zero, so the output block is $\operatorname{diag}(-1,1)$. The second one-dimensional active column similarly has $v=2,w=4,\widehat\tau=1/2$ and produces $R=-I_2$. By [F5] every exact representable intermediate is unchanged; all nonzero intermediates are among the listed stored normal values, no range branch fails, and both pivots are nonzero. Thus the one factorization succeeds. [given, F3, F5, algebra]

2.1 The first RHS is $f(y)=(-1,-4)^T$. The stored reflectors send it to $(1,4)^T$, and back substitution with $R=-I_2$ gives $k_1=(-1,-4)^T$. The midpoint is $y+k_1/2=(1/2,0)^T$, so $F_1=J(y+k_1/2)=(-1/2,0)^T$; all these exact values are stored. [given, F1, F2, F5, step 1.1, algebra]

3.1 The second RHS is $F_1-k_1=(1/2,4)^T$. The same stored reflectors send it to $(-1/2,-4)^T$ and back substitution gives $q_2=(1/2,4)^T$. Hence $k_2=q_2+k_1=(-1/2,0)^T$. [given, F1, F2, F5, step 2.1, algebra]

4.1 For either solve, $W=I_2$ makes $\widehat v=x$ and the computed residual zero. The norm upper bounds and $\gamma_2=2u/(1-2u)<0.021$ show the first certificate expression is at most $0.021\cdot2\cdot5+0.01\cdot10=0.31<1/2$, so the evaluator's stated $1/2$ bounds are sound; the residual-bound expression is then also at most $1/2$. Thus both solves meet tolerance one. By [F1]–[F2], this successful call uses one factorization and two triangular solves. [given, F1, F2, F4, step 1.1, step 2.1, step 3.1, algebra] ∎

## Finite check

The stored matrix is $I_2$, the two exact RHS values are $(-1,-4)^T$ and $(1/2,4)^T$, and both residual norms are zero. Each residual allowance is less than $0.31$, below the chosen tolerance one.
