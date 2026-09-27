---
id: cor-antidominant-verma-modules-are-simple
kind: corollary
title: "Antidominant regular Verma modules are simple"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-strong-linkage-order-on-weights, lem-every-nonzero-verma-submodule-contains-a-singular-vector, thm-universal-property-of-verma-modules, lem-a-nonzero-verma-homomorphism-is-injective, lem-verma-embedding-implies-strong-linkage]
proof_strategy: contradiction
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, Theorem 15.11 and Corollary 20.14"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
---

## Statement

If $\langle\lambda+\rho,\alpha^\vee\rangle<0$ for every $\alpha\in\Phi^+$, then $M(\lambda)$ is simple. Thus every regular antidominant weight, in this explicit sense, has simple Verma module.

## Facts & Assumptions

**Given:** Strong linkage [[def-strong-linkage-order-on-weights]], singular vectors [[lem-every-nonzero-verma-submodule-contains-a-singular-vector]], the universal property [[thm-universal-property-of-verma-modules]], and embedding necessity [[lem-verma-embedding-implies-strong-linkage]].

[L1] Every nonzero homomorphism between Verma modules is injective ([[lem-a-nonzero-verma-homomorphism-is-injective]]).

## Proof

**Proof technique:** contradiction.

1.1 If a proper nonzero submodule existed, it would contain a singular vector of some weight $\mu\ne\lambda$; the universal property gives a nonzero map $M(\mu)\to M(\lambda)$. [given, assume-contra]

2.1 By [L1] the map from step 1.1 is an embedding, so $\mu\uparrow\lambda$. A nonempty linkage chain begins with a positive-integral pairing for $\lambda$, contradicting the strictly negative antidominant inequalities. Thus no proper nonzero submodule exists. [L1, step 1.1, contradiction, discharge-contradiction] ∎
