---
id: thm-abelian-cover-chain-model-from-triangulated-exterior-procedure-properties
kind: theorem
title: "Termination and exact validation of the triangulated-exterior chain procedure"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - alg-abelian-cover-chain-model-from-triangulated-exterior
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Daniel S. Silver and Susan G. Williams, Mahler Measure, Links and Homology Growth, §4"
      url: "https://arxiv.org/pdf/math/0003127"
    - title: "Allen Hatcher, Algebraic Topology, §2.2"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
---

## Statement

For every finite ordered triangulation of a compact link exterior with certified positive-meridian edge loops and a label vector on each oriented edge, execution terminates. It returns exactly the finite free graded modules and boundary matrices prescribed by the procedure if and only if edge reversal, every oriented 2-simplex cocycle sum, and every marked-meridian image check pass; otherwise it returns invalid-labeling. The procedure does not recognize whether the supplied triangulation is a link exterior or whether the certified peripheral loops are genuine meridians; those are geometric input hypotheses.

## Statement references

[[alg-abelian-cover-chain-model-from-triangulated-exterior]]

## Facts & Assumptions

**Given:** A finite ordered triangulation of a compact link exterior with certified positive meridian edge loops, and an encoded integer vector label on every oriented edge. Prove the procedure terminates and has exactly the stated validation behavior.

[F1] The procedure checks edge reversal, each oriented 2-simplex sum, and each meridian-loop evaluation, returns `invalid-labeling` upon a failed check, and otherwise constructs one boundary matrix entry for each oriented face incidence of each simplex ([[alg-abelian-cover-chain-model-from-triangulated-exterior]]).

[A1] The finite complex is a valid triangulation of the compact exterior, its 1-skeleton is connected, and the listed boundary loops are already certified as positive meridians. These geometric facts are input hypotheses; the procedure does not test them ([[alg-abelian-cover-chain-model-from-triangulated-exterior]]).

## Proof

1.1 There are finitely many edges, 2-simplices, meridian-loop edges, vertices, simplices, and face incidences in the finite input. Each validation pass performs finitely many additions and comparisons of integer vectors, so it terminates. It returns `invalid-labeling` at the first failed edge-reversal, face-sum, or meridian-image check; if none fails, it proceeds to construction. By [F1] there are no other label-rejection branches, so rejection occurs exactly for the stated failed checks. [given, F1, A1, construct]

2.1 By [A1] the 1-skeleton is finite and connected. The procedure scans its finite ordered edge list, adds an edge exactly when its endpoints lie in different current components, and merges those components. Each addition reduces the number of components by one; connectedness therefore yields a spanning tree after finitely many additions, with exactly $|V|-1$ edges. The paths in this tree have finite length, and the sum of their integer edge labels is a finite computation for each vertex. Each simplex has finitely many edges and faces, so the prescribed exponent and signed Laurent coefficient are computed by finitely many additions, comparisons, and table insertions. There are finitely many simplices, hence all boundary matrices are produced and the algorithm terminates with exactly the free modules and face-incidence entries in [F1]. [A1, F1, step 1.1, construct] ∎

## Sources

[[alg-abelian-cover-chain-model-from-triangulated-exterior]]
