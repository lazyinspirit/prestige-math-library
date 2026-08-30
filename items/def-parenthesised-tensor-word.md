---
id: def-parenthesised-tensor-word
kind: definition
title: "Parenthesised tensor words and their evaluation functors"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-monoidal-category]
landmark: true
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, Chapter VII.2"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Chapter 2.9"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: null
---

## Definition

Fix symbols $x_1,\dots,x_n$. A **parenthesised tensor word** on these letters is
formed recursively by:

- each $x_i$ is a word;
- the unit symbol $\mathbf 1$ is a word;
- if $u$ and $v$ are words, then $(u\otimes v)$ is a word;

subject to the condition that, after deleting every $\mathbf 1$ and every pair
of parentheses, the letters $x_1,\dots,x_n$ appear exactly once and in that
order.

If $\mathcal C$ is a monoidal category ([[def-monoidal-category]]), each such
word determines an **evaluation functor**
$E_u:\mathcal C^n\to\mathcal C$ recursively:

- $E_{x_i}$ is the $i$th projection;
- $E_{\mathbf 1}$ is the constant functor at the unit object;
- $E_{(u\otimes v)}$ is the composite of $(E_u,E_v):\mathcal C^n\to\mathcal C\times\mathcal C$
  with the tensor bifunctor.

These evaluation functors are the only tensor expressions regarded as defined on
this page before coherence is proved.
