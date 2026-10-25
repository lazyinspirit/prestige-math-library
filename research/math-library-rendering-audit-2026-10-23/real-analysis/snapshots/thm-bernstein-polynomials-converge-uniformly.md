---
id: thm-bernstein-polynomials-converge-uniformly
kind: theorem
title: "Bernstein polynomials converge uniformly to every continuous function on $[0,1]$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-bernstein-basis-moment-identities, thm-heine-cantor-metric, cor-archimedean-reciprocal]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Bernstein polynomial (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Bernstein_polynomial"
pipeline_run: null
---

## Statement

If $f:[0,1]\to\mathbb R$ is continuous, then $B_n(f)\to f$ uniformly on $[0,1]$.

## Facts & Assumptions
**Given:** A continuous function $f:[0,1]\to\mathbb R$ and $\varepsilon>0$.

[L1] A continuous function on a compact metric space is uniformly continuous ([[thm-heine-cantor-metric]]).

[L2] The Bernstein basis has the zeroth and centred second moment identities ([[lem-bernstein-basis-moment-identities]]).

[L3] For each positive real $\eta$ there is a natural $N\ge1$ with $1/N<\eta$ ([[cor-archimedean-reciprocal]]).

## Proof

**Proof technique:** direct.

1.1 Choose $\delta>0$ such that $|f(s)-f(x)|<\varepsilon/2$ whenever $|s-x|<\delta$, and choose $M$ with $|f|\le M$. [L1, choose]

1.2 On the far part, $(k/n-x)^2\ge\delta^2$; hence its total basis weight is at most $x(1-x)/(n\delta^2)\le1/(4n\delta^2)$ by [L2]. [L2, algebra]

2.1 Split the Bernstein sum into $|k/n-x|<\delta$ and its complement. The near part is at most $\varepsilon/2$ by the zeroth identity. [step 1.1, L2, algebra]

2.2 Choose $n$ so large that $2M/(4n\delta^2)<\varepsilon/2$. The far part is then below $\varepsilon/2$, uniformly in $x$. [step 1.2, L3, algebra]

3.1 The near and far estimates give $|B_n(f)(x)-f(x)|<\varepsilon$ for every $x$ and all sufficiently large $n$. [step 2.1, step 2.2] ∎
