---
id: lem-koszul-differential-is-well-defined-and-squares-to-zero
kind: lemma
title: "Koszul Differential Is Well Defined And Squares To Zero"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-koszul-complex-of-a-sequence-with-coefficients, lem-koszul-differential-coordinate-formula, lem-koszul-differential-square-pairwise-cancellation]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Koszul complexes and regular sequences"
      url: "https://stacks.math.columbia.edu/tag/0621"
pipeline_run: frontier-31a
---

## Statement

The derivation defining $d$ annihilates the exterior relations, so it descends to $\bigwedge R^n\otimes M$, and its square is zero. Thus $K(\mathbf x;M)$ is a chain complex.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[def-koszul-complex-of-a-sequence-with-coefficients]], [[lem-koszul-differential-coordinate-formula]], [[lem-koszul-differential-square-pairwise-cancellation]].

## Proof

**Proof technique:** direct.

1.1 The graded derivation sends $e_i\wedge e_i$ to $x_ie_i-e_ix_i=0$ and therefore respects the alternating quotient. Its coordinate action is the stated deletion formula. [given, algebra]

2.1 The pairwise cancellation calculation proves $d^2=0$, so the graded modules and this differential satisfy the chain-complex axioms. [step 1.1, algebra] ∎

