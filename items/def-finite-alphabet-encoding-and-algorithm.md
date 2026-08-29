---
id: def-finite-alphabet-encoding-and-algorithm
kind: definition
title: "Finite alphabets, encoded inputs, and algorithms"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Charles F. Miller III, Decision Problems for Groups - Survey and Reflections"
      url: "https://web.archive.org/web/20240413212033/https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=fcda888d3e64f281e85977c474764527421ce852"
    - title: "Alex Bishop, Minicourse: On Decision Problems in Groups"
      url: "https://alexbishop.github.io/blog/talks/2025/02/07/on-decision-problems-in-groups"
pipeline_run: null
---

## Definition

Fix a finite alphabet $\Sigma$. An **encoded input** is a finite word in
$\Sigma^\ast$. An **algorithm** on inputs from $\Sigma^\ast$ is a deterministic
procedure that, for each input word, either halts with an output or runs
forever. A decision algorithm for a set $L\subseteq\Sigma^\ast$ is one that
halts on every input and outputs YES exactly on the words of $L$.
