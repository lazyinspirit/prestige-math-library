---
id: cex-complex-power-series-not-uniform-on-its-open-disc
kind: counterexample
title: "The complex geometric series is not uniformly convergent on its open unit disc"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-uniform-convergence-of-complex-valued-functions, thm-cauchy-hadamard-for-complex-power-series]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. Ahlfors, Complex Analysis, 3rd ed., Ch. 2"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Statement refuted

Every complex power series converges uniformly on its entire open disc of convergence.

## Facts & Assumptions

**Given:** The geometric power series $\sum_{n\ge0}z^n$ on $D=\{|z|<1\}$.

[L1] Uniform convergence requires one index to work for every point of the domain ([[def-uniform-convergence-of-complex-valued-functions]]).

[L2] Cauchy–Hadamard gives the geometric series radius $1$ and pointwise convergence for $|z|<1$ ([[thm-cauchy-hadamard-for-complex-power-series]]).

## Counterexample

**Proof technique:** direct.

1.1 For each $n\ge1$, $\sup_{z\in D}|z^n|=1$, although the supremum is not attained: real $z\uparrow1$ makes $z^n\uparrow1$. [algebra]

2.1 If the series converged uniformly, its terms would tend uniformly to $0$, contradicting step 1.1 and the quantifiers in [L1]. [step 1.1, L1]

3.1 Nevertheless [L2] gives pointwise convergence throughout $D$, so this is a counterexample to uniform convergence on the whole open disc. [step 2.1, L2] ∎
