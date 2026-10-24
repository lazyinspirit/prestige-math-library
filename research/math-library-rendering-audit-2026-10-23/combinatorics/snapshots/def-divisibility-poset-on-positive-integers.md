---
id: def-divisibility-poset-on-positive-integers
kind: definition
title: "The divisibility poset of positive integers"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-divides-in-z, lem-divisibility-basic, def-partial-order, thm-int-ordered-ring, lem-divisor-bound]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "R. Stanley, Enumerative Combinatorics, Volume 1, §§3.8.4–3.8.5"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
pipeline_run: null
---

## Definition

Let $\mathbb Z_{>0}:=\{n\in\mathbb Z:n>0\}$. The **divisibility order** on positive integers is

$$a\le_{\mid} b\quad\Longleftrightarrow\quad a\mid b,$$

where divisibility is that of [[def-divides-in-z]]. This is a partial order ([[def-partial-order]]): it is reflexive and transitive by [[lem-divisibility-basic]], and it is antisymmetric because $a\mid b$ with $b\ne0$ gives $a=|a|\le|b|=b$ by [[lem-divisor-bound]], while $b\mid a$ gives $b\le a$, so antisymmetry of the integer order ([[thm-int-ordered-ring]]) gives $a=b$.

For $a\mid b$, the interval is

$$[a,b]_{\mid}=\{d\in\mathbb Z_{>0}:a\mid d\text{ and }d\mid b\}.$$

The least element is $1$. There is no greatest element because every positive integer divides a larger positive multiple of itself.
