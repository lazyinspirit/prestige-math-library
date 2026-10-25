---
id: fs-a-compatible-uniformity-is-unique
kind: false-statement
title: "FALSE: every uniformizable topology has a unique compatible uniformity"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [ex-r-and-open-interval-homeomorphic-not-uniformly-isomorphic, def-uniformizable-space, def-uniform-embedding-and-uniform-isomorphism]
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

## Statement

**FALSE.** Every uniformizable topology has a unique compatible uniformity.

## Facts & Assumptions

**Given:** The usual topology and usual metric uniformity $\mathcal U$ on $\mathbb R$.

[L1] The map $h(x)=x/(1+|x|)$ is a homeomorphism $\mathbb R\to(-1,1)$ but not a uniform isomorphism for the usual metric uniformities ([[ex-r-and-open-interval-homeomorphic-not-uniformly-isomorphic]]).

[L2] Uniformizable means induced by a uniformity, and a uniform isomorphism has uniformly continuous inverse ([[def-uniformizable-space]], [[def-uniform-embedding-and-uniform-isomorphism]]).

## Refutation

**Proof technique:** direct.

1.1 Pull the usual uniformity of $(-1,1)$ back along the homeomorphism $h$, obtaining a uniformity $\mathcal V$ on the underlying set $\mathbb R$. [L1]

2.1 Since $h$ is a homeomorphism, $\mathcal V$ induces the usual topology of $\mathbb R$, so that topology is uniformizable. [step 1.1, L2]

2.2 If $\mathcal V=\mathcal U$, then $h$ would be a uniform isomorphism from $\mathcal U$ onto the usual uniformity of $(-1,1)$, contrary to [L1]. [step 1.1, L1, L2]

3.1 Thus one topology has distinct compatible uniformities, refuting the statement. [step 2.1, step 2.2] ∎
