---
id: thm-corrected-stationary-residual-certificate-soundness
kind: theorem
title: "Termination and soundness of the corrected stationary residual certificate"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-corrected-stationary-residual-certificate
  - thm-m-step-dobrushin-stationary-residual-bound
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice principle is used; the result is a finite-dimensional norm inequality."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ilse C. F. Ipsen and Teresa M. Selee, Ergodicity Coefficients Defined by Vector Norms"
      url: "https://ipsen.math.ncsu.edu/ps/simax75294.pdf"
      locator: "§3, Theorem 3.7 and Corollary 3.9, PDF pp. 12–13; exact zero-sum contraction coefficient."
    - title: "Yuanyuan Liu, Perturbation Bounds for the Stationary Distributions of Markov Chains"
      url: "https://arxiv.org/pdf/1208.4974"
      locator: "§1, equation (1.3), PDF p. 2; stationary residual sensitivity under strict contraction."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

For every exact rational input in the domain of [[alg-corrected-stationary-residual-certificate]], the procedure terminates with one of its specified statuses. If it returns `certified` with corrected candidate $x$, correction distance $c=\|y-x\|_1$, residual $r=Px-x$, and $q=\delta(P^m)<1$, then P has a unique stationary probability $\pi$ and

$$\|y-\pi\|_1\le c+\frac{m\|r\|_1}{1-q}.$$

## Facts & Assumptions

**Given:** An exact rational input to the candidate-correction algorithm.

[F1] [[alg-corrected-stationary-residual-certificate]]: the procedure has finite loops over $n$ coordinates, $m$ matrix powers and finitely many column pairs, uses exact rational operations, and returns one of its specified statuses. A successful output has $x=y^+/s$, correction $c=\|y-x\|_1$, residual $r=Px-x$, and $q=\delta(P^m)<1$.

[F2] [[thm-m-step-dobrushin-stationary-residual-bound]]: if $q=\delta(P^m)<1$, the stationary probability $\pi$ is unique and $\|x-\pi\|_1\le m\|Px-x\|_1/(1-q)$.

## Proof

**Given:** P, y, m, and a successful certificate returned by the stated algorithm.

**Proof technique:** apply the residual theorem to the corrected probability and add the explicit correction distance.

1.1 The correction loop visits the $n$ coordinates once; computing $P^m$ uses the finite loop $k=0,\ldots,m-1$, and each matrix product and coefficient scan uses finitely many rational operations. The branches for invalid P, $s=0$, $q\ge1$, and $q<1$ each return a specified status or certificate. Thus the procedure terminates. [F1, given, algebra]

1.2 If the procedure returns `certified`, [F1] gives a column probability vector x, the exact residual $r=Px-x$, correction $c=\|y-x\|_1$, and $q=\delta(P^m)<1$. By [F2], $\|x-\pi\|_1\le m\|r\|_1/(1-q)$. [F1, F2, given]

2.1 Since $y-\pi=(y-x)+(x-\pi)$, the triangle inequality and [F1] give $\|y-\pi\|_1\le\|y-x\|_1+\|x-\pi\|_1\le c+m\|r\|_1/(1-q)$. [F1, step 1.2, algebra] ∎
