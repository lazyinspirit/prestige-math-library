---
id: rem-urysohn-implies-dmc-open-status
kind: remark
title: "The converse from Urysohn separation to DMC: a comparison question"
status: published
origin: pipeline
deps: [thm-dmc-implies-urysohn-lemma, cor-dmc-is-not-provable-in-zf, cor-brunner-models-also-refute-tietze-extension]
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
  repair: research/recorded-retirement-2026-10-06/receipts/rem-urysohn-implies-dmc-open-status.json
---


## Statement

Over ZF, DMC implies Urysohn's lemma
([[thm-dmc-implies-urysohn-lemma]]). One may ask whether the converse holds.
This item states no answer or current research status for that question.

## Remarks

A failure of Urysohn's lemma implies failure of DMC by contraposition
([[cor-dmc-is-not-provable-in-zf]]) and also failure of bounded Tietze extension
([[cor-brunner-models-also-refute-tietze-extension]]). These conditional
implications establish no countermodel existence. Even if a counterexample to
Urysohn's lemma were supplied, it would satisfy
$\neg\mathrm{URY}\wedge\neg\mathrm{DMC}$ and would not refute the converse
$\mathrm{URY}\Rightarrow\mathrm{DMC}$; that requires a witness of
$\mathrm{URY}\wedge\neg\mathrm{DMC}$ instead.
