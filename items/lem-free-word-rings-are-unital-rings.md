---
id: lem-free-word-rings-are-unital-rings
kind: lemma
title: "Integer-valued finite formal sums of words form unital convolution rings"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-the-free-monoid-functor-is-left-adjoint-to-the-underlying-set-functor, def-free-module-on-a-set-and-standard-basis, thm-int-comm-ring, lem-finite-sum-reindexing-and-fubini, def-ring, def-semigroup-and-monoid]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Corollary 5.5.3"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Example 4.1.10(vi)"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "D. Mehrle, Category Theory Part III, Example 5.18"
      url: "https://pi.math.cornell.edu/~dmehrle/notes/partiii/cattheory_partiii_notes.pdf"
pipeline_run: null
---

## Statement

For a set $X$, let $X^*$ be its finite-word monoid and let

$$\mathbb Z^{(X^*)}=\{\alpha:X^*\to\mathbb Z:\alpha\text{ has finite support}\}.$$

With pointwise addition and convolution

$$(\alpha\beta)(w)=\sum_{uv=w}\alpha(u)\beta(v),$$

this is a unital ring. Its multiplicative identity is the basis vector supported at the empty word. When $X=\varnothing$, the construction is canonically $\mathbb Z$.

## Facts & Assumptions

**Given:** A set $X$, its finite-word monoid $X^*$, and the displayed convolution formula.

[L1] The assignment $X\mapsto X^*$ is the finite-word monoid functor ([[thm-the-free-monoid-functor-is-left-adjoint-to-the-underlying-set-functor]]).

[L2] Every element of a free module has a unique finite expression in its standard basis, including the empty-basis case ([[def-free-module-on-a-set-and-standard-basis]]).

[L3] Finite commutative-monoid sums are invariant under bijective reindexing, split over disjoint unions, and satisfy the finite Fubini formula ([[lem-finite-sum-reindexing-and-fubini]]).

## Proof

**Proof technique:** direct.

1.1 Regard $\mathbb Z^{(X^*)}$ as the free abelian group on the words. Define the product by bilinearly extending concatenation of basis words, equivalently by the displayed coefficient formula. [L1, L2, construct]

2.1 A finite word $w$ has only finitely many cuts $w=uv$, and finite supports leave only finitely many nonzero summands. Hence every coefficient sum is finite, and the product has finite support contained in the finite set of concatenations of support words. [step 1.1, L2, L3]

3.1 For $\alpha,\beta,\gamma$, both coefficients of $(\alpha\beta)\gamma$ and $\alpha(\beta\gamma)$ are the sum of $\alpha(u)\beta(v)\gamma(r)$ over triples with $uvr=w$. The two bracketings are bijective reindexings of the same finite set, so [L3] proves associativity. [step 2.1, L1, L3, algebra]

3.2 Splitting finite sums termwise proves $(\alpha+\beta)\gamma=\alpha\gamma+\beta\gamma$ and $\alpha(\beta+\gamma)=\alpha\beta+\alpha\gamma$. Together with the pointwise abelian-group structure over $\mathbb Z$, these are both distributive laws. [step 2.1, L3, algebra]

4.1 Let $\delta_{[]}$ be $1$ on the empty word and $0$ elsewhere. The only contributing cut with a nonzero $\delta_{[]}$ factor is $w=[]w$ or $w=w[]$, so $\delta_{[]}\alpha=\alpha=\alpha\delta_{[]}$. This verifies the multiplicative identity and all ring laws. If $X=\varnothing$, then $X^*=\{[]\}$ and the coefficient at $[]$ identifies the ring with $\mathbb Z$. [step 3.1, step 3.2, L1, algebra] ∎
