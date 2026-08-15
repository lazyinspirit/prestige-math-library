---
id: def-fibonacci-and-lucas-sequences
kind: definition
title: "The Fibonacci sequence $F_0=0,F_1=1$ and Lucas sequence $L_0=2,L_1=1$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-linear-recurrence-and-recurrence-characteristic-polynomial]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "R. P. Stanley, Enumerative Combinatorics, vol. 1, 2nd ed., Examples 4.1.2 and 4.7.16"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
pipeline_run: null
---

## Definition

The **Fibonacci sequence** $(F_n)_{n\ge0}$ and **Lucas sequence** $(L_n)_{n\ge0}$ are defined by

$$F_0=0,\quad F_1=1,\qquad L_0=2,\quad L_1=1,$$

and, for every $n\ge0$,

$$F_{n+2}=F_{n+1}+F_n,\qquad L_{n+2}=L_{n+1}+L_n.$$

Both are order-$2$ recurrences in the convention of [[def-linear-recurrence-and-recurrence-characteristic-polynomial]], with characteristic polynomial $t^2-t-1$ and reciprocal denominator $1-x-x^2$. The distinct initial pairs distinguish the two sequences.
