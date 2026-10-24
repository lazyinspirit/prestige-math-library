---
id: ex-pure-but-not-complete-blockade
kind: example
title: "A pure blockade that is neither complete nor anticomplete"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-supplied
generation:
  role: example
deps: [def-complete-anticomplete-pure-and-x-sparse-blockades]
aliases: []
landmark: false
verification:
  audited: 2026-08-27
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Erdős-Hajnal for graphs with no 5-hole, §5"
      url: "https://arxiv.org/html/2102.04994v1"
pipeline_run: null
---

## Example

Take three singleton blocks $B_1=\{1\}$, $B_2=\{2\}$, $B_3=\{3\}$, and let the
graph have edges $12$ and $23$ but not $13$. Then

- $(B_1,B_2)$ is complete,
- $(B_2,B_3)$ is complete, and
- $(B_1,B_3)$ is anticomplete.

So $(B_1,B_2,B_3)$ is pure, but it is neither complete nor anticomplete.
