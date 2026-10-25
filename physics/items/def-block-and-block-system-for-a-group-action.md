---
id: def-block-and-block-system-for-a-group-action
kind: definition
title: "Blocks and block systems for a group action"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group-action]
justified_by: []
aliases: []
landmark: true
verification:
  audited: 2026-08-26
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

Let $G$ act on a set $\Omega$ by a left action ([[def-group-action]]), and let
$g\cdot B := \{\, g\cdot b : b \in B \,\}$ for $B \subseteq \Omega$.

A nonempty subset $B \subseteq \Omega$ is a **block** for this action if for
every $g \in G$ one has either
$$g \cdot B = B \qquad \text{or} \qquad (g \cdot B) \cap B = \varnothing.$$

A **block system** is a partition of $\Omega$ into blocks.

Every singleton $\{\omega\}$ is a block, and each orbit of the action is a
block. These are the trivial examples to which later definitions compare all
other block systems.
