---
id: thm-the-symmetric-group-has-the-coxeter-presentation
kind: theorem
title: "The symmetric group has the Coxeter presentation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-finite-symmetric-group-and-permutation-notation, lem-symmetric-group-is-a-group, thm-adjacent-transpositions-generate-the-symmetric-group, thm-von-dyck]
proof_strategy: direct
verification:
  audited: 2026-09-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Michael Muger, Tensor Categories: A Selective Guided Tour, Section 4"
      url: "https://arxiv.org/pdf/0804.3587"
---

## Statement

For $n\ge2$, the symmetric group $S_n$ has the presentation

$$S_n=\langle s_1,\dots,s_{n-1}\mid s_i^2=1,\ s_is_{i+1}s_i=s_{i+1}s_is_{i+1},\ s_is_j=s_js_i\ (|i-j|>1)\rangle,$$

where, after relabelling the underlying set $n=\{0,\ldots,n-1\}$ as
$\{1,\ldots,n\}$, $s_i$ corresponds to the adjacent transposition
$(i\ i+1)$. For
$n=0,1$, the trivial group has the empty presentation.

## Facts & Assumptions

**Given:** The symmetric group $S_n$ and the adjacent transpositions $\tau_i=(i\ i+1)$.

[L1] The group $S_n$ is defined on $n=\{0,\ldots,n-1\}$; conjugating by the order-preserving bijection $k\mapsto k+1$ identifies it with the conventional symmetric group on $\{1,\ldots,n\}$ and transports adjacent transpositions ([[def-finite-symmetric-group-and-permutation-notation]]).

[F1] The adjacent transpositions generate $S_n$ for $n\ge2$ ([[thm-adjacent-transpositions-generate-the-symmetric-group]]).

[F2] A map from the generators of a presented group to a group extends to a homomorphism when the relators hold, and the extension is onto when the images generate the target ([[thm-von-dyck]]).

[F3] The symmetric group consists of the bijections of an $n$-element set, with composition as its group law ([[def-finite-symmetric-group-and-permutation-notation]], [[lem-symmetric-group-is-a-group]]).

## Proof

**Proof technique:** direct.

1.1 Fix $n\ge2$ and let $G_n$ be the group given by the displayed generators and relations. The adjacent transpositions $\tau_i=(i\ i+1)$ satisfy $\tau_i^2=1$. Transpositions with disjoint supports commute, and the two length-three words in $\tau_i,\tau_{i+1}$ both exchange $i$ with $i+2$ and fix $i+1$. Thus every relator holds in $S_n$. By [F2] there is a homomorphism $\pi_n:G_n\to S_n$ sending $s_i$ to $\tau_i$, and [F1] makes it surjective. [F1, F2, F3]

1.2 Put $H=\langle s_1,\ldots,s_{n-2}\rangle\le G_n$, with $H=\{1\}$ when $n=2$. For $1\le j<n$ set $r_j=s_{n-1}s_{n-2}\cdots s_j$, and set $r_n=1$. The defining relations give the following right-multiplication rules for $1\le i<n$: if $i\le j-2$, then $r_js_i=s_ir_j$ by commuting $s_i$ past every factor of $r_j$; if $i=j-1$, then $r_js_i=r_{j-1}$; if $i=j$, then $r_js_i=r_{j+1}$ by $s_j^2=1$; and if $i>j$, then $r_js_i=s_{i-1}r_j$. For the last rule commute the final $s_i$ left past $s_j,\ldots,s_{i-2}$, replace $s_is_{i-1}s_i$ by $s_{i-1}s_is_{i-1}$, and commute the leading $s_{i-1}$ left past $s_{i+1},\ldots,s_{n-1}$. For $j=n$, the rules are $r_ns_i=s_ir_n$ when $i\le n-2$ and $r_ns_{n-1}=r_{n-1}$. Every coefficient on the left of a resulting $r_k$ lies in $H$. [algebra]

2.1 The union $T=\bigcup_{j=1}^n Hr_j$ contains $1=r_n$ and, by step 1.2, is stable under right multiplication by every generator $s_i$. Since each $s_i$ is its own inverse, every word in the generators lies in $T$, so $G_n=T$ and $|G_n|\le n|H|$. The defining relations of the presented group $G_{n-1}$ hold among $s_1,\ldots,s_{n-2}$, hence [F2] gives a surjection $G_{n-1}\twoheadrightarrow H$; this includes $G_1=\{1\}$ when $n=2$. Induction yields $|G_n|\le n!$. Independently, a bijection of an $n$-element set has $n$ choices for the first image, then $n-1$ for the second, and so on, hence $|S_n|=n!$ by [F3]. The surjection $\pi_n$ of step 1.1 is therefore a bijection and an isomorphism. Transport it through [L1] to obtain exactly the stated presentation on the library's underlying set. [F2, F3, L1, step 1.1, step 1.2]

3.1 If $n=0$ or $1$, there are no adjacent transpositions and the only bijection of the underlying set is the identity. Its group is presented by the empty set of generators and relators. [F3, L1] ∎
