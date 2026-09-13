---
id: def-orientation-local-system-on-a-manifold-with-boundary
kind: definition
title: Orientation local system on a manifold with boundary
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-orientation-local-system-and-orientation-cover, prop-the-manifold-orientation-system-is-a-local-system, def-local-system-of-r-modules-and-its-pullback, thm-topological-collaring-for-manifold-boundaries]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: Hatcher, Algebraic Topology, Proposition 3.42 and Theorem 3.43, pp.253–254
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
    - title: Davis and Kirk, Lecture Notes in Algebraic Topology, Chapter 5 §2.2, pp.100–103
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
provenance:
  statement: ai-altered
  proof: not-applicable
---

## Definition

Let $M$ be a compact $n$-manifold with boundary $A=\partial M$, let $N=M\setminus A$, and let $R$ be a commutative unital ring. The pointwise local-homology formula for a boundaryless manifold is not used at points of $A$: its degree-$n$ group there would be zero. Instead choose a collar push-in $r:M\to N$ supplied by [[thm-topological-collaring-for-manifold-boundaries]] and define the **orientation local system of $M$** by
$$\mathcal O_M^R:=r^*\mathcal O_N^R,$$
where $\mathcal O_N^R$ is the boundaryless orientation system from [[prop-the-manifold-orientation-system-is-a-local-system]]. Thus transport along a path $\gamma$ in $M$ is orientation transport along $r\gamma$ in the interior.

This definition is independent of the push-in up to a specified natural isomorphism. If $r_0,r_1:M\to N$ are homotopy inverses to the inclusion $i:N\hookrightarrow M$, then $r_0\simeq r_0ir_1\simeq r_1$. For a chosen such homotopy $H$, transport along the track $t\mapsto H(x,t)$ gives an isomorphism $(r_0^*\mathcal O_N^R)_x\to(r_1^*\mathcal O_N^R)_x$. The boundary of the square $(s,t)\mapsto H(\gamma(s),t)$ shows that these stalk maps commute with transport along every $\gamma$; hence they form a natural isomorphism. No claim is made that different homotopies give literally the same isomorphism.

The restriction to $N$ is naturally isomorphic to $\mathcal O_N^R$ because $ri\simeq1_N$. On the boundary, collar product charts identify $\mathcal O_M^R|_A$ with $\mathcal O_A^R$: cross a local $(n-1)$-orientation class of $A$ with the collar interval oriented from positive height toward the boundary, placing that outward direction first, and transport the resulting ambient class to positive collar height. This fixes the outward-normal-first sign. Reversing a boundary loop reverses the ambient local orientation exactly when it reverses the boundary local orientation, so these stalk identifications commute with transport.

When $A=\varnothing$, take $r=1_M$ and recover the published boundaryless system literally. A compact zero-manifold has empty boundary, so no negative-dimensional boundary system occurs. Empty and disconnected manifolds are treated componentwise, and the zero ring gives the corresponding zero stalks. A particular collar push-in is finite geometric data, not a simultaneous choice from a family; no AC is required.
