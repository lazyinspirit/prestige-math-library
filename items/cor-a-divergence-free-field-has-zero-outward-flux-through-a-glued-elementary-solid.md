---
id: cor-a-divergence-free-field-has-zero-outward-flux-through-a-glued-elementary-solid
kind: corollary
title: "A field with vanishing divergence has zero outward flux through the boundary of a glued elementary solid"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-the-divergence-theorem-for-finite-gluings-of-elementary-solid-regions, def-divergence-and-curl-of-a-c1-vector-field, thm-multidimensional-integral-properties, def-riemann-integral-over-a-jordan-set, lem-internal-faces-cancel-when-elementary-solid-regions-are-glued]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "G. Strang and E. Herman, Calculus Volume 3 (OpenStax), section 6.8"
      url: "https://openstax.org/books/calculus-volume-3/pages/6-8-the-divergence-theorem"
pipeline_run: null
---

## Statement

Let a finite gluing of elementary solid regions be given, with union $E$ and outer boundary presentation $\Sigma^{\mathrm{out}}$, and let $F$ be a $C^1$ vector field on an open set $O$ containing $E$. If the divergence vanishes on an open set containing the solid then the outward boundary flux is zero: if $\operatorname{div}F=0$ at every point of $O$, then

$$\iint_{\partial E}\langle F,n\rangle=0.$$

The hypothesis is that $F$ is $C^1$ with vanishing divergence on an open set containing the whole of $E$, not merely on $\partial E$ and not merely wherever $F$ happens to be defined.

## Facts & Assumptions

**Given:** The finite gluing with union $E$ and outer presentation $\Sigma^{\mathrm{out}}$, the open set $O\supseteq E$, and the $C^1$ field $F$ on $O$ with $\operatorname{div}F=0$ throughout $O$.

[F1] The divergence of a $C^1$ field is $\operatorname{div}G=\sum_{i<n}\partial_iG_i$ ([[def-divergence-and-curl-of-a-c1-vector-field]]).

[F2] Integration over a bounded Jordan measurable set is integration of the zero extension over a bounding rectangle ([[def-riemann-integral-over-a-jordan-set]]).

[L1] For a finite gluing with union $E$ and outer presentation $\Sigma^{\mathrm{out}}$ and a $C^1$ field $G$ on an open set containing $E$, $\iiint_E\operatorname{div}G=\iint_{\partial E}\langle G,n\rangle$ ([[thm-the-divergence-theorem-for-finite-gluings-of-elementary-solid-regions]]).

[L2] For a finite gluing, $E$ is compact and Jordan measurable ([[lem-internal-faces-cancel-when-elementary-solid-regions-are-glued]]).

[L3] For integrable $f,g$ on a nondegenerate rectangle and scalars $\alpha,\beta$, the function $\alpha f+\beta g$ is integrable with integral $\alpha\int f+\beta\int g$ ([[thm-multidimensional-integral-properties]]).

## Proof

**Proof technique:** direct.

1.1 By [L2] the set $E$ is compact and Jordan measurable, and by hypothesis and [F1] the function $\operatorname{div}F$ is identically zero on $E$. Its zero extension to a bounding rectangle is the zero function, which by [L3] with $\alpha=\beta=0$ is integrable with integral $0$; so $\int_E\operatorname{div}F=0$ by [F2]. [given, F1, F2, L2, L3]

2.1 The field $F$ is $C^1$ on the open $O\supseteq E$, so [L1] applies and gives $\iint_{\partial E}\langle F,n\rangle=\iiint_E\operatorname{div}F$, which is $0$ by step 1.1. [step 1.1, L1] ∎

## Remarks

- **The hypothesis is about an open set containing $E$, and that is exactly what fails in the standard counterexample.** The inverse-square field has vanishing divergence at every point where it is defined, yet its outward flux through the unit sphere is $4\pi$; the field is not defined at the origin, so no open set containing the closed unit ball carries it. The companion examples page states the false weakening and carries the computation.
