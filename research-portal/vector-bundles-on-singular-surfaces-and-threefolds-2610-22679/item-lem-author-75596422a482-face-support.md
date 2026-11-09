---
title: Face boundaries preserve closed support
status: published
research_item: lem-author-75596422a482-face-support
dependency_level: 4
---

PDF p. 13: Supported Chow group

## Prerequisites

- [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

## Statement
Let $k$ be a field, $U$ a smooth finite-type $k$-scheme, $T\subset U$ closed, and $r\geq0$. In Bloch's complex $z^r(U,\bullet)$, the free subgroup generated in each degree $n$ by admissible integral cycles contained in $T\times\Delta^n$ is preserved by the boundary.

## Statement references

[def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

## Facts & Assumptions

**Given:** $k,U,T,r$ as stated.

**Goal:** Show that the boundary of each supported generator remains supported.

[F1] Bloch's boundary is the alternating sum of its admissible face intersections. [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

## Proof

1.1 For a supported generator $W$, every component occurring in a face intersection is contained in $W\cap(U\times\{t_i=0\})$, hence in $T\times\Delta^{n-1}$ under the face identification. [given, F1]

2.1 The coefficients in the face intersections are integers and the boundary is their alternating sum, so linearity gives the asserted preservation in every degree; degree zero has zero boundary. [F1, step 1.1] ∎
