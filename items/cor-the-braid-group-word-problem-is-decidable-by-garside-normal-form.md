---
id: cor-the-braid-group-word-problem-is-decidable-by-garside-normal-form
kind: corollary
title: "The braid group word problem is decidable by garside normal form"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-left-garside-normal-form-is-unique,
       def-braid-group-by-the-artin-presentation,
       def-artin-right-complements-and-word-reversing,
       lem-artin-positive-word-reversing-is-complete,
       lem-every-positive-braid-divides-a-power-of-delta-on-both-sides,
       thm-positive-braids-have-left-and-right-gcds-and-lcms,
       lem-each-artin-atom-divides-delta-on-both-sides,
       lem-conjugation-by-delta-reverses-artin-generators,
       lem-positive-artin-relations-preserve-homogeneous-length,
       def-left-and-right-divisibility-for-positive-braids]
forward_refs: [cex-exponent-sum-is-not-a-complete-braid-normal-form]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "J. Gonzalez-Meneses, Basic results on braid groups, Sections 4 and 4.1, printed pp. 26-30"
      url: "https://arxiv.org/abs/1010.0321"
    - title: "J. Birman and T. Brendle, Braids: A Survey, Section 5.1"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge2$, let $B_n$ be the braid group of
[[def-braid-group-by-the-artin-presentation]], let $B_n^{+}$ be its positive
braid monoid with length $\ell$, half twist $\Delta$ of length $N$ and left
normal form as in [[thm-left-garside-normal-form-is-unique]], and let
$\Theta$ be the right complement of
[[def-artin-right-complements-and-word-reversing]] (total on positive words by
[[lem-every-positive-braid-divides-a-power-of-delta-on-both-sides]]). Then
the following procedures are effective, i.e. consist of finite searches over
explicitly given finite sets of words with decidable tests:

**(a) Positive-word calculus.** For positive words $u,v$:

  (i) the congruence $u\equiv^{+}v$ is decidable: it holds if and only if the
      right-reversing of the signed word $u^{-1}v$ terminates in the empty pair, equivalently
      if and only if $\Theta(u,v)=\Theta(v,u)=\varepsilon$;
  (ii) the left divisibility $[v]\preccurlyeq_L[u]$ is decidable, since
      $[v]\preccurlyeq_L[u]\iff\Theta(u,v)=\varepsilon$;
  (iii) the left-gcd $\Delta\wedge_L[u]$, the greatest common left divisor of
      the positive braid $[u]$ and $\Delta$, is computable: the finitely many
      words $z$ with $|z|\le\ell([u])$ whose classes satisfy $[z]\preccurlyeq_L[u]$
      and $[z]\preccurlyeq_L\Delta$ can be enumerated and tested by (ii), and
      the greatest such class — which exists and is unique — is found among
      them by finitely many divisibility comparisons; the same applies to any
      nonempty finite family of positive braids in place of $\{\Delta,[u]\}$.

**(b) Normal form computation.** There is an explicit algorithm which, given
a word $w$ in the letters $\sigma_i^{\pm1}$, computes the integer $p(x)$ and a
list of positive words whose classes $a_1,\dots,a_r$ form the left normal form
$x=\Delta^{p(x)}a_1\cdots a_r$ of the element $x\in B_n$ represented by $w$:

  (1) rewrite $w$ as $\Delta^{-j}A$ with $j\ge0$ and $A$ a positive word, using
      $\sigma_i^{-1}=R_i\Delta^{-1}$ with the explicit factors $R_i$ of the
      half twist and the sliding $z\Delta^{-1}=\Delta^{-1}\tau(z)$ for positive
      words $z$;
  (2) starting from $p:=-j$, while $\Delta\preccurlyeq_L[A]$ — a test available
      by (a)(ii) — replace $A$ by a positive word $C$ with
      $[A]\equiv^{+}[\Delta_{\mathrm{word}}][C]$, found by searching the
      positive words of length $\ell([A])-N$ (such a word exists because
      $\Delta\preccurlyeq_L[A]$), and increase $p$ by $1$;
  (3) while $[A]\ne1$, compute $a:=\Delta\wedge_L[A]$ by (a)(iii), append a
      positive word for $a$ to the list, replace $A$ by a positive word $C$
      with $[A]\equiv^{+}[a][C]$ found by the same length search, and continue.

The loop (2) terminates because $\ell([A])$ drops by $N\ge1$ at each pass, and
the loop (3) terminates because $\ell([A])$ drops by $\ell(a)\ge1$ at each
pass; the search in (3) is nonempty because $a\preccurlyeq_L[A]$.

**(c) Decision procedure.** Two words $w,w'$ in the letters
$\sigma_1^{\pm1},\dots,\sigma_{n-1}^{\pm1}$ represent the same element of
$B_n$ if and only if the data $\bigl(p;\,a_1,\dots,a_r\bigr)$ computed for
them by (b) are equal (same integer $p$, same number $r$ of factors, and
$[a_i]=[a_i']$ for all $i$, decided by (a)(i)). Consequently the word problem
of $B_n$ is decidable, and the left normal form is a complete computable
invariant of a braid.

Everything is effective: no search over an infinite candidate set and no
oracle is used, and the only non-terminating-looking test, the reversing
recursion, is total for the Artin presentation by the cited theorem. No choice
principle is used.

## Facts & Assumptions

**Given:** A natural number $n\ge2$, the braid group $B_n$ and the positive braid monoid $B_n^{+}$ with length $\ell$, half twist $\Delta$ of length $N$, right complement $\Theta$, and the left normal form theorem.

[F1] **Decidable positive-word equality and divisibility.** $\Theta$ is total on positive words, and for positive words $u,v$ one has $u\equiv^{+}v$ if and only if $\Theta(u,v)=\Theta(v,u)=\varepsilon$, while $\Theta(u,v)=\varepsilon$ if and only if $[u]=[v]c$ for some $c\in B_n^{+}$, i.e. $[v]\preccurlyeq_L[u]$. Both tests are decided by finitely many applications of the reversing recursion ([[lem-artin-positive-word-reversing-is-complete]], [[lem-every-positive-braid-divides-a-power-of-delta-on-both-sides]]).

[F2] **Existence of gcds and divisor finiteness.** Every nonempty finite family of elements of $B_n^{+}$ has a unique left-gcd and left-lcm; every left divisor of $b\in B_n^{+}$ has length at most $\ell(b)$, and there are only finitely many positive-word classes of any fixed length, so the left divisors of $b$ lie among the classes of words of length at most $\ell(b)$; membership in this finite candidate set is filtered by the divisibility test ([[thm-positive-braids-have-left-and-right-gcds-and-lcms]], [[def-left-and-right-divisibility-for-positive-braids]], [[lem-positive-artin-relations-preserve-homogeneous-length]]).

[F3] **Rewriting signed words.** $\Delta=\sigma_iR_i$ with $R_i\in B_n^{+}$ explicitly exhibited for every $i$, so $\sigma_i^{-1}=R_i\Delta^{-1}$ in $B_n$; and $z\Delta^{-1}=\Delta^{-1}\tau(z)$ for every positive word $z$, where $\tau$ is the automorphism induced by $\sigma_j\mapsto\sigma_{n-j}$, so conjugating a positive braid by $\Delta^{-1}$ yields a positive braid ([[lem-each-artin-atom-divides-delta-on-both-sides]], [[lem-conjugation-by-delta-reverses-artin-generators]]).

[F4] **Uniqueness of the left normal form.** Every $x\in B_n$ has exactly one expression $x=\Delta^{p}a_1\cdots a_r$ with each $a_i$ proper simple and $a_i=\Delta\wedge_L(a_i\cdots a_r)$; in it $p=p(x)=\max\{p:\Delta^{p}\preccurlyeq_Lx\}$, and writing $A(x)=\Delta^{-p(x)}x$ one has $A(x)=a_1\cdots a_r$ and $\Delta\not\preccurlyeq_LA(x)$ ([[thm-left-garside-normal-form-is-unique]]).

## Proof

**Proof technique:** direct.

1.1 **The positive-word calculus (a).** (i) and (ii) restate [F1], which also supplies their effectivity: the recursion rules of $\Theta$ reduce every query to finitely many letter-level values $\theta(s,t)$ and terminate for all pairs of positive words. For (iii), let $u$ be a positive word and $C$ the finite set of words $z$ with $|z|\le\ell([u])$; by [F2] a class $[z]$ is a common left divisor of $[u]$ and $\Delta$ if and only if it is the class of some $z\in C$ with $\Theta(u,z)=\varepsilon$ and $\Theta(\Delta_{\mathrm{word}},z)=\varepsilon$, both decidable by (i) and (ii). By [F2] the family $\{[u],\Delta\}$ has a unique left-gcd $d$, which belongs to this finite set of candidates; and an element $z_0$ of the candidate set satisfies $[z]\preccurlyeq_L[z_0]$ for every candidate $z$ if and only if $[z_0]=d$ (as $d$ is a candidate and every common divisor divides $d$). Since divisibility between candidates is decidable by (ii), finitely many comparisons locate $d$. The same argument applies to any nonempty finite family of positive braid classes in place of $\{\Delta,[u]\}$: choose one member $b$ and enumerate words of length at most $\ell(b)$, since every common left divisor divides $b$. The empty family has no left-gcd for $n\ge2$: every $\sigma_1^k$ is then a common divisor, whereas the length of any proposed greatest one is finite. [F1, F2]

1.2 **Rewriting a signed word (b)(1).** Let $w$ be a word in the letters $\sigma_i^{\pm1}$. Replacing each occurrence of $\sigma_i^{-1}$ by the positive word $R_i$ followed by the formal symbol $\Delta^{-1}$ (legitimate in $B_n$ by [F3]) produces a product of positive words and of symbols $\Delta^{-1}$. Moving each $\Delta^{-1}$ to the left past positive letters by $z\Delta^{-1}=\Delta^{-1}\tau(z)$ [F3] and conjugating the positive blocks it crosses, induction on the number of $\Delta^{-1}$ symbols rewrites $w$ as $\Delta^{-j}A$ with $j\ge0$ and $A$ a positive word; each move is an explicit word operation, so the procedure is effective. [F3]

2.1 **Extracting the maximal power (b)(2).** Suppose $x=\Delta^{-j}A$ with $A$ positive, so $x=\Delta^{p}A$ with $p:=-j$; by [F4] this is the maximal-$p$ decomposition precisely when $\Delta\not\preccurlyeq_L[A]$. If $\Delta\preccurlyeq_L[A]$, then $[A]=d\cdot C$ with $d:=\Delta$ and some $C\in B_n^{+}$, and since any positive word for $[A]$ has length $\ell([A])$ and any positive word for $C$ has length $\ell([A])-N$, a word for $C$ is found by searching the finitely many words of that length and testing $[A]\equiv^{+}[\Delta_{\mathrm{word}}][C]$ with the decidable equality of (a)(i); then $x=\Delta^{-j+1}C$, so replacing $A$ by $C$ and $p$ by $p+1$ preserves the identity $x=\Delta^{p}A$ and lowers $\ell([A])$ by $N\ge1$. Hence after finitely many passes $\Delta\not\preccurlyeq_L[A]$, and by the uniqueness in [F4] the current pair is $\bigl(p(x),A(x)\bigr)$. [F1, F2, F4, step 1.1, step 1.2]

3.1 **The greedy factor list (b)(3).** Assume $\Delta\not\preccurlyeq_L[A]$ and $[A]\ne1$. By (a)(iii) $a_1:=\Delta\wedge_L[A]$ is computable; by the computation of step 1.2 of [F4]'s proof (the first letter of a positive word for $[A]$ is an atom, and every atom divides $\Delta$) one has $a_1\ne1$, and $\Delta\not\preccurlyeq_L[A]$ gives $a_1\ne\Delta$; so $a_1$ is proper simple. Since $a_1\preccurlyeq_L[A]$, a positive word $C$ with $[A]\equiv^{+}[a_1][C]$ exists and has length $\ell([A])-\ell(a_1)$; searching the finitely many words of that length and testing the congruence with (a)(i) finds one. Replace $A$ by $C$ and repeat, appending each $a_i$ to the list. Length drops by $\ell(a_i)\ge1$ at each pass, so the loop halts at $[A]=1$ after $r$ passes with a list $a_1,\dots,a_r$ satisfying $A(x)=a_1\cdots a_r$ and, by construction, $a_i=\Delta\wedge_L(a_i\cdots a_r)$ for every $i$. [F1, F2, F4, step 1.1, step 2.1]

4.1 **Correctness of the output (b) and (c).** By steps 1.2, 2.1 and 3.1 the computed data satisfy $x=\Delta^{p}a_1\cdots a_r$ with every $a_i$ proper simple and $a_i=\Delta\wedge_L(a_i\cdots a_r)$, i.e. they are exactly the left normal form of $x$; conversely [F4] says that any two elements equal in $B_n$ have equal left normal forms, so two signed words represent the same element if and only if the computed data $\bigl(p;a_1,\dots,a_r\bigr)$ coincide, the comparisons $[a_i]=[a_i']$ being decided by (a)(i). Each computation is a finite searches over explicitly bounded sets of words with decidable tests, together with the terminating right-reversing procedure, and $\Theta$ is total, so the whole procedure terminates; no unbounded search and no choice principle is used. [F1, F2, F4, step 1.1, step 2.1, step 3.1]

5.1 **Assembly.** Part (a) is step 1.1, part (b) is steps 1.2, 2.1 and 3.1, and part (c) is step 4.1. All the algorithmic primitives invoked are finite: the reversing recursion, the length-bounded enumeration of positive words, the congruence test on positive words, and the divisibility test $\Theta(u,v)=\varepsilon$. The uniqueness of the left normal form is what makes the comparison of the computed data a *decision* of braid equality rather than merely a sufficient condition. No choice principle is used. ∎ [step 1.1, step 1.2, step 2.1, step 3.1, step 4.1]

## Remarks

- **Nature of the algorithm.** It is Garside's solution of the word problem as
  presented in J. González-Meneses, *Basic results on braid groups*, Section
  4, printed pp. 29--30: enumerate the positive braids of bounded length and
  compare candidates by the braid relations. The source notes that the method
  is highly inefficient; efficiency is not claimed here, only decidability and
  effectivity.
- **The reversing primitive.** The test $[v]\preccurlyeq_L[u]\iff\Theta(u,v)=\varepsilon$
  is the completeness half of the reversing criterion; totality of $\Theta$
  on the Artin presentation comes from the existence of common right multiples
  (powers of $\Delta$), so no hypothesis of confluence is needed beyond what
  is proved on this page.
- **Consequences.** The same normal form underlies Garside's conjugacy
  algorithm, but no conjugacy statement is made or used here. The invariance
  proved here is exactly what
  [[cex-exponent-sum-is-not-a-complete-braid-normal-form]] contrasts with a
  non-complete invariant.
- Nothing here uses the Axiom of Choice or any weaker choice principle.
