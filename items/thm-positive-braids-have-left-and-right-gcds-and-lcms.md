---
id: thm-positive-braids-have-left-and-right-gcds-and-lcms
kind: theorem
title: "Positive braids have left and right gcds and lcms"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-artin-positive-word-reversing-is-complete,
       lem-every-positive-braid-divides-a-power-of-delta-on-both-sides,
       lem-positive-artin-relations-preserve-homogeneous-length,
       def-left-and-right-divisibility-for-positive-braids,
       lem-the-positive-braid-monoid-is-left-and-right-cancellative,
       def-artin-right-complements-and-word-reversing,
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
    - title: "J. Gonzalez-Meneses, Basic results on braid groups, Section 4, printed pp. 26-27"
      url: "https://arxiv.org/abs/1010.0321"
    - title: "Patrick Dehornoy et al., Foundations of Garside Theory, Chapter II, Section 4, printed pp. 63-83"
      url: "https://dehornoy.lmno.cnrs.fr/Books/Garside/Text.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\in\mathbb N$, let $B_n^{+}$ be the positive braid monoid of
[[def-positive-braid-monoid]] with its homogeneous length $\ell$
([[lem-positive-artin-relations-preserve-homogeneous-length]]), its half twist
$\Delta$ ([[def-garside-half-twist-and-simple-positive-braid]]) and its
divisibility orders $\preccurlyeq_L,\preccurlyeq_R$ with the lcm and gcd
notation $\vee_L,\wedge_L,\vee_R,\wedge_R$ of
[[def-left-and-right-divisibility-for-positive-braids]]. Then, for all
$a,b\in B_n^{+}$:

**(a) Left join.** The left-lcm $a\vee_Lb$ exists: there is a common left
multiple of $a$ and $b$ that left-divides every common left multiple of $a$ and
$b$. It is unique, and for words $u,v$ with $[u]=a$, $[v]=b$ it is given by the
reversing complement,
$$a\vee_Lb=[u\,\Theta(u,v)]=[v\,\Theta(v,u)],$$
where $\Theta$ is the right complement of
[[def-artin-right-complements-and-word-reversing]].

**(b) Left meet.** The left-gcd $a\wedge_Lb$ exists and is unique: there is a
common left divisor of $a$ and $b$ that is a left multiple of every common left
divisor of $a$ and $b$.

**(c) Right-hand versions.** The right-lcm $a\vee_Rb$ and the right-gcd
$a\wedge_Rb$ exist and are unique.

**(d) Finite families.** Every nonempty finite subset of $B_n^{+}$ has a
left-lcm, a left-gcd, a right-lcm and a right-gcd; in particular the two orders
are lattices on $B_n^{+}$.

The lcm of (a) is computed by the finite reversing algorithm of
[[lem-artin-positive-word-reversing-is-complete]], and no choice principle is
used. For $n\le1$ the monoid is trivial and all these elements are $1$.

## Facts & Assumptions

**Given:** A natural number $n$, the positive braid monoid $B_n^{+}$ with its length $\ell$ and divisibility orders $\preccurlyeq_L,\preccurlyeq_R$, the half twist $\Delta$, and the partial map $\Theta$.

[F1] $a\preccurlyeq_Lb\iff\exists c\,(b=ac)$, $a\preccurlyeq_Rb\iff\exists c\,(b=ca)$; both are partial orders with $\ell(a)\le\ell(b)$ when $a\preccurlyeq_Lb$ or $a\preccurlyeq_Rb$; there are at most $|\Sigma_n|^{k}$ elements of $B_n^{+}$ of length $k$, where $\Sigma_n$ is the actual alphabet (empty for $n\le1$ and of size $n-1$ for $n\ge2$); and $1$ is a left and right divisor of every element ([[def-left-and-right-divisibility-for-positive-braids]], [[lem-positive-artin-relations-preserve-homogeneous-length]]).

[F2] **Common multiples exist.** For all $a,b\in B_n^{+}$ there is $m\in\mathbb N$ with both $a\preccurlyeq_L\Delta^{m}$ and $b\preccurlyeq_L\Delta^{m}$, and likewise for $\preccurlyeq_R$; in particular every pair has a common left multiple in the sense of the order $\preccurlyeq_L$ ([[lem-every-positive-braid-divides-a-power-of-delta-on-both-sides]]).

[F3] **Reversing criterion.** For positive words $u,v$ the elements $[u],[v]$ admit a common left multiple if and only if right-reversing of the signed word $u^{-1}v$ terminates, and then $[u\Theta(u,v)]=[v\Theta(v,u)]$ is the least common left multiple: every common left multiple of $[u],[v]$ is a left multiple of it, and it is itself a common left multiple. This is part (e) of [[lem-artin-positive-word-reversing-is-complete]], where the element is called the *right-lcm* because it is obtained by extending $u$ on the right; in the notation of [[def-left-and-right-divisibility-for-positive-braids]] it is the join $[u]\vee_L[v]$, since $[u]\preccurlyeq_L[u\Theta(u,v)]$ and $[v]\preccurlyeq_L[v\Theta(v,u)]$ hold by the definition of $\preccurlyeq_L$ ([[def-left-and-right-divisibility-for-positive-braids]]).

[F4] **Reversal.** The word reversal induces an involutive anti-automorphism $\rho$ of $B_n^{+}$, and it exchanges the two orders: $a\preccurlyeq_Lb\iff\rho(a)\preccurlyeq_R\rho(b)$, $a\preccurlyeq_Rb\iff\rho(a)\preccurlyeq_L\rho(b)$ ([[lem-the-positive-braid-monoid-is-left-and-right-cancellative]], [[def-left-and-right-divisibility-for-positive-braids]]).

[F5] **Uniqueness of least elements.** If a subset of a partially ordered set has a greatest element, it is unique ([[def-left-and-right-divisibility-for-positive-braids]] for antisymmetry of the two orders).

## Proof

**Proof technique:** direct.

1.1 **Every pair has a common left multiple.** Let $a,b\in B_n^{+}$. By [F2] there are $m,m'$ with $a\preccurlyeq_L\Delta^{m}$ and $b\preccurlyeq_L\Delta^{m'}$; putting $M:=\max(m,m')$ and writing $\Delta^{m}=ac$ gives $\Delta^{M}=\Delta^{m}\Delta^{M-m}=a(c\Delta^{M-m})$, so $a\preccurlyeq_L\Delta^{M}$, and symmetrically $b\preccurlyeq_L\Delta^{M}$. [F1, F2]

2.1 **The left-lcm exists for every pair.** Let $u,v$ be positive words with $[u]=a$, $[v]=b$. By step 1.1 the classes admit a common left multiple, so by the reversing criterion [F3] the class $[u\Theta(u,v)]=[v\Theta(v,u)]$ is a common left multiple of $a$ and $b$ that left-divides every common left multiple of $a$ and $b$; this is exactly $a\vee_Lb$, and it is unique by [F5]. This is (a). [F1, F3, F5, step 1.1]

3.1 **The left-gcd exists.** Let $D:=\{d\in B_n^{+}:d\preccurlyeq_La\ \text{and}\ d\preccurlyeq_Lb\}$ be the set of common left divisors. It contains $1$ by [F1], and it is finite: every $d\in D$ satisfies $\ell(d)\le\ell(a)$ by monotonicity, and there are only finitely many elements of each length at most $\ell(a)$ by [F1]. Let $d_1,\dots,d_r$ be an enumeration of $D$ and define $\delta_1:=d_1$, $\delta_{j+1}:=\delta_j\vee_Ld_{j+1}$ for $j<r$. Each step is legitimate: if $\delta_j\in D$ then $\delta_j\preccurlyeq_La$ and $d_{j+1}\preccurlyeq_La$, so $a$ is a common left multiple of the pair and step 2.1 provides the join, which by leastness satisfies $\delta_{j+1}\preccurlyeq_La$ and $\delta_{j+1}\preccurlyeq_Lb$, so $\delta_{j+1}\in D$. Thus $\delta_r\in D$ and $d_j\preccurlyeq_L\delta_r$ for every $j$ by construction; so $\delta_r$ is a common left divisor of $a,b$ that is a left multiple of every common left divisor, that is, $a\wedge_Lb=\delta_r$ exists and is unique by [F5]. [F1, F5, step 2.1]

4.1 **The right-hand versions.** Apply the anti-automorphism $\rho$ of [F4] to step 2.1: if $u,v$ are words, then $\rho([u]),\rho([v])$ have the join $\rho([u])\vee_L\rho([v])$, and by the exchange of orders [F4] the element $\rho\bigl(\rho([u])\vee_L\rho([v])\bigr)$ is the *right*-lcm of $[u],[v]$, since $\rho$ carries $\preccurlyeq_L$ to $\preccurlyeq_R$ bijectively and preserves leastness; it is unique by [F5]. The same transport of step 3.1 gives the right-gcd, and the transport of steps 2.1 and 3.1 also supplies the common right multiples needed, since $\rho$ is a bijection, so no separate existence proof is needed. This is (c). [F4, F5, step 2.1, step 3.1]

5.1 **Finite families.** If $x_1,\dots,x_r\in B_n^{+}$ with $r\ge1$, then $x_1\vee_L\cdots\vee_L x_r:=(x_1\vee_L\cdots\vee_Lx_{r-1})\vee_Lx_r$ is defined by induction on $r$ using step 2.1 and is the least common left multiple, and similarly for $\wedge_L$ using step 3.1 and for the right-hand pair using step 4.1; the case $r=1$ is $x_1$ itself, and the case $r=0$ is excluded because the family is required to be nonempty. This is (d). [F1, step 2.1, step 3.1, step 4.1]

6.1 **Assembly.** Part (a) is step 2.1 including the computation $a\vee_Lb=[u\Theta(u,v)]$, part (b) is step 3.1, part (c) is step 4.1 and part (d) is step 5.1. The hypothesis that makes the reversing criterion applicable is exactly step 1.1: the conditional form of [[lem-artin-positive-word-reversing-is-complete]] is upgraded to an unconditional existence statement by the $\Delta$-power multiples of [[lem-every-positive-braid-divides-a-power-of-delta-on-both-sides]], so no common-multiple hypothesis survives in the conclusion. For $n\le1$ the monoid is trivial, so all four elements are $1$; all arguments are finite and no choice principle is used. ∎ [step 1.1, step 2.1, step 3.1, step 4.1, step 5.1]

## Remarks

- **Terminology.** The source GM writes $\preccurlyeq$ for the prefix order and
  states "we will also have $xd=xa\wedge xb$ and $xm=xa\vee xb$ for every
  $x\in B_n^{+}$". In Dehornoy et al. one speaks of *right*-lcms and
  *right*-gcds, because the multiples are generated by extending words on the
  right. This item uses the letter convention of
  [[def-left-and-right-divisibility-for-positive-braids]]: $a\vee_Lb$ is the
  least common *upper bound for $\preccurlyeq_L$*, which is the element called
  the right-lcm in [[lem-artin-positive-word-reversing-is-complete]]. The
  dictionary is stated in [F3] and used in step 2.1, so the two vocabularies
  cannot be silently interchanged.
- **Where the $\Delta$-power hypothesis enters.** The reversing criterion
  alone is conditional: it computes the lcm only when a common left multiple
  exists. Step 1.1 removes that hypothesis, and this is the only place where
  the half twist is used. The proof therefore follows the plan of GM's Section
  4 ("as every two elements have a common multiple, induction on length gives
  unique lcms and gcds") but supplies the missing explicit common multiple
  before invoking the criterion.
- **Effectivity.** Step 2.1 is effective: the complement
  $\Theta(u,v)$ is computed by finitely many recursion steps from the displayed
  words, and the gcd of step 3.1 is the join of a finite explicitly bounded
  list (all common left divisors of $a$ and $b$, enumerated by length and
  lexicographically within each finite level). This is what the word-problem
  corollary [[cor-the-braid-group-word-problem-is-decidable-by-garside-normal-form]]
  uses.
- Nothing here uses a choice principle: the enumerations are of finite sets of
  words and all joins are determined, not chosen.
