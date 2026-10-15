---
id: ex-td-finite-quench-work-fluctuation
kind: example
title: "A finite quench has a positive probability of work below delta F"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 7
deps: [def-td-driven-finite-path-model, post-td-canonical-protocol-preparation, post-td-stationary-bath-kernel, pthm-td-finite-jarzynski]
dependency_roles:
  def-td-driven-finite-path-model: formulation-prerequisite
  post-td-canonical-protocol-preparation: physical-assumption
  post-td-stationary-bath-kernel: physical-assumption
  pthm-td-finite-jarzynski: physical-result
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
physical_scope: "A calculated two-state hypothetical protocol example; it is not an experiment and makes no claim about a measured system."
sources:
  references:
    - title: "C. Jarzynski, Introduction to Nonequilibrium Statistical Physics, lecture notes, Nonequilibrium Work Relations"
      url: "https://terpconnect.umd.edu/~cjarzyns/CHEM-CHPH-PHYS_703_Spr_20/onlineLectures/Nonequilibrium%20Work%20Relations.pdf"
      locator: "Complete 21-page lecture PDF; finite work fluctuations and the ensemble equality."
---

## Example

Take $\Omega=\{a,b\}$, $\beta>0$, $E_0(a)=E_0(b)=0$, and $E_1(a)=0$, $E_1(b)=\epsilon$ for $\epsilon>0$. Prepare canonically at stage zero and use the identity transition kernel after the quench.

## Facts & Assumptions

**Given:** The finite path model and canonical protocol preparation.

[F1] [[def-td-driven-finite-path-model]]: work is the energy change at the instantaneous quench and the forward path is weighted by the initial law.

[A1] [[post-td-canonical-protocol-preparation]]: both initial states have probability $1/2$.

[F2] [[pthm-td-finite-jarzynski]]: this model satisfies the exact finite ensemble exponential-work identity.

## Verification

**Given:** $\epsilon>0$ and $\beta>0$.

1.1 The partition sums are $Z_0=2$ and $Z_1=1+e^{-\beta\epsilon}$, so $\Delta F=-\beta^{-1}\log[(1+e^{-\beta\epsilon})/2]$. Since $e^{-\beta\epsilon}<1$, the ratio lies strictly between $e^{-\beta\epsilon}$ and $1$, hence $0<\Delta F<\epsilon$. [given, F1, algebra]

2.1 The identity kernel leaves the state unchanged, so the two work values are $0$ and $\epsilon$, each with probability $1/2$. Therefore $\mathbb P_F(W<\Delta F)=1/2$. [A1, F1, step 1.1]

3.1 Directly, $\mathbb E_F e^{-\beta W}=(1+e^{-\beta\epsilon})/2=e^{-\beta\Delta F}$, while the event in step 2.1 has positive probability. Thus the equality is an ensemble statement and does not impose $W\ge\Delta F$ on every path. [F2, step 1.1, step 2.1, algebra] ∎
