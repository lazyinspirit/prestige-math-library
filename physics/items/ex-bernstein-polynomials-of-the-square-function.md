---
id: ex-bernstein-polynomials-of-the-square-function
kind: example
title: "The Bernstein polynomials of $f(x)=x^2$ equal $x^2+x(1-x)/n$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-bernstein-polynomial, lem-bernstein-basis-moment-identities]
aliases: []
landmark: false
proof_strategy: calculation
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

For $f(x)=x^2$ and $n\ge1$, $B_n(f)(x)=x^2+x(1-x)/n$. Hence $\lVert B_n(f)-f\rVert_\infty=1/(4n)$. For $n=0$, $B_0(f)=0$.

## Facts & Assumptions
**Given:** $f(x)=x^2$ on $[0,1]$.

[L1] The first two Bernstein binomial moments are those of [[lem-bernstein-basis-moment-identities]].

[L2] The Bernstein polynomial is defined in [[def-bernstein-polynomial]].

## Proof

**Proof technique:** calculation.

1.1 For $n\ge1$, substitute $f(k/n)=(k/n)^2$ in the definition and use [L1] to obtain $B_n(f)=x^2+x(1-x)/n$. [L1, L2, algebra]

2.1 Since $0\le x(1-x)\le1/4$ with equality at $x=1/2$, the stated supremum error is $1/(4n)$. [step 1.1, algebra]

3.1 The separate definition at degree zero gives $B_0(f)=f(0)=0$. [L2, algebra] ∎
