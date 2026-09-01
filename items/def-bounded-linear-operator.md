---
id: def-bounded-linear-operator
kind: definition
title: "A bounded linear operator between normed spaces"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-linear-map, def-norm-and-normed-space,
       rem-real-and-complex-normed-space-convention]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Theo Buhler and Dietmar A. Salamon, Functional Analysis"
      url: "https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
pipeline_run: frontier-28
---

## Definition

Let $X$ and $Y$ be normed spaces over the same scalar field $\mathbb K$, read in
the real case from [[def-norm-and-normed-space]] and in the complex case from
[[rem-real-and-complex-normed-space-convention]]. A linear map
$T:X\to Y$ ([[def-linear-map]]) is a **bounded linear operator** when there is a
real constant $C \ge 0$ such that

$$\|Tx\| \le C\|x\| \qquad \text{for all } x \in X.$$

Any such $C$ is called a **bound** for $T$.

## Remarks

- The zero operator is bounded with bound $0$.
- A bound is not unique: if $C$ works and $C' \ge C$, then $C'$ works as well.
- When $X = \{0\}$, every linear map $X \to Y$ is bounded with bound $0$.
