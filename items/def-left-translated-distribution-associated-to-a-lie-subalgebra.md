---
id: def-left-translated-distribution-associated-to-a-lie-subalgebra
kind: definition
title: The left-translated distribution associated to a Lie subalgebra
status: draft
origin: pipeline
deps: [def-countable-choice, def-lie-subalgebra-and-ideal, prop-translations-are-diffeomorphisms-and-their-differentials-trivialize-the-tangent-bundle, def-smooth-distribution-on-a-manifold]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Equation (19.7) and Lemma 19.24, printed page 506
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

Assume $\mathrm{AC}_\omega$ in the sense of [[def-countable-choice]]. Let $G$ be a Lie group with Lie algebra
$\mathfrak g=T_eG$, and let $\mathfrak h\subseteq\mathfrak g$ be a Lie
subalgebra. Its **left-translated distribution** is

$$\mathcal D^{\mathfrak h}_g=d(L_g)_e(\mathfrak h)\subseteq T_gG.$$

Under the smooth left trivialization
$G\times\mathfrak g\to TG$, $(g,X)\mapsto d(L_g)_eX$, this is the product
subbundle $G\times\mathfrak h$. Thus it is a smooth constant-rank
distribution of rank $\dim\mathfrak h$, including the cases
$\mathfrak h=0$ and $\mathfrak h=\mathfrak g$. It is left invariant because
$d(L_a)_g\mathcal D_g^{\mathfrak h}=\mathcal D_{ag}^{\mathfrak h}$.

The countable-choice assumption is inherited from the supplied smooth
tangent-bundle trivialization; no additional choice is made in forming the
displayed image of the supplied subspace.
