---
id: rem-tensor-category-terminology-is-source-dependent
kind: remark
title: "Tensor-category terminology follows the EGNO convention"
status: draft
origin: pipeline
deps: [def-tensor-and-multitensor-category]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Tensor Categories, Definition 4.1.1"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

This page follows the convention of EGNO, Definition 4.1.1: a tensor category
is a multitensor category with $\operatorname{End}(\mathbf1)\cong k$. Thus the
scalar-unit condition is part of the term here and should be read together with
[[def-tensor-and-multitensor-category]].
