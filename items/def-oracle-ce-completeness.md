---
id: def-oracle-ce-completeness
kind: definition
title: "Oracle-c.e. completeness"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-relative-computability-and-enumerability]
verification:
  verified:
    model: "gpt-6-astra"
    verdict: pass
    date: 2026-09-08
    scope: "Local definition and prerequisite repair; not independent review or a whole-closure audit"
    delegated_by: owner
  precheck: n/a
sources:
  references:
    - title: "Ludovic Patey, Computability Theory, §4.2"
      url: "https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf"
---

## Definition

For $A\subseteq\mathbb N$, an $A$-c.e. set $K\subseteq\mathbb N$ is
**$A$-c.e.-complete** when for every $A$-c.e. set $W\subseteq\mathbb N$
there is a total $A$-computable function $f:\mathbb N\to\mathbb N$, in the
sense of [[def-relative-computability-and-enumerability]], such that
$$n\in W\iff f(n)\in K.$$
We write this $W\le_m^A K$.
