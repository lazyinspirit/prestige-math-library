---
id: prop-the-heisenberg-group-of-order-p-cubed-is-a-nonabelian-group-of-order-p-cubed
kind: proposition
title: "The Heisenberg multiplication is a group law, nonabelian, on a set of $p^3$ elements"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-heisenberg-group-of-order-p-cubed, def-group, thm-integers-modulo-n-basic-algebra, def-finite-cardinality, thm-product-rule, thm-z-mod-p-is-a-field, def-group-power, def-order-in-a-group, def-generated-subgroup]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. van Beek, Topics in Finite p-Groups, Definition 2.31"
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
    - title: "D. A. Craven, The Theory of p-Groups, Definition 3.3"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
pipeline_run: null
---

## Statement

Let $p$ be a prime. The multiplication
$(a,b,c)(a',b',c')=(a+a',b+b',c+c'+ab')$ makes the set $H_p$ a group with
identity $(0,0,0)$ and inverse $(a,b,c)^{-1}=(-a,-b,-c+ab)$; the group is not
abelian; and $\lvert H_p\rvert=p^3$. Moreover $(1,0,0)^{a}=(a,0,0)$,
$(0,1,0)^{b}=(0,b,0)$ and $(0,0,1)^{c}=(0,0,c)$ for all $a,b,c$, so those three
elements generate $H_p$ ([[def-generated-subgroup]]) and each has order $p$
([[def-order-in-a-group]], [[def-group-power]]).

## Facts & Assumptions

**Given:** A prime $p$ and the set $H_p$ with the multiplication above.

[F1] The Heisenberg group of order $p^3$ is the set $H_p=\{(a,b,c):a,b,c\in\mathbb Z/p\}$ with $(a,b,c)(a',b',c'):=(a+a',b+b',c+c'+ab')$ ([[def-heisenberg-group-of-order-p-cubed]]).

[F2] A group is a set with an associative operation having a two-sided identity and two-sided inverses ([[def-group]]).

[L1] For every $n\in\mathbb N$, $(\mathbb Z/n,+,[0]_n)$ is an abelian group, $(\mathbb Z/n,\cdot,[1]_n)$ is a commutative monoid, and multiplication distributes over addition on both sides ([[thm-integers-modulo-n-basic-algebra]]).

[L2] If $A$ and $B$ are finite then $A\times B$ is finite and $\lvert A\times B\rvert=\lvert A\rvert\cdot\lvert B\rvert$ ([[thm-product-rule]]).

[L3] $\lvert A\rvert$ is the unique natural number $n$ with $A\approx n$ ([[def-finite-cardinality]]).

[L4] For every prime $p$, $\mathbb Z/p$ is a field ([[thm-z-mod-p-is-a-field]]).

## Proof

**Proof technique:** direct.

1.1 Associativity: both $\bigl((a,b,c)(a',b',c')\bigr)(a'',b'',c'')$ and $(a,b,c)\bigl((a',b',c')(a'',b'',c'')\bigr)$ have first coordinate $a+a'+a''$, second coordinate $b+b'+b''$, and third coordinate $c+c'+c''+ab'+ab''+a'b''$, the two computations differing only in the order in which the three products are formed. [F1, L1, algebra]

1.2 The triple $(0,0,0)$ is a two-sided identity: $(a,b,c)(0,0,0)=(a,b,c+0+a\cdot0)=(a,b,c)$ and $(0,0,0)(a,b,c)=(a,b,0+c+0\cdot b)=(a,b,c)$. [F1, L1, algebra]

1.3 The triple $(-a,-b,-c+ab)$ is a two-sided inverse of $(a,b,c)$: the product in one order is $(0,0,c+(-c+ab)+a(-b))=(0,0,0)$, and in the other it is $(0,0,(-c+ab)+c+(-a)b)=(0,0,0)$. [F1, L1, algebra]

1.4 The quotient set $\mathbb Z/p$ has the $p$ distinct classes $[0]_p,\dots,[p-1]_p$, so it has $p$ elements. The underlying set of $H_p$ is the threefold product of those $p$-element sets, and [L2] therefore gives $\lvert H_p\rvert=p^3$. [F1, L2, L3, algebra]

1.5 The three displayed power formulas hold because $(a,0,0)(1,0,0)=(a+1,0,0+0+a\cdot0)=(a+1,0,0)$, $(0,b,0)(0,1,0)=(0,b+1,0+0+0\cdot1)=(0,b+1,0)$ and $(0,0,c)(0,0,1)=(0,0,c+1)$, so each power is obtained from the previous one by adding one in the relevant coordinate. [F1, L1, algebra]

2.1 By steps 1.1 to 1.3 the multiplication makes $H_p$ a group. [F2, step 1.1, step 1.2, step 1.3]

2.2 It is not abelian: $(1,0,0)(0,1,0)=(1,1,1)$ while $(0,1,0)(1,0,0)=(1,1,0)$, and these differ because $1\ne 0$ in $\mathbb Z/p$ for every prime $p$. [F1, L4, step 1.4]

3.1 Each of $(1,0,0)$, $(0,1,0)$ and $(0,0,1)$ has $p$-th power $(0,0,0)$ by step 1.5, hence order $p$ since each is not the identity; and $(a,0,0)(0,b,0)(0,0,c-ab)=(a,b,ab)(0,0,c-ab)=(a,b,c)$, so the three elements generate $H_p$. [L1, step 1.5, step 2.1, step 2.2] ∎

## Remarks

The verification of associativity is where the third coordinate earns its shape: the two bracketings produce the cross terms $ab'+ab''$ and $ab'+ab''$ respectively together with the common term $a'b''$, and they agree because multiplication in $\mathbb Z/p$ distributes over addition.
