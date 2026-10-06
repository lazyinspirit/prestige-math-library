---
id: rem-absolutely-continuous-function
kind: remark
title: "Absolutely continuous functions"
status: published
origin: session
proved_here: false
deps: [rem-lebesgue-measure-and-integral]
justified_by: []
forward_refs: [def-absolutely-continuous-function, thm-c1-lipschitz-ac-bv-hierarchy]
aliases: [rem-absolute-continuity]
landmark: false
short: "The class between Lipschitz and bounded variation on which Newton-Leibniz holds"
verification:
  precheck: n/a
  sources_checked:
    date: 2026-07-26
    scope: citations
    by: session-audit
sources:
  scraped: []
  references:
    - title: "Absolute continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Absolute_continuity"
    - title: "Absolute continuity (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Absolute_continuity"
    - title: "C. Heil, Absolute continuity and the Banach-Zaretsky theorem"
      url: "https://heil.math.gatech.edu/papers/abscont_typosmarked.pdf"
pipeline_run: null
---

## Statement

A function $F : [a,b] \to \mathbb{R}$ is **absolutely continuous** when for every
$\varepsilon > 0$ there is $\delta > 0$ such that for every finite family of
pairwise disjoint subintervals $(a_1, b_1), \dots, (a_N, b_N)$ of $[a,b]$,

$$\sum_{k=1}^{N} (b_k - a_k) < \delta \ \Longrightarrow \ \sum_{k=1}^{N} |F(b_k) - F(a_k)| < \varepsilon.$$

Write $AC[a,b]$ for the class of such $F$. The inclusions

$$\text{Lipschitz} \subsetneq AC[a,b] \subsetneq \{\text{continuous and of bounded variation}\} \subsetneq \{\text{continuous}\}$$

are all strict: $x \mapsto \sqrt{x}$ on $[0,1]$ is absolutely continuous but not
Lipschitz; the Cantor function is continuous, increasing and of bounded variation
but not absolutely continuous; and $x \mapsto x \sin(1/x)$ on $(0,1]$, extended
by $0$, is continuous but not of bounded variation. $AC[a,b]$ is a vector space,
closed under products, and $F \in AC[a,b]$ has **Luzin's property (N)**: it maps
null sets to null sets.

## Remarks

**Partly proved elsewhere in this library.** The elementary definition is
[[def-absolutely-continuous-function]]. The hierarchy
$C^1\subseteq\mathrm{Lipschitz}\subseteq AC\subseteq C\cap BV$ and strictness
witnesses are proved in [[thm-c1-lipschitz-ac-bv-hierarchy]] and its companion
examples. Closure under vector-space operations and products, Luzin's property
(N), the sharp Lebesgue-integral FTC and the Banach–Zarecki characterisation
remain unproved.

**What would prove it.** Absolute continuity implies bounded variation by a
covering argument on $[a,b]$; property (N) follows from the definition applied to
a cover of the null set by intervals of small total length; strictness of the
inclusion at the Cantor function needs that $c$ maps a null set onto a set of
measure $1$, and that is a genuine measure statement. The real theorem about the
class is [[rem-ftc-absolutely-continuous]], and its characterisation without
integrals is [[rem-banach-zarecki]].

**Which page it serves.** The bounded variation and Riemann-Stieltjes page,
which builds the theory of $BV[a,b]$, the Jordan decomposition into a difference
of increasing functions, and the total variation function. Absolute continuity is
the next class in that hierarchy and the one for which the Newton-Leibniz formula
is exactly true, so the page can define it, place it in the hierarchy with the
counterexamples above, and then must stop.

**What is in scope on that page.** The whole $BV$ theory, the Jordan
decomposition, the Cantor function as a continuous increasing non-constant
function with derivative zero off a null set, and the elementary statement that
absolutely continuous implies uniformly continuous and of bounded variation.
What is not in scope is any statement whose formulation needs the Lebesgue
integral.
