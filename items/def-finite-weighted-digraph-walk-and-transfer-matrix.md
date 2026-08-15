---
id: def-finite-weighted-digraph-walk-and-transfer-matrix
kind: definition
title: "Finite weighted directed multigraphs, weighted walks and their transfer matrices"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-commutative-ring, def-matrices-over-a-commutative-ring]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "R. P. Stanley, Enumerative Combinatorics, vol. 1, 2nd ed., Section 4.7.1"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
pipeline_run: null
---

## Definition

Let $R$ be a commutative ring ([[def-commutative-ring]]). A **finite weighted directed multigraph over $R$** consists of a finite vertex set $p=\{0,\ldots,p-1\}$, a finite edge set $E$, source and target maps $s,t:E\to p$, and a weight map $w:E\to R$. Parallel edges and loops are allowed.

A **walk of length $n$ from $u$ to $v$** is a sequence $(e_0,\ldots,e_{n-1})$ of edges with $s(e_0)=u$, $t(e_{n-1})=v$, and $t(e_i)=s(e_{i+1})$ whenever $i+1<n$. Its weight is $\prod_{i<n}w(e_i)$. At length zero there is one empty walk from $u$ to $u$, of weight $1_R$, and no empty walk between distinct vertices.

The **transfer matrix** or **weighted adjacency matrix** is $A\in M_p(R)$ ([[def-matrices-over-a-commutative-ring]]) defined by

$$A_{uv}:=\sum_{\substack{e\in E\\s(e)=u,\ t(e)=v}}w(e).$$

An empty edge sum is $0_R$. Rows record sources and columns record targets.

