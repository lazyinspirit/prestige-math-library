---
id: lem-author-4f716d60801a-lifted-affine-equivalence
kind: lemma
title: Enhanced affine perfect equivalence
status: published
domain: mathematics
deps:
  - thm-author-4f716d60801a-derived-enhancement-input
  - thm-author-4f716d60801a-affine-derived-input
  - lem-author-4f716d60801a-local-perfect-qc
  - lem-author-4f716d60801a-finite-projective-model
  - math:def-perfect-complex-over-a-ring
  - math:def-axiom-of-choice
dependency_roles:
  thm-author-4f716d60801a-derived-enhancement-input: mathematical-premise
  thm-author-4f716d60801a-affine-derived-input: mathematical-premise
  lem-author-4f716d60801a-local-perfect-qc: mathematical-premise
  lem-author-4f716d60801a-finite-projective-model: mathematical-premise
  math:def-perfect-complex-over-a-ring: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 3
---

## Statement
Assume the Axiom of Choice. For $X=\operatorname{Spec}A$ with $A$ commutative and unital, degreewise associated sheaf induces an exact equivalence $\mathcal D(A)\simeq\mathcal D_{\mathrm{qc}}(X)$ of stable infinity-categories, where the target is the full subcategory with quasi-coherent cohomology. It restricts to an equivalence between the full subcategory represented by bounded finite-projective complexes and the full locally perfect subcategory on $X$.

## Facts & Assumptions
**Given:** $A$, $X$ and Choice as stated.

**Goal:** Prove enhanced equivalence for the actual associated-sheaf functor.

[F1] [[thm-author-4f716d60801a-derived-enhancement-input]] gives the localizations and their stable structures.

[F2] [[thm-author-4f716d60801a-affine-derived-input]] gives the classical equivalence induced by associated sheaf and the perfection criterion.

[F3] [[lem-author-4f716d60801a-local-perfect-qc]] places locally perfect objects in the quasi-coherent-cohomology subcategory. [[lem-author-4f716d60801a-finite-projective-model]] and [[math:def-perfect-complex-over-a-ring]] specify the ring-perfect representatives.

## Proof
1.1 Exact degreewise associated sheaf preserves quasi-isomorphisms and cones, so [F1] gives an exact induced functor $L:\mathcal D(A)\to\mathcal D(X)$. Its cohomology sheaves are associated sheaves of module cohomology, so it lands in $\mathcal D_{\mathrm{qc}}(X)$. This full subcategory is stable: on affine opens, quasi-coherent sheaves are closed under kernels, cokernels and extensions, and the cohomology sequence of a cone therefore remains quasi-coherent. [F1, F2, construct]

2.1 By [F2], the functor induced by this same $L$ on homotopy categories is an equivalence. In a stable infinity-category, the homotopy groups of a mapping space at zero are $\pi_m\operatorname{Map}(M,N)\cong\operatorname{Hom}_{h\mathcal D}(M[m],N)$ for $m\ge0$. Exactness and the homotopy-category equivalence identify these groups for $L$; translation in the grouplike mapping spaces treats all basepoints. Thus every mapping-space map is an equivalence, and essential surjectivity follows from the homotopy-category equivalence. Hence $L$ is an equivalence. [F1, F2, step 1.1]

3.1 By [F2], a module complex is ring-perfect exactly when its image is locally perfect. By [F3], every locally perfect object belongs to the target of step 2.1. The equivalence therefore restricts to the stated full subcategories. [F2, F3, step 2.1] ∎
