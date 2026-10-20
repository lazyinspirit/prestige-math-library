---
id: cor-negative-axis-directional-resolvent-integrals
kind: corollary
title: "Fixed negative-axis directional resolvent integrals converge"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 7
deps:
  - def-sample-covariance-directional-spectral-measure
  - def-weak-convergence-of-borel-probability-measures
  - thm-directional-sample-covariance-resolvent-limit
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Z. D. Bai, B. Q. Miao, and G. M. Pan, On Asymptotics of Eigenvectors of Large Sample Covariance Matrix"
      url: "https://arxiv.org/pdf/0708.1720"
---
## Statement

Under the hypotheses of the sample-covariance resolvent deterministic-equivalent theorem, for each fixed $s>0$ the directional measures satisfy
$$\int_{[0,\infty)}\frac{1}{t+s}\,d\mu_n^{x_n}(t)\longrightarrow\int_{[0,\infty)}\frac{1}{t+s}\,dF_{c,H}(t)\quad\text{almost surely}.$$

## Statement references

Bai, Miao, and Pan, Theorem 1, printed pp. 8–9 ([full paper PDF](https://arxiv.org/pdf/0708.1720)).

## Facts & Assumptions

**Given:** The hypotheses and directional measures in the Statement.

[F1] The directional measures converge almost surely weakly to $F_{c,H}$ ([[thm-directional-sample-covariance-resolvent-limit]]).

[F2] Weak convergence means convergence of integrals against every bounded continuous real-valued function ([[def-weak-convergence-of-borel-probability-measures]]).

[F3] The directional spectral measure is $\sum_\lambda\|P_\lambda x_n\|_2^2\delta_\lambda$ for a deterministic unit vector ([[def-sample-covariance-directional-spectral-measure]]).

## Proof

1.1 Fix $s>0$. The function $f_s(t)=(t+s)^{-1}$ is continuous on $[0,\infty)$ and satisfies $0<f_s(t)\le1/s$, so it is bounded. The measure is the directional spectral law in [F3]. [given, F3, algebra]

2.1 On the probability-one event in [F1], apply the defining bounded-continuous-test property [F2] to $f_s$ to obtain the asserted integral convergence. [given, F1, F2, step 1.1] ∎

## Source notes

The proof is the direct bounded-continuous-test consequence of the preceding directional weak-convergence theorem.
