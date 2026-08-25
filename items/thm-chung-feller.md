---
id: thm-chung-feller
kind: theorem
title: "The Chung–Feller theorem: for each $k$ with $0\\le k\\le n$, exactly $C_n$ of the diagonal paths from $(0,0)$ to $(2n,0)$ have exactly $2k$ steps lying above level $0$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-shifts-of-a-weight-one-word-realise-each-count-of-nonpositive-partial-sums-once, lem-a-word-whose-weight-is-coprime-to-its-length-has-a-trivial-shift-stabiliser, lem-cyclic-shift-is-an-action-of-the-integers-modulo-the-length, lem-cyclic-shift-positivity-is-a-strict-right-minimum-of-the-partial-sums, thm-orbits-partition-the-set, def-cyclic-shift-and-the-periodic-partial-sum-function, def-diagonal-lattice-path-and-its-height, def-catalan-number, cor-catalan-closed-formula, def-binomial-coefficient, lem-lattice-paths-are-determined-by-their-step-words, thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse, thm-sum-rule, def-sum-over-a-finite-index-set, def-finite-cardinality, thm-subset-of-a-finite-set, lem-int-bounded-above-has-greatest, thm-well-ordering-principle, thm-induction-principle, lem-nat-mult-cancellative, def-coprime]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "A. Huq, Generalized Chung-Feller Theorems for Lattice Paths (PhD thesis, Brandeis University, 2009), Theorems 1.1.3, 2.1.1, 2.2.1 and 2.3.1"
      url: "https://arxiv.org/pdf/0907.3254"
pipeline_run: null
---

## Statement

Let $q$ be a diagonal lattice path of length $\ell$ with height function $h$
([[def-diagonal-lattice-path-and-its-height]]). Its **steps** are the indices $i$
with $1\le i\le\ell$, the step $i$ passing from height $h(i-1)$ to height $h(i)$;
it is an **up step** when $h(i)=h(i-1)+1$ and a **down step** when
$h(i)=h(i-1)-1$. The step $i$ **lies above level $0$** when $h(i-1)\ge0$ and
$h(i)\ge0$, and **lies below level $0$** otherwise. Every step is exactly one of
the two.

Let $n\in\mathbb{N}$. Then every $q\in\mathcal{W}((0,0),(2n,0))$ has an even
number of steps above level $0$, say $2k$ with $0\le k\le n$; and for each $k$
with $0\le k\le n$ the set

$$\mathcal{F}_{n,k} := \{\, q\in\mathcal{W}((0,0),(2n,0)) : q \text{ has exactly } 2k \text{ steps above level } 0 \,\}$$

is finite with

$$\lvert\mathcal{F}_{n,k}\rvert = C_n$$

([[def-catalan-number]]). In particular the count does not depend on $k$.

## Facts & Assumptions

**Given:** a natural number $n$; the set $W$ of words of length $2n+1$ over $\{1,-1\}$ with exactly $n$ entries $-1$, so with $n+1$ entries $1$; the subset $U\subseteq W$ of words whose entry at the position $0$ is $1$; and for a word $w$ of length $2n+1$ over $\{1,-1\}$ the statistic $\kappa(w):=\lvert\{\,i : 0\le i\le 2n,\ w_i=1,\ \sum_{i'<i}w_{i'}\le0\,\}\rvert$.

[F1] A diagonal path of length $\ell$ from $(0,\alpha)$ is the same datum as a function $h:\{0,\dots,\ell\}\to\mathbb{Z}$ with $h(0)=\alpha$ and $h(i)-h(i-1)\in\{1,-1\}$ for $1\le i\le\ell$; with $\mu(i)$ the number of up-steps among the first $i$ its height is $h(i)=\alpha+2\mu(i)-i$ ([[def-diagonal-lattice-path-and-its-height]]).

[F2] $C_n=\lvert\mathcal{D}_n\rvert$ ([[def-catalan-number]]).

[F3] $\lVert a\rVert=\sum_{i<m}a_i$; $(\sigma^{j}a)_i=a_{(i+j)\bmod m}$; $S_a(0)=0$; $S_a(j)-S_a(j-1)=a_{(j-1)\bmod m}$; $S_a(j+m)=S_a(j)+\lVert a\rVert$; and the finite sum satisfies $\sum_{i<0}c_i=0$ and $\sum_{i<r+1}c_i=\sum_{i<r}c_i+c_r$ ([[def-cyclic-shift-and-the-periodic-partial-sum-function]]).

[L1] If $m\ge1$ and $\lVert b\rVert=1$, then $l\mapsto\lvert\{\,r:0\le r<m,\ S_b(l+r)\le S_b(l)\,\}\rvert$ is a bijection from $\{0,\dots,m-1\}$ onto $\{1,\dots,m\}$ ([[lem-shifts-of-a-weight-one-word-realise-each-count-of-nonpositive-partial-sums-once]]).

[L2] If $\gcd(\lVert a\rVert,m)=1$ then the stabiliser of $a$ under the shift action of $\mathbb{Z}/m$ is $\{[0]_m\}$ and the orbit of $a$ has exactly $m$ elements ([[lem-a-word-whose-weight-is-coprime-to-its-length-has-a-trivial-shift-stabiliser]]).

[L3] For every letter $x$ the number of positions of $\sigma^{j}a$ carrying $x$ equals the number of positions of $a$ carrying $x$, and $[j]_m\cdot a:=\sigma^{j}a$ is a left action of $\mathbb{Z}/m$ on the words of length $m$ ([[lem-cyclic-shift-is-an-action-of-the-integers-modulo-the-length]], clauses 2 and 3).

[L4] For a left action of $G$ on $X$ the relation $x\sim y$ given by $y=g\cdot x$ for some $g\in G$ is an equivalence relation, its class at $x$ is the orbit of $x$, and the distinct orbits partition $X$ ([[thm-orbits-partition-the-set]]).

[L5] For $\lVert a\rVert\ge1$, $j\in\mathbb{Z}$ and $0\le r\le m$: $\sum_{i<r}(\sigma^{j}a)_i=S_a(j+r)-S_a(j)$ ([[lem-cyclic-shift-positivity-is-a-strict-right-minimum-of-the-partial-sums]], clause 1).

[L6] $(n+1)\,C_n=\binom{2n}{n}$ in $\mathbb{N}$ ([[cor-catalan-closed-formula]]).

[L7] For a finite set $A$ and $k'\in\mathbb{N}$, $[A]^{k'}$ is the set of $k'$-element subsets of $A$, and $\lvert[A]^{k'}\rvert=\binom{\lvert A\rvert}{k'}$ ([[def-binomial-coefficient]]).

[L8] For a step set $S$, a point $P$ and $\ell\in\mathbb{N}$, the map sending a lattice path to its step word is a bijection $\mathcal{L}_S(P;\ell)\to S^{\ell}$ ([[lem-lattice-paths-are-determined-by-their-step-words]]).

[L9] For $f:A\to B$: $f$ is a bijection if and only if there is a function $g:B\to A$ with $g\circ f=\Delta_A$ and $f\circ g=\Delta_B$ ([[thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]]).

[L10] If $A$ and $B$ are finite and disjoint then $\lvert A\cup B\rvert=\lvert A\rvert+\lvert B\rvert$; and if $I$ is finite and $(A_i)_{i\in I}$ are pairwise disjoint finite sets then $\lvert\bigcup_{i\in I}A_i\rvert=\sum_{i\in I}\lvert A_i\rvert$ ([[thm-sum-rule]], clauses 1 and 2).

[L11] For a constant natural number $c$ and a finite index set $S$, $\sum_{i\in S}c=\lvert S\rvert\cdot c$ ([[def-sum-over-a-finite-index-set]], clause (c)).

[L12] If $A$ is finite and $f:A\to B$ is a bijection then $B$ is finite and $\lvert B\rvert=\lvert A\rvert$; and $\lvert n'\rvert=n'$ for a natural number $n'$ ([[def-finite-cardinality]]).

[L13] A subset of a finite set is finite, with cardinality at most that of the set ([[thm-subset-of-a-finite-set]], clauses 1 and 2).

[L14] A nonempty $S\subseteq\mathbb{Z}$ with an upper bound has a greatest element ([[lem-int-bounded-above-has-greatest]]).

[L15] Every nonempty subset $S\subseteq\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L16] A property that holds at $0$ and passes from every natural number to its successor holds at every natural number: if a property $P$ satisfies $P(0)$ and ($P(n) \Rightarrow P(\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \in \mathbb{N}$ ([[thm-induction-principle]]).

[L17] For all $x,y,c\in\mathbb{N}$ with $c\ne 0$: if $x\cdot c=y\cdot c$ then $x=y$ ([[lem-nat-mult-cancellative]]).

[L18] Integers $x$ and $y$ are coprime when $\gcd(x,y)=1$; $x$ and $1$ are coprime for every integer $x$, since $\gcd(x,1)=1$, and the relation is symmetric ([[def-coprime]]).

## Proof

**Proof technique:** direct.

1.1 A step $i$ of a diagonal path joins the two heights $h(i-1)$ and $h(i)$, which differ by exactly $1$; writing $c$ for the smaller of them, the step lies above level $0$ exactly when $c\ge0$, hence below level $0$ exactly when $c\le-1$. For an up step $c=h(i-1)$ and for a down step $c=h(i)$, so the steps below level $0$ are the up steps starting at a height $\le-1$ together with the down steps ending at a height $\le-1$, and these two families are disjoint because a step cannot be both up and down. [F1]

1.2 Let $\beta(q)$ be the number of up steps of $q\in\mathcal{W}((0,0),(2n,0))$ starting at a height $\le-1$. The map $\Delta$ sending $w\in U$ to the diagonal path of length $2n$ from $(0,0)$ whose step word is $w_1w_2\cdots w_{2n}$, with $1$ read as an up step and $-1$ as a down step, is a bijection $U\to\mathcal{W}((0,0),(2n,0))$: the inverse prepends the entry $1$, and by [F1] and [L8] a word of length $2n$ over the two letters with exactly $n$ up letters is the step word of exactly one diagonal path of length $2n$ from $(0,0)$, whose height at the last index is $0$. Moreover $\kappa(w)=1+\beta(\Delta(w))$: writing $H(i)=\sum_{i'<i}w_{i'}$, the path $q=\Delta(w)$ has $h(i)=H(i+1)-1$ for $0\le i\le 2n$ and its step $i$ carries the letter $w_i$, so the position $i=0$ always contributes to $\kappa(w)$ because $w_0=1$ and $H(0)=0$, while a position $i\ge1$ with $w_i=1$ contributes exactly when $H(i)\le0$, that is exactly when $h(i-1)\le-1$. Finally $U$ is finite with $\lvert U\rvert=\binom{2n}{n}$, since deleting the entry at the position $0$ is a bijection from $U$ onto the words of length $2n$ over $\{1,-1\}$ with exactly $n$ entries $-1$, and those correspond by [L7], [L9] and [L12] to the $n$-element subsets of a $2n$-element set. [F1, L7, L8, L9, L12]

1.3 Fix $a\in W$ and let $t_0<t_1<\dots<t_n$ be the positions of $a$ carrying the entry $1$, extended to all integers by $t_{l+n+1}:=t_l+(2n+1)$. Put $b_l:=S_a(t_{l+1})-S_a(t_l)$. Then $b_{l+n+1}=b_l$, because $S_a(t_{l}+2n+1)=S_a(t_l)+\lVert a\rVert$ by [F3], so $b$ is determined by $b_0,\dots,b_n$ and is a word of length $n+1$ of integers; its weight is $\lVert b\rVert=S_a(t_{n+1})-S_a(t_0)=\lVert a\rVert$, which is $1$ because $a$ has $n+1$ entries $1$ and $n$ entries $-1$. The one-step difference identity of [F3] for $b$ reads $S_b(l)-S_b(l-1)=b_{l-1}$, so induction on $r$ gives $S_b(l+r)-S_b(l)=S_a(t_{l+r})-S_a(t_l)$ for every $l\in\mathbb{Z}$ and every $r\in\mathbb{N}$. [F3, L16]

2.1 For $q\in\mathcal{W}((0,0),(2n,0))$ the steps below level $0$ number $2\beta(q)$, so the steps above level $0$ number $2n-2\beta(q)$ with $0\le\beta(q)\le n$. Send a down step $i$ with $c:=h(i)\le-1$ to $\psi(i):=$ the least index $i'>i$ with $h(i')\ge c+1$, which exists by [L15] because $h(2n)=0\ge c+1$; then $h(\psi(i)-1)\le c$ and $h(\psi(i))\ge c+1$ differ by $1$, so $h(\psi(i)-1)=c$ and $h(\psi(i))=c+1$ and $\psi(i)$ is an up step starting at height $c\le-1$. The map is injective: if $\psi(i_1)=\psi(i_2)=i'$ then $h(i_1)=h(i'-1)=h(i_2)$, and if moreover $i_1<i_2$ then $i_2-1>i_1$ with $h(i_2-1)=c+1$, so $\psi(i_1)\le i_2-1<\psi(i_2)$, a contradiction. It is surjective: given an up step $i'$ with $c:=h(i'-1)\le-1$, the set of $j\le i'-1$ with $h(j)\ge c+1$ contains $0$ and is bounded above, so by [L14] it has a greatest element $j_0$; then $h(j_0)=c+1$ and $h(j_0+1)=c$, so $i:=j_0+1$ is a down step with $h(i)=c\le-1$, every index strictly between $i$ and $i'$ has height $\le c$, and $\psi(i)=i'$. So the two families of step 1.1 are equinumerous by [L12], and [L10] adds them; the number of up steps of $q$ is $n$ by [F1] since $h(2n)=0$, so $\beta(q)\le n$. [F1, L10, L12, L14, L15, step 1.1]

2.2 The members of the orbit of $a$ that lie in $U$ are exactly the $n+1$ pairwise distinct words $\sigma^{t_l}a$ with $0\le l\le n$, and $\kappa(\sigma^{t_l}a)$ takes each of the values $1,\dots,n+1$ for exactly one such $l$. Since $\lVert a\rVert=1$ and $1$ is coprime to $2n+1$ by [L18], [L2] makes the stabiliser trivial, so the $2n+1$ words $\sigma^{j}a$ with $0\le j\le 2n$ are pairwise distinct and form the orbit; the entry of $\sigma^{j}a$ at the position $0$ is $a_{j\bmod(2n+1)}$, which is $1$ exactly for $j\in\{t_0,\dots,t_n\}$. For such a $j=t_l$, [L5] gives $\sum_{i'<i}(\sigma^{t_l}a)_{i'}=S_a(t_l+i)-S_a(t_l)$, and the positions $i$ with $0\le i\le 2n$ at which $\sigma^{t_l}a$ carries the entry $1$ are exactly those with $t_l+i=t_{l+r}$ for some $r$ with $0\le r\le n$, because $t_l<t_{l+1}<\dots<t_{l+n}<t_l+2n+1$ and the integers whose residue carries the entry $1$ are exactly the $t_j$. Hence $\kappa(\sigma^{t_l}a)=\lvert\{\,r:0\le r<n+1,\ S_a(t_{l+r})\le S_a(t_l)\,\}\rvert$, which by step 1.3 is $\lvert\{\,r:0\le r<n+1,\ S_b(l+r)\le S_b(l)\,\}\rvert$; and [L1] applied to $b$, of length $n+1$ and weight $1$, says that this is a bijection from $\{0,\dots,n\}$ onto $\{1,\dots,n+1\}$. [F3, L1, L2, L3, L5, L18, step 1.3]

3.1 For $1\le k'\le n+1$ put $I_{k'}:=\{\,w\in U : \kappa(w)=k'\,\}$. By step 2.2, $\kappa$ takes values in $\{1,\dots,n+1\}$ on $U$ and each orbit meets each $I_{k'}$ in exactly one word, so $U$ is the union of the pairwise disjoint sets $I_{1},\dots,I_{n+1}$, and for each pair $k',k''$ the rule sending $w\in I_{k'}$ to the unique member of its orbit lying in $I_{k''}$ is a bijection, the orbits being the classes of an equivalence relation by [L4]. Hence all $n+1$ sets have the same cardinality, and by [L10], [L11], [L12] and [L13] we get $(n+1)\lvert I_{1}\rvert=\lvert U\rvert=\binom{2n}{n}$, which is $(n+1)C_n$ by [L6]; cancelling the nonzero factor $n+1$ by [L17] gives $\lvert I_{k'}\rvert=C_n$ for every $k'$. [L4, L6, L10, L11, L12, L13, L17, step 1.2, step 2.2]

4.1 By step 2.1 a path $q\in\mathcal{W}((0,0),(2n,0))$ has $2n-2\beta(q)$ steps above level $0$, an even number, and $0\le\beta(q)\le n$, so the count is $2k$ for exactly one $k$ with $0\le k\le n$, namely $k=n-\beta(q)$. By step 1.2 the bijection $\Delta$ carries $\{\,w\in U : \kappa(w)=n-k+1\,\}$ onto $\mathcal{F}_{n,k}$, since $\kappa(w)=1+\beta(\Delta(w))$ and $\beta=n-k$; and by step 3.1 that set has exactly $C_n$ elements, so $\lvert\mathcal{F}_{n,k}\rvert=C_n$ by [L12]. At $n=1$ the two paths from $(0,0)$ to $(2,0)$ have height sequences $0,1,0$ and $0,-1,0$, with two steps above level $0$ and none respectively, so each of $k=1$ and $k=0$ is realised once, and $C_1=1$. [F1, F2, L12, step 1.2, step 2.1, step 3.1] ∎

## Remarks

- **This is not a corollary of the cycle lemma as that lemma is stated here.** The
  cycle lemma counts the cyclic shifts all of whose partial sums are positive, and
  for weight $1$ that is exactly one shift; Chung–Feller needs every shift sorted
  by how many of its partial sums fail to rise, which is the strictly finer
  statement
  [[lem-shifts-of-a-weight-one-word-realise-each-count-of-nonpositive-partial-sums-once]].

- **Where the blocking is spent.** The word $b$ records only the jumps of $S_a$
  between consecutive positions carrying the entry $1$. That is what turns a
  statement about the $n+1$ shifts of $a$ beginning with $1$ into a statement about
  all $n+1$ shifts of a word of length $n+1$, which is the form the transversal
  lemma is stated in.

- **Why the steps split evenly below the axis.** The pairing of step 2.1 matches
  each descent to level $c\le-1$ with the next ascent from $c$, and it is a
  bijection only because the path ends at height $0$: with a free right endpoint a
  descent below the axis need never be undone, and the count of steps below the
  axis would not be even.
