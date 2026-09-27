---
id: def-viral-divisive-finite-family
kind: definition
title: "Quantitative divisiveness for a finite forbidden family"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-induced-copy-number, def-blockade-length-and-width, def-complete-anticomplete-pure-and-x-sparse-blockades]
justified_by: []
aliases: []
landmark: false
sources:
  scraped: []
  references:
    - title: "Nguyen, Scott and Seymour, Induced subgraph density IV, Section 4"
      url: "https://arxiv.org/pdf/2307.06455"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical new_item review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-07-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Definition

A finite family $\mathcal F$ of finite graphs is **divisive** if there are
$b\ge4$ and $0<c\le1/4$ such that, for every $0<x<c$ and every nonempty
finite graph $G$ with $n=|V(G)|\ge x^{-b/2}$ and

$$\operatorname{ind}_H(G)<(x^b n)^{|V(H)|}\quad(H\in\mathcal F),$$

there are a real $2\le k\le x^{-1}$ and an $x$-sparse blockade in $G$ or
an $x$-sparse blockade in $\overline G$, of length at least $k$ and width at least
$n/k^b$. The equivalent second alternative is a $(1-x)$-dense blockade in
$G$.

The lower bound on $n$ makes every block nonempty under the existing blockade
definition. It only removes the small-order case, where a singleton already
satisfies the viral conclusion once its exponent is enlarged.
