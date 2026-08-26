---
id: rem-fox-sudakov-quantitative-density-theorem
kind: remark
title: "Fox–Sudakov: a quantitative density form of Rödl's theorem"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-supplied
deps: []
proved_here: false
external_dependency:
  source_url: "https://arxiv.org/html/2301.10147"
  exact_statement: "For every finite graph H there exists C_H>0 such that for every x in (0,1/2) and every H-free graph G there is S subseteq V(G) with |S| >= 2^{-C_H (log_2(1/x))^2} |V(G)| such that one of G[S] and overline{G}[S] has at most x * binom(|S|,2) edges."
  local_proof_attempt: "A local proof would require rebuilding the quantitative density theorem from Induced subgraph density. I, which lies outside this page's prerequisite closure."
  necessity: "The next theorem proves the classical Erdos-Hajnal lower bound from exactly this quantitative input and no stronger one."
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Matija Bucić, Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. I. A loglog step towards Erdős-Hajnal, Theorem 1.5"
      url: "https://arxiv.org/html/2301.10147"
---

## Statement

For every finite graph $H$ there exists a constant $C_H>0$ such that for every
real $x$ with $0<x<1/2$ and every finite $H$-free graph $G$, there is a vertex
set $S\subseteq V(G)$ with
$$|S|\ge 2^{-C_H(\log_2(1/x))^2}|V(G)|$$
such that one of the induced graphs $G[S]$ and $\overline{G}[S]$ has at most
$$x\binom{|S|}{2}$$
edges.

## Remarks

This page uses only that $H$-free specialization and keeps the source's base-2
logarithm convention. A local proof belongs to the quantitative induced-density
track rather than to this page, so the result is recorded here and cited by
[[thm-classical-erdos-hajnal-bound]].
