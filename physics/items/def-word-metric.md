---
id: def-word-metric
kind: definition
title: "The word metric of a group with respect to a generating set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-word-length-with-respect-to-a-generating-set, lem-word-length-is-well-defined-and-satisfies-the-length-laws, def-metric-space]
aliases: []
landmark: true
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
    - title: "C. Drutu and M. Kapovich, Geometric Group Theory, Section 7.9"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version), Section 5.2"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
---

## Definition

Let $G$ be a group and let $S \subseteq G$ be a generating set. The **word
metric** of $G$ with respect to $S$ is the function

$$d_S : G \times G \to \mathbb{R}, \qquad d_S(g,h) := |g^{-1}h|_S.$$

By [[lem-word-length-is-well-defined-and-satisfies-the-length-laws]], this
function satisfies the metric axioms of [[def-metric-space]]. Thus $(G,d_S)$ is
a metric space, called the **word metric space** of $G$ with respect to $S$.
