---
id: def-smooth-morphism-schemes
kind: definition
title: "Smooth morphism of schemes"
status: published
origin: pipeline
deps:
  - def-flat-morphism-schemes
  - def-locally-finite-presentation-morphism
  - def-geometric-fibre
  - def-ag-geometrically-regular-algebra-and-fibre
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Sections 29.25 and 29.34-29.36"
      url: https://stacks.math.columbia.edu/download/morphisms.pdf
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022 public draft, Chapters 25-26"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
---

## Definition

Let $f:X\to S$ be a morphism of schemes, let $x\in X$ and put $s=f(x)$.
The morphism $f$ is **smooth at $x$** when the following three conditions hold
at $x$:

1. $f$ is locally of finite presentation at $x$
   ([[def-locally-finite-presentation-morphism]]);
2. $f$ is flat at $x$ ([[def-flat-morphism-schemes]]);
3. the scheme-theoretic fibre $X_s$ ([[def-geometric-fibre]]) is
   geometrically regular at $x$, that is, for every field extension
   $K/\kappa(s)$ the local ring of $X_s\times_{\operatorname{Spec}\kappa(s)}
   \operatorname{Spec}K$ at every point over $x$ is regular
   ([[def-ag-geometrically-regular-algebra-and-fibre]]).

The morphism $f$ is **smooth** if it is smooth at every point of $X$. A
morphism with empty source is smooth vacuously, and no condition is imposed
by an empty fibre: the pointwise clause of the definition is quantified over
primes of the fibre, of which there are none.

Smoothness is a condition on the germ of $f$ at $x$, so it is preserved by
restricting the source to an open neighbourhood of $x$ and by shrinking the
target to an open neighbourhood of $s$; affine-locally it becomes a condition
on a finitely presented ring map at a prime, and the equivalence with the
formal lifting and Jacobian formulations is proved on this page, not assumed
here. Relative dimension is defined separately, and in relative dimension
zero smoothness is equivalent to étaleness later on this page.
