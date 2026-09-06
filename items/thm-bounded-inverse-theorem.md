---
id: thm-bounded-inverse-theorem
kind: theorem
title: "Bounded inverse theorem"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-open-mapping-theorem, thm-bounded-linear-operator-equivalences]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources: {references: [{title: "Buhler--Salamon, Functional Analysis, Theorem 2.12", url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"}]}
---
## Statement
Assume DC. A bounded bijective linear map $T:X\to Y$ between Banach spaces has a bounded linear inverse $T^{-1}:Y\to X$.
## Facts & Assumptions
**Given:** DC and a bounded bijective linear $T:X\to Y$ between Banach spaces.
## Proof
**Proof technique:** direct.

1.1 By [[thm-open-mapping-theorem]], $T$ maps the open unit ball onto a neighbourhood of $0$; hence $B_Y(0,c)\subseteq T(B_X(0,1))$ for some $c>0$. [given]

2.1 If $y\ne0$, the point $cy/(2\|y\|)$ lies in $B_Y(0,c)$, so its unique preimage has norm $<1$. Scaling gives $\|T^{-1}y\|<2c^{-1}\|y\|$; this also holds at $0$. [step 1.1, algebra]

3.1 Thus $T^{-1}$ is bounded, and it is linear because $T$ is a linear bijection. [step 2.1] ∎
