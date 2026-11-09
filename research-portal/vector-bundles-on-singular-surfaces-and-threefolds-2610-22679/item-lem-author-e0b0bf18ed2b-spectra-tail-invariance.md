---
title: Cofinal tails and level invariance of stable groups
status: published
research_item: lem-author-e0b0bf18ed2b-spectra-tail-invariance
dependency_level: 0
---

PDF p. 3: Filtered S1 spectra: stable enhancement prerequisites

## Prerequisites

- [math:def-stable-homotopy-groups-of-a-sequential-prespectrum](https://alphabetamath.cc/item/def-stable-homotopy-groups-of-a-sequential-prespectrum)

## Statement
For a sequential prespectrum $E$ and integer $k$, write $G_k(E)$ for the sequential colimit of the groups $\pi_{n+k}(E_n)$, starting at any $N$ with $n+k\geq2$ for $n\geq N$ and using the sphere-first bonding maps of the published definition. Increasing $N$ gives a canonical isomorphism. A compatible level map inducing an isomorphism on every stage group induces an isomorphism on $G_k$. The same assertions hold for pointed simplicial prespectra, with simplicial spheres and suspension in the same order.

## Facts & Assumptions
**Given:** $k$, the specified sequential system and, for the second assertion, compatible stage isomorphisms.

**Goal:** Prove cutoff independence and level invariance.

[F1] [math:def-stable-homotopy-groups-of-a-sequential-prespectrum](https://alphabetamath.cc/item/def-stable-homotopy-groups-of-a-sequential-prespectrum) defines the groups, bonding maps and their sequential colimit by representatives and eventual equality.

## Proof
1.1 For $N'\geq N$, send a representative at stage $n$ to its image at any stage at least $\max(n,N')$. Any two choices agree after further advancement; eventual equality is preserved. This defines a homomorphism from the original colimit to the tail colimit. Composing in either order with the map induced by inclusion of the tail fixes every representative after advancement to a common stage. Thus the maps are inverse. [F1, given]

2.1 A compatible family $f_n$ of stage isomorphisms induces a map on representatives. Its inverses are compatible because $f_{n+1}b_n=b'_n f_n$, so they induce its inverse on colimits. This argument uses only sequential systems of groups and applies equally to the simplicial systems. Both assertions follow. [F1, step 1.1, given] ∎
