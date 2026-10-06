---
id: def-descent-data-for-schemes
kind: definition
title: "Descent data for schemes over an fppf covering"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
justified_by: []
aliases: []
deps:
  - def-fppf-topology-on-schemes
  - def-fibre-product-schemes-universal-property
  - def-morphism-of-schemes
  - def-scheme-over-base
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "The Stacks Project, Chapter 35 (Descent), Section 35.34"
      url: "https://stacks.math.columbia.edu/download/descent.pdf"
      locator: "Definition 35.34.1 (tag 023U) and the surrounding discussion of descent data for schemes"
    - title: "Angelo Vistoli, Notes on Grothendieck topologies, fibered categories and descent theory (arXiv:math/0412512)"
      url: "https://arxiv.org/pdf/math/0412512"
      locator: "Chapter 4, Sections 4.1-4.3 (descent data, stacks, descent for schemes)"
---

## Definition

Let $\{X_i\to X\}_{i\in I}$ be an fppf covering of an $S$-scheme $X$
([[def-fppf-topology-on-schemes]], [[def-scheme-over-base]]), and put
$$X_{ij}=X_i\times_XX_j,\qquad X_{ijk}=X_i\times_XX_j\times_XX_k$$
([[def-fibre-product-schemes-universal-property]]). Write
$\mathrm{pr}_1,\mathrm{pr}_2\colon X_{ij}\to X_i,X_j$ and
$\mathrm{pr}_{12},\mathrm{pr}_{13},\mathrm{pr}_{23}\colon X_{ijk}\to
X_{ij},X_{ik},X_{jk}$ for the projections, and $\mathrm{pr}_i$ for the
projection of any of these fibre products to $X_i$.

A **descent datum for schemes** relative to this covering is a family of
$X_i$-schemes $V_i\to X_i$ ([[def-morphism-of-schemes]]) together with
isomorphisms
$$\varphi_{ij}\colon \mathrm{pr}_1^*V_i=V_i\times_{X_i}X_{ij}\longrightarrow \mathrm{pr}_2^*V_j=V_j\times_{X_j}X_{ij}$$
over $X_{ij}$, one for each ordered pair $(i,j)$, satisfying the **cocycle
condition**
$$\mathrm{pr}_{13}^*\varphi_{ik}=\mathrm{pr}_{23}^*\varphi_{jk}\circ\mathrm{pr}_{12}^*\varphi_{ij}$$
over $X_{ijk}$, where the pullbacks are taken along the displayed projections
of $X_{ijk}$ and the composites are computed in the category of schemes over
$X_{ijk}$. The condition is stated for all ordered triples and includes the
case $i=j=k$; the identity structure of the fibre products identifies the
pullbacks unambiguously.

A **morphism of descent data** $(V_i,\varphi_{ij})\to(W_i,\psi_{ij})$ is a
family of $X_i$-morphisms $f_i\colon V_i\to W_i$ compatible with the
isomorphisms, i.e. $\psi_{ij}\circ\mathrm{pr}_1^*f_i
=\mathrm{pr}_2^*f_j\circ\varphi_{ij}$ over every $X_{ij}$.

The descent datum is **effective** when there is an $X$-scheme $V$ together
with isomorphisms $V\times_XX_i\cong V_i$ over $X_i$ for all $i$ whose
pullbacks to every $X_{ij}$ agree with the $\varphi_{ij}$ through the
canonical identifications
$(V\times_XX_i)\times_{X_i}X_{ij}\cong V\times_XX_{ij}\cong
(V\times_XX_j)\times_{X_j}X_{ij}$. Equivalently, the datum is effective
precisely when it lies in the essential image of the base-change functor
$V\mapsto(V\times_XX_i)$. Descent data and their morphisms form a category in
the evident way, with composition componentwise.
