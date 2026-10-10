---
id: rem-gromov-polynomial-growth-theorem
kind: remark
title: "Gromov's polynomial-growth theorem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-supplied
deps: [def-polynomial-subexponential-exponential-and-intermediate-growth]
justified_by: []
proved_here: false
external_dependency:
  source_url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
  exact_statement: "A finitely generated group has polynomial growth if and only if it is virtually nilpotent."
  local_proof_attempt: "A local proof would need major additional machinery beyond this page, such as the structure theory behind Gromov's theorem and its modern quantitative refinements. None of that infrastructure is developed earlier in the library."
  necessity: "The page needs the theorem only as an honest boundary marker for the polynomial-growth topic and as the target of the companion-page false-statement witness."
aliases: []
landmark: true
verification:
  sources_checked:
    date: 2026-08-26
    scope: citations
    by: session-audit
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "C. Löh, Geometric Group Theory, Sections 5.1-5.3"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
    - title: "M. Gromov, Groups of polynomial growth and expanding maps"
      url: "https://www.ihes.fr/~gromov/wp-content/uploads/2018/08/631.pdf"
pipeline_run: null
---

Gromov's polynomial-growth theorem states that a finitely generated group has
polynomial growth if and only if it is virtually nilpotent.

This page does not prove that theorem. The forward implication is a deep
structural result, not a consequence of the Švarc-Milnor and growth-comparison
machinery developed here. The corollary
[[cor-finitely-generated-nilpotent-groups-have-polynomial-growth]] supplies the
nilpotent case of the backward implication; passing from nilpotent to virtually
nilpotent also requires the finite-index quasi-isometry argument.
