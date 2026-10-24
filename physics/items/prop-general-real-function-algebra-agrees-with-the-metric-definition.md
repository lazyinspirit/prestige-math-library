---
id: prop-general-real-function-algebra-agrees-with-the-metric-definition
kind: proposition
title: "The general real function-algebra definition agrees with the published compact-metric definition"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-unital-separating-real-function-algebra-general, def-unital-separating-real-function-algebra, def-continuous-real-functions-on-a-compact-metric-space, thm-metric-continuity-characterisations, thm-compactness-agrees-with-metric-compactness, thm-metric-hausdorff-separation]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "J. M. Erdman, A Companion to Real Analysis, Section 21.2"
      url: "https://web.pdx.edu/~erdman/CRA/COMPANION_ANALYSIS_pdf.pdf"
pipeline_run: null
---

## Statement

Let $(K,d)$ be a nonempty compact metric space, and give $K$ its metric topology. For a subset $A\subseteq C(K,\mathbb R)$, the following are equivalent:

1. $A$ is a unital point-separating real function algebra in the compact-metric sense of [[def-unital-separating-real-function-algebra]];
2. $A$ is a unital point-separating real function algebra on the compact Hausdorff topological space $K$ in the sense of [[def-unital-separating-real-function-algebra-general]].

Under this identification the two ambient sets denoted $C(K,\mathbb R)$ are equal and their pointwise algebra operations agree.

## Facts & Assumptions

**Given:** A nonempty compact metric space $(K,d)$ with its metric topology, and a subset $A$ of its real-valued continuous functions.

[L1] For nonempty compact metric $K$, a subset of $C(K,\mathbb R)$ is a unital real function algebra when it contains every constant function and is closed under pointwise addition, real scalar multiplication, and multiplication; it separates points when every distinct pair is distinguished by one member ([[def-unital-separating-real-function-algebra]]).

[L2] The metric-space notation $C(K,\mathbb R)$ consists of the continuous functions from $(K,d)$ to $\mathbb R$ with its usual metric ([[def-continuous-real-functions-on-a-compact-metric-space]]).

[L3] For maps between metric spaces, epsilon-delta continuity at every point is equivalent to the inverse image of every open set being open ([[thm-metric-continuity-characterisations]]).

[L4] A metric space is compact if and only if it is compact as a topological space in its metric topology ([[thm-compactness-agrees-with-metric-compactness]]).

[L5] Every metric space is Hausdorff: distinct points are separated by disjoint open balls ([[thm-metric-hausdorff-separation]]).

[L6] A real function algebra on a compact Hausdorff space is a real vector subspace of $C(K,\mathbb R)$ closed under pointwise multiplication; unitality means that it contains every constant function, and point separation means that every distinct pair is distinguished by one member ([[def-unital-separating-real-function-algebra-general]]).

## Proof

**Proof technique:** direct.

1.1 By [L4] and [L5], the metric topology makes $K$ a compact Hausdorff topological space. [L4, L5]

1.2 By [L2] and the equivalence (a)$\Leftrightarrow$(b) in [L3], a function $K\to\mathbb R$ is continuous in the metric sense exactly when it is continuous for the metric topologies, so the two ambient sets $C(K,\mathbb R)$ are equal. [L2, L3]

2.1 The pointwise addition, scalar multiplication, and multiplication in [L1] and [L6] are the same operations on the common ambient set from step 1.2, and the constant-function and point-separation clauses have the same quantifiers; hence condition 1 implies condition 2 and condition 2 implies condition 1. [step 1.1, step 1.2, L1, L6] ∎
