---
title: Cohomology of an integer shift
status: published
research_item: lem-author-80e2d7bee57f-shift-cohomology
dependency_level: 0
---

PDF p. 4: Shift [2j] in equation (2.1)

## Prerequisites

- [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)
- [math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category)
- [math:def-cohomology-object-of-a-cochain-complex](https://alphabetamath.cc/item/def-cohomology-object-of-a-cochain-complex)
- [math:def-cochain-map](https://alphabetamath.cc/item/def-cochain-map)


## Statement
For a cochain complex $C$ of abelian groups and integers $q,k$, the convention $C[k]^q=C^{q+k}$ and $d_{C[k]}^q=(-1)^k d_C^{q+k}$ gives a natural isomorphism $H^q(C[k])\cong H^{q+k}(C)$.

## Facts & Assumptions
**Given:** $C$, $q$, and $k$ as stated.

**Goal:** Compare the indicated cohomology groups.

[F1] [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category) specifies the cochain shift and its sign.

[F2] [math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category) supplies the cochain-complex relation $d_C^{n+1}d_C^n=0$ in every integer degree $n$.

[F3] [math:def-cohomology-object-of-a-cochain-complex](https://alphabetamath.cc/item/def-cohomology-object-of-a-cochain-complex) defines the cycles $Z^n(C)=\ker d_C^n$, boundaries $B^n(C)=\operatorname{im}d_C^{n-1}$, and cohomology $H^n(C)=Z^n(C)/B^n(C)$.

[F4] [math:def-cochain-map](https://alphabetamath.cc/item/def-cochain-map) defines a cochain map $f:C\to D$ by degreewise homomorphisms $f^n$ satisfying $d_D^nf^n=f^{n+1}d_C^n$.

## Proof
1.1 The composite of consecutive shifted differentials is $(-1)^{2k}d_C^{q+k+1}d_C^{q+k}=0$, so the shift is a cochain complex. Multiplication of a homomorphism by $(-1)^k$ changes neither its kernel nor its image, since multiplication by this sign is its own inverse. Hence $Z^q(C[k])=Z^{q+k}(C)$ and $B^q(C[k])=B^{q+k}(C)$ as subgroups of $C^{q+k}$. [F1, F2, F3, given]

2.1 By the cohomology quotient definition, the identity of these common quotients is the required isomorphism $H^q(C[k])\cong H^{q+k}(C)$. For a cochain map $f:C\to D$, set $f[k]^q=f^{q+k}$. Its cochain-map identity follows by multiplying the original identity by $(-1)^k$. That identity also shows that $f^{q+k}$ sends cycles to cycles and boundaries to boundaries, so it induces the cohomology maps. Both routes in the naturality square send $[x]$ to $[f^{q+k}(x)]$, proving naturality. [F1, F3, F4, step 1.1] ∎
