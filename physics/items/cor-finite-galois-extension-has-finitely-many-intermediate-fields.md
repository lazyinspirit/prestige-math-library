---
id: cor-finite-galois-extension-has-finitely-many-intermediate-fields
kind: corollary
title: "A finite Galois extension has finitely many intermediate fields"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-fundamental-theorem-of-finite-galois-theory]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Theorem 3.17"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
    - title: "K. Conrad, The Galois Correspondence, Theorem 5.6"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/galoiscorr.pdf"
pipeline_run: null
---

## Statement

A finite Galois extension has only finitely many intermediate fields.

## Facts & Assumptions

**Given:** A finite Galois extension $K/F$ and its finite Galois group $G$.

[L1] The assignments $H\mapsto K^H$ and $E\mapsto\operatorname{Gal}(K/E)$ are mutually inverse inclusion-reversing bijections ([[thm-fundamental-theorem-of-finite-galois-theory]]).

## Proof

**Proof technique:** direct.

1.1 A finite group has a finite power set, and its subgroups form a subcollection of that power set; hence $G$ has finitely many subgroups. [given]

2.1 By [L1], the intermediate fields are in bijection with those subgroups, so there are finitely many. When $K=F$, both collections have one member, and the base and top endpoints coincide. [step 1.1, L1] ∎

## Remarks

The library proves more than this elsewhere: [[cor-finite-separable-extension-has-finitely-many-intermediate-fields]] drops normality and keeps the conclusion, by the Steinitz primitive-element route rather than by the correspondence. The corollary here is recorded because it is what the Galois correspondence gives immediately, not because the separable statement is unavailable.
