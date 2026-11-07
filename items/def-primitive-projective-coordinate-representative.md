---
id: def-primitive-projective-coordinate-representative
kind: definition
title: "Primitive normalized projective coordinate representatives over the rationals"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-projective-space-points, def-common-divisor-and-gcd, def-int-abs, cor-the-algebraic-numbers-in-c-form-an-algebraic-closure-of-q]
justified_by: [lem-primitive-projective-coordinate-representative-well-defined]
sources:
  scraped: []
  references:
    - title: "D. R. Heath-Brown, The density of rational points on curves and surfaces, §1"
      url: "https://arxiv.org/pdf/math/0405392v1"
---

## Definition

For an integer $n\ge1$, define $\mathbb P^{n-1}(\mathbb Q)$ to be the set of
equivalence classes of nonzero vectors in $\mathbb Q^n$ under multiplication by
$\mathbb Q^\times$, viewed as the rational-coordinate points in the projective
space over an algebraic closure of $\mathbb Q$. For $u=(u_1,\ldots,u_n)\in
\mathbb Z^n\setminus\{0\}$, put $g_1=|u_1|$ and recursively
$g_j=\gcd(g_{j-1},u_j)$ for $2\le j\le n$, where $\gcd(a,b)$ is the
nonnegative greatest common divisor of the pair, with $\gcd(0,0)=0$. Call $u$
**primitive** when $g_n=1$, and call it **normalized** when its first nonzero
coordinate is positive. A **primitive normalized coordinate representative** of
a point $[x]\in\mathbb P^{n-1}(\mathbb Q)$ is an integer vector in the class
$[x]$ that is both primitive and normalized.

## Definition references

[[def-projective-space-points]]

[[def-common-divisor-and-gcd]]

[[def-int-abs]]

[[cor-the-algebraic-numbers-in-c-form-an-algebraic-closure-of-q]]: The algebraic numbers in $\mathbb C$ supply a concrete algebraic closure of $\mathbb Q$ for this viewpoint, without invoking general algebraic-closure existence or a choice axiom.
