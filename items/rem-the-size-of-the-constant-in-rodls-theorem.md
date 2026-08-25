---
id: rem-the-size-of-the-constant-in-rodls-theorem
kind: remark
title: "What this proof gives for $\\delta$, and why the regularity route is expensive"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [cor-rodl-every-h-free-graph-has-a-linear-restricted-set, thm-large-self-regular-subset, thm-szemeredi-regularity-lemma-with-tower-bound, thm-nikiforov-few-induced-copies-force-a-linear-restricted-set]
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
    - title: "J. Conlon, J. Fox, and B. Sudakov, Recent developments in graph Ramsey theory, sec. 3.3"
      url: "https://arxiv.org/pdf/1501.02474"
pipeline_run: null
---

The proof of [[cor-rodl-every-h-free-graph-has-a-linear-restricted-set]] runs
through the self-regular subset theorem and hence through Szemerédi regularity.
Its constant $\delta$ is therefore extremely small: it is assembled from the
regularity output, the counting-lemma constant, and the trimming loss in
[[thm-nikiforov-few-induced-copies-force-a-linear-restricted-set]]. Nothing on
this page claims that this bound is close to optimal.

The significance of the theorem is structural, not quantitative: every
$H$-free graph contains a linearly large region that is sparse or dense in a
strong sense. Later work improves the constants by avoiding the full regularity
machinery; this page does not.
