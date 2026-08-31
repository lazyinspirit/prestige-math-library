---
id: ex-a-smooth-map-with-a-nonclosed-critical-value-set
kind: example
title: "A smooth map with a nonclosed critical-value set"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-critical-locus-and-critical-value-set,
       fs-the-set-of-critical-values-is-always-closed]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Example

Fix a smooth bump $\beta:\mathbb R\to\mathbb R$ supported in $[-1,1]$ with
$\beta(0)=1$, $\beta'(0)=0$, and $0<\beta(t)<1$ for $0<|t|<1$. Then

$$
f(x):=\sum_{k=1}^\infty \left(1-\frac1k\right)\beta\bigl(2^k(x-k)\bigr)
$$

is smooth, has critical values $1-\frac1k$ for all $k$, and has regular value
$1$. Hence its critical value set is not closed.

## Facts & Assumptions

**Given:** The smooth bump $\beta$ and the function $f$ above.

[F1] The critical value set is the image of the critical locus ([[def-critical-locus-and-critical-value-set]]).

[L1] The critical value set need not be closed ([[fs-the-set-of-critical-values-is-always-closed]]).

## Verification
**Proof technique:** direct.

1.1 The supports of the summands are pairwise disjoint, so near each $x$ only finitely many summands are nonzero. Therefore $f$ is smooth. At each center $x=k$, the derivative of the $k$th summand vanishes and every other summand is zero, so $k$ is a critical point with critical value $f(k)=1-\frac1k$. [given, algebra]

2.1 The sequence $1-\frac1k$ tends to $1$. But $f(x)\neq 1$ for every $x$: on each bump support the value is at most $1-\frac1k<1$, and away from the supports the value is $0$. Thus $1$ has empty fibre and is therefore regular. [step 1.1, algebra]

3.1 By [F1], the critical value set contains every $1-\frac1k$ but not the limit $1$, so it is not closed. This is exactly the phenomenon noted in [L1]. [F1, L1, step 2.1] ∎