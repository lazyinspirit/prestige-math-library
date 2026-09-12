---
id: "lem-compactly-supported-top-cohomology-propagates-across-overlapping-oriented-coordinate-balls"
kind: "lemma"
title: "Compactly supported top cohomology propagates across overlapping oriented coordinate balls"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["lem-zero-integral-compactly-supported-top-forms-on-euclidean-space-have-compactly-supported-primitives","thm-integration-descends-to-compactly-supported-top-de-rham-cohomology","lem-smooth-bump-between-concentric-euclidean-balls","lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes","lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary","lem-compactness-of-a-subspace-is-ambient","thm-heine-borel-rn","thm-multidimensional-integral-properties"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Robbin–Salamon, Introduction to Differential Topology
      url: https://zaco.au/lib/math/text/differential-geometry/difftop.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $M^n$ be an oriented smooth manifold without boundary. A coordinate ball here is a domain with a chart onto an open Euclidean ball (or onto $\mathbb R^n$), with the induced orientation. If $U,V$ are such domains with $U\cap V\ne\varnothing$, and $\mu_U,\mu_V\in\Omega_c^n(M)$ have supports compactly contained in $U,V$ respectively and satisfy $\int_M\mu_U=\int_M\mu_V=1$, then $[\mu_U]=[\mu_V]$ in $H_c^n(M)$. Such normalized bump forms exist in every nonempty coordinate ball, and in every nonempty open overlap. Every compactly supported top form whose support is contained in one coordinate ball and whose integral is zero has a compactly supported primitive in that ball; extending the primitive by zero gives an ambient primitive. All integrals are the finite-localization integrals, and no choice axiom is used.

## Facts & Assumptions

[F1] [[lem-zero-integral-compactly-supported-top-forms-on-euclidean-space-have-compactly-supported-primitives]] supplies a compact primitive on all of $\mathbb R^n$, with its dimension-zero clause.

[F2] [[thm-integration-descends-to-compactly-supported-top-de-rham-cohomology]] fixes the integral and the quotient by compact primitives.

[F3] [[lem-smooth-bump-between-concentric-euclidean-balls]] gives $0\le\rho\le1$, equal to one on a smaller closed ball and supported inside a larger one.

[F4] [[lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes]] gives signed chart agreement, locality and linearity of the integral without a global partition.

[F5] [[lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary]] supplies pullback functoriality and its commutation with $d$; only boundaryless domains are used.

[F6] [[lem-compactness-of-a-subspace-is-ambient]] permits finite-cover proofs for compact supports and their continuous images.

[F7] [[thm-heine-borel-rn]] makes the closed bounded Euclidean bump support compact.

[F8] [[thm-multidimensional-integral-properties]] gives monotonicity, finite slice additivity and linearity for normalization.

## Proof

**Given:** The oriented boundaryless manifold and coordinate balls in the statement. A support contained in a ball means a compact subset of that open domain, not a closed set meeting its boundary.

1.1 We can replace a ball chart by a chart onto all of $\mathbb R^n$. For $n\ge1$, after translating and positively scaling its image to the unit ball, use $$T(x)=\frac{x}{1-|x|^2},\qquad S(y)=\frac{2y}{1+\sqrt{1+4|y|^2}}.$$ If $q=\sqrt{1+4|y|^2}$, then $|S(y)|^2=(q-1)/(q+1)<1$ and $1-|S(y)|^2=2/(q+1)$, so $T(S(y))=y$; substitution in the other direction gives $S(T(x))=x$. Both formulas are smooth, including at zero, with positive denominators. Moreover $$DT_x(v)=\frac{v}{1-|x|^2}+\frac{2x\langle x,v\rangle}{(1-|x|^2)^2}.$$ On $x^\perp$ its eigenvalue is $(1-|x|^2)^{-1}>0$ and on the line through nonzero $x$ it is $(1+|x|^2)/(1-|x|^2)^2>0$; at zero it is the identity. Thus this change preserves orientation. A chart already onto $\mathbb R^n$ needs no change. In dimension zero the ball and $\mathbb R^0$ are both a point. [given, construct]

2.1 Let $\zeta$ have compact support $K\subset U$ and zero integral. Write $\phi:U\to\mathbb R^n$ for the whole-space chart from step 1.1 and $\widetilde\zeta=(\phi^{-1})^*(\zeta|_U)$. Its support is contained in $\phi(K)$, which is compact: pulling an open cover back along the continuous chart and taking a finite subcover proves this by [F6]. By signed chart agreement and locality [F4], $0=\int_M\zeta=\varepsilon_\phi\int_{\mathbb R^n}\widetilde\zeta$, so the last integral is zero regardless of the chart sign $\varepsilon_\phi=\pm1$. Apply [F1] and obtain $d\widetilde\eta=\widetilde\zeta$ with compact support in $\mathbb R^n$. Its pullback $\eta_U=\phi^*\widetilde\eta$ has compact support in $U$ by the same continuous-image cover argument for $\phi^{-1}$, and $d\eta_U=\zeta|_U$ by [F5]. This whole-space reparametrization is why the Euclidean primitive cannot escape the original chart. [F1, F4, F5, F6, step 1.1]

3.1 Extend $\eta_U$ by zero outside $U$. Its compact support $L\subset U$ is closed in the Hausdorff manifold: for a point outside $L$, the Hausdorff separation neighbourhoods from each point of $L$ have a finite subfamily covering $L$ by [F6], and the intersection of the corresponding neighbourhoods of the outside point misses $L$. Thus $U$ and $M\setminus L$ form an open cover on which the two smooth formulas agree. The extension is smooth, compactly supported, and its derivative is $\zeta$ on both opens, hence everywhere by [F5]. This proves the primitive assertion. [F5, F6, step 2.1]

4.1 In a nonempty open set $W$ choose one point and one chart ball with a smaller concentric closed ball contained in its chart image. For $n\ge1$ use [F3] to put a nonnegative bump $\rho$ inside that chart image, with $\rho=1$ on a positive-radius ball; [F7] makes its support compact. The smooth chart form $\rho\,dx_1\wedge\cdots\wedge dx_n$, pulled back and extended by zero as in step 3.1, has integral $\varepsilon c$ by [F4], where $c>0$. To verify positivity without a global positivity theorem, enclose the support in a rectangle and choose a nondegenerate smaller rectangular cube inside the ball on which $\rho=1$. Split the large rectangle finitely at the small cube's coordinate faces; [F8] gives $c\ge\operatorname{vol}(\text{small cube})>0$, all other summands being nonnegative. The coefficient integrals exist by the chart-integral clause [F4]. Divide the form by $\varepsilon c$. The resulting $\nu$ is supported compactly in $W$ and has integral one. For $n=0$, take one point $p\in W$ and the function of value $\varepsilon(p)$ there and zero elsewhere; its integral is $\varepsilon(p)^2=1$, and its singleton support is compact and open. [F3, F4, F6, F7, F8, step 3.1]

5.1 Apply step 4.1 in $U\cap V$ to obtain $\nu$. The differences $\mu_U-\nu$ and $\mu_V-\nu$ have integral zero by [F4], and their supports are compact subsets of $U$ and $V$ respectively: a finite union of compact sets is compact by taking and joining two finite subcovers in [F6]. Steps 2.1 and 3.1 give ambient compact primitives $\eta_U,\eta_V$ of these differences. Therefore $$\mu_U-\mu_V=d(\eta_U-\eta_V),$$ and the difference primitive is compactly supported in the finite union of their supports. By [F2], the two ambient classes agree. [F2, F4, F6, step 2.1, step 3.1, step 4.1]

6.1 At $n=0$, overlapping coordinate balls are the same singleton, and normalized forms there both have the value $\varepsilon(p)$. A zero-integral form supported in a singleton is zero, so its primitive is the zero negative-degree element as in [F1]. At $n=1$ the reparametrization is a diffeomorphism of an interval onto the line and the primitive from [F1] is a compactly supported function; the zero extension in step 3.1 covers both interval ends. Empty support gives the zero primitive; an empty manifold has no pair of overlapping balls and imposes no normalization obligation. No positivity of the two given forms was needed, only their two integrals. The construction makes finitely many choices of charts, bumps and primitives for the stated pair; it makes no simultaneous selection over all points or all balls. [F1, F2, F4, step 1.1, step 3.1, step 4.1, step 5.1] ∎
