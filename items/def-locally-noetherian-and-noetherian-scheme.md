---
id: def-locally-noetherian-and-noetherian-scheme
kind: definition
title: "Locally Noetherian and Noetherian schemes"
status: draft
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-scheme, def-affine-open-subscheme, def-noetherian-ring-and-module]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, Section 6.3"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf"
---
## Definition

A scheme is **locally Noetherian** if it has an affine open cover by spectra of
Noetherian rings. It is **Noetherian** if it is locally Noetherian and
quasi-compact; equivalently, it has a finite affine open cover by spectra of
Noetherian rings.
