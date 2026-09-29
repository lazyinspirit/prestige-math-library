---
id: def-etale-morphism-schemes
kind: definition
title: "Étale morphism of schemes"
status: draft
origin: pipeline
deps:
  - def-smooth-morphism-schemes
  - def-relative-dimension-smooth-morphism
  - def-locally-finite-presentation-morphism
  - def-flat-morphism-schemes
  - def-geometric-fibre
  - def-ag-geometrically-regular-algebra-and-fibre
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Sections 29.25-29.37"
      url: https://stacks.math.columbia.edu/download/morphisms.pdf
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022 public draft, Chapters 25-26"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
---

## Definition

Let $f:X\to S$ be a morphism of schemes and let $x\in X$; put $s=f(x)$.

The morphism $f$ is **étale at $x$** if it is smooth at $x$
([[def-smooth-morphism-schemes]]) and has relative dimension $0$ at $x$
([[def-relative-dimension-smooth-morphism]]). Spelling out the two definitions,
$f$ is étale at $x$ if and only if

1. $f$ is locally of finite presentation at $x$
   ([[def-locally-finite-presentation-morphism]]);
2. $f$ is flat at $x$ ([[def-flat-morphism-schemes]]);
3. for every field extension $K/\kappa(s)$ the base-changed fibre
   $X_{s,K}=X_s\times_{\operatorname{Spec}\kappa(s)}\operatorname{Spec}K$
   has a regular local ring
   ([[def-ag-geometrically-regular-algebra-and-fibre]]) at every point $y$
   lying over the image of $x$, with $\dim_yX_{s,K}=0$ at each such point.

The morphism $f$ is **étale** if it is étale at every point of $X$. Thus an
étale morphism is precisely a smooth morphism of pure relative dimension $0$;
the number $0$ in the condition is the well-defined relative dimension of a
smooth germ, so no additional choice is made and no separate well-definedness
clause is needed. A morphism with empty source is étale vacuously, and the
clause about points of a geometric fibre is vacuous for a fibre that is empty.

Étaleness is a condition on the germ of $f$ at $x$: shrinking the source to an
open neighbourhood of $x$ or the target to an open neighbourhood of $s$
replaces the geometric fibre of the morphism by an open part of the geometric
fibre of $f$ at $x$, and the local dimension at a point is unchanged by passing
to the open part, so the conditions are preserved in both directions. The
definition is not symmetric in $X$ and $S$ and gives no flatness or smoothness
of $\operatorname{Spec}$ of a field extension; only the geometric fibres are
constrained.

Relative dimension zero is the case of the definition in which the geometric
fibres have no positive-dimensional local pieces, and the standard reformulation
of étaleness as flatness together with unramifiedness (equivalently, the local
standard form, and the equivalent description by an invertible Jacobian
determinant with no free parameters) is proved later on this page; those
equivalences are not part of this definition. In particular a localisation
$S_g\to S$ and an open immersion are the basic examples, while the relative Frobenius of an affine line in positive characteristic
is a surjective finite flat map that fails to be étale because its geometric
fibres are nonreduced, as the examples page records. Degree greater than one
alone does not obstruct étaleness: the disjoint union of two copies of
$\operatorname{Spec}k$ over $\operatorname{Spec}k$ is étale of degree two,
since on each open component the morphism is the identity.
