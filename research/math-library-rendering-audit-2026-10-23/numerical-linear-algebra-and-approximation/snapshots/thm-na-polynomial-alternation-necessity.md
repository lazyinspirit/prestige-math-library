---
id: thm-na-polynomial-alternation-necessity
kind: theorem
title: "A nonzero best polynomial error must alternate at n+2 extrema"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-na-best-polynomial-uniform-error
  - lem-na-extrema-sign-block-polynomial
  - thm-algebra-of-continuous-functions
  - thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
  - thm-na-best-polynomial-approximation-exists
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Lloyd N. Trefethen, Approximation Theory and Approximation Practice, Chapter 10"
      url: "https://people.math.ethz.ch/~hiptmair/Seminars/RAP_22/TRE13.pdf"
      locator: "Printed pp. 74–75, necessity direction in Theorem 10.1."
    - title: "András Kroó and Allan Pinkus, Strong Uniqueness, §4.4"
      url: "https://pages.cs.wisc.edu/~deboor/sat/papers/12/12.pdf"
      locator: "Printed pp. 20–22, necessity direction in Theorem 4.4."
---

## Statement

Let $I=[a,b]$ with $a<b$, let $n\ge0$, and let $f\in C(I,\mathbb R)$. If
$p\in\mathcal P_n(I)$ is a best approximant with
$E:=\|f-p\|_{\infty,I}>0$, then there are $n+2$ ordered points
$x_0<\cdots<x_{n+1}$ in $I$ and $\sigma\in\{-1,1\}$ such that
$$f(x_i)-p(x_i)=\sigma(-1)^iE\qquad(0\le i\le n+1).$$

## Facts & Assumptions

**Given:** $I=[a,b]$ with $a<b$, $n\ge0$, $f\in C(I,\mathbb R)$, and a
best approximant $p\in\mathcal P_n(I)$ with $E=\|f-p\|_{\infty,I}>0$.

[F1] [[def-na-best-polynomial-uniform-error]]: $E$ is the attained uniform error on the compact interval $I$.

[F2] [[lem-na-extrema-sign-block-polynomial]]: if the active extrema of a continuous residual have no $n+2$ alternating points, a polynomial $h$ of degree at most $n$ has the same strict sign as that residual on its full active-extrema set.

[F3] [[thm-algebra-of-continuous-functions]] and [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]: polynomial differences are continuous, and continuous real functions attain extrema on compact subsets of $I$.

## Proof

1.1 Put $e=f-p$. It is continuous by [F3] and has norm $E$ by [F1]. Since $I$ is compact, [F3] makes $|e|$ attain $E$, so its active-extrema set $S=\{x\in I:|e(x)|=E\}$ is nonempty. Suppose there are not $n+2$ ordered alternating points in $S$. Applying [F2] gives a polynomial $h$ of degree at most $n$ with $e(x)h(x)>0$ for every $x\in S$. In particular, $h$ is nonzero on $S$. [given, F1, F2, F3, construct]

2.1 The set $S$ is compact because it is a closed subset of $I$. The continuous function $|h|$ therefore has a positive minimum $c$ on $S$ by [F3]. The set $U=\{x\in I:e(x)h(x)>0,\ |e(x)|>E/2,\ |h(x)|>c/2\}$ is a relatively open neighborhood of $S$, by continuity and step 1.1. [F1, F3, step 1.1, construct]

3.1 If $I\setminus U$ is nonempty, it is compact and contains no point of $S$, so [F3] gives $\eta:=E-\max_{x\in I\setminus U}|e(x)|>0$. If it is empty, set $\eta:=E$; the outside bound is then vacuous. [F1, F3, step 2.1, construct]

4.1 The polynomial $h$ is continuous and has finite norm. Choose $\varepsilon>0$ with $\varepsilon\|h\|_{\infty,I}<\min(E/2,\eta)$. On $U$, $e$ and $h$ have the same sign, $|e|>E/2$, and $\varepsilon|h|<E/2$, so $|e-\varepsilon h|=|e|-\varepsilon|h|<E-\varepsilon c/2$. On $I\setminus U$, when nonempty, $|e-\varepsilon h|\le E-\eta+\varepsilon\|h\|_{\infty,I}<E$. Thus $\|f-(p+\varepsilon h)\|_{\infty,I}<E$, while $p+\varepsilon h\in\mathcal P_n(I)$, contradicting that $p$ is best. Hence the required $n+2$ alternating extrema exist. [given, F1, step 1.1, step 2.1, step 3.1, choose, algebra] ∎
