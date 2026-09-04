---
id: thm-landau-dirichlet-series
kind: theorem
title: "Landau's theorem for Dirichlet series with nonnegative coefficients"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-abscissae-dirichlet-series, thm-dirichlet-series-half-plane-convergence, thm-dirichlet-series-absolute-half-plane-holomorphy]
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Theorem 2.4"
      url: "https://kskedlaya.org/ant/part-1-3.html"
    - title: "Leonard Tomczak, Analytic Number Theory, Theorem 3.6"
      url: "https://math.berkeley.edu/~ltomczak/notes/Mich2022/AnaNT_Notes.pdf"
pipeline_run: null
---

## Statement

Let $D(s)=\sum_{n \ge 1} a_n n^{-s}$ with $a_n \ge 0$ for every $n$, and assume
its abscissa of convergence $\sigma_c$ is finite. Then $s=\sigma_c$ is a
singular point of the holomorphic function defined by $D$ on $\Re s>\sigma_c$.

## Facts & Assumptions

**Given:** A Dirichlet series $D(s)=\sum a_n n^{-s}$ with $a_n \ge 0$ and finite
abscissa $\sigma_c$.

[L1] The abscissa is defined through right-half-plane convergence
([[def-abscissae-dirichlet-series]]).

[L2] On every half-plane of absolute convergence, the series and all its
derivatives converge locally uniformly
([[thm-dirichlet-series-half-plane-convergence]],
[[thm-dirichlet-series-absolute-half-plane-holomorphy]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $D$ were holomorphic on a disc centered at $\sigma_c$. Choose a real point $\sigma_1>\sigma_c$ inside that disc and a radius $r>\sigma_1-\sigma_c$ still contained in the disc. By [L2], for every $m\ge0$, $$\frac{(-1)^m}{m!}D^{(m)}(\sigma_1) = \sum_{n \ge 1} a_n \frac{(\log n)^m}{m!} n^{-\sigma_1},$$ and every coefficient on the right is nonnegative. [L2, assume-contra]

2.1 The Taylor series of $D$ at $\sigma_1$ therefore has nonnegative coefficients: $$D(s) = \sum_{m \ge 0} c_m(\sigma_1-s)^m,\qquad c_m \ge 0.$$ Because the disc radius exceeds $\sigma_1-\sigma_c$, this series converges at some real point $\sigma_*<\sigma_c$. Evaluating there and using the displayed formula for $c_m$ gives $$\sum_{n \ge 1} a_n n^{-\sigma_*} < \infty.$$ So the Dirichlet series converges at $\sigma_*$, contradicting the definition of $\sigma_c$ in [L1]. [L1, step 1.1]

3.1 Hence $\sigma_c$ cannot be a regular point of the holomorphic continuation: it is a singular point. [step 2.1, discharge-contradiction] ∎
