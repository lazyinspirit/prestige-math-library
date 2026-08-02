---
id: ex-samuel-reflection-of-a-nonempty-indiscrete-uniform-space
kind: example
title: "The Samuel reflection of a nonempty indiscrete uniform space is a singleton"
status: published
origin: session
authorship: ai-generated
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-samuel-uniformity, def-samuel-compactification, def-completion-of-a-uniform-space, def-separated-uniform-space, thm-separated-uniformity-iff-induced-topology-is-hausdorff, thm-the-separation-implication-chain, thm-t1-iff-singletons-are-closed]
justified_by: []
aliases: []
landmark: false
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

## Example

Let $X\ne\varnothing$ carry the indiscrete uniformity $\{X\times X\}$. Its Samuel completion, equivalently its Hausdorff Samuel reflection, is a singleton. This is not called a compactification unless $X$ itself is a singleton.

## Facts & Assumptions

**Given:** A nonempty set $X$ with only $X\times X$ as an entourage.

[L1] A Samuel coordinate is a uniformly continuous function $f:X\to[0,1]$ ([[def-samuel-uniformity]]).

[L2] A Hausdorff completion has separated target and dense uniformly continuous canonical map. Its induced topology is Hausdorff, hence $T_1$, so its singletons are closed ([[def-completion-of-a-uniform-space]], [[def-separated-uniform-space]], [[thm-separated-uniformity-iff-induced-topology-is-hausdorff]], [[thm-the-separation-implication-chain]], [[thm-t1-iff-singletons-are-closed]], [[def-samuel-compactification]]).

## Verification

**Proof technique:** direct.

1.1 If $f:X\to[0,1]$ is uniformly continuous and $x,y\in X$, then for every $\varepsilon>0$ the sole source entourage forces $|f(x)-f(y)|<\varepsilon$; hence $f(x)=f(y)$. [L1]

2.1 Every Samuel coordinate is constant by step 1.1, so every Samuel pseudometric vanishes and the Samuel uniformity is again indiscrete. [L1, step 1.1]

3.1 Let $\eta:X\to S(X)$ be a Hausdorff completion of the Samuel uniformity. If $\eta(x)\ne\eta(y)$, separatedness in [L2] gives a target entourage excluding that pair, while uniform continuity pulls it back to the sole source entourage $X\times X$, a contradiction. Thus $\eta[X]$ is a singleton. [L2, step 2.1]

4.1 The nonempty singleton $\eta[X]$ is dense by [L2] and closed by [L2], so it is all of $S(X)$. Thus the Samuel reflection is a singleton; if $X$ has at least two points its canonical map is not injective. [L2, step 3.1] ∎
