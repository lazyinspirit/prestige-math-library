---
id: cex-half-replacement-prevents-covariance-only-mean-recovery
kind: counterexample
title: "Half-sample replacement prevents covariance-only mean recovery"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps: [def-adversarial-sample-replacement, def-huber-contamination-model]
proof_strategy: direct
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Gábor Lugosi and Shahar Mendelson, Robust Multivariate Mean Estimation: The Optimality of Trimmed Mean, lower-bound discussion before Theorem 2"
      url: "https://arxiv.org/pdf/1907.11391"
      locator: "PDF pp. 2, 14–15; adversarial replacement and the covariance-only obstruction at replacement fraction at least one half."
---

## Statement refuted

For sample-replacement fractions $1/2\le\eta\le1$, no deterministic Borel estimator $T:\mathbb R^{2N}\to\mathbb R$ can satisfy $T=\mu$ almost surely for every clean law and every admissible replacement coupling: two different zero-covariance means can generate the same observed sample within the replacement budget. In particular, no covariance-only error bound that forces zero error whenever the clean covariance is zero can hold uniformly.

## Facts & Assumptions

**Given:** A sample size $2N$ and a replacement fraction $1/2\le\eta\le1$.

[F1] Under sample replacement, an adversary may change at most $\lfloor2\eta N\rfloor$ coordinates of a clean iid sample; the observed vector need not be iid ([[def-adversarial-sample-replacement]]).

[F2] Huber contamination instead makes each observed coordinate iid from $(1-\eta)P+\eta Q$, which is a different model from a data-dependent joint replacement coupling ([[def-huber-contamination-model]]).

## Counterexample

**Proof technique:** direct.

**Given:** Fix any $M>0$. Consider the two clean laws $P_0=\delta_0$ and $P_M=\delta_M$ on $\mathbb R$.

1.1 Under $P_0$, the clean sample of size $2N$ is all zero. Replace $N$ coordinates by $M$ to obtain the observed vector $(0,\ldots,0,M,\ldots,M)$ with $N$ entries of each value. This uses at most $\lfloor2\eta N\rfloor$ replacements by [F1]. [F1, given, construct]

2.1 Under $P_M$, the clean sample is all $M$. Replacing $N$ coordinates by $0$ produces exactly the same observed vector and also uses at most $\lfloor2\eta N\rfloor$ replacements. Both clean laws have variance zero, while their means are $0$ and $M$. [F1, given, step 1.1]

3.1 The two deterministic replacement couplings put probability one on the same observed vector. Hence the same Borel map $T$ has the same output value in both experiments. Exact recovery would require that value to equal $0$ under the first coupling and $M$ under the second, which is impossible because $M>0$. Both clean variances are zero, so any bound depending only on covariance and forcing zero error there would fail uniformly at $\eta\ge1/2$. The Huber mixture model in [F2] is not being used in this construction. [F2, step 1.1, step 2.1, algebra] ∎

