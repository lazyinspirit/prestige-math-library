---
id: def-pullback-module-ringed-spaces
kind: definition
title: "Pullback of a module along a morphism of ringed spaces"
status: draft
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-inverse-image-presheaf-and-sheaf, def-presheaf-of-groups-rings-modules, thm-inverse-direct-image-adjunction, def-module-on-ringed-space, def-morphism-ringed-spaces, def-sheaf-tensor-product]
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Definition 6.26.1"
      url: "https://stacks.math.columbia.edu/tag/0094"
    - title: "Ravi Vakil, The Rising Sea, Section 2.7 and Chapter 6"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGnov1817public.pdf"
---

## Definition

Let
$$
(f,f^\sharp):(X,\mathcal O_X)\longrightarrow(Y,\mathcal O_Y)
$$
be a morphism of ringed spaces, and let $\mathcal G$ be an
$\mathcal O_Y$-module. The **pullback** of $\mathcal G$ along $f$ is the
$\mathcal O_X$-module
$$f^*\mathcal G := \mathcal O_X\otimes_{f^{-1}\mathcal O_Y}f^{-1}\mathcal G.$$

Here the ring map
$$
f^{-1}\mathcal O_Y\longrightarrow \mathcal O_X
$$
is the morphism corresponding to $f^\sharp$ under the inverse/direct-image
adjunction [[thm-inverse-direct-image-adjunction]]. The inverse-image
construction is taken with its algebraic structure: applying the
neighbourhood-colimit construction to the restriction-compatible ring
operations of $\mathcal O_Y$, and then sheafifying, makes
$f^{-1}\mathcal O_Y$ a sheaf of rings. The same construction makes
$f^{-1}\mathcal G$ an $f^{-1}\mathcal O_Y$-module
([[def-presheaf-of-groups-rings-modules]]).

Consequently $\mathcal O_X$ is an $f^{-1}\mathcal O_Y$-algebra, the displayed
sheaf tensor product is well typed, and it carries the asserted
$\mathcal O_X$-module structure.
