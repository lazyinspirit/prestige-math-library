---
id: thm-stars-and-bars
kind: theorem
title: "For $m \\ge 1$ the number of weak compositions of $n$ into $m$ parts is $\\binom{n+m-1}{m-1}$, and the number of compositions is $\\binom{n-1}{m-1}$ for $n \\ge 1$"
status: published
origin: session
deps: [def-composition-of-a-natural-number, def-multinomial-coefficient, def-binomial-coefficient,
       thm-pascals-rule, thm-sum-rule, def-sum-over-a-finite-index-set,
       def-nat-finite-sum-and-product, lem-nat-finite-sum-laws-and-the-canonical-embedding,
       def-finite-cardinality, def-injection-surjection-bijection, def-equinumerous,
       thm-subset-of-a-finite-set, thm-well-ordering-principle, thm-induction-principle,
       def-nat-order, lem-nat-add-cancellative, lem-nat-order-add-compatible,
       lem-nat-trichotomy, lem-nat-discrete, lem-nat-add-commutative, def-natural-numbers]
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
    - title: "Stars and bars (combinatorics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Stars_and_bars_(combinatorics)"
    - title: "Composition (combinatorics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Composition_(combinatorics)"
    - title: "Hockey-stick identity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hockey-stick_identity"
pipeline_run: null
---

## Statement

Let $m \ge 1$ and write $m = \sigma(M)$, so $M = m-1$. Then for every
$n \in \mathbb{N}$

$$\big\lvert\mathcal{W}(n,m)\big\rvert = \binom{n+m-1}{\,m-1\,} = \binom{n+M}{M},$$

and the map
$k \mapsto \big\{\, \big(\sum_{j<\sigma(i)} k_j\big) + i \ :\ i < M \,\big\}$
is a bijection of $\mathcal{W}(n,m)$ onto the set of $M$-element subsets of
$n+M$.

Moreover, for $m \ge 1$ **and $n \ge 1$**,

$$\big\lvert\mathcal{C}(n,m)\big\rvert = \binom{n-1}{\,m-1\,}.$$

**The hypothesis $m \ge 1$ is not decoration.** At $m = 0$ the expression
$\binom{n+m-1}{m-1}$ would require the value $m-1$ at $m = 0$, and
[[def-composition-of-a-natural-number]] records the true counts there:
$\lvert\mathcal{W}(0,0)\rvert = 1$ and $\lvert\mathcal{W}(n,0)\rvert = 0$ for
$n \ge 1$. The hypothesis $n \ge 1$ in the second display is equally load
bearing: at $n = 0$, $m = 1$ the formula would give $\binom{0}{0} = 1$ while
$\mathcal{C}(0,1) = \varnothing$.

## Facts & Assumptions

**Given:** Naturals $n$ and $m = \sigma(M)$ with $M \in \mathbb{N}$; the sets $\mathcal{W}(n,m)$ and $\mathcal{C}(n,m)$ of [[def-composition-of-a-natural-number]]; and the truncated difference of [[def-nat-finite-sum-and-product]].

[L1] Induction ([[thm-induction-principle]]).

[L2] Finite sums in $\mathbb{N}$ ([[def-nat-finite-sum-and-product]], [[lem-nat-finite-sum-laws-and-the-canonical-embedding]]): the recursion clauses; additivity; the constant clause $\sum_{k<N} c = N\cdot c$; splitting at $p \le N$; and the fact that a partial sum $\sum_{j<P}k_j$ with $P \le N$ satisfies $\sum_{j<P}k_j \le \sum_{j<N}k_j$, which is splitting together with $x \le x + t$.

[L3] Binomial coefficients ([[def-binomial-coefficient]]): $\lvert [X]^{j}\rvert = \binom{\lvert X\rvert}{j}$; $\binom{N}{0} = 1$; $\binom{N}{j} = 0$ for $j > N$.

[L4] The hockey-stick identity $\sum_{i<\sigma(N)}\binom{i}{j} = \binom{\sigma(N)}{\sigma(j)}$ ([[thm-pascals-rule]], clause 2).

[L5] The sum rule and sums over a finite index set ([[thm-sum-rule]], [[def-sum-over-a-finite-index-set]]).

[L6] Cardinality and subsets ([[def-finite-cardinality]], [[thm-subset-of-a-finite-set]]): transport; a subset of a finite set is finite; a subset of the same cardinality as the whole is the whole.

[L7] Maps ([[def-injection-surjection-bijection]], [[def-equinumerous]]): a map with a two-sided inverse is a bijection; an injection is a bijection onto its image.

[L8] Arithmetic and order in $\mathbb{N}$: $\sigma(a) = a+1$; $a + \sigma(b) = \sigma(a+b)$; addition is commutative and cancellative; $a \le b$ and $b \le c$ give $a \le c$; trichotomy; $a \ne 0$ is the same as $1 \le a$ ([[def-nat-order]], [[lem-nat-add-cancellative]], [[lem-nat-add-commutative]], [[lem-nat-order-add-compatible]], [[lem-nat-trichotomy]], [[lem-nat-discrete]], [[def-natural-numbers]]).

[L9] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

## Proof

**Proof technique:** induction.

1.1 The last-part decomposition, valid for every $M \in \mathbb{N}$ and every $n$. The map $k \mapsto \big(\sum_{i<M}k_i,\ k\restriction M\big)$ sends $\mathcal{W}(n,\sigma(M))$ into the union of the pairwise disjoint sets $\{j\}\times\mathcal{W}(j,M)$ for $j < \sigma(n)$: writing $j := \sum_{i<M}k_i$, the recursion clause gives $j + k_M = n$, so $j \le n$ and $k \restriction M \in \mathcal{W}(j,M)$. Its two-sided inverse sends $(j,\kappa)$ to the tuple extending $\kappa$ by the value $n-j$ at $M$, whose sum is $j + (n-j) = n$. Hence $\lvert\mathcal{W}(n,\sigma(M))\rvert = \sum_{j<\sigma(n)}\lvert\mathcal{W}(j,M)\rvert$ by [L5]. [L2, L5, L7, L8, construct]

1.2 Base case, $M = 0$, that is $m = 1$. A weak composition of $n$ into one part is a function $k : 1 \to \mathbb{N}$ with $\sum_{i<1}k_i = k_0 = n$, and there is exactly one such function; so $\lvert\mathcal{W}(n,1)\rvert = 1 = \binom{n+0}{0}$ by [L3]. [base, L2, L3]

1.3 Inductive hypothesis: fix $M$ and assume $\lvert\mathcal{W}(n,\sigma(M))\rvert = \binom{n+M}{M}$ for every $n \in \mathbb{N}$. [ih]

1.4 A reindexing identity: $\sum_{j<\sigma(n)}\binom{j+M}{M} = \sum_{i<\sigma(n+M)}\binom{i}{M}$. Split the right-hand side at $p = M$, legitimate since $M \le \sigma(n+M)$: it becomes $\sum_{i<M}\binom{i}{M} + \sum_{j<\sigma(n+M)-M}\binom{M+j}{M}$. The first sum vanishes, every term being $\binom{i}{M} = 0$ for $i < M$ by [L3] and a sum of zeros being $0$ by the constant clause; and $\sigma(n+M)-M = \sigma(n)$, because $M + \sigma(n) = \sigma(M+n) = \sigma(n+M)$. [L2, L3, L8]

2.1 Inductive step. Applying step 1.1 with $\sigma(M)$ in place of $M$, then the hypothesis of step 1.3, then step 1.4 and finally the hockey-stick identity [L4] with $N = n+M$ and $j = M$: $\lvert\mathcal{W}(n,\sigma(\sigma(M)))\rvert = \sum_{j<\sigma(n)}\lvert\mathcal{W}(j,\sigma(M))\rvert = \sum_{j<\sigma(n)}\binom{j+M}{M} = \sum_{i<\sigma(n+M)}\binom{i}{M} = \binom{\sigma(n+M)}{\sigma(M)} = \binom{n+\sigma(M)}{\sigma(M)}$, the last equality because $\sigma(n+M) = n+\sigma(M)$. That is the claim at $\sigma(M)$. [step 1.1, step 1.3, step 1.4, L4, L8]

3.1 By step 1.2, step 2.1 and induction, $\lvert\mathcal{W}(n,\sigma(M))\rvert = \binom{n+M}{M}$ for every $M$ and every $n$, which is the first display since $m = \sigma(M)$ and $M = m-1$. [step 1.2, step 2.1, L1]

4.1 The explicit bijection. For $k \in \mathcal{W}(n,\sigma(M))$ and $i < M$ put $s_i := \big(\sum_{j<\sigma(i)}k_j\big) + i$ and $S(k) := \{\, s_i : i < M \,\}$. The list is strictly increasing, since $s_{\sigma(i)} = \big(\sum_{j<\sigma(i)}k_j + k_{\sigma(i)}\big) + \sigma(i) = s_i + k_{\sigma(i)} + 1$; and $s_i < n+M$, since $\sum_{j<\sigma(i)}k_j \le \sum_{j<\sigma(M)}k_j = n$ by [L2] and $i \le M-1$. So $S(k)$ is a subset of $n+M$ with exactly $M$ elements, and $S$ maps $\mathcal{W}(n,\sigma(M))$ into $[\,n+M\,]^{M}$. It is injective: a strictly increasing list enumerating a finite subset of $\mathbb{N}$ is determined by that subset, since its first entry is the least element and each later entry is the least element strictly above the previous one ([L9] and induction), so $S(k) = S(\tilde k)$ forces $s_i = \tilde s_i$ for all $i < M$; then $k_0 = s_0$ and $k_{\sigma(i)} = s_{\sigma(i)} - s_i - 1$ recover $k$ on $M$, and $k_M = n - \sum_{j<M}k_j$ recovers the last part. Since both sets have $\binom{n+M}{M}$ elements by step 3.1 and [L3], the image of $S$ is a subset of $[\,n+M\,]^{M}$ of the same cardinality, hence all of it by [L6]. So $S$ is a bijection. [step 3.1, L2, L3, L6, L7, L8, L9, construct]

4.2 The count of compositions, for $m = \sigma(M) \ge 1$ and $n \ge 1$. If $m \le n$, the map $k \mapsto k'$ with $k'_i := k_i - 1$ sends $\mathcal{C}(n,m)$ into $\mathcal{W}(n-m,m)$: each $k_i \ge 1$, so $k_i = k'_i + 1$, and $\sum_{i<m}k_i = \sum_{i<m}k'_i + \sum_{i<m}1 = \sum_{i<m}k'_i + m$ by additivity and the constant clause, whence $\sum_{i<m}k'_i = n-m$. Its two-sided inverse adds $1$ to every part. So $\lvert\mathcal{C}(n,m)\rvert = \lvert\mathcal{W}(n-m,m)\rvert = \binom{(n-m)+M}{M}$ by step 3.1, and $(n-m)+M = n-1$ because $(n-m)+m = n$ and $M = m-1$ with $m \ge 1$. If instead $m > n$, then every $k \in \mathcal{C}(n,m)$ would satisfy $n = \sum_{i<m}k_i \ge \sum_{i<m}1 = m$ by monotonicity, which is false; so $\mathcal{C}(n,m) = \varnothing$, and $\binom{n-1}{m-1} = 0$ as well, since $m > n \ge 1$ gives $m-1 > n-1$. In both cases $\lvert\mathcal{C}(n,m)\rvert = \binom{n-1}{m-1}$. [step 3.1, L2, L3, L6, L7, L8]

5.1 The count of weak compositions is step 3.1, the bijection realising it is step 4.1, and the count of compositions is step 4.2. [step 3.1, step 4.1, step 4.2, discharge-induction] ∎

## Remarks

- **The picture behind $S$.** Lay out $n$ stars and $M$ bars in a row of
  $n+M$ places; the bars split the stars into $\sigma(M) = m$ runs, whose lengths
  are the parts. The set $S(k)$ is the set of positions of the bars, and step 4.1
  is that picture made precise. Surjectivity is obtained from the count rather
  than by constructing the inverse directly, which spares an appeal to the
  increasing enumeration of an arbitrary subset.

- **Why the count is proved by induction and not by the bijection alone.**
  Building the inverse of $S$ by hand needs the increasing enumeration of an
  arbitrary $M$-element subset of $n+M$, which is more machinery than the
  hockey-stick induction. The induction gives the number, and the number then
  gives the surjectivity of $S$.

- **Both hypotheses are visible.** The failure at $m = 0$ is recorded on the
  companion page as a false statement; the failure at $n = 0$ of the
  composition formula is recorded in the Statement above.
