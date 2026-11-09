---
title: Derived finite coefficients and the Bockstein sequence
status: draft
research_item: lem-derived-coefficient-exact-sequence
dependency_level: 0
---

PDF p. 6: Multiplication by p sequence

## Prerequisites

- [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)
- [math:def-annihilator-and-torsion-of-a-module](https://alphabetamath.cc/item/def-annihilator-and-torsion-of-a-module)

## Statement
Let $C$ be a cochain complex of abelian groups, let $n$ be a positive integer, and write $C/n$ for the mapping cone of multiplication by $n$ on $C$. Then $C/n$ represents the derived tensor product $C\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z/n$, and for every integer $m$ there is a natural short exact sequence
$$0\longrightarrow H^m(C)/nH^m(C)\longrightarrow H^m(C/n)\longrightarrow H^{m+1}(C)[n]\longrightarrow0,$$
where $H^{m+1}(C)[n]=\{a:n a=0\}$. In particular, if $H^m(C/p)=0$ for a prime $p$, multiplication by $p$ is injective on $H^{m+1}(C)$.

## Statement references

[math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)

[math:def-annihilator-and-torsion-of-a-module](https://alphabetamath.cc/item/def-annihilator-and-torsion-of-a-module)

## Facts & Assumptions

[F1] In the cochain cone convention of [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category), $\operatorname{Cone}(n)^m=C^m\oplus C^{m+1}$ with differential $(y,x)\mapsto(dy+nx,-dx)$.

[F2] The notation $M[n]$ denotes the subgroup annihilated by $n$, as in [math:def-annihilator-and-torsion-of-a-module](https://alphabetamath.cc/item/def-annihilator-and-torsion-of-a-module).

## Proof

**Given:** A cochain complex $C$ of abelian groups, a positive integer $n$, and an integer $m$.

**Goal:** Identify the cone with the derived tensor product and prove the displayed exact sequence and its prime-torsion consequence.

1.1 Let $P$ be the complex $\mathbb Z\xrightarrow{n}\mathbb Z$ in degrees $-1$ and $0$. Its augmentation to $\mathbb Z/n$ is a quasi-isomorphism because multiplication by $n$ on $\mathbb Z$ is injective and has cokernel $\mathbb Z/n$. For any complex $A$, the total complex $A\otimes P$ is isomorphic to $\operatorname{Cone}(n:A\to A)$: in degree $m$ send the cone pair $(y,x)$ to $(y,(-1)^{m+1}x)$. The cone sits in a degreewise split short exact sequence $0\to A\to\operatorname{Cone}(n)\to A[1]\to0$. The resulting cohomology exact sequence, obtained by lifting cocycles and taking their differentials, shows that this cone is acyclic whenever $A$ is acyclic. Thus $P$ is K-flat: tensoring it with an acyclic complex gives an acyclic complex. Consequently this free resolution computes the derived tensor product with $\mathbb Z/n$, and the displayed isomorphism identifies it with $C/n$. [given, F1, construct]

2.1 The inclusion $C\to\operatorname{Cone}(n)$ sends $y$ to $(y,0)$, and projection to the second coordinate sends a cone cocycle $(y,x)$ to the class of $x$ in $H^{m+1}(C)$. These maps are well defined on cohomology: the cone cocycle equations are $dx=0$ and $dy=-nx$, and a cone boundary changes $x$ by a boundary. The kernel of the first map on $H^m(C)$ is $nH^m(C)$: if $(y,0)=d(v,u)$, then $du=0$ and $y=dv+nu$; the converse follows from $d(0,u)=(nu,0)$ for a cocycle $u$. A class in the kernel of the projection has a representative with $x=0$ after subtracting a cone boundary, so comes from $H^m(C)$. Finally, the image of the projection is precisely $H^{m+1}(C)[n]$: the cocycle equation gives $n[x]=0$, and conversely if $nx=-dy$ for a cocycle $x$, then $(y,x)$ is a cone cocycle. This proves the short exact sequence. If $H^m(C/p)=0$, its surjection onto $H^{m+1}(C)[p]$ makes that subgroup zero, which is exactly injectivity of multiplication by $p$. [given, F1, F2, step 1.1, algebra] ∎
