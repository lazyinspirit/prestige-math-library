---
id: def-residue-isolated-singularity
kind: definition
title: "The residue of an isolated singularity"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-laurent-expansion-annulus, thm-laurent-coefficient-formula-and-uniqueness,
       cor-laurent-coefficients-independent-of-radius]
aliases: []
landmark: true
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Jean-Baptiste Campesato, MAT334 course page and notes index"
      url: "https://www.math.toronto.edu/campesat/mat334.html"
    - title: "Jeremy Orloff, MIT 18.04 Topic 7: Taylor and Laurent Series"
      url: "https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/dff6a0c70eefb1e23bb87f8524361801_MIT18_04S18_topic7.pdf"
pipeline_run: null
---

## Definition

Let $f$ have an isolated singularity at $a$. By
[[thm-laurent-expansion-annulus]], on every sufficiently small punctured disc
about $a$ it has a Laurent expansion

$$f(z)=\sum_{n\in\mathbb Z}c_n(z-a)^n.$$

By [[thm-laurent-coefficient-formula-and-uniqueness]], the coefficient $c_{-1}$
is uniquely determined on that disc, and
[[cor-laurent-coefficients-independent-of-radius]] shows that shrinking the
disc does not change it. It is the **residue** of $f$ at $a$, written

$$\operatorname{Res}(f,a):=c_{-1}.$$

## Remarks

The residue depends only on the singularity of $f$ at $a$, not on which small
punctured disc is used to write the Laurent series.
