---
id: thm-eilenberg-watts-biequivalence-for-module-categories
kind: theorem
title: "Eilenberg-Watts schematic biequivalence between the Morita bicategory and module categories"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 5
justified_by: []
aliases: []
proof_strategy: direct
deps: [def-bicategory-pseudofunctor-and-biequivalence, def-morita-bicategory-of-rings-and-bimodules, lem-tensoring-defines-a-pseudofunctor-with-interchange, def-additive-cocontinuous-module-functor, def-strict-two-category, def-functor-category, def-natural-transformation, def-equivalence-and-adjoint-equivalence-of-categories, cor-eilenberg-watts-is-an-equivalence-of-hom-categories, lem-additive-cocontinuous-module-functors-form-a-category]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "nLab, Morita equivalence, Idea and Classical Morita theorem (the 2-category of rings, bimodules and intertwiners; equivalence with linear equivalences of module categories)"
      url: "https://ncatlab.org/nlab/show/Morita+equivalence"
    - title: "Fuchs-Schaumann-Schweigert, Eilenberg-Watts calculus for finite categories, introduction (Morita-invariant form of Eilenberg-Watts)"
      url: "https://arxiv.org/pdf/1612.04561v3"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

The pseudofunctor $\Phi:\mathbf{Bimod}\to\mathbf{RngMod}$ of [[lem-tensoring-defines-a-pseudofunctor-with-interchange]], sending a ring $A$ to $A\text{-Mod}$, a $(B,A)$-bimodule $M$ to $T_M=M\otimes_A-$, and a bimodule map to the corresponding natural transformation, is a schematic biequivalence. This means the local equivalence data and coherence equations of [[def-bicategory-pseudofunctor-and-biequivalence]] for fixed functor schemas, with the set-coded natural transformations of [[def-additive-cocontinuous-module-functor]]; it does not form a category with proper-class functors as objects. Explicitly:
1. for all unital rings $A,B$ the local assignment $\mathbf{Bimod}(A,B)\to\mathbf{RngMod}(A\text{-Mod},B\text{-Mod})$, $M\mapsto T_M$, is a schematic equivalence, so full, faithful, and essentially surjective ([[cor-eilenberg-watts-is-an-equivalence-of-hom-categories]]);
2. every object label of $\mathbf{RngMod}$ is the image of its ring, hence equivalent to an image object.
Consequently, under the composition comparison, a natural transformation between two composite tensor functors is exactly a bimodule map between their composite kernels, including all source and target actions. No commutativity and no choice are used.

## Facts & Assumptions

**Given:** The pseudofunctor $\Phi:\mathbf{Bimod}\to\mathbf{RngMod}$ of [[lem-tensoring-defines-a-pseudofunctor-with-interchange]], sending a unital ring $A$ to $A\text{-Mod}$, a $(B,A)$-bimodule $M$ to $T_M=M\otimes_A-$ and a bimodule map to the corresponding natural transformation.

[F1] $\Phi$ is a pseudofunctor whose object map is $A\mapsto A\text{-Mod}$, whose map on 1-cells is $M\mapsto T_M$, and whose composition comparison identifies $T_N\circ T_M$ with $T_{N\otimes_BM}$ through the canonical associativity isomorphism ([[lem-tensoring-defines-a-pseudofunctor-with-interchange]], [[def-bicategory-pseudofunctor-and-biequivalence]]).

[F2] For all unital rings $A,B$ the assignment $M\mapsto T_M$ is a schematic equivalence from the $(B,A)$-bimodules with bimodule maps to the additive cocontinuous functors $A\text{-Mod}\to B\text{-Mod}$ with natural transformations; it is full and faithful with $\operatorname{Nat}(T_M,T_{M'})\cong\operatorname{Hom}_{B\text{-}A}(M,M')$, and it is essentially surjective ([[cor-eilenberg-watts-is-an-equivalence-of-hom-categories]]).

[F3] The objects of $\mathbf{RngMod}$ are exactly the module categories $A\text{-Mod}$ for unital rings $A$, the 1-cells are fixed additive cocontinuous functor schemas and the 2-cells are their set-coded natural transformations, with horizontal composition given by whiskering ([[def-strict-two-category]], [[def-additive-cocontinuous-module-functor]], [[lem-additive-cocontinuous-module-functors-form-a-category]], [[def-functor-category]], [[def-natural-transformation]]).

[F4] A pseudofunctor is a biequivalence when every local functor is an equivalence of categories and every target object is equivalent to an image object; the local equivalences used here come with the supplied quasi-inverse $F\mapsto F(A)$ of [F2] ([[def-bicategory-pseudofunctor-and-biequivalence]], [[def-equivalence-and-adjoint-equivalence-of-categories]]).

## Proof

**Proof technique:** direct.

1.1 (The local functors are equivalences.) Fix unital rings $A,B$. The local map $\mathbf{Bimod}(A,B)\to\mathbf{RngMod}(A\text{-Mod},B\text{-Mod})$ is the functor $M\mapsto T_M$ on objects and $f\mapsto f\otimes1$ on morphisms, which is exactly the assignment of the pseudofunctor [F1] restricted to this pair of objects. By [F2] this functor is a schematic equivalence with the specified evaluation quasi-inverse, and in particular is full, faithful and essentially surjective. [F1, F2, F4, given]

1.2 (Every target object is an image.) Let $\mathcal A$ be an object of $\mathbf{RngMod}$. By [F3] there is a unital ring $A$ with $\mathcal A=A\text{-Mod}$, and $\Phi(A)=A\text{-Mod}=\mathcal A$ by [F1], so $\mathcal A$ is (trivially) equivalent to the image of an object of $\mathbf{Bimod}$. [F1, F3, given]

1.3 (Composite kernels.) Let $M,M'$ be $(B,A)$-bimodules and $N,N'$ $(C,B)$-bimodules. By the composition comparisons of [F1] the composite functors $T_N\circ T_M$ and $T_{N'}\circ T_{M'}$ are naturally isomorphic to $T_{N\otimes_BM}$ and $T_{N'\otimes_BM'}$. Composing with these natural isomorphisms gives a bijection $\operatorname{Nat}(T_N\circ T_M,T_{N'}\circ T_{M'})\cong\operatorname{Nat}(T_{N\otimes_BM},T_{N'\otimes_BM'})$, and by the full faithfulness of [F2] the right-hand side is $\operatorname{Hom}_{C\text{-}A}(N\otimes_BM,N'\otimes_BM')$; under the bijection a natural transformation of composites corresponds to a bimodule map of the composite kernels preserving both the left $C$-action and the right $A$-action. [F1, F2, given]

2.1 Steps 1.1 and 1.2 verify the two clauses of the definition of biequivalence for $\Phi$, so by [F4] the pseudofunctor $\Phi$ is a schematic biequivalence between the Morita bicategory and the schematic strict 2-category of module categories and additive cocontinuous functors; step 1.3 identifies the natural transformations between composite tensor functors with bimodule maps of composite kernels. No commutativity of rings is assumed and no choice is used. [F4, step 1.1, step 1.2, step 1.3] ∎
