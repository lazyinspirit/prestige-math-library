---
id: lem-incidence-convolution-associative-and-distributive
kind: lemma
title: "Incidence convolution is associative and distributes over pointwise addition"
status: published
origin: session
deps: [def-incidence-algebra-and-convolution, lem-finite-sum-reindexing-and-fubini, def-ring, def-commutative-ring]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "F. Gotti, Incidence Algebras, MIT 18.211 notes"
      url: "https://math.mit.edu/~fgotti/docs/Courses/C.%20Combinatorial%20Analysis/38.%20Mobius%20Inversion%20Formula/Incidence%20Algebras.pdf"
pipeline_run: null
---

## Statement

For a locally finite poset $P$, a commutative ring $R$, and $f,g,h\in I(P,R)$, incidence convolution satisfies

$$(f*g)*h=f*(g*h),$$

and both distributive laws over pointwise addition.

## Facts & Assumptions

**Given:** A locally finite poset $P$, a commutative ring $R$, incidence functions $f,g,h$, and a comparable pair $x\le y$.

[F1] $(a*b)(x,y)=\sum_{x\le z\le y}a(x,z)b(z,y)$, and $[x,y]$ is finite ([[def-incidence-algebra-and-convolution]]).

[L1] Finite sums in a commutative monoid may be reindexed, split, and interchanged by the finite Fubini rule ([[lem-finite-sum-reindexing-and-fubini]]).

[F2] In a ring, multiplication is associative and distributes over addition on both sides; in a commutative ring the order of factors may also be exchanged ([[def-ring]], [[def-commutative-ring]]).

## Proof

**Proof technique:** direct.

1.1 Expanding the left bracketing and distributing the factor $h(v,y)$ through the inner sum gives $((f*g)*h)(x,y)=\sum_{x\le v\le y}\sum_{x\le u\le v}f(x,u)g(u,v)h(v,y)$. [F1, F2]

1.2 Put $D:=\{(u,v)\in[x,y]^2:u\le v\}$. Expanding the right bracketing gives $(f*(g*h))(x,y)=\sum_{x\le u\le y}\sum_{u\le v\le y}f(x,u)g(u,v)h(v,y)$. [F1, F2]

1.3 For every $x\le y$, $((f+g)*h)(x,y)=\sum_{x\le z\le y}(f(x,z)+g(x,z))h(z,y)=\sum_{x\le z\le y}f(x,z)h(z,y)+\sum_{x\le z\le y}g(x,z)h(z,y)$ by distributivity in $R$ and additivity of a finite sum; hence $(f+g)*h=f*h+g*h$. [F1, F2, L1]

1.4 The same calculation with the sum in the right factor gives $f*(g+h)=f*g+f*h$. [F1, F2, L1]

2.1 Extend the displayed summand by $0_R$ from $D$ to $[x,y]^2$. Splitting each finite inner sum into the admissible indices and the zero terms identifies steps 1.1 and 1.2 with its two iterated sums over $[x,y]^2$. Finite Fubini makes those iterated sums equal. [step 1.1, step 1.2, L1]

3.1 Since steps 2.1 and 1.2 agree for every comparable $(x,y)$, $(f*g)*h=f*(g*h)$. [step 2.1, step 1.2]

4.1 Steps 3.1, 1.3 and 1.4 prove associativity and both distributive laws. [step 3.1, step 1.3, step 1.4] ∎
