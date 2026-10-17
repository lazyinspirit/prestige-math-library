---
page: congruences-and-the-chinese-remainder-theorem
title: "Congruences, the Integers Modulo n and the Chinese Remainder Theorem"
status: published
items: [def-congruence-modulo-an-integer, lem-congruence-is-an-equivalence-relation,
        lem-congruence-respects-integer-arithmetic, def-integers-modulo-n,
        thm-standard-representatives-modulo-n, def-addition-and-multiplication-modulo-n,
        thm-integers-modulo-n-basic-algebra, def-unit-group-modulo-n-and-euler-totient,
        thm-unit-criterion-modulo-n, cor-totient-at-one-and-at-a-prime,
        lem-multiples-below-a-prime-power, thm-totient-of-a-prime-power,
        lem-linear-congruence-reduction-by-the-gcd,
        thm-linear-congruence-solvability-and-solution-count,
        lem-pairwise-coprime-divisibility, lem-chinese-remainder-two-moduli,
        thm-chinese-remainder-theorem, cor-euler-totient-is-multiplicative,
        thm-euler-totient-product-formula, thm-sum-of-totients-over-divisors,
        thm-z-mod-p-is-a-field, lem-wilson-inverse-pairing, thm-wilsons-theorem]
examples: []
---

Congruence turns divisibility into an equivalence relation and hence into the quotient $\mathbb Z/n$, where addition and multiplication are independent of representatives. The boundary moduli are part of the construction: congruence modulo $0$ is equality, congruence modulo $1$ is universal, and $\mathbb Z/1$ is the one-element ring rather than a field. For positive moduli, units are exactly the coprime residue classes, so their number is Euler's totient. Linear congruences are reduced by their gcd, giving both their solvability criterion and their exact number of solution classes.

The two-modulus theorem first proves the full compatibility criterion: residues modulo positive $m,n$ coexist exactly when $\gcd(m,n)$ divides their difference, and then determine one class modulo $mn/\gcd(m,n)$. Its coprime specialization extends to finite pairwise-coprime lists and preserves both operations. This yields multiplicativity of $\varphi$, while inclusion-exclusion gives Euler's finite prime-divisor product. Partitioning standard residues by $n/\gcd(a,n)$ gives $\sum_{d\mid n,\ d>0}\varphi(d)=n$. Finally, prime modulus makes $\mathbb Z/p$ a field, and inverse pairing in its unit group proves Wilson's theorem.
