---
id: cor-lattice-obstruction-to-smooth-sliceness
kind: corollary
title: A non-diagonal filling lattice obstructs smooth sliceness under the gluing hypotheses
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
  proof: not-supplied
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

1.1 If a smooth slice disk existed, [A1] and the gluing implication [F1] would give a closed smooth simply connected positive-definite manifold with an isometric full-rank embedding $Q_W\hookrightarrow Q_X$. [F2] would identify $Q_X$ with $\mathbb Z^n$, contradicting the assumed nonembedding. This is the conditional deduction the suppliers are intended to prove. [given, A1, A2, F1, F2, construct]

1.2 The conditional contradiction depends on local suppliers [F1] and [F2], neither of which is currently proof-closed in the unrestricted setting. The argument records the exact interface but does not certify that any knot satisfies the universal boundary hypothesis or the claimed conclusion. [F1, F2, step 1.1]

## Unresolved proof obligations

If a smooth slice disk existed, [F1] would give a closed smooth simply connected positive-definite manifold and an isometric full-rank embedding $Q_W\hookrightarrow Q_X$. [F2] would identify $Q_X$ with $\mathbb Z^n$, contradicting the nonembedding hypothesis. The deduction is short, but its current suppliers are not proof-closed: [F1] is conditional on [A1], and the local ASD proof of [F2] has unresolved analytic modules. This corollary is escalated. It makes no claim that nonsliceness alone proves $g_4^{sm}(K)>1$.
