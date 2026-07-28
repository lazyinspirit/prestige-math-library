---
id: lem-nat-finite-sum-laws-and-the-canonical-embedding
kind: lemma
title: "Laws of finite sums and products in $\\mathbb{N}$, and $\\iota\\big(\\sum_{k<n} a_k\\big) = \\sum_{k<n} \\iota(a_k)$"
status: draft
origin: session
deps: [def-nat-finite-sum-and-product, def-finite-sum, def-canonical-natural,
       lem-of-naturals-positive, lem-of-zero-mult, thm-induction-principle,
       thm-omega-is-peano-system, def-nat-addition, def-nat-multiplication,
       lem-nat-add-associative, lem-nat-add-commutative, lem-nat-add-identity,
       lem-nat-mult-associative, lem-nat-mult-commutative, lem-nat-mult-distributive,
       lem-nat-mult-identity, lem-nat-order-add-compatible, lem-nat-add-cancellative,
       lem-nat-mult-cancellative, lem-nat-trichotomy, lem-nat-discrete, def-nat-order,
       def-field, def-ordered-field]
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
sources:
  scraped: []
  references:
    - title: "Summation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Summation"
    - title: "Natural number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Natural_number"
    - title: "T. Tao, Analysis I, 3rd ed., §7.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $a, b : \mathbb{N} \to \mathbb{N}$, let $c \in \mathbb{N}$, and let
$m, n \in \mathbb{N}$, with $\sum^{\mathbb{N}}$ and $\prod^{\mathbb{N}}$ as in
[[def-nat-finite-sum-and-product]] and $\sum^{\mathbb{R}}$, $\prod^{\mathbb{R}}$
as in [[def-finite-sum]]. Let $\iota : \mathbb{N} \to \mathbb{R}$ be the
canonical natural of [[def-canonical-natural]], so $\iota(0) = 0$ and
$\iota(\sigma(n)) = \iota(n) + 1$. Then:

0. **$\iota$ is additive and multiplicative.** $\iota(1) = 1$, and
   $\iota(m+n) = \iota(m) + \iota(n)$ and $\iota(m n) = \iota(m)\,\iota(n)$ for
   **all** $m, n \in \mathbb{N}$, the cases where a factor is $0$ included.
1. **Additivity.** $\displaystyle\sum_{k<n}(a_k + b_k) = \sum_{k<n} a_k + \sum_{k<n} b_k$.
2. **Constants.** $\displaystyle\sum_{k<n} c = n \cdot c$, the summand being the constant list.
3. **Splitting.** If $m \le n$ and $d := n - m$, then
   $\displaystyle\sum_{k<n} a_k = \sum_{k<m} a_k + \sum_{j<d} a_{m+j}$, and
   $\displaystyle\prod_{k<n} a_k = \Big(\prod_{k<m} a_k\Big)\Big(\prod_{j<d} a_{m+j}\Big)$.
4. **Monotonicity.** If $a_k \le b_k$ for every $k < n$ then
   $\sum_{k<n} a_k \le \sum_{k<n} b_k$; and $a_j \le \sum_{k<n} a_k$ for every $j < n$.
5. **Products.** $\displaystyle\prod_{k<n}(a_k b_k) = \Big(\prod_{k<n} a_k\Big)\Big(\prod_{k<n} b_k\Big)$;
   and if $a_k \ne 0$ for every $k < n$ then $\prod_{k<n} a_k \ne 0$.
6. **The bridge into $\mathbb{R}$.**
   $\displaystyle\iota\Big(\sum^{\mathbb{N}}_{k<n} a_k\Big) = \sum^{\mathbb{R}}_{k<n} \iota(a_k)$
   and
   $\displaystyle\iota\Big(\prod^{\mathbb{N}}_{k<n} a_k\Big) = \prod^{\mathbb{R}}_{k<n} \iota(a_k)$.
7. **$\iota$ is strictly increasing, hence injective.** $m < n$ if and only if
   $\iota(m) < \iota(n)$, and $m = n$ if and only if $\iota(m) = \iota(n)$.

Clauses 6 and 7 together are the licence used everywhere below: an identity
between natural numbers may be proved by proving the corresponding identity
between their canonical naturals in $\mathbb{R}$, and conversely a real identity
whose two sides are canonical naturals is an identity in $\mathbb{N}$.

## Facts & Assumptions

**Given:** Lists $a, b : \mathbb{N} \to \mathbb{N}$, a natural $c$, naturals $m, n$, and the ambient ordered field $\mathbb{R}$. Recall $\sigma(n) = n + 1$ and the truncated difference $n - m$ of [[def-nat-finite-sum-and-product]].

[L1] Induction: a property holding at $0$ and inherited by successors holds at every natural ([[thm-induction-principle]]).

[L2] Recursion clauses in $\mathbb{N}$ ([[def-nat-finite-sum-and-product]]): $\sum_{k<0} a_k = 0$, $\sum_{k<\sigma(n)} a_k = \sum_{k<n} a_k + a_n$, $\prod_{k<0} a_k = 1$, $\prod_{k<\sigma(n)} a_k = \big(\prod_{k<n} a_k\big)\cdot a_n$.

[L3] Recursion clauses in $\mathbb{R}$ ([[def-finite-sum]]): $\sum^{\mathbb{R}}_{k<0} x_k = 0$, $\sum^{\mathbb{R}}_{k<\sigma(n)} x_k = \sum^{\mathbb{R}}_{k<n} x_k + x_n$, and likewise $\prod^{\mathbb{R}}_{k<0} x_k = 1$, $\prod^{\mathbb{R}}_{k<\sigma(n)} x_k = \big(\prod^{\mathbb{R}}_{k<n} x_k\big)\cdot x_n$.

[L4] Arithmetic of $\mathbb{N}$: addition and multiplication are associative and commutative, $0 + n = n$ and $n + 0 = n$, $1 \cdot n = n \cdot 1 = n$ and $0 \cdot n = n \cdot 0 = 0$, multiplication distributes over addition, and $\sigma(a)\cdot n = a \cdot n + n$ ([[lem-nat-add-associative]], [[lem-nat-add-commutative]], [[lem-nat-add-identity]], [[lem-nat-mult-associative]], [[lem-nat-mult-commutative]], [[lem-nat-mult-identity]], [[lem-nat-mult-distributive]], [[def-nat-addition]], [[def-nat-multiplication]]).

[L5] Order of $\mathbb{N}$: $m \le n$ means $m + j = n$ for some $j$, that $j$ is unique, $m \le n \iff m + k \le n + k$, and $m < n \iff \sigma(m) \le n$, so $n \ne 0$ is the same as $1 \le n$; exactly one of $m<n$, $m=n$, $n<m$ holds ([[def-nat-order]], [[lem-nat-add-cancellative]], [[lem-nat-order-add-compatible]], [[lem-nat-discrete]], [[lem-nat-trichotomy]]). Transitivity of $\le$ follows from the definition and associativity: $m + j = n$ and $n + i = p$ give $m + (j+i) = p$.

[L6] The canonical natural ([[def-canonical-natural]]): $\iota(0) = 0_{\mathbb{R}}$ and $\iota(\sigma(n)) = \iota(n) + 1_{\mathbb{R}}$; $\iota(n)$ is also written $n \cdot 1_{\mathbb{R}}$.

[L7] For $n \ge 1$, with $n \cdot 1_F$ defined by $1 \cdot 1_F = 1_F$ and $(n+1)\cdot 1_F = n \cdot 1_F + 1_F$: $n \cdot 1_F > 0$, and $(m+n)\cdot 1_F = m\cdot 1_F + n\cdot 1_F$ and $(mn)\cdot 1_F = (m\cdot 1_F)(n \cdot 1_F)$ for all $m, n \ge 1$ ([[lem-of-naturals-positive]]). **These identities are asserted for $m, n \ge 1$ only**; the cases with a zero argument are checked separately below.

[L8] In a field, $0 \cdot x = 0$ ([[lem-of-zero-mult]]); and $\mathbb{R}$ is an ordered field, so its addition and multiplication are associative and commutative with identities $0$ and $1$, and its order is total and compatible with addition ([[def-field]], [[def-ordered-field]]).

[L9] Cancellation in $\mathbb{N}$: $m \cdot k = n \cdot k$ with $k \ne 0$ implies $m = n$ ([[lem-nat-mult-cancellative]]); and $\sigma(n) \ne 0$, so $1 \ne 0$ ([[thm-omega-is-peano-system]]).

## Proof

**Proof technique:** induction.

1.1 Every clause is proved by induction on the upper index, using only the recursion clauses [L2], [L3] and the arithmetic [L4], [L8]; the inductions are written out one clause at a time. [given]

1.2 The two notations agree: $\iota(n) = n \cdot 1_{\mathbb{R}}$ for every $n \ge 1$. At $n = 1$, $\iota(1) = \iota(\sigma(0)) = \iota(0) + 1_{\mathbb{R}} = 1_{\mathbb{R}} = 1 \cdot 1_{\mathbb{R}}$; and the successor clauses of the two recursions coincide, $\iota(\sigma(n)) = \iota(n) + 1_{\mathbb{R}}$ and $(n+1)\cdot 1_{\mathbb{R}} = n \cdot 1_{\mathbb{R}} + 1_{\mathbb{R}}$. So the two agree at every $n \ge 1$ by induction, and [L7] may be read as a statement about $\iota$. [L1, L6, L7]

1.3 Clause 1 at $n = 0$: both sides are the empty sum, $0 = 0 + 0$. [base, L2, L4]

1.4 Clause 1, inductive hypothesis: assume $\sum_{k<n}(a_k+b_k) = \sum_{k<n} a_k + \sum_{k<n} b_k$ for a fixed $n$ and all lists $a, b$. [ih]

1.5 Clause 2, by induction on $n$. At $n = 0$ both sides are $0$, since $0 \cdot c = 0$. If $\sum_{k<n} c = n \cdot c$, then $\sum_{k<\sigma(n)} c = \sum_{k<n} c + c = n\cdot c + c = \sigma(n)\cdot c$, the last equality being the successor law $\sigma(a)\cdot n = a\cdot n + n$ of [L4]. [L1, L2, L4]

1.6 Clause 3, by induction on $d$, with $m$ fixed and $n = m + d$. At $d = 0$ we have $n = m$ and the second sum is empty, so the claim reads $\sum_{k<m} a_k = \sum_{k<m} a_k + 0$. Assuming it at $d$, and using $m + \sigma(d) = \sigma(m+d)$, we get $\sum_{k<\sigma(n)} a_k = \sum_{k<n} a_k + a_n = \big(\sum_{k<m} a_k + \sum_{j<d} a_{m+j}\big) + a_{m+d} = \sum_{k<m} a_k + \big(\sum_{j<d} a_{m+j} + a_{m+d}\big) = \sum_{k<m} a_k + \sum_{j<\sigma(d)} a_{m+j}$. The product form is the same argument with $+$ replaced by $\cdot$ and $0$ by $1$. [L1, L2, L4, L5]

1.7 Clause 5, by induction on $n$. At $n = 0$ both sides are $1 = 1 \cdot 1$; and $\prod_{k<\sigma(n)}(a_kb_k) = \big(\prod_{k<n}(a_kb_k)\big)a_nb_n = \big(\prod_{k<n}a_k\big)\big(\prod_{k<n}b_k\big)a_nb_n = \big(\prod_{k<\sigma(n)}a_k\big)\big(\prod_{k<\sigma(n)}b_k\big)$ by associativity and commutativity. For the second assertion, note first that a product of two nonzero naturals is nonzero: if $xy = 0$ with $y \ne 0$, then $xy = 0 \cdot y$, so $x = 0$ by [L9]. Now induct: $\prod_{k<0}a_k = 1 \ne 0$ by [L9], and $\prod_{k<\sigma(n)}a_k = \big(\prod_{k<n}a_k\big)a_n$ is a product of two nonzero naturals. [L1, L2, L4, L9]

2.1 Clause 1, inductive step. Using [L2] twice and the associativity and commutativity of addition, $\sum_{k<\sigma(n)}(a_k+b_k) = \sum_{k<n}(a_k+b_k) + (a_n+b_n) = \big(\sum_{k<n}a_k + \sum_{k<n}b_k\big) + (a_n+b_n) = \big(\sum_{k<n}a_k + a_n\big) + \big(\sum_{k<n}b_k + b_n\big) = \sum_{k<\sigma(n)}a_k + \sum_{k<\sigma(n)}b_k$, where the inductive hypothesis of step 1.4 was used at the second equality. [step 1.4, L2, L4]

2.2 Clause 0. First $\iota(1) = 1$, computed in step 1.2. For $m, n \ge 1$ the two identities are [L7], read through step 1.2. If $n = 0$ then $\iota(m+0) = \iota(m) = \iota(m) + 0 = \iota(m) + \iota(0)$, and $\iota(m \cdot 0) = \iota(0) = 0 = \iota(m)\cdot 0 = \iota(m)\iota(0)$ by [L8]; the case $m = 0$ follows from these by the commutativity of addition and multiplication in $\mathbb{N}$ and in $\mathbb{R}$. So both identities hold for all $m, n \in \mathbb{N}$. [step 1.2, L4, L7, L8]

2.3 Clause 4. Monotonicity is an induction: at $n = 0$ both sums are $0$; and if $\sum_{k<n}a_k \le \sum_{k<n}b_k$ and $a_n \le b_n$, then $\sum_{k<n}a_k + a_n \le \sum_{k<n}b_k + a_n \le \sum_{k<n}b_k + b_n$ by [L5], so $\sum_{k<\sigma(n)}a_k \le \sum_{k<\sigma(n)}b_k$ by transitivity. For the second assertion let $j < n$, so $1 \le n - j$; splitting at $j$ and then splitting the tail at $1$, and using $\sum_{i<1}a_{j+i} = 0 + a_j = a_j$, gives $\sum_{k<n}a_k = \big(\sum_{k<j}a_k + a_j\big) + R$ for some $R \in \mathbb{N}$, and $a_j \le \big(\sum_{k<j}a_k + a_j\big) + R$ because $a_j$ plus something equals it. [step 1.6, L2, L4, L5]

3.1 Clause 1 holds for every $n$, by step 1.3 and step 2.1 together with induction. [step 1.3, step 2.1, L1]

3.2 Clause 7. If $m < n$ put $d = n - m$, so $m + d = n$ and $d \ne 0$, hence $d \ge 1$ and $\iota(d) > 0$ by [L7]; then $\iota(n) = \iota(m) + \iota(d) > \iota(m)$ by step 2.2. Conversely, if $\iota(m) < \iota(n)$ then $m = n$ and $n < m$ are both excluded, the first because the order of $\mathbb{R}$ is irreflexive and the second by what was just proved, so $m < n$ by trichotomy in $\mathbb{N}$. The statement about equality follows by trichotomy on both sides. [step 2.2, L5, L7, L8]

3.3 Clause 6, by induction on $n$. At $n = 0$, $\iota\big(\sum_{k<0}a_k\big) = \iota(0) = 0 = \sum^{\mathbb{R}}_{k<0}\iota(a_k)$. Assuming the identity at $n$, $\iota\big(\sum_{k<\sigma(n)}a_k\big) = \iota\big(\sum_{k<n}a_k + a_n\big) = \iota\big(\sum_{k<n}a_k\big) + \iota(a_n) = \sum^{\mathbb{R}}_{k<n}\iota(a_k) + \iota(a_n) = \sum^{\mathbb{R}}_{k<\sigma(n)}\iota(a_k)$, the second equality by step 2.2. The product form is the same induction, starting from $\iota(1) = 1$ and using multiplicativity. [step 2.2, L1, L2, L3, L6]

4.1 Clause 0 is step 2.2, clause 1 is step 3.1, clause 2 is step 1.5, clause 3 is step 1.6, clause 4 is step 2.3, clause 5 is step 1.7, clause 6 is step 3.3 and clause 7 is step 3.2. [step 1.5, step 1.6, step 1.7, step 2.3, step 3.1, step 3.2, step 3.3, discharge-induction] ∎

## Remarks

- **Why the zero cases are done by hand.** [[lem-of-naturals-positive]] states
  $(m+n)\cdot 1_F = m \cdot 1_F + n \cdot 1_F$ and
  $(mn)\cdot 1_F = (m\cdot 1_F)(n \cdot 1_F)$ **for $m, n \ge 1$ only**, because
  the notation $n \cdot 1_F$ is introduced there by a recursion that starts at
  $1$. Every count on this page can be $0$, so the two one-line checks at $0$ in
  step 2.2 are not pedantry: without them clause 0 would be a citation to a
  statement that was not made.

- **The real-valued laws are the same list.** [[lem-finite-sum-laws]] proves
  additivity, scaling, splitting, monotonicity, telescoping and the product laws
  for sums of **reals**. The clauses above are their $\mathbb{N}$-valued
  counterparts, proved from the same recursion, and clause 6 is what ties the two
  lists together. Neither list contains a permutation-invariance clause; that is
  proved separately in the next item, and it is what the sum over a finite index
  set needs.

- **What clause 7 buys.** Because $\iota$ is injective, a proof may cross into
  $\mathbb{R}$, use subtraction or division there, and come back: if
  $\iota(x) = \iota(y)$ with $x, y \in \mathbb{N}$ then $x = y$. The binomial
  theorem below lives in $\mathbb{R}$ for exactly this reason, while every
  coefficient in it is a count.
