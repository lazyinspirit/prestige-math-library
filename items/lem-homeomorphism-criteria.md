---
id: lem-homeomorphism-criteria
kind: lemma
title: "A continuous bijection is a homeomorphism iff it is open iff it is closed, and homeomorphy is an equivalence relation on spaces"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-homeomorphism-and-open-maps, thm-continuity-characterisations-top, def-continuous-map-top, lem-continuity-is-local-and-pastes]
justified_by: []
aliases: []
landmark: true
short: "homeomorphism criteria"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Homeomorphism (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Homeomorphism"
    - title: "Open and closed maps (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Open_and_closed_maps"
    - title: "J. Munkres, Topology, 2nd ed., §18"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $X$ and $Y$ be topological spaces.

1. Let $f : X \to Y$ be a continuous bijection
   ([[def-continuous-map-top]], [[def-homeomorphism-and-open-maps]]). The
   following are equivalent:
   - (a) $f$ is a homeomorphism;
   - (b) $f$ is an open map;
   - (c) $f$ is a closed map.
2. Homeomorphy is an equivalence relation: $X \cong X$; if $X \cong Y$ then
   $Y \cong X$; and if $X \cong Y$ and $Y \cong Z$ then $X \cong Z$.

Continuity is a genuine hypothesis in claim 1: a bijection that is open and
closed but not continuous exists as soon as two comparable topologies differ, for
instance the identity from the coarser to the finer of two distinct topologies on
one set.

## Facts & Assumptions

**Given:** Topological spaces $X$, $Y$, $Z$ and a continuous bijection $f : X \to Y$ with two-sided inverse $g := f^{-1} : Y \to X$. For a bijection $f$ and any $A \subseteq X$ one has $f[A] = g^{-1}[A]$, and $f[X \setminus A] = Y \setminus f[A]$.

[A1] $f$ is a homeomorphism when it is a continuous bijection and $f^{-1}$ is continuous; $f$ is an open map when images of open sets are open, and a closed map when images of closed sets are closed ([[def-homeomorphism-and-open-maps]]).

[A2] A bijection has a unique two-sided inverse, which is itself a bijection, and the inverse of $f^{-1}$ is $f$ ([[def-homeomorphism-and-open-maps]], [[def-continuous-map-top]]).

[L1] A map is continuous exactly when preimages of open sets are open, and exactly when preimages of closed sets are closed ([[thm-continuity-characterisations-top]], clauses (b) and (c)).

[L2] A composite of continuous maps is continuous ([[lem-continuity-is-local-and-pastes]], claim 1).

## Proof

**Proof technique:** direct.

1.1 Since $f$ is a bijection with inverse $g$, for every $A \subseteq X$ the image $f[A]$ coincides with the preimage $g^{-1}[A]$: $y \in g^{-1}[A]$ means $g(y) \in A$, and applying $f$ gives $y \in f[A]$, while the converse substitution is the same computation read backwards. [given, A2]

1.2 Since $f$ is a bijection, $f[X \setminus A] = Y \setminus f[A]$ for every $A \subseteq X$: surjectivity gives $\supseteq$ and injectivity gives $\subseteq$. [given]

1.3 The identity map of a space is a continuous bijection whose inverse is itself, hence a homeomorphism. [A1, L1]

1.4 If $h : X \to Y$ is a homeomorphism then so is $h^{-1} : Y \to X$: it is a bijection, it is continuous by hypothesis, and its own inverse is $h$, which is continuous. [A1, A2]

2.1 (a) is equivalent to (b): by step 1.1, $g$ is continuous exactly when $g^{-1}[U] = f[U]$ is open for every open $U \subseteq X$, that is exactly when $f$ is an open map. [step 1.1, A1, L1]

2.2 (b) is equivalent to (c): by step 1.2, $f$ carries the complement of $A$ to the complement of $f[A]$, so images of open sets are open exactly when images of closed sets are closed, the two families being exchanged by complementation. [step 1.2, A1, L1]

2.3 If $h : X \to Y$ and $k : Y \to Z$ are homeomorphisms then $k \circ h$ is a homeomorphism: it is a bijection with inverse $h^{-1} \circ k^{-1}$, and both $k \circ h$ and $h^{-1} \circ k^{-1}$ are continuous as composites of continuous maps. [step 1.4, A1, A2, L2]

3.1 Steps 2.1 and 2.2 prove claim 1, and steps 1.3, 1.4 and 2.3 give reflexivity, symmetry and transitivity of $\cong$, which is claim 2. [step 1.3, step 1.4, step 2.1, step 2.2, step 2.3] ∎

## Remarks

- **The lemma is how homeomorphy is verified in practice.** Producing a continuous inverse directly usually means writing a formula and checking continuity a second time; checking instead that the map carries open sets to open sets, or closed sets to closed sets, uses only the map itself.

- **A continuous bijection that is not a homeomorphism.** Take any set carrying two distinct comparable topologies and let $f$ be the identity from the finer to the coarser: it is a continuous bijection, and it is not open, because an open set of the finer topology that is not open in the coarser one is its own image. Both an explicit two-point instance and an instance on $\mathbb{R}$ appear on this page and on the companion page.

- **What claim 2 licenses.** Because $\cong$ is an equivalence relation, "a topological property" is well defined as a property constant on $\cong$-classes ([[def-homeomorphism-and-open-maps]]), and statements of the form "$X$ is not homeomorphic to $Y$" can be proved by exhibiting one topological property on which they differ.
