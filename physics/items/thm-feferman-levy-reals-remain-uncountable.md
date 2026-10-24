---
id: thm-feferman-levy-reals-remain-uncountable
kind: theorem
title: The Feferman–Levy reals remain uncountable
status: published
origin: pipeline
deps: [thm-feferman-levy-reals-are-a-countable-union-of-countable-sets, thm-r-uncountable, thm-hereditarily-symmetric-interpretations-form-a-zf-model]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - {title: "Thomas Jech, The Axiom of Choice, Theorem 10.6 and discussion, printed pp. 142–144", url: "https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf"}
---

## Statement

The real line of the Feferman–Levy model $N$ is uncountable, even though it is
the union of the countable sequence $\langle R_m:m<\omega\rangle$ of
countable sets.

## Facts & Assumptions

**Given:** The Feferman–Levy symmetric model $N$.

[F1] [[thm-feferman-levy-reals-are-a-countable-union-of-countable-sets]] supplies the displayed countable-union decomposition.

[F2] [[thm-r-uncountable]] proves in ZF, without any Choice principle, that the real line admits no surjection from $\omega$.

[F3] [[thm-hereditarily-symmetric-interpretations-form-a-zf-model]] states that the symmetric interpretation $N$ is a transitive ZF model.

## Proof

**Proof technique:** direct internal application of Cantor's theorem.

1.1 By F3, apply F2 inside the ZF model $N$. Its canonical real line $\mathbb R^N$ is a complete ordered field there, and the theorem's nested-interval construction uses no Choice. Hence $N\models$ “$\mathbb R$ is uncountable.” [F2, F3]

2.1 By F1 the same set $\mathbb R^N$ equals $\bigcup_{m<\omega}R_m$, where the sequence and every layer belong to $N$ and each layer is countable there. Combining that identity with step 1.1 gives the claimed contrast; it does not infer that the union is countable. [F1, step 1.1] ∎
