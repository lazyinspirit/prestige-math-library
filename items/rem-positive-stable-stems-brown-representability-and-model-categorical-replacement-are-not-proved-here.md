---
id: rem-positive-stable-stems-brown-representability-and-model-categorical-replacement-are-not-proved-here
kind: remark
title: Scope boundary for stable homotopy theory
status: draft
origin: pipeline
deps: ["prop-the-sphere-prespectrum-homotopy-groups-are-the-stable-stems", "prop-a-ring-prespectrum-gives-a-graded-product-on-stable-homotopy-groups", "prop-maps-of-prespectra-induce-functorial-maps-on-stable-homotopy-groups"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: J. P. May, A Concise Course in Algebraic Topology
      url: https://web.archive.org/web/20220823180711if_/http://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: Chapter 22, Section 2, printed page 179; Chapter 25, Sections 6--7, printed pages 231--234
---

## Remark

This page proves no value of a positive stable stem. It also does not prove
Brown representability, a stable model structure, a fibrant or cofibrant
replacement theorem, localization at stable weak equivalences, or the
existence of a stable homotopy category.

Here **stable weak equivalence** means only the definition already given for a
strict map: isomorphism on $\pi_k$ for every $k\in\mathbb Z$. That condition
must not be silently replaced by levelwise homotopy equivalence, strict
levelwise homotopy, or invertibility in an unconstructed category.

Later pages may use the sequential-prespectrum definitions, their colimit
groups, the corrected shift bookkeeping, and products arising from explicit
pairings. Any use of replacement, localization, Brown representability, or a
calculated positive sphere stem needs a separate supplier.

