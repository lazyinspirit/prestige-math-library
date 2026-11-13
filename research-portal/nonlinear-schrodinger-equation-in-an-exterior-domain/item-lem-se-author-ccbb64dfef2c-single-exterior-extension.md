---
title: A single collar-reflection and free-tail exterior extension
status: published
research_item: lem-se-author-ccbb64dfef2c-single-exterior-extension
dependency_level: 2
---

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-se-author-ccbb64dfef2c-collar-chart-localization](item-lem-se-author-ccbb64dfef2c-collar-chart-localization)
- [math:lem-test-function-cutoffs-and-euclidean-localization](https://alphabetamath.cc/item/lem-test-function-cutoffs-and-euclidean-localization)
- [math:lem-weak-leibniz-rule-with-a-smooth-factor](https://alphabetamath.cc/item/lem-weak-leibniz-rule-with-a-smooth-factor)
- [math:lem-compact-support-zero-extension-in-wkp](https://alphabetamath.cc/item/lem-compact-support-zero-extension-in-wkp)
- [math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm)
- [math:def-bounded-c-k-domain-and-boundary-charts](https://alphabetamath.cc/item/def-bounded-c-k-domain-and-boundary-charts)
- [math:thm-heine-borel-rn](https://alphabetamath.cc/item/thm-heine-borel-rn)
- [math:lem-finite-ambient-partitions-for-euclidean-boundary-integration](https://alphabetamath.cc/item/lem-finite-ambient-partitions-for-euclidean-boundary-integration)


## Statement

Assume AC and let $n\ge1$. Let $\Omega\subseteq\mathbb R^n$ be open with compact complement $C=\mathbb R^n\setminus\Omega$. Here a smooth exterior domain has the following one-sided local graph property. If $n\ge2$, at every $a\in\partial\Omega$ there are an open neighborhood $W$ of $a$, rigid coordinates $R(x)=(y,z)$, an open ball $B\subset\mathbb R^{n-1}$ and $h\in C^\infty(B)$ such that $R(W)\subseteq B\times\mathbb R$ and
$$R(\Omega\cap W)=R(W)\cap\{(y,z):z>h(y)\}.$$
For $n=1$, every boundary point $a$ has an interval neighborhood $I$ and a sign $\varepsilon\in\{-1,1\}$ such that $\Omega\cap I=\{x\in I:\varepsilon(x-a)>0\}$. These conditions specify the local one-sided graph convention for the unbounded open set; $C=\varnothing$ is allowed.

For each $1<q<\infty$ there is one bounded linear map
$$E:L^q(\Omega)\longrightarrow L^q(\mathbb R^n)$$
whose restriction to $W^{1,q}(\Omega)$ is bounded into $W^{1,q}(\mathbb R^n)$ and such that $PE=I$ on $L^q(\Omega)$, where $P$ is restriction to $\Omega$. Its formula uses finitely many fixed boundary-chart reflections, a fixed compact interior piece and the zero extension of an identity tail vanishing near the obstacle. The same geometric formula can be chosen for all $q$ in this range; its norm constants may depend on $q$.

## Statement references

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[Bounded $C^k$ domains and boundary charts](https://alphabetamath.cc/item/def-bounded-c-k-domain-and-boundary-charts)

[math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm)

[lem-se-author-ccbb64dfef2c-collar-chart-localization](item-lem-se-author-ccbb64dfef2c-collar-chart-localization)

## Facts & Assumptions

**Given:** The hypotheses and conventions of the Statement. The $L^q$ spaces use Lebesgue measure and may have real or complex scalars.

[F1] Assume the Axiom of Choice [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice); in particular its countable and dependent instances are available for the Sobolev suppliers. It also permits selecting local chart data at the boundary points in step 1.1.

[F2] [lem-se-author-ccbb64dfef2c-collar-chart-localization](item-lem-se-author-ccbb64dfef2c-collar-chart-localization) gives each fixed boundary piece $T_i$, with one formula on $L^q$ and $W^{1,q}$ and $P T_i u=\rho_i u$.

[F3] [math:lem-test-function-cutoffs-and-euclidean-localization](https://alphabetamath.cc/item/lem-test-function-cutoffs-and-euclidean-localization) supplies a fixed ambient cutoff $\eta=1$ near the compact complement, compactly supported in a large ball, and final chart cutoffs equal to one near specified compact supports. For a finite open cover of a compact Euclidean set, [math:lem-finite-ambient-partitions-for-euclidean-boundary-integration](https://alphabetamath.cc/item/lem-finite-ambient-partitions-for-euclidean-boundary-integration) supplies ambient smooth functions compactly supported in the respective cover members whose sum is one near that set.

[F4] [math:lem-weak-leibniz-rule-with-a-smooth-factor](https://alphabetamath.cc/item/lem-weak-leibniz-rule-with-a-smooth-factor) gives bounded cutoff multiplication. [math:lem-compact-support-zero-extension-in-wkp](https://alphabetamath.cc/item/lem-compact-support-zero-extension-in-wkp) extends a compact interior piece, while [math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm) supplies the test definition of derivatives for the unbounded tail.

[F5] The local one-sided graph and flattening convention of [Bounded $C^k$ domains and boundary charts](https://alphabetamath.cc/item/def-bounded-c-k-domain-and-boundary-charts) is used at every finite order, with the vertical orientation chosen so that the exterior is $t>0$. Only its local chart convention is used here. The exterior-domain hypotheses themselves are explicitly stated above; the nested chart construction is given in step 1.1.

[F6] [math:thm-heine-borel-rn](https://alphabetamath.cc/item/thm-heine-borel-rn) identifies compact Euclidean sets with closed bounded sets and supplies the finite-subcover property, including for the boundary and the compact sets used in steps 1.1 and 2.1.

## Proof

**Given:** The hypotheses and data in the Statement.

**Goal:** Prove the conclusions in the statement under its stated hypotheses.

1.1 If $C=\varnothing$, take $E=I$; henceforth let $C\ne\varnothing$. Choose $\eta\in C_c^\infty(\mathbb R^n)$ equal to $1$ near $C$. Both $\partial\Omega\subset C$ and $K=\operatorname{supp}\eta\cap\overline\Omega$ are closed and bounded, hence compact, and $\partial\Omega\subset K$. At each boundary point use the stated graph data and put $\Phi(x)=(y,z-h(y))$. This is a smooth coordinate map with inverse $\Phi^{-1}(y,t)=R^{-1}(y,h(y)+t)$, taking $\Omega\cap W$ exactly to $\Phi(W)\cap\{t>0\}$. Since $\Phi(W)$ is open and contains $\Phi(a)=(y_a,0)$, choose a bounded ball $B_a$ centered at $y_a$ and $b_a>0$ so that $\overline B_a\times[-b_a,b_a]\subset\Phi(W)$, with $\overline B_a\subset B$. Choose a concentric $B'_a$ with $\overline{B'_a}\subset B_a$ and $0<b'_a<b_a$. The smaller chart $U'_a=\Phi^{-1}(B'_a\times(-b'_a,b'_a))$ has compact closure inside $U_a=\Phi^{-1}(B_a\times(-b_a,b_a))$. Reflection $(y,t)\mapsto(y,-t)$ preserves the smaller closed cylinder, giving the required reflected-support margin. The first derivatives of these chart maps and their inverses are bounded on the larger closed cylinder because the derivatives of $h$ are continuous on $\overline B_a$; their Jacobians have absolute determinant one. For $n=1$, use $\Phi(x)=\varepsilon(x-a)$ and two nested symmetric intervals, which have the same properties. [F1, F3, F5, F6, given]

2.1 The sets $U'_a$ cover the compact boundary, so retain finitely many, say $U'_1,\ldots,U'_m$. The set $K\setminus\bigcup_iU'_i$ is closed and bounded, hence compact, and lies in $\Omega$: every point of $\overline\Omega$ outside $\Omega$ is a boundary point and was covered. Cover this remainder by finitely many balls $V_j$ with $\overline V_j\subset\Omega$. Apply the finite ambient partition supplier to the resulting finite open cover of $K$, obtaining $\chi_i\in C_c^\infty(U'_i)$ and $\chi_{0j}\in C_c^\infty(V_j)$ with total sum one near $K$. Put $\rho_i=\eta\chi_i$ and $\rho_0=\eta\sum_j\chi_{0j}$. Then $\rho_0$ has compact support in $\Omega$ and $\rho_0+\sum_i\rho_i=\eta$ on $\Omega$: wherever $\eta$ is nonzero in $\Omega$ the point lies in $K$, and elsewhere both sides are zero. Each $\rho_i$ has compact support in the smaller symmetric chart from step 1.1, so its reflected support stays compactly inside $U_i$. Choose a final smooth cutoff compactly supported in $U_i$ and equal to one near both these supports. These are precisely the chart and cutoff data needed by the localization supplier. All this data is fixed independently of $q$. [F2, F3, F6, step 1.1]

3.1 For $u\in L^q(\Omega)$ define $T_\infty u$ as the zero extension of $(1-\eta)u$. It is $L^q$ bounded. If $u\in W^{1,q}$, fix $\phi\in C_c^\infty(\mathbb R^n)$; then $(1-\eta)\phi\in C_c^\infty(\Omega)$, so the global weak derivative of $T_\infty u$ is the zero extension of $(1-\eta)\partial_j u-(\partial_j\eta)u$. Thus $\|T_\infty u\|_{W^{1,q}}\le C_\eta\|u\|_{W^{1,q}}$. This test argument does not require bounded support of the tail. The zero extension $T_0u$ of $\rho_0u$ has both endpoint bounds by its compact interior support. [F3, F4, step 2.1]

4.1 Define $Eu=T_\infty u+T_0u+\sum_{i=1}^mT_i u$, using the chart operators of the localization supplier with the data in step 2.1. This is one formula for every $L^q$ input; for a $W^{1,q}$ input it is exactly the same formula. The finite sum of the $L^q$ bounds gives $\|Eu\|_q\le C_q\|u\|_q$, and the finite sum of the first-derivative bounds gives $\|Eu\|_{W^{1,q}}\le\widetilde C_q\|u\|_{W^{1,q}}$. On $\Omega$ the sum equals $((1-\eta)+\rho_0+\sum_i\rho_i)u=u$. This proves $PE=I$, the norm bounds and the common-operator assertion. All choices depend only on the geometry and cutoffs; reflection is the same even formula for every $q$, which proves the final claim. [F2, F3, F4, step 2.1, step 3.1, algebra] ∎

## Source notes

The one-sided local graph convention is supplied by [Bounded $C^k$ domains and boundary charts](https://alphabetamath.cc/item/def-bounded-c-k-domain-and-boundary-charts) and specified for the exterior in the Statement. The finite nested chart cover is constructed locally using [math:thm-heine-borel-rn](https://alphabetamath.cc/item/thm-heine-borel-rn), followed by the cutoff and finite ambient partition suppliers in [F3]. The endpoint assembly uses [lem-se-author-ccbb64dfef2c-collar-chart-localization](item-lem-se-author-ccbb64dfef2c-collar-chart-localization); the unbounded tail and simultaneous $L^q$ endpoint are proved explicitly above.
