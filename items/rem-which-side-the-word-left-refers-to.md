---
id: rem-which-side-the-word-left-refers-to
kind: remark
title: "What 'left' refers to in 'left dual'"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-left-dual-and-right-dual-object]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Michael Muger, Tensor Categories: A Selective Guided Tour, Section 1.5"
      url: "https://arxiv.org/pdf/0804.3587"
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Remark 2.10.3"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Remark

In this library, following EGNO, a **left dual** $X^\vee$ of $X$ is named by
the side on which $X^\vee$ appears in the evaluation map
$X^\vee\otimes X\to\mathbf 1$. Some sources name duals by the side on which the
original object is adjoint instead; that convention reverses the words "left"
and "right" relative to this page.
