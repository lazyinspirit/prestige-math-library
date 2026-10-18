---
id: thm-na-best-polynomial-approximation-exists
kind: theorem
title: "Best uniform polynomial approximants exist"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-na-best-polynomial-uniform-error
  - lem-na-polynomial-coefficient-bound-from-fixed-nodes
  - thm-algebra-of-continuous-functions
  - thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
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
      locator: "Printed pp. 73–74, existence of a best polynomial approximant."
    - title: "András Kroó and Allan Pinkus, Strong Uniqueness, §4"
      url: "https://pages.cs.wisc.edu/~deboor/sat/papers/12/12.pdf"
      locator: "Printed pp. 18–22, finite-dimensional uniform approximation."
---

## Statement

Let $I=[a,b]$ with $a<b$, let $n\ge0$, and let $f\in C(I,\mathbb R)$. There
is a polynomial $p_*\in\mathcal P_n(I)$ such that
$\|f-p_*\|_{\infty,I}=E_n(f;I)$.

## Facts & Assumptions

**Given:** $I=[a,b]$ with $a<b$, an integer $n\ge0$, and $f\in C(I,\mathbb R)$.

[F1] [[def-na-best-polynomial-uniform-error]]: $\mathcal P_n(I)$ consists of restrictions of real polynomials of degree at most $n$, and $E_n(f;I)=\inf_{p\in\mathcal P_n(I)}\|f-p\|_{\infty,I}$.

[F2] [[thm-algebra-of-continuous-functions]]: every polynomial function and every finite sum or scalar multiple of continuous functions is continuous.

[F3] [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]: closed bounded subsets of $\mathbb R^k$ are compact, and continuous real-valued functions on nonempty compact subsets attain minima and maxima.

[F4] [[lem-na-polynomial-coefficient-bound-from-fixed-nodes]]: on any fixed $n+1$ distinct nodes, each polynomial coefficient is a fixed linear combination of the sampled values.

## Proof

1.1 Write $p_c(x)=\sum_{j=0}^n c_jx^j$ for $c=(c_0,\ldots,c_n)\in\mathbb R^{n+1}$ and set $F(c)=\|f-p_c\|_{\infty,I}$. For $0\le j\le n$, compactness of $I$ and [F2] give $M_j:=\max_{x\in I}|x|^j<\infty$. For every $x\in I$, the triangle inequality gives $|f(x)-p_c(x)|\le |f(x)-p_d(x)|+|p_d(x)-p_c(x)|$; taking suprema and then exchanging $c,d$ yields $|F(c)-F(d)|\le\|p_c-p_d\|_{\infty,I}\le\sum_{j=0}^n|c_j-d_j|M_j$. Thus $F$ is continuous. The sublevel set $K:=\{c:F(c)\le\|f\|_{\infty,I}\}$ is closed and contains $0$. [F1, F2, F3, given, algebra]

2.1 If $c\in K$, then $\|p_c\|_{\infty,I}\le\|f\|_{\infty,I}+F(c)\le2\|f\|_{\infty,I}$. For $n=0$, take $\tau_0=a$; for $n\ge1$, take distinct nodes $\tau_j=a+j(b-a)/n$, $0\le j\le n$. Each $|p_c(\tau_j)|\le2\|f\|_{\infty,I}$, so [F4] bounds every coefficient $c_k$ uniformly on $K$. Hence $K$ is bounded. [F1, F4, step 1.1, algebra]

3.1 By [F3], the nonempty closed bounded set $K$ is compact, so the continuous function $F$ attains a minimum $\alpha$ on $K$. Since $0\in K$, $\alpha\le\|f\|_{\infty,I}$; every coefficient vector outside $K$ has $F(c)>\|f\|_{\infty,I}\ge\alpha$. Therefore $\alpha$ is the minimum over all of $\mathbb R^{n+1}$, which by [F1] is $E_n(f;I)$. The attaining polynomial is the required $p_*$. [F1, F3, step 1.1, step 2.1, construct] ∎
