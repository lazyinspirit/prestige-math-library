---
title: Dispersive estimates and evolution
description: Organize the independent exterior resolvent, smoothing and
  Strichartz inputs with their dimensional, exponent and derivative-loss limits,
  then the negative-scale, causal L1 and real-linear perturbation transfers used
  by the article.
status: published
dependency_level: 1
---

**Purpose:** Organize the independent exterior resolvent, smoothing and Strichartz inputs with their dimensional, exponent and derivative-loss limits, then the negative-scale, causal L1 and real-linear perturbation transfers used by the article.

## Published prerequisite

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Published prerequisite

[math:def-strongly-continuous-one-parameter-unitary-group](https://alphabetamath.cc/item/def-strongly-continuous-one-parameter-unitary-group)

## Published prerequisite

[math:lem-bochner-integral-norm-inequality](https://alphabetamath.cc/item/lem-bochner-integral-norm-inequality)

## Published prerequisite

[math:lem-linearity-of-the-bochner-integral](https://alphabetamath.cc/item/lem-linearity-of-the-bochner-integral)

## Published prerequisite

[math:thm-banach-fixed-point](https://alphabetamath.cc/item/thm-banach-fixed-point)

## Published prerequisite

[math:thm-gronwall-integral-inequality](https://alphabetamath.cc/item/thm-gronwall-integral-inequality)

## Published prerequisite

[math:thm-minkowski-integral-inequality](https://alphabetamath.cc/item/thm-minkowski-integral-inequality)

## Published prerequisite

[math:thm-unbounded-borel-functional-calculus](https://alphabetamath.cc/item/thm-unbounded-borel-functional-calculus)

## Compatible Banach pairs and their integrals

[Open item](item-lem-author-8960795edce1-compatible-banach-pairs) · level 0


### Statement

Fix a common scalar field $\mathbb K\in\{\mathbb R,\mathbb C\}$. Let $B_1,B_2$ be Banach spaces over $\mathbb K$, let $\mathcal A$ be a Hausdorff topological vector space over $\mathbb K$, and let $j_i:B_i\to\mathcal A$ be continuous injective $\mathbb K$-linear maps. The compatible-pair space $V=\{(u,v)\in B_1\times B_2:j_1u=j_2v\}$, with norm $\|(u,v)\|_V=\|u\|_{B_1}+\|v\|_{B_2}$, is Banach.

Let $(S,\Sigma,\mu)$ be any measure space. If $f:S\to V$, $f(r)=(u_r,v_r)$, is strongly measurable and $\int_S\|f(r)\|_V\,d\mu(r)<\infty$, its Bochner integral $I=\int_S f\,d\mu$ exists in $V$. The coordinate maps $r\mapsto u_r$ and $r\mapsto v_r$ are Bochner integrable in $B_1$ and $B_2$, respectively, and $j_1(\int_S u_r\,d\mu(r))=j_2(\int_S v_r\,d\mu(r))$. Scalar norm integrals use the measurable-representative convention supplied by strong simple approximation.

This criterion supplies compatibility from an actual closed Banach space, rather than assuming the existence or identification of a limit. No integral with values in the ambient topological vector space is required.

### Statement references

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

### Facts & Assumptions

[F1] Banach spaces are complete for their norm metrics ([math:def-banach-space](https://alphabetamath.cc/item/def-banach-space)). A finite product of Banach spaces is Banach for the sum norm ([math:thm-finite-products-of-banach-spaces-are-banach](https://alphabetamath.cc/item/thm-finite-products-of-banach-spaces-are-banach)), and closed linear subspaces with the restricted norm are Banach ([math:lem-closed-subspace-of-a-banach-space-is-banach](https://alphabetamath.cc/item/lem-closed-subspace-of-a-banach-space-is-banach)). The common scalar field and the Hausdorff topological vector space have the conventions of [math:def-topological-vector-space-for-local-convexity](https://alphabetamath.cc/item/def-topological-vector-space-for-local-convexity).

[F2] The parameter domain is a measure space ([math:def-measure-space](https://alphabetamath.cc/item/def-measure-space)). Strong measurability means almost-everywhere norm approximation by measurable Banach-valued simple functions ([math:def-strongly-measurable-banach-valued-function](https://alphabetamath.cc/item/def-strongly-measurable-banach-valued-function)). Bochner integrability and the integral are defined by integrable simple approximation in the norm-integral sense ([math:def-bochner-integrable-function](https://alphabetamath.cc/item/def-bochner-integrable-function)).

[F3] Strong measurability and an integrable norm imply Bochner integrability, with scalar norm integrals evaluated through measurable representatives supplied by the strong approximation ([math:thm-bochner-integrability-criterion](https://alphabetamath.cc/item/thm-bochner-integrability-criterion)). Bounded linear maps between Banach spaces preserve Bochner integrability and commute with the integral ([math:thm-bounded-linear-maps-commute-with-bochner-integration](https://alphabetamath.cc/item/thm-bounded-linear-maps-commute-with-bochner-integration)).

[F4] Distinct points of a Hausdorff space have disjoint open neighborhoods ([math:def-hausdorff-space](https://alphabetamath.cc/item/def-hausdorff-space)). Continuity at a point means that every open neighborhood of its image contains the image of some open neighborhood of that point ([math:def-continuous-map-top](https://alphabetamath.cc/item/def-continuous-map-top)). For a norm metric, a neighborhood of a point contains a ball of positive radius; a set is open if each of its points has such a ball inside it, and a set is closed if its complement is open ([math:def-metric-topology](https://alphabetamath.cc/item/def-metric-topology)).

### Proof

**Given:** Banach spaces and continuous injective linear maps into a common Hausdorff topological vector space, all over the fixed field $\mathbb K$; a measure space $(S,\Sigma,\mu)$ and a strongly measurable $f:S\to V$ with integrable $V$ norm.

**Goal:** Prove completeness and preservation of compatibility under the asserted integrable parameter family.

1.1 Applying the finite-product theorem in [F1] to $B_1,B_2$ shows that $B_1\times B_2$ is Banach for the norm $\|(u,v)\|=\|u\|_{B_1}+\|v\|_{B_2}$. The set $V$ is a linear subspace because $j_1,j_2$ are linear. [F1, given]

2.1 Fix $(u,v)\notin V$, so $j_1u\ne j_2v$. Hausdorff separation in [F4] gives disjoint open sets $O_1,O_2$ containing these two images. By continuity in [F4], there are open neighborhoods $N_1\ni u$ in $B_1$ and $N_2\ni v$ in $B_2$ with $j_i(N_i)\subseteq O_i$. The norm-metric convention in [F4] gives radii $a,b>0$ such that $\{u^{\prime}:\|u^{\prime}-u\|_{B_1}<a\}\subseteq N_1$ and $\{v^{\prime}:\|v^{\prime}-v\|_{B_2}<b\}\subseteq N_2$. Set $\delta=\min\{a,b\}>0$. If $\|u^{\prime}-u\|_{B_1}+\|v^{\prime}-v\|_{B_2}<\delta$, then $j_1u^{\prime}\in O_1$ and $j_2v^{\prime}\in O_2$, hence $j_1u^{\prime}\ne j_2v^{\prime}$. Thus every point of $(B_1\times B_2)\setminus V$ has a sum-norm ball contained in that complement. By [F4] the complement is open and $V$ is closed. Applying the closed-subspace theorem in [F1] to step 1.1 proves that the restricted sum norm makes $V$ Banach. This uses only the two radii for the fixed point, with no countable selection. [F1, F4, step 1.1]

3.1 By [F2] and [F3], $f$ is Bochner integrable into $V$, so $I=\int_S f\,d\mu$ belongs to $V$. Its coordinate projections $p_i:V\to B_i$ are linear and satisfy $\|p_i z\|_{B_i}\le\|z\|_V$. Applying [F3] to $p_i$ shows that each coordinate function is Bochner integrable and $p_iI=\int_S p_i f\,d\mu$. Since $I\in V$, $j_1(p_1I)=j_2(p_2I)$, which is the asserted equality of images of the coordinate integrals. This argument does not require an integral with values in $\mathcal A$ itself. [F2, F3, step 2.1] ∎


## Strongly continuous shifted orbits in finite Bochner norms

[Open item](item-lem-author-8960795edce1-shifted-bochner-orbits) · level 0


### Statement

Assume Countable Choice. Fix $0<T<\infty$ and $1\le p<\infty$. Let $H$ be an abstract complex Hilbert space with a strongly continuous unitary group $W$, and let $Y$ be a complex Banach space. Suppose the actual orbit map $h\mapsto W(\cdot)h$ defines a bounded complex-linear map from $H$ into the Bochner space $B_2=L^p(0,T;Y)$, with bound $C_T\ge0$. No scalar-function realization of arbitrary vectors of $H$ is assumed. Set $B_1=L^1(0,T;H)$. Here $L^q(0,T;X)$ denotes almost-everywhere classes of strongly measurable $X$-valued functions with norm $(\int_0^T\|f(t)\|_X^q\,dt)^{1/q}$ for $1\le q<\infty$.

Both $B_1$ and $B_2$ are Banach spaces. For every $h\in H$ and every $r\in[0,T]$, define the truncated row $R_rh(t)=\mathbf1_{r<t<T}W(t-r)h$ for $0<t<T$. Its $B_1$ value is this cutoff $H$-valued orbit; its $B_2$ value is the restriction to $(0,T)$ of the translate by $r$ of the zero extension of the given $Y$-valued orbit class. Then $\|R_rh\|_{B_1}=(T-r)\|h\|_H\le T\|h\|_H$ and $\|R_rh\|_{B_2}\le C_T\|h\|_H$. For each fixed $h$, the maps $[0,T]\ni r\mapsto R_rh$ are norm-continuous in both spaces, including one-sided continuity at the endpoints.

Interval-step functions are dense in $L^1(0,T;H)$: the interval averages on partitions with maximum cell length tending to zero converge in that norm. For $0<r<T$ and $h\ne0$, the $H$-valued row has a jump at $t=r$ and has no continuous representative; no assertion of row membership in $C([0,T];H)$ is made.

### Statement references

[math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

[math:def-strongly-continuous-one-parameter-unitary-group](https://alphabetamath.cc/item/def-strongly-continuous-one-parameter-unitary-group)

[Time translations and mollification in Bochner $L^p$](https://alphabetamath.cc/physics/item/lem-pe12-bochner-lp-mollification)

[Bochner $L^p$ is complete for a Banach value space](https://alphabetamath.cc/physics/item/thm-pe12-bochner-lp-completeness)

[math:lem-complex-norm-realification-is-a-real-norm](https://alphabetamath.cc/item/lem-complex-norm-realification-is-a-real-norm)

[math:thm-bochner-dominated-convergence](https://alphabetamath.cc/item/thm-bochner-dominated-convergence)

[math:def-hilbert-space](https://alphabetamath.cc/item/def-hilbert-space)

[math:def-banach-space](https://alphabetamath.cc/item/def-banach-space)

[math:def-bounded-linear-operator](https://alphabetamath.cc/item/def-bounded-linear-operator)

[math:def-strongly-measurable-banach-valued-function](https://alphabetamath.cc/item/def-strongly-measurable-banach-valued-function)

[math:thm-lebesgue-outer-measure-and-measurability-are-translation-invariant](https://alphabetamath.cc/item/thm-lebesgue-outer-measure-and-measurability-are-translation-invariant)

[math:def-integral-of-a-nonnegative-simple-function](https://alphabetamath.cc/item/def-integral-of-a-nonnegative-simple-function)

[math:def-nonnegative-lebesgue-integral](https://alphabetamath.cc/item/def-nonnegative-lebesgue-integral)

### Facts & Assumptions

[F1] A strongly continuous unitary group has continuous orbits, the group law, and $\|W(t)h\|_H=\|h\|_H$ ([math:def-strongly-continuous-one-parameter-unitary-group](https://alphabetamath.cc/item/def-strongly-continuous-one-parameter-unitary-group)).

[F2] Finite-exponent Bochner completeness is [Bochner $L^p$ is complete for a Banach value space](https://alphabetamath.cc/physics/item/thm-pe12-bochner-lp-completeness), and local time translation continuity and convergence of interval averages are [Time translations and mollification in Bochner $L^p$](https://alphabetamath.cc/physics/item/lem-pe12-bochner-lp-mollification), under [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice). Their statements concern real Banach value spaces. Realification preserves the set, addition, norm and metric by [math:lem-complex-norm-realification-is-a-real-norm](https://alphabetamath.cc/item/lem-complex-norm-realification-is-a-real-norm), so strong measurability, norm continuity and completeness transfer unchanged to the complex spaces used here. Countable Choice is spent in these suppliers and in [F3].

[F3] Norm dominated convergence for strongly measurable Banach-valued functions is [math:thm-bochner-dominated-convergence](https://alphabetamath.cc/item/thm-bochner-dominated-convergence).

[F4] The spaces and the complex-linear orbit bound use [math:def-hilbert-space](https://alphabetamath.cc/item/def-hilbert-space), [math:def-banach-space](https://alphabetamath.cc/item/def-banach-space) and [math:def-bounded-linear-operator](https://alphabetamath.cc/item/def-bounded-linear-operator). Strong measurability means almost-everywhere pointwise norm approximation by finite-valued measurable simple functions ([math:def-strongly-measurable-banach-valued-function](https://alphabetamath.cc/item/def-strongly-measurable-banach-valued-function)).

[F5] Translations of subsets of $\mathbb R$ preserve Lebesgue measurability and measure, hence also null sets ([math:thm-lebesgue-outer-measure-and-measurability-are-translation-invariant](https://alphabetamath.cc/item/thm-lebesgue-outer-measure-and-measurability-are-translation-invariant)). The integral of a nonnegative simple function is the sum of its values times the measures of its level sets ([math:def-integral-of-a-nonnegative-simple-function](https://alphabetamath.cc/item/def-integral-of-a-nonnegative-simple-function)); the nonnegative integral is the supremum over simple minorants ([math:def-nonnegative-lebesgue-integral](https://alphabetamath.cc/item/def-nonnegative-lebesgue-integral)).

### Proof

**Given:** Countable Choice, the complex spaces and orbit estimate, $0<T<\infty$, $1\le p<\infty$, and parameters in $[0,T]$.

**Goal:** Establish completeness, the two uniform row bounds, parameter continuity and density of interval-step forcings.

1.1 Fix $h\in H$ and $r\in[0,T]$. Uniform approximation of the continuous orbit on $[0,T]$ by finitely many sampled values on increasingly fine interval partitions, followed by the measurable cutoff, proves strong measurability of $R_rh$ by [F4]. Unitarity gives $\|R_rh\|_{B_1}=(T-r)\|h\|_H\le T\|h\|_H$. If $r_n\in[0,T]$ tends to $r$, then $R_{r_n}h(t)\to R_rh(t)$ in $H$ for every $t\in(0,T)\setminus\{r\}$ by orbit continuity and eventual agreement of the cutoffs. Each row is bounded in norm by the integrable constant $\|h\|_H$. Thus [F3] gives $\|R_{r_n}h-R_rh\|_{B_1}\to0$, also for $r=0,T$. [F1, F3, F4, given]

1.2 Write $A_h$ for the zero extension to $\mathbb R$ of a strongly measurable representative of the given $Y$-valued orbit. For any real $a$, translated simple approximants converge outside the translated exceptional null set, so [F4] and [F5] prove strong measurability of $A_h(\cdot-a)$ and independence from the chosen representative. For a nonnegative scalar simple function $s$, translating its level sets preserves each measure, whence $\int_{\mathbb R}s(t-a)\,dt=\int_{\mathbb R}s(t)\,dt$. Translation bijects the simple minorants of a nonnegative measurable $g$ with those of $g(\cdot-a)$, so taking suprema proves the same identity for $g$ by [F5]. Apply it to $g(t)=\|A_h(t)\|_Y^p$: whole-line translation preserves its Bochner $L^p$ norm. Since $0\le r\le T$, for $0<t<T$ one has $0<t-r<T$ exactly when $r<t<T$. Consequently the specified $B_2$ row is $A_h(\cdot-r)|_{(0,T)}$; restriction decreases the norm by the simple-minorant definition in [F5], so $\|R_rh\|_{B_2}\le\|A_h\|_{L^p(\mathbb R;Y)}\le C_T\|h\|_H$. [F4, F5, given]

2.1 Regard $A_h$ as a function on $(-2T,3T)$ and recenter this interval to $(0,5T)$. The local translation theorem [F2], applied after realification, gives $\|A_h(\cdot-\delta)-A_h\|_{L^p([-T,T];Y)}\to0$ as $\delta\to0$, since $[-T,T]$ is compactly contained in $(-2T,3T)$. For $r_n,r\in[0,T]$ and $\delta_n=r_n-r$, the change of variable $u=t-r$, justified by step 1.2, gives $\|R_{r_n}h-R_rh\|_{B_2}^p=\int_{-r}^{T-r}\|A_h(u-\delta_n)-A_h(u)\|_Y^p\,du$. This is bounded by the corresponding integral over $[-T,T]$ and tends to zero. This proves parameter continuity in $B_2$ without requiring pointwise $Y$ values at exceptional times. [F2, F5, step 1.2, given]

3.1 By [F4], $H$ and $Y$ are complete; apply the real Bochner completeness theorem in [F2] to their realifications to obtain completeness of $B_1$ and $B_2$ in the unchanged metrics. Apply the interval-average assertion of [F2] with exponent one and value space the realification of $H$: the resulting interval-step functions converge to any prescribed $f\in L^1(0,T;H)$, proving density. For $0<r<T$ and $h\ne0$, the left limit of the row at $r$ is $0$ and the right limit is $W(0)h=h$. A continuous representative agreeing almost everywhere would agree with the continuous row on each of $(0,r)$ and $(r,T)$, because a nonzero continuous difference persists on an interval of positive measure. Its two limits at $r$ would then disagree. This proves the claimed failure of continuous representability and completes the stated claims. [F1, F2, F4, step 1.1, step 1.2, step 2.1] ∎



## Scalar Banach-function retarded estimates by Fatou approximation

[Open item](item-lem-author-8960795edce1-scalar-fatou-retarded-transfer) · level 0


### Statement

Assume Countable Choice. Fix $0<T<\infty$. All scalar functions and vector spaces below are over $\mathbb C$. Let $(X,\mu)$ be sigma-finite, choose $A_n\uparrow X$ of finite measure, and suppose the Hilbert space $H$ is continuously and injectively realized as scalar classes in $L^1_{\mathrm{loc},A}(X)$: for each $n$ its restriction $J_n:H\to L^1(A_n)$ is bounded, the restrictions agree, and together they separate points of $H$. Let $W$ be a strongly continuous unitary group on $H$.

Let $Y$ be a Banach space of measurable scalar classes with these explicit properties: its norm is a lattice norm, meaning that $|u|\le|v|$ almost everywhere and $v\in Y$ imply $u\in Y$ and $\|u\|_Y\le\|v\|_Y$; for every $n$, $\int_{A_n}|y|\le b_n\|y\|_Y$; if $y_j\to y$ almost everywhere, then $\|y\|_Y\le\liminf_j\|y_j\|_Y$, with norm infinity outside $Y$; for every jointly measurable scalar $G(z,x)$, with time or time-pair parameter $z$, the extended norm $z\mapsto\|G(z,\cdot)\|_Y$ is measurable; and for jointly measurable scalar $K(r,x)$ with $\int\|K(r,\cdot)\|_Y\,dr<\infty$, the spatial integral triangle property $\|\int K(r,\cdot)\,dr\|_Y\le\int\|K(r,\cdot)\|_Y\,dr$ holds. These are local-integrability, lattice, sequential Fatou, section-measurability and integral-triangle hypotheses; they do not assert Bochner measurability into $Y$. Local integrability and scalar Tonelli ensure that the scalar integral in this property actually exists almost everywhere.

Here scalar $L^a$ spaces, including $L^1(A_n)$ and scalar time $L^p$, consist of almost-everywhere equivalence classes of measurable complex functions; for $1\le a<\infty$ their norm is $(\int |u|^a)^{1/a}$. The notation $L^1_{\mathrm{loc},A}(X)$ means measurable scalar classes whose restrictions belong to $L^1(A_n)$ for every $n$. In the forcing space $L^1(0,T;H)$, a representative is a strongly measurable function $f:(0,T)\to H$, meaning a norm almost-everywhere limit of measurable $H$-valued simple functions, with $\int_0^T\|f(r)\|_H\,dr<\infty$. Two such representatives define the same forcing class exactly when they agree in $H$ for almost every $r$; its norm is $\|[f]\|_{L^1_tH}=\int_0^T\|f(r)\|_H\,dr$. Bochner integrability has its norm-limit-of-integrable-simple-functions meaning. The Bochner integrability criterion therefore supplies integrable simple approximants converging in this forcing norm. The norm and integral do not depend on the representative: the norm functions agree almost everywhere, and the Bochner norm inequality makes the integral of an almost-everywhere-zero difference zero.

For a jointly measurable scalar representative $u(t,x)$, the scalar mixed norm is $\|u\|_{L^p_tY}=(\int_0^T\|u(t,\cdot)\|_Y^p\,dt)^{1/p}$, allowing the value infinity before membership is established; scalar representatives are identified almost everywhere on $(0,T)\times X$. The notation $C_tH$ means $C([0,T];H)$ with norm $\sup_{0\le t\le T}\|u(t)\|_H$.

Suppose $1\le p<\infty$ and the actual scalar orbits satisfy $\|W(\cdot)h\|_{L^p_tY}\le C_T\|h\|_H$ on $(0,T)$, with the scalar mixed-norm convention. Then for every $f\in L^1(0,T;H)$ the continuous $H$-valued Bochner solution $Df(t)=\int_0^tW(t-r)f(r)\,dr$ has a jointly measurable scalar representative and $\|Df\|_{C_tH}+\|Df\|_{L^p_tY}\le(1+C_T)\|f\|_{L^1_tH}$.

### Statement references

[math:def-hilbert-space](https://alphabetamath.cc/item/def-hilbert-space)

[math:def-banach-space](https://alphabetamath.cc/item/def-banach-space)

[math:def-l-p-space-as-a-quotient-by-null-functions](https://alphabetamath.cc/item/def-l-p-space-as-a-quotient-by-null-functions)

[math:def-strongly-measurable-banach-valued-function](https://alphabetamath.cc/item/def-strongly-measurable-banach-valued-function)

[math:def-bochner-integrable-function](https://alphabetamath.cc/item/def-bochner-integrable-function)

[math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

[math:def-strongly-continuous-one-parameter-unitary-group](https://alphabetamath.cc/item/def-strongly-continuous-one-parameter-unitary-group)

[math:thm-bochner-integrability-criterion](https://alphabetamath.cc/item/thm-bochner-integrability-criterion)

[math:lem-bochner-integral-norm-inequality](https://alphabetamath.cc/item/lem-bochner-integral-norm-inequality)

[math:thm-bounded-linear-maps-commute-with-bochner-integration](https://alphabetamath.cc/item/thm-bounded-linear-maps-commute-with-bochner-integration)

[math:thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces](https://alphabetamath.cc/item/thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces)

[math:thm-tonelli-theorem-for-sigma-finite-product-spaces](https://alphabetamath.cc/item/thm-tonelli-theorem-for-sigma-finite-product-spaces)

[math:thm-minkowski-integral-inequality](https://alphabetamath.cc/item/thm-minkowski-integral-inequality)

[math:thm-fatou-lemma](https://alphabetamath.cc/item/thm-fatou-lemma)

### Facts & Assumptions



[F1] Unitarity and strong continuity have the meaning of [math:def-strongly-continuous-one-parameter-unitary-group](https://alphabetamath.cc/item/def-strongly-continuous-one-parameter-unitary-group). Bochner existence, simple $L^1$ approximation, the norm bound and bounded-map interchange are [math:thm-bochner-integrability-criterion](https://alphabetamath.cc/item/thm-bochner-integrability-criterion), [math:lem-bochner-integral-norm-inequality](https://alphabetamath.cc/item/lem-bochner-integral-norm-inequality) and [math:thm-bounded-linear-maps-commute-with-bochner-integration](https://alphabetamath.cc/item/thm-bounded-linear-maps-commute-with-bochner-integration).

[F2] Scalar integration on sigma-finite products is governed by [math:thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces](https://alphabetamath.cc/item/thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces) and [math:thm-tonelli-theorem-for-sigma-finite-product-spaces](https://alphabetamath.cc/item/thm-tonelli-theorem-for-sigma-finite-product-spaces). Finite-exponent time Minkowski is [math:thm-minkowski-integral-inequality](https://alphabetamath.cc/item/thm-minkowski-integral-inequality).

[F3] Scalar Fatou is [math:thm-fatou-lemma](https://alphabetamath.cc/item/thm-fatou-lemma). We use the sequential Fatou and local-integrability axioms of $Y$ as actual hypotheses, and [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice) for countable approximation choices.

[F4] The Hilbert and Banach structures use [math:def-hilbert-space](https://alphabetamath.cc/item/def-hilbert-space) and [math:def-banach-space](https://alphabetamath.cc/item/def-banach-space), over the common complex scalar field specified in the Statement. Scalar spaces use the almost-everywhere quotient convention of [math:def-l-p-space-as-a-quotient-by-null-functions](https://alphabetamath.cc/item/def-l-p-space-as-a-quotient-by-null-functions).

[F5] Strong measurability and Bochner integrability are [math:def-strongly-measurable-banach-valued-function](https://alphabetamath.cc/item/def-strongly-measurable-banach-valued-function) and [math:def-bochner-integrable-function](https://alphabetamath.cc/item/def-bochner-integrable-function). The forcing quotient and norm are defined inline in the Statement. By [math:thm-bochner-integrability-criterion](https://alphabetamath.cc/item/thm-bochner-integrability-criterion), every forcing representative is Bochner integrable and has integrable simple approximants converging in that norm; [math:lem-bochner-integral-norm-inequality](https://alphabetamath.cc/item/lem-bochner-integral-norm-inequality) makes its integral invariant under changes on time-null sets.

### Proof

**Given:** The scalar local realizations of $H$, the declared Banach-function-space axioms, the homogeneous mixed estimate and $L^1(H)$ forcing. A mixed norm here is the scalar $L^p$ norm of the section norms.

**Goal:** Identify the scalar limit with the continuous $H$ solution and prove its mixed estimate without a nonseparable Bochner integration claim.

1.1 By the forcing convention and [F5], choose a strongly measurable representative of $f$, with integrable norm and integrable simple approximants. All integrals below are independent of this choice by [F5]. The function $W(-r)f(r)$ is strongly measurable by pointwise simple approximation of $f$ and continuous orbit approximation for each of its finitely many values. It has integrable norm $\|f(r)\|_H$. Thus $G(t)=\int_0^tW(-r)f(r)\,dr$ is continuous, since increments have norm bounded by the integral of $\|f\|_H$ over the increment interval. The function $Df(t)=W(t)G(t)$ is continuous and has $C_tH$ norm at most $\|f\|_1$. A continuous $H$ path has a jointly measurable scalar representative: approximate it uniformly in $H$ by finite interval-step paths, restrict using each bounded $J_n$, and pass to a common almost-everywhere limit on the countable product exhaustion. To justify that last passage choose errors summable in the uniform $H$ norm; their product $L^1$ errors on each $A_n$ are summable, so Tonelli gives almost-everywhere convergence there. The limits agree on overlaps and represent the path in local $L^1$ for almost every time. This construction also supplies measurable orbit representatives with Borel time parameter, allowing the shifts $t-r$. [F1, F2, F3, F4, F5, given]

1.2 For a simple forcing $f(r)=\sum_{j=1}^N\mathbf1_{E_j}(r)h_j$, use those representatives to form the measurable kernel $K(r,t,x)=\mathbf1_{0<r<t<T}W(t-r)f(r)(x)$. On each finite spatial piece, its absolute triple integral is finite: $\|J_nW(t-r)h_j\|_{L^1(A_n)}\le\|J_n\|\|h_j\|_H$ by unitarity. Scalar Fubini and bounded-map interchange show that $\int_0^tK(r,t,x)\,dr$ is the local scalar representative of the $H$ integral for almost every $(t,x)$. The $Y$ integral-triangle property and then time Minkowski give $\|Df\|_{L^p_tY}\le\int_0^T\|\mathbf1_{t>r}W(t-r)f(r)\|_{L^p_tY}\,dr\le C_T\|f\|_{L^1_tH}$. The last inequality is the original homogeneous bound restricted after the translation $\tau=t-r$ to $(0,T-r)$; the section norms and all scalar integrals here are measurable by the stated axioms and [F2]. [F1, F2, given]

2.1 Using [F5] and Countable Choice, choose integrable simple $f_j\to f$ with $\|f_j-f\|_{L^1(H)}\le2^{-j}$. Step 1.1 gives uniform $H$ convergence $Df_j\to Df$, hence product $L^1((0,T)\times A_n)$ convergence with summable errors for every $n$. Use the measurable representative of $Df$ constructed there; Tonelli applied to the error series shows $Df_j(t,x)\to Df(t,x)$ outside a single product-null set in the countable exhaustion. Fubini then gives spatial almost-everywhere convergence for almost every $t$. The sequential Fatou hypothesis yields $\|Df(t)\|_Y\le\liminf_j\|Df_j(t)\|_Y$, and scalar Fatou applied to the $p$th powers proves $\|Df\|_{L^p_tY}\le\liminf_j\|Df_j\|_{L^p_tY}\le C_T\|f\|_1$. [F1, F2, F3, F5, step 1.1, step 1.2]

3.1 For completeness, the assumed spatial integral property has a well-defined left side: local-integrability bounds give $\int\int_{A_n}|K(r,x)|\,d\mu\,dr\le b_n\int\|K(r,\cdot)\|_Y\,dr<\infty$, so Tonelli implies absolute scalar integrability for almost every $x$ on every $A_n$. The mixed-norm limit has already been identified with the actual $H$ solution in step 2.1, rather than postulated. Combining that estimate with step 1.1 proves the asserted sum estimate. [F1, F2, F3, step 1.1, step 2.1] ∎


## Continuous free convolution on a finite time interval

[Open item](item-lem-author-9e2ffff7db46-free-continuous-convolution) · level 0


### Statement

Assume Countable Choice. Let $E$ be a complex Banach space regarded as a real Banach space, let $0<T<\infty$, and let $W(t)$ be a strongly continuous group of bounded real-linear operators on $E$. Suppose $M=\sup_{|t|\le T}\|W(t)\|<\infty$.

All time measurability, almost-everywhere assertions and integrals use one-dimensional Lebesgue measure restricted to $[0,T]$: explicitly, $\mathcal A_T=\{A\cap[0,T]:A\in\mathcal L(\mathbb R)\}$ and $\mu_T(B)=\lambda_1(B)$ for $B\in\mathcal A_T$. Write $ds=d\mu_T(s)$. Functions initially defined on $(0,T)$ are extended by zero at the two endpoints.

For $f\in L^1(0,T;E)$, meaning a strongly measurable function with $\|f\|_{L^1}=\int_0^T\|f(s)\|\,ds<\infty$, and $r\in[0,T]$, put $D_rf(t)=\int_r^tW(t-s)f(s)\,ds$, where the integrals are Bochner integrals in the real Banach space $E$ and $\int_r^t=-\int_t^r$ if $t<r$. Then $D_rf\in C([0,T];E)$, $D_rf(r)=0$, and $\|D_rf\|_C\le M\|f\|_{L^1}$, where $\|v\|_C=\sup_{t\in[0,T]}\|v(t)\|$.

For every $x\in E$, the orbit $t\mapsto W(t-r)x$ is continuous on $[0,T]$ with supremum norm at most $M\|x\|$. The free forcing operator is real-linear, and bounded real-linear maps commute with its defining integrals.

### Statement references

[math:def-banach-space](https://alphabetamath.cc/item/def-banach-space)

[math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

[math:def-strongly-continuous-semigroup](https://alphabetamath.cc/item/def-strongly-continuous-semigroup)

[math:def-strongly-measurable-banach-valued-function](https://alphabetamath.cc/item/def-strongly-measurable-banach-valued-function)

[math:thm-bochner-integrability-criterion](https://alphabetamath.cc/item/thm-bochner-integrability-criterion)

[math:lem-bochner-integral-norm-inequality](https://alphabetamath.cc/item/lem-bochner-integral-norm-inequality)

[math:lem-linearity-of-the-bochner-integral](https://alphabetamath.cc/item/lem-linearity-of-the-bochner-integral)

[physics:thm-bochner-dominated-convergence](https://alphabetamath.cc/physics/item/thm-bochner-dominated-convergence)

[physics:thm-bounded-linear-maps-commute-with-bochner-integration](https://alphabetamath.cc/physics/item/thm-bounded-linear-maps-commute-with-bochner-integration)

[math:thm-lebesgue-measure-is-a-complete-measure](https://alphabetamath.cc/item/thm-lebesgue-measure-is-a-complete-measure)

[math:thm-lebesgue-measure-of-a-box-of-every-kind](https://alphabetamath.cc/item/thm-lebesgue-measure-of-a-box-of-every-kind)

[math:def-bochner-integrable-function](https://alphabetamath.cc/item/def-bochner-integrable-function)

[math:cor-archimedean-reciprocal](https://alphabetamath.cc/item/cor-archimedean-reciprocal)

### Facts & Assumptions

**Given:** The group on the realification of $E$, the bound $M$, the base time $r\in[0,T]$, an arbitrary $x\in E$, and strongly measurable integrable-norm $f$, with the Lebesgue time measure specified in the Statement. All operator linearity is over $\mathbb R$.

**Goal:** Establish the continuous free forcing operator and its norm for either time orientation.

[F1] Strong continuity and the group law have the meaning of [math:def-strongly-continuous-semigroup](https://alphabetamath.cc/item/def-strongly-continuous-semigroup) on the real Banach space of [math:def-banach-space](https://alphabetamath.cc/item/def-banach-space). Strong measurability is the simple-approximation convention [math:def-strongly-measurable-banach-valued-function](https://alphabetamath.cc/item/def-strongly-measurable-banach-valued-function).

[F2] Bochner integrability and the integral are defined by norm limits of integrable-simple approximations in [math:def-bochner-integrable-function](https://alphabetamath.cc/item/def-bochner-integrable-function), including restriction to measurable sets by indicators. Strong measurability plus integrable norm gives Bochner existence ([math:thm-bochner-integrability-criterion](https://alphabetamath.cc/item/thm-bochner-integrability-criterion)); the norm inequality and real linearity are [math:lem-bochner-integral-norm-inequality](https://alphabetamath.cc/item/lem-bochner-integral-norm-inequality) and [math:lem-linearity-of-the-bochner-integral](https://alphabetamath.cc/item/lem-linearity-of-the-bochner-integral).

[F3] Bochner dominated convergence under [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice) is [physics:thm-bochner-dominated-convergence](https://alphabetamath.cc/physics/item/thm-bochner-dominated-convergence). Bounded real-linear operators commute with integrals by [physics:thm-bounded-linear-maps-commute-with-bochner-integration](https://alphabetamath.cc/physics/item/thm-bounded-linear-maps-commute-with-bochner-integration), applied over the real field.

[F4] Under the assumed Countable Choice, [math:thm-lebesgue-measure-is-a-complete-measure](https://alphabetamath.cc/item/thm-lebesgue-measure-is-a-complete-measure) supplies the complete measure $(\mathbb R,\mathcal L(\mathbb R),\lambda_1)$. Applying [math:thm-lebesgue-measure-of-a-box-of-every-kind](https://alphabetamath.cc/item/thm-lebesgue-measure-of-a-box-of-every-kind) with $n=1$ makes every interval used here measurable with its length as measure; in particular each singleton is null. Each member of $\mathcal A_T$ is Lebesgue measurable. Complements relative to $[0,T]$ and countable unions stay in $\mathcal A_T$, and the empty-set and disjoint-countable-additivity identities for $\mu_T$ are inherited directly from $\lambda_1$. Hence $( [0,T],\mathcal A_T,\mu_T)$ is a measure space; it is complete because every subset of a $\mu_T$-null set is Lebesgue measurable and contained in $[0,T]$.

[F5] Applying [math:cor-archimedean-reciprocal](https://alphabetamath.cc/item/cor-archimedean-reciprocal) in $\mathbb R$ to $\delta/T>0$ shows that for every $\delta>0$ there is an integer $N\ge1$ with $T/N<\delta$. Thus equal subdivisions of $[0,T]$ have arbitrarily small mesh.

### Proof

**Given:** The group on the realification of $E$, the bound $M$, the base time $r\in[0,T]$, an arbitrary $x\in E$, and strongly measurable integrable-norm $f$, with the Lebesgue time measure specified in the Statement. All operator linearity is over $\mathbb R$.

**Goal:** Establish the continuous free forcing operator and its norm for either time orientation.

1.1 Fix $t\in[0,T]$ and let $f_n$ be measurable simple functions converging to $f$ outside a measurable null set. The group law and real linearity give, for $s,s'\in[0,T]$ and $z\in E$, $\|W(t-s)z-W(t-s')z\|=\|W(t-s')(W(s'-s)z-z)\|\le M\|W(s'-s)z-z\|$. For each $n\ge1$, strong continuity at zero, applied to the finitely many values $z$ of $f_n$, gives a common $\delta_n>0$ such that $\|W(h)z-z\|<1/(n(M+1))$ for every such $z$ whenever $|h|<\delta_n$. By [F5] choose $N_n\ge1$ with $T/N_n<\delta_n$; Countable Choice permits these choices simultaneously in $n$. Partition $[0,T]$ into $N_n$ equal half-open intervals, including $T$ in the last interval, and let $q_n(s)$ be the left endpoint of its interval. Define $h_n(s)=W(t-q_n(s))f_n(s)$. This is a measurable simple function: its finitely many level pieces are intersections of subdivision intervals, measurable by [F4], with the measurable level sets of $f_n$. The displayed group estimate gives $\|h_n(s)-W(t-s)f_n(s)\|<1/n$ everywhere. Hence off the exceptional null set, $\|h_n(s)-W(t-s)f(s)\|\le 1/n+M\|f_n(s)-f(s)\|\to0$. This proves strong measurability of $s\mapsto W(t-s)f(s)$ with an explicit uniform partition estimate. Its norm is at most $M\|f(s)\|$, so [F2] supplies its Bochner integral and its restriction to either oriented interval. [F1, F2, F3, F4, F5, given, construct]

2.1 Write the oriented integral over $[0,T]$ with scalar multiplier $a_{r,t}(s)=\mathbf1_{(r,t)}(s)$ when $t\ge r$ and $a_{r,t}(s)=-\mathbf1_{(t,r)}(s)$ otherwise. These indicators are measurable by [F4], and multiplication by them preserves the simple approximations in step 1.1. If $t_n\to t$ in $[0,T]$, then $a_{r,t_n}(s)W(t_n-s)f(s)\to a_{r,t}(s)W(t-s)f(s)$ for almost every $s$: the indicators are eventually constant away from $r,t$, strong continuity handles the orbit, and those endpoints are null by [F4]. The dominating function is $M\|f(s)\|$. Dominated convergence proves continuity of $D_rf$, including at $r$, where its defining integral is zero. The norm inequality gives $\|D_rf(t)\|\le M\int_{\min(r,t)}^{\max(r,t)}\|f(s)\|\,ds$. [F1, F2, F3, F4, step 1.1]

3.1 For the arbitrary vector $x\in E$, the orbit assertion follows directly from [F1] and the assumed bound. The integral assertions about additivity, real scalar multiplication and bounded real-linear maps follow from [F2] and [F3], with the same oriented sign. Taking the supremum of the estimate in step 2.1 proves the stated $C$-norm bound. The norm inequality also shows that changing $f$ on a measurable null set does not change $D_rf$, so the forcing map is well defined on $L^1(0,T;E)$. [F1, F2, F3, step 2.1] ∎


## Exterior and truncated obstacle domains

[Open item](item-def-se-geometry) · level 1


### Definition

Let $n\ge2$ and let $\Theta\subset\mathbb R^n$ be nonempty and compact, with smooth boundary. Compactness means that every open cover of $\Theta$ in its Euclidean subspace topology has a finite subcover. Set $\Omega=\mathbb R^n\setminus\Theta$ and require it to be connected: it has no separation into two nonempty disjoint relatively open sets.

Smooth boundary is understood in the one-sided smooth-obstacle sense: for each $x\in\partial\Theta$ there are an open neighborhood $W$ of $x$, a rigid motion $Q$, an open ball $B\subset\mathbb R^{n-1}$, and $h\in C^\infty(B;\mathbb R)$, with $Q(W)\subset B\times\mathbb R$, such that $Q(\partial\Theta\cap W)=Q(W)\cap\{(y,s):s=h(y)\}$ and $Q(\Omega\cap W)=Q(W)\cap\{(y,s):s<h(y)\}$. Equivalently, $Q(\Theta\cap W)=Q(W)\cap\{(y,s):s\ge h(y)\}$. The one-sided condition is part of the smooth-obstacle convention used here.

For $R_0>0$ with $\Theta\subset B_{R_0}(0)$, where $B_{R_0}(0)=\{x\in\mathbb R^n:|x|<R_0\}$, define the truncated exterior $\Omega_0=B_{R_0}(0)\setminus\Theta$, the outer boundary piece $\Gamma_1=\partial B_{R_0}(0)$, the obstacle boundary piece $\Gamma_2=\partial\Theta$, and $\Gamma=\partial\Omega_0=\Gamma_1\cup\Gamma_2$. All boundaries are taken in $\mathbb R^n$.

The standing hypothesis (H) additionally requires $\Theta$ to be non-trapping: every generalized reflected ray in the exterior leaves every compact set in finite time. This condition is imposed on the geometry; it is not needed to define the sets above and does not here assert a common escape time.

### Definition references

[math:def-compact-space](https://alphabetamath.cc/item/def-compact-space)

[math:def-connected-space](https://alphabetamath.cc/item/def-connected-space)

[math:def-interior-closure-boundary-top](https://alphabetamath.cc/item/def-interior-closure-boundary-top)

[math:def-metric-ball](https://alphabetamath.cc/item/def-metric-ball)

[Bounded $C^k$ domains and boundary charts](https://alphabetamath.cc/item/def-bounded-c-k-domain-and-boundary-charts)

[prop-se-generalized-ray-contract](item-prop-se-generalized-ray-contract)

### Justification

The one-sided graph convention is the local boundary-chart convention of [Bounded $C^k$ domains and boundary charts](https://alphabetamath.cc/item/def-bounded-c-k-domain-and-boundary-charts), used for every finite differentiability order. Only that local convention is used; no Sobolev interface or assertion that the unbounded exterior is bounded is imported. In the displayed chart the exterior occupies exactly one open side of the smooth boundary, as required by the domain-side hypothesis of [prop-se-generalized-ray-contract](item-prop-se-generalized-ray-contract). This is an explicit condition in the Definition, not a claimed deduction from a graph-only hypothesis. The generalized-ray and non-trapping convention, including glancing rays and without an assertion of a uniform escape time, is supplied by [prop-se-generalized-ray-contract](item-prop-se-generalized-ray-contract).

The sets in the definition are uniquely determined by set difference, the Euclidean ball, and topological boundary as in [math:def-metric-ball](https://alphabetamath.cc/item/def-metric-ball) and [math:def-interior-closure-boundary-top](https://alphabetamath.cc/item/def-interior-closure-boundary-top). An admissible $R_0$ exists: the traces on $\Theta$ of the balls $B_m(0)$, for positive integers $m$, cover $\Theta$; a finite subcover exists by compactness, and its largest radius contains $\Theta$.

Applied to the Euclidean metric, [math:thm-metric-hausdorff-separation](https://alphabetamath.cc/item/thm-metric-hausdorff-separation) makes $\mathbb R^n$ Hausdorff. Thus [math:thm-compact-subset-of-a-hausdorff-space-is-closed](https://alphabetamath.cc/item/thm-compact-subset-of-a-hausdorff-space-is-closed) makes $\Theta$ closed, so $\Omega$ and $\Omega_0$ are open. The boundary identity follows locally. At a point of $\partial\Theta$, a sufficiently small ball lies inside $B_{R_0}(0)$, so $\Omega_0$ and $\mathbb R^n\setminus\Theta$ agree there; both $\Theta$ and its complement meet every neighborhood, giving a point of $\partial\Omega_0$. At a point of $\partial B_{R_0}(0)$, closedness of $\Theta$ gives a neighborhood disjoint from $\Theta$, and the ball and its complement both meet every neighborhood. Conversely, a point on neither boundary has a neighborhood lying entirely on one side of each of $B_{R_0}(0)$ and $\Theta$; its intersection with $\Omega_0$ is therefore either the whole neighborhood or empty. Thus no other boundary points occur. The two displayed pieces are disjoint because $\Theta$ is closed and contained in the open ball.

### Source notes

The original article supplies the geometry and notation at (1.4), and collects non-trapping and connectedness in (H). The explicit one-sided clause specifies the smooth-obstacle convention required by the independent boundary-chart and ray suppliers; it is a clarification of this generated definition, not a finding of a defect in the original article. Its citation is attribution for this article-origin definition; the justification above uses the stated mathematical suppliers.


## Abstract retarded integration in compatible time spaces

[Open item](item-lem-author-8960795edce1-abstract-retarded-integration) · level 1


### Statement

Use the spaces and rows of [lem-author-8960795edce1-shifted-bochner-orbits](item-lem-author-8960795edce1-shifted-bochner-orbits). Suppose $B_1=L^1(0,T;H)$ and $B_2=L^p(0,T;Y)$ admit continuous injective linear maps into one Hausdorff topological vector space $\mathcal A$ of time-dependent classes or distributions, and that for every $r,h$ the two specified values of $R_rh$ have the same image there. These are explicit compatibility hypotheses. For example, continuous injections $H,Y\to Z$ into a common Banach space supply $\mathcal A=L^1(0,T;Z)$; the finite interval gives the needed $L^p(Y)\to L^1(Z)$ bound by [math:thm-holder-inequality-for-integrals](https://alphabetamath.cc/item/thm-holder-inequality-for-integrals). Then for $f\in L^1(0,T;H)$, $Df(t)=\int_0^tW(t-r)f(r)\,dr$ belongs to $C([0,T];H)$ and has a compatible value in $L^p(0,T;Y)$ with $\|Df\|_{C_tH}+\|Df\|_{L^p_tY}\le(1+C_T)\|f\|_{L^1_tH}$. The compatible integral is obtained in the closed pair space of [lem-author-8960795edce1-compatible-banach-pairs](item-lem-author-8960795edce1-compatible-banach-pairs), using [math:thm-bochner-integrability-criterion](https://alphabetamath.cc/item/thm-bochner-integrability-criterion), [math:lem-bochner-integral-norm-inequality](https://alphabetamath.cc/item/lem-bochner-integral-norm-inequality) and [math:thm-bounded-linear-maps-commute-with-bochner-integration](https://alphabetamath.cc/item/thm-bounded-linear-maps-commute-with-bochner-integration).

### Facts & Assumptions



[F1] [lem-author-8960795edce1-shifted-bochner-orbits](item-lem-author-8960795edce1-shifted-bochner-orbits) supplies the two complete time spaces, row continuity, row bounds, and density of interval-step forcings.

[F2] [lem-author-8960795edce1-compatible-banach-pairs](item-lem-author-8960795edce1-compatible-banach-pairs) supplies their closed compatible Banach pair space $V$ and compatible coordinate integrals. Bochner integrability and its norm bound are [math:thm-bochner-integrability-criterion](https://alphabetamath.cc/item/thm-bochner-integrability-criterion) and [math:lem-bochner-integral-norm-inequality](https://alphabetamath.cc/item/lem-bochner-integral-norm-inequality); bounded linear maps commute with the integrals by [math:thm-bounded-linear-maps-commute-with-bochner-integration](https://alphabetamath.cc/item/thm-bounded-linear-maps-commute-with-bochner-integration). Dominated convergence in the first coordinate uses [math:thm-bochner-dominated-convergence](https://alphabetamath.cc/item/thm-bochner-dominated-convergence), and the common-Banach-space example uses [math:thm-holder-inequality-for-integrals](https://alphabetamath.cc/item/thm-holder-inequality-for-integrals).

[F3] Absolute continuity of the scalar integral ([math:thm-absolute-continuity-of-the-integral](https://alphabetamath.cc/item/thm-absolute-continuity-of-the-integral)) says that for $g\in L^1(0,T)$ and every $\varepsilon>0$, there is $\delta>0$ such that every measurable $E\subset(0,T)$ of measure less than $\delta$ satisfies $\int_E|g(r)|\,dr<\varepsilon$.

### Proof

**Given:** The row bounds and strong continuity, and the explicit ambient compatibility of their $B_1$ and $B_2$ values.

**Goal:** Construct the retarded bound for arbitrary $L^1(H)$ forcing and identify the compatible value with its continuous $H$ solution.

1.1 Let $Q_rh$ denote the pair of row values in $V$. Its norm is at most $(T+C_T)\|h\|_H$ and $r\mapsto Q_rh$ is continuous, by [F1] and the sum norm. Approximate the strongly measurable $f$ pointwise by finite-valued simple functions. For each of their finitely many values, the corresponding continuous pair-valued orbit is uniformly approximable by finite-valued functions on the compact parameter interval. This proves strong measurability of $r\mapsto Q_rf(r)$. Its integrable norm and [F2] give $U=\int_0^TQ_rf(r)\,dr\in V$, whose second coordinate has norm at most $C_T\|f\|_1$. [F1, F2, given]

1.2 Independently, $r\mapsto W(-r)f(r)$ is strongly measurable by the same simple-approximation argument and has norm $\|f(r)\|_H$. Its primitive $G(t)=\int_0^tW(-r)f(r)\,dr$ satisfies $\|G(t)-G(s)\|\le\int_{\min(s,t)}^{\max(s,t)}\|f(r)\|_H\,dr$ by the Bochner norm inequality in [F2]. The scalar function $g(r)=\|f(r)\|_H$ has a measurable representative in $L^1(0,T)$. Given $\varepsilon>0$, apply [F3] to $g$ and let $\delta>0$ be its small-measure threshold. The interval $E=(\min(s,t),\max(s,t))\subset(0,T)$ has Lebesgue measure $|t-s|$, so $|t-s|<\delta$ gives $\|G(t)-G(s)\|<\varepsilon$. Thus $G$ is continuous on $[0,T]$, including one-sided continuity at the endpoints. Bounded linear maps commute with the Bochner integral by [F2], and the group law gives $Df(t)=W(t)G(t)$. Hence $Df$ is continuous by strong continuity and isometry, and $\|Df\|_C\le\|f\|_1$. [F1, F2, F3, given]

2.1 For an interval-step forcing $f=\mathbf1_{(a,b)}h$, the integral in step 1.1 is the pair-valued integral of the continuous function $Q_rh$ on $[a,b]$. Uniform Riemann-sum approximation on this compact interval converges in $V$, since uniform continuity bounds the norm error by the mesh oscillation times its length. The first coordinates of these sums, evaluated at fixed $t$, are Riemann sums for $\int_a^b\mathbf1_{r<t}W(t-r)h\,dr$. The integrand has at most the single cutoff discontinuity at $r=t$, so these sums converge in $H$ to $Df(t)$. Their norms are uniformly bounded by $(b-a)\|h\|_H$; dominated convergence in the finite $t$ interval gives convergence also in $B_1$. Therefore the first coordinate of $U$ is the class of the continuous function $Df$. Finite sums give the same identification for all interval-step forcings. [F1, F2, step 1.1, step 1.2]

3.1 Approximate arbitrary $f$ by interval-step forcings in $L^1(H)$ using [F1]. The pair-valued integrals converge in $V$ by their norm bound, while the continuous $H$ solutions converge uniformly by step 1.2. The first coordinate therefore remains the $B_1$ class of $Df$, so closed compatibility identifies its second-coordinate value in the common ambient space. The two coordinate estimates yield the asserted sum bound. No Hilbert vector was identified with a scalar function, and no existence of a limit in an unspecified space was assumed. [F1, F2, step 1.1, step 1.2, step 2.1] ∎


## Spatial Lq classes satisfy the scalar mixed-norm hypotheses

[Open item](item-lem-author-8960795edce1-spatial-lq-mixed-norms) · level 1


### Statement

Assume Countable Choice. Let $(X,\mathcal A,\mu)$ be a sigma-finite measure space and let $1\le q\le\infty$. The scalar field may be $\mathbb R$ or $\mathbb C$. Here $L^q(X)$ consists of measurable scalar functions with finite displayed norm, modulo equality almost everywhere, with norm $\|[f]\|_q=(\int_X|f|^q\,d\mu)^{1/q}$ for finite $q$ and $\|[f]\|_\infty=\operatorname*{ess\,sup}_X|f|$ for $q=\infty$. These norms are understood as infinity for measurable scalar classes outside $L^q$. The real quotient convention extends to complex functions using their real and imaginary parts.

Then $Y=L^q(X)$ is Banach and satisfies all the scalar Banach-function hypotheses of the scalar Fatou retarded-transfer lemma: the lattice property, local integrability on a finite-measure exhaustion, sequential lower-limit inequality, measurable section norms, and the spatial integral-triangle inequality. Local integrability follows from scalar Holder, the integral-triangle inequality from finite-exponent Minkowski or the essential-bound property, and sequential lower limits and measurable section norms from scalar Fatou and Tonelli. The section parameters are time or time pairs with their sigma-finite Lebesgue measures, as in that transfer lemma.

In particular the mixed class $L^p_tL^\infty_x$ here, for $1\le p<\infty$, requires only a jointly measurable scalar representative and its measurable scalar essential-supremum norm; it does not require strong measurability with values in $L^\infty(X)$. Its norm is $(\int\|G(t,\cdot)\|_\infty^p\,dt)^{1/p}$, with representatives identified almost everywhere on the time-space product.

### Statement references

[lem-author-8960795edce1-scalar-fatou-retarded-transfer](item-lem-author-8960795edce1-scalar-fatou-retarded-transfer)

[math:thm-riesz-fischer-completeness-of-l-p](https://alphabetamath.cc/item/thm-riesz-fischer-completeness-of-l-p)

[math:thm-holder-inequality-for-integrals](https://alphabetamath.cc/item/thm-holder-inequality-for-integrals)

[math:thm-minkowski-integral-inequality](https://alphabetamath.cc/item/thm-minkowski-integral-inequality)

[math:thm-fatou-lemma](https://alphabetamath.cc/item/thm-fatou-lemma)

[math:thm-tonelli-theorem-for-sigma-finite-product-spaces](https://alphabetamath.cc/item/thm-tonelli-theorem-for-sigma-finite-product-spaces)

[math:prop-essential-supremum-is-attained-as-the-least-essential-bound](https://alphabetamath.cc/item/prop-essential-supremum-is-attained-as-the-least-essential-bound)

[math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

[math:def-finite-sigma-finite-and-semifinite-measures](https://alphabetamath.cc/item/def-finite-sigma-finite-and-semifinite-measures)

[math:def-l-p-space-as-a-quotient-by-null-functions](https://alphabetamath.cc/item/def-l-p-space-as-a-quotient-by-null-functions)

[math:def-banach-space](https://alphabetamath.cc/item/def-banach-space)

[math:def-essential-supremum-with-respect-to-a-measure](https://alphabetamath.cc/item/def-essential-supremum-with-respect-to-a-measure)

### Facts & Assumptions

[F1] Real scalar $L^q$ completeness, under Countable Choice, is [math:thm-riesz-fischer-completeness-of-l-p](https://alphabetamath.cc/item/thm-riesz-fischer-completeness-of-l-p). Scalar Holder and finite-exponent Minkowski are [math:thm-holder-inequality-for-integrals](https://alphabetamath.cc/item/thm-holder-inequality-for-integrals) and [math:thm-minkowski-integral-inequality](https://alphabetamath.cc/item/thm-minkowski-integral-inequality). Holder will be applied to the real nonnegative function $|y|$ and an indicator.

[F2] Scalar Fatou and Tonelli are [math:thm-fatou-lemma](https://alphabetamath.cc/item/thm-fatou-lemma) and [math:thm-tonelli-theorem-for-sigma-finite-product-spaces](https://alphabetamath.cc/item/thm-tonelli-theorem-for-sigma-finite-product-spaces).

[F3] The essential supremum is an almost-everywhere bound by [math:prop-essential-supremum-is-attained-as-the-least-essential-bound](https://alphabetamath.cc/item/prop-essential-supremum-is-attained-as-the-least-essential-bound), applied to the real nonnegative modulus when the scalar is complex.

[F4] We assume [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice). Sigma-finiteness means the countable finite-measure covering in [math:def-finite-sigma-finite-and-semifinite-measures](https://alphabetamath.cc/item/def-finite-sigma-finite-and-semifinite-measures); taking successive finite unions gives an increasing exhaustion. Almost-everywhere classes use [math:def-l-p-space-as-a-quotient-by-null-functions](https://alphabetamath.cc/item/def-l-p-space-as-a-quotient-by-null-functions), with the complex extension and norms defined inline in the Statement. Countable Choice is used in the completeness input [F1] to select countably many measurable representatives.

[F5] A Banach space is a real or complex normed space complete for its norm metric, as in [math:def-banach-space](https://alphabetamath.cc/item/def-banach-space). The essential-supremum norm is the infimum of the nonnegative almost-everywhere bounds in [math:def-essential-supremum-with-respect-to-a-measure](https://alphabetamath.cc/item/def-essential-supremum-with-respect-to-a-measure), applied here to the real nonnegative modulus of the scalar function. These definitions specify the Banach conclusion and every use of the spatial essential-supremum norm.

### Proof

**Given:** Countable Choice, the sigma-finite space, an increasing finite-measure exhaustion $A_n\uparrow X$, the scalar quotient convention above, and exponent $1\le q\le\infty$. We verify precisely the scalar Banach-function hypotheses specified in [lem-author-8960795edce1-scalar-fatou-retarded-transfer](item-lem-author-8960795edce1-scalar-fatou-retarded-transfer).

**Goal:** Verify the scalar Banach-function hypotheses, including the spatial essential-supremum endpoint.

1.1 The displayed functionals are unchanged by almost-everywhere changes of representatives; positivity and homogeneity follow from the corresponding modulus properties. For finite $q$, the triangle inequality follows by applying Minkowski to the two-point counting parameter space; for $q=\infty$ it follows from the essential bounds for the two summands. Real completeness is [F1], using the Countable Choice assumed in [F4]. For complex completeness, a Cauchy sequence $(f_j)$ has Cauchy real and imaginary parts because each component norm is at most the complex norm. Apply real completeness to obtain limits $u$ and $v$ in real $L^q$. The triangle inequality gives $\|f_j-(u+iv)\|_q\le\|\operatorname{Re}f_j-u\|_q+\|\operatorname{Im}f_j-v\|_q\to0$. Thus the complex quotient is Banach as well. [F1, F3, F4, F5, given]

1.2 The lattice property follows directly from monotonicity of the integral or of the essential supremum. For a finite positive-measure piece $A$, Holder applied to $|y|$ and $\mathbf1_A$ gives $\int_A|y|\,d\mu\le\mu(A)^{1-1/q}\|y\|_q$, with $1/q=0$ at infinity; zero-measure pieces are trivial. For finite $q$, Fatou applied to $|y_j|^q$ gives the sequential lower-limit property, and Tonelli gives measurability of $z\mapsto\int|G(z,x)|^q\,d\mu$ for time or time-pair parameter $z$. Minkowski applied to a jointly measurable kernel $K$ with $\int\|K(r,\cdot)\|_q\,dr<\infty$ gives $H(x)=\int|K(r,x)|\,dr\in L^q(X)$ and $\|H\|_q\le\int\|K(r,\cdot)\|_q\,dr$. Hence the scalar integral exists absolutely almost everywhere, and $|\int K(r,x)\,dr|\le H(x)$ proves its integral-triangle inequality. [F1, F2, F4, F5, given]

1.3 For $q=\infty$, write $a(z)=\operatorname*{ess\,sup}_x|G(z,x)|$. For every real $c\ge0$, the set $\{z:a(z)>c\}$ is the union over the exhaustion pieces of $\{z:\mu(\{x\in A_n:|G(z,x)|>c\})>0\}$. Indeed, a positive-measure strict superlevel set is a countable union of the sets $\{|G|\ge c+1/k\}$, so some such set has positive measure. Tonelli makes the section measures measurable, hence $a$ measurable. If $y_j\to y$ almost everywhere and $L=\liminf_j\|y_j\|_\infty<\infty$, choose a subsequence with norms at most $L+\varepsilon$ eventually. The countable union of its exceptional spatial null sets is null, so $|y|\le L+\varepsilon$ almost everywhere by taking limits. Letting $\varepsilon\downarrow0$ proves the endpoint lower-limit property; if $L=\infty$ the inequality is automatic. [F2, F3, F4, F5, given]

2.1 For a jointly measurable kernel $K(r,x)$, set $a(r)=\|K(r,\cdot)\|_\infty$, measurable by step 1.3. If $\int a(r)\,dr<\infty$, then $a$ is finite almost everywhere, and $|K(r,x)|\le a(r)$ holds for almost every $x$ for each such $r$. Tonelli applied to the measurable violation set on the finite-measure spatial pieces shows that this bound holds for almost every $(r,x)$, hence for almost every $x$ and almost every $r$. Thus its scalar integral is absolutely convergent and has absolute value at most $\int a(r)\,dr$ for almost every $x$. Taking essential suprema proves the endpoint integral-triangle inequality. Tonelli also shows that changing a joint representative on a product-null set changes its spatial section class only for a null set of parameters, so the scalar mixed norm is well defined. All five hypotheses in [lem-author-8960795edce1-scalar-fatou-retarded-transfer](item-lem-author-8960795edce1-scalar-fatou-retarded-transfer) have now been verified. No $L^\infty$-valued Bochner integral or separability assertion entered this proof. [F2, F3, F5, step 1.1, step 1.2, step 1.3] ∎


## Short-interval real Volterra contraction

[Open item](item-lem-author-9e2ffff7db46-local-volterra-contraction) · level 1


### Statement

Use the Banach space, group, Bochner conventions and constant $M$ of [lem-author-9e2ffff7db46-free-continuous-convolution](item-lem-author-9e2ffff7db46-free-continuous-convolution). Let $P:[0,T]\to\mathcal B_{\mathbb R}(E)$ be norm-continuous and $K=\sup_{s\in[0,T]}\|P(s)\|$. If $J\subset[0,T]$ is a closed interval containing $r$ with length $h$ satisfying $MKh<1$, then for every $x\in E$ and $f\in L^1(J;E)$ there is a unique $u\in C(J;E)$ satisfying $u(t)=W(t-r)x+\int_r^tW(t-s)(P(s)u(s)+f(s))\,ds$. It depends boundedly and real-linearly on $(x,f)$ and satisfies $\|u\|_{C(J)}\le M(\|x\|+\|f\|_{L^1(J)})/(1-MKh)$. The construction is the contraction principle [math:thm-banach-fixed-point](https://alphabetamath.cc/item/thm-banach-fixed-point), valid also on an interval to the left of $r$.

### Facts & Assumptions

**Given:** The data and interval in the Statement, with $q=MKh<1$.

**Goal:** Construct and uniquely determine the local continuous solution without a complex-linearity assumption on $P$.

[F1] [lem-author-9e2ffff7db46-free-continuous-convolution](item-lem-author-9e2ffff7db46-free-continuous-convolution) supplies the continuous free orbit and oriented forcing integral with $C$-norm at most $M$ times the $L^1$ norm.

[F2] A contraction of a nonempty complete metric space has a unique fixed point ([math:thm-banach-fixed-point](https://alphabetamath.cc/item/thm-banach-fixed-point)).

[F3] The notation $\mathcal B_{\mathbb R}(E)$ means the space $\mathcal B(E,E)$ of [math:def-space-of-bounded-linear-operators](https://alphabetamath.cc/item/def-space-of-bounded-linear-operators), applied to the underlying real normed space $E$. Operator norms and norm-continuity use [math:def-operator-norm](https://alphabetamath.cc/item/def-operator-norm) over the real field; in particular $\|Az\|\le\|A\|\,\|z\|$ for every bounded real-linear $A$ and every $z\in E$.

### Proof

**Given:** The data and interval in the Statement, with $q=MKh<1$.

**Goal:** Construct and uniquely determine the local continuous solution without a complex-linearity assumption on $P$.

1.1 The space $C(J;E)$ with supremum norm is complete: a uniform Cauchy sequence has a pointwise limit by completeness of $E$, converges uniformly to it by its Cauchy estimate, and the epsilon/three argument using one continuous sequence member proves continuity of the limit. Thus it is a nonempty complete metric space. Norm-continuity of $P$ and continuity of $v$ imply continuity of $s\mapsto P(s)v(s)$. By [F1] the affine map $\Phi(v)=W(\cdot-r)x+D_r(Pv+f)$ maps this whole space to itself. [F1, F3, given]

2.1 For $v,w\in C(J;E)$, the norm bound gives $\|\Phi(v)-\Phi(w)\|_C\le MK h\|v-w\|_C=q\|v-w\|_C$. Therefore [F2] gives one and only one fixed point. This estimate uses the length of the unoriented interval and consequently is identical in the backward direction. [F1, F2, F3, step 1.1]

3.1 At the fixed point, $\|u\|_C\le M\|x\|+M\|f\|_1+q\|u\|_C$, which yields the displayed estimate. Real linear combinations of solutions satisfy the same equation with the corresponding real linear combinations of their data, by real linearity of all operators and integration. Uniqueness identifies them with the constructed solutions; applying the bound to differences proves bounded dependence. [F1, step 2.1, algebra] ∎


## Non-trapping obstacle

[Open item](item-def-se-nontrapping) · level 2


### Definition

Let $n\ge2$, and let $\Theta\subset\mathbb R^n$ be a nonempty compact obstacle with smooth boundary and connected exterior $\Omega=\mathbb R^n\setminus\Theta$. A complete generalized ray is the spatial projection $x:\mathbb R\to\overline\Omega$, parametrized by physical time at unit speed, of a complete admissible generalized bicharacteristic in the exterior, including reflected and glancing boundary behavior.

The obstacle is **non-trapping** if every such complete ray leaves every compact subset of $\mathbb R^n$ in finite forward time: for each ray $x(t)$ and each compact set $K\subset\mathbb R^n$, there is a finite $t\ge0$ with $x(t)\notin K$. The time may depend on both the ray and $K$. This is the non-trapping part of the article's standing hypothesis (H).

### Definition references

[def-se-geometry](item-def-se-geometry)

[prop-se-generalized-ray-contract](item-prop-se-generalized-ray-contract)

### Justification

The geometry and the meanings of compactness, smooth boundary and connected exterior are fixed by [def-se-geometry](item-def-se-geometry). The generalized-ray convention is fixed independently by [prop-se-generalized-ray-contract](item-prop-se-generalized-ray-contract): it includes complete compressed reflected and glancing curves and identifies their spatial projections. The quantified curves have time domain $\mathbb R$; the escape test uses their forward restrictions. A curve defined only on a finite interval or on $[0,\infty)$ is not automatically a complete ray in this predicate: applying the predicate to that curve requires a complete extension. The condition above is therefore a definite predicate on the obstacle and those admissible rays. It asks for a finite escape time separately for each ray and compact set; this definition does not assert a common escape time, uniqueness at infinite-order contact, or a geometric control theorem.

### Source notes

The article's footnote on page 2 describes reflected geometric-optics rays leaving compact sets in finite time, and Remark 1 uses generalized bicharacteristics. The article is cited for attribution; the ray convention used here is supplied by the independent prerequisite.


## Homogeneous bounds transfer to L1 retarded forcing

[Open item](item-lem-se-shifted-l1-retarded-transfer) · level 2


### Statement

Assume Countable Choice ([math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)). Let $H$ be a Hilbert space and $W$ a strongly continuous unitary group ([math:def-strongly-continuous-one-parameter-unitary-group](https://alphabetamath.cc/item/def-strongly-continuous-one-parameter-unitary-group)). Fix $0<T<\infty$ and $1\le p<\infty$. Suppose the homogeneous bound $\|W(\cdot)h\|_{L^p(0,T;Y)}\le C_T\|h\|_H$ is given, with one of the following precise norm and compatibility conventions.

**Abstract Bochner convention:** $Y$ is Banach, the orbit is a Bochner $L^p(Y)$ class, and the spaces $L^1_tH$ and $L^p_tY$ are continuously and injectively mapped into a common Hausdorff space of time classes or distributions, agreeing on the truncated homogeneous rows. These identifications must commute with time restriction and time translation when passing to a shorter or translated interval. This is the closed-pair compatibility of [lem-author-8960795edce1-compatible-banach-pairs](item-lem-author-8960795edce1-compatible-banach-pairs)–[lem-author-8960795edce1-abstract-retarded-integration](item-lem-author-8960795edce1-abstract-retarded-integration). It applies, for example, to $H,Y$ continuously embedded in a common Banach value space; it does not assume arbitrary Hilbert vectors are scalar functions.

**Scalar Banach-function convention:** $H$ has continuous injective realization by scalar locally integrable functions on a sigma-finite spatial space, bounded into $L^1$ on a fixed finite-measure exhaustion. The scalar Banach function space $Y$ satisfies the local-integrability, lattice, sequential Fatou, measurable-section-norm and explicit spatial integral-triangle hypotheses in [lem-author-8960795edce1-scalar-fatou-retarded-transfer](item-lem-author-8960795edce1-scalar-fatou-retarded-transfer), and the orbit bound uses its scalar mixed norm. These hypotheses include every $Y=L^q(X)$, $1\le q\le\infty$, by [lem-author-8960795edce1-spatial-lq-mixed-norms](item-lem-author-8960795edce1-spatial-lq-mixed-norms). In particular $H\hookrightarrow L^2(X)$ supplies the required local $L^1$ compatibility by Holder on finite-measure pieces.

Under either convention, for every strongly measurable $f\in L^1(0,T;H)$ the $H$-valued Bochner integral $Df(t)=\int_0^tW(t-r)f(r)\,dr$ belongs to $C([0,T];H)$ and has the specified compatible $L^p_tY$ value, with $\|Df\|_{C_tH}+\|Df\|_{L^p_tY}\le(1+C_T)\|f\|_{L^1_tH}$. The $C_tH$ bound follows from [math:lem-bochner-integral-norm-inequality](https://alphabetamath.cc/item/lem-bochner-integral-norm-inequality), while the finite-time mixed bound uses [math:thm-minkowski-integral-inequality](https://alphabetamath.cc/item/thm-minkowski-integral-inequality) in the scalar convention and Bochner norm integration in the abstract convention. The shifted estimate uses $\mathbf1_{t>r}W(t-r)$ and restriction to $(0,T-r)$. The same constant works on every translated interval of length at most $T$, with its correspondingly translated norm. At spatial $L^\infty$ the conclusion is a scalar mixed-norm assertion and makes no claim of strong measurability into that nonseparable Banach space.

### Facts & Assumptions



[F1] [lem-author-8960795edce1-compatible-banach-pairs](item-lem-author-8960795edce1-compatible-banach-pairs) proves that compatible pairs form a closed Banach space and their integrals remain compatible. [lem-author-8960795edce1-shifted-bochner-orbits](item-lem-author-8960795edce1-shifted-bochner-orbits) constructs continuous parameter rows in $L^1_tH$ and Bochner $L^p_tY$, and [lem-author-8960795edce1-abstract-retarded-integration](item-lem-author-8960795edce1-abstract-retarded-integration) identifies their integrals with the separately continuous $H$-valued Duhamel solution. The defining group properties are [math:def-strongly-continuous-one-parameter-unitary-group](https://alphabetamath.cc/item/def-strongly-continuous-one-parameter-unitary-group).

[F2] [lem-author-8960795edce1-scalar-fatou-retarded-transfer](item-lem-author-8960795edce1-scalar-fatou-retarded-transfer) proves the scalar-function estimate by genuine local $L^1$ identification, simple-forcing approximation, spatial integration and Fatou; [lem-author-8960795edce1-spatial-lq-mixed-norms](item-lem-author-8960795edce1-spatial-lq-mixed-norms) verifies the full spatial $L^q$ range including infinity. It uses [math:thm-minkowski-integral-inequality](https://alphabetamath.cc/item/thm-minkowski-integral-inequality) after the spatial triangle property.

[F3] The continuous energy estimate is the Bochner norm inequality [math:lem-bochner-integral-norm-inequality](https://alphabetamath.cc/item/lem-bochner-integral-norm-inequality). [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice) is the inherited countable approximation assumption.

[F4] The Hilbert and Banach structures have the real or complex conventions of [math:def-hilbert-space](https://alphabetamath.cc/item/def-hilbert-space) and [math:def-banach-space](https://alphabetamath.cc/item/def-banach-space). Strong measurability means almost-everywhere norm approximation by measurable simple functions ([math:def-strongly-measurable-banach-valued-function](https://alphabetamath.cc/item/def-strongly-measurable-banach-valued-function)), and the Bochner integral uses integrable-simple approximation in the norm-integral sense ([math:def-bochner-integrable-function](https://alphabetamath.cc/item/def-bochner-integrable-function)). The finite-exponent Bochner spaces use the explicit almost-everywhere quotient and norm convention in the Statement of [lem-author-8960795edce1-shifted-bochner-orbits](item-lem-author-8960795edce1-shifted-bochner-orbits); the forcing quotient and scalar mixed norm use those in [lem-author-8960795edce1-scalar-fatou-retarded-transfer](item-lem-author-8960795edce1-scalar-fatou-retarded-transfer).

### Proof

**Given:** The unitary group, finite time exponent, homogeneous estimate, and one of the two stated actual compatibility conventions.

**Goal:** Establish the causal $L^1(H)$ forcing estimate with no loss of the abstract Hilbert/Banach case or the scalar $L^\infty$ endpoint.

1.1 In the abstract convention, apply the continuous parameter row construction and the closed-pair integration result [F1]. The $L^p(Y)$ component is bounded by $C_T\|f\|_1$, and its $L^1(H)$ component is identified there with the continuous $H$ solution. The separate $C_tH$ bound is $\|f\|_1$ by [F3]. This proves both membership and the sum estimate without a scalar realization of $H$. [F1, F3, given]

1.2 In the scalar convention, [F2] instead constructs a joint scalar representative of the continuous $H$ solution, proves the simple-forcing estimate, and passes to this same representative by local $L^1$ convergence and Fatou. Its norm estimate is exactly the same sum estimate. For $Y=L^\infty$, its endpoint proof integrates scalar kernels and their essential suprema, so it does not substitute joint scalar measurability for Bochner measurability. [F2, F3, given]

2.1 For a row starting at $r$, its nonzero portion is $W(\tau)h$ with $0<\tau<T-r$. Restricting the homogeneous norm from $(0,T)$ decreases it, giving the same $C_T$. If $I=(a,b)$ has length at most $T$, the changes $s=r-a$ and $\tau=t-a$ reduce the autonomous group formula and both norm conventions to the preceding estimates on a shortened interval. In the scalar convention these are ordinary restrictions and translations of joint representatives. In the abstract convention the stated restriction/translation compatibility supplies exactly these same identifications on the new interval. The same constant therefore holds in the translated norms. This completes all assertions using shifted homogeneous bounds and $L^1$ forcing. ∎ [F1, F2, F3, step 1.1, step 1.2]


## Global real evolution, cocycle and inverse

[Open item](item-lem-author-9e2ffff7db46-global-real-evolution) · level 2


### Statement

Under the group and perturbation hypotheses of [lem-author-9e2ffff7db46-free-continuous-convolution](item-lem-author-9e2ffff7db46-free-continuous-convolution) and [lem-author-9e2ffff7db46-local-volterra-contraction](item-lem-author-9e2ffff7db46-local-volterra-contraction), the local solutions extend uniquely to $[0,T]$ for every base time $r$, initial vector $x$ and forcing $f\in L^1(0,T;E)$. Set $S(t,r)x=u(t)$ for zero forcing. Then $S(t,r)$ is bounded real-linear, $S(r,r)=I$, $S(t,q)S(q,r)=S(t,r)$ for all $t,q,r\in[0,T]$, and $S(t,r)^{-1}=S(r,t)$. For each $x$, $(t,r)\mapsto S(t,r)x$ is jointly continuous. With $M\ge1$, $K$ as before, $\|S(t,r)\|\le M\exp(MK|t-r|)$ by [math:thm-gronwall-integral-inequality](https://alphabetamath.cc/item/thm-gronwall-integral-inequality). The forced Volterra solution satisfies $\|u\|_{C([0,T];E)}\le C_0(\|x\|+\|f\|_{L^1})$ where $C_0=M\exp(MKT)$.

### Facts & Assumptions

**Given:** $0<T<\infty$, the real Banach group with bound $M$, norm-continuous bounded real-linear $P$, and data at an arbitrary base time $r$.

**Goal:** Obtain the global two-parameter evolution and its quantitative and algebraic properties in both time directions.

[F1] Continuous oriented free convolutions, real linearity, and commuting bounded real operators with the integrals are provided by [lem-author-9e2ffff7db46-free-continuous-convolution](item-lem-author-9e2ffff7db46-free-continuous-convolution).

[F2] [lem-author-9e2ffff7db46-local-volterra-contraction](item-lem-author-9e2ffff7db46-local-volterra-contraction) constructs unique local solutions on any interval containing its base point whose length satisfies $MKh<1$, and proves real linear dependence.

[F3] Continuous scalar Gronwall, including its time-reflected form, is [math:thm-gronwall-integral-inequality](https://alphabetamath.cc/item/thm-gronwall-integral-inequality).

### Proof

**Given:** $0<T<\infty$, the real Banach group with bound $M$, norm-continuous bounded real-linear $P$, and data at an arbitrary base time $r$.

**Goal:** Obtain the global two-parameter evolution and its quantitative and algebraic properties in both time directions.

1.1 Choose a positive mesh length $h$ with $MKh<1$; if $K=0$ any positive $h$ suffices. Starting at $r$, apply [F2] on successive intervals of length at most $h$ toward $T$, and separately toward $0$, using each endpoint value as the next initial datum and restricting $f$ to the interval. There are finitely many intervals. Their continuous solutions agree at endpoints and give a continuous global function. To check the original formula, multiply the formula at an endpoint $q$ by $W(t-q)$ and add the integral from $q$ to $t$. The group law gives $W(t-q)W(q-r)=W(t-r)$ and turns the old integrand into $W(t-s)(P(s)u(s)+f(s))$. Additivity of oriented integrals then gives the integral from $r$ to $t$. Induction over the intervals proves the global equation. [F1, F2, given]

2.1 The difference of two global solutions with the same data solves the homogeneous equation with zero data. Uniqueness on each successive interval from [F2], in both directions, proves that difference zero everywhere. For arbitrary $q$, splitting the global integral at $q$ gives the same reset formula $u(t)=W(t-q)u(q)+\int_q^tW(t-s)(P(s)u(s)+f(s))\,ds$, for all time orderings. This follows from the same group and oriented-additivity calculation as in step 1.1. [F1, F2, step 1.1]

2.2 For zero forcing the norm satisfies $\|u(t)\|\le M\|x\|+MK\int_r^t\|u(s)\|\,ds$ when $t\ge r$, and the analogous bound with integral from $t$ to $r$ when $t\le r$. Gronwall in the two orientations yields $\|u(t)\|\le M\exp(MK|t-r|)\|x\|$. For nonzero forcing use the continuous nondecreasing accumulated norm in the forward orientation, and its time reflection in the backward orientation; the coarse constant choice $M(\|x\|+\|f\|_1)$ for $a$ in [F3] gives the asserted uniform bound $C_0$. [F1, F3, step 1.1]

3.1 Real linearity follows from local real linearity and global uniqueness. By the reset formula, $t\mapsto S(t,r)x$ is the unique zero-forcing solution based at $q$ with initial vector $S(q,r)x$, hence equals $S(t,q)S(q,r)x$. At $t=r$ and then with the two base times interchanged this proves the two-sided inverse formula. [F2, step 2.1, step 2.2]

4.1 Fix $r_0$ and $x$. The cocycle and the uniform norm bound give $\|S(t,r)x-S(t,r_0)x\|\le C_0\|x-S(r,r_0)x\|$, uniformly in $t$. The right side tends to zero as $r\to r_0$ because the trajectory based at $r_0$ is continuous and has value $x$ there. Combining this uniform estimate with continuity of $t\mapsto S(t,r_0)x$ proves joint strong continuity. All conclusions hold on the realification; no commutation with multiplication by $i$ was used. ∎ [step 1.1, step 2.2, step 3.1]


## Exterior Dirichlet realization, H² domain and form domain

[Open item](item-lem-se-exterior-dirichlet-realization) · level 3


### Statement

Assume the Axiom of Choice (AC). Let $\Omega=\mathbb R^n\setminus\Theta$, $n\ge2$, where $\Theta$ is compact with smooth boundary and $\Omega$ is open. Work in $L^2(\Omega;\mathbb C)$ with inner product $\langle u,v\rangle=\int_\Omega u\overline v$, linear in the first variable. For $k=1,2$, write $H^k(\Omega)=W^{k,2}(\Omega;\mathbb C)$ with its weak-derivative sum-of-squares norm, and let $H^1_0(\Omega)=W^{1,2}_0(\Omega;\mathbb C)$ be the $H^1$ norm closure of $C_c^\infty(\Omega;\mathbb C)$. Self-adjointness means equality of a densely defined operator with its Hilbert-space adjoint, including equality of domains. The form
$$q(u,v)=\int_\Omega(u\overline v+\nabla u\cdot\overline{\nabla v})$$
on $H^1_0(\Omega)$ represents a self-adjoint $A\ge I$. Its domain is $H^2(\Omega)\cap H^1_0(\Omega)$, $Au=u-\Delta u$, with $\|Au\|_2$ equivalent to $\|u\|_{H^2}$. Moreover $D(A^{1/2})=H^1_0(\Omega)$ with $\|A^{1/2}u\|_2^2=\|u\|_2^2+\|\nabla u\|_2^2$. Thus $\Delta_D=I-A$ is self-adjoint and nonpositive.

### Facts & Assumptions

**Given:** The hypotheses and conventions of the Statement.

[F1] Assume the Axiom of Choice [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice). It is the choice hypothesis of [F2] and [F3] and supplies the Countable Choice hypothesis of [F4] and [F5].

[F2] [lem-se-author-88d8498c76d6-weak-dirichlet-form](item-lem-se-author-88d8498c76d6-weak-dirichlet-form) supplies the self-adjoint shifted weak realization, its distributional domain, the energy bound and the exact square-root form norm on any nonempty open set.

[F3] [lem-se-author-88d8498c76d6-exterior-graph-domain](item-lem-se-author-88d8498c76d6-exterior-graph-domain) proves the exterior $H^2$ domain and graph norm by bounded-collar regularity and the separately justified unbounded Fourier tail.

[F4] The weak-derivative spaces and norms are supplied by [math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm) with $p=2$, complex scalars and $k=1,2$. The closure convention for $H^1_0=W^{1,2}_0$ is supplied by [math:def-wkp-zero-as-a-sobolev-closure](https://alphabetamath.cc/item/def-wkp-zero-as-a-sobolev-closure). The open-set and dimensional hypotheses hold here; their Countable Choice hypothesis follows from [F1].

[F5] Self-adjointness on the ambient complex Hilbert space means equality with the densely defined Hilbert-space adjoint, including the domain, as in [math:def-symmetric-self-adjoint-and-essentially-self-adjoint](https://alphabetamath.cc/item/def-symmetric-self-adjoint-and-essentially-self-adjoint). Its Countable Choice hypothesis follows from [F1]; the ambient $L^2$ Hilbert space and pairing are those in [F2].

### Proof

**Given:** The hypotheses and data in the Statement.

**Goal:** Prove the conclusions in the statement under its stated hypotheses.

1.1 The exterior of a compact subset of $\mathbb R^n$ is nonempty. Apply the weak-form lemma with $U=\Omega$ and the stated Dirichlet form. It gives a self-adjoint $A\ge I$, $D(A)=\{u\in H^1_0:\Delta u\in L^2\}$, $Au=u-\Delta u$, and $D(A^{1/2})=H^1_0$ with the exact form identity. [F1, F2, F4, F5, given]

2.1 The graph-domain lemma applies to this same weak domain and gives $D(A)=H^2\cap H^1_0$ and $\|Au\|_2\asymp\|u\|_{H^2}$. Since $A$ is self-adjoint, $I-A$ is self-adjoint on $D(A)$, and $\langle(I-A)u,u\rangle=-\|\nabla u\|_2^2\le0$. This identifies the nonpositive Dirichlet Laplacian and proves every assertion. [F1, F2, F3, F4, F5, step 1.1, algebra] ∎


### Source notes

This is a local collar/free-tail composition of the named library results. The article under study is not a prerequisite source. The five intermediate items supply the substantial local argument; no independent proof-review credit is claimed.


## Bochner variation of constants for real evolution

[Open item](item-lem-author-9e2ffff7db46-bochner-variation-of-constants) · level 3


### Statement

Let $S(t,r)$ be the evolution of [lem-author-9e2ffff7db46-global-real-evolution](item-lem-author-9e2ffff7db46-global-real-evolution) and use the Bochner integration conventions of [lem-author-9e2ffff7db46-free-continuous-convolution](item-lem-author-9e2ffff7db46-free-continuous-convolution). For every strongly measurable $f$ with $\int_0^T\|f(s)\|\,ds<\infty$, the oriented integral $F_r f(t)=\int_r^t S(t,s)f(s)\,ds$ exists in the real Banach space $E$, belongs to $C([0,T];E)$, and has norm at most $C_0\|f\|_1$. The unique forced solution is $u(t)=S(t,r)x+F_r f(t)$, and it satisfies $u(t)=W(t-r)x+\int_r^tW(t-s)(P(s)u(s)+f(s))\,ds$. The integral is the Bochner integral of [math:def-bochner-integrable-function](https://alphabetamath.cc/item/def-bochner-integrable-function). The exchange of triangular time integrals follows from scalar [math:thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces](https://alphabetamath.cc/item/thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces) and Bochner simple approximation as proved below. In particular a physical forcing $-if$ contributes $\int_r^tS(t,s)(-if(s))\,ds$; real linearity alone does not identify this with $-iF_rf(t)$.

### Facts & Assumptions

**Given:** The bounded jointly strongly continuous real evolution, the finite time interval, and $L^1(E)$ forcing.

**Goal:** Prove the forced formula, including integrability and the interchange used to verify its Volterra identity.

[F1] [lem-author-9e2ffff7db46-global-real-evolution](item-lem-author-9e2ffff7db46-global-real-evolution) gives joint strong continuity, the Volterra equation, global uniqueness and $\|S(t,s)\|\le C_0$.

[F2] [lem-author-9e2ffff7db46-free-continuous-convolution](item-lem-author-9e2ffff7db46-free-continuous-convolution) fixes the real Banach space, complete finite Lebesgue time measure, Countable Choice hypothesis, oriented indicator $a_{r,t}$ and free integral $D_r$, and supplies its grid-simple approximation construction. Bochner integrability means simple $L^1$ approximation as in [math:def-bochner-integrable-function](https://alphabetamath.cc/item/def-bochner-integrable-function); strongly measurable functions with integrable norm are Bochner integrable by [math:thm-bochner-integrability-criterion](https://alphabetamath.cc/item/thm-bochner-integrability-criterion). Under the inherited Countable Choice, [physics:thm-bochner-dominated-convergence](https://alphabetamath.cc/physics/item/thm-bochner-dominated-convergence) applies to norm-dominated, almost-everywhere convergent sequences. The general integral norm bound is [math:lem-bochner-integral-norm-inequality](https://alphabetamath.cc/item/lem-bochner-integral-norm-inequality). Bounded real-linear maps commute with general Bochner integrals by [physics:thm-bounded-linear-maps-commute-with-bochner-integration](https://alphabetamath.cc/physics/item/thm-bounded-linear-maps-commute-with-bochner-integration), applied to real Banach spaces.

[F3] Scalar Fubini for $L^1$ functions on the product of the two finite Lebesgue intervals is [math:thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces](https://alphabetamath.cc/item/thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces).

[F4] [math:lem-linearity-of-the-bochner-integral](https://alphabetamath.cc/item/lem-linearity-of-the-bochner-integral) supplies additivity, subtraction and real homogeneity for general Bochner integrals. [math:thm-tonelli-theorem-for-sigma-finite-product-spaces](https://alphabetamath.cc/item/thm-tonelli-theorem-for-sigma-finite-product-spaces) applies to nonnegative measurable norm errors on the finite time square, and to their sums using counting measure on $\mathbb N$. The finite time measures are sigma-finite by [F2], as is counting measure.

### Proof

**Given:** The bounded jointly strongly continuous real evolution, the finite time interval, and $L^1(E)$ forcing.

**Goal:** Prove the forced formula, including integrability and the interchange used to verify its Volterra identity.

1.1 For each fixed vector $z$, $(t,s)\mapsto S(t,s)z$ is continuous on the compact square and thus admits uniformly convergent grid-simple approximations, just as in [F2]. Composing with a pointwise simple approximation to $f(s)$ proves joint strong measurability of $S(t,s)f(s)$. The bound $C_0\|f(s)\|$ proves integrability on each time section. With the oriented indicator $a_{r,t}(s)$ from [F2], the integrands converge almost everywhere as $t_n\to t$ by [F1] and are dominated by that bound. Bochner dominated convergence in [F2] proves continuity; its norm inequality gives the uniform $C_0\|f\|_1$ estimate. [F1, F2, given]

1.2 Here is the needed vector version of [F3]. For a strongly measurable kernel $H$ on the square with integrable norm, [F2] and the Bochner definition give integrable finite-valued simple functions $H_n$ with $\int\|H_n-H\|\le 2^{-n}$. Each $H_n$ has the form $\sum_j z_j\mathbf1_{A_j}$, so [F3] on each scalar indicator and real linearity in [F4] give equality of its two iterated vector integrals and its product integral. Its section-integral functions are strongly measurable, since they are finite sums of fixed vectors times measurable scalar section measures, each of which admits scalar simple approximations. By Tonelli in [F4], the sum of the norm errors has finite product integral; for almost every outer variable the corresponding inner $L^1$ errors are summable, and the simple sections converge pointwise to $H$ off an inner null set. Thus those sections of $H$ are strongly measurable and have integrable norm, and [F2] makes their Bochner integrals exist. The norm inequality in [F2] shows convergence of the section integrals. Their norms are bounded by the integrable outer function $\int\|H\|+\sum_n\int\|H_n-H\|$, where these integrals are over the inner variable; its integrability follows from [F3] and [F4]. Bochner dominated convergence in [F2] therefore passes the outer vector integrals to the limit. The product vector integrals also converge by the norm inequality and real linearity. Repeat with the variables reversed to obtain both orders; assigning zero on the exceptional outer sets does not change the integrals. [F2, F3, F4, given]

2.1 For $r\le t$, insert $S(t,s)=W(t-s)+\int_s^tW(t-\rho)P(\rho)S(\rho,s)\,d\rho$ into $F_rf(t)$. The kernel on $r\le s\le\rho\le t$ is strongly measurable by the same grid-simple argument and norm-continuity of $P$, with bound $MKC_0\|f(s)\|$. Its product norm integral is at most $MKC_0 T\|f\|_1$, so step 1.2 applies. Commuting the bounded real-linear map $W(t-\rho)P(\rho)$ with the inner integral by [F2], and using real linearity in [F4], gives $F_rf(t)=D_rf(t)+\int_r^tW(t-\rho)P(\rho)F_rf(\rho)\,d\rho$. For $t<r$, write both oriented integrals with minus signs: the double integral has two minus signs and region $t\le\rho\le s\le r$. Reversing that region gives exactly the same displayed oriented identity; its absolute majorant is unchanged. [F1, F2, F4, step 1.1, step 1.2]

3.1 By real linearity in [F4], add the unforced Volterra equation for $S(t,r)x$ to the identity in step 2.1. The sum satisfies the forced Volterra equation and the correct value $x$ at $r$. Global uniqueness from [F1] identifies it with the solution there. The norm estimate follows from step 1.1 and the homogeneous bound in [F1]. Since all bounded maps were used as real-linear maps, none of the integral identities permits moving a complex scalar through $S$. This proves the final forcing assertion and completes the proof. [F1, F2, F4, step 1.1, step 2.1] ∎


## An explicit common interpolation model for the fractional Strichartz targets

[Open item](item-lem-se-interpolation-sobolev-model) · level 4


### Statement

Assume AC. For $1<q<\infty$, $0<s<1$ and a smooth exterior domain $\Omega$, fix the convention $\mathcal W^{s,q}(\Omega)=[L^q(\Omega),W^{1,q}(\Omega)]_s$ by complex strip interpolation. For a compatible couple $E_0,E_1$ embedded in a common Hausdorff vector space, its sum has norm $\inf_{x=x_0+x_1}(\|x_0\|_{E_0}+\|x_1\|_{E_1})$; the strip functions are bounded and continuous in this sum, norm-holomorphic inside, and have continuous $E_j$ boundary values tending to zero at imaginary infinity. The interpolation norm is the infimum of their maximum boundary supremum norm over functions taking value $x$ at $s$. A single collar-reflection/free-tail extension, bounded at both $L^q$ and $W^{1,q}$ endpoints and right-inverse to restriction, identifies this space with the restriction quotient of whole-space $H^{s,q}$, with equivalent norms. For each $0<T<\infty$ and $1\le p<\infty$, let $L^p(0,T;X)$ denote the Bochner space of strongly measurable almost-everywhere classes with norm $(\int_0^T\|f(t)\|_X^p\,dt)^{1/p}$. Then the corresponding target interpolation is $[L^p(0,T;L^q(\Omega)),L^p(0,T;W^{1,q}(\Omega))]_s=L^p(0,T;\mathcal W^{s,q}(\Omega))$. This is an explicit model chosen for the proposed applications; it is not an assertion that BGT specified this unique model, nor an identification with Slobodeckij spaces for $q\ne2$.

### External input

The abstract strip-space Banach property and exact operator theorem are the independent contract in reference 0, §2.2, PDF pp.9–10. Its whole-space Bessel identity is Definition 3.6 and Theorem 3.7, PDF p.17, using Definitions 3.1 and 3.3 on pp.15–16. The finite-exponent Bochner identity is Example 2.7(i), PDF p.11. These imported inputs have the hypotheses and reading limits in the source record. The exterior extension, its simultaneous endpoint bounds and the restriction quotient application are local arguments in the five named intermediate items.

### Facts & Assumptions

**Given:** The hypotheses of the Statement and the independently cited external contracts.

[F1] Assume the Axiom of Choice [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice); in particular its countable and dependent instances are available.

[F2] [math:def-banach-space](https://alphabetamath.cc/item/def-banach-space) and [math:def-bounded-linear-operator](https://alphabetamath.cc/item/def-bounded-linear-operator) define complex Banach spaces and common bounded linear endpoint operators; [math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm) fixes the $L^q,W^{1,q}$ weak-derivative endpoints. Under AC, [math:thm-sobolev-spaces-are-banach-spaces](https://alphabetamath.cc/item/thm-sobolev-spaces-are-banach-spaces) proves their completeness on the open set $\Omega$, using $k=0,1$, exponent $q$ and scalar field $\mathbb C$.

[F3] [lem-se-author-ccbb64dfef2c-strip-model-well-defined](item-lem-se-author-ccbb64dfef2c-strip-model-well-defined) verifies the stated sum/strip norms, their Banach well-definedness and exact interpolation of a common endpoint map.

[F4] [lem-se-author-ccbb64dfef2c-single-exterior-extension](item-lem-se-author-ccbb64dfef2c-single-exterior-extension) constructs the one collar/reflection plus tail map, and [lem-se-author-ccbb64dfef2c-sobolev-quotient-bochner-retraction](item-lem-se-author-ccbb64dfef2c-sobolev-quotient-bochner-retraction) proves the quotient-norm comparison and finite-time Bochner identity for that map.

[F5] The abstract strip-space Banach property and exact operator theorem are the independent contract in reference 0, §2.2, PDF pp.9–10. Its whole-space Bessel identity is Definition 3.6 and Theorem 3.7, PDF p.17, using Definitions 3.1 and 3.3 on pp.15–16. The finite-exponent Bochner identity is Example 2.7(i), PDF p.11. These imported inputs have the hypotheses and reading limits in the source record. The exterior extension, its simultaneous endpoint bounds and the restriction quotient application are local arguments in the five named intermediate items.

[F6] [math:def-strongly-measurable-banach-valued-function](https://alphabetamath.cc/item/def-strongly-measurable-banach-valued-function) defines strong measurability by almost-everywhere norm limits of measurable simple functions, for complex as well as real Banach values. The Bochner norm and null-set class convention in the Statement are those of [lem-se-author-ccbb64dfef2c-sobolev-quotient-bochner-retraction](item-lem-se-author-ccbb64dfef2c-sobolev-quotient-bochner-retraction).

### Proof

**Given:** The hypotheses and data in the Statement.

**Goal:** Prove the conclusions in the statement under its stated hypotheses.

1.1 By the Sobolev completeness theorem with $k=0,1$, exponent $q$ and scalar field $\mathbb C$, the endpoints $L^q(\Omega)$ and $W^{1,q}(\Omega)$ are complex Banach spaces under AC. Both inject into $L^q(\Omega)$; indeed their sum is $L^q(\Omega)$ and the displayed sum norm is its $L^q$ norm because $\|u\|_q\le\|u\|_{W^{1,q}}$. The strip-model helper therefore makes the stated interpolation convention a definite complete normed space, with precisely the boundary continuity and decay specified in the Statement. All spaces are spaces of almost-everywhere classes, so there is no representative-dependent boundary value of a spatial function in this definition. [F1, F2, F3, given]

2.1 The exterior extension helper supplies one map at both endpoints. The quotient/retraction helper applies the strip theorem to this map and restriction, identifies the whole-space target using the cited Bessel convention, and proves both inequalities comparing the interpolation and restriction-quotient norms. Thus $\mathcal W^{s,q}(\Omega)$ has exactly the asserted quotient realization without importing a bounded-domain extension as an exterior theorem. [F3, F4, F5, step 1.1]

3.1 Let $0<T<\infty$ and $1\le p<\infty$, the finite Bochner range in the Statement. Example2.7(i) and the quotient/retraction helper give $[L^p(0,T;L^q(\Omega)),L^p(0,T;W^{1,q}(\Omega))]_s=L^p(0,T;\mathcal W^{s,q}(\Omega))$. The maps are consistent on sums and on strongly measurable classes as proved there. This supplies exactly the chosen fractional target model; it adds no identification with a different fractional convention and no claim about how BGT named its spaces. [F4, F5, F6, step 2.1] ∎


### Source notes

The prior planned citation’s p.23 Bochner locator has been replaced by the independently inspected Example2.7(i), PDF p.11. Local proof provenance records the extension and retraction argument; the abstract and whole-space inputs remain explicit external premises. No proof or scaffold review is asserted.


## Transfer of a compatible spacetime norm through the free forcing map

[Open item](item-lem-author-9e2ffff7db46-spacetime-map-transfer) · level 4


### Statement

Use the free-convolution, global-evolution and Bochner variation-of-constants interfaces on a prescribed forward interval $I=[a,b]\subset[0,T]$, retaining their group and perturbation hypotheses, including Countable Choice. Regard $E$, $C(I;E)$ and $L^1(I;E)$ as real spaces. Let $Y_I$ be a real Banach space of time-dependent functions or distributions, with $Y_I$ and $C(I;E)$ injected by real-linear maps into the same Hausdorff real topological vector space $\mathcal A_I$. Equality in $\mathcal A_I$ is the compatibility convention for their representatives. Assume the actual free orbit $H_ax(t)=W(t-a)x$ and the actual retarded operator $D_ag(t)=\int_a^tW(t-s)g(s)\,ds$ define bounded real-linear maps into $Y_I$ with norms at most $A_I$ and $B_I$, respectively, for every $x\in E$ and every $g\in L^1(I;E)$. Then the forced solution $u(t)=S(t,a)x+\int_a^tS(t,s)f(s)\,ds$ lies in $Y_I$ and $\|u\|_{Y_I}\le A_I\|x\|+B_I((b-a)K C_I(\|x\|+\|f\|_1)+\|f\|_1)$, where $C_I=M\exp(MK(b-a))$. Bounds on subintervals are asserted with their stated constants; uniform bounds require uniform $A_I,B_I$. Backward spacetime bounds hold if the same orbit and forcing-map hypotheses are supplied after time reflection, with group $W(-t)$ and the reflected coefficient $-P$.

### Statement references

[lem-author-9e2ffff7db46-free-continuous-convolution](item-lem-author-9e2ffff7db46-free-continuous-convolution)

[lem-author-9e2ffff7db46-global-real-evolution](item-lem-author-9e2ffff7db46-global-real-evolution)

[lem-author-9e2ffff7db46-bochner-variation-of-constants](item-lem-author-9e2ffff7db46-bochner-variation-of-constants)

[math:def-banach-space](https://alphabetamath.cc/item/def-banach-space)

[math:def-bounded-linear-operator](https://alphabetamath.cc/item/def-bounded-linear-operator)

[math:def-topological-vector-space-for-local-convexity](https://alphabetamath.cc/item/def-topological-vector-space-for-local-convexity)

### Facts & Assumptions

**Given:** The compatible injections, the two bounded free maps on the named interval, and $L^1(I;E)$ forcing.

**Goal:** Obtain the additional spacetime estimate by applying a bounded map already supplied, without integrating into $Y_I$.

[F1] [lem-author-9e2ffff7db46-free-continuous-convolution](item-lem-author-9e2ffff7db46-free-continuous-convolution) defines the actual retarded free forcing map in $C(I;E)$, while the hypotheses here supply its compatible $Y_I$ value for the same input.

[F2] [lem-author-9e2ffff7db46-global-real-evolution](item-lem-author-9e2ffff7db46-global-real-evolution) and [lem-author-9e2ffff7db46-bochner-variation-of-constants](item-lem-author-9e2ffff7db46-bochner-variation-of-constants) give the solution and the estimate $\|u\|_{C(I;E)}\le C_I(\|x\|+\|f\|_1)$ with initial time $a$.

[F3] The real Banach-space convention and its norm structure are supplied by [math:def-banach-space](https://alphabetamath.cc/item/def-banach-space). The bounds for the real-linear maps $H_a:E\to Y_I$ and $D_a:L^1(I;E)\to Y_I$ have the meaning of [math:def-bounded-linear-operator](https://alphabetamath.cc/item/def-bounded-linear-operator) with common scalar field $\mathbb R$. The ambient space is a Hausdorff TVS over $\mathbb R$ in [math:def-topological-vector-space-for-local-convexity](https://alphabetamath.cc/item/def-topological-vector-space-for-local-convexity); the injections are real-linear, and equality of their images is the stated compatibility convention.

### Proof

**Given:** The compatible injections, the two bounded free maps on the named interval, and $L^1(I;E)$ forcing.

**Goal:** Obtain the additional spacetime estimate by applying a bounded map already supplied, without integrating into $Y_I$.

1.1 The continuous function $P(t)u(t)$ has $L^1(I;E)$ norm at most $(b-a)K\|u\|_C$. Hence $g=Pu+f$ belongs to $L^1(I;E)$. The solution identity is $u=H_ax+D_ag$ in $C(I;E)$ by [F2]. Both terms on the right have compatible images in $Y_I$ by the two map hypotheses. Their sum therefore represents $u$ in $\mathcal A_I$, proving membership in $Y_I$ with the declared compatibility. [F1, F2, F3, given]

2.1 The triangle inequality and the assumed map bounds give $\|u\|_{Y_I}\le A_I\|x\|+B_I((b-a)K\|u\|_C+\|f\|_1)$. Substituting [F2] proves the displayed estimate. This uses no $Y_I$-valued Bochner integral; all integrals used to identify the free map were taken in $E$. Thus a nonseparable spatial factor in a chosen spacetime norm introduces no additional integration claim. [F1, F2, F3, step 1.1, given]

3.1 Restricting to a shorter interval gives exactly its stated free-map constants, so uniformity cannot be inferred without their uniform bounds. For a backward interval ending at $b$, set $\tau=b-t$ and $\sigma=b-s$. Changing variables in the oriented Volterra equation replaces $W(t-s)$ by $W(-\tau+\sigma)$, the perturbation by $-P(b-\sigma)$ and the forcing by $-f(b-\sigma)$. This is the same forward problem with reflected group $\widetilde W(\tau)=W(-\tau)$ and coefficient $\widetilde P(\sigma)=-P(b-\sigma)$. Applying steps 1.1–2.1 under its supplied free-map hypotheses proves the final assertion. [F1, F2, step 1.1, step 2.1] ∎


## Positive spectral Hilbert scale: duality and interpolation

[Open item](item-lem-se-positive-spectral-scale-contract) · level 5



### Statement

Assume AC and let $A\ge I$ be self-adjoint on a nonzero complex Hilbert space $H$. Complete $D(A^\infty)=\bigcap_{n\ge1}D(A^n)$ in $\|A^{s/2}u\|_H$ to obtain $H_A^s$ for every real $s$. For $s\ge0$ this is $D(A^{s/2})$; the pivot pairing identifies $H_A^{-s}$ isometrically with the antidual of $H_A^s$, where the antidual consists of bounded conjugate-linear scalar functionals and the inner product is linear in the first variable. The map $A^{-r/2}:H_A^s\to H_A^{s+r}$ is isometric and onto for all real $r,s$. For $0<\theta<1$,
$$[H_A^a,H_A^b]_\theta=H_A^{(1-\theta)a+\theta b}$$
isometrically, using bounded continuous sum-valued strip functions holomorphic inside with endpoint-continuous boundary values vanishing at imaginary infinity, and the infimum of the maximum endpoint supremum norm.

Let $B\ge I$ be self-adjoint on another nonzero complex Hilbert space $K$. If a consistent complex-linear map is bounded $H_A^{a_j}\to K_B^{b_j}$, $j=0,1$, with bounds $M_j$, then it is bounded between the interpolated indices with norm at most $M_0^{1-\theta}M_1^\theta$. This also holds for target $L^2(0,\tau;K_B^b)$, $0<\tau<\infty$; in particular interpolation of these target spaces is isometric to $L^2(0,\tau;K_B^{(1-\theta)b_0+\theta b_1})$.

The unitary group $e^{it(I-A)}$ extends consistently to every scale level and commutes with all scale powers. For a real form realization on $H=L^2(\Omega;\mathbb C)$, complex conjugation $Ju=\overline u$ is an isometric real-linear involution at every level. Precisely, let $\Omega\subseteq\mathbb R^n$ be nonempty and open, $n\ge1$, and let $Q\subseteq H$ be a dense complex linear subspace invariant under $J$. Let $q:Q\times Q\to\mathbb C$ be sesquilinear, linear in its first variable, with $q(u,v)=\overline{q(v,u)}$, $q(u,u)\ge\|u\|_2^2$, and $Q$ complete for $(q(u,u)+\|u\|_2^2)^{1/2}$. Suppose $q(Ju,Jv)=\overline{q(u,v)}$. Here $A$ is the unique self-adjoint operator represented by $q$: its domain consists exactly of $u\in Q$ for which some $f\in H$ satisfies $q(u,v)=\langle f,v\rangle_2$ for every $v\in Q$, and then $Au=f$. In particular $A\ge I$.

The real-coefficient Dirichlet energy forms intended here are defined on $Q=H^1_0(\Omega;\mathbb C)$, the $H^1$ closure of $C_c^\infty(\Omega;\mathbb C)$, by
$$q(u,v)=\int_\Omega\left(\sum_{i,j=1}^n a^{ij}(x)D_ju\,\overline{D_iv}+c(x)u\overline v\right)\,dx.$$
The coefficients $a^{ij}$ are real measurable essentially bounded, $a^{ij}=a^{ji}$ almost everywhere, and for some $\kappa>0$ satisfy $\sum_{i,j}a^{ij}(x)\xi_j\xi_i\ge\kappa|\xi|^2$ for all $\xi\in\mathbb R^n$ almost everywhere; $c$ is real essentially bounded with $c\ge1$ almost everywhere. These forms satisfy the preceding hypotheses, including conjugation invariance, on every such open set. Taking $a^{ij}=\delta_{ij}$ and $c=1$ gives the shifted Dirichlet energy for $I-\Delta_D$, including the exterior-domain realization.

Here the Dirichlet Laplacian is defined by $\Delta_D=-L$ on $D(\Delta_D)=D(L)$, where $L\ge0$ is the unique self-adjoint operator represented by the unshifted form $q_0(u,v)=\sum_{j=1}^n\int_\Omega D_ju\,\overline{D_jv}\,dx$ on $Q=H^1_0(\Omega;\mathbb C)$. Explicitly, $D(L)$ consists of those $u\in Q$ for which some $f\in L^2(\Omega;\mathbb C)$ satisfies $q_0(u,v)=\langle f,v\rangle_2$ for every $v\in Q$, and then $Lu=f$. For $a^{ij}=\delta_{ij}$ and $c=1$, the represented shifted operator satisfies $D(A)=D(L)$ and $Au=u+Lu$, so $A=I-\Delta_D$.

### Facts & Assumptions

[F1] The cutoff-core lemma constructs the compatible completed scales, their onto unitary identifications and all scale powers [lem-author-03489e9088b7-spectral-cutoff-scale-identifications](item-lem-author-03489e9088b7-spectral-cutoff-scale-identifications).

[F2] Exact complex interpolation of scales and its endpoint operator bound are proved by analytic profiles and cutoff dual tests [lem-author-03489e9088b7-exact-scale-operator-interpolation](item-lem-author-03489e9088b7-exact-scale-operator-interpolation).

[F3] The pointwise lifted PVM gives the exact L2-in-time scale identity, without replacing equality of norms by equivalence [lem-author-03489e9088b7-bochner-lifted-spectral-measure](item-lem-author-03489e9088b7-bochner-lifted-spectral-measure).

[F4] Under countable choice, Hilbert-space Riesz representation is onto and isometric; use it for the pivot antidual after conjugating the functional [math:thm-riesz-representation-for-hilbert-space](https://alphabetamath.cc/item/thm-riesz-representation-for-hilbert-space).

[F5] This physics-namespace supplier has domain mathematics and mathematical premises: for a self-adjoint generator its spectral exponential is a strongly continuous unitary group and commutes with its bounded spectral calculus [physics:lem-nrqm-autonomous-dynamics-flow-calculus](https://alphabetamath.cc/physics/item/lem-nrqm-autonomous-dynamics-flow-calculus).

[F6] Uniqueness of the regular spectral PVM for a self-adjoint operator identifies conjugated spectral projections [math:thm-spectral-theorem-for-unbounded-self-adjoint-operators](https://alphabetamath.cc/item/thm-spectral-theorem-for-unbounded-self-adjoint-operators).

[F7] The Borel functional calculus supplies the exact domains and norm identities for real powers, products and bounded unitary multipliers [math:thm-unbounded-borel-functional-calculus](https://alphabetamath.cc/item/thm-unbounded-borel-functional-calculus).

[F8] Full AC is assumed exactly for the spectral suppliers and hence for their transitive choice requirements, including countable choice for Riesz and Bochner completeness [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

[F9] Closed semibounded symmetric forms use the first-variable-linear pairing and the positive associated-operator convention [physics:def-nrqm-coulomb-closed-semibounded-forms](https://alphabetamath.cc/physics/item/def-nrqm-coulomb-closed-semibounded-forms). Under AC, a densely defined symmetric form bounded below and complete in its shifted form norm has a unique self-adjoint representing operator, with exactly the domain characterization stated above [physics:thm-nrqmx-closed-form-representation](https://alphabetamath.cc/physics/item/thm-nrqmx-closed-form-representation). Both suppliers have domain mathematics.

[F10] Complex weak Sobolev derivatives use the bilinear test identity, and $H^1_0$ is the $H^1$ closure of the test functions [math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm) [math:def-wkp-zero-as-a-sobolev-closure](https://alphabetamath.cc/item/def-wkp-zero-as-a-sobolev-closure). Under countable choice $H^1$ and its closed subspace $H^1_0$ are Hilbert spaces with squared norm $\|u\|_2^2+\sum_j\|D_ju\|_2^2$ [math:lem-w-one-two-is-a-hilbert-space](https://alphabetamath.cc/item/lem-w-one-two-is-a-hilbert-space). On every open set the complex test functions, hence $H^1_0$, are dense in complex $L^2$ [math:lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set](https://alphabetamath.cc/item/lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set).

### Proof

**Given:** The data and AC in the statement.

**Goal:** All asserted identifications and bounds, with the stated exact norms.

1.1 The cutoff-core construction identifies $H_A^s$ with the completed spectral domain by the onto map $J_su=A^{s/2}u$, gives the claimed positive-index domain equality, and extends $A^{-r/2}$ as an onto isometry. For $s\ge0$ and core vectors $u,v$, the product rule gives $\langle u,v\rangle_H=\langle A^{-s/2}u,A^{s/2}v\rangle_H$. Thus define the pivot pairing for all $u\in H_A^{-s},v\in H_A^s$ by $\langle u,v\rangle_{-s,s}=\langle J_{-s}u,J_sv\rangle_H$. It extends the pivot pairing on the dense core, is linear in $u$ and conjugate-linear in $v$, and has norm bound $\|u\|_{-s}\|v\|_s$. Its functional norm equals $\|u\|_{-s}$ by taking $J_sv$ to be the normalized $J_{-s}u$ when nonzero. Conversely, for a bounded conjugate-linear functional $\ell$ on $H_A^s$, Riesz applied to $x\mapsto\overline{\ell(J_s^{-1}x)}$ gives $y\in H$ with $\ell(J_s^{-1}x)=\langle y,x\rangle$. Taking $u=J_{-s}^{-1}y$ proves onto antidual identification and the exact norm identity. This is the pivot antidual, with no identification with an unrestricted distribution space. [F1, F4, F7, F8]

1.2 The exact scale interpolation lemma applies to the compatible embeddings from the first fact for arbitrary real $a,b$, including reversed or equal endpoints. Its proof constructs admissible spectral profiles for the upper bound and tests arbitrary profiles against spectral-cutoff dual vectors for the lower bound, so the equality here is isometric in the stated strip convention. Apply its operator transport argument to the consistent endpoint map and the two scale couples to obtain $M_0^{1-\theta}M_1^\theta$, including zero endpoint bounds. For the time-dependent target use the lifted-PVM lemma on $L^2(0,\tau;K)$, which identifies all completed scale levels with the indicated Bochner spaces with exactly their integral norms. The same strip composition proof then gives the asserted time-target bound. [F1, F2, F3]

1.3 The Borel calculus makes $I-A$ self-adjoint. The mathematical flow supplier, with generator $I-A$, gives the strongly continuous unitary group $U(t)=e^{it(I-A)}$ on $H$. The pushforward of $E_A$ by $\lambda\mapsto1-\lambda$ represents $I-A$, as one checks first on real simple multipliers and then by truncation; spectral uniqueness therefore gives $U(t)=\int e^{it(1-\lambda)}\,dE_A(\lambda)$. Its multipliers have modulus one and commute with the spectral powers of $A$ on their domains: truncate $A$ to $E_NH$, use bounded multiplication there, and pass to the exact domain norm using spectral convergence. In particular $U(t)$ preserves the core and $\|U(t)u\|_s=\|u\|_s$. Extension and the inverse $U(-t)$ make it unitary at every level. On the dense core the group law, consistency of the embeddings, and commutation with each $A^{-r/2}$ hold; bounded extension between the indicated levels gives them everywhere. Also $J_sU(t)=U(t)J_s$ on the core and hence on the whole scale, so strong continuity follows from strong continuity on $H$. [F1, F5, F6, F7, F8]

1.4 First check the specified Dirichlet energies. The bounded coefficients and the inequality $2|zw|\le|z|^2+|w|^2$ show that every integrand is integrable for $u,v\in H^1_0$, so $q$ is well defined on Sobolev classes; it is sesquilinear, and symmetry follows by conjugating and exchanging $i,j$. Write $u=u_1+iu_2$ with real weak Sobolev components. The real symmetric matrix gives $\sum_{i,j}a^{ij}D_ju\,\overline{D_iu}=\sum_{i,j}a^{ij}(D_ju_1D_iu_1+D_ju_2D_iu_2)$ because its imaginary cross terms cancel. Ellipticity therefore gives $q[u]\ge\kappa\|\nabla u\|_2^2+\|u\|_2^2$, where $q[u]=q(u,u)$ and $\|\nabla u\|_2^2=\sum_j\|D_ju\|_2^2$. With $L=\max_{i,j}\|a^{ij}\|_\infty$, the reverse bound is $q[u]\le nL\|\nabla u\|_2^2+\|c\|_\infty\|u\|_2^2$. Consequently $q[u]+\|u\|_2^2$ is bounded below by $\min(\kappa,2)\|u\|_{H^1}^2$ and above by $\max(nL,\|c\|_\infty+1)\|u\|_{H^1}^2$. Completeness of $H^1_0$ and these two inequalities prove closedness in the required form norm. Its density in $L^2$ is [F10]. For a weak derivative, conjugate its bilinear test identity with test function $\overline\varphi$ to obtain $D_j(Ju)=J(D_ju)$; this also shows $\|Ju\|_{H^1}=\|u\|_{H^1}$. Conjugating test-function approximants proves $JQ=Q$. Conjugating the energy integrand, using the real coefficients, proves $q(Ju,Jv)=\overline{q(u,v)}$. Thus [F9] constructs the unique representing self-adjoint $A$, with the stated domain characterization; on $D(A)$, $\langle Au,u\rangle=q[u]\ge\|u\|_2^2$, hence $A\ge I$. This verifies every form hypothesis without requiring a bounded domain or a boundary trace theorem. [F8, F9, F10, given, algebra]

2.1 For the specialization $a^{ij}=\delta_{ij}$ and $c=1$, consider the unshifted form $q_0$ in the statement on the same $Q=H^1_0(\Omega;\mathbb C)$. It is well defined, symmetric and nonnegative, and $q_0[u]+\|u\|_2^2=\|u\|_{H^1}^2$. By [F10], $Q$ is dense in $L^2$ and complete in this form norm. Thus [F9], with lower bound zero and the assumed AC, gives its unique nonnegative self-adjoint representing operator $L$ and exactly the stated characterization of $D(L)$ and $Lu$. This defines $\Delta_D=-L$ on $D(L)$. The shifted form is $q(u,v)=q_0(u,v)+\langle u,v\rangle_2$. If $u\in D(L)$, then $q(u,v)=\langle Lu+u,v\rangle_2$ for all $v\in Q$, so the domain characterization for $A$ gives $u\in D(A)$ and $Au=Lu+u$. Conversely, if $u\in D(A)$, then $q_0(u,v)=\langle Au-u,v\rangle_2$ for every $v\in Q$, giving $u\in D(L)$ and $Lu=Au-u$. Therefore $D(A)=D(L)$ and $A=I+L=I-\Delta_D$, as operators with this common domain. The argument applies to every nonempty open $\Omega$, hence also to the exterior domains in the statement. [F8, F9, F10, step 1.4, given, algebra]

3.1 Now take any real form realization in the statement, including those just constructed. The map $J$ is a conjugate-linear isometric involution on $L^2(\Omega)$. By [F9], $u\in D(A)$ with $Au=f$ exactly when $u\in Q$ and $q(u,v)=\langle f,v\rangle$ for every $v\in Q$. For such $u$, the real-form identity and $JQ=Q$ give $q(Ju,v)=\overline{q(u,Jv)}=\langle JAu,v\rangle$, so $Ju\in D(A)$ and $AJu=JAu$; applying $J$ twice proves $JD(A)=D(A)$. The regular PVM $E'(C)=JE_A(C)J$ is complex-linear projection-valued: the two conjugate-linear factors cancel, orthogonality and countable additivity are preserved by the isometry, and its scalar measures obey $\langle E'(C)x,x\rangle=\langle E_A(C)Jx,Jx\rangle$, so regularity is preserved. For real simple spectral multipliers, conjugation transports their spectral integrals by $J$; truncation gives the same assertion for the identity multiplier with its exact square-integrability domain. Hence $E'$ represents $JAJ=A$. Spectral uniqueness gives $E'=E_A$. Applying the same real-multiplier and truncation argument to every real power shows that $J$ commutes with that power on its domain and preserves the core. Thus $\|Ju\|_s=\|A^{s/2}Ju\|_2=\|JA^{s/2}u\|_2=\|u\|_s$ on the core. The unique continuous extension to each completion is real-linear and isometric, and has square the identity by density. Together with the preceding steps this proves all the assertions. [F1, F6, F7, F8, F9, step 1.1, step 1.2, step 1.3, step 1.4, step 2.1] ∎

### Source notes

This is a locally authored proof composed from the three direct spectral-scale helpers and the declared library inputs. The interpolation and Bochner identities retain their exact norms. The form representation theorem is reused with its actual mathematical hypotheses; the stated real Dirichlet energies and their conjugation invariance are checked locally. The physics-namespace inputs have domain mathematics and contribute no physical premise. This proposal claims neither independent review nor an original-article defect.


## Bounded real-linear perturbations preserve solution estimates

[Open item](item-lem-se-real-evolution-duhamel-bound) · level 5


### Statement

Assume Countable Choice, with the real Banach and Bochner conventions of [lem-author-9e2ffff7db46-free-continuous-convolution](item-lem-author-9e2ffff7db46-free-continuous-convolution). Let $E$ be a complex Banach space regarded as real, $0<T<\infty$, $W(t)$ a strongly continuous bounded group, and $P:[0,T]\to\mathcal B_{\mathbb R}(E)$ a norm-continuous family of bounded real-linear operators. Write $M=\sup_{|t|\le T}\|W(t)\|\ge1$, $K=\sup_{t\in[0,T]}\|P(t)\|$ and $C_0=M e^{MKT}$. The Volterra equation $S(t,r)x=W(t-r)x+\int_r^tW(t-\rho)P(\rho)S(\rho,r)x\,d\rho$ has a unique evolution on $[0,T]^2$. It is constructed by [math:thm-banach-fixed-point](https://alphabetamath.cc/item/thm-banach-fixed-point) through [lem-author-9e2ffff7db46-local-volterra-contraction](item-lem-author-9e2ffff7db46-local-volterra-contraction), is jointly strongly continuous and real-linear, satisfies $S(r,r)=I$, $S(t,q)S(q,r)=S(t,r)$ and $S(t,r)^{-1}=S(r,t)$, and obeys $\|S(t,r)\|\le M e^{MK|t-r|}$ by [lem-author-9e2ffff7db46-global-real-evolution](item-lem-author-9e2ffff7db46-global-real-evolution) and [math:thm-gronwall-integral-inequality](https://alphabetamath.cc/item/thm-gronwall-integral-inequality).

For every strongly measurable $f\in L^1(0,T;E)$ the forced formula is $u(t)=S(t,r)x+\int_r^tS(t,\rho)f(\rho)\,d\rho$, with $\|u\|_{C([0,T];E)}\le C_0(\|x\|+\|f\|_{L^1})$, as proved in [lem-author-9e2ffff7db46-bochner-variation-of-constants](item-lem-author-9e2ffff7db46-bochner-variation-of-constants). It uniquely solves $u(t)=W(t-r)x+\int_r^tW(t-\rho)(P(\rho)u(\rho)+f(\rho))\,d\rho$. All integrals are Bochner integrals in $E$, oriented by $\int_r^t=-\int_t^r$ for $t<r$; their norm and real-linearity rules are [math:lem-bochner-integral-norm-inequality](https://alphabetamath.cc/item/lem-bochner-integral-norm-inequality) and [math:lem-linearity-of-the-bochner-integral](https://alphabetamath.cc/item/lem-linearity-of-the-bochner-integral).

If the actual free orbit map $H_a y(t)=W(t-a)y$ and retarded $L^1(I;E)$ forcing map $D_a g(t)=\int_a^tW(t-\rho)g(\rho)\,d\rho$ are bounded into an additional compatible spacetime Banach norm $Y_I$ on a forward interval $I=[a,b]\subset[0,T]$, in exactly the common-ambient and map sense of [lem-author-9e2ffff7db46-spacetime-map-transfer](item-lem-author-9e2ffff7db46-spacetime-map-transfer), with bounds $A_I$ and $B_I$, then $v=u|_I$ has that norm. Put $f_I=f|_I$ and $C_I=M e^{MK(b-a)}$. The estimate in interval data is $\|v\|_{Y_I}\le A_I\|u(a)\|+B_I((b-a)K C_I(\|u(a)\|+\|f_I\|_{L^1(I;E)})+\|f_I\|_{L^1(I;E)})$. When $r=a$, one has $u(a)=x$, so this gives the estimate with initial datum $x$ and forcing restricted to $I$. For arbitrary $r$, one may use the global bound $\|u(a)\|\le C_0(\|x\|+\|f\|_{L^1(0,T;E)})$ on its right-hand side. For fixed free-map bounds the constant in interval data depends only on the interval, $M$ and $K$; uniform interval estimates require uniform free-map bounds. The corresponding backward assertion uses endpoint datum $u(b)$, forcing restricted to $I$, and the reflected free maps specified by the same supplier. One may not move multiplication by $i$ through a merely real-linear $S(t,r)$: a forcing $-if$ enters as $\int_r^tS(t,\rho)(-if(\rho))\,d\rho$.

### Facts & Assumptions

**Given:** The complex Banach space regarded as real, the strongly continuous bounded group, norm-continuous bounded real-linear $P$, finite time horizon, and, for the additional assertion, the two specified bounded free maps on the named interval.

**Goal:** Establish the entire evolution and forced estimate, including the cocycle, inverse and compatible spacetime conclusion, without any Hilbert-space restriction.

[F1] [lem-author-9e2ffff7db46-free-continuous-convolution](item-lem-author-9e2ffff7db46-free-continuous-convolution) proves continuity, real linearity and the state-space norm bound for the free convolution using [math:lem-bochner-integral-norm-inequality](https://alphabetamath.cc/item/lem-bochner-integral-norm-inequality) and [math:lem-linearity-of-the-bochner-integral](https://alphabetamath.cc/item/lem-linearity-of-the-bochner-integral).

[F2] [lem-author-9e2ffff7db46-local-volterra-contraction](item-lem-author-9e2ffff7db46-local-volterra-contraction) applies [math:thm-banach-fixed-point](https://alphabetamath.cc/item/thm-banach-fixed-point) on both time orientations; [lem-author-9e2ffff7db46-global-real-evolution](item-lem-author-9e2ffff7db46-global-real-evolution) patches these solutions, proves the cocycle and inverse, and applies [math:thm-gronwall-integral-inequality](https://alphabetamath.cc/item/thm-gronwall-integral-inequality) to obtain the stated bound and joint strong continuity.

[F3] [lem-author-9e2ffff7db46-bochner-variation-of-constants](item-lem-author-9e2ffff7db46-bochner-variation-of-constants) proves the strongly measurable Bochner variation-of-constants formula and its triangular integral exchange, including backward-time signs.

[F4] [lem-author-9e2ffff7db46-spacetime-map-transfer](item-lem-author-9e2ffff7db46-spacetime-map-transfer) transfers the norm on $I=[a,b]$ for a solution based at $a$, using its datum at $a$, forcing restricted to $I$, and the same bounded free orbit and forcing maps in the common ambient function or distribution space. It makes no claim of a Bochner integral into a nonseparable spacetime factor.

### Proof

**Given:** The complex Banach space regarded as real, the strongly continuous bounded group, norm-continuous bounded real-linear $P$, finite time horizon, and, for the additional assertion, the two specified bounded free maps on the named interval.

**Goal:** Establish the entire evolution and forced estimate, including the cocycle, inverse and compatible spacetime conclusion, without any Hilbert-space restriction.

1.1 Use [F1] on an interval of length $h$ with $MKh<1$. Its forcing estimate shows that the Volterra map has contraction constant at most $MKh$; [F2] supplies its unique fixed point. Apply the global extension and reset argument of [F2] to obtain the evolution for every base time and the identities $S(t,q)S(q,r)=S(t,r)$ and $S(t,r)^{-1}=S(r,t)$. The same result supplies joint strong continuity and the norm $M e^{MK|t-r|}$. [F1, F2, given]

2.1 For arbitrary $L^1(E)$ forcing, [F3] gives a continuous function by the displayed integral against $S(t,\rho)$, verifies the forced Volterra equation, and uses [F2] to prove uniqueness. Its norm bound together with the homogeneous estimate in step 1.1 gives $C_0(\|x\|+\|f\|_1)$. Both the initial time and the integral are allowed in either orientation, exactly as asserted. [F1, F2, F3, step 1.1]

3.1 On $I=[a,b]$, put $v=u|_I$ and $f_I=f|_I$. The reset identity of [F2], obtained by splitting the oriented Volterra equation at $a$, is $v=H_a u(a)+D_a(Pv+f_I)$. Thus the interval solution has datum $u(a)$ and forcing $f_I$, regardless of the original base time $r$. The interval version of steps 1.1 and 2.1 gives $\|v\|_{C(I;E)}\le C_I(\|u(a)\|+\|f_I\|_{L^1(I;E)})$, with $C_I=M e^{MK(b-a)}$. Applying [F4] to these exact interval data and using $\|Pv+f_I\|_{L^1(I;E)}\le(b-a)K\|v\|_{C(I;E)}+\|f_I\|_{L^1(I;E)}$ proves the stated $Y_I$ estimate. If $r=a$, then $u(a)=x$; otherwise step 2.1 gives the stated global bound for $\|u(a)\|$. The constants are precisely those of the supplied interval maps, so uniformity requires their uniform bounds. For a backward interval ending at $b$, the change of variables $\tau=b-t$ gives datum $u(b)$, group $\widetilde W(\tau)=W(-\tau)$, coefficient $\widetilde P(\sigma)=-P(b-\sigma)$, and forcing $\widetilde f(\sigma)=-f(b-\sigma)$. Applying [F4] under the corresponding reflected free-map hypotheses gives the backward assertion. Finally all operator linearity used here is real, so the factor $-i$ stays inside $S(t,\rho)$ when it is part of the forcing. This proves all conclusions. [F1, F2, F3, F4, step 1.1, step 2.1] ∎


## Dirichlet spectral Sobolev scale and duality

[Open item](item-def-se-dirichlet-scale) · level 6


### Definition

Assume the Axiom of Choice. Let $n\ge2$, let $\Theta\subset\mathbb R^n$ be nonempty and compact with smooth boundary, and let its exterior $\Omega=\mathbb R^n\setminus\Theta$ be connected. Work in the complex Hilbert space $L^2(\Omega)$, with inner product $\langle u,v\rangle_2=\int_\Omega u\overline v\,dx$, linear in the first argument. Let $\Delta_D$ be the Dirichlet Laplacian with domain $H^2(\Omega)\cap H^1_0(\Omega)$, and put $A=I-\Delta_D$.

For $\sigma\in\mathbb R$, let $D(A^\infty)=\bigcap_{k\ge1}D(A^k)$ and define $H_D^\sigma(\Omega)$ as its completion in the norm $\|u\|_{H_D^\sigma}=\|A^{\sigma/2}u\|_2$, where the powers are defined by the spectral calculus. For $\sigma\ge0$, this completion is identified with $D(A^{\sigma/2})$, equipped with that norm. In particular $H_D^0(\Omega)=L^2(\Omega)$, $H_D^1(\Omega)=H^1_0(\Omega)$ and $H_D^2(\Omega)=H^2(\Omega)\cap H^1_0(\Omega)$, as spaces with their respective indicated norms.

For $s\ge0$, identify $H_D^{-s}(\Omega)$ isometrically with the antidual of $H_D^s(\Omega)$: the antidual is the space of bounded conjugate-linear scalar functionals, with its operator norm. The pairing $\langle f,g\rangle_{-s,s}$ is linear in $f$ and conjugate-linear in $g$ and extends $\int_\Omega f\overline g\,dx$ from pairs in $D(A^\infty)$. The integral is therefore a pivot notation for this extension; arbitrary negative-order elements need not be functions for which the integral is defined.

Write $R=A^{-1}$. It extends to an isometric isomorphism $R:H_D^\sigma(\Omega)\to H_D^{\sigma+2}(\Omega)$ for every real $\sigma$. The group $e^{it\Delta_D}$ extends consistently to a unitary group on every $H_D^\sigma(\Omega)$ and commutes there with $R$.

### Definition references

[def-se-geometry](item-def-se-geometry)

[def-se-foundation-integer-sobolev-notation](item-def-se-foundation-integer-sobolev-notation)

[def-se-dirichlet-laplacian](item-def-se-dirichlet-laplacian)

[lem-se-exterior-dirichlet-realization](item-lem-se-exterior-dirichlet-realization)

[lem-se-positive-spectral-scale-contract](item-lem-se-positive-spectral-scale-contract)

[math:thm-unbounded-borel-functional-calculus](https://alphabetamath.cc/item/thm-unbounded-borel-functional-calculus)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

### Justification

The geometry is fixed by [def-se-geometry](item-def-se-geometry), and the weak Sobolev spaces and the closure defining $H^1_0(\Omega)$ are fixed by [def-se-foundation-integer-sobolev-notation](item-def-se-foundation-integer-sobolev-notation). Under Choice, [def-se-dirichlet-laplacian](item-def-se-dirichlet-laplacian) supplies the displayed Dirichlet realization and its self-adjoint shift $A\ge I$ on the nonzero complex Hilbert space $L^2(\Omega)$. The powers and their domains are defined by [math:thm-unbounded-borel-functional-calculus](https://alphabetamath.cc/item/thm-unbounded-borel-functional-calculus), with the Choice assumption of that supplier recorded by [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

The positive spectral-scale result [lem-se-positive-spectral-scale-contract](item-lem-se-positive-spectral-scale-contract) applies to this $A$: it supplies the normed completion, the positive-domain identification, and the isometric pivot-antidual identification. In particular, it gives a definite norm on the common core and a complete space at each real index. Its pivot pairing extends the $L^2$ inner product by continuity, so its notation does not assert that a general negative-order element is an integrable function.

The realization theorem [lem-se-exterior-dirichlet-realization](item-lem-se-exterior-dirichlet-realization) gives $D(A^{1/2})=H^1_0(\Omega)$ with $\|A^{1/2}u\|_2^2=\|u\|_2^2+\|\nabla u\|_2^2$ and $D(A)=H^2(\Omega)\cap H^1_0(\Omega)$. The latter space carries the scale norm $\|Au\|_2$, which that theorem states is equivalent to its $H^2$ norm. The same spectral-scale result supplies the stated extension of $A^{-1}$, the unitary evolution and their commutation.

### Source notes

The article is cited for the scale, pivot pairing and notation on PDF page 8. The mathematical justifications are the independent suppliers listed above; the article is not used as proof of its own definition or its properties.

## Endpoint multiplier bounds extended to negative spectral orders

[Open item](item-lem-se-spectral-cutoff-duality) · level 6


### Statement

Assume the Axiom of Choice. Let $\Omega=\mathbb R^n\setminus\Theta$, $n\ge2$, where $\Theta$ is compact with smooth boundary and $\Omega$ is open. Let $A=I-\Delta_D\ge I$ be the shifted Dirichlet Laplacian and let $H_D^s$ be the associated Hilbert scale, with pivot $L^2(\Omega)$ and norm $\|A^{s/2}u\|_2$ on its spectral core. For every complex-valued $a\in W^{2,\infty}(\Omega)$ and every $-2\le s\le2$, multiplication by $a$ extends to a bounded complex-linear operator on $H_D^s$, with norm at most $C_{s,\Omega}\|a\|_{W^{2,\infty}}$. Here $W^{k,p}(\Omega;\mathbb C)$ is the space of almost-everywhere classes with weak derivatives through order $k$ in $L^p$, and $H^k(\Omega)=W^{k,2}(\Omega;\mathbb C)$ for $k=0,1,2$, with $\|u\|_{H^k}^2=\sum_{|\alpha|\le k}\|D^\alpha u\|_2^2$. In particular $W^{2,\infty}$ has norm $\|a\|_{W^{2,\infty}}=\max_{|\alpha|\le2}\|D^\alpha a\|_\infty$.

For $s>0$, the negative-order extension is defined by $\langle af,u\rangle_{-s,s}=\langle f,\overline a u\rangle_{-s,s}$ for $f\in H_D^{-s}$ and $u\in H_D^s$, where the pivot pairing is linear in its first argument. It agrees with ordinary multiplication on $L^2$. Thus the result applies in particular to smooth cutoffs with bounded derivatives through order two and to any potentials belonging to $W^{2,\infty}(\Omega)$. Complex conjugation is an isometry on each of these scale spaces.

### Facts & Assumptions

[F1] The exterior Dirichlet realization gives $D(A)=H^2(\Omega)\cap H^1_0(\Omega)$ with equivalent graph and $H^2$ norms, and $D(A^{1/2})=H^1_0(\Omega)$ with the energy norm [lem-se-exterior-dirichlet-realization](item-lem-se-exterior-dirichlet-realization). Here $H^1_0(\Omega)$ is the $H^1$ closure of $C_c^\infty(\Omega)$.

[F2] The positive spectral-scale contract identifies positive levels with domains of powers, identifies negative levels with pivot antiduals, gives bounded-operator interpolation on the scale, and makes conjugation an isometry for the real Dirichlet form [lem-se-positive-spectral-scale-contract](item-lem-se-positive-spectral-scale-contract).

[F3] The weak Leibniz rule gives the product formula through any finite order when the multiplier is smooth and the indicated weak derivatives exist [math:lem-weak-leibniz-rule-with-a-smooth-factor](https://alphabetamath.cc/item/lem-weak-leibniz-rule-with-a-smooth-factor).

[F4] The Axiom of Choice is assumed for the spectral and realization suppliers and implies the Countable Choice hypotheses of the Sobolev, product, mollification and extension suppliers. It also permits the approximating sequence used below [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

[F5] Integer-order Sobolev spaces are spaces of almost-everywhere classes characterized by the weak test identities; their norms are derivative sums for finite $p$ and the maximum of essential derivative bounds for $p=\infty$ [math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm). We use complex scalars, $H^k=W^{k,2}$ and the norm convention in the Statement.

[F6] For an open set $G$, $b\in W^{k,p}(G;\mathbb C)$, $1\le p\le\infty$, and a nonnegative smooth unit-mass kernel $\rho$ supported in the unit ball, the interior mollification $b_\varepsilon=\rho_\varepsilon*E_0b$ is smooth on $G_\varepsilon=\{x\in G:\operatorname{dist}(x,\mathbb R^n\setminus G)>\varepsilon\}$ and $D^\alpha b_\varepsilon=\rho_\varepsilon*E_0(D^\alpha b)$ there for $|\alpha|\le k$ [math:lem-mollification-commutes-with-weak-derivatives-in-the-interior](https://alphabetamath.cc/item/lem-mollification-commutes-with-weak-derivatives-in-the-interior). Here $\rho_\varepsilon(x)=\varepsilon^{-n}\rho(x/\varepsilon)$, $E_0$ denotes extension by zero, and $G_\varepsilon=\mathbb R^n$ if $G=\mathbb R^n$.

[F7] For the same mollification, if $b\in W^{k,p}(G;\mathbb C)$ and $1\le p<\infty$, then $b_\varepsilon\to b$ in $W^{k,p}(U;\mathbb C)$ for every open $U$ compactly contained in $G$ [math:thm-local-smooth-approximation-in-wkp](https://alphabetamath.cc/item/thm-local-smooth-approximation-in-wkp). We apply this with $p=2$, on bounded interior sets for the coefficient and on $\mathbb R^n$ for compactly supported $H^1$ functions; no $W^{k,\infty}$ norm convergence is used.

[F8] If $v\in W^{k,p}(G;\mathbb C)$ vanishes outside a compact subset of the open set $G$, then $E_0v\in W^{k,p}(\mathbb R^n;\mathbb C)$, $D^\alpha E_0v=E_0D^\alpha v$ for $|\alpha|\le k$, and its Sobolev norm is preserved [math:lem-compact-support-zero-extension-in-wkp](https://alphabetamath.cc/item/lem-compact-support-zero-extension-in-wkp).

[F9] Complex Holder bounds $\left|\int fg\right|\le\|f\|_2\|g\|_2$, and complex Minkowski bounds finite sums in $L^2$ [math:thm-complex-holder-minkowski-and-the-quotient-norm](https://alphabetamath.cc/item/thm-complex-holder-minkowski-and-the-quotient-norm). These apply with Lebesgue measure on every open set used below.

[F10] A compact subset of an open Euclidean set has a smooth compactly supported cutoff valued in $[0,1]$ and equal to one near that subset [math:lem-test-function-cutoffs-and-euclidean-localization](https://alphabetamath.cc/item/lem-test-function-cutoffs-and-euclidean-localization). Applied to $\{0\}\subset B_1(0)$ and normalized by its positive finite integral, this supplies a nonnegative $\rho\in C_c^\infty(B_1(0))$ with integral one.

### Proof

**Given:** The domain, scale, choice assumption and multiplier in the Statement.

**Goal:** Prove the multiplier bounds at all orders from $-2$ to $2$ and identify the negative-order action.

1.1 Fix $k\in\{1,2\}$, $u\in H^k(\Omega)$ and $\varphi\in C_c^\infty(\Omega)$. Choose bounded open sets $U,V$ with $\operatorname{supp}\varphi\subset U$, $\overline U\subset V$ and $\overline V\subset\Omega$, both closures compact, and choose the kernel $\rho$ of [F10]. Let $a_\varepsilon=\rho_\varepsilon*E_0a$. For small $\varepsilon$, [F6] gives smoothness on $U$ and $|D^\beta a_\varepsilon(x)|\le\|D^\beta a\|_\infty$ there for $|\beta|\le k$, since the convolution is an average with a nonnegative unit-mass kernel. Because $V$ is bounded, $a|_V\in W^{k,2}(V)$: each derivative has finite $L^2(V)$ norm bounded by $|V|^{1/2}\|D^\beta a\|_\infty$. For $\varepsilon<\operatorname{dist}(\overline U,\mathbb R^n\setminus V)$ its mollification agrees on $U$ with $a_\varepsilon$. Thus [F7] gives $D^\beta a_\varepsilon\to D^\beta a$ in $L^2(U)$ for every $|\beta|\le k$, including the highest order. [F4, F5, F6, F7, F10, given]

2.1 Apply [F3] on $U$ to $a_\varepsilon$ and $u|_U$. In the weak test identity for $|\alpha|\le k$, pass to the limit against $\varphi$: the left-hand error is bounded by $\|a_\varepsilon-a\|_{L^2(U)}\|uD^\alpha\varphi\|_{L^2(U)}$, and the error in each right-hand product term is bounded by $\|D^\beta a_\varepsilon-D^\beta a\|_{L^2(U)}\|D^{\alpha-\beta}u\,\varphi\|_{L^2(U)}$, both tending to zero by step 1.1 and [F9]. Since the test function was arbitrary, the weak formula is $D^\alpha(au)=\sum_{\beta\le\alpha}\binom{\alpha}{\beta}D^\beta a\,D^{\alpha-\beta}u$ on $\Omega$. Every summand is globally in $L^2$, with norm at most $\|D^\beta a\|_\infty\|D^{\alpha-\beta}u\|_2$. Finite-sum estimates and [F5] therefore give $au\in H^k(\Omega)$ and $\|au\|_{H^k}\le C_{n,k}\|a\|_{W^{k,\infty}}\|u\|_{H^k}$. For $k=0$ the bound is the pointwise $L^\infty$ estimate. [F3, F5, F9, step 1.1, given]

3.1 If $u\in H^1_0(\Omega)$, choose $u_j\in C_c^\infty(\Omega)$ converging to $u$ in $H^1$. Step 2.1 gives $au_j\to au$ in $H^1$. For fixed $j$, $v=au_j$ belongs to $H^1$ and vanishes outside $K_j=\operatorname{supp}u_j$, a compact subset of $\Omega$. By [F8], $E_0v\in H^1(\mathbb R^n)$. Its mollification is smooth by [F6] and vanishes when $\operatorname{dist}(x,K_j)>\varepsilon$, directly from the support of $\rho_\varepsilon$ in its defining integral. Hence for all sufficiently small $\varepsilon$ it has compact support in $\Omega$, with all these supports in one bounded ball $B$. By [F7] on $\mathbb R^n$ it converges to $E_0v$ in $H^1(B)$, and therefore globally in $H^1(\mathbb R^n)$, since the differences and their weak derivatives vanish outside $B$. Restriction to $\Omega$ proves $au_j\in H^1_0(\Omega)$; closure then gives $au\in H^1_0(\Omega)$. The case $v=0$ uses the zero approximants. The same proof applies to $\overline a$. Combined with step 2.1 this preserves $H^2\cap H^1_0$ as well. [F1, F4, F5, F6, F7, F8, step 2.1, given]

4.1 By the domain and norm identifications, steps 2.1 and 3.1 give multiplier bounds on $H_D^0=L^2$, $H_D^1=H^1_0$ and $H_D^2=H^2\cap H^1_0$, each bounded by a constant times $\|a\|_{W^{2,\infty}}$. The endpoint operators are consistent because they are all ordinary pointwise multiplication. Interpolation between orders $0$ and $1$, and between orders $1$ and $2$, yields the asserted bound for every $0\le s\le2$. The same bounds hold for multiplication by $\overline a$. [F1, F2, step 2.1, step 3.1]

5.1 For $0<s\le2$, the antidual identification makes $u\mapsto\langle f,\overline a u\rangle_{-s,s}$ a bounded conjugate-linear functional on $H_D^s$, with norm at most $C_{s,\Omega}\|a\|_{W^{2,\infty}}\|f\|_{H_D^{-s}}$. It therefore determines a unique $af\in H_D^{-s}$ with that bound. If $f\in L^2$, then $\langle f,\overline a u\rangle_{L^2}=\langle af,u\rangle_{L^2}$ for $u\in H_D^s$, so this definition agrees with ordinary multiplication. The real Dirichlet form also gives the stated conjugation isometry on the scale. The cutoff and potential cases follow by substituting the stated regularity into the bound. [F2, step 4.1, given] ∎

### Source notes

The proof uses local coefficient mollification and the test-function definition of the zero-boundary space; it does not require a trace product theorem or a higher-power Dirichlet boundary condition. No assertion is made here for orders beyond two.


## Imported homogeneous and retarded exterior smoothing

[Open item](item-prop-se-import-bgt-local-smoothing) · level 7



### Statement

Assume the Axiom of Choice. Let $n\ge2$ and let $\Omega=\mathbb R^n\setminus\Theta$ be the connected exterior of a nonempty compact obstacle with smooth boundary. Assume that the obstacle is non-trapping in the complete-ray sense: for every complete unit-speed admissible generalized reflected or glancing ray $x:\mathbb R\to\overline\Omega$ and every compact $K\subset\mathbb R^n$, there is $t\ge0$ with $x(t)\notin K$. Let $\Delta_D$ be the Dirichlet Laplacian on $L^2(\Omega)$, let $H_D^s(\Omega)$ be the spectral scale of $I-\Delta_D$, and let $\chi\in C_c^\infty(\mathbb R^n)$. Here $C_c^\infty$ means smooth functions with compact support, restricted to $\Omega$ when multiplying functions on the exterior.

For every $T>0$, every $s\in[-1,1]$, and every $f\in L^2((0,T);H_D^s(\Omega))$, define $u(t)=\int_0^t e^{i(t-\tau)\Delta_D}\chi f(\tau)\,d\tau$. Then $\|\chi u\|_{L^2((0,T);H_D^{s+1}(\Omega))}\le C\|\chi f\|_{L^2((0,T);H_D^s(\Omega))}$.

For every $s\in[0,1]$ and $v_0\in H_D^s(\Omega)$, put $v(t)=e^{it\Delta_D}v_0$. Then $\|\chi v\|_{L^2((0,T);H_D^{s+1/2}(\Omega))}\le C\|v_0\|_{H_D^s(\Omega)}$. In each estimate $C$ may depend on the obstacle, cutoff and order, but is independent of $T$ and the data. No compact-support assumption is imposed on $v_0$.

### Statement references

[def-se-geometry](item-def-se-geometry)

[def-se-nontrapping](item-def-se-nontrapping)

[def-se-dirichlet-scale](item-def-se-dirichlet-scale)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

### External input

The two estimates and their independence from $T$ are imported from Burq–Gérard–Tzvetkov, Proposition 2.7, equations (2.14) and (2.15), and Remark 2.8. The source treats the nonempty nontrapping smooth obstacle in dimension at least two and uses the Dirichlet spectral scale. Its retarded estimate applies for $-1\le s\le1$; its homogeneous estimate applies for $0\le s\le1$. The proposition and remark were read for these assertions; their proof is not reconstructed here.

### Facts & Assumptions

[F1] The exterior geometry and smooth-obstacle terminology are those of [def-se-geometry](item-def-se-geometry).

[F2] The generalized-ray non-trapping convention is fixed by [def-se-nontrapping](item-def-se-nontrapping).

[F3] Under the Axiom of Choice, the Dirichlet Laplacian, spectral spaces, negative-order dual spaces, and unitary evolution used above are supplied by [def-se-dirichlet-scale](item-def-se-dirichlet-scale) and [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

[F4] The time spaces are the almost-everywhere classes of strongly measurable maps with the Bochner norms of [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces). Integration uses the norm limit of integrable simple-function integrals in [math:def-bochner-integrable-function](https://alphabetamath.cc/item/def-bochner-integrable-function).

[F5] For every $-2\le q\le2$, multiplication by the restricted smooth cutoff $\chi$ is bounded on $H_D^q$, by [lem-se-spectral-cutoff-duality](item-lem-se-spectral-cutoff-duality). For $r>0$ in this range, its negative-order action is $\langle\chi f,h\rangle_{-r,r}=\langle f,\overline\chi h\rangle_{-r,r}$; thus no pointwise product of a general distribution is assumed.

[F6] The scale argument in [lem-se-positive-spectral-scale-contract](item-lem-se-positive-spectral-scale-contract), Proof step 1.3, gives strong continuity of $W(t)=e^{it\Delta_D}$ on each $H_D^q$, as well as unitarity: its onto scale isometry $J_q$ intertwines the scale evolution with the strongly continuous spectral evolution on $L^2(\Omega)$. This is a mathematical construction under Choice, including its mathematical Physics-Library flow supplier.

[F7] Scalar Hölder with exponents $2,2$ gives $\int_0^T\|g(t)\|_{H_D^s}\,dt\le T^{1/2}\|g\|_{L^2((0,T);H_D^s)}$ for a strongly measurable $g$ in that time space [math:thm-holder-inequality-for-integrals](https://alphabetamath.cc/item/thm-holder-inequality-for-integrals).

[F8] Under Countable Choice, [lem-author-9e2ffff7db46-free-continuous-convolution](item-lem-author-9e2ffff7db46-free-continuous-convolution) supplies the retarded Bochner integral for every strongly continuous group on a complex Banach space regarded as real, with a finite uniform group bound on $[-T,T]$, and every strongly measurable $L^1$ forcing. Its proof establishes strong measurability of the evolution integrand, continuity of the resulting path, and independence of the forcing representative. The real and complex Bochner integrals coincide here because their defining simple sums and norm limits are identical.

### Justification

This local argument supplies the constructions used in the Statement. The two smoothing estimates and their time-uniform constants remain the external input recorded above; their proof is not claimed here.

**Given:** The geometry, Choice assumption, cutoff, scale, time and data in the Statement.

**Goal:** Justify cutoff multiplication, the time spaces, and the retarded integral without using either smoothing estimate as a premise.

1.1 Fix $s\in[-1,1]$ and set $E=H_D^s(\Omega)$, a complex Hilbert space by the scale construction. The restricted cutoff has bounded derivatives through order two, so [F5] defines a bounded multiplier $M_\chi:E\to E$, including its specified antidual extension when $s<0$. If simple functions $f_j$ converge almost everywhere in $E$ to a representative of $f$, then $M_\chi f_j$ are simple and converge there to $g=M_\chi f$. Hence $g$ is strongly measurable and belongs to $L^2((0,T);E)$ with norm at most $\|M_\chi\|\|f\|_{L^2((0,T);E)}$. By [F7] it belongs to $L^1((0,T);E)$. The other cutoff expressions in the Statement use the same compatible multiplier at orders within $[-2,2]$. [F3, F4, F5, F7, given]

1.2 By [F6], $W$ is a strongly continuous unitary group on $E$, with uniform bound $M=1$ on $[-T,T]$. Choice supplies the Countable Choice assumption of [F8]. Apply [F8] with base time $0$ and forcing $g$ from step 1.1: the integrand is strongly measurable and its norm is integrable, and $u(t)=\int_0^tW(t-\tau)g(\tau)\,d\tau$ is a well-defined Bochner integral in $E$, independent of the representative of $f$, and continuous in $t$. Its integral is the complex Bochner integral of [F4] by the identical simple-sum construction in [F8]. The homogeneous orbit is continuous by [F6], so its cutoff is also strongly measurable at its initial scale level. The higher output regularities and estimates are precisely the imported assertions, rather than premises of this construction. [F3, F4, F5, F6, F8, step 1.1] ∎


## Three-dimensional Dirichlet energy-to-mixed-norm estimate

[Open item](item-prop-se-import-bss-l4-linfinity) · level 7


### Statement

Assume the Axiom of Choice. Let $\Omega=\mathbb R^3\setminus\Theta$ be the connected exterior of a nonempty compact obstacle with smooth boundary, and suppose that the obstacle is non-trapping. Let $\Delta_D$ be the Dirichlet Laplacian and $U(t)=e^{it\Delta_D}$. For $0<T\le\infty$, let $f\in H^1_0(\Omega)$ and let $F\in L^1(0,T;H^1_0(\Omega))$ be strongly measurable. Define the energy-space Duhamel expression $u(t)=U(t)f+i\int_0^t U(t-s)F(s)\,ds$ for finite $t\in[0,T)$.

There is a constant $C$ depending on the exterior domain, independent of $f$, $F$ and $T$, such that $\|u\|_{L^4_tL^\infty_x((0,T)\times\Omega)}\le C(\|f\|_{H^1(\Omega)}+\|F\|_{L^1(0,T;H^1(\Omega))})$. The mixed norm is the scalar sectionwise norm: it does not assert strong measurability of $t\mapsto u(t)$ into $L^\infty(\Omega)$. In particular, the estimate holds for $F=0$.

### Statement references

[def-se-geometry](item-def-se-geometry)

[def-se-nontrapping](item-def-se-nontrapping)

[def-se-dirichlet-scale](item-def-se-dirichlet-scale)

[def-se-foundation-integer-sobolev-notation](item-def-se-foundation-integer-sobolev-notation)

[def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


[math:lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group](https://alphabetamath.cc/item/lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group)

[math:thm-unbounded-borel-functional-calculus](https://alphabetamath.cc/item/thm-unbounded-borel-functional-calculus)

[lem-author-9e2ffff7db46-free-continuous-convolution](item-lem-author-9e2ffff7db46-free-continuous-convolution)

[math:thm-tonelli-and-fubini-for-completed-product-measures](https://alphabetamath.cc/item/thm-tonelli-and-fubini-for-completed-product-measures)

[math:thm-complex-lp-completeness-and-almost-everywhere-subsequences](https://alphabetamath.cc/item/thm-complex-lp-completeness-and-almost-everywhere-subsequences)

[math:thm-heine-borel-r](https://alphabetamath.cc/item/thm-heine-borel-r)
### External input

Blair–Smith–Sogge, Section 5, equations (54)–(55), state the Duhamel estimate for the three-dimensional smooth non-trapping exterior with the prescribed boundary condition. Their argument after Lemma 5.2 obtains the $L^4_tL^\infty_x$ bound by dyadic summation; the Dirichlet estimate is global in time. The result is imported here with the Dirichlet energy space and mixed-norm notation specified in the Statement. It is not the $q=\infty$ case of their Theorem 1.1, which assumes finite $q$. Their cited heat ultracontractivity input was not independently read.

### Facts & Assumptions

[F1] The exterior geometry and non-trapping convention are those of [def-se-geometry](item-def-se-geometry) and [def-se-nontrapping](item-def-se-nontrapping).

[F2] Under Choice, [def-se-dirichlet-scale](item-def-se-dirichlet-scale) defines $\Delta_D$, its unitary group and $H_D^1(\Omega)=H^1_0(\Omega)$; its energy norm is the ordinary $H^1$ norm. The integer Sobolev and zero-boundary closure notation is fixed by [def-se-foundation-integer-sobolev-notation](item-def-se-foundation-integer-sobolev-notation). [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F3] For both finite $T$ and $T=\infty$, the $L^1$ forcing is Bochner integrable in the energy space, and the mixed norm means the sectionwise scalar norm rather than an asserted $L^\infty$-valued Bochner norm. The time measure is restricted Lebesgue measure on $(0,T)$, including the half-line in the infinite case. [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)


[F4] The self-adjoint Dirichlet generator on complex $L^2(\Omega)$ generates a strongly continuous unitary group under Choice. Products of its Borel spectral multipliers have the stated domains and commute when one multiplier is bounded. These are [math:lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group](https://alphabetamath.cc/item/lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group) and [math:thm-unbounded-borel-functional-calculus](https://alphabetamath.cc/item/thm-unbounded-borel-functional-calculus), applied to the realization in F2.

[F5] For a strongly continuous group on the realification of a complex Banach space with bound $M$ on a finite time interval, strongly measurable $L^1$ forcing has a well-defined continuous retarded Bochner convolution, bounded in the continuous-path norm by $M$ times its $L^1$ norm. Bounded real-linear maps commute with these integrals. [lem-author-9e2ffff7db46-free-continuous-convolution](item-lem-author-9e2ffff7db46-free-continuous-convolution)

[F6] On a completed product of sigma-finite measure spaces, Tonelli and Fubini give measurable section integrals and almost-everywhere measurable sections. In particular they identify the product $L^2$ norm with the integral of the squared section norms. [math:thm-tonelli-and-fubini-for-completed-product-measures](https://alphabetamath.cc/item/thm-tonelli-and-fubini-for-completed-product-measures)

[F7] Under Countable Choice, complex $L^2$ on every measure space is complete. [math:thm-complex-lp-completeness-and-almost-everywhere-subsequences](https://alphabetamath.cc/item/thm-complex-lp-completeness-and-almost-everywhere-subsequences)

[F8] The independent BSS estimate imported in External input is (55) for the Dirichlet spectral Duhamel formula (54), with energy initial data and boundary-compatible $L^1_tH^1_x$ forcing, and with a constant uniform in time in the Dirichlet case. Its proof is imported, not reconstructed here.

[F9] Every closed bounded real interval is compact. [math:thm-heine-borel-r](https://alphabetamath.cc/item/thm-heine-borel-r)

### Proof

**Given:** Choice, the three-dimensional non-trapping exterior, and the initial datum and forcing in the Statement.

**Goal:** Construct the energy-space expression and a jointly measurable representative, then apply the independent imported estimate to it.

1.1 Put $A=I-\Delta_D$ and $E=H_D^1(\Omega)=H^1_0(\Omega)$ with its inherited $H^1$ norm. The scale makes $E$ a complete complex Hilbert space continuously included in $L^2$, with $\|h\|_2\le\|h\|_E=\|A^{1/2}h\|_2$. Since the spectral multipliers $e^{it\lambda}$ and $(1-\lambda)^{1/2}$ commute on the latter's domain, $A^{1/2}U(t)h=U(t)A^{1/2}h$. Here the square root is used on the nonpositive spectrum of $\Delta_D$, extending it arbitrarily to a Borel function elsewhere. Thus $\|U(t)h-U(t_0)h\|_E=\|U(t)A^{1/2}h-U(t_0)A^{1/2}h\|_2\to0$ by strong continuity on $L^2$. Together with F2 this gives a strongly continuous unitary group on $E$, also as a real Banach space. [F2, F4, given]

2.1 Fix $0<S<T$, with $S$ finite. Apply F5 on $[0,S]$ to $E$, $W=U$, $r=0$, and the restriction of $F$, using $M=1$ from step 1.1. It establishes strong measurability and Bochner integrability of $s\mapsto U(t-s)F(s)$ on $[0,t]$ for each $t\le S$, and continuity in $E$ of $D(t)=\int_0^tU(t-s)F(s)\,ds$. The complex and real Bochner integrals have the same simple approximations and norm limits, so they agree. Consequently $u(t)=U(t)f+iD(t)$ is continuous in $E$ and hence in $L^2$, with $\|u(t)\|_E\le\|f\|_E+\int_0^t\|F(s)\|_E\,ds$. Changing a forcing representative on a time-null set changes none of the integrals. The constructions for different $S$ agree on their overlaps because their integrands agree there. [F2, F3, F5, step 1.1]

3.1 On $[0,S]$, construct finite-range time maps $v_n$ uniformly approximating $u$ in $L^2$ within $2^{-n}$. For each time $a$, continuity gives a relatively open neighborhood on which $\|u(t)-u(a)\|_2<2^{-n}$. Compactness in F9 gives a finite subcover; assign the sample value from the first neighborhood containing $t$. The resulting cells are Borel, so after choosing measurable spatial representatives of the finitely many sample values, $v_n(t,x)$ is jointly measurable. Choice permits these countably many representative selections. The path $u$ is bounded on this interval by step 2.1, so each $v_n$ belongs to product $L^2$. By F6, $\|v_n-v_m\|_{L^2((0,S)\times\Omega)}\le S^{1/2}(2^{-n}+2^{-m})$. F7 therefore supplies a product $L^2$ limit with a jointly measurable representative $w_S$. [F2, F6, F7, F9, step 2.1, choose, construct]

4.1 Choose a subsequence $v_{n_k}$ with $\|v_{n_k}-w_S\|_{L^2((0,S)\times\Omega)}^2\le2^{-k}$. Tonelli, first on time-space and then on counting measure times time, gives $w_S(t,\cdot)\in L^2(\Omega)$ and $\sum_k\|v_{n_k}(t,\cdot)-w_S(t,\cdot)\|_2^2<\infty$ for almost every $t$. Thus those sections converge in $L^2$ to $w_S(t,\cdot)$; step 3.1 also makes their classes converge to $u(t)$. Uniqueness of a norm limit gives $[w_S(t,\cdot)]=u(t)$ for almost every $t$. Choose finite $0=S_0<S_1<\cdots\uparrow T$ and construct $w_{S_j}$ as above; for $T=\infty$ take $S_j=j$. On each strip $[S_{j-1},S_j)\times\Omega$ use $w_{S_j}$. This countable gluing is jointly measurable and represents $u(t)$ in $L^2$ for almost every $t\in(0,T)$. Any two such representatives agree product-almost everywhere by F6 applied to their disagreement set. Hence F3 makes the scalar sectionwise mixed norm meaningful, allowing infinity before applying the estimate. No $L^\infty$-valued strong measurability is needed. [F3, F6, step 3.1, choose, construct]

5.1 The expression constructed in steps 1.1–2.1 uses exactly the Dirichlet spectral propagator, energy initial datum, and boundary-compatible forcing in the independent estimate F8. Applying that imported bound yields precisely the inequality in the Statement, with its domain-dependent constant independent of $f$, $F$ and $T$. Its global Dirichlet scope includes $T=\infty$; restriction gives every finite interval. The identification of representatives in step 4.1 makes this the scalar mixed norm specified in F3. Taking $F=0$ gives the stated homogeneous case. [F1, F2, F3, F8, step 1.1, step 2.1, step 4.1] ∎

### Source notes

The estimate and its proof are imported from the independent BSS source under the recorded reading limits. The proof above is a locally authored construction and application of that imported estimate, not a reconstruction of its dispersive proof; this is why the item has local proof provenance and is not marked external_input. The Statement is unchanged. The generated-item construction gap is repaired here without attributing a defect to the original article. The direct consumer prop-se-2-4 retains the same estimate and hypotheses, so this repair introduces no Statement/Definition interface change requiring downstream alteration. No library publication or independent review is claimed.


## Exterior Strichartz estimates with precise loss

[Open item](item-prop-se-import-bgt-strichartz) · level 7


### Statement

Assume the Axiom of Choice. Let $\Omega$ be the connected smooth exterior of a nonempty compact non-trapping obstacle in $\mathbb R^n$, $n\ge2$, as in [def-se-geometry](item-def-se-geometry) and [def-se-nontrapping](item-def-se-nontrapping). Let $\Delta_D$ and $H_D^r$ be the Dirichlet Laplacian and spectral scale of [def-se-dirichlet-scale](item-def-se-dirichlet-scale). Fix $T>0$, $\chi\in C_c^\infty(\mathbb R^n)$ equal to one near the obstacle, and $2<p\le\infty$, $2\le q<\infty$ with $2/p+n/q=n/2$, taking $1/\infty=0$. For $0<s<1$ write $\mathcal W^{s,q}=[L^q(\Omega),W^{1,q}(\Omega)]_s$ in the complex strip convention of [lem-se-interpolation-sobolev-model](item-lem-se-interpolation-sobolev-model), and set $\mathcal W^{0,q}=L^q(\Omega)$ and $\mathcal W^{1,q}=W^{1,q}(\Omega)$. The time norms are Bochner norms on $(0,T)$.

For each $0\le s\le1$ there are constants depending on the fixed data such that
$$\|(1-\chi)e^{it\Delta_D}u_0\|_{L^p(0,T;\mathcal W^{s,q})}\le C\|u_0\|_{H_D^s},$$
and
$$\|e^{it\Delta_D}u_0\|_{L^p(0,T;\mathcal W^{s,q})}\le C\|u_0\|_{H_D^{s+1/p}}.$$

### External input

For finite $p>2$ and the hypotheses above, the integer cases $s=0,1$ of the two estimates are imported from reference 0, Propositions 2.10 and 2.11. Their input spaces are respectively $H_D^s$ and $H_D^{s+1/p}$, and their target spaces are respectively $L^p_tL^q_x$ and $L^p_tW^{1,q}_x$ at $s=0$ and $s=1$. This item does not reconstruct the source proofs of those estimates.

### Facts & Assumptions

**Given:** The hypotheses and notation of the Statement.

[F1] [def-se-geometry](item-def-se-geometry) and [def-se-nontrapping](item-def-se-nontrapping) specify the exterior and generalized-ray non-trapping hypothesis required by the independent endpoint input.

[F2] [def-se-dirichlet-scale](item-def-se-dirichlet-scale) defines $H_D^r$ and the unitary Dirichlet group; [lem-se-exterior-dirichlet-realization](item-lem-se-exterior-dirichlet-realization) identifies $H_D^1$ with $H^1_0$ and its form norm.

[F3] [lem-se-positive-spectral-scale-contract](item-lem-se-positive-spectral-scale-contract) gives $[H_D^a,H_D^b]_s=H_D^{(1-s)a+sb}$ for $0<s<1$, in the stated complex strip convention.

[F4] [lem-se-author-ccbb64dfef2c-strip-model-well-defined](item-lem-se-author-ccbb64dfef2c-strip-model-well-defined) gives the exact operator bound $M_0^{1-s}M_1^s$ for a single complex-linear map between the sums of compatible complex Banach couples with endpoint bounds $M_0,M_1$. Separately, [lem-se-interpolation-sobolev-model](item-lem-se-interpolation-sobolev-model) gives, for finite $p$ and $1<q<\infty$, the identity $[L^p_tL^q_x,L^p_tW^{1,q}_x]_s=L^p_t\mathcal W^{s,q}_x$. For every $1\le p\le\infty$, the time spaces use strongly measurable almost-everywhere classes and the Bochner norms of [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces), with essential supremum when $p=\infty$.

[F5] Reference 0 supplies the two finite-$p$ integer endpoint estimates described in External input.

[F6] [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) records the Choice assumption required by the stated spectral and interpolation suppliers.

[F7] [math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm) defines $W^{j,q}(\Omega;\mathbb C)$ and its weak-derivative norm for $j=0,1$; in particular $W^{0,q}=L^q$. Its Countable Choice hypothesis follows from the assumed AC.

[F8] Under Countable Choice, [math:lem-weak-leibniz-rule-with-a-smooth-factor](https://alphabetamath.cc/item/lem-weak-leibniz-rule-with-a-smooth-factor) gives the weak product formula on any open set for a smooth multiplier, and preserves $W^{k,q}$ when its classical derivatives through order $k$ are bounded. Here apply it on $\Omega$ with $k=1$, $q=2$ and multiplier $1-\chi$; compact support of the multiplier itself is not required.

[F9] [math:thm-sobolev-spaces-are-banach-spaces](https://alphabetamath.cc/item/thm-sobolev-spaces-are-banach-spaces) applies under AC on the open set $\Omega$, with complex scalars, $k=0,1$ and exponent $q$, and gives the complex Banach endpoints $L^q$ and $W^{1,q}$. Their weak-derivative norm in [F7] gives $\|v\|_q\le\|v\|_{W^{1,q}}$.

[F10] [math:thm-pe12-bochner-lp-completeness](https://alphabetamath.cc/item/thm-pe12-bochner-lp-completeness) proves completeness on $(0,T)$ for real Banach values, finite $1\le p<\infty$ and Countable Choice. [math:lem-complex-norm-realification-is-a-real-norm](https://alphabetamath.cc/item/lem-complex-norm-realification-is-a-real-norm) preserves the norm and metric on restricting complex scalars to real scalars. Thus the same completeness theorem applies to the unchanged norm and simple-function classes of a complex Banach value space; complex homogeneity is inherited pointwise and under the integral. AC supplies Countable Choice.

### Proof

**Given:** The hypotheses and notation of the Statement.

[F1] [def-se-geometry](item-def-se-geometry) and [def-se-nontrapping](item-def-se-nontrapping) specify the exterior and generalized-ray non-trapping hypothesis required by the independent endpoint input.

[F2] [def-se-dirichlet-scale](item-def-se-dirichlet-scale) defines $H_D^r$ and the unitary Dirichlet group; [lem-se-exterior-dirichlet-realization](item-lem-se-exterior-dirichlet-realization) identifies $H_D^1$ with $H^1_0$ and its form norm.

[F3] [lem-se-positive-spectral-scale-contract](item-lem-se-positive-spectral-scale-contract) gives $[H_D^a,H_D^b]_s=H_D^{(1-s)a+sb}$ for $0<s<1$, in the stated complex strip convention.

[F4] [lem-se-author-ccbb64dfef2c-strip-model-well-defined](item-lem-se-author-ccbb64dfef2c-strip-model-well-defined) gives the exact operator bound $M_0^{1-s}M_1^s$ for a single complex-linear map between the sums of compatible complex Banach couples with endpoint bounds $M_0,M_1$. Separately, [lem-se-interpolation-sobolev-model](item-lem-se-interpolation-sobolev-model) gives, for finite $p$ and $1<q<\infty$, the identity $[L^p_tL^q_x,L^p_tW^{1,q}_x]_s=L^p_t\mathcal W^{s,q}_x$. For every $1\le p\le\infty$, the time spaces use strongly measurable almost-everywhere classes and the Bochner norms of [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces), with essential supremum when $p=\infty$.

[F5] Reference 0 supplies the two finite-$p$ integer endpoint estimates described in External input.

[F6] [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) records the Choice assumption required by the stated spectral and interpolation suppliers.

[F7] [math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm) defines $W^{j,q}(\Omega;\mathbb C)$ and its weak-derivative norm for $j=0,1$; in particular $W^{0,q}=L^q$. Its Countable Choice hypothesis follows from the assumed AC.

[F8] Under Countable Choice, [math:lem-weak-leibniz-rule-with-a-smooth-factor](https://alphabetamath.cc/item/lem-weak-leibniz-rule-with-a-smooth-factor) gives the weak product formula on any open set for a smooth multiplier, and preserves $W^{k,q}$ when its classical derivatives through order $k$ are bounded. Here apply it on $\Omega$ with $k=1$, $q=2$ and multiplier $1-\chi$; compact support of the multiplier itself is not required.

[F9] [math:thm-sobolev-spaces-are-banach-spaces](https://alphabetamath.cc/item/thm-sobolev-spaces-are-banach-spaces) applies under AC on the open set $\Omega$, with complex scalars, $k=0,1$ and exponent $q$, and gives the complex Banach endpoints $L^q$ and $W^{1,q}$. Their weak-derivative norm in [F7] gives $\|v\|_q\le\|v\|_{W^{1,q}}$.

[F10] [math:thm-pe12-bochner-lp-completeness](https://alphabetamath.cc/item/thm-pe12-bochner-lp-completeness) proves completeness on $(0,T)$ for real Banach values, finite $1\le p<\infty$ and Countable Choice. [math:lem-complex-norm-realification-is-a-real-norm](https://alphabetamath.cc/item/lem-complex-norm-realification-is-a-real-norm) preserves the norm and metric on restricting complex scalars to real scalars. Thus the same completeness theorem applies to the unchanged norm and simple-function classes of a complex Banach value space; complex homogeneity is inherited pointwise and under the integral. AC supplies Countable Choice.



**Given:** The data and hypotheses in the Statement.

**Goal:** Prove both displayed estimates for every stated $p,q,s$.

1.1 Suppose first $p<\infty$. The admissibility relation and $p>2$ imply $2\le q<\infty$, including in dimension two. Define the consistent linear maps $S_0u(t)=(1-\chi)e^{it\Delta_D}u$ and $S_1u(t)=e^{it\Delta_D}u$. The independent input bounds $S_0$ from $H_D^j$ and $S_1$ from $H_D^{j+1/p}$ to $L^p(0,T;W^{j,q})$ for $j=0,1$, where $W^{0,q}=L^q$. The operators agree on their nested endpoint domains because both are given by the same spectral evolution and multiplication. [F1, F2, F5, F7, given]

1.2 If $p=\infty$, admissibility gives $q=2$ and $1/p=0$. Spectral unitarity bounds $e^{it\Delta_D}$ on both $H_D^0=L^2$ and $H_D^1=H^1_0$, uniformly in $t$. The inclusion $H^1_0\hookrightarrow W^{1,2}$ is continuous by the form norm. Put $a=(1-\chi)|_\Omega$. Smoothness and compact support of $\chi$ imply that $a$ and each classical first derivative $\partial_ja=-\partial_j\chi$ are bounded on $\Omega$. Apply [F8] on this open set to every $v\in W^{1,2}(\Omega;\mathbb C)$: $D_j(av)=aD_jv-(\partial_j\chi)v$ in $L^2(\Omega)$. The bounds $\|av\|_2\le\|a\|_\infty\|v\|_2$ and $\|D_j(av)\|_2\le\|a\|_\infty\|D_jv\|_2+\|\partial_j\chi\|_\infty\|v\|_2$, summed over the finitely many derivatives in [F7], show bounded multiplication on $W^{1,2}$. The value bound also gives bounded multiplication on $L^2$. Thus both spatial maps have uniform bounds from $H_D^j$ to $W^{j,2}$ for $j=0,1$. [F2, F6, F7, F8, given]

2.1 For finite $p$, the source couples $(H_D^0,H_D^1)$ and $(H_D^{1/p},H_D^{1+1/p})$ are compatible complex Hilbert couples in their respective lower endpoints, by the scale inclusions and norms in [F2, F3]. By [F9, F10], the target endpoints $Y_0=L^p(0,T;L^q)$ and $Y_1=L^p(0,T;W^{1,q})$ are complex Banach spaces. The inequality in [F9] integrates to a continuous injective inclusion $Y_1\hookrightarrow Y_0$, so they are a compatible couple in the Hausdorff space $Y_0$. The inclusion respects strongly measurable classes: applying it to their simple approximants proves strong measurability in $L^q$, and vanishing as an $L^q$ class implies vanishing as a $W^{1,q}$ class. Each source sum is its lower endpoint; step 1.1 defines a single complex-linear map on that sum with values in $Y_0=Y_0+Y_1$ and the two required endpoint bounds. The exact operator theorem in [F4] therefore applies to each map. By [F3] the sources interpolate to $H_D^s$ and $H_D^{s+1/p}$, and by [F4] the target interpolates to $L^p(0,T;\mathcal W^{s,q})$. This proves both bounds for $0<s<1$; $s=0,1$ are the imported endpoints. [F2, F3, F4, F5, F6, F7, F9, F10, step 1.1]

2.2 Now let $p=\infty$, so $q=2$, and write $U(t)=e^{it\Delta_D}$. Apply the exact operator theorem in [F4] to the fixed identity inclusion and the fixed multiplier $M_a:v\mapsto(1-\chi)v$, using their $H_D^j\to W^{j,2}$ bounds from step 1.2 at $t=0$, $j=0,1$. The source couple is $(H_D^0,H_D^1)$ in $L^2$; the target couple is $(L^2,W^{1,2})$ in $L^2$. Both are compatible complex Banach couples by [F2, F3, F7, F9], with continuous endpoint inclusions, and each map is defined consistently on the source sum $L^2$. Thus for every $0<s<1$ these fixed maps restrict to bounded maps $B_s^0:H_D^s\to\mathcal W^{s,2}$ and $B_s^a:H_D^s\to\mathcal W^{s,2}$, respectively. The same notation at $s=0,1$ denotes their endpoint restrictions. Unitarity on $H_D^s$ gives $\|B_s^\nu U(t)u\|_{\mathcal W^{s,2}}\le\|B_s^\nu\|\|u\|_{H_D^s}$ for $\nu=0,a$, uniformly in $t$. [F2, F3, F4, F7, F9, step 1.2]

3.1 Strong continuity of the spectral group on $H_D^s$ and boundedness of the fixed maps $B_s^0,B_s^a$ give the required measurable representatives of $t\mapsto B_s^\nu U(t)u_0$, so their essential time suprema obey the uniform bounds in step 2.2. These are the whole-domain and cutoff paths. Since $1/p=0$, both estimates follow for $p=\infty$; together with step 2.1 this completes the proof. [F2, F3, F4, step 2.1, step 2.2] ∎

### Source notes

The finite-time integer estimates are independent external premises. The fractional conclusion uses the explicitly stated complex interpolation model; it does not assert that the source uniquely specified that model. The $p=\infty$ case is derived from spectral unitarity and spatial interpolation, without an infinite-exponent Bochner interpolation identity.


## Nontrapping cutoff resolvent estimates

[Open item](item-prop-se-import-bgt-cutoff-resolvent) · level 7


### Statement

Assume the Axiom of Choice. Let $n\ge2$, let $\Theta\subset\mathbb R^n$ be a nonempty smooth compact obstacle with connected exterior $\Omega=\mathbb R^n\setminus\Theta$, and suppose that the obstacle is nontrapping. Let $\Delta_D$ be the Dirichlet Laplacian on $\Omega$, and let $H_D^s(\Omega)$ be the spectral scale of $I-\Delta_D$. Let $\chi\in C_c^\infty(\mathbb R^n)$ be real and nonnegative, acting by multiplication after restriction to $\Omega$.

Write $B=-\Delta_D$, let $\rho(B)$ denote its resolvent set, and use the library convention $R_B(z)=(zI-B)^{-1}$ for $z\in\rho(B)$. Thus the inverse in the estimates below is $(B-zI)^{-1}=-R_B(z)$, initially acting on $L^2(\Omega)$. All spectral parameters used below belong to $\rho(B)$.

For every $s\in[-1,1]$ there are constants $C_s>0$ and $\epsilon_0>0$ such that, for all $\lambda\in\mathbb R$ and $0<\epsilon\le\epsilon_0$, the cutoff resolvent $T_{\lambda,\epsilon}^{\pm}=\chi(-\Delta_D-(\lambda\pm i\epsilon)^2)^{-1}\chi$ extends boundedly from $H_D^s(\Omega)$ to $H_D^{s+1}(\Omega)$ and satisfies $\|T_{\lambda,\epsilon}^{\pm}\|_{H_D^s\to H_D^{s+1}}\le C_s$. The constants may depend on the obstacle, cutoff and $s$, but not on $\lambda$ or $\epsilon$.

For the same cutoff and sufficiently small $\epsilon>0$, the $L^2$ operator norm of $T_{\lambda,\epsilon}^{\pm}$ is at most $C|\lambda|^{-1}$ when $|\lambda|\ge1$ and at most $C$ when $|\lambda|\le1$, uniformly in those parameters. Also, for every $s\in[-1,1]$ and every complex $z$ with $\operatorname{Re}z<0$, $\|\chi(-\Delta_D-z)^{-1}\chi\|_{H_D^s\to H_D^{s+1}}\le C_s(1+|\operatorname{Re}z|)^{-1/2}$, uniformly in $z$.

### Statement references

[def-se-geometry](item-def-se-geometry)

[def-se-nontrapping](item-def-se-nontrapping)

[def-se-dirichlet-scale](item-def-se-dirichlet-scale)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-resolvent-and-spectrum-of-a-closed-unbounded-operator](https://alphabetamath.cc/item/def-resolvent-and-spectrum-of-a-closed-unbounded-operator)

### Facts & Assumptions

The exterior geometry and smoothness convention are those of [def-se-geometry](item-def-se-geometry). The nontrapping condition uses the generalized reflected and glancing rays specified by [def-se-nontrapping](item-def-se-nontrapping).

The operator and scale are those of [def-se-dirichlet-scale](item-def-se-dirichlet-scale): $\Delta_D$ has domain $H^2(\Omega)\cap H^1_0(\Omega)$, and the scale is formed from powers of $I-\Delta_D$, with negative orders defined by completion and pivot duality. The use of this scale retains the full [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) assumption recorded in its definition.

The resolvent set and operator are defined by [math:def-resolvent-and-spectrum-of-a-closed-unbounded-operator](https://alphabetamath.cc/item/def-resolvent-and-spectrum-of-a-closed-unbounded-operator): $z\in\rho(B)$ means that $zI-B:D(B)\to L^2(\Omega)$ is bijective with bounded inverse on $L^2(\Omega)$. Since $B-zI=-(zI-B)$, the notation $(B-zI)^{-1}$ here is the negative of the supplier's $R_B(z)$.

### External input

At the start of Section 2.2, Burq, Gérard and Tzvetkov give the uncut resolvent of the positive self-adjoint operator $B=-\Delta_D$ on $\mathbb C\setminus[0,\infty)$; this spectral-domain assertion is imported. The stated parameter families lie in that domain: $(\lambda\pm i\epsilon)^2=\lambda^2-\epsilon^2\pm2i\lambda\epsilon$ is nonreal if $\lambda\ne0$ and equals $-\epsilon^2<0$ if $\lambda=0$, while $\operatorname{Re}z<0$ excludes $[0,\infty)$. Hence the displayed $L^2$ inverses exist before taking their cutoff extensions.

The high- and low-frequency $L^2$ bounds are imported from Propositions 2.2 and 2.4 of Burq, Gérard and Tzvetkov, under the geometry and parameter restrictions stated above. The low-frequency statement requires a nonempty obstacle.

The uniform $H_D^s\to H_D^{s+1}$ bound is imported from their Proposition 2.5. Its printed range is $s\ge-1$; this item uses only $-1\le s\le1$. The nonnegative cutoff hypothesis is retained.

The negative-real-part bound is imported from their Remark 2.6, equation (2.10), again only for $-1\le s\le1$. The source states that an integration by parts gives the estimate; no local proof of that input is claimed here.

### Source notes

The source defines the positive Dirichlet scale using the functional calculus of $I-\Delta_D$, and the negative range through duality and interpolation. The present item uses the corresponding frozen spectral-scale convention. The cited statements are independent of the article under study.


## Energy dispersive bounds under bounded trajectory perturbations

[Open item](item-lem-se-bounded-perturbation-dispersive-transfer) · level 7


### Statement

Assume the Axiom of Choice. Let $\Omega=\mathbb R^n\setminus\Theta$, $n\ge2$, where $\Theta$ is compact with smooth boundary and $\Omega$ is open. Let $A=I-\Delta_D\ge I$ be the self-adjoint shifted Dirichlet Laplacian and let $H_D^s=D(A^{s/2})$ with norm $\|A^{s/2}\cdot\|_2$ for $s\in\{1,2\}$. In particular $H_D^1=H^1_0(\Omega)$ and $H_D^2=H^2(\Omega)\cap H^1_0(\Omega)$, with equivalent standard Sobolev norms. Write $W(t)=e^{it\Delta_D}$, a strongly continuous unitary group on each of these spaces.

Fix $0<T<\infty$. Suppose that, for some $C_T$, the scalar mixed-norm estimate $\|W(\cdot)h\|_{L^4(0,T;L^\infty(\Omega))}\le C_T\|h\|_{H_D^1}$ holds for every $h\in H_D^1$. Here the mixed norm is the $L^4$ norm in time of the spatial essential supremum; it does not require Bochner measurability into $L^\infty$.

Let $B:[0,T]\to\mathcal B_{\mathbb R}(H_D^1)$ be norm-continuous, where $\mathcal B_{\mathbb R}$ denotes bounded real-linear operators, and let $K=\sup_{t\in[0,T]}\|B(t)\|$. Let $S(t,r)$ be the real-linear evolution determined by $S(t,r)h=W(t-r)h+\int_r^tW(t-\rho)B(\rho)S(\rho,r)h\,d\rho$. For $0\le r\le b\le T$, put $I=[r,b]$ and $\|u\|_{X_I}=\|u\|_{C(I;H_D^1)}+\|u\|_{L^4(I;L^\infty)}$. Then, for every $h\in H_D^1$ and strongly measurable $f\in L^1(I;H_D^1)$, the function $u(t)=S(t,r)h+\int_r^tS(t,\rho)f(\rho)\,d\rho$ belongs to $X_I$ and satisfies $\|u\|_{X_I}\le C_{T,K}(\|h\|_{H_D^1}+\|f\|_{L^1(I;H_D^1)})$, where one may take $C_{T,K}=e^{KT}+C_T(1+TK e^{KT})$. In particular the homogeneous perturbed orbit and the retarded perturbed forcing operator both obey this bound.

The analogous energy conclusion holds on $H_D^2$: if $B$ is also a norm-continuous bounded real-linear family on $H_D^2$, consistent with its action on $H_D^1$, and $K_2$ is its supremum norm there, then the same evolution restricted to $H_D^2$ satisfies $\|u\|_{C(I;H_D^2)}\le e^{K_2T}(\|h\|_{H_D^2}+\|f\|_{L^1(I;H_D^2)})$. This order-two assertion does not require an $L^4L^\infty$ estimate at order two.

For the trajectory form $B(t)z=i(V_1(t)z+V_2(t)\overline z)$, it is sufficient that each $V_j:[0,T]\to W^{2,\infty}(\Omega)$ be norm-continuous. Here $W^{2,\infty}$ consists of functions with essentially bounded weak derivatives through order two. The resulting multipliers preserve $H^1_0$ and hence the Dirichlet boundary condition. No global-in-time smoothing or unique-continuation estimate is asserted.

### Facts & Assumptions

[F1] The exterior realization identifies the self-adjoint operator, its form domain $H^1_0$ and its operator domain $H^2\cap H^1_0$ [lem-se-exterior-dirichlet-realization](item-lem-se-exterior-dirichlet-realization). The positive spectral-scale contract supplies the scale and the consistent unitary group [lem-se-positive-spectral-scale-contract](item-lem-se-positive-spectral-scale-contract).

[F2] For a strongly continuous bounded free group and a norm-continuous bounded real-linear perturbation, the real evolution supplier constructs the unique evolution, its variation-of-constants formula and its energy bound [lem-se-real-evolution-duhamel-bound](item-lem-se-real-evolution-duhamel-bound).

[F3] The shifted retarded-transfer lemma converts the assumed homogeneous bound into the causal $L^1_tH_D^1$ to $L^4_tL^\infty_x$ bound on every translated interval of length at most $T$, using its scalar $L^\infty$ convention [lem-se-shifted-l1-retarded-transfer](item-lem-se-shifted-l1-retarded-transfer).

[F4] The spectral multiplier lemma bounds multiplication by $a\in W^{2,\infty}$ on both $H_D^1$ and $H_D^2$, preserves the zero-boundary spaces, and identifies conjugation as an isometry [lem-se-spectral-cutoff-duality](item-lem-se-spectral-cutoff-duality).

[F5] The Axiom of Choice supplies the choice hypotheses inherited by these scale, multiplier and evolution inputs [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

[F6] The complex integer Sobolev spaces use $H^k(\Omega)=W^{k,2}(\Omega;\mathbb C)$ with $\|u\|_{H^k}^2=\sum_{|\alpha|\le k}\|D^\alpha u\|_2^2$ for $k=1,2$. The coefficient norm is $\|a\|_{W^{2,\infty}}=\max_{|\alpha|\le2}\|D^\alpha a\|_\infty$, with $D^0a=a$, as in [math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm). Its open-set, dimensional and scalar hypotheses hold here, and its Countable Choice hypothesis follows from [F5].

[F7] Strong measurability on $I$ means almost-everywhere convergence in the relevant $H_D^j$ norm, $j=1,2$, of measurable simple functions, with respect to Lebesgue measure on $I$ [math:def-strongly-measurable-banach-valued-function](https://alphabetamath.cc/item/def-strongly-measurable-banach-valued-function). These Hilbert spaces are Banach spaces, so the definition applies to the forcing and integrands in the energy spaces; it imposes no strong measurability into spatial $L^\infty$.

### Proof

[F1] The exterior realization identifies the self-adjoint operator, its form domain $H^1_0$ and its operator domain $H^2\cap H^1_0$ [lem-se-exterior-dirichlet-realization](item-lem-se-exterior-dirichlet-realization). The positive spectral-scale contract supplies the scale and the consistent unitary group [lem-se-positive-spectral-scale-contract](item-lem-se-positive-spectral-scale-contract).

[F2] For a strongly continuous bounded free group and a norm-continuous bounded real-linear perturbation, the real evolution supplier constructs the unique evolution, its variation-of-constants formula and its energy bound [lem-se-real-evolution-duhamel-bound](item-lem-se-real-evolution-duhamel-bound).

[F3] The shifted retarded-transfer lemma converts the assumed homogeneous bound into the causal $L^1_tH_D^1$ to $L^4_tL^\infty_x$ bound on every translated interval of length at most $T$, using its scalar $L^\infty$ convention [lem-se-shifted-l1-retarded-transfer](item-lem-se-shifted-l1-retarded-transfer).

[F4] The spectral multiplier lemma bounds multiplication by $a\in W^{2,\infty}$ on both $H_D^1$ and $H_D^2$, preserves the zero-boundary spaces, and identifies conjugation as an isometry [lem-se-spectral-cutoff-duality](item-lem-se-spectral-cutoff-duality).

[F5] The Axiom of Choice supplies the choice hypotheses inherited by these scale, multiplier and evolution inputs [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).



**Given:** The domain, free homogeneous estimate and real-linear perturbation in the Statement.

**Goal:** Establish the finite-interval perturbed homogeneous and forcing estimates and the stated multiplier application.

1.1 By the exterior realization and spectral-scale contract, $H_D^1$ is a complex Hilbert space, $W$ is a strongly continuous unitary group on it, and its scalar realization embeds continuously into $L^2(\Omega)$. The real evolution result therefore gives the stated $S$ and, for the prescribed data and forcing, the Volterra identity $u(t)=W(t-r)h+\int_r^tW(t-\rho)(B(\rho)u(\rho)+f(\rho))\,d\rho$. It also gives $\|u\|_{C(I;H_D^1)}\le e^{K(b-r)}(\|h\|_{H_D^1}+\|f\|_{L^1(I;H_D^1)})$. The integrand is strongly measurable because $B$ and $u$ are continuous and $f$ is strongly measurable. [F1, F2, F5, F7, given]

1.2 On $H_D^2$, the same real evolution theorem applies with the consistent unitary free group and bound $K_2$, giving the stated energy estimate. The $H_D^2$ solution also satisfies the $H_D^1$ Volterra equation because the embeddings, free groups and perturbation actions are consistent; uniqueness in $H_D^1$ identifies the evolutions. [F1, F2, F5, given]

2.1 Apply the shifted retarded-transfer lemma in its scalar convention to $g=Bu+f$. Its $L^\infty$ endpoint applies to the scalar mixed norm, and translation and restriction give the same $C_T$ on $I$. Since $\|g\|_{L^1(I;H_D^1)}\le TK\|u\|_{C(I;H_D^1)}+\|f\|_{L^1(I;H_D^1)}$, the free homogeneous and retarded estimates yield $\|u\|_{L^4(I;L^\infty)}\le C_T(1+TK e^{KT})(\|h\|_{H_D^1}+\|f\|_{L^1(I;H_D^1)})$. Combining this with step 1.1 gives the claimed $X_I$ estimate. Setting $f=0$ or $h=0$ gives the two separate operator estimates. [F3, step 1.1, given]

3.1 For the trajectory coefficients, the multiplier estimate gives $\|B(t)-B(s)\|_{\mathcal B_{\mathbb R}(H_D^j)}\le C\sum_{k=1}^2\|V_k(t)-V_k(s)\|_{W^{2,\infty}}$ for $j=1,2$, using the conjugation isometry and multiplication by $i$. Thus $B$ is norm-continuous and bounded on both levels, and its actions are consistent. The same multiplier result preserves $H^1_0$ and $H^2\cap H^1_0$, so the Dirichlet condition is retained. Applying the previous steps completes the proof. [F4, F6, step 2.1, step 1.2, given] ∎


## Resolvent adjoint transport to order minus two

[Open item](item-lem-se-cutoff-resolvent-negative-extension) · level 8


### Statement

Assume the Axiom of Choice. Let $n\ge2$, and let $\Theta\subset\mathbb R^n$ be a nonempty compact obstacle with smooth boundary and connected exterior $\Omega=\mathbb R^n\setminus\Theta$. Assume it is nontrapping in the complete-ray sense: for every complete unit-speed admissible generalized reflected or glancing ray $x:\mathbb R\to\overline\Omega$ and every compact $K\subset\mathbb R^n$, there is $t\ge0$ with $x(t)\notin K$. Let $\Delta_D$ be the Dirichlet Laplacian and let $H_D^s$ be the spectral Hilbert scale of $A=I-\Delta_D$, with negative orders identified by the $L^2(\Omega)$ pivot antidual pairing. Let $\eta\in C_c^\infty(\mathbb R^n)$ be real, and write $K_z=\eta(-\Delta_D-z)^{-1}\eta$ on $L^2(\Omega)$ whenever the resolvent exists.

There are $C>0$ and $\epsilon_0>0$, depending on the obstacle and $\eta$, such that for every real $\lambda$, $0<\epsilon\le\epsilon_0$, and either sign, $K_{(\lambda\pm i\epsilon)^2}$ extends uniquely to a bounded operator $H_D^{-2}\to H_D^{-1}$ of norm at most $C$. For every $z$ with $\operatorname{Re}z<0$, the same extension satisfies $\|K_z\|_{H_D^{-2}\to H_D^{-1}}\le C(1+|\operatorname{Re}z|)^{-1/2}$. The constants are uniform in the indicated parameters.

### Statement references

[math:def-resolvent-and-spectrum-of-a-closed-unbounded-operator](https://alphabetamath.cc/item/def-resolvent-and-spectrum-of-a-closed-unbounded-operator)

[def-se-geometry](item-def-se-geometry)

[def-se-nontrapping](item-def-se-nontrapping)

[def-se-dirichlet-scale](item-def-se-dirichlet-scale)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

### Facts & Assumptions

[F1] The exterior Dirichlet realization is self-adjoint, with $-\Delta_D\ge0$ [lem-se-exterior-dirichlet-realization](item-lem-se-exterior-dirichlet-realization).

[F2] The scale is the completion of the common spectral core; its negative spaces are isometrically the pivot antiduals of the corresponding positive spaces [def-se-dirichlet-scale](item-def-se-dirichlet-scale), [lem-se-positive-spectral-scale-contract](item-lem-se-positive-spectral-scale-contract).

[F3] For a nonnegative smooth compactly supported cutoff $\chi$, the imported cutoff resolvent estimate applies from $H_D^1$ to $H_D^2$, uniformly on the two squared-parameter families and with the stated negative-real-part decay [prop-se-import-bgt-cutoff-resolvent](item-prop-se-import-bgt-cutoff-resolvent).

[F4] Multiplication by a smooth compactly supported function is bounded on each $H_D^s$ for $-2\le s\le2$; on negative orders it is defined by the pivot pairing with the conjugate multiplier [lem-se-spectral-cutoff-duality](item-lem-se-spectral-cutoff-duality).

[F5] The self-adjoint Borel calculus identifies the adjoint of a bounded spectral multiplier with the multiplier by its complex conjugate [math:thm-unbounded-borel-functional-calculus](https://alphabetamath.cc/item/thm-unbounded-borel-functional-calculus). The assumed Axiom of Choice supplies the choice hypotheses of the cited scale and calculus results [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

[F6] The explicit smooth-cutoff construction gives $\rho\in C_c^\infty(\mathbb R^n)$ with $0\le\rho\le1$, $\rho=1$ for $|x|\le1$, and $\rho=0$ for $|x|\ge2$; for every $R>0$, $\rho(x/R)$ is again smooth and compactly supported [math:lem-schwartz-cutoffs-from-the-standard-smooth-step](https://alphabetamath.cc/item/lem-schwartz-cutoffs-from-the-standard-smooth-step).

[F7] For $B=-\Delta_D$ on the complex Hilbert space $L^2(\Omega)$, the resolvent set $\rho(B)$ consists of those $z\in\mathbb C$ for which $zI-B:D(B)\to L^2(\Omega)$ is bijective with bounded everywhere defined inverse $R_B(z)=(zI-B)^{-1}$; the spectrum is $\sigma(B)=\mathbb C\setminus\rho(B)$ [math:def-resolvent-and-spectrum-of-a-closed-unbounded-operator](https://alphabetamath.cc/item/def-resolvent-and-spectrum-of-a-closed-unbounded-operator). Since $B-zI=-(zI-B)$, the inverse used here is $(B-zI)^{-1}=-R_B(z)$, with the same resolvent set and the same operator norm.

### Proof

**Given:** The geometry, nontrapping assumption, scale, cutoff and parameter ranges in the Statement.

**Goal:** Construct the stated negative-order extensions and prove their bounds.

1.1 Since $\eta$ has compact support, the increasing open balls $B_m(0)$, $m\ge1$, cover $\operatorname{supp}\eta$, and a finite subcover gives $R>0$ with $\operatorname{supp}\eta\subset B_R(0)$; if the support is empty, take $R=1$. Take $\rho$ from [F6] and set $\chi(x)=\rho(x/R)$. Then $\chi\in C_c^\infty(\mathbb R^n)$, $0\le\chi\le1$, and $\chi=1$ on $B_R(0)$, an open neighborhood of $\operatorname{supp}\eta$. Thus $\eta\chi=\eta$. The imported estimate applied to $\chi$ at order $s=1$, together with the multiplier bounds on $H_D^1$ and $H_D^2$, gives $\|K_w\|_{H_D^1\to H_D^2}\le C$ for $w=(\lambda\pm i\epsilon)^2$ in its stated parameter range, and $\|K_w\|_{H_D^1\to H_D^2}\le C(1+|\operatorname{Re}w|)^{-1/2}$ for $\operatorname{Re}w<0$. Indeed, on $L^2$, $K_w=M_\eta(\chi(-\Delta_D-w)^{-1}\chi)M_\eta$; bounded extensions give the same identity on $H_D^1$. The constants absorb the two multiplier norms. [F3, F4, F6, given]

1.2 The spectrum of $-\Delta_D$ lies in $[0,\infty)$. Every parameter in the Statement and its complex conjugate is therefore in the resolvent set: the squared parameter is nonreal unless $\lambda=0$, when it is $-\epsilon^2<0$. The Borel calculus gives $((-\Delta_D-z)^{-1})^*=(-\Delta_D-\overline z)^{-1}$ on $L^2$. Since $\eta$ is real, $M_\eta^*=M_\eta$, so $K_z^*=K_{\overline z}$ on $L^2$. Both parameter families are closed under conjugation and preserve the stated bound. [F1, F5, F7, given]

2.1 For $f\in H_D^{-2}$ define a conjugate-linear functional on $H_D^1$ by $v\mapsto\langle f,K_{\overline z}v\rangle_{-2,2}$. Step 1.1 bounds its norm by $\|f\|_{H_D^{-2}}\|K_{\overline z}\|_{H_D^1\to H_D^2}$. Pivot antiduality therefore gives a unique $Tf\in H_D^{-1}$ with $\langle Tf,v\rangle_{-1,1}=\langle f,K_{\overline z}v\rangle_{-2,2}$ and the same operator bound. For $f\in L^2$ this pairing equals $\langle K_zf,v\rangle_2$ by step 1.2, so $T$ extends the original $K_z$. The spectral core is dense in $H_D^{-2}$ and lies in $L^2$, making this extension unique. Applying the bounds of step 1.1 to $\overline z$ proves both asserted estimates. [F2, step 1.1, step 1.2] ∎

### Source notes

The negative-order statement is a local adjoint consequence of the cited positive-order imported estimate. The imported supplier retains its own source attribution and reading limits; no negative-order estimate is attributed directly to that source here.
