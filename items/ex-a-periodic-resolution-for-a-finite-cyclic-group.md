---
id: ex-a-periodic-resolution-for-a-finite-cyclic-group
kind: example
title: "A periodic resolution for a finite cyclic group"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-integral-group-ring-module-and-trivial-module-convention]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Löh, Proposition 1.6.11"
      url: "https://loeh.app.ur.de/teaching/grouphom_ss19/lecture_notes.pdf"
---

## Example

For $C_m=\langle t\rangle$, the augmented complex with alternating maps $t-1$ and $N=1+t+\cdots+t^{m-1}$ is a free periodic resolution of $\mathbb Z$.

## Verification

**Given:** The group ring $\mathbb Z[C_m]$.

1.1 $(t-1)N=N(t-1)=t^m-1=0$, so this is a complex. [given]

2.1 Writing an element as $\sum a_it^i$ shows $\ker\varepsilon=(t-1)\mathbb Z[C_m]$, $\ker(t-1)=N\mathbb Z[C_m]$, and $\ker N=(t-1)\mathbb Z[C_m]$. Hence it is exact and every term is free. [step 1.1] ∎
