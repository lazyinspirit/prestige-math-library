---
id: cex-the-samuel-map-need-not-preserve-the-original-uniformity
kind: counterexample
title: "The Samuel compactification map need not be a uniform embedding for the original uniformity"
status: published
origin: session
authorship: ai-generated
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [lem-samuel-uniformity-is-totally-bounded, thm-samuel-completion-is-a-compactification, def-completion-of-a-uniform-space, def-uniform-embedding-and-uniform-isomorphism, lem-metric-uniformity-dictionary, def-metric-space, def-natural-numbers, def-countable, lem-pigeonhole, def-totally-bounded-uniform-space]
justified_by: []
aliases: []
landmark: false
cx_machine_verified: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "M. Megrelishvili, Samuel and Smirnov compactifications"
      url: "https://u.cs.biu.ac.il/~megereli/SMIRNOV.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** for every separated uniform space, the Samuel compactification map is a uniform embedding for the original uniformity.

Let $\mathbb N$ carry the zero-one discrete metric. Its Samuel compactification map is not a uniform embedding when its domain is read with that original discrete uniformity. Under dependent choice and the ultrafilter lemma it is nevertheless a topological embedding.

## Facts & Assumptions

**Given:** The zero-one metric $d$ on $\mathbb N$, its original metric uniformity, and its Samuel uniformity.

[L1] A metric must satisfy separation, symmetry, and the triangle inequality; its radius-$1/2$ entourage is the diagonal for the zero-one metric, and every metric uniformity is separated ([[def-metric-space]], [[lem-metric-uniformity-dictionary]]).

[L2] A totally bounded uniform space has a finite centre set for every entourage, while $\mathbb N$ is not finite ([[def-totally-bounded-uniform-space]], [[def-countable]], [[lem-pigeonhole]]).

[L3] The Samuel uniformity is totally bounded, and a Hausdorff completion pulls its target uniformity back exactly to its source uniformity ([[lem-samuel-uniformity-is-totally-bounded]], [[def-completion-of-a-uniform-space]]).

[L4] A uniform embedding identifies its source uniformity with the subspace uniformity on its image ([[def-uniform-embedding-and-uniform-isomorphism]]).

[L5] Under dependent choice and the ultrafilter lemma, the Samuel completion map is a topological embedding for a separated original uniform space ([[thm-samuel-completion-is-a-compactification]]).

## Counterexample

**Proof technique:** direct.

1.1 The zero-one function is a metric: if $x\ne z$, at least one of $x\ne y$ or $y\ne z$ holds, so $d(x,z)=1\le d(x,y)+d(y,z)$; its radius-$1/2$ balls are singletons. [L1]

1.2 If the original discrete uniformity were totally bounded, finitely many radius-$1/2$ singleton balls would cover $\mathbb N$, making $\mathbb N$ finite, contrary to [L2]. [L1, L2]

1.3 By [L3], the Samuel uniformity on $\mathbb N$ is totally bounded and the Samuel completion map pulls back exactly that uniformity. [L3]

2.1 If that map were a uniform embedding for the original discrete uniformity, [L4] would identify that uniformity with its pullback uniformity; steps 1.2 and 1.3 would then give the contradiction that the original uniformity is totally bounded. [L4, step 1.2, step 1.3]

3.1 Under the choice hypotheses of [L5], the map is still a topological embedding, which isolates the failure as uniform rather than topological. [L1, L5, step 2.1] ∎
