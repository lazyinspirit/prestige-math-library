---
id: lem-parallel-awgn-cost-constrained-achievability
kind: lemma
title: Strictly feasible Gaussian inputs yield cost-feasible Gaussian codes
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [def-axiom-of-choice, def-parallel-gaussian-channel-with-power-constraint, def-parallel-awgn-feedback-code, lem-cost-pruned-random-code, lem-density-channel-threshold-random-coding-bound, lem-gaussian-noise-orthogonalization, lem-parallel-awgn-information-density-convergence, lem-standard-normal-fourth-moment, def-moments-variance-and-covariance, thm-factorization-of-expectations-for-independent-variables, thm-chebyshev-markov-inequality-for-the-integral]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: AC is inherited from the Gaussian input and noise laws; the finite-moment, concentration, and pruning arguments use no further choice.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 20 §§20.1, 20.3"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
    - title: "Yury Polyanskiy, MIT 6.441 Information Theory, Chapter 17 §§17.1–17.3"
      url: https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/24fb44b6a101e847c32ffe38bbeeea6e_MIT6_441S16_chapter_17.pdf
---

## Statement

Assume AC. For the channel in [[def-parallel-gaussian-channel-with-power-constraint]], let the noise eigenvalues be $\lambda_1,\ldots,\lambda_d>0$. Let $P>0$ and choose $p_j\ge0$ with $\sum_jp_j<P$. Then every rate
$$0\le R< I(p):=\frac12\sum_{j=1}^d\ln\left(1+\frac{p_j}{\lambda_j}\right)$$
is achievable by deterministic no-feedback codes meeting average block power $P$ and with average error tending to zero.

## Facts & Assumptions

**Given:** AC, the finite-dimensional Gaussian channel, positive noise eigenvalues, a strict power allocation, and a rate below its Gaussian mutual information.

[A1] [[def-axiom-of-choice]] and [[def-parallel-gaussian-channel-with-power-constraint]]: the Gaussian channel uses fresh independent Gaussian noise and squared Euclidean cost under AC; rates are nats per vector use.

[A2] [[def-parallel-awgn-feedback-code]]: deterministic no-feedback codes are the subcase whose encoders ignore output histories, and their average block power is measured over messages.

[F1] [[lem-gaussian-noise-orthogonalization]]: an orthogonal coordinate change diagonalizes the noise and preserves squared input norm and code/error correspondence.

[F2] [[lem-parallel-awgn-information-density-convergence]]: independent Gaussian input and noise branches have information density with mean $I(p)$ and finite variance per vector use; IID uses obey a weak law.

[F3] [[lem-density-channel-threshold-random-coding-bound]]: the IID Gaussian code ensemble's expected average error is bounded by an information-density miss probability plus $e^{-\tau}$.

[F4] [[lem-standard-normal-fourth-moment]]: $\mathbb E G^2=1$ and $\mathbb E G^4=3$ for standard normal $G$, with scaling for any branch variance.

[F5] [[thm-chebyshev-markov-inequality-for-the-integral]]: a nonnegative measurable variable $V$ satisfies $\Pr(V\ge a)\le\mathbb EV/a$ for $a>0$.

[F7] [[def-moments-variance-and-covariance]] and [[thm-factorization-of-expectations-for-independent-variables]]: variances are computed from second moments, and independence factors cross moments.

[F6] [[lem-cost-pruned-random-code]]: a random code ensemble with vanishing expected cost-violation fraction and vanishing expected error has feasible deterministic subcodes with vanishing rate loss.

## Proof

1.1 Use [F1] to work in orthogonal coordinates, and draw each vector use independently with branch inputs $X_j\sim N(0,p_j)$, independent across branches. The mean squared norm is $\mu=\sum_jp_j<P$. The information density has mean $I(p)$ by [F2]. [A1, F1, F2, given, construct]

2.1 If $R=0$, one-message codes meet the assertion. Suppose $R>0$, choose $\delta>0$ with $R+2\delta<I(p)$, and put $M_n=\lceil e^{nR}\rceil$. The threshold $\ln(M_n-1)+n\delta$ is eventually below $n(R+2\delta)$. The weak law in [F2] makes the miss probability tend to zero; [F3] then shows the ensemble expected average error $a_n$ tends to zero. [F2, F3, step 1.1, given, algebra, cases]

2.2 For one vector use put $Q=\sum_jX_j^2$. By [F4], $\mathbb E X_j^2=p_j$ and $\mathbb E X_j^4=3p_j^2$; [F7] then gives $\operatorname{Var}(X_j^2)=2p_j^2$, and independence factors the cross moments to yield $\operatorname{Var}(Q)=2\sum_jp_j^2<\infty$. Across $n$ uses the codeword average cost $\bar Q_n$ has mean $\mu$ and variance $\operatorname{Var}(Q)/n$. With $\Delta=P-\mu>0$, the event $\bar Q_n>P$ is contained in $\{|\bar Q_n-\mu|\ge\Delta\}$, whose probability is at most $\operatorname{Var}(Q)/(n\Delta^2)$ by [F5] applied to the squared deviation. This probability is the expected fraction $q_n$ of over-budget codewords, so $q_n\to0$. [F4, F5, F7, step 1.1, given, algebra]

3.1 The random code ensemble has $q_n+a_n\to0$ by steps 2.1 and 2.2. Apply [F6] to prune every over-budget word; [A2] identifies the retained deterministic codes as feasible no-feedback codes, with average power at most $P$, error tending to zero, and rate loss tending to zero. Orthogonal invariance in [F1] carries these codes back to the original channel. [A2, F1, F6, step 2.1, step 2.2, algebra] ∎