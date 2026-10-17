---
id: ex-adam-adaptive-step-divergence
kind: example
title: A bounded periodic gradient sequence with divergent Adam iterates
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-adam-update
  - cex-adam-periodic-linear-losses-force-divergence
  - def-convex-and-strictly-convex-functions-on-euclidean-sets
  - thm-of-archimedean
  - lem-of-sign-rules
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Sashank J. Reddi, Satyen Kale, and Sanjiv Kumar, On the Convergence of Adam and Beyond, ICLR 2018, full arXiv text"
      url: https://arxiv.org/pdf/1904.09237
      locator: Section 2 and Appendix F, Theorem 6 counterexample.
    - title: "Diederik P. Kingma and Jimmy Ba, Adam: A Method for Stochastic Optimization, ICLR 2015"
      url: https://arxiv.org/pdf/1412.6980
      locator: Section 2, Algorithm 1 and bias-correction equations.
---

## Statement

For Adam with $\beta_1=0$, $\beta_2=1/2$, $\eta=1$, and $\epsilon=1/100$, feed the repeated affine losses $5x/2,-x,-x$ from $x_1=0$. Every gradient has magnitude at most $5/2$, but the terminal subsequence $x_{3k+1}$ tends to $+\infty$; for every $k\ge2$, its cycle drift is at least $7295/90804$.

## Facts & Assumptions

**Given:** The update and loss sequence in the Statement.

[F1] [[alg-adam-update]]: Adam's bias-corrected moments and coordinate update are defined for the fixed parameters in the Statement.

[F2] [[cex-adam-periodic-linear-losses-force-divergence]]: this exact loss sequence and parameter choice give cycle drift at least $7295/90804>0$ for every cycle $k\ge2$ and hence an unbounded terminal subsequence.

[F3] [[def-convex-and-strictly-convex-functions-on-euclidean-sets]]: affine losses satisfy the convex segment inequality.

[F4] [[thm-of-archimedean]]: for every real $R$ there is a natural integer $N\ge1$ with $R<N$.

[F5] [[lem-of-sign-rules]]: multiplication by a positive real preserves strict order.

## Proof

**Given:** The finite-prefix online loss sequence in the Statement.

1.1 Each loss is affine, so direct substitution in [F3] verifies convexity. Its derivative is respectively $5/2,-1,-1$, all of magnitude at most $5/2$; the updates are the bias-corrected Adam updates [F1]. [F1, F3, given, algebra]

2.1 The gradients and parameters in step 1.1 are the specified inputs of [F2]. Let $\delta=7295/90804>0$; its cycle calculation gives $x_{3(k+1)+1}-x_{3k+1}\ge\delta$ for every $k\ge2$. With $X_k=x_{3k+1}$, induction gives $X_{2+r}\ge X_2+r\delta$ for every natural $r\ge0$. For any real $M$, [F4] supplies a natural $N\ge1$ with $(M-X_2)/\delta<N$. Since $\delta>0$, [F5] gives $X_2+N\delta>M$, and then every $r\ge N$ satisfies $X_{2+r}\ge X_2+N\delta>M$. This is exactly convergence of the terminal subsequence to $+\infty$, after its first two cycles. [F2, F4, F5, step 1.1, given, algebra, induction] ∎
