---
id: rem-conventions-for-prime-graphs
kind: remark
title: "Which small graphs count as prime on this page"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-prime-graph, def-module-of-a-graph, lem-graphs-on-three-vertices-are-not-prime, def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "M. Habib and C. Paul, A Survey on Algorithmic Aspects of Modular Decomposition, sec. 2.4"
      url: "https://arxiv.org/pdf/0912.1457"
    - title: "M. Chudnovsky, The Erdős–Hajnal Conjecture — A Survey, sec. 2"
      url: "https://arxiv.org/pdf/1606.08827"
    - title: "Y. Huang, Q. Ju, and X. Zhou, Erdős-Hajnal beyond the five-vertex path, sec. 1.2"
      url: "https://arxiv.org/pdf/2606.06258v2"
pipeline_run: null
---

This page adopts the direct module-theoretic convention: a graph is prime when
its only modules are the trivial ones. Under that convention every graph on one
or two vertices is prime, and no graph on exactly three vertices is prime
([[lem-graphs-on-three-vertices-are-not-prime]]).

Some sources build a size restriction into the terminology instead. Chudnovsky
phrases primality through non-substitutability for graphs with at least two
vertices, while other texts reserve the word *prime* for graphs on at least four
vertices. These conventions agree with the direct module-theoretic convention
on graphs with at least four vertices, but deliberately differ at smaller
orders. The equivalence with non-substitutability is stated with its size
hypotheses in [[thm-prime-graphs-are-the-graphs-that-are-not-substitutions]].
