---
id: lem-shelah-universal-meagre-forcing-absorbs-old-nowhere-dense-sets
kind: lemma
title: A universal-meagre generic absorbs old nowhere-dense sets
status: draft
origin: pipeline
deps: [def-shelah-universal-meagre-forcing, prop-meagre-subsets-form-a-sigma-ideal, thm-forcing-theorem, def-trees-and-bodies-on-discrete-alphabets, def-nowhere-dense-meagre-and-residual-subsets]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - {title: "Saharon Shelah, Can You Take Solovay's Inaccessible Away?", url: "https://shelah.logic.at/files/95333/176.pdf", locator: "Claim 7.15 and Definition 7.7, p. 43"}
---

## Statement

Forcing with $\mathrm{UM}$ makes the union of all ground-model closed
nowhere-dense subsets of Cantor space meagre. Therefore every ground-model
meagre set is contained in one meagre set coded by the $\mathrm{UM}$ generic.
The meagre envelope is a countable union of finite-prefix rearrangements of
$[U_G]$, not $[U_G]$ alone.

## Facts & Assumptions

**Given:** A countable transitive ground model $M$ of ZFC (the argument is internal to any transitive ZF model containing the data) and an $M$-generic filter $G\subseteq\mathrm{UM}$ with generic tree $U_G$.

[F1] [[def-shelah-universal-meagre-forcing]]: conditions, order, the generic tree $U_G$, the countable family of finite-prefix rearrangements, and the fact that each witness tree of a condition in $G$ is contained in $U_G$.

[F2] [[def-trees-and-bodies-on-discrete-alphabets]] with [[def-nowhere-dense-meagre-and-residual-subsets]]: $[T]$ is closed for every tree, an old closed nowhere-dense set is $[S]$ for an old perfect nowhere-dense tree $S$, and a homeomorphism of $2^\omega$ carries closed nowhere-dense sets to closed nowhere-dense sets.

[F3] [[prop-meagre-subsets-form-a-sigma-ideal]]: meagre sets form a $\sigma$-ideal; a countable union of closed nowhere-dense sets is meagre, and every meagre set is contained in a countable union of closed nowhere-dense sets.

[F4] [[thm-forcing-theorem]]: truth and definability of forcing, so that dense-below arguments and the forcing relation certify statements about the extension.

## Proof

1.1 Fix in $M$ a canonical enumeration $(\pi_m)_{m<\omega}$ of the finite-prefix rearrangements of $2^\omega$: each is determined by a finite partial bijection between level-$n$ cylinders for some $n$, and there are only countably many such finite data, so the enumeration is definable without choice. [F1]

1.2 Grafting step: let $S$ be an old perfect nowhere-dense tree and let $(t,T)$ be a condition. Choose any $n>|t|$ and any $\eta\in T\cap2^n$; perfection of $T$ guarantees such a node. Enumerate the finite nonempty level $S\cap2^n$ as $\{s_1,\ldots,s_k\}$. For each $i\le k$, put $C_i=\{\eta\frown\tau:s_i\frown\tau\in S\}$, including all initial segments, and put $T''=T\cup\bigcup_{i\le k}C_i$. Thus all the level-$n$ sections of $S$ are grafted below the **same** node $\eta$; no comparison between the widths of $S$ and $T$ is needed. The added nodes have length at least $n$, so $T''\cap2^{\le n}=T\cap2^{\le n}$ and in particular $T''\cap2^{\le|t|}=t$. Moreover $T\subseteq T''$, and $T''$ is perfect: nodes of $T$ keep their splitting extensions, while every node added from $C_i$ inherits splitting extensions from the section of the perfect tree $S$ below $s_i$. Hence $(t,T'')\le(t,T)$ once nowhere density is checked in the next step. [F1, F2]

2.1 The body of $T''$ is $[T'']=[T]\cup\bigcup_{i\le k}\gamma_i([S]\cap[s_i])$, where $\gamma_i(s_i\frown y)=\eta\frown y$. Each displayed image is closed and has empty interior relative to the clopen cylinder $[\eta]$, hence is closed nowhere dense in $2^\omega$. The union is finite, so together with the closed nowhere-dense set $[T]$ it is again closed nowhere dense. Thus $T''$ is a legitimate witness tree and $(t,T'')$ is a condition below $(t,T)$. [F2, step 1.2]

3.1 Absorption below the condition: for each $i\le k$, choose a permutation of $2^n$ sending $\eta$ to $s_i$, and let $\pi_i$ be its induced finite-prefix rearrangement, which keeps the tail after the length-$n$ prefix unchanged. If $x\in[S]$, then uniquely $x=s_i\frown y$ for some $i$, while $\eta\frown y\in[T'']$ by construction and $\pi_i(\eta\frown y)=s_i\frown y=x$. Any generic filter containing $(t,T'')$ has $[T'']\subseteq[U_G]$ by [F1]. Consequently $(t,T'')$ forces $[S]\subseteq\pi_1([U_G])\cup\cdots\cup\pi_k([U_G])$. The $\pi_i$ occur in the fixed enumeration from step 1.1. [F1, F2, step 2.1]

4.1 The conditions of the form $(t,T'')$ of step 1.2 are dense below every condition: given $(t,T)$ and an old $S$, the grafting construction produces such a strengthening directly. Hence every condition forces that every old closed nowhere-dense set $[S]$ is contained in a finite subunion of the countable family $\{\pi_m([U_G]):m<\omega\}$. [F1, F4, step 3.1]

5.1 In the extension, put $E=\bigcup_{m<\omega}\pi_m([U_G])$. By step 4.1 and genericity, every old closed nowhere-dense set is contained in $E$; each $\pi_m([U_G])$ is closed nowhere dense because a homeomorphism preserves closedness and empty interior, so $E$ is a countable union of closed nowhere-dense sets and is meagre by [F3]. The code of $E$ is the generic tree together with the ground-model enumeration $(\pi_m)$ of step 1.1, so $E$ is coded by the $\mathrm{UM}$ generic. [F2, F3, F4, step 4.1]

6.1 Let $A\in M$ be meagre. By [F3] there are old closed nowhere-dense sets $[S_n]$ with $A\subseteq\bigcup_n[S_n]$, and by step 5.1 the union $\bigcup_n[S_n]$ is contained in $E$. Hence $A\subseteq E$: every old meagre set is contained in one meagre set coded by the generic. [F3, step 5.1]

7.1 The steps above establish both assertions of the Statement: the union of all old closed nowhere-dense sets is meagre, and every old meagre set is absorbed into the single coded meagre envelope $E$. [step 5.1, step 6.1] ∎
