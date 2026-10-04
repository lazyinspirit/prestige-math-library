---
id: rem-blowup-does-not-mean-delete-point
kind: remark
title: "Blowing up replaces the center by its projectivized normal directions"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-blowup-scheme-along-ideal
  - def-exceptional-divisor-blowup
  - thm-pullback-center-ideal-invertible
  - lem-blowup-isomorphism-off-center
  - thm-exceptional-divisor-normal-cone-proj
  - thm-blowup-projective
  - thm-blowup-regular-surface-closed-point-regular
  - def-strict-transform-closed-subscheme
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, June 27, 2011 draft (author-hosted 'Early (out-of-date) version of The Rising Sea')"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicnoindex.pdf"
      locator: "19.1-19.3 the philosophy of the blowup and the exceptional divisor, pp. 379-389"
    - title: "The Stacks Project, Divisors, Sections 31.33-31.36 (Blowing up; Strict transform; Admissible blowups; Blowing up and flatness)"
      url: "https://stacks.math.columbia.edu/tag/01OF"
      locator: "Lemma 31.33.4 and Lemma 31.33.9"
verification:
  precheck: n/a
---

## Remark

A blowup is not the deletion of the center. Let $\mathcal I$ be a
quasi-coherent ideal sheaf of finite type on a scheme $X$ with zero scheme
$Z=V(\mathcal I)$, and let
$\pi\colon\operatorname{Bl}_{\mathcal I}X\to X$ be the blowup of
[[def-blowup-scheme-along-ideal]], with exceptional subscheme
$E=\pi^{-1}(Z)$ ([[def-exceptional-divisor-blowup]]). Then:

- $\pi$ is proper over $X$ ([[thm-blowup-projective]]); no properness of
  the base over a field or global H-projective embedding is required;
- $\pi$ is an isomorphism over the open complement $X\smallsetminus Z$
  ([[lem-blowup-isomorphism-off-center]]). It can also be an isomorphism
  over the center: an effective Cartier center has identity blowup, as is
  seen on its single principal regular chart;
- the pullback ideal $\mathcal I\mathcal O_{\operatorname{Bl}}$ is invertible
  ([[thm-pullback-center-ideal-invertible]]), so after the blowup the center
  is an effective Cartier divisor and further blowups along it do nothing;
- the center is replaced, not deleted: $E$ is identified with the
  projectivized normal cone
  $\operatorname{Proj}_Z(\operatorname{gr}_{\mathcal I}\mathcal O_X)$
  ([[thm-exceptional-divisor-normal-cone-proj]]), so the points of $E$ lying
  over $z\in Z$ record the normal directions to $Z$ at $z$. For a closed point
  center on a regular finite-type surface of pure dimension two over a field
  this is a projective line over the residue
  field, $\mathbb P^1_{\kappa(p)}$, and the blowup stays a regular surface
  ([[thm-blowup-regular-surface-closed-point-regular]]).

Surjectivity is part of the same picture but carries a hypothesis. If the
center is empty ($\mathcal I=\mathcal O_X$) then $\pi$ is an isomorphism; if
$\mathcal I$ vanishes identically on an open set, then the blowup has empty
fibres over that set, so no unconditional surjectivity holds. In the
integral finite-type situations used on this page, a nonzero center ideal
has a nonempty dense complement. The proper image of the blowup is closed
and contains that complement, hence is all of $X$. Thus every fiber is
nonempty, including the projectivized normal-cone fibers over the center.

Finally, strict transforms record how subvarieties approach the center: a
closed subscheme $W\subseteq X$ has strict transform
([[def-strict-transform-closed-subscheme]]) cut out on the standard affine
charts by the saturation of the pullback of its ideal by a local equation of
the center, so parts supported entirely in the exceptional locus are removed. A
subscheme contained in the center has empty strict transform; a single
blowup need not separate all remaining branches.
