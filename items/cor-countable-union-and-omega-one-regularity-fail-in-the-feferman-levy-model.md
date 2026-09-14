---
id: cor-countable-union-and-omega-one-regularity-fail-in-the-feferman-levy-model
kind: corollary
title: Countable-union and omega-one regularity principles fail
status: published
origin: pipeline
deps: [thm-feferman-levy-reals-are-a-countable-union-of-countable-sets, thm-feferman-levy-reals-remain-uncountable, cor-feferman-levy-omega-one-has-countable-cofinality, cor-countable-choice-and-omega-one-cofinality, def-countable-choice]
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
    - {title: "Thomas Jech, The Axiom of Choice, Theorem 10.6 and Problems 2–3, printed pp. 142–144, 148", url: "https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf"}
---

## Statement

In the Feferman–Levy model $N$:

1. the assertion that every countable union of countable sets is countable is
   false;
2. $\omega_1$ is singular; and
3. the Axiom of Countable Choice $\mathrm{AC}_\omega$ fails.

## Facts & Assumptions

**Given:** The Feferman–Levy model $N\models\mathrm{ZF}$.

[F1] [[thm-feferman-levy-reals-are-a-countable-union-of-countable-sets]]
writes the reals as one countable union of countable layers.

[F2] [[thm-feferman-levy-reals-remain-uncountable]] proves that this union is
uncountable.

[F3] [[cor-feferman-levy-omega-one-has-countable-cofinality]] gives
$\operatorname{cf}^N(\omega_1)=\omega$.

[F4] [[cor-countable-choice-and-omega-one-cofinality]] proves in ZF that
$\mathrm{AC}_\omega$ implies $\operatorname{cf}(\omega_1)=\omega_1$.

[F5] [[def-countable-choice]] fixes the exact choice principle being refuted.

## Proof

**Proof technique:** direct consequences and one contraposition.

1.1 F1 supplies a countable family of countable sets whose union is $\mathbb R^N$, while F2 says that union is uncountable. This single witness refutes the universal countable-union assertion in $N$. [F1, F2]

1.2 By F3, $\operatorname{cf}^N(\omega_1)=\omega<\omega_1^N$. Hence the internal cardinal $\omega_1$ is not regular and is therefore singular. [F3]

2.1 If $N$ satisfied $\mathrm{AC}_\omega$ as defined in F5, F4 applied inside $N$ would give $\operatorname{cf}^N(\omega_1)=\omega_1^N$, contrary to step 1.2. Therefore $N\models\neg\mathrm{AC}_\omega$. These are deductions in ZF from explicit witnesses; no Choice principle is used in deriving its own failure. [F4, F5, step 1.2] ∎
