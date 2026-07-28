---
id: def-a-monotone-sublist-of-a-finite-list-of-reals
kind: definition
title: "A finite list of reals, and its strictly increasing and strictly decreasing sublists"
status: draft
origin: session
deps: [def-ordered-field, def-natural-numbers, def-nat-order, lem-nat-order-is-membership,
       def-injection-surjection-bijection, def-finite-cardinality]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Erdos-Szekeres theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Erd%C5%91s%E2%80%93Szekeres_theorem"
    - title: "Longest increasing subsequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Longest_increasing_subsequence"
pipeline_run: null
---

## Definition

Let $N \in \mathbb{N}$ ([[def-natural-numbers]]). A **finite list of reals of
length $N$** is a function $a : N \to \mathbb{R}$, written $a_i$ for $a(i)$; here
$N = \{\, i : i < N\,\}$ is the von Neumann natural itself
([[lem-nat-order-is-membership]], [[def-nat-order]]), so the indices are
$0, 1, \dots, N-1$ and the list of length $0$ is the empty function. The list is
**pairwise distinct** when $a$ is injective, that is when $a_i \ne a_j$ whenever
$i \ne j$ ([[def-injection-surjection-bijection]]).

A **sublist of $a$ of length $L$**, for $L \in \mathbb{N}$, is a function
$s : L \to N$ that is **strictly increasing on indices**, meaning $s(p) < s(q)$
whenever $p < q < L$; its terms are $a_{s(0)}, \dots, a_{s(L-1)}$. Such an $s$ is
injective, since $p \ne q$ gives $p<q$ or $q<p$ and hence $s(p) \ne s(q)$.

The sublist $s$ is

- **strictly increasing** when $a_{s(p)} < a_{s(q)}$ for all $p < q < L$;
- **strictly decreasing** when $a_{s(p)} > a_{s(q)}$ for all $p < q < L$,

the order being that of the ordered field $\mathbb{R}$ ([[def-ordered-field]]).

**Boundary readings, which are part of the definition and not exceptions.** A
sublist of length $0$ or $1$ has no pair $p < q < L$ at all, so it is both
strictly increasing and strictly decreasing, vacuously. A list of length $N$ has
a sublist of length $1$ exactly when $N \ge 1$, namely $s(0) := i$ for any
$i < N$; and it has no sublist of length $L$ with $L > N$, since $s$ would be an
injection of $L$ into $N$.

**Every count here is a natural number.** The length of a list and the length of
a sublist are naturals, and no cardinality of an infinite set is used; a list is
a function on a natural number, so it is finite in the sense of
[[def-finite-cardinality]].

## Remarks

- **A sublist is a choice of positions, not a choice of values.** Two positions
  carrying equal values are different sublists of length $1$. This is why the
  monotonicity conditions are stated on $a_{s(p)}$ and $a_{s(q)}$ rather than on
  a set of values, and why the pairwise-distinctness hypothesis has to be
  imposed separately when a result needs it.

- **Strictness on both sides.** The indices increase strictly, so a sublist reads
  the list left to right without repeating a position; the values increase or
  decrease strictly, so no two terms of a monotone sublist are equal. Neither
  strictness is redundant: a list may repeat a value, and then a nondecreasing
  sublist could be longer than any strictly increasing one.

- **The empty list.** At $N = 0$ the only sublists are the empty one, of length
  $0$. Any statement asserting the existence of a sublist of length $1$ is
  therefore false at $N = 0$, and any statement about lists of length $mn+1$ has
  content at $m = 0$ or $n = 0$ precisely because $mn+1 \ge 1$.
