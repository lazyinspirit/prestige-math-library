---
id: lem-author-89250b1d710c-face-coordinate-geometry
kind: lemma
title: Coordinate faces of the algebraic simplex
status: published
domain: mathematics
deps:
  - math:def-scheme-over-base
  - math:def-affine-open-subscheme
  - math:def-polynomial-ring-on-a-family-of-indeterminates
  - math:def-fibre-product-schemes-universal-property
  - math:thm-affine-fibre-product-tensor-ring
  - math:thm-affine-closed-immersions-quotient-rings
  - math:thm-universal-property-of-a-polynomial-ring-on-a-family
  - math:thm-quotient-ring-universal-property
  - math:thm-coproduct-property-of-tensor-products-of-commutative-algebras
  - math:thm-affine-scheme-ring-anti-equivalence
dependency_roles:
  math:def-scheme-over-base: mathematical-premise
  math:def-affine-open-subscheme: mathematical-premise
  math:def-polynomial-ring-on-a-family-of-indeterminates: mathematical-premise
  math:def-fibre-product-schemes-universal-property: mathematical-premise
  math:thm-affine-fibre-product-tensor-ring: mathematical-premise
  math:thm-affine-closed-immersions-quotient-rings: mathematical-premise
  math:thm-universal-property-of-a-polynomial-ring-on-a-family: mathematical-premise
  math:thm-quotient-ring-universal-property: mathematical-premise
  math:thm-coproduct-property-of-tensor-products-of-commutative-algebras: mathematical-premise
  math:thm-affine-scheme-ring-anti-equivalence: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 0
---

## Statement
Let $k$ be a field, $n\geq0$, $A_n=k[t_0,\ldots,t_n]/(\sum_{a=0}^n t_a-1)$, $\Delta^n=\operatorname{Spec}A_n$, and $X$ a $k$-scheme, meaning a scheme equipped with a morphism to $\operatorname{Spec}k$. For $I\subseteq\{0,\ldots,n\}$, let $J_I=(t_i:i\in I)\subseteq A_n$ and define the coordinate face as the closed subscheme $F_I=\operatorname{Spec}(A_n/J_I)\hookrightarrow\Delta^n$ induced by the quotient homomorphism. If $I$ is proper, $F_I$ is canonically $\Delta^{n-|I|}$ after putting the remaining coordinates in increasing order.

Products here are fibre products over $\operatorname{Spec}k$. For every nonempty affine open subscheme $U=\operatorname{Spec}B\subseteq X$, the coordinate ring of $U\times_k\Delta^n$ is canonically $R_{B,n}=B[t_0,\ldots,t_n]/(\sum_{a=0}^n t_a-1)$, and $U\times_k F_I$ is the closed subscheme obtained by quotienting $R_{B,n}$ by $(t_i:i\in I)$. For proper $I$, these coordinates form a regular sequence in $R_{B,n}$ in every order: multiplication by each coordinate is injective after quotienting by its predecessors, and the final quotient is nonzero. The empty sequence is allowed. Imposing all $n+1$ coordinates gives the empty scheme, both in $\Delta^n$ and after this affine base change.

For $n\geq1$ and $0\leq i\leq n$, define $\delta_i^n:\Delta^{n-1}\to\Delta^n$ by the $k$-algebra homomorphism $A_n\to A_{n-1}$ sending $t_a$ to $u_a$ for $a<i$, to $0$ for $a=i$, and to $u_{a-1}$ for $a>i$, where $u_0,\ldots,u_{n-1}$ are the target ring's barycentric coordinates. This is the ordered identification with the face $F_{\{i\}}$ followed by its closed immersion. For $n\geq2$ and $0\leq i<j\leq n$, one has $\delta_j^n\circ\delta_i^{n-1}=\delta_i^n\circ\delta_{j-1}^{n-1}$.

## Statement references

[[math:def-scheme-over-base]]

[[math:def-affine-open-subscheme]]

[[math:def-polynomial-ring-on-a-family-of-indeterminates]]

[[math:def-fibre-product-schemes-universal-property]]

[[math:thm-affine-fibre-product-tensor-ring]]

[[math:thm-affine-closed-immersions-quotient-rings]]

[[math:thm-affine-scheme-ring-anti-equivalence]]

## Facts & Assumptions

**Given:** The field $k$, integer $n$, $k$-scheme $X$, coordinate algebras and index sets in the Statement. No noetherian, reducedness, smoothness or separatedness assumption is imposed on $X$.

**Goal:** Establish the quotient face descriptions, affine product rings, regular sequences and coordinate identities, including empty and zero-dimensional cases.

[F1] A $k$-scheme has a structure morphism to $\operatorname{Spec}k$; an affine open carries the restricted structure sheaf. Polynomial rings consist of finite coefficient families on monomials, so their equality is coefficientwise. [[math:def-scheme-over-base]] [[math:def-affine-open-subscheme]] [[math:def-polynomial-ring-on-a-family-of-indeterminates]]

[F2] The notation $Y\times_k Z$ means the scheme fibre product. For affine factors $\operatorname{Spec}B$ and $\operatorname{Spec}C$ over $\operatorname{Spec}k$, its ring is $B\otimes_k C$, with the canonical projections. [[math:def-fibre-product-schemes-universal-property]] [[math:thm-affine-fibre-product-tensor-ring]]

[F3] A quotient map $R\to R/J$ induces the closed immersion $\operatorname{Spec}(R/J)\to\operatorname{Spec}R$; for $J=R$ this is the empty scheme. Only this quotient-to-closed-immersion direction is used here. [[math:thm-affine-closed-immersions-quotient-rings]]

[F4] Coefficient homomorphisms and assigned variable values extend uniquely to polynomial homomorphisms; a homomorphism killing an ideal factors uniquely through its quotient. Compatible $k$-algebra maps from two algebras extend uniquely from their tensor product. [[math:thm-universal-property-of-a-polynomial-ring-on-a-family]] [[math:thm-quotient-ring-universal-property]] [[math:thm-coproduct-property-of-tensor-products-of-commutative-algebras]]

[F5] The spectrum construction is a contravariant equivalence between commutative rings and affine schemes. Thus inverse ring maps give inverse scheme maps, and equal coordinate homomorphisms give equal affine scheme morphisms. [[math:thm-affine-scheme-ring-anti-equivalence]]

## Proof

1.1 Fix $U=\operatorname{Spec}B\subseteq X$. By [F2] its product with $\Delta^n$ is the spectrum of $B\otimes_k A_n$. There is a homomorphism from this tensor product to $R_{B,n}$ sending $b\otimes1$ to $b$ and $1\otimes t_a$ to $t_a$, by [F4]. Conversely, send the coefficients $b$ to $b\otimes1$ and each variable to $1\otimes t_a$. The sum relation maps to zero, so [F4] gives a homomorphism $R_{B,n}\to B\otimes_k A_n$. The composites fix the coefficients and all coordinate images, and are identities by the uniqueness assertions in [F4]. Repeating these maps with $t_i=0$ for $i\in I$ identifies $B\otimes_k(A_n/J_I)$ with $R_{B,n}/(t_i:i\in I)$, compatibly with the quotient maps. Consequently [F3] and [F5] give exactly the asserted affine base change and closed face structures. [F2, F3, F4, F5, construct]

2.1 Suppose $I$ is proper and choose one $b\in\{0,\ldots,n\}\setminus I$. The substitutions $t_b=1-\sum_{a\ne b}t_a$ and $t_a\mapsto t_a$ for $a\ne b$ define inverse homomorphisms $R_{B,n}\cong B[t_a:a\ne b]$: [F4] makes the substitution well defined, and each composite fixes every coefficient and coordinate class. Quotienting by the variables in $I$ therefore leaves $B[t_a:a\notin I,\ a\ne b]$, a polynomial ring on $n-|I|$ variables. For $B=k$, the quotient $A_n/J_I$ is equally the ring with the remaining barycentric coordinates and their single sum-one relation. Relabelling these remaining coordinates in increasing order and using [F5] proves the canonical face isomorphism, independently of the auxiliary eliminated coordinate $b$. For nonempty $U$, $B\ne0$, since the zero ring has no proper prime ideals and hence empty spectrum. Multiplication by any indeterminate is injective by [F1]: it shifts each exponent in a finite coefficient family, so a zero product has all coefficients zero. In any chosen ordering of $I$, quotienting by preceding variables leaves a polynomial ring in the remaining variables, with constants $B$ embedded. Thus all successive multiplications are injective and the final quotient is nonzero, including when $I$ is empty or $n=0$. If $I$ contains every coordinate, the sum-one relation gives $0=1$, so the quotient is the zero ring and [F3] gives the empty scheme. [F1, F3, F4, F5, step 1.1, choose, algebra]

3.1 Each homomorphism defining $\delta_i^n$ exists by [F4], because its substituted coordinates still sum to one; it factors through $A_n/(t_i)$ and identifies that quotient with $A_{n-1}$ by step 2.1. This proves the claimed ordered closed face description by [F3] and [F5]. For $i<j$, both composites insert zero into positions $i$ and $j$: inserting at $i$ and then at $j$ gives the left composite, while inserting at $j-1$ and then at $i$ gives the right composite, as the earlier insertion shifts all subsequent positions by one. In both cases all other coordinates retain their increasing order. Hence the two composite coordinate homomorphisms agree on $k$ and every barycentric coordinate, and [F4] makes them equal. By [F5] the affine scheme morphisms are equal, proving the identity. [F3, F4, F5, step 2.1, construct, algebra] ∎
