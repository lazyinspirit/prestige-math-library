---
id: def-forward-and-backward-stability-for-a-problem-family
kind: definition
title: "Forward and backward stability for a problem family under an arithmetic model"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-absolute-and-relative-forward-error-for-a-problem-map, def-normwise-and-componentwise-backward-error-for-linear-systems, def-standard-relative-floating-point-model-and-unit-roundoff, def-norm-and-normed-space]
aliases: []
verification:
  audited: 2026-08-29
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "L. N. Trefethen and D. Bau III, Numerical Linear Algebra, Lecture 15"
      url: "https://djvu.online/file/DTGVxlxBwTy0n"
    - title: "James Demmel, Math 221 Lecture 2: Floating Point Arithmetic"
      url: "https://web.archive.org/web/20260803030309if_/http://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_02.html"
---

## Definition

Fix normed spaces $(X,\lVert\cdot\rVert_X)$ and $(Y,\lVert\cdot\rVert_Y)$ over
$\mathbb R$ ([[def-norm-and-normed-space]]), a map $f:X\to Y$, a class
$\mathcal I\subseteq\operatorname{dom} f$ of inputs, an arithmetic model with
unit roundoff $u$ ([[def-standard-relative-floating-point-model-and-unit-roundoff]]),
and an algorithm that, for each input $x\in\mathcal I$, returns an approximate
value $\widehat y\in Y$ of [[def-absolute-and-relative-forward-error-for-a-problem-map]].

**Backward stability.** The algorithm is **backward stable** on $\mathcal I$
when there is a constant $C\ge 0$ such that for every $x\in\mathcal I$ there is
an input $\widetilde x\in\operatorname{dom} f$ with

$$\widehat y=f(\widetilde x)\qquad\text{and}\qquad\lVert\widetilde x-x\rVert_X\le C\,u\,\lVert x\rVert_X.$$

The computed answer is exactly right for a slightly perturbed input, and the
perturbation is at most a fixed multiple $C$ of the unit roundoff.

**Forward stability.** The algorithm is **forward stable** on $\mathcal I$
when there is a constant $C\ge 0$ such that for every $x\in\mathcal I$ with
$f(x)\ne 0$,

$$\frac{\lVert\widehat y-f(x)\rVert_Y}{\lVert f(x)\rVert_Y}\le C\,u.$$

**The standard linear-system specialization.** Fix $n\ge1$ and a rational
$p\ge1$. For the problem "given $A\in\operatorname{GL}_n(\mathbb R)$ and $b$,
return $x$ with $Ax=b$", one
usually measures the two data components separately rather than forcing the
pair $(A,b)$ into the single fixed input norm above. An algorithm is called
**normwise backward stable** on a declared class of systems when one constant
$C$ makes every returned $\widehat x$ satisfy
$\eta_p(\widehat x)\le Cu$ in the sense of
[[def-normwise-and-componentwise-backward-error-for-linear-systems]]; the
componentwise specialization requires $\omega(\widehat x)\le Cu$. Thus there
are perturbations $\Delta A,\Delta b$ with
$(A+\Delta A)\widehat x=b+\Delta b$ and separately measured relative sizes at
most $Cu$. These are specialized product-wise definitions, not literal
instances of one undeclared norm on the data pairs. Stability remains a
property of the algorithm on the problem class, while the condition number is
a property of the problem itself.

## Remarks

- **Backward stability does not by itself bound the forward error.** It bounds
  the data perturbation; converting that into an answer bound costs one factor
  of the condition number, by
  [[thm-local-conditioning-times-backward-error-controls-forward-error-to-first-order]].
  A backward-stable algorithm on an ill-conditioned problem can still return a
  large forward error: for
  $A=\operatorname{diag}(1,\varepsilon)$, $b=(1,\varepsilon)$, and
  $\widehat x=(1,0)$, the backward error is $O(\varepsilon)$ while the
  relative forward error is $1/\sqrt{2}$.

- **The constant $C$ is part of the honest statement.** The definition records
  "at most $C$ times the unit roundoff" for some fixed $C$, not "exactly the
  unit roundoff"; polynomial growth in the dimension is folded into $C$, and a
  stability claim without its class $\mathcal I$ and its constant is not a
  stability claim.
