---
id: cor-ascoli-arzela-for-compact-hausdorff-domains
kind: corollary
title: "Ascoli–Arzelà for a compact Hausdorff domain"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-ascoli-arzela-general, def-locally-compact-space]
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

**Assume the Axiom of Choice.** Let $X$ be a compact Hausdorff space, let $Y$ be a metric space, and let $\mathcal F\subseteq C(X,Y)$. The compact-open closure of $\mathcal F$ is compact if and only if $\mathcal F$ is equicontinuous and pointwise relatively compact.

## Facts & Assumptions

**Given:** Choice, a compact Hausdorff space $X$, a metric space $Y$, and $\mathcal F\subseteq C(X,Y)$.

[L1] The general Ascoli theorem gives the stated equivalence for locally compact Hausdorff domains ([[thm-ascoli-arzela-general]]).

[L2] Every compact topological space is locally compact because the whole space is a compact neighbourhood of each point ([[def-locally-compact-space]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], the compact space $X$ is locally compact; it is Hausdorff by hypothesis. [L2]

2.1 Apply [L1] to $X$, $Y$, and $\mathcal F$. This yields both directions of the claimed equivalence with the compact-open topology and the stated Choice hypothesis unchanged. [L1, step 1.1] ∎
