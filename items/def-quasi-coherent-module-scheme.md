---
id: def-quasi-coherent-module-scheme
kind: definition
title: Quasi-coherent module on a scheme
status: draft
origin: pipeline
deps:
  - def-module-on-ringed-space
  - def-associated-sheaf-module-affine-scheme
  - def-scheme
justified_by: []
landmark: true
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, §§26.5, 26.7, 26.24"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Chapters 6, 14, 17"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
    - title: "The Stacks Project, Cohomology of Schemes §30.9"
      url: "https://stacks.math.columbia.edu/tag/01XY"
    - title: "The Stacks Project, Properties of Schemes, §§28.20, 28.26"
      url: "https://stacks.math.columbia.edu/download/properties.pdf"
pipeline_run: frontier-36-complete
---

## Definition

Let $X$ be a scheme ([[def-scheme]]) and let $\mathcal F$ be a sheaf of
$\mathcal O_X$-modules ([[def-module-on-ringed-space]]). Recall that for a
commutative ring $A$ and an $A$-module $M$ the associated module sheaf
$\widetilde M$ on $\operatorname{Spec}A$ is the sheaf of
$\mathcal O_{\operatorname{Spec}A}$-modules whose sections on a distinguished
open $D(f)$ are $M_f$
([[def-associated-sheaf-module-affine-scheme]]).

The module $\mathcal F$ is **quasi-coherent** if every point $x\in X$ has an
affine open neighbourhood $U=\operatorname{Spec}A\subseteq X$ and an $A$-module
$M$ such that

$$\mathcal F|_U\;\cong\;\widetilde M$$

as sheaves of $\mathcal O_U$-modules. A quasi-coherent sheaf of
$\mathcal O_X$-modules is also called a quasi-coherent module on $X$, and the
full subcategory of $\mathcal O_X$-modules consisting of the quasi-coherent
ones is written $\operatorname{QCoh}(X)$; morphisms in
$\operatorname{QCoh}(X)$ are all $\mathcal O_X$-module morphisms between its
objects.

Immediate consequences of the definition, used without further comment:

- The condition is invariant under isomorphism: if $\mathcal F\cong\mathcal G$
  as $\mathcal O_X$-modules and $\mathcal F$ is quasi-coherent, then so is
  $\mathcal G$, because the isomorphism restricts over an affine open.
- The condition is local on $X$: $\mathcal F$ is quasi-coherent if and only if
  there is an open cover $X=\bigcup_{i\in I}U_i$ such that each restriction
  $\mathcal F|_{U_i}$ is quasi-coherent. Indeed a point of an arbitrary open
  subscheme $U\subseteq X$ has an affine open neighbourhood inside $U$, and an
  affine open subscheme of $X$ contained in $U$ is also an affine open
  subscheme of $U$; conversely, every point of $U_i$ lies in an affine open of
  $X$ inside $U_i$.
- If $\mathcal F$ is quasi-coherent and $V\subseteq X$ is open, then
  $\mathcal F|_V$ is quasi-coherent, since $\mathcal F|_V$ is again an
  $\mathcal O_V$-module and an affine open $U\subseteq V$ is an affine open of
  $X$.
- On an affine scheme $X=\operatorname{Spec}A$ the definition asks at each
  point for an affine open neighbourhood on which $\mathcal F$ is associated to
  a module; it does not ask that $\mathcal F$ itself be associated to a single
  $A$-module. The affine comparison theorem on this page shows that on an
  affine scheme the two conditions coincide.

The terminology follows the standard one: quasi-coherence is the local
affine-module condition, and no finiteness, Noetherian or separatedness
hypothesis is part of it.
