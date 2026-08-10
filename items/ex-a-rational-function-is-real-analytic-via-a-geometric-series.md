---
id: ex-a-rational-function-is-real-analytic-via-a-geometric-series
kind: example
title: "A rational function with nonvanishing denominator is locally represented by geometric-series expansions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-local-reciprocal-of-a-real-power-series, thm-real-analytic-functions-closed-under-algebra-quotients-and-composition, thm-geometric-series]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Analytic function, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Analytic_function"
    - title: "Power series, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Power_series"
    - title: "Northwestern Math 320-2 lecture notes"
      url: "https://sites.math.northwestern.edu/scg479/courses/notes/lecture-notes-320-2.pdf"
pipeline_run: null
---

## Statement

The rational function $r(x)=1/(2-x)$ is real analytic on $\mathbb R\setminus\{2\}$. At every $c\ne2$ it has the local expansion

$$\frac1{2-x}=\sum_{n=0}^{\infty}\frac{(x-c)^n}{(2-c)^{n+1}}\qquad(|x-c|<|2-c|).$$

## Facts & Assumptions

**Given:** A centre $c\ne2$.

[L1] The geometric series converges for arguments of absolute value below $1$ ([[thm-geometric-series]]).

[L2] A nonvanishing analytic denominator has a local analytic reciprocal ([[lem-local-reciprocal-of-a-real-power-series]], [[thm-real-analytic-functions-closed-under-algebra-quotients-and-composition]]).

## Verification

**Proof technique:** direct.

1.1 Factor $2-x=(2-c)(1-(x-c)/(2-c))$ and apply [L1]. The resulting series is exactly the displayed one and converges when $|x-c|<|2-c|$. [given, L1, algebra]

2.1 Since every $c\ne2$ admits this positive-radius local representation, $r$ is real analytic on its domain, in agreement with [L2]. [step 1.1, L2] ∎
