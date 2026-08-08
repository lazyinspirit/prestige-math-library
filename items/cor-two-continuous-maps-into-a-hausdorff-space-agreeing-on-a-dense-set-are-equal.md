---
id: cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal
kind: corollary
title: "Two continuous maps into a Hausdorff space that agree on a dense subset are equal"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-the-agreement-set-of-two-maps-into-a-hausdorff-space-is-closed,
       def-dense-top, thm-closure-characterisation-top, def-hausdorff-space,
       def-continuous-map-top, def-interior-closure-boundary-top]
justified_by: []
aliases: [cor-maps-determined-by-a-dense-set]
landmark: true
short: "maps into a Hausdorff space are determined on a dense set"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Dense set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dense_set"
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "General Topology Notes (UC Riverside)"
      url: "https://math.ucr.edu/~res/math205A-2014/gentop-notes.pdf"
pipeline_run: null
---

## Statement

Let $Z$ be a topological space, let $D \subseteq Z$ be dense
([[def-dense-top]]), let $Y$ be Hausdorff ([[def-hausdorff-space]]) and let
$f, g : Z \to Y$ be continuous ([[def-continuous-map-top]]) with

$$f(d) = g(d) \qquad \text{for every } d \in D .$$

Then $f = g$.

So a continuous map into a Hausdorff space is determined by its restriction to
any dense subset of its domain. Nothing is asserted about *which* functions on
$D$ extend: the statement is about uniqueness of an extension, not existence.

## Facts & Assumptions

**Given:** A topological space $Z$, a dense subset $D \subseteq Z$, a Hausdorff space $Y$, and continuous maps $f, g : Z \to Y$ agreeing at every point of $D$.

[A1] $D$ is dense in $Z$, that is $\overline{D} = Z$ ([[def-dense-top]]).

[L1] The agreement set $E(f,g) = \{\, z \in Z : f(z) = g(z) \,\}$ is closed in $Z$ ([[cor-the-agreement-set-of-two-maps-into-a-hausdorff-space-is-closed]], [[def-hausdorff-space]], [[def-continuous-map-top]]).

[L2] $\overline{A}$ is the smallest closed superset of $A$: it is contained in every closed set containing $A$ ([[thm-closure-characterisation-top]], claim 2, [[def-interior-closure-boundary-top]]).

## Proof

**Proof technique:** direct.

1.1 $E(f,g)$ is closed in $Z$. [L1]

1.2 $D \subseteq E(f,g)$, since $f$ and $g$ agree at every point of $D$. [given]

2.1 $Z = \overline{D} \subseteq E(f,g)$, the equality by [A1] and the inclusion because $E(f,g)$ is a closed set containing $D$. [step 1.1, step 1.2, A1, L2]

3.1 $E(f,g) \subseteq Z$ holds by definition, so $E(f,g) = Z$, that is $f(z) = g(z)$ for every $z \in Z$ and $f = g$. [step 2.1] ∎

## Remarks

- **The Hausdorff hypothesis is spent exactly once**, inside [L1], and the density hypothesis exactly once, at step 2.1. Neither is used anywhere else, and neither can be weakened to the other: a dense agreement set alone does not force equality without a separation hypothesis on the codomain, and a Hausdorff codomain alone plainly does not.

- **Density is a hypothesis about $Z$, not about $Y$.** In particular the statement is about one domain and one dense subset of it; it says nothing about restrictions to subsets that are merely large in some other sense, and there is no cardinality condition anywhere in it.

- **The uniqueness/existence split matters.** A continuous $f : D \to Y$ need not extend continuously to $Z$ at all. What this corollary rules out is *two different* extensions, and that is exactly what makes an extension, when it exists, worth naming.
