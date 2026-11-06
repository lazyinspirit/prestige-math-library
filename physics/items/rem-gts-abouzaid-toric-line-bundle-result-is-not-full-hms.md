---
id: rem-gts-abouzaid-toric-line-bundle-result-is-not-full-hms
kind: remark
title: Abouzaid’s toric line-bundle theorem is a partial result
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
page: gts-hms-landau-ginzburg-categories-examples
dependency_level: 0
deps: []
dependency_roles: {}
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Mohammed Abouzaid, Morse Homology, Tropical Geometry, and Homological Mirror Symmetry for Toric Varieties
      url: https://arxiv.org/pdf/math/0610004v4
      locator: Theorem 1.2, Proposition 1.3, Corollary 1.4 and Remark 1.5, printed pp. 5–6
    - title: Denis Auroux, Mirror Symmetry, Lecture 1
      url: https://people.math.harvard.edu/~auroux/18.969-S09/mirrorsymm-lect1.pdf
      locator: complete lecture notes, broad HMS conjecture and distinction between examples and the general statement
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Remark

For the generic source Laurent potential and selected section data of Theorem 1.2, Abouzaid identifies a full sub-pre-category of the relative Fukaya pre-category with the dg category of line bundles on a smooth projective toric variety. The source then uses a separate generation result for coherent sheaves by line bundles to obtain an embedding of $D^b\operatorname{Coh}(X)$ into a derived Fukaya category. It does not prove essential surjectivity onto the whole Fukaya category and therefore is not full HMS. This boundary matters especially outside the Fano case: the source notes that other bounded components of the complement of the tropical amoeba can contribute sections with no corresponding coherent-derived object. The theorem must retain its line-bundle and selected-section scope.

