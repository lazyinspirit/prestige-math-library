---
id: thm-catalan-numbers-by-the-cycle-lemma
kind: theorem
title: "$(2n+1)\\,C_n=\\binom{2n+1}{n}$, a second derivation of the Catalan count"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-coprime, thm-cycle-lemma, lem-a-word-whose-weight-is-coprime-to-its-length-has-a-trivial-shift-stabiliser, lem-cyclic-shift-is-an-action-of-the-integers-modulo-the-length, def-catalan-number, def-dyck-path-and-semilength, def-cyclic-shift-and-the-periodic-partial-sum-function, thm-orbits-partition-the-set, def-binomial-coefficient, thm-binomial-closed-formula, cor-catalan-closed-formula, thm-sum-rule, def-sum-over-a-finite-index-set, thm-subset-of-a-finite-set, def-finite-cardinality, thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse, def-factorial-and-falling-factorial, lem-nat-mult-cancellative]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: 'N. Dershowitz and S. Zaks, "The Cycle Lemma and Some Applications", Europ. J. Combinatorics 11 (1990) 35–40, §2'
      url: "https://www.cs.tau.ac.il/~nachumd/papers/CL.pdf"
    - title: "A. Postnikov (notes by A. Lin), MIT 18.212 Algebraic Combinatorics, Spring 2019"
      url: "https://web.stanford.edu/~lindrew/18.212.pdf"
pipeline_run: null
---

## Statement

For every $n\in\mathbb{N}$, in $\mathbb{N}$,

$$(2n+1)\,C_n=\binom{2n+1}{n},$$

where $C_n$ is the Catalan number ([[def-catalan-number]]).

This is a second derivation of the Catalan count, by a group action rather than by
a reflection: the route runs through the cycle lemma ([[thm-cycle-lemma]]) and the
orbits of the cyclic shift, and it uses no reflection and no difference of
binomial coefficients. The identity is consistent with
$(n+1)C_n=\binom{2n}{n}$ ([[cor-catalan-closed-formula]]), and the consistency is
the separate identity $(n+1)\binom{2n+1}{n}=(2n+1)\binom{2n}{n}$ proved below.

## Facts & Assumptions

**Given:** a natural number $n$; the set $W$ of words of length $2n+1$ over $\{1,-1\}$ having exactly $n$ entries $-1$; and the set $G$ of those $a\in W$ all of whose partial sums $\sum_{i<r}a_i$, $1\le r\le 2n+1$, are positive.

[F1] $C_n=\lvert\mathcal{D}_n\rvert$ ([[def-catalan-number]]).

[F2] $\mathcal{D}_n$ corresponds bijectively, through step words, to the set of ballot words of length $2n$, that is the words over a two-letter alphabet in which the two letters occur equally often and every prefix has at least as many of the first letter as of the second ([[def-dyck-path-and-semilength]]).

[F3] $\lVert a\rVert=\sum_{i<m}a_i$, $(\sigma^{j}a)_i=a_{(i+j)\bmod m}$, and the finite sum satisfies $\sum_{i<0}c_i=0$ and $\sum_{i<r+1}c_i=\sum_{i<r}c_i+c_r$ ([[def-cyclic-shift-and-the-periodic-partial-sum-function]]).

[L1] If $p,n',\mu\in\mathbb{N}$ and a word of length $p+n'\ge1$ has $p$ positions carrying $1$ and $n'$ positions carrying $-\mu$, then its weight is $p-\mu n'$; and if $a$ has every letter at most $1$ and $\lVert a\rVert=k\ge1$ then exactly $k$ of the $m$ indices $j$ with $0\le j<m$ are such that $\sigma^{j}a$ has all its partial sums positive ([[thm-cycle-lemma]], clauses 2 and 1).

[L2] If $\gcd(\lVert a\rVert,m)=1$ then the stabiliser of $a$ under the shift action of $\mathbb{Z}/m$ is $\{[0]_m\}$ and the orbit of $a$ has exactly $m$ elements ([[lem-a-word-whose-weight-is-coprime-to-its-length-has-a-trivial-shift-stabiliser]]).

[L3] For every letter $x$ the number of positions of $\sigma^{j}a$ carrying $x$ equals the number of positions of $a$ carrying $x$, and $[j]_m\cdot a:=\sigma^{j}a$ is a left action of $\mathbb{Z}/m$ on the words of length $m$ ([[lem-cyclic-shift-is-an-action-of-the-integers-modulo-the-length]], clauses 2 and 3).

[L4] For a left action of $G$ on $X$ the relation $x\sim y$ given by $y=g\cdot x$ for some $g\in G$ is an equivalence relation, its class at $x$ is the orbit of $x$, and the distinct orbits partition $X$ ([[thm-orbits-partition-the-set]]).

[L5] For a finite set $A$ and $k\in\mathbb{N}$, $[A]^{k}$ is the set of $k$-element subsets of $A$, and $\lvert[A]^{k}\rvert=\binom{\lvert A\rvert}{k}$ ([[def-binomial-coefficient]]).

[L6] If $I$ is finite and $(A_i)_{i\in I}$ are pairwise disjoint finite sets, then $\bigcup_{i\in I}A_i$ is finite with $\lvert\bigcup_{i\in I}A_i\rvert=\sum_{i\in I}\lvert A_i\rvert$ ([[thm-sum-rule]], clause 2).

[L7] For a constant natural number $c$ and a finite index set $S$, $\sum_{i\in S}c=\lvert S\rvert\cdot c$ ([[def-sum-over-a-finite-index-set]], clause (c)).

[L8] A subset of a finite set is finite ([[thm-subset-of-a-finite-set]], clause 1).

[L9] If $A$ is finite and $f:A\to B$ is a bijection then $B$ is finite and $\lvert B\rvert=\lvert A\rvert$ ([[def-finite-cardinality]]).

[L10] For $f:A\to B$: $f$ is a bijection if and only if there is a function $g:B\to A$ with $g\circ f=\Delta_A$ and $f\circ g=\Delta_B$ ([[thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]]).

[L11] For $M,k\in\mathbb{N}$ with $k\le M$: $\binom{M}{k}\cdot k!\cdot (M-k)! = M!$ ([[thm-binomial-closed-formula]]).

[L12] $M! \ne 0$ for every $M\in\mathbb{N}$, and $\sigma(M)! = M!\cdot\sigma(M)$ ([[def-factorial-and-falling-factorial]]).

[L13] For all $x,y,c\in\mathbb{N}$ with $c\ne 0$: if $x\cdot c=y\cdot c$ then $x=y$ ([[lem-nat-mult-cancellative]]).

[L14] $(n+1)\,C_n=\binom{2n}{n}$ in $\mathbb{N}$ ([[cor-catalan-closed-formula]]).

[L15] Integers $x$ and $y$ are coprime when $\gcd(x,y)=1$; $x$ and $1$ are coprime for every integer $x$, since $\gcd(x,1)=1$, and the relation is symmetric ([[def-coprime]]).

## Proof

**Proof technique:** direct.

1.1 The map sending $a\in W$ to $\{\,j : 0\le j<2n+1,\ a_j=-1\,\}$ is a bijection from $W$ onto the $n$-element subsets of the $(2n+1)$-element set $\{0,\dots,2n\}$, its inverse sending a subset $T$ to the word with entry $-1$ at the positions of $T$ and $1$ elsewhere; so $W$ is finite with $\lvert W\rvert=\binom{2n+1}{n}$. [L5, L9, L10]

1.2 Every $a\in W$ has $n$ positions carrying $-1$ and the remaining $n+1$ positions carrying $1$, so its weight is $(n+1)-n=1$ by the box-and-circle clause of [L1] with $p=n+1$, $n'=n$ and $\mu=1$; and every letter of $a$ is at most $1$. [F3, L1]

1.3 The set $G$ is in bijection with $\mathcal{D}_n$, so $\lvert G\rvert=C_n$. A word $a\in G$ has first partial sum $a_0>0$, hence $a_0=1$; deleting it leaves the word $w=a_1\cdots a_{2n}$ of length $2n$ over $\{1,-1\}$, whose partial sums are $\sum_{i<r}w_i=\bigl(\sum_{i<r+1}a_i\bigr)-1\ge0$ and whose total is $\lVert a\rVert-1=0$, so $w$ has $n$ entries of each sign and every prefix at least as many entries $1$ as $-1$: a ballot word of length $2n$ under the relabelling of $1$ and $-1$ as the two letters. Prepending $1$ inverts the deletion and carries a ballot word back into $G$, since the partial sums then become $1$ plus a nonnegative number and the total becomes $1$. With [F1], [F2], [L9] and [L10] this gives $\lvert G\rvert=\lvert\mathcal{D}_n\rvert=C_n$. [F1, F2, F3, L9, L10]

2.1 The shift action of $\mathbb{Z}/(2n+1)$ restricts to $W$, because shifting preserves the number of positions carrying each letter by [L3]. Since $\gcd(1,2n+1)=1$, step 1.2 and [L2] make every stabiliser in $W$ trivial, so every orbit has exactly $2n+1$ elements and the $2n+1$ words $\sigma^{j}a$ with $0\le j<2n+1$ are pairwise distinct. [L2, L3, L15, step 1.2]

3.1 Each orbit meets $G$ in exactly one word: by [L1] with $k=1$ there is exactly one index $j$ in $\{0,\dots,2n\}$ with $\sigma^{j}a\in G$, and by step 2.1 distinct indices give distinct words, so exactly one member of the orbit lies in $G$. Hence $g\mapsto$ (orbit of $g$) is a bijection from $G$ onto the set of orbits, whose members partition $W$ by [L4]; $G$ is finite by [L8] and step 1.1, and [L6] with index set $G$ together with [L7] gives $\lvert W\rvert=\sum_{g\in G}(2n+1)=\lvert G\rvert\cdot(2n+1)$. [L1, L4, L6, L7, L8, L9, step 1.1, step 2.1]

4.1 Combining steps 1.1, 1.3 and 3.1 gives $(2n+1)C_n=\lvert W\rvert=\binom{2n+1}{n}$. For the consistency with [L14]: $n\le 2n+1$ and $(2n+1)-n=n+1$, so [L11] gives $\binom{2n+1}{n}\,n!\,(n+1)!=(2n+1)!$, which with $(n+1)!=(n+1)\,n!$ from [L12] reads $(n+1)\binom{2n+1}{n}\cdot n!\,n!=(2n+1)!$; and [L11] applied to $\binom{2n}{n}$ gives $\binom{2n}{n}n!\,n!=(2n)!$, so $(2n+1)\binom{2n}{n}\cdot n!\,n!=(2n+1)\,(2n)!=(2n+1)!$ by [L12]. Cancelling the nonzero factor $n!\,n!$ by [L12] and [L13] gives $(n+1)\binom{2n+1}{n}=(2n+1)\binom{2n}{n}$, so multiplying the identity of this theorem by $n+1$ and the identity of [L14] by $2n+1$ produces the same equation and the two closed forms agree. At $n=0$ the theorem reads $C_0=\binom{1}{0}=1$. [L5, L11, L12, L13, L14, step 1.1, step 1.3, step 3.1] ∎

## Remarks

- **This is a different route, not a rearrangement.** The reflection derivation
  matches paths that touch a level with paths from a reflected starting point; this
  one lets a cyclic group act on words and counts orbits. The two share only the
  definition of $C_n$ as a count of Dyck paths, and each yields a closed form the
  other does not produce directly: $(2n+1)C_n=\binom{2n+1}{n}$ here and
  $(n+1)C_n=\binom{2n}{n}$ there.

- **Where the coprimality is spent.** Every word in $W$ has weight $1$, and $1$ is
  coprime to every modulus, so no orbit is short and no word is counted twice.
  Without that the orbit count would not be $\lvert W\rvert$ divided by the length,
  and the argument would give an inequality rather than an identity.
