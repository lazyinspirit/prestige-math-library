---
title: Compact normalized compressed phase sets over bounded regions
status: draft
research_item: lem-author-062cb22743bb-compact-phase
dependency_level: 1
sources:
  references: []
---

## Prerequisites

- [prop-se-generalized-ray-contract](item-prop-se-generalized-ray-contract)
- [math:thm-heine-borel-rn](https://alphabetamath.cc/item/thm-heine-borel-rn)
- [math:thm-continuous-image-of-a-compact-space-is-compact](https://alphabetamath.cc/item/thm-continuous-image-of-a-compact-space-is-compact)


## Statement

Let $\Omega$ be a smooth Euclidean exterior with the compressed-ray convention of [prop-se-generalized-ray-contract](item-prop-se-generalized-ray-contract). For a compact $K\subset\overline\Omega$, the compressed image $\mathcal K$ of $\{(0,x,-1,\xi):x\in K,\ |\xi|=1\}$ is compact and metrizable. Its base projection is continuous. Compression identifies the two normal characteristic directions at a hyperbolic boundary point; compactness does not select a preferred outgoing ray.

## Facts & Assumptions

[F1] The compressed-bundle topology and compression map are those of [prop-se-generalized-ray-contract](item-prop-se-generalized-ray-contract). On a spatial boundary chart $U$, at fixed time $t=0$, the local compressed coordinates are $(y(x);\eta',y_n\eta_n)$, with $\eta'$ including temporal frequency. On an interior chart use the ordinary cotangent coordinates. In either case write $c_U(q)$ for the fiber-coordinate vector, so $(x(q),c_U(q))$ is a coordinate description of the compressed space over $U$. Its topology is the subspace topology in these coordinates; the base map $q\mapsto x(q)$ and $j$ are continuous there. The normalization $\tau=-1$ fixes the forward unit-speed convention.

[F2] Heine–Borel, [math:thm-heine-borel-rn](https://alphabetamath.cc/item/thm-heine-borel-rn), identifies compact Euclidean sets with closed bounded sets. In particular the given compact base set has the finite-open-subcover property, and its product with the unit sphere is closed and bounded in Euclidean space.

[F3] The continuous-image theorem [math:thm-continuous-image-of-a-compact-space-is-compact](https://alphabetamath.cc/item/thm-continuous-image-of-a-compact-space-is-compact) applies to a continuous map between metric spaces with compact domain. We will establish a compatible metric on the compressed image before applying it.

## Proof

**Given:** A compact $K\subset\overline\Omega$ and the normalized phase set $S=\{(0,x,-1,\xi):x\in K,\ |\xi|=1\}$, with compressed image $\mathcal K=j(S)$. **Goal:** A metric inducing the compressed topology on $\mathcal K$, compactness in that topology, and continuity of base projection.

1.1 If $K$ is empty, its compressed image is empty and all conclusions hold. Otherwise, $S$ is a closed bounded subset of a finite-dimensional Euclidean space and is compact by [F2]. Put $X=\overline\Omega$. Consider all interior or boundary chart neighborhoods $U\subset X$ together with $a\in K$ and $r>0$ such that $X\cap\overline B(a,2r)\subset U$. The sets $X\cap B(a,r)$ in this family cover $K$, because chart neighborhoods are relatively open in $X$. Compactness of $K$ retains finitely many such triples $(U_i,a_i,r_i)$, $1\le i\le m$. This uses compactness of the base, not of $\mathcal K$; taking all admissible triples and then a finite subcover requires no infinite choice. [given, F1, F2]

2.1 Define $\chi_i(x)=\max\{0,1-|x-a_i|/r_i\}$ for $x\in X$. These continuous functions have support in $X\cap\overline B(a_i,r_i)\subset U_i$, and at every $x\in K$ some $\chi_i(x)$ is positive. For $q\in\mathcal K$ define $g_i(q)=\chi_i(x(q))c_{U_i}(q)$ when $x(q)\in U_i$, and $g_i(q)=0$ otherwise. On the part over $U_i$ this is continuous by [F1]. At a base point outside $U_i$, the base lies outside the closed set $X\cap\overline B(a_i,r_i)$, so a base neighborhood misses the support and $g_i$ is identically zero above it. Hence each $g_i$ is continuous globally on $\mathcal K$. Continuity of the base map here follows locally from [F1], without assuming a global metric. [F1, step 1.1, construct]

3.1 Define $E(q)=(x(q),g_1(q),\ldots,g_m(q))$, taking values in a finite-dimensional Euclidean space. It is continuous by step 2.1. If $E(q)=E(\widetilde q)$, then both points have the same base $x$. Choose an index $i$ with $\chi_i(x)>0$. Dividing the equal $i$th blocks by this positive number gives $c_{U_i}(q)=c_{U_i}(\widetilde q)$, so the local coordinates agree and $q=\widetilde q$. Thus $E$ is injective. [F1, step 2.1]

4.1 On the relatively open part of $E(\mathcal K)$ where $\chi_i(x)>0$, its inverse is continuous: recover the compressed chart coordinates as $(x,g_i/\chi_i(x))$ and then use the inverse coordinate chart from [F1]. These parts cover $E(\mathcal K)$, so the inverse of $E$ is continuous everywhere. Consequently $d(q,\widetilde q)=|E(q)-E(\widetilde q)|$ is a metric on $\mathcal K$ inducing exactly its compressed topology. The metric axioms follow from the Euclidean norm and injectivity; equality of topologies follows from the two continuous inverse maps. This supplies global separation and topology compatibility explicitly. [F1, step 2.1, step 3.1]

5.1 Compression $j:S\to\mathcal K$ is continuous in the original compressed topology by its local coordinate formula in [F1]. Step 4.1 identifies this topology with a metric topology, and step 1.1 supplies a compact metric domain. The hypotheses of [F3] therefore hold, proving compactness of $\mathcal K$. Its base projection is continuous, also as the first coordinate of $E$. At a hyperbolic boundary point, the two characteristic normal covectors have the same tangential components and opposite normal components; multiplication by $y_n=0$ identifies them under $j$. The construction concerns phase points only and makes no selection among outgoing rays. [F1, F3, step 1.1, step 3.1, step 4.1] ∎
