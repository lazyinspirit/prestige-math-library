---
id: lem-the-canonical-map-to-the-enveloping-algebra-is-a-lie-algebra-homomorphism-into-the-commutator-algebra
kind: lemma
title: The canonical map to U(g) is a Lie homomorphism
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-universal-enveloping-algebra]
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
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, §5.1, printed pp. 71–72"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
---

## Statement

For every $x,y\in\mathfrak g$, the canonical map satisfies

$$\iota_{\mathfrak g}([x,y])=\iota_{\mathfrak g}(x)\iota_{\mathfrak g}(y)-\iota_{\mathfrak g}(y)\iota_{\mathfrak g}(x).$$

Consequently $\iota_{\mathfrak g}:\mathfrak g\to U(\mathfrak g)_{\mathrm{Lie}}$ is a
Lie-algebra homomorphism into the commutator Lie algebra.

## Facts & Assumptions

**Given:** The quotient presentation of $U(\mathfrak g)$ and canonical linear map $\iota_{\mathfrak g}$ from [[def-universal-enveloping-algebra]].

[L1] Every generator $x\otimes y-y\otimes x-[x,y]$ of the defining ideal has zero image in the quotient.

## Proof

**Proof technique:** direct.

1.1 Applying the quotient map to the relator in [L1] gives $\iota_{\mathfrak g}(x)\iota_{\mathfrak g}(y)-\iota_{\mathfrak g}(y)\iota_{\mathfrak g}(x)-\iota_{\mathfrak g}([x,y])=0$, which is the displayed identity. [given, L1, algebra]

2.1 Since $\iota_{\mathfrak g}$ is linear by construction and step 1.1 is bracket preservation, it is a Lie-algebra homomorphism. No injectivity has been used. [step 1.1] ∎
