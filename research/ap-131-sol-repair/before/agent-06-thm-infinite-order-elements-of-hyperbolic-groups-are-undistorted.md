---
id: thm-infinite-order-elements-of-hyperbolic-groups-are-undistorted
kind: theorem
title: "Infinite-order elements of hyperbolic groups are undistorted"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-a-finitely-generated-group-with-a-word-metric-is-a-quasi-geodesic-space, def-hyperbolic-group, thm-hyperbolic-group-definition-is-independent-of-finite-generating-set, lem-infinite-order-elements-have-positive-stable-translation-length]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Clara Löh, Geometric Group Theory, Section 6.5.1"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
---

## Statement

Let $G$ be a hyperbolic group and let $g \in G$ have infinite order. Then the
cyclic subgroup $\langle g \rangle$ is undistorted in $G$: for some constants
$A,B>0$,

$$ |n| \le A\,|g^n|_S + B $$

for all $n \in \mathbb Z$, where $|\cdot|_S$ is word length with respect to a
finite generating set $S$ of $G$.

## Facts & Assumptions

**Given:** A hyperbolic group $G$, a finite generating set $S$, and an infinite-order element $g \in G$.

[L1] For an infinite-order element of a finitely generated hyperbolic group, there is a positive integer $C$ such that $|g^n|_S\ge |n|/C$ for all integers $n$ ([[lem-infinite-order-elements-have-positive-stable-translation-length]]).

[L2] Hyperbolicity of the Cayley graph is independent of the finite generating set ([[thm-hyperbolic-group-definition-is-independent-of-finite-generating-set]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], the Cayley graph for the stated finite generating set $S$ is hyperbolic. Apply [L1] to this Cayley realization and the infinite-order element $g$. [given, L1, L2]

2.1 The bound in [L1] is exactly the displayed inequality with $A=C$ and any $B>0$. Therefore $\langle g \rangle$ is undistorted. [L1, step 1.1] ∎
