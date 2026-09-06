---
id: def-nonreduced-infinitesimal-thickening-affine
kind: definition
title: "An affine nilpotent thickening"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-affine-scheme, def-morphism-affine-schemes-from-ring-map, cor-prime-spectrum-insensitive-to-nilpotents, def-nilradical-and-reduced-ring, thm-prime-spectrum-of-a-quotient-bijection]
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Section 26.5"
      url: "https://stacks.math.columbia.edu/tag/01HR"
    - title: "The Stacks Project, Section 10.17"
      url: "https://stacks.math.columbia.edu/tag/00DY"
---
## Definition

If $I\subseteq A$ is nilpotent, the quotient map gives the **affine nilpotent
thickening** $\operatorname{Spec}(A/I)\to\operatorname{Spec}A$. It is a
homeomorphism on underlying spaces, but need not be an isomorphism of schemes:
the quotient may remove nonzero nilpotent sections.
