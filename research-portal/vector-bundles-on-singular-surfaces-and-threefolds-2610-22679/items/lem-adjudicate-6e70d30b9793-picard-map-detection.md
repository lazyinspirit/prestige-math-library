---
id: lem-adjudicate-6e70d30b9793-picard-map-detection
kind: lemma
title: The normalized class detects the actual Picard-space map on smooth schemes
status: draft
domain: mathematics
deps:
  - thm-adjudicate-6e70d30b9793-oriented-field-map-input
dependency_roles:
  thm-adjudicate-6e70d30b9793-oriented-field-map-input: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 1
---

## Statement
Let $F^\star$ be a graded, A¹-invariant Nisnevich ring theory on $\mathrm{Sm}_k$ with zero negative weights in every degree and PBF after every smooth base change; the grading is the shifted one, so $F^j=\mathbb Z(j)[2j]$ in the motivic application. Write $\mathrm{Pic}$ for the pointed space of line bundles and their isomorphisms, pointed by the trivial line. Two pointed natural Picard-space maps $\mathrm{Pic}\to\Omega^\infty F^1$ induced by spectrum maps agree up to homotopy if their classes on $(\mathbb P^1,\infty)$ agree. This assertion concerns the actual Picard-space maps, including line-bundle descent data, not merely homomorphisms on affine Picard groups.

## Statement references

[[thm-adjudicate-6e70d30b9793-oriented-field-map-input]]

## Facts & Assumptions
[F1] The proof of BEM Lemma 3.27, imported in [[thm-adjudicate-6e70d30b9793-oriented-field-map-input]], identifies the derived mapping group from $\Sigma^\infty\mathrm{Pic}$ to $F^1$ with the reduced group on $\mathbb P^1$ under precisely these hypotheses. Its proof first establishes equality of the full maps (3.28), before deducing its stated consequence on units.

## Proof
**Given:** $F$ and the two maps as stated.

**Goal:** Apply the actual map-detection statement with its phantom-term hypothesis.

1.1 The classifying map $\operatorname{colim}_m(\mathbb P^m,\infty)\to\mathrm{Pic}$ is an A¹-Nisnevich equivalence. PBF after each smooth base change and zero negative weights make the reduced coefficient spectra $F^1(\mathbb P^m)$ constant for $m\geq1$, in all degrees. Thus the mapping inverse-limit sequence has zero $\lim^1\widetilde\pi_1$ term. Restriction of homotopy classes from the suspension spectrum of Picard space to $\mathbb P^1$ is injective (indeed an isomorphism). These are exactly the steps of [F1]. [F1]

2.1 The hypothesis gives the same reduced class under this restriction, so the spectrum maps from $\Sigma^\infty\mathrm{Pic}$ agree. By the suspension-spectrum/Ω∞ adjunction their original Picard-space maps are homotopic. This does not assert a uniqueness theorem for an arbitrary entire spectral map out of $R\Gamma\mathbb G_m[1]$ beyond the adjoint Picard-space map needed here. [F1, step 1.1] ∎
