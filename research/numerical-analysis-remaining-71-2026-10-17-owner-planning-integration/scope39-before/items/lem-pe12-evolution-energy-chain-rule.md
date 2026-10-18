---
id: lem-pe12-evolution-energy-chain-rule
kind: lemma
title: The Banach evolution-space energy identity and H trace
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-pe12-gelfand-triple, lem-pe12-bochner-lp-mollification, def-countable-choice, def-dependent-choice, def-hilbert-space, thm-holder-inequality-for-integrals, thm-minkowski-inequality-for-integrals, cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives, def-axiom-of-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Tomáš Roubíček, Nonlinear Partial Differential Equations with Applications, 2nd ed., Birkhäuser, 2005
      url: https://www.nzdr.ru/data/media/biblio/kolxoz/M/MC/MCde/Roubicek%20T.%20Nonlinear%20partial%20differential%20equations%20with%20applications%20%282ed.%2C%202005%29%28ISBN%209783034805124%29%28O%29%28457s%29_MCde_.pdf
      locator: §7.2, norm chain rule and continuous H-valued representative, printed pp. 205–207
    - title: Christian Clason, Introduction to Finite Element Methods, lecture notes, arXiv:1709.08618v2
      url: https://arxiv.org/pdf/1709.08618v2.pdf
      locator: Chapter 11 §11.1, PDF pp. 96–98, evolution-space trace and energy identity
---

## Statement

Assume the Axiom of Choice. Let
$(V,H,J)$ be the Banach evolution triple of
[[def-pe12-gelfand-triple]], let $1<p<\infty$, and suppose
$u\in L^p(0,T;V)\cap L^\infty(0,T;H)$ with distributional derivative
$u'\in L^{p'}(0,T;V^*)$. Then $u$ has a unique representative in
$C([0,T];H)$ and, for every $0\le s\le t\le T$,
$$\|u(t)\|_H^2-\|u(s)\|_H^2 =2\int_s^t\langle u'(r),u(r)\rangle_{V^*,V}\,dr.$$

## Facts & Assumptions

**Given:** The Axiom of Choice, the Banach evolution triple, $1<p<\infty$,
$u\in L^p(0,T;V)\cap L^\infty(0,T;H)$, and
$u'\in L^{p'}(0,T;V^*)$.

[F1] The distributional derivative is defined by scalar tests against each
$v\in V$ and $\phi\in C_c^\infty(0,T)$, with the embedding $V\to H$ and
canonical map $H\to V^*$ ([[def-pe12-gelfand-triple]]).

[F2] Bochner time mollification converges in $L^p(V)$ and commutes with the
distributional derivative on interior subintervals
([[lem-pe12-bochner-lp-mollification]]).

[F3] The inclusion $V\to H$ is continuous, $H$ is complete, and its inner
product satisfies the norm identity used by the ordinary product rule
([[def-pe12-gelfand-triple]], [[def-hilbert-space]]).

[F4] Hölder's inequality makes every $L^{p'}(V^*)$--$L^p(V)$ pairing
integrable ([[thm-holder-inequality-for-integrals]]).

[F5] A scalar one-dimensional $W^{1,1}(0,T)$ class has an absolutely
continuous representative on $[0,T]$
([[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]]).

[F6] The norm of a Bochner integral is bounded by the integral of the norm;
in particular a nonnegative unit-mass mollifier preserves an $L^\infty(H)$
bound ([[thm-minkowski-inequality-for-integrals]]).

[A1] The Axiom of Choice supplies Countable and Dependent Choice for the
Bochner approximation and endpoint selections
([[def-axiom-of-choice]],
[[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]],
[[def-countable-choice]], [[def-dependent-choice]]).

## Proof
1.1 On a compact interval $K\subset(0,T)$, time mollifications $u_\epsilon$ are smooth $V$-valued functions and satisfy $$\frac{d}{dt}\frac12\|u_\epsilon(t)\|_H^2 =\langle u_\epsilon'(t),u_\epsilon(t)\rangle_{V^*,V}.$$ This is the ordinary product rule in $H$ using [F3]. For fixed compact $K$, the mollification result [F2] gives $u_\epsilon\to u$ in $L^p(K;V)$ and $u_\epsilon'\to u'$ in $L^{p'}(K;V^*)$ as $\epsilon\downarrow0$. [A1, F2, F3, given]

2.1 For two small radii $\epsilon,\delta$, put $w=u_\epsilon-u_\delta$ on $K$. If $p\ge2$, finite-interval Hölder and [F3] give $\|w\|_{L^2(K;H)}\to0$ as $\epsilon,\delta\downarrow0$. If $p<2$, the norm estimate [F6] gives $\|w\|_{L^\infty(K;H)}\le2\|u\|_{L^\infty(H)}$, and $$\|w\|_{L^2(K;H)}^2 \le\|w\|_{L^\infty(K;H)}^{2-p}\|w\|_{L^p(K;H)}^p$$ give the same convergence. Choose $s\in K$ with $\|w(s)\|_H^2\le |K|^{-1}\|w\|_{L^2(K;H)}^2$. Integrating the identity in step 1.1 from $s$ to any $t\in K$ and applying [F4] yields $$\sup_{t\in K}\|w(t)\|_H^2 \le |K|^{-1}\|w\|_{L^2(K;H)}^2 +2\|w'\|_{L^{p'}(K;V^*)}\|w\|_{L^p(K;V)}\longrightarrow0.$$ Thus the mollifications are Cauchy in the uniform $H$ norm on $K$. [A1, F2, F3, F4, F6, step 1.1, choose]

3.1 Completeness of $H$ gives a uniform limit in $C(K;H)$, which agrees almost everywhere with $u$ because $u_\epsilon\to u$ in $L^p(K;H)$. The limits agree on overlapping compact intervals, so they define $u\in C((0,T);H)$. Integrate step 1.1 between arbitrary $s,t\in K$. Uniform convergence passes the endpoint norms to those of $u$, while $$\|\langle u_\epsilon',u_\epsilon\rangle-\langle u',u\rangle\|_{L^1(K)} \le\|u_\epsilon'-u'\|_{L^{p'}(V^*)}\|u_\epsilon\|_{L^p(V)} +\|u'\|_{L^{p'}(V^*)}\|u_\epsilon-u\|_{L^p(V)}\to0.$$ Hence for all $0<s\le t<T$, $$\|u(t)\|_H^2-\|u(s)\|_H^2 =2\int_s^t\langle u'(r),u(r)\rangle\,dr.$$ [F2, F4, step 1.1, step 2.1, algebra]

4.1 By [F4], the energy pairing is in $L^1(0,T)$. The identity in step 3.1 therefore shows that $\|u(t)\|_H^2$ has finite limits as $t\downarrow0$ and $t\uparrow T$. For each fixed $v\in V$, the distributional derivative of $(u(t),iv)_H$ is $\langle u'(t),v\rangle\in L^1(0,T)$, so [F5] gives an absolutely continuous representative on $[0,T]$ agreeing with the interior pairing. [F1, F4, F5, step 3.1]

5.1 For $0<\delta<T$, choose a good time $s_\delta\in(0,\delta)$ with $u(s_\delta)\in V$ and $$\|u(s_\delta)\|_V^p \le\frac2\delta\int_0^\delta\|u(r)\|_V^p\,dr.$$ Such a time exists by averaging over $(0,\delta)$. For every interior $t\in(0,\delta)$, use step 3.1 for the two norm squares and [F5] for the scalar pairing against the fixed vector $u(s_\delta)\in V$. Subtracting twice that pairing identity gives $$\|u(t)-u(s_\delta)\|_H^2 =2\int_{s_\delta}^t\langle u'(r),u(r)-u(s_\delta)\rangle\,dr.$$ Hölder and the triangle inequality bound its absolute value by $$2\|u'\|_{L^{p'}(0,\delta;V^*)} \left(\|u\|_{L^p(0,\delta;V)} +\delta^{1/p}\|u(s_\delta)\|_V\right),$$ which tends to zero as $\delta\downarrow0$. The bound is uniform in $t\in(0,\delta)$, so $u(t)$ is Cauchy in $H$ as $t\downarrow0$ and has a strong limit there. The same argument on $(T-\delta,T)$ gives a strong limit at $T$. Thus $u$ extends to $C([0,T];H)$. [A1, F4, F5, step 3.1, step 4.1, given, choose]

6.1 Let $s\downarrow0$ and $t\uparrow T$ in step 3.1. Strong endpoint continuity and integrability of $\langle u',u\rangle$ pass the identity to all $0\le s\le t\le T$. If two continuous representatives agree almost everywhere, their difference is continuous and vanishes on a dense subset, so it vanishes everywhere. This proves uniqueness and the claimed chain rule. [F4, step 3.1, step 5.1, given] ∎
