---
id: lem-amenable-D-R-l2-dimension-estimate
kind: lemma
title: "L²-dimension estimates for amenable D(R) groups"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-integral-half-solutions-strebel-and-l2-signatures
  - thm-amenable-von-neumann-l2-flatness
justified_by:
  []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Jae Choon Cha, “Amenable L²-Theoretic Methods and Knot Concordance”"
      url: "https://arxiv.org/pdf/1010.1058"
      locator: "Theorem 2.2 and §3.1–3.3, dimension estimate"
    - title: "Jae Choon Cha and Kent E. Orr, “L²-signatures, homology localization, and amenable groups”"
      url: "https://arxiv.org/pdf/0910.3700"
      locator: "Theorem 6.6 and proof"
---

## Statement

Let R be Q or F_p, let Γ be a countable discrete amenable group in Strebel's class D(R), and let C_* be a bounded-below chain complex of right ZΓ-modules whose C_i are finitely generated free for i≤n. Give R the trivial Γ-action. If H_i(C_*⊗_{ZΓ}R)=0 for every i≤n, then H_i(C_*⊗_{ZΓ}NΓ) has von Neumann dimension zero for every i≤n. This is a dimension-zero conclusion and does not assert that the L²-homology module vanishes.

## Statement references

[Cha, Theorem 2.2 and §3](https://arxiv.org/pdf/1010.1058)

## Facts & Assumptions

**Given:** R∈{Q,F_p}, Γ amenable and in D(R), and a bounded-below finite-free ZΓ-chain complex C_* with the stated R-coefficient homology vanishing.

[F1] Membership in D(R) is the projective-module injectivity property after tensoring with the trivial R-module ([[def-integral-half-solutions-strebel-and-l2-signatures]]).

[F2] For an amenable group, Tor_q^{CΓ}(M,NΓ) has von Neumann dimension zero for q>0 ([[thm-amenable-von-neumann-l2-flatness]]).

## Proof

1.1 Regard R as the trivial ZΓ-module and form the coefficient chain complexes C_*⊗_{ZΓ}R and C_*⊗_{ZΓ}NΓ. The hypotheses give zero ordinary homology through degree n, and each chain module through degree n is finite free. [given, F1]

1.2 The chain homotopy from the identity to zero over R lifts partially to ZΓ; D(R) makes the lifted maps injective in each required degree, while [F2] ensures tensoring those injections with NΓ is an L²-equivalence. [F1, F2, step 1.1]

2.1 The induced map on NΓ-homology is both an L²-equivalence and zero in degrees i≤n. A zero map can be an L²-equivalence only when its source and target have dimension zero. Hence dim_{NΓ}H_i(C_*⊗_{ZΓ}NΓ)=0 for i≤n. [F1, F2, step 1.2, algebra]

## Owner escalation

Cha’s Theorem 2.2 obtains the estimate from Cha–Orr and Lück dimension results. The required comparison lemmas and the exact treatment of the chain kernels have not been proved locally, so the inequality remains escalated.