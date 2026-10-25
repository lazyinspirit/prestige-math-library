---
id: def-computably-dominated-oracle
kind: definition
title: "Computably dominated oracles"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-turing-reducibility-and-equivalence]
verification:
  audited: 2026-09-07
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Ludovic Patey, Computability Theory, Definition 5.1"
      url: "https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf"
---

## Definition

An oracle $X\subseteq\mathbb N$ is **computably dominated** if every total
function $f:\mathbb N\to\mathbb N$ computable using $X$ has a total computable
function $g$ with $f(n)\le g(n)$ for every $n$.
