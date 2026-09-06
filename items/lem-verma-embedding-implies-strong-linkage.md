---
id: lem-verma-embedding-implies-strong-linkage
kind: lemma
title: "A Verma embedding implies strong linkage"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-a-nonzero-verma-homomorphism-is-injective, thm-strong-linkage-principle-for-verma-modules]
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
    - title: "Pavel Etingof, Representations of Lie Groups, Corollary 20.14"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
---

## Statement

An embedding $M(\mu)\hookrightarrow M(\lambda)$ implies $\mu\uparrow\lambda$.

## Facts & Assumptions

**Given:** Injectivity [[lem-a-nonzero-verma-homomorphism-is-injective]] and strong linkage [[thm-strong-linkage-principle-for-verma-modules]].

## Proof

**Proof technique:** direct.

1.1 The image of the embedding is a submodule isomorphic to $M(\mu)$, so its simple quotient $L(\mu)$ is a subquotient, hence a composition factor, of $M(\lambda)$. [given]

2.1 Applying the strong linkage principle to that factor gives $\mu\uparrow\lambda$. [step 1.1] ∎
