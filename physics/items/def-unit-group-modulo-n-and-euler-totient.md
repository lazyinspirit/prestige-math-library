---
id: def-unit-group-modulo-n-and-euler-totient
kind: definition
title: "The unit group $(\\mathbb{Z}/n)^\\times$ and Euler's totient $\\varphi(n)=\\lvert(\\mathbb{Z}/n)^\\times\\rvert$ for $n\\ge1$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-integers-modulo-n-basic-algebra, def-invertible-element, lem-monoid-units-form-a-group, thm-standard-representatives-modulo-n, def-finite-cardinality, thm-subset-of-a-finite-set, def-field]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "K. Conrad, The Chinese Remainder Theorem"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/crt.pdf"
    - title: "Mathematics LibreTexts, Euler's phi Function"
      url: "https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Yet_Another_Introductory_Number_Theory_Textbook_-_Cryptology_Emphasis_%28Poritz%29/02%3A_Congruences/2.05%3A_Euler%27s__%CF%95__Function"
pipeline_run: null
---

## Definition

Let $n\ge1$ be an integer. Multiplication makes $\mathbb Z/n$ a commutative
monoid with identity $[1]_n$ by [[thm-integers-modulo-n-basic-algebra]]. A class
$u\in\mathbb Z/n$ is a **unit** when it is invertible in that monoid
([[def-invertible-element]]). The set of all units is

$$(\mathbb Z/n)^\times:=\{\,u\in\mathbb Z/n:\text{some }v\in\mathbb Z/n\text{ satisfies }uv=[1]_n\,\}.$$

By [[lem-monoid-units-form-a-group]], multiplication restricts to a group
operation on $(\mathbb Z/n)^\times$, called the **unit group modulo $n$**.

The quotient $\mathbb Z/n$ is finite with cardinality $n$ by
[[thm-standard-representatives-modulo-n]], and its unit set is a finite subset by
[[thm-subset-of-a-finite-set]]. Euler's **totient function** is therefore defined
for every positive integer $n$ by

$$\varphi(n):=\big|(\mathbb Z/n)^\times\big|\in\mathbb N$$

([[def-finite-cardinality]]). For $n=1$, the quotient has one element, which is
its multiplicative identity and hence a unit, so $\varphi(1)=1$ follows from the
definition.

## Remarks

- The domain of $\varphi$ here is the positive integers. No value $\varphi(0)$
  is defined.
- The one-element multiplicative monoid is a group, even though its identity is
  also its additive zero. It is not a field because a field requires distinct
  elements $0$ and $1$ ([[def-field]]).
