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

1.2 Grafting step: let $S$ be an old perfect nowhere-dense tree, $(t,T)$ a condition, and pick $n>|t|$ with at least $|S\cap 2^n|$ nodes in $T\cap 2^n$, possible because $T$ is perfect. Write $S\cap 2^n=\{s_1,\dots,s_k\}$ and choose distinct $\eta_1,\dots,\eta_k\in T\cap 2^n$. Let $T''$ be the set consisting of all nodes of $T$ together with all nodes $\eta_i\frown\sigma$, where $\sigma$ is a node of $S$ strictly below which $s_i$ lies and $\sigma\ne s_i$; equivalently, graft the section of $S$ below $s_i$ onto $\eta_i$. Then $T''$ is a tree, $T\subseteq T''$, $T''\cap 2^{\le|t|}=t$, and $T''$ is perfect: the hereditary prefixes of grafted nodes lie in $T\cup T''$, nodes of $T$ keep their splitting extensions, and each $\eta_i$ inherits the splitting behaviour of $s_i$ inside the perfect tree $S$. [F1, F2]

2.1 The tree $T''$ is nowhere dense. Its body is $[T]\cup\bigcup_{i\le k}[T''_{\eta_i}]$, where the second part is the image of $[S]\cap[s_i]$ under the section homeomorphism $\gamma_i:[s_i]\to[\eta_i]$. Each $[S]\cap[s_i]$ is closed with empty interior relative to the clopen set $[s_i]$, so each image is closed with empty interior relative to $[\eta_i]$, and a finite union of closed sets of empty interior has empty interior; hence $[T'']$ is closed with empty interior and $T''$ is nowhere dense. [F2, step 1.2]

3.1 Absorbtion below the condition: in the notation of step 1.2, let $\pi_i$ be the finite-prefix rearrangement that maps $[\eta_i]$ onto $[s_i]$ and fixes the cylinders of the remaining nodes of $T\cap 2^n$ appropriately. Every real $x\in[S]$ lies in exactly one $[s_i]$, and $\pi_i^{-1}(x)\in[\eta_i]$ is the grafted copy of $x$ below $\eta_i$, hence $\pi_i^{-1}(x)\in[T'']$; since the generic tree contains every witness tree of a condition in $G$ and $(t,T'')$ can be assumed in $G$, we get $x\in\pi_i([U_G])$. Therefore the condition $(t,T'')$ forces $[S]\subseteq\pi_{m_1}([U_G])\cup\dots\cup\pi_{m_k}([U_G])$ for the finitely many indices $m_i$ of the rearrangements used. [F1, F2, step 2.1]

4.1 The conditions of the form $(t,T'')$ of step 1.2 are dense below every condition: given $(t,T)$ and an old $S$, the grafting construction produces such a strengthening directly. Hence every condition forces that every old closed nowhere-dense set $[S]$ is contained in a finite subunion of the countable family $\{\pi_m([U_G]):m<\omega\}$. [F1, F4, step 3.1]

5.1 In the extension, put $E=\bigcup_{m<\omega}\pi_m([U_G])$. By step 4.1 and genericity, every old closed nowhere-dense set is contained in $E$; each $\pi_m([U_G])$ is closed nowhere dense because a homeomorphism preserves closedness and empty interior, so $E$ is a countable union of closed nowhere-dense sets and is meagre by [F3]. The code of $E$ is the generic tree together with the ground-model enumeration $(\pi_m)$ of step 1.1, so $E$ is coded by the $\mathrm{UM}$ generic. [F2, F3, F4, step 4.1]

6.1 Let $A\in M$ be meagre. By [F3] there are old closed nowhere-dense sets $[S_n]$ with $A\subseteq\bigcup_n[S_n]$, and by step 5.1 the union $\bigcup_n[S_n]$ is contained in $E$. Hence $A\subseteq E$: every old meagre set is contained in one meagre set coded by the generic. [F3, step 5.1]

7.1 The steps above establish both assertions of the Statement: the union of all old closed nowhere-dense sets is meagre, and every old meagre set is absorbed into the single coded meagre envelope $E$. [step 5.1, step 6.1] ∎
