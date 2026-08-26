---
id: def-principal-binary-quadratic-form
kind: definition
title: "The principal binary quadratic form of a discriminant"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-discriminant-of-binary-quadratic-form, prop-binary-quadratic-form-discriminants-modulo-four]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "William Stein, Elementary Number Theory and Elliptic Curves, Definition 9.2.10"
      url: "https://wstein.org/edu/Fall2002/124/stein/main-05-2003.pdf"
pipeline_run: null
---

## Definition

Let $\Delta$ be an integer with $\Delta\equiv0$ or $1\pmod4$
([[prop-binary-quadratic-form-discriminants-modulo-four]]).

The **principal binary quadratic form of discriminant $\Delta$** is

$$\begin{cases} (1,0,-\Delta/4), & \text{if }\Delta\equiv0\pmod4,\\[4pt] (1,1,(1-\Delta)/4), & \text{if }\Delta\equiv1\pmod4. \end{cases}$$

By the preceding proposition, both coefficient triples are integral in their
respective cases, and by direct calculation each has discriminant $\Delta$.

## Remarks

- This is terminology only: no class-group structure is asserted here.
- Later examples identify the principal form explicitly at small discriminants,
  such as $x^2+y^2$ at $\Delta=-4$ and $x^2+2y^2$ at $\Delta=-8$.
