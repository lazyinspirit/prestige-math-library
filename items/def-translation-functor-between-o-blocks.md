---
id: def-translation-functor-between-o-blocks
kind: definition
title: "Translation functors by tensoring and projection"
status: published
origin: pipeline
deps:
  - cor-central-characters-are-dot-weyl-orbits
  - def-axiom-of-choice
  - def-dot-action-facets-and-single-wall-translation-data
  - def-weight-and-weight-space-of-a-lie-algebra-representation
  - lem-finite-weyl-closed-chambers-and-stabilizers
  - prop-highest-weight-of-the-dual-representation
  - prop-tensoring-with-a-finite-dimensional-module-preserves-category-o
  - thm-category-o-decomposes-by-generalized-central-character
  - thm-central-character-summands-split-into-linkage-blocks
  - thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Lin Chen, lecture notes (Spring 2024), Lecture 9, Constructions 3.6 and 3.7"
      url: https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf
      locator: "§3, Constructions 3.6 and 3.7, printed p. 5 (full text read at harvest)"
    - title: "Dennis Gaitsgory, Geometric Representation Theory (Fall 2005), Sec. 4.23"
      url: https://people.mpim-bonn.mpg.de/gaitsgde/267y/catO.pdf
      locator: "§4.23, definition of the translation functor T_{chi1,V,chi2} as inclusion, tensor by V and projection, printed p. 24 (full text read at harvest)"
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Work in category
$\mathcal O$ with the conventions of the preceding definitions. For a weight
$\lambda$ write $\chi_\lambda$ for the generalized central character obtained
from $\lambda$, so that $\chi_\lambda=\chi_\mu$ if and only if
$\mu\in W\mathbin\cdot\lambda$
([[cor-central-characters-are-dot-weyl-orbits]]), and let
$\mathcal O=\bigoplus_\chi\mathcal O_\chi$ be the central-character
decomposition of [[thm-category-o-decomposes-by-generalized-central-character]]
with inclusions $\operatorname{incl}_\chi$ and exact projections
$\operatorname{pr}_\chi$, so that
$\operatorname{pr}_\chi\circ\operatorname{incl}_\chi=\operatorname{id}$.

For a finite-dimensional $\mathfrak h$-semisimple $\mathfrak g$-module $E$
([[def-weight-and-weight-space-of-a-lie-algebra-representation]]) and two
generalized central characters $\chi,\chi'$, set
$$T_{\chi,E,\chi'}:=\operatorname{pr}_{\chi'}\circ(E\otimes-)\circ\operatorname{incl}_\chi\colon\mathcal O_\chi\longrightarrow\mathcal O_{\chi'}.$$
This is well defined because $E\otimes-$ is an exact endofunctor of
$\mathcal O$
([[prop-tensoring-with-a-finite-dimensional-module-preserves-category-o]])
and the projections and inclusions are exact.

For weights $\lambda,\mu$ with $\mu-\lambda$ integral
([[def-dot-action-facets-and-single-wall-translation-data]]), let $\nu$ be the
unique dominant weight in the linear Weyl orbit $W(\mu-\lambda)$, which exists
and is unique by [[lem-finite-weyl-closed-chambers-and-stabilizers]] and is
integral; let $L(\nu)$ be the finite-dimensional simple module of highest
weight $\nu$
([[thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights]]).
Define
$$T_\lambda^\mu:=T_{\chi_\lambda,L(\nu),\chi_\mu}\colon\mathcal O_{\chi_\lambda}\longrightarrow\mathcal O_{\chi_\mu},\qquad T_\mu^\lambda:=T_{\chi_\mu,L(\nu)^*,\chi_\lambda}\colon\mathcal O_{\chi_\mu}\longrightarrow\mathcal O_{\chi_\lambda},$$
where $L(\nu)^*$ is the ordinary linear dual, a finite-dimensional
$\mathfrak h$-semisimple simple module isomorphic to $L(-w_0\nu)$ by
[[prop-highest-weight-of-the-dual-representation]].

The labels $\lambda$ and $\mu$ denote actual weights and not $\rho$-shifted
parameters. The central-character subcategories used here are those of the
published decomposition; a central-character summand can contain several
linkage blocks of
[[thm-central-character-summands-split-into-linkage-blocks]], while for an
indecomposable central-character summand the present functors are translation
between that summand and its target.
