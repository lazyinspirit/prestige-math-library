---
id: def-congruence-modulo-an-integer
kind: definition
title: "Congruence modulo an integer: $a\\equiv b\\pmod n$ when $n\\mid(a-b)$, including the moduli $0$ and $1$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-divides-in-z]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "K. Conrad, Modular Arithmetic"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/modarithshort.pdf"
pipeline_run: null
---

## Definition

Let $a,b,n\in\mathbb Z$. We say that **$a$ is congruent to $b$ modulo $n$**,
and write

$$a\equiv b\pmod n,$$

when $n\mid(a-b)$ in the sense of [[def-divides-in-z]]. Thus there is an integer
$q$ with $a-b=nq$. The modulus is any integer; it is not required to be positive.

At modulus $0$, the condition is $0\mid(a-b)$, which holds exactly when
$a-b=0$. Hence

$$a\equiv b\pmod 0\quad\Longleftrightarrow\quad a=b.$$

At modulus $1$, every two integers are congruent because $1$ divides every
integer. Changing the sign of the modulus changes nothing: $n\mid(a-b)$ exactly
when $-n\mid(a-b)$.

## Remarks

- Congruence is a relation on integers. The quotient sets and operations below
  use nonnegative or positive moduli only where their statements require it.
- The notation $a\bmod n$ is not used for a chosen remainder here. The relation
  $a\equiv b\pmod n$ is defined even for $n=0$, where a remainder operation
  would not be available.
