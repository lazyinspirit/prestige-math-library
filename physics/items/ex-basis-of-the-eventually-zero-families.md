---
id: ex-basis-of-the-eventually-zero-families
kind: example
title: "The standard unit families $e_k \\in F^{\\mathbb{N}}$ form a basis of the linear subspace of eventually zero families: an explicit infinite basis, built with no choice principle"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-linear-basis, def-linear-independence, lem-independent-list-is-injective, cor-independent-set-is-no-larger-than-a-finite-spanning-set, def-dimension, lem-standard-basis-of-f-n, def-function-space, def-linear-subspace, lem-linear-subspace-criterion, def-linear-combination-and-span, lem-span-is-the-set-of-linear-combinations, def-sum-of-linear-subspaces, def-monoid-finite-product, lem-restriction-of-scalars, def-vector-space, def-field, lem-vector-space-elementary-consequences, thm-induction-principle, lem-pigeonhole, def-countable, def-equinumerous, def-injection-surjection-bijection, def-natural-numbers, def-nat-order, lem-nat-order-is-membership, thm-nat-linear-order]
justified_by: []
aliases: []
landmark: false
short: "an explicit infinite basis"
proof_strategy: direct
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Sequence space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequence_space"
    - title: "Basis (linear algebra) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Basis_(linear_algebra)"
    - title: "Cambridge University Press excerpt: Vector spaces and bases"
      url: "https://assets.cambridge.org/97810092/43902/excerpt/9781009243902_excerpt.pdf"
pipeline_run: null
---

## Example

Let $F$ be a field ([[def-field]]) and let $F^{\mathbb{N}}$ be the function space
of all families $x : \mathbb{N} \to F$ with the pointwise operations
([[def-function-space]]); $\mathbb{N}$ contains $0$ ([[def-natural-numbers]]).
Put

$$E \;:=\; \{\, x \in F^{\mathbb{N}} \;:\; \text{there is } N \in \mathbb{N} \text{ with } x(n) = 0_F \text{ for every } n \ge N \,\},$$

the **eventually zero** families, and for $k \in \mathbb{N}$ let
$e_k \in F^{\mathbb{N}}$ be the **standard unit family** with $e_k(k) = 1_F$ and
$e_k(n) = 0_F$ for $n \ne k$. Write $B := \{\, e_k : k \in \mathbb{N} \,\}$. Then:

1. $E$ is a linear subspace of $F^{\mathbb{N}}$ ([[def-linear-subspace]]);
2. $B \subseteq E$ and $\operatorname{span}(B) = E$
   ([[def-linear-combination-and-span]]);
3. $B$ is linearly independent ([[def-linear-independence]]), hence a basis of
   $E$ ([[def-linear-basis]]), and $k \mapsto e_k$ is a bijection
   $\mathbb{N} \to B$, so $B \approx \mathbb{N}$ ([[def-equinumerous]]);
4. $E$ is infinite-dimensional over $F$ ([[def-dimension]]): it has no finite
   basis.

**No choice principle is used anywhere below**: the basis is written down.

## Facts & Assumptions

**Given:** A field $F$, the vector space $F^{\mathbb{N}}$ with pointwise operations, the set $E$ of eventually zero families, the families $e_k$, and $B = \{\, e_k : k \in \mathbb{N}\,\}$.

[L1] $F^{X}$ is a vector space over $F$ with $(x+y)(n) = x(n)+y(n)$, $(\lambda x)(n) = \lambda\,x(n)$ and zero the constant family at $0_F$; two elements are equal exactly when they agree at every point ([[def-function-space]], [[def-vector-space]]).

[L2] One-step test: a nonempty $W \subseteq V$ with $\lambda u + v \in W$ for all $\lambda \in F$, $u, v \in W$ is a linear subspace; a linear subspace is a vector space in its own right, and independence and spans of its subsets agree with those computed in the ambient space ([[lem-linear-subspace-criterion]], [[def-linear-subspace]], [[def-linear-basis]], section on bases of a linear subspace).

[L3] $\operatorname{span}(T)$ is the set of linear combinations $\sum_{k<p}\mu_k y_k$ of finite lists into $T$, and it is the smallest linear subspace containing $T$ ([[lem-span-is-the-set-of-linear-combinations]], [[def-linear-combination-and-span]]).

[L4] A finite sum in a function space is pointwise: $\bigl(\sum_{k<p}u_k\bigr)(n) = \sum_{k<p}u_k(n)$ ([[lem-standard-basis-of-f-n]], claim 1). Finite sums obey $\sum_{k<0}u_k = 0$ and $\sum_{k<\sigma(p)}u_k = \bigl(\sum_{k<p}u_k\bigr) + u_p$ ([[def-monoid-finite-product]]).

[L5] $F$ is a vector space over itself ([[lem-restriction-of-scalars]], claim 1), so (F1) and (F3) apply to lists of scalars: an all-$0_F$ list sums to $0_F$, and a list vanishing off a single index sums to its value at that index ([[def-sum-of-linear-subspaces]]).

[L6] In $F$: $\lambda 1_F = \lambda$, $\lambda 0_F = 0_F$, $0_F + 0_F = 0_F$, and $1_F \ne 0_F$ ([[def-field]], [[lem-vector-space-elementary-consequences]]).

[L7] A subset $S$ is linearly independent when every injective finite list into $S$ is; a list is independent exactly when it is injective with independent image ([[def-linear-independence]], [[lem-independent-list-is-injective]], claim 6).

[L8] If a space has a spanning set with $p$ elements, then no linearly independent subset of it is equinumerous with $\mathbb{N}$ ([[cor-independent-set-is-no-larger-than-a-finite-spanning-set]], claim 2); a basis is a spanning set, and a finite set is equinumerous with exactly one natural ([[def-linear-basis]], [[lem-pigeonhole]], [[def-countable]]).

[L9] The order of $\mathbb{N}$ is total, $m < \sigma(N) \iff m \le N$, and $m < n$ implies $m \ne n$ ([[thm-nat-linear-order]], [[def-nat-order]], [[lem-nat-order-is-membership]]); induction ([[thm-induction-principle]]); injectivity and images ([[def-injection-surjection-bijection]]).

## Verification

**Proof technique:** direct.

1.1 Claim 1. $E$ is nonempty: the zero family has value $0_F$ everywhere, so $N = 0$ witnesses that it lies in $E$. And $E$ is closed under the one-step expression: for $\lambda \in F$ and $u, v \in E$ with witnesses $N_1$ and $N_2$, let $N$ be the larger of the two, which exists because the order of $\mathbb{N}$ is total; then for $n \ge N$ we have $n \ge N_1$ and $n \ge N_2$, so $(\lambda u + v)(n) = \lambda u(n) + v(n) = \lambda 0_F + 0_F = 0_F$, and $N$ witnesses $\lambda u + v \in E$. So $E$ is a linear subspace of $F^{\mathbb{N}}$ by the one-step test. [L1, L2, L6, L9]

1.2 Each $e_k$ lies in $E$, so $B \subseteq E$: if $n \ge \sigma(k)$ then $k < n$, hence $n \ne k$ and $e_k(n) = 0_F$, so $\sigma(k)$ is a witness. [L9]

1.3 For $x \in F^{\mathbb{N}}$ and $N \in \mathbb{N}$ put $s_N := \sum_{k<N} x(k)\,e_k$. Then $s_N(n) = x(n)$ for $n < N$ and $s_N(n) = 0_F$ for $n \ge N$. Indeed $s_N(n) = \sum_{k<N}\bigl(x(k)e_k\bigr)(n) = \sum_{k<N} x(k)\,e_k(n)$ by pointwise evaluation and pointwise scalar multiplication; the scalar list $k \mapsto x(k)e_k(n)$ has the value $x(k)0_F = 0_F$ at every $k \ne n$. If $n < N$ this list vanishes off the single index $n$, where its value is $x(n)1_F = x(n)$, so the sum is $x(n)$; if $n \ge N$ then no $k < N$ equals $n$, the list is all $0_F$, and the sum is $0_F$. [L1, L4, L5, L6, L9]

1.4 Claim 3, independence. The map $k \mapsto e_k$ is injective, since $e_k(k) = 1_F \ne 0_F = e_l(k)$ for $l \ne k$. Let $w : m \to B$ be an injective finite list and $\lambda : m \to F$ with $\sum_{j<m}\lambda_j w_j = 0$ in $F^{\mathbb{N}}$. Each $w_j$ is $e_{i_j}$ for exactly one $i_j \in \mathbb{N}$, and $j \mapsto i_j$ is injective because $w$ is. Fix $j < m$ and evaluate at $i_j$: pointwise evaluation gives $0_F = \sum_{l<m}\lambda_l\,e_{i_l}(i_j)$, and $e_{i_l}(i_j) = 0_F$ unless $i_l = i_j$, that is unless $l = j$, where it is $1_F$. So the scalar list vanishes off the single index $j$ and sums to $\lambda_j 1_F = \lambda_j$, giving $\lambda_j = 0_F$. Hence every injective finite list into $B$ is independent, that is $B$ is linearly independent. [L1, L4, L5, L6, L7, L9]

2.1 $B \approx \mathbb{N}$: the map $k \mapsto e_k$ is injective by step 1.4 and its image is $B$ by definition, so it is a bijection $\mathbb{N} \to B$. [step 1.4, L9]

2.2 Claim 2. Each $e_k$ lies in $E$ and $E$ is a linear subspace, so $\operatorname{span}(B) \subseteq E$ by minimality of the span. Conversely let $x \in E$ with witness $N$; then $x$ and $s_N$ of step 1.3 agree at every $n$, since for $n < N$ both take the value $x(n)$ and for $n \ge N$ both take the value $0_F$, so $x = s_N = \sum_{k<N} x(k)e_k$, a linear combination of elements of $B$. Hence $E \subseteq \operatorname{span}(B)$. [step 1.1, step 1.2, step 1.3, L1, L3]

3.1 Claim 4. Suppose $E$ had a finite basis $C$, say with $p$ elements. Then $C$ is a spanning set of $E$ with $p$ elements, so no linearly independent subset of $E$ is equinumerous with $\mathbb{N}$. But $B \subseteq E$ is linearly independent by step 1.4 and $B \approx \mathbb{N}$ by step 2.1. So no finite basis exists and $E$ is infinite-dimensional over $F$. [step 1.4, step 2.1, L8]

4.1 Claim 3, that $B$ is a basis of $E$. By step 1.4 the set $B$ is linearly independent and by step 2.2 it spans $E$; independence and spans computed in the linear subspace $E$ agree with those computed in $F^{\mathbb{N}}$, so $B$ is a basis of the vector space $E$. [step 1.4, step 2.2, L2] ∎

## Remarks

- **Agreement with the order-69 examples page.** Claims 1 and 2 above are exactly claims 1 and 2 of [[ex-sequence-space-and-eventually-zero-subspace]], which states that $E$ is a linear subspace of $F^{\mathbb{N}}$ and that $E = \operatorname{span}\{\, e_k : k \in \mathbb{N} \,\}$, for the same $E$ and the same $e_k$. They are rebuilt here from [[lem-linear-subspace-criterion]] rather than quoted, because an examples page is a leaf of the library and nothing outside it may depend on the items homed there; the statements agree, and neither is stronger than the other. Claims 3 and 4 are new: that page had no notion of independence or dimension available.

- **This is the counterweight to [[cor-every-vector-space-has-a-basis]].** Here an infinite basis is exhibited and every step is explicit; there a basis is produced from Zorn's lemma and none is exhibited. The two extremes are placed on the same page on purpose, and the middle case is [[ex-hamel-basis-of-r-over-q]], where a basis exists by the same Zorn argument and this page exhibits none.

- **Infinite-dimensional is a negation, and that is all claim 4 asserts.** No number and no cardinal is attached to $E$: [[def-dimension]] assigns a dimension only to a space with a finite basis, and the fact that some basis of $E$ is equinumerous with $\mathbb{N}$ is a statement about that basis, not about a dimension.
