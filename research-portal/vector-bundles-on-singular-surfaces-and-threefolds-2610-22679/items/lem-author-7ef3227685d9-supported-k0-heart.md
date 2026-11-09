---
id: lem-author-7ef3227685d9-supported-k0-heart
kind: lemma
title: Inherited bounded t structure on supported perfect complexes
status: published
domain: mathematics
deps:
  - thm-author-7ef3227685d9-supported-k0-regular-cohomology-input
  - def-scheme-perfect-complexes
  - def-nonconnective-k-spectrum-interface
  - math:def-axiom-of-choice
dependency_roles:
  thm-author-7ef3227685d9-supported-k0-regular-cohomology-input: mathematical-premise
  def-scheme-perfect-complexes: mathematical-premise
  def-nonconnective-k-spectrum-interface: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 10
---

## Statement
Assume the Axiom of Choice and the fixed suitable universes of the supplied enhanced constructions. For regular Noetherian finite-dimensional $U$ and any closed subscheme $i:T\hookrightarrow U$, put $\mathcal C_T=\mathrm{Perf}_{|T|}(U)$ in the supplied enhancement and let $\mathcal A_T$ be coherent $\mathcal O_U$-modules with support contained in the underlying closed set $|T|$. Ambient cohomological truncations restrict to a bounded t-structure on $\mathcal C_T$, with heart $\mathcal A_T$ embedded as sheaves in degree zero. In particular $\mathcal A_T$ is abelian, and its short exact sequences give actual cofiber sequences in $\mathcal C_T$.

## Facts & Assumptions
[A1] The assumed [[math:def-axiom-of-choice]] and fixed universes discharge the enhanced regular-perfect and derived-category premises in [F1] and the specified perfect/nonconnective interfaces in [F2]. They are retained when those constructions are used in steps 1.1–3.1; the finite cohomology and stalk-support calculations introduce no additional choice.

**Given:** The Axiom of Choice and $U,T,i,\mathcal C_T,\mathcal A_T$ as stated, with the fixed suitable universes.

**Goal:** Work directly with the supported perfect category and its cohomology, without an enhancement comparison to complexes in a coherent abelian category.

[F1] [[thm-author-7ef3227685d9-supported-k0-regular-cohomology-input]] supplies local regular perfection, bounded coherent cohomology and the actual ambient derived t-structure.

[F2] [[def-scheme-perfect-complexes]] gives the support criterion and full stable idempotent-complete subcategory; [[def-nonconnective-k-spectrum-interface]] gives its essential smallness and the chosen K functor.

## Proof
1.1 Kernels and cokernels of maps of coherent sheaves are coherent by [F1]. Their stalks outside $|T|$ are zero if the original sheaves have zero stalks there. The same holds for images and extensions by exactness of stalks. Hence $\mathcal A_T$ is an abelian full subcategory, closed under the indicated exact operations. Every sheaf of this category placed in degree zero has bounded coherent cohomology, so is perfect by regularity in [F1] and belongs to $\mathcal C_T$ by [F2]. [A1, F1, F2]

2.1 For $E\in\mathcal C_T$, bounded coherent cohomology follows from [F1]. Each ambient truncation retains only a subset of those cohomology sheaves; it therefore remains bounded coherent, perfect by [F1], and supported on $|T|$. Thus the ambient t-structure restricts: its orthogonality and truncation sequences restrict to this full subcategory. It is bounded because each $E$ has finitely many nonzero cohomology sheaves. Its heart consists exactly of the objects $M[0]$ with $M\in\mathcal A_T$. [A1, F1, F2, step 1.1]

3.1 For a short exact sequence in $\mathcal A_T$, the mapping cone of $M'[0]\to M[0]$ is quasi-isomorphic to $M''[0]$ by its cohomology sequence. Mapping cones give actual cofibers in the supplied enhancement, so the sequence is a cofiber sequence there. No global locally free presentation was used. [A1, F1, F2, step 1.1, step 2.1] ∎
