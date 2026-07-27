---
id: def-totally-bounded
kind: definition
title: "Finite $\\varepsilon$-net and totally bounded metric space"
status: published
origin: session
deps: [def-metric-space, def-metric-ball, def-metric-bounded-diameter, def-metric-compactness, def-isometry-and-metric-embedding]
justified_by: []
aliases: [def-epsilon-net]
landmark: true
short: "$\\varepsilon$-net, totally bounded"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Totally bounded space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Totally_bounded_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $\varepsilon$ be a
real with $\varepsilon > 0$.

- A **finite $\varepsilon$-net** for $(X,d)$ is a finite subset $F \subseteq X$
  with
  $$X = \bigcup_{y \in F} B(y, \varepsilon) ,$$
  the balls being those of $(X,d)$ ([[def-metric-ball]]). *Finite* is the
  listing form fixed in [[def-metric-compactness]]: $F = \emptyset$, or
  $F = \{y_0, \dots, y_m\}$ for some $m \in \mathbb{N}$ and points
  $y_0, \dots, y_m \in X$.
- $(X,d)$ is **totally bounded** when it has a finite $\varepsilon$-net for every
  real $\varepsilon > 0$.
- A subset $A \subseteq X$ is **totally bounded** when the metric subspace
  $(A,d_A)$ is ([[def-isometry-and-metric-embedding]]); its nets are then finite
  subsets of $A$ and its balls are the balls $B_A(a,\varepsilon)$ of the
  subspace.

**The empty space is totally bounded**, the empty net serving for every
$\varepsilon$, since a union over no indices is empty. Every space listed as
$\{x_0, \dots, x_n\}$ is totally bounded too, itself being an $\varepsilon$-net
for every $\varepsilon$.

**The centres are required to lie in the space.** Writing the condition with
centres in $X$ and balls of $X$ is what makes total boundedness a property of the
metric space $(X,d)$ alone, matching the treatment of compactness in
[[def-metric-compactness]]. For a subset $A$ this matters: the nets of $(A,d_A)$
consist of points of $A$, not of nearby points of the ambient space.

**Total boundedness is stronger than boundedness and is not the same thing.**
A totally bounded space is bounded in the sense of
[[def-metric-bounded-diameter]] — that is claim 1 of
[[lem-totally-bounded-basic]] — and the converse fails, as
[[fs-bounded-implies-totally-bounded]] records. Boundedness asks for one ball
containing the space; total boundedness asks for finitely many balls of *every*
prescribed radius, and it is the second condition that controls how spread out
the space is at small scales.

## Remarks

**Why $\varepsilon$ ranges over the reals here.** Convergence and the Cauchy
condition are tested against rational $\varepsilon$ in this library
([[def-metric-convergence]], [[def-cauchy-in-metric]]), because that is how
[[def-real-limit]] is written; total boundedness is not a limit condition and is
stated for real $\varepsilon > 0$ directly. Nothing turns on the difference: a
net for a rational $\varepsilon' \le \varepsilon$ is a net for $\varepsilon$,
since $B(y,\varepsilon') \subseteq B(y,\varepsilon)$.

**A net is not unique and is not part of the data.** Total boundedness asserts
that nets exist; it names none. Producing one net for each $\varepsilon$
simultaneously, as a function of $\varepsilon$, is a further act of selection,
and where a proof needs that function it says so and pays for it — see
[[thm-complete-and-totally-bounded-implies-compact]] and
[[lem-compact-metric-space-has-a-countable-dense-subset]], each of which spends
the Axiom of Countable Choice ([[def-countable-choice]]) exactly once and at
exactly that point.
