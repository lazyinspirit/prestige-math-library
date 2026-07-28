---
id: rem-sieve-pigeonhole-and-double-counting-conventions
kind: remark
title: "The conventions this page fixes: the empty intersection, where the counts live, the first index of every sum, and what the declared prerequisites do not supply"
status: draft
origin: session
deps: [def-a-sieve-family-and-its-intersections, thm-inclusion-exclusion,
       thm-the-strong-pigeonhole-principle, def-the-ceiling-of-a-quotient-of-naturals,
       thm-double-counting, def-the-derangement-number, thm-the-number-of-surjections,
       lem-the-partial-alternating-sum-of-a-binomial-row, cor-the-derangement-recurrences,
       def-canonical-natural, def-nat-power,
       def-integer-power, def-sum-over-a-finite-index-set, def-a-finite-incidence-relation-and-its-fibres]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Inclusion-exclusion principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Inclusion%E2%80%93exclusion_principle"
    - title: "Pigeonhole principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Pigeonhole_principle"
    - title: "Double counting (proof technique) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Double_counting_(proof_technique)"
pipeline_run: null
---

This item is the page's ledger: every convention the page fixes, with the item
that fixes it, and a statement of what this page's declared prerequisites do not
supply. It continues [[rem-counting-conventions-and-scope]], the same kind of
ledger for the page `finite-counting-and-binomial-coefficients`, which is this
page's declared prerequisite.

## Conventions fixed here

**The empty intersection is the ambient set, and the ambient set is part of the
data.** [[def-a-sieve-family-and-its-intersections]] fixes a finite $X$ together
with the family $(A_i)_{i \in I}$ and stipulates $A_\varnothing = X$. This is a
stipulation and not a theorem: for nonempty $J$ the intersection is determined by
the family, and for $J = \varnothing$ the description "belongs to every $A_i$
with $i \in J$" is satisfied by everything, so it determines nothing without an
ambient set to be relative to. The clause is used at exactly one place, the term
of the complementary form of [[thm-inclusion-exclusion]] at $J = \varnothing$.

**Counts live in $\mathbb{N}$; every alternating identity lives in $\mathbb{R}$.**
A cardinality is a natural number, a natural number here is a set, and a set is
not an element of $\mathbb{R}$. Every identity on this page that carries a minus
sign, and every one that divides, is therefore stated in $\mathbb{R}$ with the
counts carried across by the canonical natural $\iota$
([[def-canonical-natural]]), and read back through the injectivity of $\iota$
where the conclusion is about natural numbers.

**Every index range starts at $0$, and the lower-bound hypotheses on this page
exist only because of it.**
[[lem-the-partial-alternating-sum-of-a-binomial-row]] carries $t \ge 1$;
without it the identity fails at $t = 0$ and $m = 1$.
[[cor-the-derangement-recurrences]] carries $n \ge 1$ in its first clause,
because the identity $n! = (n-1)!\cdot n$ that proves it fails at $n = 0$ under
the truncated difference, and $n \ge 2$ in its second, because that clause
applies the first one at $n-1$.
[[def-the-ceiling-of-a-quotient-of-naturals]] carries $n \ge 1$, without which
the set it takes a least element of can be empty.

**$0^{0} = 1$, and the place it is spent is named.** The convention is the base
clause of the recursion in [[def-nat-power]], not an import. In
[[thm-the-number-of-surjections]] it is what makes the formula correct at
$n = 0$ and $k = 0$, where the empty function is the unique surjection
$\varnothing \to \varnothing$ and the formula returns $\iota(0^{0})$. At $n = 0$
with $k \ge 1$ the same formula returns the full alternating row sum, which
vanishes only because $k \ge 1$; and at $k = 0$ with $n \ge 1$ it returns
$\iota(0^{n})$, which is $0$ for the same reason read the other way. Powers of
$-1$ are the real powers of [[def-integer-power]] throughout, since $-1$ is not
a natural number.

**A sum over a finite index set is what all of this is written in.**
[[def-sum-over-a-finite-index-set]] is the notion used for every sum whose index
set is a set of subsets, a set of elements or a relation's fibre family, and its
value is independent of the enumeration chosen. The facts about it that are used
constantly and are **not** clauses of it are the bridge
$\iota\big(\sum^{\mathbb{N}}\big) = \sum^{\mathbb{R}}\iota$ over such an index
set, and the additivity, scaling and monotonicity laws over such an index set.
Both are derived, in the Facts of the items that use them, from the
corresponding clauses about a sum over an initial segment together with the
enumeration that defines the sum over an index set.

**A relation, not a matrix.** [[def-a-finite-incidence-relation-and-its-fibres]]
states double counting for a subset of a product of two finite sets, with its
two fibre families. [[thm-double-counting]] is that statement and nothing more.

**Fibres of a function.** [[thm-the-strong-pigeonhole-principle]] is stated about
the fibres $f^{-1}[\{b\}]$ of a function between finite sets. Its two clauses are
one argument: the ceiling form is the counting form applied at the single index
below the ceiling, which is why the ceiling was defined by minimality.

## What this page's declared prerequisites do not supply

Each of the following is a statement about what this page may cite, and about
nothing else.

- **No floor and no ceiling as general notions, and no division with remainder.**
  [[def-the-ceiling-of-a-quotient-of-naturals]] defines only the least $q$ with
  $m \le nq$, for naturals $m$ and $n \ge 1$. It is not defined for a real
  argument, it produces no remainder, and nothing here extends it.

- **No divisibility.** No result on this page is stated in terms of one natural
  number dividing another, and no argument uses such a relation.

- **No graph vocabulary.** Nothing among this page's declared prerequisites
  defines a graph, a vertex or an edge. The results that would usually be stated
  about graphs are stated instead about a finite set carrying a symmetric
  irreflexive relation, which is exactly what their proofs use.

- **No probability.** Nothing among this page's declared prerequisites defines a
  probability space, a measure or an expectation. The averaging principle is a
  statement about a quotient of two counts, and the hat-check ratio on the
  companion page is a quotient of two counts; neither is called a probability
  and neither is treated as one.

- **No symmetric group.** [[def-the-derangement-number]] counts a set of
  bijections. No group structure on that set is defined or used.
