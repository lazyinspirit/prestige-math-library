---
id: lem-local-sgd-weighted-recursion
kind: lemma
title: Quadratic-weighted telescope for a strongly convex recursion
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: []
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Sebastian U. Stich, Local SGD Converges Fast and Communicates Little, Lemma 3.4 and Appendix A"
      url: https://arxiv.org/pdf/1805.09767v3
proof_strategy: direct
---

## Statement

Let $\mu>0$, $a\ge4$, $T\ge1$, and
$$ \eta_t=\frac{4}{\mu(a+t)},\qquad w_t=(a+t)^2,\qquad S_T=\sum_{t=0}^{T-1}w_t. $$
Suppose nonnegative sequences $u_t,e_t$ satisfy, for $0\le t<T$,
$$ u_{t+1}\le(1-\mu\eta_t)u_t-A\eta_te_t+B\eta_t^2+C\eta_t^3 $$
with $A>0$ and $B,C\ge0$. Then
$$ \frac{A}{S_T}\sum_{t=0}^{T-1}w_te_t \le \frac{\mu a^3}{4S_T}u_0+ \frac{2T(T+2a)}{\mu S_T}B+ \frac{16T}{\mu^2S_T}C. $$
Also $S_T\ge T^3/3$.

## Facts & Assumptions

**Given:** The scalar recurrence and parameters in the Statement.

[A1] $u_t,e_t$ are nonnegative; $A>0$, $B,C\ge0$, $\mu>0$, $a\ge4$.

## Proof

1.1 Since $w_t/\eta_t=\mu(a+t)^3/4$, for $1\le t<T$, [given]
$$ (1-\mu\eta_t)\frac{w_t}{\eta_t} =\frac{\mu}{4}(a+t-4)(a+t)^2 \le\frac{\mu}{4}(a+t-1)^3 =\frac{w_{t-1}}{\eta_{t-1}}. $$
The inequality follows by expanding the difference:
$(a+t-1)^3-(a+t-4)(a+t)^2=a^2+2at+t^2+3a+3t-1\ge0$ for $a\ge4$.
At $t=0$, $(1-\mu\eta_0)w_0/\eta_0=\mu a^2(a-4)/4\le\mu a^3/4$.
[A1, algebra]

1.2 Multiply each recurrence by the positive number $w_t/\eta_t$ and use [given]
step 1.1 to telescope the $u_t$ terms. Dropping the nonnegative terminal
term yields
$$ A\sum_{t=0}^{T-1}w_te_t \le\frac{\mu a^3}{4}u_0+ B\sum_{t=0}^{T-1}w_t\eta_t+ C\sum_{t=0}^{T-1}w_t\eta_t^2. $$
Direct summation gives
$\sum w_t\eta_t=2T(T+2a-1)/\mu\le2T(T+2a)/\mu$ and
$\sum w_t\eta_t^2=16T/\mu^2$. [step 1.1, A1, algebra]

2.1 Divide step 1.2 by $AS_T$ to obtain the stated bound. Since $a\ge4$, $S_T\ge\sum_{t=0}^{T-1}(t+1)^2 =T(T+1)(2T+1)/6\ge T^3/3$. [step 1.2, A1, algebra] ∎
