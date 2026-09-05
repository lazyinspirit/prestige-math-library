---
id: thm-excellent-morse-functions-are-open-dense-on-a-compact-manifold
kind: theorem
title: "On a compact smooth manifold, the excellent Morse functions form an open dense subset of the $C^2$ and hence $C^\\infty$ topology"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-morse-function-and-excellent-morse-function, thm-morse-functions-are-open-dense-on-a-compact-manifold, lem-finitely-many-critical-values-can-be-separated-locally, lem-compact-morse-critical-points-have-uniform-hessian-gaps, lem-no-new-critical-points-under-a-compact-c1-small-perturbation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
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
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, Part 11"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-11.pdf"
---

## Statement

Let $M$ be a compact smooth manifold. Then the excellent Morse functions form
an open dense subset of $C^\infty(M,\mathbb R)$ in the $C^2$ topology, and
hence also in the $C^\infty$ topology.

## Facts & Assumptions

**Given:** A compact smooth manifold $M$.

[F1] An excellent Morse function is a Morse function whose distinct critical points have distinct critical values ([[def-morse-function-and-excellent-morse-function]]).

[L1] Morse functions are open dense on a compact manifold ([[thm-morse-functions-are-open-dense-on-a-compact-manifold]]).

[L2] Every $C^\infty$ neighbourhood of a compact Morse function contains a local perturbation whose critical values are pairwise distinct and whose critical Hessians are unchanged ([[lem-finitely-many-critical-values-can-be-separated-locally]]).

[L3] Compact Morse critical points admit disjoint persistence neighbourhoods, and no new critical points appear outside them under sufficiently small perturbation ([[lem-compact-morse-critical-points-have-uniform-hessian-gaps]], [[lem-no-new-critical-points-under-a-compact-c1-small-perturbation]]).

## Proof

**Proof technique:** direct.

1.1 To prove density, let $\mathcal U$ be a $C^\infty$ neighbourhood of an arbitrary smooth function $f$. By [L1], choose a Morse function $h\in\mathcal U$. Because $\mathcal U$ is itself a $C^\infty$ neighbourhood of the compact Morse function $h$, [L2] yields a function $g\in\mathcal U$ with the same critical points and Hessians as $h$, but with pairwise distinct critical values. By [F1], this $g$ is excellent Morse. [F1, L1, L2, given]

1.2 Let $f$ be excellent Morse. By [L3], choose pairwise disjoint critical neighbourhoods $U_1,\dots,U_r$ around the critical points $p_1,\dots,p_r$ of $f$ such that every sufficiently small $C^2$ perturbation has exactly one nondegenerate critical point in each $U_i$ and none outside $\bigcup_iU_i$. Because the critical values $f(p_i)$ are pairwise distinct, choose pairwise disjoint open intervals $I_i$ with $f(p_i)\in I_i$ and $f(U_i)\subseteq I_i$. [F1, L3, given, choose]

2.1 If $g$ is sufficiently close to $f$ in the $C^2$ topology, then step 1.2 gives exactly one critical point $q_i$ of $g$ in each $U_i$ and no others. The $C^0$ closeness keeps $g(q_i)$ inside the same interval $I_i$, so the critical values of $g$ are pairwise distinct because the intervals are disjoint. Since each $q_i$ is nondegenerate, [F1] shows that $g$ is excellent Morse. [F1, step 1.2, algebra]

3.1 Step 1.1 gives density in the $C^\infty$ topology, hence also in the coarser $C^2$ topology, and step 2.1 gives openness in the $C^2$ topology. Every $C^2$-open subset is also $C^\infty$-open on a compact manifold, so the same set of excellent Morse functions is open in the $C^\infty$ topology as well. Thus the excellent Morse functions are open dense in both topologies. [step 1.1, step 2.1] ∎
