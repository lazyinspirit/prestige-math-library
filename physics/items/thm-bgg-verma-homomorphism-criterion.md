---
id: thm-bgg-verma-homomorphism-criterion
kind: theorem
title: "The BGG criterion for homomorphisms between Verma modules"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, thm-verma-embedding-for-an-arbitrary-positive-root, def-strong-linkage-order-on-weights, lem-verma-embedding-implies-strong-linkage]
proof_strategy: direct
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, Theorem 15.11"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical accept review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-04-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Assume the Axiom of Choice.

For weights $\lambda,\mu$, a nonzero homomorphism $M(\mu)\to M(\lambda)$ exists if and only if $\mu\uparrow\lambda$.

## Facts & Assumptions

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]), positive-root embeddings [[thm-verma-embedding-for-an-arbitrary-positive-root]], the definition [[def-strong-linkage-order-on-weights]], and Choice-qualified necessity [[lem-verma-embedding-implies-strong-linkage]].

## Proof

**Proof technique:** direct.

1.1 If $\mu\uparrow\lambda$, each edge in a witnessing chain gives a positive-root embedding; composing them gives a nonzero homomorphism $M(\mu)\to M(\lambda).$ [given, construct]

2.1 Conversely, write the image of the source highest vector as $a v_\lambda$ in the PBW model. For $a\ne0$, a kernel vector $u v_\mu$ would give $ua=0$ in $U(\mathfrak n^-)$, impossible because its PBW-degree associated graded algebra is the domain $S(\mathfrak n^-)$. Thus the map is an embedding, and the necessity lemma gives $\mu\uparrow\lambda$. [given, algebra] ∎
