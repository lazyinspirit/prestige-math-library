---
id: rem-choice-costs-of-vitali-bernstein-and-free-ultrafilters
kind: remark
title: "What the Vitali set, Bernstein sets and free ultrafilters cost in choice"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-vitali-sets-exist-under-choice-on-r-over-q,
       thm-bernstein-sets-exist-under-a-well-ordering-of-r,
       thm-a-free-ultrafilter-on-n-is-not-lebesgue-measurable,
       rem-vitali-non-measurable-set, rem-solovay-model,
       rem-shelah-inaccessible-and-the-baire-property, rem-choice-strengths]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "R. M. Solovay, A model of set-theory in which every set of reals is Lebesgue measurable"
      url: "https://en.wikipedia.org/wiki/Solovay_model"
    - title: "S. Shelah, Can you take Solovay's inaccessible away?"
      url: "https://doi.org/10.1007/BF02760522"
    - title: "Jacek Cichoń, Aleksander Kharazishvili, and Bogdan Węglorz, Subsets of the Real Line, Chapter 8"
      url: "https://ki.pwr.edu.pl/cichon/Materialy/BOOK.pdf"
pipeline_run: null
---

Choice enters this page in three genuinely different ways.

First, [[thm-vitali-sets-exist-under-choice-on-r-over-q]] uses a selector on the
family of rational-equivalence classes meeting $[0,1]$. The later theorem that a
Vitali set is nonmeasurable uses only countably many translates of an already
chosen selector, so the cost is concentrated in the existence step, not in the
measure argument.

Second, [[thm-bernstein-sets-exist-under-a-well-ordering-of-r]] uses a well-order
of the real line and a transfinite construction through the perfect subsets.
That is a different cost from the Vitali selector: the page isolates it because a
Bernstein set is built by repeatedly choosing fresh points from a well-ordered
development, not by one choice function on one fixed family.

Third, [[thm-a-free-ultrafilter-on-n-is-not-lebesgue-measurable]] is intentionally
one-directional. It proves what follows from **being given** a free ultrafilter,
namely nonmeasurability; it does not produce a free ultrafilter. The existence
cost is recorded elsewhere in [[rem-choice-strengths]].

The published remarks [[rem-solovay-model]] and
[[rem-shelah-inaccessible-and-the-baire-property]] explain why none of these
pathologies can be read as consequences of ZF + DC alone: relative to the stated
consistency hypotheses, ZF + DC can coexist with all sets of reals being
measurable, and with all sets of reals having the Baire property.
