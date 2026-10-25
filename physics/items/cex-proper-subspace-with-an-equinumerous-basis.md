---
id: cex-proper-subspace-with-an-equinumerous-basis
kind: counterexample
title: "Inside the space of eventually zero families, the linear subspace spanned by $\\{\\, e_i : i \\ge 1 \\,\\}$ is proper and has a basis equinumerous with a basis of the whole space, so \"equal dimension forces equality\" fails without finite dimension"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [ex-basis-of-the-eventually-zero-families, thm-dimension-of-a-linear-subspace, cor-independent-set-is-no-larger-than-a-finite-spanning-set, def-dimension, def-linear-basis, def-linear-independence, lem-independent-list-is-injective, lem-standard-basis-of-f-n, def-linear-subspace, def-linear-combination-and-span, lem-span-is-the-set-of-linear-combinations, lem-span-monotone-and-idempotent, def-sum-of-linear-subspaces, def-monoid-finite-product, lem-restriction-of-scalars, def-function-space, def-vector-space, def-field, lem-vector-space-elementary-consequences, def-equinumerous, def-injection-surjection-bijection, def-countable, def-natural-numbers, def-nat-order, lem-nat-order-is-membership, lem-nat-nonzero-is-successor]
justified_by: []
aliases: []
landmark: false
short: "a proper subspace with an equinumerous basis"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Dimension (vector space) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dimension_(vector_space)"
    - title: "Sequence space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequence_space"
    - title: "University of Vermont notes: Infinite-dimensional vector spaces"
      url: "https://www.uvm.edu/~smillere/Curio2.pdf"
pipeline_run: null
---

## Statement refuted

**False claim:** if $U$ is a linear subspace of a vector space $V$ over $F$ and
some basis of $U$ is equinumerous with some basis of $V$, then $U = V$.

Let $F$ be any field, let $E \subseteq F^{\mathbb{N}}$ be the linear subspace of
eventually zero families and let $e_k$ be the standard unit families
([[ex-basis-of-the-eventually-zero-families]]). Put

$$B := \{\, e_k : k \in \mathbb{N} \,\}, \qquad B' := \{\, e_k : k \in \mathbb{N},\ k \ge 1 \,\}, \qquad U := \operatorname{span}(B') .$$

Then

1. $U$ is a linear subspace of $E$ and $B'$ is a basis of $U$, while $B$ is a
   basis of $E$;
2. $B' \approx B$ ([[def-equinumerous]]), both being equinumerous with
   $\mathbb{N}$;
3. $U \ne E$: the family $e_0$ lies in $E$ and not in $U$.

So a proper linear subspace can carry a basis equinumerous with a basis of the
whole space, and the equality clause of
[[thm-dimension-of-a-linear-subspace]] — which is stated only for a
finite-dimensional ambient space — really does need its hypothesis.

**No dimension is assigned to either space.** $E$ and $U$ are both
infinite-dimensional ([[def-dimension]] assigns no number to such a space): for
$E$ this is claim 4 of [[ex-basis-of-the-eventually-zero-families]], and for $U$
it follows from claims 1 and 2 below, since the basis $B'$ of $U$ is linearly
independent and equinumerous with $\mathbb{N}$, so $U$ can have no finite
spanning set and hence no finite basis, by claim 2 of
[[cor-independent-set-is-no-larger-than-a-finite-spanning-set]]. And
claim 2 compares two specific bases through an explicit bijection, not two
cardinal numbers.

## Facts & Assumptions

**Given:** A field $F$, the vector space $F^{\mathbb{N}}$, the subspace $E$ of eventually zero families, the families $e_k$, and the sets $B$, $B'$ and $U = \operatorname{span}(B')$ as above.

[L1] $E$ is a linear subspace of $F^{\mathbb{N}}$; $B \subseteq E$; $\operatorname{span}(B) = E$; $B$ is linearly independent and is a basis of $E$; $k \mapsto e_k$ is a bijection $\mathbb{N} \to B$; and $E$ is infinite-dimensional ([[ex-basis-of-the-eventually-zero-families]], claims 1 to 4).

[L2] Every subset of a linearly independent subset is linearly independent ([[lem-independent-list-is-injective]], claim 7).

[L3] $\operatorname{span}(T)$ is a linear subspace containing $T$, contained in every linear subspace containing $T$, monotone in $T$, and equal to the set of linear combinations $\sum_{l<p}\lambda_l w_l$ of finite lists $w : p \to T$ ([[def-linear-combination-and-span]], [[lem-span-monotone-and-idempotent]], [[lem-span-is-the-set-of-linear-combinations]], [[def-linear-subspace]]).

[L4] A basis of a vector space is a linearly independent spanning subset, and independence and spans of subsets of a linear subspace agree with those computed in the ambient space ([[def-linear-basis]], [[def-linear-independence]]).

[L5] A finite sum in a function space is pointwise ([[lem-standard-basis-of-f-n]], claim 1); $F$ is a vector space over itself, so an all-$0_F$ list of scalars sums to $0_F$ ([[lem-restriction-of-scalars]], [[def-sum-of-linear-subspaces]], [[def-monoid-finite-product]]); and $F^{X}$ has the pointwise operations, with equality pointwise ([[def-function-space]], [[def-vector-space]]).

[L6] In $F$: $\lambda 0_F = 0_F$ and $1_F \ne 0_F$ ([[lem-vector-space-elementary-consequences]], [[def-field]]).

[L7] $\sigma$ is injective on $\mathbb{N}$, $k < \sigma(k)$, and every $j \ne 0$ is $\sigma(k)$ for a unique $k$ ([[def-natural-numbers]], [[lem-nat-nonzero-is-successor]], [[def-nat-order]], [[lem-nat-order-is-membership]]); bijections, images and $\approx$ are as in [[def-injection-surjection-bijection]], [[def-equinumerous]], [[def-countable]].

## Counterexample

**Proof technique:** direct.

1.1 $B' \subseteq B \subseteq E$, so $B'$ is linearly independent, and $U = \operatorname{span}(B')$ is a linear subspace of $F^{\mathbb{N}}$ contained in $E$, hence a linear subspace of $E$; since $B'$ is independent and spans $U$ by definition, $B'$ is a basis of $U$. [L1, L2, L3, L4]

1.2 Claim 2. The map $k \mapsto e_{\sigma(k)}$ is a bijection $\mathbb{N} \to B'$: it is injective, being the composite of the injective $\sigma$ with the injective $k \mapsto e_k$, and every element of $B'$ is $e_j$ with $j \ne 0$, hence $e_{\sigma(k)}$ for the unique $k$ with $\sigma(k) = j$. So $B' \approx \mathbb{N}$, and $B \approx \mathbb{N}$ as well, whence $B' \approx B$ by symmetry and transitivity of $\approx$. [L1, L7]

1.3 Every $x \in U$ satisfies $x(0) = 0_F$. Indeed $x = \sum_{l<p}\lambda_l w_l$ for some $p$, some $\lambda : p \to F$ and some $w : p \to B'$; evaluating pointwise at $0$ gives $x(0) = \sum_{l<p}\lambda_l\,w_l(0)$, and each $w_l$ is $e_{j_l}$ with $j_l \ge 1$, so $w_l(0) = 0_F$ and $\lambda_l w_l(0) = 0_F$; a list of scalars all equal to $0_F$ sums to $0_F$. [L3, L5, L6]

2.1 Claim 3. The family $e_0$ lies in $E$ and $e_0(0) = 1_F \ne 0_F$, so by step 1.3 it does not lie in $U$; hence $U \ne E$, and $U$ is a **proper** linear subspace of $E$. [step 1.3, L1, L6]

3.1 Steps 1.1, 1.2 and 2.1 give claims 1, 2 and 3: $U$ is a proper linear subspace of $E$, $B'$ is a basis of $U$, $B$ is a basis of $E$, and $B' \approx B$. So a basis of a proper subspace can be equinumerous with a basis of the whole space, refuting the false claim. [step 1.1, step 1.2, step 2.1] ∎

## Remarks

- **The finite case is a theorem, and this shows why it is one.** [[thm-dimension-of-a-linear-subspace]] proves that in a finite-dimensional ambient space equality of dimensions forces equality of the spaces; its proof enlarges a basis of the subspace by a vector outside it and contradicts the bound on independent sets. Here the same enlargement is possible — $B' \cup \{e_0\} = B$ is independent — and contradicts nothing, because there is no finite bound to violate.

- **No cardinal arithmetic is used or implied.** The comparison in claim 2 is a named bijection, $k \mapsto e_{\sigma(k)}$, between two specific sets. This item does not assign a dimension to $E$ or to $U$, and it says nothing about whether any two bases of $E$ are equinumerous; that question needs cardinal arithmetic, which is not available at this point in the reading order.

- **The subspace is spanned by "all but one" basis vector.** Deleting a single element from an infinite basis leaves a set that is still equinumerous with the original, which is exactly the phenomenon [[lem-pigeonhole]] rules out for finite sets and for natural numbers.
