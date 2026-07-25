---
id: thm-weighted-am-gm-rational
kind: theorem
title: "Weighted AM-GM inequality with rational weights"
status: draft
origin: session
deps: [thm-am-gm, def-rational-power, lem-rational-power-laws, def-finite-sum, lem-finite-sum-laws, thm-induction-principle, thm-recursion, lem-rat-positive-denominator, def-rationals, def-rat-operations, def-rat-order, lem-of-q-embeds, def-integer-power, thm-nth-roots-exist, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "AM-GM inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/AM%E2%80%93GM_inequality"
    - title: "Young's inequality for products (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Young%27s_inequality_for_products"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ with $n \ge 1$, let $x_0, \dots, x_{n-1} \in \mathbb{R}$
with $x_k > 0$, and let $w_0, \dots, w_{n-1} \in \mathbb{Q}$ be **rational**
weights with $w_k \ge 0$ ([[def-rat-order]]) whose images under the canonical
embedding $\iota : \mathbb{Q} \to \mathbb{R}$ ([[lem-of-q-embeds]]) satisfy
$\sum_{k<n} \iota(w_k) = 1$. Then

$$\prod_{k<n} x_k^{\,w_k} \;\le\; \sum_{k<n} \iota(w_k)\, x_k,$$

where $x_k^{\,w_k}$ is the rational power of [[def-rational-power]].

**Both sums are sums in $\mathbb{R}$, and that is not a detail.** This library
defines $\sum_{k<n}$ only for a sequence $\mathbb{N} \to \mathbb{R}$
([[def-finite-sum]]); there is no finite sum of rationals and none is used here.
The weights are therefore summed after being carried into $\mathbb{R}$ by
$\iota$, and no step below sums anything outside $\mathbb{R}$. Nothing is lost by
this reading, because $\iota$ is an injective field homomorphism: for $n = 2$ the
hypothesis $\iota(w_0) + \iota(w_1) = 1$ is exactly $w_0 + w_1 = 1$ in
$\mathbb{Q}$, and the conclusion reads
$x_0^{\,w_0} x_1^{\,w_1} \le \iota(w_0) x_0 + \iota(w_1) x_1$. Below, $\iota$ is
kept visible wherever a rational is being used as a real; elsewhere the page
follows the usual convention of writing $w$ for $\iota(w)$ ([[def-finite-sum]]).

**Why the weights are rational.** The restriction is not laziness and it cannot
be relaxed here. For a real weight $w$ the symbol $x^{w}$ has no meaning in this
library at all: [[def-rational-power]] defines $x^{r}$ only for $r \in \mathbb{Q}$,
and every proof on this page is a finite chain of field operations together with
the least-upper-bound property. Real exponents require the exponential function
and its inverse, which are built much later and by different means; the closing
remark of this page records the situation in full. Taking $n = 2$ and
$w_0 = w_1 = 1/2$ recovers the two-term case $\sqrt{x_0 x_1} \le (x_0 + x_1)/2$ of
[[thm-am-gm]].

## Facts & Assumptions

**Given:** A natural $n \ge 1$, reals $x_0, \dots, x_{n-1} > 0$, and rationals $w_0, \dots, w_{n-1} \ge 0$ with $\sum_{k<n} \iota(w_k) = 1$, a sum in $\mathbb{R}$.

[L1] AM-GM ([[thm-am-gm]]): for $c_0, \dots, c_{N-1} \ge 0$ with $N \ge 1$, $\big(\prod_{i<N} c_i\big)^{1/N} \le \frac{1}{N}\sum_{i<N} c_i$.

[L2] Finite sums and products, defined ONLY for sequences $\mathbb{N} \to \mathbb{R}$ ([[def-finite-sum]], [[lem-finite-sum-laws]]): the recursion clauses $\sum_{k<0} a_k = 0$ and $\sum_{k<j+1} a_k = \sum_{k<j} a_k + a_j$; splitting of sums and products at any index; scaling $\sum_{k<m} \lambda a_k = \lambda \sum_{k<m} a_k$; and the constant sum $\sum_{i<m}\lambda = \iota(m)\lambda$. Every $\sum$ and $\prod$ written below is therefore a sum or product in $\mathbb{R}$.

[L3] Constant product: $\prod_{i<m}\lambda = \lambda^{m}$, by induction on $m$ from the recursion clauses $\prod_{i<m+1}\lambda = \big(\prod_{i<m}\lambda\big)\lambda$ and $\lambda^{m+1} = \lambda^{m}\lambda$, with both sides equal to $1$ at $m = 0$ ([[def-finite-sum]], [[def-integer-power]], [[thm-induction-principle]]).

[L4] Rational power laws ([[lem-rational-power-laws]], [[def-rational-power]], [[thm-nth-roots-exist]]): for $u, v > 0$ and rationals $r, s$: $u^{r} > 0$, $(uv)^{r} = u^{r}v^{r}$ (hence, by induction on the number of factors, $\big(\prod_{j<n} u_j\big)^{r} = \prod_{j<n} u_j^{\,r}$, using also the constant product for the empty case), and $\big(u^{r}\big)^{s} = u^{rs}$.

[L5] Rational arithmetic and the embedding ([[lem-rat-positive-denominator]], [[def-rationals]], [[def-rat-operations]], [[lem-of-q-embeds]], [[lem-of-naturals-positive]]): finitely many rationals can be written over a common positive denominator; $\iota : \mathbb{Q} \to \mathbb{R}$ is an injective order-preserving field homomorphism, so $\iota(0) = 0$, $\iota(u + v) = \iota(u) + \iota(v)$ and $\iota(uv) = \iota(u)\iota(v)$; on an integer $\iota$ is $m \mapsto m \cdot 1_\mathbb{R}$, with $\iota(m) > 0$ for a natural $m \ge 1$ and $m \mapsto \iota(m)$ injective on $\{1, 2, \dots\}$, hence injective on all of $\mathbb{N}$ since $\iota(0) = 0 < \iota(m)$ there.

[L6] Induction principle ([[thm-induction-principle]]), used for the routine inductions on the number of terms below, and the recursion theorem ([[thm-recursion]]), which is what defines a function on $\mathbb{N}$ by a recursion clause.

## Proof

**Proof technique:** direct.

1.1 Common denominator: by induction on $n$, taking the product of the denominators, there are a natural $N \ge 1$ and integers $m_0, \dots, m_{n-1}$ with $w_k = m_k/N$ for every $k < n$; since $w_k \ge 0$ and $N > 0$, each $m_k \ge 0$ and is therefore a natural number. [L5, L6]

2.1 The numerators sum to $\iota(N)$ in $\mathbb{R}$: applying scaling to the real sequence $k \mapsto \iota(w_k)$ multiplies the hypothesis $\sum_{k<n} \iota(w_k) = 1$ by $\iota(N)$ to give $\sum_{k<n} \iota(N)\iota(w_k) = \iota(N)$, and $\iota(N)\iota(w_k) = \iota(N w_k) = \iota(m_k)$ since $\iota$ is multiplicative and $N w_k = m_k$ in $\mathbb{Q}$, so $\sum_{k<n} \iota(m_k) = \iota(N)$. [step 1.1, L2, L5]

2.2 The partial sums of the numerators, inside $\mathbb{N}$: define $M : \mathbb{N} \to \mathbb{N}$ by recursion, $M_0 := 0$ and $M_{j+1} := M_j + m_j$ for $j < n$ (and $M_{j+1} := M_j$ for $j \ge n$), so each $M_j$ is a natural number and $M_j \le M_{j+1}$; then $\iota(M_j) = \sum_{k<j} \iota(m_k)$ for every $j \le n$, by induction on $j$, since $\iota(M_0) = \iota(0) = 0 = \sum_{k<0} \iota(m_k)$ and $\iota(M_{j+1}) = \iota(M_j) + \iota(m_j) = \sum_{k<j} \iota(m_k) + \iota(m_j) = \sum_{k<j+1} \iota(m_k)$ by additivity of $\iota$ and the recursion clause for finite sums. [step 1.1, L2, L5, L6, construct]

3.1 Hence $M_n = N$, an identity between natural numbers: steps 2.1 and 2.2 give $\iota(M_n) = \sum_{k<n} \iota(m_k) = \iota(N)$, and $m \mapsto \iota(m)$ is injective on $\mathbb{N}$. [step 2.1, step 2.2, L5]

4.1 The expanded list: define $c : \mathbb{N} \to \mathbb{R}$ by $c_i := x_j$ whenever $M_j \le i < M_{j+1}$ for some $j < n$, and $c_i := 1$ for $i \ge N$; this covers every $i \in \mathbb{N}$ exactly once, because the blocks $[M_j, M_{j+1})$ for $j < n$ partition $[0, M_n) = [0, N)$ by step 3.1, and every $c_i$ with $i < N$ is positive since each $x_j > 0$. [step 1.1, step 2.2, step 3.1, L5, construct]

5.1 Its sum and product: splitting at $M_1, \dots, M_{n-1}$ and using the constant sum and the constant product on each block, an induction on $n$ gives $\sum_{i<N} c_i = \sum_{j<n} \iota(m_j) x_j$ and $\prod_{i<N} c_i = \prod_{j<n} x_j^{\,m_j}$. [step 4.1, L2, L3, L6]

6.1 Applying AM-GM to $c_0, \dots, c_{N-1}$ and substituting: $\Big(\prod_{j<n} x_j^{\,m_j}\Big)^{1/N} = \Big(\prod_{i<N} c_i\Big)^{1/N} \le \frac{1}{N}\sum_{i<N} c_i = \iota(N)^{-1}\sum_{j<n} \iota(m_j) x_j = \sum_{j<n} \iota(w_j) x_j$, the last equality by scaling together with $\iota(N)^{-1}\iota(m_j) = \iota(m_j/N) = \iota(w_j)$. [step 4.1, step 5.1, L1, L2, L5]

6.2 Rewriting the left-hand side with the rational power laws: $\Big(\prod_{j<n} x_j^{\,m_j}\Big)^{1/N} = \prod_{j<n} \Big(x_j^{\,m_j}\Big)^{1/N} = \prod_{j<n} x_j^{\,m_j/N} = \prod_{j<n} x_j^{\,w_j}$, each $x_j^{\,m_j}$ being positive. [step 5.1, L4, L6]

7.1 Combining the two displays gives $\prod_{j<n} x_j^{\,w_j} \le \sum_{j<n} \iota(w_j) x_j$, which is the assertion. [step 6.1, step 6.2] ∎
