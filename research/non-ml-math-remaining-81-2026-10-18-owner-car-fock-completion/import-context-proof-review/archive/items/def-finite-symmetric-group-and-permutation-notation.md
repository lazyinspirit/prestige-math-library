---
id: def-finite-symmetric-group-and-permutation-notation
kind: definition
title: 'The finite symmetric group $S_n$, one-line notation, and cycle notation'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-symmetric-group, def-natural-numbers]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-11
    scope: item
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: 'Permutation (Wikipedia)'
      url: 'https://en.wikipedia.org/wiki/Permutation'
    - title: 'T. W. Judson, Abstract Algebra: Theory and Applications, §5.1'
      url: 'https://judsonbooks.org/aata-files/aata-20140815.pdf'
pipeline_run: null
---

## Definition

Let $n\in\mathbb N$, so that $n=\{0,1,\dots,n-1\}$ ([[def-natural-numbers]]). The
**symmetric group on $n$ letters** is

$$S_n:=\operatorname{Sym}(n)=\operatorname{Sym}(\{0,1,\dots,n-1\}),$$

the group of all bijections of $n$ under composition ([[def-symmetric-group]]),
with the composition convention

$$(\sigma\tau)(i):=(\sigma\circ\tau)(i)=\sigma(\tau(i))\qquad(i\in n),$$

so that in a product the right-hand factor acts first. An element of $S_n$ is
named by either of the two notations below.

**One-line notation.** For $\sigma\in S_n$, its **one-line form** is the list of
its values in order of their arguments,

$$\sigma=[\sigma(0),\sigma(1),\dots,\sigma(n-1)].$$

This list has length $n$ and its entries are $0,1,\dots,n-1$, each occurring
once, because $\sigma$ is a bijection of $n$. Conversely, a list
$[b_0,b_1,\dots,b_{n-1}]$ whose entries are $0,1,\dots,n-1$ each occurring once
is the one-line form of exactly one element of $S_n$, namely the map sending
each $i\in n$ to $b_i$: that map is injective because the entries are distinct,
and surjective because every element of $n$ occurs among them. So one-line
notation is a bijection from $S_n$ to the arrangements of $0,1,\dots,n-1$ in a
list. For $n=0$ the one-line form of the unique element of $S_0$ is the empty
list.

**Cycle notation.** For distinct $a_0,a_1,\dots,a_{k-1}\in n$ with $k\ge2$, the
symbol $(a_0\,a_1\,\cdots\,a_{k-1})$ denotes the element of $S_n$ that sends
$a_i$ to $a_{i+1}$ for each $i<k-1$, sends $a_{k-1}$ to $a_0$, and fixes every
element of $n$ outside $\{a_0,\dots,a_{k-1}\}$ ([[def-symmetric-group]]); it is
called a **$k$-cycle**, and a $2$-cycle is a **transposition**. Writing cycle
symbols side by side means composing them, so $(a\,b)(c\,d)$ is
$(a\,b)\circ(c\,d)$, and the empty juxtaposition of cycle symbols is the
identity $\operatorname{id}$.

Unlike one-line notation, cycle notation does not name each permutation once:
the symbol may be started at any of its entries, so

$$(a_0\,a_1\,\cdots\,a_{k-1})=(a_1\,\cdots\,a_{k-1}\,a_0)$$

and each $k$-cycle is written by exactly $k$ symbols of this shape. A cycle
symbol also does not record $n$, which must be supplied by the context.

## Remarks

- **The brackets carry the meaning, so the same list of numbers reads two
  different ways.** Square brackets are one-line notation and round brackets are
  cycle notation. In $S_3$ the one-line form $[1,2,0]$ and the cycle symbol
  $(0\,1\,2)$ happen to name the same permutation, the one sending $0\mapsto1$,
  $1\mapsto2$, $2\mapsto0$; but $[0,1,2]$ is the identity while $(0\,1\,2)$ is
  not, and $[2,1,0]$ is the transposition exchanging $0$ and $2$ while
  $(2\,1\,0)$ is a $3$-cycle. Inside a cycle symbol this library separates the
  entries by thin spaces rather than by commas, which keeps the two notations
  apart on the page.

- **Relation to the two-row form.** Many texts write a permutation as the array
  $\sigma=\begin{pmatrix}0&1&\cdots&n-1\\\sigma(0)&\sigma(1)&\cdots&\sigma(n-1)\end{pmatrix}$,
  whose first row lists the arguments and whose second row lists their images.
  One-line notation is that array with its first row deleted, which loses
  nothing because the first row is the same for every $\sigma\in S_n$.

- **Why the identity is a product of no cycles rather than a cycle.** The cycle
  symbols are restricted to $k\ge2$, so a fixed point is never written. The
  identity is therefore the empty product, and a permutation is written by
  listing only the cycles that move something. Which permutations admit such a
  factorisation, and in how many ways, is
  [[thm-disjoint-cycle-decomposition]]; the fixed points that cycle notation
  suppresses are restored as one-cycles when a cycle type is recorded
  ([[def-permutation-support-disjoint-cycles-and-cycle-type]]).
