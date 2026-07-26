---
id: def-first-countable-top
kind: definition
title: "First countable space: a countable neighbourhood base at every point"
status: draft
origin: session
deps: [def-neighbourhood-top, def-countable, def-equinumerous, def-topological-space, def-homeomorphism-and-open-maps]
justified_by: []
aliases: [def-first-countability]
landmark: false
short: "first countable"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
sources:
  scraped: []
  references:
    - title: "First-countable space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/First-countable_space"
    - title: "J. Munkres, Topology, 2nd ed., §30"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

A topological space $(X, \mathcal{T})$ ([[def-topological-space]]) is **first
countable** if every point of $X$ has an at most countable neighbourhood base:
for each $x \in X$ there is a family
$\mathcal{B}_x \subseteq \mathcal{N}(x)$ that is at most countable
([[def-countable]], [[def-equinumerous]]) and such that every neighbourhood of
$x$ contains a member of $\mathcal{B}_x$ ([[def-neighbourhood-top]]).

**"Countable" here means "at most countable"**, as everywhere in this library
([[def-countable]]), so a *finite* neighbourhood base is permitted. That is not a
degenerate case: in a discrete space the one-element family $\{\{x\}\}$ is a
neighbourhood base at $x$, so every discrete space is first countable, and in an
indiscrete space $\{X\}$ is a neighbourhood base at every point.

**The base may be taken to consist of open sets, and it may be taken
decreasing.** If $\mathcal{B}_x$ is an at most countable neighbourhood base at
$x$, then replacing each $N \in \mathcal{B}_x$ by an open $U_N$ with
$x \in U_N \subseteq N$ gives an at most countable neighbourhood base of open
sets. Making the base decreasing, that is arranging
$M_0 \supseteq M_1 \supseteq \dots$, requires enumerating it and forming the
running finite intersections; both operations are carried out inside the proof of
the theorem that uses them, the next item, where the enumeration and the
recursion are cited explicitly rather than assumed here.

**First countability is a topological property**
([[def-homeomorphism-and-open-maps]]): a homeomorphism $h : X \to Y$ carries a
neighbourhood base at $x$ to a neighbourhood base at $h(x)$, since
$N \mapsto h[N]$ is a bijection between the neighbourhood filters preserving
inclusion, and a bijection preserves at most countability
([[def-equinumerous]]).

## Remarks

- **What first countability buys.** It is exactly the hypothesis under which
  sequences suffice to detect the topology: the closure is the sequential closure
  and sequential continuity is continuity. Without it sequences are too weak, and
  both failures occur in the cocountable topology on $\mathbb{R}$, which is
  therefore not first countable.

- **Every metric space is first countable**, the balls of radius $1/n$ for
  $n \ge 1$ forming an at most countable neighbourhood base at each point
  ([[lem-metric-ball-neighbourhood-base]]); so every metrizable space is first
  countable, and a space that is not first countable is not metrizable. That is a
  second obstruction to metrizability, **independent** of the Hausdorff
  obstruction used elsewhere on this page and not stronger than it: the
  indiscrete topology on two points is first countable, as the paragraph above
  records, and is not Hausdorff, so it is caught by the Hausdorff obstruction and
  not by this one. Neither obstruction is a characterisation, and this library
  proves no implication between the two.

- **Second countability is not defined here.** The stronger axiom, an at most
  countable basis for the whole topology, belongs with the other countability
  axioms and has no item in this library; nothing below uses it, and the word is
  not used elsewhere on these pages.
