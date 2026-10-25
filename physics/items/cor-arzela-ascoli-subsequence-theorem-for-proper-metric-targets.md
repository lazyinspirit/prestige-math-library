---
id: cor-arzela-ascoli-subsequence-theorem-for-proper-metric-targets
kind: corollary
title: "Under the Axiom of Choice, a pointwise bounded equicontinuous sequence on a nonempty compact metric domain into a proper metric target has a uniformly convergent subsequence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-ascoli-arzela-for-compact-metric-domains, thm-metric-compactness-equivalences]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "The Ascoli–Arzelà Theorem, BBT"
      url: "https://assets.pubpub.org/6d1dqgg9/51597355090422.pdf"
    - title: "The Arzelà–Ascoli Theorem"
      url: "https://web.archive.org/web/20141114064305if_/http://www.mth.msu.edu/~shapiro/pubvit/Downloads/ArzNotes/ArzNotes.pdf"
pipeline_run: null
---

## Statement

**Assume the Axiom of Choice.** Let $X$ be a nonempty compact metric space, let $Y$ be a proper metric space, and let $(f_k)_{k\in\mathbb N}$ be an equicontinuous sequence in $C(X,Y)$. If $\{f_k(x):k\in\mathbb N\}$ is bounded for every $x\in X$, then some subsequence converges uniformly to a member of $C(X,Y)$.

## Facts & Assumptions

**Given:** Choice, a nonempty compact metric space $X$, a proper metric space $Y$, and a pointwise bounded equicontinuous sequence $(f_k)$.

[L1] Equicontinuity and compact coordinate closures make the uniform closure compact ([[cor-ascoli-arzela-for-compact-metric-domains]]).

[L2] Under Countable Choice and Dependent Choice, every compact metric space is sequentially compact ([[thm-metric-compactness-equivalences]]).

## Proof

**Proof technique:** direct.

1.1 For each $x\in X$, the coordinate set $\{f_k(x):k\in\mathbb N\}$ is bounded. Its closure is closed and remains bounded, and therefore is compact by properness. [given]

2.1 By equicontinuity, step 1.1, and [L1], the uniform closure $H$ of $\{f_k:k\in\mathbb N\}$ is compact. [L1, step 1.1]

3.1 Choice implies the two weaker choice principles in [L2], so the compact metric space $H$ is sequentially compact. Hence $(f_k)$ has a subsequence converging in the uniform metric to some $f\in H\subseteq C(X,Y)$. [L2, step 2.1, choose]

4.1 Convergence in the uniform metric is uniform convergence, which gives the claimed subsequence and continuous limit. [step 3.1] ∎
