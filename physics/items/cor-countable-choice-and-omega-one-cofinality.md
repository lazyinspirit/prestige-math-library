---
id: cor-countable-choice-and-omega-one-cofinality
kind: corollary
title: "Countable choice makes omega-one regular"
status: published
origin: pipeline
deps: ["thm-countable-union-of-countable", "thm-cofinality-basics"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct argument
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Jech, The Axiom of Choice, §2.4.2, Corollary 2, p.20"
      url: https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf
---

## Statement

In ZF plus $\mathrm{AC}_\omega$, $\operatorname{cf}(\omega_1)=\omega_1$.

## Facts & Assumptions

[F1] [[thm-countable-union-of-countable]]: Under countable choice, a countable union of at most countable sets is at most countable.

[F2] [[thm-cofinality-basics]]: The cofinality of a limit ordinal is an infinite cardinal at most that ordinal.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 If $\operatorname{cf}(\omega_1)<\omega_1$, it must be omega: it is an infinite cardinal and omega is the only countable infinite initial ordinal. Thus there is a cofinal sequence $(\alpha_n)_{n<\omega}$ in $\omega_1$. [F2]

2.1 Each $\alpha_n$ is a countable ordinal. Cofinality gives $\omega_1=\bigcup_n\alpha_n$ (or use $\alpha_n+1$ without changing the argument). Countable choice makes that union countable, contradicting the definition of $\omega_1$. The only remaining cofinality is $\omega_1$. [F1, F2, step 1.1] ∎
