---
id: lem-author-5bfbe3ebf14f-finite-nisnevich-subfamily
kind: lemma
title: Finite subfamilies of Nisnevich covers on the finite-type site
status: published
domain: mathematics
deps:
  - def-nisnevich-covering-interface
  - def-cdh-topology-interface
dependency_roles:
  def-nisnevich-covering-interface: mathematical-premise
  def-cdh-topology-interface: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 8
---

## Statement
In the specified category of separated finite-type schemes over a field $k$, every Nisnevich covering family $\{U_i\to X\}_{i\in I}$ contains a finite subfamily which is still Nisnevich. The empty family suffices if $X=\varnothing$. This does not assert that the residue-field-lifting locus of a given étale map is Zariski open.

## Facts & Assumptions
**Given:** The site above and the pointwise residue-field-lifting definition of a Nisnevich family.

**Goal:** Obtain a finite subfamily with that same pointwise lifting property.

[F1] The completed interfaces specify these schemes and étale covering morphisms. Finite-type schemes over a field are Noetherian of finite dimension; closed reduced subschemes have finitely many irreducible components. [[def-cdh-topology-interface]], [[def-nisnevich-covering-interface]]

[F2] On an integral affine scheme $Z=\operatorname{Spec}A$, a morphism from its generic point into a finite-type $Z$-scheme extends over a nonempty open: choose an affine target neighbourhood over $Z$, write its coordinate ring using finitely many $A$-algebra generators and relations, and clear the finitely many denominators of their images in $\operatorname{Frac}A$. The resulting homomorphism into $A[1/a]$ is the required extension. Relations hold there because $A[1/a]\hookrightarrow\operatorname{Frac}A$ is injective. This argument proves the fact rather than importing a rational-section theorem.

## Proof
1.1 For a nonempty reduced closed subscheme $Z\subset X$ and each of its finitely many generic points $\eta$, choose a residue-preserving lift in one of the $U_i$. This gives a generic section of $U_i\times_X Z_\eta\to Z_\eta$, where $Z_\eta$ is the corresponding integral component. By [F2] it extends over a dense open of that component. Shrink this open to avoid the other components. It is then open also in $Z$. Finitely many such opens have union $O\subset Z$ containing all generic points of $Z$; the finitely many chosen maps provide residue-preserving lifts over $O$. A section preserves residue fields because the induced field maps $\kappa(z)\to\kappa(u)\to\kappa(z)$ have composite identity, so the middle field is the base field. [F1, F2, given]

2.1 The closed reduced complement $Z\setminus O$ has strictly smaller dimension than $Z$. Repeat step 1.1 there. Induction on the finite dimension terminates, and at each stage only finitely many original indices are selected. Thus their union is finite and provides residue-preserving lifts at every point of $X$. Each selected original map remains étale, so it is a Nisnevich subfamily. Nilpotents do not change points or residue fields; starting with $X_{\mathrm{red}}$ therefore proves the claim for $X$ as well. No lifting-locus openness has been asserted. [F1, step 1.1] ∎
