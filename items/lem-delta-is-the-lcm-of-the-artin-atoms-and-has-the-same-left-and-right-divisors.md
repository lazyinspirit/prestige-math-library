---
id: lem-delta-is-the-lcm-of-the-artin-atoms-and-has-the-same-left-and-right-divisors
kind: lemma
title: "Delta is the lcm of the artin atoms and has the same left and right divisors"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-simple-positive-braids-are-indexed-by-permutations,
       thm-positive-braids-have-left-and-right-gcds-and-lcms,
       lem-each-artin-atom-divides-delta-on-both-sides,
       def-garside-half-twist-and-simple-positive-braid,
       lem-conjugation-by-delta-reverses-artin-generators,
       lem-the-positive-braid-monoid-is-left-and-right-cancellative,
       def-left-and-right-divisibility-for-positive-braids,
       def-positive-braid-monoid]
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
    - title: "J. Gonzalez-Meneses, Basic results on braid groups, Section 4, printed pp. 27-28"
      url: "https://arxiv.org/abs/1010.0321"
    - title: "Patrick Dehornoy et al., Foundations of Garside Theory, Chapter IX, printed pp. 433-438"
      url: "https://dehornoy.lmno.cnrs.fr/Books/Garside/Text.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge2$, let $B_n^{+}$ be the positive braid monoid of
[[def-positive-braid-monoid]] with its atoms $\sigma_1,\dots,\sigma_{n-1}$,
its divisibility orders $\preccurlyeq_L,\preccurlyeq_R$ and their lcm and gcd
notation ([[def-left-and-right-divisibility-for-positive-braids]]), and let
$\Delta$ be the half twist of
[[def-garside-half-twist-and-simple-positive-braid]]. Then:

**(a) Left lcm.** $\Delta$ is a common left multiple of all atoms, and every
common left multiple $m\in B_n^{+}$ of $\sigma_1,\dots,\sigma_{n-1}$ satisfies
$\Delta\preccurlyeq_L m$. Equivalently,
$\Delta=\sigma_1\vee_L\sigma_2\vee_L\cdots\vee_L\sigma_{n-1}$.

**(b) Right lcm.** $\Delta$ is a common right multiple of all atoms, and every
common right multiple $m\in B_n^{+}$ satisfies $\Delta\preccurlyeq_R m$;
equivalently $\Delta=\sigma_1\vee_R\sigma_2\vee_R\cdots\vee_R\sigma_{n-1}$.

**(c) The divisors coincide.** An element $a\in B_n^{+}$ is a left divisor of
$\Delta$ if and only if it is a right divisor of $\Delta$, and this happens if
and only if $a=\widehat{\sigma}$ for a unique $\sigma\in S_n$; in particular
there are exactly $n!$ simple braids, and the sets of left and of right
divisors of $\Delta$ both equal
$\{\widehat{\sigma}:\sigma\in S_n\}$.

**(d) Characterisation by the atoms.** For $m\in B_n^{+}$ one has
$\Delta\preccurlyeq_L m$ if and only if $\sigma_i\preccurlyeq_L m$ for every
$i\in\{1,\dots,n-1\}$, and analogously with $\preccurlyeq_R$.

For $n\le1$ the alphabet is empty, the monoid is trivial, $\Delta=1$ and all
assertions hold with $n!=1$ (there is exactly one simple braid, namely $1$).
No choice principle is used; the only infinite objects are the finitely many
fixed-length positive words used to invoke the gcd/lcm theorem.

## Facts & Assumptions

**Given:** A natural number $n\ge2$, the positive braid monoid $B_n^{+}$ with atoms $\sigma_1,\dots,\sigma_{n-1}$, divisibility orders $\preccurlyeq_L,\preccurlyeq_R$ and half twist $\Delta$, and the bijection $\sigma\mapsto\widehat{\sigma}$ from $S_n$ onto the set of left divisors of $\Delta$.

[F1] Every atom is both a left and a right divisor of $\Delta$: for each $i$ there are $R_i,L_i\in B_n^{+}$ with $\Delta=\sigma_iR_i=L_i\sigma_i$ ([[lem-each-artin-atom-divides-delta-on-both-sides]]). The half twist is the class of the triangular word with $\ell(\Delta)=N=n(n-1)/2$ ([[def-garside-half-twist-and-simple-positive-braid]]).

[F2] Every nonempty finite subset of $B_n^{+}$ has a left-lcm and a left-gcd and a right-lcm and a right-gcd, and these are unique; a common left divisor of a family divides its left-gcd, and a left-lcm divides every common left multiple ([[thm-positive-braids-have-left-and-right-gcds-and-lcms]], [[def-left-and-right-divisibility-for-positive-braids]]).

[F3] **Simple braids and descents** ([[lem-simple-positive-braids-are-indexed-by-permutations]]). An element $a\in B_n^{+}$ is a left divisor of $\Delta$ if and only if it is a right divisor of $\Delta$, if and only if $a=\widehat{\pi(a)}$; the map $\sigma\mapsto\widehat{\sigma}$ is a bijection from $S_n$ onto the left divisors of $\Delta$, so there are $n!$ simple braids. Moreover, if $b\in B_n^{+}$ satisfies $\ell(b)=\operatorname{inv}(\pi(b))$ and $\sigma_i\preccurlyeq_L b$ for every $i$, then $\pi(b)=w_0$ and $b=\Delta$.

[F4] **Reversal** ([[lem-the-positive-braid-monoid-is-left-and-right-cancellative]], [[lem-conjugation-by-delta-reverses-artin-generators]]). Reversal of words induces an involutive anti-automorphism $\rho$ of $B_n^{+}$ with $\rho(\sigma_i)=\sigma_i$ and $\rho(\Delta)=\Delta$, and it exchanges the two divisibility orders: $a\preccurlyeq_L b\iff\rho(a)\preccurlyeq_R\rho(b)$ and $a\preccurlyeq_R b\iff\rho(a)\preccurlyeq_L\rho(b)$.

## Proof

**Proof technique:** direct.

1.1 **The left lcm (a).** By [F1] $\Delta$ is a common left multiple of the atoms. Let $m\in B_n^{+}$ be any common left multiple and put $d:=\Delta\wedge_L m$, which exists by [F2]. For every $i$ the atom $\sigma_i$ is a common left divisor of $\Delta$ (by [F1]) and of $m$ (by hypothesis), hence $\sigma_i\preccurlyeq_L d$ by the defining property of the gcd. In particular $d\neq1$ unless $n=1$; more importantly $d\preccurlyeq_L\Delta$, so $d$ is a simple braid and therefore $d=\widehat{\pi(d)}$ with $\ell(d)=\operatorname{inv}(\pi(d))$ by [F3]. Since every atom left-divides $d$, [F3] applied to $b:=d$ gives $\pi(d)=w_0$, hence $d=\widehat{w_0}=\Delta$. Thus $\Delta=d\preccurlyeq_L m$: $\Delta$ left-divides every common left multiple of the atoms, so it is their left-lcm. [F1, F2, F3]

2.1 **The right lcm (b).** By [F1] $\Delta$ is a common right multiple. Let $m$ be any common right multiple of the atoms and apply the involutive anti-automorphism $\rho$ of [F4]: $\sigma_i\preccurlyeq_R m$ is equivalent to $\rho(\sigma_i)=\sigma_i\preccurlyeq_L\rho(m)$, so $\rho(m)$ is a common left multiple of the atoms, whence $\Delta\preccurlyeq_L\rho(m)$ by step 1.1. Applying $\rho$ again and using $\rho(\Delta)=\Delta$ gives $\Delta=\rho(\Delta)\preccurlyeq_R\rho(\rho(m))=m$. Hence $\Delta$ right-divides every common right multiple of the atoms and is their right-lcm. [F1, F4, step 1.1]

3.1 **Divisors and the atom criterion (c), (d).** Part (c) is [F3] restated: a left divisor of $\Delta$ is the same as a right divisor, the common set is $\{\widehat{\sigma}:\sigma\in S_n\}$, and it has $n!$ elements. For (d): if $\sigma_i\preccurlyeq_L m$ for every $i$ then $m$ is a common left multiple of the atoms, so $\Delta\preccurlyeq_L m$ by step 1.1; conversely $\Delta\preccurlyeq_L m$ implies $\sigma_i\preccurlyeq_L m$ for every $i$ because $\sigma_i\preccurlyeq_L\Delta$ by [F1] and $\preccurlyeq_L$ is transitive. The right-handed statement is the same argument with step 1.1 replaced by step 2.1 and [F1]'s right divisibility. [F1, F2, F3, step 1.1, step 2.1]

4.1 **Assembly.** Part (a) is step 1.1, part (b) is step 2.1, parts (c) and (d) are step 3.1. No use is made of an assumed lcm of the atoms before it is proved: the argument only uses the existence of the gcd $\Delta\wedge_Lm$ for two elements, which is supplied by [F2], and it identifies the gcd with $\Delta$ by the descent criterion of [F3]. For $n\le1$ the alphabet is empty, $B_n^{+}=\{1\}$, $\Delta=1$, the only simple braid is $1$, and all assertions are trivial. No choice principle is used. ∎ [step 1.1, step 2.1, step 3.1]

## Remarks

- **No circularity.** The plan of this page warns against using the future lcm
  claim
  [[thm-positive-braids-have-left-and-right-gcds-and-lcms]]
  to *define* $\Delta$: here the gcd/lcm machinery is applied to the pair
  $(\Delta,m)$, and the specific element $\Delta$ is the independently defined
  triangular word of
  [[def-garside-half-twist-and-simple-positive-braid]].
- **The source form.** The left lcm statement is the algebraic content of
  Garside's observation $\Delta=\sigma_1\vee\cdots\vee\sigma_{n-1}$ used in
  J. González-Meneses, *Basic results on braid groups*, Section 4, printed
  p. 27. The proof given here derives it from the permutation indexing of the
  divisors of $\Delta$ (Garside's own argument compares the lengths of the
  divisors), so it does not presuppose the crossing number of a braid.
- **Consequences.** Part (a) is used in
  [[lem-a-central-positive-braid-is-a-power-of-delta-squared-for-n-greater-than-two]]
  to turn "every atom is a left divisor of $A$" into "$\Delta$ is a left
  divisor of $A$", and part (c) supplies the balanced divisor set used there
  and in
  [[thm-left-garside-normal-form-is-unique]].
- Nothing here uses a choice principle: the gcd of two positive braids is
  obtained by a finite enumeration of the positive words of bounded length
  ([[thm-positive-braids-have-left-and-right-gcds-and-lcms]]).
