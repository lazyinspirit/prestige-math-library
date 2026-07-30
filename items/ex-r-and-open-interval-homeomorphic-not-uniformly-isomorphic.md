---
id: ex-r-and-open-interval-homeomorphic-not-uniformly-isomorphic
kind: example
title: "The map $x\\mapsto x/(1+|x|)$ is a uniformly continuous homeomorphism from $\\mathbb{R}$ to $(-1,1)$ whose inverse is not uniformly continuous"
status: published
origin: session
deps: [lem-metric-uniformity-dictionary, def-uniform-embedding-and-uniform-isomorphism, def-homeomorphism-and-open-maps, lem-of-abs-value, cor-archimedean-reciprocal]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}]
pipeline_run: null
---

## Example

The function $h(x)=x/(1+|x|)$ maps $\mathbb R$ onto $(-1,1)$ with inverse $h^{-1}(t)=t/(1-|t|)$. It is uniformly continuous, but its inverse is not.

## Facts & Assumptions

**Given:** The usual metric uniformities on $\mathbb R$ and $(-1,1)$.

[L1] The metric dictionary translates metric uniform continuity into uniform continuity ([[lem-metric-uniformity-dictionary]]).

[L2] Absolute value is nonnegative and satisfies the triangle inequality consequences used in the estimates ([[lem-of-abs-value]]).

[L3] The reciprocal form of the Archimedean property says that $1/n\to0$ ([[cor-archimedean-reciprocal]]).

## Verification

**Proof technique:** direct.

1.1 Direct algebra gives $|h(x)-h(y)|\le2|x-y|$, so $h$ is uniformly continuous; its displayed inverse and the usual open-interval formulas make it a homeomorphism. [L1, L2]

1.2 Put $a_n=n/(n+1)$ and $b_n=(n+1)/(n+2)$. Then $|a_n-b_n|\to0$, while $|h^{-1}(a_n)-h^{-1}(b_n)|=1$. [L2, L3]

2.1 Thus $h^{-1}$ is not uniformly continuous, so this homeomorphism is not a uniform isomorphism ([[def-uniform-embedding-and-uniform-isomorphism]], [[def-homeomorphism-and-open-maps]]). [step 1.1, step 1.2] ∎
