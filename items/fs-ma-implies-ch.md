---
id: fs-ma-implies-ch
kind: false-statement
title: Martin's Axiom implies CH
status: draft
origin: pipeline
deps: [thm-rasiowa-sikorski-and-ch-implies-ma, cor-formal-consistency-of-ma-and-not-ch]
proof_strategy: counterexample
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Karagila, Forcing & Symmetric Extensions, Theorem 7.10", url: "https://karagila.org/files/Forcing-2023.pdf"}
---

## False statement

Martin's Axiom implies the Continuum Hypothesis.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[thm-rasiowa-sikorski-and-ch-implies-ma]] proves the valid direction $\mathrm{CH}\Rightarrow\mathrm{MA}$.

[F2] [[cor-formal-consistency-of-ma-and-not-ch]] gives the external implication $\operatorname{Con}(\mathrm{ZFC})\Rightarrow\operatorname{Con}(\mathrm{ZFC}+\mathrm{MA}+\neg\mathrm{CH})$ by fixed finite-fragment transfer.

## Counterexample

1.1 Assuming ZFC is consistent, F2 gives the consistency of a theory in which MA holds and CH fails. Thus the implication is not a theorem of ZFC, on the same metatheoretic consistency assumption under which the false statement is posed. [F2]

2.1 F1 records that reversing the arrows would confuse the valid implication with its false converse. The refutation rests on the fixed-fragment model argument of F2; it does not assume a countable transitive model of full ZFC. [F1, F2, step 1.1] ∎
