---
id: def-smooth-morphism-classical
kind: definition
title: "Smooth morphisms via local standard smooth presentations"
status: published
origin: pipeline
deps:
  - def-ag-standard-smooth-algebra
  - thm-ag-standard-smooth-geometric-regularity
  - def-axiom-of-choice
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
  scraped: []
  references:
    - title: "Stacks Project, Algebra, Lemma 10.137.16 (tag 00TF)"
      url: "https://stacks.math.columbia.edu/tag/00TF"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, Classes 51–52, §§1.2, 1.9, 2.12"
      url: "https://virtualmath1.stanford.edu/~vakil/0506-216/216class5152.pdf"
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a field and
$f:X\to Y$ a morphism of finite-type $k$-schemes. The morphism $f$ is
**smooth** if every point $x\in X$ has affine neighborhoods
$x\in V=\operatorname{Spec}B$ and $f(x)\in U=\operatorname{Spec}A$, with
$f(V)\subseteq U$, for which the induced map $A\to B$ is standard smooth at
the prime corresponding to $x$ ([[def-ag-standard-smooth-algebra]]). Thus the
condition is imposed at every source point, including nonclosed points; it is
local on the source and target. In this condition, standard smoothness at a
prime means that after a further principal shrinking around that prime the
ring map has a standard smooth presentation.

The pointwise and global equivalences in
[[thm-ag-standard-smooth-geometric-regularity]] identify standard smoothness
for finite-presentation affine charts with flatness and geometrically regular
scheme-theoretic fibres. Applied after the local shrinkings above, this gives
the corresponding local criterion for $f$. The local-presentation clause
itself is choice-free; AC is assumed here for that proved equivalence, through
the cited theorem.
