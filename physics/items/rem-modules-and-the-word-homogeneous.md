---
id: rem-modules-and-the-word-homogeneous
kind: remark
title: "Why this page says module where some sources say homogeneous set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-module-of-a-graph, def-homogeneous-set-and-homogeneous-number, def-clique-stable-set-and-numbers]
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
    - title: "Y. Huang, Q. Ju, and X. Zhou, Erdős-Hajnal beyond the five-vertex path, sec. 1.2"
      url: "https://arxiv.org/pdf/2606.06258v2"
    - title: "T. Harju, Lecture Notes on Combinatorial Structures in Graph Theory, secs. 2 and 4"
      url: "https://users.utu.fi/harju/Structures/Structure2018.pdf"
pipeline_run: null
---

The target paper uses the phrase *homogeneous set* for what this page calls a
module. This library already uses *homogeneous set* at order 395 for a clique or
a stable set, through the homogeneous number $\operatorname{hom}(G)$
([[def-homogeneous-set-and-homogeneous-number]]), so reusing the same words here
would create an avoidable ambiguity inside the same graph-theory block.

Harju writes *clan* and explicitly notes that it is the same object as a module.
His notes-on-references list the wider synonym family: *closed set* (Gallai),
*autonomous set*, *partitive set*, *externally related set*, *condensible set*,
*homogeneous set*, *interval*, and *module*. The present page adopts Habib and
Paul's word *module* because it is standard and does not collide with the
already-published meaning of *homogeneous set*.
