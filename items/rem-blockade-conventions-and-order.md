---
id: rem-blockade-conventions-and-order
kind: remark
title: "This page fixes the blockade conventions and the role of order"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "T. H. Nguyen, Notes on Recent Work on the Erdős–Hajnal Conjecture"
      url: "https://web.math.princeton.edu/~tunghn/ehnotes.pdf"
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

On this page, a blockade is an ordered sequence of disjoint vertex sets.
Length and width ignore that order, but directional notions do not:
an $x$-sparse blockade is one in which later blocks are $x$-sparse to earlier
ones. So reversing the block order can destroy $x$-sparsity even when every
unordered pair of blocks is weakly sparse.

The page also keeps the source convention that all graphs are finite, simple,
and undirected.
