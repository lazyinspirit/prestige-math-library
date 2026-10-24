---
id: thm-special-trees-are-exactly-rationally-special
kind: theorem
title: "Special trees are exactly rationally special"
status: published
origin: pipeline
deps: [def-aronszajn-suslin-and-special-tree, def-partial-order, def-countable, lem-countable-iff-surjection-from-n, lem-subset-of-countable, thm-recursion, thm-induction-principle, thm-well-ordering-principle, thm-every-countable-linear-order-embeds-in-the-rationals]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Monk, Set theory following Jech, Proposition 9.37 and complete proof, printed pp. 86-87"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
---

## Statement

For every set-theoretic tree $T$, the following are equivalent:

1. $T$ is a countable union of antichains;
2. there is a map $q:T\to\mathbb Q$ such that
   $s<_Tt$ implies $q(s)<q(t)$.

Thus the antichain-cover and strictly increasing rational-label conventions for
a special tree agree. The equivalence includes empty and singleton trees and is
provable in ZF.

## Facts & Assumptions

**Given:** A set-theoretic tree $(T,<_T)$.

[F1] A tree is special exactly when it is a countable union of antichains; a strictly increasing rational labeling implies specialness. Empty and singleton trees are special. [[def-aronszajn-suslin-and-special-tree]]

[F2] A nonempty set is at most countable exactly when it is the range of a surjection from $\mathbb N$, and every subset of an at most countable set is at most countable. [[def-countable]], [[lem-countable-iff-surjection-from-n]], [[lem-subset-of-countable]]

[F3] Natural recursion and induction construct and verify finite lists and their length-by-length enumeration. [[thm-recursion]], [[thm-induction-principle]]

[F4] Every nonempty subset of $\mathbb N$ has a least element. [[thm-well-ordering-principle]]

[F5] Every at most countable linear order has a strictly order-preserving injection into $\mathbb Q$. [[thm-every-countable-linear-order-embeds-in-the-rationals]]

[F6] A linear order is a partial order in which every two elements are comparable. [[def-partial-order]]

## Proof

**Proof technique:** direct.

1.1 Assume first that $q:T\to\mathbb Q$ is strictly increasing on comparable nodes. By [F1] it witnesses that $T$ is special, and the same fact gives a countable antichain cover. This also covers $T=\varnothing$ and a singleton. [assume-hyp, F1]

1.2 Conversely suppose $T=\bigcup_{n\in\mathbb N}A_n$ with every $A_n$ an antichain. Put $c(t)=\min\{n:t\in A_n\}$; [F4] makes this a function, its fibers $B_n=\{t:c(t)=n\}$ are antichains, and they partition $T$. For $t\in T$ define $g_t:\mathbb N\to\{0,1\}$ by $g_t(k)=1$ exactly when $k\le c(t)$ and some $u\le_Tt$ has $c(u)=k$. Thus $g_t(k)=0$ for $k>c(t)$, so $g_t$ has finite support. [assume-hyp, F1, F4, construct]

1.3 Let $G=\{g_t:t\in T\}$ and lexicographically order distinct members at their least differing coordinate, with $0<1$. The least coordinate exists by [F4], and the usual first-difference argument proves trichotomy and transitivity, so [F6] makes this a linear order. The set of all finite-support binary sequences has a specified surjective enumeration: list the finite binary words by increasing length and lexicographically within each finite block, using recursion and induction, and extend each word by zeros. Every finite-support sequence occurs, including the all-zero sequence from the empty word. Hence that set is at most countable by [F2], and so is its subset $G$. [F2, F3, F4, F6]

2.1 Fix $s<_Tt$ and write $m=c(s)$ and $n=c(t)$; the antichain fibers give $m\ne n$. At coordinate $n$, $g_t(n)=1$. If $n>m$ then $g_s(n)=0$ by its cutoff; if $n<m$ and $g_s(n)=1$, some $u\le_Ts<_Tt$ has color $n=c(t)$, contradicting that $B_n$ is an antichain. Hence $g_s(n)=0$ in either case. Let $p$ be the least coordinate where $g_s$ and $g_t$ differ; [F4] gives it and the coordinate $n$ just found gives $p\le n$. If $g_s(p)=1$ and $g_t(p)=0$, some $u\le_Ts$ has color $p$, while $p\le n=c(t)$ and $u\le_Tt$ would make $g_t(p)=1$, a contradiction. Therefore $g_s(p)=0<1=g_t(p)$. [step 1.2, F4]

3.1 By [F5] choose a strict order embedding $h:G\to\mathbb Q$ and define $q(t)=h(g_t)$. If $s<_Tt$, step 2.1 says $g_s$ is lexicographically below $g_t$, so $q(s)<q(t)$. This proves the reverse implication; together with step 1.1 it proves the equivalence. All minima and enumerations used specified least or recursive rules, so no choice principle is used. [step 1.1, step 2.1, step 1.3, F5] ∎

## Remarks

- The required first-difference bound is $p\le c(t)$, not in general $p\le\min(c(s),c(t))$. For example, if $c(s)=0<c(t)=1$ and there are no earlier colors, the first difference can occur at coordinate $1$. The proof above supplies the missing derivation of $p\le c(t)$ in Monk's second case.
- Injectivity of $t\mapsto g_t$ is neither claimed nor needed: step 2.1 proves distinct codes precisely for comparable distinct nodes, which is exactly what the rational specialization requires.
