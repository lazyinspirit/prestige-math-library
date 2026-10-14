---
id: thm-multivariate-trimmed-mean-under-replacement
kind: theorem
title: "Multivariate trimmed-mean bound under sample replacement"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps: [alg-multivariate-trimmed-mean, lem-multivariate-trimmed-mean-selector-total-and-measurable, lem-finite-covariance-matrix-basic-properties, lem-zero-covariance-multivariate-trimmed-mean-exact, lem-multivariate-mean-rate-given-correct-scale-event, prop-correct-scale-multivariate-trimming-slab-bound, def-adversarial-sample-replacement, def-random-element-and-real-random-variable, def-moments-variance-and-covariance]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Gábor Lugosi and Shahar Mendelson, Robust Multivariate Mean Estimation: The Optimality of Trimmed Mean, Theorem 2 and proof"
      url: "https://arxiv.org/pdf/1907.11391"
      locator: "PDF pp. 14–23; full estimator, theorem, and proof."
    - title: "Gábor Lugosi, Mean Estimation in High Dimension, §3.2"
      url: "https://ems.press/content/book-chapter-files/33347?nt=1"
      locator: "PDF pp. 6–7; independent overview of multivariate directional trimming and dyadic selection."
---

## Statement

Let $X$ be an absolutely continuous random vector in $\mathbb R^d$ with mean $\mu$ and finite covariance matrix $\Sigma$ as defined in [[lem-finite-covariance-matrix-basic-properties]]. Let $X_1,\ldots,X_N,Y_1,\ldots,Y_N$ be $2N$ iid clean copies and let their observed replacement sample have at most $\lfloor2\eta N\rfloor$ changed coordinates in total. Assume $0\le\eta\le1/10$, $0<\delta<1$, and $N\ge2560\log(2/\delta)$. Set $\varepsilon=\max\{10\eta,2560\log(2/\delta)/N\}$ and let $\widehat\mu$ be the repaired, total selector in [[alg-multivariate-trimmed-mean]]. Then there is a universal constant $c>0$ such that
$$
P\!\left(\|\widehat\mu-\mu\|\le c\left[\sqrt{\frac{\operatorname{tr}\Sigma}{N}}+\sqrt{\frac{\lambda_{\max}(\Sigma)\log(1/\delta)}{N}}+\sqrt{\lambda_{\max}(\Sigma)\eta}\right]\right)\ge1-\delta.
$$
The claim is restricted to the displayed domain, which ensures $\varepsilon\le1$. No guarantee is asserted for $1/10<\eta<1/2$, for $\eta\ge1/2$, or for atomic laws.


## Facts & Assumptions

**Given:** The iid clean law, replacement coupling and parameters in the Statement.

[F1] [[prop-correct-scale-multivariate-trimming-slab-bound]] gives a nonempty dyadic tail intersection with radius $16\varepsilon Q_0$ outside probability $\delta$ when the covariance trace is positive.

[F2] [[lem-multivariate-mean-rate-given-correct-scale-event]] turns a radius $b\varepsilon Q_0$ into the displayed rate with an explicit universal constant $c_b$; it applies at $b=16$.

[F3] [[lem-zero-covariance-multivariate-trimmed-mean-exact]] gives exact recovery when the covariance trace is zero. [[lem-finite-covariance-matrix-basic-properties]] gives nonnegative covariance trace.

[F4] [[alg-multivariate-trimmed-mean]] and [[lem-multivariate-trimmed-mean-selector-total-and-measurable]] supply the total Borel selector on every admissible observed input.

## Proof

**Given:** The objects and hypotheses in the Statement.

1.1 If $\operatorname{tr}\Sigma>0$, [F1] supplies, with probability at least $1-\delta$, the nonempty correct-scale tail intersection of radius $16\varepsilon Q_0$. On that event [F2] at $b=16$ bounds the output of [F4] by exactly the displayed three-term rate, with universal constant $c_{16}$. The selector's measurability in [F4] makes the error event measurable. [F1, F2, F4, given]

2.1 If $\operatorname{tr}\Sigma=0$, [F3] gives exact recovery almost surely, so the error bound holds with probability one. These are the only cases by [F3], and the same positive constant $c_{16}$ works in both. Thus the claimed probability is at least $1-\delta$ throughout the stated domain. [F3, step 1.1, algebra] ∎

