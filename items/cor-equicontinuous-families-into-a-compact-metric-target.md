---
id: cor-equicontinuous-families-into-a-compact-metric-target
kind: corollary
title: "Under Choice, an equicontinuous family into a compact metric target has compact compact-open closure"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-ascoli-arzela-sufficiency, thm-closed-subspace-of-a-compact-space-is-compact]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Topology, second edition, Theorem 47.1"
      url: "https://djvu.online/file/7PTGeGhMkCAAK"
pipeline_run: null
---

## Statement

**Assume the Axiom of Choice.** Let $X$ be any topological space, let $Y$ be a compact metric space, and let $\mathcal F\subseteq C(X,Y)$ be equicontinuous. Then the compact-open closure of $\mathcal F$ is compact.

## Facts & Assumptions

**Given:** Choice, a topological space $X$, a compact metric space $Y$, and an equicontinuous family $\mathcal F\subseteq C(X,Y)$.

[L1] Under Choice, equicontinuity and pointwise relative compactness give compact compact-open closure ([[thm-ascoli-arzela-sufficiency]]).

[L2] Every closed subset of a compact topological space is compact ([[thm-closed-subspace-of-a-compact-space-is-compact]]).

## Proof

**Proof technique:** direct.

1.1 For each $x\in X$, the closure $\overline{\mathcal F(x)}$ is a closed subset of the compact target $Y$, and is therefore compact by [L2]. This includes the empty coordinate set. [L2]

2.1 Thus $\mathcal F$ is pointwise relatively compact. Together with the assumed equicontinuity, [L1] makes its compact-open closure compact. No local compactness hypothesis on $X$ is used. [L1, step 1.1] ∎
