---
id: cor-kunneth-over-a-field
title: "Kunneth over a field"
kind: corollary
status: published
origin: pipeline
deps: ["thm-kunneth-theorem-for-free-complexes-over-a-pid", "prop-modules-over-a-field-are-projective-flat-and-injective"]
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

For complexes of vector spaces over a field $k$ with finite diagonals, cross product is a natural isomorphism $\bigoplus_{p+q=n}H_pC\otimes_kH_qD\cong H_n(C\otimes_kD)$.

## Proof

**Given:** the Kunneth exact sequence over $k$.

1.1 Every $k$-module is flat, hence $\operatorname{Tor}_1^k(H_pC,H_qD)=0$ for all $p,q$. [given]

2.1 The Kunneth surjection therefore has zero target, while cross product remains injective, giving the stated natural isomorphism. [step 1.1] ∎
