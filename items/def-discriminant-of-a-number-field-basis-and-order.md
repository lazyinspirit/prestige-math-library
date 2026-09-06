---
id: def-discriminant-of-a-number-field-basis-and-order
kind: definition
title: "Discriminant of a basis and order"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-number-field, def-field-norm-and-trace, def-order-in-a-number-field, def-integral-basis-and-power-integral-basis, thm-ring-of-integers-free-of-rank-degree]
justified_by: [lem-discriminant-change-of-basis]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Milne, Discriminants section"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
---

## Definition

For an ordered $\mathbb Q$-basis $\alpha_1,\ldots,\alpha_n$, set
$$\operatorname{disc}(\alpha_1,\ldots,\alpha_n)=\det(\operatorname{Tr}_{K/\mathbb Q}(\alpha_i\alpha_j))_{i,j}.$$
For an order $\mathcal O\subseteq K$, define $\operatorname{disc}(\mathcal O)$
to be the discriminant of any integral basis of $\mathcal O$. This is
independent of the integral basis: the change matrix between two
$\mathbb Z$-bases is unimodular, and
[[lem-discriminant-change-of-basis]] multiplies the discriminant by the square
of its determinant, which is $1$. Finally,
$d_K:=\operatorname{disc}(\mathcal O_K)$; the existence of an integral basis
of $\mathcal O_K$ is supplied by
[[thm-ring-of-integers-free-of-rank-degree]].
