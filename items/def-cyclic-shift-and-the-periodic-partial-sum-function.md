---
id: def-cyclic-shift-and-the-periodic-partial-sum-function
kind: definition
title: "Cyclic shifts of an integer word and its periodic partial-sum function"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-integers, def-finite-words-factor-avoidance-and-prefix-states, cor-division-algorithm-nonzero-divisor, def-monoid-finite-product, def-semigroup-and-monoid, thm-int-comm-ring, def-int-abs]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: 'N. Dershowitz and S. Zaks, "The Cycle Lemma and Some Applications", Europ. J. Combinatorics 11 (1990) 35–40, §1'
      url: "https://www.cs.tau.ac.il/~nachumd/papers/CL.pdf"
    - title: 'C. Krattenthaler, "Lattice Path Enumeration", ch. 10 of the Handbook of Enumerative Combinatorics, §10.4'
      url: "https://arxiv.org/pdf/1503.05930"
pipeline_run: null
---

## Definition

Throughout, $m$ is a natural number with $m\ge1$, and a **word of length $m$
over a set $X$** is a function $a$ from $\{0,1,\dots,m-1\}$ to $X$, written
$a=a_0a_1\cdots a_{m-1}$ ([[def-finite-words-factor-avoidance-and-prefix-states]]).

**Remainders.** For every $j\in\mathbb{Z}$ there is exactly one pair $(q,r)$ of
integers with $j=qm+r$ and $0\le r<m$
([[cor-division-algorithm-nonzero-divisor]], whose bound $0\le r<\lvert m\rvert$
is $0\le r<m$ here because $m\ge1$, [[def-int-abs]]). Write
$j\bmod m:=r$ for that remainder, so $0\le j\bmod m<m$ for every integer $j$,
including negative $j$.

**Cyclic shifts.** For $j\in\mathbb{Z}$ the **shift** $\sigma^{j}a$ of a word $a$
of length $m$ over $X$ is the word of length $m$ over $X$ given by

$$(\sigma^{j}a)_i := a_{(i+j)\bmod m} \qquad (0\le i<m).$$

Since $(i+j)\bmod m$ lies in $\{0,\dots,m-1\}$ this is again a word of length
$m$, and $\sigma^{j}a$ begins at the position $j\bmod m$ of $a$.

**Weight.** Let now $a$ be a word of length $m$ of integers
([[def-integers]]). Its **weight** is

$$\lVert a\rVert := \sum_{i<m}a_i,$$

the finite sum in the commutative monoid $(\mathbb{Z},+,0)$
([[thm-int-comm-ring]], [[def-semigroup-and-monoid]]), that is the finite product
of [[def-monoid-finite-product]] written additively, whose two clauses read
$\sum_{i<0}a_i=0$ and $\sum_{i<r+1}a_i=\sum_{i<r}a_i+a_r$.

**The periodic partial-sum function.** Define $S_a:\mathbb{Z}\to\mathbb{Z}$ by

$$S_a(j) := q\,\lVert a\rVert+\sum_{i<r}a_i \qquad\text{where } j=qm+r,\ 0\le r<m .$$

This is well defined because the pair $(q,r)$ is unique. Defining $S_a$ on all of
$\mathbb{Z}$ by a closed formula, rather than by extending a one-sided sequence,
is what makes the statements below about all integers $j$ available at once.

**Three identities, proved here because everything below uses them.**

**(a) On the first period $S_a$ is the ordinary partial sum.** For
$0\le j\le m$ one has $S_a(j)=\sum_{i<j}a_i$. For $j<m$ this is the definition
with $q=0$ and $r=j$; for $j=m$ it is the definition with $q=1$ and $r=0$, giving
$S_a(m)=\lVert a\rVert=\sum_{i<m}a_i$. In particular $S_a(0)=0$.

**(b) Quasiperiodicity.** $S_a(j+m)=S_a(j)+\lVert a\rVert$ for every
$j\in\mathbb{Z}$: if $j=qm+r$ with $0\le r<m$ then $j+m=(q+1)m+r$ with the same
$r$, so the two values differ by exactly one copy of $\lVert a\rVert$.

**(c) The one-step difference.** $S_a(j)-S_a(j-1)=a_{(j-1)\bmod m}$ for every
$j\in\mathbb{Z}$. Write $j-1=qm+r$ with $0\le r<m$, so
$(j-1)\bmod m=r$ and $S_a(j-1)=q\lVert a\rVert+\sum_{i<r}a_i$. If $r+1<m$ then
$j=qm+(r+1)$, so $S_a(j)=q\lVert a\rVert+\sum_{i<r+1}a_i$ and the difference is
$a_r$ by the second clause of the finite sum. If $r+1=m$ then $j=(q+1)m+0$, so
$S_a(j)=(q+1)\lVert a\rVert$ and the difference is
$\lVert a\rVert-\sum_{i<m-1}a_i$, which is $a_{m-1}=a_r$ by the same clause
applied at $r=m-1$.

## Remarks

- **The shift index is a position, not a rotation count in the other direction.**
  $\sigma^{j}a$ reads $a$ starting at position $j\bmod m$, so $\sigma^{1}a$ drops
  the first letter of $a$ and appends it at the end. The sources cut necklaces at
  both ends and a page that mixes the two conventions gets the correspondences of
  the cycle lemma pointing the wrong way; the convention here is fixed once, in
  this definition, and is restated where it is used.

- **The weight is an integer and may be negative or zero.** Nothing in this
  definition constrains the letters. The hypotheses $a_i\le1$ and
  $\lVert a\rVert\ge1$ that the cycle lemma needs are stated in the results that
  use them, not built into the objects.
