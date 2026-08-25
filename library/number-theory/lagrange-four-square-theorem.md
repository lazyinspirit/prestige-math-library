---
page: lagrange-four-square-theorem
title: "Lagrange Four Square Theorem"
status: draft
items: [def-sum-of-four-squares-representation,
        lem-euler-four-square-product-identity,
        cor-four-squares-closed-under-products,
        lem-four-square-congruence-for-primes,
        lem-least-absolute-remainder,
        lem-small-four-square-multiple-of-a-prime,
        lem-least-absolute-residue-quadruple-of-a-multiple,
        lem-four-square-descent,
        thm-every-prime-is-a-sum-of-four-squares,
        thm-lagrange-four-square-theorem,
        rem-sign-patterns-in-the-four-square-identity,
        lem-squares-modulo-eight,
        lem-sum-of-three-squares-is-never-seven-modulo-eight,
        lem-four-dividing-a-sum-of-three-squares-forces-even-coordinates,
        prop-three-square-congruence-obstruction,
        cor-integers-requiring-four-squares]
examples: []
---

Division with remainder for a nonzero divisor, the divisibility relation with its linearity and transitivity, and congruence modulo an integer together with its compatibility with addition and multiplication are the working tools here. From the theory of quadratic residues the development takes the proposition that for an odd prime $p$ and an integer $a$ with $p\nmid a$ there are integers $x,y$ with $x^2+y^2\equiv a\pmod p$, used at $a=-1$, and the criterion deciding when an odd integer is a square modulo a power of two, used at modulus $8$. Cancellation of a nonzero factor in $\mathbb{Z}$, the fact that a nonempty set of integers bounded below has a least element, the existence of a prime divisor of any integer above $1$, and induction over $\mathbb{N}$ supply the minimality and induction arguments.

A representation of a nonnegative integer as a sum of four squares is an ordered integer quadruple, and Euler's product identity in a fixed sign pattern makes such representations closed under multiplication. For a prime $p$ the congruence $x^2+y^2+1\equiv 0\pmod p$ is solvable; replacing a solution by its least absolute remainders produces a multiple $pm$ with $1\le m<p$ that is a sum of four squares. The centred residue quadruple of a representation of $pm$ has norm $mn$ with $1\le n<m$, and the identity carries the representation down to $pn$, so the least admissible multiplier is $1$ and every prime is a sum of four squares; closure under products extends this to every nonnegative integer. A congruence argument modulo $8$ then shows that every positive integer of the form $4^am$ with $m\equiv 7\pmod 8$ is no sum of three squares.
