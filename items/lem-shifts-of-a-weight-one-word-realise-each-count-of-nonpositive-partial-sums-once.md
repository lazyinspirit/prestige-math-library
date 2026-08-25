---
id: lem-shifts-of-a-weight-one-word-realise-each-count-of-nonpositive-partial-sums-once
kind: lemma
title: "If $\\lVert a\\rVert=1$ then $j\\mapsto\\#\\{r:0\\le r<m,\\ S_a(j+r)\\le S_a(j)\\}$ is a bijection from $\\{0,\\dots,m-1\\}$ onto $\\{1,\\dots,m\\}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cyclic-shift-and-the-periodic-partial-sum-function, def-integers, lem-pigeonhole, def-injection-surjection-bijection, def-finite-cardinality, thm-subset-of-a-finite-set, def-divides-in-z, cor-division-algorithm-nonzero-divisor]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Huq, Generalized Chung-Feller Theorems for Lattice Paths (PhD thesis, Brandeis University, 2009), Theorem 2.1.1"
      url: "https://arxiv.org/pdf/0907.3254"
pipeline_run: null
---

## Statement

Let $m\ge1$ and let $a$ be a word of length $m$ of integers with
$\lVert a\rVert=1$ ([[def-cyclic-shift-and-the-periodic-partial-sum-function]]).
For $j\in\mathbb{Z}$ put

$$X(j) := \bigl\lvert\{\, r\in\mathbb{N} : 0\le r<m,\ S_a(j+r)\le S_a(j) \,\}\bigr\rvert,$$

the number of the $m$ partial sums of the shift $\sigma^{j}a$, counted from
$r=0$, at which $S_a$ has not risen strictly above its value at $j$. Then

$$X : \{0,1,\dots,m-1\}\longrightarrow\{1,2,\dots,m\}$$

is a bijection ([[def-injection-surjection-bijection]]). In particular each of the
values $1,2,\dots,m$ is realised by exactly one $j$ in $\{0,\dots,m-1\}$.

## Facts & Assumptions

**Given:** a natural number $m\ge1$ and a word $a$ of length $m$ of integers with $\lVert a\rVert=1$.

[F1] $S_a(j+m)=S_a(j)+\lVert a\rVert$ for every $j\in\mathbb{Z}$; $S_a(0)=0$; and $j\bmod m$ is the unique $r$ with $j=qm+r$ and $0\le r<m$ ([[def-cyclic-shift-and-the-periodic-partial-sum-function]]).

[L1] For $d,x\in\mathbb{Z}$, $d$ divides $x$ when $x=dq$ for some $q\in\mathbb{Z}$ ([[def-divides-in-z]]).

[L2] For $x,b\in\mathbb{Z}$ with $b\ne0$ there is exactly one pair $(q,r)$ of integers with $x=qb+r$ and $0\le r<\lvert b\rvert$ ([[cor-division-algorithm-nonzero-divisor]]).

[L3] Let $A$ be a finite set and $B\subseteq A$; then $B$ is finite, $\lvert B\rvert\le\lvert A\rvert$, and $\lvert B\rvert=\lvert A\rvert$ if and only if $B=A$ ([[thm-subset-of-a-finite-set]], clauses 1, 2 and 3).

[L4] If $m'<n'$ then there is no injection from $n'$ to $m'$ ([[lem-pigeonhole]], clause 2).

[L5] $\lvert n\rvert=n$ for a natural number $n$, and a bijection transports finiteness and cardinality ([[def-finite-cardinality]]).

[L6] A function is a bijection when it is both injective and surjective ([[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** direct.

1.1 The integer key $T(i):=m\,S_a(i)-i$ is $m$-periodic: $T(i+m)=m\bigl(S_a(i)+1\bigr)-(i+m)=m\,S_a(i)-i=T(i)$, using $\lVert a\rVert=1$ in the quasiperiodicity clause of [F1]. [F1, algebra]

1.2 $T$ is injective on $\{0,\dots,m-1\}$: if $T(i)=T(j)$ with $i,j$ in that range, then $m\bigl(S_a(i)-S_a(j)\bigr)=i-j$, so $m$ divides $i-j$ while $-m<i-j<m$, and writing $i-j=mq$ forces $q=0$ by [L2], since $q\ge1$ would give $i-j\ge m$ and $q\le-1$ would give $i-j\le-m$. [L1, L2, algebra]

1.3 For every $j\in\mathbb{Z}$ and every $r$ with $0\le r<m$: $S_a(j+r)\le S_a(j)$ if and only if $T(j+r)\le T(j)$. Put $d:=S_a(j+r)-S_a(j)$, so $T(j+r)-T(j)=md-r$. If $d\le0$ then $md-r\le-r\le0$; if $d\ge1$ then $md-r\ge m-r\ge1$, **and this is the only place the hypothesis $r<m$ is used**. So the sign of $md-r$ decides, and the two conditions agree. [F1, algebra]

2.1 For $0\le j<m$ one has $X(j)=\lvert\{\,i\in\mathbb{N} : i<m,\ T(i)\le T(j)\,\}\rvert$. Indeed $r\mapsto(j+r)\bmod m$ is a bijection of $\{0,\dots,m-1\}$ onto itself, with inverse $i\mapsto(i-j)\bmod m$; by step 1.1 and the periodicity of $T$ one has $T((j+r)\bmod m)=T(j+r)$, and $T(j)$ is the value at $j$ itself since $j\bmod m=j$ in this range; so step 1.3 identifies the set counted by $X(j)$ with the displayed set through that bijection, and [L5] preserves the count. [F1, L5, step 1.1, step 1.3]

3.1 $X$ is injective on $\{0,\dots,m-1\}$. Let $i\ne j$ lie in that range; by step 1.2 the values $T(i)$ and $T(j)$ differ, say $T(i)<T(j)$. Then $\{\,l<m : T(l)\le T(i)\,\}$ is contained in $\{\,l<m : T(l)\le T(j)\,\}$ and does not contain $j$, which the second set does; so it is a proper subset of a finite set and [L3] gives a strictly smaller cardinality, that is $X(i)<X(j)$ by step 2.1. [L3, step 1.2, step 2.1]

3.2 $X$ takes values in $\{1,\dots,m\}$: the index $r=0$ always satisfies $S_a(j)\le S_a(j)$, so the counted set is nonempty and $X(j)\ge1$; and it is a subset of an $m$-element set, so $X(j)\le m$ by [L3] and [L5]. [L3, L5, step 2.1]

4.1 Both $\{0,\dots,m-1\}$ and $\{1,\dots,m\}$ have exactly $m$ elements. If $X$ omitted a value of $\{1,\dots,m\}$, then by steps 3.1 and 3.2 it would be an injection from an $m$-element set into a set of at most $m-1$ elements, which [L4] forbids; so $X$ is surjective as well as injective and is a bijection by [L6]. [L4, L5, L6, step 3.1, step 3.2] ∎

## Remarks

- **This is not the cycle lemma.** The cycle lemma counts the shifts all of whose
  partial sums are positive, and for weight $1$ that is exactly one shift. This
  lemma sorts **every** shift, by how many of its partial sums fail to rise above
  the starting value, and finds that the $m$ shifts realise the $m$ possible counts
  once each. The shift with count $1$ is the one the cycle lemma singles out.

- **Why an integer key and not a rational one.** The source perturbs $S_a$ by
  $i/m$ to break ties; multiplying through by $m$ gives $T(i)=m\,S_a(i)-i$, which
  does the same work without leaving $\mathbb{Z}$. The tie-breaking is exactly the
  injectivity of step 1.2.
