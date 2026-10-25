---
id: lem-shelah-universal-meagre-forcing-absorbs-old-nowhere-dense-sets
kind: lemma
title: A universal-meagre generic absorbs old nowhere-dense sets
status: published
origin: pipeline
deps: [def-shelah-universal-meagre-forcing, prop-meagre-subsets-form-a-sigma-ideal, thm-forcing-theorem, def-trees-and-bodies-on-discrete-alphabets, def-nowhere-dense-meagre-and-residual-subsets]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - {title: "Saharon Shelah, Can You Take Solovay's Inaccessible Away?", url: "https://shelah.logic.at/files/95333/176.pdf", locator: "Definition 4.2 and Claim 7.15, printed pp. 15 and 43"}
verification:
  audited: 2026-09-22
---

## Statement

Forcing with $\mathrm{UM}$ makes the union of all ground-model closed
nowhere-dense subsets of Cantor space meagre. Therefore every ground-model
meagre set is contained in one meagre set coded by the $\mathrm{UM}$ generic.
The meagre envelope is a countable union of finite-prefix rearrangements of
$[U_G]$, not $[U_G]$ alone.

## Facts & Assumptions

**Given:** A transitive ZF ground model $M$ containing the data and an $M$-generic filter $G\subseteq\mathrm{UM}$ with generic tree $U_G$.

[F1] [[def-shelah-universal-meagre-forcing]]: conditions, order, the generic tree $U_G$, the countable family of finite-prefix rearrangements, and the fact that each witness tree of a condition in $G$ is contained in $U_G$.

[F2] [[def-trees-and-bodies-on-discrete-alphabets]] with [[def-nowhere-dense-meagre-and-residual-subsets]]: $[T]$ is closed for every tree, a closed set $C$ has prefix tree $S_C=\{s:C\cap[s]\ne\varnothing\}$ and equals $[S_C]$, since a point outside $C$ has a cylinder disjoint from $C$. This tree need not be perfect. A homeomorphism carries closed nowhere-dense sets to closed nowhere-dense sets.

[F3] [[prop-meagre-subsets-form-a-sigma-ideal]] supplies subset closure. A displayed sequence of closed nowhere-dense sets has meagre union directly by [[def-nowhere-dense-meagre-and-residual-subsets]]; replacing each term of one given nowhere-dense cover by its closure gives a closed nowhere-dense cover. We do not use the supplier's Countable Choice clause for selecting covers of countably many unrelated meagre sets.

[F4] [[thm-forcing-theorem]]: truth and definability of forcing, so that dense-below arguments and the forcing relation certify statements about the extension.

## Proof

1.1 Fix in $M$ a canonical enumeration $(\pi_m)_{m<\omega}$ of the finite-prefix rearrangements of $2^\omega$: each is determined by a finite partial bijection between level-$n$ cylinders for some $n$, and there are only countably many such finite data, so the enumeration is definable without choice. [F1]

1.2 Perfect enlargement: let $C$ be any old nonempty closed nowhere-dense set. For every finite binary word $s$ with $C\cap[s]\ne\varnothing$, choose the first finite extension $t_s$ of $s$, in length-lexicographic order, for which $[t_s]\cap C=\varnothing$. Such an extension exists by nowhere density. Put $K_s=\{t_s\frown y:(\forall j)\ y(2j)=0\}$. This set is nonempty, closed, has no isolated points because arbitrarily late odd coordinates are free, and is nowhere dense because an arbitrarily late even coordinate can be set to $1$. Define $K=C\cup\bigcup_s K_s$. These are prescribed least choices and a set union, available in $M$ without Choice. [F2]

1.3 Grafting step: let $S$ be an old perfect nowhere-dense tree and let $(t,T)$ be a nontrivial condition. Below $1_{\mathrm{UM}}$, first take the explicit nontrivial condition supplied by F1. Choose any $n>\operatorname{ht}(t)$ and any $\eta\in T\cap2^n$; perfection of $T$ guarantees such a node. Enumerate the finite nonempty level $S\cap2^n$ as $\{s_1,\ldots,s_k\}$. For each $i\le k$, put $C_i=\{\eta\frown\tau:s_i\frown\tau\in S\}$, including all initial segments, and put $T''=T\cup\bigcup_{i\le k}C_i$. Thus all the level-$n$ sections of $S$ are grafted below the **same** node $\eta$; no comparison between the widths of $S$ and $T$ is needed. Every newly added node not already in $T$ has length greater than $n$, so $T''\cap2^{\le n}=T\cap2^{\le n}$ and in particular $T''\cap2^{\le\operatorname{ht}(t)}=t$. Moreover $T\subseteq T''$, and $T''$ is perfect: nodes of $T$ keep their splitting extensions, while every node added from $C_i$ inherits splitting extensions from the section of the perfect tree $S$ below $s_i$. Hence $(t,T'')\le(t,T)$ provided its body is nowhere dense, as checked below. [F1, F2]

1.4 For completeness, $[U_G]$ is nowhere dense for an explicit dense-set reason. Given a word $s$ and a nontrivial condition $(t,T)$, choose an extension $v$ of $s$ with $[v]\cap[T]=\varnothing$. Since $T$ is pruned binary, any node of $T$ has a branch by recursively taking the least available child; hence $v\notin T$. Increase the recorded height to at least $|v|$. Every stronger condition omits $v$ permanently. These conditions are dense for each $s$, including below the weakest condition. The generic meets all these ground dense sets, so every cylinder has a subcylinder disjoint from $[U_G]$. The body is closed by F2, as required. [F1, F2, F4]

2.1 If a cylinder $[u]$ misses $C$, it meets no $K_s$ with $|s|\ge|u|$: intersecting cylinders would give $[s]\subseteq[u]$, contrary to $[s]\cap C\ne\varnothing$. It therefore meets only the finitely many $K_s$ indexed by shorter words. For any point outside $K$, first take such a cylinder around it and then avoid those finitely many closed sets, proving $K$ closed. Inside any cylinder first find a subcylinder missing $C$, then successively avoid the finitely many closed nowhere-dense $K_s$ meeting it; thus $K$ is nowhere dense. Every cylinder about a point of $C$ contains its corresponding nonempty $K_s$, disjoint from $C$, so no point of $C$ is isolated in $K$; points of the $K_s$ are not isolated either. Its prefix tree $S$ is consequently nonempty and perfect: any node meeting $K$ has two distinct extensions witnessed by two points of $K$ in its cylinder. F2 gives $[S]=K\supseteq C$. For $C=\varnothing$, absorption is immediate and no enlargement is needed. Inclusion of the old prefix tree in $S$ implies inclusion of their bodies even for new branches in an extension. [F2, step 1.2]

2.2 The body of $T''$ is $[T'']=[T]\cup\bigcup_{i\le k}\gamma_i([S]\cap[s_i])$, where $\gamma_i(s_i\frown y)=\eta\frown y$. Each displayed image is closed and has empty interior relative to the clopen cylinder $[\eta]$, hence is closed nowhere dense in $2^\omega$. The union is finite, so together with the closed nowhere-dense set $[T]$ it is again closed nowhere dense. Thus $T''$ is a legitimate witness tree and $(t,T'')$ is a condition below $(t,T)$. [F2, step 1.3]

3.1 Absorption below the condition: for each $i\le k$, choose a permutation of $2^n$ sending $\eta$ to $s_i$, and let $\pi_i$ be its induced finite-prefix rearrangement, which keeps the tail after the length-$n$ prefix unchanged. If $x\in[S]$, then uniquely $x=s_i\frown y$ for some $i$, while $\eta\frown y\in[T'']$ by construction and $\pi_i(\eta\frown y)=s_i\frown y=x$. Any generic filter containing $(t,T'')$ has $[T'']\subseteq[U_G]$ by [F1]. Consequently $(t,T'')$ forces $[S]\subseteq\pi_1([U_G])\cup\cdots\cup\pi_k([U_G])$. The $\pi_i$ occur in the fixed enumeration from step 1.1. [F1, F2, step 2.2]

4.1 The conditions of the form $(t,T'')$ of step 1.3 are dense below every condition: given $(t,T)$ and an old $S$, the grafting construction produces such a strengthening directly. For a nonempty old closed nowhere-dense set first apply the perfect-enlargement construction above to obtain its perfect enlargement; the empty set is automatic. Hence every condition forces that every old closed nowhere-dense set is contained in a finite subunion of the countable family $\{\pi_m([U_G]):m<\omega\}$. [F1, F4, step 2.1, step 3.1]

5.1 In the extension, put $E=\bigcup_{m<\omega}\pi_m([U_G])$. By step 4.1 and genericity, every old closed nowhere-dense set is contained in $E$; each $\pi_m([U_G])$ is closed nowhere dense because a homeomorphism preserves closedness and empty interior, so $E$ is a countable union of closed nowhere-dense sets and is meagre by [F3]. The code of $E$ is the generic tree together with the ground-model enumeration $(\pi_m)$ of step 1.1, so $E$ is coded by the $\mathrm{UM}$ generic. [F2, F3, F4, step 4.1, step 1.4]

6.1 Let $A\in M$ be meagre. By [F3] there are old closed nowhere-dense sets $[S_n]$ with $A\subseteq\bigcup_n[S_n]$, and by step 5.1 the union $\bigcup_n[S_n]$ is contained in $E$. Hence $A\subseteq E$: every old meagre set is contained in one meagre set coded by the generic. [F3, step 5.1]

7.1 The steps above establish both assertions of the Statement: the union of all old closed nowhere-dense sets is meagre, and every old meagre set is absorbed into the single coded meagre envelope $E$. [step 5.1, step 6.1] ∎
