---
id: thm-effaceable-cohomological-delta-functors-are-universal
kind: theorem
title: "Effaceable cohomological delta functors are universal"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-universal-delta-functor, def-morphism-of-cohomological-delta-functors, def-effaceable-cohomological-delta-functor-in-positive-degrees, lem-dimension-shift-for-a-cohomological-delta-functor-effaced-in-the-middle, lem-extend-a-degree-zero-transformation-through-one-dimension-shift, lem-the-effacement-extension-is-independent-of-the-effacing-morphism, lem-the-effacement-extension-commutes-with-connecting-morphisms]
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.12: Cohomological delta-functors"
      url: "https://stacks.math.columbia.edu/tag/010P"
    - title: "Alexandre Grothendieck, Some aspects of homological algebra (Barr translation)"
      url: "https://ncatlab.org/nlab/files/BarrTranslOf-GrothedieckTohoku.pdf"
pipeline_run: frontier-30
---

## Statement

Let $T=(T^n,\partial_T)$ be a cohomological delta functor on an abelian
category. If $T$ is effaceable in positive degrees by injectives, then $T$ is
universal.
## Facts & Assumptions

**Given:** A cohomological delta functor $S=(S^n,\partial_S)$ and a natural
transformation $u^0:T^0\Rightarrow S^0$.

[L1] Universality for a cohomological delta functor means unique extension of
$u^0$ to a morphism of cohomological delta functors
([[def-universal-delta-functor]],
[[def-morphism-of-cohomological-delta-functors]]).

[L2] Effaceability supplies admissible injective effacements, and the
dimension-shift lemma identifies the source of the next map with a cokernel
([[def-effaceable-cohomological-delta-functor-in-positive-degrees]],
[[lem-dimension-shift-for-a-cohomological-delta-functor-effaced-in-the-middle]]).

[L3] Item 19 defines the next-degree component from one chosen effacement,
item 20 makes it choice-free, and item 21 preserves compatibility with the
connecting maps
([[lem-extend-a-degree-zero-transformation-through-one-dimension-shift]],
[[lem-the-effacement-extension-is-independent-of-the-effacing-morphism]],
[[lem-the-effacement-extension-commutes-with-connecting-morphisms]]).

## Proof

**Proof technique:** induction.

1.1 Set the degree-zero component to be the given map $u^0$. [base, given]

1.2 Suppose by induction that for some $n\geq 0$ we have already constructed natural transformations $u^i:T^i\Rightarrow S^i$ for all $i\leq n$, compatible with the connecting morphisms through degree $n-1$. For each object $A$, choose an injective effacement $e_A:A\rightarrowtail I_A$ for $T^{n+1}(A)$ using [L2]. The cohomological clause of [L3], which is valid for every $n\geq0$, defines a map $u_A^{n+1}:T^{n+1}(A)\to S^{n+1}(A)$, and [L3] makes it independent of the chosen effacement. [ih, L2, L3, construct]

2.1 Naturality and compatibility with the connecting morphisms follow exactly as in the homological case: use the covered naturality from [L3] on a common dominating injective effacement and then appeal to the choice-independence from [L3]. Thus adjoining $u^{n+1}$ extends the partial morphism one degree further. [L3, step 1.2, discharge-induction]

3.1 Uniqueness in degree $n+1$ comes from the cokernel description in [L2]: once the degree-$n$ component is fixed, item 19 gives only one possible map out of $T^{n+1}(A)$. Hence the inductive extension is unique in every degree, and [L1] shows that $T$ is universal. [L1, L2, step 1.1, step 2.1, discharge-induction] ∎
