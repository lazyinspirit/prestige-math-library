---
id: ex-pattern-graph-of-a-pure-blockade
kind: example
title: "The pattern graph of a pure blockade can be a path"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-supplied
generation:
  role: example
deps: [def-pattern-graph-of-a-pure-blockade]
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

For the pure blockade of [[ex-pure-but-not-complete-blockade]], the pattern
graph has vertices $\{1,2,3\}$ and edges $12$ and $23$ but not $13$. So its
pattern graph is the path $P_3$.
