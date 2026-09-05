---
id: thm-effaceable-homological-delta-functors-are-universal
kind: theorem
title: "Effaceable homological delta functors are universal"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-universal-delta-functor, def-morphism-of-homological-delta-functors, def-effaceable-homological-delta-functor-in-positive-degrees, lem-dimension-shift-for-a-homological-delta-functor-effaced-in-the-middle, lem-extend-a-degree-zero-transformation-through-one-dimension-shift, lem-the-effacement-extension-is-independent-of-the-effacing-morphism, lem-the-effacement-extension-commutes-with-connecting-morphisms]
landmark: true
proof_strategy: induction
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Alexandre Grothendieck, Some aspects of homological algebra (Barr translation)"
      url: "https://ncatlab.org/nlab/files/BarrTranslOf-GrothedieckTohoku.pdf"
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
    - title: "Romyar Sharifi, Homological Algebra"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-30
---

## Statement

Let $T=(T_n,\partial^T)$ be a homological delta functor on an abelian category.
If $T$ is effaceable in positive degrees by projectives, then $T$ is universal.
## Facts & Assumptions

**Given:** A homological delta functor $S=(S_n,\partial^S)$ and a natural
transformation $u_0:S_0\Rightarrow T_0$.

[L1] Universality for a homological delta functor means unique extension of
$u_0$ to a morphism of homological delta functors
([[def-universal-delta-functor]],
[[def-morphism-of-homological-delta-functors]]).

[L2] Effaceability supplies admissible projective effacements, and the
dimension-shift lemma makes the corresponding connecting maps monic
([[def-effaceable-homological-delta-functor-in-positive-degrees]],
[[lem-dimension-shift-for-a-homological-delta-functor-effaced-in-the-middle]]).

[L3] Item 19 defines the next-degree component from one chosen effacement,
item 20 makes it independent of that choice, and item 21 preserves
compatibility with connecting morphisms
([[lem-extend-a-degree-zero-transformation-through-one-dimension-shift]],
[[lem-the-effacement-extension-is-independent-of-the-effacing-morphism]],
[[lem-the-effacement-extension-commutes-with-connecting-morphisms]]).

## Proof

**Proof technique:** induction.

1.1 Start with the given $u_0$ as the degree-zero component. [base, given]

1.2 Suppose by induction that for some $n>0$ we have already constructed natural transformations $u_i:S_i\Rightarrow T_i$ for all $i<n$, and that these form a morphism of homological delta functors through degree $n-1$. For each object $A$, choose an effacement $p_A:P_A\twoheadrightarrow A$ for the target value $T_n(A)$ using [L2]. Then [L3] defines a map $u_n(A):S_n(A)\to T_n(A)$ from that effacement, and [L3] makes it independent of the chosen $p_A$. [ih, L2, L3, construct]

2.1 To check naturality of the family from step 1.2, compare two chosen effacements over a morphism $f:A\to B$ by a common dominating effacement. The covered naturality from [L3] applies to that dominating choice, and the choice independence from [L3] transports the result back to the original objects. Thus $u_n$ is natural. The same comparison argument, now applied over a short exact sequence, together with the connecting-map compatibility from [L3], shows that adjoining $u_n$ preserves the morphism-of-delta-functors condition in degree $n$. [L3, step 1.2, discharge-induction]

3.1 This constructs a morphism $u:S\to T$ extending $u_0$ in every degree. For uniqueness, let $v_n$ be any other degree-$n$ component compatible with the already fixed lower-degree data. Choose an effacement $p:P\twoheadrightarrow A$ for $T_n(A)$. Because $u_n$ and $v_n$ have the same lower-degree compatibility, their composites with $\partial_n^T$ agree. The map $\partial_n^T$ is monic by [L2], so $u_n(A)=v_n(A)$. Hence the extension is unique in each degree, and [L1] identifies $T$ as universal. [L1, L2, step 1.1, step 2.1, discharge-induction] ∎
