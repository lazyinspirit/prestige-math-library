---
id: def-sharply-k-transitive-actions
kind: definition
title: "Sharply k-transitive actions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-k-transitive-and-k-homogeneous-actions]
justified_by: []
aliases: []
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Chapter 4"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "K. Conrad, Transitive Group Actions"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/transitive.pdf"
pipeline_run: null
---

## Definition

Let $k \ge 1$, and let $G$ act on a set $\Omega$.

The action is **sharply $k$-transitive** if for every ordered $k$-tuples of
pairwise distinct points
$$(\alpha_1,\dots,\alpha_k), \qquad (\beta_1,\dots,\beta_k)$$
there is a unique $g \in G$ with
$$g \cdot \alpha_i = \beta_i \qquad \text{for every } 1 \le i \le k.$$

Thus sharply $k$-transitive means “$k$-transitive, with the transporting
element unique”.
