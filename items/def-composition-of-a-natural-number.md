---
id: def-composition-of-a-natural-number
kind: definition
title: "Compositions and weak compositions of a natural number into a fixed number of parts"
status: draft
origin: session
deps: [def-multinomial-coefficient, thm-multinomial-theorem, def-nat-finite-sum-and-product,
       lem-nat-finite-sum-laws-and-the-canonical-embedding, thm-cardinality-of-a-set-of-functions,
       thm-subset-of-a-finite-set, def-finite-cardinality, def-nat-order, def-natural-numbers,
       lem-nat-discrete]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Composition (combinatorics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Composition_(combinatorics)"
    - title: "Stars and bars (combinatorics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Stars_and_bars_(combinatorics)"
    - title: "R. Stanley, Enumerative Combinatorics, Vol. 1, Ch. 1"
      url: "https://en.wikipedia.org/wiki/Enumerative_Combinatorics"
pipeline_run: null
---

## Definition

Let $n, m \in \mathbb{N}$.

- A **weak composition of $n$ into $m$ parts** is a function
  $k : m \to \mathbb{N}$ with $\sum_{i<m} k_i = n$, the sum being the
  $\mathbb{N}$-valued one of [[def-nat-finite-sum-and-product]]. The set of them
  is the set $\mathcal{W}(n,m)$ introduced in [[def-multinomial-coefficient]].
- A **composition of $n$ into $m$ parts** is a weak composition all of whose
  parts are nonzero, that is $k_i \ge 1$ for every $i < m$
  ([[lem-nat-discrete]]). Write
  $$\mathcal{C}(n,m) := \{\, k \in \mathcal{W}(n,m) \ :\ k_i \ge 1 \text{ for every } i<m \,\}.$$

The parts are **ordered**: $k$ is a function on $m$, so $(1,2)$ and $(2,1)$ are
different compositions of $3$ into $2$ parts.

**Both sets are finite.** Every $k \in \mathcal{W}(n,m)$ has $k_i \le n$ for each
$i$, because a term of a sum of naturals is at most the sum (clause 4 of
[[lem-nat-finite-sum-laws-and-the-canonical-embedding]]); so $\mathcal{W}(n,m)$
is a subset of the set of functions $m \to \sigma(n)$, which is finite by
[[thm-cardinality-of-a-set-of-functions]], and
[[thm-subset-of-a-finite-set]] applies. $\mathcal{C}(n,m)$ is a subset of
$\mathcal{W}(n,m)$, hence finite too.

**The case $m = 0$, which is exactly where the next item's hypothesis lives.**
There is precisely one function $0 \to \mathbb{N}$, the empty function, and its
sum is the empty sum, $0$. Hence

$$\lvert\mathcal{W}(0,0)\rvert = 1, \qquad \lvert\mathcal{W}(n,0)\rvert = 0 \ \text{ for } n \ge 1,$$

and the same two values for $\mathcal{C}$, since the condition "every part is
nonzero" is vacuous for the empty tuple. Saying this here is what lets
[[thm-stars-and-bars]] carry the hypothesis $m \ge 1$ honestly: at $m = 0$ the
count is not given by the formula, and the true value is recorded above.

**Small values of $m$.** $\lvert\mathcal{W}(n,1)\rvert = 1$, the unique weak
composition being $k_0 = n$; and $\lvert\mathcal{C}(n,1)\rvert = 1$ for $n \ge 1$
while $\mathcal{C}(0,1) = \varnothing$.

## Remarks

- **The same object under two names.** $\mathcal{W}(n,m)$ is the index set of the
  outer sum of [[thm-multinomial-theorem]]. That theorem and this definition
  therefore speak about one set, and the count supplied by
  [[thm-stars-and-bars]] is the number of terms in the multinomial expansion.

- **Weak versus strict.** Much of the literature reserves *composition* for
  tuples of positive parts and says *weak composition* when zeros are allowed;
  that is the convention adopted here. The count of the weak ones is the
  primary result, and the strict count is obtained from it by subtracting $1$
  from every part.

- **Nothing here is about unordered partitions.** The number of ways of writing
  $n$ as an unordered sum is a different and much harder count, and it is not
  developed at this point in the reading order.
