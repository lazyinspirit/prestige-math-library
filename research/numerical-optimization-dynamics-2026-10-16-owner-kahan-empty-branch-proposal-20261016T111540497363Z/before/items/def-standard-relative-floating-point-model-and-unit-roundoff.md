---
id: def-standard-relative-floating-point-model-and-unit-roundoff
kind: definition
title: "The standard relative floating-point model and unit roundoff"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-abs-value]
aliases: []
verification:
  audited: 2026-08-29
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "James Demmel, Math 221 Lecture 2: Floating Point Arithmetic"
      url: "https://web.archive.org/web/20260803030309if_/http://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_02.html"
    - title: "David Bindel, CS 6210: Floating Point and Error Analysis"
      url: "https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-09-08.html"
---

## Definition

**A floating-point system.** A floating-point system consists of a nonempty
finite set $\mathbb F\subseteq\mathbb R$ of representable numbers with
$0\in\mathbb F$ and $-\mathbb F=\mathbb F$, a positive real
$N_{\max}\in\mathbb F$ (the largest normal magnitude), a positive real
$N_{\min}\in\mathbb F$ (the smallest normal magnitude), with
$N_{\min}\le N_{\max}$, and a rounding map
$\operatorname{fl}$ defined on $0$ and on the real numbers $t$ with
$N_{\min}\le|t|\le N_{\max}$, taking values in $\mathbb F$ and satisfying
$\operatorname{fl}(0)=0$.

**Unit roundoff.** A real $u>0$ is a **unit roundoff** for the system when
every real $t$ with $N_{\min}\le|t|\le N_{\max}$ satisfies

$$\operatorname{fl}(t)=t(1+\delta)\qquad\text{for some }\delta\text{ with }|\delta|\le u,$$

with $|\cdot|$ the absolute value ([[def-abs-value]]). The model quantifies all
subsequent error analysis through the single constant $u$ and says nothing
about the internal bit representation beyond the bound $|\delta|\le u$.

**The standard relative model.** For each operation
$\circ\in\{+,-,\times,\div\}$ and all $x,y\in\mathbb F$ such that $x\circ y$ is
zero or is a real number in the normal range
($N_{\min}\le|x\circ y|\le N_{\max}$; for $\div$ this includes $y\ne 0$), the
computed result is

$$\operatorname{fl}(x\circ y)=(x\circ y)(1+\delta)\qquad\text{for some }\delta\text{ with }|\delta|\le u.$$

When $x\circ y=0$, this identity is the exact-zero rule
$\operatorname{fl}(0)=0$ and one may take $\delta=0$.

**The exclusions are part of the model, and are stated explicitly.**

- **Overflow** is excluded: when $|x\circ y|>N_{\max}$ the result is not a real
  number of the form $(x\circ y)(1+\delta)$ with $|\delta|\le u$.
- **Underflow** is excluded: when $0<|x\circ y|<N_{\min}$ the result falls into
  the subnormal or lost range and need not satisfy the relative bound.
- **Invalid operations** are excluded: when $x\circ y$ is not a real number
  (for example $0/0$), there is no real $\delta$ for the displayed identity.

Every item on this page that uses the model therefore carries the hypotheses
that the relevant operations lie in the normal range, and statements about
overflow, underflow or invalid operations are made only where the exclusion is
mentioned.

## Remarks

- **The running example.** In the IEEE-754 binary64 system the unit roundoff is
  $u=2^{-53}$, the largest normal magnitude is
  $N_{\max}=(2-2^{-52})\,2^{1023}\approx 1.798\cdot 10^{308}$, and the smallest
  normal magnitude is $N_{\min}=2^{-1022}$. The counterexample page uses these
  three numbers to exhibit the excluded events.

- **The exclusions are needed, not decorative.** Each excluded event genuinely
  produces a value that is not of the form $(x\circ y)(1+\delta)$ with
  $|\delta|\le u$: overflow at $((3/2)2^{1023})\cdot 2$ gives $+\infty$,
  underflow at $2^{-1074}/2$ rounds to $0$, and $0/0$ gives $\operatorname{NaN}$.

- **The model is an assumption, not a theorem about hardware.** Statements
  proved under this model are conditional on the displayed inequalities; they
  say "if every operation rounds this accurately, then the following error
  bound holds". That is exactly what makes the bounds of
  [[thm-floating-point-dot-product-componentwise-and-normwise-error-bounds]]
  transportable to any hardware conforming to the model.
