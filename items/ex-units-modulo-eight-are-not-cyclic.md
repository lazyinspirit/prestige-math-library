---
id: ex-units-modulo-eight-are-not-cyclic
kind: example
title: "$(\\mathbb{Z}/8)^\\times=\\{[1],[3],[5],[7]\\}$ is not cyclic because every element squares to $[1]$"
status: published
origin: session
deps: [thm-unit-criterion-modulo-n, def-unit-group-modulo-n-and-euler-totient, def-group-power, def-order-in-a-group, def-generated-subgroup, lem-order-characterisation, thm-standard-representatives-modulo-n, def-integers-modulo-n, def-congruence-modulo-an-integer]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "K. Conrad, Modular Arithmetic"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/modarithshort.pdf"
pipeline_run: null
---

## Example

$$(\mathbb Z/8)^\times=\{[1]_8,[3]_8,[5]_8,[7]_8\}$$

is not cyclic: every element has square $[1]_8$.

## Facts & Assumptions

**Given:** The unit group $(\mathbb Z/8)^\times$.

[L1] The standard representatives of units are exactly the integers $a$ with $0\le a<8$ and $\gcd(a,8)=1$ ([[thm-standard-representatives-modulo-n]], [[thm-unit-criterion-modulo-n]], [[def-unit-group-modulo-n-and-euler-totient]]).

[L2] A finite group is cyclic when one element generates it, and an element generates a finite group exactly when its order is the group cardinality ([[def-generated-subgroup]], [[def-order-in-a-group]], [[lem-order-characterisation]]).

[L3] Natural powers in a group satisfy $g^0=e$ and $g^2=gg$ ([[def-group-power]]).

[F1] Equality of residue classes is congruence of representatives ([[def-integers-modulo-n]]), and congruence means divisibility of their difference ([[def-congruence-modulo-an-integer]]).

## Verification

**Proof technique:** direct.

1.1 The odd standard representatives $1,3,5,7$ are precisely those coprime to $8$, giving the displayed unit group by [L1]. [L1]

1.2 Their squares are $1^2=1$, $3^2=9\equiv1$, $5^2=25\equiv1$, and $7^2=49\equiv1\pmod8$. Hence every element has order at most $2$. [L3, F1]

2.1 The group has cardinality $4$ by step 1.1, but no element has order $4$ by step 1.2. Therefore no element generates it, and [L2] shows that it is not cyclic. [step 1.1, step 1.2, L2] ∎
