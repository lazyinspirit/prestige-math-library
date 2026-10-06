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
       thm-a-vitali-set-is-not-lebesgue-measurable, thm-ultrafilter-lemma, def-filter, def-ultrafilter, def-axiom-of-choice, rem-choice-strengths]
justified_by: []
aliases: []
landmark: false
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
verification:
  repair: research/recorded-retirement-2026-10-06/receipts/rem-choice-costs-of-vitali-bernstein-and-free-ultrafilters.json
---

Choice enters this page in three genuinely different ways.

First, [[thm-vitali-sets-exist-under-choice-on-r-over-q]] uses a selector on the
family of rational-equivalence classes meeting $[0,1]$. [[thm-a-vitali-set-is-not-lebesgue-measurable]] treats an already given
selector by countably many rational translates. Its statement also assumes AC,
which supplies the countable choice inherited from the local Lebesgue measure
construction; the measure argument therefore has an explicit inherited cost.

Second, [[thm-bernstein-sets-exist-under-a-well-ordering-of-r]] uses a well-order
of the real line and a transfinite construction through the perfect subsets.
That is a different cost from the Vitali selector: the page isolates it because a
Bernstein set is built by repeatedly choosing fresh points from a well-ordered
development, not by one choice function on one fixed family.

Third, [[thm-a-free-ultrafilter-on-n-is-not-lebesgue-measurable]] is intentionally
one-directional. It proves what follows from **being given** a free ultrafilter,
namely nonmeasurability; it does not produce a free ultrafilter. Under AC, take the family of cofinite subsets of $\mathbb N$. It is a proper
filter ([[def-filter]]): $\mathbb N$ is cofinite, $\varnothing$ is not because
$\mathbb N$ is infinite, the complement of the intersection of two members is
a finite union of finite sets, and a superset of a cofinite set is cofinite.
[[thm-ultrafilter-lemma]] extends this filter to an ultrafilter. For every
$n\in\mathbb N$ that extension contains $\mathbb N\setminus\{n\}$, which
is absent from the principal ultrafilter at $n$; hence the extension is free
([[def-ultrafilter]]). As [[rem-choice-strengths]] explains, the local proof
of the extension theorem uses AC ([[def-axiom-of-choice]]).


These are upper bounds supplied by the local constructions. The page makes no
claim that any displayed hypothesis is weakest possible. The arguments summarized here establish no lower bounds.
