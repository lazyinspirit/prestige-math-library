---
id: def-complete-metric-space
kind: definition
title: "Complete metric space: every Cauchy sequence converges in the space"
status: draft
origin: session
deps: [def-cauchy-in-metric, def-metric-convergence, def-metric-space,
       lem-metric-limits-unique, def-isometry-and-metric-embedding,
       def-complete-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "complete metric space"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Complete metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Complete_metric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]).

$(X,d)$ is **complete** if every Cauchy sequence in $(X,d)$
([[def-cauchy-in-metric]]) converges to a point of $X$
([[def-metric-convergence]]).

A subset $A \subseteq X$ is called **complete** when the metric subspace
$(A, d_A)$ is complete ([[def-isometry-and-metric-embedding]]); as always, the
metric is part of the data, and $d_A$ is the restriction of $d$ to $A \times A$.

**The limit is unique when it exists**, since limits in a metric space are unique
([[lem-metric-limits-unique]]), so a complete space assigns to each of its Cauchy
sequences one point and not a set of points.

**Completeness is a property of the pair $(X,d)$, not of $X$ and not of the
topology of $d$.** Both quantifiers in the definition are about the metric: the
Cauchy condition is stated with distances, and so is convergence. Two metrics on
the same set can have the same open sets while exactly one of them is complete,
which is the content of [[fs-completeness-is-a-topological-property]] and its
witness. Read the word *complete* as an abbreviation for *complete with respect
to this metric*, always.

## Remarks

- **Do not confuse this with Dedekind completeness.** The least-upper-bound
  property of [[def-complete-ordered-field]] is an order condition on an ordered
  field and is what defines $\mathbb{R}$; the condition here is a metric
  condition and makes sense in any metric space, with no order in sight. On
  $\mathbb{R}$ the first implies the second ([[thm-cauchy-criterion-via-lub]],
  [[thm-euclidean-space-complete]]) and the two are not the same statement: the
  rationals with the usual metric are an ordered field that fails both, while
  there are complete metric spaces with no field structure at all.
- **Every convergent sequence is Cauchy** ([[lem-metric-convergent-implies-cauchy]]),
  so completeness is exactly the assertion that the two classes of sequences
  coincide. It is the converse inclusion that carries all the content.
- **Three sources of completeness are proved on this page.** The real line and
  $\mathbb{R}^n$ are complete ([[thm-euclidean-space-complete]]); a closed subset
  of a complete space is complete ([[thm-complete-subspace-iff-closed]]); and
  every metric space sits densely and isometrically inside a complete one
  ([[thm-metric-completion-exists]]).
