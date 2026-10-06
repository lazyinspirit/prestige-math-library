---
id: cor-regular-homotopy-classes-of-immersions-are-formal-homotopy-classes
kind: corollary
title: "Regular homotopy classes of immersions are formal homotopy classes"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [lem-finite-relative-homotopy-lifting-across-a-weak-equivalence, def-compact-parameter-pair, thm-smale-hirsch-immersion-theorem, lem-smooth-families-and-path-components-in-the-weak-topology, def-regular-homotopy-of-immersions, def-space-of-immersions-and-space-of-formal-immersions, def-weak-homotopy-equivalence, def-homotopy-relative-and-path-homotopy, def-countable-choice]
justified_by: []
aliases: []
external_refs: [rem-arbitrary-compact-parameter-immersion-classification-needs-a-mapping-space-comparison]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery, Ch. 7 §7.4 “The Smale–Hirsch classification of immersions”, printed pp. 142–146 (Theorem 7.35, Proposition 7.39)"
      url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy, Ch. 7 §2 “Obstructions to the existence of embeddings and immersions, the Hirsch–Smale theorem”, printed pp. 226–232 (Theorem 7.5, Corollary 7.6)"
      url: http://math.stanford.edu/~ralph/bookR4.pdf
    - title: "John Francis, The h-Principle, Lectures 5 & 6: The Hirsch–Smale theorem (notes by C. Elliott), PDF pp. 1–4: Lemma 1.1, Corollary 1.2, Lemma 1.3 (Hirsch–Smale Fibration Lemma, n > k), Theorems 1.5 and 1.7, Lemma 1.6, Lemma 1.9"
      url: https://sites.math.northwestern.edu/jnf960/classes/hprin/5%266smalehirsch.pdf
dependency_level: 12
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $m<n$, let $M$ be a compact smooth boundaryless $m$-manifold and let $N^n$ be smooth and boundaryless. The derivative map induces a bijection
$$\{\text{regular homotopy classes of immersions }M\to N\}\longleftrightarrow\{\text{homotopy classes of formal immersions }M\to N\}.$$
Thus two immersions are regularly homotopic if and only if their formal derivatives are homotopic through formal immersions. For every finite CW pair $(P,Q)$ and a fixed genuine family on $Q$, derivative induces a bijection between relative homotopy classes of continuous $P$-families of genuine and formal immersions with that prescribed restriction. The compact smooth parameter-pair form is exactly that of the main theorem: original formal data smoothly holonomic on an open parameter neighbourhood of $Q$ admit relative holonomization; the same holds for a prescribed formal family homotopy whose relative end and parameter data satisfy that neighbourhood hypothesis. A smooth input admits a smooth relative deformation.

## Facts & Assumptions

**Given:** Countable choice, compact boundaryless source $M^m$, boundaryless $N^n$, $m<n$, and the prescribed relative family data where applicable.

[L1] The derivative map is a weak homotopy equivalence, including a bijection on components, and supplies the stated neighbourhood-relative compact smooth parameter form ([[thm-smale-hirsch-immersion-theorem]], [[def-weak-homotopy-equivalence]], [[def-compact-parameter-pair]]).

[L2] For compact $M$, path components of the genuine immersion space are regular homotopy classes, with continuous paths smoothed relative to endpoints ([[lem-smooth-families-and-path-components-in-the-weak-topology]], [[def-regular-homotopy-of-immersions]]).

[L3] A weak equivalence gives lifting up to homotopy relative to every finite CW pair ([[lem-finite-relative-homotopy-lifting-across-a-weak-equivalence]]). Relative homotopies are fixed on their prescribed subset ([[def-homotopy-relative-and-path-homotopy]]).

## Proof

**Proof technique:** direct component and finite-relative lifting comparison.

1.1 By [L1], derivative induces a bijection on $\pi_0$. By [L2], the genuine components are the regular homotopy classes; the formal components are exactly homotopy classes of formal data. This gives the displayed bijection and both directions of the stated regular-homotopy criterion. [L1, L2]

1.2 For a finite CW pair and a genuine restriction $u:Q\to\operatorname{Imm}(M,N)$, [L3] deforms every formal extension $v:P\to\operatorname{FImm}(M,N)$ to the derivative of a genuine extension, fixing $Q$. Hence the relative family comparison is surjective. If two genuine extensions have formally homotopic derivatives rel $Q$, apply [L3] to the finite CW pair $(P\times I,P\times\{0,1\}\cup Q\times I)$ with the prescribed genuine end families and constant $Q$ tracks. The resulting genuine family on $P\times I$ is a relative homotopy between the two extensions. This proves injectivity. Time remains a parameter of maps with source $M$, so this argument does not require an immersion of $P\times M$. [L1, L3, construct]

2.1 For the compact smooth parameter class, apply the separate relative assertion of [L1] to the family itself or to its supplied family homotopy with the full prescribed relative region. Its hypothesis concerns the original data on an open neighbourhood, so it gives exactly the stated relative holonomization and smooth version. For ordinary paths the endpoint flattening and smoothing in [L2] produce regular homotopies. No arbitrary-compact relative conclusion is inferred from weak equivalence alone. [L1, L2, L3, step 1.1]

3.1 If the source or the parameter is empty, the corresponding mapping spaces or families have their unique vacuous data; degree-zero source manifolds are finite and the same component argument applies. Both directions of every classification follow from the bijections proved above. The finite-relative comparison uses no extra choice by [L3]; the countable-choice premise is inherited from [L1] and [L2]. Thus all asserted conclusions are proved. [L1, L2, L3, step 1.1, step 1.2, step 2.1] ∎

## Scope orientation

The original arbitrary compact-pair and arbitrary compact-parameter clauses are preserved verbatim, explicitly without proof, in [[rem-arbitrary-compact-parameter-immersion-classification-needs-a-mapping-space-comparison]]. That remark is an external orientation, not a logical prerequisite of this corollary or its consumers.
