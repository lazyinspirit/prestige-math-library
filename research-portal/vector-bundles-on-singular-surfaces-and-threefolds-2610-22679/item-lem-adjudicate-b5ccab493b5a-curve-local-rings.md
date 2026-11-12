---
title: Closed-point local rings and function fields of integral curves
status: published
research_item: lem-adjudicate-b5ccab493b5a-curve-local-rings
dependency_level: 0
---

## Prerequisites

- [math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space)
- [math:def-prime-spectrum-and-vanishing-sets](https://alphabetamath.cc/item/def-prime-spectrum-and-vanishing-sets)
- [math:lem-closure-of-a-point-is-its-vanishing-set](https://alphabetamath.cc/item/lem-closure-of-a-point-is-its-vanishing-set)
- [math:cor-closed-points-of-spectrum-are-maximal-ideals](https://alphabetamath.cc/item/cor-closed-points-of-spectrum-are-maximal-ideals)
- [math:lem-curve-closed-subsets-finite](https://alphabetamath.cc/item/lem-curve-closed-subsets-finite)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:thm-stalk-structure-sheaf-prime-localization](https://alphabetamath.cc/item/thm-stalk-structure-sheaf-prime-localization)
- [math:def-localisation-at-a-prime-ideal](https://alphabetamath.cc/item/def-localisation-at-a-prime-ideal)
- [math:cor-primes-of-a-prime-local-ring](https://alphabetamath.cc/item/cor-primes-of-a-prime-local-ring)
- [math:def-local-ring](https://alphabetamath.cc/item/def-local-ring)
- [math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-noetherian)
- [math:thm-noetherian-ring-quotients-and-localisations](https://alphabetamath.cc/item/thm-noetherian-ring-quotients-and-localisations)
- [math:thm-noetherian-ring-ideal-characterisations](https://alphabetamath.cc/item/thm-noetherian-ring-ideal-characterisations)
- [math:lem-integral-finite-type-scheme-function-field](https://alphabetamath.cc/item/lem-integral-finite-type-scheme-function-field)
- [math:def-field-of-fractions](https://alphabetamath.cc/item/def-field-of-fractions)
- [math:thm-sections-basic-open-affine-scheme](https://alphabetamath.cc/item/thm-sections-basic-open-affine-scheme)
- [math:def-multiplicative-subset-and-localisation](https://alphabetamath.cc/item/def-multiplicative-subset-and-localisation)
- [math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring)


## Statement
Assume AC. Let $T$ be an integral finite-type $k$-scheme of chain dimension one, where $k$ is a field. Then $T$ has a unique generic point $\eta$ and function field $K=k(T)=\mathcal O_{T,\eta}$. On every nonempty affine open $U=\operatorname{Spec}A$, this field is canonically $\operatorname{Frac}A$. Every closed point $x$ has an affine neighbourhood with $A$ a finite-type $k$-algebra. On such a neighbourhood, its prime $\mathfrak p$ is nonzero and maximal, and $R=\mathcal O_{T,x}=A_{\mathfrak p}$ is a Noetherian local domain. Its maximal ideal is $\mathfrak m=\mathfrak pA_{\mathfrak p}$, its residue field is $R/\mathfrak m$, and its only prime ideals are $(0)$ and $\mathfrak m$. Thus it is one-dimensional, and every ideal of $R$ is finitely generated. The canonical restriction map $R\to K$ is injective and identifies $\operatorname{Frac}R$ with $K$. An element $a/s\in A_{\mathfrak p}$ is a unit exactly when $a\notin\mathfrak p$.

## Facts & Assumptions
**Given:** AC and the integral finite-type scheme $T$ of chain dimension one over the field $k$.

[F1] An integral scheme is nonempty and irreducible and has domains as coordinate rings of nonempty affine opens. Finite type provides finite-type affine neighbourhoods and quasi-compactness. Chain dimension is the supremum of lengths of strict chains of nonempty irreducible closed subsets. [math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme), [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism), [math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space)

[F2] In an affine spectrum, points are prime ideals and the closure of $\mathfrak q$ is $V(\mathfrak q)$. A point is closed exactly when its prime is maximal. Once an integral finite-type scheme of chain dimension one has a generic point, it is Noetherian, that point is unique, every other point is closed, and every proper closed subset is finite. These results are used under AC. [math:def-prime-spectrum-and-vanishing-sets](https://alphabetamath.cc/item/def-prime-spectrum-and-vanishing-sets), [math:lem-closure-of-a-point-is-its-vanishing-set](https://alphabetamath.cc/item/lem-closure-of-a-point-is-its-vanishing-set), [math:cor-closed-points-of-spectrum-are-maximal-ideals](https://alphabetamath.cc/item/cor-closed-points-of-spectrum-are-maximal-ideals), [math:lem-curve-closed-subsets-finite](https://alphabetamath.cc/item/lem-curve-closed-subsets-finite), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F3] On an affine neighbourhood, the stalk at $\mathfrak p$ is $A_{\mathfrak p}=(A\setminus\mathfrak p)^{-1}A$. Contraction identifies its primes with primes of $A$ contained in $\mathfrak p$. A local ring is a nonzero commutative ring with a unique maximal ideal, and the quotient by that ideal is its residue field. [math:thm-stalk-structure-sheaf-prime-localization](https://alphabetamath.cc/item/thm-stalk-structure-sheaf-prime-localization), [math:def-localisation-at-a-prime-ideal](https://alphabetamath.cc/item/def-localisation-at-a-prime-ideal), [math:cor-primes-of-a-prime-local-ring](https://alphabetamath.cc/item/cor-primes-of-a-prime-local-ring), [math:def-local-ring](https://alphabetamath.cc/item/def-local-ring)

[F4] A finite-type algebra over a Noetherian ring is Noetherian, and localization preserves Noetherianity. Under AC, a commutative ring is Noetherian if and only if every ideal is finitely generated. [math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-noetherian), [math:thm-noetherian-ring-quotients-and-localisations](https://alphabetamath.cc/item/thm-noetherian-ring-quotients-and-localisations), [math:thm-noetherian-ring-ideal-characterisations](https://alphabetamath.cc/item/thm-noetherian-ring-ideal-characterisations), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F5] For an integral finite-type scheme with generic point $\eta$, its generic stalk is canonically the fraction field of every nonempty affine chart. The fraction field of a domain consists of fractions with nonzero denominators. Sections on $D(s)$ are $A_s$, with canonical localization restrictions. [math:lem-integral-finite-type-scheme-function-field](https://alphabetamath.cc/item/lem-integral-finite-type-scheme-function-field), [math:def-field-of-fractions](https://alphabetamath.cc/item/def-field-of-fractions), [math:thm-sections-basic-open-affine-scheme](https://alphabetamath.cc/item/thm-sections-basic-open-affine-scheme)

[F6] Let $A$ be a commutative ring and $S\subseteq A$ a multiplicative subset. In $S^{-1}A$, the fractions $a/s$ and $b/t$ are equal exactly when $v(at-bs)=0$ for some $v\in S$. Addition and multiplication are given by $a/s+b/t=(at+bs)/(st)$ and $(a/s)(b/t)=ab/(st)$, and the localization map sends $a$ to $a/1$. [math:def-multiplicative-subset-and-localisation](https://alphabetamath.cc/item/def-multiplicative-subset-and-localisation)

[F7] For a nonzero commutative ring $R$, its Krull dimension is the supremum of the lengths $n$ of strict chains $\mathfrak p_0\subsetneq\cdots\subsetneq\mathfrak p_n$ of prime ideals. [math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring)

## Proof

**Goal:** Establish the statement under its stated hypotheses.

**Given:** AC and the integral finite-type scheme $T$ of chain dimension one over the field $k$.

1.1 Choose a nonempty finite-type affine open $U=\operatorname{Spec}A$, which exists by F1. Its ring is a nonzero domain. The point $(0)$ is dense in $U$ by F2. Every nonempty open of an irreducible space is dense, because two disjoint nonempty opens would express that space as the union of two proper closed subsets. Thus $U$ is dense in $T$, and the closure in $T$ of its zero prime is all of $T$. It is therefore a generic point $\eta$, meaning $\overline{\{\eta\}}=T$. Apply F2 to obtain uniqueness, Noetherianity of the space, and closedness of all other points. Every nonempty open contains $\eta$, since otherwise its proper closed complement would contain the closure of $\eta$. On each nonempty affine open, its zero prime is likewise generic, hence represents $\eta$. The generic point is not closed: otherwise $T$ would be a singleton of chain dimension zero. Now fix any closed point $x$ and choose a finite-type affine neighbourhood $U=\operatorname{Spec}A$ by F1. Since $x\ne\eta$, its prime $\mathfrak p=\mathfrak p_x$ is nonzero. It is maximal because $x$ is closed in $U$. Every nonzero prime of $A$ similarly represents a point different from $\eta$, so it is maximal. [F1, F2, given]

2.1 The only ideals of $k$ are $(0)$ and $k$, so F4 makes $k$ Noetherian. Hence the finite-type algebra $A$ and its localization $R=A_{\mathfrak p}$ are Noetherian, and every ideal of $R$ is finitely generated. By F3 this localization is the stalk at $x$. Its primes correspond to primes of $A$ contained in $\mathfrak p$. By step 1.1 those primes are exactly $(0)$ and $\mathfrak p$: any nonzero prime below $\mathfrak p$ is maximal and equals $\mathfrak p$. [F3, F4, step 1.1]

3.1 Identify $K=\mathcal O_{T,\eta}$ with $\operatorname{Frac}A$ by F5. Sending $a/s\in A_{\mathfrak p}$ to the same fraction in $K$ is well defined and injective: equality in the localization means $v(at-bs)=0$ for some $v\notin\mathfrak p$, and the domain property gives $at=bs$; the converse is immediate. Thus $R$ is a domain. If $a\notin\mathfrak p$, then $s/a$ is its inverse; if $a\in\mathfrak p$, then $a/s$ belongs to the proper prime $\mathfrak pR$ and cannot be a unit. In particular every element outside $\mathfrak pR$ is a unit, so every proper ideal lies in $\mathfrak pR$ and this is the unique maximal ideal. Its quotient is the residue field by F3. Since $\mathfrak p\ne0$, the injection makes $\mathfrak pR\ne0$; the prime chain $(0)\subsetneq\mathfrak pR$ therefore has length one and no longer prime chain exists. Hence $\dim R=1$ by F7. The fraction equivalence and arithmetic used here are those of F6. [F3, F5, F6, F7, step 1.1, step 2.1, algebra]

4.1 Every element of $K=\operatorname{Frac}A$ is a quotient of elements of $A\subset R$, and every quotient of elements of $R$ with nonzero denominator defines an element of $K$. These inverse fraction maps identify $\operatorname{Frac}R$ with $K$. A germ at $x$ is represented on a principal affine neighbourhood by a fraction with denominator outside $\mathfrak p$; F3 and F5 send its restriction to $\eta$ to that same fraction. The embedding is therefore canonical and independent of the affine neighbourhood. The function-field supplier F5 applies on every nonempty affine chart, and the preceding argument applies at every closed point using a finite-type affine neighbourhood from F1. AC is used only through the suppliers in F2 and F4. [F1, F2, F3, F4, F5, F6, step 2.1, step 3.1, algebra] ∎
