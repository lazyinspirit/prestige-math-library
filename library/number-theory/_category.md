---
name: number-theory
title: Number Theory
status: draft
---

Number theory here starts from the integers as this library constructed them, an
ordered commutative ring and nothing more, and asks what their multiplicative
structure is. Division with remainder gives the greatest common divisor and
Bezout's identity, Bezout gives Euclid's lemma, and Euclid's lemma is the step
that makes prime factorisation unique rather than merely possible. Congruence
modulo n turns divisibility into an equivalence relation, so the integers modulo
n form a ring in which linear equations can be solved; the Chinese remainder
theorem splits a composite modulus into its prime powers, Euler's totient counts
the units, and the unit group modulo a prime is cyclic, which is what a
primitive root is. The collection then asks which residues are squares. The
Legendre symbol is multiplicative because that unit group is cyclic, Euler's
criterion and Gauss's lemma compute it, quadratic reciprocity relates the symbol
for one prime to the symbol for the other, and the Jacobi symbol extends the
computation to odd composite moduli.

It is for a reader who wants the arithmetic proved from the ring axioms rather
than demonstrated by calculation. Every proof is given in full, stratified into
numbered phases so that each step names what it rests on, and audited before it
is published. It assumes the construction of the integers and the elementary
group and ring theory of Abstract Algebra.

The number theory track scaffolded to continue this collection rests on exactly
these pages, and it splits at the point where they stop: an analytic block that
needs the gamma and zeta functions of the complex analysis track, and a local
and algebraic block that needs valuation rings, Dedekind domains and ideal
classes from commutative algebra. The metric completion of the rationals that
produces the p-adic numbers comes from Topology and Real Analysis.
