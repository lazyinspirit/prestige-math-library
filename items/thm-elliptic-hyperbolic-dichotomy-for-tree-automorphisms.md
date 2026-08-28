---
id: thm-elliptic-hyperbolic-dichotomy-for-tree-automorphisms
kind: theorem
title: "Tree automorphisms without inversions are either elliptic or hyperbolic"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-edge-inversion-and-action-without-inversions, def-translation-length-of-a-tree-automorphism-without-inversions, lem-nonempty-fixed-vertex-set-of-a-tree-automorphism-is-a-subtree, lem-path-metric-on-a-tree-is-geodesic-and-integer-valued]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jean-Pierre Serre, Trees"
      url: "https://www.scribd.com/document/551505445/Jean-Pierre-Serre-Trees-Springer-Verlag-1980"
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version)"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
---

## Statement

Let $g$ be an automorphism of a simplicial tree $T$ acting without inversions.
Then the minimum in

$$\ell(g)=\min_{v\in V(T)} d_T(v,g v)$$

exists. Exactly one of the following holds:

1. $\ell(g)=0$, in which case $g$ fixes a vertex of $T$;
2. $\ell(g)>0$, in which case there is a unique bi-infinite reduced path
   $A_g\subseteq T$ preserved by $g$, and $g$ acts on $A_g$ as a translation by
   distance $\ell(g)$.

The first case is called **elliptic** and the second **hyperbolic**.

## Facts & Assumptions

**Given:** An automorphism $g$ of a simplicial tree $T$ acting without inversions.

[L1] An action without inversions sends no oriented edge to its reverse. ([[def-edge-inversion-and-action-without-inversions]])

[L2] The translation length is defined as $\ell(g)=\min_v d_T(v,gv)$. ([[def-translation-length-of-a-tree-automorphism-without-inversions]])

[L3] If $g$ fixes a vertex, then its fixed vertices form a subtree. ([[lem-nonempty-fixed-vertex-set-of-a-tree-automorphism-is-a-subtree]])

[L4] The path metric on a simplicial tree is integer-valued and realized by the unique reduced path between vertices. ([[lem-path-metric-on-a-tree-is-geodesic-and-integer-valued]])

## Proof

**Proof technique:** direct.

1.1 By [L4], every displacement $d_T(v,gv)$ is a natural number, so choose $v$ with minimal displacement $m=d_T(v,gv)$. Then $m=\ell(g)$ by [L2]. If $m=0$, the vertex $v$ is fixed and [L3] describes the fixed subtree. [L2, L3, L4, given, choose]

2.1 Assume $m>0$, and let $P$ be the unique reduced path from $v$ to $gv$. Its translate $gP$ is the unique reduced path from $gv$ to $g^2v$. If $P$ and $gP$ met in more than the vertex $gv$, then some interior point of the overlap would have displacement strictly smaller than $m$, contradicting step 1.1; if they shared an edge with opposite orientations, that edge would be inverted, contradicting [L1]. Hence consecutive translates $g^nP$ and $g^{n+1}P$ meet only at one endpoint. [L1, L4, step 1.1, assume-case[hyperbolic], algebra]

3.1 Therefore $A_g:=\bigcup_{n\in\mathbb Z} g^nP$ is a bi-infinite reduced path. It is preserved by $g$, and $g$ sends each segment $g^nP$ onto $g^{n+1}P$, so every vertex on $A_g$ moves distance exactly $m$ along that line. Thus $g$ acts on $A_g$ as translation by $\ell(g)=m$. [L4, step 2.1, construct]

4.1 Let $x$ be a vertex not on $A_g$, and let $y$ be the first vertex of $A_g$ on the unique reduced path from $x$ to $A_g$. Then the geodesic from $x$ to $gx$ runs from $x$ to $y$, then along $A_g$ from $y$ to $gy$ by length $m$, and then from $gy$ to $gx$, so $d_T(x,gx)=2d_T(x,A_g)+m>m$. Hence the vertices of minimal displacement are exactly those on $A_g$, which makes $A_g$ unique. This is the hyperbolic case, and it excludes fixed vertices. [L4, step 3.1, algebra] ∎
