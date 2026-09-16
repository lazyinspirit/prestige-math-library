---
id: cor-dmc-is-not-provable-in-zf
kind: corollary
title: "DMC is not provable in ZF"
status: draft
origin: pipeline
deps: [thm-relative-consistency-countable-choice-without-urysohn, thm-dmc-implies-urysohn-lemma, def-countable-choice, def-dependent-multiple-choice-finite-level-tree]
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: contradiction
sources:
  scraped: []
  references:
    - title: "Norbert Brunner, Geordnete Läuchli Kontinuen"
      url: "https://matwbn.icm.edu.pl/ksiazki/fm/fm117/fm11718.pdf"
      locator: "§3.4(a)-(b), printed pp. 72-73"
---

## Statement

If $\mathrm{ZF}$ is consistent, then $\mathrm{ZF}$ does not prove DMC
([[def-dependent-multiple-choice-finite-level-tree]]); indeed there is a model of
$\mathrm{ZF}$ with countable choice ([[def-countable-choice]]) in which DMC
fails.

## Facts & Assumptions

**Given:** The assumed consistency of $\mathrm{ZF}$.

[F1] Relative to $\operatorname{Con}(\mathrm{ZF})$, the theory $\mathrm{ZF} + \mathrm{AC}_{\omega} + \neg\mathrm{URY}$ is consistent ([[thm-relative-consistency-countable-choice-without-urysohn]]).

[F2] DMC implies Urysohn's lemma over $\mathrm{ZF}$ ([[thm-dmc-implies-urysohn-lemma]]).

## Proof

**Proof technique:** contradiction.

1.1 Assume $\operatorname{Con}(\mathrm{ZF})$ and suppose $\mathrm{ZF}$ proves DMC. [assume-contra, given]

2.1 Then $\mathrm{ZF} + \mathrm{AC}_{\omega}$ proves DMC, hence by [F2] proves $\mathrm{URY}$; but by [F1] the theory $\mathrm{ZF}+\mathrm{AC}_{\omega}+\neg\mathrm{URY}$ is consistent, and it would prove both $\mathrm{URY}$ and its negation, hence be inconsistent. [step 1.1, F1, F2]

3.1 This contradiction shows that $\mathrm{ZF}$ does not prove DMC, conditionally on $\operatorname{Con}(\mathrm{ZF})$; the witness model is the transferred countable-choice model, in which Urysohn's lemma fails and therefore DMC fails. [step 2.1, F1, F2, discharge-contradiction] ∎
