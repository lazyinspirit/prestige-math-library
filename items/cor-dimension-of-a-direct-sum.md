---
id: cor-dimension-of-a-direct-sum
kind: corollary
title: "If $V = \\bigoplus_{i<n} U_i$ with every $U_i$ finite-dimensional, then $V$ is finite-dimensional and $\\dim_F V = \\sum_{i<n} \\dim_F U_i$; in particular $\\dim_F(U \\oplus W) = \\dim_F U + \\dim_F W$"
status: draft
origin: session
deps: [thm-dimension-formula, thm-dimension-of-a-linear-subspace, def-dimension, def-internal-direct-sum, def-sum-of-linear-subspaces, lem-sum-is-span-of-union, lem-intersection-of-linear-subspaces, def-linear-subspace, def-linear-basis, def-monoid-finite-product, def-nat-addition, def-vector-space, def-field, thm-induction-principle, def-natural-numbers, lem-nat-order-is-membership, def-nat-order]
justified_by: []
aliases: [cor-dim-direct-sum]
landmark: false
short: "dimension of a direct sum"
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Direct sum of modules (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Direct_sum_of_modules"
    - title: "Dimension (vector space) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dimension_(vector_space)"
pipeline_run: null
---

## Statement

Let $F$ be a field ([[def-field]]), let $n \in \mathbb{N}$, let $V$ be a vector
space over $F$ ([[def-vector-space]]) and let $U$ be a family of linear subspaces
$U_i$ of $V$ indexed by $i < n$ ([[def-linear-subspace]],
[[def-sum-of-linear-subspaces]]) with

$$V \;=\; \bigoplus_{i<n} U_i$$

([[def-internal-direct-sum]]) and every $U_i$ finite-dimensional over $F$
([[def-dimension]]). Then $V$ is finite-dimensional over $F$ and

$$\dim_F V \;=\; \sum_{i<n} \dim_F U_i ,$$

the right-hand side being the finite sum of [[def-monoid-finite-product]] read
additively in the commutative monoid $(\mathbb{N}, +, 0)$
([[def-nat-addition]]).

**The base case is a genuine case.** At $n = 0$ the direct sum of the empty
family is $\{0_V\}$ and the empty sum of natural numbers is $0$, so the formula
reads $\dim_F\{0_V\} = 0$. **At $n = 2$** it reads
$\dim_F(U \oplus W) = \dim_F U + \dim_F W$.

**No choice principle is used.** The only inputs are
[[thm-dimension-formula]] and [[thm-dimension-of-a-linear-subspace]], both of
which are proved in finite dimension without one.

## Facts & Assumptions

**Given:** A field $F$; a natural number $n$; a vector space $V$ over $F$; and a family of finite-dimensional linear subspaces $U_i$ of $V$ indexed by $i < n$ with $V = \bigoplus_{i<n} U_i$.

[L1] $V = \bigoplus_{i<n} U_i$ means (D1) $\sum_{i<n}U_i = V$ and (D2) $U_j \cap \sum_{i \ne j}U_i = \{0_V\}$ for every $j < n$, where $\sum_{i \ne j}U_i = \sum_{i<n}U^{(j)}_i$ for the family $U^{(j)}$ with $U^{(j)}_j = \{0_V\}$; and $\bigoplus_{i<0}U_i = \{0_V\}$ holds exactly for the zero space ([[def-internal-direct-sum]]).

[L2] $\sum_{i<n}U_i$ is a linear subspace of $V$ whose elements are exactly the $\sum_{i<n}u_i$ with $u_i \in U_i$; $\sum_{i<0}U_i = \{0_V\}$; and the finite sum obeys $\sum_{i<\sigma(p)}u_i = \bigl(\sum_{i<p}u_i\bigr) + u_p$ ([[def-sum-of-linear-subspaces]], [[def-monoid-finite-product]]).

[L3] A sum of a family contains each of its summands ([[lem-sum-is-span-of-union]]); the intersection of two linear subspaces is a linear subspace ([[lem-intersection-of-linear-subspaces]]); and a linear subspace of $V$ contained in a linear subspace $V'$ of $V$ is a linear subspace of $V'$, with the same independence and the same spans ([[def-linear-basis]], section on bases of a linear subspace, [[def-linear-subspace]]).

[L4] For finite-dimensional linear subspaces $X$ and $Y$ of a vector space, $X + Y$ and $X \cap Y$ are finite-dimensional and $\dim_F(X+Y) + \dim_F(X \cap Y) = \dim_F X + \dim_F Y$ ([[thm-dimension-formula]]); and a linear subspace of a finite-dimensional space is finite-dimensional ([[thm-dimension-of-a-linear-subspace]]).

[L5] $\dim_F\{0_V\} = 0$, and $\dim_F$ depends only on the space and the field ([[def-dimension]]).

[L6] Finite sums of natural numbers: $\sum_{i<0}d_i = 0$ and $\sum_{i<\sigma(p)}d_i = \bigl(\sum_{i<p}d_i\bigr) + d_p$ in $(\mathbb{N},+,0)$ ([[def-monoid-finite-product]], [[def-nat-addition]]).

[L7] Induction on $\mathbb{N}$, with $\sigma(p) = p \cup \{p\}$ and $p = \{\,i : i < p\,\}$ ([[thm-induction-principle]], [[def-natural-numbers]], [[lem-nat-order-is-membership]], [[def-nat-order]]).

## Proof

**Proof technique:** induction.

1.1 The statement to be proved by induction on $n$ is: for every vector space $V$ over $F$ and every family of finite-dimensional linear subspaces $U_i$ of $V$ indexed by $i < n$ with $V = \bigoplus_{i<n}U_i$, the space $V$ is finite-dimensional with $\dim_F V = \sum_{i<n}\dim_F U_i$. At $n = 0$ the hypothesis $V = \bigoplus_{i<0}U_i$ holds exactly when $V = \{0_V\}$, and then $\dim_F V = 0$, which is also the empty sum $\sum_{i<0}\dim_F U_i$. [base, L1, L5, L6]

1.2 Two identities used in the successor step. Let $n = \sigma(p)$ and put $V' := \sum_{i<p}U_i$, a linear subspace of $V$. First, $V' = \sum_{i \ne p}U_i$: an element of the right-hand side is $\sum_{i<\sigma(p)}u_i$ with $u_i \in U_i$ for $i < p$ and $u_p = 0_V$, and the recursion makes that $\bigl(\sum_{i<p}u_i\bigr) + 0_V = \sum_{i<p}u_i$, so the two sets have the same elements. Second, $V' + U_p = \sum_{i<\sigma(p)}U_i$: an element of the left-hand side is $\bigl(\sum_{i<p}u_i\bigr) + u_p$ with $u_i \in U_i$ for $i < p$ and $u_p \in U_p$, which by the recursion is $\sum_{i<\sigma(p)}u_i$, and conversely. [L1, L2]

1.3 Assume the displayed statement at the natural number $p$, for every vector space over $F$ and every family of finite-dimensional linear subspaces indexed by $i < p$. [ih]

2.1 The successor step. Let $n = \sigma(p)$, let $V = \bigoplus_{i<\sigma(p)}U_i$ with every $U_i$ finite-dimensional, and let $V' := \sum_{i<p}U_i$ as in step 1.2. Then $V' = \bigoplus_{i<p}U_i$ as a direct sum inside $V'$: condition (D1) holds by the definition of $V'$, and for $j < p$ every element $\sum_{i<p}u_i$ with $u_i \in U^{(j)}_i$ is also $\sum_{i<\sigma(p)}u_i$ after setting $u_p := 0_V \in U_p$, so $\sum_{i<p}U^{(j)}_i$ is contained in the corresponding sum for the family indexed by $\sigma(p)$, and (D2) for the larger family at $j$ forces $U_j \cap \sum_{i<p}U^{(j)}_i = \{0_V\}$, the reverse inclusion holding because both sides are linear subspaces. Each $U_i$ with $i < p$ is contained in $V'$ and is therefore a linear subspace of $V'$, still finite-dimensional. So step 1.3 applies to $V'$ and gives that $V'$ is finite-dimensional with $\dim_F V' = \sum_{i<p}\dim_F U_i$. Now $V'$ and $U_p$ are finite-dimensional linear subspaces of $V$; by step 1.2 their sum is $\sum_{i<\sigma(p)}U_i = V$, and their intersection is $U_p \cap \sum_{i \ne p}U_i = \{0_V\}$ by (D2) at $j = p$. The dimension formula therefore gives $\dim_F V + \dim_F\{0_V\} = \dim_F V' + \dim_F U_p$, that is $\dim_F V = \bigl(\sum_{i<p}\dim_F U_i\bigr) + \dim_F U_p = \sum_{i<\sigma(p)}\dim_F U_i$, and $V$ is finite-dimensional because the dimension formula asserts that the sum of two finite-dimensional subspaces is one. [step 1.2, step 1.3, L1, L2, L3, L4, L5, L6]

3.1 Step 1.1 and step 2.1 are the base case and the successor step of an induction on $n$, so the statement holds for every $n \in \mathbb{N}$; at $n = 2$ it reads $\dim_F(U_0 \oplus U_1) = \sum_{i<2}\dim_F U_i = \dim_F U_0 + \dim_F U_1$, by the recursion for finite sums of naturals. [step 1.1, step 2.1, L6, L7, discharge-induction] ∎

## Remarks

- **(D2), not the pairwise condition, is what makes the induction run.** At each stage the intersection term vanishes because $U_p$ meets the sum of *all* the other summands only in $0_V$; pairwise trivial intersections would not give that, and [[lem-direct-sum-criterion]] records that the two conditions are genuinely different from three summands on. The order-69 examples page carries the witness, and the companion page of this one uses the same three lines for a different failure.

- **The base case is stated rather than started at $1$.** $\mathbb{N}$ contains $0$, the empty direct sum is the zero space ([[def-internal-direct-sum]]) and the empty sum of naturals is $0$ ([[def-monoid-finite-product]]), so $n = 0$ is an instance of the formula and not an exception to it.

- **Nothing here bounds the number of summands by the dimension.** A direct sum may have many summands equal to $\{0_V\}$, each contributing $0$ to the sum; the formula counts dimensions, not summands.
