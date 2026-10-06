---
id: def-framing-of-a-normal-bundle
kind: definition
title: "Framings of a normal bundle"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 0
deps:
  - def-normal-and-conormal-bundles-of-an-embedded-submanifold
  - prop-normal-and-conormal-bundles-are-smooth-vector-bundles
  - def-smooth-vector-bundle-rank-fibre-and-trivial-bundle
  - def-smooth-embedding
  - prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle
  - def-compact-space
  - def-countable-choice
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Lecture 2, Definition 2.31, printed p.20"
    - title: "John Milnor, Topology from the Differentiable Viewpoint"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "Section 7, framing of a submanifold, printed p.42"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, 2002)"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro"
      locator: "Definition 6.14, electronic p.114"
---

## Definition

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $S\subseteq X$ be a
closed embedded smooth submanifold of a smooth manifold $X$ without boundary,
with normal bundle $\nu(S)=TX|_S/TS$ of rank $k$, a smooth vector bundle over
$S$ by [[prop-normal-and-conormal-bundles-are-smooth-vector-bundles]]
([[def-normal-and-conormal-bundles-of-an-embedded-submanifold]],
[[def-smooth-embedding]]).

A **framing** of $S$ in $X$ is a smooth bundle isomorphism
$$\varphi:\nu(S)\longrightarrow S\times\mathbb R^k$$
over $\mathrm{id}_S$
([[def-smooth-vector-bundle-rank-fibre-and-trivial-bundle]]); equivalently a
trivialization of $\nu(S)$, equivalently a global frame of its sections, and in
Milnor's metric language the same thing as a framing of the orthogonal
complement $TS^\perp$. A **framed submanifold** is a pair $(S,\varphi)$. When a
Riemannian metric on $X$ is supplied, the orthogonal-complement model of the
normal bundle is canonically identified with $\nu(S)$ by
[[prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle]],
which is how Milnor's framings are read in the metric-free quotient convention
used here; a change of ambient metric changes that comparison but not the
framing data itself.

Rank $k=0$ and $S=\varnothing$ are included
([[def-compact-space]]): a framing of a rank-zero bundle is the unique bundle
isomorphism onto $S\times\mathbb R^0=S$, and the empty framing is unique. A
framing is an actual trivialization of $\nu(S)$, never merely a stable
isomorphism of it: adding trivial summands to a normal bundle is a different
construction, and the stable and unstable notions are kept apart throughout
([[def-smooth-vector-bundle-rank-fibre-and-trivial-bundle]]).

The countable-choice hypothesis is inherited solely from the smooth
normal-bundle structure of
[[prop-normal-and-conormal-bundles-are-smooth-vector-bundles]]; this definition
itself selects nothing and proves nothing. The symbol $\nu(S)$ always denotes
the quotient normal bundle $TX|_S/TS$, and the rank-$k$ trivialization that
fixes the identification of the normal fibres with $\mathbb R^k$ is part of the
data, not a choice made afterwards.
