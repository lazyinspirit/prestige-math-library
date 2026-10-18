---
id: thm-aaa-loewner-minimum-and-support-interpolation
kind: theorem
title: AAA weights minimize the Loewner residual and interpolate support data
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps:
  - alg-aaa-finite-sample-rational-approximation
  - def-barycentric-rational-quotient
  - prop-barycentric-rational-quotient-well-defined
  - thm-singular-value-decomposition
dependency_level: 4
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Yuji Nakatsukasa, Olivier Sète, and Lloyd N. Trefethen, The AAA algorithm
        for rational approximation, Sections 2–4
      url: https://people.maths.ox.ac.uk/trefethen/AAAfinal.pdf
    - title: Sheldon Axler, Linear Algebra Done Right, fourth edition, singular value
        decomposition
      url: https://linear.axler.net/LADR4e.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

At an AAA iteration whose exact SVD call completes successfully, with Loewner matrix
$L\in\mathbb C^{(N-m)\times m}$,
the selected unit weight vector $w$ minimizes $\|Lv\|_2$ among all
$v\in\mathbb C^m$ with $\|v\|_2=1$; its residual is the smallest singular
value of $L$. If every selected weight is nonzero and the iteration does not
return pole status, its barycentric candidate interpolates all selected
support data. The finite support budget makes the procedure terminate after
at most $B$ iterations. These claims concern finite sampled data and do not
assert minimax optimality or uniform off-grid convergence.

## Facts & Assumptions

**Given:** A successful exact-SVD iteration of [[alg-aaa-finite-sample-rational-approximation]], with Loewner matrix $L$ and its selected right singular vector.

[F1] [[alg-aaa-finite-sample-rational-approximation]]: the algorithm selects a unit vector in the smallest right singular subspace of $L$, then forms the barycentric quotient if all weights are nonzero and returns it only after checking its reduced denominator at remaining samples.

[F2] [[thm-singular-value-decomposition]]: a finite-dimensional linear map has orthonormal left and right singular-vector bases and nonnegative singular values, with zero singular values in its kernel directions.

[F3] [[prop-barycentric-rational-quotient-well-defined]]: nonzero support weights give a well-defined barycentric quotient whose value at each support node is its assigned datum.

## Proof

1.1 Let $v_1,\ldots,v_m$ be a full orthonormal right singular-vector basis for $L$, with singular values $\sigma_1\ge\cdots\ge\sigma_m\ge0$ and $\sigma_m=\sigma_{\min}(L)$. For any unit vector $v=\sum_jc_jv_j$, orthonormality gives $\sum_j|c_j|^2=1$, and the SVD gives $$\|Lv\|_2^2=\sum_{j=1}^{m}\sigma_j^2|c_j|^2 \ge\sigma_m^2.$$ The selected $w$ lies in the right singular subspace for $\sigma_m$, so equality holds. Hence $\|Lw\|_2=\sigma_{\min}(L)$ and no unit vector gives a smaller Loewner residual. [given, F1, F2, algebra]

1.2 The right singular subspace $E$ is nonzero. If every projection $P_Ee_j$ of a coordinate basis vector vanished, then every vector of $E$ would be orthogonal to every coordinate basis vector and hence would be zero, a contradiction. Thus the least index with nonzero projection exists; the normalization and phase convention in [F1] choose a unique unit vector in $E$, also when the smallest singular value is repeated or zero. [given, F1, F2, algebra]

1.3 On the successful-weight branch, every support weight is nonzero. By [F3], the barycentric quotient is defined and its value at each selected support node is the corresponding datum. The candidate is returned only after the algorithm's reduced-denominator pole check succeeds at all remaining sample points, so its finite residual there is defined. [given, F1, F3]

2.1 Each iteration removes one previously remaining point and the budget satisfies $B\le\lfloor N/2\rfloor$. Every branch either returns immediately or proceeds to the next integer $m\le B$, so the algorithm makes at most $B$ iterations and terminates. The minimized quantity in step 1.1 is $\|Lw\|_2$; the procedure separately records $\eta_m$ and makes no minimax or uniform-error claim. [given, F1, step 1.1] ∎

