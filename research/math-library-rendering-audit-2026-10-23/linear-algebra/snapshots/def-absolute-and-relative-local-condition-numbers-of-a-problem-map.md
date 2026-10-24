---
id: def-absolute-and-relative-local-condition-numbers-of-a-problem-map
kind: definition
title: "Absolute and relative local condition numbers of a problem map"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-absolute-and-relative-forward-error-for-a-problem-map, def-norm-and-normed-space]
aliases: []
verification:
  audited: 2026-08-29
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "L. N. Trefethen and D. Bau III, Numerical Linear Algebra, Lecture 12"
      url: "https://djvu.online/file/DTGVxlxBwTy0n"
    - title: "James Demmel, Math 221 Lecture 3: Vector Norms, Matrix Norms, and Condition Numbers"
      url: "https://web.archive.org/web/20250328021224if_/https://people.eecs.berkeley.edu/~demmel/ma221_Fall09/Lectures/Lecture_03.html"
---

## Definition

Let $X$ and $Y$ be normed spaces over $\mathbb{R}$
([[def-norm-and-normed-space]]) and let $f:X\to Y$ be a map. For $x\in X$ and
$\delta>0$ write

$$P_{f,x}(\delta)\;:=\;\bigl\{\,h\in X:0<\lVert h\rVert<\delta,\ x+h\in\operatorname{dom} f\,\bigr\}.$$

Define the **worst amplification over perturbations of size at most $\delta$**
by

$$S_{f,x}(\delta)\;:=\;\begin{cases} 0, & P_{f,x}(\delta)=\varnothing,\\[4pt] \sup\Bigl\{\,\dfrac{\lVert f(x+h)-f(x)\rVert}{\lVert h\rVert}:h\in P_{f,x}(\delta)\,\Bigr\}, & P_{f,x}(\delta)\ne\varnothing. \end{cases}$$

so $S_{f,x}(\delta)\in[0,+\infty]$ in every case.

For each fixed $x$ the map $\delta\mapsto S_{f,x}(\delta)$ is nondecreasing as
$\delta$ increases, so the infimum over all $\delta>0$ exists in $[0,+\infty]$.
The **absolute (local) condition number** of $f$ at $x$ is

$$\kappa_{\mathrm{abs}}(f,x)\;:=\;\inf_{\delta>0}S_{f,x}(\delta) \;=\;\lim_{\delta\to 0^{+}}S_{f,x}(\delta)\;\in\;[0,+\infty].$$

If $x\ne 0$ and $f(x)\ne 0$, the **relative (local) condition number** of $f$
at $x$ is

$$\kappa_{\mathrm{rel}}(f,x)\;:=\;\kappa_{\mathrm{abs}}(f,x)\cdot\frac{\lVert x\rVert}{\lVert f(x)\rVert}\;\in\;[0,+\infty].$$

For the computed value $\widehat y=f(x+h)$ of
[[def-absolute-and-relative-forward-error-for-a-problem-map]], the quantity
$\lVert h\rVert$ is the **absolute backward error**. When $x\ne0$, the quotient
$\lVert h\rVert/\lVert x\rVert$ is the **relative backward error**: the amount
by which the data must be moved, relative to its size, for the computed answer
to be exactly correct. At $x=0$ only the absolute backward error is defined.
The condition number converts backward error into a bound on forward error;
that conversion is
[[thm-local-conditioning-times-backward-error-controls-forward-error-to-first-order]].

## Remarks

- **The infimum form is the limit of the supremum form.** Because
  $S_{f,x}$ is monotone in $\delta$, the infimum over $\delta>0$ equals the
  one-sided limit $\lim_{\delta\to 0^{+}}S_{f,x}(\delta)$, which is the familiar
  definition of a condition number as the worst relative amplification of
  infinitesimal perturbations. The infimum formulation is used below because
  it is an honest value of the library's ordered arithmetic with no separate
  limit apparatus.

- **The value is allowed to be $+\infty$.** An ill-posed (discontinuous) map
  has infinite condition number at a point of discontinuity; $\kappa_{\mathrm{abs}}=+\infty$
  is a legitimate value and no arithmetic is performed with it. The
  first-order conversion theorem only yields a finite bound when
  $\kappa_{\mathrm{abs}}<+\infty$.

- **Conditioning belongs to the problem, not to the algorithm.** The condition
  number depends only on $f$, the point $x$, and the two norms; no algorithm
  enters its definition. The separate notion of stability belongs to an
  algorithm under an arithmetic model and is defined in
  [[def-forward-and-backward-stability-for-a-problem-family]].
