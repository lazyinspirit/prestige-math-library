---
id: prop-euler-characteristic-is-multiplicative-under-the-finite-kunneth-hypotheses
title: "Euler characteristic is multiplicative under the finite Kunneth hypotheses"
kind: proposition
status: published
origin: pipeline
deps: ["thm-kunneth-theorem-for-free-complexes-over-a-pid", "cor-kunneth-over-a-field"]
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

Assume the Axiom of Choice. Let $R$ be a PID and let $C,D$ be complexes of
free $R$-modules with finite total-degree diagonals. If their homology modules
have finite rank and only finitely many are nonzero, then
$\chi(C\otimes_RD)=\chi(C)\chi(D)$.

## Proof

**Given:** the stated PID, freeness, finite-diagonal, and finite-homology
hypotheses.

1.1 Over the fraction field, Kunneth identifies the rank of $H_n(C\otimes D)$ with $\sum_{p+q=n}\operatorname{rank}H_pC\operatorname{rank}H_qD$. [given]

2.1 Taking the finite alternating sum and regrouping it gives $\sum_{p,q}(-1)^{p+q}\operatorname{rank}H_pC\operatorname{rank}H_qD=\chi(C)\chi(D)$. [step 1.1, algebra] ∎
