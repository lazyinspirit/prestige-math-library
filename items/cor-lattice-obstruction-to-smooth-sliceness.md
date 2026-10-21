---
id: cor-lattice-obstruction-to-smooth-sliceness
kind: corollary
title: Failure of a full-rank standard lattice embedding obstructs smooth sliceness under the gluing hypotheses
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - thm-donaldson-definite-diagonalization
  - lem-slice-branched-cover-produces-definite-four-manifold
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: direct-corollary
---

## Statement

Assume the Axiom of Choice. Let $K\subset S^3$ be a smooth oriented knot whose double branched cover $M=\Sigma_2(K)$ is a rational homology sphere. Suppose $M$ bounds a compact connected smooth simply connected positive-definite four-manifold $W$ with boundary intersection lattice $Q_W$ of rank $n$. Assume $Q_W$ has no isometric full-rank embedding into the standard dot-product lattice $\mathbb Z^n$. If every smooth proper slice disk $D$ for $K$ has a branched-cover boundary inclusion $\pi_1(M)\to\pi_1(B_D)$ whose image normally generates $\pi_1(B_D)$, then $K$ is not smoothly slice. This conditional obstruction gives no numerical lower bound on the smooth four-ball genus beyond excluding genus zero.

## Statement references

[[lem-slice-branched-cover-produces-definite-four-manifold|Conditional branched-cover gluing and lattice embedding]]

[[thm-donaldson-definite-diagonalization|Donaldson diagonalization for smooth simply connected definite four-manifolds]]

## Facts & Assumptions

**Given:** Full AC; the knot, filling, nonembedding condition, and universal normal-generation condition in the statement.

[F1] A smooth slice disk and the normal-generation condition produce a closed smooth simply connected positive-definite gluing with a full-rank isometric embedding of the filling lattice. [[lem-slice-branched-cover-produces-definite-four-manifold]]

[F2] Every closed smooth simply connected positive-definite oriented four-manifold has standard diagonal integral intersection lattice. [[thm-donaldson-definite-diagonalization]]

[A1] The boundary-normal-generation assumption holds for every possible smooth slice disk of $K$; this assumption is retained because [F1] does not prove it universally.

[A2] Full AC is assumed by the branched-cover and intersection-form supplier chain.

## Proof

**Given:** The filling, nonembedding condition, and all hypotheses in the statement.

1.1 Suppose a smooth slice disk $D$ existed. The universal assumption [A1] supplies the normal-generation hypothesis for this actual $D$, so the proved conditional gluing implication [F1] gives a closed smooth simply connected positive-definite manifold $X$ and an isometric full-rank embedding $Q_W\hookrightarrow Q_X$. Its rank is $n$ by the same gluing result. This uses the explicit hypothesis and does not infer normal generation from rational homology. [given, A1, A2, F1, construct]

2.1 By [F2], $Q_X$ is isometric to $\mathbb Z^n$ with its dot product. Composing that isometry with the embedding in step 1.1 contradicts the assumed absence of an isometric full-rank embedding $Q_W\hookrightarrow\mathbb Z^n$. Thus no smooth slice disk exists, proving precisely the conditional nonsliceness conclusion. No larger lower bound on the smooth four-ball genus is deduced. [F2, step 1.1, algebra] ∎
