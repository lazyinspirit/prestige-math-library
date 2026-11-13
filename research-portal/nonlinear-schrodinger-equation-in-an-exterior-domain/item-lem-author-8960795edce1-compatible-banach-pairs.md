---
title: Compatible Banach pairs and their integrals
status: draft
research_item: lem-author-8960795edce1-compatible-banach-pairs
dependency_level: 0
---

## Prerequisites

- [math:def-banach-space](https://alphabetamath.cc/item/def-banach-space)
- [math:lem-closed-subspace-of-a-banach-space-is-banach](https://alphabetamath.cc/item/lem-closed-subspace-of-a-banach-space-is-banach)
- [math:thm-bochner-integrability-criterion](https://alphabetamath.cc/item/thm-bochner-integrability-criterion)
- [math:thm-bounded-linear-maps-commute-with-bochner-integration](https://alphabetamath.cc/item/thm-bounded-linear-maps-commute-with-bochner-integration)
- [math:def-measure-space](https://alphabetamath.cc/item/def-measure-space)
- [math:def-topological-vector-space-for-local-convexity](https://alphabetamath.cc/item/def-topological-vector-space-for-local-convexity)
- [math:def-strongly-measurable-banach-valued-function](https://alphabetamath.cc/item/def-strongly-measurable-banach-valued-function)
- [math:def-bochner-integrable-function](https://alphabetamath.cc/item/def-bochner-integrable-function)
- [math:thm-finite-products-of-banach-spaces-are-banach](https://alphabetamath.cc/item/thm-finite-products-of-banach-spaces-are-banach)
- [math:def-continuous-map-top](https://alphabetamath.cc/item/def-continuous-map-top)
- [math:def-hausdorff-space](https://alphabetamath.cc/item/def-hausdorff-space)
- [math:def-metric-topology](https://alphabetamath.cc/item/def-metric-topology)


## Statement

Fix a common scalar field $\mathbb K\in\{\mathbb R,\mathbb C\}$. Let $B_1,B_2$ be Banach spaces over $\mathbb K$, let $\mathcal A$ be a Hausdorff topological vector space over $\mathbb K$, and let $j_i:B_i\to\mathcal A$ be continuous injective $\mathbb K$-linear maps. The compatible-pair space $V=\{(u,v)\in B_1\times B_2:j_1u=j_2v\}$, with norm $\|(u,v)\|_V=\|u\|_{B_1}+\|v\|_{B_2}$, is Banach.

Let $(S,\Sigma,\mu)$ be any measure space. If $f:S\to V$, $f(r)=(u_r,v_r)$, is strongly measurable and $\int_S\|f(r)\|_V\,d\mu(r)<\infty$, its Bochner integral $I=\int_S f\,d\mu$ exists in $V$. The coordinate maps $r\mapsto u_r$ and $r\mapsto v_r$ are Bochner integrable in $B_1$ and $B_2$, respectively, and $j_1(\int_S u_r\,d\mu(r))=j_2(\int_S v_r\,d\mu(r))$. Scalar norm integrals use the measurable-representative convention supplied by strong simple approximation.

This criterion supplies compatibility from an actual closed Banach space, rather than assuming the existence or identification of a limit. No integral with values in the ambient topological vector space is required.

## Statement references

[math:def-banach-space](https://alphabetamath.cc/item/def-banach-space)

[math:lem-closed-subspace-of-a-banach-space-is-banach](https://alphabetamath.cc/item/lem-closed-subspace-of-a-banach-space-is-banach)

[math:thm-bochner-integrability-criterion](https://alphabetamath.cc/item/thm-bochner-integrability-criterion)

[math:thm-bounded-linear-maps-commute-with-bochner-integration](https://alphabetamath.cc/item/thm-bounded-linear-maps-commute-with-bochner-integration)

[math:def-measure-space](https://alphabetamath.cc/item/def-measure-space)

[math:def-topological-vector-space-for-local-convexity](https://alphabetamath.cc/item/def-topological-vector-space-for-local-convexity)

[math:def-strongly-measurable-banach-valued-function](https://alphabetamath.cc/item/def-strongly-measurable-banach-valued-function)

[math:def-bochner-integrable-function](https://alphabetamath.cc/item/def-bochner-integrable-function)

[math:thm-finite-products-of-banach-spaces-are-banach](https://alphabetamath.cc/item/thm-finite-products-of-banach-spaces-are-banach)

[math:def-continuous-map-top](https://alphabetamath.cc/item/def-continuous-map-top)

[math:def-hausdorff-space](https://alphabetamath.cc/item/def-hausdorff-space)

[math:def-metric-topology](https://alphabetamath.cc/item/def-metric-topology)

## Facts & Assumptions

[F1] Banach spaces are complete for their norm metrics ([math:def-banach-space](https://alphabetamath.cc/item/def-banach-space)). A finite product of Banach spaces is Banach for the sum norm ([math:thm-finite-products-of-banach-spaces-are-banach](https://alphabetamath.cc/item/thm-finite-products-of-banach-spaces-are-banach)), and closed linear subspaces with the restricted norm are Banach ([math:lem-closed-subspace-of-a-banach-space-is-banach](https://alphabetamath.cc/item/lem-closed-subspace-of-a-banach-space-is-banach)). The common scalar field and the Hausdorff topological vector space have the conventions of [math:def-topological-vector-space-for-local-convexity](https://alphabetamath.cc/item/def-topological-vector-space-for-local-convexity).

[F2] The parameter domain is a measure space ([math:def-measure-space](https://alphabetamath.cc/item/def-measure-space)). Strong measurability means almost-everywhere norm approximation by measurable Banach-valued simple functions ([math:def-strongly-measurable-banach-valued-function](https://alphabetamath.cc/item/def-strongly-measurable-banach-valued-function)). Bochner integrability and the integral are defined by integrable simple approximation in the norm-integral sense ([math:def-bochner-integrable-function](https://alphabetamath.cc/item/def-bochner-integrable-function)).

[F3] Strong measurability and an integrable norm imply Bochner integrability, with scalar norm integrals evaluated through measurable representatives supplied by the strong approximation ([math:thm-bochner-integrability-criterion](https://alphabetamath.cc/item/thm-bochner-integrability-criterion)). Bounded linear maps between Banach spaces preserve Bochner integrability and commute with the integral ([math:thm-bounded-linear-maps-commute-with-bochner-integration](https://alphabetamath.cc/item/thm-bounded-linear-maps-commute-with-bochner-integration)).

[F4] Distinct points of a Hausdorff space have disjoint open neighborhoods ([math:def-hausdorff-space](https://alphabetamath.cc/item/def-hausdorff-space)). Continuity at a point means that every open neighborhood of its image contains the image of some open neighborhood of that point ([math:def-continuous-map-top](https://alphabetamath.cc/item/def-continuous-map-top)). For a norm metric, a neighborhood of a point contains a ball of positive radius; a set is open if each of its points has such a ball inside it, and a set is closed if its complement is open ([math:def-metric-topology](https://alphabetamath.cc/item/def-metric-topology)).

## Proof

**Given:** Banach spaces and continuous injective linear maps into a common Hausdorff topological vector space, all over the fixed field $\mathbb K$; a measure space $(S,\Sigma,\mu)$ and a strongly measurable $f:S\to V$ with integrable $V$ norm.

**Goal:** Prove completeness and preservation of compatibility under the asserted integrable parameter family.

1.1 Applying the finite-product theorem in [F1] to $B_1,B_2$ shows that $B_1\times B_2$ is Banach for the norm $\|(u,v)\|=\|u\|_{B_1}+\|v\|_{B_2}$. The set $V$ is a linear subspace because $j_1,j_2$ are linear. [F1, given]

2.1 Fix $(u,v)\notin V$, so $j_1u\ne j_2v$. Hausdorff separation in [F4] gives disjoint open sets $O_1,O_2$ containing these two images. By continuity in [F4], there are open neighborhoods $N_1\ni u$ in $B_1$ and $N_2\ni v$ in $B_2$ with $j_i(N_i)\subseteq O_i$. The norm-metric convention in [F4] gives radii $a,b>0$ such that $\{u^{\prime}:\|u^{\prime}-u\|_{B_1}<a\}\subseteq N_1$ and $\{v^{\prime}:\|v^{\prime}-v\|_{B_2}<b\}\subseteq N_2$. Set $\delta=\min\{a,b\}>0$. If $\|u^{\prime}-u\|_{B_1}+\|v^{\prime}-v\|_{B_2}<\delta$, then $j_1u^{\prime}\in O_1$ and $j_2v^{\prime}\in O_2$, hence $j_1u^{\prime}\ne j_2v^{\prime}$. Thus every point of $(B_1\times B_2)\setminus V$ has a sum-norm ball contained in that complement. By [F4] the complement is open and $V$ is closed. Applying the closed-subspace theorem in [F1] to step 1.1 proves that the restricted sum norm makes $V$ Banach. This uses only the two radii for the fixed point, with no countable selection. [F1, F4, step 1.1]

3.1 By [F2] and [F3], $f$ is Bochner integrable into $V$, so $I=\int_S f\,d\mu$ belongs to $V$. Its coordinate projections $p_i:V\to B_i$ are linear and satisfy $\|p_i z\|_{B_i}\le\|z\|_V$. Applying [F3] to $p_i$ shows that each coordinate function is Bochner integrable and $p_iI=\int_S p_i f\,d\mu$. Since $I\in V$, $j_1(p_1I)=j_2(p_2I)$, which is the asserted equality of images of the coordinate integrals. This argument does not require an integral with values in $\mathcal A$ itself. [F2, F3, step 2.1] ∎
