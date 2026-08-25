---
id: lem-strict-right-minima-of-a-quasiperiodic-partial-sum-function
kind: lemma
title: "If every $a_i\\le1$ and $\\lVert a\\rVert\\ge1$, the strict right minima form a two-sided increasing list on which $S_a$ increases by exactly $1$ at each successive index"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cyclic-shift-and-the-periodic-partial-sum-function, lem-cyclic-shift-positivity-is-a-strict-right-minimum-of-the-partial-sums, lem-int-bounded-above-has-greatest, def-integers, thm-induction-principle, thm-int-ordered-ring, cor-division-algorithm-nonzero-divisor, thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse, def-finite-cardinality]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'N. Dershowitz and S. Zaks, "The Cycle Lemma and Some Applications", Europ. J. Combinatorics 11 (1990) 35–40, §1.1'
      url: "https://www.cs.tau.ac.il/~nachumd/papers/CL.pdf"
pipeline_run: null
---

## Statement

Let $m\ge1$ and let $a$ be a word of length $m$ of integers with $a_i\le1$ for
every $i<m$ and with $k:=\lVert a\rVert\ge1$
([[def-cyclic-shift-and-the-periodic-partial-sum-function]]). Write $R$ for the
set of strict right minima of $S_a$, that is the set of $j\in\mathbb{Z}$ with
$S_a(i)>S_a(j)$ for every integer $i>j$
([[lem-cyclic-shift-positivity-is-a-strict-right-minimum-of-the-partial-sums]]).

1. **Existence and value.** For every $M\in\mathbb{Z}$ there is exactly one
   $j\in R$ with $S_a(j)=M$. Writing $\rho(M)$ for it, the map
   $\rho:\mathbb{Z}\to R$ is a bijection with $S_a(\rho(M))=M$.
2. **Succession.** $\rho$ is strictly increasing, and
   $\rho(M+k)=\rho(M)+m$ for every $M\in\mathbb{Z}$.
3. **Window count.** For every $j_0\in\mathbb{Z}$ the set
   $R\cap\{j_0,j_0+1,\dots,j_0+m-1\}$ is finite with exactly $k$ elements.

The hypothesis $a_i\le1$ enters only in clause 1, where it is what forces the
value at a strict right minimum to be exactly $M$ rather than merely at most $M$.

## Facts & Assumptions

**Given:** a natural number $m\ge1$ and a word $a$ of length $m$ of integers with $a_i\le1$ for every $i<m$ and $k=\lVert a\rVert\ge1$.

[F1] $S_a(0)=0$; $S_a(j)=\sum_{i<j}a_i$ for $0\le j\le m$; $S_a(j)-S_a(j-1)=a_{(j-1)\bmod m}$ for every $j\in\mathbb{Z}$; $S_a(j+m)=S_a(j)+\lVert a\rVert$ for every $j\in\mathbb{Z}$; and $S_a(qm+r)=q\lVert a\rVert+\sum_{i<r}a_i$ for $0\le r<m$ ([[def-cyclic-shift-and-the-periodic-partial-sum-function]]).

[F2] An integer $j$ is a strict right minimum of $S_a$ when $S_a(i)>S_a(j)$ for every integer $i>j$ ([[lem-cyclic-shift-positivity-is-a-strict-right-minimum-of-the-partial-sums]]).

[L1] A property that holds at $0$ and passes from every natural number to its successor holds at every natural number: if a property $P$ satisfies $P(0)$ and ($P(n) \Rightarrow P(\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \in \mathbb{N}$ ([[thm-induction-principle]]).

[L2] The order on $\mathbb{Z}$ is total, antisymmetric and transitive, and is compatible with addition; positives are closed under multiplication ([[thm-int-ordered-ring]]).

[L3] A nonempty $S\subseteq\mathbb{Z}$ with an upper bound has a unique greatest element, and a nonempty $S\subseteq\mathbb{Z}$ with a lower bound has a unique least element ([[lem-int-bounded-above-has-greatest]]).

[L4] For $x,b\in\mathbb{Z}$ with $b\ne0$ there is exactly one pair $(q,r)$ of integers with $x=qb+r$ and $0\le r<\lvert b\rvert$ ([[cor-division-algorithm-nonzero-divisor]]).

[L5] For $f:A\to B$: $f$ is a bijection if and only if there is a function $g:B\to A$ with $g\circ f=\Delta_A$ and $f\circ g=\Delta_B$ ([[thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]]).

[L6] If $A$ is finite and $f:A\to B$ is a bijection then $B$ is finite and $\lvert B\rvert=\lvert A\rvert$; and $\lvert n\rvert=n$ for a natural number $n$ ([[def-finite-cardinality]]).

## Proof

**Proof technique:** direct.

1.1 The integers $S_a(0),S_a(1),\dots,S_a(m-1)$ have a least element $\mu$: by induction on $t$, every list $S_a(0),\dots,S_a(t)$ has a least element, since the order on $\mathbb{Z}$ is total, so adjoining one further integer to a list with a least element leaves it with one. [F1, L1, L2]

1.2 For every $M\in\mathbb{Z}$ the set $T_M:=\{\,i\in\mathbb{Z} : S_a(i)\le M\,\}$ is nonempty. If $M\ge0$ then $S_a(0)=0\le M$. If $M<0$ then put $t:=-M$, a positive integer; induction on $t$ with the quasiperiodicity clause of [F1] gives $S_a(-tm)=-tk$, and $tk\ge t$ because $k\ge1$, so $S_a(-tm)\le-t=M$. [F1, L1, L2]

2.1 Each $T_M$ has an upper bound. Let $i\in T_M$ and write $i=qm+r$ with $0\le r<m$ by [L4], so $S_a(i)=qk+S_a(r)\ge qk+\mu$ by [F1] and step 1.1, whence $qk\le M-\mu$. If $q\ge1$ then $q\le qk$ because $k\ge1$, so $q\le M-\mu$; and if $q\le0$ then $q\le0$. So in either case $q\le B$, where $B$ is the greater of $0$ and $M-\mu$, and therefore $i\le Bm+m-1$. [F1, L2, L4, step 1.1]

3.1 By [L3] the set $T_M$ has a greatest element $j_M$. Every $i>j_M$ lies outside $T_M$, so $S_a(i)>M\ge S_a(j_M)$, and $j_M$ is a strict right minimum. Its value is exactly $M$: the one-step difference identity of [F1] gives $S_a(j_M+1)-S_a(j_M)=a_{j_M\bmod m}\le1$ by hypothesis, while $S_a(j_M+1)>M$ since $j_M+1$ is outside $T_M$, so $M<S_a(j_M+1)\le S_a(j_M)+1\le M+1$ and hence $S_a(j_M)=M$. [F1, F2, L3, step 1.2, step 2.1]

4.1 At most one strict right minimum has a given value: if $j<j'$ are both strict right minima then $S_a(j')>S_a(j)$, so their values differ. With step 3.1 this gives, for each $M$, exactly one $j\in R$ with $S_a(j)=M$; write $\rho(M)$ for it. Every $j\in R$ satisfies $j=\rho(S_a(j))$ by that uniqueness, so $\rho$ is onto $R$, and it is injective because $S_a(\rho(M))=M$; by [L5] it is a bijection $\mathbb{Z}\to R$. This is clause 1. [F2, L5, step 3.1]

5.1 $\rho$ is strictly increasing: if $M<M'$ and $\rho(M')\le\rho(M)$, then either $\rho(M')=\rho(M)$, forcing $M=M'$, or $\rho(M')<\rho(M)$, and then the strict right minimum property of $\rho(M')$ gives $M=S_a(\rho(M))>S_a(\rho(M'))=M'$; both contradict $M<M'$. And $\rho(M)+m$ is a strict right minimum of value $M+k$: for $i>\rho(M)+m$ we have $i-m>\rho(M)$, so the quasiperiodicity clause of [F1] gives $S_a(i)=S_a(i-m)+k>S_a(\rho(M))+k=S_a(\rho(M)+m)$, and $S_a(\rho(M)+m)=M+k$; hence $\rho(M+k)=\rho(M)+m$ by step 4.1. This is clause 2. [F1, F2, step 4.1]

6.1 Fix $j_0\in\mathbb{Z}$. Iterating clause 2 by induction gives $\rho(M+tk)=\rho(M)+tm$ for every $t\in\mathbb{N}$, so the set $\{M:\rho(M)\ge j_0\}$ is nonempty, taking $t$ with $tm\ge j_0-\rho(0)$, and bounded below, since for $t$ with $\rho(0)-tm<j_0$ every $M\le-tk$ has $\rho(M)\le\rho(-tk)=\rho(0)-tm<j_0$; let $M_0$ be its least element by [L3]. Then $\rho(M_0-1)<j_0\le\rho(M_0)$, so $\rho(M_0+k)=\rho(M_0)+m\ge j_0+m$ and $\rho(M_0+k-1)=\rho(M_0-1)+m<j_0+m$. Since $\rho$ is strictly increasing and every member of $R$ is some $\rho(M)$, the members of $R$ in $\{j_0,\dots,j_0+m-1\}$ are exactly $\rho(M_0),\dots,\rho(M_0+k-1)$, and $i\mapsto\rho(M_0+i)$ is a bijection from the natural number $k$ onto that set; so by [L6] the set is finite with exactly $k$ elements, which is clause 3. [L1, L3, L6, step 4.1, step 5.1] ∎

## Remarks

- **Why the hypothesis $a_i\le1$ cannot be dropped.** It is used exactly once, in
  step 3.1, to force $S_a(j_M)=M$: without it the greatest element of $T_M$ can
  have a value strictly below $M$, several values of $M$ then share one strict
  right minimum, and the succession structure of clause 2 fails. A word with a
  letter $2$ shows this at once, and it is the reason the cycle lemma is stated
  for words whose letters are at most $1$.

- **Why the hypothesis $\lVert a\rVert\ge1$ cannot be dropped.** It is what makes
  $S_a$ take arbitrarily large values to the right of any index and arbitrarily
  small ones to the left, which is what makes every $T_M$ nonempty and bounded
  above. With weight $0$ the function is periodic and $R$ is empty.
