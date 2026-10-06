---
id: thm-skolem-construction-produces-a-steiner-triple-system
kind: theorem
title: "Skolem's construction gives a Steiner triple system of order $6m+1$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-steiner-systems-and-steiner-triple-systems, def-two-design, def-integers-modulo-n, thm-integers-modulo-n-basic-algebra, thm-standard-representatives-modulo-n]
proof_strategy: direct
sources:
  references:
    - title: "Jonathan Davidson, Steiner Triple Systems, Skolem Construction"
      url: "https://jjdavidson.github.io/notes/design-theory/03steiner-triple.html"
---

## Statement

For every integer $m\ge1$, the following explicit construction gives a Steiner triple system of order $6m+1$. Let $Q=\{0,\ldots,2m-1\}$, interpreting its addition modulo $2m$, and let $I=\mathbb Z/3$. Define a permutation $\pi:Q\to Q$ by $\pi(2a)=a$ and $\pi(2a+1)=m+a$ for $0\le a<m$, and define $x\circ y=\pi((x+y)\bmod 2m)$. On the point set $(Q\times I)\cup\{\infty\}$, take the following three families of blocks, with layer arithmetic in $I$:

- $\{(a,0),(a,1),(a,2)\}$ for $0\le a<m$;
- $\{\infty,(m+a,i),(a,i+1)\}$ for $0\le a<m$ and $i\in I$;
- $\{(x,i),(y,i),(x\circ y,i+1)\}$ for each two-element subset $\{x,y\}\subseteq Q$ and $i\in I$.

## Facts & Assumptions

**Given:** An integer $m\ge1$, the point set and block families in the Statement.

[F1] Standard representatives give $|Q|=2m$ and $|I|=3$; translation modulo $2m$ is a bijection ([[thm-standard-representatives-modulo-n]], [[thm-integers-modulo-n-basic-algebra]]).

[F2] A collection of three-element blocks on $v>3$ points, in which every pair of distinct points occurs in exactly one block, is a Steiner triple system ([[def-two-design]], [[def-steiner-systems-and-steiner-triple-systems]]).



**Proof technique:** direct.

## Proof

1.1 The even and odd representatives are mapped bijectively by $\pi$ to $A=\{0,\ldots,m-1\}$ and $B=\{m,\ldots,2m-1\}$ respectively. Thus $\pi$ is a permutation. By [F1], for each $x\in Q$ the map $z\mapsto x\circ z$ is a bijection. The operation is commutative, and its diagonal is $a\circ a=a$ and $(m+a)\circ(m+a)=a$ for $0\le a<m$, since the corresponding sums modulo $2m$ are both $2a$. Denote these diagonal values by $d(x)=x\circ x$. [F1, given, algebra]

1.2 Each listed block has three distinct points. For the third family, $x\ne y$ makes the two layer-$i$ points distinct, while the last point has layer $i+1\ne i$. The first and second families plainly have three distinct points. Blocks of the three families cannot coincide: infinity distinguishes the second, and a first-family block uses three layers, while a third-family block uses exactly two. In the third family the layer containing two points uniquely determines $i$ and then $\{x,y\}$, so its indexing produces no duplicate blocks. [given, algebra]

1.3 A pair containing $\infty$ occurs only in a second-family block. If its other point is $(m+a,i)$, its unique block is $\{\infty,(m+a,i),(a,i+1)\}$; if its other point is $(a,j)$ with $a\in A$, its unique block is $\{\infty,(m+a,j-1),(a,j)\}$. The two cases partition all finite points and their indices are unique. [given, algebra]

1.4 A pair of distinct finite points in the same layer, $(x,i),(y,i)$, has $x\ne y$ and occurs in the unique third-family block indexed by $\{x,y\},i$. Neither of the other families has two finite points in the same layer, and the repeated layer in a third-family block is uniquely determined. [given, algebra]

2.1 For a finite pair in different layers, there is a unique orientation $((x,i),(y,i+1))$, because the layer set has three elements. A third-family block containing this pair must have repeated layer $i$: a block repeated at $i+1$ uses layers $i+1,i+2$, and one repeated at $i+2$ uses layers $i+2,i$. Such a block therefore has the form $\{(x,i),(z,i),(y,i+1)\}$, where $z\ne x$ and $x\circ z=y$. Step 1.1 gives a unique solution $z$. It satisfies $z=x$ exactly when $y=d(x)$, so the pair occurs in exactly one third-family block when $y\ne d(x)$, and in none when $y=d(x)$. [step 1.1, given, algebra]

3.1 If $y=d(x)$ and $x\in A$, then $y=x$ and the pair lies in the unique first-family block for $x$. If $y=d(x)$ and $x=m+a\in B$, then $y=a$ and the pair lies in the unique second-family block indexed by $a,i$. Conversely, the different-layer finite pairs of every first-family block have the oriented form $(a,i),(a,i+1)$, and the unique finite pair in every second-family block has the oriented form $(m+a,i),(a,i+1)$; these are precisely the two diagonal cases just described. Thus neither family duplicates the third-family pairs from step 2.1, and the diagonal pairs each occur once. [step 1.1, step 2.1, given, algebra]

4.1 Steps 1.3, 1.4, 2.1 and 3.1 exhaust every pair of distinct points and prove unique block coverage. The point set has $3(2m)+1=6m+1$ points by [F1], and $6m+1\ge7>3$. Step 1.2 and [F2] now establish the claimed Steiner triple system. [step 1.2, step 1.3, step 1.4, step 2.1, step 3.1, F1, F2, algebra] ∎
