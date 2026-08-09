---
id: thm-positive-productivity-of-separation-axioms
kind: theorem
title: "$T_0$, $T_1$, $T_2$, regularity, $T_3$, complete regularity, and Tychonoffness are productive"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-products-preserve-t0-t1-and-hausdorff, lem-products-preserve-regularity, lem-products-preserve-complete-regularity, def-regular-and-t3-spaces, def-completely-regular-and-tychonoff-spaces]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "J. P. May, An Outline Summary of Basic Point Set Topology, §6"
      url: "https://math.uchicago.edu/~may/FINITE/REUNotes2010/Topology10.pdf"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
pipeline_run: null
---

## Statement

Each of $T_0$, $T_1$, Hausdorffness ($T_2$), regularity, $T_3$, complete regularity, and Tychonoffness is productive.

## Facts & Assumptions

**Given:** A family of spaces having one of the listed separation properties.

[L1] Arbitrary products preserve $T_0$, $T_1$, Hausdorffness, regularity, and complete regularity as stated in the three preceding lemmas ([[lem-products-preserve-t0-t1-and-hausdorff]], [[lem-products-preserve-regularity]], [[lem-products-preserve-complete-regularity]]).

[F1] $T_3$ is regular plus $T_1$, and Tychonoff is completely regular plus $T_1$ ([[def-regular-and-t3-spaces]], [[def-completely-regular-and-tychonoff-spaces]]).

## Proof

**Proof technique:** direct.

1.1 The assertions for $T_0$, $T_1$, $T_2$, regularity, and complete regularity are [L1]. [L1]

1.2 A product of $T_3$ spaces is regular and $T_1$ by [L1], hence is $T_3$. [F1, L1]

1.3 A product of Tychonoff spaces is completely regular and $T_1$ by [L1], hence is Tychonoff. [F1, L1]

2.1 Therefore every property in the statement is productive. [step 1.1, step 1.2, step 1.3] ∎
