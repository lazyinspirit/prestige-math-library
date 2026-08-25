---
id: lem-a-word-whose-weight-is-coprime-to-its-length-has-a-trivial-shift-stabiliser
kind: lemma
title: "If $\\gcd(\\lVert a\\rVert,m)=1$ then the shift stabiliser of $a$ is trivial, so its orbit has exactly $m$ elements"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-cyclic-shift-is-an-action-of-the-integers-modulo-the-length, def-cyclic-shift-and-the-periodic-partial-sum-function, def-orbit-and-stabilizer, thm-bezout-identity, def-common-divisor-and-gcd, def-coprime, lem-divisibility-basic, def-divides-in-z, thm-standard-representatives-modulo-n, thm-integers-modulo-n-basic-algebra, thm-induction-principle, def-finite-cardinality]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Postnikov (notes by A. Lin), MIT 18.212 Algebraic Combinatorics, Spring 2019, Claim 10"
      url: "https://web.stanford.edu/~lindrew/18.212.pdf"
    - title: 'N. Dershowitz and S. Zaks, "The Cycle Lemma and Some Applications", Europ. J. Combinatorics 11 (1990) 35–40, §1'
      url: "https://www.cs.tau.ac.il/~nachumd/papers/CL.pdf"
pipeline_run: null
---

## Statement

Let $m\ge1$ and let $a$ be a word of length $m$ of integers whose weight is
coprime to $m$, that is $\gcd(\lVert a\rVert,m)=1$
([[def-coprime]], [[def-cyclic-shift-and-the-periodic-partial-sum-function]]).
Then, for the action of $\mathbb{Z}/m$ on words of length $m$ by cyclic shifts
([[lem-cyclic-shift-is-an-action-of-the-integers-modulo-the-length]]):

1. the stabiliser of $a$ is the trivial subgroup $\{[0]_m\}$
   ([[def-orbit-and-stabilizer]]);
2. the orbit of $a$ is finite with exactly $m$ elements.

## Facts & Assumptions

**Given:** a natural number $m\ge1$ and a word $a$ of length $m$ of integers with $\gcd(\lVert a\rVert,m)=1$.

[F1] $(\sigma^{j}a)_i=a_{(i+j)\bmod m}$ for $0\le i<m$, and $j\bmod m$ is the unique $r$ with $j=qm+r$ and $0\le r<m$ ([[def-cyclic-shift-and-the-periodic-partial-sum-function]]).

[F2] $S_a(j)=q\lVert a\rVert+\sum_{i<r}a_i$ for $j=qm+r$ with $0\le r<m$; $S_a(0)=0$; and $S_a(j)-S_a(j-1)=a_{(j-1)\bmod m}$ for every $j\in\mathbb{Z}$ ([[def-cyclic-shift-and-the-periodic-partial-sum-function]]).

[L1] $\sigma^{0}$ is the identity, $\sigma^{j}(\sigma^{k}a)=\sigma^{j+k}a$, and $[j]_m\cdot a:=\sigma^{j}a$ is a well-defined left action of the additive group $\mathbb{Z}/m$ on the words of length $m$ ([[lem-cyclic-shift-is-an-action-of-the-integers-modulo-the-length]], clauses 1 and 2).

[L2] A property that holds at $0$ and passes from every natural number to its successor holds at every natural number: if a property $P$ satisfies $P(0)$ and ($P(n) \Rightarrow P(\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \in \mathbb{N}$ ([[thm-induction-principle]]).

[L3] For $d,x\in\mathbb{Z}$, $d$ divides $x$ when $x=dq$ for some $q\in\mathbb{Z}$ ([[def-divides-in-z]]).

[L4] For $x,y\in\mathbb{Z}$ not both $0$ there are integers $x_0,y_0$ with $xx_0+yy_0=\gcd(x,y)$ ([[thm-bezout-identity]]).

[L5] $\gcd(x,y)$ is the greatest common divisor of $x$ and $y$, and $\gcd(x,y)\ge1$ when $x$ and $y$ are not both $0$ ([[def-common-divisor-and-gcd]]).

[L6] Integers $x$ and $y$ are coprime when $\gcd(x,y)=1$ ([[def-coprime]]).

[L7] If $d\mid x$ and $d\mid y$ then $d\mid xz+yw$ for all $z,w$ ([[lem-divisibility-basic]], clause 3).

[L8] Every class in $\mathbb{Z}/m$ contains exactly one integer $r$ with $0\le r<m$, and $\lvert\mathbb{Z}/m\rvert=m$ ([[thm-standard-representatives-modulo-n]]).

[L9] $\mathbb{Z}/m$ is a commutative ring under the induced operations, so its addition makes it an abelian group with identity $[0]_m$ ([[thm-integers-modulo-n-basic-algebra]]).

[L10] If $A$ is finite and $f:A\to B$ is a bijection then $B$ is finite and $\lvert B\rvert=\lvert A\rvert$ ([[def-finite-cardinality]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $[d]_m$ lies in the stabiliser of $a$, with $0\le d<m$ chosen as the representative supplied by [L8]. Then $\sigma^{d}a=a$, that is $a_{(i+d)\bmod m}=a_i$ for every $i$ with $0\le i<m$. [F1, L1, L8]

2.1 For every $j\in\mathbb{N}$ one has $S_a(j+d)=S_a(j)+S_a(d)$. At $j=0$ this is $S_a(d)=0+S_a(d)$ by [F2]. If it holds at $j$, then applying the one-step difference identity of [F2] at $j+1+d$ and at $j+1$ gives $S_a(j+1+d)=S_a(j+d)+a_{(j+d)\bmod m}$ and $S_a(j+1)=S_a(j)+a_{j\bmod m}$, and step 1.1 makes the two added letters equal, since $(j+d)\bmod m=((j\bmod m)+d)\bmod m$ and $j\bmod m$ lies in the index range; so the identity holds at $j+1$. Induction gives it for all $j$. [F1, F2, L2, step 1.1]

3.1 For every $k\in\mathbb{N}$ one has $S_a(kd)=k\,S_a(d)$: at $k=0$ both sides are $0$, and the inductive step is step 2.1 with $j=kd$. Taking $k=m$ gives $m\,S_a(d)=S_a(md)$, while $md=d\cdot m+0$ exhibits $md$ in the form $qm+r$ with $q=d$ and $r=0$, so $S_a(md)=d\,\lVert a\rVert$ by [F2]. Hence $m\,S_a(d)=d\,\lVert a\rVert$, and therefore $m$ divides $d\,\lVert a\rVert$. [F2, L2, L3, step 2.1]

4.1 Since $m\ge1$, the pair $\lVert a\rVert$, $m$ is not both zero, so [L4] gives integers $x_0,y_0$ with $\lVert a\rVert x_0+my_0=\gcd(\lVert a\rVert,m)$, which is $1$ by hypothesis and [L6]. Multiplying by $d$ gives $d=(d\lVert a\rVert)x_0+m(dy_0)$; by step 3.1 the integer $m$ divides $d\lVert a\rVert$, and it divides $m$, so [L7] makes it divide $d$. With $0\le d<m$ this forces $d=0$: writing $d=mq$, any $q\ge1$ would give $d\ge m$ and any $q\le-1$ would give $d<0$. So the stabiliser contains only $[0]_m$, which is clause 1. [L3, L4, L5, L6, L7, step 3.1]

5.1 The map $\mathbb{Z}/m\to\mathbb{Z}/m\cdot a$ sending $[j]_m$ to $[j]_m\cdot a$ is surjective by the definition of the orbit and injective: if $[j]_m\cdot a=[j']_m\cdot a$ then applying the inverse of $[j']_m$ in the abelian group $\mathbb{Z}/m$ and using the action axioms of [L1] and [L9] gives $[j-j']_m\cdot a=a$, so $[j-j']_m=[0]_m$ by step 4.1 and $[j]_m=[j']_m$. Since $\lvert\mathbb{Z}/m\rvert=m$ by [L8], transport along this bijection by [L10] makes the orbit finite with exactly $m$ elements, which is clause 2. [L1, L8, L9, L10, step 4.1] ∎

## Remarks

- **The hypothesis is exactly what the Catalan application supplies.** There the
  word has weight $1$, and $\gcd(1,m)=1$ for every $m$, so the orbit of every such
  word has full size and the count of orbits is the count of words divided by $m$.
  Without a coprimality hypothesis a word can repeat: the word $1,-1,1,-1$ has
  weight $0$ and is fixed by the shift by two positions.

- **No orbit-stabiliser theorem is used.** The orbit size is obtained from the
  injectivity of $[j]_m\mapsto[j]_m\cdot a$, which is what a trivial stabiliser
  says directly; invoking the coset bijection would then require counting the
  cosets of the trivial subgroup, which is the same computation one step further
  away.
