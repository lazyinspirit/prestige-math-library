---
id: fs-bpi-is-ac
kind: false-statement
title: BPI is equivalent to the Axiom of Choice
status: draft
origin: pipeline
deps: [cor-relative-consistency-of-bpi-without-choice-over-zf, thm-choice-implies-boolean-prime-ideal-principle, def-boolean-prime-ideal-principle, def-axiom-of-choice]
proof_strategy: countermodel
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
    - {title: "J. D. Halpern and A. Lévy, The Boolean prime ideal theorem does not imply the axiom of choice, pp.83-134", url: "https://www.ams.org/books/pspum/013.1/0284328"}
---

## False statement

> The Boolean Prime Ideal Theorem is equivalent over ZF to the Axiom of Choice.

## Why this is false

Conditional on $\operatorname{Con}(\mathrm{ZF})$, AC strictly implies BPI over ZF: AC proves BPI, while BPI does not prove AC.

## Facts & Assumptions

**Given:** Work over ZF. For the strictness assertion assume $\operatorname{Con}(\mathrm{ZF})$.

[F1] [[def-boolean-prime-ideal-principle]] and [[def-axiom-of-choice]] state BPI and AC.

[F2] [[cor-relative-consistency-of-bpi-without-choice-over-zf]] gives the exact syntactic implication $\operatorname{Con}(\mathrm{ZF})\Rightarrow\operatorname{Con}(\mathrm{ZF}+\mathrm{BPI}+\neg\mathrm{AC})$.

[F3] [[thm-choice-implies-boolean-prime-ideal-principle]] proves in ZF that AC implies BPI, with the exact Zorn argument and degenerate Boolean-algebra case.

## Proof

**Proof technique:** implication plus conditional countermodel.

1.1 F3 gives $\mathrm{AC}\Rightarrow\mathrm{BPI}$ over ZF. [F1, F3]

1.2 If ZF+BPI proved AC, then adding $\neg$AC would make ZF+BPI+$\neg$AC inconsistent. Under the given consistency hypothesis this contradicts F2. [F2, assume-contra]

2.1 Thus, conditional on $\operatorname{Con}(\mathrm{ZF})$, the reverse implication fails while the forward implication of step 1.1 holds. The false equivalence is refuted with exactly the stated consistency qualification. [step 1.1, step 1.2, discharge-contradiction] ∎
