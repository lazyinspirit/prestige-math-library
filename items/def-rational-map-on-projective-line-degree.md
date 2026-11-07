---
id: def-rational-map-on-projective-line-degree
kind: definition
title: Rational self-map of the projective line and its degree
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-polynomial-ring-over-a-commutative-ring
  - def-field-of-fractions
  - cor-polynomial-ring-over-a-field-is-a-pid
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Matthew Baker, A Finiteness Theorem for Canonical Heights Attached to Rational Maps over Function Fields, §1.1"
      url: "https://arxiv.org/pdf/math/0601046v2"
verification:
  precheck: n/a
---

## Definition

Let $K$ be a field. A **rational self-map of $\mathbb P^1_K$** is a map
specified by a reduced fraction $\phi(z)=p(z)/q(z)$ with
$p,q\in K[z]$, $q\ne0$, and $\gcd(p,q)=1$. Its **degree** is
$d=\max(\deg p,\deg q)$. Put
$$F(X,Y)=Y^d p(X/Y),\qquad G(X,Y)=Y^d q(X/Y).$$
Then $F,G$ are homogeneous forms of degree $d$ representing the map by
$[X:Y]\mapsto[F(X,Y):G(X,Y)]$ wherever the latter expression is defined.

## Definition references

[[def-polynomial-ring-over-a-commutative-ring]]

[[def-field-of-fractions]]

[[cor-polynomial-ring-over-a-field-is-a-pid]]

