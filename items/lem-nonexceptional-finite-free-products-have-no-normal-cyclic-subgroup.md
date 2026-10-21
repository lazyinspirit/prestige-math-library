---
id: lem-nonexceptional-finite-free-products-have-no-normal-cyclic-subgroup
kind: lemma
title: "Normal cyclic subgroups of nonexceptional finite free products"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [thm-normal-form-for-free-products]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Printed p.20, Lemma 1.15, motivates the boundary-fiber application; the free-product proof here is supplied independently"
---

## Statement

Let $G=G_1*\cdots*G_k$, where $2\le k<\infty$ and every factor is nontrivial. If $k=2$, assume the two factors are not both cyclic of order two. Then every cyclic normal subgroup of $G$ is trivial. No choice hypothesis is required.

## Facts & Assumptions

**Given:** The finite family of nontrivial groups in the Statement.

[F1] Every free-product element has a unique reduced syllable word; a nonempty reduced word is nonidentity ([[thm-normal-form-for-free-products]], Statement).

## Proof

1.1 Construct a graph $T$ with central vertices indexed by $g\in G$ and factor vertices indexed by the tagged left cosets $(i,gG_i)$. Join $g$ to $(i,gG_i)$ by an edge for each $i$. This graph is connected: multiplying a central vertex by one factor syllable gives a two-edge path through that factor coset, and [F1] supplies such a path from $1$ to every central vertex. It has no reduced closed edge path. Indeed such a path, started at a central vertex, alternates factor and central vertices. Consecutive central vertices differ by a nonidentity element of the intervening factor; otherwise the path immediately reverses an edge. Consecutive factor tags differ, since equal tags would again immediately reverse the edge at their common central vertex. A closed path would therefore give a nonempty reduced syllable word equal to $1$, contradicting [F1]. Thus $T$ is a tree. Left multiplication gives a $G$-action preserving both kinds of vertices and their tags. Every edge stabilizer is trivial, since fixing its central endpoint fixes the corresponding group element. [given, F1, construct]

2.1 A nontrivial element conjugate into a factor fixes exactly one vertex of $T$, its corresponding factor vertex. It fixes that vertex by construction; if it fixed another vertex, it would fix the unique path between them, hence an edge, which step 1.1 excludes. Every nonidentity reduced word $w$ can be conjugated to a one-syllable word or to a cyclically reduced word of length at least two: whenever the first and last syllables have the same factor tag, move the first to the end by conjugation and reduce the seam; the length decreases unless the word is already cyclically reduced or has length one. This is a finite process. [F1, step 1.1, construct]

3.1 For a cyclically reduced word $w$ of length at least two, concatenate, for all integer $n$, the two-edge syllable paths from $w^n$ to $w^{n+1}$. There is no reversal at a join because the last and first factor tags of $w$ differ. The resulting subgraph $L$ is an embedded bi-infinite path by the tree property. It contains the central vertex $1$, and $w$ translates it by a nonzero distance. It is the unique bi-infinite path on which $w$ acts as a nonzero translation. To verify uniqueness, project any vertex $x$ to $L$: the path from $x$ to any vertex of $L$ has a unique first point $p$ on $L$, independent of the chosen sufficiently distant vertex, since otherwise there would be a cycle. The unique path from $x$ to $wx$ is the concatenation from $x$ to $p$, along $L$ from $p$ to $wp$, and from $wp$ to $wx$. Hence $d(x,wx)=2d(x,L)+\ell$, where $\ell>0$ is the translation distance on $L$. On any other translation path the displacement is constant and its iterates give an embedded line. If that line were disjoint from $L$, its unique connecting path to $L$ would have to be carried to itself, forcing its endpoint on $L$ to be fixed. If it met $L$, their intersection would be invariant under a nonzero translation, hence contain the whole line: a connected proper interval, ray or finite segment cannot be invariant under that translation and its inverse. Thus the paths coincide. Conjugating gives the same existence and uniqueness for every element not conjugate into a factor. [F1, step 1.1, step 2.1, construct]

4.1 Suppose a nontrivial cyclic subgroup $C=\langle w\rangle$ is normal in $G$. If $w$ is conjugate into a factor, step 2.1 makes the common fixed set of $C$ a single factor vertex. Normality makes this vertex fixed by all $G$. This is impossible: a different factor contains a nonidentity element, whose reduced word is outside the stabilizing conjugate of that factor. More explicitly, after conjugating the vertex to $(i,G_i)$, any nonidentity element of $G_j$ with $j\ne i$ moves it by [F1]. Otherwise step 3.1 supplies the unique translation line $L$ of $w$. The group $C$ is infinite, since a nonzero translation has infinite order. For every $g\in G$, normality therefore gives $gwg^{-1}=w$ or $w^{-1}$. Their translation lines are the same, so uniqueness makes $gL=L$. Conjugate once so that the cyclically reduced description of step 3.1 applies; then $1\in L$. Invariance now places every central vertex $g$ in $L$. Every factor vertex belongs to the path between two central vertices, because its factor is nontrivial. Thus convexity of the line gives $T=L$. But a central vertex has degree $k$ and a factor vertex of tag $i$ has degree $|G_i|$. A line has degree two at every vertex, forcing $k=2$ and both factors to have order two, contrary to the hypothesis. Therefore $C$ cannot exist. All selected words, conjugations and paths use finite data; no selection over an indexed family is used. [given, F1, step 1.1, step 2.1, step 3.1] ∎
