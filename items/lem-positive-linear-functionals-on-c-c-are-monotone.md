---
id: lem-positive-linear-functionals-on-c-c-are-monotone
kind: lemma
title: "A positive linear functional on $C_c(X)$ is monotone"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-positive-linear-functional-on-c-c]
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Donald L. Cohn, Measure Theory, 2nd ed., §7.2"
      url: "https://math.bme.hu/~pitrik/2023_24_2/Measure_Cohn.pdf"
---

## Statement

If $f,g\in C_c(X)$ and $f\le g$, then $\Lambda(f)\le\Lambda(g)$.

## Facts & Assumptions

**Given:** A positive real-linear $\Lambda:C_c(X)\to\mathbb R$ and $f\le g$.

## Proof

**Proof technique:** direct.

1.1 Since supports of $f$ and $g$ are compact, $g-f\in C_c(X)$; moreover $g-f\ge0$. [given]

2.1 Positivity gives $0\le\Lambda(g-f)=\Lambda(g)-\Lambda(f)$, which is the claim. [step 1.1, algebra] ∎
