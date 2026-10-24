---
id: lem-a-nonzero-verma-homomorphism-is-injective
kind: lemma
title: "A nonzero homomorphism between Verma modules is injective"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-pbw-model-of-a-verma-module, lem-enveloping-algebra-of-the-negative-nilpotent-lie-algebra-is-a-domain]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, Exercise 8.14(i)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
---

## Statement

Every nonzero $\mathfrak g$-homomorphism $M(\mu)\to M(\lambda)$ is injective.

## Facts & Assumptions

**Given:** The PBW model [[thm-pbw-model-of-a-verma-module]] and the domain property [[lem-enveloping-algebra-of-the-negative-nilpotent-lie-algebra-is-a-domain]].

## Proof

**Proof technique:** direct.

1.1 In the PBW identifications, the image of the highest vector is $a v_\lambda$ for a nonzero $a\in U(\mathfrak n^-)$, and equivariance makes the map $u v_\mu\mapsto ua v_\lambda$. [given]

2.1 If $u v_\mu$ is in the kernel, then $ua=0$ in $U(\mathfrak n^-)$; the domain property gives $u=0$. Hence the kernel is zero. [step 1.1, contradiction] ∎
