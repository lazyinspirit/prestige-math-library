---
id: ex-tgr-regulated-negative-response
kind: example
title: "Regulated Kepler branch has negative volume response"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
deps:
  - thm-tgr-regulated-kepler-negative-capacity
  - lem-tgr-relative-shell-canonical-response
dependency_roles:
  thm-tgr-regulated-kepler-negative-capacity: mathematical-premise
  lem-tgr-relative-shell-canonical-response: mathematical-premise
justified_by: []
aliases: []
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Joseph Katz, Thermodynamics and Self-Gravitating Systems, Foundations of Physics 33 (2003), author manuscript"
      url: "https://arxiv.org/pdf/astro-ph/0212295"
    - title: "David Tong, Statistical Physics, complete author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
    - title: "Pierre-Henri Chavanis, Statistical mechanics of self-gravitating systems in general relativity: II. The classical Boltzmann gas"
      url: "https://arxiv.org/pdf/1908.10817"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
dependency_level: 3
---

## Example

Choose relative parameters $\mu>0$, $A>0$, $r_0>0$, and $R>32r_0$. Set $e=A/(32r_0)$, so $E=-e$ and $\delta=er_0/A=1/32$. This is an interior point of the finite regulated shell branch.

## Facts & Assumptions

**Given:** The regulated relative shell, $R>32r_0$, and the Gibbs-volume and canonical temperature conventions.

[F1] On every regulated shell energy with $0<\delta\le1/16$, the Gibbs-volume heat capacity is strictly negative. ([[thm-tgr-regulated-kepler-negative-capacity]])

[F2] For the same fixed relative Hamiltonian under a separate canonical preparation, the response is $C_K=k_B\beta^2\operatorname{Var}(h)\ge0$. ([[lem-tgr-relative-shell-canonical-response]])

## Verification

1.1 Since $R>32r_0$, $A/R<A/(32r_0)=e$; also $e=A/(32r_0)\le A/(16r_0)$. Thus the branch assumptions hold and $\delta=1/32\le1/16$. [given, algebra]

2.1 Applying [F1] gives $C_G<0$ for the explicit Gibbs-volume entropy convention. Applying [F2] to the same relative Hamiltonian but its canonical preparation gives $C_K\ge0$. These are different preparations and response definitions, so the two signs do not contradict one another. [F1, F2, step 1.1] ∎
