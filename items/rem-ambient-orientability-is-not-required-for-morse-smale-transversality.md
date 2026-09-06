---
id: rem-ambient-orientability-is-not-required-for-morse-smale-transversality
kind: remark
title: "Ambient orientability is not required for Morse--Smale transversality"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-morse-smale-pair, thm-unparametrized-trajectory-space-is-a-smooth-manifold]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Michèle Audin and Mihai Damian, Morse Theory and Floer Homology, §2.2"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
---

Transversality and the dimension of $\mathcal M(p,q)$ use tangent-space spanning and do not require an orientation of $M$.  Orientations and signs for later trajectory counts require orientation-line data, not an ambient-orientability hypothesis inserted here.
