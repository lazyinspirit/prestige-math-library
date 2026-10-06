---
id: cor-bpi-does-not-imply-dmc
kind: corollary
title: "A consistent BPI counterexample theory obstructs a proof of DMC"
status: published
origin: pipeline
deps: [thm-dmc-implies-urysohn-lemma, def-boolean-prime-ideal-principle, def-dependent-multiple-choice-finite-level-tree, def-normal-and-t4-spaces]
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Norbert Brunner, Geordnete Läuchli Kontinuen"
      url: "https://matwbn.icm.edu.pl/ksiazki/fm/fm117/fm11718.pdf"
      locator: "§3.4(a)-(b), printed pp. 72-73"
verification:
  repair: research/recorded-retirement-2026-10-06/receipts/cor-bpi-does-not-imply-dmc.json
---


## Statement

If $\mathrm{ZF}+\mathrm{BPI}+\neg\mathrm{URY}$ is consistent, then
$\mathrm{ZF}+\mathrm{BPI}$ does not prove DMC. Here BPI and DMC are the
principles of [[def-boolean-prime-ideal-principle]] and
[[def-dependent-multiple-choice-finite-level-tree]], and $\mathrm{URY}$ is
Urysohn separation in normal spaces ([[def-normal-and-t4-spaces]]).

No consistency of the counterexample theory or existence of its model is
asserted; the hypothesis is an additional consistency premise, not a consequence
of $\operatorname{Con}(\mathrm{ZF})$ established here.

## Facts & Assumptions

**Given:** Consistency of $T=\mathrm{ZF}+\mathrm{BPI}+\neg\mathrm{URY}$.

[F1] ZF proves DMC implies Urysohn's lemma
([[thm-dmc-implies-urysohn-lemma]]).

## Proof
 1.1 If $\mathrm{ZF}+\mathrm{BPI}$ proved DMC, the same finite derivation would be a $T$ derivation, since $T$ extends that theory. The ZF derivation F1 would then give $\mathrm{URY}$ in $T$. [given, F1]

2.1 The axiom $\neg\mathrm{URY}$ of $T$ would combine with that derivation to give a contradiction, contrary to the given consistency. Thus $\mathrm{ZF}+\mathrm{BPI}$ cannot prove DMC under the stated hypothesis. [given, step 1.1] ∎