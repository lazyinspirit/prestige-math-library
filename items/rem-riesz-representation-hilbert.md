---
id: rem-riesz-representation-hilbert
kind: remark
title: "Riesz representation theorem for Hilbert space"
status: draft
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: []
aliases: []
landmark: true
short: "every functional is an inner product"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Riesz representation theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riesz_representation_theorem"
    - title: "Hilbert space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hilbert_space"
pipeline_run: null
---

## Statement

Let $H$ be a Hilbert space over $\mathbb{K} \in \{\mathbb{R}, \mathbb{C}\}$ and let
$f \in H^{*}$ be a bounded linear functional. Then there is a unique $y \in H$ with
$$f(x) = \langle x, y \rangle \quad \text{for all } x \in H,$$
and $\lVert f \rVert = \lVert y \rVert$. The map $f \mapsto y$ is a bijective isometry
$H^{*} \to H$, conjugate linear in the complex case, so a Hilbert space is canonically
identified with its own dual and is in particular reflexive.

## Remarks

**Not proved in this library.** There is no inner product space or completeness-in-norm track here
yet, so the statement is recorded with a citation.

**What would prove it.** Two steps, neither of which uses any choice principle. First, the nearest
point property: a nonempty closed convex subset of a complete inner product space contains a unique
element of least norm, which follows from the parallelogram law and completeness. Second, applying
this to the closed subspace $\ker f$ gives the orthogonal decomposition
$H = \ker f \oplus (\ker f)^{\perp}$ with $(\ker f)^{\perp}$ one-dimensional when $f \neq 0$, and
the representing vector is the appropriately scaled generator.

**Why it matters here.** It is the reason Hilbert space duality needs no Hahn-Banach: the dual is
produced explicitly, not by extension from a subspace, so the whole choice discussion attached to
[[rem-hahn-banach-theorem]] evaporates in the Hilbert setting. It is also the starting point for
the adjoint of an operator and hence for all of the spectral theory recorded below.
