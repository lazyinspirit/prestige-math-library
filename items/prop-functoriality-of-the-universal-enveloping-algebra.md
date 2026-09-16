---
id: prop-functoriality-of-the-universal-enveloping-algebra
kind: proposition
title: Functoriality of the enveloping algebra
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [thm-universal-property-of-the-universal-enveloping-algebra, lem-the-canonical-map-to-the-enveloping-algebra-is-a-lie-algebra-homomorphism-into-the-commutator-algebra]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Etingof, MIT 18.745 notes, §12.1, printed pp. 69–70"
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
---

## Statement

A Lie-algebra homomorphism $f:\mathfrak g\to\mathfrak h$ induces a unique
unital algebra homomorphism

$$U(f):U(\mathfrak g)\longrightarrow U(\mathfrak h)$$

such that $U(f)\iota_{\mathfrak g}=\iota_{\mathfrak h}f$. Moreover
$U(\operatorname{id})=\operatorname{id}$ and $U(gf)=U(g)U(f)$.

## Facts & Assumptions

**Given:** Lie-algebra homomorphisms between Lie algebras over $k$.

[L1] Each canonical map $\iota_{\mathfrak h}$ is a Lie map into the commutator algebra ([[lem-the-canonical-map-to-the-enveloping-algebra-is-a-lie-algebra-homomorphism-into-the-commutator-algebra]]).

[L2] Such Lie maps extend uniquely from $\mathfrak g$ to $U(\mathfrak g)$ ([[thm-universal-property-of-the-universal-enveloping-algebra]]).

## Proof

**Proof technique:** direct.

1.1 The composite $\iota_{\mathfrak h}f:\mathfrak g\to U(\mathfrak h)_{\mathrm{Lie}}$ is a Lie map by [L1], so [L2] supplies the unique unital algebra map $U(f)$ with the stated generator equation. [L1, L2]

1.2 Both $U(\operatorname{id}_{\mathfrak g})$ and $\operatorname{id}_{U(\mathfrak g)}$ compose with $\iota_{\mathfrak g}$ to $\iota_{\mathfrak g}$, so uniqueness in [L2] makes them equal. [L2, algebra]

2.1 For $\mathfrak g\xrightarrow f\mathfrak h\xrightarrow g\mathfrak l$, both $U(gf)$ and $U(g)U(f)$ send $\iota_{\mathfrak g}$ to $\iota_{\mathfrak l}gf$. Uniqueness in [L2] therefore gives $U(gf)=U(g)U(f)$. [step 1.1, L2, algebra]

3.1 The construction preserves identities and composition and is consequently functorial. [step 1.1, step 1.2, step 2.1] ∎
