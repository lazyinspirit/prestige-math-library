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
      - sums-of-two-squares
      - lagrange-four-square-theorem
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

Quadratic residues ask which classes modulo an odd prime are squares, and the Legendre
symbol, Euler's criterion, Gauss's lemma and quadratic reciprocity answer that question in
a multiplicative language extended by the Jacobi symbol. The same congruence tools settle
sums of two squares: primes $p\equiv1\pmod4$ are represented, the Brahmagupta-Fibonacci
identity multiplies representations, and primes $3\pmod4$ must occur to even exponent.
Euler's four-square identity and a minimal-descent argument then show every prime, hence
every nonnegative integer, is a sum of four squares. Congruences modulo $8$ isolate the
sharper three-square obstruction $4^a(8m+7)$.
