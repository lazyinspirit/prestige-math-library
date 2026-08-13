---
id: rem-domain-hypotheses-for-closed-versus-exact
kind: remark
title: "Closedness is local, exactness is global, and a domain hypothesis cannot be omitted"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-exact-c1-vector-fields-are-closed, cor-closed-exact-and-conservative-equivalence-on-star-shaped-domains]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J.-B. Campesato, Poincare Lemma, sections 1 and 2"
      url: "https://www.math.toronto.edu/campesat/ens/1920/poincare.pdf"
pipeline_run: null
---

By [[thm-exact-c1-vector-fields-are-closed]], exact $C^1$ fields are closed on every open domain. The converse proved in [[cor-closed-exact-and-conservative-equivalence-on-star-shaped-domains]] requires a star-shaped open domain. A merely connected open domain is not enough: closedness is a local equality of partial derivatives, whereas exactness requires one potential valid throughout the domain.
