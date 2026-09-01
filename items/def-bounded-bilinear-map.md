---
id: def-bounded-bilinear-map
kind: definition
title: "A bounded bilinear map between normed spaces"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-norm-and-normed-space, def-vector-space,
       rem-real-and-complex-normed-space-convention]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo Buhler and Dietmar A. Salamon, Functional Analysis"
      url: "https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon"
pipeline_run: frontier-28
---

## Definition

Let $X$, $Y$, and $Z$ be normed spaces over the same scalar field $\mathbb K$.
A map $B:X\times Y\to Z$ is **bilinear** when $x \mapsto B(x,y)$ is linear for
each fixed $y \in Y$ and $y \mapsto B(x,y)$ is linear for each fixed
$x \in X$.

It is a **bounded bilinear map** when there is a real constant $C \ge 0$ such
that

$$\|B(x,y)\| \le C\|x\|\,\|y\| \qquad \text{for all } x \in X,\ y \in Y.$$

## Remarks

- If either variable is $0$, the displayed estimate forces $B(x,0)=0$ and
  $B(0,y)=0$.
- The constant $C$ is not unique, exactly as for bounded linear operators.
