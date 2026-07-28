---
id: def-finite-cardinality
kind: definition
title: "The cardinality $\\lvert A\\rvert$ of a finite set"
status: published
origin: session
deps: [def-countable, lem-pigeonhole, def-equinumerous, def-injection-surjection-bijection,
       def-natural-numbers, lem-nat-order-is-membership, def-nat-order]
justified_by: []
forward_refs: [def-cardinal]
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
    - title: "Cardinality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cardinality"
    - title: "Finite set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Finite_set"
    - title: "P. Halmos, Naive Set Theory, §13"
      url: "https://en.wikipedia.org/wiki/Naive_Set_Theory_(book)"
pipeline_run: null
---

## Definition

Throughout this page $\mathbb{N}$ is the set of von Neumann naturals
([[def-natural-numbers]]): $0 = \varnothing$, $\sigma(n) = n \cup \{n\}$, and
$n = \{\, m \in \mathbb{N} : m < n \,\}$ is itself the set of its predecessors,
the order being the additive order of [[def-nat-order]] identified with
membership in [[lem-nat-order-is-membership]]. Write $A \approx B$ when a
bijection $A \to B$ exists ([[def-equinumerous]],
[[def-injection-surjection-bijection]]). A set $A$ is **finite** when
$A \approx n$ for some $n \in \mathbb{N}$ ([[def-countable]]).

**Definition.** Let $A$ be a finite set. Then there is **exactly one**
$n \in \mathbb{N}$ with $A \approx n$, and we write

$$\lvert A\rvert := \text{that } n,$$

the **cardinality**, or number of elements, of $A$. The notation $\lvert A\rvert$
is defined for finite $A$ only, and its value is a natural number.

**Why exactly one, which is the whole content of the definition.** At least one
such $n$ exists: that is literally what "$A$ is finite" says. At most one exists:
if $A \approx n$ and $A \approx m$ with $n, m \in \mathbb{N}$, then $n \approx A$,
because the inverse of a bijection is a bijection, and hence $n \approx m$,
because a composition of bijections is a bijection
([[def-injection-surjection-bijection]]); and $n \approx m$ forces $n = m$ by
claim 3 of [[lem-pigeonhole]]. So $\lvert A\rvert$ names a single natural number
and not a family of choices.

**Four consequences, proved here because everything on this page uses them.**

**(a) $\lvert n\rvert = n$ for every $n \in \mathbb{N}$.** The identity map
$\mathrm{id}_n$ is a bijection $n \to n$, so $n \approx n$; thus $n$ is finite and
the unique natural equinumerous with it is $n$ itself.

**(b) $\lvert\varnothing\rvert = 0$, and a finite $A$ satisfies
$\lvert A\rvert = 0$ if and only if $A = \varnothing$.** Since $0 = \varnothing$,
part (a) gives $\lvert\varnothing\rvert = 0$. Conversely, if $\lvert A\rvert = 0$
then there is a bijection $f : A \to \varnothing$; were some $a \in A$, the value
$f(a)$ would be an element of $\varnothing$, and $\varnothing$ has none, so
$A = \varnothing$.

**(c) Transport along a bijection.** If $A$ is finite and $f : A \to B$ is a
bijection, then $B$ is finite and $\lvert B\rvert = \lvert A\rvert$. Indeed
$B \approx A$ through $f^{-1}$ and $A \approx \lvert A\rvert$, so
$B \approx \lvert A\rvert$ by transitivity.

**(d) Equality of cardinalities is equinumerosity.** For finite $A$ and $B$:
$\lvert A\rvert = \lvert B\rvert$ if and only if $A \approx B$. If the
cardinalities agree then $A \approx \lvert A\rvert = \lvert B\rvert \approx B$;
conversely $A \approx B$ gives $\lvert B\rvert = \lvert A\rvert$ by (c).

## Remarks

- **$\mathbb{N}$ contains $0$ here, and that is not a detail.** Every index range
  on this page starts at $0$, a one-element set has cardinality
  $1 = \{0\}$, and $\lvert A\rvert$ is never a positive-integer-only object. A
  statement about $\lvert A\rvert$ that is true only for $\lvert A\rvert \ge 1$
  must say so.

- **$\lvert A\rvert$ is a natural number, not a cardinal number.** The theory of
  cardinals ([[def-cardinal]]) is developed much later in the library and nothing
  here uses it, or any cardinal arithmetic: the pointer is orientation only. What
  makes the notation legitimate at this point in the reading order is exactly
  claim 3 of [[lem-pigeonhole]], and nothing more.

- **What the definition does not supply.** It asserts that *some* bijection
  $A \to \lvert A\rvert$ exists; it does not single one out, and nothing in the
  library does. Two sets can have equal cardinality with no distinguished
  bijection between them, which is the point of the counterexample on this page's
  companion.
