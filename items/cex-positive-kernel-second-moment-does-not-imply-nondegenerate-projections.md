---
id: cex-positive-kernel-second-moment-does-not-imply-nondegenerate-projections
kind: counterexample
title: Positive kernel second moment does not imply nondegenerate first projections
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - def-two-sample-order-r-u-statistic-and-first-projections
  - lem-two-sample-u-statistic-degenerate-remainder-order
  - def-identically-distributed-and-iid-random-variables
  - def-moments-variance-and-covariance
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Statement refuted

For a two-sample order-$(r,r)$ kernel, positivity of its second moment under
every P/Q assignment implies that both first-projection variances are positive.

## Facts & Assumptions

**Given:** The Rademacher law, the kernel above, and the definitions in
[[def-two-sample-order-r-u-statistic-and-first-projections]].

[F1] [[def-two-sample-order-r-u-statistic-and-first-projections]]: the parameter is $E h$ and the first projections are conditional section expectations centered by $E h$.

[F2] [[lem-two-sample-u-statistic-degenerate-remainder-order]]: if both first projections vanish, then $E[U_{m,n}^2]=O(N^{-2})$ for this fixed-order kernel.

[F3] [[def-moments-variance-and-covariance]]: variance is the expected squared centered deviation.

## Counterexample

Let $P=Q$ be the Rademacher law, assigning probability $1/2$ to each of
$-1$ and $1$. Take $r=2$ and

$$h(x_1,x_2;y_1,y_2)=x_1x_2-y_1y_2.$$

**Given:** Independent Rademacher observations in both groups and the specified kernel. Verify the null, moments, and first projections.

1.1 The kernel is symmetric within each block and changes sign when the blocks are exchanged. Since each Rademacher variable has mean zero, [F1] gives $\theta=E[X_1X_2]-E[Y_1Y_2]=0$. [F1, given, algebra]

1.2 The products $A=X_1X_2$ and $B=Y_1Y_2$ are independent Rademacher variables. Hence $E[h^2]=E[(A-B)^2]=E[A^2]+E[B^2]-2E[AB]=2$. Because $P=Q$, this same strictly positive finite second moment holds for every assignment of the four kernel arguments. [given, F3, algebra]

1.3 For every fixed $x$, $E[h(x,X_2;Y_1,Y_2)]=xE[X_2]-E[Y_1]E[Y_2]=0$; for every fixed $y$, $E[h(X_1,X_2;y,Y_2)]=E[X_1]E[X_2]-yE[Y_2]=0$. Thus $g_X=g_Y=0$ and both first-projection variances vanish. [F1, given, algebra]

2.1 By [F2], $E[U_{m,n}^2]=O(N^{-2})$, so $\sqrt m\,U_{m,n}\to0$ in $L^2$ when $m/N\to p\in(0,1)$. The positive kernel second moment therefore does not provide a nondegenerate normal pivot; the explicit positive first-projection assumptions in the asymptotic theorem cannot be dropped. [F2, step 1.3, algebra] ∎
