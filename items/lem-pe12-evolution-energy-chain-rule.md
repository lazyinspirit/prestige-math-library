---
id: lem-pe12-evolution-energy-chain-rule
kind: lemma
title: The Banach evolution-space energy identity and H trace
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  [
    def-pe12-gelfand-triple,
    lem-pe12-bochner-lp-mollification,
    def-countable-choice,
    def-dependent-choice,
    def-hilbert-space,
    thm-holder-inequality-for-integrals,
    thm-minkowski-inequality-for-integrals,
    cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives,
    def-axiom-of-choice,
    lem-ac-supplies-countable-and-dependent-choice-for-banach-integration
  ]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Tomáš Roubíček, Nonlinear Partial Differential Equations with
        Applications, 2nd ed., Birkhäuser, 2005
      url: https://www.nzdr.ru/data/media/biblio/kolxoz/M/MC/MCde/Roubicek%20T.%20Nonlinear%20partial%20differential%20equations%20with%20applications%20%282ed.%2C%202005%29%28ISBN%209783034805124%29%28O%29%28457s%29_MCde_.pdf
      locator: §7.2, norm chain rule and continuous H-valued representative, printed
        pp. 205–207
    - title: Christian Clason, Introduction to Finite Element Methods, lecture notes,
        arXiv:1709.08618v2
      url: https://arxiv.org/pdf/1709.08618v2.pdf
      locator: Chapter 11 §11.1, PDF pp. 96–98, evolution-space trace and energy
        identity
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let
$(V,H,J)$ be the Banach evolution triple of
[[def-pe12-gelfand-triple]], let $1<p<\infty$, and suppose
$u\in L^p(0,T;V)$ with distributional derivative
$u'\in L^{p'}(0,T;V^*)$. Then $u$ has a unique representative in
$C([0,T];H)$ and, for every $0\le s\le t\le T$,
$$\|u(t)\|_H^2-\|u(s)\|_H^2 =2\int_s^t\langle u'(r),u(r)\rangle_{V^*,V}\,dr.$$

## Facts & Assumptions

**Given:** The Axiom of Choice, the Banach evolution triple, $1<p<\infty$,
$u\in L^p(0,T;V)$, and
$u'\in L^{p'}(0,T;V^*)$.

[F1] The distributional derivative is defined by scalar tests against each
$v\in V$ and $\phi\in C_c^\infty(0,T)$, with the embedding $V\to H$ and
canonical map $H\to V^*$ ([[def-pe12-gelfand-triple]]).

[F2] Bochner time mollification converges in $L^r(X)$ on compact interior
subintervals for every real Banach space $X$ and $1\le r<\infty$
([[lem-pe12-bochner-lp-mollification]]). Derivative commutation is proved
in step 1.1 below.

[F3] The inclusion $V\to H$ is continuous, $H$ is complete, and its inner
product satisfies the norm identity used by the ordinary product rule
([[def-pe12-gelfand-triple]], [[def-hilbert-space]]).

[F4] Hölder's inequality makes every $L^{p'}(V^*)$--$L^p(V)$ pairing
integrable ([[thm-holder-inequality-for-integrals]]).

[F5] A scalar one-dimensional $W^{1,1}(0,T)$ class has an absolutely
continuous representative on $[0,T]$
([[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]]).

[A1] The Axiom of Choice supplies Countable and Dependent Choice for the
Bochner approximation and endpoint selections
([[def-axiom-of-choice]],
[[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]],
[[def-countable-choice]], [[def-dependent-choice]]).

## Proof

1.1 Fix a compact interval $K\subset(0,T)$ and a smooth unit-mass kernel $\rho_\epsilon$ supported in $(-\epsilon,\epsilon)$, with $\epsilon<\operatorname{dist}(K,\{0,T\})$. Set $g=u'$ and $u_\epsilon(t)=\int_0^T\rho_\epsilon(t-r)u(r)\,dr$. This is smooth in $V$: difference quotients of the kernel and each of its derivatives converge uniformly on the compact integration region, and multiplying their uniform error by $\|u\|_{L^1(V)}<\infty$ bounds the error in the differentiated Bochner integral. For $v\in V$, use the scalar test $r\mapsto\rho_\epsilon(t-r)$ in [F1]; since its derivative is $-\rho_\epsilon'(t-r)$, this gives $$\langle Ji\dot u_\epsilon(t),v\rangle =\int_0^T\rho_\epsilon'(t-r)(iu(r),iv)_H\,dr =\int_0^T\rho_\epsilon(t-r)\langle g(r),v\rangle\,dr.$$ Thus the pivot derivative $u_\epsilon':=Ji\dot u_\epsilon$ equals $\rho_\epsilon*g$ in $V^*$. The ordinary $H$ product rule now yields $$\frac{d}{dt}\frac12\|iu_\epsilon(t)\|_H^2 =\langle u_\epsilon'(t),u_\epsilon(t)\rangle.$$ Applying [F2] separately with $(X,r)=(V,p)$ and $(V^*,p')$ proves $u_\epsilon\to u$ in $L^p(K;V)$ and $u_\epsilon'\to u'$ in $L^{p'}(K;V^*)$. Below, $V$-valued functions in $H$ expressions are identified with their images under $i$. [A1, F1, F2, F3, F4, given, construct]

2.1 For two small radii $\epsilon,\delta$, put $w=u_\epsilon-u_\delta$ on a fixed nondegenerate compact interval $K\subset(0,T)$. Continuity gives a time $s\in K$ with $\|w(s)\|_H^p\le |K|^{-1}\|w\|_{L^p(K;H)}^p$: otherwise integration contradicts the definition of that norm. Apply the smooth energy identity of step 1.1 to the difference $w$ and integrate between $s$ and any $t\in K$. Hölder [F4] yields $$\sup_{t\in K}\|w(t)\|_H^2 \le |K|^{-2/p}\|w\|_{L^p(K;H)}^2+2\|w'\|_{L^{p'}(K;V^*)}\|w\|_{L^p(K;V)}\longrightarrow0.$$ Indeed [F2] makes both $w$ and $w'$ tend to zero in their indicated norms, and the continuous inclusion [F3] controls the $H$-valued $L^p$ norm. This holds for every $p>1$ without a prior $L^\infty(H)$ bound. Thus the mollifications are uniformly Cauchy in $H$ on $K$. [A1, F2, F3, F4, step 1.1, choose, algebra]

3.1 Completeness of $H$ gives a uniform limit in $C(K;H)$, which agrees almost everywhere with $u$ because $u_\epsilon\to u$ in $L^p(K;H)$. The limits agree on overlapping compact intervals, so they define $u\in C((0,T);H)$. Integrate step 1.1 between arbitrary $s,t\in K$. Uniform convergence passes the endpoint norms to those of $u$, while $$\|\langle u_\epsilon',u_\epsilon\rangle-\langle u',u\rangle\|_{L^1(K)} \le\|u_\epsilon'-u'\|_{L^{p'}(V^*)}\|u_\epsilon\|_{L^p(V)} +\|u'\|_{L^{p'}(V^*)}\|u_\epsilon-u\|_{L^p(V)}\to0.$$ Hence for all $0<s\le t<T$, $$\|u(t)\|_H^2-\|u(s)\|_H^2 =2\int_s^t\langle u'(r),u(r)\rangle\,dr.$$ [F2, F4, step 1.1, step 2.1, algebra]

4.1 By [F4], the energy pairing is in $L^1(0,T)$. The identity in step 3.1 therefore shows that $\|u(t)\|_H^2$ has finite limits as $t\downarrow0$ and $t\uparrow T$. For each fixed $v\in V$, the distributional derivative of $(u(t),iv)_H$ is $\langle u'(t),v\rangle\in L^1(0,T)$, so [F5] gives an absolutely continuous representative on $[0,T]$ agreeing with the interior pairing. [F1, F4, F5, step 3.1]

5.1 For $0<\delta<T$, choose a good time $s_\delta\in(0,\delta)$ with $u(s_\delta)\in V$ and $$\|u(s_\delta)\|_V^p \le\frac2\delta\int_0^\delta\|u(r)\|_V^p\,dr.$$ Such a time exists by averaging over $(0,\delta)$. For every interior $t\in(0,\delta)$, use step 3.1 for the two norm squares and [F5] for the scalar pairing against the fixed vector $u(s_\delta)\in V$. Subtracting twice that pairing identity gives $$\|u(t)-u(s_\delta)\|_H^2 =2\int_{s_\delta}^t\langle u'(r),u(r)-u(s_\delta)\rangle\,dr.$$ Hölder and the triangle inequality bound its absolute value by $$2\|u'\|_{L^{p'}(0,\delta;V^*)} \left(\|u\|_{L^p(0,\delta;V)} +\delta^{1/p}\|u(s_\delta)\|_V\right),$$ which tends to zero as $\delta\downarrow0$. The bound is uniform in $t\in(0,\delta)$, so $u(t)$ is Cauchy in $H$ as $t\downarrow0$ and has a strong limit there. The same argument on $(T-\delta,T)$ gives a strong limit at $T$. Thus $u$ extends to $C([0,T];H)$. [A1, F4, F5, step 3.1, step 4.1, given, choose]

6.1 Let $s\downarrow0$ and $t\uparrow T$ in step 3.1. Strong endpoint continuity and integrability of $\langle u',u\rangle$ pass the identity to all $0\le s\le t\le T$. If two continuous representatives agree almost everywhere, their difference is continuous and vanishes on a dense subset, so it vanishes everywhere. This proves uniqueness and the claimed chain rule. [F4, step 3.1, step 5.1, given] ∎
