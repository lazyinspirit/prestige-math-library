---
id: def-set-weighted-limit-and-weighted-colimit
kind: definition
title: "Set-weighted limits and colimits"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-functor-category, prop-size-of-functor-categories, def-presheaf-representable-functor-and-representation, def-hom-functors-and-hom-bifunctor, def-natural-transformation, def-small-locally-small-and-large-category, prop-sets-and-functions-form-category-set, def-opposite-category]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "E. Riehl, Categorical Homotopy Theory, Definitions 7.1.1 and 7.2.1"
      url: "https://emilyriehl.github.io/files/cathtpy.pdf"
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory (TAC Reprints 10), (3.1)-(3.6)"
      url: "https://tac.mta.ca/tac/reprints/articles/10/tr10.pdf"
pipeline_run: null
---

## Definition

Let $\mathcal J$ be a small category, let $\mathcal M$ be locally small
([[def-small-locally-small-and-large-category]]) and let
$D:\mathcal J\to\mathcal M$ be a diagram. Because $\mathcal J$ is small and
$\mathbf{Set}$ is locally small, the functor category
$[\mathcal J,\mathbf{Set}]$ is locally small
([[def-functor-category]], [[prop-size-of-functor-categories]],
[[prop-sets-and-functions-form-category-set]]), so each collection of natural
transformations named below is a set ([[def-natural-transformation]]).

A **weight for a limit** is a functor $W:\mathcal J\to\mathbf{Set}$. A
**weighted limit** $\{W,D\}$ is an object of $\mathcal M$ that represents the
functor sending an object to the set of natural transformations from the
weight ([[def-presheaf-representable-functor-and-representation]]), namely

$$\mathcal M(-,\{W,D\})\;\cong\;[\mathcal J,\mathbf{Set}]\bigl(W,\mathcal M(-,D-)\bigr):\mathcal M^{\mathrm{op}}\to\mathbf{Set},$$

where $\mathcal M(m,D-):\mathcal J\to\mathbf{Set}$ is the covariant hom-functor
$\mathcal M(m,-)$ composed with $D$ ([[def-hom-functors-and-hom-bifunctor]]).
Written out, the isomorphism is a bijection natural in $m$ between morphisms
$m\to\{W,D\}$ and families of functions
$\alpha_j:W(j)\to\mathcal M(m,Dj)$ satisfying
$D(u)\circ\alpha_j(w)=\alpha_k(W(u)(w))$ for every $u:j\to k$ and $w\in W(j)$.

A **weight for a colimit** is a presheaf
$W:\mathcal J^{\mathrm{op}}\to\mathbf{Set}$ ([[def-opposite-category]]). A
**weighted colimit** $W\star D$ is an object of $\mathcal M$ with

$$\mathcal M(W\star D,-)\;\cong\;[\mathcal J^{\mathrm{op}},\mathbf{Set}]\bigl(W,\mathcal M(D-,-)\bigr):\mathcal M\to\mathbf{Set},$$

naturally in the second variable, where
$\mathcal M(D-,m):\mathcal J^{\mathrm{op}}\to\mathbf{Set}$ sends $j$ to
$\mathcal M(Dj,m)$ and is obtained by composing the contravariant hom-functor
$\mathcal M(-,m):\mathcal M^{\mathrm{op}}\to\mathbf{Set}$ with
$D^{\mathrm{op}}:\mathcal J^{\mathrm{op}}\to\mathcal M^{\mathrm{op}}$.

The natural transformation corresponding to the identity of $\{W,D\}$ is the
**counit cylinder** of the weighted limit, with components
$\kappa_j:W(j)\to\mathcal M(\{W,D\},Dj)$; dually for a weighted colimit. Neither
object need exist.

## Remarks

The variances are the ones that read correctly against the presheaf convention
in force in this library: a weight for a limit is covariant, matching the
covariant hom-functor $\mathcal M(m,D-)$, and a weight for a colimit is
contravariant, matching $\mathcal M(D-,m)$. Writing a colimit weight
covariantly would ask for a natural transformation between functors of opposite
variance, which is not a well-formed condition.

Nothing here mentions cones. A cone over $D$ is recovered by taking the weight
that is constantly a one-element set, and that this reproduces the ordinary
limit is a theorem rather than a convention:
[[thm-the-constant-singleton-weight-recovers-an-ordinary-limit]].
