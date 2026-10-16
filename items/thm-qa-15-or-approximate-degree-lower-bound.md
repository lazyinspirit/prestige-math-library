---
id: thm-qa-15-or-approximate-degree-lower-bound
kind: theorem
title: "OR has a square-root approximate-degree lower bound and corresponding query lower bounds"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 20
deps:
  - def-qa-15-acceptance-polynomial
  - def-qa-15-bit-oracle-query-complexity
  - lem-qa-15-symmetrization
  - lem-qa-15-discrete-markov-ehlich-zeller
  - lem-qa-15-grid-return-derivative
  - cor-mean-value-theorem
  - thm-qa-15-acceptance-degree-bound
  - thm-reals-ordered-field
justified_by: []
proof_strategy: direct
axiom_use: "No choice; all maxima, derivatives and layer averages are over finite-dimensional polynomials on compact intervals."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (2025), §21.6"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415), §11.2"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "N. L. Carothers, A Short Course on Approximation Theory (1998), Chapter 5"
      url: "https://eigen-space.org/approx2526/pdf/carothers+a-short-course-in-approximation-theory-new.pdf"
---

## Statement

For $N\ge1$, define $\mathrm{OR}_N(x)=0$ at $x=0^N$ and $1$ at every other Boolean vector. For $0\le\epsilon<1/2$ and $d=\widetilde{\deg}_{\epsilon}(\mathrm{OR}_N;\{0,1\}^N)$,
$$d^2\ge\frac{1-2\epsilon}{2}N.$$
Consequently every local bit-query algorithm computing OR with error at most $\epsilon$ has at least $\lceil d/2\rceil$ queries, and
$$Q^{\mathrm{bit}}_{\epsilon}(\mathrm{OR}_N;\{0,1\}^N)\ge\left\lceil\frac12\sqrt{\frac{1-2\epsilon}{2}N}\right\rceil.$$

## Facts & Assumptions

**Given:** An integer $N\ge1$, an error $0\le\epsilon<1/2$, and the full-cube OR function.

[F1] [[def-qa-15-acceptance-polynomial]]: approximate degree is attained by a polynomial that approximates on the promise domain.

[F2] [[lem-qa-15-symmetrization]]: symmetrization preserves approximation and yields a polynomial in Hamming weight with no larger degree.

[F3] [[lem-qa-15-discrete-markov-ehlich-zeller]]: if a degree-at-most-$d$ polynomial has values in $[0,1]$ on $0,1,\ldots,N$, then $D:=\max_{[0,N]}|q'|\le(d^2/N)h$, where $h$ is its continuous range height; with [[lem-qa-15-grid-return-derivative]], $h\le1+D$.

[F4] [[cor-mean-value-theorem]]: for a polynomial on $[0,1]$, some derivative value equals the difference of endpoint values.

[F5] [[thm-qa-15-acceptance-degree-bound]]: for the local oracle-only model, $Q^{\mathrm{bit}}_{\epsilon}(f;D)\ge\lceil\widetilde{\deg}_{\epsilon}(f;D)/2\rceil$.

[F6] [[thm-reals-ordered-field]]: $\mathbb R$ has field arithmetic compatible with a total order, so positive denominators can be multiplied or divided in inequalities.

## Proof


1.1 Choose an $\epsilon$-approximating polynomial of degree at most $d$ from [F1]. Apply [F2] to obtain a univariate polynomial $q(t)$ of degree at most $d$ whose values at integer $k$ approximate $\mathrm{OR}_N$ on the weight-$k$ layer. Define $r(t):=(q(t)+\epsilon)/(1+2\epsilon)$ and $c:=(1-2\epsilon)/(1+2\epsilon)$. At $k=0$, $q(0)\in[-\epsilon,\epsilon]$, so $r(0)\in[0,2\epsilon/(1+2\epsilon)]$; at each $1\le k\le N$, $q(k)\in[1-\epsilon,1+\epsilon]$, so $r(k)\in[1/(1+2\epsilon),1]$. Thus all grid values lie in $[0,1]$ and $r(1)-r(0)\ge c>0$. [given, F1, F2, construct, algebra]

2.1 Let $h=\max_{[0,N]}r-\min_{[0,N]}r$ and $D=\max_{[0,N]}|r'|$. By [F4] on $[0,1]$, $D\ge r(1)-r(0)\ge c$. By [F3], $D\le a h$ with $a:=d^2/N$, and $h\le1+D$. If $a\ge1$, then $a\ge c/(1+c)$ since $0<c\le1$. If $a<1$, then $D\le a(1+D)$, so $(1-a)D\le a$ and $D\le a/(1-a)$. Combining $c\le D\le a/(1-a)$ gives $a\ge c/(1+c)$. In both cases $a\ge c/(1+c)=(1-2\epsilon)/2$, proving $d^2\ge(1-2\epsilon)N/2$ by ordered-field algebra [F6]. [step 1.1, F3, F4, F6, algebra]

3.1 The local query lower bound follows from [F5]. Since $d\ge\sqrt{(1-2\epsilon)N/2}$ by step 2.1, monotonicity of the ceiling gives the displayed explicit query estimate. [step 2.1, F5, algebra] ∎
