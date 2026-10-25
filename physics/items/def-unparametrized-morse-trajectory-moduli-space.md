---
id: def-unparametrized-morse-trajectory-moduli-space
kind: definition
title: "Unparametrized Morse trajectory moduli space"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-parametrized-morse-trajectory-space, lem-time-translation-acts-freely-on-nonconstant-trajectories]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Alexander F. Ritter, Part III Morse Homology, §3.11"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
---

## Definition

For distinct critical points $p,q$, the **unparametrized Morse trajectory moduli space** is the orbit set

$$\mathcal M(p,q):=\widetilde{\mathcal M}(p,q)/\mathbb R,$$

where $\mathbb R$ translates the parameter.  At this point this is only an orbit set; its smooth structure is constructed below from a regular-level slice.
