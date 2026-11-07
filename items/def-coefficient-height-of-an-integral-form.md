---
id: def-coefficient-height-of-an-integral-form
kind: definition
title: "Coefficient height, content, and primitive part of an integral form"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-homogeneous-polynomial-and-homogeneous-ideal, def-int-abs, def-divides-in-z]
sources:
  scraped: []
  references:
    - title: "D. R. Heath-Brown, The density of rational points on curves and surfaces, §1"
      url: "https://arxiv.org/pdf/math/0405392v1"
---

## Definition

Let $F=\sum_e a_e x^e$ be a nonzero integral homogeneous form of degree $d$,
with its finite support consisting of the exponent vectors $e$ for which
$a_e\ne0$. Its **content** $c(F)$ is the greatest positive integer dividing
every coefficient, and its **primitive part** is $F^{\mathrm{prim}}=F/c(F)$.
The content exists: $1$ divides every coefficient, and any positive common
divisor divides a fixed nonzero coefficient, which has only finitely many
positive divisors. The form is **primitive** when $c(F)=1$. Its **coefficient
height** is

$$\|F\|:=\max_{a_e\ne0}|a_e|.$$

Thus $\|F\|\ge1$ for every nonzero integral form, and replacing $F$ by a
nonzero rational scalar multiple that is again integral does not change its
support or its zero set.

## Definition references

[[def-homogeneous-polynomial-and-homogeneous-ideal]]

[[def-int-abs]]

[[def-divides-in-z]]
