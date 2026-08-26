---
id: thm-bose-construction-produces-a-steiner-triple-system
kind: theorem
title: "Bose's construction gives a Steiner triple system of order $6m+3$ for $m\\ge1$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-steiner-systems-and-steiner-triple-systems,
       def-integers-modulo-n,
       def-addition-and-multiplication-modulo-n,
       thm-integers-modulo-n-basic-algebra,
       thm-standard-representatives-modulo-n]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jonathan Davidson, Steiner Triple Systems"
      url: "https://jjdavidson.github.io/notes/design-theory/03steiner-triple.html"
---

## Statement

Let $m\ge1$ be a natural number, put $n:=2m+1$, and write $Q:=\mathbb Z/n$. On
$Q$ define
$$x\circ y:=\Bigl[\frac{n+1}{2}\Bigr]_n(x+y).$$
Let the point set be $Q\times(\mathbb Z/3)$. For each $x\in Q$, let
$$V_x:=\{(x,[0]_3),(x,[1]_3),(x,[2]_3)\},$$
and for each $i\in\mathbb Z/3$ and each two-element subset $\{x,y\}\subseteq Q$,
let
$$B_{\{x,y\},i}:=\{(x,i),(y,i),(x\circ y,i+[1]_3)\}.$$
This is well defined because $x\circ y=y\circ x$. Then the blocks $V_x$ and
$B_{\{x,y\},i}$ form a Steiner triple system on $6m+3$ points.

## Facts & Assumptions

**Given:** A natural number $m\ge1$, the odd number $n:=2m+1$, the quotient sets $Q:=\mathbb Z/n$ and $\mathbb Z/3$, and the blocks just defined.

[L1] The quotient set $\mathbb Z/n$ has exactly $n$ elements and $\mathbb Z/3$ has exactly $3$ elements ([[thm-standard-representatives-modulo-n]]).

[L2] Addition and multiplication in $\mathbb Z/n$ and $\mathbb Z/3$ are well defined and satisfy the ordinary associative, commutative, and distributive laws ([[thm-integers-modulo-n-basic-algebra]], [[def-addition-and-multiplication-modulo-n]]).

[L3] A Steiner triple system of order $v$ is a $2$-$(v,3,1)$ design ([[def-steiner-systems-and-steiner-triple-systems]]).

## Proof

**Proof technique:** direct.

1.1 In $\mathbb Z/n$ one has $[2]_n[(n+1)/2]_n=[1]_n$, because $2\cdot(n+1)/2=n+1\equiv1\pmod n$. Therefore $x\circ x=x$ for every $x\in Q$, and if $x\circ z=x\circ z'$ then multiplying by $[2]_n$ gives $z=z'$. So for each fixed $x$, the map $z\mapsto x\circ z$ is a bijection of $Q$. [L2, algebra]

1.2 By [L1], the point set $Q\times(\mathbb Z/3)$ has $3n=6m+3$ points. [L1, algebra]

1.3 There are $n$ vertical blocks $V_x$ and $3\binom n2$ blocks of the form $B_{\{x,y\},i}$. [L1, algebra]

1.4 A pair of points with the same first coordinate and different second coordinates lies in exactly one vertical block, namely $V_x$. No block of the form $B_{\{x,y\},i}$ contains such a pair, because its first two points have distinct first coordinates. [given, algebra]

1.5 A pair of points of the form $(x,i)$ and $(y,i)$ with $x\ne y$ lies in exactly one block of the form $B_{\{x,y\},i}$, because the unordered pair $\{x,y\}$ and the layer $i$ determine that block. No vertical block contains such a pair. [given, algebra]

2.1 A pair of points of the form $(x,i)$ and $(y,i+[1]_3)$ with $x\ne y$ lies in exactly one block of the form $B_{\{x,z\},i}$: by step 1.1 there is a unique $z\in Q$ with $x\circ z=y$, and $z\ne x$ because $x\circ x=x\ne y$. Distinct choices of $z$ would contradict the injectivity from step 1.1. [step 1.1, algebra]

3.1 Every unordered pair of distinct points falls into exactly one of the three cases from steps 1.4, 1.5, and 2.1, after swapping the pair if necessary to make the second coordinates differ by $[1]_3$. Hence every pair of distinct points lies in exactly one block. [step 1.4, step 1.5, step 2.1]

4.1 Every block has size $3$, and step 3.1 shows that the block family is a $2$-$(3n,3,1)$ design. Since $m\ge1$, one has $n\ge3$ and therefore $3<3n$, so [L3] applies and yields a Steiner triple system on $3n=6m+3$ points. [step 1.2, step 3.1, L3] ∎
