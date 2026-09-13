---
id: thm-free-proper-action-quotient-manifold
kind: theorem
title: Free proper action quotient manifold
status: draft
origin: pipeline
deps: [lem-local-slice-for-a-free-proper-action, def-quotient-topology, thm-quotient-universal-property, lem-open-or-closed-surjection-is-quotient, prop-topological-manifolds-are-locally-compact-and-locally-path-connected, prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure, thm-compact-subset-of-a-hausdorff-space-is-closed, thm-closed-subspace-of-a-compact-space-is-compact, thm-compactness-under-continuous-maps, thm-constant-rank-theorem-for-manifolds]
landmark: true
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Proposition 21.4 and Theorem 21.10 with proofs, printed pages 543–547
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

If a Lie group $G$ acts smoothly, freely, and properly on a smooth manifold
$M$, then the orbit space $M/G$ with its quotient topology is a Hausdorff
second-countable smooth manifold of dimension
$\dim M-\dim G$. It has a unique smooth structure for which the quotient map
$q:M\to M/G$ is a smooth surjective submersion.

## Facts & Assumptions

**Given:** A smooth free proper left action of $G$ on $M$, and the orbit map
$q:M\to M/G$ with the quotient topology.

[F1] Every $x\in M$ has a submanifold slice $S$ for which
$G\times S\to G\cdot S$ is a diffeomorphism onto an open saturated
neighborhood. [[lem-local-slice-for-a-free-proper-action]].

[F2] A surjective open continuous map is a quotient map, and maps constant on
quotient fibres factor uniquely through the quotient.
[[lem-open-or-closed-surjection-is-quotient]],
[[thm-quotient-universal-property]], [[def-quotient-topology]].

[F3] Smooth manifolds and their finite products are locally compact and
Hausdorff. [[prop-topological-manifolds-are-locally-compact-and-locally-path-connected]],
[[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]].

[F4] Continuous images of compact sets are compact, compact subsets of
Hausdorff spaces are closed, and closed subsets of compact spaces are compact.
[[thm-compactness-under-continuous-maps]],
[[thm-compact-subset-of-a-hausdorff-space-is-closed]],
[[thm-closed-subspace-of-a-compact-space-is-compact]].

[F5] A submersion has projection normal form and therefore admits smooth local
sections. [[thm-constant-rank-theorem-for-manifolds]].

## Proof

**Proof technique:** use the slices as quotient charts.

1.1 The map $q$ is open: if $O\subseteq M$ is open, then $q^{-1}(q(O))=\bigcup_{g\in G}g\cdot O$ is open, so $q(O)$ is open by the quotient topology. It is a continuous surjection by definition and hence also satisfies [F2]. [F2, given]

1.2 The orbit relation $R=\{(g\cdot x,x):g\in G,x\in M\}$ is closed in $M\times M$. To see this without a sequential choice argument, first note that the proper map $\Theta:G\times M\to M\times M$ is closed. If $C\subseteq G\times M$ is closed and $z\notin\Theta(C)$, local compactness gives an open neighborhood $V$ of $z$ inside a compact set $K$. Then $C\cap\Theta^{-1}(K)$ is compact, so its image $A$ is compact and hence closed by [F4]. The open set $V\setminus A$ contains $z$ and misses $\Theta(C)$, because every point of $V$ lies in $K$. Thus $\Theta(C)$ is closed. Taking $C=G\times M$ gives that $R$ is closed. [F3, F4, given]

2.1 Distinct orbits have representatives $x,y$ with $(x,y)\notin R$. By step 1.2 and the product topology, there are neighborhoods $U\ni x$ and $V\ni y$ with $(U\times V)\cap R=\varnothing$. The open sets $q(U)$ and $q(V)$ from step 1.1 are disjoint: a common orbit would contain some $u\in U$ and $v\in V$, putting $(u,v)$ in $R$. Hence $M/G$ is Hausdorff. [step 1.1, step 1.2]

2.2 If $\{B_j:j\in\mathbb N\}$ is a countable base of $M$, then $\{q(B_j):j\in\mathbb N\}$ is a countable base of $M/G$. Indeed, for open $W\subseteq M/G$ and $q(x)\in W$, choose $B_j$ with $x\in B_j\subseteq q^{-1}(W)$; then $q(x)\in q(B_j)\subseteq W$, and $q(B_j)$ is open by step 1.1. Thus the quotient is second countable. [step 1.1, given]

2.3 Let $S$ be a slice from [F1] and put $O=G\cdot S$. The restriction $q|_S:S\to q(O)$ is bijective. It is a homeomorphism: it is continuous, while for open $W\subseteq S$ the saturation $G\cdot W$ corresponds under the diffeomorphism $G\times S\to O$ to $G\times W$, so it is open and $q(W)$ is open by step 1.1. These homeomorphisms give $M/G$ local Euclidean charts modelled on $S$, whose dimension is $\dim M-\dim G$ by the product diffeomorphism in [F1]. [F1, step 1.1]

3.1 The slice charts are smoothly compatible. Near a point in the overlap of slices $S$ and $T$, use the diffeomorphism $G\times T\to G\cdot T$ from [F1]. Its $T$-component, restricted to a neighborhood in $S$, is exactly the transition map $(q|_T)^{-1}\circ q|_S$, and is smooth. They therefore define a smooth atlas. In the corresponding product coordinates $G\times S$ on $M$ and slice coordinates $S$ on $M/G$, the map $q$ is $(g,s)\mapsto s$, so it is a smooth surjective submersion. [F1, step 2.3]

4.1 Finally suppose two smooth structures on the same orbit space make $q$ a smooth submersion. By [F5], relative to the first structure $q$ has a smooth local section $s$ near every quotient point. The identity from the first quotient manifold to the second is locally $q_2\circ s$, hence smooth; reversing the two structures proves that its inverse is smooth. Thus the structures coincide. Steps 2.1–3.1 prove existence, Hausdorffness, second countability, dimension, and submersivity, and this step proves uniqueness. Only finite local selections occur, so no choice principle is used. [F5, step 2.1, step 2.2, step 2.3, step 3.1] ∎
