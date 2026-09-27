---
id: lem-a-central-positive-braid-is-a-power-of-delta-squared-for-n-greater-than-two
kind: lemma
title: "A central positive braid is a power of delta squared for n greater than two"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-delta-is-the-lcm-of-the-artin-atoms-and-has-the-same-left-and-right-divisors,
       def-braid-group-by-the-artin-presentation,
       lem-conjugation-by-delta-reverses-artin-generators,
       thm-left-garside-normal-form-is-unique,
       lem-artin-atoms-have-explicit-left-and-right-lcms-and-complements,
       lem-reduced-adjacent-transposition-words-have-well-defined-positive-lifts,
       lem-the-positive-braid-monoid-is-left-and-right-cancellative,
       lem-positive-artin-relations-preserve-homogeneous-length,
       def-left-and-right-divisibility-for-positive-braids,
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
    - title: "J. Gonzalez-Meneses, Basic results on braid groups, Theorem 4.2, printed pp. 30-31"
      url: "https://arxiv.org/abs/1010.0321"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

Let $n>2$, let $B_n$ be the braid group of
[[def-braid-group-by-the-artin-presentation]] with its positive braid monoid
$B_n^{+}$, its atoms $\sigma_1,\dots,\sigma_{n-1}$, its half twist $\Delta$ and
its divisibility order $\preccurlyeq_L$
([[def-left-and-right-divisibility-for-positive-braids]]). If $z\in B_n^{+}$
is central in $B_n$, i.e. $zx=xz$ for every $x\in B_n$, then
$$z=\Delta^{2k}\qquad\text{for some }k\ge0.$$

In particular the only central powers of $\Delta$ that are positive are the
even ones. Nothing here uses a choice principle. The hypothesis $n>2$ is
essential: for $n=2$ every power $\Delta^{p}$ with $p\in\mathbb Z$ is central,
and this is the subject of
[[prop-the-center-of-b-two-is-all-of-b-two]].

## Facts & Assumptions

**Given:** A natural number $n>2$, the positive braid monoid $B_n^{+}\subseteq B_n$ with atoms $\sigma_1,\dots,\sigma_{n-1}$ and half twist $\Delta=\Delta_n$, and a central element $z\in B_n^{+}$.

[F1] **Index reversal and centrality of $\Delta^{2}$.** $\sigma_i\Delta=\Delta\sigma_{n-i}$ for every $i\in\{1,\dots,n-1\}$; consequently $\sigma_k\Delta^m=\Delta^m\sigma_{n-k}$ for odd $m$ and $\sigma_k\Delta^m=\Delta^m\sigma_k$ for even $m$, for every integer $m$: induction gives the formulas for $m\ge0$, and the inverse of $\sigma_i\Delta=\Delta\sigma_{n-i}$ gives $\sigma_i\Delta^{-1}=\Delta^{-1}\sigma_{n-i}$, from which induction gives the negative powers. Also $\Delta^2$ commutes with every positive word, and $\Delta$ has length $N=n(n-1)/2$ ([[lem-conjugation-by-delta-reverses-artin-generators]], [[def-garside-half-twist-and-simple-positive-braid]]).

[F2] **Left normal form.** Every $x\in B_n$ has a unique expression $x=\Delta^{p}A$ with $p\in\mathbb Z$, $A\in B_n^{+}$ and $\Delta\not\preccurlyeq_LA$; moreover $p$ is the largest integer with $\Delta^{p}\preccurlyeq_Lx$ ([[thm-left-garside-normal-form-is-unique]]).

[F3] **Atom lcms.** For adjacent indices $|i-j|=1$ the atoms have left-lcm $\sigma_i\vee_L\sigma_j=\sigma_i\sigma_j\sigma_i$, and this element left-divides every common left multiple of $\sigma_i$ and $\sigma_j$; distinct atoms are incomparable in $\preccurlyeq_L$ ([[lem-artin-atoms-have-explicit-left-and-right-lcms-and-complements]]).

[F4] **Atom criterion for $\Delta$.** If $m\in B_n^{+}$ satisfies $\sigma_i\preccurlyeq_Lm$ for every $i$, then $\Delta\preccurlyeq_Lm$. Also $\Delta$ is a left multiple of each atom ([[lem-delta-is-the-lcm-of-the-artin-atoms-and-has-the-same-left-and-right-divisors]]).

[F5] **Distinct atoms and cancellation.** $\pi(\sigma_1)=s_1$ and $\pi(\sigma_{n-1})=s_{n-1}$ are distinct permutations of $S_n$ when $n>2$ ([[lem-reduced-adjacent-transposition-words-have-well-defined-positive-lifts]]); $B_n^{+}$ is left and right cancellative, and $\ell$ is additive with $\ell(w)=0$ only for $w=1$ ([[lem-the-positive-braid-monoid-is-left-and-right-cancellative]], [[lem-positive-artin-relations-preserve-homogeneous-length]]).

## Proof

**Proof technique:** direct.

1.1 **The normal form of a central positive braid.** By [F2] write $z=\Delta^{p}A$ with $p\in\mathbb Z$, $A\in B_n^{+}$ and $\Delta\not\preccurlyeq_LA$; we show $A=1$ and $p$ even. Since $z$ is positive and $A$ is positive, additivity of $\ell$ gives $\ell(z)=\ell(\Delta^{p})+\ell(A)$ when $p\ge0$, so the case $A=1$ is the case $z=\Delta^{p}$; in general we first prove $A=1$. [F2, F5]

1.2 **A is central when $p$ is even, and satisfies a twisted identity when $p$ is odd.** If $p$ is even then $\Delta^{p}=(\Delta^{2})^{p/2}$ is central by [F1], so $A=\Delta^{-p}z$ is central as well: $A\sigma_j\sigma_i=\sigma_j\sigma_iA$ for all $i,j$. If $p$ is odd, centrality of $z$ gives $z\sigma_{n-j}\sigma_{n-i}=\sigma_{n-j}\sigma_{n-i}z$ for all $i,j$; inserting $z=\Delta^{p}A$, using [F1] to move $\Delta$ past the two atoms, namely $\sigma_{n-j}\sigma_{n-i}\Delta^{p}=\Delta^{p}\sigma_{j}\sigma_{i}$ for odd $p$, and cancelling the factor $\Delta^{p}$ on the left (in the group) yields the twisted identity $A\sigma_{n-j}\sigma_{n-i}=\sigma_{j}\sigma_{i}A$ for all $i,j$. [F1, F2, F5]

2.1 **Propagation from one atom prefix.** Suppose $A\ne1$ and choose $i$ with $\sigma_i\preccurlyeq_LA$ (possible because a positive word for $A$ of length $\ell(A)\ge1$ has an atom as its first letter). Let $j$ satisfy $|i-j|=1$. In the even case of step 1.2, the element $E:=\sigma_j\sigma_iA$ satisfies $E=A\sigma_j\sigma_i$, so $\sigma_i\preccurlyeq_L E$ (since $A=\sigma_ic$ gives $E=\sigma_ic\sigma_j\sigma_i$) and $\sigma_j\preccurlyeq_LE$ (trivially); by [F3] the lcm $\sigma_j\sigma_i\sigma_j$ left-divides the common multiple $E$, and cancelling the prefix $\sigma_j\sigma_i$ with [F5] gives $\sigma_j\preccurlyeq_LA$. In the odd case of step 1.2 the same argument applies with $E:=\sigma_j\sigma_iA=A\sigma_{n-j}\sigma_{n-i}$: here $\sigma_i\preccurlyeq_L A\sigma_{n-j}\sigma_{n-i}=E$ (because $A=\sigma_ic$ gives $E=\sigma_i(c\sigma_{n-j}\sigma_{n-i})$) and $\sigma_j\preccurlyeq_LE$ trivially, so $\sigma_j\sigma_i\sigma_j\preccurlyeq_LE$ and cancellation gives $\sigma_j\preccurlyeq_LA$. Hence in both cases every $j$ adjacent to a member of $S:=\{k:\sigma_k\preccurlyeq_LA\}$ also lies in $S$. [F3, F5, step 1.2]

3.1 **Every atom divides $A$.** The graph on $\{1,\dots,n-1\}$ joining consecutive integers is connected for $n\ge2$; by step 2.1 the nonempty set $S$ has no boundary, so $S=\{1,\dots,n-1\}$: every atom left-divides $A$. By [F4] this forces $\Delta\preccurlyeq_LA$, contradicting the normal form choice $\Delta\not\preccurlyeq_LA$ of step 1.1. Therefore $A=1$ and $z=\Delta^{p}$. [F4, step 1.1, step 2.1]

4.1 **The exponent is even.** With $z=\Delta^{p}$ central and $p$ odd, [F1] gives $\sigma_k\Delta^{p}=\Delta^{p}\sigma_{n-k}$ while centrality of $z$ gives $\sigma_k\Delta^{p}=\Delta^{p}\sigma_k$; cancelling $\Delta^{p}$ in the group, $\sigma_{n-k}=\sigma_k$ for every $k$. For $k=1$ this says $\sigma_{n-1}=\sigma_1$, contradicting the distinctness of the images $s_{n-1}\ne s_1$ in $S_n$ when $n>2$ by [F5]. Hence $p$ is even, $p=2k$. [F1, F5, step 3.1]

5.1 **The exponent is nonnegative.** Since $z=\Delta^{2k}\in B_n^{+}$ and $2k=p$: if $k<0$, then $\Delta^{-2k}\in B_n^{+}$ has $\ell(\Delta^{-2k})=(-2k)N>0$ and $\Delta^{-2k}z=1$ would give $0=\ell(1)=\ell(\Delta^{-2k})+\ell(z)>0$ by additivity and $\ell(1)=0$, a contradiction. Hence $k\ge0$ and $z=\Delta^{2k}$. [F5, step 4.1]

6.1 **Assembly.** Step 1.2 separates the even and the odd exponent of the normal form of $z$, step 3.1 forces the positive tail $A$ to be trivial, step 4.1 rules out odd exponents using the distinct atoms $\sigma_1\ne\sigma_{n-1}$, and step 5.1 gives the sign of the exponent. The two hypotheses used beyond the normal form and the atom calculus are the $\Delta$-sliding identity and the locality of the atom lcms; no geometric input and no choice principle is used. ∎ [step 1.1, step 1.2, step 2.1, step 3.1, step 4.1, step 5.1]

## Remarks

- **Why the cases $p$ even and $p$ odd differ.** For even $p$ the factor
  $\Delta^{p}$ is central and $A$ inherits centrality; for odd $p$ the best
  available identity is the twisted one
  $A\sigma_{n-j}\sigma_{n-i}=\sigma_j\sigma_iA$, obtained from
  $\sigma_{k}\Delta^{p}=\Delta^{p}\sigma_{n-k}$. Both identities suffice to
  propagate an atom prefix to adjacent atoms, which is all the argument needs.
  This is the case distinction in Garside's proof of Theorem 4.2 as
  reproduced in J. González-Meneses, *Basic results on braid groups*, printed
  pp. 30--31.
- **Where positivity is used.** Positivity of $z$ enters only to write the
  maximal-power decomposition with a positive tail and to conclude $k\ge0$;
  the propagation argument itself needs only the left normal form of $z$ and
  the atom calculus.
- Nothing here uses the Axiom of Choice or any weaker choice principle.
