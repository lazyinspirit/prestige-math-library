---
id: prop-euler-characteristic-is-multiplicative-under-the-finite-kunneth-hypotheses
title: "Euler characteristic is multiplicative under the finite Kunneth hypotheses"
kind: proposition
status: published
origin: pipeline
deps: ["thm-kunneth-theorem-for-free-complexes-over-a-pid", "thm-localisation-of-modules-is-exact", "def-axiom-of-choice"]
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

Assume the Axiom of Choice. Let $R$ be a PID and let $C,D$ be complexes of
free $R$-modules with finite total-degree diagonals. If their homology modules
have finite rank and only finitely many are nonzero, then
$\chi(C\otimes_RD)=\chi(C)\chi(D)$.

## Proof

**Given:** the stated PID, freeness, finite-diagonal, finite-homology, and
Axiom-of-Choice hypotheses ([[def-axiom-of-choice]]).

1.1 The exact sequence of [[thm-kunneth-theorem-for-free-complexes-over-a-pid]] applies under the stated choice and finite-diagonal hypotheses. Tensor it with the fraction field $K$ of $R$; [[thm-localisation-of-modules-is-exact]] preserves exactness and homology. A free resolution used to compute $\operatorname{Tor}_1^R(H_pC,H_qD)$ localizes to a free resolution over the field $K$, so its degree-one homology vanishes. Tensor associativity identifies $(H_pC\otimes_RH_qD)\otimes_RK$ with $(H_pC\otimes_RK)\otimes_K(H_qD\otimes_RK)$. Thus $\operatorname{rank}H_n(C\otimes_RD)=\sum_{p+q=n}\operatorname{rank}H_pC\operatorname{rank}H_qD$. [given, algebra]

2.1 Taking the finite alternating sum and regrouping it gives $\sum_{p,q}(-1)^{p+q}\operatorname{rank}H_pC\operatorname{rank}H_qD=\chi(C)\chi(D)$. [step 1.1, algebra] ∎
