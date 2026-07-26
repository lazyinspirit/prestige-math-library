---
id: def-metric-completion
kind: definition
title: "A completion of a metric space: a complete metric space together with an isometric embedding onto a dense subspace"
status: draft
origin: session
deps: [def-complete-metric-space, def-isometry-and-metric-embedding,
       def-metric-interior-closure-boundary, def-metric-space,
       lem-isometry-is-an-embedding]
justified_by: []
aliases: []
landmark: true
short: "completion of a metric space"
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

Let $(X,d)$ be a metric space ([[def-metric-space]]). A **completion** of $(X,d)$
is a pair $\big((\widehat{X}, \widehat{d}),\, \iota\big)$ in which

- $(\widehat{X}, \widehat{d})$ is a **complete** metric space
  ([[def-complete-metric-space]]);
- $\iota : X \to \widehat{X}$ is an **isometric embedding**, that is
  $\widehat{d}(\iota(x), \iota(y)) = d(x,y)$ for all $x,y \in X$
  ([[def-isometry-and-metric-embedding]]);
- $\iota[X]$ is **dense** in $\widehat{X}$, that is
  $\overline{\iota[X]} = \widehat{X}$
  ([[def-metric-interior-closure-boundary]]).

**The embedding is part of the data, not an afterthought.** A completion is a
pair, and two completions of the same space are compared through their embeddings
([[thm-metric-completion-unique]]); the underlying complete space alone carries
no information about where $X$ sits inside it. This is the same discipline as for
the metric itself: a metric space is a pair, not a set.

**$\iota$ identifies $X$ with a subspace of $\widehat{X}$, metric and topology
included.** An isometric embedding is injective, is an isometry onto its image,
and carries the metric topology of $X$ onto the subspace topology of $\iota[X]$
([[lem-isometry-is-an-embedding]]). So "$X$ is a dense subspace of a complete
space" is an accurate reading of the definition, and the pedantic version with
$\iota$ written out is used only where two completions have to be compared.

**Existence and uniqueness are theorems, not part of the definition.** That every
metric space has a completion is [[thm-metric-completion-exists]]; that any two
are isometric by a unique isometry commuting with the embeddings is
[[thm-metric-completion-unique]]. Until the first of those is proved, the phrase
*the* completion is not licensed, and it is not used here.

## Remarks

- **A complete space is its own completion**, with $\iota$ the identity: the
  identity is an isometric embedding and $X$ is dense in itself. Combined with
  uniqueness, this says that completing changes nothing when there was nothing to
  complete.
- **Density is what pins the completion down.** Without it, any complete space
  containing an isometric copy of $X$ would qualify, and $\mathbb{R}^2$ would be
  a "completion" of $\mathbb{Q}$. Density is exactly the demand that no room be
  added beyond what the missing limits require.
- **What a completion adds is limits, not points of a different kind.** Every
  point of $\widehat{X}$ is a limit of points of $\iota[X]$
  ([[thm-metric-sequential-closure]]), so the new points are precisely the
  destinations that the Cauchy sequences of $X$ were already aiming at
  ([[def-cauchy-in-metric]]). The construction in
  [[thm-metric-completion-exists]] makes that literal by taking the new points to
  be the Cauchy sequences themselves, up to the relation of having distance
  tending to $0$.
