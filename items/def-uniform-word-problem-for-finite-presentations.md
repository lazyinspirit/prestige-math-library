---
id: def-uniform-word-problem-for-finite-presentations
kind: definition
title: "The uniform word problem for finite presentations"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-word-problem-for-a-fixed-finite-presentation]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Charles F. Miller III, Decision Problems for Groups - Survey and Reflections"
      url: "https://web.archive.org/web/20240413212033/https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=fcda888d3e64f281e85977c474764527421ce852"
pipeline_run: null
---

## Definition

The **uniform word problem for finite presentations** takes as input both a
finite presentation $\mathcal P=\langle X\mid R\rangle$ and a word $w$ on
$X\sqcup X^{-1}$, and asks whether $w$ is trivial in the group presented by
$\mathcal P$.

Thus the fixed-presentation word problem keeps $\mathcal P$ fixed once and for
all, whereas the uniform problem treats $\mathcal P$ as part of the input.
