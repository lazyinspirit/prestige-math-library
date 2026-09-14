---
id: thm-solovay-inner-model-satisfies-dependent-choice
kind: theorem
title: The Solovay inner model satisfies Dependent Choice
status: draft
origin: pipeline
deps: [lem-solovay-inner-model-is-closed-under-ambient-omega-sequences, def-serial-relation-dependent-choice-principle-over-zf, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: closure-transfer
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - {title: "Solovay 1970, Part III, Lemma 2.7", url: "https://people.math.ethz.ch/~fdalio/ZKmodel.pdf"}
---

## Statement

$M$ satisfies the serial-relation Dependent Choice principle, although it need not satisfy full Choice.

## Facts & Assumptions

**Given:** In $M$, a nonempty set $A$, a serial relation $R\subseteq A^2$, and $a_0\in A$.

[F1] [[lem-solovay-inner-model-is-closed-under-ambient-omega-sequences]]: every ambient omega-sequence of elements of $M$ lies in $M$.

[F2] [[def-serial-relation-dependent-choice-principle-over-zf]]: gives the required serial-chain formulation.

[F3] [[def-axiom-of-choice]]: ambient AC supplies recursive choices.

## Proof

1.1 In $V[G]$, recursively set $a_0$ as given and, using ambient AC, choose $a_{n+1}\in A$ with $a_nRa_{n+1}$. Seriality supplies a nonempty successor fibre at every finite stage. [Given, F3]

2.1 The resulting function maps $\omega$ into $A\subseteq M$, so F1 puts it in $M$. Transitivity makes $M$ compute each assertion $a_nRa_{n+1}$ correctly. This is precisely DC by F2. If $A$ is a singleton the constant chain works; nonemptiness is essential and supplied. [F1, F2, step 1.1] ∎
