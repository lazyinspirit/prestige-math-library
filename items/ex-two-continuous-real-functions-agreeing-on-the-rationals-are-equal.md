---
id: ex-two-continuous-real-functions-agreeing-on-the-rationals-are-equal
kind: example
title: "Two continuous maps $\\mathbb{R} \\to \\mathbb{R}$ agreeing at every rational are equal"
status: published
origin: session
deps: [cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal,
       lem-rat-embeds-dense, def-dense-top, def-hausdorff-space,
       lem-real-line-is-a-metric-space, def-metrizable-space, def-continuity-real,
       lem-real-and-metric-notions-agree, def-continuous-map-top, def-interval]
justified_by: []
aliases: []
landmark: false
short: "a continuous real function is determined on the rationals"
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
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "J. Munkres, Topology, 2nd ed., §31"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Example

Let $f, g : \mathbb{R} \to \mathbb{R}$ be continuous
([[def-continuity-real]]) and suppose

$$f(q) = g(q) \qquad \text{for every } q \in \mathbb{Q}_{\mathbb{R}} ,$$

where $\mathbb{Q}_{\mathbb{R}}$ is the set of rationals inside $\mathbb{R}$
([[lem-rat-embeds-dense]]). Then $f = g$.

So a continuous real function is determined by its values at the rationals, and
two continuous functions that are visibly different must already differ at some
rational. Nothing is claimed about which functions on $\mathbb{Q}_{\mathbb{R}}$
extend continuously to $\mathbb{R}$; the statement is about uniqueness of the
extension only.

## Facts & Assumptions

**Given:** Continuous $f, g : \mathbb{R} \to \mathbb{R}$ agreeing at every rational, with $\mathbb{R}$ carrying its usual topology.

[A1] $U \subseteq \mathbb{R}$ is open in the usual topology exactly when for every $x \in U$ there is a real $r > 0$ with $(x - r, x + r) \subseteq U$ ([[lem-real-line-is-a-metric-space]], claims 2 and 3, [[def-metrizable-space]], [[def-interval]]).

[A2] $A \subseteq \mathbb{R}$ is dense exactly when $U \cap A \ne \varnothing$ for every nonempty open $U \subseteq \mathbb{R}$ ([[def-dense-top]], form 2).

[L1] Strictly between any two reals lies a rational ([[lem-rat-embeds-dense]]).

[L2] $\mathbb{R}$ with its usual topology is Hausdorff, being metrizable ([[def-metrizable-space]], [[def-hausdorff-space]]).

[L3] For a real function, $\varepsilon$-$\delta$ continuity is continuity as a map of topological spaces ([[lem-real-and-metric-notions-agree]], claim 1, [[def-metrizable-space]], [[def-continuous-map-top]]).

[L4] Two continuous maps into a Hausdorff space agreeing on a dense subset of their common domain are equal ([[cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal]]).

## Verification

**Proof technique:** direct.

1.1 $\mathbb{Q}_{\mathbb{R}}$ is dense in $\mathbb{R}$: given a nonempty open $U$, pick $x \in U$ and by [A1] a real $r > 0$ with $(x-r, x+r) \subseteq U$; by [L1] some rational lies strictly between $x - r$ and $x + r$, hence in $U$. [A1, A2, L1]

1.2 $\mathbb{R}$ is Hausdorff and both $f$ and $g$ are continuous as maps of topological spaces. [L2, L3]

2.1 By [L4] applied with domain $\mathbb{R}$, dense subset $\mathbb{Q}_{\mathbb{R}}$ and Hausdorff codomain $\mathbb{R}$, the hypothesis $f = g$ on $\mathbb{Q}_{\mathbb{R}}$ gives $f = g$. [step 1.1, step 1.2, L4] ∎

## Remarks

- **Why the density is established from the order rather than quoted.** What [[cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal]] needs is density in the sense of [[def-dense-top]], a condition on the open sets of $\mathbb{R}$; step 1.1 derives exactly that condition from the statement that a rational lies strictly between any two reals ([[lem-rat-embeds-dense]]), which is where the order of $\mathbb{R}$ enters and the only place it does.

- **Both hypotheses on the codomain and on the maps are needed.** Dropping continuity of one map leaves the conclusion false for the obvious reason, and dropping the Hausdorff condition on the codomain leaves it false for a less obvious one: [[fs-two-continuous-maps-agreeing-on-a-dense-subset-are-equal]] exhibits two continuous maps on $\mathbb{R}$ agreeing at every rational, differing at every irrational, and taking values in a two-point space that is not Hausdorff.

- **The rationals enter at one step only.** They are used in step 1.1 and nowhere else; the argument as written proves the statement for an arbitrary dense subset of $\mathbb{R}$ once density in the sense of [[def-dense-top]] is in hand, and step 1.1 is simply where that is established for $\mathbb{Q}_{\mathbb{R}}$.
