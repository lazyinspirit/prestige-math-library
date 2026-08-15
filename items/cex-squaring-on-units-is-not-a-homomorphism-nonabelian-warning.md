---
id: cex-squaring-on-units-is-not-a-homomorphism-nonabelian-warning
kind: counterexample
title: "Squaring is not a homomorphism on a nonabelian group"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-symmetric-group, lem-symmetric-group-is-a-group, def-group-homomorphism, def-group-power, lem-group-power-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "W. Stein, Elementary Number Theory, Section 4.1"
      url: "https://wstein.org/ent/ent.pdf"
pipeline_run: null
---

## Statement refuted

The squaring map $s(g)=g^2$ need not be a group homomorphism. It fails on the nonabelian symmetric group $S_3$.

## Facts & Assumptions

**Given:** The permutations $\tau=(1\,2)$ and $\rho=(2\,3)$ of $\{1,2,3\}$, composed from right to left.

[L1] The symmetric group on a set consists of its permutations under composition ([[def-symmetric-group]]).

[L2] The symmetric group on every set is a group, and on a set with three distinct elements it is nonabelian ([[lem-symmetric-group-is-a-group]]).

[L3] Natural powers in a group satisfy $g^0=e$ and $g^{n+1}=g^ng$ ([[def-group-power]]).

[L4] Group powers satisfy $(g^m)^n=g^{mn}$, while $(gh)^n=g^nh^n$ requires $g$ and $h$ to commute ([[lem-group-power-laws]]).

[L5] A group homomorphism $f$ satisfies $f(xy)=f(x)f(y)$ for all $x,y$ ([[def-group-homomorphism]]).

## Counterexample

**Proof technique:** direct.

1.1 By [L1] and [L2], $\tau,\rho\in S_3$, and their product is $\tau\rho=(1\,2\,3)$ under the stated composition convention. [L1, L2, given]

2.1 The two transpositions satisfy $\tau^2=\rho^2=e$, while [L3] gives $(\tau\rho)^2=(1\,3\,2)\ne e$. This is precisely the failure permitted by the commuting hypothesis in [L4]. [L3, L4, step 1.1]

3.1 Therefore $s(\tau\rho)=(\tau\rho)^2\ne e=\tau^2\rho^2=s(\tau)s(\rho)$, so $s$ violates the homomorphism identity [L5]. [L5, step 2.1] ∎
