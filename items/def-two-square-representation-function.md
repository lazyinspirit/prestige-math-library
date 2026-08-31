---
id: def-two-square-representation-function
kind: definition
title: "The two-square representation function r_2"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-arithmetic-function,
       def-sum-of-two-squares-representation]
justified_by: []
verification:
  audited: 2026-08-31
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Peter Hackman, Elementary Number Theory"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "Karl-Dieter Crisman, Number Theory: In Context and Interactive"
      url: "https://math.gordon.edu/ntic/nticoneside.pdf"
pipeline_run: null
---

## Definition

For each positive integer $n$, define

$$
r_2(n):=\#\{(x,y)\in\mathbb Z^2:x^2+y^2=n\}.
$$

This counts order and signs separately, in the sense of
[[def-sum-of-two-squares-representation]].

## Remarks

- The domain is the positive integers, because $r_2$ is being used here as an
  arithmetic function. In particular, $r_2(0)$ is outside the present
  convention.
- The ordered-sign convention gives $r_2(1)=4$.
