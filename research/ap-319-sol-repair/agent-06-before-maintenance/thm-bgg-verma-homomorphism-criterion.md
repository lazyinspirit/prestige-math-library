---
id: thm-bgg-verma-homomorphism-criterion
kind: theorem
title: "The BGG criterion for homomorphisms between Verma modules"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-verma-embedding-for-an-arbitrary-positive-root, def-strong-linkage-order-on-weights, lem-verma-embedding-implies-strong-linkage]
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
    - title: "Pavel Etingof, Representations of Lie Groups, Theorem 15.11"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
---

## Statement

For weights $\lambda,\mu$, a nonzero homomorphism $M(\mu)\to M(\lambda)$ exists if and only if $\mu\uparrow\lambda$.

## Facts & Assumptions

**Given:** Positive-root embeddings [[thm-verma-embedding-for-an-arbitrary-positive-root]], the definition [[def-strong-linkage-order-on-weights]], and necessity [[lem-verma-embedding-implies-strong-linkage]].

## Proof

**Proof technique:** direct.

1.1 If $\mu\uparrow\lambda$, each edge in a witnessing chain gives a positive-root embedding; composing them gives a nonzero homomorphism $M(\mu)\to M(\lambda).$ [given, construct]

2.1 Conversely, write the image of the source highest vector as $a v_\lambda$ in the PBW model. For $a\ne0$, a kernel vector $u v_\mu$ would give $ua=0$ in $U(\mathfrak n^-)$, impossible because its PBW-degree associated graded algebra is the domain $S(\mathfrak n^-)$. Thus the map is an embedding, and the necessity lemma gives $\mu\uparrow\lambda$. [given, algebra] ∎
