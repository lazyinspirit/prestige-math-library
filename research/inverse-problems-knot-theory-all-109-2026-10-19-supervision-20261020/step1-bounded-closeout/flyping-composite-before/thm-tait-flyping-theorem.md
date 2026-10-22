---
id: thm-tait-flyping-theorem
kind: theorem
title: Tait flyping theorem
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-reduced-alternating-link-diagram
  - def-flype-crossing-ball-and-alternating-tangle-data
  - def-planar-isotopy-of-link-diagrams
  - lem-connected-alternating-link-is-nonsplit
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: Full AC is retained as the registered branch; its necessity for the
  geometric flyping argument has not been established.
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: William W. Menasco and Morwen B. Thistlethwaite, The classification of
        alternating links, Annals of Mathematics 138 (1993), pp. 113–171
      url: https://doi.org/10.2307/2946636
    - title: Thomas Kindred, A geometric proof of the flyping theorem,
        arXiv:2008.06490v3, full alternative proof for prime links
      url: https://arxiv.org/pdf/2008.06490v3
---

## Statement

Assume full AC. Any two connected reduced alternating diagrams on the oriented projection sphere that represent the same oriented link type are related by a finite sequence of sphere planar isotopies and flypes. Composite links are included; the diagrams are required to be connected, and a plane drawing is interpreted as a punctured projection sphere.

## Statement references

[Menasco and Thistlethwaite, *The classification of alternating links* (1993)](https://doi.org/10.2307/2946636)

[Kindred, *A geometric proof of the flyping theorem*, arXiv:2008.06490v3](https://arxiv.org/pdf/2008.06490v3)

## Escalation status

No proof is supplied. The controlling plan requires the Menasco crossing-ball route: put relevant Conway spheres in bubble standard position, then perform a geometric flype reduction with a strictly decreasing complexity. Five distinct full-text routes for the Menasco–Thistlethwaite paper failed or returned non-text pages (Annals PDF 404, JSTOR challenge page, UTK certificate failure, UTK maintenance page, and AMS announcement 403). Kindred's complete alternative proof was read, but it is formulated for prime links and uses definite-surface re-plumbing; it does not supply the registered composite-link theorem or the assigned decreasing-complexity route. The theorem is therefore escalated to the owner without weakening its statement or treating a source announcement as a proof.
