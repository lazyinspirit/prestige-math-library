---
id: rem-the-diagonal-convention-in-self-density
kind: remark
title: "Why the self-density bound for a dense set carries a $1/|X|$ slack"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-edge-density-between-vertex-sets, def-c-sparse-and-c-restricted-vertex-set, lem-a-sparse-set-has-small-self-density]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "Y. Zhao, Graph Theory and Additive Combinatorics, sec. 2.1"
      url: "https://yufeizhao.com/gtacbook/gtacbook.pdf"
pipeline_run: null
---

The self-density $d_G(X,X)$ counts ordered adjacent pairs of distinct vertices
and divides by $|X|^2$, so the diagonal pairs never contribute. A clique on
$s$ vertices therefore has self-density $s(s-1)/s^2=1-1/s$, not $1$. That is
why the dense conclusion in [[lem-a-sparse-set-has-small-self-density]] carries
the reciprocal-size term. The density form of Rödl's theorem absorbs this term
by changing its constants and states the cleaner threshold $1-\epsilon$.
