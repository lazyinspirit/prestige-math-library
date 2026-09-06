---
id: def-l-and-nl
kind: definition
title: "The classes L and NL"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-read-only-input-logspace-machine, def-read-only-input-workspace-classes]
verification: {precheck: n/a, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, Definition 3.5"
      url: "https://courses.cs.duke.edu/spring07/cps240/books/AB/ABbook.pdf"
---

## Definition

For a function $s$, let $\mathrm{NWORKSPACE}(s(n))$ denote the languages
decided by nondeterministic read-only-input machines using $O(s(n))$ work
cells. Thus
$$ \mathrm L:=\mathrm{DWORKSPACE}(\log_2(n+2)),\qquad \mathrm{NL}:=\mathrm{NWORKSPACE}(\log_2(n+2)). $$
Here $\mathrm{DWORKSPACE}$ is exactly the local uncharged-input class of
[[def-read-only-input-workspace-classes]]. The names L and NL below never
silently mean the library's all-tapes $\mathrm{DSPACE}$ and $\mathrm{NSPACE}$.
