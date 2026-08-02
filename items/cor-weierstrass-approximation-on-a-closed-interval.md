---
id: cor-weierstrass-approximation-on-a-closed-interval
kind: corollary
title: "Polynomials are uniformly dense in $C([a,b],\\mathbb R)$ for every closed interval"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-weierstrass-approximation-on-the-unit-interval, def-interval]
aliases: []
landmark: false
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

For $a\le b$, every continuous real function on $[a,b]$ is a uniform limit of polynomials.

## Facts & Assumptions
**Given:** $f\in C([a,b],\mathbb R)$ and $\varepsilon>0$.

[L1] Polynomials are uniformly dense on $[0,1]$ ([[cor-weierstrass-approximation-on-the-unit-interval]]).

[L2] Closed intervals have the endpoint convention of [[def-interval]].

## Proof

**Proof technique:** direct.

1.1 If $a=b$, the constant polynomial $q(x)=f(a)$ agrees with $f$ on the singleton interval. [given, L2, algebra]

1.2 Now suppose $a<b$ and define $g(t)=f(a+(b-a)t)$ on $[0,1]$. [given, L2, construct]

1.3 Choose a polynomial $p$ with $|p(t)-g(t)|<\varepsilon$ on $[0,1]$ by [L1]. [L1, choose]

2.1 Then $q(x)=p((x-a)/(b-a))$ is a polynomial and satisfies $|q(x)-f(x)|<\varepsilon$ on $[a,b]$. Together with step 1.1 this proves both cases. [step 1.1, step 1.2, step 1.3, algebra] ∎
