---
page: flatness-and-faithful-flatness
title: "Flatness and Faithful Flatness"
status: draft
items: [thm-direct-sums-and-direct-summands-preserve-flatness,
        thm-localisations-are-flat,
        thm-flatness-is-local,
        thm-equational-criterion-for-flatness,
        cor-flat-quotients-and-idempotent-ideals,
        thm-faithful-flatness-detected-by-nonzero-modules-and-fibres,
        thm-faithfully-flat-ring-map-characterisations,
        cor-faithfully-flat-ring-maps-are-injective,
        thm-faithfully-flat-descent-of-flatness,
        cor-faithfully-flat-descent-of-finite-generation,
        thm-local-criterion-for-flatness-ideal-form,
        thm-local-criterion-for-flatness-closed-fibre-form,
        thm-finite-flat-modules-over-local-rings-are-free,
        cor-finite-flat-noetherian-modules-are-projective,
        thm-flat-going-down]
examples: [ex-polynomial-algebras-are-faithfully-flat,
           ex-localisations-not-faithfully-flat,
           ex-fraction-field-flat-not-projective,
           ex-flat-idempotent-quotient,
           ex-nonflat-quotient-module,
           ex-faithfully-flat-principal-open-cover,
           ex-finite-flat-module-over-a-local-ring]
---

This page records the flatness tools needed downstream in commutative algebra and
algebraic geometry without opening the Tor and derived-functor machinery yet.
The basic flatness definition and several elementary criteria are already
published upstream; this page starts from those primitives and develops the
localization, locality, faithful-flatness, descent, local-criterion, local
freeness, projectivity, and going-down consequences that later geometry pages
cite.

The written proofs stay on the tensor, ideal, and residue-field side whenever
possible. Where the classical theorem is broader than the proof carried here, the
draft states that narrowing explicitly rather than pretending the stronger claim
has been established on these bytes.
