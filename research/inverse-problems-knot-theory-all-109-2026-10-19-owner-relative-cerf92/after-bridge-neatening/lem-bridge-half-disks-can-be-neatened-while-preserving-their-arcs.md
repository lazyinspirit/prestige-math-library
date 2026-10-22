---
id: lem-bridge-half-disks-can-be-neatened-while-preserving-their-arcs
kind: lemma
title: "Bridge half-disks can be neatened while preserving their arcs"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-countable-choice
  - thm-collar-neighborhood-theorem
  - lem-manifold-bump-for-a-compact-set-inside-an-open-set
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
---

## Statement

Assume Countable Choice. Let $B$ be a compact smooth three-manifold with boundary, put $H=\{(u,v):u^2+v^2\le1,\ v\ge0\}$, and let $\gamma:H\to B$ be a supplied smooth embedding, including smoothness in corner charts at the two endpoints. Suppose its bottom edge maps into $\partial B$ and all its other points map into $\operatorname{Int}B$. Suppose the semicircular edge maps to a neat proper arc $a$. Then there is an arbitrarily small smooth perturbation of $\gamma$, unchanged on its entire boundary and on neighborhoods of the semicircular edge and its endpoints, whose image is transverse to $\partial B$ along the whole bottom edge. It is still an embedded bridge half-disk for the SAME arc and the SAME boundary arc. Finitely many initially disjoint such disks can be perturbed simultaneously while remaining disjoint, and the perturbations may avoid any specified compact set disjoint from the initial disks.

This chooses a new bridge witness; it does not assert a boundary-preserving ambient isotopy from a disk initially tangent to $\partial B$. Neatness of the given arc, and the parametrized half-disk, are hypotheses.

## Facts & Assumptions

**Given:** The manifold, supplied bridge half-disk and neat arc in the Statement.

[F1] A smooth boundary collar exists under Countable Choice. ([[thm-collar-neighborhood-theorem]])

[F2] Smooth compact-set cutoffs exist. ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]])

[A1] Countable Choice is allowed; only finite covers, finite inequalities and finitely many choices are used beyond [F1]. ([[def-countable-choice]])

## Proof

**Given:** The data in the Statement.

1.1 Use [F1] to write an inward boundary collar as $\partial B\times[0,\delta)$, with inward normal coordinate $r$. Near the bottom edge write $\gamma(u,v)=(p(u,v),r(u,v))$ in these collar coordinates. Here $r(u,0)=0$, $r(u,v)>0$ for $v>0$, and therefore $a(u):=\partial_vr(u,0)\ge0$. At $u=\pm1$ the inward tangent to the semicircular edge is a positive multiple of $\partial_v$. Its image is transverse to $\partial B$ by the assumed neatness of the arc. Thus $a(\pm1)>0$, and $a$ remains positive on fixed small bottom-edge neighborhoods of the endpoints. Choose $\eta>0$ so those neighborhoods contain $|u|\ge1-2\eta$. All subsequent changes will be supported away from these endpoint neighborhoods. [F1, given, choose, algebra]

2.1 Choose $0\le\chi(u)\le1$ supported in $(-1+\eta,1-\eta)$ and equal to one on $[-1+2\eta,1-2\eta]$. Choose $h>0$ so the rectangle $|u|\le1-\eta$, $0\le v\le h$ lies in $H$, its image lies in the collar, and its upper edge stays away from the semicircular edge. Let $0\le\zeta(v)\le1$ equal one near zero and vanish for $v\ge h/2$. For sufficiently small $\epsilon>0$ define, on that rectangle, $$\gamma_\epsilon(u,v)=\bigl(p(u,v),r(u,v)+\epsilon v\chi(u)\zeta(v)\bigr),$$ and leave $\gamma$ unchanged elsewhere. Cutoffs [F2] make the definitions agree smoothly at the support edges, including their derivatives. The added term is nonnegative, stays within the collar for sufficiently small $\epsilon$, and vanishes on $v=0$. Thus the boundary map is unchanged, interior points stay interior, and the whole semicircular arc and endpoint neighborhoods are unchanged. On the bottom edge the new inward derivative is $a(u)+\epsilon\chi(u)>0$: where $\chi\ne1$ the original derivative was already positive, and on the remaining middle interval the added term is positive. This is the required transversality. [F2, step 1.1, construct, algebra]

3.1 For completeness, the perturbation remains an embedding for all sufficiently small $\epsilon$. Its coordinate differences tend uniformly to zero with their first derivatives on compact $H$. Rank two persists by a finite cover of source charts where the original derivative has a fixed injectivity bound. In smaller convex chart neighborhoods a left inverse of the derivative at the center, together with the line-segment integral, gives a lower bound $|\gamma_\epsilon(x)-\gamma_\epsilon(y)|\ge c|x-y|$ for all sufficiently close pairs, uniformly over the finite cover. This uses corner charts with convex halfspace or quadrant domains at boundary points. For the remaining pairs choose a fixed positive source-distance threshold below the Lebesgue number of that finite cover. The compact set of pairs separated by this threshold has a positive minimum original image distance, because $\gamma$ is injective. A smaller uniform perturbation preserves its positivity. Thus $\gamma_\epsilon$ is injective and immersive; compactness makes it an embedding. For finitely many disjoint disks their compact images have positive pairwise distances in any fixed auxiliary metric, as does their union from the specified disjoint compact set. Choose all perturbations smaller than these finitely many distance margins. Such a metric can be given by finitely many coordinate norms and a finite bump partition on the relevant compact neighborhood, so no stronger choice assumption is introduced. The boundary and arc preservation from step2.1 remains exact. This proves every assertion by choosing new bridge disks, without asserting a false ambient change of boundary tangency. [A1, F2, step 2.1, choose, algebra] ∎
