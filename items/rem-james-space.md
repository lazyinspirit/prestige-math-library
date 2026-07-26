---
id: rem-james-space
kind: remark
title: "The James space: isometric to its bidual, but not reflexive"
status: draft
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: []
aliases: []
landmark: false
short: "reflexivity must name the canonical map"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "James' space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/James'_space"
    - title: "Reflexive space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Reflexive_space"
    - title: "F. Albiac and N. J. Kalton, Topics in Banach Space Theory, 2nd ed., Graduate Texts in Mathematics 233, Springer (2016)"
      url: "https://doi.org/10.1007/978-3-319-31557-7"
pipeline_run: null
---

## Statement

Let $J$ be the space of real sequences $x$ with $x_n \to 0$ and finite quadratic variation norm
$$\lVert x \rVert = \sup \Big\{ \Big( \sum_{i=1}^{k-1} (x_{p_{i}} - x_{p_{i+1}})^{2} \Big)^{1/2} : p_1 < p_2 < \dots < p_k \Big\}.$$
Then $J$ is a separable Banach space with the following two properties at once.

1. $J$ is **not reflexive**: the canonical image of $J$ in $J^{**}$ has codimension $1$.
2. $J$ is **isometrically isomorphic to $J^{**}$**, by some isomorphism, just not by the canonical
   embedding.

## Remarks

**Not proved in this library.** Recorded with a citation.

**What would prove it.** A direct computation with the quadratic variation norm and the standard
basis of $J$, identifying $J^{*}$ and $J^{**}$ concretely, plus the observation that the constant
sequence $1$ generates the missing codimension.

**Why it matters here.** It settles a definitional question that looks pedantic and is not.
Reflexivity is **not** "the space is isomorphic to its bidual"; it is "the canonical embedding
$x \mapsto \hat{x}$, $\hat{x}(f) = f(x)$, is onto". The James space is the reason the definition has
to name the map, and any future item in this library defining reflexivity must do so.
