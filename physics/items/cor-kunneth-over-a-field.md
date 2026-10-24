---
id: cor-kunneth-over-a-field
title: "Kunneth over a field"
kind: corollary
status: published
origin: pipeline
deps: ["def-axiom-of-choice", "thm-kunneth-theorem-for-free-complexes-over-a-pid", "prop-modules-over-a-field-are-projective-flat-and-injective"]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
---

## Statement

Assume the Axiom of Choice. For complexes of vector spaces over a field $k$ with finite diagonals, cross product is a natural isomorphism $\bigoplus_{p+q=n}H_pC\otimes_kH_qD\cong H_n(C\otimes_kD)$.

## Proof

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]) and the Kunneth exact sequence over $k$.

1.1 Under the stated Choice hypothesis, every $k$-module is flat by [[prop-modules-over-a-field-are-projective-flat-and-injective]], hence $\operatorname{Tor}_1^k(H_pC,H_qD)=0$ for all $p,q$. [given]

2.1 Under the same Choice hypothesis, [[thm-kunneth-theorem-for-free-complexes-over-a-pid]] supplies the natural exact sequence. Its Tor surjection has zero target by step 1.1, while cross product remains injective, giving the stated natural isomorphism. [given, step 1.1] ∎
