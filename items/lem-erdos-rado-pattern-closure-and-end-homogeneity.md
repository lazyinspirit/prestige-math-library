---
id: lem-erdos-rado-pattern-closure-and-end-homogeneity
kind: lemma
title: "Pattern closure yields an end-homogeneous sequence"
status: published
origin: pipeline
deps: [def-partition-arrow-notation, lem-cardinal-arithmetic-basic-laws, cor-cardinal-absorption, thm-regularity-of-the-alephs, thm-every-infinite-cardinal-is-an-aleph, thm-transfinite-recursion, thm-cantor-powerset, def-axiom-of-choice]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Monk, Set theory following Jech (2024), Theorem 9.9, printed pp62–63, countable-color pattern closure; arbitrary-cardinal proof expanded from the assigned local resolution"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
proof_strategy: direct
---

## Statement

Work in ZFC. Let $\mu$ be infinite, $1\le r\le\mu$ a cardinal, $d\ge1$ finite, $\theta=2^\mu$ and $\lambda=\theta^+$. For every $F:[\lambda]^{d+1}\to r$ there are distinct $x_\alpha<\lambda$ for $\alpha<\mu^+$ and $a<\lambda$ outside their range such that

$$F(u\cup\{x_\alpha\})=F(u\cup\{a\})\quad\text{for every }u\in[\{x_\beta:\beta<\alpha\}]^d.$$

The sequence need not be increasing in the ambient ordinal $\lambda$.

## Facts & Assumptions

**Given:** $\mu,r,d,\theta,\lambda,F$ as above; assume AC.

[F1] Cardinal exponentiation is monotone and satisfies $(\rho^\sigma)^\tau=\rho^{\sigma\cdot\tau}$, with the usual unit laws. [[lem-cardinal-arithmetic-basic-laws]]

[F2] For an infinite cardinal $\nu$, $\nu\cdot\nu=\nu$, and adding or multiplying a smaller nonzero cardinal does not increase it. [[cor-cardinal-absorption]]

[F3] Under AC successor alephs are regular. [[thm-regularity-of-the-alephs]]

[F4] Every infinite cardinal is an aleph. [[thm-every-infinite-cardinal-is-an-aleph]]

[F5] Transfinite recursion realizes a prescribed rule. [[thm-transfinite-recursion]]

[F6] Cantor's theorem gives $\mu<2^\mu$, hence $\mu^+\le\theta$. [[thm-cantor-powerset]]

[F7] $[C]^d$ denotes the set of $d$-element subsets. [[def-partition-arrow-notation]]

[A1] Assume AC, used for cardinal counting and simultaneous injections in union bounds. [[def-axiom-of-choice]]

## Proof

1.1 If $B\subseteq\lambda$ has size $\theta$, then it has at most $\theta$ subsets of size at most $\mu$. Indeed every nonempty such subset is the range of a function $\mu\to B$: enumerate it by its cardinality, which is at most $\mu$, and fill remaining arguments with its first element. The range map is a surjection from a subcollection of ${}^\mu B$ onto these subsets; AC selects representatives to turn this into the cardinal bound. By F1 and F2, $\theta^\mu=(2^\mu)^\mu=2^{\mu\cdot\mu}=2^\mu=\theta$. Adding the empty subset changes no infinite bound by F2. [F1, F2, A1, given]

2.1 For such a $C$ of size at most $\mu$, increasing enumeration of finite subsets of the ordinal $\lambda$ injects $[C]^d$ into $C^d$. Inductively F2 gives $\mu^d=\mu$ for positive finite $d$, so $|[C]^d|\le\mu$. The number of functions $[C]^d\to r$ is at most $r^\mu\le(2^\mu)^\mu=\theta$ by F1 and step 1.1. For $C=\varnothing$ or $|C|<d$, the domain is empty and there is exactly one pattern; this also respects the bound, including $r=1$. For $z\in\lambda\setminus C$ define its realized pattern $p_{C,z}(u)=F(u\cup\{z\})$. Its argument has size $d+1$ by $z\notin C$. [F1, F2, F7, step 1.1, given]

3.1 Define an increasing sequence $(B_\xi)_{\xi<\mu^+}$ by F5, starting with $B_0=\theta\subseteq\lambda$. At a successor add to $B_\xi$, for every $C\subseteq B_\xi$ of size at most $\mu$ and every realized pattern $p_{C,z}$ with $z\notin C$, the least ordinal $z'\in\lambda\setminus C$ realizing that pattern. This least ordinal exists by realization. At limits take unions. Steps 1.1 and 2.1 bound the number of requests by $\theta\cdot\theta=\theta$, so each successor has size $\theta$. At any limit there are at most $\mu^+\le\theta$ preceding sets of size $\theta$ by F6; AC supplies injections for the union estimate and F2 bounds the union by $\theta\cdot\theta=\theta$. Each stage contains $B_0$, giving equality. This also proves $B=\bigcup_{\xi<\mu^+}B_\xi$ has size exactly $\theta$. All sets stay inside $\lambda$. [F2, F5, F6, A1, step 1.1, step 2.1]

4.1 Every $C\subseteq B$ of size at most $\mu$ is contained in one $B_\xi$. For nonempty $C$, assign each member its least entry stage. There are at most $\mu$ such stages, and F3/F4 make $\mu^+$ regular, so their supremum lies below $\mu^+$. Since the sequence increases, that stage or its successor contains $C$. For empty $C$ take $\xi=0$. The representative of each realized pattern over $C$ was then added at $\xi+1<\mu^+$. Thus every realized pattern over $C$ has a representative in $B\setminus C$, with exclusion of $C$ built into the successor rule. [F3, F4, A1, step 3.1]

5.1 Since $|B|=\theta<\lambda$, let $a$ be the least ordinal in $\lambda\setminus B$. Recursively, at $\alpha<\mu^+$ put $C_\alpha=\{x_\beta:\beta<\alpha\}$. Its cardinality is at most $|\alpha|\le\mu$, and it is a subset of $B$ if the previous choices were. The pattern of $a$ over $C_\alpha$ is realized, since $a\notin B$. By step 4.1 take $x_\alpha$ to be the least representative of this pattern in $B\setminus C_\alpha$. F5 defines the sequence from this rule, which always has an eligible value. It is injective by the exclusion of $C_\alpha$, and $a$ is outside its range. Equality of the chosen patterns is exactly the displayed assertion for every $d$-subset of previous nodes. At stages with fewer than $d$ previous nodes the equality has no instances but the representative still exists. [F5, F7, step 3.1, step 4.1] ∎
