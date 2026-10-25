---
id: ex-cg-infinite-dihedral-bounded-interval-and-missing-join
kind: example
title: "Infinite dihedral type: lower intervals are chains, but the two atoms have no upper bound"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 19
deps:
  - def-cg-left-right-weak-order-and-descents
  - lem-cg-weak-order-prefix-property-and-left-translation
  - thm-cg-weak-order-meet-semilattice-and-finite-lattice
  - def-hh-coxeter-matrix-word-group-and-length
  - thm-hh-coxeter-exchange-deletion-and-faithfulness
  - lem-hh-dihedral-root-recurrence-and-root-sign
  - def-lattice-distributive-lattice-and-order-ideal
justified_by: []
proof_strategy: "unique alternating reduced expressions force lower intervals to be chains and exclude an upper bound of the two atoms"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Anders Bjorner and Francesco Brenti, Combinatorics of Coxeter Groups (Graduate Texts in Mathematics 231, Springer 2005; author-hosted complete PDF)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Section 3.1 and Figure 3.1, printed p. 66 (the right weak order of the infinite dihedral group consists of two alternating prefix chains sharing the minimum), and Sections 3.1-3.2, printed pp. 66-71 (prefix property; joins may fail to exist in the infinite case)"
---

## Example

Let $S=\{s,t\}$ with $s\ne t$ and $m(s,t)=\infty$ (infinite dihedral type), let $W$ be the
presented group with length $\ell$, and let $\le_R,\le_L$ be the weak orders
of [[def-cg-left-right-weak-order-and-descents]]. For $q\ge1$ let $a_q$
(respectively $b_q$) be the value of the alternating word of length $q$
beginning with $s$ (respectively with $t$). Then:

**(1) Alternating structure.** Every reduced expression of an element of $W$
is alternating, and every element of $W$ has exactly one reduced expression:
two alternating words of the same length beginning with the same letter are
equal, and if two alternating words of length $q$ beginning with different
letters represented the same element, then for even $q$ one would have
$(st)^{q/2}=(st)^{-q/2}$ and for odd $q$ one would have
$(st)^{q-1}=ts=(st)^{-1}$, and each identity gives $(st)^q=1$, which is false
because $st$ has infinite order by
[[lem-hh-dihedral-root-recurrence-and-root-sign]] (4). Consequently
$(st)^k\ne1$ for every $k\ne0$ and the powers $(st)^k$ ($k\in\mathbb Z$) are
pairwise distinct, so $W$ is infinite.

**(2) Every lower interval is a chain.** For every $v\in W$ the interval
$[1,v]_R$ is the finite chain consisting of the values of the distinct
prefixes of the unique alternating reduced expression of $v$: in particular

$$[1,sts]_R=\{1,s,st,sts\},\qquad [1,ts]_R=\{1,t,ts\}.$$

Meets and joins of nonempty subsets of these intervals are their least and
greatest elements, e.g. $s\wedge st=s$ and $s\vee st=st$; and the interval translation
of [[lem-cg-weak-order-prefix-property-and-left-translation]] (4) gives the
order isomorphism $[s,sts]_R=\{s,st,sts\}\to[1,ts]_R=\{1,t,ts\}$,
$x\mapsto sx$.

**(3) The two atoms have no join.** The elements $s$ and $t$ are incomparable
in both orders, and $\{s,t\}$ has no upper bound: if $z$ were an upper bound,
then by the prefix property both $s$ and $t$ would be the first letter of a
reduced expression of $z$, so $z=a_q=b_q$ with $q=\ell(z)$, contradicting
(1). Hence $s\vee t$ does not exist, $W$ is not a lattice, and every nonempty
subset of $[1,sts]_R$ is bounded above (by $sts$) and therefore has a join by
[[thm-cg-weak-order-meet-semilattice-and-finite-lattice]] (1), while the empty
subset also has the join $1$, the least element of $\le_R$; the example thus
shows that the boundedness hypothesis there cannot be dropped.

## Facts & Assumptions

**Given:** $S=\{s,t\}$ with $s\ne t$ and $m(s,t)=\infty$, the presented group $W$ with length $\ell$, weak orders $\le_R,\le_L$ as in [[def-cg-left-right-weak-order-and-descents]], and the alternating-word values $a_q,b_q$ for $q\ge1$.

[F1] [[def-hh-coxeter-matrix-word-group-and-length]]: $\ell(w)$ is the minimum length of a word in $S$ representing $w$, and a reduced expression is a word whose length equals $\ell(w)$.

[F2] [[thm-hh-coxeter-exchange-deletion-and-faithfulness]] (3): if a word in $S$ is not reduced, then deleting a suitable pair of its letters leaves the value unchanged; hence a reduced word cannot be shortened by deleting two letters.

[F3] [[lem-hh-dihedral-root-recurrence-and-root-sign]] (4): for distinct $s,t\in S$, $s\ne t$ in $W$ and $st$ has order exactly $m(s,t)$, infinite here.

[F4] [[def-cg-left-right-weak-order-and-descents]] (1): $u\le_R v$ iff $v=ux$ with $\ell(v)=\ell(u)+\ell(x)$.

[F5] [[lem-cg-weak-order-prefix-property-and-left-translation]] (2): $u\le_R v$ iff some reduced expression of $v$ has a reduced expression of $u$ as its initial segment.

[F6] [[thm-cg-weak-order-meet-semilattice-and-finite-lattice]] (1): a nonempty subset of $W$ has a join if and only if it is bounded above, in which case the join exists.

[F7] [[lem-hh-dihedral-root-recurrence-and-root-sign]] (1): $\ell(u)=1$ for every $u\in S$.

[F8] [[lem-hh-dihedral-root-recurrence-and-root-sign]] (7): for distinct $s,t$ with $m(s,t)=\infty$, every alternating word of length $q\ge1$ beginning with $s$ is ambient reduced; applying the clause to $(t,s)$ gives the same for words beginning with $t$.

[F9] [[lem-cg-weak-order-prefix-property-and-left-translation]] (4): for $u\le_R v$, $x\mapsto ux$ is an order isomorphism $[1,u^{-1}v]_R\to[u,v]_R$.

[F10] [[def-cg-left-right-weak-order-and-descents]] (3): a right upper bound $z$ of $A$ satisfies $a\le_R z$ for every $a\in A$; a right join is an upper bound below every upper bound. A right meet is a lower bound above every lower bound.

[F11] [[def-cg-left-right-weak-order-and-descents]] (1): $u\le_L v$ iff $v=xu$ with $\ell(v)=\ell(u)+\ell(x)$.

[F12] [[def-hh-coxeter-matrix-word-group-and-length]]: the presentation has relator $u^2=1$ for every $u\in S$.

[F13] [[def-hh-coxeter-matrix-word-group-and-length]]: the empty word has value $1$ and length $0$, so $\ell(1)=0$.

[F14] [[def-cg-left-right-weak-order-and-descents]] (2): $[u,v]_R=\{w\in W:u\le_R w\text{ and }w\le_R v\}$, with the analogous definition for left intervals.

[F15] [[def-lattice-distributive-lattice-and-order-ideal]]: a lattice is a poset in which every pair has a least upper bound.

[F16] [[lem-cg-weak-order-prefix-property-and-left-translation]] (2): $u\le_L v$ iff some reduced expression of $v$ has a reduced expression of $u$ as its terminal segment.

[A1] For each $q\ge1$, the alternating words of length $q$ are exactly the words valued by $a_q$ and $b_q$, according as the first letter is $s$ or $t$; the only word of length $0$ is the empty word with value $1$.

## Proof

1.1 Every reduced expression is alternating and every element of $W$ has exactly one reduced expression. If a reduced expression had equal adjacent letters, [F2] would delete them and shorten a word for the same element, a contradiction; thus every reduced expression is alternating by [A1]. Conversely every alternating word is reduced by [F8]. If two reduced expressions have the same value, their lengths both equal the length of that element by [F1], so they have the same length $q$. For $q=0$ both are the empty word; for $q\ge1$, [A1] says each is $a_q$ or $b_q$. If their first letters agree then the words are identical. If $q=2k$ is even and the first letters differ, equality would give $(st)^k=(ts)^k=(st)^{-k}$, using $s^2=t^2=1$ from [F12], and hence $(st)^q=1$, contrary to [F3]. If $q=2k+1$ is odd, equality $(st)^ks=(ts)^kt$ gives $(st)^k=(st)^{-k}ts=(st)^{-k-1}$ after right multiplication by $s$, again forcing $(st)^q=1$, contrary to [F3]. Thus reduced expressions are unique; every element has one by the definition of $\ell$ in [F1]. [A1, F1, F2, F3, F8, F12, given, algebra]

1.2 The generators are incomparable in both orders. If $s\le_R t$, then [F4] gives $t=sx$ and $\ell(t)=\ell(s)+\ell(x)=1+\ell(x)$ by [F7]. Since $\ell(t)=1$, $\ell(x)=0$, so $x=1$ by [F1] and [F13], contradicting $s\ne t$ in [F3]. Interchanging $s,t$ excludes $t\le_R s$. If $s\le_L t$, then [F11] gives $t=xs$ and $\ell(t)=\ell(x)+\ell(s)=\ell(x)+1$; the same length-zero argument gives $x=1$ and $t=s$, a contradiction. Interchanging $s,t$ excludes $t\le_L s$. [F1, F3, F4, F7, F11, F13, given, algebra]

2.1 The powers $(st)^k$, $k\in\mathbb Z$, are pairwise distinct, and $W$ is infinite. For $k\ge1$, $(st)^k$ is the value $a_{2k}$; for $k\le-1$, $(st)^k=(ts)^{-k}$ is the value $b_{-2k}$ by [F12]; and $(st)^0=1$. If $(st)^i=(st)^j$ for $i\ne j$, cancellation gives $(st)^{i-j}=1$, contrary to the infinite order in [F3]. Thus the powers are pairwise distinct and form an infinite subset of $W$. [A1, F3, F12, step 1.1, given, algebra]

2.2 For every $v\in W$, $[1,v]_R$ is the finite chain of values of the prefixes of its unique reduced expression; in particular $[1,sts]_R=\{1,s,st,sts\}$ and $[1,ts]_R=\{1,t,ts\}$. Let $p_j$ be the prefix of length $j$ of the unique reduced expression of $v$. Each prefix is alternating and hence reduced by [F8], so prefixes of different lengths have different values by [F1]. By [F5], $u\le_R v$ holds exactly when the reduced expression of $u$ is a prefix of this unique expression of $v$; thus the elements of $[1,v]_R$ are exactly the prefix values, ordered by prefix inclusion. They form a finite chain with $\ell(v)+1$ elements. The displayed intervals follow because $sts$ and $ts$ are alternating reduced words. [A1, F1, F5, F8, F14, step 1.1, given, algebra]

2.3 The set $\{s,t\}$ has no upper bound in either weak order, so its right join $s\vee t$ does not exist and $W$ is not a lattice. If $z$ were a right upper bound, $s\le_R z$ and $t\le_R z$ would give, by [F5], reduced expressions of $z$ beginning with $s$ and with $t$. This contradicts the uniqueness in step 1.1. If $z$ were a left upper bound, [F16] would give reduced expressions of $z$ ending in $s$ and in $t$, the same contradiction. Therefore there is no upper bound in either order; by [F10] a right join must be an upper bound, so $s\vee t$ does not exist. Since a lattice has a join for every pair by [F15], $W$ is not a lattice. [F5, F10, F15, F16, step 1.1, given, algebra]

3.1 If $\emptyset\ne X\subseteq[1,v]_R$, then $X$ has a meet and a join: they are its least and greatest elements in the finite chain of step 2.2. The least element is a lower bound of $X$, and every lower bound is below it because it belongs to $X$; hence it is $\bigwedge X$ by [F10]. Dually, the greatest element is an upper bound of $X$ and is below every upper bound, so it is $\bigvee X$. In particular, $s\wedge st=s$ and $s\vee st=st$ in $[1,sts]_R$. [F10, F14, step 2.2, given, algebra]

3.2 The interval translation isomorphism: $s\le_R sts$ by step 2.2, and $s^{-1}(sts)=s(sts)=ts$ by [F12]. Hence [F9] gives the order isomorphism $x\mapsto sx$ from $[1,ts]_R$ to $[s,sts]_R$. Using the displayed interval of step 2.2, its values are $s,st,sts$, so $[s,sts]_R=\{s,st,sts\}$. [F9, F12, F14, step 2.2, given, algebra]

4.1 Every nonempty subset of $[1,sts]_R$ has a join, while the empty subset also has join $1$. Every nonempty such subset is bounded above by $sts$, so [F6] supplies its join. For the empty subset, every element is an upper bound by vacuity; [F13] gives $\ell(1)=0$, and [F4] gives $1\le_R w$ for every $w\in W$ by writing $w=1\cdot w$ with $\ell(w)=\ell(1)+\ell(w)$. Thus $1$ is the least upper bound of the empty set by [F10]. The operations on nonempty subsets were explicitly computed from finite chains in step 3.1, and the empty join was proved directly, so no Axiom of Choice is used. In contrast, step 2.3 shows that $\{s,t\}$ has no join; hence the boundedness hypothesis for nonempty subsets in [[thm-cg-weak-order-meet-semilattice-and-finite-lattice]] (1) cannot be dropped. [F4, F6, F10, F13, step 2.2, step 2.3, step 3.1, given, algebra] ∎
