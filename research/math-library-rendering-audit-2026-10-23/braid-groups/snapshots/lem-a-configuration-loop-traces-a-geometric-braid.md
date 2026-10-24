---
id: lem-a-configuration-loop-traces-a-geometric-braid
kind: lemma
title: "An interior configuration loop traces a geometric braid"
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps: [def-motion-of-an-unordered-point-configuration,
       def-geometric-braid-with-setwise-endpoints,
       def-complex-metric-convergence-and-continuity,
       def-ordered-configuration-space,
       def-unordered-configuration-space,
       lem-disjoint-coordinate-neighborhoods-evenly-cover-unordered-configurations,
       lem-the-closed-disk-is-a-manifold-with-boundary,
       lem-t0-t1-and-hausdorff-are-hereditary,
       thm-path-lifting-for-covering-maps]
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
  audited: 2026-09-30
---

## Statement

For every interior based motion $\alpha:I\to C_n(\operatorname{int}D^2)$ at
$[Q]$, the quotient covering
$$p^\circ:F_n(\operatorname{int}D^2)\longrightarrow C_n(\operatorname{int}D^2)$$
has a unique lift $\widetilde\alpha$ starting at $Q$. Writing
$\widetilde\alpha(t)=(z_1(t),\ldots,z_n(t))$, the coordinate graphs form a
geometric braid based at $Q$, and its unordered slice at every height is
exactly $\alpha(t)$.

## Facts & Assumptions

**Given:** A natural number $n$, the geometric base tuple $Q$, and an interior
based motion $\alpha$ at $[Q]$.

[L1] $F_n(X)$ is the subspace of $X^n$ consisting of tuples with pairwise
distinct coordinates, and $F_0(X)$ is the one-point space
([[def-ordered-configuration-space]]).

[L2] $C_n(X)$ is the orbit quotient of $F_n(X)$ by coordinate permutations;
its quotient map $p$ is continuous and surjective, and its fibres are exactly
the coordinate-permutation orbits ([[def-unordered-configuration-space]]).

[L3] Under the real-complex identification, $D^\circ$ is a subspace of the
closed unit disk $D^2$; $D^2$ is Hausdorff, and Hausdorffness passes to
subspaces ([[def-geometric-braid-with-setwise-endpoints]],
[[def-complex-metric-convergence-and-continuity]],
[[lem-the-closed-disk-is-a-manifold-with-boundary]],
[[lem-t0-t1-and-hausdorff-are-hereditary]]).

[L4] If $X$ is Hausdorff, then every point of $C_n(X)$ has an evenly covered
neighbourhood under $p:F_n(X)\to C_n(X)$; for $n=0$, $p$ is the unique
homeomorphism of one-point spaces
([[lem-disjoint-coordinate-neighborhoods-evenly-cover-unordered-configurations]]).

[L5] For a covering $p:E\to B$ and path $\alpha:I\to B$ with a specified
starting lift $e_0$, there is a unique path $\widetilde\alpha$ starting at
$e_0$ and satisfying $p\circ\widetilde\alpha=\alpha$
([[thm-path-lifting-for-covering-maps]]).

[L6] A geometric braid based at $Q$ is a tuple of continuous point motions in
$D^\circ$ with pairwise distinct values at every height, bottom tuple $Q$, and
top endpoint set $Q$ ([[def-geometric-braid-with-setwise-endpoints]]).

[L7] An interior based motion is a continuous path in
$C_n(\operatorname{int}D^2)$ whose two endpoints are $[Q]$
([[def-motion-of-an-unordered-point-configuration]]).

No choice principle is assumed or used: the lift is determined by one
prescribed starting tuple and is unique.

## Proof

**Proof technique:** direct.

1.1 *The quotient is a covering on the open disk.* By [L3], $\operatorname{int}D^2$ is Hausdorff; applying [L4] with $X=\operatorname{int}D^2$ gives an evenly covered neighbourhood at every unordered configuration, and continuity and surjectivity from [L2] show that $p^\circ$ is a covering. For $n=0$ both spaces are points, so this conclusion still holds. [L2, L3, L4]

1.2 *Lift the motion.* Since $\alpha$ is based at $[Q]$ by [L7] and $p^\circ(Q)=[Q]$, [L5] gives a unique continuous lift $\widetilde\alpha:I\to F_n(\operatorname{int}D^2)$ with $\widetilde\alpha(0)=Q$ and $p^\circ\circ\widetilde\alpha=\alpha$; write its coordinates as $z_1,\ldots,z_n$, taking the empty tuple when $n=0$. [L1, L2, L5, L7]

1.3 *Check the strand conditions.* By [L1], the coordinate projections of $\widetilde\alpha$ are continuous; because every lifted tuple lies in $F_n(\operatorname{int}D^2)$, the coordinates remain interior and pairwise distinct, and they start at $Q$. At the top, $p^\circ(\widetilde\alpha(1))=\alpha(1)=[Q]$, so [L2] places the terminal tuple in the coordinate-permutation orbit of $Q$, giving endpoint set exactly $\{q_1,\ldots,q_n\}$; these conditions are vacuous for $n=0$. [L1, L2, L6, L7]

1.4 *The lift is the required braid and traces the original motion.* By [L6], $\beta=(z_1,\ldots,z_n)$ is a geometric braid based at $Q$: its strands are the graphs $t\mapsto(z_j(t),t)$, so height is their parameter and distinct strands cannot meet. Its unordered slice is $[(z_1(t),\ldots,z_n(t))]=p^\circ(\widetilde\alpha(t))=\alpha(t)$ for every $t$, by [L5]; this also holds for the unique empty braid when $n=0$. [L2, L5, L6]

2.1 The unique lift has all the endpoint, collision, continuity and slicing properties required in the statement, establishing the claim. [step 1.2, step 1.3, step 1.4] ∎
