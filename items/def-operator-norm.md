---
id: def-operator-norm
kind: definition
title: "The operator norm as the least bound and as the unit-sphere or unit-ball supremum"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-bounded-linear-operator]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-09-01
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Theo Buhler and Dietmar A. Salamon, Functional Analysis"
      url: "https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis"
      url: "https://ocw-preview.odl.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
pipeline_run: frontier-28
---

## Definition

Let $X$ and $Y$ be normed spaces over the same scalar field, and let
$T:X\to Y$ be bounded in the sense of [[def-bounded-linear-operator]]. The
**operator norm** of $T$ is

$$\|T\| := \sup\{\|Tx\| : x \in X,\ \|x\| \le 1\}.$$

This supremum is finite because every bound $C$ for $T$ also bounds the set on
the right by $C$.

The same number is the least bound of $T$:

$$\|T\| = \inf\{C \ge 0 : \|Tx\| \le C\|x\| \text{ for all } x \in X\}.$$

If $X \ne \{0\}$, positive homogeneity also gives

$$\|T\| = \sup\{\|Tx\| : \|x\| = 1\}.$$

When $X = \{0\}$, the unit sphere is empty and the unit-ball supremum is $0$,
so $\|T\| = 0$.

## Remarks

- The inequality $\|Tx\| \le \|T\|\,\|x\|$ holds for every $x \in X$ by the
  unit-ball definition and rescaling.
- The unit-ball formula is the one used uniformly below, because it also covers
  the zero-space case without a separate convention.
