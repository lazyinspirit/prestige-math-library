---
id: thm-am-gm
kind: theorem
title: "The arithmetic mean, geometric mean inequality"
status: draft
origin: session
deps: [def-finite-sum, lem-finite-sum-laws, def-integer-power, thm-nth-roots-exist, thm-induction-principle, lem-of-square-positive, lem-power-monotone, lem-power-laws, lem-bernoulli-inequality, prop-of-multiply-inequalities, lem-of-sign-rules, lem-of-add-order, lem-of-inverse-positive, lem-of-naturals-positive, lem-of-q-embeds]
justified_by: []
aliases: [thm-am-gm-inequality]
landmark: true
short: "$(\\prod a_k)^{1/n} \\le \\frac1n \\sum a_k$"
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "AM-GM inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/AM%E2%80%93GM_inequality"
    - title: "Bernoulli's inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bernoulli%27s_inequality"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ with $n \ge 1$ and let $a_0, \dots, a_{n-1} \in \mathbb{R}$
with $a_k \ge 0$ for every $k < n$. Write

$$A := \frac{1}{n}\sum_{k<n} a_k, \qquad G := \Big(\prod_{k<n} a_k\Big)^{1/n},$$

the **arithmetic mean** and the **geometric mean**, where the $n$-th root exists
because $\prod_{k<n} a_k \ge 0$ ([[thm-nth-roots-exist]],
[[lem-finite-sum-laws]]) and $n$ denotes the canonical natural
$\iota(n) \in \mathbb{R}$, which is invertible since $n \ge 1$
([[lem-of-naturals-positive]], [[lem-of-q-embeds]]). Then

$$\prod_{k<n} a_k \le A^{n}, \qquad \text{equivalently} \qquad G \le A,$$

and equality holds in either form if and only if $a_0 = a_1 = \dots = a_{n-1}$.

The proof is **Cauchy's forward-backward induction**: the statement is proved
first for all powers of two, by doubling, and then pulled back from a power of
two to every smaller $n$ by a descent that replaces the missing entry with the
arithmetic mean of the others. That is why the induction below runs over the
doubling scheme and not over $n$ directly.

## Facts & Assumptions

**Given:** A natural $n \ge 1$ and reals $a_0, \dots, a_{n-1} \ge 0$; for $m \ge 1$ let $P(m)$ denote the statement "for all reals $b_0, \dots, b_{m-1} \ge 0$, $\prod_{k<m} b_k \le B^{m}$ where $B = \frac{1}{m}\sum_{k<m} b_k$, with equality if and only if $b_0 = \dots = b_{m-1}$".

[L1] Laws of finite sums and products ([[lem-finite-sum-laws]], [[def-finite-sum]]): splitting of sums and of products at any index; the constant sum $\sum_{k<m}\lambda = m\lambda$; monotonicity of sums, with a sum of nonnegatives being $0$ only if every term is $0$; and a product of nonnegatives is nonnegative, of positives positive.

[L2] Roots ([[thm-nth-roots-exist]]): every $c \ge 0$ has a unique $c^{1/m} \ge 0$ with $\big(c^{1/m}\big)^{m} = c$, and $c^{1/m} > 0$ when $c > 0$.

[L3] Power monotonicity ([[lem-power-monotone]], [[def-integer-power]]): $x \mapsto x^{m}$ is strictly increasing and injective on $\{x \ge 0\}$ for $m \ge 1$, and preserves nonnegativity and positivity.

[L4] Integer exponent laws ([[lem-power-laws]]): $(xy)^{m} = x^{m}y^{m}$ and $\big(x^{2}\big)^{m} = x^{2m}$.

[L5] Order arithmetic: adding inequalities, multiplying inequalities of nonnegatives, scaling by a positive, and positivity of inverses of positives ([[lem-of-add-order]], [[prop-of-multiply-inequalities]], [[lem-of-sign-rules]], [[lem-of-inverse-positive]]).

[L6] Squares: $x^{2} \ge 0$, and $x^{2} = 0$ only for $x = 0$ ([[lem-of-square-positive]]).

[L7] Induction principle ([[thm-induction-principle]]).

[L8] Bernoulli's inequality ([[lem-bernoulli-inequality]]) at $x = 1$: $2^{j} = (1+1)^{j} \ge 1 + j$ for every $j \in \mathbb{N}$.

[L9] Canonical naturals: $\iota(m) > 0$ for $m \ge 1$, $\iota$ is a field homomorphism, and we write $m$ for $\iota(m)$ ([[lem-of-naturals-positive]], [[lem-of-q-embeds]]).

## Proof

**Proof technique:** induction.

1.1 Base case $P(1)$: for a single entry $b_0 \ge 0$ we have $\prod_{k<1} b_k = b_0$ and $B = \frac{1}{1}b_0 = b_0$, so $\prod_{k<1} b_k = b_0 = B^{1}$; equality always holds, and the condition "all entries equal" is automatic for one entry. [base, L1, L9]

1.2 Inductive hypothesis: fix $j \in \mathbb{N}$, write $N := 2^{j}$, and assume $P(N)$. [ih]

1.3 Reduction to positive entries: if some $b_k = 0$ then $\prod_{k<m} b_k = 0 \le B^{m}$, and equality means $B^{m} = 0$, hence $B = 0$, hence $\sum_{k<m} b_k = 0$, hence every $b_k = 0$, that is, all entries equal; conversely all entries equal to $0$ gives both sides $0$; so $P(m)$ holds for lists with a zero entry, and it is enough to prove $P(m)$ for lists of strictly positive entries. [L1, L2, L3, L9]

1.4 The two-entry case $P(2)$: for $x, y \ge 0$, $\big(\tfrac{x+y}{2}\big)^{2} - xy = \tfrac{(x+y)^{2} - 4xy}{4} = \big(\tfrac{x-y}{2}\big)^{2} \ge 0$, so $xy \le \big(\tfrac{x+y}{2}\big)^{2}$, with equality exactly when $\big(\tfrac{x-y}{2}\big)^{2} = 0$, that is when $x = y$. [L5, L6, L9]

1.5 A power of two exceeds its exponent: $2^{m} \ge 1 + m > m$ for every $m \in \mathbb{N}$, by Bernoulli's inequality at $x = 1$. [L8, L9]

2.1 Doubling step, $P(N) \Rightarrow P(2N)$: let $a_0, \dots, a_{2N-1} > 0$, put $X := \frac{1}{N}\sum_{k<N} a_k$ and $Y := \frac{1}{N}\sum_{k=N}^{2N-1} a_k$, both positive, and let $A := \frac{1}{2N}\sum_{k<2N} a_k$; splitting the sum at $N$ gives $\sum_{k<2N} a_k = NX + NY$, so $A = \frac{X+Y}{2}$; splitting the product at $N$ and applying the hypothesis to each half gives $\prod_{k<2N} a_k = \big(\prod_{k<N} a_k\big)\big(\prod_{k=N}^{2N-1} a_k\big) \le X^{N} Y^{N} = (XY)^{N}$; and the two-entry case applied to $X, Y$ gives $XY \le \big(\frac{X+Y}{2}\big)^{2} = A^{2}$, whence $(XY)^{N} \le \big(A^{2}\big)^{N} = A^{2N}$ and therefore $\prod_{k<2N} a_k \le A^{2N}$. [step 1.2, step 1.3, step 1.4, L1, L3, L4, L5, L9]

2.2 Descent step, $P(m) \Rightarrow P(m-1)$ for $m \ge 2$: let $b_0, \dots, b_{m-2} > 0$ and put $B := \frac{1}{m-1}\sum_{k<m-1} b_k > 0$; define $a_k := b_k$ for $k < m-1$ and $a_{m-1} := B$, so that $\sum_{k<m} a_k = (m-1)B + B = mB$ and the arithmetic mean of $a_0, \dots, a_{m-1}$ is exactly $B$; applying $P(m)$ gives $\big(\prod_{k<m-1} b_k\big)B = \prod_{k<m} a_k \le B^{m}$, and dividing by $B > 0$ gives $\prod_{k<m-1} b_k \le B^{m-1}$; moreover equality here holds exactly when $\prod_{k<m} a_k = B^{m}$, which by the equality clause of $P(m)$ holds exactly when all of $a_0, \dots, a_{m-1}$ are equal, that is when $b_0 = \dots = b_{m-2} = B$, which in turn holds exactly when the $b_k$ are all equal, since a constant list equals its own mean; together with the zero-entry case this is $P(m-1)$. [step 1.3, L1, L3, L5, L9]

3.1 Equality in the doubling step: with the notation of the doubling step 2.1, suppose $\prod_{k<2N} a_k = A^{2N}$; then both inequalities in the chain are equalities, so first $(XY)^{N} = \big(A^{2}\big)^{N}$ with $XY, A^{2} > 0$ gives $XY = A^{2}$ by injectivity, hence $X = Y$ by the equality clause of the two-entry case; and second, writing $P_1 = \prod_{k<N} a_k \le X^{N}$ and $P_2 = \prod_{k=N}^{2N-1} a_k \le Y^{N}$ with all four quantities positive, $P_1 < X^{N}$ would give $P_1 P_2 < X^{N} P_2 \le X^{N} Y^{N}$, so $P_1 = X^{N}$ and likewise $P_2 = Y^{N}$, whence by the equality clause of $P(N)$ the first half is constant, equal to its mean $X$, and the second half is constant, equal to $Y = X$; so all $2N$ entries are equal, and conversely entries all equal to $c$ give $\prod = c^{2N}$ and $A = c$. [step 1.2, step 1.4, step 2.1, L1, L3, L5, L9]

4.1 By the induction principle, $P(2^{j})$ holds for every $j \in \mathbb{N}$: the base is $P(1) = P(2^{0})$ and the step is the doubling argument together with its equality clause. [step 1.1, step 2.1, step 3.1, L7]

5.1 Every $n \ge 1$ is reached: by the power-of-two bound choose $N := 2^{n} > n$, so $P(N)$ holds; a further induction, on $i$, over the statement "$P(N-i)$ holds for every $i$ with $N - i \ge 1$" starts from $P(N)$ and uses the descent step at each stage, and it reaches $i = N - n$, giving $P(n)$; hence $\prod_{k<n} a_k \le A^{n}$ with equality exactly when all $a_k$ are equal. [step 1.5, step 4.1, step 2.2, L7]

6.1 Translation to the root form: $G = \big(\prod_{k<n} a_k\big)^{1/n}$ satisfies $G \ge 0$ and $G^{n} = \prod_{k<n} a_k \le A^{n}$ with $A \ge 0$, so $G \le A$, since $G > A$ would give $G^{n} > A^{n}$; and $G = A$ holds exactly when $G^{n} = A^{n}$, by injectivity of $x \mapsto x^{n}$ on the nonnegatives, hence exactly when all $a_k$ are equal. [step 5.1, L2, L3, discharge-induction] ∎
