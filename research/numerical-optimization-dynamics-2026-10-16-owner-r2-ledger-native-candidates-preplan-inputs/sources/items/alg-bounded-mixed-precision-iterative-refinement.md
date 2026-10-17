---
id: alg-bounded-mixed-precision-iterative-refinement
kind: algorithm
title: "Bounded mixed-precision iterative refinement"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
  - def-forward-and-back-substitution-for-triangular-systems
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
    - title: "Stuart and Voss, Matrix Analysis and Algorithms, Warwick lecture notes"
      url: https://www.seehuhn.de/publications/StuaVo08/numlinalg.pdf
    - title: "Higham and Mary, Mixed Precision Algorithms in Numerical Linear Algebra"
      url: https://eprints.maths.manchester.ac.uk/2841/1/paper_eprint.pdf
---

## Definition

Input nonsingular real $A\in\mathbb R^{n\times n}$, $n\ge1$, and $b,x_0\in\mathbb R^n$, nonsingular factor matrix $\widehat A$ formed at factorization precision $u_f$, residual precision $u_r$, solve/update precision $u_w$, finite budget $N\ge0$, tolerance $\tau\ge0$, certified nonnegative constants $\eta_r,\xi_r,\eta_w,\xi_w$, and a certified contraction upper bound $0\le q_{\mathrm{cert}}<1$. Let $x_*=A^{-1}b$ be the unique exact solution. Use the operationwise model of [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]] separately at $u_f,u_r,u_w$. The exact data $A,b$ are available to residual evaluation at $u_r$; stored iterates and correction updates use $u_w$. At iteration $k$, compute $\widehat r_k=\operatorname{fl}_{u_r}(b-Ax_k)$, solve for a correction using the supplied triangular factors of $\widehat A$ and the recurrence in [[def-forward-and-back-substitution-for-triangular-systems]], then round $x_{k+1}=\operatorname{fl}_{u_w}(x_k+\widehat z_k)$. A certificate must bound the residual defect $\widehat r_k=A(x_*-x_k)+\delta_{r,k}$ by $\|\delta_{r,k}\|_2\le\eta_r(\|A\|_2\|x_k\|_2+\|b\|_2)+\xi_r$, and the combined solve/update residual-equivalent error is defined by
$$x_{k+1}=x_k+\widehat A^{-1}(\widehat r_k+\delta_{w,k}),\qquad \|\delta_{w,k}\|_2\le\eta_w\|\widehat r_k\|_2+\xi_w.$$
The certificate must verify that $q\le q_{\mathrm{cert}}$, where
$$q=\|I-\widehat A^{-1}A\|_2+ \|\widehat A^{-1}\|_2((1+\eta_w)\eta_r+\eta_w)\|A\|_2.$$
If a required range or nonsingularity check fails, a certificate is unavailable, or $q\le q_{\mathrm{cert}}<1$ is not certified, return inconclusive. Otherwise test the current residual, return residual-tolerance if its computed norm is at most $\tau$, and update at most $N$ times; return budget-exhausted after $N$ unsuccessful updates. Return the current iterate with its status. The procedure is finite and does not claim exact termination or unconditional convergence.

## Facts & Assumptions
**Given:** a finite input of the stated type and the operationwise arithmetic model.

[F1] [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]: each successful elementary operation returns a finite value, and an invalid or out-of-range operation returns a failure status.

## Proof

1.1 Every loop index ranges over the finite input length or matrix dimensions; any branch test in the definition is a comparison of already supplied finite values. [given, choose]

2.1 At each operation the model [F1] either returns a finite next value or the defined failure status, and every loop has its stated finite bound. Thus execution terminates with the specified output or first failure. [step 1.1, F1, algebra] ∎