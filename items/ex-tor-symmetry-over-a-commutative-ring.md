---
id: ex-tor-symmetry-over-a-commutative-ring
title: "Tor symmetry over a commutative ring"
kind: example
status: draft
origin: pipeline
deps: ["thm-tor-symmetry-over-a-commutative-ring"]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Example

Over $R=\mathbb Z$, $\operatorname{Tor}^{\mathbb Z}_1(\mathbb Z/4,\mathbb Z/6)\cong\operatorname{Tor}^{\mathbb Z}_1(\mathbb Z/6,\mathbb Z/4)\cong\mathbb Z/2$.

## Verification

**Given:** the cyclic Tor calculation and commutativity of $\mathbb Z$.

1.1 The first group is $\mathbb Z/\gcd(4,6)=\mathbb Z/2$. [given]

2.1 Interchanging the two integers leaves their gcd unchanged and realizes the tensor-factor swap. [step 1.1, algebra]

3.1 Thus this concrete calculation agrees with the natural symmetry over a commutative ring. [step 2.1, algebra] ∎
