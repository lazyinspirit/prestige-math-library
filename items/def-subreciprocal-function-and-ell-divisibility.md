---
id: def-subreciprocal-function-and-ell-divisibility
kind: definition
title: "Subreciprocal function and ell divisibility"
status: published
origin: pipeline
deps: [def-induced-copy-density-and-homogeneous-restriction-parameter, def-qid-restricted-blockade-with-empty-blocks, def-logarithm-to-a-base, lem-integer-part]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Bucic, Nguyen, Scott and Seymour, Induced subgraph density I"
      url: "https://arxiv.org/html/2301.10147v3"
      locator: "Section 5 before 5.1"
---

## Definition

A function $\ell:(0,1/2)\to(0,\infty)$ is subreciprocal when it is nonincreasing and satisfies $1<\ell(x)\leq1/x$ throughout its domain.

A nonempty finite graph $H$ is $\ell$-divisive if there are witnesses $0<c<1/2$ and $d>1$ such that for every $0<x<c$ and every nonempty finite graph $G$, the inequality $\operatorname{ind}_H(G)\leq x^d|G|^{|H|}$ implies a QID block sequence of length at least $\ell(x)$, width at least $\lfloor x^d|G|\rfloor$, uniformly $x$-sparse in one of $G,\overline G$.

Counts use [[def-induced-copy-density-and-homogeneous-restriction-parameter]], and empty blocks have the convention of [[def-qid-restricted-blockade-with-empty-blocks]]. Floors mean [[lem-integer-part]]. Logarithmic functions used here have base two, in the sense of [[def-logarithm-to-a-base]]. The witnesses are fixed for $H,\ell$, independently of $x,G$.

## Source notes

Proof/convention locator: [Bucic, Nguyen, Scott and Seymour, Induced subgraph density I](https://arxiv.org/html/2301.10147v3), Section 5 before 5.1.
