---
title: Normalization of an affine integral curve
status: published
research_item: lem-affine-curve-normalization-interface
dependency_level: 0
---

PDF p. 13: Normalization of the support curve

## Prerequisites

- [math:thm-integral-closure-finite-finite-type-domain-over-field](https://alphabetamath.cc/item/thm-integral-closure-finite-finite-type-domain-over-field)
- [math:thm-normal-curve-is-nonsingular](https://alphabetamath.cc/item/thm-normal-curve-is-nonsingular)
- [math:cor-integral-elements-form-a-subring](https://alphabetamath.cc/item/cor-integral-elements-form-a-subring)
- [math:thm-transitivity-of-integrality](https://alphabetamath.cc/item/thm-transitivity-of-integrality)
- [math:cor-dimension-preserved-by-integral-extensions](https://alphabetamath.cc/item/cor-dimension-preserved-by-integral-extensions)
- [math:lem-finite-morphism-affine](https://alphabetamath.cc/item/lem-finite-morphism-affine)
- [math:thm-lying-over](https://alphabetamath.cc/item/thm-lying-over)
- [math:cor-contraction-of-maximal-ideals-integral-extension](https://alphabetamath.cc/item/cor-contraction-of-maximal-ideals-integral-extension)
- [math:cor-weak-nullstellensatz-algebraically-closed-coordinate-form](https://alphabetamath.cc/item/cor-weak-nullstellensatz-algebraically-closed-coordinate-form)
- [math:thm-chinese-remainder-theorem-for-comaximal-ideals](https://alphabetamath.cc/item/thm-chinese-remainder-theorem-for-comaximal-ideals)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-affine-scheme-spectrum](https://alphabetamath.cc/item/def-affine-scheme-spectrum)
- [math:def-perfect-field](https://alphabetamath.cc/item/def-perfect-field)
- [math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field)
- [math:def-field-of-fractions](https://alphabetamath.cc/item/def-field-of-fractions)
- [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)
- [math:def-morphism-affine-schemes-from-ring-map](https://alphabetamath.cc/item/def-morphism-affine-schemes-from-ring-map)
- [math:def-integral-affine-scheme](https://alphabetamath.cc/item/def-integral-affine-scheme)
- [math:def-closed-point-scheme](https://alphabetamath.cc/item/def-closed-point-scheme)
- [math:def-residue-field-scheme-point](https://alphabetamath.cc/item/def-residue-field-scheme-point)
- [math:def-finite-type-and-module-finite-algebras](https://alphabetamath.cc/item/def-finite-type-and-module-finite-algebras)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact)
- [math:cor-affine-schemes-separated](https://alphabetamath.cc/item/cor-affine-schemes-separated)
- [math:thm-prime-spectrum-of-a-quotient-bijection](https://alphabetamath.cc/item/thm-prime-spectrum-of-a-quotient-bijection)
- [math:thm-correspondence-theorem-ideals](https://alphabetamath.cc/item/thm-correspondence-theorem-ideals)
- [math:thm-quotient-is-field-iff-ideal-maximal](https://alphabetamath.cc/item/thm-quotient-is-field-iff-ideal-maximal)
- [math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring)
- [math:thm-irreducible-closed-subsets-and-prime-ideals](https://alphabetamath.cc/item/thm-irreducible-closed-subsets-and-prime-ideals)
- [math:thm-rank-nullity](https://alphabetamath.cc/item/thm-rank-nullity)
- [math:def-smooth-morphism-to-field-classical](https://alphabetamath.cc/item/def-smooth-morphism-to-field-classical)
- [math:def-localisation-at-a-prime-ideal](https://alphabetamath.cc/item/def-localisation-at-a-prime-ideal)
- [math:def-multiplicative-subset-and-localisation](https://alphabetamath.cc/item/def-multiplicative-subset-and-localisation)


## Statement
Assume the Axiom of Choice. Let $k$ be a perfect field and $T=\operatorname{Spec}A$ an integral affine curve of finite type over $k$: thus $A$ is a finitely generated $k$-algebra which is a domain of Krull dimension one. Let $K=\operatorname{Frac}(A)$ and let $B$ be the set of elements of $K$ integral over $A$, meaning roots of monic polynomials with coefficients in $A$. The normalization of $T$ is $\widetilde T=\operatorname{Spec}B$, with its morphism $\nu:\widetilde T\to T$ induced by inclusion. Then $\widetilde T$ is affine and smooth over $k$, and $\nu$ is finite. If $k$ is algebraically closed, every closed point of $T$ and $\widetilde T$ has residue field $k$, and the set of points in the fiber over each closed point of $T$ is nonempty and finite; each induced residue-field map in such a fiber is an isomorphism.

## Facts & Assumptions

**Given:** AC, a perfect field $k$, and the domain $A$ and normalization ring $B$ in the statement.

**Goal:** Establish finiteness and smoothness of the normalization, then the asserted properties of its closed fibers when $k$ is algebraically closed.

[F1] The integral closure of a finite-type domain over a field in its fraction field is a finite module over that domain ([math:thm-integral-closure-finite-finite-type-domain-over-field](https://alphabetamath.cc/item/thm-integral-closure-finite-finite-type-domain-over-field)). Integral elements form a subring, and integrality is transitive ([math:cor-integral-elements-form-a-subring](https://alphabetamath.cc/item/cor-integral-elements-form-a-subring), [math:thm-transitivity-of-integrality](https://alphabetamath.cc/item/thm-transitivity-of-integrality)).

[F2] Assuming AC, an injective integral extension of nonzero rings preserves Krull dimension ([math:cor-dimension-preserved-by-integral-extensions](https://alphabetamath.cc/item/cor-dimension-preserved-by-integral-extensions)). A morphism with an affine cover of its target whose inverse images are affine with module-finite coordinate rings is finite ([math:lem-finite-morphism-affine](https://alphabetamath.cc/item/lem-finite-morphism-affine)).

[F3] Assuming AC, an integral separated finite-type one-dimensional normal scheme over a perfect field is smooth over that field. Normal means that each local ring is an integrally closed domain ([math:thm-normal-curve-is-nonsingular](https://alphabetamath.cc/item/thm-normal-curve-is-nonsingular)).

[F4] Assuming AC, a prime of a ring lifts to a prime of any integral extension containing it; for an integral extension, an upstairs prime is maximal exactly when its contraction is maximal ([math:thm-lying-over](https://alphabetamath.cc/item/thm-lying-over), [math:cor-contraction-of-maximal-ideals-integral-extension](https://alphabetamath.cc/item/cor-contraction-of-maximal-ideals-integral-extension)).

[F5] Over an algebraically closed field, every maximal ideal of a polynomial ring in finitely many variables is an evaluation ideal, with quotient canonically $k$ by evaluation ([math:cor-weak-nullstellensatz-algebraically-closed-coordinate-form](https://alphabetamath.cc/item/cor-weak-nullstellensatz-algebraically-closed-coordinate-form)). For finitely many pairwise comaximal ideals, the map to the product of their quotients is surjective ([math:thm-chinese-remainder-theorem-for-comaximal-ideals](https://alphabetamath.cc/item/thm-chinese-remainder-theorem-for-comaximal-ideals)).

[F6] Perfect fields have every nonconstant irreducible polynomial separable; algebraically closed fields have a root for every nonconstant polynomial ([math:def-perfect-field](https://alphabetamath.cc/item/def-perfect-field), [math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field)). For a domain $R$, its fraction field consists of fractions $a/b$ with $b\ne0$ ([math:def-field-of-fractions](https://alphabetamath.cc/item/def-field-of-fractions)). All rings here are commutative with identity, and a domain is nonzero and has no zero divisors.

[F7] The affine scheme $\operatorname{Spec}R$ has points the prime ideals of $R$, and its local ring at $\mathfrak p$ is $R_{\mathfrak p}$; localization at $\mathfrak p$ means $(R\setminus\mathfrak p)^{-1}R$, whose elements are fractions $a/s$ with $s\notin\mathfrak p$ ([math:def-localisation-at-a-prime-ideal](https://alphabetamath.cc/item/def-localisation-at-a-prime-ideal)). Its fraction relation is $a/s=a'/s'$ exactly when $u(as'-a' s)=0$ for some $u\notin\mathfrak p$, with the usual fraction addition and multiplication ([math:def-multiplicative-subset-and-localisation](https://alphabetamath.cc/item/def-multiplicative-subset-and-localisation)). A ring map $R\to S$ induces the map of affine schemes sending $\mathfrak q$ to its contraction; its local ring maps induce the residue-field maps. Under AC, closed points are exactly maximal ideals; $\kappa(\mathfrak p)=\operatorname{Frac}(R/\mathfrak p)$, and therefore $\kappa(\mathfrak m)=R/\mathfrak m$ at a maximal ideal. An affine scheme is integral exactly when its coordinate ring is a domain ([math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme), [math:def-affine-scheme-spectrum](https://alphabetamath.cc/item/def-affine-scheme-spectrum), [math:def-morphism-affine-schemes-from-ring-map](https://alphabetamath.cc/item/def-morphism-affine-schemes-from-ring-map), [math:def-closed-point-scheme](https://alphabetamath.cc/item/def-closed-point-scheme), [math:def-residue-field-scheme-point](https://alphabetamath.cc/item/def-residue-field-scheme-point), [math:def-integral-affine-scheme](https://alphabetamath.cc/item/def-integral-affine-scheme), [math:thm-quotient-is-field-iff-ideal-maximal](https://alphabetamath.cc/item/thm-quotient-is-field-iff-ideal-maximal)). The set of points in a fiber means the inverse image of the point under this spectrum map.

[F8] A finite-type $k$-algebra is generated by finitely many elements as an algebra, equivalently is a quotient of a polynomial algebra in finitely many variables; a module-finite algebra is generated by finitely many elements as a module ([math:def-finite-type-and-module-finite-algebras](https://alphabetamath.cc/item/def-finite-type-and-module-finite-algebras)). A morphism is finite type when it is locally finite type and quasi-compact, and affine schemes are quasi-compact under AC ([math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism), [math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact)). Over $\operatorname{Spec}k$, a single finite-type affine chart thus gives a finite-type scheme.

[F9] Every morphism between affine schemes is separated; in particular $\operatorname{Spec}R\to\operatorname{Spec}k$ is separated for every $k$-algebra $R$ ([math:cor-affine-schemes-separated](https://alphabetamath.cc/item/cor-affine-schemes-separated)).

[F10] For an ideal $I$ of $R$, contraction gives an inclusion-preserving bijection from the primes of $R/I$ to the primes of $R$ containing $I$ ([math:thm-prime-spectrum-of-a-quotient-bijection](https://alphabetamath.cc/item/thm-prime-spectrum-of-a-quotient-bijection)). The analogous inclusion-preserving correspondence holds for all ideals, so it preserves maximal ideals ([math:thm-correspondence-theorem-ideals](https://alphabetamath.cc/item/thm-correspondence-theorem-ideals)). A quotient by a maximal ideal is a field ([math:thm-quotient-is-field-iff-ideal-maximal](https://alphabetamath.cc/item/thm-quotient-is-field-iff-ideal-maximal)).

[F11] Krull dimension of a nonzero ring is the supremum of lengths of strict prime chains ([math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring)). Scheme dimension is the supremum of lengths of strict chains of nonempty irreducible closed subsets of its underlying topological space. Under AC, those subsets of $\operatorname{Spec}R$ are exactly the $V(\mathfrak p)$ for prime ideals $\mathfrak p$, each with unique radical defining ideal $\mathfrak p$ ([math:thm-irreducible-closed-subsets-and-prime-ideals](https://alphabetamath.cc/item/thm-irreducible-closed-subsets-and-prime-ideals)).

[F12] For a linear map with finite-dimensional domain, rank-nullity gives the dimension of the domain as the sum of kernel and image dimensions; in particular a surjection cannot increase dimension ([math:thm-rank-nullity](https://alphabetamath.cc/item/thm-rank-nullity)).

[F13] For a finite-type scheme over a field, smoothness has its usual local standard smooth meaning, equivalently geometric regularity after every field extension, with AC assumed in this library interface ([math:def-smooth-morphism-to-field-classical](https://alphabetamath.cc/item/def-smooth-morphism-to-field-classical)).

[A1] AC is the assertion that every family of nonempty sets has a choice function; here it is carried by the dimension, finite-morphism, normal-curve, lying-over, affine quasi-compactness, closed-point and irreducible-closed-subset interfaces ([math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)).

## Proof

**Given:** AC, a perfect field $k$, and the domain $A$ and normalization ring $B$ in the statement.

1.1 By [F1], $B$ is a subring of $K$ containing $A$ and a finite $A$-module. It is therefore a nonzero domain. Its fraction field is $K$: every fraction of elements of $B$ lies in $K$, and every fraction $a/b$ with $a,b\in A$ and $b\ne0$ is a fraction of elements of $B$, by [F6]. It is also a finite-type $k$-algebra, since a finite set of $A$-module generators generates it as an $A$-algebra and these generators together with finitely many $k$-algebra generators of $A$ generate $B$ over $k$. The inclusion $A\subseteq B$ is integral by the definition of $B$. By [F7] its spectrum and the morphism $\nu$ are the asserted affine constructions, and the one-affine-cover criterion in [F2] makes $\nu$ finite. By [F8], $\operatorname{Spec}B$ is finite type over $k$: its single affine chart is locally finite type and its source is quasi-compact. [F1, F2, F6, F7, F8, A1, given]

2.1 The ring $B$ is integrally closed in $K$: if $x\in K$ is integral over $B$, apply transitivity in [F1] to $A\subseteq B\subseteq B[x]$ to make $x$ integral over $A$, so $x\in B$. These are nonzero domain inclusions. First justify the fraction-field realization of the local rings. For a domain $R$ and a prime $\mathfrak p$, every element outside $\mathfrak p$ is nonzero. The fraction relation in [F7] therefore reduces to $as'=a' s$, which is also the equality criterion in $\operatorname{Frac}(R)$ by [F6] and that same localization relation. Consequently the map sending a fraction of $R_{\mathfrak p}$ to the same fraction in $\operatorname{Frac}(R)$ is well defined and injective. The fraction formulas in [F7] show that it respects addition, multiplication and identity. Its image is precisely the fractions with denominator outside $\mathfrak p$. Since it contains $R$ and is contained in $\operatorname{Frac}(R)$, its fraction field is $\operatorname{Frac}(R)$: each fraction of $R$ is a fraction of elements of this image, and each fraction of the image lies in $\operatorname{Frac}(R)$. Apply this to $R=B$, whose fraction field is $K$ by step 1.1. For any prime $\mathfrak q$ of $B$, the local ring $B_{\mathfrak q}$ of [F7] is thus a domain with fraction field $K$, and it is integrally closed in $K$. Indeed, if $x\in K$ satisfies $x^n+c_1x^{n-1}+\cdots+c_n=0$ with $c_i\in B_{\mathfrak q}$, choose a product $s\in B\setminus\mathfrak q$ of denominators of the finitely many $c_i$, so $sc_i\in B$. Multiplying the equation by $s^n$ gives a monic equation for $sx$ with coefficients $s^ic_i\in B$. Hence $sx\in B$ and $x\in B_{\mathfrak q}$. Every such local ring is a domain, being a subring of $K$, so $\operatorname{Spec}B$ is normal by [F3]. [F1, F3, F6, F7, step 1.1, algebra]

2.2 Suppose $k$ is algebraically closed. For either $R=A$ or $R=B$, [F8] supplies a presentation $R=P/I$ with $P=k[t_1,\ldots,t_N]$. If $\mathfrak m$ is maximal in $R$, its inverse image $M$ in $P$ is maximal by [F10]. By [F5], $P/M$ is canonically $k$ by evaluation. The map $(P/I)/\mathfrak m\to P/M$ sending the class of $p+I$ to $p+M$ is a well-defined bijective $k$-algebra map, so $R/\mathfrak m\cong k$. By [F7], closed points of $\operatorname{Spec}R$ are exactly these maximal ideals, and their residue fields are these quotients. All identifications respect the structure map from $k$. [F5, F7, F8, F10, A1, given, step 1.1]

3.1 By [F2], $\dim B=\dim A=1$. The correspondence in [F11] reverses strict inclusions: $\mathfrak p\subsetneq\mathfrak q$ gives $V(\mathfrak q)\subsetneq V(\mathfrak p)$, with strictness from uniqueness of the radical defining ideals, and every chain of irreducible closed subsets arises this way. Thus $\dim\operatorname{Spec}B=\dim B=1$. By [F7] and step 1.1 the scheme is integral and finite type over $k$. Applying [F9] to its structure morphism $\operatorname{Spec}B\to\operatorname{Spec}k$ supplies separatedness over the required base. It is normal by step 2.1. All hypotheses of [F3] now hold, so it is smooth over the perfect field $k$, in the sense of [F13]. [F2, F3, F7, F9, F11, F13, A1, given, step 1.1, step 2.1]

4.1 Let $\mathfrak m$ be a maximal ideal of $A$. By [F7], the points over it are precisely primes $\mathfrak q$ of $B$ with $\mathfrak q\cap A=\mathfrak m$. By [F4], at least one exists and all are maximal. Put $C=B/\mathfrak m B$. The images in $C$ of a finite $A$-module generating list for $B$ span it over $A/\mathfrak m=k$, since changing a coefficient by an element of $\mathfrak m$ changes the result by an element of $\mathfrak m B$; hence $C$ is a finite-dimensional $k$-vector space. By [F10], its primes correspond to primes $\mathfrak q$ of $B$ containing $\mathfrak m B$. For such a prime, its contraction to $A$ is a proper ideal containing the maximal ideal $\mathfrak m$, hence equals $\mathfrak m$; the converse follows directly by absorption. Thus these are exactly the fiber points, and all these quotient primes are maximal by the ideal correspondence in [F10]. Distinct maximal ideals $\mathfrak n_i$ of $C$ are pairwise comaximal: their sum properly contains either ideal and must be $C$. For any finite nonempty list of distinct such ideals, [F5] gives a $k$-linear surjection $C\to\prod_i C/\mathfrak n_i$. Each quotient is $k$ by step 2.2 applied to the corresponding maximal ideal of $B$, using the same explicit quotient-of-quotient map as there. Rank-nullity [F12] therefore gives $r\leq\dim_k C$. There cannot be $\dim_k C+1$ distinct fiber points, so the nonempty fiber is finite. By [F7] the induced map of residue fields is the $k$-algebra map $A/\mathfrak m\to B/\mathfrak q$; both are $k$ by step 2.2, so this map is the identity under their canonical $k$-algebra identifications. This proves all assertions. [F4, F5, F7, F10, F12, A1, step 1.1, step 2.2, algebra] ∎
