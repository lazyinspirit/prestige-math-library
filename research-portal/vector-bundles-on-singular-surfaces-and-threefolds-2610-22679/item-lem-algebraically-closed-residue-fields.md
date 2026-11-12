---
title: Residue fields and normalization point degrees
status: published
research_item: lem-algebraically-closed-residue-fields
dependency_level: 0
---

PDF p. 7: Smooth point generator; PDF p. 13: Normalization pushforward

## Prerequisites

- [math:cor-weak-nullstellensatz-algebraically-closed-coordinate-form](https://alphabetamath.cc/item/cor-weak-nullstellensatz-algebraically-closed-coordinate-form)
- [math:thm-chinese-remainder-theorem-for-comaximal-ideals](https://alphabetamath.cc/item/thm-chinese-remainder-theorem-for-comaximal-ideals)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:def-finite-type-and-module-finite-algebras](https://alphabetamath.cc/item/def-finite-type-and-module-finite-algebras)
- [math:def-closed-point-scheme](https://alphabetamath.cc/item/def-closed-point-scheme)
- [math:def-residue-field-scheme-point](https://alphabetamath.cc/item/def-residue-field-scheme-point)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-finite-morphism-schemes](https://alphabetamath.cc/item/def-finite-morphism-schemes)
- [math:def-scheme-theoretic-fibre](https://alphabetamath.cc/item/def-scheme-theoretic-fibre)
- [math:thm-affine-fibre-product-tensor-ring](https://alphabetamath.cc/item/thm-affine-fibre-product-tensor-ring)
- [math:lem-fibre-product-open-restriction](https://alphabetamath.cc/item/lem-fibre-product-open-restriction)
- [math:lem-points-of-fibre-primes-over-point](https://alphabetamath.cc/item/lem-points-of-fibre-primes-over-point)
- [math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes)
- [math:def-extension-degree-and-finite-extension](https://alphabetamath.cc/item/def-extension-degree-and-finite-extension)
- [math:thm-rank-nullity](https://alphabetamath.cc/item/thm-rank-nullity)
- [math:cor-independent-set-is-no-larger-than-a-finite-spanning-set](https://alphabetamath.cc/item/cor-independent-set-is-no-larger-than-a-finite-spanning-set)
- [math:prop-algebraically-closed-splitting-and-finite-extension-criteria](https://alphabetamath.cc/item/prop-algebraically-closed-splitting-and-finite-extension-criteria)
- [math:thm-finite-morphism-integral-closed](https://alphabetamath.cc/item/thm-finite-morphism-integral-closed)
- [math:cor-every-spanning-set-contains-a-basis](https://alphabetamath.cc/item/cor-every-spanning-set-contains-a-basis)
- [math:def-dimension](https://alphabetamath.cc/item/def-dimension)
- [math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field)
- [math:def-tensor-product-of-modules-by-generators-and-relations](https://alphabetamath.cc/item/def-tensor-product-of-modules-by-generators-and-relations)


## Statement
Assume the Axiom of Choice. Let $k$ be an algebraically closed field. Every closed point of a finite-type $k$-scheme has residue field canonically equal to $k$ via its structure map. If $f:Y\to X$ is a finite surjective morphism between finite-type $k$-schemes, then the fiber over each closed point $x\in X$ is a nonempty finite set of closed points of $Y$. Each such point $y$ has residue field $k$, and its zero-cycle pushforward is $f_*[y]=[x]$.

Here a zero-cycle is a finite integral linear combination of closed points. For a finite morphism, the pushforward of a closed point is defined by $f_*[y]=[\kappa(y):\kappa(f(y))][f(y)]$; the field degree is finite. A finite morphism is one whose inverse image of every affine open $\operatorname{Spec}A$ is affine, say $\operatorname{Spec}B$, with $B$ a finite $A$-module. The degree is the dimension of $\kappa(y)$ as a vector space over $\kappa(f(y))$ through the induced residue-field map. The morphism $f$ is not required to commute with the two structure maps to $\operatorname{Spec}k$.

## Statement references
[math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field)

[math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)

[math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)

[math:def-closed-point-scheme](https://alphabetamath.cc/item/def-closed-point-scheme)

[math:def-residue-field-scheme-point](https://alphabetamath.cc/item/def-residue-field-scheme-point)

[math:def-finite-morphism-schemes](https://alphabetamath.cc/item/def-finite-morphism-schemes)

[math:def-scheme-theoretic-fibre](https://alphabetamath.cc/item/def-scheme-theoretic-fibre)

[math:def-extension-degree-and-finite-extension](https://alphabetamath.cc/item/def-extension-degree-and-finite-extension)

[math:def-dimension](https://alphabetamath.cc/item/def-dimension)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Facts & Assumptions

[F1] For algebraically closed $k$, every maximal ideal of $k[t_1,\ldots,t_n]$ is an evaluation ideal and has quotient $k$ via the coefficient map. [math:cor-weak-nullstellensatz-algebraically-closed-coordinate-form](https://alphabetamath.cc/item/cor-weak-nullstellensatz-algebraically-closed-coordinate-form)

[F2] For a finite family of pairwise comaximal ideals, the quotient map to the product of the quotient rings is surjective. [math:thm-chinese-remainder-theorem-for-comaximal-ideals](https://alphabetamath.cc/item/thm-chinese-remainder-theorem-for-comaximal-ideals)

[F3] A $k$-scheme is a scheme equipped with a structure morphism to $\operatorname{Spec}k$; a $k$-morphism commutes with structure morphisms. For a finite-type $k$-scheme, every point has an affine open neighborhood $\operatorname{Spec}A$ with $A$ a finitely generated $k$-algebra, hence $A\cong k[t_1,\ldots,t_n]/I$. We use precisely these neighborhoods, rather than asserting finite generation for an arbitrary affine open. [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base), [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism), [math:def-finite-type-and-module-finite-algebras](https://alphabetamath.cc/item/def-finite-type-and-module-finite-algebras)

[F4] A point is closed if its singleton is closed. Under the assumed Axiom of Choice, closed points in an affine spectrum are exactly maximal ideals. At a prime $\mathfrak p$ of $A$, the residue field is $\kappa(\mathfrak p)=\operatorname{Frac}(A/\mathfrak p)$, in particular $A/\mathfrak p$ when $\mathfrak p$ is maximal. Choice is retained as the hypothesis of the supplied closed-point criterion. [math:def-closed-point-scheme](https://alphabetamath.cc/item/def-closed-point-scheme), [math:def-residue-field-scheme-point](https://alphabetamath.cc/item/def-residue-field-scheme-point), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F5] For a finite morphism and an affine open $U=\operatorname{Spec}A$, the inverse image is $\operatorname{Spec}B$ with $B$ a finite $A$-module. The scheme-theoretic fiber is $Y_x=Y\times_X\operatorname{Spec}\kappa(x)$. Since the residue-field point factors through any open neighborhood $U$ of $x$, restriction of fiber products to opens identifies this fiber with $f^{-1}(U)\times_U\operatorname{Spec}\kappa(x)$; its ring is therefore $B\otimes_A\kappa(x)$. [math:def-finite-morphism-schemes](https://alphabetamath.cc/item/def-finite-morphism-schemes), [math:def-scheme-theoretic-fibre](https://alphabetamath.cc/item/def-scheme-theoretic-fibre), [math:lem-fibre-product-open-restriction](https://alphabetamath.cc/item/lem-fibre-product-open-restriction), [math:thm-affine-fibre-product-tensor-ring](https://alphabetamath.cc/item/thm-affine-fibre-product-tensor-ring) Elementary tensors generate the underlying additive group, are additive in each variable, and satisfy $(ab)\otimes c=b\otimes(ac)$ for $a\in A$. [math:def-tensor-product-of-modules-by-generators-and-relations](https://alphabetamath.cc/item/def-tensor-product-of-modules-by-generators-and-relations)

[F6] The projection $Y_x\to Y$ is a homeomorphism onto $f^{-1}(x)$ with its subspace topology and preserves residue fields. Thus surjectivity of $f$ makes $Y_x$ nonempty. [math:lem-points-of-fibre-primes-over-point](https://alphabetamath.cc/item/lem-points-of-fibre-primes-over-point)

[F7] A scheme morphism induces local homomorphisms on stalks and hence homomorphisms of residue fields; a unital homomorphism of fields is injective, since a nonzero kernel element would give $1=0$ after multiplication by its inverse. A field extension is finite when its underlying vector space is finite-dimensional, and its degree is that dimension. [math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes), [math:def-extension-degree-and-finite-extension](https://alphabetamath.cc/item/def-extension-degree-and-finite-extension)

[F8] Rank-nullity holds for a linear map with finite-dimensional domain. In particular an injective endomorphism of a finite-dimensional space is surjective. An independent set in a space spanned by $n$ vectors has at most $n$ elements. [math:thm-rank-nullity](https://alphabetamath.cc/item/thm-rank-nullity), [math:cor-independent-set-is-no-larger-than-a-finite-spanning-set](https://alphabetamath.cc/item/cor-independent-set-is-no-larger-than-a-finite-spanning-set)

[F9] A field is algebraically closed when every nonconstant polynomial over it has a root in that field. [math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field) An algebraically closed field has no nontrivial finite field extension; equivalently every nonconstant polynomial over it splits into linear factors. [math:prop-algebraically-closed-splitting-and-finite-extension-criteria](https://alphabetamath.cc/item/prop-algebraically-closed-splitting-and-finite-extension-criteria)

[F10] Under Choice a finite morphism of schemes is closed. In particular it sends a closed point to a closed point, so the zero-cycle pushforward has closed-point support. [math:thm-finite-morphism-integral-closed](https://alphabetamath.cc/item/thm-finite-morphism-integral-closed)

[F11] Under the assumed Axiom of Choice, every spanning subset of a vector space contains a basis. In particular a finite spanning subset contains a finite basis. A vector space is finite-dimensional when it has a finite basis, and its dimension is the number of elements of any finite basis. [math:cor-every-spanning-set-contains-a-basis](https://alphabetamath.cc/item/cor-every-spanning-set-contains-a-basis), [math:def-dimension](https://alphabetamath.cc/item/def-dimension), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Proof

**Given:** The Axiom of Choice, an algebraically closed field $k$, and the finite-type schemes and finite surjective morphism in the statement.

**Goal:** Prove the residue-field assertion, the nonempty finite closed fibers, and the degree-one pushforward without assuming that $f$ is a $k$-morphism.

1.1 Let $z$ be a closed point of a finite-type $k$-scheme. Choose the affine open neighborhood $\operatorname{Spec}A$ supplied by [F3], so $A\cong k[t_1,\ldots,t_n]/I$. Its point $z$ is closed in that open and corresponds by [F4] to a maximal ideal $\mathfrak m$ of $A$. The inverse image of $\mathfrak m$ in the polynomial ring is maximal, since its quotient is the field $A/\mathfrak m$. By [F1] this quotient is $k$ via the coefficient map. Thus [F4] identifies the structure map $k\to\kappa(z)=A/\mathfrak m$ as an isomorphism, independently of the chosen chart because it is the structure map itself. [given, F1, F3, F4, choose, algebra]

2.1 Fix a closed $x\in X$ and choose an affine neighborhood $U=\operatorname{Spec}A$ with maximal ideal $\mathfrak m$ for $x$. By [F5], $f^{-1}(U)=\operatorname{Spec}B$ with a finite $A$-module generating list $b_1,\ldots,b_N$, and $Y_x=\operatorname{Spec}C$ for $C=B\otimes_A\kappa(x)$. Step 1.1 and [F4] give $\kappa(x)=A/\mathfrak m\cong k$. The maps $b\otimes\overline a\mapsto ab\bmod\mathfrak mB$ and $b\bmod\mathfrak mB\mapsto b\otimes1$ are well defined: the first is independent of the lift $a$ modulo $\mathfrak m$, is additive in each variable, and respects the balancing relation in [F5]. The second kills $\mathfrak mB$, since $(tb)\otimes1=b\otimes\overline t=0$ for $t\in\mathfrak m$. Their composites are the identity on residue classes of $b$ and on elementary tensors, using $(ab)\otimes1=b\otimes\overline a$; [F5] says these tensors generate. The formulas also preserve the units and products on elementary tensors in the tensor-product ring of [F5], and intertwine its $A/\mathfrak m$-scalar action with that on the quotient. Thus they identify $C$ with $B/\mathfrak mB$ as $\kappa(x)$-algebras. The images of the $b_i$ form a finite spanning subset of $C$ over $\kappa(x)$. By [F11], this subset contains a finite basis; fix one, and let $n=\dim_{\kappa(x)}C$ be its number of elements. By [F6] the fiber is nonempty, hence $C\ne0$. The scalar action here comes from $X$ and $f$, whether or not it agrees with the given $k$-structure on $Y$. [given, F4, F5, F6, F11, step 1.1, choose, algebra]

3.1 For a prime ideal $\mathfrak p$ of $C$, the quotient $D=C/\mathfrak p$ is a nonzero domain. Its unital scalar map from the field $\kappa(x)$ is injective: a nonzero element of its kernel would, after multiplication by its inverse, force $1=0$ in $D$. The images of the finite spanning subset in step 2.1 span $D$. By [F11] they contain a finite basis of $D$, making $D$ finite-dimensional over $\kappa(x)$. Multiplication by a nonzero element is an injective linear endomorphism, hence surjective by [F8]; its image therefore contains $1$, giving a multiplicative inverse. Thus $C/\mathfrak p$ is a field and $\mathfrak p$ is maximal. By [F4] and [F6], if $y\in f^{-1}(x)$ corresponds to $\mathfrak p$, then $\kappa(y)\cong C/\mathfrak p$ with the induced $\kappa(x)$-action. Consequently the residue-field extension induced by $f$ is finite, as defined in [F7]. [F4, F6, F7, F8, F11, step 2.1, algebra]

4.1 Distinct maximal ideals of $C$ are pairwise comaximal: if their sum were proper, maximality of either would force containment and then equality. For any finite collection $\mathfrak p_1,\ldots,\mathfrak p_r$, [F2] gives a surjection $C\to\prod_{i=1}^r C/\mathfrak p_i$. The $r$ coordinate unit vectors in that product are linearly independent over $\kappa(x)$, and any chosen lifts in $C$ are therefore independent. Using the $n$-element basis of $C$ fixed in step 2.1 as a spanning set, [F8] gives $r\le n$. Hence $\operatorname{Spec}C$ has at most $n$ points, since otherwise one could choose $n+1$ distinct points. All its points are closed by step 3.1 and [F4]. [F2, F4, F8, step 2.1, step 3.1, choose, algebra]

5.1 The subset $f^{-1}(x)$ is closed in $Y$ by continuity and closedness of $x$. Through the homeomorphism of [F6], step 4.1 makes every singleton in it closed in the subspace topology, hence closed in $Y$. Step 1.1 therefore identifies each $\kappa(y)$ with $k$ through the structure map of $Y$. For the induced embedding $\phi:\kappa(x)\to\kappa(y)$, its image $E=\phi(\kappa(x))$ is algebraically closed: pull back the coefficients of a nonconstant polynomial over $E$ along the isomorphism $\kappa(x)\cong E$, find a root in $\kappa(x)$ using the root property in [F9] and step 1.1, and apply $\phi$. Step 3.1 makes $\kappa(y)/E$ finite, so [F9] gives $\kappa(y)=E$. Thus $\phi$ is surjective and its field degree is one; this does not assert that its two structure-map identifications with $k$ make it the identity. [F6, F7, F9, step 1.1, step 3.1, step 4.1, algebra]

6.1 The fiber is nonempty by step 2.1 and finite by step 4.1, and all its points are closed by step 5.1. The pushforward formula in the Statement and the degree-one assertion in step 5.1 give $f_*[y]=[x]$. For completeness, [F10] sends every closed point $y\in Y$ to a closed point $x=f(y)$, and step 3.1 applied at this $x$ gives finite residue degree. Thus the stated formula extends linearly to a well-defined pushforward on zero-cycles, with finite support, and all the conclusions follow. [F7, F10, step 2.1, step 3.1, step 4.1, step 5.1, algebra] ∎
