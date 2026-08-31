---
id: fs-l-p-of-every-measure-space-is-separable-for-finite-p
kind: false-statement
title: "FALSE: $L^p(\\mu)$ is separable for every measure $\\mu$ and every $1 \\le p < \\infty$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-l-p-of-a-sigma-finite-countably-generated-measure-space-is-separable, def-counting-measure, prop-counting-measure-is-a-measure, def-separable-space]
landmark: false
proof_strategy: "Use counting measure on an uncountable set. The singleton indicators are pairwise separated by a fixed positive $L^p$ distance, so no countable set can be dense."
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral: An Introduction to Real Analysis"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
---
## Statement

**False claim.** For every measure space $(X,\mathcal A,\mu)$ and every
$1 \le p < \infty$, the space $L^p(\mu)$ is separable.

## Facts & Assumptions

**Given:** An uncountable set $X$ with counting measure.

[L1] The general separability theorem requires the Axiom of Countable Choice, sigma-finiteness, and a countably generated sigma-algebra ([[thm-l-p-of-a-sigma-finite-countably-generated-measure-space-is-separable]]).

[L2] Counting measure is a measure, and separability means having a countable dense subset ([[def-counting-measure]], [[prop-counting-measure-is-a-measure]], [[def-separable-space]]).

## Refutation

**Proof technique:** direct.

1.1 For each $x \in X$, let $e_x := \mathbf{1}_{\{x\}}$. Since [L2, given, algebra] $\mu(\{x\})=1$, each $e_x$ lies in $L^p(\mu)$. If $x \neq y$, then $$ \|e_x-e_y\|_p^p = |1|^p + |{-1}|^p = 2, $$ so $\|e_x-e_y\|_p = 2^{1/p}$. [L2, given, algebra]

2.1 Thus the uncountable family $\{e_x : x \in X\}$ is pairwise [L1, L2, step 1.1, algebra] $2^{1/p}$-separated. No countable set can be dense in a metric space containing uncountably many disjoint balls of radius $2^{1/p}/3$. So this $L^p(\mu)$ is not separable, contradicting the claim. [L1, L2, step 1.1, algebra]

3.1 Therefore the unrestricted statement is false; [L1] records the correct [L1, step 2.1] hypothesis ledger. [L1, step 2.1] ∎
