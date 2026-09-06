---
id: def-locally-finite-presentation-morphism
kind: definition
title: "Locally finite presentation morphisms"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-morphism-of-schemes, def-affine-open-subscheme]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Definition 22.1"
      url: "https://stacks.math.columbia.edu/tag/01TY"
---
## Definition

A morphism $f:X\to S$ is **locally of finite presentation** if it admits
affine charts as in the locally finite-type definition for which
$A\to B$ is a finitely presented $A$-algebra. This is stronger than locally
finite type over a non-Noetherian base.
