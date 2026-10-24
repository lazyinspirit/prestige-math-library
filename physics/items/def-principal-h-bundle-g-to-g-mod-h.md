---
id: def-principal-h-bundle-g-to-g-mod-h
kind: definition
title: The canonical principal-bundle candidate G to G/H
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-countable-choice, thm-quotient-manifold-by-a-closed-lie-subgroup, def-smooth-fibre-bundle-and-local-trivialization, def-principal-g-bundle-and-associated-fiber-bundle]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Homogeneous Space Construction Theorem 21.17, printed pages 551–552
---

## Definition

Assume $\mathrm{AC}_\omega$, let $H$ be a closed subgroup of a
finite-dimensional real Lie group $G$, and give $G/H$ the quotient manifold
structure of [[thm-quotient-manifold-by-a-closed-lie-subgroup]]. The map

$$q:G\to G/H,\qquad q(g)=gH,$$

together with the smooth right action

$$G\times H\to G,\qquad (g,h)\longmapsto g\cdot h=gh,$$

is the **canonical principal-$H$-bundle candidate over $G/H$**.

The action is free, and its orbits are precisely the fibres of $q$:
$gH=g'H$ exactly when $g'=gh$ for a unique $h\in H$. A smooth principal
trivialization over $U\subseteq G/H$ means a diffeomorphism over $U$

$$\Theta:q^{-1}(U)\longrightarrow U\times H$$

that is $H$-equivariant for
$(x,h)\cdot k=(x,hk)$. Thus, if $\Theta(g)=(q(g),h)$, then
$\Theta(gk)=(q(g),hk)$. This is the smooth version of the right-principal
convention in [[def-principal-g-bundle-and-associated-fiber-bundle]] and of
the local-trivialization convention in
[[def-smooth-fibre-bundle-and-local-trivialization]]. The next theorem proves
that such charts cover $G/H$; their existence is not built into this
definition. Countable choice is used only to supply the quotient manifold.
