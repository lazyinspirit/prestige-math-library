---
id: def-flat-morphism-schemes
kind: definition
title: "Flat morphism of schemes"
status: published
origin: pipeline
deps:
  - def-scheme-over-base
  - def-flat-and-faithfully-flat-modules-and-ring-maps
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Definition 29.25.1"
      url: https://stacks.math.columbia.edu/download/morphisms.pdf
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022 public draft, Definition 25.1.1"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
---

## Definition

Let $f:X\to S$ be a morphism of schemes ([[def-scheme-over-base]]) and let
$x\in X$ with image $s=f(x)$. The morphism induces a homomorphism of local
rings
$$\mathcal O_{S,s}\longrightarrow\mathcal O_{X,x},$$
making $\mathcal O_{X,x}$ an $\mathcal O_{S,s}$-module
([[def-flat-and-faithfully-flat-modules-and-ring-maps]]).

The morphism $f$ is **flat at $x$** if $\mathcal O_{X,x}$ is a flat
$\mathcal O_{S,s}$-module for this module structure, and $f$ is **flat** if it
is flat at every point of $X$. A morphism with empty source is flat vacuously,
and a morphism whose target is empty has empty source and is flat.

Flatness at $x$ is a condition on the local ring map alone, so a flat morphism
is flat at every point of every open subscheme through which it factors, and
restricting $f$ to an open subscheme of the source preserves flatness. The
affine-local reformulation in terms of an algebra map $A\to B$ is proved
separately on this page and is not assumed here.
