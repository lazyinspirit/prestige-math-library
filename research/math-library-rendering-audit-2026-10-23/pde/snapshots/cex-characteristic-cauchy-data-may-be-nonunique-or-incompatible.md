---
id: cex-characteristic-cauchy-data-may-be-nonunique-or-incompatible
kind: counterexample
title: "Characteristic Cauchy data may be nonunique or incompatible"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-noncharacteristic-first-order-cauchy-surface,
       thm-local-linear-transport-cauchy-problem]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Victor Ivrii, Partial Differential Equations"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
---

## Statement refuted

Cauchy data for a first-order linear transport equation always determine a
unique local classical solution, even when the data surface is characteristic.

## Facts & Assumptions

**Given:** The transport equation $u_t+u_x=0$ and the line $\Sigma=\{(x,t):x=t\}$.

[L1] The local uniqueness theorem for linear transport assumes the data surface is noncharacteristic ([[thm-local-linear-transport-cauchy-problem]]).

[L2] A noncharacteristic first-order Cauchy surface is one transverse to the space-time transport vector ([[def-noncharacteristic-first-order-cauchy-surface]]).

## Counterexample

**Proof technique:** direct.

1.1 For $u_t+u_x=0$, the space-time transport vector is $(1,1)$, which is tangent to $\Sigma$, so $\Sigma$ is characteristic rather than noncharacteristic by [L2], and [L1] does not apply. [L1, L2]

2.1 Every $C^1$ function of the form $u(x,t)=F(x-t)$ solves $u_t+u_x=0$, and on $\Sigma$ one has $x-t=0$, so the restriction is the constant $F(0)$. Taking $F_0(s)=0$ and $F_1(s)=s$ gives two different local classical solutions with the same constant data on $\Sigma$, proving nonuniqueness. On the other hand, every classical solution restricts to a constant on $\Sigma$, so nonconstant prescribed data such as $g(t)=t$ are incompatible. [step 1.1] ∎
