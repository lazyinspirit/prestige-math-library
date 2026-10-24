---
id: cor-ramsey-recursion-and-diagonal-upper-bound
kind: corollary
title: "$R(s,t)\\le R(s-1,t)+R(s,t-1)$ for $s,t\\ge2$, and $R(k,k)\\le\\binom{2k-2}{k-1}\\le2^{2k-2}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-off-diagonal-ramsey-number, lem-two-colour-ramsey-arrow-recursion, thm-finite-graph-ramsey-binomial-bound, thm-binomial-theorem, def-binomial-coefficient]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "J. Fox et al., Graph Ramsey Theory, Section 2.1"
      url: "https://math.mit.edu/~fox/paper-graphramsey.pdf"
pipeline_run: null
---

## Statement

For $s,t\ge2$,

$$R(s,t)\le R(s-1,t)+R(s,t-1).$$

For every positive $k$,

$$R(k,k)\le\binom{2k-2}{k-1}\le2^{2k-2}.$$

Here $R$ is [[def-off-diagonal-ramsey-number]] and the binomial coefficient is [[def-binomial-coefficient]]; the first diagonal inequality is the specialization of [[thm-finite-graph-ramsey-binomial-bound]].

## Facts & Assumptions

**Given:** Positive naturals $s,t,k$, with $s,t\ge2$ for the recursion.

[L1] If $m\to(s-1,t)^2$ and $n\to(s,t-1)^2$, then $m+n\to(s,t)^2$ for $s,t\ge2$ ([[lem-two-colour-ramsey-arrow-recursion]]).

[L2] For all $x, y \in \mathbb{R}$ and every $n \in \mathbb{N}$, the binomial theorem expands $(x+y)^n$ as the sum of its binomial terms ([[thm-binomial-theorem]]).

## Proof

**Proof technique:** direct.

1.1 The numbers $R(s-1,t)$ and $R(s,t-1)$ satisfy the two hypotheses of [L1]. Hence their sum arrows to $(s,t)$, and leastness in the definition of $R(s,t)$ gives the recursion inequality. [L1]

2.1 The finite binomial theorem gives $R(k,k)\le\binom{2k-2}{k-1}$. In [L2] put $x=y=1$ and $n=2k-2$; every summand is nonnegative, so the single central coefficient is at most their sum $2^{2k-2}$. [L2, algebra] ∎

