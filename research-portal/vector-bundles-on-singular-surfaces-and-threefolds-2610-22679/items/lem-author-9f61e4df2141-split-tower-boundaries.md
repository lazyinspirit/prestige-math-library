---
id: lem-author-9f61e4df2141-split-tower-boundaries
kind: lemma
title: Boundary maps vanish for a split tower
status: published
domain: mathematics
deps:
  - def-decreasing-filtered-spectrum
  - lem-author-9f61e4df2141-tail-splitting
  - def-stable-spectra-interface
  - lem-filtered-stage-exact-sequence
  - math:def-axiom-of-choice
dependency_roles:
  def-decreasing-filtered-spectrum: mathematical-premise
  lem-author-9f61e4df2141-tail-splitting: mathematical-premise
  def-stable-spectra-interface: mathematical-premise
  lem-filtered-stage-exact-sequence: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 6
formulation_deps:
  - def-decreasing-filtered-spectrum
  - lem-author-9f61e4df2141-tail-splitting
  - def-stable-spectra-interface
  - math:def-axiom-of-choice
argument_deps:
  - def-decreasing-filtered-spectrum
  - lem-author-9f61e4df2141-tail-splitting
  - def-stable-spectra-interface
  - lem-filtered-stage-exact-sequence
  - math:def-axiom-of-choice
---

## Statement
Assume the Axiom of Choice and the fixed compatible universe and smallness conventions of the stable-spectra interface; universe existence is a separate assumption. Suppose a decreasing augmented tower $F^\bullet E$ is equipped with an equivalence of augmented towers to the direct-sum tail tower of [[lem-author-9f61e4df2141-tail-splitting]]. Then every connecting map $\operatorname{gr}^qE\to F^{q+1}E[1]$ is zero. In particular, every connecting homomorphism on homotopy groups in the stage long exact sequences is zero.

## Facts & Assumptions
**Given:** The augmented tower and the specified equivalence of towers.

**Goal:** Prove the vanishing of its stage boundaries.

[A1] Assume [[math:def-axiom-of-choice]] with the same fixed universes and smallness bounds as [F3]; their existence is assumed separately from Choice. This retains the explicit Choice hypotheses of the tail-tower result [F2] and stage exact-sequence result [F4], as well as the ZFC foundations of the spectral model in [F3]. Invoking these supplied constructions uses this premise; transporting their zero maps adds no selection requirement.

[F1] [[def-decreasing-filtered-spectrum]] defines the graded pieces as cofibers of transitions.

[F2] [[lem-author-9f61e4df2141-tail-splitting]] gives zero connecting maps for the tail tower.

[F3] [[def-stable-spectra-interface]] supplies coherent spectral diagrams, functorial cofibers and their connecting maps, suspension, the zero spectrum, and functorial homotopy groups. Use the foundational and smallness conventions of that interface.

[F4] [[lem-filtered-stage-exact-sequence]] supplies the natural stage long exact sequences; their connecting homomorphisms are induced by the spectral connecting maps under the suspension identification.

## Proof
1.1 Invoke the supplied spectral constructions under [A1]. The equivalence of tower diagrams identifies each transition map with the corresponding tail inclusion. Functoriality of cofiber sequences identifies the connecting map of the given transition with that of the tail inclusion. [A1, F1, F3, given]

2.1 The latter map is zero by [F2], including in negative filtration degrees. Applying the homotopy-group functor of [F3] sends a zero map to the zero homomorphism. By [F4], these are exactly the connecting homomorphisms in the stage long exact sequences, which proves both assertions. [A1, F2, F3, F4, step 1.1] ∎
