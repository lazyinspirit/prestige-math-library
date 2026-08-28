---
id: rem-the-published-group-development-is-the-instance
kind: remark
title: "The published abelian-group composition-series development is the instance"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-zassenhaus-butterfly-lemma-in-an-abelian-category, thm-schreier-refinement-theorem-in-an-abelian-category, thm-jordan-holder-theorem-in-an-abelian-category, thm-zassenhaus-butterfly-lemma, thm-schreier-refinement-theorem, thm-jordan-holder-theorem-for-groups, def-composition-series-composition-factors-and-length]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych, and Victor Ostrik, Tensor Categories, Section 1.5"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: frontier-22
---

When restricted to **abelian groups**, the published group-theory items
[[thm-zassenhaus-butterfly-lemma]],
[[thm-schreier-refinement-theorem]],
[[thm-jordan-holder-theorem-for-groups]], and
[[def-composition-series-composition-factors-and-length]] are the special cases
of the categorical results on this page when the ambient abelian category is
$\mathbf{Ab}$ and subobjects are subgroups. For arbitrary nonabelian groups the
comparison does not apply: $\mathbf{Grp}$ is not an abelian category, normality
is a genuine extra condition, and nonabelian simple factors lie outside
$\mathbf{Ab}$. The present page therefore abstracts precisely the abelian-group
restriction, not the full published group theorems.
