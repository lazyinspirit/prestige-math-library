---
title: Pointwise kernels of abelian sheaves
status: published
research_item: lem-author-a44f2061570d-kernel-sheaf
dependency_level: 6
---

PDF p. 4: Derived Nisnevich and cdh sections

## Prerequisites

- [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)
- [lem-author-a44f2061570d-matching-groups](item-lem-author-a44f2061570d-matching-groups)
- [math:def-natural-transformation](https://alphabetamath.cc/item/def-natural-transformation)
- [math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism)


## Statement
For a morphism $f:F\to G$ of abelian sheaves on a small site, the presheaf $K(U)=\ker(F(U)\to G(U))$ is a sheaf and is the categorical kernel of $f$ among abelian sheaves. A morphism of abelian sheaves is a natural transformation whose components are group homomorphisms.

## Statement references
[def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)

[lem-author-a44f2061570d-matching-groups](item-lem-author-a44f2061570d-matching-groups)

[math:def-natural-transformation](https://alphabetamath.cc/item/def-natural-transformation)

[math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism)

## Facts & Assumptions

**Given:** A small site and a morphism $f:F\to G$ of abelian sheaves.

**Goal:** Establish the sheaf and kernel properties of the pointwise kernel $K$.

[F1] Covering-sieve matching families of an abelian sheaf have unique amalgamations. Abelian presheaves have abelian group values and restriction homomorphisms, with contravariant identity and composition laws. [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification) [lem-author-a44f2061570d-matching-groups](item-lem-author-a44f2061570d-matching-groups)

[F2] For the component $f_U:F(U)\to G(U)$, the group kernel is $\ker f_U=\{s\in F(U)\mid f_U(s)=0\}$. For an arrow $u:V\to U$, naturality is $G(u)\circ f_U=f_V\circ F(u)$. [math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism) [math:def-natural-transformation](https://alphabetamath.cc/item/def-natural-transformation)

**Kernel convention:** Morphisms of abelian sheaves have componentwise composition and identity maps; the zero morphism has every component zero. To say that $i:K\to F$ is a categorical kernel of $f$ means that $f\circ i=0$ and, for every abelian sheaf $H$ and morphism $h:H\to F$ with $f\circ h=0$, there is a unique sheaf morphism $q:H\to K$ with $i\circ q=h$.

## Proof

**Proof technique:** Restrict to the pointwise kernels, glue in the source sheaf, and use uniqueness in the target sheaf.

1.1 Each $K(U)=\ker f_U$ is an abelian group with the operations inherited from $F(U)$: additivity gives $f_U(0)=0$ by cancellation and then $f_U(-x)=-f_U(x)$, so zero, sums and negatives stay in the kernel. For $u:V\to U$, naturality gives $f_V(F(u)(s))=G(u)(f_U(s))=0$ when $s\in K(U)$. Thus $K(u)=F(u)|_{K(U)}$ is a homomorphism to $K(V)$, and the presheaf identity and composition laws are inherited from $F$. Now a matching family in $K$ on a covering sieve of $U$ glues uniquely to $s\in F(U)$ by [F1]. By naturality, $f_U(s)$ restricts to zero on that sieve. Uniqueness of amalgamation in $G$ gives $f_U(s)=0$, so $s\in K(U)$; uniqueness in $F$ also gives uniqueness in $K$. Hence $K$ is a sheaf. [F1, F2, given, construct, algebra]

2.1 The inclusions $i_U:K(U)\to F(U)$ are homomorphisms and commute with restrictions by construction, so they define a sheaf morphism $i:K\to F$ with $f\circ i=0$. If $h:H\to F$ is a sheaf morphism with $f\circ h=0$, define $q_U:H(U)\to K(U)$ by $q_U(t)=h_U(t)$, viewed in the kernel. This is well-defined because $f_U(h_U(t))=0$, and is a homomorphism because $h_U$ is. For $u:V\to U$, naturality of $h$ gives $K(u)(q_U(t))=F(u)(h_U(t))=h_V(H(u)(t))=q_V(H(u)(t))$, so the $q_U$ form a sheaf morphism $q$. The equation $i\circ q=h$ holds componentwise, and injectivity of each inclusion $i_U$ forces uniqueness of each $q_U$, hence of $q$. This proves the categorical kernel property in the stated convention. [F2, step 1.1, construct] ∎
