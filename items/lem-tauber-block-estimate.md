---
id: lem-tauber-block-estimate
kind: lemma
title: "If $\\iota(n+1)a_n\\to0$, short multiplicative blocks of the coefficients have uniformly small sums"
status: published
origin: session
deps: [def-real-limit, lem-rat-embeds-dense, def-canonical-natural, lem-of-naturals-positive, lem-of-inverse-positive, lem-of-abs-value, thm-geometric-series]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources: {scraped: [], references: [{title: "Tauberian theorem, Encyclopedia of Mathematics", url: "https://encyclopediaofmath.org/wiki/Tauberian_theorem"}]}
pipeline_run: null
---

## Statement

Suppose $\iota(n+1)a_n\to0$. For every $\varepsilon>0$ there is $N_0$ such that, whenever $q\ge p\ge N_0$,

$$\sum_{n=p}^{q}|a_n|\le\varepsilon\frac{\iota(q-p+1)}{\iota(p+1)}.$$

Moreover, for $N\ge N_0$ and $x_N:=1-1/\iota(N+1)$,

$$\sum_{n=N_0}^{N}|a_n|(1-x_N^n)\le\varepsilon,\qquad \sum_{n>N}|a_n|x_N^n\le\varepsilon.$$

## Facts & Assumptions

**Given:** The Tauber condition $\iota(n+1)a_n\to0$.

[L1] The canonical naturals $\iota(n+1)$ are positive and strictly increasing, positive reciprocals reverse order, and $|uv|=|u||v|$ ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]], [[lem-of-abs-value]]).

[L2] Real-sequence convergence is tested with positive rational tolerances, and below every positive real lies a positive rational ([[def-real-limit]], [[lem-rat-embeds-dense]]).

[L3] For $0\le x\le1$, multiplying out the finite sum gives $1-x^n=(1-x)\sum_{k=0}^{n-1}x^k\le\iota(n)(1-x)$.

[L4] For $0\le x<1$, the geometric-series formula gives $\sum_{n>N}x^n=x^{N+1}/(1-x)$ ([[thm-geometric-series]]).

## Proof

**Proof technique:** direct.

1.1 Choose a positive rational $\delta<\varepsilon$. By the limit hypothesis and [L2], choose $N_0$ so that $|\iota(n+1)a_n|<\delta$ for $n\ge N_0$. Positivity and multiplicativity in [L1] give $|a_n|<\delta/\iota(n+1)<\varepsilon/\iota(n+1)$ there. Since $1/\iota(n+1)\le1/\iota(p+1)$ on $p\le n\le q$, summing proves the block estimate. [L1, L2, choose, algebra]

2.1 For $N_0\le n\le N$, [L3] gives $|a_n|(1-x_N^n)\le\varepsilon(1-x_N)$. There are at most $N+1$ terms and $\iota(N+1)(1-x_N)=1$, proving the first weighted estimate. [step 1.1, L3, algebra]

3.1 For $n>N$, step 1.1 gives $|a_n|\le\varepsilon/\iota(N+2)$. Summing the geometric tail yields $\sum_{n>N}|a_n|x_N^n\le\varepsilon x_N^{N+1}\iota(N+1)/\iota(N+2)\le\varepsilon$. [step 1.1, L4, algebra] ∎
