---
id: ex-a-universal-meagre-stage-absorbs-old-nowhere-dense-sets
kind: example
title: A universal-meagre stage absorbs an old nowhere-dense tree
status: published
origin: pipeline
deps: [def-shelah-universal-meagre-forcing, lem-shelah-universal-meagre-forcing-absorbs-old-nowhere-dense-sets, def-trees-and-bodies-on-discrete-alphabets, def-nowhere-dense-meagre-and-residual-subsets]
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

## Example

Let $S$ be an old perfect nowhere-dense binary tree and let $(t,T)$ be a
$\mathrm{UM}$ condition. The absorption lemma gives a direct extension whose
generic F-sigma code contains $[S]$. When the two trees have a level beyond
$t$ at which the witness tree has at least as many nodes as $S$, the extension
has the explicit finite graft below. The singleton closed nowhere-dense set $\{0^\omega\}$ has a separate
one-node perfect graft, displayed level by level below; its prefix tree is
not called perfect. Below the distinguished weakest condition, first take
the explicit nontrivial condition of the UM definition.

## Verification

**Given:** A condition $(t,T)$ of $\mathrm{UM}$ and an old perfect nowhere-dense tree $S$, with the generic tree $U_G$ of [[def-shelah-universal-meagre-forcing]].

[F1] [[def-shelah-universal-meagre-forcing]]: conditions, order, and the containment of every witness tree of a generic condition in the generic tree.

[F2] [[lem-shelah-universal-meagre-forcing-absorbs-old-nowhere-dense-sets]]: the meagre envelope is formed from a fixed canonical enumeration $(\pi_m)_{m<\omega}$ of all finite-prefix rearrangements of the generic tree.

[F3] [[def-trees-and-bodies-on-discrete-alphabets]]: tree bodies and prefix closure; the section and graft formulas are verified below.

[F4] [[def-nowhere-dense-meagre-and-residual-subsets]]: nowhere density means that the closure has empty interior; a finite union of closed nowhere-dense sets is closed nowhere dense, since any cylinder can be refined successively to avoid each of the finitely many sets.

1.1 For the explicit matched-width case, fix a level $n>\operatorname{ht}(t)$ satisfying $|T\cap 2^n|\ge |S\cap 2^n|$; this is an additional hypothesis for the display, not a consequence of perfection. Write $S\cap 2^n=\{s_1,\dots,s_k\}$ and choose distinct $\eta_1,\dots,\eta_k\in T\cap 2^n$. [F1]

1.2 Let $T''$ be the set of all nodes of $T$ together with all nodes $\eta_i\frown\tau$ for tails $\tau$ satisfying $s_i\frown\tau\in S$, together with their initial segments; that is, replace the prefix $s_i$ by $\eta_i$ rather than concatenate the full old word. Prefixes shorter than $n$ already lie in $T$. Then $T''$ is a tree containing $T$, its recorded initial tree through height $\operatorname{ht}(t)$ is $t$, it is perfect because the nodes of $T$ keep their splitting extensions and each $\eta_i$ inherits the splitting of the perfect tree $S$ below $s_i$, and it is nowhere dense because its body is the union of the nowhere-dense set $[T]$ with the finitely many homeomorphic images of the closed nowhere-dense sets $[S]\cap[s_i]$. Hence $(t,T'')$ is a direct extension of $(t,T)$. [F1, F3]

1.3 For every $x\in[S]$ there is exactly one $i$ with $1\le i\le k$ and $x\in[s_i]$. Let $\rho_i$ be the full level-$n$ permutation swapping $\eta_i$ with $s_i$ (the identity if they agree) and leaving all other level words and all subsequent tail bits unchanged. Since [F2] fixes an enumeration of every finite-prefix rearrangement, define $m_i$ to be the least $m$ with $\pi_m=\rho_i$. Then $\rho_i^{-1}(x)\in[\eta_i]\cap[T'']\subseteq[U_G]$, because the graft is recorded in the witness tree $T''$ and every witness tree of a condition in the generic filter is contained in the generic tree. Hence $x\in\pi_{m_i}([U_G])$, and the condition $(t,T'')$ forces
$$[S]\subseteq\bigcup_{1\le i\le k}\pi_{m_i}([U_G]),$$
a finite subunion of the countable meagre envelope of the absorption lemma. [F2, F4, step 1.2]

2.1 Singleton case displayed level by level: for $A=\{0^\omega\}$, choose $n>\operatorname{ht}(t)$, a node $\eta\in T\cap 2^n$, and let $Z=\{\sigma\in2^{<\omega}:(\forall j)(2j<|\sigma|\Rightarrow\sigma(2j)=0)\}$. Its body contains $0^\omega$, has arbitrarily late free odd coordinates and is nowhere dense because a later even coordinate can be set to $1$; graft $Z$ below $\eta$, so $T''=T\cup\{\eta\frown\sigma:\sigma\in Z\}$. At every level $m\ge n$ the graft contributes the nodes $\eta\frown\sigma$ with $|\sigma|=m-n$ (some may already belong to $T$). The body remains nowhere dense by the finite-union argument of step 1.2; no same-level sibling of $\eta$ is required. The full prefix permutation swapping $0^n$ and $\eta$ sends the grafted branch $\eta\frown0^\omega\in[U_G]$ to $0^\omega$, so $0^\omega\in\pi([U_G])$, and this single finite substitution is the whole code at this stage. [F1, F4, step 1.2]

3.1 The general existence assertion is the exact content of [F2]. Under the additional matched-width hypothesis, steps 1.1--1.3 exhibit the finite graft explicitly, and step 2.1 supplies the unconditional singleton instance. No claim is made that perfection alone yields the width comparison or that the generic tree itself contains every old tree. [F2, step 1.1, step 1.3, step 2.1] ∎
