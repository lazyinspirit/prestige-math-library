---
id: rem-urysohn-implies-dmc-open-status
kind: remark
title: "The converse from Urysohn's lemma to DMC is open"
status: published
origin: pipeline
deps: [thm-dmc-implies-urysohn-lemma, thm-relative-consistency-countable-choice-without-urysohn, thm-relative-consistency-bpi-without-urysohn, cor-brunner-models-also-refute-tietze-extension, cor-zf-does-not-prove-urysohn-lemma]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Eleftherios Tachtsis, The Urysohn Lemma is independent of ZF + Countable Choice"
      url: "https://doi.org/10.1090/proc/14590"
      locator: "Introduction and open-question discussion"
    - title: "Norbert Brunner, Geordnete Läuchli Kontinuen"
      url: "https://matwbn.icm.edu.pl/ksiazki/fm/fm117/fm11718.pdf"
      locator: "§3.4(a)-(b), printed pp. 72-73"
verification:
  audited: 2026-09-22
---

## Statement

As of 15 September 2026, $\mathrm{ZF}$ proves that DMC implies Urysohn's lemma,
while whether Urysohn's lemma implies DMC remains open. The countable-choice and
BPI countermodels refute both Urysohn's lemma and the bounded Tietze extension
conclusion; by contraposition of the proved DMC-to-Urysohn implication, they
also fail DMC. Thus they realise $\neg\mathrm{URY}\wedge\neg\mathrm{DMC}$,
which does not decide the converse $\mathrm{URY}\Rightarrow\mathrm{DMC}$.

## Remarks

- **The positive implication.** [[thm-dmc-implies-urysohn-lemma]] proves that DMC
  yields a continuous separation of any two disjoint closed sets of a normal
  space, using only finite menus of dyadic nodes. That theorem is the source of
  every "DMC suffices" clause on this page.

- **The two countermodels.** [[thm-relative-consistency-countable-choice-without-urysohn]]
  and [[thm-relative-consistency-bpi-without-urysohn]] give, relative to
  $\operatorname{Con}(\mathrm{ZF})$, models with countable choice, respectively
  BPI, in which Urysohn's lemma fails; the same models refute bounded Tietze
  extension for the same space by
  [[cor-brunner-models-also-refute-tietze-extension]]. The corresponding
  nonprovability conclusion for ZF is recorded as
  [[cor-zf-does-not-prove-urysohn-lemma]], conditional on
  $\operatorname{Con}(\mathrm{ZF})$.

- **Why these do not settle the converse.** Each countermodel fails Urysohn's
  lemma, so [[thm-dmc-implies-urysohn-lemma]] directly gives failure of DMC in
  that same model by contraposition. These are therefore models of
  $\neg\mathrm{URY}\wedge\neg\mathrm{DMC}$, not models of the conjunction
  needed to refute the converse. A model of
  $\mathrm{ZF} + \mathrm{URY} + \neg\mathrm{DMC}$ would settle the converse
  negatively, and no such model is known to the cited line of work.

- **Dating.** The status is dated because it is a report about the present state
  of the subject rather than a mathematical theorem; if the question is answered,
  this item must be replaced by the corresponding theorem and its proof, not
  reworded.
