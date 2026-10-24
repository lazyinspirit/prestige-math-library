---
id: def-left-maurer-cartan-form
kind: definition
title: Left Maurer--Cartan form
status: published
origin: pipeline
deps: ["def-countable-choice", "def-lie-group", "def-vector-bundle-map-over-a-smooth-base-map", "prop-translations-are-diffeomorphisms-and-their-differentials-trivialize-the-tangent-bundle"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Robert L. Bryant, An Introduction to Lie Groups and Symplectic Geometry
      url: https://math.duke.edu/~bryant/ParkCityLectures.pdf
      locator: Lecture 2, Definition 9 and the following smoothness assertion, printed page 27
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

Assume $\mathrm{AC}_\omega$ as in [[def-countable-choice]], let $G$ be a Lie
group [[def-lie-group]] with identity $e$, and write $\mathfrak g=T_eG$. A
**$\mathfrak g$-valued one-form** on $G$ means a
smooth map $\alpha:TG\to\mathfrak g$ whose restriction
$\alpha_g:T_gG\to\mathfrak g$ is linear for every $g$. Equivalently,
$V\mapsto(\pi_G(V),\alpha(V))$ is a smooth vector-bundle map
$TG\to G\times\mathfrak g$ over $\operatorname{id}_G$ in the sense of
[[def-vector-bundle-map-over-a-smooth-base-map]].

The **left Maurer--Cartan form** is the $\mathfrak g$-valued one-form
$\theta:TG\to\mathfrak g$ whose fibre map at $g$ is

$$\theta_g=d(L_{g^{-1}})_g:T_gG\longrightarrow T_eG=\mathfrak g.$$

This formula is well-defined because left translation by $g^{-1}$ sends $g$
to $e$. It is smooth and fibrewise linear because
[[prop-translations-are-diffeomorphisms-and-their-differentials-trivialize-the-tangent-bundle]]
identifies

$$TG\longrightarrow G\times\mathfrak g,\qquad V_g\longmapsto(g,\theta_gV_g)$$

as the inverse vector-bundle isomorphism to left trivialization. In
particular, $\theta_e=d(L_e)_e=\operatorname{id}_{\mathfrak g}$.

The stated $\mathrm{AC}_\omega$ is used exactly through that supplied smooth
left-trivialization theorem; the pointwise formula and passage to its second
component add no choice. A Lie group is nonempty. When $\dim G=0$, $\theta$
is the unique map between zero tangent fibres, and the definition is unchanged
in dimension one. Lie groups are boundaryless by convention, and no metric,
nondegeneracy, endpoint, or biconditional occurs.
