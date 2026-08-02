---
id: cor-weierstrass-approximation-on-the-unit-interval
kind: corollary
title: "Polynomials are uniformly dense in $C([0,1],\\mathbb R)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-bernstein-polynomials-converge-uniformly]
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

For every $f\in C([0,1],\mathbb R)$ and $\varepsilon>0$, there is a polynomial $p$ with $\sup_{x\in[0,1]}|p(x)-f(x)|<\varepsilon$.

## Facts & Assumptions

**Given:** $f\in C([0,1],\mathbb R)$ and $\varepsilon>0$.

[L1] The Bernstein polynomials of $f$ converge uniformly to $f$ ([[thm-bernstein-polynomials-converge-uniformly]]).

## Proof

**Proof technique:** direct.

1.1 Choose $n$ with $\sup_x|B_n(f)(x)-f(x)|<\varepsilon$. [L1, choose]

2.1 The finite defining sum for $B_n(f)$ is a polynomial in $x$, so $p:=B_n(f)$ has the required property. [step 1.1, algebra] ∎
