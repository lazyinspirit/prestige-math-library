---
id: cor-the-enveloping-algebra-has-no-hidden-linear-relations-in-degree-one
kind: corollary
title: No hidden linear relations in degree one
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [thm-poincare-birkhoff-witt, def-pbw-filtration-on-the-universal-enveloping-algebra]
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
    - title: "Etingof, MIT 18.745 notes, Theorem 13.1 and Corollary 13.3, printed pp. 74–75"
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
---

## Statement

If a basis of $\mathfrak g$ is supplied, the linear map

$$k\oplus\mathfrak g\longrightarrow F_1U(\mathfrak g),\qquad(a,x)\longmapsto a1+\iota_{\mathfrak g}(x),$$

is an isomorphism.

## Facts & Assumptions

**Given:** A Lie algebra with a specified totally ordered basis.

[L1] PBW makes the empty word and all length-one ordered words part of one
basis of $U(\mathfrak g)$ ([[thm-poincare-birkhoff-witt]]).

[L2] $F_1$ is spanned by words of length at most one
([[def-pbw-filtration-on-the-universal-enveloping-algebra]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], every element of $F_1$ is $a1+\iota_{\mathfrak g}(x)$, so the displayed map is surjective. [L2, algebra]

1.2 By [L1], the empty PBW word and the length-one basis words are linearly independent. Therefore $a1+\iota_{\mathfrak g}(x)=0$ implies $a=0$ and every basis coefficient of $x$ is zero, so the map is injective. [L1, algebra]

2.1 The map is linear, injective, and surjective, hence is an isomorphism; for $\mathfrak g=0$ this reduces to the degree-zero map $k\to F_1U(0)$. [step 1.1, step 1.2] ∎
