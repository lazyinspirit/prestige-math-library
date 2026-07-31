---
id: ex-mobius-on-the-boolean-lattice-b3
kind: example
title: "The full Möbius table of the Boolean lattice $2^{[3]}$"
status: published
origin: session
deps: [thm-mobius-function-of-a-boolean-lattice, def-boolean-lattice-and-levels, lem-poset-mobius-recurrence]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "R. Stanley, Enumerative Combinatorics, Volume 1"
      url: "https://math.mit.edu/~rstan/ec/ec1toc.html"
pipeline_run: null
---

## Example

Let $[3]=\{1,2,3\}$ and order $2^{[3]}$ by inclusion ([[def-boolean-lattice-and-levels]]). The complete table is determined by

$$\mu(A,B)=(-1)^{|B\setminus A|}\qquad(A\subseteq B)$$

([[thm-mobius-function-of-a-boolean-lattice]]). Thus the value is $1$ on the diagonal, $-1$ when $B$ adds one element, $1$ when it adds two elements, and $-1$ from $\varnothing$ to $[3]$.

Equivalently, the comparable pairs split as follows:

| $|B\setminus A|$ | number of pairs | $\mu(A,B)$ |
|---:|---:|---:|
| $0$ | $8$ | $1$ |
| $1$ | $12$ | $-1$ |
| $2$ | $6$ | $1$ |
| $3$ | $1$ | $-1$ |

For a cover $A\subset A\cup\{i\}$ the recurrence reads $1+(-1)=0$. For the top interval it reads $1+3(-1)+3(1)+(-1)=0$, in agreement with [[lem-poset-mobius-recurrence]].
