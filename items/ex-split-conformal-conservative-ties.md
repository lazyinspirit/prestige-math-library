---
id: ex-split-conformal-conservative-ties
kind: example
title: "Split conformal coverage can be conservative when scores tie"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 8
deps:
  - alg-split-conformal-prediction-set
  - def-conformal-nonconformity-score-and-rank-pvalue
  - thm-conformal-rank-superuniformity-under-exchangeability
  - thm-split-conformal-marginal-coverage
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
---

## Example

Take a constant score rule $s(z)=0$, two calibration examples, one exchangeable
test example, and $\alpha=1/2$. All three scores are tied. The ordinary split
quantile set covers with probability $1$, while the specified independent
uniform tie-randomized rank set covers with probability exactly $1/2$.

## Facts & Assumptions

**Given:** $m=2$, $\alpha=1/2$, all calibration and test scores equal $0$, and an independent $U$ with Lebesgue probability law on $[0,1]$.

[F1] The split algorithm sets $k=\lceil(m+1)(1-\alpha)\rceil$, uses the $k$th calibration score when $k\le m$, and otherwise uses $+\infty$. [[alg-split-conformal-prediction-set]]

[F2] The tie-randomized p-value counts strictly larger calibration scores and multiplies the full tie-group size, including the candidate, by $U$. [[def-conformal-nonconformity-score-and-rank-pvalue]]

[F3] Under exchangeability, the randomized rank p-value is uniform. [[thm-conformal-rank-superuniformity-under-exchangeability]]

## Verification

1.1 Here $k=\lceil3/2\rceil=2\le m$ and the second calibration order statistic is $q=0$. The test score is also $0$, so $0\le q$ and the nonrandomized prediction set always includes the true response. [given, F1]

1.2 There are no calibration scores strictly greater than the test score and there are two calibration ties; including the candidate gives tie count three. Thus $p_U=3U/3=U$, and the tie-randomized set covers exactly when $U>1/2$, an event of probability $1/2$. [given, F2]

2.1 The ordinary coverage $1$ is conservative relative to the nominal $1-\alpha=1/2$, whereas the randomized coverage is exact and agrees with [F3]. [F3, step 1.1, step 1.2] ∎
