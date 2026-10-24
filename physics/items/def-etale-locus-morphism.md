---
id: def-etale-locus-morphism
kind: definition
title: "The étale locus of a morphism"
status: published
origin: pipeline
deps:
  - def-etale-morphism-schemes
  - def-smooth-morphism-schemes
  - def-locally-finite-presentation-morphism
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Sections 29.25-29.37"
      url: https://stacks.math.columbia.edu/download/morphisms.pdf
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022 public draft, Chapters 25-26"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
verification:
  audited: 2026-09-30
---

## Definition

Let $f:X\to S$ be a morphism locally of finite presentation
([[def-locally-finite-presentation-morphism]]). The **étale locus** of $f$ is
$$\operatorname{Et}(f)=\{x\in X:\text{the morphism }f\text{ is étale at }x\}\subseteq X,$$
the set of points at which the conditions of [[def-etale-morphism-schemes]]
hold.

The locus is a subset of $X$ and carries no scheme structure of its own.
Étaleness at $x$ is a condition on the germ of $f$ at $x$, so membership of $x$
depends only on arbitrarily small open neighbourhoods of $x$ and of $f(x)$;
in particular $\operatorname{Et}(f)$ meets an open subscheme $U\subseteq X$ in
$\operatorname{Et}(f|_U)$ for the restricted morphism. Since étale at a point
means smooth at that point, $\operatorname{Et}(f)\subseteq\operatorname{Sm}(f)$
is contained in the smooth locus of [[def-smooth-locus-morphism]], and $f$ is
étale exactly when $\operatorname{Et}(f)=X$, equivalently when
$\operatorname{Sm}(f)=X$ and the relative dimension of $f$ is zero at every
point. If $X=\varnothing$ then $\operatorname{Et}(f)=\varnothing$. The openness
of $\operatorname{Et}(f)$ for $f$ locally of finite presentation is proved
later on this page and is not assumed here.
