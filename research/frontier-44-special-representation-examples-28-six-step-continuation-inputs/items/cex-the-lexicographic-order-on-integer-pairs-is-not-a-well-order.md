---
id: cex-the-lexicographic-order-on-integer-pairs-is-not-a-well-order
kind: counterexample
title: "The lexicographic order on $\\mathbb{Z}\\times\\mathbb{Z}$ is not a well-order"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 1
deps: [def-well-order, def-cartesian-product, def-ordered-pair, def-integers,
       def-int-order, thm-int-ordered-ring, thm-int-comm-ring,
       def-int-operations, lem-nat-embeds-int, thm-omega-is-peano-system,
       def-natural-numbers]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "A. Marks, Set Theory (Berkeley lecture notes, 2026)"
      url: "https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf"
      locator: "Section 5, Exercise 5.9 and the remark that lexicographic orders on $\\alpha\\times\\beta$ are well-orders only for ordinals $\\alpha,\\beta$"
    - title: "J. T. Moore, MATH 6870: Set Theory (Cornell lecture notes)"
      url: "https://pi.math.cornell.edu/~justin/Limited2Cornell/lecture_notes_historic.pdf"
      locator: "Section 5 (lexicographic products of well-orders versus arbitrary linear orders)"
verification:
  precheck: pass
---

## Statement refuted

**Refuted claim:** the lexicographic order $\prec$ on $\mathbb{Z}\times\mathbb{Z}$,
defined by $(a,b)\prec(c,d)$ if and only if $a<c$, or $a=c$ and $b<d$
([[def-int-order]]), is a well-order ([[def-well-order]]).

The order $\prec$ is a total order: it is the lexicographic order of two total
orders, and it is proved below from the totality of the order of $\mathbb{Z}$.
The nonempty subset $\{0\}\times\mathbb{Z}$ nevertheless has no $\prec$-least
element. For every integer $n$ the element $(0,n+(-1))$ already lies in the
subset, and $n+(-1)<n\ \text{in}\ \mathbb{Z}$, so $(0,n+(-1))\prec(0,n)$: every
member of the column is strictly above another member. Hence a total order here
fails the least-element clause of [[def-well-order]], and it is not a well-order.
No choice principle is used anywhere in the argument.

## Facts & Assumptions

**Given:** The integers $\mathbb{Z}$ with their order and ring operations, the lexicographic relation $\prec$ on the set $\mathbb{Z}\times\mathbb{Z}$ defined in the statement, and the axioms of ZF.

[F1] Integers $x=[(a,b)]$ and $y=[(c,d)]$ satisfy $x\le y$ if and only if $a+d\le b+c$ in $\mathbb{N}$; $x<y$ means $x\le y$ and $x\ne y$; and on representatives $0<[(a,b)]$ holds exactly when $b<a$ ([[def-int-order]]).

[F2] The relation of [[def-int-order]] is well defined and a total order on $\mathbb{Z}$, compatible with addition: $x\le y$ implies $x+z\le y+z$ for all integers $x,y,z$, and its strict part is irreflexive and transitive ([[thm-int-ordered-ring]]).

[F3] $(\mathbb{Z},+,\cdot,0,1)$ with the operations of [[def-int-operations]] is a commutative ring with multiplicative identity, in which every element $x$ has the additive inverse $-x$, so $x+(-x)=0$, $x+0=x$, and addition is associative and commutative ([[thm-int-comm-ring]], [[def-int-operations]]).

[F4] The canonical embedding of $\mathbb{N}$ in $\mathbb{Z}$, written $n\mapsto[(n,0)]$, is injective and preserves addition, multiplication and order; its image is exactly the set of nonnegative integers, so the image of every natural is nonnegative and every integer $x\ge0$ is the image of a unique natural ([[lem-nat-embeds-int]]).

[F5] In $\mathbb{N}$ one has $1=\sigma(0)$, and $\sigma(0)\ne0$; thus $1\ne0$ in $\mathbb{N}$ ([[def-natural-numbers]], [[thm-omega-is-peano-system]]).

[F6] A well-order on a set $W$ is a total order in which every nonempty $S\subseteq W$ has a least element; equivalently, in the strict presentation, a relation that is irreflexive, transitive, trichotomous, and such that every nonempty $S\subseteq W$ has an element $\ell$ with no $s\in S$ satisfying $s<\ell$ ([[def-well-order]]).

[F7] $z\in A\times B$ holds if and only if $z=(a,b)$ for some $a\in A$ and some $b\in B$, and the ordered pair is $(a,b)=\{\{a\},\{a,b\}\}$, so a pair with equal coordinates $a=c$, $b=d$ equals $(c,d)$ ([[def-cartesian-product]], [[def-ordered-pair]]).

## Counterexample

**Proof technique:** direct.

1.1 The relation $\prec$ is irreflexive: $(a,b)\prec(a,b)$ would require $a<a$, or $a=a$ and $b<b$, and both alternatives fail because the strict order of $\mathbb{Z}$ is irreflexive. [F1, F2]

1.2 At least one of $\prec$, $=$, $\succ$ links two pairs $(a,b)$ and $(c,d)$: by totality of the order of $\mathbb{Z}$ either $a<c$, or $a=c$, or $c<a$; in the first case $(a,b)\prec(c,d)$, in the last $(c,d)\prec(a,b)$, and in the middle case totality of the order of $\mathbb{Z}$ decides between $b<d$, $b=d$ and $d<b$, giving $(a,b)\prec(c,d)$, $(a,b)=(c,d)$, and $(c,d)\prec(a,b)$ respectively. [F1, F2, F7]

1.3 The relation $\prec$ is transitive: if $(a,b)\prec(c,d)$ and $(c,d)\prec(e,f)$, then by the definition of $\prec$ either $a<c$, or $a=c$ and $b<d$, and either $c<e$, or $c=e$ and $d<f$. If $a<c$ then $c\le e$ in both second alternatives, so $a<e$ by transitivity of the order of $\mathbb{Z}$; if $a=c$ and $b<d$, then $c<e$ gives $a<e$, while $c=e$ gives $a=e$ together with $b<d<f$, hence $b<f$. In every case $(a,b)\prec(e,f)$. [F1, F2]

1.4 The set $\{0\}\times\mathbb{Z}$ is a nonempty subset of $\mathbb{Z}\times\mathbb{Z}$, and its elements are exactly the pairs $(0,n)$ with $n\in\mathbb{Z}$; for instance $(0,0)$ belongs to it. [F7]

1.5 $0<1$ in $\mathbb{Z}$: the integer $1$ is $[(1,0)]$ and $0$ is $[(0,0)]$ by the operations of [F3]; since $1=\sigma(0)\ne0$ in $\mathbb{N}$, the representatives $[(1,0)]$ and $[(0,0)]$ are distinct, because the canonical embedding $n\mapsto[(n,0)]$ is injective by [F4]; and $[(1,0)]$ lies in the image of that embedding, which is the set of nonnegative integers, so $0\le1$ in $\mathbb{Z}$; therefore $0<1$ by [F1]. [F1, F2, F3, F4, F5]

2.1 At most one of the three alternatives holds: $(a,b)\prec(c,d)$ together with $(a,b)=(c,d)$ would substitute to $(a,b)\prec(a,b)$, excluded by step 1.1; the same applies to $(c,d)\prec(a,b)$ together with equality; and $(a,b)\prec(c,d)$ together with $(c,d)\prec(a,b)$ is impossible, since the definition of $\prec$ leaves four combinations: $a<c$ with $c<a$; $a<c$ with $c=a$ and $d<b$; $a=c$ and $b<d$ with $c<a$; and $a=c$ and $b<d$ with $c=a$ and $d<b$; the first three contradict trichotomy of the order of $\mathbb{Z}$, and the fourth gives both $b<d$ and $d<b$. [step 1.1, F1, F2]

2.2 $-1<0$ in $\mathbb{Z}$: adding the integer $-1$ to both sides of $0\le1$ from step 1.5 gives $0+(-1)\le1+(-1)$, that is $-1\le0$; and $-1\ne0$, because $-1=0$ would give $1=1+0=1+(-1)=0$, contradicting $1\ne0$; hence $-1<0$. [step 1.5, F1, F2, F3]

3.1 For every integer $n$ one has $n+(-1)<n$: adding $n$ to $-1\le0$ gives $n+(-1)\le n+0=n$; and $n+(-1)\ne n$, because equality would give $-1=(n+(-1))+(-n)=n+(-n)=0$; so $n+(-1)<n$. [step 2.2, F1, F2, F3]

4.1 No member of $\{0\}\times\mathbb{Z}$ is $\prec$-least: given $(0,n)$ in the set, the integer $n+(-1)$ exists in $\mathbb{Z}$ and $(0,n+(-1))$ again lies in $\{0\}\times\mathbb{Z}$ by step 1.4, with $0=0$ and $n+(-1)<n$ by step 3.1, so $(0,n+(-1))\prec(0,n)$: every member of the subset has a strictly smaller member of the subset below it. [step 1.4, step 3.1, F1, F3, F7]

5.1 The relation $\prec$ is irreflexive and transitive by steps 1.1 and 1.3, and trichotomous by steps 1.2 and 2.1, so it is the strict presentation of a total order on $\mathbb{Z}\times\mathbb{Z}$; the set $\{0\}\times\mathbb{Z}$ is nonempty by step 1.4 and has no element $\ell$ with no $s\prec\ell$, by step 4.1; hence the least-element clause of a well-order fails and $\prec$ is not a well-order on $\mathbb{Z}\times\mathbb{Z}$. The refuted claim is therefore false. [step 1.1, step 1.2, step 1.3, step 2.1, step 4.1, F6] ∎
