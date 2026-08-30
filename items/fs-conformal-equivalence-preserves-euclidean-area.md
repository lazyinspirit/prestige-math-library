---
id: fs-conformal-equivalence-preserves-euclidean-area
kind: false-statement
title: "FALSE: conformal equivalence preserves Euclidean area"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-conformal-equivalence-and-automorphism-group]
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 8 §1"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Statement

If two plane domains are conformally equivalent, then they have the same
Euclidean area.

## Facts & Assumptions

**Given:** The domains $D(0,1/2)$ and $\mathbb D$.

[L1] A conformal equivalence is a biholomorphism between complex domains ([[def-conformal-equivalence-and-automorphism-group]]).

## Refutation

**Proof technique:** direct.

1.1 The map $f(z)=2z$ is holomorphic and bijects $D(0,1/2)$ onto $\mathbb D$, with holomorphic inverse $w\mapsto w/2$. Hence [L1] makes these two domains conformally equivalent. [L1, given, algebra]

2.1 Their Euclidean areas are different: $$\operatorname{Area}(D(0,1/2))=\frac{\pi}{4},\qquad \operatorname{Area}(\mathbb D)=\pi.$$ So conformal equivalence does not preserve Euclidean area. [step 1.1, algebra] ∎
