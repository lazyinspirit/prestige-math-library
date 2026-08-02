---
id: def-nat-finite-sum-and-product
kind: definition
title: "Finite sums and finite products of natural numbers, $\\sum_{k<n} a_k$ and $\\prod_{k<n} a_k$ in $\\mathbb{N}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-recursion, thm-induction-principle, def-natural-numbers, def-nat-addition,
       def-nat-multiplication, lem-nat-add-identity, lem-nat-mult-identity,
       lem-nat-order-is-membership, def-nat-order, lem-nat-add-cancellative, def-finite-sum]
justified_by: []
forward_refs: [def-monoid-finite-product]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Summation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Summation"
    - title: "Empty product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Empty_product"
    - title: "Recursive definition (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Recursive_definition"
pipeline_run: null
---

## Definition

Let $a : \mathbb{N} \to \mathbb{N}$, written $a_k$ for $a(k)$, with addition and
multiplication of natural numbers as in [[def-nat-addition]] and
[[def-nat-multiplication]]. **Finite sums and finite products of $a$ inside
$\mathbb{N}$ are defined by recursion on the upper index**, which is legitimate
by the recursion theorem ([[thm-recursion]]).

That theorem produces a function of one variable, so the running index has to be
carried inside the value. Apply it to the set $A = \mathbb{N} \times \mathbb{N}$,
the starting element $(0,0)$ and the function $f(k, s) = (\sigma(k),\, s + a_k)$:
there is a unique $g : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$ with

$$g(0) = (0,0), \qquad g(\sigma(n)) = f(g(n)) \quad (n \in \mathbb{N}).$$

Write $g(n) = \big(\pi_1(g(n)),\, S_n\big)$ for its two coordinates.

**The first coordinate is the index itself, and that is an induction, not an
observation** ([[thm-induction-principle]]). Indeed $\pi_1(g(0)) = 0$; and if
$\pi_1(g(n)) = n$ then
$g(\sigma(n)) = f\big(\pi_1(g(n)), S_n\big) = \big(\sigma(\pi_1(g(n))),\, S_n + a_{\pi_1(g(n))}\big) = \big(\sigma(n),\, S_n + a_n\big)$,
so $\pi_1(g(\sigma(n))) = \sigma(n)$. Only now may the second coordinates of the
two displayed clauses be read off, and doing so gives

$$S_0 = 0, \qquad S_{\sigma(n)} = S_n + a_n .$$

$S$ is moreover the **unique** function $\mathbb{N} \to \mathbb{N}$ with those two
properties: if $S'$ also has them then $n \mapsto (n, S'_n)$ satisfies the two
clauses defining $g$, hence equals $g$ by the uniqueness clause of
[[thm-recursion]], so $S' = S$. We write

$$\sum_{k<n} a_k := S_n .$$

The same construction with starting element $(0,1)$ and
$f(k,p) = (\sigma(k),\, p \cdot a_k)$, with the same induction on the first
coordinate and the same uniqueness argument, gives the unique
$P : \mathbb{N} \to \mathbb{N}$ with

$$P_0 = 1, \qquad P_{\sigma(n)} = P_n \cdot a_n ,$$

and we write $\prod_{k<n} a_k := P_n$.

**The empty sum is $0$ and the empty product is $1$**, by the base clause of the
recursion and by nothing else: no convention is imported from anywhere.

**Notation.** We abbreviate $\sum_{k=0}^{n} a_k := \sum_{k<n+1} a_k$ and
likewise for products, using $\sigma(n) = n+1$. Only finitely many values of $a$
enter $\sum_{k<n} a_k$, so the notation is also used for a list
$a_0, \dots, a_{n-1}$ of naturals given without reference to any extension to all
of $\mathbb{N}$: extend the list by $a_k = 0$ (respectively $a_k = 1$) for
$k \ge n$ and apply the definition. Where the two kinds of finite sum have to be
told apart, we write $\sum^{\mathbb{N}}$ and $\prod^{\mathbb{N}}$ for the ones
defined here and $\sum^{\mathbb{R}}$, $\prod^{\mathbb{R}}$ for those of
[[def-finite-sum]]; elsewhere the ambient set is fixed by the terms being summed.

**Truncated difference, fixed here for the whole page.** For $m, n \in \mathbb{N}$
we write $n - m$ for the unique $j \in \mathbb{N}$ with $m + j = n$ when
$m \le n$, and for $0$ when $n < m$. Existence in the first case is the
definition of $\le$ ([[def-nat-order]]) and uniqueness is cancellation
([[lem-nat-add-cancellative]]), so the notation names a single natural number.
**Every use of $n-m$ on this page is this operation**; no negative number is ever
formed, and where a statement is true only under $m \le n$ that hypothesis is
written out.

## Remarks

- **Why a second finite sum is needed at all.** [[def-finite-sum]] defines
  $\sum_{k<n} a_k$ for a sequence of **reals**, and its value is a real number.
  Every count on this page is a natural number, so the sum rule, the row sums of
  Pascal's triangle, the condition $\sum_i k_i = n$ on a multinomial coefficient
  and the stars-and-bars count all need a sum that stays in $\mathbb{N}$. The two
  notions are related, not rival: the bridge
  $\iota\big(\sum^{\mathbb{N}}_{k<n} a_k\big) = \sum^{\mathbb{R}}_{k<n}\iota(a_k)$
  is proved in the next item, and it is what lets an identity between counts be
  read inside $\mathbb{R}$ and back.

- **The monoid version, later.** The same recursion is carried out in an
  arbitrary monoid in [[def-monoid-finite-product]], which comes later in the
  reading order; $(\mathbb{N},+,0)$ and $(\mathbb{N},\cdot,1)$ are instances of
  it, and the agreement is immediate because the recursion clauses are identical.
  That pointer is orientation only: nothing here depends on it, and the notion
  defined above is complete as it stands.

- **$0$ is an index.** $\sum_{k<n}$ runs over $k = 0, 1, \dots, n-1$, so
  $\sum_{k<1} a_k = a_0$ and $\sum_{k<0} a_k = 0$. A claim about
  $\sum_{k<n} a_k$ must be checked at $n = 0$, where it is a claim about $0$, and
  a claim about $\prod_{k<n} a_k$ at $n = 0$, where it is a claim about $1$.
