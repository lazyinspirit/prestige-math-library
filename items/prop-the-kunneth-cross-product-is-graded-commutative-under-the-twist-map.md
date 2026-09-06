---
id: prop-the-kunneth-cross-product-is-graded-commutative-under-the-twist-map
title: "The Kunneth cross product is graded commutative under the twist map"
kind: proposition
status: published
origin: pipeline
deps: ["lem-the-kunneth-cross-product-map-is-well-defined-and-natural", "thm-tor-symmetry-over-a-commutative-ring", "thm-symmetry-and-associativity-over-a-commutative-ring"]
proof_strategy: direct
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

Let $R$ be commutative and let $C,D$ be chain complexes of $R$-modules. Under
the signed chain isomorphism
$\tau:C\otimes_RD\to D\otimes_RC$,
$x\otimes y\mapsto(-1)^{pq}y\otimes x$, the cross product of degrees $p,q$
is graded commutative.

## Proof

**Given:** homogeneous cycles $x\in C_p$, $y\in D_q$ and the signed twist.

1.1 The twist sends $x\otimes y$ to $(-1)^{pq}y\otimes x$ and intertwines the signed tensor differentials. [given]

2.1 Passing to homology gives $\tau_*([x]\times[y])=(-1)^{pq}[y]\times[x]$, which is the asserted graded commutativity. [step 1.1, algebra] ∎
