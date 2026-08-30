---
id: fs-riemann-map-is-unique-without-normalization
kind: false-statement
title: "FALSE: the Riemann map is unique without normalization"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-riemann-mapping-theorem, thm-disc-automorphisms-are-rotated-blaschke-factors]
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Theorem 2.2"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Statement

Every conformal equivalence from a plane domain onto $\mathbb D$ is unique
without any normalization condition.

## Facts & Assumptions

**Given:** The disc automorphisms $z\mapsto z$ and $z\mapsto -z$.

[L1] The identity map and every rotated Blaschke factor are automorphisms of the disc ([[thm-disc-automorphisms-are-rotated-blaschke-factors]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], both $f(z)=z$ and $g(z)=-z$ are biholomorphic self-maps of $\mathbb D$. [L1, given]

2.1 The maps $f$ and $g$ are distinct, since $f(1/2)=1/2$ while $g(1/2)=-1/2$. Thus the disc already has two different conformal self-equivalences. [step 1.1, algebra]

3.1 Therefore uniqueness fails unless a normalizing condition is imposed. [step 2.1] ∎
