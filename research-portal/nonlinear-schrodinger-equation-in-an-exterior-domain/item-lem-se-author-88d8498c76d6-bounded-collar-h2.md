---
title: Bounded collar regularity for an exterior weak Dirichlet function
status: published
research_item: lem-se-author-88d8498c76d6-bounded-collar-h2
dependency_level: 0
---

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm)
- [math:def-wkp-zero-as-a-sobolev-closure](https://alphabetamath.cc/item/def-wkp-zero-as-a-sobolev-closure)
- [math:lem-test-function-cutoffs-and-euclidean-localization](https://alphabetamath.cc/item/lem-test-function-cutoffs-and-euclidean-localization)
- [math:lem-weak-leibniz-rule-with-a-smooth-factor](https://alphabetamath.cc/item/lem-weak-leibniz-rule-with-a-smooth-factor)
- [math:thm-global-h-two-dirichlet-regularity](https://alphabetamath.cc/item/thm-global-h-two-dirichlet-regularity)
- [math:def-distributional-derivative](https://alphabetamath.cc/item/def-distributional-derivative)
- [math:def-locally-integrable-function-as-a-regular-distribution](https://alphabetamath.cc/item/def-locally-integrable-function-as-a-regular-distribution)
- [math:def-bounded-c-k-domain-and-boundary-charts](https://alphabetamath.cc/item/def-bounded-c-k-domain-and-boundary-charts)
- [math:def-weak-dirichlet-solution-for-a-divergence-form-operator](https://alphabetamath.cc/item/def-weak-dirichlet-solution-for-a-divergence-form-operator)
- [math:def-uniformly-elliptic-divergence-form-operator](https://alphabetamath.cc/item/def-uniformly-elliptic-divergence-form-operator)


## Statement

Assume AC. Let $\Omega=\mathbb R^n\setminus\Theta$, $n\ge2$, be open with $\Theta$ compact and smooth boundary. Here smooth boundary means that $\partial\Theta$ is a smooth embedded hypersurface without boundary: near each of its points, a rigid motion makes it the graph $s=b(y)$ of a smooth function on an open ball in $\mathbb R^{n-1}$. No assumption that $\Theta$ occupies one specified side is imposed. Let $B_L=\{x\in\mathbb R^n:|x|<L\}$, choose $L>0$ with $\Theta\Subset B_L$, and choose $\eta\in C_c^\infty(B_L)$ equal to $1$ near $\Theta$. Put $G=B_L\setminus\Theta$ and write $H^k=W^{k,2}$ for $k=1,2$. If $u\in H^1_0(\Omega)$ and $\Delta u=g\in L^2(\Omega)$ in distributions, meaning $\int_\Omega u\Delta\phi=\int_\Omega g\phi$ for every $\phi\in C_c^\infty(\Omega)$, then $\eta u\in H^1_0(G)\cap H^2(G)$ and
$$\Delta(\eta u)=\eta g+2\nabla\eta\cdot\nabla u+(\Delta\eta)u,\qquad \|\eta u\|_{H^2(G)}\le C_{\eta,G}(\|g\|_{L^2(\Omega)}+\|u\|_{H^1(\Omega)}).$$

## Facts & Assumptions

**Given:** The hypotheses and conventions of the Statement.

[F1] Assume the Axiom of Choice [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice). Its countable instance supplies the choice hypotheses of the Sobolev, regular-distribution and regularity inputs below and permits a sequence of test-function approximants.

[F2] The Sobolev spaces and their weak derivatives use [math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm), and $H^1_0$ is the norm closure of tests in [math:def-wkp-zero-as-a-sobolev-closure](https://alphabetamath.cc/item/def-wkp-zero-as-a-sobolev-closure). All distribution pairings here are bilinear, without conjugation.

[F3] [math:lem-test-function-cutoffs-and-euclidean-localization](https://alphabetamath.cc/item/lem-test-function-cutoffs-and-euclidean-localization) supplies the fixed obstacle cutoff and the auxiliary smooth cutoffs used to form a finite partition near the compact set $\overline G$. The cutoff and all its derivatives are bounded.

[F4] [math:lem-weak-leibniz-rule-with-a-smooth-factor](https://alphabetamath.cc/item/lem-weak-leibniz-rule-with-a-smooth-factor) supplies the first-order identity $\partial_j(au)=a\partial_j u+(\partial_j a)u$ and the resulting $H^1$ multiplier bound for a smooth function with bounded first derivatives. Its second-order weak-derivative formula is not assumed for $u$.

[F5] [math:thm-global-h-two-dirichlet-regularity](https://alphabetamath.cc/item/thm-global-h-two-dirichlet-regularity) applies on a bounded one-sided $C^2$ domain $D$ to a weak solution $q\in H^1_0(D)$ of $-\Delta q=f\in L^2(D)$, giving $\|q\|_{H^2(D)}\le C_D(\|f\|_2+\|q\|_2)$. In [math:def-uniformly-elliptic-divergence-form-operator](https://alphabetamath.cc/item/def-uniformly-elliptic-divergence-form-operator) this is the choice $a^{ij}=\delta_{ij}$, $b^i=c=0$, with ellipticity constant $1$ and constant principal coefficients. The homogeneous weak-solution convention is [math:def-weak-dirichlet-solution-for-a-divergence-form-operator](https://alphabetamath.cc/item/def-weak-dirichlet-solution-for-a-divergence-form-operator); no nonzero trace data are used.

[F6] [math:def-distributional-derivative](https://alphabetamath.cc/item/def-distributional-derivative) defines $\Delta T=\sum_{j=1}^n\partial_j^2T$, and [math:def-locally-integrable-function-as-a-regular-distribution](https://alphabetamath.cc/item/def-locally-integrable-function-as-a-regular-distribution) identifies $u,g$ with their regular distributions. Thus $\Delta u=g$ means precisely the test identity in the Statement, even if the individual second derivatives of $u$ are not function-valued.

[F7] [Bounded $C^k$ domains and boundary charts](https://alphabetamath.cc/item/def-bounded-c-k-domain-and-boundary-charts) gives the one-sided graph convention required for $D$ in the regularity theorem, and the flattening shear $(y,s)\mapsto(y,s-b(y))$. At the obstacle we use the graph part of this convention, allowing either or both graph sides to belong to $G$; the auxiliary domains constructed below each occupy just one side.

## Proof

**Given:** The hypotheses and data in the Statement.

**Goal:** Establish the distributional product formula and the bounded collar estimate.

1.1 Choose $u_j\in C_c^\infty(\Omega)$ tending to $u$ in $H^1(\Omega)$ and set $w=\eta u$ on $G$. Each $w_j=(\eta u_j)|_G$ belongs to $C_c^\infty(G)$: its support misses $\Theta$ because the support of $u_j$ does, and misses $\partial B_L$ because the support of $\eta$ does. The first-order multiplier bound gives $w_j\to w$ in $H^1(G)$ and $\|w\|_{H^1(G)}\le C_\eta\|u\|_{H^1(\Omega)}$. Hence $w\in H^1_0(G)$. [F1, F2, F3, F4]

1.2 The boundary of $G$ is $\partial\Theta\cup\partial B_L$, with these two compact sets separated by a positive distance. In a sufficiently small cylindrical graph chart at $\partial\Theta$, the two open sides are connected and contain no boundary point of $\Theta$. Each side therefore lies entirely in $\operatorname{int}\Theta$ or entirely in $\Omega$: these two disjoint open sets partition the complement of $\partial\Theta$. At least one side lies in $\Omega$, and both may do so. At $\partial B_L$, exactly the inner side belongs to $G$. It suffices to obtain the regularity estimate separately on each occupied local side; we make no assertion about how these sides join in a global component. [F7, given]

2.1 For $\phi\in C_c^\infty(G)$, extend $\phi$ by zero as a test on $\Omega$ and apply $\Delta u=g$ to $\eta\phi$. Expanding derivatives of this smooth test gives $\int_G w\Delta\phi=\int_G\eta g\phi-2\int_G u\nabla\eta\cdot\nabla\phi-\int_G u(\Delta\eta)\phi$. For each coordinate, the first weak-derivative identity for $u$ tested against $(\partial_j\eta)\phi$ gives $-\int_Gu(\partial_j\eta)\partial_j\phi=\int_G((\partial_j u)(\partial_j\eta)+u\partial_j^2\eta)\phi$. Summing yields $\int_G w\Delta\phi=\int_G h\phi$, where $h=\eta g+2\nabla\eta\cdot\nabla u+(\Delta\eta)u$. Thus $\Delta w=h$ in distributions and $\|h\|_{L^2(G)}\le C_\eta(\|g\|_{L^2(\Omega)}+\|u\|_{H^1(\Omega)})$. Only first weak derivatives of $u$ have been used. [F2, F3, F6, step 1.1, algebra]

2.2 Here is a bounded smooth auxiliary domain on one side of a graph, agreeing with that side near its central boundary point. In flattened coordinates take the unit ball centered at $-e_n$, whose upper boundary is $t=a(y)=-1+\sqrt{1-|y|^2}$. Choose $0\le\chi\le1$ smooth, supported in $|y|<1/2$ and equal to $1$ for $|y|\le1/4$. Extend $\chi a$ by zero, and apply the global shear $T(y,t)=(y,t-\chi(y)a(y))$ to the ball. Its inverse is $(y,t)\mapsto(y,t+\chi(y)a(y))$, so its image $D_*$ is bounded with smooth boundary. Its upper boundary is $(1-\chi)a\le0$, and near the origin it is exactly $t=0$; hence $D_*\subset\{t<0\}$ and agrees with that half-space near the origin. Dilate it sufficiently far into the given chart, then apply the inverse flattening shear and the rigid motion from that chart. This gives a bounded smooth domain $D\subset G$ on the chosen side, agreeing with that side in a smaller ambient neighbourhood $V$ of the boundary point. For the other side first reflect $t$. The dilated closure stays inside the chart, so every part of $\partial D$ has the one-sided $C^2$ charts required by the regularity supplier. The part of $\partial D$ inside $V$ is the original graph; the remaining, artificial boundary misses a still smaller neighbourhood of the point. [F3, F7, step 1.2, construct]

3.1 Take such smaller neighbourhoods $V$ at boundary points, with a domain $D$ for each occupied side, and interior neighbourhoods compactly contained in balls $D\Subset G$. A finite number cover $\overline G$. They admit smooth cutoffs $\zeta_i$ supported compactly in their respective neighbourhoods, with $\sum_i\zeta_i=1$ near $\overline G$: choose finitely many cutoffs $\rho_i$ supported in these neighbourhoods whose sum $S$ is positive near $\overline G$, choose a compactly supported cutoff $\tau$ equal to $1$ near $\overline G$ with support in $\{S>0\}$, and set $\zeta_i=\tau\rho_i/S$ there and zero elsewhere. The $\rho_i$ can be obtained by first taking smaller open sets covering $\overline G$ and then applying the cutoff input to their compact closures. For each boundary index, shrink the neighbourhood before choosing the cutoffs so that every corresponding $D$ agrees with its occupied side there and its artificial boundary misses $\operatorname{supp}\zeta_i$. This cover and all its constants depend only on the fixed geometry. [F3, step 1.2, step 2.2, construct]

4.1 For every interior index or occupied boundary side set $q=(\zeta_i w)|_D$. The functions $(\zeta_i w_j)|_D$ are in $C_c^\infty(D)$: the artificial boundary misses their supports, and $w_j$ misses the original boundary. They converge to $q$ in $H^1(D)$, so $q\in H^1_0(D)$. Repeating the test computation of step 2.1, now with $w$, $h$ and $\zeta_i$, gives $\Delta q=h_i:=\zeta_i h+2\nabla\zeta_i\cdot\nabla w+(\Delta\zeta_i)w$ in $D$, with $\|h_i\|_{L^2(D)}\le C_i(\|h\|_{L^2(G)}+\|w\|_{H^1(G)})$. This says $\int_D\nabla q\cdot\overline{\nabla v}=-\int_D h_i\overline v$ first for smooth compactly supported $v$, and then for every $v\in H^1_0(D)$ by its defining density and the $L^2$ bounds. Thus $q$ satisfies exactly the homogeneous weak Dirichlet problem for $-\Delta$ with forcing $-h_i$. [F2, F4, F5, F6, step 1.1, step 2.1, step 3.1]

5.1 Apply the bounded-domain theorem on each of the finitely many domains $D$ to obtain $\|q\|_{H^2(D)}\le C_i(\|h\|_{L^2(G)}+\|w\|_{H^1(G)})$. Regard each $q$ as a function on $G$ by assigning zero off its chosen local side and off its supporting neighbourhood. This extension is $H^2(G)$: it vanishes in a neighbourhood of every artificial boundary, and its remaining boundary is contained in $\partial G$, which no compactly supported test in $G$ meets. Applying the weak derivative identities on these open pieces, and a finite smooth partition of a compact test support, therefore gives the weak derivatives on $G$ as the extensions of those on $D$, with the same norms. The sum of these extended functions is $\sum_i\zeta_i w=w$; when both sides of one chart are occupied, their two functions occupy disjoint parts of $G$. The finite sum belongs to $H^2(G)$ and is bounded there by $C_G(\|h\|_{L^2(G)}+\|w\|_{H^1(G)})$. Substituting steps 1.1 and 2.1 gives the stated estimate, and step 2.1 already gives the displayed Laplacian formula. This argument includes a thin smooth obstacle with both sides occupied and also the case $\Theta=\varnothing$. [F2, F3, F5, step 1.1, step 2.1, step 3.1, step 4.1] ∎
