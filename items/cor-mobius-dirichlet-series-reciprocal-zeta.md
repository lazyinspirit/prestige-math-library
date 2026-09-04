---
id: cor-mobius-dirichlet-series-reciprocal-zeta
kind: corollary
title: "The Dirichlet series of the Möbius function is the reciprocal of the zeta Dirichlet series on Re s greater than 1"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-number-theoretic-mobius-function, thm-dirichlet-series-multiplication-convolution, cor-classical-mobius-inversion, def-dirichlet-convolution-identity, thm-p-series-rational]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Definition 2.8"
      url: "https://kskedlaya.org/ant/part-1-3.html"
    - title: "Jan-Hendrik Evertse, Analytic Number Theory, Chapter 2"
      url: "https://pub.math.leidenuniv.nl/~evertsejh/ant20-2.pdf"
pipeline_run: null
---

## Statement

For $\Re s>1$,

$$\sum_{n \ge 1} \mu(n)n^{-s} = \frac{1}{\zeta(s)},$$

where $\zeta(s)=\sum_{n \ge 1} n^{-s}$.

## Facts & Assumptions

**Given:** A complex number $s$ with $\Re s>1$.

[L1] The Möbius function satisfies $$\sum_{d \mid n} \mu(d) = \begin{cases} 1,& n=1,\\ 0,& n>1, \end{cases}$$ that is, $\mu * \mathbf 1 = \varepsilon$ ([[cor-classical-mobius-inversion]], [[def-dirichlet-convolution-identity]], [[def-number-theoretic-mobius-function]]).

[L2] Products of absolutely convergent Dirichlet series multiply by Dirichlet convolution ([[thm-dirichlet-series-multiplication-convolution]]).

[L3] For every rational $q>1$, the series $\sum_{n \ge 1} n^{-q}$ converges ([[thm-p-series-rational]]).

## Proof

**Proof technique:** direct.

1.1 Write $\sigma := \Re s > 1$ and choose a rational $q$ with $1 < q < \sigma$. Since $\mu(n) \in \{-1,0,1\}$ by [L1], one has $$|\mu(n)n^{-s}| \le n^{-\sigma} \le n^{-q},\qquad |n^{-s}| = n^{-\sigma} \le n^{-q}.$$ By [L3], both Dirichlet series therefore converge absolutely. [L1, L3, given, choose, algebra]

2.1 By [L2], $$\left(\sum_{n \ge 1} \mu(n)n^{-s}\right)\left(\sum_{n \ge 1} n^{-s}\right) = \sum_{n \ge 1} (\mu * \mathbf 1)(n)n^{-s}.$$ [L1, L2, step 1.1, algebra]

3.1 Step 2.1 and the identity in [L1] make the right-hand side equal to $1$, so the first factor is the reciprocal of $\zeta(s) = \sum_{n \ge 1} n^{-s}$. [L1, step 2.1] ∎
