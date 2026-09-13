---
id: cex-symmetrization-does-not-preserve-products-in-sl-two
kind: counterexample
title: Symmetrization does not preserve products in sl_2
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [thm-pbw-symmetrization-is-a-vector-space-isomorphism-in-characteristic-zero]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Etingof, MIT 18.745 notes, Corollary 13.7 and Example 13.9, printed p. 75"
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
---

## Statement refuted

PBW symmetrization preserves products in $\mathfrak{sl}_2$.

## Facts & Assumptions

**Given:** $\mathfrak{sl}_2$ over a characteristic-zero field, with
$[h,e]=2e$.

[L1] Symmetrization satisfies
$\operatorname{sym}(eh)=\tfrac12(eh+he)$ and is a vector-space isomorphism
([[thm-pbw-symmetrization-is-a-vector-space-isomorphism-in-characteristic-zero]]).

## Counterexample

**Proof technique:** direct computation.

1.1 In $U(\mathfrak{sl}_2)$, $he-eh=2e$, so $\operatorname{sym}(eh)=\tfrac12(eh+he)=eh+e$. [given, L1, algebra]

2.1 On degree-one factors, $\operatorname{sym}(e)\operatorname{sym}(h)=eh$. PBW injectivity from [L1] gives $e\ne0$ in the enveloping algebra, so $eh+e\ne eh$. [step 1.1, L1, algebra]

3.1 Therefore symmetrization does not preserve this product and is not an algebra homomorphism. [step 2.1] ∎
