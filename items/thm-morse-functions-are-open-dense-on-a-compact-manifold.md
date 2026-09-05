---
id: thm-morse-functions-are-open-dense-on-a-compact-manifold
kind: theorem
title: "On a compact smooth manifold, the Morse functions form an open dense subset in the $C^2$ and hence $C^\\infty$ topology"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-morse-functions-are-dense-by-relative-jet-transversality, lem-compact-morse-critical-points-have-uniform-hessian-gaps, lem-no-new-critical-points-under-a-compact-c1-small-perturbation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Shintaro Fushida-Hardy, Morse theory"
      url: "https://www.scribd.com/document/488533132/morse"
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, Part 10"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-10.pdf"
---

## Statement

Let $M$ be a compact smooth manifold. Then the Morse functions
$M\to\mathbb R$ form an open dense subset of $C^\infty(M,\mathbb R)$ in the
$C^2$ topology. Consequently they also form an open dense subset in the
$C^\infty$ topology.

## Facts & Assumptions

**Given:** A compact smooth manifold $M$.

[L1] Every $C^\infty$ neighbourhood contains a Morse function ([[thm-morse-functions-are-dense-by-relative-jet-transversality]]).

[L2] A compact Morse function has finitely many critical points with disjoint neighbourhoods carrying a uniform Hessian gap, and sufficiently small $C^2$ perturbations have exactly one nondegenerate critical point in each such neighbourhood ([[lem-compact-morse-critical-points-have-uniform-hessian-gaps]]).

[L3] On the compact complement of those neighbourhoods, sufficiently small $C^1$ perturbations create no new critical points ([[lem-no-new-critical-points-under-a-compact-c1-small-perturbation]]).

## Proof

**Proof technique:** direct.

1.1 Density is immediate from [L1]: given any smooth function and any $C^\infty$ neighbourhood of it, there is a Morse function in that neighbourhood. Since the $C^\infty$ topology is finer than the $C^2$ topology on the same compact manifold, this already implies density in the $C^2$ topology as well. [L1, given]

1.2 Let $f$ be Morse. Apply [L2] to choose pairwise disjoint critical neighbourhoods $U_1,\dots,U_r$ for the critical points of $f$, with the stated persistence and Hessian-gap properties. Apply [L3] to the complement $M\setminus\bigcup_iU_i$. Then every function $g$ sufficiently close to $f$ in the $C^2$ topology has exactly one critical point in each $U_i$, all those critical points are nondegenerate by [L2], and there are no further critical points outside the $U_i$ by [L3]. [L2, L3, given, choose]

2.1 Therefore every critical point of such a nearby function $g$ is nondegenerate. Hence $g$ is Morse. This proves that the Morse functions are open in the $C^2$ topology. [step 1.2]

3.1 Combining steps 1.1 and 2.1 gives that the Morse functions form an open dense subset in the $C^2$ topology. Because the identity map from the $C^\infty$ topology to the $C^2$ topology is continuous on a compact source, the same set is also open and dense in the $C^\infty$ topology. [step 1.1, step 2.1] ∎
