---
category: number-theory
status: published
parts:
  - part: divisibility-and-primes
    title: "Divisibility and primes"
    pages:
      - divisibility-gcd-and-bezout
      - primes-and-the-fundamental-theorem-of-arithmetic
  - part: congruences-and-unit-groups
    title: "Congruences and unit groups"
    pages:
      - congruences-and-the-chinese-remainder-theorem
      - primitive-roots-and-unit-groups-modulo-n
  - part: quadratic-residues
    title: "Quadratic residues and reciprocity"
    pages:
      - quadratic-residues-and-the-legendre-symbol
      - quadratic-reciprocity-and-the-jacobi-symbol
---

## divisibility-and-primes

Number theory here starts from the integers as this library constructed them, an ordered
commutative ring and nothing more. Division with remainder gives the greatest common
divisor and Bezout's identity, and Bezout gives Euclid's lemma, which is the step that
makes a prime factorisation unique rather than merely possible.

## congruences-and-unit-groups

Congruence modulo n turns divisibility into an equivalence relation, so the integers modulo
n become a ring in which linear equations can be solved. The Chinese remainder theorem
splits a composite modulus into its prime powers, Euler's totient counts the units, and the
unit group modulo a prime turns out to be cyclic, which is what a primitive root is.

## quadratic-residues

Which numbers are squares modulo a prime is decided by the Legendre symbol, and it is
multiplicative because the unit group is cyclic. Euler's criterion and Gauss's lemma
compute it, quadratic reciprocity relates the symbol for one prime to the symbol for the
other, and the Jacobi symbol extends the computation to odd composite moduli.
