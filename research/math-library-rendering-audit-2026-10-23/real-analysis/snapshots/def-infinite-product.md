---
id: def-infinite-product
kind: definition
title: "Infinite products: partial products, and convergence to a nonzero limit after finitely many vanishing factors"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-finite-sum, lem-finite-sum-laws, lem-of-no-zero-divisors, def-series, thm-algebra-of-limits, lem-limit-unique, def-real-limit]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Infinite product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infinite_product"
    - title: "W. Rudin, Real and Complex Analysis, 3rd ed., Ch. 15"
      url: "https://en.wikipedia.org/wiki/Walter_Rudin"
    - title: "Thomson, Bruckner, and Bruckner, Elementary Real Analysis"
      url: "https://ejwingler.people.ysu.edu/TBB-Real.pdf"
pipeline_run: null
---

## Definition

Let $(a_k)$ be a sequence of reals. Its **partial products** are

$$\Pi_n \;:=\; \prod_{k<n} a_k \qquad (n \in \mathbb{N}),$$

the finite products of [[def-finite-sum]], so that $\Pi_0 = 1$, the empty
product, and $\Pi_{n+1} = \Pi_n\, a_n$. For $N \in \mathbb{N}$ the **$N$-th tail
products** are $T^{(N)}_n := \prod_{j<n} a_{N+j}$, again a sequence in $n$.

**Convergence.** The infinite product $\prod a_k$ **converges** when there exists
$N \in \mathbb{N}$ such that

1. $a_k \ne 0$ for every $k \ge N$, and
2. the sequence $(T^{(N)}_n)_n$ of $N$-th tail products converges
   ([[def-real-limit]]) to a limit $\ell \ne 0$.

Its **value** is then

$$\prod_{k=0}^{\infty} a_k \;:=\; \Bigl(\prod_{k<N} a_k\Bigr)\cdot \ell .$$

If no such $N$ exists, the product **diverges**.

**The value does not depend on $N$, and that is a proof obligation, discharged
here.** First, if $N$ is such an index then so is every $N' \ge N$: condition 1 is
inherited, and splitting the finite product ([[lem-finite-sum-laws]]) gives, for
$n \ge N' - N$,

$$T^{(N)}_{n} \;=\; \Bigl(\prod_{k=N}^{N'-1} a_k\Bigr)\, T^{(N')}_{\,n - (N'-N)} ,$$

where the bracketed factor is a product of finitely many nonzero reals and so is
itself nonzero. Hence $(T^{(N')}_m)_m$ converges, to
$\ell' = \ell / \prod_{k=N}^{N'-1}a_k$ by the algebra of limits
([[thm-algebra-of-limits]]), and $\ell' \ne 0$ because $\ell \ne 0$. Second, the
two candidate values agree:

$$\Bigl(\prod_{k<N'}a_k\Bigr)\ell' = \Bigl(\prod_{k<N}a_k\Bigr)\Bigl(\prod_{k=N}^{N'-1}a_k\Bigr)\frac{\ell}{\prod_{k=N}^{N'-1}a_k} = \Bigl(\prod_{k<N}a_k\Bigr)\ell ,$$

again by splitting. Finally, any two admissible indices $N_1, N_2$ are both at
most $\max\{N_1,N_2\}$, which is therefore admissible and gives the same value as
each. Since a convergent sequence has exactly one limit
([[lem-limit-unique]]), the displayed value is a single well-determined real
number.

**Why a zero limit is excluded.** The definition demands $\ell \ne 0$, not merely
that the tail products converge. Both parts of the definition are doing work, and
against different naive alternatives. Against the naive "$\Pi_n$ converges", with
no tail clause at all: *every* sequence with a single zero factor has all its
partial products equal to $0$ from that index on, hence convergent to $0$, so
"the product converges" would say nothing whatever about the factors — which is
what condition 1, the restriction to a tail of nonzero factors, repairs. Against
the naive "some tail of the partial products converges", which keeps condition 1
and drops only $\ell \ne 0$, condition 1 no longer helps, and a product like
$\prod_{j \ge 0}\bigl(1 - 1/(j+2)\bigr)$, all of whose factors are nonzero, has
partial products $1/(n+1)$ tending to $0$; calling that convergent would make the
value $0$ without any factor being $0$, and would destroy the analogy with series
in which a convergent product may be divided by. That product is worked out on the companion examples page.

## Remarks

- **The value is $0$ exactly when some factor is $0$.** With $N$ as in the
  definition, the value is $\bigl(\prod_{k<N}a_k\bigr)\ell$ with $\ell \ne 0$, and
  a finite product vanishes exactly when one of its factors does — a field has no
  zero divisors ([[lem-of-no-zero-divisors]]), so an induction on the recursion
  $\prod_{k<n+1}a_k = \bigl(\prod_{k<n}a_k\bigr)a_n$ of [[def-finite-sum]] gives
  both directions. So a convergent product with all factors nonzero has
  nonzero value, and this is the property that makes convergent products behave
  like nonzero numbers.

- **Finitely many factors may be $0$, or negative, or anything at all.** The
  definition looks only at a tail, exactly as [[def-series]] does for series
  through its tail clause; conditions 1 and 2 constrain no initial segment.

- **Notation.** $\prod_{k \ge m} a_k$ denotes the product of the family from $m$,
  that is the product of the sequence $j \mapsto a_{j+m}$, by the same convention
  [[def-series]] uses for series; the two readings agree at $m = 0$.

- **Nothing here presumes a logarithm.** The classical criteria for infinite
  products are usually derived by taking logarithms; the logarithm is not
  available at this point in the reading order, and
  [[thm-infinite-product-criterion]] is proved from elementary inequalities
  instead.
