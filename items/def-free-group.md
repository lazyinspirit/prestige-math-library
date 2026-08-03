---
id: def-free-group
kind: definition
title: "Free group on a set of generators"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group, def-group-homomorphism, def-alphabet-words-and-reduction]
justified_by: [thm-reduced-words-form-the-free-group]
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-03
sources:
  scraped: []
  references:
    - title: "McKernan, Presentations and Groups of Small Order, Lecture 12"
      url: "https://math.mit.edu/~mckernan/Teaching/12-13/Spring/18.703/l_12.pdf"
pipeline_run: null
---

## Definition

A **free group on a set $X$** is a group $F(X)$ together with a map
$\iota:X\to F(X)$ such that, for every group $G$ and every function $u:X\to G$,
there is a unique group homomorphism $\widehat u:F(X)\to G$ satisfying

$$\widehat u\circ\iota=u.$$

The reduced-word construction supplies such a group; the construction and its
universal property are established in [[thm-reduced-words-form-the-free-group]].
When no ambiguity arises, $x\in X$ is identified with its image $\iota(x)$.
