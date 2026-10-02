---
id: lem-projective-line-twisting-sheaf-ample
kind: lemma
title: The projective-line twisting sheaf is ample
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
- def-axiom-of-choice
- def-locally-finite-type-and-finite-type-morphism
- def-very-ample-invertible-sheaf-relative
- lem-projective-space-finite-type-over-base
- lem-very-ample-implies-ample
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-10-02
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: The Stacks Project; elementary local prerequisite for the Step 5b citation
        repair
      url: https://stacks.math.columbia.edu/tag/01VG
---

## Statement

Assume the Axiom of Choice. The sheaf $\mathcal O(1)$ on $\mathbb P^1_k$ is ample for every field $k$.

## Facts & Assumptions

**Given:** AC, a field $k$ and $\mathbb P^1_k$ with its standard twisting sheaf.

[F1] The structure morphism of projective space is finite type, hence quasi-compact; the standard twist is invertible. ([[lem-projective-space-finite-type-over-base]], [[def-locally-finite-type-and-finite-type-morphism]], [[def-very-ample-invertible-sheaf-relative]])

[F2] Under AC, H-very ampleness for a quasi-compact morphism implies relative ampleness, and implies absolute ampleness over an affine base. ([[lem-very-ample-implies-ample]], [[def-axiom-of-choice]])

## Proof

1.1 The identity of $\mathbb P^1_k$ is a quasi-compact closed immersion over $\operatorname{Spec}k$ and pulls $\mathcal O(1)$ back to itself. It therefore witnesses closed H-very ampleness of the standard twist. [F1, construct]

2.1 Since $\operatorname{Spec}k$ is affine, [F2] implies absolute ampleness. AC is used only through the cited projective-space and very-ample-to-ample suppliers. ∎ [F1, F2, step 1.1]
