---
id: lem-author-89250b1d710c-cartier-face-length
kind: lemma
title: Length multiplicity for one proper Cartier face
status: published
domain: mathematics
deps:
  - math:def-composition-series-and-length-of-a-module
  - math:def-tor-by-resolving-the-right-module
  - math:def-local-ring
  - math:def-noetherian-ring
  - math:def-noetherian-module
  - math:def-prime-and-maximal-ideals
  - math:def-radical-of-an-ideal
  - math:def-zero-divisor-and-integral-domain
  - math:def-quotient-ring
  - math:def-sum-and-product-of-ideals
  - math:thm-unit-isomorphisms-for-module-tensor-products
  - math:lem-hh-finite-spanning-list-contains-a-basis
  - math:thm-commutative-ring-module-structure-on-a-tensor-product
  - math:def-generated-cyclic-finitely-generated-and-free-modules
  - math:def-projective-resolution-in-an-abelian-category
  - math:def-simple-module
  - math:def-linear-basis
  - math:def-left-and-right-modules
  - math:def-submodule
  - math:def-quotient-module
  - math:def-module-homomorphism-kernel-image-and-cokernel
  - math:def-tensor-product-of-modules-by-generators-and-relations
dependency_roles:
  math:def-composition-series-and-length-of-a-module: mathematical-premise
  math:def-tor-by-resolving-the-right-module: mathematical-premise
  math:def-local-ring: mathematical-premise
  math:def-noetherian-ring: mathematical-premise
  math:def-noetherian-module: mathematical-premise
  math:def-prime-and-maximal-ideals: mathematical-premise
  math:def-radical-of-an-ideal: mathematical-premise
  math:def-zero-divisor-and-integral-domain: mathematical-premise
  math:def-quotient-ring: mathematical-premise
  math:def-sum-and-product-of-ideals: mathematical-premise
  math:thm-unit-isomorphisms-for-module-tensor-products: mathematical-premise
  math:lem-hh-finite-spanning-list-contains-a-basis: mathematical-premise
  math:thm-commutative-ring-module-structure-on-a-tensor-product: mathematical-premise
  math:def-generated-cyclic-finitely-generated-and-free-modules: mathematical-premise
  math:def-projective-resolution-in-an-abelian-category: mathematical-premise
  math:def-simple-module: mathematical-premise
  math:def-linear-basis: mathematical-premise
  math:def-left-and-right-modules: mathematical-premise
  math:def-submodule: mathematical-premise
  math:def-quotient-module: mathematical-premise
  math:def-module-homomorphism-kernel-image-and-cokernel: mathematical-premise
  math:def-tensor-product-of-modules-by-generators-and-relations: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 0
---

## Statement
Let $(A,\mathfrak m)$ be a noetherian commutative local ring, $t\in\mathfrak m$ a nonzerodivisor on $A$, and $I$ a prime ideal with $t\notin I$ and $\sqrt{I+(t)}=\mathfrak m$. Put $M=A/I$. For the free resolution $Q=(0\to A\xrightarrow{t}A\to0)$ of $A/(t)$, the homology of $Q\otimes_A M$ is $A/(I,t)$ in degree zero and zero in positive degrees. The nonzero module $A/(I,t)$ has finite length. Hence the alternating sum of these homology lengths is $\ell_A(A/(I,t))$. This length is unchanged by an isomorphism of local rings carrying the ideals to their counterparts, or by replacing $t$ by a unit multiple.

## Facts & Assumptions

**Given:** The ring, element and prime ideal in the Statement.

**Goal:** Compute the specified-resolution Tor groups and their length Euler characteristic.

[F1] A chain complex of modules consists of module homomorphisms $d_n:C_n\to C_{n-1}$ with $d_nd_{n+1}=0$; its homology is $H_n(C)=\ker d_n/\operatorname{im}d_{n+1}$. An augmented projective resolution of $N$ is a complex $\cdots\to P_1\to P_0\to N\to0$ exact at every term, with projective $P_n$; exactness means image equals kernel. In modules, projectivity means that every homomorphism from $P_n$ to the target of a surjective module homomorphism lifts through that surjection. A free resolution has free terms and is a projective resolution once their projectivity is verified. Specified-resolution Tor is $\operatorname{Tor}^{A,Q}_n(N,M)=H_n(Q\otimes_A M)$, retaining the chosen resolution $Q$. [[math:def-projective-resolution-in-an-abelian-category]] [[math:def-tor-by-resolving-the-right-module]] [[math:def-module-homomorphism-kernel-image-and-cokernel]] [[math:def-quotient-module]]

[F2] A simple module is nonzero and has only zero and itself as submodules. A composition series is a finite strict chain of submodules from zero to the module, each successive quotient being simple. Length is the number of these simple factors, independent of the series; the zero module has length zero. [[math:def-simple-module]] [[math:def-composition-series-and-length-of-a-module]]

[F3] A local ring has a unique maximal ideal $\mathfrak m$ and residue field $k=A/\mathfrak m$. The regular module is $A$ with scalar action given by ring multiplication; its submodules are precisely the ideals. A Noetherian ring has Noetherian regular module, meaning every submodule of that regular module is finitely generated. A module is finitely generated when some finite set generates it, meaning every element is a finite linear combination of those generators. Indeed, finite linear combinations form a submodule containing the generators and lie in every submodule containing them. It is free when it has a basis, meaning unique finite linear-combination expressions in its basis elements. Thus every ideal of the commutative ring $A$ is finitely generated. [[math:def-local-ring]] [[math:def-noetherian-ring]] [[math:def-noetherian-module]] [[math:def-generated-cyclic-finitely-generated-and-free-modules]]

[F4] A prime ideal $I$ is proper and satisfies $ab\in I\Rightarrow a\in I$ or $b\in I$. A domain is a nonzero commutative ring in which a product is zero only if a factor is zero. Here a nonzerodivisor on $A$ means an element $t$ for which multiplication $A\xrightarrow{t}A$ is injective; this fixes the convention directly, including at zero. [[math:def-prime-and-maximal-ideals]] [[math:def-zero-divisor-and-integral-domain]]

[F5] The radical is $\sqrt J=\{a\in A:a^e\in J\text{ for some }e\geq1\}$. Ideal sums and products have their usual finite-sum definitions; write $\mathfrak m^0=A$ and $\mathfrak m^{q+1}=\mathfrak m\mathfrak m^q$, and set $(t)=tA=\{at:a\in A\}$ and $J=I+(t)$. Thus $(I,t)$ denotes this same ideal $J$. [[math:def-radical-of-an-ideal]] [[math:def-sum-and-product-of-ideals]]

[F6] For a right $A$-module $U$ and a left $A$-module $V$, the tensor product $U\otimes_A V$ is generated additively by elementary tensors, subject to additivity in each variable and $(ua)\otimes v=u\otimes(av)$. Since $A$ is commutative, its modules can be regarded on either side with the same action, and $U\otimes_A V$ is an $A$-module by $a(u\otimes v)=(au)\otimes v=u\otimes(av)$. The tensor-unit isomorphism $A\otimes_A M\cong M$ sends $a\otimes m$ to $am$, with inverse $m\mapsto1\otimes m$, and respects this $A$-action. Tensoring a complex here means taking these tensor products degree by degree, with differential $d\otimes1$ sending $u\otimes m$ to $d(u)\otimes m$. [[math:def-tensor-product-of-modules-by-generators-and-relations]] [[math:thm-commutative-ring-module-structure-on-a-tensor-product]] [[math:thm-unit-isomorphisms-for-module-tensor-products]]

[F7] A $k$-vector space means a unital module over the field $k$. Finite linear combinations include the empty sum, which is zero. A finite list spans a space if each vector is a $k$-linear combination of its entries. A finite basis is an independent spanning list: a linear combination equal to zero has all coefficients zero. Consequently every vector has unique coefficients in that list, by subtracting two expressions. A finite spanning list contains a finite basis, without any choice principle. [[math:def-linear-basis]] [[math:lem-hh-finite-spanning-list-contains-a-basis]]

[F8] Quotient rings have the coset operations, and $A/K$ is an $A$-module by $a(b+K)=ab+K$ for any ideal $K$. This scalar action is well defined because $K$ is an ideal. [[math:def-quotient-ring]]

[F9] Modules here are unital left modules; in the commutative case the right action is $ma=am$. A submodule is an additive subgroup closed under scalar multiplication. For a submodule $V\subset U$, the quotient module consists of additive cosets, with $a(u+V)=au+V$; this is independent of representatives since $V$ is closed under scalars. A module homomorphism preserves addition and scalar multiplication; its kernel is the set mapped to zero, its image is the set of its values, and its cokernel is the target modulo its image. [[math:def-left-and-right-modules]] [[math:def-submodule]] [[math:def-quotient-module]] [[math:def-module-homomorphism-kernel-image-and-cokernel]]

## Proof

1.1 By the nonzerodivisor convention, multiplication by $t$ is injective on $A$, so the complex $Q$, placed in degrees one and zero and augmented by $A\to A/(t)$, is a free resolution of $A/(t)$. The augmentation is surjective and has kernel $(t)$, exactly the image of multiplication by $t$, so the augmented sequence is exact at each term. Each copy of $A$ is free on $1$ and projective on either side: given a surjection of $A$-modules and a map from $A$ to its target, lifting the image of $1$ determines an $A$-linear lift. The zero terms are also free and projective, with the empty basis and the unique lift. Under the tensor-unit maps, $Q\otimes_A M$ becomes $0\to M\xrightarrow{t}M\to0$: the differential sends $1\otimes m$ to $t\otimes m$, hence $m$ to $tm$. This tensor differential is well defined: multiplication by $t$ is $A$-linear, so its prescription respects additivity and the balancing relations in [F6]. Since $I$ is proper, $A/I$ is nonzero, and primality makes it a domain: a zero product of cosets means $ab\in I$, so one coset is zero. As $t\notin I$, multiplication by its image is injective on $M$. The cokernel $M/tM$ identifies with $A/J$ by sending the class of $a+I$ to $a+J$; the kernel of $A/I\to A/J$ is exactly $tM$. Thus the homology is $A/J$ in degree zero and zero in all positive degrees, which also computes the specified-resolution Tor. [given, F1, F3, F4, F5, F6, F8, F9, algebra]

1.2 By Noetherianity choose generators $x_1,\ldots,x_s$ of $\mathfrak m$. Since $\sqrt J=\mathfrak m$, choose positive $e_a$ with $x_a^{e_a}\in J$. The finite-sum definition of ideal products shows by expansion that $\mathfrak m^N$ is generated by degree-$N$ monomials in the $x_a$. For $N=1+\sum_a(e_a-1)$, every such monomial contains some $x_a^{e_a}$, so $\mathfrak m^N\subset J$. If $s=0$, then $\mathfrak m=0$ and take $N=1$. All selections here are finite. [given, F3, F5, construct, algebra]

2.1 Put $B=A/J$ and $B_q=(\mathfrak m^q+J)/J$ for $0\leq q\leq N$, giving $B=B_0\supseteq\cdots\supseteq B_N=0$. Each $B_q/B_{q+1}$ is generated by the images of a finite generating list of the ideal $\mathfrak m^q$, and multiplication by $\mathfrak m$ kills it. Its $A$-action therefore factors through the field $k=A/\mathfrak m$: define $(a+\mathfrak m)v=av$, independent of the representative since $\mathfrak m$ kills the quotient. The module axioms give the vector-space axioms, and the same finite list spans it over $k$. Choose a finite basis by [F7]. Write the chosen basis as $b_1,\ldots,b_d$ and its prefix spans as $V_j=\operatorname{span}_k(b_1,\ldots,b_j)$. Independence makes $V_j/V_{j-1}$ nonzero, and each of its elements is a unique scalar multiple of $b_j+V_{j-1}$, so this factor is one-dimensional. The inverse images of the $V_j$ under $B_q\to B_q/B_{q+1}$ are submodules between $B_{q+1}$ and $B_q$; their successive quotients identify with $V_j/V_{j-1}$ by the induced coset map, whose kernel and surjectivity follow directly from the inverse-image definition. Every nonzero element of a one-dimensional factor generates it: invert its nonzero coefficient in $k$ and lift the resulting scalar along $A\to k$. Thus its only submodules are zero and itself, as required for simplicity. The case $d=0$ contributes no strict steps. Concatenating these finitely many refinements and deleting repetitions gives a composition series of $B$. Moreover $J\subseteq\sqrt J=\mathfrak m\ne A$, so $B\ne0$. All the homology modules in step 1.1 now have finite length, and their alternating sum is $\ell_A(A/J)$. [given, F2, F3, F5, F7, F8, F9, step 1.1, step 1.2, construct]

3.1 A local-ring isomorphism $\phi:A\to A'$ (a bijection preserving addition, multiplication and identity) carrying $I$ and $(t)$ to their counterparts induces a bijection of the quotient modules compatible with scalar transport. It carries submodules bijectively to submodules and preserves simple factors, so it carries any composition series to a composition series of the same length. Replacing $t$ by $ut$ for a unit $u$ (an element with multiplicative inverse $u^{-1}$) leaves $(t)$, hence $J$, unchanged, since $t=u^{-1}(ut)$. The length is therefore unchanged in both cases, completing the proof. [F2, F5, F8, F9, step 2.1, algebra] ∎
