---
title: Generic local rings of reduced schemes
status: published
research_item: lem-author-2389e5bafea8-generic-reduced-local-ring
dependency_level: 0
---

PDF p. 10: Dense smooth locus in Lemma 5.1

## Prerequisites

- [math:thm-stalk-structure-sheaf-prime-localization](https://alphabetamath.cc/item/thm-stalk-structure-sheaf-prime-localization)
- [math:cor-nilradical-as-intersection-of-primes](https://alphabetamath.cc/item/cor-nilradical-as-intersection-of-primes)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-scheme](https://alphabetamath.cc/item/def-scheme)
- [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)
- [math:def-irreducible-component-of-a-topological-space](https://alphabetamath.cc/item/def-irreducible-component-of-a-topological-space)
- [math:def-prime-spectrum-and-vanishing-sets](https://alphabetamath.cc/item/def-prime-spectrum-and-vanishing-sets)
- [math:lem-closure-of-a-point-is-its-vanishing-set](https://alphabetamath.cc/item/lem-closure-of-a-point-is-its-vanishing-set)
- [math:thm-subspace-closure-and-interior](https://alphabetamath.cc/item/thm-subspace-closure-and-interior)
- [math:cor-primes-of-a-prime-local-ring](https://alphabetamath.cc/item/cor-primes-of-a-prime-local-ring)
- [math:thm-localisation-at-a-prime-is-local](https://alphabetamath.cc/item/thm-localisation-at-a-prime-is-local)
- [math:def-stalk-of-presheaf](https://alphabetamath.cc/item/def-stalk-of-presheaf)

## Statement
Assume the Axiom of Choice. Let $X$ be a reduced scheme and let $\eta$ be the generic point of an irreducible component. Then $\mathcal O_{X,\eta}$ is a field.

A scheme is reduced when its local rings have no nonzero nilpotents. A generic point of a closed irreducible subset is a point whose closure is that subset.

## Facts & Assumptions

**Given:** AC, a reduced scheme $X$ and a generic point $\eta$ of an irreducible component.

**Goal:** Show that $\mathcal O_{X,\eta}$ is a field.

[F1] A stalk consists of germs of sections, where two representatives agree if they agree on some smaller open neighborhood ([math:def-stalk-of-presheaf](https://alphabetamath.cc/item/def-stalk-of-presheaf)). Restricting to an open neighborhood $U$ of a point $x$ does not change the stalk: replace each representative $(W,s)$ by its restriction to $W\cap U$; any neighborhood witnessing equality of germs can likewise be intersected with $U$. On an affine neighborhood $U=\operatorname{Spec} A$, the stalk at the point corresponding to a prime $\mathfrak p$ is therefore $\mathcal O_{X,x}\cong\mathcal O_{U,x}\cong A_{\mathfrak p}$ ([math:thm-stalk-structure-sheaf-prime-localization](https://alphabetamath.cc/item/thm-stalk-structure-sheaf-prime-localization)).

[F2] The nilradical consists of elements $r$ with $r^n=0$ for some integer $n\geq 1$. Under AC it is the intersection of all prime ideals ([math:cor-nilradical-as-intersection-of-primes](https://alphabetamath.cc/item/cor-nilradical-as-intersection-of-primes)). The assumed Axiom of Choice ([math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)) is used through this formula and the point-closure formula in [F4].

[F3] A scheme is a locally ringed space with an affine open neighborhood at each point ([math:def-scheme](https://alphabetamath.cc/item/def-scheme)), and an affine scheme is isomorphic to the spectrum of a commutative ring with its structure sheaf ([math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)). An irreducible subset is nonempty and cannot be written as a union of two proper relatively closed subsets; an irreducible component is maximal among irreducible subsets under inclusion ([math:def-irreducible-component-of-a-topological-space](https://alphabetamath.cc/item/def-irreducible-component-of-a-topological-space)). Closure means the smallest closed superset. The closed subsets of a subspace $S$ are the intersections $S\cap Z$ with ambient closed subsets $Z$.

[F4] Under AC, the closure of a point $\mathfrak p$ of $\operatorname{Spec} A$ is $V(\mathfrak p)$ ([math:lem-closure-of-a-point-is-its-vanishing-set](https://alphabetamath.cc/item/lem-closure-of-a-point-is-its-vanishing-set)), where $V(\mathfrak p)$ is the set of prime ideals containing $\mathfrak p$ ([math:def-prime-spectrum-and-vanishing-sets](https://alphabetamath.cc/item/def-prime-spectrum-and-vanishing-sets)). If $T\subseteq S\subseteq X$, then $\operatorname{cl}_S(T)=\operatorname{cl}_X(T)\cap S$ ([math:thm-subspace-closure-and-interior](https://alphabetamath.cc/item/thm-subspace-closure-and-interior)).

[F5] The prime ideals of $A_{\mathfrak p}$ correspond bijectively to the prime ideals of $A$ contained in $\mathfrak p$ ([math:cor-primes-of-a-prime-local-ring](https://alphabetamath.cc/item/cor-primes-of-a-prime-local-ring)).

[F6] The ring $A_{\mathfrak p}$ is nonzero and local, with maximal ideal $\mathfrak pA_{\mathfrak p}$; its units are exactly the fractions whose numerator is outside $\mathfrak p$, so its nonunits are exactly its maximal ideal ([math:thm-localisation-at-a-prime-is-local](https://alphabetamath.cc/item/thm-localisation-at-a-prime-is-local)). Here a local ring is a nonzero commutative ring with a unique maximal ideal, and a field is a nonzero commutative ring in which every nonzero element is a unit.

## Proof

1.1 By [F3], choose an affine neighborhood $U=\operatorname{Spec} A$ of $\eta$, corresponding to a prime $\mathfrak p$, and put $C=\operatorname{cl}_X(\{\eta\})$. Suppose a prime $\mathfrak q\subsetneq\mathfrak p$ existed, and let $z\in U$ correspond to $\mathfrak q$. Put $D=\operatorname{cl}_X(\{z\})$. This set is nonempty, since it contains $z$, and irreducible: in a decomposition of $D$ into two relatively closed subsets, both subsets are closed in $X$ since $D$ is closed, and the member containing $z$ must contain all of its closure $D$. By [F4], $D\cap U=V(\mathfrak q)$ contains $\eta$, so $C\subseteq D$. But $C\cap U=V(\mathfrak p)$ does not contain $z$, since $\mathfrak p\not\subseteq\mathfrak q$. Thus $C\subsetneq D$, contradicting maximality of the irreducible component $C$ in [F3]. Therefore $\mathfrak p$ is minimal among prime ideals of $A$. [F3, F4, given, choose]

2.1 Put $R=A_{\mathfrak p}\cong\mathcal O_{X,\eta}$ by [F1]. By [F6], $R$ is nonzero and local, and its maximal ideal $\mathfrak m$ consists exactly of the nonunits. This ideal is prime: if $ab\in\mathfrak m$ and $a\notin\mathfrak m$, then $a$ is a unit and $b=a^{-1}(ab)\in\mathfrak m$. By [F5] and step 1.1, $R$ has exactly one prime ideal, hence that ideal is $\mathfrak m$. The formula [F2] gives $\operatorname{Nil}(R)=\mathfrak m$. Reducedness of $X$ makes $R$ reduced, so $\mathfrak m=(0)$. Every nonzero element of $R$ is therefore a unit by [F6], and the nonzero commutative ring $R$ is a field. [F1, F2, F5, F6, step 1.1, given] ∎
