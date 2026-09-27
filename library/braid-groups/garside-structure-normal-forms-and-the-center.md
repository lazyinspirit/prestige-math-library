---
page: garside-structure-normal-forms-and-the-center
title: "Garside Structure, Normal Forms, and the Center"
status: published
requires: [braided-and-symmetric-monoidal-categories]
items: [def-positive-braid-monoid,
        lem-positive-artin-relations-preserve-homogeneous-length,
        def-artin-right-complements-and-word-reversing,
        lem-artin-right-complements-satisfy-the-cube-condition,
        lem-artin-positive-word-reversing-is-complete,
        lem-the-positive-braid-monoid-is-left-and-right-cancellative,
        def-left-and-right-divisibility-for-positive-braids,
        lem-artin-atoms-have-explicit-left-and-right-lcms-and-complements,
        def-garside-half-twist-and-simple-positive-braid,
        lem-conjugation-by-delta-reverses-artin-generators,
        lem-each-artin-atom-divides-delta-on-both-sides,
        lem-every-positive-braid-divides-a-power-of-delta-on-both-sides,
        thm-positive-braids-have-left-and-right-gcds-and-lcms,
        thm-the-ore-fraction-group-of-positive-braids-is-the-artin-braid-group,
        thm-left-and-right-divisibility-extend-to-lattice-orders-on-the-braid-group,
        lem-reduced-adjacent-transposition-words-have-well-defined-positive-lifts,
        lem-simple-positive-braids-are-indexed-by-permutations,
        lem-delta-is-the-lcm-of-the-artin-atoms-and-has-the-same-left-and-right-divisors,
        thm-left-garside-normal-form-is-unique,
        cor-the-braid-group-word-problem-is-decidable-by-garside-normal-form,
        thm-braid-groups-are-torsion-free-by-the-garside-lattice,
        lem-a-central-positive-braid-is-a-power-of-delta-squared-for-n-greater-than-two,
        thm-the-center-of-b-n-is-generated-by-the-full-twist-for-n-greater-than-two,
        prop-the-center-of-b-two-is-all-of-b-two]
examples: []
---

This page develops the Garside structure of the Artin braid group from its
positive part. With $\Sigma_n=\{\sigma_1,\dots,\sigma_{n-1}\}$ the alphabet of
atoms, the **positive braid monoid** is the quotient
$B_n^{+}=\Sigma_n^{*}/\!\equiv^{+}$ of the free monoid of words on $\Sigma_n$ by
the smallest congruence $\equiv^{+}$ containing the braid pairs
$\sigma_i\sigma_{i+1}\sigma_i\equiv^{+}\sigma_{i+1}\sigma_i\sigma_{i+1}$ and the
far-commutation pairs $\sigma_i\sigma_j\equiv^{+}\sigma_j\sigma_i$ for
$|i-j|\ge2$; its universal property makes it the ambient object for everything
below, and it is *not* identified with the Artin group $B_n$ until the Ore
theorem is proved. Every defining pair preserves word length, so length descends
to a monoid homomorphism $\ell\colon B_n^{+}\to\mathbb N$ with
$\ell(xy)=\ell(x)+\ell(y)$ and $\ell(x)=0$ only for $x=1$; in particular the
monoid is conical, and this homogeneity supplies the Noetherianity witness used with the cube condition in the
reversing completeness proof. The definitions
throughout are choice free: $B_n^{+}$ is a quotient of a free monoid by the
intersection of all congruences containing the displayed pairs.

The engine of the page is **word reversing** in the sense of Dehornoy et al.
The syntactic right complement on letters is
$\theta(\sigma_i,\sigma_i)=\varepsilon$,
$\theta(\sigma_i,\sigma_j)=\sigma_j\sigma_i$ for $|i-j|=1$ and
$\theta(\sigma_i,\sigma_j)=\sigma_j$ for $|i-j|\ge2$, and right reversing
replaces an occurrence $\sigma_i^{-1}\sigma_j$ of opposite signs by
$\theta(\sigma_i,\sigma_j)\,\theta(\sigma_j,\sigma_i)^{-1}$, deleting
$\sigma_i^{-1}\sigma_i$. The page first proves the $\theta$-cube condition for
all triples of letters by the explicit three-consecutive-cases computation,
then invokes the complemented-presentation completeness theorem of the source
with every hypothesis checked (the presentation is right-complemented,
homogeneous length is an $\mathbb N$-valued right-Noetherianity witness, and
the $\theta$-cube condition implies the cube condition), and finally reproduces
the nested outer/inner/distance induction of the Appendix Lemma II.4.62 that
the completeness theorem rests on. Three source facts are recorded verbatim as
assumptions with their printed locators; everything else, including the whole
induction, is re-derived. The consequences are the equality criterion — $u$
and $v$ represent the same positive braid if and only if the reversing of the signed word
$u^{-1}v$ terminates in the empty pair, equivalently
$\Theta(u,v)=\Theta(v,u)=\varepsilon$ — left-cancellativity of $B_n^{+}$, and
the conditional least common right multiples computed by the terminal pair of a
reversing.

Word reversal $(\varepsilon)^{\mathrm{rev}}=\varepsilon$,
$(ws)^{\mathrm{rev}}=s\,w^{\mathrm{rev}}$ then descends to an involutive
anti-automorphism $\rho$ of $B_n^{+}$, which converts left cancellation into
right cancellation and exchanges the two divisibility orders
$a\preccurlyeq_Lb\iff\exists c\ (b=ac)$ and
$a\preccurlyeq_Rb\iff\exists c\ (b=ca)$. Both are partial orders with unique
witnesses, finite divisor sets and monotone length, but they are genuinely
different orders. The half twist
$\Delta=\Delta_n=T_1T_2\cdots T_{n-1}$, $T_k=\sigma_k\sigma_{k-1}\cdots\sigma_1$,
has length $N=n(n-1)/2$, and each atom divides it on both sides with an
explicit complement of length $N-1$: $\Delta=\sigma_iR_i=L_i\sigma_i$, whence
$\sigma_i^{-1}=R_i\Delta^{-1}$ in the group. The same computation yields the
sliding identities $\sigma_i\Delta=\Delta\sigma_{n-i}$ and the centrality of
$\Delta^{2}$, and a left-to-right reading of an arbitrary positive word then
shows that **every** positive braid divides a power of $\Delta$ on both sides.
That removes the conditionality from the reversing lcms: $B_n^{+}$ has
left and right gcds and lcms for all pairs and all nonempty finite families,
i.e. it is a lattice under each of the two divisibility orders. Cancellativity
together with the common $\Delta$-power multiples is exactly the Ore condition,
so $B_n^{+}$ embeds in its group of fractions, and the assignment
$\sigma_i\mapsto\iota(\sigma_i)$ is an isomorphism onto the Artin group $B_n$:
from here on $B_n^{+}\subseteq B_n$ and "positive braid" has its two customary
meanings. The divisibility orders extend to $B_n$ by
$x\preccurlyeq_Ly\iff x^{-1}y\in B_n^{+}$ and
$x\preccurlyeq_Ry\iff yx^{-1}\in B_n^{+}$, agree there with the monoid orders on
positives, and are again lattices: left translations preserve the left-order lattice,
while right translations preserve the right-order lattice.

The second half of the page identifies the simple braids and proves the normal
form. The half twist is the least common multiple of the atoms, and its left and
right divisor sets coincide; **simple** braids are these divisors. The two
divisibility orders nevertheless differ already on four positive braids in
$B_3^{+}$, as the companion example computes, so balancedness of $\Delta$
is a property of $\Delta$ alone. Reduced words for permutations are given
well-defined positive lifts by a type-A exchange argument proved from the
published generation of $S_n$ by adjacent transpositions — no Coxeter
presentation of $S_n$ is assumed — and the inversion calculus then shows that
the simple braids are exactly the images $\widehat{\sigma}$ of the elements
$\sigma\in S_n$, with
$a\preccurlyeq_L\Delta\iff a\preccurlyeq_R\Delta\iff a=\widehat{\pi(a)}\iff
\ell(a)=\operatorname{inv}(\pi(a))$, so there are exactly $n!$ of them and
every one is a reduced positive braid. The main theorem of the page is the
uniqueness of the **left Garside normal form**: every $x\in B_n$ has exactly
one expression $x=\Delta^{p}a_1a_2\cdots a_r$ with $p\in\mathbb Z$, $r\in\mathbb N$
and all $a_i$ proper simple braids satisfying the greedy condition
$a_i=\Delta\wedge_L(a_ia_{i+1}\cdots a_r)$; in particular, adjacent
factors satisfy the weighting $a_ia_{i+1}\wedge_L\Delta=a_i$; here $p=p(x)$ is the largest integer with
$\Delta^{p}\preccurlyeq_Lx$, $A(x)=\Delta^{-p(x)}x$ is positive with
$\Delta\not\preccurlyeq_LA(x)$, and the greedy factorisation of $A(x)$
terminates because $\ell$ strictly decreases. Because $\Theta$ is total and
every step is a finite search over positive words of explicitly bounded
length, the normal form is a complete computable invariant: the word problem
of $B_n$ is decidable, and two words represent the same braid exactly when
their computed $\bigl(p;\,a_1,\dots,a_r\bigr)$ agree. The lattice order also
gives a structural proof of torsion-freeness: an element of finite order has an
infimum of its own powers which is invariant under multiplication by it, and
the resulting relation in the lattice forces the element to be $1$.

The final items determine the center. A positive braid $z$ central in $B_n$
for $n>2$ must be a power of $\Delta^{2}$: writing $z=\Delta^{p}A$ in the left
normal form and testing centrality against products of two adjacent atoms makes
the positive tail $A$ satisfy $A\sigma_j\sigma_i=\sigma_j\sigma_iA$ (for even
$p$) or the index-reversed identity $A\sigma_{n-j}\sigma_{n-i}=\sigma_j\sigma_iA$
(for odd $p$), and the atom lcm $\sigma_j\sigma_i\sigma_j$ then propagates left
divisibility by one atom to its neighbours until every atom divides $A$, forcing
$A=1$; an odd exponent is excluded by the sliding identity
$\sigma_k\Delta^{p}=\Delta^{p}\sigma_{n-k}$ together with
$\sigma_1\ne\sigma_{n-1}$. Consequently
$Z(B_n)=\langle\Delta^{2}\rangle=\{\Delta^{2k}:k\in\mathbb Z\}$ for $n>2$,
generated by the **full twist** $\Delta^{2}$, and the group is infinite cyclic
because its positive length is $2N>0$, whereas the identity has length zero. The case
$n=2$ is the stated exception: $B_2$ is free of rank one on $\sigma_1=\Delta$,
hence infinite cyclic and abelian, and its center is the whole group
$\langle\Delta\rangle$, not $\langle\Delta^{2}\rangle$. Nothing on the page
uses a choice principle. Its explicit source imports are the three recorded
facts used in the reversing theorem and the exchange-to-Matsumoto induction
used for the type-A positive lift, together with the published foundational
prerequisites. The companion examples page works the
whole structure out concretely in $B_3$: the six simple braids and their
divisibility lattice, the left normal form of $\sigma_1^{-1}\sigma_2$, the full
twist $(\sigma_1\sigma_2)^{3}=\Delta^{2}$ with its centrality, and the
counterexample showing that the exponent sum is not a complete normal form.
