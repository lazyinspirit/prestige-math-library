---
id: ex-polynomial-ring-represents-the-underlying-set-functor-on-rings
kind: example
title: '$\mathbb Z[x]$ represents the underlying-set functor on unital rings'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-presheaf-representable-functor-and-representation,
       prop-rings-and-homomorphisms-form-category-ring,
       def-polynomial-ring-over-a-commutative-ring,
       thm-polynomial-ring-is-a-commutative-ring, thm-int-comm-ring,
       lem-integer-multiples-in-a-ring, def-ring-homomorphism,
       def-monoid-finite-product, thm-generalised-associativity,
       lem-finite-sum-reindexing-and-fubini]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Example 2.4.12(vi)"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Example

Let $U:\mathbf{Ring}\to\mathbf{Set}$ send a unital ring to its underlying set
and a unit-preserving ring homomorphism to its underlying function. The ring
$\mathbb Z[x]$ represents $U$. Explicitly, for every unital ring $R$, not
assumed commutative, evaluation at $r\in R$ gives the natural bijection

$$\mathbf{Ring}(\mathbb Z[x],R)\xrightarrow{\cong}U(R),\qquad \phi\longmapsto\phi(x),$$

whose inverse is

$$r\longmapsto\operatorname{ev}_r,\qquad \operatorname{ev}_r\left(\sum_i a_i x^i\right)=\sum_i(a_i1_R)r^i.$$

## Facts & Assumptions

**Given:** An arbitrary unital ring $R$, an element $r\in R$, and finitely supported integer coefficient sequences $p=(a_i)$ and $q=(b_j)$.

[F1] Unital rings and unit-preserving ring homomorphisms form the large locally small category $\mathbf{Ring}$ ([[prop-rings-and-homomorphisms-form-category-ring]]).

[F2] For a commutative ring $A$, $A[x]$ consists of finitely supported coefficient sequences, with coefficientwise addition and convolution $(pq)_n=\sum_{i+j=n}a_i b_j$ ([[def-polynomial-ring-over-a-commutative-ring]]).

[L1] The integers form a commutative unital ring, and the operations of [F2] make $\mathbb Z[x]$ a commutative unital ring whose constant-polynomial map is an injective unital homomorphism ([[thm-int-comm-ring]], [[thm-polynomial-ring-is-a-commutative-ring]]).

[L2] In any ring, $a1_R$ is central and $(a1_R)(b1_R)=(ab)1_R$ for integers $a,b$; more generally integer multiples distribute over addition and multiplication ([[lem-integer-multiples-in-a-ring]]).

[F3] A ring homomorphism preserves addition, multiplication, and one ([[def-ring-homomorphism]]).

[F4] Natural powers are finite products with $r^0=1_R$, and the splitting law gives $r^{i+j}=r^ir^j$ ([[def-monoid-finite-product]], [[thm-generalised-associativity]]).

[L3] Finite sums in a commutative monoid may be reindexed, split, and summed in either order over a finite product ([[lem-finite-sum-reindexing-and-fubini]]).

[F5] A covariant functor is represented by $A$ when it is naturally isomorphic to the hom-functor $\mathbf{Ring}(A,-)$ ([[def-presheaf-representable-functor-and-representation]]).

## Verification

**Proof technique:** constructive.

1.1 The assignment $U$ preserves identities and composition because it leaves their underlying functions unchanged, so [F1] makes it a functor $\mathbf{Ring}\to\mathbf{Set}$. [F1]

1.2 Because $p$ has finite support, the displayed sum defining $\operatorname{ev}_r(p)$ is finite and is independent of any larger finite support bound by adjoining zero terms. It sends $1$ to $(1,1_R)r^0=1_R$. [F2, L1, L2, F4, construct]

1.3 Coefficientwise addition, distributivity of integer multiples, and finite-sum splitting give $\operatorname{ev}_r(p+q)=\operatorname{ev}_r(p)+\operatorname{ev}_r(q)$. [F2, L2, L3]

1.4 Conversely, let $\phi:\mathbb Z[x]\to R$ be a unital ring homomorphism and put $r=\phi(x)$. From $\phi(1)=1_R$ and additivity, including additive inverses, $\phi$ sends the constant $a$ to $a1_R$ for every integer $a$; multiplicativity gives $\phi(x^i)=r^i$. Additivity over the finite expression $p=\sum_i a_i x^i$ then gives $\phi(p)=\sum_i(a_i1_R)r^i=\operatorname{ev}_r(p)$. [L1, L2, F3, F4]

2.1 Expanding a product of the two finite evaluation sums and using [L3] gives $$\operatorname{ev}_r(p)\operatorname{ev}_r(q) =\sum_{i,j}(a_i1_R)r^i(b_j1_R)r^j.$$ Since $b_j1_R$ is central by [L2], each summand is $((a_i b_j)1_R)r^ir^j=((a_i b_j)1_R)r^{i+j}$ by [F4]. [step 1.2, L2, F4, L3]

2.2 The polynomial $x$ has only coefficient $1$ at index $1$, so $\operatorname{ev}_r(x)=r$. Hence evaluation at $x$ after $r\mapsto\operatorname{ev}_r$ recovers $r$. [step 1.2, F2, F4]

3.1 Reindex the last finite sum by $n=i+j$ and regroup its fibres. By [F2] and [L3] the inner coefficient sum is $(pq)_n$, so the result is $\operatorname{ev}_r(pq)$. Together with steps 1.2 and 1.3, [F3] makes $\operatorname{ev}_r:\mathbb Z[x]\to R$ a unital ring homomorphism, without any commutativity hypothesis on $R$. [step 1.2, step 1.3, step 2.1, F2, F3, L3]

4.1 Steps 2.2 and 1.4 make $\phi\mapsto\phi(x)$ and $r\mapsto\operatorname{ev}_r$ inverse bijections. If $h:R\to S$ is a unital ring homomorphism, then $h\circ\operatorname{ev}_r$ and $\operatorname{ev}_{h(r)}$ have the same value $h(r)$ at $x$, so step 1.4 makes them equal; the bijection is natural in $R$. [step 3.1, step 2.2, step 1.4, F3]

5.1 By [F5], $\mathbb Z[x]$ represents $U$. The proof includes the zero ring: when $0_R=1_R$, its underlying set and the hom-set from $\mathbb Z[x]$ are both singletons, and the same formulas apply. [step 1.1, step 4.1, F5, discharge-construct] ∎
