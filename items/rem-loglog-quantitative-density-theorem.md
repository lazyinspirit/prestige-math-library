---
id: rem-loglog-quantitative-density-theorem
kind: remark
title: "Bucić–Nguyen–Scott–Seymour: a log-log quantitative density theorem"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-supplied
deps: []
proved_here: false
external_dependency:
  source_url: "https://arxiv.org/html/2301.10147"
  exact_statement: "For every finite graph H there exists C_H>0 such that for every x in (0,1/2) and every H-free graph G there is S subseteq V(G) with |S| >= 2^{-C_H (log_2(1/x))^2 / log_2 log_2(1/x)} |V(G)| such that one of G[S] and overline{G}[S] has at most x * binom(|S|,2) edges."
  local_proof_attempt: "A local proof would require rebuilding theorem 1.8 of Induced subgraph density. I and the blockade machinery behind it, which are outside this page's prerequisite closure."
  necessity: "The next theorem proves the improved log-log Erdos-Hajnal bound from exactly this quantitative input."
verification:
  sources_checked:
    date: 2026-08-26
    scope: citations
    by: session-audit
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Matija Bucić, Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. I. A loglog step towards Erdős-Hajnal, Theorem 1.8"
      url: "https://arxiv.org/html/2301.10147"
---

## Statement

For every finite graph $H$ there exists a constant $C_H>0$ such that for every
real $x$ with $0<x<1/2$ and every finite $H$-free graph $G$, there is a vertex
set $S\subseteq V(G)$ with
$$|S|\ge 2^{-C_H(\log_2(1/x))^2/\log_2\log_2(1/x)}|V(G)|$$
such that one of the induced graphs $G[S]$ and $\overline{G}[S]$ has at most
$$x\binom{|S|}{2}$$
edges.

## Remarks

Again the statement is recorded exactly in the paper's base-2 convention. The
page uses it only as a source-cited input for
[[thm-loglog-erdos-hajnal-bound]].
