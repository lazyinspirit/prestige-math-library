---
id: ex-qsm-periodic-ideal-occupation
kind: example
title: "A fixed-number constraint removes independent occupations"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
  - pthm-qsm-periodic-ideal-occupation
  - post-qsm-models-statistics-and-preparation
dependency_roles:
  pthm-qsm-periodic-ideal-occupation: physical-result
  post-qsm-models-statistics-and-preparation: physical-assumption
physical_scope: "An exact two-mode, one-particle canonical calculation compared with the distinct grand-canonical independent-mode preparation; no ensemble-equivalence claim is made."
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "David Tong, Statistical Physics, §3.5, canonical and grand-canonical occupation sums"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
---

## Example

Consider two bosonic modes with energies $\epsilon_1,\epsilon_2\in\mathbb R$ and a canonical preparation restricted to total number $N=1$. Writing $w_i=e^{-\beta\epsilon_i}$ and $p_i=w_i/(w_1+w_2)$, the occupations satisfy $N_1+N_2=1$. The fixed-number state therefore correlates the modes, even though the grand state of the linked ideal model has independent mode occupations.

## Verification

**Given:** $\beta>0$, two finite energies, and the adopted canonical and grand preparations.

[A1] [[post-qsm-models-statistics-and-preparation]]: fixed-number canonical preparation is the Gibbs state restricted to the selected number sector; grand preparation is a separate trace state.

[F1] [[pthm-qsm-periodic-ideal-occupation]], Statement: occupations are independent in the diagonal grand state under its trace hypotheses.

1.1 The one-particle sector has exactly the two basis states $|1,0\rangle$ and $|0,1\rangle$, with weights $w_1,w_2$. Normalization gives probabilities $p_1,p_2$ with $p_1+p_2=1$, so $\mathbb E N_i=p_i$ and $N_1N_2=0$ in every canonical state outcome. [given, A1, algebra]

2.1 Hence $\operatorname{Cov}(N_1,N_2)=\mathbb E(N_1N_2)-\mathbb E N_1\mathbb E N_2=-p_1p_2<0$. The grand product law in [F1] is independent instead. Thus the constraint changes the joint law, without implying any general finite-volume ensemble-equivalence failure. [step 1.1, F1, algebra] ∎
