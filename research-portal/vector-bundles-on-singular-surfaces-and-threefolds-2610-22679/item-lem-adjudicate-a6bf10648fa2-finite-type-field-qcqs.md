---
title: Finite-type field schemes lie in the qcqs source domain
status: published
research_item: lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs
dependency_level: 0
---

PDF p. 6: Proposition 2.6 proof: finite-type evaluation domain

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:def-quasi-compact-and-quasi-separated-morphism](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-morphism)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:def-noetherian-topological-space](https://alphabetamath.cc/item/def-noetherian-topological-space)
- [math:lem-field-is-noetherian](https://alphabetamath.cc/item/lem-field-is-noetherian)
- [math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-noetherian)
- [math:thm-noetherian-ring-has-noetherian-spectrum](https://alphabetamath.cc/item/thm-noetherian-ring-has-noetherian-spectrum)
- [math:lem-noetherian-open-subsets-are-quasi-compact](https://alphabetamath.cc/item/lem-noetherian-open-subsets-are-quasi-compact)
- [math:def-field](https://alphabetamath.cc/item/def-field)
- [math:def-scheme](https://alphabetamath.cc/item/def-scheme)
- [math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes)
- [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)
- [math:def-affine-scheme-spectrum](https://alphabetamath.cc/item/def-affine-scheme-spectrum)
- [math:def-prime-spectrum-and-vanishing-sets](https://alphabetamath.cc/item/def-prime-spectrum-and-vanishing-sets)
- [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme)
- [math:def-finite-type-and-module-finite-algebras](https://alphabetamath.cc/item/def-finite-type-and-module-finite-algebras)
- [math:def-subspace-topology-top](https://alphabetamath.cc/item/def-subspace-topology-top)


## Statement
Assume the Axiom of Choice. Let $k$ be a field and $X\to\operatorname{Spec}k$ a finite-type morphism. Then the underlying topological space of $X$ is Noetherian and every open subset of $X$ is quasi-compact. In particular, $X$ is quasi-compact and quasi-separated (qcqs), without a separatedness or reducedness hypothesis. Finite type means locally of finite type and quasi-compact: here it gives an affine open cover with coordinate algebras finitely generated over $k$. Noetherian means that every increasing sequence of open subsets stabilizes; quasi-compact means that every open cover has a finite subcover; quasi-separated means that intersections of affine open subschemes are quasi-compact.

## Facts & Assumptions
**Given:** The field $k$, finite-type $k$-scheme $X$, and the Axiom of Choice.

**Goal:** Verify the qcqs evaluation domain without imposing separatedness.

[A1] [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) is assumed for the Noetherian-spectrum and open-subset compactness results below.

[F0] [math:def-field](https://alphabetamath.cc/item/def-field), [math:def-scheme](https://alphabetamath.cc/item/def-scheme) and [math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes) supply the field and scheme-morphism structures. By [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme) an affine scheme has a coordinate-ring presentation as a spectrum; [math:def-affine-scheme-spectrum](https://alphabetamath.cc/item/def-affine-scheme-spectrum) and [math:def-prime-spectrum-and-vanishing-sets](https://alphabetamath.cc/item/def-prime-spectrum-and-vanishing-sets) identify its underlying points with prime ideals. An affine open carries the restricted structure sheaf by [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme). Finitely generated $k$-algebra means finite type over $k$ in [math:def-finite-type-and-module-finite-algebras](https://alphabetamath.cc/item/def-finite-type-and-module-finite-algebras).

[F1] [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism) supplies local finite type and quasi-compactness of the structure morphism. By [math:def-quasi-compact-and-quasi-separated-morphism](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-morphism), inverse images of quasi-compact opens are quasi-compact. To check the base, [math:lem-field-is-noetherian](https://alphabetamath.cc/item/lem-field-is-noetherian) says the only ideals of $k$ are $(0)$ and $k$. The ideal $(0)$ is proper because $0\ne1$, and it is prime: if $ab=0$ with $a\ne0$, multiplication by $a^{-1}$ gives $b=0$. Thus [F0] identifies $\operatorname{Spec}k$ with a one-point space. Any open cover has a member containing that point, so this member is a finite subcover. In particular $X$ is quasi-compact. For a nonempty affine neighbourhood supplied by local finite type, its image lies in a nonempty affine open of this one-point base, necessarily the whole base. Hence its coordinate algebra is finitely generated over $k$, giving the stated affine cover.

[F2] [math:lem-field-is-noetherian](https://alphabetamath.cc/item/lem-field-is-noetherian) and [math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-noetherian) make those coordinate algebras Noetherian. Under [A1], [math:thm-noetherian-ring-has-noetherian-spectrum](https://alphabetamath.cc/item/thm-noetherian-ring-has-noetherian-spectrum) makes their spectra Noetherian topological spaces.

[F3] [math:def-noetherian-topological-space](https://alphabetamath.cc/item/def-noetherian-topological-space) supplies the increasing-open-sequence definition. Under [A1], [math:lem-noetherian-open-subsets-are-quasi-compact](https://alphabetamath.cc/item/lem-noetherian-open-subsets-are-quasi-compact) makes every open subset of a Noetherian space quasi-compact. [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme) supplies the two scheme conditions in the conclusion.

[F4] [math:def-subspace-topology-top](https://alphabetamath.cc/item/def-subspace-topology-top) gives the topology on an open subset $U$ as the traces $V\cap U$ of opens of $X$. In particular the intersections in step 1.1 are open in each $U_i$.

## Proof
1.1 If $X$ is empty, it is Noetherian and all its opens are quasi-compact. Otherwise [F1] gives a finite subcover $U_1,\ldots,U_m$ of the affine cover with finitely generated $k$-coordinate algebras. Each $U_i$ is Noetherian by [F2] under [A1]. For any increasing sequence $V_0\subseteq V_1\subseteq\cdots$ of opens of $X$, the sequence $V_n\cap U_i$ consists of opens of $U_i$ by [F4] and stabilizes for each $i$. Take the maximum $N$ of the finitely many stabilization indices. For $n\geq N$ the intersections of $V_n$ and $V_N$ with every $U_i$ coincide, so the covering property gives $V_n=V_N$. Thus $X$ is Noetherian by [F3]. [given, A1, F1, F2, F3, F4, choose]

2.1 Apply the open-subset compactness theorem in [F3] to the Noetherian space from step 1.1, under [A1]. Every open subset of $X$ is quasi-compact. In particular $X$ itself and each intersection of two affine opens are quasi-compact, giving qcqs by [F3]. Neither the finite affine cover nor this argument uses separatedness or reducedness. [A1, F3, step 1.1] ∎
