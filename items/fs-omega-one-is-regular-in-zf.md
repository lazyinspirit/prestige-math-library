---
id: fs-omega-one-is-regular-in-zf
kind: false-statement
title: ZF proves that omega one is regular
status: draft
origin: pipeline
deps: [cor-relative-consistency-of-feferman-levy-choice-failures-over-zf, def-cofinality, thm-omega-one-is-the-least-uncountable-ordinal]
proof_strategy: contradiction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - {title: "Thomas Jech, The Axiom of Choice, discussion after Theorem 10.6 and Problems 2–3, printed pp. 144, 148", url: "https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf"}
---

## Statement refuted

ZF proves $\operatorname{cf}(\omega_1)=\omega_1$; equivalently, ZF proves
that $\omega_1$ is regular.

Assuming $\operatorname{Con}(\mathrm{ZF})$, this statement is false: it is not
a theorem of ZF.

## Facts & Assumptions

**Given:** $\operatorname{Con}(\mathrm{ZF})$. The conclusion is conditional
syntactic nonprovability, not the assertion of a transitive model from bare
consistency.

[F1] [[cor-relative-consistency-of-feferman-levy-choice-failures-over-zf]]
proves consistency of ZF with
$\operatorname{cf}(\omega_1)=\omega$.

[F2] [[def-cofinality]] defines an infinite cardinal $\kappa$ to be regular
exactly when $\operatorname{cf}(\kappa)=\kappa$.

[F3] [[thm-omega-one-is-the-least-uncountable-ordinal]] proves in ZF that
$\omega_1$ is uncountable while $\omega$ is countable, so
$\omega\ne\omega_1$.

## Proof

**Proof technique:** contradiction with the consistent Feferman--Levy target theory.

1.1 Let $T$ be the consistent theory supplied by F1. It contains ZF and the exact equality $\operatorname{cf}(\omega_1)=\omega$. By F3, the ZF part of $T$ proves $\omega\ne\omega_1$. The ordinals here are the target model's own $\omega$ and $\omega_1$; no ground-model ordinal is being substituted. [F1, F3]

**Boundary check.** The displayed cofinality is neither the empty nor a finite cofinality: its value is the infinite ordinal $\omega$. The possible degenerate equality $\omega=\omega_1$ is ruled out inside ZF by F3. Thus the contradiction below compares exact ordinal endpoints and does not use a Choice-based cardinal comparison.

2.1 Suppose for contradiction that ZF proved the statement refuted. By F2, $T$ would then prove $\operatorname{cf}(\omega_1)=\omega_1$. Together with step 1.1 it would prove $\omega=\omega_1$, contradicting the ZF theorem recorded there. This would make $T$ inconsistent, contrary to F1. Hence, under $\operatorname{Con}(\mathrm{ZF})$, regularity of $\omega_1$ is not provable in ZF. [F1, F2, step 1.1, assume-contra, discharge-contradiction] ∎
