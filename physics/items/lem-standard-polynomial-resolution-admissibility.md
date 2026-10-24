---
id: lem-standard-polynomial-resolution-admissibility
kind: lemma
title: "The standard polynomial resolution has an augmentation contraction and is admissible"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 3
proof_strategy: constructive
justified_by: []
aliases: []
deps:
  - def-standard-resolution-of-a-ring-map
  - lem-simplicial-normalization-prism-and-trivial-fibration-criterion
  - def-polynomial-ring-on-a-family-of-indeterminates
  - def-commutative-ring
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "The Stacks Project, Chapter 14 (Simplicial Methods), Example 14.34.5 and Chapter 92 (The Cotangent Complex)"
      url: "https://stacks.math.columbia.edu/download/simplicial.pdf"
      locator: "Lemma 14.34.3 and Example 14.34.5 (tags 08ND, 08NA), printed 68; Cotangent Lemma 92.4.2 (tag 08PT)"
---

## Statement

Let $A\to B$ be a map of commutative unital rings
([[def-commutative-ring]]) and let $P_\bullet=((A[-]U)^{n+1}(B))_n$ be its
standard polynomial simplicial resolution
([[def-standard-resolution-of-a-ring-map]]), where $U$ forgets the algebra
structure. Its augmentation $P_\bullet\to B$ is termwise surjective, a
homotopy equivalence of underlying simplicial sets over the constant set $B$,
and a trivial Kan fibration. Its associated $A$-module complex is a free
resolution of $B$, so $P_\bullet$ is an admissible polynomial resolution for
computing cotangent complexes.

## Facts & Assumptions

**Given:** A map $A\to B$ of commutative unital rings and its standard resolution $P_\bullet\to B$ with $P_n=A[P_{n-1}]$, faces and degeneracies induced by the counit and unit of the free-forgetful adjunction.

[F1] $P_0=A[B]$, $P_n=A[P_{n-1}]$; the free-forgetful adjunction has unit $\eta\colon\mathrm{id}_{\mathrm{Set}}\to UA[-]$, comultiplication $A[-]\eta U: A[-]U\to (A[-]U)^2$, and counit $\epsilon\colon A[U(-)]\to\mathrm{id}$; the augmentation $P_0\to B$ is induced by the structure map of $B$; each $P_n$ is a polynomial $A$-algebra, hence a free $A$-module on its monomials ([[def-standard-resolution-of-a-ring-map]], [[def-polynomial-ring-on-a-family-of-indeterminates]]).

[F2] A termwise surjective homomorphism of simplicial abelian groups inducing a quasi-isomorphism of associated complexes is a trivial Kan fibration; a homomorphism of simplicial abelian groups that is a homotopy equivalence of underlying simplicial sets induces a quasi-isomorphism on associated complexes ([[lem-simplicial-normalization-prism-and-trivial-fibration-criterion]]).

## Proof

1.1 The extra degeneracy. Let $t\colon P_n\to P_{n+1}$ be the map $x\mapsto[x]$ induced by the unit of the free-forgetful adjunction, including the augmented map $B\to P_0=A[B]$. Directly on the nested polynomial expressions defining $P$, the adjunction triangle identities give $d_0t=\mathrm{id}$, $d_{i+1}t=td_i$, $s_{i+1}t=ts_i$ and $s_0t=tt$, with the augmented interpretations in degrees $-1$ and $0$. These identities say that $t$ is an extra degeneracy for the augmented simplicial set underlying $P_\bullet\to B$. [F1, given, construct]

2.1 Homotopy over $B$. For an order-preserving map $\alpha\colon[n]\to[1]$ with $r$ initial zeros, consider the map $t^rd_0^r\colon P_n\to P_n$, where $d_0^r$ is interpreted using the augmentation when $r=n+1$. Write this map as $H_{n,r}$. The identities of step 1.1 give $d_jH_{n,r}=H_{n-1,r-1}d_j$ for $j<r$ and $d_jH_{n,r}=H_{n-1,r}d_j$ for $j\ge r$; similarly $s_jH_{n,r}=H_{n+1,r+1}s_j$ for $j<r$ and $s_jH_{n,r}=H_{n+1,r}s_j$ for $j\ge r$. At the all-zero endpoint $r=n+1$, the repeated face map lands in $B$ and the same identities use the augmentation. Deleting or repeating the $j$-th vertex of $\alpha$ changes its number of initial zeros by exactly the stated amount. Since faces and degeneracies generate all order maps, these equations prove simplicial naturality, so the maps assemble into a simplicial homotopy over $B$ from the composite of the augmentation with the constant section $b\mapsto[\dots[b]\dots]$ (the all-zero endpoint) to the identity of $P_\bullet$ (the all-one endpoint). Augmentation followed by that section is therefore homotopic to the identity, while the other composite is the identity on $B$; hence the augmentation is a homotopy equivalence of underlying simplicial sets over $B$. Every augmentation map $P_n\to B$ is surjective because the nested variables $[b]$ lift every $b\in B$. [F1, step 1.1]

3.1 Admissibility. By [F2] the underlying-set homotopy equivalence of step 2.1 makes the associated chain map of abelian groups a quasi-isomorphism, and the termwise surjectivity of the augmentation then makes $P_\bullet\to B$ a trivial Kan fibration. Each $P_n$ is a free $A$-module by [F1], so the associated complex, reindexed cohomologically in nonpositive degrees, is a complex of free $A$-modules with $H^0=B$ and vanishing higher homology; it is therefore a free resolution of $B$, and $P_\bullet$ is admissible for computing cotangent complexes. The extra degeneracy is only a map of sets, not an algebra-linear chain contraction; it is the normalization and prism lemma [F2] that passes the contraction from underlying simplicial sets to module homology. [F1, F2, step 2.1, discharge-construct] ∎ 