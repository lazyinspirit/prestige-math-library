---
id: def-faithfully-flat-morphism-schemes
kind: definition
title: "Faithfully flat scheme morphism"
status: published
origin: pipeline
deps:
  - def-flat-morphism-schemes
  - def-fpqc-morphism-schemes
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Sections 29.25 and 29.34-29.36"
      url: https://stacks.math.columbia.edu/download/morphisms.pdf
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022 public draft, Chapters 25-26"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
verification:
  audited: 2026-09-30
---

## Definition

Let $f:X\to S$ be a morphism of schemes ([[def-scheme-over-base]]). Its
underlying map of topological spaces is $|f|:X\to S$, and $f$ is **flat** when
it is flat at every point of $X$ ([[def-flat-morphism-schemes]]).

The morphism $f$ is **faithfully flat** if it is flat and the underlying map
$|f|$ is surjective. It is an **fpqc morphism** if it is faithfully flat and
quasi-compact; this is the single-morphism form of the fpqc covering convention
of [[def-fpqc-morphism-schemes]], and the two descriptions agree there.

Faithful flatness is therefore flatness plus a single topological condition.
It is local on the target: a morphism is faithfully flat exactly when its
restriction to the members of an open cover of the target is, since flatness is
stalkwise and surjectivity is local on the target. A faithfully flat morphism
is surjective by definition, so a morphism to a nonempty target has nonempty
source; dually, the empty morphism $\varnothing\to S$ is faithfully flat exactly
when $S=\varnothing$. The identity and every open covering morphism with
surjective underlying map are faithfully flat, and the empty-source case
imposes no pointwise flatness condition, exactly as for flatness.
