---
id: rem-unbracketed-tensor-strings-are-not-yet-defined
kind: remark
title: "Unbracketed tensor strings are not yet defined on this page"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-parenthesised-tensor-word]
verification:
  audited: 2026-08-31
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

## Remark

Before coherence is proved, an unbracketed expression
$A_1\otimes\cdots\otimes A_n$ with $n\geq3$ has no meaning by itself on this
page. A two-fold product is already defined by the tensor bifunctor; for three
or more factors, what is defined is a parenthesised tensor word and its
evaluation functor from [[def-parenthesised-tensor-word]].

So later pages that write an unbracketed string must depend on the coherence
page that licenses suppressing the parentheses. On the present page, every
triple or longer tensor expression is written with its brackets shown.
