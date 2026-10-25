---
id: thm-barycentric-subdivision-is-a-chain-map
kind: theorem
title: "Barycentric subdivision is a chain map"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-barycentric-subdivision-chain-operator, def-barycenter-and-affine-cone-on-a-singular-chain, thm-the-singular-boundary-squares-to-zero]
proof_strategy: induction
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, Proposition 2.21"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
pipeline_run: frontier-31a
---

## Statement

For every singular chain $c$, $\partial S(c)=S(\partial c)$.

## Facts & Assumptions

**Given:** The recursively defined subdivision operator $S$.

## Proof

**Proof technique:** induction.

1.1 In degree $0$, both sides vanish. Assume $\partial S=S\partial$ on dimensions below $n$, where $n\geq1$. [given, base, assume-hyp]

2.1 Let $\iota_n$ be the identity simplex of $\Delta^n$ and put $z=S(\partial\iota_n)$, the affine lift used in the definition of $S\sigma$. If $n=1$, then $z=[v_1]-[v_0]$, so its augmentation is zero. The degree-zero cone formula gives $\partial S\sigma=\sigma_\#z=S(\partial\sigma)$. [step 1.1, given, algebra]

2.2 If $n\geq2$, the induction hypothesis applied in $\Delta^n$ gives $\partial z=S(\partial^2\iota_n)=0$ by [[thm-the-singular-boundary-squares-to-zero]]. The positive-degree cone formula therefore gives $\partial S\sigma=\sigma_\#z-b_\sigma(\partial z)=\sigma_\#z=S(\partial\sigma)$. The last equality follows directly from the recursive definition: subdivision commutes with postcomposition by $\sigma$ on each affine face. [step 1.1, ih, algebra]

3.1 Linearity extends these equalities to finite chains, completing the induction. [step 2.1, step 2.2, discharge-induction] ∎
