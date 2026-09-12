---
id: lem-lc-probability-algebra-completeness
kind: lemma
title: Probability algebras, arbitrary joins and the countable chain condition
status: published
origin: pipeline
deps: [def-measure, thm-finite-and-countable-subadditivity-of-measures, thm-continuity-from-below-for-measures, def-boolean-algebra-for-stone-duality, def-complete-boolean-algebra-and-regular-open-sets, def-axiom-of-choice, lem-extended-reals-complete]
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Fuchino, Greenberg and Shelah, Models of real-valued measurability, section 1.2 p.3; local proof of the recalled probability-algebra facts
      url: https://shelah.logic.at/files/181794/763.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
---

## Statement

Assume AC. Let $(X,\Sigma,\mu)$ be a probability space, so $\mu(X)=1$. Identify $A,B\in\Sigma$ when $\mu(A\mathbin{\triangle}B)=0$, and write $\mathbb B$ for the set of equivalence classes. Set operations induce Boolean operations on $\mathbb B$, and $m([A])=\mu(A)$ is a well-defined strictly positive probability on it. The order is $[A]\le[B]$ exactly when $\mu(A\setminus B)=0$.

The Boolean algebra $\mathbb B$ is complete. Every subset $D\subseteq\mathbb B$ has a countable subset $D_0\subseteq D$ with $\bigvee D=\bigvee D_0$, allowing $D_0=\varnothing$. Every antichain of nonzero elements is countable. For arbitrary $D\subseteq\mathbb B$ and $c\in\mathbb B$,

$$c\wedge\bigvee D=\bigvee\{c\wedge d:d\in D\}.$$

Countable joins are represented by countable unions of measurable representatives. No assertion that an arbitrary union of representatives is measurable or represents its Boolean join is made.

## Facts & Assumptions

**Given:** A probability space and AC. All families below are sets.

[F1] Measures are countably additive on disjoint measurable sequences. ([[def-measure]])

[F2] Countable unions of measurable null sets are null, by countable subadditivity. ([[thm-finite-and-countable-subadditivity-of-measures]])

[F3] The measure of an increasing measurable union is the supremum of the measures. ([[thm-continuity-from-below-for-measures]])

[F4] Boolean algebras have the bounded distributive lattice laws, with order given by meet. ([[def-boolean-algebra-for-stone-duality]])

[F5] Completeness means existence of every set supremum, including the empty supremum zero. ([[def-complete-boolean-algebra-and-regular-open-sets]])

[F6] AC selects measurable representatives, countably many finite approximants to a supremum, and enumerations of countably many finite antichain pieces. ([[def-axiom-of-choice]])

[F7] Bounded nonempty real sets have real suprema. ([[lem-extended-reals-complete]])

## Proof

1.1 Symmetric difference is symmetric, $A\triangle A=\varnothing$, and $A\triangle C\subseteq(A\triangle B)\cup(B\triangle C)$. F1 and F2 therefore give an equivalence relation. Its classes form a set quotient of $\Sigma$. Replacing either input of a union or intersection by an equivalent set changes the result only inside the union of the input symmetric differences; complement preserves symmetric difference. Hence the operations are well-defined and inherit all F4 identities from set operations. Splitting sets into disjoint differences shows that equivalent sets have equal measure, so $m$ is well-defined. It vanishes exactly on the zero class, and $m(1)=1$, making the algebra nontrivial. The equation $[A]\wedge[B]=[A]$ is equivalent to $\mu(A\setminus B)=0$. [F1, F2, F4]

2.1 For a sequence $(a_n)$ choose representatives $A_n$ by F6 and put $a=[\bigcup_n A_n]$. This bounds every $a_n$. If $b=[B]$ is another upper bound, each $A_n\setminus B$ is null; F2 makes their union null, so $a\le b$. Thus $a$ is the supremum. Another sequence of representatives gives the same class, again by F2. For a disjoint sequence of Boolean elements, remove from $A_n$ all earlier $A_j$ to obtain literally disjoint representatives: the removed part is a finite union of null intersections. F1 then proves $m(\bigvee_n a_n)=\sum_n m(a_n)$. An empty sequence has supremum zero. [F1, F2, F6, step 1.1]

3.1 Given $D\subseteq\mathbb B$, let $s$ be the supremum supplied by F7 in $[0,1]$ of $m(\bigvee F)$ over finite $F\subseteq D$, including $F=\varnothing$. Choose finite $F_n\subseteq D$ with $m(\bigvee F_n)>s-2^{-n}$; when $s=0$ all $F_n$ may be empty. Put $D_0=\bigcup_n F_n$, which is countable by F6, and let $c=\bigvee D_0$ using step 2.1. The finite joins over $F_0\cup\cdots\cup F_n$ increase to $c$. Measurable representatives can be chosen increasing by taking successive finite unions, so F3 gives $m(c)=s$. [F3, F6, F7, step 2.1]

3.2 Let $A$ be an antichain of nonzero elements. For each positive integer $n$ put $A_n=\{a\in A:m(a)\ge1/n\}$. Any $n+1$ distinct members of $A_n$ would have disjoint join of measure at least $(n+1)/n>1$, contrary to step 2.1. Thus $A_n$ has at most $n$ elements. Strict positivity gives $A=\bigcup_{n\ge1}A_n$, and F6 makes this union countable. The empty antichain and singleton antichains satisfy the same bound. [F6, step 1.1, step 2.1]

4.1 For any $d\in D$, the finite joins in step 3.1 with $d$ adjoined still have measure at most $s$. F3 gives $m(c\vee d)\le s=m(c)$. Disjoint additivity then gives $m(d\wedge\neg c)=m(c\vee d)-m(c)=0$, hence $d\le c$ by strict positivity. Any upper bound of $D$ bounds $D_0$ and thus bounds $c$ by step 2.1. Therefore $c=\bigvee D$, proving completeness and the countable-subfamily assertion. If $D$ is empty the construction gives $c=0$; if it is a singleton its supremum is that element. [F1, F3, F5, step 1.1, step 2.1, step 3.1]

5.1 Put $u=\bigvee D$ and $v=\bigvee\{c\wedge d:d\in D\}$. Each joined term lies below $c\wedge u$, so $v\le c\wedge u$. Conversely $c\wedge d\le v$ implies $d=(c\wedge d)\vee(\neg c\wedge d)\le v\vee\neg c$. Hence $u\le v\vee\neg c$, and finite distributivity gives $c\wedge u\le c\wedge(v\vee\neg c)\le v$. This proves the identity, including $c=0$, $c=1$ and $D=\varnothing$. Only the established Boolean supremum is used, not the possibly nonmeasurable union of an arbitrary family of representatives. [F4, step 4.1] ∎
