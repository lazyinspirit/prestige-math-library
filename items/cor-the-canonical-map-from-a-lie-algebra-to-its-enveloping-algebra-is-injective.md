---
id: cor-the-canonical-map-from-a-lie-algebra-to-its-enveloping-algebra-is-injective
kind: corollary
title: The canonical map g→U(g) is injective
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [thm-poincare-birkhoff-witt]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Etingof, MIT 18.745 notes, Corollary 13.3, printed p. 75"
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, Corollary 5.13, printed p. 75"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
---

## Statement

If a basis of $\mathfrak g$ is supplied, the canonical map
$\iota_{\mathfrak g}:\mathfrak g\to U(\mathfrak g)$ is injective. In particular, no
degree-one basis vector vanishes in the enveloping algebra.

## Facts & Assumptions

**Given:** A Lie algebra $\mathfrak g$ with a specified basis and any specified
total order on that basis.

[L1] Length-one ordered PBW monomials are part of a basis of
$U(\mathfrak g)$ ([[thm-poincare-birkhoff-witt]]).

## Proof

**Proof technique:** direct.

1.1 The images under $\iota_{\mathfrak g}$ of the supplied basis elements are exactly the distinct length-one PBW monomials, so [L1] makes them linearly independent. [L1]

2.1 Every $x\in\mathfrak g$ has a unique finite basis expansion, and $\iota_{\mathfrak g}(x)=0$ forces all its coefficients to vanish by step 1.1. Hence $x=0$ and $\iota_{\mathfrak g}$ is injective; if the basis is empty, $\mathfrak g=0$ and the claim is immediate. [step 1.1, algebra] ∎
