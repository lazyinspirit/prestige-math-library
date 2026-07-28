---
id: thm-binomial-theorem
kind: theorem
title: "The binomial theorem in $\\mathbb{R}$: $(x+y)^{n} = \\sum_{k<n+1} \\iota\\!\\binom{n}{k}\\, x^{k} y^{\\,n-k}$"
status: draft
origin: session
deps: [thm-pascals-rule, def-binomial-coefficient, def-finite-sum, lem-finite-sum-laws,
       def-nat-finite-sum-and-product, lem-nat-finite-sum-laws-and-the-canonical-embedding,
       def-integer-power, def-canonical-natural, lem-of-zero-mult,
       lem-nat-add-cancellative, lem-nat-nonzero-is-successor, def-nat-order,
       thm-induction-principle, def-field, def-ordered-field]
justified_by: []
forward_refs: [def-ring]
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
    - title: "Binomial theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binomial_theorem"
    - title: "Binomial coefficient (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binomial_coefficient"
    - title: "Pascal's rule (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Pascal%27s_rule"
pipeline_run: null
---

## Statement

For all $x, y \in \mathbb{R}$ and every $n \in \mathbb{N}$,

$$(x+y)^{n} \;=\; \sum_{k<n+1} \iota\binom{n}{k}\, x^{k}\, y^{\,n-k},$$

where the powers are the integer powers of [[def-integer-power]], the sum is the
real finite sum of [[def-finite-sum]] over $k = 0, 1, \dots, n$, the difference
$n-k$ is a genuine one because $k \le n$ throughout the range, and $\iota$ is the
canonical natural of [[def-canonical-natural]].

**The coefficient is $\iota\binom{n}{k}$ and not $\binom{n}{k}$.** A binomial
coefficient is a natural number, that is a von Neumann natural, that is a set; it
is not an element of $\mathbb{R}$, and it enters the field through $\iota$.

**The identity is stated in $\mathbb{R}$ and only in $\mathbb{R}$.** The same
proof uses nothing but commutativity, associativity, distributivity and
natural-number multiples of a ring element, so a commutative-ring version is
available wherever rings are; rings are not available at this point in the
reading order, and the ring statement is a separate statement, to be made where
they are. See the Remarks below.

## Facts & Assumptions

**Given:** Reals $x, y$; a natural $n$; and the abbreviation $c_k := \iota\binom{n}{k}$ for **every** $k \in \mathbb{N}$, so that $c_k = \iota(0) = 0$ whenever $k > n$.

[L1] Induction ([[thm-induction-principle]]).

[L2] Integer powers ([[def-integer-power]]): $a^{0} = 1$ for **every** real $a$, including $a = 0$, and $a^{\sigma(m)} = a^{m}\cdot a$. An immediate induction gives $1^{m} = 1$.

[L3] Real finite sums ([[def-finite-sum]]): $\sum_{k<0} u_k = 0$ and $\sum_{k<\sigma(N)} u_k = \sum_{k<N} u_k + u_N$; additivity $\sum(u_k+v_k) = \sum u_k + \sum v_k$, scaling $\sum \lambda u_k = \lambda\sum u_k$, and splitting $\sum_{k<N} u_k = \sum_{k<p} u_k + \sum_{j<N-p} u_{p+j}$ for $p \le N$ ([[lem-finite-sum-laws]], clauses 1, 2 and 3).

[L4] $\iota$ is additive and multiplicative with $\iota(0) = 0$ and $\iota(1) = 1$ (clause 0 of [[lem-nat-finite-sum-laws-and-the-canonical-embedding]], [[def-canonical-natural]]).

[L5] Binomial coefficients ([[def-binomial-coefficient]]): $\binom{m}{0} = 1$ and $\binom{m}{j} = 0$ for $j > m$; Pascal's rule $\binom{\sigma(m)}{\sigma(j)} = \binom{m}{j} + \binom{m}{\sigma(j)}$ for all $m, j$ ([[thm-pascals-rule]], clause 1).

[L6] Field arithmetic of $\mathbb{R}$: associativity, commutativity, distributivity, $0 \cdot a = 0$ ([[def-field]], [[def-ordered-field]], [[lem-of-zero-mult]]).

[L7] Arithmetic of $\mathbb{N}$: for $k \le n$, $k + (n-k) = n$, and hence $(n-k)+1 = \sigma(n)-k$ and $\sigma(n) - \sigma(k) = n-k$; every nonzero natural is a successor ([[def-nat-order]], [[lem-nat-add-cancellative]], [[lem-nat-nonzero-is-successor]], [[def-nat-finite-sum-and-product]] for the truncated difference).

## Proof

**Proof technique:** induction.

1.1 Both sides are functions of $n$ with $x, y$ fixed, and the induction is on $n$. Note first that $c_{\sigma(n)} = \iota\binom{n}{\sigma(n)} = \iota(0) = 0$, since $\sigma(n) > n$. [given, L4, L5]

1.2 Base case $n = 0$. The left-hand side is $(x+y)^{0} = 1$ by [L2]. The right-hand side is $\sum_{k<1}\iota\binom{0}{k}x^{k}y^{\,0-k} = \iota\binom{0}{0}x^{0}y^{0} = 1\cdot 1\cdot 1 = 1$, using [L3], $\binom{0}{0} = 1$, $\iota(1) = 1$ and [L2]. This is correct at $x = 0$ and at $y = 0$ as well, because $a^{0} = 1$ for every real $a$. [base, L2, L3, L4, L5]

1.3 Inductive hypothesis: fix $n$ and assume $(x+y)^{n} = \sum_{k<\sigma(n)} c_k x^{k}y^{\,n-k}$ for all $x, y \in \mathbb{R}$. [ih]

2.1 Expanding one factor. By [L2] and distributivity, $(x+y)^{\sigma(n)} = (x+y)^{n}(x+y) = \big(\sum_{k<\sigma(n)} c_k x^{k}y^{\,n-k}\big)x + \big(\sum_{k<\sigma(n)} c_k x^{k}y^{\,n-k}\big)y$, using the hypothesis of step 1.3; and by the scaling clause of [L3] together with $x^{k}x = x^{\sigma(k)}$ and $y^{\,n-k}y = y^{\,(n-k)+1}$ this equals $\Sigma_1 + \Sigma_2$ with $\Sigma_1 := \sum_{k<\sigma(n)} c_k x^{\sigma(k)}y^{\,n-k}$ and $\Sigma_2 := \sum_{k<\sigma(n)} c_k x^{k}y^{\,(n-k)+1}$. [step 1.3, L2, L3, L6]

3.1 Rewriting $\Sigma_2$. For $k \le n$ one has $(n-k)+1 = \sigma(n)-k$ by [L7], so $\Sigma_2 = \sum_{k<\sigma(n)} c_k x^{k}y^{\,\sigma(n)-k}$. Extending the range by one term costs nothing: by the recursion clause of [L3], $\sum_{k<\sigma(\sigma(n))} c_k x^{k}y^{\,\sigma(n)-k} = \Sigma_2 + c_{\sigma(n)}x^{\sigma(n)}y^{0}$, and $c_{\sigma(n)} = 0$ by step 1.1, so the added term is $0$ by [L6] and $\Sigma_2 = \sum_{k<\sigma(\sigma(n))} c_k x^{k}y^{\,\sigma(n)-k}$. [step 1.1, step 2.1, L3, L6, L7]

3.2 Rewriting $\Sigma_1$. Define a list $b$ of length $\sigma(\sigma(n))$ by $b_0 := 0$ and $b_{\sigma(i)} := c_i x^{\sigma(i)}y^{\,n-i}$ for $i < \sigma(n)$; every index below $\sigma(\sigma(n))$ is $0$ or a successor $\sigma(i)$ with $i < \sigma(n)$, by [L7], so $b$ is well defined. Splitting at $p = 1$ by [L3] and using $\sigma(\sigma(n)) - 1 = \sigma(n)$ and $1 + i = \sigma(i)$, $\sum_{j<\sigma(\sigma(n))} b_j = b_0 + \sum_{i<\sigma(n)} b_{\sigma(i)} = 0 + \Sigma_1 = \Sigma_1$. [step 2.1, L3, L6, L7]

4.1 Adding the two. By step 3.1, step 3.2 and the additivity clause of [L3], $(x+y)^{\sigma(n)} = \sum_{k<\sigma(\sigma(n))}\big(b_k + c_k x^{k}y^{\,\sigma(n)-k}\big)$. Evaluate the general term. At $k = 0$ it is $0 + \iota\binom{n}{0}x^{0}y^{\,\sigma(n)} = y^{\,\sigma(n)} = \iota\binom{\sigma(n)}{0}x^{0}y^{\,\sigma(n)-0}$, both coefficients being $\iota(1) = 1$. At $k = \sigma(i)$ with $i < \sigma(n)$ it is $c_i x^{\sigma(i)}y^{\,n-i} + c_{\sigma(i)}x^{\sigma(i)}y^{\,\sigma(n)-\sigma(i)}$, and $\sigma(n)-\sigma(i) = n-i$ by [L7], so the term equals $\big(\iota\binom{n}{i} + \iota\binom{n}{\sigma(i)}\big)x^{\sigma(i)}y^{\,\sigma(n)-\sigma(i)} = \iota\binom{\sigma(n)}{\sigma(i)}x^{\sigma(i)}y^{\,\sigma(n)-\sigma(i)}$ by the additivity of $\iota$ and Pascal's rule. Hence $(x+y)^{\sigma(n)} = \sum_{k<\sigma(\sigma(n))}\iota\binom{\sigma(n)}{k}x^{k}y^{\,\sigma(n)-k}$, which is the claim at $\sigma(n)$. [step 3.1, step 3.2, L3, L4, L5, L6, L7]

5.1 By step 1.2, step 4.1 and induction the identity holds for every $n \in \mathbb{N}$ and all reals $x$, $y$; in particular at $x = 0$ or $y = 0$, where the convention $a^{0} = 1$ of [[def-integer-power]] is what makes the extreme terms come out right and no exceptional case is needed. [step 1.2, step 4.1, L1, L2, discharge-induction] ∎

## Remarks

- **Two index traps, both checked.** The sum runs over $k < n+1$, that is
  $k \le n$, so the exponent $n-k$ is never a truncated difference in disguise;
  and the inductive step needs the coefficient $\binom{n}{\sigma(n)}$, which is
  $0$ by the boundary values of [[def-binomial-coefficient]] rather than
  undefined. Step 1.1 records that once and both rewritings use it.

- **Where $0^{0}$ matters.** At $x = 0$ the term with $k = 0$ is
  $\iota\binom{n}{0}\,0^{0}y^{n} = y^{n}$, and the identity reads
  $y^{n} = y^{n}$. A treatment leaving $0^{0}$ undefined would have to state the
  theorem with exceptions; [[def-integer-power]] fixes $a^{0} = 1$ for every real
  $a$, so there are none.

- **The ring version is a different statement.** It says the same thing about
  $x, y$ in a commutative ring, with $\iota\binom{n}{k}$ replaced by the
  $\binom{n}{k}$-fold multiple of the ring element. Making it requires rings,
  which come later in the reading order; the pointer to [[def-ring]] is
  orientation only and nothing above rests on it.
