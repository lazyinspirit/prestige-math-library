---
page: cyclotomic-arithmetic-and-reciprocity-via-frobenius
title: "Cyclotomic Arithmetic and Reciprocity via Frobenius"
status: published
requires: [decomposition-inertia-and-frobenius, exterior-powers-orientation-and-hodge-duality]
items: [def-conductor-of-a-cyclotomic-field, lem-prime-power-cyclotomic-integral-structure, lem-coprime-discriminant-compositum-integral-basis, thm-cyclotomic-ring-of-integers, thm-discriminant-of-a-cyclotomic-field, cor-total-ramification-in-a-prime-power-cyclotomic-field, lem-monogenic-prime-factorisation-by-polynomial-reduction, lem-arithmetic-frobenius-on-a-cyclotomic-field, thm-prime-factorisation-in-a-cyclotomic-field, cor-cyclotomic-ramification-criterion, thm-conductor-of-a-full-cyclotomic-field, cor-unramified-prime-decomposition-in-a-cyclotomic-field, cor-complete-splitting-in-a-cyclotomic-field, def-quadratic-gauss-sum-in-a-cyclotomic-field, lem-galois-action-on-the-quadratic-gauss-sum, thm-quadratic-gauss-sum-square, thm-quadratic-subfield-of-a-prime-cyclotomic-field, thm-quadratic-frobenius-restriction-identity, cor-quadratic-reciprocity-via-frobenius, cor-first-supplement-via-cyclotomic-frobenius, cor-second-supplement-via-cyclotomic-frobenius]
examples: []
---

This page develops the arithmetic of the full cyclotomic fields
$\mathbb Q(\zeta_n)$ for **reduced indices**: an index $n$ is reduced when it is
odd or divisible by $4$. The single excluded shape $n\equiv2\pmod4$ is not
intrinsic, because $-\zeta_m$ is a primitive $2m$-th root of unity for odd $m$,
so $\mathbb Q(\zeta_{2m})=\mathbb Q(\zeta_m)$; the conductor theorem identifies
the least admissible index of each cyclotomic field and makes the reduced-index
convention precise.

The ring of integers is $\mathbb Z[\zeta_n]$ throughout. The prime-power case is
handled first, by the relation $(1-\zeta_{p^a})^{p^{a-1}(p-1)}=p$ up to a unit;
the general ring-of-integers result then follows from a coprime-discriminant
compositum step. These results give the discriminant formula. For prime
decomposition, a choice-free monogenic factorisation lemma starts from the
published choice-free ideal-factorisation theorem and compares local
nilpotency indices with the multiplicities in the reduction of $\Phi_n$
modulo $\ell$. The resulting prime factorisation gives the ramification
criterion ($\ell$ ramifies exactly when $\ell\mid n$); for $\ell\nmid n$ it
gives residue degree $\operatorname{ord}_n(\ell)$, the count
$\varphi(n)/\operatorname{ord}_n(\ell)$ of primes, and complete splitting
exactly when $\ell\equiv1\pmod n$.

The second half passes to the quadratic Gauss sum
$\tau_p=\sum_a(a/p)\zeta_p^{\,a}$, whose Galois action is the Legendre symbol,
whose square is $p^{*}=(-1)^{(p-1)/2}p$, and which generates the unique
quadratic subfield $\mathbb Q(\sqrt{p^{*}})$ of $\mathbb Q(\zeta_p)$. Computing
the restriction of the arithmetic Frobenius to that subfield in two ways
identifies $\left(\frac{p^{*}}q\right)$ with $\left(\frac qp\right)$. Together
with the first supplement, this proves quadratic reciprocity; the first and
second supplements are also derived from the Frobenius power map and Euler's
criterion. The Gauss sum itself is attached to a chosen primitive root and has
no root-independent sign; only its square and its field are canonical.
