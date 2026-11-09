---
title: Normalization of an affine integral curve
status: draft
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

## Statement
Assume the Axiom of Choice. Let $k$ be a perfect field and $T=\operatorname{Spec}A$ an integral affine curve of finite type over $k$: thus $A$ is a finitely generated $k$-algebra which is a domain of Krull dimension one. Let $K=\operatorname{Frac}(A)$ and let $B$ be the set of elements of $K$ integral over $A$, meaning roots of monic polynomials with coefficients in $A$. The normalization of $T$ is $\widetilde T=\operatorname{Spec}B$, with its morphism $\nu:\widetilde T\to T$ induced by inclusion. Then $\widetilde T$ is affine and smooth over $k$, and $\nu$ is finite. If $k$ is algebraically closed, every closed point of $T$ and $\widetilde T$ has residue field $k$, and the set of points in the fiber over each closed point of $T$ is nonempty and finite; each induced residue-field map in such a fiber is an isomorphism.

## Facts & Assumptions

**Given:** AC, a perfect field $k$, and the domain $A$ and normalization ring $B$ in the statement.

**Goal:** Establish finiteness and smoothness of the normalization, then the asserted properties of its closed fibers when $k$ is algebraically closed.

[F1] The integral closure of a finite-type domain over a field in its fraction field is a finite module over that domain ([math:thm-integral-closure-finite-finite-type-domain-over-field](https://alphabetamath.cc/item/thm-integral-closure-finite-finite-type-domain-over-field)). Integral elements form a subring, and integrality is transitive ([math:cor-integral-elements-form-a-subring](https://alphabetamath.cc/item/cor-integral-elements-form-a-subring), [math:thm-transitivity-of-integrality](https://alphabetamath.cc/item/thm-transitivity-of-integrality)).

[F2] Assuming AC, an injective integral extension of nonzero rings preserves Krull dimension ([math:cor-dimension-preserved-by-integral-extensions](https://alphabetamath.cc/item/cor-dimension-preserved-by-integral-extensions)). A morphism with an affine cover of its target whose inverse images are affine with module-finite coordinate rings is finite ([math:lem-finite-morphism-affine](https://alphabetamath.cc/item/lem-finite-morphism-affine)).

[F3] Assuming AC, an integral separated finite-type one-dimensional normal scheme over a perfect field is smooth over that field. Normal means that each local ring is an integrally closed domain ([math:thm-normal-curve-is-nonsingular](https://alphabetamath.cc/item/thm-normal-curve-is-nonsingular)).

[F4] Assuming AC, a prime of a ring lifts to a prime of any integral extension containing it; for an integral extension, an upstairs prime is maximal exactly when its contraction is maximal ([math:thm-lying-over](https://alphabetamath.cc/item/thm-lying-over), [math:cor-contraction-of-maximal-ideals-integral-extension](https://alphabetamath.cc/item/cor-contraction-of-maximal-ideals-integral-extension)).

[F5] Over an algebraically closed field, every maximal ideal of a polynomial ring in finitely many variables is an evaluation ideal, and its quotient is the base field ([math:cor-weak-nullstellensatz-algebraically-closed-coordinate-form](https://alphabetamath.cc/item/cor-weak-nullstellensatz-algebraically-closed-coordinate-form)). For finitely many pairwise comaximal ideals, the map to the product of their quotients is surjective ([math:thm-chinese-remainder-theorem-for-comaximal-ideals](https://alphabetamath.cc/item/thm-chinese-remainder-theorem-for-comaximal-ideals)).

[A1] AC is the assertion that every family of nonempty sets has a choice function; it is used through the cited dimension, finite-morphism, normal-curve and lying-over results ([math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)).

## Proof

1.1 By [F1], $B$ is a subring of $K$ containing $A$ and a finite $A$-module. It is therefore a domain, and its fraction field is $K$: it lies inside $K$ and contains $A$. It is also a finite-type $k$-algebra, since a finite set of $A$-module generators generates it as an $A$-algebra and $A$ is finite type over $k$. The inclusion $A\subseteq B$ is integral by the definition of $B$. Its spectrum is affine by construction, and the one-affine-cover criterion in [F2] makes $\nu$ finite. [F1, F2, A1, given]

2.1 The ring $B$ is integrally closed in $K$: if $x\in K$ is integral over $B$, transitivity in [F1] makes $x$ integral over $A$, so $x\in B$. For any prime $\mathfrak q$ of $B$, the localization $B_{\mathfrak q}$ is integrally closed in $K$. Indeed, if $x\in K$ satisfies a monic equation over $B_{\mathfrak q}$, choose $s\in B\setminus\mathfrak q$ clearing all coefficient denominators. Multiplying the equation of degree $n$ by $s^n$ shows that $sx$ satisfies a monic equation over $B$; hence $sx\in B$ and $x\in B_{\mathfrak q}$. Thus $\operatorname{Spec}B$ is normal. [F1, step 1.1, algebra]

3.1 By [F2], $\dim B=\dim A=1$. The scheme $\operatorname{Spec}B$ is integral, separated and finite type over $k$ by step 1.1, and normal by step 2.1. The perfect-field theorem [F3] therefore makes it smooth over $k$. [F2, F3, A1, given, step 1.1, step 2.1]

4.1 Suppose $k$ is algebraically closed. For either $R=A$ or $R=B$, write $R$ as a quotient of a finite polynomial algebra over $k$. A maximal ideal of $R$ pulls back to a maximal ideal of that polynomial algebra, whose quotient is $k$ by [F5]. Consequently every closed point of $\operatorname{Spec}R$ has residue field $k$. [F5, given, step 1.1, step 3.1]

5.1 Let $\mathfrak m$ be a maximal ideal of $A$. By [F4], there is a prime of $B$ over $\mathfrak m$, and every such prime is maximal. The quotient $C=B/\mathfrak m B$ is a finite-dimensional vector space over $A/\mathfrak m=k$, because $B$ is a finite $A$-module. Its prime ideals are exactly the primes of $B$ over $\mathfrak m$, and they are maximal. If $\mathfrak n_1,\ldots,\mathfrak n_r$ are distinct such ideals in $C$, they are pairwise comaximal; [F5] gives a surjection $C\to\prod_i C/\mathfrak n_i$. Each factor is a nonzero $k$-vector space, so $r\leq\dim_k C$. Thus there can be only finitely many points in the fiber, and it is nonempty. By step 4.1 both residue fields at each such point are $k$, and their map is a $k$-algebra map, hence the identity under these identifications. This proves all assertions. [F4, F5, A1, step 1.1, step 4.1, algebra] ∎
