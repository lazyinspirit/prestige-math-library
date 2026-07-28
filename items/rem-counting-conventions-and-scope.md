---
id: rem-counting-conventions-and-scope
kind: remark
title: "Conventions fixed on this page, and what counting is deliberately not done here"
status: published
origin: session
deps: [cor-binomial-theorem-consequences, def-finite-cardinality, def-nat-finite-sum-and-product, def-sum-over-a-finite-index-set,
       def-factorial-and-falling-factorial, def-nat-power, def-binomial-coefficient,
       def-multinomial-coefficient, thm-binomial-closed-formula, thm-binomial-theorem,
       thm-stars-and-bars, def-finite-sum, def-integer-power, lem-finite-sum-permutation-invariance,
       lem-nat-finite-sum-laws-and-the-canonical-embedding]
justified_by: []
forward_refs: [def-cardinal, def-monoid-finite-product, def-ring, def-symmetric-group]
aliases: []
landmark: false
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
    - title: "Empty product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Empty_product"
    - title: "Binomial coefficient (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binomial_coefficient"
    - title: "Twelvefold way (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Twelvefold_way"
pipeline_run: null
---

This item is the page's ledger: every convention the page fixes, with the item
that fixes it, and a statement of what is deliberately left to later pages.

## Conventions fixed here

**$\mathbb{N}$ contains $0$.** Every index range on this page starts at $0$, so
$\sum_{k<n}$ runs over $k = 0, \dots, n-1$ and $\sum_{k<n+1}$ over
$k = 0, \dots, n$. A cardinality may be $0$, a part of a composition may be $0$,
and a claim true only from the second index onwards is false as stated. Three
items exist only because of this: the alternating row sum of
[[cor-binomial-theorem-consequences]] carries the hypothesis $n \ge 1$,
[[thm-stars-and-bars]] carries $m \ge 1$, and the composition count carries
$n \ge 1$.

**$\lvert A\rvert$ is defined for finite $A$ only, and is a natural number.**
[[def-finite-cardinality]] fixes this, and what makes it well posed is claim 3 of
the pigeonhole principle. It is **not** a cardinal number: [[def-cardinal]] is a
later and different object and nothing here uses it or any cardinal arithmetic.

**The empty sum is $0$, the empty product is $1$, $0! = 1$ and $0^{0} = 1$ are
one convention.** Each is the base clause of a recursion carried out on this
page, in [[def-nat-finite-sum-and-product]],
[[def-factorial-and-falling-factorial]] and [[def-nat-power]] respectively, and
each agrees with the already-published [[def-finite-sum]] and
[[def-integer-power]]. Nothing was imported and nothing was stipulated twice.

**Counts live in $\mathbb{N}$; identities involving subtraction or division live
in $\mathbb{R}$.** A natural number is a von Neumann natural, hence a set, and is
not an element of $\mathbb{R}$; it enters through the canonical natural $\iota$.
That is why the binomial theorem's coefficient is $\iota\binom{n}{k}$, and why
[[lem-nat-finite-sum-laws-and-the-canonical-embedding]] proves that $\iota$
commutes with finite sums and products and is injective. Injectivity is the
licence to prove an identity between counts by proving it in $\mathbb{R}$.

**$\binom{n}{k}$ is a count, and integrality is a theorem.**
[[def-binomial-coefficient]] defines it as $\lvert [n]^{k}\rvert$, so it is a
natural number by construction; that it also equals $n!/(k!(n-k)!)$ is
[[thm-binomial-closed-formula]]. The same holds for the multinomial coefficient
([[def-multinomial-coefficient]]).

**Three notions of finite sum will coexist in the library**, and each is
introduced with a bridge to the previous one: over an initial segment
([[def-finite-sum]]), over a finite index set
([[def-sum-over-a-finite-index-set]], well posed because of
[[lem-finite-sum-permutation-invariance]]), and in an arbitrary monoid
([[def-monoid-finite-product]], later in the reading order). The bridges are
what stop them drifting into three unrelated notions.

**Truncated difference.** On this page $n - m$ always means the unique $j$ with
$m + j = n$ when $m \le n$, and $0$ otherwise. No negative number is ever formed,
and each statement true only under $m \le n$ says so.

## What is deliberately not here

These are statements about the reading order, not about the library as a whole.

- **Inclusion and exclusion**, the systematic repair of a count whose blocks
  overlap. The sum rule needs disjointness, and the companion page shows what
  goes wrong without it; the correction term belongs to the next page of this
  track.
- **The number of surjections**, and the counting of set partitions and of
  unordered partitions of an integer. All are natural sequels to the material
  here and none is available yet.
- **The binomial theorem for a commutative ring.** The proof given here uses only
  commutativity, associativity, distributivity and natural-number multiples, so
  the ring statement is true; it cannot be *stated* until rings exist
  ([[def-ring]]).
- **Group vocabulary for $\operatorname{Bij}(A)$.** The count $n!$ is proved
  here, about a set of bijections. The group structure and the name symmetric
  group are [[def-symmetric-group]], later in the reading order, and a page there
  may cite the count from here.
- **Asymptotics of $n!$**, Stirling's formula among them. These need the
  logarithm and a good deal of integration, all far later in the reading order.

Every forward pointer above is orientation only: no item on this page depends on
anything named in this section.
