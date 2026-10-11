---
id: cex-the-collapsing-recursion-has-no-solution-on-the-integers
kind: counterexample
title: "The collapsing recursion has no solution on $(\\mathbb{Z},<)$"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 5
deps: [thm-transfinite-recursion, thm-mostowski-collapse, def-well-order,
       def-integers, def-int-order, thm-int-ordered-ring, thm-int-comm-ring,
       def-int-operations, def-axiom-of-foundation,
       def-axiom-schema-of-replacement, def-function, def-natural-numbers,
       lem-nat-embeds-int, lem-nat-order-is-membership]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "A. Marks, Set Theory (Berkeley lecture notes, 2026)"
      url: "https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf"
      locator: "Section 6 (wellfounded relations) and Section 7 ($V_\\alpha$ and rank); Exercise 2.5 (no finite $\\in$-cycles)"
    - title: "J. T. Moore, MATH 6870: Set Theory (Cornell lecture notes)"
      url: "https://pi.math.cornell.edu/~justin/Limited2Cornell/lecture_notes_historic.pdf"
      locator: "Section 4, Theorem 4.1 and Corollary 6.4 (rank functions exist exactly for well-founded relations)"
verification:
  precheck: pass
---

## Statement refuted

**Refuted claim:** the recursive equation $F(a)=\{F(b):b<a\}$ has a solution for
every total order, so the theorem schema [[thm-transfinite-recursion]] and its
corollary [[thm-mostowski-collapse]] need only a linear order in place of a
well-order ([[def-well-order]]).

The witness is $(\mathbb{Z},<)$ with its usual order ([[def-int-order]]). There
is **no** function $F$ with $F(a)=\{F(b):b<a\}$ for every $a\in\mathbb{Z}$: if
there were, then $F(a)\in F(b)$ whenever $a<b$, and the values along the
descending sequence $-1>-2>-3>\cdots$ would form a set $S$ (by Replacement) in
which each element $x_{n+1}=F(-(n+2))$ is a member of the previous one
$x_n=F(-(n+1))$, so $x_{n+1}\in x_n\cap S$ for every $n$; Foundation applied to
the nonempty set $S$ forbids exactly this. So the least-element hypothesis
cannot be weakened to totality, and the failure is precisely the infinite
descending sequence $-1>-2>-3>\cdots$ that no well-order admits. The argument
uses only Foundation, Replacement and the order of $\mathbb{Z}$; no choice
principle is used.

## Facts & Assumptions

**Given:** The integers $\mathbb{Z}$ with their order and ring operations, ZF with Foundation, and the supposition that a function $F$ satisfies $F(a)=\{F(b):b<a\}$ for every $a\in\mathbb{Z}$. Write $x_n:=F\bigl(-(n+1)\bigr)$ for $n\in\omega=\mathbb{N}$, where $n+1=\sigma(n)$ in $\mathbb{N}$ and $-(n+1)$ is the additive inverse of the image of $n+1$ in $\mathbb{Z}$.

[F1] Integers are ordered by the relation of [[def-int-order]]: $x<y$ means $x\le y$ and $x\ne y$ ([[def-int-order]]).

[F2] That relation is a total order on $\mathbb{Z}$ compatible with addition: $x\le y$ implies $x+z\le y+z$, and consequently $x<y$ implies $-y<-x$ ([[thm-int-ordered-ring]]).

[F3] $(\mathbb{Z},+,\cdot,0,1)$ is a commutative ring in which every element has an additive inverse, with the operations of [[def-int-operations]] ([[thm-int-comm-ring]], [[def-int-operations]]).

[F4] The canonical embedding of $\mathbb{N}$ in $\mathbb{Z}$, written $n\mapsto[(n,0)]$, is injective and preserves addition and order, and its image is the set of nonnegative integers ([[lem-nat-embeds-int]]).

[F5] $\omega=\mathbb{N}$ with $0=\varnothing$ and $\sigma(n)=n\cup\{n\}$ ([[def-natural-numbers]]).

[F6] For every natural $n$ one has $n<\sigma(n)=n+1$, hence $n+1<n+2$ ([[lem-nat-order-is-membership]]).

[F7] If a formula determines one set $w$ for each $z$ in a set $A$, then the collection of those $w$ is a set: this is the Axiom Schema of Replacement ([[def-axiom-schema-of-replacement]]).

[F8] Axiom of Foundation: every set $S$ with at least one member has a member $s$ with $s\cap S=\varnothing$ ([[def-axiom-of-foundation]]).

[F9] Transfinite recursion: for a well-order $(W,<)$ and a class function $G$ there is exactly one $F$ on $W$ with $F(a)=G(F\restriction W_{<a})$ ([[thm-transfinite-recursion]]).

[F10] Every well-order is order isomorphic to exactly one ordinal, its order type, via the collapsing map $F(a)=\{F(b):b<a\}$ ([[thm-mostowski-collapse]]).

[F11] A function is a relation that never assigns two values to one argument; $F$ above is assumed to be such a relation with domain $\mathbb{Z}$ ([[def-function]]).

## Counterexample

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that there is a function $F$ with $F(a)=\{F(b):b<a\}$ for every $a\in\mathbb{Z}$. [assume-contra, F11]

1.2 For every $n\in\omega$ the integers satisfy $-(n+2)<-(n+1)$: the naturals satisfy $n+1<n+2$ by [F6], so the corresponding integers $[(n+1,0)]$ and $[(n+2,0)]$ satisfy $[(n+1,0)]\le[(n+2,0)]$ by order preservation of the embedding $n\mapsto[(n,0)]$, with the values distinct because that embedding is injective while $n+1\ne n+2$, hence $[(n+1,0)]<[(n+2,0)]$; applying negation reversal then gives $-[(n+2,0)]<-[(n+1,0)]$, which is the displayed inequality. [F2, F3, F4, F5, F6]

2.1 For all integers $a<b$ one has $F(a)\in F(b)$: by the supposition $F(b)=\{F(c):c<b\}$, and $F(a)$ is one of the members of that set because $a<b$. [step 1.1]

2.2 The set $S=\{x_n:n\in\omega\}$ exists: $n\mapsto x_n$ is given by the formula $w=F(-(n+1))$, which determines one $w$ for each $n\in\omega$ because $F$ is a function, so Replacement makes the image a set. [step 1.1, F7, F11]

3.1 For every $n\in\omega$ one has $x_{n+1}\in x_n$: step 1.2 puts $-(n+2)<-(n+1)$, so step 2.1 applied to the pair $a=-(n+2)<b=-(n+1)$ gives $F(-(n+2))\in F(-(n+1))$, that is $x_{n+1}\in x_n$. [step 2.1, step 1.2]

3.2 The set $S$ is nonempty, since $x_0=F(-1)$ is one of its members; so Foundation applies to $S$ and supplies $x\in S$ with $x\cap S=\varnothing$. [step 2.2, F8]

4.1 Since $x\in S$, there is $m\in\omega$ with $x=x_m$, and then step 3.1 gives $x_{m+1}\in x_m\cap S$, because $x_{m+1}\in x_m$ and $x_{m+1}\in S$; this contradicts $x_m\cap S=\varnothing$ from step 3.2. [step 3.1, step 3.2]

5.1 The supposition of step 1.1 is therefore refuted: there is no function $F$ with $F(a)=\{F(b):b<a\}$ for every $a\in\mathbb{Z}$. So a solution of the collapsing recursion is not available on the total order $(\mathbb{Z},<)$, and the least-element hypothesis of [F9] and [F10] cannot be weakened to totality; the failure is the infinite descending sequence $-1>-2>-3>\cdots$, whose values would form the set $S$ that Foundation forbids. The argument used only Foundation, Replacement and the order of $\mathbb{Z}$; no choice principle was used. [step 1.1, step 3.1, step 4.1, F1, F2, F8, F9, F10, discharge-contradiction] ∎
