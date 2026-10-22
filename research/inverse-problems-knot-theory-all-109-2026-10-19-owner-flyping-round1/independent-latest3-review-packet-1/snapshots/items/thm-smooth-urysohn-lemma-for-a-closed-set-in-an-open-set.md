---
id: thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set
kind: theorem
title: "A smooth Urysohn lemma for a closed set in an open set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-countable-choice, def-smooth-manifold, lem-coordinate-balls-form-a-basis-of-a-topological-manifold, thm-compact-subset-of-a-hausdorff-space-is-closed, thm-closed-subspace-of-a-compact-space-is-compact, lem-compactness-of-a-subspace-is-ambient, lem-manifold-bump-for-a-compact-set-inside-an-open-set, thm-a-locally-finite-sum-of-smooth-functions-is-smooth, thm-algebra-of-derivatives, def-ck-and-multi-index-notation-in-several-variables]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  verified:
    model: Codex
    verdict: repaired-and-locally-checked
    date: 2026-09-09
    scope: "Owner-authorized countable-choice construction and support regrouping repair; local checks only, no independent judge"
    delegated_by: owner
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Theorem 2.23 and Proposition 2.25, pp.43-45"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

Assume countable choice $\mathrm{AC}_\omega$. Let $A$ be a closed subset of a smooth manifold $M$, and let $U\subseteq M$ be open with $A\subseteq U$. Then there exists a smooth function $f:M\to[0,1]$ such that $f=1$ on an open neighbourhood of $A$ and $\operatorname{supp}(f)\subseteq U$.

## Facts & Assumptions

**Given:** Countable choice, a closed set $A\subseteq M$, and an open set $U\subseteq M$ containing $A$.

[A1] Countable choice selects from countably many nonempty sets ([[def-countable-choice]]). It is used for countable coordinate witnesses, finite annular covers, and bumps, not for choices indexed by all points.

[F1] A smooth manifold is Hausdorff and has a countable basis. In a smooth chart, sufficiently small coordinate balls have compact closures inside any prescribed open neighbourhood ([[def-smooth-manifold]], [[lem-coordinate-balls-form-a-basis-of-a-topological-manifold]]).

[L1] Compact subsets of a Hausdorff space are closed; closed subsets and finite unions of compact subsets are compact. A compact subset admits finite subcovers from ambient indexed open covers ([[thm-compact-subset-of-a-hausdorff-space-is-closed]], [[thm-closed-subspace-of-a-compact-space-is-compact]], [[lem-compactness-of-a-subspace-is-ambient]]).

[L2] A compact set inside an open set admits a smooth $[0,1]$-valued bump equal to one near that compact set and supported in the open set ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]).

[L3] A family of smooth functions with locally finite supports has a smooth pointwise sum ([[thm-a-locally-finite-sum-of-smooth-functions-is-smooth]]).

[L4] The sum, product and quotient derivative rules applied successively to coordinate partial derivatives show that sums, products and quotients with nonzero denominator of smooth functions are smooth ([[thm-algebra-of-derivatives]], [[def-ck-and-multi-index-notation-in-several-variables]]).

## Proof

**Proof technique:** direct.

1.1 If $M=\varnothing$ or $A=\varnothing$, take $f=0$, using the empty open neighbourhood of $A$. Otherwise put $O_0=U$ and $O_1=M\setminus A$. Form the set of all tuples consisting of a smooth coordinate ball $B$, its chart data, and a label $a\in\{0,1\}$ such that $\overline B$ is compact and lies in $O_a$. These balls cover $M$ by [F1]. Fix a countable basis. For each nonempty basis member contained in one eligible ball, [A1] chooses one such tuple. The selected balls cover $M$: every point lies in a basis member inside an eligible ball. Enumerate the selected tuples as $(B_n,a_n)$, repeating one if the nonempty family is finite. This avoids choosing a ball at every point. [A1, F1, given, construct]

2.1 Put $H_r=\bigcup_{n\le r}\overline{B_n}$. These sets are compact and closed by [L1], and their interiors cover $M$. Put $r_1=1$ and let $r_{m+1}$ be the least integer greater than $r_m$ for which $H_{r_m}\subseteq\operatorname{int}H_{r_{m+1}}$. Such an integer exists by compactness and the increasing open cover $(\operatorname{int}H_r)$. Set $K_m=H_{r_m}$ and $K_0=K_{-1}=\varnothing$. Then $K_m\subseteq\operatorname{int}K_{m+1}$ and their interiors cover $M$. This recursion uses least integers, not dependent choice. [L1, step 1.1, construct]

3.1 The sets $C_m=K_m\setminus\operatorname{int}K_{m-1}$ are compact and cover $M$. For each $m$, form all tuples $(W,V,n)$ of nested smooth coordinate balls with compact closures satisfying $$\overline W\subseteq V,\qquad \overline V\subseteq B_n\cap\operatorname{int}K_{m+1}\setminus K_{m-2}.$$ Their $W$-sets cover $C_m$: for $x\in C_m$, choose one $B_n$ containing $x$ and apply the small-ball construction twice inside the displayed open neighbourhood of $x$. This is an existence argument at one point, not a simultaneous point-indexed selection. Compactness provides a finite ordered list of such tuples covering $C_m$. [F1, L1, step 2.1]

4.1 Apply [A1] to the countable family of nonempty sets of finite ordered covering lists, taking the empty list when $C_m$ is empty. Label a tuple from annulus $m$ by $(m,j)$. The resulting family $(W_{m,j})$ covers $M$, and $(V_{m,j})$ is locally finite: if $x\in\operatorname{int}K_t$, no tuple from $m\ge t+2$ meets $\operatorname{int}K_t$, since its $V$ misses $K_{m-2}\supseteq K_t$. Only finitely many tuples occur in the remaining finitely many annuli. The pairs $(m,j)$ form a subset of $\mathbb N^2$, hence an at most countable index set $I$. [A1, step 2.1, step 3.1]

5.1 For each $i=(m,j)\in I$, [L2] supplies a nonempty set of smooth bumps $g_i:M\to[0,1]$ equal to one near $\overline{W_i}$ and supported in $V_i$. Use [A1] to choose this countable family. Its supports are locally finite, and $G=\sum_{i\in I}g_i$ is smooth and strictly positive by [L3], because the $W_i$ cover $M$. Attach to $i$ the original label $a_{n(i)}$ from its tuple. [A1, L2, L3, step 1.1, step 4.1, choose]

6.1 For $a=0,1$, put $$S_a=\bigcup_{i:\,a_{n(i)}=a}\operatorname{supp}(g_i),\qquad h_a=\sum_{i:\,a_{n(i)}=a}g_i.$$ The sums are smooth by [L3]. Each $S_a$ is closed: around a point outside $S_a$ choose a neighbourhood meeting only finitely many constituent supports, and remove those finitely many closed sets. The resulting neighbourhood misses $S_a$. Moreover $S_a\subseteq O_a$, and the nonzero locus of $h_a$ is contained in $S_a$, so $\operatorname{supp}(h_a)\subseteq S_a$. Thus taking a closure after regrouping does not enlarge the support outside its assigned open set. [L3, step 4.1, step 5.1]

7.1 Since $h_0+h_1=G>0$, define $f=h_0/G$. It is smooth by [L4] and lies in $[0,1]$. Its nonzero locus lies in the closed set $S_0\subseteq U$, so $\operatorname{supp}(f)\subseteq U$. On the open set $M\setminus S_1$, which contains $A$, one has $h_1=0$ and therefore $f=h_0/G=1$. This proves the required neighbourhood and support assertions, including the empty cases in step 1.1. [L4, step 1.1, step 5.1, step 6.1] ∎
