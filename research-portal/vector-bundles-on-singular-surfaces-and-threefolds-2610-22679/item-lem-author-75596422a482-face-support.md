---
title: Face boundaries preserve closed support
status: published
research_item: lem-author-75596422a482-face-support
dependency_level: 5
---

PDF p. 13: Supported Chow group

## Prerequisites

- [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume the Axiom of Choice, retaining the foundational premise of the specified Bloch cycle construction.

Let $k$ be a field, $U$ a smooth finite-type $k$-scheme, $T\subseteq |U|$ a closed subset, and $r\geq0$. For $n\geq0$ let $p_n:U\times\Delta^n\to U$ be projection. In Bloch's complex $z^r(U,\bullet)$, the free subgroup generated in degree $n$ by admissible integral cycles with underlying support contained in $p_n^{-1}(T)$ is preserved by the boundary. No scheme structure on $T$ is needed.

## Statement references
[def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

## Facts & Assumptions
**Given:** $k,U,T,r$ as stated.

**Goal:** Show that the boundary of each supported generator remains supported.

[F1] Bloch's boundary is the alternating sum of its admissible face intersections. [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

[A1] The specified Bloch complex and its admissible face construction are used under their stated Axiom of Choice. This premise is inherited from that construction; the subsequent calculation does not assert that Choice is necessary for its formal algebraic conclusion. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Proof
1.1 For a supported generator $W$, every component occurring in a face intersection has underlying support in $|W|\cap |U\times\{t_i=0\}|$. Under the face identification its projection to $U$ still has image in $T$, so its support is contained in $p_{n-1}^{-1}(T)$. [A1, given, F1]

2.1 The coefficients in the face intersections are integers and the boundary is their alternating sum, so linearity gives the asserted preservation in every degree; degree zero has zero boundary. [F1, step 1.1] ∎
