---
id: ex-f-n-and-its-coordinate-subspaces
kind: example
title: "In $F^{3}$ the three coordinate lines are linear subspaces whose internal direct sum is $F^{3}$, and $F^{0}$ is the zero space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-function-space, def-vector-space, def-linear-subspace, def-linear-combination-and-span, lem-span-of-a-single-vector, def-sum-of-linear-subspaces, def-internal-direct-sum, lem-direct-sum-criterion, def-natural-numbers, lem-nat-order-is-membership, def-field, lem-of-zero-mult]
justified_by: []
aliases: []
landmark: false
short: "$F^{3}$ as a direct sum of coordinate lines"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Examples of vector spaces (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Examples_of_vector_spaces"
    - title: "Direct sum of modules (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Direct_sum_of_modules"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed. (free PDF, CC BY-NC)"
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Example

Let $F$ be a field ([[def-field]]) and consider the vector space $F^{3}$ of
functions $3 \to F$ with the pointwise operations ([[def-function-space]]). Since
$3 = \{0, 1, 2\}$ ([[def-natural-numbers]], [[lem-nat-order-is-membership]]), an
element is written $x = (x_0, x_1, x_2)$ with $x_i := x(i)$, **indexed from
$0$**. For $j < 3$ let $e_j \in F^{3}$ be given by $e_j(j) = 1_F$ and
$e_j(i) = 0_F$ for $i \ne j$, and put

$$L_j \;:=\; \{\, x \in F^{3} \;:\; x_i = 0_F \text{ for every } i < 3 \text{ with } i \ne j \,\}.$$

Then:

1. $L_j = \{\, \lambda e_j : \lambda \in F \,\} = \operatorname{span}\{e_j\}$, so
   each $L_j$ is a linear subspace of $F^{3}$ ([[def-linear-subspace]],
   [[def-linear-combination-and-span]]);
2. $F^{3} = \bigoplus_{j<3} L_j$ ([[def-internal-direct-sum]]), the unique
   decomposition of $x \in F^{3}$ being $x = x_0 e_0 + x_1 e_1 + x_2 e_2$;
3. $F^{0}$ is the zero space: it has exactly one element, the empty function.

The sets $L_j$ are called the **coordinate lines** of $F^{3}$; the word "line" is
used informally, since dimension is not available here and nothing below uses it.

## Facts & Assumptions

**Given:** A field $F$, the vector space $F^{3}$ of functions $3 \to F$ with pointwise operations, the vectors $e_j$ for $j < 3$, and the sets $L_j$ as displayed.

[L1] $F^{X}$ is a vector space over $F$ with $(x+y)(i) = x(i)+y(i)$, $(\lambda x)(i) = \lambda x(i)$ and zero the constant function at $0_F$; for $X = n$ a natural number, $n = \{0,\dots,n-1\}$; and $F^{0}$ has exactly one element, the empty function, which is its zero vector ([[def-function-space]], [[def-vector-space]], [[def-natural-numbers]], [[lem-nat-order-is-membership]]).

[L2] $\operatorname{span}\{v\} = \{\, \lambda v : \lambda \in F \,\}$, and the span of a subset is a linear subspace ([[lem-span-of-a-single-vector]], [[def-linear-combination-and-span]], [[def-linear-subspace]]).

[L3] The elements of $\sum_{i<n} U_i$ are exactly the $\sum_{i<n} u_i$ with $u_i \in U_i$; and $\sum_{i<3} u_i = (u_0 + u_1) + u_2$, by the recursion $\sum_{i<0} u_i = 0$ and $\sum_{i<\sigma(m)} u_i = \bigl(\sum_{i<m} u_i\bigr) + u_m$ together with $0 + u_0 = u_0$ ([[def-sum-of-linear-subspaces]]).

[L4] $V = \bigoplus_{i<n} U_i$ holds if and only if every $v \in V$ is $\sum_{i<n} u_i$ with $u_i \in U_i$ in exactly one way ([[lem-direct-sum-criterion]], [[def-internal-direct-sum]]).

[L5] In a field: $1_F \lambda = \lambda$, multiplication is commutative, $0_F \lambda = 0_F$ ([[lem-of-zero-mult]]) and hence $\lambda 0_F = 0_F$, and $0_F$ is the additive identity ([[def-field]]).

## Verification

**Proof technique:** direct.

1.1 $F^{3}$ is the set of functions $3 \to F$ with the pointwise operations, and $3 = \{0,1,2\}$, so the coordinates of an element are $x_0, x_1, x_2$. [L1]

1.2 Each $e_j$ is an element of $F^{3}$, and each $L_j$ is a subset of $F^{3}$, both by their displayed descriptions. [L1, L5]

1.3 $L_j = \{\, \lambda e_j : \lambda \in F \,\}$ for every $j < 3$. If $\lambda \in F$ then $(\lambda e_j)_j = \lambda 1_F = \lambda$ and $(\lambda e_j)_i = \lambda 0_F = 0_F$ for $i \ne j$, so $\lambda e_j \in L_j$. Conversely if $x \in L_j$ then $x$ and $x_j e_j$ have the same value at every $i < 3$, namely $x_j$ at $i = j$ and $0_F$ elsewhere, so $x = x_j e_j$. [L1, L5]

1.4 For $u_0, u_1, u_2 \in F^{3}$ the finite sum is $\sum_{j<3} u_j = (u_0 + u_1) + u_2$, whose value at $i < 3$ is $(u_0(i) + u_1(i)) + u_2(i)$, by the pointwise definition of the addition. [L1, L3]

1.5 $F^{0}$ has exactly one element, the empty function, and that element is its zero vector, so $F^{0}$ is the zero space; this is claim 3. [L1]

2.1 Each $L_j$ is a linear subspace of $F^{3}$ and equals $\operatorname{span}\{e_j\}$: by step 1.3 it is the set of scalar multiples of $e_j$, which is exactly the span of $\{e_j\}$, and a span is a linear subspace. This is claim 1. [step 1.3, L2]

2.2 Every $x \in F^{3}$ decomposes. Put $u_j := x_j e_j$, which lies in $L_j$ by step 1.3. The value of $\sum_{j<3} u_j$ at $i < 3$ is $(x_0 e_0(i) + x_1 e_1(i)) + x_2 e_2(i)$; since $e_j(i) = 0_F$ for $j \ne i$ and $e_i(i) = 1_F$, exactly one summand is $x_i$ and the others are $0_F$, so the value is $x_i$. Hence $\sum_{j<3} u_j = x$, and $\sum_{j<3} L_j = F^{3}$. [step 1.3, step 1.4, L1, L5]

3.1 The decomposition is unique. Suppose $u_j \in L_j$ for $j < 3$ and $\sum_{j<3} u_j = x$. Evaluating at $i < 3$ gives $(u_0(i) + u_1(i)) + u_2(i) = x_i$, and $u_j(i) = 0_F$ whenever $j \ne i$, so the left-hand side is $u_i(i)$; thus $u_i(i) = x_i$, and step 1.3 gives $u_i = u_i(i) e_i = x_i e_i$. So the list is the one of step 2.2. [step 1.3, step 1.4, L1, L5]

4.1 By steps 2.2 and 3.1 every $x \in F^{3}$ is $\sum_{j<3} u_j$ with $u_j \in L_j$ in exactly one way, so $F^{3} = \bigoplus_{j<3} L_j$, and the decomposition is $x = x_0 e_0 + x_1 e_1 + x_2 e_2$. This is claim 2. [step 2.2, step 3.1, L4]

5.1 Claim 1 is step 2.1, claim 2 is step 4.1 and claim 3 is step 1.5. [step 1.5, step 2.1, step 4.1] ∎

## Remarks

- **Every index here starts at $0$.** The coordinates are $x_0, x_1, x_2$ and the
  summands are $L_0, L_1, L_2$, because $3 = \{0,1,2\}$ as a von Neumann natural.
  Writing the same example with coordinates $x_1, x_2, x_3$ would not match the
  definition of $F^{n}$ used here ([[def-function-space]]).

- **$F^{0}$ is not empty.** There is exactly one function $\varnothing \to F$, so
  $F^{0}$ has exactly one element and is the zero space. It is also the internal
  direct sum of the empty family of its linear subspaces
  ([[def-internal-direct-sum]]), which is the only space that is.

- **Nothing above is special to $3$.** The same computation works for any
  $n \in \mathbb{N}$ and gives $F^{n} = \bigoplus_{j<n} L_j$, at $n = 0$
  degenerating to the statement that the zero space is the direct sum of the empty
  family. It is written out at $n = 3$ so that the finite sums are the explicit
  $(u_0 + u_1) + u_2$ rather than an induction.
