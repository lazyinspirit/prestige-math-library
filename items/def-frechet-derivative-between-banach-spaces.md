---
id: def-frechet-derivative-between-banach-spaces
kind: definition
title: Fréchet derivative between Banach spaces
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-banach-space, def-bounded-linear-operator, def-operator-norm, def-space-of-bounded-linear-operators, def-metric-topology, def-metric-continuity]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Zuoqin Wang, Lecture 6: Differential Calculus on Banach Spaces — §2.1"
      url: "https://www.math.ntu.edu.tw/~dragon/Lecture%20Notes/Banach%20Calculus%202012.pdf"
---

## Definition

On this page the scalar field is the field $\mathbb R$ of real numbers: $X$, $Y$
and $Z$ always denote real Banach spaces ([[def-banach-space]]) and $U
\subseteq X$ always denotes an open subset of $X$, in the metric topology of the
norm ([[def-metric-topology]]).

Let $f : U \to Y$ be a map and let $x \in U$. For a bounded linear operator
$T \in \mathcal B(X,Y)$ ([[def-bounded-linear-operator]],
[[def-space-of-bounded-linear-operators]]) write

$$r(h) := f(x+h) - f(x) - Th \qquad (h \in X,\ x+h \in U).$$

Then $f$ is **Fréchet differentiable at $x$** when there is
$T \in \mathcal B(X,Y)$ with

$$\lim_{\substack{h \to 0 \\ h \ne 0}} \frac{\|f(x+h)-f(x)-Th\|}{\|h\|} = 0 ,$$

the limit being taken over those $h$ with $x + h \in U$. Such an operator $T$ is
a **Fréchet derivative of $f$ at $x$**, written $T = Df(x)$, and $\|T\|$ is its
operator norm ([[def-operator-norm]]). When $f$ is Fréchet differentiable at
every point of $U$, $f$ is **differentiable on $U$** and the **derivative** is
the map $Df : U \to \mathcal B(X,Y)$, $x \mapsto Df(x)$.

## Remarks

- **The limit is a genuine two-sided limit.** Since $U$ is open and $x \in U$,
  there is $\rho > 0$ with $x + h \in U$ whenever $\|h\| < \rho$. The condition
  above is therefore a statement about a punctured neighbourhood of $0$, and no
  one-sided or directional restriction is imposed on $h$. The quantity displayed
  is defined for every $h \ne 0$ with $x+h \in U$, and it is $0$ at $h=0$ by
  convention only, which is why $h \ne 0$ is written out.

- **The $\varepsilon$-$\delta$ form.** The displayed limit says exactly: for
  every real $\varepsilon > 0$ there is a real $\delta > 0$ such that
  $$\|r(h)\| \le \varepsilon\,\|h\| \qquad \text{whenever } \|h\| < \delta \text{ and } x+h \in U .$$
  This is the form used in every estimate on this page, and it is the form in
  which the remainder is written $r(h) = o(\|h\|)$.

- **The derivative is unique when it exists**, so the notation $Df(x)$ is
  unambiguous; this is proved as the next item on the page,
  [[lem-the-frechet-derivative-is-unique]].

- **Differentiability at $x$ implies continuity at $x$.** Take $\varepsilon = 1$
  in the previous remark and let $\|h\| < \delta$ with $x+h \in U$. Then
  $$\|f(x+h)-f(x)\| \le \|Th\| + \|r(h)\| \le (\|T\|+1)\,\|h\| ,$$
  so every $\eta > 0$ is met by $\|f(x+h)-f(x)\| < \eta$ once
  $\|h\| < \min\{\delta, \eta/(\|T\|+1)\}$ (the case $\|T\|+1$ being positive);
  this is continuity of $f$ at $x$ in the $\varepsilon$-$\delta$ form
  ([[def-metric-continuity]]). No separate hypothesis of continuity is ever
  needed with differentiability.

- **Fréchet, not Gâteaux or directional.** The derivative $T$ is required to be
  a bounded linear operator defined on all of $X$, and the remainder is measured
  against $\|h\|$ uniformly over all directions. The weaker notions that test
  only $h = tv$ along single lines, or that require merely
  $\|r(h)\|/\|h\| \to 0$ along each such line, are not used anywhere on this
  page: every statement below is about the Fréchet derivative, and the inverse
  and implicit function theorems in particular are proved for it.

- **Graphs and affine maps.** A bounded linear $T \in \mathcal B(X,Y)$ is
  differentiable at every $x \in X$ with $DT(x) = T$, since the remainder
  vanishes identically; and the derivative of a constant map is $0$. In
  particular an affine map $x \mapsto y_0 + T(x-x_0)$ has derivative $T$
  everywhere. These instances are used without further comment.
