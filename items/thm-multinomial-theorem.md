---
id: thm-multinomial-theorem
kind: theorem
title: "The multinomial coefficient equals $n!/\\prod_{i<m} k_i!$, and $(x_0+\\dots+x_{m-1})^{n} = \\sum \\iota\\!\\binom{n}{k}\\prod_{i<m} x_i^{k_i}$ in $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-multinomial-coefficient, thm-binomial-theorem, thm-binomial-closed-formula,
       def-sum-over-a-finite-index-set, def-finite-sum, lem-finite-sum-laws,
       def-nat-finite-sum-and-product, lem-nat-finite-sum-laws-and-the-canonical-embedding,
       def-integer-power, def-canonical-natural, thm-cardinality-of-a-set-of-functions,
       thm-subset-of-a-finite-set, def-factorial-and-falling-factorial, thm-sum-rule,
       thm-product-rule, def-binomial-coefficient, def-finite-cardinality,
       def-injection-surjection-bijection, thm-induction-principle, def-nat-order,
       lem-nat-add-cancellative, lem-nat-mult-cancellative, lem-nat-mult-associative,
       lem-nat-mult-commutative, lem-nat-nonzero-is-successor, def-field, def-integer-power]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Multinomial theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Multinomial_theorem"
    - title: "Binomial theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binomial_theorem"
    - title: "R. Stanley, Enumerative Combinatorics, Vol. 1, Ch. 1"
      url: "https://en.wikipedia.org/wiki/Enumerative_Combinatorics"
pipeline_run: null
---

## Statement

Let $m, n \in \mathbb{N}$ and $k \in \mathcal{W}(n,m)$, that is
$k : m \to \mathbb{N}$ with $\sum_{i<m}k_i = n$
([[def-multinomial-coefficient]]). Then:

1. **The closed formula, in $\mathbb{N}$.**
   $$\binom{n}{k}\cdot\prod_{i<m} k_i! \;=\; n! ,$$
   so in $\mathbb{R}$ the quotient $\iota(n!)\big/\prod_{i<m}\iota(k_i!)$ is
   $\iota\binom{n}{k}$, the canonical natural of a count.
2. **The expansion, in $\mathbb{R}$.** For $x : m \to \mathbb{R}$,
   $$\Big(\sum_{i<m} x_i\Big)^{n} \;=\; \sum_{k \in \mathcal{W}(n,m)} \iota\binom{n}{k}\prod_{i<m} x_i^{\,k_i},$$
   the outer sum being the sum over the finite index set $\mathcal{W}(n,m)$
   ([[def-sum-over-a-finite-index-set]]) and the inner product the real finite
   product of [[def-finite-sum]].

As with the binomial theorem, the identity is stated in $\mathbb{R}$; the
commutative-ring version is a separate statement, to be made where rings exist.
See the Remarks of [[thm-binomial-theorem]].

## Facts & Assumptions

**Given:** Naturals $m$, $n$, a tuple $k \in \mathcal{W}(n,m)$, a list $x : m \to \mathbb{R}$, and a finite set $A$ with $\lvert A\rvert = n$. For $m = \sigma(M)$ write $k' : M \to \mathbb{N}$ for the shifted tuple $k'_j := k_{\sigma(j)}$.

[L1] Induction ([[thm-induction-principle]]).

[L2] Multinomial coefficients ([[def-multinomial-coefficient]]): $\lvert\mathcal{B}(A,k)\rvert = \binom{\lvert A\rvert}{k}$; $\mathcal{B}(A,k)$ and $\mathcal{W}(n,m)$ are finite; $\binom{0}{\ } = 1$ for the empty tuple; and $\mathcal{W}(n,0)$ is $\{\,()\,\}$ for $n = 0$ and $\varnothing$ for $n \ge 1$.

[L3] The sum rule, in particular the splitting of a sum over a finite index set along a partition of that index set ([[thm-sum-rule]], clause 3), together with the reindexing and constant clauses of [[def-sum-over-a-finite-index-set]].

[L4] The binomial closed formula $\binom{n}{j}\,j!\,(n-j)! = n!$ for $j \le n$ ([[thm-binomial-closed-formula]]) and the binomial theorem ([[thm-binomial-theorem]]).

[L5] Finite sums and products: the recursion clauses in $\mathbb{N}$ and in $\mathbb{R}$, the splitting clause at index $1$, and the scaling and additivity clauses in $\mathbb{R}$ ([[def-nat-finite-sum-and-product]], [[def-finite-sum]], [[lem-finite-sum-laws]], [[lem-nat-finite-sum-laws-and-the-canonical-embedding]]).

[L6] Factorials: $j! \ne 0$, and a product of nonzero naturals is nonzero; cancellation by a nonzero natural ([[def-factorial-and-falling-factorial]], [[lem-nat-mult-cancellative]], [[lem-nat-mult-associative]], [[lem-nat-mult-commutative]]).

[L7] $\iota$ is additive, multiplicative, injective, and commutes with finite sums and products (clauses 0, 6, 7 of [[lem-nat-finite-sum-laws-and-the-canonical-embedding]], [[def-canonical-natural]]); $\mathbb{R}$ is a field ([[def-field]]); powers obey $a^{0} = 1$, $a^{\sigma(j)} = a^{j}a$ ([[def-integer-power]]).

[L8] Binomial coefficients and cardinality: $\lvert [A]^{j}\rvert = \binom{\lvert A\rvert}{j}$ ([[def-binomial-coefficient]]); transport ([[def-finite-cardinality]]); a subset of a finite set is finite ([[thm-subset-of-a-finite-set]], [[thm-cardinality-of-a-set-of-functions]]); the product rule ([[thm-product-rule]]); two-sided inverses give bijections ([[def-injection-surjection-bijection]]); every nonzero natural is a successor ([[lem-nat-nonzero-is-successor]]); $j + (n-j) = n$ for $j \le n$ ([[def-nat-order]], [[lem-nat-add-cancellative]]).

## Proof

**Proof technique:** induction.

1.1 Notation for both inductions. For $m = \sigma(M)$ and $k \in \mathcal{W}(n,\sigma(M))$, splitting the sum at index $1$ ([L5]) gives $n = \sum_{i<\sigma(M)}k_i = k_0 + \sum_{j<M} k'_j$, so $k' \in \mathcal{W}(n - k_0, M)$ and $k_0 \le n$; the same splitting for products gives $\prod_{i<\sigma(M)}k_i! = k_0!\cdot\prod_{j<M}k'_j!$. [given, L5, L8]

1.2 Base case of clause 1, at $m = 0$. Then $\mathcal{W}(n,0)$ is nonempty only for $n = 0$, and there $\binom{0}{\ } = 1$, the empty product of factorials is $1$ and $0! = 1$, so the identity reads $1 \cdot 1 = 1$. [base, L2, L5, L6]

1.3 Inductive hypothesis for clause 1: fix $M$ and assume $\binom{N}{k'}\prod_{j<M}k'_j! = N!$ for every $N$ and every $k' \in \mathcal{W}(N,M)$. [ih]

1.4 Base case of clause 2, at $m = 0$. The left-hand side is $\big(\sum_{i<0}x_i\big)^{n} = 0^{\,n}$. If $n = 0$ this is $1$, and the right-hand side is the single term $\iota\binom{0}{\ }\prod_{i<0}x_i^{k_i} = 1\cdot 1 = 1$. If $n \ge 1$ then $0^{\,n} = 0$ and $\mathcal{W}(n,0) = \varnothing$, so the right-hand side is an empty sum, equal to $0$. [L2, L5, L7]

2.1 Inductive step for clause 1. Let $m = \sigma(M)$, $k \in \mathcal{W}(n,\sigma(M))$, and let $A$ be finite with $\lvert A\rvert = n$. The map $c \mapsto \big(c^{-1}[\{0\}],\, c''\big)$, where $c''(a)$ is the unique $i$ with $c(a) = \sigma(i)$ for $a \notin c^{-1}[\{0\}]$, sends $\mathcal{B}(A,k)$ to the set of pairs $(S, c'')$ with $S \in [A]^{k_0}$ and $c'' \in \mathcal{B}(A\setminus S, k')$; it is well defined because $c(a) \ne 0$ off the first fibre, every nonzero natural is a unique successor, and $\lvert c''^{-1}[\{j\}]\rvert = \lvert c^{-1}[\{\sigma(j)\}]\rvert = k'_j$. Its two-sided inverse sends $(S,c'')$ to the colouring equal to $0$ on $S$ and to $\sigma(c''(a))$ off $S$. The pairs form the union of the pairwise disjoint sets $\{S\}\times\mathcal{B}(A\setminus S,k')$ indexed by $S \in [A]^{k_0}$, and $\lvert A\setminus S\rvert = n-k_0$ by [L3], so each has $\binom{n-k_0}{k'}$ elements. Hence $\binom{n}{k} = \binom{n}{k_0}\binom{n-k_0}{k'}$ by [L3] and [L8]. Multiplying by $\prod_{i<\sigma(M)}k_i! = k_0!\prod_{j<M}k'_j!$ and using the hypothesis of step 1.3 at $N = n-k_0$ gives $\binom{n}{k}\prod_{i<\sigma(M)}k_i! = \binom{n}{k_0}\,k_0!\cdot\Big(\binom{n-k_0}{k'}\prod_{j<M}k'_j!\Big) = \binom{n}{k_0}\,k_0!\,(n-k_0)! = n!$ by [L4], since $k_0 \le n$. [step 1.1, step 1.3, L2, L3, L4, L6, L8, construct]

3.1 Clause 1 holds for every $m$, by step 1.2, step 2.1 and induction. The real form follows: applying $\iota$ gives $\iota\binom{n}{k}\prod_{i<m}\iota(k_i!) = \iota(n!)$, and each $\iota(k_i!)$ is nonzero by [L6] and [L7], so the product is invertible in $\mathbb{R}$. [step 1.2, step 2.1, L1, L6, L7]

4.1 Inductive step for clause 2. Assume clause 2 at $M$, for every $n$ and every list of length $M$. Let $x : \sigma(M) \to \mathbb{R}$, put $y := \sum_{i<M}x_i$ and $z := x_M$, so $\sum_{i<\sigma(M)}x_i = y + z$ by [L5]. The map $\Phi(j,\kappa) := \widehat{\kappa}$, where $\widehat{\kappa}$ restricts to $\kappa$ on $M$ and $\widehat{\kappa}_M := n-j$, is a bijection from the disjoint union of the sets $\{j\}\times\mathcal{W}(j,M)$, $j < \sigma(n)$, onto $\mathcal{W}(n,\sigma(M))$: it lands there because $\sum_{i<\sigma(M)}\widehat{\kappa}_i = j + (n-j) = n$, and its inverse sends $\widehat{\kappa}$ to the pair $\big(\sum_{i<M}\widehat{\kappa}_i,\ \widehat{\kappa}\restriction M\big)$, the two constructions being mutually inverse by [L8]. Moreover $\iota\binom{n}{j}\,\iota\binom{j}{\kappa} = \iota\binom{n}{\widehat{\kappa}}$: by step 3.1 and [L4], both $\binom{n}{\widehat{\kappa}}$ and $\binom{n}{j}\binom{j}{\kappa}$ become $n!$ after multiplication by the nonzero natural $\big(\prod_{i<M}\kappa_i!\big)(n-j)!$, so they are equal by cancellation. And $\prod_{i<M}x_i^{\kappa_i}\cdot z^{\,n-j} = \prod_{i<\sigma(M)}x_i^{\widehat{\kappa}_i}$ by the product recursion clause. Now [L4] gives $(y+z)^{n} = \sum_{j<\sigma(n)}\iota\binom{n}{j}y^{\,j}z^{\,n-j}$; substituting the inductive hypothesis for $y^{\,j}$, distributing the scalar $\iota\binom{n}{j}z^{\,n-j}$ over the inner sum by the scaling clause of [L5], and then applying [L3] to the partition of $\mathcal{W}(n,\sigma(M))$ into the images of the sets $\mathcal{W}(j,M)$ under $\Phi$ yields $\big(\sum_{i<\sigma(M)}x_i\big)^{n} = \sum_{\widehat{\kappa}\in\mathcal{W}(n,\sigma(M))}\iota\binom{n}{\widehat{\kappa}}\prod_{i<\sigma(M)}x_i^{\widehat{\kappa}_i}$. [step 1.4, step 3.1, assume-hyp, L2, L3, L4, L5, L6, L7, L8, construct]

5.1 By step 1.4, step 4.1 and induction, clause 2 holds for every $m \in \mathbb{N}$, every $n$ and every list $x$. [step 1.4, step 4.1, L1]

6.1 Clause 1 is step 3.1 and clause 2 is step 5.1. [step 3.1, step 5.1, discharge-induction] ∎

## Remarks

- **The index set of the outer sum has to be finite, and it is.** It is
  $\mathcal{W}(n,m)$, which [[def-multinomial-coefficient]] shows finite by
  injecting it into the set of functions $m \to \sigma(n)$. Without that the
  outer sum would not be defined, which is the reason
  [[def-sum-over-a-finite-index-set]] exists.

- **The small cases are computed, not waved at.** At $m = 0$ the left-hand side
  is $0^{n}$ and the right-hand side is an empty sum or a single term, and the
  two match only because $0^{0} = 1$. At $m = 1$ the only tuple is $k = (n)$, the
  coefficient is $\binom{n}{n} = 1$ by clause 1, and the identity reads
  $x_0^{\,n} = x_0^{\,n}$.

- **Clause 1 is again an identity between natural numbers**, so integrality of
  $n!/\prod k_i!$ is free; the quotient form is a consequence obtained through
  $\iota$, exactly as for the binomial coefficient.
