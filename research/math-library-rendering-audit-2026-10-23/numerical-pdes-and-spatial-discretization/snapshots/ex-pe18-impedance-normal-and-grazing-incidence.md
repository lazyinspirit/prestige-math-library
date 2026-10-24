---
id: ex-pe18-impedance-normal-and-grazing-incidence
kind: example
title: Normal, oblique, and grazing impedance reflection
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [thm-pe18-planar-impedance-reflection-coefficient]
proof_strategy: direct
generation:
  role: example
axiom_use: "No axiom is used; all values are substitutions in the exact plane-wave formula."
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Galkowski, Lafontaine, and Spence, Local absorbing boundary conditions on fixed domains give order-one errors for high-frequency waves"
      url: "https://arxiv.org/pdf/2101.02154"
---

## Example

Write $q=k\cos\theta$ for $0\le\theta<\pi/2$. The reflected amplitude is
$$\mathcal R(\theta)=\frac{\cos\theta-1}{\cos\theta+1}.$$
It is $0$ at normal incidence, equals $-1/3$ at $\theta=\pi/3$, and tends to $-1$ at grazing incidence.

## Facts & Assumptions

**Given:** $k>0$, $0\le\theta<\pi/2$, and the reflection theorem [F1].

[F1] [[thm-pe18-planar-impedance-reflection-coefficient]]: for $q=k\cos\theta>0$, $\mathcal R=(q-k)/(q+k)$.

## Verification

**Given:** $k>0$, $0\le\theta<\pi/2$, and [F1].

1.1 Divide numerator and denominator of [F1] by $k>0$ to obtain $\mathcal R=(\cos\theta-1)/(\cos\theta+1)$. At $\theta=0$, this is $0$; at $\theta=\pi/3$, $\cos\theta=1/2$ and it is $(-1/2)/(3/2)=-1/3$. [F1, algebra]

2.1 As $\theta\uparrow\pi/2$, continuity of cosine gives $\cos\theta\to0$ and the denominator tends to $1$, so $\mathcal R\to-1$ and $|\mathcal R|\to1$. The endpoint is a limit; the propagating theorem assumed $q>0$. [F1, step 1.1, algebra] ∎
