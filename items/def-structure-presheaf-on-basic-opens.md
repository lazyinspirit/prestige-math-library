---
id: def-structure-presheaf-on-basic-opens
kind: definition
title: "The localization presheaf on distinguished opens"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-affine-scheme-spectrum, def-principal-distinguished-subset-of-spectrum, def-multiplicative-subset-and-localisation, thm-universal-property-of-localisation]
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
---
## Definition

For $X=\operatorname{Spec}A$, assign $\widetilde A(D(f))=A_f$. If
$D(g)\subseteq D(f)$, the restriction is the unique homomorphism $A_f\to A_g$
extending $A\to A_g$; it exists because $f$ is invertible in $A_g$. The next
lemma proves that this assignment is independent of the displayed generator.
