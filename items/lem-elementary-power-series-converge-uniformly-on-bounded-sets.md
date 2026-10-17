---
id: lem-elementary-power-series-converge-uniformly-on-bounded-sets
kind: lemma
title: Elementary factorial and geometric series converge uniformly
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: outward-rounded-interval-and-ball-arithmetic
dependency_level: 4
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-complete-ordered-real-field, lem-archimedean-property-from-completeness, lem-real-and-complex-modulus-rules]
sources:
  references:
    - title: "Michael C. Colding, MIT 18.100B Real Analysis, Lecture 22: Differentiating and Integrating Power Series"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec22.pdf"
    - title: "Jiří Lebl, Basic Analysis: Introduction to Real Analysis, Volume I, §2.6.5, Example 2.6.7"
      url: "https://www.jirka.org/ra/realanal.pdf"
---

## Statement

For every real $R\ge0$, the factorial series
$\sum_{n=0}^{\infty}R^n/n!$ converges. If $N\ge0$ and
$q=R/(N+2)<1$, its tail after index $N$ satisfies
$$\sum_{n=N+1}^{\infty}\frac{R^n}{n!} \le \frac{R^{N+1}}{(N+1)!(1-q)}.$$
Consequently the series defining $\exp x$, $\sin x$, $\cos x$ and each of
their formal derivative series converge absolutely and uniformly on every
bounded interval $|x|\le R$. For $0\le r<1$, the geometric series and the
odd power series $\sum_{k\ge0}x^{2k+1}/(2k+1)$, with their formal derivative
series, converge absolutely and uniformly on $|x|\le r$.

## Facts & Assumptions

**Given:** A Dedekind-complete ordered field, a real $R\ge0$, and the
Archimedean property derived from completeness.

[F1] [[def-complete-ordered-real-field]]: every nonempty bounded-above set
has a least upper bound.

[L1] [[lem-archimedean-property-from-completeness]]: the natural numbers are
unbounded above.

[L2] [[lem-real-and-complex-modulus-rules]]: $|xy|=|x||y|$ and the real
absolute value is nonnegative.

## Proof

1.1 Let $0\le q<1$. For every integer $m\ge0$, $(1-q)\sum_{k=0}^m q^k=1-q^{m+1}$. If $q=0$, its powers after the zeroth are zero. If $0<q<1$, then $1/q=1+d$ for $d>0$, and induction gives $(1+d)^m\ge1+md$. By [L1], $1+md$ is unbounded, so $0\le q^m\le1/(1+md)\to0$. Thus the geometric partial sums converge to $1/(1-q)$, with tail $q^{m+1}/(1-q)$. [given, L1, algebra, induction]

2.1 For $R=0$ the factorial series is $1$. For $R>0$, choose $N$ with $q=R/(N+2)<1$ by [L1]. If $u_n=R^n/n!$, then for $n\ge N+1$, $u_{n+1}/u_n=R/(n+1)\le q$. Every finite tail after $N$ is therefore at most $u_{N+1}\sum_{j\ge0}q^j=u_{N+1}/(1-q)$ by step 1.1. The positive partial sums are increasing and bounded, so [F1] gives their supremum $S$. For every $\varepsilon>0$, some partial sum exceeds $S-\varepsilon$, since otherwise $S-\varepsilon$ would be an upper bound; monotonicity then puts all later partial sums between $S-\varepsilon$ and $S$. The finite-tail geometric bound passes to this limit and proves the stated estimate. [given, F1, L1, step 1.1, algebra]

3.1 For $|x|\le R$, [L2] gives $|x^n/n!|\le R^n/n!$. Thus the exponential series is uniformly Cauchy by the tail bound in step 2.1. The sine and cosine series are subseries of this same nonnegative majorant, so their absolute tails are uniform as well. For the formal derivative series, the exponential terms are bounded by $R^{n-1}/(n-1)!$; sine derivatives are bounded by $R^{2k}/(2k)!$, and nonconstant cosine derivatives by $R^{2k-1}/(2k-1)!$. Each is a subseries of a factorial series from step 2.1. The same tail comparison proves absolute and uniform convergence of all stated series. [L2, step 2.1, algebra]

4.1 For $0\le r<1$, the geometric series is uniformly absolutely convergent on $|x|\le r$ by step 1.1. Its formal derivative terms are bounded by $v_n=n r^{n-1}$ for $n\ge1$. If $r=0$, only the first derivative term is nonzero. If $0<r<1$, choose $q$ with $r<q<1$ and an integer $n_0$ large enough that $r(1+1/n)\le q$ for $n\ge n_0$, using [L1]. Then $v_{n+1}/v_n=r(1+1/n)\le q$, so the derivative majorant has tails bounded by a constant times geometric tails from step 1.1. This proves absolute and uniform convergence of the geometric derivative series. The absolute terms of $\sum_{k\ge0}x^{2k+1}/(2k+1)$ are bounded by $r^{2k+1}$ and the derivative terms by $r^{2k}$. Their tails converge uniformly by step 1.1 applied to $q=r^2$; multiplication by the fixed factor $r$ or $2$ does not affect convergence. This proves the assertions for the odd power series and its formal derivative series. [L1, L2, step 1.1, algebra, choose] ∎

