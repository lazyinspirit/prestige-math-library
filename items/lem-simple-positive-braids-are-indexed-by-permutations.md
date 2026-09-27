---
id: lem-simple-positive-braids-are-indexed-by-permutations
kind: lemma
title: "Simple positive braids are indexed by permutations"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-garside-half-twist-and-simple-positive-braid,
       def-braid-group-by-the-artin-presentation,
       lem-reduced-adjacent-transposition-words-have-well-defined-positive-lifts,
       thm-the-ore-fraction-group-of-positive-braids-is-the-artin-braid-group,
       thm-left-and-right-divisibility-extend-to-lattice-orders-on-the-braid-group,
       lem-conjugation-by-delta-reverses-artin-generators,
       lem-the-positive-braid-monoid-is-left-and-right-cancellative,
       def-left-and-right-divisibility-for-positive-braids,
       lem-positive-artin-relations-preserve-homogeneous-length,
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
    - title: "J. Gonzalez-Meneses, Basic results on braid groups, Section 4, printed pp. 26-29"
      url: "https://arxiv.org/abs/1010.0321"
    - title: "J. Birman and T. Brendle, Braids: A Survey, Section 5.1"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
    - title: "Patrick Dehornoy et al., Foundations of Garside Theory, Chapter IX, printed pp. 433-438"
      url: "https://dehornoy.lmno.cnrs.fr/Books/Garside/Text.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge2$, let $B_n^{+}$ be the positive braid monoid of
[[def-positive-braid-monoid]] with its atoms $\sigma_1,\dots,\sigma_{n-1}$, its
homogeneous length $\ell$
([[lem-positive-artin-relations-preserve-homogeneous-length]]), its
divisibility orders $\preccurlyeq_L,\preccurlyeq_R$
([[def-left-and-right-divisibility-for-positive-braids]]) and its half twist
$\Delta$ of length $N=n(n-1)/2$
([[def-garside-half-twist-and-simple-positive-braid]], so that a **simple
braid** is by definition a left divisor of $\Delta$). Let $S_n$ be the
symmetric group with adjacent transpositions $s_i$ and inversion number
$\operatorname{inv}$, let $\pi\colon B_n^{+}\to S_n$ and
$\sigma\mapsto\widehat{\sigma}$ be the homomorphism and the well-defined
positive lift of
[[lem-reduced-adjacent-transposition-words-have-well-defined-positive-lifts]],
and write $\operatorname{pos}_\tau(x):=\tau^{-1}(x)$ for the position of the
value $x$ in the one-line notation of $\tau$. Then:

**(a) Inversion calculus for one-sided multiplication.** For all
$\tau,\upsilon\in S_n$ and every $i$:
$\operatorname{inv}(\tau)=\operatorname{inv}(\tau^{-1})$,
$\operatorname{inv}(\tau\upsilon)\le\operatorname{inv}(\tau)
+\operatorname{inv}(\upsilon)$, and
$\operatorname{inv}(s_i\tau)=\operatorname{inv}(\tau)+1$ when
$\operatorname{pos}_\tau(i)<\operatorname{pos}_\tau(i+1)$, while
$\operatorname{inv}(s_i\tau)=\operatorname{inv}(\tau)-1$ otherwise.

**(b) Reducedness criterion.** For $a\in B_n^{+}$ the following four
assertions are equivalent: (i) $a\preccurlyeq_L\Delta$; (ii)
$a\preccurlyeq_R\Delta$; (iii) $a=\widehat{\pi(a)}$; (iv)
$\ell(a)=\operatorname{inv}(\pi(a))$. In particular every left or right divisor
of $\Delta$ is a *reduced* positive braid, i.e. a word for it of length
$\ell(a)$ is a reduced word for its permutation.

**(c) Bijection.** The map $\sigma\mapsto\widehat{\sigma}$ is a bijection from
$S_n$ onto the set of left divisors of $\Delta$, the set of left divisors of
$\Delta$ coincides with the set of right divisors of $\Delta$, and this common
set has exactly $n!$ elements. In particular every simple braid is balanced:
it is a left divisor of $\Delta$ if and only if it is a right divisor of
$\Delta$.

**(d) Descents.** Let $b\in B_n^{+}$ satisfy
$\ell(b)=\operatorname{inv}(\pi(b))$, and let $i\in\{1,\dots,n-1\}$ with
$\sigma_i\preccurlyeq_L b$. Then
$\operatorname{pos}_{\pi(b)}(i)>\operatorname{pos}_{\pi(b)}(i+1)$.
Consequently, if $\sigma_i\preccurlyeq_L b$ for *every* $i$, then
$\pi(b)=w_0$, where $w_0(x)=n+1-x$ is the longest permutation, and
$b=\Delta$.

**(e) Divisibility in the braid group.** Let $B_n$ be the braid group of
[[def-braid-group-by-the-artin-presentation]], identified with the group of
fractions of $B_n^{+}$ by
[[thm-the-ore-fraction-group-of-positive-braids-is-the-artin-braid-group]], and
let $\preccurlyeq_L$ also denote the order that
[[thm-left-and-right-divisibility-extend-to-lattice-orders-on-the-braid-group]]
extends to $B_n$. Then, for $a\in B_n^{+}$,
$$a\preccurlyeq_L\Delta\text{ in }B_n\quad\Longleftrightarrow\quad a\text{ is a simple braid},$$
and analogously with $\preccurlyeq_R$. So the simple braids are exactly the
positive left divisors of $\Delta$ in the braid group.

For $n\le1$ there is no generator, $B_n^{+}$ and $S_n$ are trivial,
$\Delta=1$, $N=0$, and all assertions are vacuous. Nothing here uses a choice
principle: every argument is a finite permutation computation or an induction
over a finite word.

## Facts & Assumptions

**Given:** A natural number $n\ge2$, the positive braid monoid $B_n^{+}$ with atoms $\sigma_1,\dots,\sigma_{n-1}$, length $\ell$ and half twist $\Delta$ of length $N=n(n-1)/2$, the symmetric group $S_n$ with adjacent transpositions $s_i$ and inversion number $\operatorname{inv}$, and the maps $\pi$ and $\sigma\mapsto\widehat{\sigma}$.

[F1] $B_n^{+}$ is generated by the atoms, the length is additive and $\ell([w])=|w|$ for every positive word $w$, $\ell(x)=0$ implies $x=1$, and $\Delta$ is the class of the triangular word $T_1T_2\cdots T_{n-1}$ with $T_k=\sigma_k\sigma_{k-1}\cdots\sigma_1$, so that $\Delta=\sigma_1\cdots\sigma_{n-1}\cdot\sigma_1\cdots\sigma_{n-2}\cdots\sigma_1$ has length $N$ ([[def-positive-braid-monoid]], [[lem-positive-artin-relations-preserve-homogeneous-length]], [[def-garside-half-twist-and-simple-positive-braid]]). The orders $\preccurlyeq_L,\preccurlyeq_R$ are the divisibility orders, with $a\preccurlyeq_L b\iff\exists c\,(b=ac)$ and $a\preccurlyeq_R b\iff\exists c\,(b=ca)$, and left division is invariant under left multiplication ([[def-left-and-right-divisibility-for-positive-braids]]).

[F2] **The type-A lift machinery** ([[lem-reduced-adjacent-transposition-words-have-well-defined-positive-lifts]]). There is a surjective monoid homomorphism $\pi\colon B_n^{+}\to S_n$ with $\pi(\sigma_i)=s_i$; for every $\tau\in S_n$ and $i$, the inversion set satisfies $E(\tau s_i)=E(\tau)\triangle\{\{\tau(i),\tau(i+1)\}\}$ and $\operatorname{inv}(\tau s_i)=\operatorname{inv}(\tau)+1$ if $\tau(i)<\tau(i+1)$ and $\operatorname{inv}(\tau s_i)=\operatorname{inv}(\tau)-1$ otherwise, with $|E(\tau)|=\operatorname{inv}(\tau)$; $\operatorname{inv}(\pi(a))\le\ell(a)$ for $a\in B_n^{+}$; a word is reduced exactly when its length is the inversion number of the permutation it represents, and all reduced words for one $\sigma$ represent the same element $\widehat{\sigma}$ of $B_n^{+}$, with $\pi(\widehat{\sigma})=\sigma$, $\ell(\widehat{\sigma})=\operatorname{inv}(\sigma)$, $\widehat{s_i}=\sigma_i$ and $\widehat{\cdot}$ a section of $\pi$; finally $\pi(\Delta)=w_0$ and $\Delta=\widehat{w_0}$, where $w_0(x)=n+1-x$ is the longest permutation of inversion number $N$.

[F3] **Reversal** ([[lem-the-positive-braid-monoid-is-left-and-right-cancellative]], [[lem-conjugation-by-delta-reverses-artin-generators]]). Reversal of words induces an involutive anti-automorphism $\rho$ of $B_n^{+}$ with $\rho(xy)=\rho(y)\rho(x)$, it exchanges the two divisibility orders ($a\preccurlyeq_L b\iff\rho(a)\preccurlyeq_R\rho(b)$), $\rho(\sigma_i)=\sigma_i$, and $\rho(\Delta)=\Delta$.

[F4] **Passage to the group** ([[thm-the-ore-fraction-group-of-positive-braids-is-the-artin-braid-group]], [[thm-left-and-right-divisibility-extend-to-lattice-orders-on-the-braid-group]]). $B_n^{+}$ is a submonoid of $B_n$, and on positive elements the group order of the second item agrees with the monoid order: for $a,b\in B_n^{+}$, $a\preccurlyeq_L b$ in $B_n$ iff $a\preccurlyeq_L b$ in $B_n^{+}$.

## Proof

**Proof technique:** direct.

1.1 **The permutation calculus (a).** By [F2], $E(\tau s_i)=E(\tau)\triangle\{\{\tau(i),\tau(i+1)\}\}$ and $\operatorname{inv}(\tau s_i)=\operatorname{inv}(\tau)\pm1$, the sign being $+1$ exactly when $\tau(i)<\tau(i+1)$; moreover $(i,j)\mapsto(\tau(j),\tau(i))$ is a bijection $\operatorname{Inv}(\tau)\to\operatorname{Inv}(\tau^{-1})$ between position inversions, so $\operatorname{inv}(\tau)=\operatorname{inv}(\tau^{-1})$. Applying the right-multiplication formula to $\tau^{-1}$ and using $(s_i\tau)^{-1}=\tau^{-1}s_i$ gives $\operatorname{inv}(s_i\tau)=\operatorname{inv}(\tau^{-1}s_i)=\operatorname{inv}(\tau^{-1})\pm1=\operatorname{inv}(\tau)\pm1$, with sign $+1$ exactly when $\tau^{-1}(i)<\tau^{-1}(i+1)$, that is $\operatorname{pos}_\tau(i)<\operatorname{pos}_\tau(i+1)$. Finally, concatenating a reduced word for $\tau$ with one for $\upsilon$ gives a word of length $\operatorname{inv}(\tau)+\operatorname{inv}(\upsilon)$ representing $\tau\upsilon$, so the minimal length satisfies $\operatorname{inv}(\tau\upsilon)\le\operatorname{inv}(\tau)+\operatorname{inv}(\upsilon)$ by [F2]. [F2]

1.2 **Reducedness criterion.** (iii) $\Leftrightarrow$ (iv): if $\ell(a)=\operatorname{inv}(\pi(a))$ and $w$ is a word with $[w]=a$, then $|w|=\ell(a)=\operatorname{inv}(\pi(a))=\operatorname{inv}(\sigma(w))$, so $w$ is reduced and $a=[w]=\widehat{\pi(a)}$; conversely $\ell(\widehat{\sigma})=\operatorname{inv}(\sigma)$ by [F2]. [F1, F2]

2.1 **Every permutation gives a left divisor of $\Delta$.** Let $\sigma\in S_n$ and $\tau:=\sigma^{-1}w_0$. Since $\tau^{-1}=w_0^{-1}\sigma=w_0\sigma$, the value-pair inversion set of $\tau$ is computed by $\{u,v\}\in E(\tau)\iff w_0(\sigma(u))>w_0(\sigma(v))\iff\sigma(u)<\sigma(v)$ for $u<v$; hence $E(\tau)$ consists of the $2$-subsets $\{u,v\}$, $u<v$, on which $\sigma$ is *increasing*, and $|E(\tau)|=\binom n2-\operatorname{inv}(\sigma)=N-\operatorname{inv}(\sigma)$, because $\operatorname{inv}(\sigma)=\#\{u<v:\sigma(u)>\sigma(v)\}$ and $\binom n2=N$. By [F2], $\operatorname{inv}(\tau)=|E(\tau)|$, so $\operatorname{inv}(\sigma)+\operatorname{inv}(\sigma^{-1}w_0)=N$. Take a reduced word $u$ for $\sigma$ and a reduced word $v$ for $\sigma^{-1}w_0$; the concatenation represents $\sigma\sigma^{-1}w_0=w_0$ and has length $\operatorname{inv}(\sigma)+\operatorname{inv}(\sigma^{-1}w_0)=N=\operatorname{inv}(w_0)$, so it is a reduced word for $w_0$ by [F2]. By [F2] all reduced words for $w_0$ represent $\widehat{w_0}=\Delta$, so $\Delta=[uv]=\widehat{\sigma}\cdot[v]$; in particular $\widehat{\sigma}\preccurlyeq_L\Delta$ for every $\sigma\in S_n$. [F1, F2, step 1.1]

2.2 **Left divisors of $\Delta$ are lifts (b), forward implication.** Let $a,c\in B_n^{+}$ with $ac=\Delta$. Additivity of $\ell$ gives $\ell(a)+\ell(c)=\ell(\Delta)=N$, and applying $\pi$ gives $\pi(a)\pi(c)=\pi(\Delta)=w_0$. Hence $N=\operatorname{inv}(w_0)=\operatorname{inv}(\pi(a)\pi(c))\le\operatorname{inv}(\pi(a))+\operatorname{inv}(\pi(c))\le\ell(a)+\ell(c)=N$ by step 1.1 and [F2]. All inequalities are equalities, so in particular $\ell(a)=\operatorname{inv}(\pi(a))$, and $a=\widehat{\pi(a)}$ by step 1.2; the same equality chain also gives $\ell(c)=\operatorname{inv}(\pi(c))$, so step 1.2 yields $c=\widehat{\pi(c)}$. [F1, F2, step 1.1, step 1.2]

2.3 **Descents (d).** Let $b\in B_n^{+}$ satisfy $\ell(b)=\operatorname{inv}(\pi(b))$ and let $\sigma_i\preccurlyeq_L b$, say $b=\sigma_ic$; by additivity $\ell(b)=1+\ell(c)$, and applying $\pi$ gives $\pi(b)=s_i\pi(c)$. If $\operatorname{inv}(s_i\pi(c))=\operatorname{inv}(\pi(c))-1$, then $\operatorname{inv}(\pi(b))\le\operatorname{inv}(\pi(c))-1\le\ell(c)-1<\ell(c)+1=\ell(b)=\operatorname{inv}(\pi(b))$, a contradiction; hence the sign is $+1$ by step 1.1, i.e. $\operatorname{inv}(s_i\pi(c))=\operatorname{inv}(\pi(c))+1$, and then $\ell(b)=\operatorname{inv}(\pi(b))=1+\operatorname{inv}(\pi(c))$ forces $\operatorname{inv}(\pi(c))=\ell(c)$. By step 1.1 the sign $+1$ means $\operatorname{pos}_{\pi(c)}(i)<\operatorname{pos}_{\pi(c)}(i+1)$. Left multiplication by $s_i$ swaps the values $i$ and $i+1$ in the one-line notation, because $(s_i\tau)(x)=s_i(\tau(x))$ by [F2]; therefore $\operatorname{pos}_{\pi(b)}(i)=\operatorname{pos}_{\pi(c)}(i+1)>\operatorname{pos}_{\pi(c)}(i)=\operatorname{pos}_{\pi(b)}(i+1)$, as claimed. If this holds for all $i\in\{1,\dots,n-1\}$, then $\operatorname{pos}_{\pi(b)}(1)>\operatorname{pos}_{\pi(b)}(2)>\cdots>\operatorname{pos}_{\pi(b)}(n)$, so the one-line notation of $\pi(b)$ is $(n,n-1,\dots,1)$ and $\pi(b)=w_0$; since $b$ is reduced, step 1.2 gives $b=\widehat{w_0}=\Delta$ by [F2]. [F1, F2, step 1.1, step 1.2]

3.1 **The bijection (b), converse, and (c).** If $a=\widehat{\pi(a)}$ then $a\preccurlyeq_L\Delta$ by step 2.1, and if $a\preccurlyeq_L\Delta$ then $a=\widehat{\pi(a)}$ by step 2.2; combined with step 1.2 this proves the equivalence of (i), (iii), (iv) of (b), and shows that the image of $\sigma\mapsto\widehat{\sigma}$ is exactly the set of left divisors of $\Delta$. That map is injective because $\pi(\widehat{\sigma})=\sigma$ for all $\sigma$ [F2], so it is a bijection onto the left divisors of $\Delta$, a set of $n!$ elements. [F1, F2, step 2.1, step 2.2, step 1.2]

4.1 **Right divisors coincide with left divisors (b), (c).** Let $\rho$ be the reversal anti-automorphism of [F3]. First, $\pi(\rho(b))=\pi(b)^{-1}$ for every $b\in B_n^{+}$: the map $\psi:=\pi\circ\rho$ is an anti-homomorphism with $\psi(\sigma_i)=s_i$, so $b\mapsto\psi(b)^{-1}$ is a homomorphism $B_n^{+}\to S_n$ carrying every $\sigma_i$ to $s_i$, hence equals $\pi$ by uniqueness of the homomorphism induced by the atoms [F1]. Second, $\rho(\widehat{\tau})=\widehat{\tau^{-1}}$ for every $\tau\in S_n$: applying the first identity, $\pi(\rho(\widehat{\tau}))=\pi(\widehat{\tau})^{-1}=\tau^{-1}$, while $\rho$ preserves lengths, so $\ell(\rho(\widehat{\tau}))=\operatorname{inv}(\tau)=\operatorname{inv}(\tau^{-1})$ and step 1.2 gives $\rho(\widehat{\tau})=\widehat{\tau^{-1}}$ (note $\tau\mapsto\tau^{-1}$ is a bijection of $S_n$, so the right divisors listed below are again indexed by all of $S_n$). Now $a\preccurlyeq_R\Delta$ means $\Delta=ca$; applying the involutive anti-automorphism $\rho$ and using $\rho(\Delta)=\Delta$ and $\rho(ca)=\rho(a)\rho(c)$ this is equivalent to $\Delta=\rho(a)\rho(c)$, i.e. to $\rho(a)\preccurlyeq_L\Delta$, hence by step 3.1 to $\rho(a)=\widehat{\pi(a)^{-1}}$, i.e. to $a=\rho(\widehat{\pi(a)^{-1}})=\widehat{\pi(a)}$. Therefore $a$ is a right divisor of $\Delta$ iff $a=\widehat{\pi(a)}$ iff $a$ is a left divisor of $\Delta$; the two divisor sets coincide and both have the $n!$ elements of step 3.1. [F1, F2, F3, step 1.2, step 3.1]

4.2 **Divisibility in the braid group (e).** Let $a\in B_n^{+}$. Since $\Delta$ is positive, [F4] says that $a\preccurlyeq_L\Delta$ in $B_n$ holds if and only if $a\preccurlyeq_L\Delta$ in $B_n^{+}$, which by (b) is the definition of $a$ being a simple braid; the right-handed statement is identical with $\preccurlyeq_R$. [F1, F4, step 3.1]

5.1 **Assembly.** Part (a) is step 1.1, part (b) is steps 1.2, 2.2, 3.1 and 4.1, part (c) is steps 3.1 and 4.1, part (d) is step 2.3, and part (e) is step 4.2. The only imported statements about $S_n$ are the inversion calculus, the type-A Matsumoto theorem and the identification $\pi(\Delta)=w_0$ collected in [F2]; no geometric model of braids, no crossing number and no injectivity of a geometric representation is used, so the count $n!$ of simple braids is established purely algebraically. For $n\le1$ the alphabet is empty, $S_n$ and $B_n^{+}$ are trivial and all assertions are vacuous, as noted in [F1] and statement; every construction above is finite and no choice principle is used. ∎ [step 1.1, step 2.1, step 1.2, step 2.2, step 3.1, step 4.1, step 2.3, step 4.2]

## Remarks

- **What is not used.** The published Coxeter-presentation theorem
  [[thm-the-symmetric-group-has-the-coxeter-presentation]] is not used: the
  only permutation input is the inversion calculus and the braid-connectivity
  of reduced words already recorded in [F2]. In particular the uniqueness of
  $\widehat{\sigma}$ rests on the defining relations of $B_n^{+}$, and the
  bijection of (c) is obtained without any geometric injectivity statement
  about crossings.
- **Why the right divisors agree.** The identification
  $\rho(\widehat{\tau})=\widehat{\tau^{-1}}$ is the technical point of the
  proof of (c): reversal of words is an anti-automorphism, so it converts left
  divisibility into right divisibility, but it acts on the permutation by
  inversion, and the lift is insensitive to which reduced word is chosen.
- **Consequences used below.** Part (d) is the shape in which (c) is applied
  to the half twist
  [[lem-delta-is-the-lcm-of-the-artin-atoms-and-has-the-same-left-and-right-divisors]]:
  an atom that left-divides a reduced positive braid forces the corresponding
  adjacent descent of its permutation, and a braid divisible by every atom is
  $\Delta$. Part (b) is the criterion by which a simple braid is recognised
  from its permutation and from its length.
- **The two orders are genuinely different.** Statement (c) says that the
  *divisor sets* of $\Delta$ coincide, not that
  $\preccurlyeq_L=\preccurlyeq_R$: the companion page exhibits a pair of
  positive braids in $B_3$ with different left and right meets. Balancedness
  is a property of the divisors of $\Delta$ alone.
- Nothing here uses the Axiom of Choice or any weaker choice principle; all
  words occurring are finite, and the only minima taken are minima of
  nonempty subsets of $\mathbb N$.
