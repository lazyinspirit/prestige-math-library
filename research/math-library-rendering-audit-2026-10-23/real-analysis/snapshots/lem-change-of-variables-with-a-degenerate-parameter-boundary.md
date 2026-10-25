---
id: lem-change-of-variables-with-a-degenerate-parameter-boundary
kind: lemma
title: "Change of variables for a $C^1$ map injective and regular only on the interior of a compact Jordan set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-change-of-variables-for-compact-jordan-sets, thm-injective-c-one-images-of-compact-jordan-sets-are-jordan, lem-bounded-open-jordan-sets-have-compact-grid-exhaustions, lem-c-one-images-of-content-zero-compact-sets-have-content-zero, thm-jordan-boundary-criterion, thm-euclidean-inverse-function-theorem, def-metric-interior-closure-boundary, thm-multidimensional-integral-properties, thm-continuous-functions-on-compact-jordan-sets-are-integrable, def-riemann-integral-over-a-jordan-set, cor-jordan-content-finite-additivity, def-jacobian-determinant-of-a-c-one-map, thm-continuous-image-of-a-compact-space-is-compact, def-null-and-content-zero-in-rn, thm-jordan-content-and-indicator-integrability, lem-riemann-integral-unchanged-by-content-zero-modification, thm-heine-borel-rn, thm-real-square-matrix-invertible-iff-determinant-nonzero]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "G. Strang and E. Herman, Calculus Volume 3 (OpenStax), section 6.8"
      url: "https://openstax.org/books/calculus-volume-3/pages/6-8-the-divergence-theorem"
pipeline_run: null
---

## Statement

Let $n\ge1$, let $W\subseteq\mathbb R^n$ be open, let $\psi:W\to\mathbb R^n$ be $C^1$, and let $D\subseteq W$ be compact and Jordan measurable. Suppose $\psi$ is injective on the interior of $D$ and has nonvanishing Jacobian determinant there, and put $V:=\psi[D^\circ]$. Then

1. $\psi[D]$ is compact and Jordan measurable, $V$ is bounded, open and Jordan measurable, and $\psi[D]\setminus V$ has content zero;
2. for every continuous $h:\psi[D]\to\mathbb R$ the three integrals below exist and

$$\int_Dh(\psi(x))\,\lvert\det D\psi(x)\rvert\,dx=\int_Vh(y)\,dy=\int_{\psi[D]}h(y)\,dy.$$

No injectivity and no invertibility of the derivative is assumed at any point of $\partial D$.

## Facts & Assumptions

**Given:** The data of the Statement: $W$, $\psi$, the compact Jordan set $D\subseteq W$, the injectivity and nonvanishing Jacobian determinant of $\psi$ on $D^\circ$, the set $V=\psi[D^\circ]$, and a continuous $h:\psi[D]\to\mathbb R$.

[F1] The **boundary** of $A$ is $\partial A:=\overline A\setminus\operatorname{int}(A)$ ([[def-metric-interior-closure-boundary]]).

[F2] A set has **content zero** when it can be covered by finitely many closed cubes of arbitrarily small total volume, and content zero passes to subsets ([[def-null-and-content-zero-in-rn]]).

[F3] For a $C^1$ map $g$ of an open subset of $\mathbb R^n$ into $\mathbb R^n$, its **Jacobian determinant** is $\det Dg(x)$ ([[def-jacobian-determinant-of-a-c-one-map]]).

[F4] For bounded Jordan measurable $E$, bounded $f:E\to\mathbb R$ and a nondegenerate rectangle $Q\supseteq E$, the function $f$ is **Riemann integrable over $E$** when its zero extension $\widetilde f_Q$ is integrable over $Q$, and then $\int_Ef=\int_Q\widetilde f_Q$ ([[def-riemann-integral-over-a-jordan-set]]).

[L1] If $f:U\to\mathbb R^n$ is $C^1$ on an open $U$ and $Df(a)$ is invertible, then there are open sets $V',W'$ with $a\in V'\subseteq U$ and $f(a)\in W'$ such that $f|_{V'}:V'\to W'$ is bijective, and its inverse is $C^1$ ([[thm-euclidean-inverse-function-theorem]]).

[L2] A metric-bounded set $E\subseteq\mathbb R^m$ is Jordan measurable if and only if its boundary $\partial E$ is null, equivalently has content zero ([[thm-jordan-boundary-criterion]]).

[L3] If $\psi$ is $C^1$ on an open $W\subseteq\mathbb R^m$ with values in $\mathbb R^m$ and $A\subseteq W$ is compact with content zero, then $\psi[A]$ is compact and has content zero ([[lem-c-one-images-of-content-zero-compact-sets-have-content-zero]]).

[L4] For a bounded, open, Jordan measurable $V'\subseteq\mathbb R^n$ there are compact Jordan sets $K_1\subseteq K_2\subseteq\cdots\subseteq V'$, each a finite union of closed grid rectangles, such that every compact $C\subseteq V'$ lies in some $K_j$ and $\operatorname{cont}(V'\setminus K_j)\to0$ ([[lem-bounded-open-jordan-sets-have-compact-grid-exhaustions]]).

[L5] Let $U\subseteq\mathbb R^n$ be open, let $g:U\to\mathbb R^n$ be injective and $C^1$ with $Dg(x)$ invertible for every $x\in U$, and let $K\subseteq U$ be compact and Jordan measurable. For bounded $f:g(K)\to\mathbb R$, integrability of $f$ on $g(K)$ is equivalent to integrability of $x\mapsto f(g(x))\lvert\det Dg(x)\rvert$ on $K$, and when either holds $\int_{g(K)}f(y)\,dy=\int_Kf(g(x))\lvert\det Dg(x)\rvert\,dx$ ([[thm-change-of-variables-for-compact-jordan-sets]]).

[L6] Under the hypotheses of [L5], if $K\subseteq U$ is compact and Jordan measurable then $g(K)$ is compact and Jordan measurable ([[thm-injective-c-one-images-of-compact-jordan-sets-are-jordan]]).

[L7] For integrable $f,g$ on a nondegenerate rectangle $Q$ and scalars $\alpha,\beta$: $\alpha f+\beta g$ is integrable with integral $\alpha\int_Qf+\beta\int_Qg$; if $f\le g$ then $\int_Qf\le\int_Qg$; and $\lvert f\rvert$ is integrable with $\lvert\int_Qf\rvert\le\int_Q\lvert f\rvert$ ([[thm-multidimensional-integral-properties]]).

[L8] Every continuous real function on a compact Jordan measurable set $E\subseteq\mathbb R^m$ is Riemann integrable over $E$ ([[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]).

[L9] If bounded Jordan measurable $E,F$ have $E\cap F$ of content zero, then $\operatorname{cont}(E\cup F)=\operatorname{cont}(E)+\operatorname{cont}(F)$ ([[cor-jordan-content-finite-additivity]]).

[L10] For continuous $f:X\to Y$ between metric spaces, the image of a compact subset of $X$ is a compact subset of $Y$ ([[thm-continuous-image-of-a-compact-space-is-compact]]).

[L11] A metric-bounded $E\subseteq\mathbb R^m$ is Jordan measurable if and only if its indicator $1_E$ is Riemann integrable on a fixed nondegenerate bounding rectangle $Q$, and then $\int_Q1_E=\operatorname{cont}(E)$ ([[thm-jordan-content-and-indicator-integrability]]).

[L12] Let $E$ be bounded and Jordan measurable and let $f,g:E\to\mathbb R$ be bounded with $\{x\in E:f(x)\ne g(x)\}$ of content zero. Then $f$ is integrable over $E$ if and only if $g$ is, and their integrals then agree ([[lem-riemann-integral-unchanged-by-content-zero-modification]]).

[L13] A closed box in $\mathbb R^m$ is compact, and a subset of $\mathbb R^m$ is compact if and only if it is closed and bounded ([[thm-heine-borel-rn]]).

[L14] For every real square matrix $A$, $\det(A)\ne0$ if and only if $A$ is invertible ([[thm-real-square-matrix-invertible-iff-determinant-nonzero]]).

## Proof

**Proof technique:** direct.

1.1 Suppose first $D^\circ=\emptyset$. Then $V=\emptyset$ and, by [F1], $D=\partial D$, which has content zero by [L2]; so $\operatorname{cont}(D)=0$ by [L11], the parameter integrand is continuous on the compact Jordan $D$ and hence integrable by [L8], and [L7] with [L11] bounds its integral in absolute value by $\sup_D\lvert h(\psi)\det D\psi\rvert\cdot\operatorname{cont}(D)=0$. All three integrals are then $0$ and both assertions hold. Assume $D^\circ\ne\emptyset$ for the rest of the proof. [given, F1, L2, L7, L8, L11]

1.2 The set $\partial D$ is a closed subset of the compact $D$ by [F1], hence compact by [L13], and it has content zero by [L2] since $D$ is Jordan measurable. So [L3] gives that $\psi[\partial D]$ is compact and has content zero. [given, F1, L2, L3, L13]

2.1 By [F1] the interior $D^\circ$ is open and bounded, and $\partial(D^\circ)=\overline{D^\circ}\setminus D^\circ\subseteq D\setminus D^\circ=\partial D$ because $\overline{D^\circ}\subseteq\overline D=D$. So $\partial(D^\circ)$ has content zero by step 1.2 and [F2], and $D^\circ$ is Jordan measurable by [L2]. [step 1.2, F1, F2, L2]

2.2 On $D^\circ$ the map $\psi$ is injective and $\det D\psi\ne0$, so [F3] and [L14] make each $D\psi(c)$ invertible, and then [L1] makes $\psi$ carry an open neighbourhood of each $c\in D^\circ$ onto an open set. Hence $\psi[D^\circ]=V$ is open, and $\psi|_{D^\circ}:D^\circ\to V$ is a bijection whose inverse is $C^1$, in particular continuous, on $V$. [step 1.1, given, F3, L1, L14]

3.1 By [L10] the set $\psi[D]$ is compact, hence closed and bounded by [L13]. Since $D=D^\circ\cup\partial D$ by [F1], $\psi[D]=V\cup\psi[\partial D]$, so $\psi[D]\setminus V\subseteq\psi[\partial D]$ has content zero by step 1.2 and [F2]. As $V$ is open with $V\subseteq\psi[D]$, we get $\partial V=\overline V\setminus V\subseteq\psi[D]\setminus V$ and $\partial(\psi[D])=\psi[D]\setminus\operatorname{int}(\psi[D])\subseteq\psi[D]\setminus V$; both therefore have content zero, and [L2] makes $V$ and $\psi[D]$ Jordan measurable. [step 1.2, step 2.2, F1, F2, L2, L10, L13]

3.2 Apply [L4] to the bounded open Jordan set $D^\circ$ of step 2.1, obtaining compact Jordan sets $K_1\subseteq K_2\subseteq\cdots\subseteq D^\circ$ with every compact subset of $D^\circ$ contained in some $K_j$ and $\operatorname{cont}(D^\circ\setminus K_j)\to0$. By step 2.2 the hypotheses of [L5] hold with $U=D^\circ$ and $g=\psi|_{D^\circ}$, so for each $j$ the set $\psi[K_j]$ is compact and Jordan measurable by [L6] and $$\int_{\psi[K_j]}h=\int_{K_j}h(\psi(x))\,\lvert\det D\psi(x)\rvert\,dx,$$ both integrals existing because $h$ is continuous on the compact Jordan $\psi[K_j]$, hence integrable there by [L8]. [step 2.1, step 2.2, L4, L5, L6, L8]

4.1 The set $\psi[D]$ is compact and Jordan measurable by step 3.1 and $h$ is continuous on it, so [L8] makes $h$ integrable over $\psi[D]$ and, $\psi[D]$ being compact, $\lvert h\rvert\le M$ there for some $M\ge0$. Fix a nondegenerate rectangle $Q\supseteq\psi[D]$. The zero extensions of $h|_V$ and of $h$ from $\psi[D]$ differ only on $\psi[D]\setminus V$, which has content zero by step 3.1, so [L12] applied on $Q$ makes the first integrable too, with $\int_Vh=\int_{\psi[D]}h$ by [F4]. [step 3.1, F4, L8, L12]

4.2 The map $x\mapsto h(\psi(x))\lvert\det D\psi(x)\rvert$ is continuous on the compact Jordan $D$, hence integrable over $D$ and over each compact Jordan $K_j$ by [L8], and bounded there by some $M'\ge0$. Fix a nondegenerate rectangle $Q'\supseteq D$. Because $\partial(D\setminus K_j)\subseteq\partial D\cup\partial K_j$ — a point outside both boundaries lies either in $\operatorname{int}K_j$, whose neighbourhood misses $D\setminus K_j$, or outside $\overline{K_j}$ and inside $\operatorname{int}D$, whose neighbourhood lies in $D\setminus K_j$ — the set $D\setminus K_j$ is Jordan measurable by [L2] and [F1]. The two zero extensions differ only on $D\setminus K_j$ and by at most $M'$, so [L7] and [L11] give $$\Bigl\lvert\int_Dh(\psi)\lvert\det D\psi\rvert-\int_{K_j}h(\psi)\lvert\det D\psi\rvert\Bigr\rvert\le M'\operatorname{cont}(D\setminus K_j).$$ Now $D\setminus K_j=\partial D\cup(D^\circ\setminus K_j)$ is a union of two disjoint Jordan sets, $\partial D$ having content zero by step 1.2, so [L9] gives $\operatorname{cont}(D\setminus K_j)=\operatorname{cont}(D^\circ\setminus K_j)$, which tends to $0$ by step 3.2. Hence those integrals converge to $\int_Dh(\psi)\lvert\det D\psi\rvert$. [step 1.2, step 3.2, F1, L2, L7, L8, L9, L11]

5.1 Apply [L4] to the bounded open Jordan set $V$ of step 3.1, obtaining compact Jordan $C_1\subseteq C_2\subseteq\cdots\subseteq V$ with $\operatorname{cont}(V\setminus C_l)\to0$ and every compact subset of $V$ inside some $C_l$. Fix $l$. By step 2.2 the inverse of $\psi|_{D^\circ}$ is continuous, so $(\psi|_{D^\circ})^{-1}[C_l]$ is a compact subset of $D^\circ$ by [L10], and step 3.2 puts it inside some $K_{j(l)}$; applying $\psi$ gives $C_l\subseteq\psi[K_{j(l)}]$ and hence $V\setminus\psi[K_j]\subseteq V\setminus C_l$ for every $j\ge j(l)$, the sets $K_j$ being increasing. Both sets are Jordan measurable by step 3.1, step 3.2 and the boundary inclusion of step 4.2, so [L7] and [L11] give $\operatorname{cont}(V\setminus\psi[K_j])\le\operatorname{cont}(V\setminus C_l)$; letting $l$ grow, $\operatorname{cont}(V\setminus\psi[K_j])\to0$. [step 2.2, step 3.1, step 3.2, L4, L7, L10, L11]

6.1 With $M$ and $Q$ as in step 4.1, the zero extensions of $h|_V$ and of $h|_{\psi[K_j]}$ differ only on $V\setminus\psi[K_j]$ and by at most $M$, so [L7] and [L11] give $\bigl\lvert\int_Vh-\int_{\psi[K_j]}h\bigr\rvert\le M\operatorname{cont}(V\setminus\psi[K_j])$, which tends to $0$ by step 5.1. Hence $\int_{\psi[K_j]}h\to\int_Vh$. [step 4.1, step 5.1, L7, L11]

7.1 By step 3.2 the two sequences of integrals agree term by term; by step 4.2 the parameter side converges to $\int_Dh(\psi)\lvert\det D\psi\rvert$ and by step 6.1 the image side converges to $\int_Vh$, so those two numbers are equal, and step 4.1 identifies $\int_Vh$ with $\int_{\psi[D]}h$. With step 3.1 this is both assertions of the Statement. [step 4.2, step 6.1] ∎

## Remarks

- **What the published compact theorem cannot do here.** [L5] requires the derivative to be invertible at every point of an open set containing the compact domain. A spherical octant, parametrized by polar angle and azimuth, has vanishing projected Jacobian determinant along the parameter boundary, so no such open set exists and [L5] does not apply to it. Everything above is the work of pushing the degeneracy into $\partial D$, where [L3] makes its image negligible.

- **The conclusion is about the open image, and that is not a defect.** The set $\psi[D]$ may fold its boundary onto itself, and no injectivity is assumed there; what the identity says is that the fold contributes nothing, because $\psi[D]\setminus V$ has content zero.
