---
id: ex-tgr-ideal-cutoff-entropy
kind: example
title: Half-mass cutoff and exact coarse entropy export
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 5
deps:
  - prop-tgr-ideal-evaporation-accounting
dependency_roles:
  prop-tgr-ideal-evaporation-accounting: mathematical-premise
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
proof_strategy: direct
---

## Example

In the fixed-reference effective-area model of [[prop-tgr-ideal-evaporation-accounting]], with its stated positive constants (in particular $G>0$), choose the positive cutoff $M_{\min}=M_0/2$. Then the model stops at $\tau=(7/8)t_*$, where $t_*=M_0^3/(3\alpha)$, exports energy $c^2M_0/2$, and has
$$S_B(M_0)-S_B(M_0/2)=\frac{3\pi k_BG M_0^2}{\hbar c},\quad S_{\rm rad}(\tau)=\frac{4\pi k_BG M_0^2}{\hbar c},\quad \Delta(S_B+S_{\rm rad})=\frac{\pi k_BG M_0^2}{\hbar c}.$$
The entropy offset cancels. This calculation stops at positive mass and asserts no endpoint at $M=0$ or physical generalized second law.

## Facts & Assumptions

**Given:** The definitions and exact cutoff solution in [[prop-tgr-ideal-evaporation-accounting]], including $G,c,\hbar,k_B>0$, with $M_0>0$ and $M_{\min}=M_0/2$.

[F1] [[prop-tgr-ideal-evaporation-accounting]], Statement: $\tau=(M_0^3-M_{\min}^3)/(3\alpha)$, emitted energy is $c^2(M_0-M_{\min})$, $S_B(M)=4\pi k_BG M^2/(\hbar c)+S_0$, and the entropy export and total change are $4/3$ and $1/3$ times the B-entropy decrease.

## Verification

1.1 Substituting $M_{\min}=M_0/2$ into the cutoff time gives $\tau=(1-1/8)M_0^3/(3\alpha)=(7/8)t_*$. The integrated energy is $c^2(M_0-M_0/2)=c^2M_0/2$. [given, F1, algebra]

2.1 The entropy decrease is $[4\pi k_BG/(\hbar c)](M_0^2-M_0^2/4)=3\pi k_BG M_0^2/(\hbar c)$, with the same $S_0$ at both endpoints cancelling. [F1, step 1.1, algebra]

3.1 Multiplying the decrease in step 2.1 by $4/3$ and $1/3$, respectively, gives $S_{\rm rad}(\tau)=4\pi k_BG M_0^2/(\hbar c)$ and total change $\pi k_BG M_0^2/(\hbar c)$. These are exact outputs of the defined positive-cutoff model. [F1, step 2.1, algebra] ∎
