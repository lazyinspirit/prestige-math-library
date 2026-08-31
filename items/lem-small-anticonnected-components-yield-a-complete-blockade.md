---
id: lem-small-anticonnected-components-yield-a-complete-blockade
kind: lemma
title: "Small anticonnected components yield a complete blockade"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-anticonnected-graph-and-anticonnected-component,
       def-blockade-length-and-width,
       lem-components-are-anticomplete-and-anticomponents-complete]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. VII. The five-vertex path, Lemma 4.1"
      url: "https://arxiv.org/html/2312.15333v2"
pipeline_run: null
---

## Statement

Let $G$ be a graph on $n$ vertices, and let $k\ge 2$ be an integer. Suppose
every anticonnected component of $G$ has size less than $n/k$. Then $G$
contains a complete blockade of length at least $k/2$ and width at least
$n/(2k)$.

## Facts & Assumptions

**Given:** A graph $G$ on $n$ vertices and an integer $k\ge 2$ such that every
anticonnected component of $G$ has size less than $n/k$.

[L1] Distinct anticonnected components are complete to one another
([[lem-components-are-anticomplete-and-anticomponents-complete]]).

## Proof

**Proof technique:** direct packing.

1.1 Partition the anticonnected components into a minimum number of unions $S_0,\dots,S_r$, each of size less than $n/k$, and order them so that $|S_0|\le\cdots\le|S_r|$. Since their union has size $n$, one has $r+1>k$. [given, choose, algebra]

2.1 For every $i\ge1$, minimality gives $|S_{i-1}|+|S_i|\ge n/k$; otherwise these two parts could be merged. The ordering then yields $|S_i|\ge n/(2k)$. Thus $S_1,\dots,S_r$ contain at least $k$ nonempty blocks of width at least $n/(2k)$, and [L1] makes every cross-pair complete. Selecting any $\lceil k/2\rceil$ of them proves the statement. [step 1.1, L1, algebra] ∎
