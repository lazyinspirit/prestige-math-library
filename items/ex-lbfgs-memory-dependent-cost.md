---
id: ex-lbfgs-memory-dependent-cost
kind: example
title: "Full-memory and limited-memory storage costs"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-lbfgs-two-loop-with-curvature-filter
  - lem-lbfgs-two-loop-equals-stored-updates-and-cost
  - alg-full-memory-bfgs-with-curvature-safeguards
  - def-bfgs-curvature-pair-and-update-formulas
proof_strategy: direct
axiom_use: "None. This example uses finite exact-arithmetic calculations; no choice principle is used."
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, 2nd ed."
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 6 §6.1 and Chapter 7 §7.2, full-memory and limited-memory operation/storage discussion, printed pp. 141 and 178–179 / PDF pp. 159 and 196–197."
    - title: "Dong C. Liu and Jorge Nocedal, On the limited memory BFGS method for large scale optimization"
      url: "https://people.sc.fsu.edu/~inavon/5420a/liu89limited.pdf"
      locator: "§§2 and 6, stored correction pairs and per-iteration cost, printed pp. 506–508 and 523–524 / PDF pp. 6–8 and 23–24."
---

## Example

Compare the paired Hessian/inverse state used by the full-memory algorithm with the correction-pair storage in L-BFGS for $n=1000$ variables and memory length $m=10$.

## Facts & Assumptions

**Given:** $n=1000$, $m=10$, a full $n\times n$ BFGS matrix, and the limited-memory state of [[alg-lbfgs-two-loop-with-curvature-filter]].

[F1] [[lem-lbfgs-two-loop-equals-stored-updates-and-cost]]: L-BFGS stores at most $m$ pairs of length-$n$ vectors and uses $O(mn)$ work for the two-loop recursion.

[F3] [[alg-full-memory-bfgs-with-curvature-safeguards]]: this fully explicit implementation maintains both consistent dense matrices $B_k$ and $H_k$.

[F2] [[alg-lbfgs-two-loop-with-curvature-filter]]: the working vectors have length $n$ and the stored memory is capped at $m$ pairs.

[F4] [[def-bfgs-curvature-pair-and-update-formulas]]: the direct update is $B^+=B-Bss^TB/(s^TBs)+yy^T/(s^Ty)$, and the inverse update is $H^+=(I-\rho sy^T)H(I-\rho ys^T)+\rho ss^T$, with $\rho=(s^Ty)^{-1}$.

## Verification

1.1 Each dense matrix contains $n^2=1000^2=1{,}000{,}000$ real entries. The paired state in [F3] therefore stores $2n^2=2{,}000{,}000$ matrix entries; a one-matrix implementation stores $n^2=1{,}000{,}000$. [given, F3, algebra]

1.2 The L-BFGS pair list contains at most $2mn=2\cdot10\cdot1000=20{,}000$ real coordinates, plus $O(n+m)$ temporary vectors and scalars. [given, F1, F2, algebra]

2.1 In exact inverse-matrix mode, computing $p=-Hg$ uses one dense matrix-vector product and costs $O(n^2)$ scalar operations. For the direct update, first compute $u:=Bs$ with one dense matrix-vector product; since $B$ is symmetric, $Bss^TB=uu^T$. Then form $B^+=B-uu^T/(s^Tu)+yy^T/(s^Ty)$ using two outer products and an entrywise matrix update, which costs $O(n^2)$. For the inverse update, first compute $v:=Hy$ with one dense matrix-vector product and expand [F4] using symmetry of $H$ to obtain $$H^+=H-\rho(sv^T+vs^T)+(\rho+\rho^2y^Tv)ss^T.$$ This uses a constant number of outer-product updates and also costs $O(n^2)$. Thus the dense direction and the paired BFGS updates use $O(n^2)$ work per iteration. By [F1], the two-loop recursion uses $O(mn)$ scalar work. Here $mn=10{,}000$ while $n^2=1{,}000{,}000$; the paired representation uses 100 times as many matrix entries as correction-pair coordinates, and a one-matrix representation uses 50 times as many. These are storage comparisons, not exact operation totals. [given, F1, F3, F4, algebra] ∎

## Remarks

The example compares storage and update work only. It does not infer that L-BFGS has the same convergence rate as full BFGS; its convergence result requires separate curvature and scale bounds.
