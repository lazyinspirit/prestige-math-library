---
id: ex-nonabelian-group-of-order-twenty-one
kind: example
title: ' There is a unique nonabelian group of order $21$, namely $C_7\rtimes C_3$ with multiplication by $2$'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-classification-of-groups-of-order-pq, thm-automorphisms-of-a-finite-cyclic-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
pipeline_run: null
---

## Example

Up to isomorphism, the unique nonabelian group of order $21$ is

$$C_7\rtimes C_3,$$

where a generator of $C_3$ acts on $C_7$ by raising elements to the second power.

## Facts & Assumptions

**Given:** The primes $3<7$.

[L1] When $p\mid(q-1)$, there is exactly one nonabelian group of order $pq$, namely the nontrivial product $C_q\rtimes C_p$ ([[thm-classification-of-groups-of-order-pq]]).

[L2] $\operatorname{Aut}(C_7)\cong(\mathbb Z/7)^×$, with $[a]$ acting by the exponent $a$ ([[thm-automorphisms-of-a-finite-cyclic-group]]).

## Verification

**Proof technique:** direct.

1.1 Since $3\mid6$, [L1] gives a unique nonabelian isomorphism type of order $21$. [L1, algebra]

1.2 Modulo $7$, one has $2^3\equiv1$ while $2\not\equiv1$, so $[2]$ has order three in $(\mathbb Z/7)^×$. By [L2], it defines a nontrivial action of $C_3$ on $C_7$. [L2, algebra]

2.1 The resulting semidirect product is therefore the unique nonabelian group from [L1]. [step 1.1, step 1.2, L1] ∎
