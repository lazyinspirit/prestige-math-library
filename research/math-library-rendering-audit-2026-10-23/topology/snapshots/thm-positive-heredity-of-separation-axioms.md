---
id: thm-positive-heredity-of-separation-axioms
kind: theorem
title: "$T_0$, $T_1$, $T_2$, regularity, $T_3$, complete regularity, and Tychonoffness are hereditary"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-t0-t1-and-hausdorff-are-hereditary, lem-regularity-is-hereditary, lem-complete-regularity-is-hereditary, def-regular-and-t3-spaces, def-completely-regular-and-tychonoff-spaces]
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

Each of $T_0$, $T_1$, Hausdorffness ($T_2$), regularity, $T_3$, complete regularity, and Tychonoffness is hereditary.

## Facts & Assumptions

**Given:** A subspace of a space with one of the listed separation properties.

[L1] $T_0$, $T_1$, and Hausdorffness are hereditary ([[lem-t0-t1-and-hausdorff-are-hereditary]]).

[L2] Regularity and complete regularity are hereditary ([[lem-regularity-is-hereditary]], [[lem-complete-regularity-is-hereditary]]).

[F1] $T_3$ means regular plus $T_1$, and Tychonoff means completely regular plus $T_1$ ([[def-regular-and-t3-spaces]], [[def-completely-regular-and-tychonoff-spaces]]).

## Proof

**Proof technique:** direct.

1.1 The first three assertions are [L1], and regularity and complete regularity are [L2]. [L1, L2]

1.2 A subspace of a $T_3$ space is regular by [L2] and $T_1$ by [L1], hence is $T_3$. [F1, L1, L2]

1.3 A subspace of a Tychonoff space is completely regular by [L2] and $T_1$ by [L1], hence is Tychonoff. [F1, L1, L2]

2.1 These cover every property named in the statement. [step 1.1, step 1.2, step 1.3] ∎
