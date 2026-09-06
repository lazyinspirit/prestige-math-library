---
id: cex-right-continuous-psi-has-the-wrong-perron-endpoint
kind: counterexample
title: "Right-continuous psi has the wrong Perron endpoint"
status: draft
origin: pipeline
deps: [def-half-weighted-chebyshev-psi, def-chebyshev-psi-function]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Kiran S. Kedlaya, Analytic Number Theory, §10.1"
      url: "https://kskedlaya.org/ant/chapter-10.html"
---

## Statement refuted

At every prime power $q$, the right-continuous $\psi(q)$ equals the Perron
endpoint value.

## Counterexample

**Given:** $q=p^k$ and the definitions of $\psi$ and $\psi_0$.

1.1 The right-continuous sum includes the full last term: $\psi(q)=\sum_{n<q}\Lambda(n)+\log p$. [given, algebra]

2.1 Perron's endpoint is $\psi_0(q)=\sum_{n<q}\Lambda(n)+\tfrac12\log p$, so the two values differ by $\tfrac12\log p\ne0$. [step 1.1, algebra] ∎
