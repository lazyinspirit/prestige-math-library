---
id: def-church-turing-thesis
kind: definition
title: "The Church-Turing thesis"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-partial-function-computed-by-a-machine]
justified_by: []
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "A. M. Turing, On Computable Numbers, with an Application to the Entscheidungsproblem"
      url: "https://www.cs.ox.ac.uk/activities/ieg/e-library/sources/tp2-ie.pdf"
    - title: "Richard Zach, Sets, Logic, Computation: An Open Introduction to Metalogic"
      url: "https://slc.openlogicproject.org/slc-screen.pdf"
    - title: "Charles Brubaker and Lance Fortnow, Church-Turing Thesis lesson notes"
      url: "https://s3.amazonaws.com/content.udacity-data.com/courses/gt-cs6505/churchturing.html"
---

## Definition

The **Church-Turing thesis** is the informal claim that every effectively
calculable procedure can be carried out by a Turing machine. Equivalently, every
effectively calculable partial function between a finitely encoded domain and
codomain is
computable in the sense of [[def-partial-function-computed-by-a-machine]].

## Remarks

- This is a thesis relating an informal pre-mathematical notion, "effective
  calculability," to a formal model of computation.

- Because one side of the claim is informal, the thesis is not itself a theorem
  of the formal Turing-machine definition.
