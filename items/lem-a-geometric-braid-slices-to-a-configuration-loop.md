---
id: lem-a-geometric-braid-slices-to-a-configuration-loop
kind: lemma
title: "A geometric braid slices to an interior configuration loop"
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps: [def-geometric-braid-with-setwise-endpoints,
       def-motion-of-an-unordered-point-configuration,
       def-product-topology,
       def-ordered-configuration-space,
       def-unordered-configuration-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, §§1.1–1.3, printed pp. 3–6"
      url: https://arxiv.org/pdf/1010.0321
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, §1.1, author manuscript pp. 3–5"
      url: https://www.math.columbia.edu/~jb/Handbook-21.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Statement

For a geometric braid $\beta=(z_1,\ldots,z_n)$ based at $Q$, let
$$S(\beta)(t):=[(z_1(t),\ldots,z_n(t))],$$
where the real-disc coordinates are identified with complex coordinates as in
[[def-motion-of-an-unordered-point-configuration]]. Then $S(\beta)$ is a
continuous based loop in $C_n(\operatorname{int}D^2)$. This slicing uses the
given level parameter and the given labelled point motions; at height $t$ its
value is exactly the unordered configuration cut out by the braid at that
height.

## Facts & Assumptions

**Given:** $n\in\mathbb N$ and a geometric braid $\beta=(z_1,\ldots,z_n)$ based at the fixed tuple $Q$.

[L1] The ordered configuration space $F_n(X)$ has the subspace topology from the product $X^n$ with its product topology; for $n=0$ it is the one-point empty tuple ([[def-ordered-configuration-space]]).

[L2] Each $z_j:I\to D^\circ$ is continuous ([[def-geometric-braid-with-setwise-endpoints]]).

[L3] At every height the coordinates are pairwise distinct ([[def-geometric-braid-with-setwise-endpoints]]).

[L4] Each point motion starts at the corresponding $q_j$ ([[def-geometric-braid-with-setwise-endpoints]]).

[L5] The set of the terminal points is $Q$ ([[def-geometric-braid-with-setwise-endpoints]]).

[L6] The fixed real-complex identification takes $D^\circ$ to $\operatorname{int}D^2$ ([[def-motion-of-an-unordered-point-configuration]]).

[L7] The canonical map $p_n:F_n(X)\to C_n(X)$, $x\mapsto[x]$, is continuous and sends a tuple to its coordinate-permutation orbit ([[def-unordered-configuration-space]]).

[L8] The product topology on a product is the initial topology of its coordinate projections, so continuity into that product is checked coordinatewise ([[def-product-topology]]).

[L9] The $j$th strand is the graph $t\mapsto(z_j(t),t)$ and its second coordinate is its height ([[def-geometric-braid-with-setwise-endpoints]]).

The coordinate functions determine one tuple-valued map at each height; no choice of ordering or lift is made.

## Proof

**Proof technique:** direct.

1.1 *The ordered tuple varies continuously.* Apply the fixed real-complex identification from [L6] to each coordinate $z_j$. By [L2], each resulting coordinate map $I\to\operatorname{int}D^2$ is continuous. The product topology on $(\operatorname{int}D^2)^n$ is the topology for which continuity into the product is checked coordinatewise [L8], so $$z:I\to(\operatorname{int}D^2)^n,\qquad z(t)=(z_1(t),\ldots,z_n(t))$$ is continuous. Pairwise distinctness in [L3] places its image in $F_n(\operatorname{int}D^2)$; because that space has the subspace topology, the same map, with this restricted codomain, is continuous ([L1]). For $n=0$ this is the constant map to the one-point empty tuple. [L1, L2, L3, L4, L6, L8]

1.2 *Pass to the unordered quotient.* By [L7], $p_n$ is continuous, so $$S(\beta)=p_n\circ z:I\to C_n(\operatorname{int}D^2)$$ is continuous. At the bottom, $z(0)=Q$ by [L4], so $S(\beta)(0)=[Q]$. At the top, the set of the coordinates of $z(1)$ is $Q$ by [L5], hence $z(1)$ is a coordinate permutation of $Q$ and $p_n(z(1))=[Q]$ by the orbit description in [L7]. Thus $S(\beta)(1)=[Q]$, as required for a based loop ([L4, L5, L7]).

1.3 *Identify each height slice.* The graph of the $j$th coordinate is $t\mapsto(z_j(t),t)$ by [L9], so its intersection with height $t$ returns the point $z_j(t)$. Taking all labels, their unordered orbit is exactly $p_n(z(t))=S(\beta)(t)$. The labels are retained in $z$ and then forgotten precisely by the quotient, with no reparametrization of height. For $n=0$ the slice and loop are the unique empty configuration. [L3, L5, L7, L9]

2.1 The sliced path is continuous, has both endpoint values $[Q]$, and at each height equals the unordered slice of the given level-preserving braid. [step 1.1, step 1.2, step 1.3] ∎
