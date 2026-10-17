---
id: ex-tgr-physical-negative-kepler-capacity
kind: example
title: "Confined negative-capacity Kepler preparation"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 8
deps:
  - pthm-tgr-regulated-ensemble-response-inequivalence
dependency_roles:
  pthm-tgr-regulated-ensemble-response-inequivalence: physical-result
justified_by: []
physical_scope: "One energy and shell-radius instance of the finite regulated relative Kepler model under its declared Gibbs-volume convention and weak-field restriction; the canonical comparison remains a distinct preparation with unbounded momenta."
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Joseph Katz, Thermodynamics and Self-Gravitating Systems, Foundations of Physics 33 (2003), author manuscript"
      url: "https://arxiv.org/pdf/astro-ph/0212295"
      locator: "Complete manuscript retrieved; §3, PDF pp. 13–17, for negative heat capacity and ensemble distinctions in the stated self-gravitating contexts. The exact regulated shell signs follow from the linked theorem."
    - title: "David Tong, Statistical Physics, complete author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
      locator: "Complete notes retrieved; §§1.3.1–1.3.3, PDF pp. 24–30, for canonical variance response and the distinction between finite ensemble distributions."
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Example

Choose $m_1,m_2>0$, $A=Gm_1m_2$, reduced mass $\mu=m_1m_2/(m_1+m_2)$, inner radius $r_0>0$, and outer radius $R>32r_0$. Set $E=-A/(32r_0)$ and assume $2A/(\mu r_0c^2)\le\delta_{\rm NR}\ll1$. Use the two preparations and response conventions of the A-page comparison theorem.

## Facts & Assumptions

**Given:** $R>32r_0$, $E=-A/(32r_0)$, $A,\mu,r_0>0$, and the stated weak-field slow-motion condition.

[F1] Under these hypotheses, the microcanonical Gibbs-volume response is strictly negative, and the separate canonical response for the same relative Hamiltonian is nonnegative. ([[pthm-tgr-regulated-ensemble-response-inequivalence]])

## Verification

1.1 The selected energy has $e=-E=A/(32r_0)$, so $A/R<e<A/(16r_0)$ and $\delta=er_0/A=1/32$. The weak-field restriction is the condition required in [F1]. [given, F1, algebra]

2.1 Apply [F1] to this branch point. It gives $C_G<0$ for the declared Gibbs-volume microcanonical preparation and $C_K\ge0$ for the separate canonical preparation. These are model deductions about distinct finite ensembles, not measurements or evidence that either preparation is realized. [F1, step 1.1] ∎
