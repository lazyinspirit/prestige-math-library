---
id: def-harish-chandra-projection
kind: definition
title: "The Harish-Chandra projection"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-universal-enveloping-algebra-as-a-tensor-quotient, thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra, thm-triangular-decomposition-from-a-chosen-positive-root-system]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Representations of Lie Groups"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
    - title: "Lin Chen, Geometric Representation Theory I, Lecture 4"
      url: "https://windshower.github.io/linchen/teaching/s2024/lecture4.pdf"
pipeline_run: null
---

## Definition

Fix a triangular decomposition $\mathfrak g=\mathfrak n^-\oplus \mathfrak h\oplus \mathfrak n^+$ from [[thm-triangular-decomposition-from-a-chosen-positive-root-system]]. By the PBW basis from [[thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]], multiplication gives a vector-space decomposition

$$U(\mathfrak g)=U(\mathfrak h)\oplus \bigl(\mathfrak n^-U(\mathfrak g)+U(\mathfrak g)\mathfrak n^+\bigr).$$

The projection onto the first summand is the **Harish-Chandra projection**

$$\operatorname{pr}\colon U(\mathfrak g)_0\to U(\mathfrak h)=S(\mathfrak h),$$

where $U(\mathfrak g)_0$ denotes the zero-weight subspace for the adjoint action of $\mathfrak h$.
