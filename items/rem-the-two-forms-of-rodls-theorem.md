---
id: rem-the-two-forms-of-rodls-theorem
kind: remark
title: "Bounded degree against bounded density: the two statements of Rödl's theorem, and which one is stronger"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-c-sparse-and-c-restricted-vertex-set, lem-a-sparse-set-has-small-self-density, lem-a-weakly-sparse-set-has-a-large-sparse-subset, cor-rodl-every-h-free-graph-has-a-linear-restricted-set, cor-rodl-in-the-edge-density-form, cor-the-density-form-and-the-degree-form-of-rodls-theorem-are-interchangeable, def-edge-density-between-vertex-sets, def-directional-and-weak-sparsity-between-vertex-sets]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "M. Chudnovsky, A. Scott, P. Seymour, and S. Spirkl, Strengthening Rödl's theorem, sec. 1"
      url: "https://arxiv.org/pdf/2105.07370"
pipeline_run: null
---

The maximum-degree form is stronger than the density form. If every vertex of
$X$ has at most $\epsilon|X|$ neighbours, then the self-density is at most
$\epsilon$ by [[lem-a-sparse-set-has-small-self-density]]. The converse fails:
small average degree does not control exceptional vertices, and a large star is
the basic witness.

What this page proves is the stronger form
[[cor-rodl-every-h-free-graph-has-a-linear-restricted-set]], then derives the
density form [[cor-rodl-in-the-edge-density-form]], and finally shows by
[[cor-the-density-form-and-the-degree-form-of-rodls-theorem-are-interchangeable]]
that the weaker statement implies the stronger one after shrinking the constants
by a fixed factor.
