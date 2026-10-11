---
id: ex-an-explicit-well-ordering-of-the-integers
kind: example
title: "An explicit well-ordering of the integers: $0\\prec1\\prec-1\\prec2\\prec-2\\prec\\cdots$"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 2
deps: [def-well-order, def-initial-segment, def-integers, def-int-order,
       thm-int-ordered-ring, thm-int-comm-ring, def-int-operations, def-int-abs,
       lem-int-abs-properties, def-natural-numbers, def-nat-order,
       thm-nat-linear-order, thm-well-ordering-principle, lem-nat-embeds-int,
       thm-omega-is-peano-system, def-axiom-schema-of-separation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "A. Marks, Set Theory (Berkeley lecture notes, 2026)"
      url: "https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf"
      locator: "Section 3 (wellorderings; the explicit integer well-order and the failure of the usual integer order are verified locally)"
    - title: "J. T. Moore, MATH 6870: Set Theory (Cornell lecture notes)"
      url: "https://pi.math.cornell.edu/~justin/Limited2Cornell/lecture_notes_historic.pdf"
      locator: "Section 3 (definition of a well ordered set); Section 14 treats the explicit construction of $\\mathbb{Z}$"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
---

## Example

On the integers $\mathbb{Z}$ ([[def-integers]]) define

$$a\prec b \iff \bigl(|a|<|b|\bigr) \ \text{or}\ \bigl(|a|=|b|,\ a\ne b,\ 0<a\bigr),$$

where $|\cdot|$ is the integer absolute value ([[def-int-abs]]) and $<$ is the
order of [[def-int-order]]; explicitly
$0\prec1\prec-1\prec2\prec-2\prec\cdots$. Then $\prec$ is a well-order
([[def-well-order]]) of $\mathbb{Z}$: every nonempty $S\subseteq\mathbb{Z}$ has
a $\prec$-least element, namely the element of $S$ of least absolute value, the
positive one being preferred when both $\pm n$ occur; the initial segment
([[def-initial-segment]]) below $0$ is empty, and for $a\ne0$ the initial segment
below $a$ consists of $0$ and of every $\pm n$ with $1\le n<|a|$, together with
$-a$ when $a<0$. The usual order of $\mathbb{Z}$ is not a well-order of
$\mathbb{Z}$, so this is a different well-order of the same set. The relation is
given by one explicit formula and no choice principle is used.

## Facts & Assumptions

**Given:** The integers $\mathbb{Z}$ with their order, ring operations and absolute value, and the relation $\prec$ defined in the Example. No choice principle is assumed; every object below is produced by a formula.

[F1] Integer absolute value: $|a|=a$ when $a\ge0$ and $|a|=-a$ when $a\le0$, where $\le$ is the order of [[def-int-order]] and $-a$ is the additive inverse supplied by [[thm-int-comm-ring]] ([[def-int-abs]]).

[F2] Absolute value facts: $|a|\ge0$, and $|a|=0$ if and only if $a=0$ ([[lem-int-abs-properties]]).

[F3] On representatives, $x\le y$ means $a+d\le b+c$ in $\mathbb{N}$, $x<y$ means $x\le y$ and $x\ne y$, and $0<x$ holds exactly when $x\ne0$ together with $0\le x$; integers are ordered by [[def-int-order]] ([[def-int-order]]).

[F4] The relation of [[def-int-order]] is a total order on $\mathbb{Z}$, compatible with addition: $x\le y$ implies $x+z\le y+z$; its strict part is irreflexive, transitive and trichotomous ([[thm-int-ordered-ring]]).

[F5] $(\mathbb{Z},+,\cdot,0,1)$ with the operations of [[def-int-operations]] is a commutative ring with multiplicative identity, where $0=[(0,0)]$, $1=[(1,0)]$ and every element has the additive inverse $-[(a,b)]=[(b,a)]$; thus $x+(-x)=0$, $x+0=x$, $-(-x)=x$, and addition is associative and commutative ([[thm-int-comm-ring]], [[def-int-operations]]).

[F6] The canonical embedding of $\mathbb{N}$ in $\mathbb{Z}$, $n\mapsto[(n,0)]$, is injective and preserves addition, multiplication and order; its image is exactly the set of nonnegative integers. We write $n$ also for the integer $[(n,0)]$, so $\mathbb{N}$ is identified with the nonnegative integers, every integer $x\ge0$ is a unique natural number under this identification, and the order of $\mathbb{N}$ agrees with the integer order on these elements ([[lem-nat-embeds-int]]).

[F7] Natural order: $m\le n$ if and only if $m+k=n$ for some $k\in\mathbb{N}$, and this relation is a linear order, so for all naturals $m,n$ exactly one of $m<n$, $m=n$, $n<m$ holds ([[def-nat-order]], [[thm-nat-linear-order]]).

[F8] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[F9] For a well-order $(W,<)$ and $a\in W$, the initial segment is $W_{<a}=\{x\in W:x<a\}$ ([[def-initial-segment]]).

[F10] A well-order on a set $W$ is a total order in which every nonempty $S\subseteq W$ has a least element; in the strict presentation, a relation that is irreflexive, transitive, trichotomous, and such that every nonempty $S\subseteq W$ has an element $\ell$ with no $s\in S$ satisfying $s<\ell$ ([[def-well-order]]).

[F11] In $\mathbb{N}$ one has $1=\sigma(0)\ne0$ ([[def-natural-numbers]], [[thm-omega-is-peano-system]]).

[F12] A definable subcollection of a given set is a set; in particular a definable subcollection of $\mathbb{N}$ is a set ([[def-axiom-schema-of-separation]]).

## Verification

**Proof technique:** direct.

1.1 The relation $\prec$ is irreflexive: $a\prec a$ would require $|a|<|a|$, impossible because the strict order of $\mathbb{Z}$ is irreflexive, or $|a|=|a|$ together with $a\ne a$, which is false outright. [F1, F4]

1.2 Trichotomy: let $a\ne b$. Totality of the order of $\mathbb{Z}$ decides between $|a|<|b|$, $|a|=|b|$ and $|b|<|a|$; the first gives $a\prec b$ and the third gives $b\prec a$. In the middle case $|a|=|b|=x$ we have $x\ge0$ by [F2]; if $x=0$ then $a=b=0$ by [F2], contradicting $a\ne b$, so $x>0$, and exactly one of $0<a$, $0<b$ holds: if both held then $a=|a|=x=|b|=b$ by [F1], contradicting $a\ne b$, while if neither held then $a\le0$ and $b\le0$, so $|a|=-a$ and $|b|=-b$ by [F1] and $a=-x=b$, again contradicting $a\ne b$. Hence in the middle case exactly one of $a\prec b$, $b\prec a$ holds, and $a\ne b$ throughout. [F1, F2, F4]

1.3 Transitivity: suppose $a\prec b$ and $b\prec c$, so $|a|\le|b|\le|c|$ and, when the first strict alternative fails at a stage, the corresponding tie clause holds there. If $|a|<|b|$ then $|a|<|c|$ by transitivity of the order of $\mathbb{Z}$, so $a\prec c$. If $|a|=|b|$ with $a\ne b$ and $0<a$, then $a=|a|>0$ by [F1], so $|b|>0$ and $b\ne0$; were $0<b$ then $b=|b|=|a|=a$, contradicting $a\ne b$, so $b\le0$ by totality and therefore $b<0$; the tie clause of $b\prec c$ fails because it requires $0<b$, so $b\prec c$ must hold through $|b|<|c|$, whence $|a|<|c|$ and $a\prec c$. [F1, F2, F4]

1.4 Absolute values are nonnegative integers, and they determine the sign: for every integer $a$, $|a|\ge0$ by [F2], so $|a|=k$ for a unique natural $k$ under the identification of [F6], and $|a|=0$ exactly when $k=0$; if $|a|=m$ with $m\ne0$, then either $a\ge0$ and $a=|a|=m$ by [F1], or $a<0$ and $-a=|a|=m$, so $a=-m$ by [F5]. Moreover for $m\ne0$: $0<m$, because $m\ge0$ by [F2] while $m\ne0$, so $0<m$ by [F3]; and adding $-m$ gives $-m<0$ by [F4] and [F5]. [F1, F2, F3, F4, F5, F6]

1.5 The usual order of $\mathbb{Z}$ is not a well-order: $0<1$, because the integer $1=[(1,0)]$ is the image of the natural $1$ under the identification of [F6] and therefore nonnegative, so $0\le1$; and $1\ne0$ since the embedding is injective and $1\ne0$ in $\mathbb{N}$ by [F11]; hence $0<1$ by [F3]. Adding $-1$ to both sides gives $-1<0$ by [F4] and [F5]; adding an arbitrary integer $n$ gives $n+(-1)<n$. So the nonempty set $\mathbb{Z}$ has no $\le$-least element: for every $n\in\mathbb{Z}$ the integer $n+(-1)$ lies strictly below $n$. Hence $(\mathbb{Z},\le)$ is not a well-order in the sense of [F10]. [F3, F4, F5, F6, F10, F11]

2.1 Let $S\subseteq\mathbb{Z}$ be nonempty. The collection $K=\{k\in\mathbb{N}:|s|=k\ \text{for some}\ s\in S\}$, read through the identification of [F6], is a definable subcollection of $\mathbb{N}$, hence a set by [F12], and it is nonempty because every $|s|$ is a nonnegative integer and so equals a unique natural number by step 1.4. By [F8] the set $K$ has a least element $m$, so $m=|s_0|$ for some $s_0\in S$, and $m\le|s|$ for every $s\in S$: writing $|s|=k$ with $k\in K$ we have $m\le k$ in $\mathbb{N}$, which is the integer comparison $m\le k$ by [F6]. [step 1.4, F6, F8, F12]

2.2 The initial segments are as claimed. For $a=0$: no $b$ satisfies $b\prec0$, since the first clause would need $|b|<0$, excluded by $|b|\ge0$, and the second would need $|b|=0$, which gives $b=0$ and contradicts $b\ne0$; hence $W_{<0}=\varnothing$ by [F9]. For $a\ne0$ write $|a|=p$ with $p\ne0$ and $a=p$ or $a=-p$ by step 1.4. For any $b$, the first clause $|b|<|a|$ is equivalent to $k<p$, where $|b|=k$ under the identification of [F6]: if $k<p$ then $k<p$ as integers again by [F6], while if $k\ge p$ then $p\le k$ in $\mathbb{N}$ by [F7], which is the integer comparison $p\le k$, contradicting $|b|<|a|=p$. The integers of absolute value $k$ are exactly $k$ and $-k$ by step 1.4, so the first clause contributes $\{0\}\cup\{\pm n:1\le n<p\}$; the tie clause $|b|=|a|$, $b\ne a$, $0<b$ forces $b=|b|=p$ by [F1], which differs from $a$ exactly when $a=-p$, contributing $\{-a\}$ when $a<0$ and nothing when $a>0$. Hence $W_{<a}=\{0\}\cup\{\pm n:1\le n<p\}\cup\{-a\}$ for $a<0$ and $W_{<a}=\{0\}\cup\{\pm n:1\le n<p\}$ for $a>0$. [step 1.4, F1, F2, F4, F5, F6, F7, F9]

3.1 Case $m=0$ of step 2.1: some $s_0\in S$ has $|s_0|=0$, so $s_0=0$ by [F2], and $0$ is $\prec$-least in $S$: for $s\in S$ we have $|s|\ge0=|0|$, so either $|s|>|0|$, giving $0\prec s$ by the first clause, or $|s|=0$, giving $s=0$ by [F2]. [step 2.1, step 1.4, F1, F2, F6]

3.2 Case $m\ne0$ of step 2.1: then $0<m$ and $-m<0$ by step 1.4, and by step 2.1 there is $s_0\in S$ with $|s_0|=m$, so $s_0=m$ or $s_0=-m$ by step 1.4. If $m\in S$ put $\ell=m$; if $m\notin S$ put $\ell=-m$, which lies in $S$ because $s_0\in S$ and the alternative $s_0=m$ is excluded. In both cases $\ell\in S$ and $|\ell|=m$, and for every $s\in S$ step 2.1 gives $m\le|s|$ in the integer order: if $|s|>|\ell|$ then $\ell\prec s$ by the first clause, while if $|s|=|\ell|$ then $s=m$ or $s=-m$ by step 1.4, and either $s=\ell$, or $s=-m$ with $\ell=m$, in which case $\ell\ne s$ and $0<\ell$, so $\ell\prec s$ by the tie clause. Since $\prec$ is trichotomous by step 1.2, no $s\in S$ satisfies $s\prec\ell$: $\ell$ is $\prec$-least in $S$. [step 1.2, step 1.4, step 2.1, F1, F2, F3, F4, F5, F6]

4.1 Every nonempty $S\subseteq\mathbb{Z}$ has a $\prec$-least element: step 2.1 produces the natural $m$ of least absolute value, and steps 3.1 and 3.2 cover the cases $m=0$ and $m\ne0$. Together with irreflexivity, transitivity and trichotomy from steps 1.1 to 1.3 this exhibits $\prec$ as the strict presentation of a well-order of $\mathbb{Z}$; the initial segments are those computed in step 2.2; and the usual order of $\mathbb{Z}$ is not a well-order by step 1.5, so the usual order and the explicit well-order of the same set are different. The relation is given by one explicit formula and no object is selected at any stage, so no choice principle is used. [step 1.1, step 1.2, step 1.3, step 1.5, step 2.1, step 2.2, step 3.1, step 3.2, F10] ∎
