---
id: def-descent-data-and-stack-in-groupoids
kind: definition
title: "Descent data, prestacks and stacks in groupoids over the fppf site"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 2
justified_by: []
aliases: []
deps:
  - def-category-fibred-in-groupoids
  - def-fppf-topology-on-schemes
  - def-fppf-sheaf-and-sheafification
  - def-presheaf-representable-functor-and-representation
  - def-fibre-product-schemes-universal-property
  - def-axiom-of-choice
  - lem-nonaffine-fppf-descent-of-scheme-morphisms
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
    - title: "The Stacks Project, Chapter 8 (Stacks), Sections 8.4-8.5"
      url: "https://stacks.math.columbia.edu/download/stacks.pdf"
      locator: "Definitions 8.4.1 and 8.5.1 with Lemmas 8.4.2-8.4.8 and 8.5.2-8.5.6"
    - title: "Angelo Vistoli, Notes on Grothendieck topologies, fibered categories and descent theory (arXiv:math/0412512)"
      url: "https://arxiv.org/pdf/math/0412512"
      locator: "Chapter 4, Sections 4.1-4.3 (descent data, stacks, stacks in setoids)"
---

## Definition

Let $p\colon\mathcal S\to(\mathit{Sch}/S)_{fppf}$ be a category fibred in
groupoids ([[def-category-fibred-in-groupoids]]) over the fppf site
([[def-fppf-topology-on-schemes]]). For a morphism $T'\to T$ of $S$-schemes
and an object $x$ of $\mathcal S$ over $T$ we write $x|_{T'}$ for the value of
a chosen pullback along $T'\to T$; different choices are canonically
isomorphic and the definitions below do not depend on them.

For an fppf covering $\{T_i\to T\}_{i\in I}$ write
$T_{ij}=T_i\times_TT_j$ and $T_{ijk}=T_i\times_TT_j\times_TT_k$
([[def-fibre-product-schemes-universal-property]]). **Descent data** for a
family of objects $x_i$ of $\mathcal S_{T_i}$ is a family of isomorphisms
$$\varphi_{ij}\colon x_i|_{T_{ij}}\longrightarrow x_j|_{T_{ij}}$$
in $\mathcal S_{T_{ij}}$, one for each ordered pair $(i,j)$, satisfying the
**cocycle condition** $\varphi_{ik}=\varphi_{jk}\circ\varphi_{ij}$ over
$T_{ijk}$ (after pulling back along the three projections and using the
canonical identifications). With the evident notion of morphism — a family of
morphisms $x_i\to y_i$ compatible with the $\varphi_{ij}$ — these data form a
category $\mathrm{DD}(\{T_i\to T\},(x_i))$, and there is a base-change functor
$\mathcal S_T\to\mathrm{DD}(\{T_i\to T\})$ sending $x$ to
$(x|_{T_i},\text{canonical isomorphisms})$.

The fibred category $\mathcal S$ is a **prestack** when for all objects $x,y$
of $\mathcal S_T$ the presheaf
$$(\mathit{Sch}/T)_{fppf}\to\mathrm{Set},\qquad U\mapsto\operatorname{Mor}_{\mathcal S_U}(x|_U,y|_U)$$
is an fppf sheaf ([[def-fppf-sheaf-and-sheafification]]); equivalently, for
every fppf covering the diagram of morphism sets is an equalizer.

The fibred category $\mathcal S$ is a **stack in groupoids** when it is a
prestack and every descent datum of objects is **effective**: for every fppf
covering $\{T_i\to T\}$ the base-change functor
$\mathcal S_T\to\mathrm{DD}(\{T_i\to T\})$ is an equivalence of categories.
Effectivity is thus the precise sense in which objects are glued from
descent data.

A presheaf of sets $F$ on $(\mathit{Sch}/S)_{fppf}$ determines a category
fibred in groupoids $\mathcal S_F$ whose fibre category over $T$ is the
**discrete groupoid** on the set $F(T)$ (the groupoid with only identity
morphisms). Descent data for $\mathcal S_F$ over a covering
$\{T_i\to T\}$ amount to a family of elements of the $F(T_i)$ whose
pullbacks agree on all $T_{ij}$, and effectivity amounts to gluing them to an
element of $F(T)$; consequently $\mathcal S_F$ is a stack in groupoids (a
**stack in setoids**) exactly when $F$ is an fppf sheaf. In particular, assuming the Axiom of
Choice ([[def-axiom-of-choice]]) as in
[[lem-nonaffine-fppf-descent-of-scheme-morphisms]], every
$S$-scheme $X$, whose represented presheaf is then an fppf sheaf, determines the
stack in groupoids $\mathcal S_X$ whose fibre category over $T$ is the
discrete groupoid on $\operatorname{Mor}_S(T,X)$; this is the Yoneda
embedding of schemes into stacks.
