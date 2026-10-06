---
id: rem-von-neumanns-hilbert-space-proof-of-radon-nikodym
kind: remark
title: "Von Neumann's Hilbert-space proof of Radon-Nikodym is shorter but depends on L^2 Riesz representation"
status: published
origin: session
proved_here: false
provenance:
  statement: literature-derived
  proof: not-supplied
deps: [thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]
verification:
  sources_checked: 2026-08-31
  precheck: n/a
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, 9.36"
      url: "https://measure.axler.net/MIRA.pdf"
external_dependency:
  source_url: "https://measure.axler.net/MIRA.pdf"
  exact_statement: "A standard Hilbert-space proof derives Radon-Nikodym by turning the measure into a bounded linear functional on a suitable L^2 space and then applying the Riesz representation theorem."
  local_proof_attempt: "This page intentionally does not import the L^2 Riesz representation theorem or Hilbert-space duality."
  necessity: "The design explicitly keeps MT-13 on the measure-theoretic maximal-class proof route and records the Hilbert-space proof only as orientation."
---

Von Neumann's proof is shorter once the Hilbert-space setup is available: one
packages the measure as a bounded linear functional on a suitable $L^2$ space
and then applies the Riesz representation theorem to obtain the density. This
track does not yet own that Hilbert-space duality machinery, which is why the
page proves Radon-Nikodym by the measure-theoretic maximal-class argument
instead.
