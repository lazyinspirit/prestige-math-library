---
id: def-quasi-isometry-type-of-a-finitely-generated-group
kind: definition
title: "The quasi-isometry type of a finitely generated group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finitely-generated-group, def-word-metric, thm-two-finite-generating-sets-of-a-group-give-bilipschitz-equivalent-word-metrics, prop-isometries-bilipschitz-equivalences-and-quasi-isometries-form-a-hierarchy]
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
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version), Section 5.2"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
---

## Definition

Let $G$ be a finitely generated group. Choose a finite generating set $S$ and
form the word metric space $(G,d_S)$ of [[def-word-metric]].

By [[thm-two-finite-generating-sets-of-a-group-give-bilipschitz-equivalent-word-metrics]],
the word metrics are bilipschitz equivalent; by
[[prop-isometries-bilipschitz-equivalences-and-quasi-isometries-form-a-hierarchy]]
they are therefore quasi-isometric. Hence the quasi-isometry class of
$(G,d_S)$ is independent of the chosen finite generating set $S$.

This well-defined quasi-isometry class is the **quasi-isometry type** of $G$.
