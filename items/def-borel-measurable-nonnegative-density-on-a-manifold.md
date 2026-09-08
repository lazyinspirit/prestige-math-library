---
id: def-borel-measurable-nonnegative-density-on-a-manifold
title: "Pointwise Borel nonnegative densities"
kind: definition
status: draft
origin: pipeline
deps: ["def-density-bundle-and-smooth-density", "def-borel-sigma-algebra", "def-extended-real-valued-measurable-function", "def-countable-choice", "def-topological-manifold-with-boundary", "def-smooth-manifold", "def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Folland, Real Analysis, second edition, \u00a711.4 pp.361\u2013363; Theorems 2.14\u20132.15 pp.50\u201351"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Definition

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $M$ be a Hausdorff second-countable smooth $n$-manifold, with boundary allowed. A **nonnegative Borel density** $r$ specifies, in every chart $x:U\to x(U)$, a Borel function $r_x:x(U)\to[0,\infty]$ such that, on every overlap with $y:V\to y(V)$,
$$r_x(u)=r_y(y(x^{-1}(u)))\left|\det D(y\circ x^{-1})(u)\right|.$$
Borel means measurability for the Borel sigma-algebras, as in [[def-borel-sigma-algebra]] and [[def-extended-real-valued-measurable-function]]; no measure on $M$ is needed to impose this condition. Smooth boundary charts use the structure of [[def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary]].

This extends the positive cone convention of [[def-density-bundle-and-smooth-density]]. It is an extended positive density cone, not an extended-valued section of the real line bundle. Transition factors are finite, strictly positive and smooth. For three charts $x,y,z$, the chain rule gives $J_{zx}=(J_{zy}\circ y\circ x^{-1})J_{yx}$, so repeated transitions give the same coefficient, including when it is infinite. On a countable atlas Borel coefficients satisfying the overlap law determine Borel coefficients in every chart: each transported coefficient is Borel, they agree on overlaps, and preimages are countable unions of Borel pieces. Conversely, Borel coefficients in every chart are Borel on that atlas. Nonnegative Borel products use the same convention: for $a,b\ge0$ and $t\ge0$, $\{ab>t\}=\bigcup_{q\in\mathbb Q,\ q>0}(\{a>q\}\cap\{b>t/q\})$, also for infinite values; for $t<0$ the superlevel is the whole domain. This proves product measurability by countable unions.

Set $0\cdot\infty=0$. A nonnegative finite Borel scalar $a$ multiplies coefficients by $a\circ x^{-1}$; its transition law follows by multiplying the displayed identity. In dimension zero the empty determinant is one, charts are singletons, and $\lambda_0$ gives the singleton mass one. The empty manifold has the unique empty coefficient family; the zero density has all coefficients zero. Coefficients are not identified almost everywhere.
