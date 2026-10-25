---
id: ex-involutions-of-four-and-their-cycle-decomposition
kind: example
title: "The involutions of $[4]$ and their cycle decomposition"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-supplied
generation:
  role: example
deps: [cor-standard-specializations-of-the-labelled-symbolic-method]
aliases: []
landmark: false
verification:
  audited: 2026-08-27
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Herbert S. Wilf, generatingfunctionology, 2nd ed., §3.8"
      url: "https://www2.math.upenn.edu/~wilf/gfologyLinked2.pdf"
pipeline_run: null
---

## Example

The involutions of $[4]$ are exactly the permutations whose cycle lengths are
all $1$ or $2$:

- one with four fixed points: $()$;
- six with one transposition:
  $(12)$, $(13)$, $(14)$, $(23)$, $(24)$, $(34)$;
- three with two disjoint transpositions:
  $(12)(34)$, $(13)(24)$, $(14)(23)$.

Hence $I_4=1+6+3=10$, agreeing with the EGF
$\exp(x+x^2/2)$ from
[[cor-standard-specializations-of-the-labelled-symbolic-method]].
