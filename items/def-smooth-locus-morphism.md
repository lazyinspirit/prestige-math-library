---
id: def-smooth-locus-morphism
kind: definition
title: "The smooth locus of a morphism"
status: draft
origin: pipeline
deps:
  - def-smooth-morphism-schemes
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

Let $f:X\to S$ be a morphism locally of finite presentation
([[def-locally-finite-presentation-morphism]]). The **smooth locus** of $f$ is
$$\operatorname{Sm}(f)=\{x\in X:\text{the morphism }f\text{ is smooth at }x\}\subseteq X,$$
the set of points at which the three pointwise conditions of
[[def-smooth-morphism-schemes]] hold. It is a subset of $X$ with no scheme
structure imposed; smoothness at a point is a condition on the germ of $f$
there, so membership of $x$ depends only on an arbitrarily small open
neighbourhood of $x$ and of $f(x)$. The morphism $f$ is smooth exactly when
$\operatorname{Sm}(f)=X$, and $\operatorname{Sm}(f)$ meets no fibre of $f$ in
the empty-set case trivially: $X$ empty gives $\operatorname{Sm}(f)=\varnothing$.

The locus is defined for the locally finitely presented maps to which the
pointwise definition applies; for $f=\operatorname{id}_X$ it is all of $X$,
and for an open immersion it is all of the source. The openness of
$\operatorname{Sm}(f)$ is proved on this page and is not assumed here.
