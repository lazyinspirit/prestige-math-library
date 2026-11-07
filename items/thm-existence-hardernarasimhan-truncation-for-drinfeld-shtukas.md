---
id: thm-existence-hardernarasimhan-truncation-for-drinfeld-shtukas
kind: theorem
title: "Canonical Harder–Narasimhan polygon and finite-type shtuka truncations"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-hardernarasimhan-truncation-for-drinfeld-shtukas
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Laurent Lafforgue, Chtoucas de Drinfeld et correspondance de Langlands"
      url: "https://www.laurentlafforgue.org/math/fulltext.pdf"
      locator: "Chapter I, Proposition I.3, printed pp. 20–21."
    - title: "Tuan Ngo Dac, Compactification des champs de chtoucas et théorie géométrique des invariants"
      url: "https://smf.emath.fr/system/files/filepdf/AST_2007__313__1_0.pdf"
      locator: "Chapter I §§1.2–1.4."
---

## Statement

Fix a rank $r\ge1$, an index $\alpha\in\mathbb R$, and a convex truncation polygon $p:[0,r]\to\mathbb R_{\ge0}$. If $\alpha\notin[0,1]$, work over the intersection $\Lambda\to X\times X$ of the complements of all Frobenius graphs where no nonnegative Frobenius iterate on either factor carries one leg to the other; if $\alpha\in[0,1]$, work over $X\times X$. Every geometric shtuka in this moduli stack has a largest filtration polygon and a unique least-fine filtration defining it. There is a unique open substack whose geometric points are exactly those objects whose canonical polygon is pointwise at most $p$. For each degree $d\in\mathbb Z$, this degree-$d$ substack is of finite type.

## Statement references

[Laurent Lafforgue, Proposition I.3](https://www.laurentlafforgue.org/math/fulltext.pdf)

[Tuan Ngo Dac, Chapter I §§1.2–1.4](https://smf.emath.fr/system/files/filepdf/AST_2007__313__1_0.pdf)

## Proof obligations

No complete local proof is supplied. The source's canonical-filtration existence, uniqueness, openness, and finite-type assertions are all required before using a truncated shtuka stack. They are retained as an explicit proof obligation and are not certified by the source citation.
