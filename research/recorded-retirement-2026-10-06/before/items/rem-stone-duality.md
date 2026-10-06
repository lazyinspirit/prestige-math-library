---
id: rem-stone-duality
kind: remark
title: "Stone duality for Boolean algebras"
status: draft
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: [thm-ultrafilter-lemma, def-ultrafilter]
aliases: []
landmark: false
short: "Boolean algebras are Stone spaces"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Stone's representation theorem for Boolean algebras (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Stone's_representation_theorem_for_Boolean_algebras"
    - title: "Stone duality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Stone_duality"
    - title: "Stone space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Stone_space"
    - title: "Stone duality (nLab)"
      url: "https://ncatlab.org/nlab/show/Stone+duality"
pipeline_run: null
---

## Statement

For a Boolean algebra $B$ let $S(B)$ be the set of ultrafilters of $B$, topologised by taking as a
base the sets $\hat{b} = \{ U \in S(B) : b \in U \}$ for $b \in B$. Then $S(B)$ is a **Stone
space**: compact, Hausdorff and totally disconnected. Conversely, for a Stone space $Z$ the clopen
subsets form a Boolean algebra.

These two constructions are mutually inverse and give a **dual equivalence** between the category of
Boolean algebras with homomorphisms and the category of Stone spaces with continuous maps. In
particular $b \mapsto \hat{b}$ is an isomorphism of $B$ onto the algebra of clopen subsets of
$S(B)$, so every Boolean algebra is isomorphic to a field of sets.

## Remarks

**Not proved in this library.** Recorded with a citation.

**What would prove it.** The set-theoretic half is already in scope: the points of $S(B)$ are
ultrafilters, and that every Boolean algebra has enough of them is the Boolean prime ideal theorem,
which over ZF is equivalent to the representation theorem itself, and which this library proves in
the filter setting as [[thm-ultrafilter-lemma]] with [[def-ultrafilter]]. What is missing is the
topological half: compactness of $S(B)$, total disconnectedness, and the functoriality that makes
the correspondence an equivalence of categories.

**Why it matters here.** It is the pattern of which the Gelfand theory is the analytic instance: an
algebraic category is turned into a topological one by taking the space of its ultrafilters or
characters. It is also the reason that the library's filter pages are not a detour: ultrafilters are
points of a space, and the space is compact Hausdorff.
