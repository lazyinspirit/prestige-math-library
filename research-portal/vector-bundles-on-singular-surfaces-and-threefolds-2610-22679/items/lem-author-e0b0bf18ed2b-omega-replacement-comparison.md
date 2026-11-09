---
id: lem-author-e0b0bf18ed2b-omega-replacement-comparison
kind: lemma
title: Omega replacement preserves sequential stable groups
status: draft
domain: mathematics
deps:
  - lem-author-e0b0bf18ed2b-spectra-tail-invariance
  - thm-author-e0b0bf18ed2b-simplicial-omega-replacement-input
dependency_roles:
  lem-author-e0b0bf18ed2b-spectra-tail-invariance: mathematical-premise
  thm-author-e0b0bf18ed2b-simplicial-omega-replacement-input: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct-proof
dependency_level: 1
---

## Statement
Let $X$ be a level-Kan sequential pointed simplicial prespectrum with sphere-first structure maps $K\wedge X_n\to X_{n+1}$, $K=\Delta^1/\partial\Delta^1$. For the replacement $QX$ of the simplicial Omega replacement input, the natural map $G_k(X)\to G_k(QX)$ is an isomorphism for every integer $k$. More precisely, for $i+k\geq2$ there is a natural isomorphism $\pi_{i+k}((QX)_i)\cong G_k(X)$, compatible with advancement in $i$.

## Statement references

[[thm-author-e0b0bf18ed2b-simplicial-omega-replacement-input]]

## Facts & Assumptions
**Given:** $X$, $k$ and $i$ as in the Statement.

**Goal:** Compute the stable groups of the imported Omega replacement.

[F1] [[thm-author-e0b0bf18ed2b-simplicial-omega-replacement-input]] gives $(QX)_i=\operatorname{colim}_m\Omega^mX_{i+m}$, its structure maps, and $\iota_{RX}=R\iota_X$.

[F2] [[lem-author-e0b0bf18ed2b-spectra-tail-invariance]] identifies a sequential colimit with any cofinal finite tail.

## Proof
1.1 A filtered colimit of Kan simplicial sets is Kan: a horn has finitely many simplices, so a map from it factors through a stage and a filler there gives a filler in the colimit. Homotopy groups commute with this colimit because representatives use finite simplicial spheres and homotopies use their finite products with $\Delta^1$. Such maps and homotopies factor through stages, and equalities between finitely many simplices occur at a common later stage. The group operation is preserved by functoriality. [given, construct]

2.1 By step 1.1 and iterated loop–suspension adjunction, $\pi_{i+k}((QX)_i)\cong\operatorname{colim}_m\pi_{i+k+m}(X_{i+m})=G_k(X)$. Under $[A,\Omega B]\cong[K\wedge A,B]$, each new loop coordinate is inserted on the left. Consequently the transition $\Omega^m\iota$ adds the new inner loop coordinate on the left and corresponds exactly to suspension with $K$ first followed by the structure map. The last equality uses the cofinal tail. [F1, F2, step 1.1]

3.1 The map $X_i\to(QX)_i$ inserts the $m=0$ term. By $\iota_{RX}=R\iota_X$, the adjoint structure maps of $QX$ identify advancement in $i$ with the same transition in the colimit of step 2.1. Thus these isomorphisms are compatible in $i$, and the map $G_k(X)\to G_k(QX)$ becomes the identity under them. This proves both assertions. [F1, F2, step 2.1] ∎
