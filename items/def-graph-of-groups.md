---
id: def-graph-of-groups
kind: definition
title: "A graph of groups"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group-homomorphism, def-oriented-graph-with-edge-reversal]
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
    - title: "Jean-Pierre Serre, Trees"
      url: "https://www.scribd.com/document/551505445/Jean-Pierre-Serre-Trees-Springer-Verlag-1980"
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version)"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
pipeline_run: null
---

## Definition

A **graph of groups** $\mathcal G$ consists of:

- a connected oriented graph $X=(V,E)$ in the sense of
  [[def-oriented-graph-with-edge-reversal]],
- a group $G_v$ for each vertex $v\in V$,
- a group $G_e=G_{\bar e}$ for each geometric edge, and
- for each oriented edge $e$, an injective homomorphism
  $\alpha_e:G_e\hookrightarrow G_{o(e)}$.

The opposite orientation $\bar e$ carries the corresponding map
$\alpha_{\bar e}:G_e\hookrightarrow G_{t(e)}$.
