---
id: lem-finite-field-projective-hypersurface-point-bound
kind: lemma
title: "A finite-field projective hypersurface has at most degree times dimension-scale many points"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-projective-space-points
  - def-homogeneous-polynomial-and-homogeneous-ideal
  - thm-schwartz-zippel-over-finite-fields
  - def-prime
  - thm-bezout-identity
sources:
  scraped: []
  references:
    - title: "D. R. Heath-Brown, The density of rational points on curves and surfaces, proof of Theorem 14"
      url: "https://arxiv.org/pdf/math/0405392v1"
---

## Statement

Let $p$ be a prime, let $\mathbb F_p:=\mathbb Z/p\mathbb Z$, and let
$\overline F$ be a nonzero homogeneous form of degree $d\ge1$ in $n\ge3$
variables over $\mathbb F_p$. Then

$$\#\{[t]\in\mathbb P^{n-1}(\mathbb F_p):\overline F(t)=0\}\le nd\,p^{n-2}.$$

## Statement references

[Heath-Brown, the number of nonsingular reductions](https://arxiv.org/pdf/math/0405392v1)

## Facts & Assumptions

**Given:** The prime $p$, the nonzero form $\overline F$, and the projective
space in the Statement.

[F1] [[thm-schwartz-zippel-over-finite-fields]]: A nonzero polynomial of total
degree at most $d$ in $m$ variables over a finite field of order $q$ has at
most $dq^{m-1}$ zeros in the full affine grid.

[F2] [[def-projective-space-points]]: A projective point is a nonzero coordinate
vector modulo nonzero scalar multiplication.

[F3] [[def-homogeneous-polynomial-and-homogeneous-ideal]]: Every monomial of a
homogeneous form has the same total degree.

[F4] [[def-prime]], [[thm-bezout-identity]]: If $p$ is prime and $p\nmid a$,
then $\gcd(p,a)=1$ and there are integers $u,v$ with $up+va=1$.

## Proof

1.1 The quotient $\mathbb F_p=\mathbb Z/p\mathbb Z$ is a nonzero commutative
ring. For any nonzero residue $\bar a$, $p\nmid a$, so [F4] supplies $u,v$ with
$up+va=1$ and hence $\bar v\bar a=1$; every nonzero element is therefore a
unit, so this quotient is a field. [F4, given]

1.2 For each $i\in\{1,\ldots,n\}$, consider the projective chart where the
$i$th coordinate is nonzero and normalize that coordinate to $1$. Substituting
$x_i=1$ into $\overline F$ gives a nonzero polynomial in the remaining $n-1$
variables of total degree at most $d$: distinct degree-$d$ monomials remain
distinct after this substitution because their omitted exponent is determined
by the other exponents. By [F1], at most $dp^{n-2}$ points on this chart
satisfy $\overline F=0$. The $n$ charts cover projective space, so summing their
upper bounds yields at most $ndp^{n-2}$ projective zeros. [F1, F2, F3, step 1.1, algebra] ∎
