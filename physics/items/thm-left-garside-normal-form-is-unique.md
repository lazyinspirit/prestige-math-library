---
id: thm-left-garside-normal-form-is-unique
kind: theorem
title: "Left garside normal form is unique"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-left-and-right-divisibility-extend-to-lattice-orders-on-the-braid-group,
       def-braid-group-by-the-artin-presentation,
       lem-simple-positive-braids-are-indexed-by-permutations,
       lem-conjugation-by-delta-reverses-artin-generators,
       lem-each-artin-atom-divides-delta-on-both-sides,
       lem-positive-artin-relations-preserve-homogeneous-length,
       thm-positive-braids-have-left-and-right-gcds-and-lcms,
       thm-the-ore-fraction-group-of-positive-braids-is-the-artin-braid-group,
       lem-the-positive-braid-monoid-is-left-and-right-cancellative,
       def-left-and-right-divisibility-for-positive-braids,
       def-garside-half-twist-and-simple-positive-braid,
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
    - title: "J. Gonzalez-Meneses, Basic results on braid groups, Section 4.1, printed pp. 28-30"
      url: "https://arxiv.org/abs/1010.0321"
    - title: "J. Birman and T. Brendle, Braids: A Survey, Section 5.1"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

Let $n\ge2$, let $B_n$ be the braid group of
[[def-braid-group-by-the-artin-presentation]], identified with the group of
fractions of the positive braid monoid $B_n^{+}$ of
[[def-positive-braid-monoid]] by
[[thm-the-ore-fraction-group-of-positive-braids-is-the-artin-braid-group]], so
that $B_n^{+}$ is a submonoid of $B_n$; let $\Delta$ be the half twist of
[[def-garside-half-twist-and-simple-positive-braid]], and let
$\preccurlyeq_L$ denote the group order of
[[thm-left-and-right-divisibility-extend-to-lattice-orders-on-the-braid-group]],
defined by $x\preccurlyeq_L y\iff x^{-1}y\in B_n^{+}$. Recall that a **simple
braid** is a left divisor of $\Delta$ in $B_n^{+}$
([[def-garside-half-twist-and-simple-positive-braid]]), and call a simple
braid $a$ **proper** if $1\prec_L a\prec_L\Delta$. Then:

**(a) Maximal $\Delta$-exponent.** For every $x\in B_n$ the set
$$P(x):=\{p\in\mathbb Z:\Delta^{p}\preccurlyeq_L x\}$$
is nonempty and bounded above. Writing $p(x):=\max P(x)$ and
$A(x):=\Delta^{-p(x)}x$, one has $A(x)\in B_n^{+}$ and
$\Delta\not\preccurlyeq_LA(x)$. Moreover $x=\Delta^{p}A$ with $p\in\mathbb Z$,
$A\in B_n^{+}$, $\Delta\not\preccurlyeq_LA$ holds for exactly one pair
$(p,A)$, namely $\bigl(p(x),A(x)\bigr)$.

**(b) The greedy factorisation.** Let $A=A(x)=A_0\in B_n^{+}$. If $A=1$ put
$r:=0$; otherwise define, as long as $A_{i-1}\ne1$,
$$a_i:=\Delta\wedge_LA_{i-1}\in B_n^{+},\qquad A_{i-1}=a_iA_i\ \text{ with }A_i\in B_n^{+},$$
the factor $A_i$ being unique. Then there is an $r\ge1$ with $A_r=1$, and for
every $1\le i\le r$: $a_i$ is a proper simple braid, $A_{i-1}=a_i a_{i+1}\cdots a_r$,
and $\Delta\not\preccurlyeq_LA_i$. In particular
$A(x)=a_1a_2\cdots a_r$, and each $a_i$ is reduced in the sense of
[[lem-simple-positive-braids-are-indexed-by-permutations]]: $a_i=\widehat{\sigma}$
for a unique $\sigma\in S_n\setminus\{\mathrm{id},w_0\}$, and
$\ell(a_i)=\operatorname{inv}(\pi(a_i))$.

**(c) Left normal form.** Every $x\in B_n$ has a unique expression
$$x=\Delta^{p}a_1a_2\cdots a_r$$
with $p\in\mathbb Z$, $r\in\mathbb N$, every $a_i$ a proper simple braid, and
$$a_i=\Delta\wedge_L(a_ia_{i+1}\cdots a_r)\qquad(1\le i\le r).$$
In such an expression necessarily $p=p(x)$, $a_1\cdots a_r=A(x)$,
$a_1=\Delta\wedge_LA(x)$, and
$a_i=\Delta\wedge_L\bigl((a_1\cdots a_{i-1})^{-1}A(x)\bigr)$ for $i\ge2$. This
is the **left normal form** of $x$.

**(d) Specialisations.** In the left normal form of $x$ one has:
(i) $r=0$ if and only if $x\in\langle\Delta\rangle=\{\Delta^{p}:p\in\mathbb Z\}$;
(ii) $p(x)\ge0$ if and only if $x\in B_n^{+}$; thus a positive braid has
normal form $x=\Delta^{p}a_1\cdots a_r$ with $p=p(x)\ge0$, and $p=0$ exactly
when $\Delta\not\preccurlyeq_Lx$, so for instance $p(x)=0$ always holds at
$x=1$ (where $r=0$); (iii) for $n=2$ there is no
proper simple braid at all, and the left normal form of every $x\in B_2$ is
$\Delta^{p(x)}$ with $r=0$.

**(e) Left weighting.** If $x=\Delta^{p}a_1\cdots a_r$ is the left normal form
of (c) and $i<r$, then $(a_ia_{i+1})\wedge_L\Delta=a_i$.

No choice principle is used: the exponent $p(x)$ is obtained from an
explicitly rewritten word, and all minima and maxima that occur are taken over
nonempty subsets of $\mathbb Z$ or over finite sets of positive words, for
which the elementary well-ordering and induction principles suffice.

## Facts & Assumptions

**Given:** A natural number $n\ge2$, the monoid $B_n^{+}$ with atoms $\sigma_1,\dots,\sigma_{n-1}$, length $\ell$, divisibility orders and half twist $\Delta$ of length $N=n(n-1)/2$, and the braid group $B_n$ with its group order $\preccurlyeq_L$.

[F1] $B_n^{+}$ has the atoms as generators, $\ell([w])=|w|$, $\ell$ is additive, $\ell(z)=0$ forces $z=1$, and $\ell(\Delta^m)=mN$ for $m\ge0$ ([[def-positive-braid-monoid]], [[lem-positive-artin-relations-preserve-homogeneous-length]], [[def-garside-half-twist-and-simple-positive-braid]]). The order $a\preccurlyeq_L b$ on $B_n^{+}$ means $b=ac$ for some $c\in B_n^{+}$, with unique witness $c$ ([[def-left-and-right-divisibility-for-positive-braids]]).

[F2] For every atom $\sigma_i$ there is $R_i\in B_n^{+}$ with $\Delta=\sigma_iR_i$, and $\ell(R_i)=N-1$; hence $\sigma_i^{-1}=R_i\Delta^{-1}$ holds in the group and $\sigma_i\preccurlyeq_L\Delta$ ([[lem-each-artin-atom-divides-delta-on-both-sides]]). Moreover $\sigma_j\Delta=\Delta\sigma_{n-j}$ for all $j$, and more generally $w\Delta=\Delta\tau(w)$ for every positive word $w$, where $\tau$ is the involutive automorphism of $B_n^{+}$ induced by $\sigma_j\mapsto\sigma_{n-j}$ ([[lem-conjugation-by-delta-reverses-artin-generators]]).

[F3] **Cancellation.** $xa=xb$ implies $a=b$, and $ax=bx$ implies $a=b$, for all $a,b,x\in B_n^{+}$ ([[lem-the-positive-braid-monoid-is-left-and-right-cancellative]]).

[F4] **Meets and joins in the positive monoid.** Every nonempty finite subset of $B_n^{+}$ has a left-gcd $\wedge_L$ and a left-lcm, unique, and a common left divisor of the family divides the gcd; in particular $\Delta\wedge_LA$ exists for every $A\in B_n^{+}$ ([[thm-positive-braids-have-left-and-right-gcds-and-lcms]]).

[F5] **Passage to the group.** $B_n^{+}$ is a submonoid of $B_n$ and, on positive elements, the group order $\preccurlyeq_L$ of [[thm-left-and-right-divisibility-extend-to-lattice-orders-on-the-braid-group]] agrees with the monoid order: for $a,b\in B_n^{+}$, $a\preccurlyeq_L b$ in $B_n$ if and only if $b=ac$ with $c\in B_n^{+}$; the group order is defined by $x\preccurlyeq_L y\iff x^{-1}y\in B_n^{+}$ ([[thm-the-ore-fraction-group-of-positive-braids-is-the-artin-braid-group]], [[thm-left-and-right-divisibility-extend-to-lattice-orders-on-the-braid-group]]).

[F6] **Proper simple braids are reduced.** An element $a\in B_n^{+}$ satisfies $1\prec_L a\prec_L\Delta$ if and only if $a=\widehat{\sigma}$ for a unique $\sigma\in S_n\setminus\{\mathrm{id},w_0\}$, and then $\ell(a)=\operatorname{inv}(\pi(a))$ ([[lem-simple-positive-braids-are-indexed-by-permutations]]).

## Proof

**Proof technique:** direct.

1.1 **Every element is a $\Delta$-power times a positive braid.** Let $x\in B_n$ and let $\sigma_{i_1}^{\pm1}\cdots\sigma_{i_k}^{\pm1}$ be a word representing it. Replacing every negative letter by $\sigma_i^{-1}=R_i\Delta^{-1}$ with $R_i$ as in [F2] turns it into a product of positive letters and of symbols $\Delta^{-1}$. From $w\Delta=\Delta\tau(w)$ and $\tau^2=\mathrm{id}$ [F2] one obtains $w\Delta^{-1}=\Delta^{-1}\tau(w)$ for every positive $w$; this identity moves each $\Delta^{-1}$ to the left past positive letters. Since $\tau$ preserves positivity, induction on the number of $\Delta^{-1}$ symbols rewrites $x$ as $x=\Delta^{-j}A$ with $j\ge0$ and $A\in B_n^{+}$. Hence $P(x)\ne\varnothing$, since it contains $-j$. [F1, F2, F5]

1.2 **The greedy step (b).** Suppose $A_{i-1}\in B_n^{+}$ with $A_{i-1}\ne1$. Choosing a positive word $w$ with $[w]=A_{i-1}$ and $|w|=\ell(A_{i-1})\ge1$, its first letter is an atom $\sigma_j$ with $\sigma_j\preccurlyeq_LA_{i-1}$; by [F2] $\sigma_j\preccurlyeq_L\Delta$ as well. Hence the gcd $a_i:=\Delta\wedge_LA_{i-1}$ [F4] satisfies $\sigma_j\preccurlyeq_La_i$, so $a_i\ne1$. Since $a_i\preccurlyeq_LA_{i-1}$ while $\Delta\not\preccurlyeq_LA_{i-1}$, we have $a_i\ne\Delta$. So $1\prec_La_i\prec_L\Delta$: $a_i$ is a proper simple braid, and by [F6] $a_i=\widehat{\sigma}$ for a unique $\sigma\in S_n\setminus\{\mathrm{id},w_0\}$ with $\ell(a_i)=\operatorname{inv}(\pi(a_i))$. Since $a_i\preccurlyeq_LA_{i-1}$ there is $A_i\in B_n^{+}$ with $A_{i-1}=a_iA_i$, unique by left cancellation [F3], and it satisfies $\ell(A_i)=\ell(A_{i-1})-\ell(a_i)<\ell(A_{i-1})$ because $\ell(a_i)\ge1$. [F1, F2, F3, F4, F6]

2.1 **The maximal exponent (a).** $P(x)$ is downward closed: if $\Delta^{-p}x=c\in B_n^{+}$ and $p'\le p$, then $\Delta^{-p'}x=\Delta^{p-p'}c\in B_n^{+}$. To bound $P(x)$ above, fix one decomposition $x=\Delta^{-j}A$ with $A\in B_n^{+}$ and let $p\in P(x)$, so $x=\Delta^{p}c$ with $c\in B_n^{+}$; then $A=\Delta^{p+j}c$. If $p+j>0$ additivity and [F1] give $\ell(A)=(p+j)N+\ell(c)\ge(p+j)N$, while if $p+j\le0$ then $p\le-j\le\ell(A)/N-j$ because $\ell(A)\ge0$; in both cases $p\le\ell(A)/N-j$, so $P(x)$ is bounded above. Hence $p(x):=\max P(x)$ exists by the well-ordering of the nonempty bounded-above subset $P(x)\subseteq\mathbb Z$, and $A(x):=\Delta^{-p(x)}x\in B_n^{+}$ by membership in $P(x)$. If $\Delta\preccurlyeq_LA(x)$, then $\Delta^{-(p(x)+1)}x=\Delta^{-1}A(x)\in B_n^{+}$, i.e. $p(x)+1\in P(x)$, contradicting maximality; hence $\Delta\not\preccurlyeq_LA(x)$. Finally, if $x=\Delta^{p}A=\Delta^{p'}A'$ with $A,A'\in B_n^{+}$, $\Delta\not\preccurlyeq_LA$, $\Delta\not\preccurlyeq_LA'$ and $p<p'$, then $A=\Delta^{p'-p}A'\in\Delta B_n^{+}$, i.e. $\Delta\preccurlyeq_LA$, a contradiction; so $p=p'$ and then $A=A'$. [F1, F5, step 1.1]

3.1 **The invariant $\Delta\not\preccurlyeq_LA_i$.** Suppose $A_{i-1}\ne1$, $A_{i-1}=a_iA_i$ and $\Delta\not\preccurlyeq_LA_{i-1}$; assume for contradiction $A_i=\Delta c$ with $c\in B_n^{+}$. Then, using $a_i\Delta=\Delta\tau(a_i)$ with $\tau(a_i)\in B_n^{+}$ [F2], $A_{i-1}=a_i\Delta c=\Delta\tau(a_i)c\in\Delta B_n^{+}$, i.e. $\Delta\preccurlyeq_LA_{i-1}$, contradiction. Hence $\Delta\not\preccurlyeq_LA_i$, and induction on $i$ gives $\Delta\not\preccurlyeq_LA_i$ for all $i\ge0$ starting from $\Delta\not\preccurlyeq_LA_0=A(x)$ of [step 2.1]. Consequently the recursion never produces $a_{i+1}=\Delta$: if $A_i\ne1$ then $a_{i+1}=\Delta\wedge_LA_i\preccurlyeq_LA_i$ while $\Delta\not\preccurlyeq_LA_i$. [F2, F4, step 2.1]

4.1 **Termination and the factorisation (b).** The recursion of step 1.2 either stops at $A_i=1$ or produces a strictly decreasing sequence $\ell(A_0)>\ell(A_1)>\cdots$ in $\mathbb N$, which cannot be infinite; so there is a least $r\ge0$ with $A_r=1$. If $r\ge1$, then $A_{i-1}=a_iA_i$ for $i=1,\dots,r$, and unfolding the recursion gives $A_{i-1}=a_ia_{i+1}\cdots a_r$ for every $1\le i\le r$; at $i=1$ this is $A(x)=a_1\cdots a_r$. By step 1.2 each $a_i$ is a proper simple braid and by step 3.1 each $\Delta\not\preccurlyeq_LA_i$, and [F6] gives the reduced-lift description of the $a_i$ stated in (b). [F1, F3, step 1.2, step 3.1]

5.1 **Uniqueness of the left normal form (c).** Let $x=\Delta^{p}a_1\cdots a_r=\Delta^{p'}b_1\cdots b_s$ be two decompositions as in (c), and put $A:=a_1\cdots a_r$, $B:=b_1\cdots b_s$. If $r=0$, then $A=1$ and $\Delta\not\preccurlyeq_LA$, since $\ell(\Delta)=N>0$. If $r\ge1$ and $\Delta\preccurlyeq_LA$, then $\Delta$ is a common left divisor of $\Delta$ and $A$, so $\Delta\preccurlyeq_L\Delta\wedge_LA=a_1$; because $a_1$ is simple, $a_1\preccurlyeq_L\Delta$ as well, and antisymmetry gives $a_1=\Delta$, contradicting properness. Thus $\Delta\not\preccurlyeq_LA$ in either case, and likewise $\Delta\not\preccurlyeq_LB$. By the uniqueness in (a), proved in step 2.1, we get $p=p'$ and $A=B$. If $A=1$, additivity of positive length and $\ell(a_i),\ell(b_j)\ge1$ force $r=s=0$, so the two lists agree. Otherwise $r,s\ge1$, and their greedy conditions give $a_1=\Delta\wedge_LA=\Delta\wedge_LB=b_1$. Cancelling $a_1=b_1$ [F3] gives $a_2\cdots a_r=b_2\cdots b_s$. The defining greedy conditions pass unchanged to these tails, so induction on their length gives $r=s$ and $a_i=b_i$ for every $i$. The identified $p$ and $A$ are $p(x)$ and $A(x)$ by step 2.1; when $r\ge1$, the factor identities $a_1=\Delta\wedge_LA(x)$ and $a_i=\Delta\wedge_L(a_i\cdots a_r)=\Delta\wedge_L\bigl((a_1\cdots a_{i-1})^{-1}A(x)\bigr)$ follow from the defining conditions. Existence is step 4.1. [F1, F3, F4, step 2.1, step 4.1]

6.1 **Specialisations (d) and left weighting (e).** (i): $r=0$ means $A(x)=1$, i.e. $x=\Delta^{p(x)}\in\langle\Delta\rangle$; conversely if $x=\Delta^p$ then $P(x)=\{q:q\le p\}$ has maximum $p$ and $A(x)=1$. (ii): if $p(x)\ge0$ then $x=\Delta^{p(x)}A(x)$ is a product of positive elements, so $x\in B_n^{+}$; conversely if $x\in B_n^{+}$ then $\Delta^{0}=1\preccurlyeq_Lx$ by [F5], so $0\in P(x)$ and $p(x)\ge0$. (iii): for $n=2$ the divisors of $\Delta=\sigma_1$ have length $\le1$, hence are $1$ and $\Delta$ by [F1], so there is no proper simple braid and the normal form forced by (c) has $r=0$. (e): if $s$ is a common left divisor of $a_ia_{i+1}$ and $\Delta$, then $s\preccurlyeq_La_ia_{i+1}\preccurlyeq_La_i\cdots a_r$, so $s$ is a common left divisor of $a_i\cdots a_r$ and $\Delta$, whence $s\preccurlyeq_L\Delta\wedge_L(a_i\cdots a_r)=a_i$; therefore $a_i$ is the greatest common left divisor of $a_ia_{i+1}$ and $\Delta$. [F1, F4, F5, step 5.1]

7.1 **Assembly.** Part (a) is step 2.1, part (b) is steps 1.2, 3.1 and 4.1, part (c) is steps 4.1 and 5.1, part (d) is step 6.1 and part (e) is step 6.1. The exponent extraction of step 1.1 uses only the atom factors $\sigma_i^{-1}=R_i\Delta^{-1}$ and the index-reversal sliding $w\Delta=\Delta\tau(w)$; the greedy recursion uses the left-gcd of the positive lattice, which is unconditional by [F4], and no appeal to the $\Delta$-divisibility of an arbitrary positive braid is made. For $n=2$ the theorem reduces to the statement that every element of $B_2$ is a power of $\Delta=\sigma_1$, in accordance with the free-group description of $B_2$; the empty factor case $r=0$ is the case $x\in\langle\Delta\rangle$. No choice principle is used anywhere. ∎ [step 1.1, step 2.1, step 1.2, step 3.1, step 4.1, step 5.1, step 6.1]

## Remarks

- **Comparison with the source.** The statement is the left normal form of
  Garside--Elrifai--Morton as presented in J. González-Meneses, *Basic
  results on braid groups*, Section 4.1, printed pp. 29--30: the source
  defines $A$ by maximality of $p$, then sets $a_1=A\wedge\Delta$ and
  $a_i=(a_{i-1}^{-1}\cdots a_1^{-1}A)\wedge\Delta$, and records the
  left-weighting $ (a_i a_{i+1})\wedge\Delta=a_i$. Here the characterisation
  $a_i=\Delta\wedge_L(a_i\cdots a_r)$ is used as the defining condition of the
  normal form, which is exactly what the greedy recursion produces; it implies
  the source's adjacent-pair weighting as part (e).
- **What uniqueness rests on.** Only the uniqueness of the pair
  $(p,A)$ (pure positivity of $\Delta$-powers) and the determinism of the gcd
  $A\wedge_L\Delta$ are used; no confluence property of a rewriting system and
  no injectivity of a geometric braid model is invoked.
- **Effective content.** Every step of the recursion is a finite operation
  once the left-gcd $A_{i-1}\wedge_L\Delta$ is computable, and the first step
  (rewriting inverses to the left) uses the explicit factors $R_i$ of [F2];
  the resulting algorithm is the subject of
  [[cor-the-braid-group-word-problem-is-decidable-by-garside-normal-form]].
- Nothing here uses the Axiom of Choice or any weaker choice principle; the
  only maximum taken is that of a nonempty bounded-above set of integers.
