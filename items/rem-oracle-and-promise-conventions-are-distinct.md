---
id: rem-oracle-and-promise-conventions-are-distinct
kind: remark
title: "Oracle and promise conventions are distinct"
status: draft
origin: pipeline
deps: [def-relativized-complexity-class, def-promise-preserving-reduction]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Goldreich, On Promise Problems; §1.2 following Definition1.3, p5."
      url: "https://www.wisdom.weizmann.ac.il/~oded/PSX/prpr-r.pdf"
---

## Statement

A total membership oracle in [[def-relativized-complexity-class]] fixes the answer on every query word. A promise target in [[def-promise-preserving-reduction]] describes a collection of total completions. Correctness of a promise reduction must hold for each completion, including its arbitrary answers outside the target promise. A promised input to the caller does not by itself guarantee that the caller's queries satisfy the target promise.
