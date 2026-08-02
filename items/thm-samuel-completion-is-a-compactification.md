---
id: thm-samuel-completion-is-a-compactification
kind: theorem
title: "Under the ultrafilter lemma the Samuel completion is compact, and under dependent choice plus the ultrafilter lemma it compactifies every separated uniform space"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-samuel-uniformity-is-totally-bounded, lem-samuel-uniformity-preserves-the-induced-topology-under-dependent-choice, def-samuel-compactification, def-completion-of-a-uniform-space, lem-total-boundedness-passes-to-dense-uniform-extensions, thm-complete-and-totally-bounded-uniform-spaces-are-compact, thm-hausdorff-completion-of-a-uniform-space, thm-separated-uniformity-iff-induced-topology-is-hausdorff, cor-separated-uniformizable-iff-tychonoff]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Encyclopedia of Mathematics, Uniform space"
      url: "https://encyclopediaofmath.org/wiki/Uniform_space"
    - title: "M. Megrelishvili, Samuel and Smirnov compactifications"
      url: "https://u.cs.biu.ac.il/~megereli/SMIRNOV.pdf"
pipeline_run: null
---

## Statement

**Assume the ultrafilter lemma.** Every Samuel completion $\eta:(X,\mathcal U_S)\to S(X)$ is compact. If dependent choice is also assumed and $(X,\mathcal U)$ is separated, then the same map, read from $X$ with its original induced topology, makes $S(X)$ a Samuel compactification.

## Facts & Assumptions

**Given:** A uniform space $(X,\mathcal U)$, a Samuel completion $\eta:(X,\mathcal U_S)\to S(X)$, the ultrafilter lemma, and, for the final assertion, dependent choice and separatedness of $\mathcal U$.

[L1] The Samuel uniformity is totally bounded ([[lem-samuel-uniformity-is-totally-bounded]]).

[L2] A Hausdorff completion has complete separated target, dense image, and uniformly continuous canonical map; its canonical map is a uniform embedding exactly for separated source uniformity ([[def-completion-of-a-uniform-space]], [[thm-hausdorff-completion-of-a-uniform-space]], [[def-samuel-compactification]]).

[L3] A dense uniformly continuous image of a totally bounded uniform space is totally bounded ([[lem-total-boundedness-passes-to-dense-uniform-extensions]]).

[L4] Under the ultrafilter lemma, every complete totally bounded uniform space is compact ([[thm-complete-and-totally-bounded-uniform-spaces-are-compact]]).

[L5] Under dependent choice the Samuel and original induced topologies agree; separatedness is equivalent to Hausdorffness of the induced topology, and a separated uniformizable topology is Tychonoff ([[lem-samuel-uniformity-preserves-the-induced-topology-under-dependent-choice]], [[thm-separated-uniformity-iff-induced-topology-is-hausdorff]], [[cor-separated-uniformizable-iff-tychonoff]]).

## Proof

**Proof technique:** direct.

1.1 The completion map has dense image and is uniformly continuous, so [L1] and [L3] make $S(X)$ totally bounded. [L1, L2, L3]

1.2 The space $S(X)$ is complete by [L2], so [L4] makes it compact under the ultrafilter lemma. [L2, L4]

1.3 Under dependent choice, [L5] identifies the original and Samuel topologies; if $\mathcal U$ is separated, the Samuel uniformity is separated as well, so $\eta$ is a uniform embedding for $\mathcal U_S$ and a topological embedding for the original topology. [L2, L5]

2.1 The image is dense by [L2], the source topology is Tychonoff by [L5], and step 1.2 gives compact Hausdorff target; hence the pair is a compactification and therefore a Samuel compactification. [step 1.2, step 1.3, L2, L5] ∎
