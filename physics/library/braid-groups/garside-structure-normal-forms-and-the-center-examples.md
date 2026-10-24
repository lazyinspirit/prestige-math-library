---
page: garside-structure-normal-forms-and-the-center-examples
title: "Garside Structure, Normal Forms, and the Center — Examples"
status: published
requires: [garside-structure-normal-forms-and-the-center]
items: []
examples: [ex-the-simple-braids-and-divisibility-lattice-for-b-three,
           ex-a-left-garside-normal-form-computation-in-b-three,
           ex-the-full-twist-in-b-three,
           cex-exponent-sum-is-not-a-complete-braid-normal-form]
---

These four worked entries make the Garside structure of the companion page
concrete, all of them inside $B_3$, where the half twist is
$\Delta=T_1T_2=\sigma_1(\sigma_2\sigma_1)=\sigma_1\sigma_2\sigma_1$ of length
$N=3$ and the braid relation also gives
$\Delta=\sigma_2\sigma_1\sigma_2$. The first example lists the six simple braids and computes their relevant
meets and joins in the positive divisibility lattice. There are exactly $3!=6$ simple
braids, namely $1,\sigma_1,\sigma_2,\sigma_1\sigma_2,\sigma_2\sigma_1,\Delta$,
and their images under the permutation homomorphism
$\pi\colon B_3^{+}\to S_3$ are the six distinct elements
$\mathrm{id},(1\,2),(2\,3),(1\,2\,3),(1\,3\,2),(1\,3)$, which both proves the
listing and exhibits the bijection of the theory. The two atoms are
incomparable on the left with join their braid word,
$\sigma_1\wedge_L\sigma_2=1$ and
$\sigma_1\vee_L\sigma_2=\sigma_1\sigma_2\sigma_1=\Delta$. For
$a=\sigma_1\sigma_2$ and $b=\sigma_1$ the left meet is
$a\wedge_Lb=\sigma_1$, computed from the divisors of an atom and of a
two-letter element, while the right meet is $a\wedge_Rb=1$: the two
divisibility orders are therefore already different on the four-element
subfamily $\{1,\sigma_1,\sigma_2,\sigma_1\sigma_2\}$, and the balancedness of
$\Delta$ — its left and right divisor sets coincide — does not collapse them
into one order.

The second example computes a left Garside normal form in full. For
$x=\sigma_1^{-1}\sigma_2$ the atom complement
$\sigma_1^{-1}=\Delta^{-1}\sigma_1\sigma_2$ gives the positive description
$x=\Delta^{-1}\sigma_1\sigma_2^{2}$, and the scaling identity for meets yields
$\Delta\wedge_L\sigma_1\sigma_2^{2}=(\sigma_1\sigma_2)(\sigma_1\wedge_L\sigma_2)
=\sigma_1\sigma_2$, so $\Delta\not\preccurlyeq_L\sigma_1\sigma_2^{2}$ and the
normal form is $x=\Delta^{-1}\cdot(\sigma_1\sigma_2)\cdot\sigma_2$ with
$p(x)=-1$, $A(x)=\sigma_1\sigma_2^{2}$ and two proper simple factors
$a_1=\sigma_1\sigma_2$, $a_2=\sigma_2$, of permutations $s_1s_2$ and $s_2$.
The pair is left weighted, $(a_1a_2)\wedge_L\Delta=a_1$, and the negative
exponent correctly reports that $x$ is not a positive braid.

The third example computes the full twist. The braid relation gives
$(\sigma_1\sigma_2)^{3}=\sigma_1\sigma_2\sigma_1\cdot\sigma_2\sigma_1\sigma_2
=\Delta^{2}$, that is, the square of the half twist is the class of a positive
word of length $6$; applying the sliding identity
$\sigma_i\Delta=\Delta\sigma_{3-i}$ twice shows that each atom commutes with
$\Delta^{2}$, hence so does every element of $B_3$ and
$Z(B_3)=\langle\Delta^{2}\rangle$ is infinite cyclic by the center theorem for
$n=3>2$. The half twist itself is *not* central only because
$\Delta\sigma_1=\sigma_2\Delta$ and the atoms $\sigma_1\ne\sigma_2$ are
distinct: the passage from $\Delta$ to its square in the center is genuine,
not an artifact of commuting generators.

The fourth entry is the counterexample. The exponent sum
$\varepsilon\colon B_n\to\mathbb Z$, $\sigma_i^{\pm1}\mapsto\pm1$, is a
well-defined homomorphism: every three-term braid relator and every
far-commutation relator has equal exponent sum on both sides — and the permutation homomorphism
$\pi\colon B_3\to S_3$ is likewise well defined, with
$\pi(\sigma_1)=(1\,2)\ne(2\,3)=\pi(\sigma_2)$, so $\sigma_1\ne\sigma_2$ in
$B_3$. Yet $\varepsilon(\sigma_1)=\varepsilon(\sigma_2)=1$, and both elements
have the same coarse normal-form data: left normal form
$\Delta^{0}\cdot\sigma_i$ with exponent $p=0$ and a single proper simple
factor. The exponent sum is therefore not a complete braid normal form, and
not even the triple $(\varepsilon(x),p(x),r(x))$ determines a braid; what
separates the two witnesses is the factor itself, $\sigma_1$ against
$\sigma_2$, i.e. the permutation data that the left Garside normal form
retains. Nothing in these four entries uses a choice principle.
