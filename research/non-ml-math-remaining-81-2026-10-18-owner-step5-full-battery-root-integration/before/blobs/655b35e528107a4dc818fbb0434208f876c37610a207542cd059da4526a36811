---
id: lem-separable-algebra-module-and-bimodule-categories-are-finite-semisimple
kind: lemma
title: Finite semisimplicity for separable algebra modules and bimodules
status: draft
dependency_level: 1
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-separable-algebra-and-bimodule-in-fusion-category
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Etingof, Gelaki, Nikshych, and Ostrik, Tensor Categories, Proposition 7.8.30 and §7.11
      url: https://math.mit.edu/~etingof/egnobookfinal.pdf
---

## Statement

Let $A,B$ be separable algebra objects in a fusion category $\mathcal C$. The categories of left $A$-modules, right $B$-modules and $A$-$B$ bimodules are finite semisimple. This assertion is valid in any characteristic in which the stated separability sections exist. In particular the left $A$-modules, with action $P\odot X=P\otimes X$, form a finite semisimple right $\mathcal C$-module category.

## Facts & Assumptions

[F1] The separability elements and their centrality equations, and all action conventions, are those of [[def-separable-algebra-and-bimodule-in-fusion-category]]. Tensoring in the fusion category is exact.

## Proof

**Given:** $A,B,\mathcal C$ as stated; write $e_A=\sum_i x_i\otimes y_i$ and $e_B=\sum_j u_j\otimes v_j$ as symbolic notation for the two separability morphisms, with no element interpretation assumed.

1.1 The kernel and cokernel of a bimodule map are their underlying kernel and cokernel in $\mathcal C$, with induced actions: exactness of $A\otimes-$ and $-\otimes B$ gives these actions by the universal properties, and their algebra and commuting equations follow after composition with the monomorphism or epimorphism. Therefore the bimodule category is abelian, the forgetful functor is exact and faithful, and its Hom spaces are finite dimensional. The same reasoning applies with either action omitted. [F1, construct]

1.2 For an underlying morphism $t:P\to Q$ between bimodules, define its left and right averages by $\mathsf L(t)(p)=\sum_i x_i t(y_i p)$ and $\mathsf R(t)(p)=\sum_j t(pu_j)v_j$. Each notation denotes the composite formed from $e_A$ or $e_B$, the relevant actions and $t$. Centrality and associativity give $\mathsf L(t)(ap)=a\mathsf L(t)(p)$ and $\mathsf R(t)(pb)=\mathsf R(t)(p)b$. For example $\sum_i x_i t(y_i ap)=\sum_i ax_i t(y_i p)$ is exactly the centrality equation precomposed with the action and postcomposed with $t$ and the target action. The commuting bimodule actions show that $\mathsf L$ preserves right linearity and $\mathsf R$ preserves left linearity; they also give $\mathsf L\mathsf R(t)=\mathsf R\mathsf L(t)$ by the common expression $\sum_{i,j}x_i t(y_i p u_j)v_j$. If $t$ respects the averaged action then the average equals $t$, using $\sum x_i y_i=1$ or $\sum u_j v_j=1$. [F1, construct, algebra]

2.1 Given a bimodule epimorphism $q:Q\to P$, choose a section $t:P\to Q$ in $\mathcal C$, which exists by semisimplicity. Then $s=\mathsf L\mathsf R(t)$ is a bimodule map and $qs=\mathsf L\mathsf R(qt)=\mathsf L\mathsf R(1)=1$. Thus all bimodule epis split. Every bimodule has finite length, since its strict subobject chains remain strict under the faithful exact forgetful functor and its underlying object has finite length. Splitting of epis then expresses every object as a finite sum of simples by induction on its length. [step 1.1, step 1.2, construct]

3.1 Let $g$ be the sum of representatives of the finitely many simple objects of $\mathcal C$. Every bimodule $P$ is a quotient of a finite sum of copies of $A\otimes g\otimes B$. Indeed its underlying object is a summand of a finite sum of $g$; apply $A\otimes-\otimes B$ to the resulting epimorphism and then apply both actions, whose composite is epi since it has an underlying section given by both units. Each simple bimodule is consequently a summand of a finite sum of $A\otimes g\otimes B$, hence a simple constituent of this finite-length object. There are finitely many. Omitting one action gives the same argument for one-sided modules, or use the separable unit algebra for that side. The right action on left modules preserves their action equations and inherits its pentagon and triangle from $\mathcal C$. This proves all assertions. [step 1.1, step 2.1, F1, construct] ∎
