---
id: ex-mobius-on-a-four-element-chain
kind: example
title: "The Möbius table of a four-element chain"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-supplied
deps: [thm-mobius-function-of-a-finite-chain, lem-poset-mobius-recurrence]
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

For the chain $c_0<c_1<c_2<c_3$, the complete upper-triangular table is

| $\mu(c_i,c_j)$ | $j=0$ | $j=1$ | $j=2$ | $j=3$ |
|---|---:|---:|---:|---:|
| $i=0$ | $1$ | $-1$ | $0$ | $0$ |
| $i=1$ |  | $1$ | $-1$ | $0$ |
| $i=2$ |  |  | $1$ | $-1$ |
| $i=3$ |  |  |  | $1$ |

This is [[thm-mobius-function-of-a-finite-chain]]: diagonal entries are $1$, cover entries are $-1$, and entries spanning more than one cover are $0$. For example, the recurrence gives $\mu(c_0,c_2)=-(1-1)=0$, then $\mu(c_0,c_3)=-(1-1+0)=0$ ([[lem-poset-mobius-recurrence]]).
