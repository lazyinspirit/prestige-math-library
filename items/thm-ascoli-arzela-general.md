---
id: thm-ascoli-arzela-general
kind: theorem
title: "General Ascoli theorem for locally compact Hausdorff domains and metric targets"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-ascoli-arzela-sufficiency, thm-compact-function-families-are-equicontinuous-on-a-locally-compact-hausdorff-domain, prop-compact-function-families-are-pointwise-relatively-compact, thm-closed-subspace-of-a-compact-space-is-compact]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Topology, second edition, Theorem 47.1"
      url: "https://djvu.online/file/7PTGeGhMkCAAK"
pipeline_run: null
---

## Statement

**Assume the Axiom of Choice.** Let $X$ be a locally compact Hausdorff space, let $Y$ be a metric space, and let $\mathcal F\subseteq C(X,Y)$. The compact-open closure of $\mathcal F$ is compact if and only if $\mathcal F$ is equicontinuous and pointwise relatively compact.

## Facts & Assumptions

**Given:** Choice, a locally compact Hausdorff space $X$, a metric space $Y$, and $\mathcal F\subseteq C(X,Y)$.

[L1] Under Choice, equicontinuity and pointwise relative compactness imply compactness of the compact-open closure ([[thm-ascoli-arzela-sufficiency]]).

[L2] A compact compact-open family on a locally compact Hausdorff domain is equicontinuous ([[thm-compact-function-families-are-equicontinuous-on-a-locally-compact-hausdorff-domain]]).

[L3] Every compact compact-open family is pointwise relatively compact ([[prop-compact-function-families-are-pointwise-relatively-compact]]).

[L4] A closed subset of a compact space is compact ([[thm-closed-subspace-of-a-compact-space-is-compact]]).

## Proof

**Proof technique:** direct.

1.1 Suppose the compact-open closure $\overline{\mathcal F}^{\mathrm{co}}$ is compact. By [L2] it is equicontinuous, and restricting its common neighbourhood estimates to $\mathcal F$ shows that $\mathcal F$ is equicontinuous. [L2]

1.2 By [L3], $\overline{\mathcal F}^{\mathrm{co}}$ is pointwise relatively compact. For each $x$, the closure of $\mathcal F(x)$ is a closed subset of the compact closure of $\overline{\mathcal F}^{\mathrm{co}}(x)$, hence is compact by [L4]; thus $\mathcal F$ is pointwise relatively compact. [L3, L4]

1.3 Conversely, if $\mathcal F$ is equicontinuous and pointwise relatively compact, [L1] says directly that its compact-open closure is compact. [L1]

2.1 Steps 1.1--1.2 and 1.3 prove the two directions of the equivalence. [step 1.1, step 1.2, step 1.3] ∎
