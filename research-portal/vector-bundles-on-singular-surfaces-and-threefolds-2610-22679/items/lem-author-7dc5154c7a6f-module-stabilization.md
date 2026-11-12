---
id: lem-author-7dc5154c7a6f-module-stabilization
kind: lemma
title: Free stabilization passes through global sections
status: published
domain: mathematics
deps:
  - lem-author-7dc5154c7a6f-module-classes
  - lem-affine-bundle-module-interface
  - math:def-axiom-of-choice
  - math:def-affine-scheme
  - math:def-associated-sheaf-module-affine-scheme
  - math:def-locally-free-sheaf-finite-rank
dependency_roles:
  lem-author-7dc5154c7a6f-module-classes: mathematical-premise
  lem-affine-bundle-module-interface: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-affine-scheme: mathematical-premise
  math:def-associated-sheaf-module-affine-scheme: mathematical-premise
  math:def-locally-free-sheaf-finite-rank: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 2
---

## Statement
Assume AC. Let $A$ be a commutative ring with $1$ and put $X=\operatorname{Spec}A$, with its structure sheaf $\mathcal O_X$. For vector bundles $E,F$ on $X$ and an integer $N\geq0$, $E\oplus\mathcal O_X^N\cong F\oplus\mathcal O_X^N$ if and only if $\Gamma(X,E)\oplus A^N\cong\Gamma(X,F)\oplus A^N$. All modules here are finite projective.

Here a vector bundle means a finite locally free $\mathcal O_X$-module; its rank need not be constant on $X$. A finite projective module is a finitely generated module with the lifting property through surjective module homomorphisms. Write $\Gamma(X,E)=E(X)$, $A^N$ for the module of $N$-tuples, and $\mathcal O_X^N$ for the sheaf $U\mapsto\mathcal O_X(U)^N$. Finite direct sums have componentwise operations and, for sheaves, componentwise restrictions. The zeroth powers and sums are zero.

## Facts & Assumptions

**Given:** AC, a commutative ring $A$ with $1$, $X=\operatorname{Spec}A$, vector bundles $E,F$ on $X$, and an integer $N\geq0$.

**Goal:** Establish the stated equivalence and finite projectivity.

[A1] AC is assumed for the affine bundle/module equivalence used below; the present argument requires no additional choice. [[math:def-axiom-of-choice]]

[F1] Associated sheaf and global sections are quasi-inverse equivalences between finite projective modules and finite locally free sheaves. They preserve finite direct sums and identify $\widetilde{A^N}$ with $\mathcal O_X^N$ and $\Gamma(X,\mathcal O_X^N)$ with $A^N$. In particular, the counit is a natural isomorphism $\widetilde{\Gamma(X,E)}\cong E$. [[lem-affine-bundle-module-interface]]

[F2] The affine equivalence preserves and reflects bundle isomorphism classes. [[lem-author-7dc5154c7a6f-module-classes]]

[F3] We use the affine scheme with its structure sheaf, the associated-module sheaf functor $M\mapsto\widetilde M$ (also on module maps), and finite locally free sheaves in their published senses. [[math:def-affine-scheme]], [[math:def-associated-sheaf-module-affine-scheme]], [[math:def-locally-free-sheaf-finite-rank]]

## Proof

1.1 Apply global sections to a stabilized bundle isomorphism and its inverse. The two induced maps remain inverse, since sections preserve identities and composition. By [F1], their source and target identify with $\Gamma(X,E)\oplus A^N$ and $\Gamma(X,F)\oplus A^N$. The same equivalence makes $\Gamma(X,E)$ and $\Gamma(X,F)$ finite projective; $A^N$ is finite free and the displayed finite sums are finite projective by [F1]. [A1, F1, F2, F3, given]

2.1 Conversely, apply the associated-sheaf functor of [F3] to a module isomorphism between the displayed sums and to its inverse. The resulting maps remain inverse. By [F1], finite-direct-sum compatibility and the counit identify their ends with $E\oplus\mathcal O_X^N$ and $F\oplus\mathcal O_X^N$. This gives the required bundle isomorphism. These identifications include $N=0$ and the zero ring, so together with step 1.1 they establish every assertion under the given hypotheses. [A1, F1, F2, F3, step 1.1] ∎
