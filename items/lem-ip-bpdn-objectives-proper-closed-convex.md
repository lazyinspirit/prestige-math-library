---
id: lem-ip-bpdn-objectives-proper-closed-convex
kind: lemma
title: "The basis-pursuit denoising objective and residual indicator are proper closed convex"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
axiom_base: "ZF; finite-dimensional real inequalities only."
deps:
  - def-p-norms-on-rn
  - lem-p-norms-are-norms-and-induce-the-published-metrics
  - lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric
  - def-euclidean-inner-product
  - def-proper-closed-convex-function-on-rn
  - def-convex-and-strictly-convex-functionals-on-a-banach-space
  - def-convex-subset-of-euclidean-space
  - def-indicator-function-of-closed-convex-set
  - def-canonical-natural
  - lem-of-naturals-positive
  - lem-finite-sum-laws
  - lem-of-square-monotone
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  scraped: []
  references:
    - title: "Antonin Chambolle and Thomas Pock, A First-Order Primal-Dual Algorithm for Convex Problems with Applications to Imaging, §2"
      url: "https://optimization-online.org/wp-content/uploads/2010/06/2646.pdf"
---

## Statement

Let $m,n\in\mathbb N$ with $m,n\ge1$, let $y\in\mathbb R^m$, and let $\epsilon\ge0$. Define $f:\mathbb R^n\to\mathbb R$ by $f(x)=\|x\|_1$, and define $g:\mathbb R^m\to(-\infty,+\infty]$ by $g(u)=0$ when $\|u-y\|_2\le\epsilon$ and $g(u)=+\infty$ otherwise. Then $f$ and $g$ are proper (finite somewhere), closed (their epigraphs are closed), and convex (they satisfy the extended-real convex-combination inequality) on their respective finite-dimensional Euclidean spaces.

## Statement references

[[def-p-norms-on-rn|Finite-dimensional one- and two-norms]]

[[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric|Euclidean comparison bound for the one-norm]]

[[def-canonical-natural|Canonical natural scalar convention]]

[[lem-of-naturals-positive|Positivity of positive natural scalars]]

[[lem-p-norms-are-norms-and-induce-the-published-metrics|Norm and triangle properties]]

[[def-proper-closed-convex-function-on-rn|Properness, convexity, and closed-epigraph convention]]

[[def-convex-and-strictly-convex-functionals-on-a-banach-space|Convex-function inequality]]

[[def-convex-subset-of-euclidean-space|Convex-set convention]]

[[def-indicator-function-of-closed-convex-set|Extended-real indicator]]

[Chambolle and Pock, *A First-Order Primal-Dual Algorithm for Convex Problems with Applications to Imaging*, §2](https://optimization-online.org/wp-content/uploads/2010/06/2646.pdf)

## Facts & Assumptions

**Given:** Positive integers $m,n$, a center $y\in\mathbb R^m$, a radius $\epsilon\ge0$, the functions $f(x)=\|x\|_1$ and $g=\iota_C$ for $C=\{u:\|u-y\|_2\le\epsilon\}$.

[F1] [[def-p-norms-on-rn]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]], and [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]]: the one- and two-norms are finite-valued norms, satisfy homogeneity and both triangle inequalities, and $\|x\|_1\le\sqrt{n}\|x\|_2$ for $n\ge1$.

[F2] [[def-proper-closed-convex-function-on-rn]]: a function is proper when its finite domain is nonempty, convex under real convex combinations, and closed when its epigraph is closed.

[F3] [[def-convex-and-strictly-convex-functionals-on-a-banach-space]]: for $0\le\theta\le1$, convexity is the inequality $q((1-\theta)a+\theta b)\le(1-\theta)q(a)+\theta q(b)$, with $0\cdot(+\infty)=0$ at endpoints.

[F4] [[def-convex-subset-of-euclidean-space]]: a set is convex when every segment between two of its points remains in it.

[F5] [[def-indicator-function-of-closed-convex-set]]: $\iota_C$ equals $0$ on $C$ and $+\infty$ outside it.

[F6] [[def-euclidean-inner-product]]: the Euclidean norm on a product coordinate space is the square root of the sum of squared coordinate differences.

[F7] [[def-canonical-natural]]: $n$ denotes the canonical real image of $n$.

[F8] [[lem-of-naturals-positive]]: $n>0$ for $n\ge1$.

[F9] [[lem-finite-sum-laws]] and [[lem-of-square-monotone]]: finite sums preserve inequalities, and $a^2\le b^2$ for nonnegative reals implies $a\le b$.

## Proof

1.1 The function $f$ is finite everywhere because it is a finite sum of absolute values, and $f(0)=0$, so its effective domain is nonempty. For $0\le\theta\le1$, the triangle inequality and homogeneity in [F1] give $f((1-\theta)x+\theta z)\le f((1-\theta)x)+f(\theta z)=(1-\theta)f(x)+\theta f(z).$ Thus $f$ is proper and convex by [F2,F3]. [given, F1, F2, F3, algebra]

1.2 For $(x,t)\in\mathbb R^{n+1}$ outside $\operatorname{epi}f$, the gap $d=f(x)-t$ is positive. Put $L=\sqrt{n}+1>0$. If $(x',t')$ has product Euclidean distance $D<d/(2L)$ from $(x,t)$, then coordinate-square domination gives $\|x'-x\|_2\le D$ and $|t'-t|\le D$. By [F1], $f(x')-t'\ge f(x)-t-|f(x')-f(x)|-|t'-t|\ge d-(\sqrt{n}+1)D>d/2>0.$ So the complement of $\operatorname{epi}f$ is open and its epigraph is closed. The scalar $L$ is positive by [F8]; the coordinate-square domination follows by comparing a partial sum with the full nonnegative sum and using [F9]. [given, F1, F6, F7, F8, F9, construct, algebra]

1.3 The residual ball $C$ contains $y$ because $\epsilon\ge0$. If $u,v\in C$ and $0\le\theta\le1$, homogeneity and the triangle inequality in [F1] give $\|(1-\theta)u+\theta v-y\|_2\le(1-\theta)\|u-y\|_2+\theta\|v-y\|_2\le\epsilon,$ so $C$ is convex. If $u\notin C$, the gap $d=\|u-y\|_2-\epsilon>0$ and the reverse triangle inequality show that every $v$ with $\|v-u\|_2<d/2$ also lies outside $C$. Thus $C$ is closed. [given, F1, F4, construct, algebra]

2.1 By [F5], $\operatorname{epi}g=C\times[0,\infty)$. If $(u,t)$ is outside this epigraph, either $u\notin C$ or $t<0$. In the first case step 1.3 supplies an open ball about $u$ disjoint from $C$, hence a product neighborhood disjoint from the epigraph; in the second case an interval about $t$ contained in $(-\infty,0)$ supplies such a product neighborhood. Therefore $\operatorname{epi}g$ is closed. Since $C$ is nonempty by step 1.3, $g$ is proper. If both endpoints lie in $C$, their convex combination lies in $C$ by step 1.3 and $g$ is zero there; if either endpoint has value $+\infty$ with positive coefficient, the convexity inequality has right side $+\infty$. Endpoint coefficients reduce to equality at the endpoint with coefficient one. Thus $g$ is convex, and [F2] proves that both functions have the asserted proper, closed, convex properties. [F2, F3, F5, step 1.3, construct, algebra] ∎