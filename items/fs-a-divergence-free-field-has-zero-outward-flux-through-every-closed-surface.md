---
id: fs-a-divergence-free-field-has-zero-outward-flux-through-every-closed-surface
kind: false-statement
title: "FALSE: a field with vanishing divergence has zero outward flux through the boundary of every solid it surrounds"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [ex-flux-of-the-inverse-square-field-through-a-sphere-centred-at-the-origin, ex-flux-of-the-inverse-square-field-through-a-sphere-not-enclosing-the-origin, cor-a-divergence-free-field-has-zero-outward-flux-through-a-glued-elementary-solid, def-divergence-and-curl-of-a-c1-vector-field, def-oriented-unit-normal-and-flux-of-a-surface-patch, def-finitely-patched-regular-surface-and-integrals]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Feldman, A. Rechnitzer and E. Yeager, CLP-4 Vector Calculus, Warning 4.3.3"
      url: "https://personal.math.ubc.ca/~CLP/CLP4/clp_4_vc/clp_4_vc.html"
    - title: "G. Strang and E. Herman, Calculus Volume 3, Theorem 6.21"
      url: "https://openstax.org/books/calculus-volume-3/pages/6-8-the-divergence-theorem"
pipeline_run: null
---

## Statement

**False claim:** if a vector field has vanishing divergence wherever it is defined, then its outward flux through the boundary of every solid it surrounds is zero.

The claim looks like the divergence-free corollary on the A page, but it quietly weakens the hypothesis. The proved corollary requires the field to be $C^1$ on an open set containing the whole solid, not merely away from a singularity inside it.

## Facts & Assumptions

**Given:** The inverse-square field $F(x,y,z)=(x,y,z)/(x^2+y^2+z^2)^{3/2}$ on $\mathbb R^3\setminus\{0\}$.

[L1] The outward flux of this field through the sphere of radius $R$ centred at the origin is $4\pi$ ([[ex-flux-of-the-inverse-square-field-through-a-sphere-centred-at-the-origin]]).

[L2] The divergence of this field is zero at every point where it is defined ([[ex-flux-of-the-inverse-square-field-through-a-sphere-not-enclosing-the-origin]]).

[L3] If a finite gluing of elementary solid regions is given and a $C^1$ field on an open set containing its union has vanishing divergence, then its outward boundary flux is zero ([[cor-a-divergence-free-field-has-zero-outward-flux-through-a-glued-elementary-solid]]).

[F1] The divergence of a $C^1$ field on an open subset of $\mathbb R^3$ is the sum of its coordinate partial derivatives ([[def-divergence-and-curl-of-a-c1-vector-field]]).

[F2] Flux is computed against the oriented area vector of a patch ([[def-oriented-unit-normal-and-flux-of-a-surface-patch]]).

[F3] For a finite patch presentation, total flux is the sum of the patch fluxes ([[def-finitely-patched-regular-surface-and-integrals]]).

## Refutation

**Proof technique:** direct.

1.1 By [L2] and [F1], the witness field has vanishing divergence at every point where it is defined. [given, L2, F1]

1.2 By [L1], its outward flux through any sphere centred at the origin is $4\pi$, so in particular it is not zero. [L1, F2, F3]

2.1 Steps 1.1 and 1.2 contradict the claim, so the claim is false. [step 1.1, step 1.2]

3.1 What fails is not the divergence theorem or the corollary [L3], but the weakened hypothesis: the field is not $C^1$ on any open set containing the solid bounded by a sphere centred at the origin. [step 2.1, L3, F1]

4.1 The same field on a sphere whose enclosed ball misses the origin does satisfy the corollary and has zero flux there, exactly as [[ex-flux-of-the-inverse-square-field-through-a-sphere-not-enclosing-the-origin]] records. [step 3.1, L2, L3] ∎

## Remarks

- The example separates two different statements that are often conflated: vanishing divergence on the punctured domain, and the existence of an open neighbourhood of the solid on which the field is $C^1$.
