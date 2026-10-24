---
id: ex-mayer-vietoris-computation-of-sphere-homology
kind: example
title: "Mayer–Vietoris computation of sphere homology"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-mayer-vietoris-sequence-in-singular-homology, cor-contractible-nonempty-spaces-have-the-homology-of-a-point, def-zero-simplex-augmentation-and-reduced-singular-homology]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, Example 2.46"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
pipeline_run: frontier-31a
---

## Example

For $n\ge1$, cover $S^n$ by two open hemispherical neighborhoods. Reduced
Mayer–Vietoris identifies $\widetilde H_k(S^n;G)$ with
$\widetilde H_{k-1}(S^{n-1};G)$.

## Facts & Assumptions

**Given:** The two open hemispherical neighborhoods of $S^n$.

## Verification

**Proof technique:** direct.

1.1 Both hemispherical neighborhoods are contractible and their intersection deformation retracts to $S^{n-1}$. [given, construct]

2.1 The reduced Mayer–Vietoris sequence has zero hemisphere terms, so its connector gives the displayed degree shift. Starting with $S^0$ gives $G$ in degree $n$ and zero elsewhere. [step 1.1, algebra] ∎
