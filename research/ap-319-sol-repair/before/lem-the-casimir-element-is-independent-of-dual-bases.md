---
id: lem-the-casimir-element-is-independent-of-dual-bases
kind: lemma
title: "The quadratic Casimir element is independent of the choice of dual bases"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-quadratic-casimir-element]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Representations of Lie Groups"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
    - title: "Alexander Kleshchev, Lectures on Infinite Dimensional Lie Algebras"
      url: "https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf"
pipeline_run: null
---

## Statement

The tensor $\sum_i x_i\otimes x^i\in \mathfrak g\otimes \mathfrak g$, and hence the element $C=\sum_i x_ix^i\in U(\mathfrak g)$ from [[def-quadratic-casimir-element]], is independent of the chosen pair of dual bases.

## Facts & Assumptions

**Given:** Two pairs of dual bases of a complex semisimple Lie algebra with respect to its Killing form.

## Proof

**Proof technique:** direct.

1.1 The Killing form identifies $\mathfrak g$ with $\mathfrak g^*$, and under that identification the tensor $\sum_i x_i\otimes x^i$ is the image of the identity map on $\mathfrak g$. Therefore it depends only on the form, not on the chosen dual bases. [given]

2.1 Multiplication $\mathfrak g\otimes \mathfrak g\to U(\mathfrak g)$ sends that basis-independent tensor to the element $\sum_i x_ix^i$ from [[def-quadratic-casimir-element]], so the Casimir element is basis independent as well. [step 1.1] ∎
