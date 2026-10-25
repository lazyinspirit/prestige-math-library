---
id: ex-mobius-on-the-diamond-poset
kind: example
title: "The endpoint Möbius value of the four-element diamond is $1$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-supplied
deps: [thm-mobius-function-of-a-boolean-lattice, lem-poset-mobius-recurrence]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "R. Stanley, Enumerative Combinatorics, Volume 1, §§3.6–3.8"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
pipeline_run: null
---

## Example

Let the diamond have bottom $\bot$, top $\top$, and incomparable middle elements $a,b$. It is the Boolean lattice on a two-element set, so [[thm-mobius-function-of-a-boolean-lattice]] gives

$$\mu(\bot,\bot)=1,\qquad \mu(\bot,a)=\mu(\bot,b)=-1,\qquad \mu(\bot,\top)=1.$$

The endpoint recurrence displays the same computation directly:

$$1-1-1+\mu(\bot,\top)=0,$$

and hence $\mu(\bot,\top)=1$ ([[lem-poset-mobius-recurrence]]).
