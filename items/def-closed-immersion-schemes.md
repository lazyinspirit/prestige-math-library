---
id: def-closed-immersion-schemes
kind: definition
title: "Closed immersions of schemes"
status: draft
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-morphism-of-schemes, def-ideal-sheaf]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Definition 2.1"
      url: "https://stacks.math.columbia.edu/tag/01IQ"
---
## Definition

A morphism $i:Z\to X$ is a **closed immersion** if its underlying map is a
homeomorphism onto a closed subset and the morphism
$\mathcal O_X\to i_*\mathcal O_Z$ is surjective.
