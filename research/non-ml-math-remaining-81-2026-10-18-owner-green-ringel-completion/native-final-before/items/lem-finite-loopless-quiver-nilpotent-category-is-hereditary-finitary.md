---
id: lem-finite-loopless-quiver-nilpotent-category-is-hereditary-finitary
kind: lemma
title: "Finite loopless quiver nilpotent representation categories are hereditary and finitary"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - lem-finite-acyclic-quiver-hall-category-is-hereditary-finitary
  - def-finite-field-hereditary-hall-category
  - lem-yext-exact-sequences-in-both-variables
  - def-hall-finitary-abelian-category
  - def-grothendieck-group-of-an-essentially-small-abelian-category
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, arXiv:math/0611617v2"
      url: "https://arxiv.org/pdf/math/0611617v2"
      locator: "§3.1, PDF pp. 32–34: nilpotent representations of a finite loopless quiver, simple objects, K_0 and the hereditary claim."
    - title: "Claus Michael Ringel, The Hall Algebra Approach to Quantum Groups, E.L.A.M. Lectures (1993)"
      url: "https://www.math.uni-bielefeld.de/~ringel/opus/elam.pdf"
      locator: "§§2–4: quiver representation Hall categories and their hereditary structure."
---

## Statement

Let $Q$ be a finite loopless quiver over $\mathbb F_q$. If $Q$ has oriented
cycles, take the abelian category of finite-dimensional nilpotent
representations; if $Q$ is acyclic, take all finite-dimensional
representations. This category is a small finite-field hereditary Hall
category. Its simple objects are $S_i$, $K_0\cong\mathbb Z^{Q_0}$ by dimension
vector, and $\dim_{\mathbb F_q}\operatorname{YExt}^1(S_i,S_j)=c_{ij}$ for
arrows $i\to j$.

## Unresolved proof obligation

The acyclic case, including the path resolution proving
$\operatorname{YExt}^2=0$, is proved in
[[lem-finite-acyclic-quiver-hall-category-is-hereditary-finitary]]. For a
quiver with oriented cycles, the nilpotent subcategory is closed under
subobjects, quotients and extensions, but the ordinary path-algebra
projectives are generally infinite-dimensional and are not objects of this
category. A complete proof that its Yoneda $\operatorname{Ext}^2$ vanishes
requires an additional Serre-subcategory/Yoneda-equivalence argument or a
direct nilpotent-category construction. The statement is retained for the
cyclic case and is escalated; no proof or readiness is claimed there.
