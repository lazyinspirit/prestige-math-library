---
id: lem-primitive-projective-coordinate-representative-well-defined
kind: lemma
title: "Every rational projective point has a unique primitive normalized coordinate representative"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-primitive-projective-coordinate-representative
  - def-common-divisor-and-gcd
  - cor-common-divisor-divides-gcd
  - lem-gcd-basic-values
  - lem-coprime-divides-product
  - lem-divisor-bound
sources:
  scraped: []
  references:
    - title: "D. R. Heath-Brown, The density of rational points on curves and surfaces, §1"
      url: "https://arxiv.org/pdf/math/0405392v1"
---

## Statement

For every integer $n\ge1$, each point of $\mathbb P^{n-1}(\mathbb Q)$ has
exactly one primitive normalized coordinate representative as defined by the
recursive greatest-common-divisor convention.

## Statement references

[Heath-Brown, projective rational-point representatives](https://arxiv.org/pdf/math/0405392v1)

## Facts & Assumptions

**Given:** An integer $n\ge1$ and a rational projective point represented by a
nonzero vector in $\mathbb Q^n$.

[F1] [[def-primitive-projective-coordinate-representative]]: Projective points
are nonzero rational vectors modulo nonzero rational scaling; an integer vector
is primitive when its recursively defined pairwise gcd is $1$, and normalized
when its first nonzero coordinate is positive.

[F2] [[def-common-divisor-and-gcd]], [[cor-common-divisor-divides-gcd]],
[[lem-divisor-bound]]: For any pair of integers, the gcd is a nonnegative
common divisor and every common divisor divides it, including the convention
$\gcd(0,0)=0$; a positive divisor of a nonzero integer is no larger than its
absolute value.

[F3] [[lem-coprime-divides-product]]: If $\gcd(a,b)=1$ and $a\mid bc$, then
$a\mid c$.

[F4] [[lem-gcd-basic-values]]: $\gcd(a,b)=\gcd(b,a)$.

## Proof

1.1 Choose a nonzero rational vector $x$ representing the point and clear the
finitely many denominators to obtain a nonzero integer vector $u$ in the same
class. Put $g_1=|u_1|$ and $g_j=\gcd(g_{j-1},u_j)$. Induction on $j$ shows that
$g_j$ divides every $u_i$ with $i\le j$, and that every common divisor of those
coordinates divides $g_j$: the forward assertion follows because $g_j$ is a
common divisor of $g_{j-1}$ and $u_j$, and the reverse assertion follows from
the common-divisor property in [F2]. Since $u\ne0$, the final $g_n$ is positive.
[given, F1, F2, choose, construct]

1.2 Divide every coordinate of $u$ by $g_n$ to obtain an integer vector $z$.
It is primitive: if an integer $c>1$ divided all coordinates of $z$, then
$cg_n$ would be a positive common divisor of the coordinates of $u$. By step
1.1, $cg_n$ divides the nonzero number $g_n$, so [F2] gives $cg_n\le |g_n|=g_n$,
contradicting $c>1$. Change the sign of $z$ if its first nonzero coordinate is
negative; this gives a primitive normalized representative. [step 1.1, F1, F2, algebra]

2.1 Let $z$ and $z'$ be two primitive normalized representatives of the same
point. Then $z'=qz$ for some $q=a/b\in\mathbb Q^\times$ with $a,b\in\mathbb Z$,
$b>0$, and $\gcd(a,b)=1$. Since every coordinate of $z'$ is integral,
$b\mid az_i$ for every $i$; [F4] gives $\gcd(b,a)=1$, and [F3] gives
$b\mid z_i$ for every $i$, so primitivity of $z$ forces $b=1$. [F1, F3, F4, choose]

2.2 Now $z'=az$. If $|a|>1$, then $|a|$ is a positive common divisor of the
coordinates of $z'$, contradicting primitivity; hence $a=1$ or $a=-1$. The
first nonzero coordinates of $z$ and $z'$ are both positive, so $a=1$ and
$z'=z$. Existence and uniqueness are proved. [step 2.1, F1, algebra] ∎
