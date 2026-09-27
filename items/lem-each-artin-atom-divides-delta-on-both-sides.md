---
id: lem-each-artin-atom-divides-delta-on-both-sides
kind: lemma
title: "Each Artin atom is a left and right divisor of the half twist"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-garside-half-twist-and-simple-positive-braid,
       lem-conjugation-by-delta-reverses-artin-generators,
       lem-the-positive-braid-monoid-is-left-and-right-cancellative,
       def-left-and-right-divisibility-for-positive-braids,
       def-positive-braid-monoid,
       lem-positive-artin-relations-preserve-homogeneous-length]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "J. Gonzalez-Meneses, Basic results on braid groups, Section 4, printed pp. 27-28"
      url: "https://arxiv.org/abs/1010.0321"
    - title: "Patrick Dehornoy et al., Foundations of Garside Theory, Chapter IX, Lemma 1.22 and Section 1.3, printed pp. 438-440"
      url: "https://dehornoy.lmno.cnrs.fr/Books/Garside/Text.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

Let $n\in\mathbb N$, let $B_n^{+}$ be the positive braid monoid of
[[def-positive-braid-monoid]] with its atoms $\sigma_1,\dots,\sigma_{n-1}$ and
homogeneous length $\ell$
([[lem-positive-artin-relations-preserve-homogeneous-length]]), let
$$\Delta=\Delta_n=T_1T_2\cdots T_{n-1}=\sigma_1(\sigma_2\sigma_1)\cdots(\sigma_{n-1}\sigma_{n-2}\cdots\sigma_1)$$
be the half twist of [[def-garside-half-twist-and-simple-positive-braid]], of
length $N=\ell(\Delta)=n(n-1)/2$, and let $\preccurlyeq_L,\preccurlyeq_R$ be the
divisibility orders of [[def-left-and-right-divisibility-for-positive-braids]].
Then, for every $n\ge2$ and every $i\in\{1,\dots,n-1\}$:

**(a) Left divisibility.** $\sigma_i\preccurlyeq_L\Delta$, that is, there is
$R_i\in B_n^{+}$ with $\sigma_iR_i=\Delta$.

**(b) Right divisibility.** $\sigma_i\preccurlyeq_R\Delta$, that is, there is
$L_i\in B_n^{+}$ with $L_i\sigma_i=\Delta$.

**(c) Uniqueness and length.** The complement $R_i$ of (a) and the complement
$L_i$ of (b) are unique, and $\ell(R_i)=\ell(L_i)=N-1$; in particular
$R_i=1$ holds if and only if $n=2$ and $i=1$, and likewise for $L_i$.

For $n\le1$ the alphabet is empty, $\Delta=1$ and the assertions are vacuous.
The proof is effective: it exhibits $R_i$ and $L_i$ as classes of explicit
positive words built from the recursion $\Delta_m=\Delta_{m-1}T_{m-1}$ and the
sliding identity $\sigma_jT_k\equiv^{+}T_k\sigma_{j+1}$, and it does not use
the future least-common-multiple theorem
([[thm-positive-braids-have-left-and-right-gcds-and-lcms]]). No choice
principle is used.

## Facts & Assumptions

**Given:** A natural number $n$, the monoid $B_n^{+}$ with its atoms $\sigma_i$, homogeneous length $\ell$, and the half twist $\Delta=T_1\cdots T_{n-1}$ with blocks $T_k=\sigma_k\sigma_{k-1}\cdots\sigma_1$.

[F1] $B_n^{+}=\Sigma_n^{*}/\!\equiv^{+}$ with $[uv]=[u][v]$, generated as a monoid by the $\overline{\sigma}_i=\sigma_i$; $\ell([w])=|w|$ is additive, $\ell(x)=0$ only for $x=1$, and $\ell(\sigma_i)=1$ ([[def-positive-braid-monoid]], [[lem-positive-artin-relations-preserve-homogeneous-length]]).

[F2] **Sub-alphabet compatibility.** Every defining pair of $R_{n-1}$ is a defining pair of $R_n$, because the pairs are indexed by relations on adjacent or distant indices and the index ranges for $n-1$ are contained in those for $n$. Hence the universal property of $B_{n-1}^{+}$ ([[def-positive-braid-monoid]]) gives a monoid homomorphism $B_{n-1}^{+}\to B_n^{+}$ carrying the class of a word over $\{\sigma_1,\dots,\sigma_{n-2}\}$ to its class in $B_n^{+}$; in particular the half twist $\Delta_{n-1}=T_1\cdots T_{n-2}$ of $B_{n-1}^{+}$ maps to the class of $T_1\cdots T_{n-2}$ in $B_n^{+}$, which is the element denoted $\Delta_{n-1}$ there ([[def-garside-half-twist-and-simple-positive-braid]]).

[F3] **Divisibility.** $a\preccurlyeq_Lb\iff\exists c\ (b=ac)$ and $a\preccurlyeq_Rb\iff\exists c\ (b=ca)$; the witness is unique by cancellation, and $\ell$ is additive over the witness ([[def-left-and-right-divisibility-for-positive-braids]], [[lem-the-positive-braid-monoid-is-left-and-right-cancellative]]).

[F4] **The half twist and its identities** ([[def-garside-half-twist-and-simple-positive-braid]], [[lem-conjugation-by-delta-reverses-artin-generators]]): $\Delta_n=\Delta_{n-1}T_{n-1}$ for $n\ge2$, $\ell(\Delta)=N$, the conjugation identity $\sigma_i\Delta\equiv^{+}\Delta\sigma_{n-i}$ holds for every $i$, and the sliding identity $\sigma_jT_k\equiv^{+}T_k\sigma_{j+1}$ holds whenever $1\le j\le k-1$. Both are proved in the positive monoid, without inverting anything.

[F5] **Cancellation** ([[lem-the-positive-braid-monoid-is-left-and-right-cancellative]]): $xa=xb\Rightarrow a=b$ and $ax=bx\Rightarrow a=b$ in $B_n^{+}$.

## Proof

**Proof technique:** direct.

1.1 **The atom $\sigma_1$ is a right divisor of $\Delta$.** In the word $T_1T_2\cdots T_{n-1}$ the last letter is $\sigma_1$, because $T_{n-1}=\sigma_{n-1}\sigma_{n-2}\cdots\sigma_1$ ends with $\sigma_1$. Hence, putting $L^{(1)}:=[T_1\cdots T_{n-2}\,\sigma_{n-1}\sigma_{n-2}\cdots\sigma_2]$, the associativity of concatenation and multiplicativity of the quotient product give $\Delta=[T_1\cdots T_{n-1}]=L^{(1)}\sigma_1$, so $\sigma_1\preccurlyeq_R\Delta$; here $L^{(1)}$ is the empty product $1$ when $n=2$. Its length is $\ell(L^{(1)})=N-1$ by additivity. [F1, F3, F4]

2.1 **Induction on the number of strands: every atom is a right divisor.** We prove for every $m\ge1$: for every $1\le j\le m-1$, the atom $\sigma_j$ of $B_m^{+}$ satisfies $\sigma_j\preccurlyeq_R\Delta_m$. For $m=1$ the range is empty. Assume the claim for $m-1$, where $m\ge2$, and let $1\le j\le m-1$. If $j=1$, step 1.1 with $n=m$ gives the assertion. If $j\ge2$, then $j-1\le m-2$, so the induction hypothesis in the sub-alphabet $\{\sigma_1,\dots,\sigma_{m-2}\}$ gives $\Delta_{m-1}=L'\sigma_{j-1}$ for some $L'\in B_{m-1}^{+}$, viewed inside $B_m^{+}$ by [F2]. Multiplying by $T_{m-1}$ and using the recursion $\Delta_m=\Delta_{m-1}T_{m-1}$ gives $\Delta_m=L'\sigma_{j-1}T_{m-1}\equiv^{+}L'T_{m-1}\sigma_j$, the last step by the sliding identity [F4] with $k=m-1$ and $j-1\le k-1=m-2$, which is exactly the hypothesis $j\le m-1$. Since $L'T_{m-1}\in B_m^{+}$, this says $\sigma_j\preccurlyeq_R\Delta_m$, completing the induction. [F1, F2, F3, F4, step 1.1]

3.1 **Left divisors from right divisors.** Fix $i\in\{1,\dots,n-1\}$. Since $n-i\in\{1,\dots,n-1\}$, step 2.1 with $m=n$ and $j=n-i$ gives $\Delta=L\sigma_{n-i}$ for some $L\in B_n^{+}$. The conjugation identity [F4] gives $\sigma_i\Delta\equiv^{+}\Delta\sigma_{n-i}=L\sigma_{n-i}\sigma_{n-i}$, while associativity gives $\sigma_i\Delta=\sigma_i(L\sigma_{n-i})=(\sigma_iL)\sigma_{n-i}$. Therefore $(\sigma_iL)\sigma_{n-i}=L(\sigma_{n-i}\sigma_{n-i})$, and right cancellation [F5] yields $\sigma_iL=L\sigma_{n-i}$. Substituting back, $\Delta=L\sigma_{n-i}=\sigma_iL$, so $\sigma_i\preccurlyeq_L\Delta$ with complement $L$. [F1, F3, F4, F5, step 2.1]

4.1 **Uniqueness, length and the degenerate cases.** Left cancellation [F5] gives the uniqueness of $R_i$ in $\Delta=\sigma_iR_i$ and right cancellation gives the uniqueness of $L_i$ in $\Delta=L_i\sigma_i$: if $\sigma_iR_i=\sigma_iR_i'$ then $R_i=R_i'$, and if $L_i\sigma_i=L_i'\sigma_i$ then $L_i=L_i'$. For the lengths, additivity of $\ell$ [F1, F3] and $\ell(\sigma_i)=1$ give $\ell(\Delta)=\ell(\sigma_i)+\ell(R_i)=1+\ell(R_i)$ and likewise for $L_i$, so $\ell(R_i)=\ell(L_i)=N-1$; and $R_i=1$ happens if and only if $N-1=0$, that is $N=1$, that is $n=2$, in which case $i=1$. For $n\le1$ there is no $i$ in the range and $\Delta=1$, so the assertions are vacuous. [F1, F3, F4, F5, step 1.1, step 3.1]

5.1 **Assembly.** Parts (a) and (b) are steps 3.1 and 2.1 respectively (the left divisors being transported from the right divisors by the conjugation identity), and part (c) is step 4.1. The proof never invokes a least common multiple, only the displayed recursion, the sliding identity and cancellation; all inductions are on natural numbers and all arguments are finite, so no choice principle is used. ∎ [step 2.1, step 3.1, step 4.1]

## Remarks

- **What the construction exhibits.** Combining the steps, the complements are
  the words obtained by the recursive recipe of step 2.1: the right complement
  of $\sigma_j$ in $\Delta_m$ is (up to the sub-alphabet inclusion) the word
  $L'T_{m-1}$ whose factor $L'$ is the right complement of $\sigma_{j-1}$ in
  $\Delta_{m-1}$, and the descent from $j$ to $j-1$ is precisely one
  application of the sliding identity; the base case $j=1$ is the trivial
  factorization read off from the last letter of $T_{m-1}$. The left
  complements are then obtained by conjugating indices, $R_i=L$ where
  $\Delta=L\sigma_{n-i}$. This is the elementary argument of GM Section 4
  ("recall that for every $i$ one has $\sigma_i\preccurlyeq\Delta$"), made
  explicit; it is the reason why the later theorem that $\Delta$ is the least
  common multiple of the atoms
  ([[lem-delta-is-the-lcm-of-the-artin-atoms-and-has-the-same-left-and-right-divisors]])
  is not needed here.
- **The hypothesis $j\le k-1$ of the sliding identity is met exactly once.**
  Step 2.1 slides $\sigma_{j-1}$ through the block $T_{m-1}$, which is legal
  precisely because $1\le j-1\le (m-1)-1$. Sliding the full block index
  $j-1=m-1$ would, when the next generator exists, compare words with different generator supports and is false;
  the boundary case $j=m$ is therefore handled by the separate induction
  hypothesis (and, for $m=2$, by the base case $j=1$).
- **No least common multiple and no group are used.** All identities live in
  the monoid $B_n^{+}$; the conjugation identity of
  [[lem-conjugation-by-delta-reverses-artin-generators]] is the two-sided
  sliding $\sigma_i\Delta=\Delta\sigma_{n-i}$, not a group conjugation. The
  complement $R_i$ is an element only of $B_n^{+}$, and for $n=2$ it is $1$:
  the one atom of $B_2^{+}$ has complements of length $0$, as $\Delta=\sigma_1$.
- Nothing here uses a choice principle: the factorizations are read off from
  explicit words, and the only induction is on the number of strands.
