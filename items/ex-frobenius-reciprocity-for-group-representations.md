---
id: ex-frobenius-reciprocity-for-group-representations
kind: example
title: 'Frobenius reciprocity for group representations without tensor products'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-group-action, def-subgroup, def-coset, def-vector-space, def-linear-map, def-the-set-of-functions-from-one-set-to-another, def-finite-cardinality, def-finite-sum-in-a-commutative-monoid, lem-finite-sum-reindexing-and-fubini]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Example 4.1.11'
      url: 'https://emilyriehl.github.io/files/context.pdf'
pipeline_run: null
---

## Example

Let $H\le G$ be groups and let $k$ be a field. For a left $k$-linear $H$-representation $V$, define $\operatorname{Ind}_H^G(V)$ to be the functions $f:G\to V$ such that

$$f(gh)=h^{-1}\cdot f(g)$$

for $g\in G$ and $h\in H$, and such that the left cosets on which $f$ is nonzero form a finite set. With $(a\cdot f)(g)=f(a^{-1}g)$, this is a $G$-representation and

$$\operatorname{Ind}_H^G\dashv\operatorname{Res}_H^G.$$

## Facts & Assumptions

**Given:** A subgroup $H\le G$, a field $k$, an $H$-representation $V$, and a $G$-representation $W$.

[F1] A left group action satisfies $e\cdot x=x$ and $(gh)\cdot x=g\cdot(h\cdot x)$ ([[def-group-action]]).

[F2] A vector space is an abelian group under addition with scalar laws $\lambda(u+v)=\lambda u+\lambda v$, $(\lambda+\mu)v=\lambda v+\mu v$, $(\lambda\mu)v=\lambda(\mu v)$, and $1v=v$ ([[def-vector-space]]).

[F3] A map $T:V\to W$ is linear exactly when $T(au+bv)=aT(u)+bT(v)$ for all scalars and vectors ([[def-linear-map]]).

[F4] A subgroup contains the identity and is closed under products and inverses ([[def-subgroup]]).

[F5] The left coset of $H$ represented by $g$ is $gH=\{gh:h\in H\}$, and the right coset is $Hg=\{hg:h\in H\}$ ([[def-coset]]).

[F6] For sets $A,B$, the functions $A\to B$ form the set $B^A$ ([[def-the-set-of-functions-from-one-set-to-another]]).

[F7] A set is finite when it is in bijection with some natural number ([[def-finite-cardinality]]).

[F8] For a finite set $S$ and a function into a commutative monoid, $\sum_{s\in S}a_s$ is the enumeration-independent finite sum, and the sum over the empty set is $0$ ([[def-finite-sum-in-a-commutative-monoid]]).

[F9] Finite sums are invariant under bijective reindexing, split over disjoint unions, and satisfy the two finite Fubini formulas ([[lem-finite-sum-reindexing-and-fubini]]).

## Verification

**Proof technique:** direct.

1.1 The defining equations cut out a vector subspace of the function set $V^G$ from [F6]. Pointwise operations preserve the covariance equation, and finite unions preserve finite coset support. [F2, F3, F5, F6, F7, algebra]

2.1 The formula $(a\cdot f)(g)=f(a^{-1}g)$ preserves the covariance equation and finite support. The equations in [F1] show that it is a left $G$-action, and pointwise operations show that the action is linear. Hence $\operatorname{Ind}_H^G(V)$ is a $G$-representation. [step 1.1, F1, F2, F4, algebra]

2.2 For an $H$-equivariant linear map $u:V\to\operatorname{Res}_H^G(W)$, set $\widehat u(f):=\sum_{gH\in G/H}g\cdot u(f(g))$, where zero summands are omitted. If $g$ is replaced by $gh$, the summand becomes $gh\cdot u(h^{-1}\cdot f(g))=g\cdot u(f(g))$, so it depends only on the coset. The nonzero index set is finite, and [F8] makes the empty-support value zero. [step 1.1, F1, F3, F5, F7, F8, algebra]

3.1 Define $j_V:V\to\operatorname{Res}_H^G\operatorname{Ind}_H^G(V)$ by $j_V(v)(h)=h^{-1}\cdot v$ for $h\in H$ and $j_V(v)(g)=0$ for $g\notin H$. The subgroup axioms make this well-defined with support in $H$, and direct calculation gives $j_V(a\cdot v)=a\cdot j_V(v)$ for $a\in H$; it is linear by [F3]. [step 2.1, F1, F3, F4, algebra]

3.2 Linearity follows termwise from [F3]. Left multiplication bijects the relevant coset sets, so reindexing with [F9] gives $\widehat u(a\cdot f)=a\cdot\widehat u(f)$. Thus $\widehat u$ is a $G$-equivariant linear map, naturally in $V$ and $W$. [step 2.1, step 2.2, F1, F3, F9, algebra]

4.1 Every $f$ has the finite decomposition $f=\sum_{gH}g\cdot j_V(f(g))$: at any $x\in G$, only the coset $xH$ contributes, and its contribution is $f(x)$. Therefore a $G$-map $T$ satisfies $\widehat{(Tj_V)}(f)=T(f)$. [step 2.1, step 3.1, step 2.2, F8, F9]

5.1 The function $j_V(v)$ is supported on the single coset $H$, and its value at $1$ is $v$, so $(\widehat u)j_V=u$. Together with step 4.1, the assignments $u\mapsto\widehat u$ and $T\mapsto Tj_V$ are inverse natural bijections, proving $\operatorname{Ind}_H^G\dashv\operatorname{Res}_H^G$. [step 3.1, step 2.2, step 3.2, step 4.1, F4, F8] ∎
