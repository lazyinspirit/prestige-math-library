---
title: Cofiber of a direct-summand inclusion
status: published
research_item: lem-author-9f61e4df2141-split-spectral-cofiber
dependency_level: 4
---

## Prerequisites

- [def-stable-spectra-interface](item-def-stable-spectra-interface)


## Statement
For spectra $A$ and $B$, the cofiber of the canonical inclusion $A\to A\oplus B$ is naturally equivalent to $B$. Under this equivalence the cofiber map is the projection $A\oplus B\to B$, and the connecting map $B\to A[1]$ is zero. Here $\oplus$ denotes the finite coproduct, which is also a product in the stable category.

## Facts & Assumptions
**Given:** Spectra $A$ and $B$ and their canonical inclusion and projection.

**Goal:** Identify the cofiber sequence and its connecting map.

[F1] [def-stable-spectra-interface](item-def-stable-spectra-interface) supplies the stable category of spectra, zero object, cofibers, and suspension.

## Proof
1.1 The pushout defining $\operatorname{cofib}(A\to A\oplus B)$ is $(A\oplus B)\amalg_A0$. By the universal property of coproducts and the zero object, maps from this pushout to any spectrum are naturally maps from $B$; hence the pushout is naturally $B$, with cofiber map the projection. [F1, given, construct]

2.1 The projection has the canonical section $B\to A\oplus B$. In the cofiber triangle, the composite of consecutive maps is zero, so the connecting map composed with this projection is zero. Composing with the section shows that the connecting map itself is zero. [F1, step 1.1] ∎
