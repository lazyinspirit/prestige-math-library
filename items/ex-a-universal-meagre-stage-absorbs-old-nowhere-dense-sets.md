---
id: ex-a-universal-meagre-stage-absorbs-old-nowhere-dense-sets
kind: example
title: A universal-meagre stage absorbs an old nowhere-dense tree
status: draft
origin: pipeline
deps: [def-shelah-universal-meagre-forcing, lem-shelah-universal-meagre-forcing-absorbs-old-nowhere-dense-sets, def-trees-and-bodies-on-discrete-alphabets, def-nowhere-dense-meagre-and-residual-subsets]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - {title: "Saharon Shelah, Can You Take Solovay's Inaccessible Away?", url: "https://shelah.logic.at/files/95333/176.pdf", locator: "Definition 7.7 and Claim 7.15, pp. 36 and 43"}
---

## Example

Let $S$ be an old perfect nowhere-dense binary tree and let $(t,T)$ be a
$\mathrm{UM}$ condition. The absorption lemma gives a direct extension whose
generic F-sigma code contains $[S]$. When the two trees have a level beyond
$t$ at which the witness tree has at least as many nodes as $S$, the extension
has the explicit finite graft below. This matched-width hypothesis always holds
for the singleton closed nowhere-dense set $\{0^\omega\}$, whose extension can
therefore be displayed level by level.

## Verification

**Given:** A condition $(t,T)$ of $\mathrm{UM}$ and an old perfect nowhere-dense tree $S$, with the generic tree $U_G$ of [[def-shelah-universal-meagre-forcing]].

[F1] [[def-shelah-universal-meagre-forcing]]: conditions, order, and the containment of every witness tree of a generic condition in the generic tree.

[F2] [[lem-shelah-universal-meagre-forcing-absorbs-old-nowhere-dense-sets]]: the meagre envelope as a countable union of finite-prefix rearrangements of the generic tree.

[F3] [[def-trees-and-bodies-on-discrete-alphabets]]: tree bodies, their sections and the grafting construction.

[F4] [[def-nowhere-dense-meagre-and-residual-subsets]]: closed nowhere-dense sets and their finite unions.

1.1 For the explicit matched-width case, fix a level $n>|t|$ satisfying $|T\cap 2^n|\ge |S\cap 2^n|$; this is an additional hypothesis for the display, not a consequence of perfection. Write $S\cap 2^n=\{s_1,\dots,s_k\}$ and choose distinct $\eta_1,\dots,\eta_k\in T\cap 2^n$. [F1]

1.2 Let $T''$ be the set of all nodes of $T$ together with all nodes $\eta_i\frown\sigma$ where $\sigma$ is a node of $S$ with $s_i\subseteq\sigma$ beyond $s_i$; that is, graft the section of $S$ below $s_i$ onto $\eta_i$. Then $T''$ is a tree containing $T$, its recorded initial tree through height $|t|$ is $t$, it is perfect because the nodes of $T$ keep their splitting extensions and each $\eta_i$ inherits the splitting of the perfect tree $S$ below $s_i$, and it is nowhere dense because its body is the union of the nowhere-dense set $[T]$ with the finitely many homeomorphic images of the closed nowhere-dense sets $[S]\cap[s_i]$. Hence $(t,T'')$ is a direct extension of $(t,T)$. [F1, F3]

2.1 For every $x\in[S]$ there is exactly one $i\le k$ with $x\in[s_i]$, and the prefix map $\pi_i$ that carries $[\eta_i]$ onto $[s_i]$ satisfies $\pi_i^{-1}(x)\in[\eta_i]\cap[T'']\subseteq[U_G]$, because the graft is recorded in the witness tree $T''$ and every witness tree of a condition in the generic filter is contained in the generic tree. Hence $x\in\pi_i([U_G])$, and the condition $(t,T'')$ forces $[S]\subseteq\bigcup_{i\le k}\pi_{m_i}([U_G])$, a finite subunion of the countable meagre envelope of the absorption lemma. [F2, F4, step 1.2]

2.2 Singleton case displayed level by level: for $A=\{0^\omega\}$, choose $n>|t|$, a node $\eta\in T\cap 2^n$, and let $Z$ be the perfect nowhere-dense tree whose body consists of the reals that are zero except on a fixed sparse coordinate set and which contains $0^\omega$; graft $Z$ below $\eta$, so $T''=T\cup\{\eta\frown\sigma:\sigma\in Z\}$. At every level $m\ge n$ the graft contributes the nodes $\eta\frown\sigma$ with $|\sigma|=m-n$ (some may already belong to $T$). The body remains nowhere dense by the finite-union argument of step 1.2; no same-level sibling of $\eta$ is required. The prefix map swapping the level-$n$ cylinders of $0^n$ and $\eta$ sends $0^\omega$ into the image $\pi([U_G])$, and this single finite substitution is the whole code at this stage. [F1, F4, step 1.2]

3.1 The general existence assertion is the exact content of [F2]. Under the additional matched-width hypothesis, steps 1.1--2.1 exhibit the finite graft explicitly, and step 2.2 supplies the unconditional singleton instance. No claim is made that perfection alone yields the width comparison or that the generic tree itself contains every old tree. [F2, step 1.1, step 2.1, step 2.2] ∎
