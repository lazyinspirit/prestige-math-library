---
id: rem-topological-versus-scheme-theoretic-subspace
kind: remark
title: "A support does not determine its scheme structure"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-closed-immersion-schemes, def-reduction-of-scheme, def-scheme-theoretic-image]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Section 2"
      url: "https://stacks.math.columbia.edu/tag/01IQ"
---
A closed subset of $|X|$ does not by itself specify a closed subscheme. Its
scheme structure also records the quotient of $\mathcal O_X$, including
nilpotents. The reduction retains only the reduced structure on the same
support, while a scheme-theoretic image may retain a different closed
structure.
