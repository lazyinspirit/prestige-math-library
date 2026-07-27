---
id: ex-sequence-space-and-eventually-zero-subspace
kind: example
title: "$F^{\\mathbb{N}}$ is a vector space and the eventually zero families form a linear subspace of it that is the span of the standard unit families"
status: published
origin: session
deps: [def-function-space, def-vector-space, def-linear-subspace, lem-linear-subspace-criterion, def-linear-combination-and-span, lem-span-is-the-set-of-linear-combinations, def-monoid-finite-product, thm-induction-principle, def-natural-numbers, def-nat-order, lem-nat-order-is-membership, thm-nat-linear-order, def-field, lem-of-zero-mult]
justified_by: []
aliases: []
landmark: false
short: "$F^{\\mathbb{N}}$ and its eventually zero families"
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
    - title: "Sequence space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequence_space"
pipeline_run: null
---

## Example

Let $F$ be a field ([[def-field]]) and let $F^{\mathbb{N}}$ be the function space
of all families $x : \mathbb{N} \to F$ with the pointwise operations
([[def-function-space]]), written $x = (x_n)_{n \in \mathbb{N}}$ with
$x_n := x(n)$; the index runs over $\mathbb{N}$, which contains $0$
([[def-natural-numbers]]). Put

$$E \;:=\; \{\, x \in F^{\mathbb{N}} \;:\; \text{there is } N \in \mathbb{N} \text{ with } x_n = 0_F \text{ for every } n \ge N \,\},$$

the set of **eventually zero** families, and for $k \in \mathbb{N}$ let
$e_k \in F^{\mathbb{N}}$ be the **standard unit family** given by $e_k(k) = 1_F$
and $e_k(n) = 0_F$ for $n \ne k$. Then:

1. $E$ is a linear subspace of $F^{\mathbb{N}}$ ([[def-linear-subspace]]);
2. $E = \operatorname{span}\{\, e_k : k \in \mathbb{N} \,\}$
   ([[def-linear-combination-and-span]]);
3. $E \ne F^{\mathbb{N}}$, the constant family at $1_F$ lying outside $E$.

## Facts & Assumptions

**Given:** A field $F$, the vector space $F^{\mathbb{N}}$ with pointwise operations, the set $E$ of eventually zero families, and the families $e_k$ for $k \in \mathbb{N}$.

[L1] $F^{X}$ is a vector space over $F$ with $(x+y)(n) = x(n)+y(n)$, $(\lambda x)(n) = \lambda x(n)$, and zero the constant family at $0_F$; two elements are equal exactly when they agree at every point ([[def-function-space]], [[def-vector-space]]).

[L2] One-step test: a nonempty subset closed under $\lambda u + v$ is a linear subspace, and a linear subspace satisfies (W1), (W2), (W3) ([[lem-linear-subspace-criterion]], [[def-linear-subspace]]).

[L3] $\operatorname{span}(S)$ is the set of linear combinations $\sum_{k<N} \lambda_k v_k$ of elements of $S$, and it is the smallest linear subspace containing $S$ ([[lem-span-is-the-set-of-linear-combinations]], [[def-linear-combination-and-span]]).

[L4] Finite sums in a vector space: $\sum_{k<0} u_k = 0$ and $\sum_{k<\sigma(N)} u_k = \bigl(\sum_{k<N} u_k\bigr) + u_N$ ([[def-monoid-finite-product]], [[def-linear-combination-and-span]]).

[L5] Induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L6] The order of $\mathbb{N}$ is total and reflexive, $m < \sigma(N)$ is equivalent to $m \le N$, and $m < n$ implies $m \ne n$ ([[thm-nat-linear-order]], [[def-nat-order]], [[lem-nat-order-is-membership]]).

[L7] In a field: $0_F \lambda = 0_F$ ([[lem-of-zero-mult]]) and multiplication is commutative, so $\lambda 0_F = 0_F$; $\lambda 1_F = \lambda$; $0_F + 0_F = 0_F$ and $0_F$ is the additive identity; and $1_F \ne 0_F$ ([[def-field]]).

## Verification

**Proof technique:** direct.

1.1 $F^{\mathbb{N}}$ is a vector space over $F$, being the function space on the index set $\mathbb{N}$, and its zero is the constant family at $0_F$. [L1]

1.2 $E$ is nonempty: the zero family has $x_n = 0_F$ for every $n$, so $N = 0$ witnesses that it lies in $E$. [L1]

1.3 $E$ is closed under the one-step expression. Let $\lambda \in F$ and $u, v \in E$, with witnesses $N_1$ for $u$ and $N_2$ for $v$. The order of $\mathbb{N}$ is total, so one of $N_1, N_2$ is at least the other; let $N$ be that one. For $n \ge N$ we have $n \ge N_1$ and $n \ge N_2$, hence $(\lambda u + v)_n = \lambda u_n + v_n = \lambda 0_F + 0_F = 0_F$. So $N$ witnesses $\lambda u + v \in E$. [L1, L6, L7]

1.4 Each $e_k$ lies in $E$: if $n \ge \sigma(k)$ then $k < n$, so $n \ne k$ and $e_k(n) = 0_F$; thus $\sigma(k)$ is a witness. [L6, L7]

1.5 For $x \in F^{\mathbb{N}}$ and $N \in \mathbb{N}$, the finite sum $s_N := \sum_{k<N} x_k e_k$ satisfies $s_N(n) = x_n$ for $n < N$ and $s_N(n) = 0_F$ for $N \le n$. By induction on $N$: at $N = 0$ the sum is the zero family, there is no $n < 0$, and the second clause holds. Assuming it at $N$, we have $s_{\sigma(N)} = s_N + x_N e_N$, so $s_{\sigma(N)}(n) = s_N(n) + x_N e_N(n)$; for $n < N$ this is $x_n + x_N 0_F = x_n$, since $n \ne N$; for $n = N$ it is $0_F + x_N 1_F = x_N$; and for $\sigma(N) \le n$ we have $N \le n$ and $n \ne N$, so it is $0_F + x_N 0_F = 0_F$. As $n < \sigma(N)$ is equivalent to $n \le N$, this is the claim at $\sigma(N)$. [L1, L4, L5, L6, L7]

1.6 The constant family $c$ with $c_n = 1_F$ for every $n$ does not lie in $E$: for any candidate witness $N$ we have $N \ge N$ and $c_N = 1_F \ne 0_F$. Hence $E \ne F^{\mathbb{N}}$, which is claim 3. [L1, L6, L7]

2.1 $E$ is a linear subspace of $F^{\mathbb{N}}$, by the one-step test applied to steps 1.2 and 1.3; this is claim 1. [step 1.2, step 1.3, L2]

2.2 If $x \in E$ with witness $N$, then $x = \sum_{k<N} x_k e_k$. Indeed the two families agree at every $n$: at $n < N$ both are $x_n$, and at $N \le n$ the sum is $0_F$ while $x_n = 0_F$ by the choice of $N$. So $x$ is a linear combination of elements of $\{\, e_k : k \in \mathbb{N} \,\}$. [step 1.5, L1]

3.1 Claim 2. By step 2.2 every element of $E$ is a linear combination of elements of $\{\, e_k : k \in \mathbb{N} \,\}$, hence lies in its span. Conversely each $e_k$ lies in $E$ by step 1.4 and $E$ is a linear subspace by step 2.1, so the span, being the smallest linear subspace containing all the $e_k$, is contained in $E$. [step 1.4, step 2.1, step 2.2, L3]

4.1 Claim 1 is step 2.1, claim 2 is step 3.1 and claim 3 is step 1.6. [step 1.6, step 2.1, step 3.1] ∎

## Remarks

- **The spanning set is infinite and every combination is finite.** The span of an
  infinite set consists of the vectors built from finitely many of its elements
  ([[lem-span-is-the-set-of-linear-combinations]]), which is exactly why the span
  of all the $e_k$ is the eventually zero families and not all of
  $F^{\mathbb{N}}$. Claim 3 is the concrete form of that distinction.

- **No topology and no convergence are involved.** "Eventually zero" is a purely
  algebraic condition on a family indexed by $\mathbb{N}$: some tail is
  identically $0_F$. Nothing here needs an order or a metric on $F$, and $F$ is an
  arbitrary field.

- **The witness $N$ is not unique and nothing above assumes it is.** If $N$
  witnesses that $x$ is eventually zero then so does every larger natural number,
  which is what makes the argument in step 1.3 work: two families are handled by
  taking the larger of their witnesses.
