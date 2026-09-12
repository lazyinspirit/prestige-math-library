---
id: "cor-compact-riemannian-manifolds-are-geodesically-complete"
kind: "corollary"
title: "Compact Riemannian manifolds are geodesically complete"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-countable-choice","rem-boundaryless-convention-for-geodesic-flow-and-hopf-rinow","def-geodesically-complete-riemannian-manifold","prop-components-of-a-topological-manifold-are-open-and-at-most-countable","thm-components-partition-and-are-closed","thm-closed-subspace-of-a-compact-space-is-compact","thm-the-riemannian-distance-topology-is-the-manifold-topology","thm-compactness-agrees-with-metric-compactness","thm-compact-implies-complete-and-totally-bounded","thm-hopf-rinow"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Theorem 19.2.1 and compact-manifold consequence, pp.141--144
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Assume $\mathrm{AC}_\omega$. Every compact boundaryless Riemannian manifold is
geodesically complete, including when it is disconnected or empty.

More explicitly, each connected component is compact and complete for its own
Riemannian distance, and every maximal geodesic in that component is defined
on all of $\mathbb R$.

## Facts & Assumptions

**Given:** A compact boundaryless Riemannian manifold $(M,g)$.

[A1] [[def-countable-choice]] is the assumed $\mathrm{AC}_\omega$, and [[rem-boundaryless-convention-for-geodesic-flow-and-hopf-rinow]] fixes the boundaryless convention.

[F1] [[prop-components-of-a-topological-manifold-are-open-and-at-most-countable]] makes every component $C$ open, so it is a boundaryless Riemannian manifold with restricted metric. [[thm-components-partition-and-are-closed]] makes $C$ closed in $M$.

[F2] [[thm-closed-subspace-of-a-compact-space-is-compact]] makes every such $C$ compact in its manifold topology.

[F3] [[thm-the-riemannian-distance-topology-is-the-manifold-topology]] says the intrinsic Riemannian distance $d_{g|_C}$ induces that topology. [[thm-compactness-agrees-with-metric-compactness]] therefore makes $(C,d_{g|_C})$ a compact metric space, and [[thm-compact-implies-complete-and-totally-bounded]] makes it complete without any choice principle.

[F4] Under [A1], [[thm-hopf-rinow]] makes every nonempty connected boundaryless Riemannian manifold that is complete for its Riemannian distance geodesically complete. [[def-geodesically-complete-riemannian-manifold]] says that geodesic completeness of a disconnected manifold is exactly this componentwise condition.

## Proof

**Proof technique:** direct.

1.1 If $M=\varnothing$, no initial vector exists, so the universal condition in [F4] is vacuous and $M$ is geodesically complete. Suppose $M\ne\varnothing$ and fix a connected component $C$. It is nonempty by definition, and [F1] makes it an open-and-closed connected boundaryless Riemannian submanifold. [F1, F4]

2.1 Compactness of $M$ and closedness of $C$ make $C$ compact by [F2]. By [F3] this is also compactness of the metric space $(C,d_{g|_C})$, and that metric space is complete. [F2, F3, step 1.1]

3.1 All hypotheses of [F4] now hold for $C$, so every maximal geodesic in $C$ has domain $\mathbb R$. The component was arbitrary, and the componentwise clause of [F4] therefore makes $M$ geodesically complete. [F4, step 2.1]

4.1 In dimension zero every component is a singleton, and step 3.1 says its constant geodesics are global. Dimension one is unchanged. Zero initial velocity likewise gives a constant global geodesic. No ball radius, finite endpoint, or minimizer is chosen in this proof. The implication is one-way; noncompact complete manifolds show why no converse is claimed. Assumption [A1] is used through [F4]'s geodesic and Hopf--Rinow constructions; the closed-subset and compact-metric-space implications in [F2]--[F3] are choice-free. [A1, F2, F3, F4, step 1.1, step 2.1, step 3.1] ∎

## Source locator

Datar, Theorem 19.2.1 and its proof, pp.141--144: compactness gives metric completeness, hence geodesic completeness; the authored proof states the empty and disconnected componentwise cases explicitly.
