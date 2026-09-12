---
id: "cor-complete-connected-riemannian-manifolds-are-proper-length-spaces"
kind: "corollary"
title: "Complete connected Riemannian manifolds are proper length spaces"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-countable-choice","rem-boundaryless-convention-for-geodesic-flow-and-hopf-rinow","def-riemannian-distance-on-a-connected-manifold","thm-hopf-rinow"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Theorem 19.2.1 and proof, pp.141--144
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $(M,g)$ be a nonempty, connected,
boundaryless Riemannian manifold whose Riemannian distance $d_g$ is complete.
Then $(M,d_g)$ is a **proper length space** in the following precise sense:

1. every closed bounded subset of $(M,d_g)$ is compact;
2. $d_g(x,y)$ is the infimum of the Riemannian lengths of piecewise-$C^1$
   curves from $x$ to $y$; and
3. for every $x,y\in M$ this infimum is attained by a minimizing geodesic.

## Facts & Assumptions

**Given:** The manifold and completeness hypothesis in the statement.

[A1] [[def-countable-choice]] is the assumed $\mathrm{AC}_\omega$, and [[rem-boundaryless-convention-for-geodesic-flow-and-hopf-rinow]] fixes the boundaryless convention.

[F1] [[def-riemannian-distance-on-a-connected-manifold]] defines $d_g(x,y)$ as the infimum of the lengths of piecewise-$C^1$ curves from $x$ to $y$.

[F2] Under [A1], [[thm-hopf-rinow]] says that on a nonempty connected boundaryless Riemannian manifold, completeness of $(M,d_g)$ implies both compactness of every closed bounded subset and existence, for each $x,y$, of a geodesic of length $d_g(x,y)$.

## Proof

**Proof technique:** direct.

1.1 The completeness hypothesis is condition 1 of [F2]. Its equivalent condition 5 proves clause 1, and its final assertion supplies for each $x,y$ the minimizing geodesic in clause 3. [F2]

2.1 Clause 2 is exactly the definition in [F1]. Combining it with clause 3 shows not only that $d_g$ is the induced length metric, but that its defining infimum is achieved. [F1, step 1.1]

3.1 Nonemptiness, connectedness and absence of boundary are exactly the hypotheses required by [F2]; none is discarded. In dimension zero, $M$ is a singleton, its only closed bounded subsets are empty or singleton, and the constant geodesic realizes distance zero. Dimension one needs no change. At $x=y$ the minimizing geodesic is constant. Empty subsets are covered by clause 1, and there are no radius or endpoint divisions in the proof. The corollary is one-way, so no converse is asserted. Its sole choice assumption is [A1], used through [F2]; reading the defining infimum in [F1] adds no choice. [A1, F1, F2, step 1.1, step 2.1] ∎

## Source locator

Datar, Theorem 19.2.1 and proof, pp.141--144: metric completeness implies the properness and minimizing-geodesic conclusions read off here.
