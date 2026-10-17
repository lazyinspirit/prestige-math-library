---
id: def-ultrafilter-extension-principle
kind: definition
title: "The ultrafilter extension principle (UL/BPI)"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-ultrafilter]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "J. Goubault-Larrecq, Algebras of filter-related monads: I. Ultrafilters and Manes' theorem"
      url: "https://topology.lmf.cnrs.fr/algebras-of-the-filter-related-monads-i-ultrafilters-and-manes-theorem/"
pipeline_run: null
---

## Definition

The **ultrafilter extension principle** says that every filter on a set is contained in an ultrafilter on that set ([[def-ultrafilter]]).

It is also called the **ultrafilter lemma** and is equivalent over ZF to the Boolean prime ideal theorem, abbreviated BPI. Items below write **assume UL/BPI** precisely when they use this extension principle; they do not thereby assume the full axiom of choice.
