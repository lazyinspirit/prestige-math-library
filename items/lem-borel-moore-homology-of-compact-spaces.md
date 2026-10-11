---
id: lem-borel-moore-homology-of-compact-spaces
kind: lemma
title: "Borel-Moore and ordinary homology agree for compact spaces"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 1
deps: [def-borel-moore-homology,
       def-singular-simplex-and-singular-chain-group-with-coefficients,
       def-singular-chain-complex-and-singular-homology, def-compact-space,
       def-continuous-map-top, thm-compact-subset-of-a-hausdorff-space-is-closed,
       thm-closed-subspace-of-a-compact-space-is-compact]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mark Goresky, Lecture Notes on Sheaves and Perverse Sheaves, version of June 26, 2026"
      url: "https://www.math.ias.edu/~goresky/pdf/all2.pdf"
      locator: "5.3: for a paracompact (in particular a compact Hausdorff) space one restricts to sums that are locally finite, which on a compact space have finite support"
---

## Statement

Let $X$ be a compact Hausdorff topological space and let $R$ be a commutative
ring. The inclusion of the ordinary singular chain complex into the complex of
locally finite chains of [[def-borel-moore-homology]] is an isomorphism of chain
complexes, and it induces isomorphisms
$$H_k^{\mathrm{BM}}(X;R)\xrightarrow{\ \cong\ }H_k^{\mathrm{sing}}(X;R)$$
in every degree, natural for continuous maps of compact Hausdorff spaces
([[def-singular-chain-complex-and-singular-homology]]). In particular the class
map of a proper complex algebraic variety may be computed using ordinary
singular homology.

## Facts & Assumptions

**Given:** A compact Hausdorff space $X$, a commutative ring $R$, and the locally finite chain complex of [[def-borel-moore-homology]].

[F1] [[def-borel-moore-homology]]: $C_k^{\mathrm{BM}}(X;R)$ consists of formal sums $\sum_\sigma a_\sigma\sigma$ over continuous $k$-simplices such that every point of $X$ has an open neighbourhood meeting only finitely many images of the simplices with nonzero coefficient; the boundary is coefficientwise; ordinary singular chains are the sums with finite support, and a proper continuous map induces a pushforward on locally finite chains.

[F2] [[def-compact-space]] and [[def-continuous-map-top]]: a space is compact when every open cover has a finite subcover, and continuity makes preimages of open sets open. By [[thm-compact-subset-of-a-hausdorff-space-is-closed]] a compact subset of a Hausdorff space is closed, and by [[thm-closed-subspace-of-a-compact-space-is-compact]] a closed subspace of a compact space is compact.

## Proof

1.1 Every ordinary singular chain is locally finite: a sum with finite support has only finitely many distinct images, so any neighbourhood of any point meets at most those finitely many images. The inclusion $C_k(X;R)\hookrightarrow C_k^{\mathrm{BM}}(X;R)$ is therefore defined, commutes with the coefficientwise boundary, and is injective. [F1, algebra]

1.2 Conversely let $c=\sum_\sigma a_\sigma\sigma$ be locally finite on the compact $X$. Local finiteness provides an open cover of $X$ by neighbourhoods $U$ each of which meets only finitely many images of simplices with nonzero coefficient; by compactness [F2] finitely many such neighbourhoods $U_1,\dots,U_m$ cover $X$. If $\sigma$ has $a_\sigma\ne0$, then its image is nonempty, so it meets some $U_j$, and for each $j$ only finitely many such $\sigma$ meet $U_j$; hence only finitely many coefficients are nonzero and $c$ lies in the image of the inclusion. [F1, F2, algebra]

2.1 By steps 1.1 and 1.2 the inclusion is a bijection on every chain group, hence an isomorphism of chain complexes; it induces isomorphisms on homology. For a continuous map $f:X\to Y$ of compact Hausdorff spaces, for every compact $K\subseteq Y$, Hausdorffness makes $K$ closed, continuity makes $f^{-1}(K)$ closed in the compact $X$, and this preimage is therefore compact by [F2]. Thus $f$ is proper, and the pushforward $f_*$ of [F1] restricts on finite chains to the ordinary singular chain map, so the isomorphisms are natural. No choice principle was used. [F1, F2, step 1.1, step 1.2, algebra] ∎
