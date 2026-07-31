---
id: ex-mobius-on-the-divisor-lattice-of-twelve
kind: example
title: "The Möbius function on the divisor poset of $12$ and its agreement with $\\mu(1),\\mu(2),\\mu(3),\\mu(4),\\mu(6),\\mu(12)$"
status: published
origin: session
deps: [thm-number-theoretic-and-poset-mobius-agree, def-divisibility-poset-on-positive-integers, lem-poset-mobius-recurrence]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "MIT 18.785, Problem Set 8"
      url: "https://math.mit.edu/classes/18.785/2021fa/ProblemSet8.pdf"
pipeline_run: null
---

## Example

The positive divisors of $12$ are $1,2,3,4,6,12$. In the divisibility order ([[def-divisibility-poset-on-positive-integers]]), the covers are

$$1\lessdot2,\quad1\lessdot3,\quad2\lessdot4,\quad2\lessdot6,\quad3\lessdot6,\quad4\lessdot12,\quad6\lessdot12.$$

For every comparable $a\mid b$, [[thm-number-theoretic-and-poset-mobius-agree]] gives $\mu_{\mid}(a,b)=\mu(b/a)$. Hence the full table is obtained from

$$\mu(1)=1,\quad \mu(2)=-1,\quad \mu(3)=-1,\quad \mu(4)=0,\quad \mu(6)=1,\quad \mu(12)=0.$$

In particular, the row from $1$ is $(1,-1,-1,0,1,0)$ in the divisor order listed above. The recurrence checks the less immediate values: $1-1-1+\mu(1,6)=0$ gives $\mu(1,6)=1$, and $1-1-1+0+1+\mu(1,12)=0$ gives $\mu(1,12)=0$ ([[lem-poset-mobius-recurrence]]).
