---
id: cex-knot-kt-09-boundary-case
kind: counterexample
title: "A face cocycle need not be the meridian abelianization"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-maximal-abelian-cover-alexander-module
  - alg-abelian-cover-chain-model-from-triangulated-exterior
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Daniel S. Silver and Susan G. Williams, Mahler Measure, Links and Homology Growth, §4"
      url: "https://arxiv.org/pdf/math/0003127"
    - title: "Allen Hatcher, Algebraic Topology, §2.2"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
---

## Statement refuted

For a finite triangulation of the compact exterior of any nonempty oriented link, requiring only that the edge labels sum to zero around every oriented 2-simplex is sufficient to ensure that the labels represent the full meridian abelianization and are admissible input to the chain-model procedure.

## Statement references

[[alg-abelian-cover-chain-model-from-triangulated-exterior]]

## Facts & Assumptions

**Given:** A nonempty oriented $r$-component link with $r\ge1$, a finite triangulation of its compact exterior, its certified positive meridian edge loops, and the label checks in the chain-model procedure. Exhibit labels satisfying every face-sum check but not the prescribed meridian homomorphism.

[A1] AC is the stated hypothesis of the full maximal-abelian-cover definition ([[def-axiom-of-choice]]).

[F1] The procedure requires edge reversal, zero sum around each oriented 2-simplex, and value $e_i$ around the $i$th certified positive meridian loop; failure of any check returns `invalid-labeling` ([[alg-abelian-cover-chain-model-from-triangulated-exterior]]).

[F2] The full meridian abelianization sends the $r$ positive meridian basis classes to the standard basis of $\mathbb Z^r$ ([[def-maximal-abelian-cover-alexander-module]]).


## Counterexample

Assign the zero vector in $\mathbb Z^r$ to every oriented edge. Edge reversal then holds, and the sum around every 2-simplex is zero. However every positive meridian loop also has label sum zero, which differs from $e_i\ne0$ for every component. The induced homomorphism is trivial, not the full meridian abelianization, and the chain-model procedure must reject this labeling.

1.1 For each oriented edge $e$, the zero labeling gives $\ell(\bar e)=0=-0=-\ell(e)$. Summing the three edge labels of any oriented 2-simplex also gives $0+0+0=0$, so every face cocycle check passes. [given, F1, algebra]

1.2 Every edge path, including each certified meridian loop, has total label zero. Since $r\ge1$, each required standard basis vector $e_i$ is nonzero, so the meridian-image check in [F1] fails and the induced map is not the full meridian abelianization in [F2]. Therefore the face-sum condition alone is insufficient, and the procedure returns `invalid-labeling` on this witness. [A1, F1, F2, step 1.1, algebra] ∎

## Sources

[[alg-abelian-cover-chain-model-from-triangulated-exterior]]

[[def-maximal-abelian-cover-alexander-module]]

[[def-axiom-of-choice]]
