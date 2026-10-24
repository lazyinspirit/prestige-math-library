---
id: thm-cross-validation-risk-bias-at-training-size
kind: theorem
title: "Cross-validation estimates risk at its training sizes"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-cross-validation-split-and-risk-target
  - alg-holdout-loo-lpo-v-fold-and-repeated-cv
  - def-identically-distributed-and-iid-random-variables
  - thm-independent-random-elements-have-product-joint-law
proof_strategy: direct
justified_by: []
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Sylvain Arlot and Alain Celisse, A survey of cross-validation procedures for model selection, §5.1.1, author version arXiv:0907.4728"
      url: "https://arxiv.org/pdf/0907.4728"
    - title: "Gareth James, Daniela Witten, Trevor Hastie, and Robert Tibshirani, An Introduction to Statistical Learning, 7th printing, Chapter 5 §§5.1.1–5.1.3"
      url: "https://www.statlearning.com/s/ISLR-Seventh-Printing.pdf"
---

## Statement

Let $Z_1,\ldots,Z_n$ be IID with law $P$. Let $A_k$ and $L$ satisfy the measurability and integrability hypotheses of [[def-cross-validation-split-and-risk-target]] at every schedule training size and also at size $n$. For a fixed finite schedule $((T_r,V_r,w_r))_{r=1}^B$ as in [[alg-holdout-loo-lpo-v-fold-and-repeated-cv]], let $\widehat R$ be its cross-validation estimate. Then

$$\mathbb E[\widehat R]=\sum_{r=1}^B w_rR_{|T_r|}.$$

In particular, a holdout split trained on $k$ observations has expected score $R_k$. For a fixed $K$-fold partition, this gives $\mathbb E[\widehat R_{CV}]=\sum_{j=1}^K(|I_j|/n)R_{n-|I_j|}$, and for equal folds of size $m$ it gives $R_{n-m}$. For every fixed schedule, the bias for the full-sample risk $R_n$ is exactly $\sum_r w_r(R_{|T_r|}-R_n)$; it need not have a fixed sign without an additional monotonicity hypothesis on $k\mapsto R_k$.

If a schedule $S$ is randomized independently of the observations and takes values in a finite set of such schedules, then, conditional on each realized schedule, the same formula holds; the unconditional expectation is the corresponding average of these training-size risks.

## Facts & Assumptions

**Given:** The IID sample, measurable learning rules and integrable losses in the statement, and a finite split schedule. Prove the displayed expectation formula.

[F1] [[def-identically-distributed-and-iid-random-variables]]: IID means the variables have one common law and the whole family is mutually independent.

[F2] [[thm-independent-random-elements-have-product-joint-law]]: a finite independent family has joint law equal to the product of its marginal laws.

[F3] [[def-cross-validation-split-and-risk-target]]: $R_k$ is the expected loss from training on $k$ IID observations and evaluating on an independent test observation; the fixed-partition score averages held-out losses with weight $1/n$ per observation.

[F4] [[alg-holdout-loo-lpo-v-fold-and-repeated-cv]]: each finite schedule consists of nonempty disjoint training and validation sets, nonnegative weights summing to one, and the score is the weighted average of within-validation-set loss averages.

[F5] [[alg-holdout-loo-lpo-v-fold-and-repeated-cv]]: a randomized split schedule is admissible when its law is declared and independent of the observations.

[A1] [[def-cross-validation-split-and-risk-target]]: in addition to schedule training sizes, assume the full-sample loss $L(A_n(Z_1,\ldots,Z_n),Z_{n+1})$ is integrable, so $R_n$ is finite.

[F6] [[alg-holdout-loo-lpo-v-fold-and-repeated-cv]]: in $K$-fold validation, $T_j=I_j^c$, $V_j=I_j$, and $w_j=|I_j|/n$.

## Proof

1.1 Fix a split $r$ and an index $i\in V_r$. Since $T_r$ and $V_r$ are disjoint by [F4], $i\notin T_r$. By [F1], the $|T_r|$ training observations $(Z_\ell)_{\ell\in T_r}$ and the test observation $Z_i$ are independent, each with law $P$. By [F2], their joint law is $P^{\otimes(|T_r|+1)}$. Hence [F3] gives $\mathbb E[L(A_{|T_r|}(Z_{T_r}),Z_i)]=R_{|T_r|}$. [F1, F2, F3, F4]

2.1 For a fixed schedule, its score is a finite sum of the integrable terms from step 1.1, so linearity of expectation and [F4] give $\mathbb E[\widehat R]=\sum_{r=1}^B(w_r/|V_r|)\sum_{i\in V_r}R_{|T_r|}=\sum_{r=1}^B w_rR_{|T_r|}$. [F4, step 1.1, algebra]

3.1 By [A1], the full-sample target $R_n$ is finite. Subtracting it from step 2.1 yields $\mathbb E[\widehat R]-R_n=\sum_r w_r(R_{|T_r|}-R_n)$. This expression has no fixed sign in general; if $k\mapsto R_k$ is nonincreasing, then each difference is nonnegative because $|T_r|<n$. [A1, step 2.1, algebra]

3.2 Let the schedule be independently randomized with finite range. Conditional on any realized schedule $s$, the sample remains IID with law $P$ by [F5], so step 2.1 applies and gives $\mathbb E[\widehat R\mid S=s]=\sum_r w_r(s)R_{|T_r(s)|}$. Averaging this identity over the finite schedule law gives the stated unconditional expectation. [F5, given, step 2.1, algebra]

4.1 In a fixed $K$-fold partition, [F6] gives $T_j=I_j^c$, $V_j=I_j$, and $w_j=|I_j|/n$. Substituting these values in step 2.1 gives the displayed fold-size formula; equal folds of size $m$ give $R_{n-m}$. The holdout claim is the one-split case $B=1$, $w_1=1$. [F6, step 2.1, algebra] ∎

## Remarks

The calculation uses linearity of expectation only; the fold losses may be dependent because their training sets overlap. It does not assert that a smaller training sample always has higher risk.
