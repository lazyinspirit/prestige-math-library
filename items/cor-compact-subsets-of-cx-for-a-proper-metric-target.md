---
id: cor-compact-subsets-of-cx-for-a-proper-metric-target
kind: corollary
title: "Under the Axiom of Choice, for a nonempty compact metric domain $X$ and a proper metric target $Y$, the subsets of $C(X,Y)$ compact in the uniform topology are exactly the families closed in that topology that are pointwise bounded and equicontinuous"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-ascoli-arzela-for-compact-metric-domains, thm-compact-subset-is-closed-and-bounded]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Ascoli–Arzelà Theorem, BBT"
      url: "https://assets.pubpub.org/6d1dqgg9/51597355090422.pdf"
    - title: "Topology, second edition, Corollary 45.5"
      url: "https://djvu.online/file/7PTGeGhMkCAAK"
pipeline_run: null
---

## Statement

**Assume the Axiom of Choice.** Let $X$ be a nonempty compact metric space and let $Y$ be a proper metric space, meaning that every closed bounded subset of $Y$ is compact. A family $\mathcal F\subseteq C(X,Y)$ is compact in the uniform topology if and only if it is closed in that topology, equicontinuous, and pointwise bounded, where pointwise bounded means that $\mathcal F(x)$ is a bounded subset of $Y$ for every $x\in X$; the empty subset is bounded.

## Facts & Assumptions

**Given:** Choice, a nonempty compact metric space $X$, a proper metric space $Y$, and $\mathcal F\subseteq C(X,Y)$.

[L1] The uniform closure of a family is compact exactly when the family is equicontinuous and every coordinate set has compact closure ([[cor-ascoli-arzela-for-compact-metric-domains]]).

[L2] A compact subset of a metric space is closed and bounded ([[thm-compact-subset-is-closed-and-bounded]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $\mathcal F$ is compact in the uniform topology. Since this topology is metrizable, [L2] makes $\mathcal F$ closed; hence its uniform closure is itself. [L2]

1.2 Conversely suppose $\mathcal F$ is uniformly closed, equicontinuous, and pointwise bounded. For each $x$, the closure $\overline{\mathcal F(x)}$ is closed and remains bounded; this also holds when $\mathcal F(x)=\varnothing$. [given]

2.1 By [L1], $\mathcal F$ is equicontinuous and each $\overline{\mathcal F(x)}$ is compact. By [L2] each such coordinate closure is bounded, so $\mathcal F$ is pointwise bounded. [L1, L2, step 1.1]

2.2 The coordinate closure $\overline{\mathcal F(x)}$ is closed and bounded, hence compact by properness of $Y$. Thus [L1] makes the uniform closure of $\mathcal F$ compact. [L1, step 1.2]

3.1 Since $\mathcal F$ is uniformly closed, it equals that compact closure and is compact. Steps 1.1--1.2 prove the converse implication, completing the equivalence. [step 1.1, step 2.1, step 2.2] ∎
