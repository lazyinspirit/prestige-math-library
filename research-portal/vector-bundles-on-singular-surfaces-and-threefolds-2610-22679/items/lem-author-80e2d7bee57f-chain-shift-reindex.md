---
id: lem-author-80e2d7bee57f-chain-shift-reindex
kind: lemma
title: Reindexing commutes with shifts
status: published
domain: mathematics
deps:
  - math:def-abelian-category
  - math:def-cochain-complex-in-an-abelian-category
  - math:def-chain-complex-in-an-abelian-category
  - math:def-derived-category-of-an-abelian-category
  - math:def-cochain-map
  - math:def-chain-map
dependency_roles:
  math:def-abelian-category: mathematical-premise
  math:def-cochain-complex-in-an-abelian-category: mathematical-premise
  math:def-chain-complex-in-an-abelian-category: mathematical-premise
  math:def-derived-category-of-an-abelian-category: mathematical-premise
  math:def-cochain-map: mathematical-premise
  math:def-chain-map: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct-proof
dependency_level: 0
---

## Statement
Let $\mathcal A$ be an abelian category and let $C$ be a cochain complex in $\mathcal A$, indexed by all integers with no boundedness assumption. Reindex it as the chain complex $R(C)=D$, where $D_n=C^{-n}$ and $\partial_n=d_C^{-n}$. For an integer $k$, use the cochain shift $C[k]^q=C^{q+k}$ with differential $d_{C[k]}^q=(-1)^k d_C^{q+k}$, and define the chain shift by $D[k]_n=D_{n-k}$ with differential $\partial^{D[k]}_n=(-1)^k\partial_{n-k}$. Then $R(C[k])=R(C)[k]$ as chain complexes. This equality is natural in cochain maps: for $f:C\to C'$, put $R(f)_n=f^{-n}$, $f[k]^q=f^{q+k}$ and $R(f)[k]_n=R(f)_{n-k}$; then $R(f[k])=R(f)[k]$.

## Facts & Assumptions
**Given:** $\mathcal A$, $C$, $D$, $k$, and the componentwise constructions in the statement.

**Goal:** Verify the constructions and compare their objects, differentials and maps.

[F1] [[math:def-abelian-category]] supplies the ambient abelian category and its additive structure. Morphisms can be negated, and composition is additive in each variable.

[F2] [[math:def-cochain-complex-in-an-abelian-category]] supplies cochain complexes and the reindexing $D_n=C^{-n}$, $\partial_n=d_C^{-n}$ in any abelian category. [[math:def-chain-complex-in-an-abelian-category]] supplies the chain differential condition $\partial_{n-1}\partial_n=0$.

[F3] [[math:def-derived-category-of-an-abelian-category]] supplies the termwise cochain shift convention $C[k]^q=C^{q+k}$ and $d_{C[k]}^q=(-1)^k d_C^{q+k}$. Only this convention is used; no derived localization or assertion about Hom sets is needed.

[F4] [[math:def-cochain-map]] and [[math:def-chain-map]] supply the map conditions $d_{C'}^q f^q=f^{q+1}d_C^q$ and $\partial_n^{D'}g_n=g_{n-1}\partial_n^D$. Reindexing and shifting maps use the component formulas in the statement.

## Proof
1.1 The reindexed differential has target $C^{-n+1}=D_{n-1}$ and satisfies $\partial_{n-1}\partial_n=d_C^{-n+1}d_C^{-n}=0$. The consecutive differential composites for $C[k]$ and $D[k]$ are respectively $(-1)^{2k}d_C^{q+k+1}d_C^{q+k}=0$ and $(-1)^{2k}\partial_{n-k-1}\partial_{n-k}=0$, so all the constructions are complexes. In degree $n$, $R(C[k])_n=C[k]^{-n}=C^{-n+k}=D_{n-k}=R(C)[k]_n$. [F1, F2, F3, given]

2.1 The differential of $R(C[k])$ in degree $n$ is $(-1)^k d_C^{-n+k}=(-1)^k\partial_{n-k}$, exactly the differential of $R(C)[k]$. For a cochain map $f:C\to C'$, reindexing its map equation gives $\partial_n^{D'}f^{-n}=f^{-n+1}\partial_n^D$, so $R(f)$ is a chain map. Multiplying the map equations in degrees $q+k$ and $n-k$ by $(-1)^k$ shows that the specified shifted maps are maps of the shifted complexes. Both $R(f[k])_n$ and $R(f)[k]_n$ equal $f^{-n+k}$. These component formulas preserve identities and composition, so the equality of complexes is natural in $C$. [F1, F2, F3, F4, given, step 1.1] ∎
