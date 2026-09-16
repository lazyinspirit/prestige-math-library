---
id: cor-bpi-does-not-imply-dmc
kind: corollary
title: "BPI does not imply DMC"
status: draft
origin: pipeline
deps: [thm-relative-consistency-bpi-without-urysohn, thm-dmc-implies-urysohn-lemma, def-boolean-prime-ideal-principle, def-dependent-multiple-choice-finite-level-tree, def-normal-and-t4-spaces]
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

Relative to $\operatorname{Con}(\mathrm{ZF})$, BPI
([[def-boolean-prime-ideal-principle]]) does not imply DMC
([[def-dependent-multiple-choice-finite-level-tree]]) over $\mathrm{ZF}$: there
is a model of $\mathrm{ZF}+\mathrm{BPI}$ in which DMC fails.

## Facts & Assumptions

**Given:** The assumed consistency of $\mathrm{ZF}$.

[F1] Relative to $\operatorname{Con}(\mathrm{ZF})$, the theory $\mathrm{ZF} + \mathrm{BPI} + \neg\mathrm{URY}$ is consistent, where $\neg\mathrm{URY}$ asserts the existence of a normal space with two disjoint closed sets that admit no continuous separation ([[thm-relative-consistency-bpi-without-urysohn]], [[def-normal-and-t4-spaces]]).

[F2] Over $\mathrm{ZF}$, DMC implies Urysohn's lemma: in every normal space any two disjoint closed sets are separated by a continuous function ([[thm-dmc-implies-urysohn-lemma]], [[def-dependent-multiple-choice-finite-level-tree]]).

## Proof

**Proof technique:** contradiction.

1.1 Assume $\operatorname{Con}(\mathrm{ZF})$ and suppose, for the sake of contradiction, that $\mathrm{ZF} + \mathrm{BPI}$ proves DMC. [assume-contra, given]

2.1 By [F2] the theory $\mathrm{ZF} + \mathrm{BPI} + \neg\mathrm{URY}$ then proves DMC and hence proves $\mathrm{URY}$, since DMC implies Urysohn's lemma in ZF; but it also proves $\neg\mathrm{URY}$ by its own axiom, so it is inconsistent. [step 1.1, F2]

3.1 This contradicts the consistency of $\mathrm{ZF}+\mathrm{BPI}+\neg\mathrm{URY}$ given by [F1] under the assumption $\operatorname{Con}(\mathrm{ZF})$; hence BPI does not imply DMC over $\mathrm{ZF}$, conditionally on the consistency of $\mathrm{ZF}$. [step 2.1, F1, discharge-contradiction] ∎
