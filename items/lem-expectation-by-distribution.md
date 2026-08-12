---
id: lem-expectation-by-distribution
kind: lemma
title: "Expectation is the sum of each attained value times its probability"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-expectation-on-a-finite-probability-space, lem-finite-sum-reindexing-and-fubini]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "C. M. Grinstead and J. L. Snell, Introduction to Probability, 2nd ed., Section 6.1"
      url: "https://math.dartmouth.edu/~prob/prob/prob.pdf"
    - title: "M. Bucic, Probabilistic Method, Appendix A"
      url: "https://homepage.univie.ac.at/matija.bucic/wp-content/uploads/2026/01/Probabilistic_Method.pdf"
pipeline_run: null
---

## Statement

If $X$ is a real random variable on a finite probability space, then
$$\mathbb E[X]=\sum_{x\in X(\Omega)}x\,\mathbb P(X=x).$$

## Facts & Assumptions

**Given:** A real random variable $X$ on $(\Omega,w)$.

[L1] Expectation is $\sum_{\omega\in\Omega}X(\omega)w(\omega)$ ([[def-expectation-on-a-finite-probability-space]]).

[L2] A finite sum may be split over disjoint fibres and reindexed ([[lem-finite-sum-reindexing-and-fubini]]).

## Proof

**Proof technique:** direct.

1.1 The nonempty fibres $X^{-1}(\{x\})$, for $x\in X(\Omega)$, form a finite partition of $\Omega$. [given]

2.1 Splitting the expectation over these fibres gives $\mathbb E[X]=\sum_{x\in X(\Omega)}\sum_{\omega:X(\omega)=x}xw(\omega)$. [step 1.1, L1, L2]

3.1 The inner sum is $x\mathbb P(X=x)$, which proves the formula. The range cannot be empty because total probability is $1$. [step 2.1, algebra] ∎
