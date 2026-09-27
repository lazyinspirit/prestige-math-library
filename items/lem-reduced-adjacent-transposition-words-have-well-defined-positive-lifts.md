---
id: lem-reduced-adjacent-transposition-words-have-well-defined-positive-lifts
kind: lemma
title: "Reduced adjacent-transposition words have well-defined positive lifts"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-positive-braid-monoid,
       lem-positive-artin-relations-preserve-homogeneous-length,
       thm-adjacent-transpositions-generate-the-symmetric-group,
       def-symmetric-group,
       def-inversions-inversion-number-and-sign,
       def-garside-half-twist-and-simple-positive-braid]
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
    - title: "Patrick Dehornoy et al., Foundations of Garside Theory, Chapter IX, Proposition 1.10 (exchange) and Corollary 1.11(ii) (Matsumoto), printed pp. 434-435"
      url: "https://dehornoy.lmno.cnrs.fr/Books/Garside/Text.pdf"
    - title: "M. Macauley, Math 4120 lecture notes: Generating sets for S_n"
      url: "https://www.math.clemson.edu/~macaule/classes/m20_math4120/slides/math4120_lecture-2-03_h.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

Let $n\ge2$, let $S_n$ be the symmetric group on $\{1,\dots,n\}$ with the
product convention of [[def-symmetric-group]] (the product of permutations
acts with the right factor first, and permutations are composed as functions),
let $s_i:=(i\ i+1)$ be the adjacent transpositions. Transport the inversion
convention of [[def-inversions-inversion-number-and-sign]] from
$\{0,\dots,n-1\}$ by the increasing bijection $\kappa(j)=j-1$:
for $\sigma\in S_n$ put $\sigma_0:=\kappa\sigma\kappa^{-1}$,
$\operatorname{Inv}(\sigma):=\{(a,b):1\le a<b\le n,\ \sigma(a)>\sigma(b)\}$,
and $\operatorname{inv}(\sigma):=|\operatorname{Inv}(\sigma)|$.
The map $(a,b)\mapsto(a-1,b-1)$ identifies this set with
$\operatorname{Inv}(\sigma_0)$ of that definition, so the numbers agree. Let
$B_n^{+}$ be the positive braid monoid of [[def-positive-braid-monoid]] with
atoms $\sigma_i$, length $\ell$, and half twist $\Delta$ of
[[def-garside-half-twist-and-simple-positive-braid]], of length
$N=n(n-1)/2$. A word $s_{i_1}|s_{i_2}|\cdots|s_{i_k}$ in the symbols $s_1,\dots,s_{n-1}$
is **reduced** if $k$ is minimal among the words representing the permutation
$s_{i_1}s_{i_2}\cdots s_{i_k}$.

**(a) The type-A relations.** $s_i^2=\mathrm{id}$ for all $i$,
$s_is_j=s_js_i$ whenever $|i-j|>1$, and
$s_is_{i+1}s_i=s_{i+1}s_is_{i+1}$ whenever $1\le i\le n-2$.

**(b) The homomorphism to the symmetric group.** There is a monoid
homomorphism $\pi\colon B_n^{+}\to S_n$ with $\pi(\sigma_i)=s_i$, and it is
surjective.

**(c) The inversion calculus.** For every $\tau\in S_n$ and every $i$, writing
the inversion set as pairs of values,
$$E(\tau):=\bigl\{\{u,v\}:u<v,\ \tau^{-1}(u)>\tau^{-1}(v)\bigr\},$$
one has $E(\tau s_i)=E(\tau)\triangle\{\{\tau(i),\tau(i+1)\}\}$, so that
$\operatorname{inv}(\tau s_i)=\operatorname{inv}(\tau)+1$ if
$\tau(i)<\tau(i+1)$ and $\operatorname{inv}(\tau s_i)=\operatorname{inv}(\tau)-1$
otherwise; moreover $|E(\tau)|=\operatorname{inv}(\tau)$ and
$\operatorname{inv}(\pi(a))\le\ell(a)$ for every $a\in B_n^{+}$.

**(d) The prefix invariant.** For a word $w=s_{i_1}|\cdots|s_{i_k}$ with prefix
products $\tau_t=s_{i_1}\cdots s_{i_t}$ put
$c_t:=\{\tau_{t-1}(i_t),\tau_{t-1}(i_t+1)\}$ and
$N(w):=\triangle_{t=1}^{k}\{c_t\}$. Then $N(w)=E(\sigma(w))$ where
$\sigma(w)$ is the permutation represented by $w$; consequently
$\operatorname{inv}(\sigma(w))=|N(w)|\le k$.

**(e) Length equals inversion number.** Every $\sigma\in S_n$ has minimal word
length $\|\sigma\|:=\min\{k:\sigma=s_{i_1}\cdots s_{i_k}\}$ equal to
$\operatorname{inv}(\sigma)$; a word is reduced if and only if its length is
$\operatorname{inv}$ of the permutation it represents.

**(f) Exchange.** Let $w=s_{i_1}|\cdots|s_{i_k}$ be reduced for $\sigma$ and let
$j$ satisfy $\sigma(j)>\sigma(j+1)$. Then $\{\sigma(j),\sigma(j+1)\}$ equals
exactly one of the transpositions $c_1,\dots,c_k$ of (d), say $c_r$, and
deleting the $r$-th letter gives a reduced word
$s_{i_1}|\cdots|\widehat{s_{i_r}}|\cdots|s_{i_k}$ for $\sigma s_j$.

**(g) Well-defined positive lifts.** Any two reduced words for the same
$\sigma\in S_n$ are connected by braid moves, that is, by replacements of a
subword $s_is_{i+1}s_i$ by $s_{i+1}s_is_{i+1}$, and of a subword $s_is_j$ by
$s_js_i$ for $|i-j|>1$. Hence all reduced words for $\sigma$ represent one and
the same element of $B_n^{+}$, denoted $\widehat{\sigma}$; the map
$\sigma\mapsto\widehat{\sigma}$ is injective, satisfies
$\pi(\widehat{\sigma})=\sigma$ and
$\ell(\widehat{\sigma})=\operatorname{inv}(\sigma)=\|\sigma\|$, and is a
section of $\pi$. In particular $\widehat{s_i}=\sigma_i$ for every $i$.

**(h) The half twist.** With $w_0:=\sigma\mapsto n+1-\sigma$ the longest
element of $S_n$, one has $\pi(\Delta)=w_0$,
$\operatorname{inv}(w_0)=N$, and $\Delta=\widehat{w_0}$.

For $n=0,1$ the group $S_n$ and the monoid $B_n^{+}$ are trivial, no generator
occurs, and the statements are vacuous. No choice principle is used; the only
imported statement is (g)'s braid-connectivity theorem, stated in [F4] below
with its hypotheses checked.

## Facts & Assumptions

**Given:** A natural number $n\ge2$, the symmetric group $S_n$ with its adjacent transpositions $s_i$, the monoid $B_n^{+}$ with atoms $\sigma_i$, length $\ell$ and half twist $\Delta$, and the words over the alphabets $\{s_1,\dots,s_{n-1}\}$ and $\{\sigma_1,\dots,\sigma_{n-1}\}$.

[F1] $B_n^{+}$ is generated by the atoms $\sigma_i$, with product $[u][v]=[uv]$, homogeneous length $\ell([w])=|w|$, and the universal property: a monoid homomorphism out of $B_n^{+}$ is the same as a choice of elements satisfying the braid and commutation relations ([[def-positive-braid-monoid]], [[lem-positive-artin-relations-preserve-homogeneous-length]]). The half twist is $\Delta=[T_1T_2\cdots T_{n-1}]$ with $T_k=\sigma_k\sigma_{k-1}\cdots\sigma_1$ and $\ell(\Delta)=N=n(n-1)/2$ ([[def-garside-half-twist-and-simple-positive-braid]]).

[F2] Permutations are composed as functions with the right factor first, $s_i$ is the transposition of $i$ and $i+1$, and $\operatorname{Inv}(\sigma)=\{(a,b):a<b,\ \sigma(a)>\sigma(b)\}$ with $\operatorname{inv}(\sigma)=|\operatorname{Inv}(\sigma)|$ on the labels $1,\dots,n$, transported along $\kappa$ as specified in the Statement ([[def-symmetric-group]], [[def-inversions-inversion-number-and-sign]]). The adjacent transpositions generate $S_n$ ([[thm-adjacent-transpositions-generate-the-symmetric-group]]).

[F3] The congruence $\equiv^{+}$ of $B_n^{+}$ contains every pair of words related by a braid move, that is, by replacing a subword $\sigma_i\sigma_{i+1}\sigma_i$ with $\sigma_{i+1}\sigma_i\sigma_{i+1}$, or a subword $\sigma_i\sigma_j$ with $\sigma_j\sigma_i$ for $|i-j|>1$; this is the definition of the defining pairs $R_n$ and of the congruence they generate ([[def-positive-braid-monoid]]).

[F4] **Imported induction, with its inputs exposed.** Dehornoy et al., Foundations of Garside Theory, Corollary IX.1.11(ii), printed p. 435, proves braid-connectivity of reduced expressions by induction from the exchange property in Proposition IX.1.10, printed p. 434. The extracted induction uses: (i) a length function for which all reduced expressions of one element have that length; (ii) exchange for a length-decreasing multiplication by a generator, on either side; and (iii) finite rank-two orders $m_{s,t}$, so that the alternating words of length $m_{s,t}$ are related by a braid move. These inputs hold here: (i) is step 2.3; (ii) is step 3.2 on the right and its left-hand version follows by applying 3.2 to inverse permutations and reversed words; and (iii) is the direct permutation calculation of step 1.1, giving $m_{s_i,s_j}=2$ when $|i-j|>1$ and $3$ when $|i-j|=1$. We import only this exchange-to-connectivity induction, not a Coxeter presentation of $S_n$; the published `thm-the-symmetric-group-has-the-coxeter-presentation` is not used.

## Proof

**Proof technique:** direct.

1.1 **The type-A relations (a).** The permutation $s_i$ swaps $i$ and $i+1$ and fixes all other symbols, so $s_i^2=\mathrm{id}$; if $|i-j|>1$ the two transpositions move disjoint pairs of symbols, so $s_is_j=s_js_i$; and for $1\le i\le n-2$ both $s_is_{i+1}s_i$ and $s_{i+1}s_is_{i+1}$ fix every $x\notin\{i,i+1,i+2\}$ and map $i\mapsto i+2$, $i+1\mapsto i+1$, $i+2\mapsto i$, as one checks by applying the three transpositions in turn; hence they are equal. Moreover, for $|i-j|>1$ the product $s_is_j$ is the product of two disjoint transpositions and has order $2$, while $s_is_{i+1}$ is a three-cycle on $\{i,i+1,i+2\}$ and has order $3$. These are the rank-two orders needed below. [F2, algebra]

1.2 **The inversion calculus (c).** Define $E(\tau)$ as in the statement and let $p_\tau:=\tau^{-1}$ be the position function, so that $(i,j)\in\operatorname{Inv}(\tau)$ if and only if $\{\tau(i),\tau(j)\}\in E(\tau)$, because $i=p_\tau(\tau(i))$ and $j=p_\tau(\tau(j))$; the map $(i,j)\mapsto\{\tau(i),\tau(j)\}$ is therefore a bijection $\operatorname{Inv}(\tau)\to E(\tau)$ and $|E(\tau)|=\operatorname{inv}(\tau)$. Right multiplication by $s_i$ exchanges the values at the positions $i$ and $i+1$ and leaves all other values in place, so $p_{\tau s_i}$ agrees with $p_\tau$ except that the positions of the two values $u:=\tau(i)$, $v:=\tau(i+1)$ are interchanged; hence for a two-element set $\{a,b\}\ne\{u,v\}$ the comparison of $p(a)$ and $p(b)$ is unchanged, while the set $\{u,v\}$ itself is in $E(\tau s_i)$ if and only if it is not in $E(\tau)$, which gives $E(\tau s_i)=E(\tau)\triangle\{\{u,v\}\}$. Consequently $\operatorname{inv}(\tau s_i)=\operatorname{inv}(\tau)\pm1$, and the sign is $+1$ exactly when $\{u,v\}\notin E(\tau)$, that is, when $\tau(i)<\tau(i+1)$. [F2, algebra]

2.1 **The prefix invariant (d).** For the empty word $N(\varepsilon)=\varnothing=E(\mathrm{id})$. If $w'=w|s_i$ and $N(w)=E(\sigma(w))$ by induction, then $\sigma(w')=\sigma(w)s_i$ and the definition gives $N(w')=N(w)\triangle\{c\}$ with $c=\{\sigma(w)(i),\sigma(w)(i+1)\}$, which equals $E(\sigma(w)s_i)=E(\sigma(w'))$ by step 1.2. Hence $N(w)=E(\sigma(w))$ for every word, and $\operatorname{inv}(\sigma(w))=|N(w)|\le k$ because $N(w)$ is a symmetric difference of $k$ two-element sets. Also every element $a\in B_n^{+}$ is $[w]$ for some word $w$, so $\operatorname{inv}(\pi(a))\le\ell(a)$ once $\pi$ is available. [F2, step 1.2]

2.2 **The homomorphism (b).** By step 1.1 the elements $s_1,\dots,s_{n-1}\in S_n$ satisfy the relations of the defining pairs $R_n$ of $B_n^{+}$, so the universal property [F1] gives a monoid homomorphism $\pi\colon B_n^{+}\to S_n$ with $\pi(\sigma_i)=s_i$. It is surjective because the $s_i$ generate $S_n$ [F2] and each $s_i=\pi(\sigma_i)$. [F1, F2, step 1.1]

2.3 **Minimal length equals inversion number (e).** Let $\sigma\in S_n$ and let $\|\sigma\|$ be its minimal word length. Every word of length $k$ representing $\sigma$ satisfies $\operatorname{inv}(\sigma)\le k$ by step 1.2 applied along the prefixes (each right multiplication by a generator changes the inversion number by exactly one, so it can increase it by at most one), whence $\operatorname{inv}(\sigma)\le\|\sigma\|$. Conversely we show $\|\sigma\|\le\operatorname{inv}(\sigma)$ by induction on $\operatorname{inv}(\sigma)$: if $\operatorname{inv}(\sigma)=0$ then $\sigma(1)<\sigma(2)<\cdots<\sigma(n)$, so $\sigma=\mathrm{id}$ and $\|\sigma\|=0$; otherwise there is $j$ with $\sigma(j)>\sigma(j+1)$, step 1.2 gives $\operatorname{inv}(\sigma s_j)=\operatorname{inv}(\sigma)-1$, the induction hypothesis gives an expression of $\sigma s_j$ of length $\operatorname{inv}(\sigma)-1$, and appending $s_j$ expresses $\sigma$ with $\operatorname{inv}(\sigma)$ letters. Hence $\|\sigma\|=\operatorname{inv}(\sigma)$, and a word is reduced exactly when its length equals the inversion number of the permutation it represents. [F2, step 1.2]

3.1 **The bound for positive braids (c, second part).** Let $a\in B_n^{+}$ and choose a word $w$ with $[w]=a$. Then $\pi(a)=\sigma(w)$ and $\ell(a)=|w|$, so step 2.1 gives $\operatorname{inv}(\pi(a))=|N(w)|\le|w|=\ell(a)$. [F1, step 2.1, step 2.2]

3.2 **Exchange (f).** Let $w=s_{i_1}|\cdots|s_{i_k}$ be reduced for $\sigma$ and let $\sigma(j)>\sigma(j+1)$; by step 2.3 $k=\operatorname{inv}(\sigma)=|E(\sigma)|=|N(w)|$, so the $k$ sets $c_1,\dots,c_k$ of step 2.1 are pairwise distinct and $N(w)=\bigcup_t\{c_t\}$: if two of them coincided, the symmetric difference would have fewer than $k$ elements. The set $c^*:=\{\sigma(j),\sigma(j+1)\}$ lies in $E(\sigma)$, because with $u:=\sigma(j+1)<\sigma(j)=:v$ one has $p_\sigma(u)=j+1>j=p_\sigma(v)$; hence $c^*=c_r$ for exactly one $r$. Write $w=p|s_{i_r}|q$ and $\rho:=\sigma(p)$, so $\sigma=\rho s_{i_r}\sigma(q)$ and $c_r=\{\rho(i_r),\rho(i_r+1)\}$. Let $t_{c_r}$ be the transposition of these two values. Deleting the $r$-th letter gives $w^{(r)}=p|q$ and therefore $\sigma(w^{(r)})=\rho\sigma(q)=(\rho s_{i_r}\rho^{-1})\sigma=t_{c_r}\sigma$. Because $c_r=\{\sigma(j),\sigma(j+1)\}$, the same transposition is $t_{c_r}=\sigma s_j\sigma^{-1}$, so $\sigma(w^{(r)})=\sigma s_j$. Now step 2.1 gives $N(w^{(r)})=E(\sigma s_j)=E(\sigma)\triangle\{c_r\}$; the equality of these $N$-sets follows from the permutation calculation, not from simply deleting one crossing label (later prefix labels may change). Finally the deleted word has length $k-1=\operatorname{inv}(\sigma s_j)$, so it is reduced by step 2.3. [F2, step 1.2, step 2.1, step 2.3]

3.3 **Well-defined lifts (g).** Let $w,w'$ be reduced words for the same $\sigma$. By [F4] they are connected by braid moves on the symbols $s_i$, and by [F3] each such move replaces a word by an $\equiv^{+}$-equivalent word, since the braid move $\sigma_i\sigma_{i+1}\sigma_i\leftrightarrow\sigma_{i+1}\sigma_i\sigma_{i+1}$ and the far-commutation move are exactly the defining pairs $R_n$ (note that $m_{s,t}\in\{2,3\}$ for type A by step 1.1, so the imported induction's braid relations are precisely these two families). Hence $w\equiv^{+}w'$ and $[w]=[w']$; call this common class $\widehat{\sigma}$. Then $\pi(\widehat{\sigma})=\pi([w])=\sigma(w)=\sigma$, and $\ell(\widehat{\sigma})=|w|=\operatorname{inv}(\sigma)=\|\sigma\|$ by step 2.3, so $\widehat{\cdot}$ is a section of $\pi$ and injective; for a generator, $s_i$ has the reduced word of length one, so $\widehat{s_i}=\sigma_i$. [F1, F3, F4, step 1.1, step 2.2, step 2.3]

4.1 **The half twist represents the longest element (h).** Put $c_k:=s_ks_{k-1}\cdots s_1$, so that $\pi(T_k)=c_k$ by step 2.2 and $\pi(\Delta)=c_1c_2\cdots c_{n-1}$. First, $c_k$ maps $1\mapsto k+1$, $j\mapsto j-1$ for $2\le j\le k+1$, and fixes every $x>k+1$: for $k=1$ this is the transposition $s_1$, and the step from $k-1$ to $k$ uses $c_k=s_kc_{k-1}$, which sends $1\mapsto s_k(k)=k+1$, sends $2\le j\le k$ to $s_k(j-1)=j-1$, sends $k+1$ to $s_k(k+1)=k$, and fixes $x>k+1$. Second, $P_k:=c_1c_2\cdots c_k$ maps $x\mapsto k+2-x$ for $1\le x\le k+1$ and fixes $x>k+1$: for $k=1$ this is $c_1$, and using $P_k=P_{k-1}c_k$ one computes $P_k(1)=P_{k-1}(k+1)=k+1$, $P_k(x)=P_{k-1}(x-1)=k+2-x$ for $2\le x\le k$, $P_k(k+1)=P_{k-1}(k)=1$, and $P_k(x)=x$ for $x>k+1$. Hence $\pi(\Delta)=P_{n-1}=w_0$ with $w_0(x)=n+1-x$, and $\operatorname{inv}(w_0)=N$ because every pair $a<b$ has $w_0(a)>w_0(b)$; by step 2.3, $\|w_0\|=N=\ell(\Delta)$, so the defining word of $\Delta$ is reduced for $w_0$ and $\Delta=\widehat{w_0}$ by step 3.3. [F1, F2, step 2.2, step 2.3, step 3.3]

5.1 **Assembly.** Part (a) is step 1.1, part (b) is step 2.2, part (c) is steps 1.2, 2.1 and 3.1, part (d) is step 2.1, part (e) is step 2.3, part (f) is step 3.2, part (g) is step 3.3, and part (h) is step 4.1. The exchange lemma (f) and the invariant (d) are proved here from the inversion calculus, so the only imported ingredient is the braid-connectivity of reduced words [F4]; its hypotheses are the three families verified in step 1.1. For $n\le1$ there are no generators: $S_n$ and $B_n^{+}$ are trivial, and all assertions are vacuous. Every argument is a finite computation or an induction on a natural number, and no choice principle is used. ∎ [step 1.1, step 1.2, step 2.1, step 2.2, step 2.3, step 3.1, step 3.2, step 3.3, step 4.1]

## Remarks

- **What is imported, and what is not.** The single imported statement is
  Matsumoto's braid-connectivity of reduced words for type A, quoted in [F4]
  from Dehornoy et al., Corollary IX.1.11(ii) (printed p. 435); the source
  derives it by an induction from the exchange property (Proposition IX.1.10,
  printed p. 434) and the reflection invariant of Lemma IX.1.7--1.9. Both
  inputs of that induction -- equal lengths of reduced words for one element,
  and the exchange property -- are re-proved here in steps 2.3 and 3.2, so no
  appeal to the type-A Coxeter presentation is involved. The exchange lemma itself (part (f)),
  the prefix invariant (part (d)), and the equality of the length with the
  inversion number (part (e)) are proved here, by the inversion bookkeeping
  that the plan of this page asked for: the letter to be deleted is the
  *unique* crossing whose associated transposition is the descent pair
  $\{\sigma(j),\sigma(j+1)\}$, and no square-deletion move (which is not a
  relation of $B_n^{+}$) is used anywhere.
- **Why well-definedness is the hard point.** The map $\pi\colon B_n^{+}\to S_n$
  is easy, but it is far from injective: its fibres are infinite for $n\ge2$.
  The lift $\widehat{\cdot}$ goes the other way and exists only because all
  reduced expressions of a permutation are related by the *defining relations*
  of $B_n^{+}$; this is why the type-A Coxeter presentation theorem is not
  needed here in full, only the braid-connectivity of reduced words.
- **Consequences used below.** Part (c) is what makes
  $\operatorname{inv}(\pi(a))\le\ell(a)$ available for arbitrary positive
  braids, which is the inequality used in
  [[lem-simple-positive-braids-are-indexed-by-permutations]]; part (h)
  identifies $\Delta$ with the lift of the longest element, which is what makes
  the divisors of $\Delta$ correspond to permutations. No geometry of the
  symmetric group is used: only the transposition action on $\{1,\dots,n\}$.
- Nothing here uses a choice principle: all words are finite, the minimal word
  length is a minimum over a nonempty set of natural numbers, and the
  symmetric difference $N(w)$ is computed from a fixed word.
