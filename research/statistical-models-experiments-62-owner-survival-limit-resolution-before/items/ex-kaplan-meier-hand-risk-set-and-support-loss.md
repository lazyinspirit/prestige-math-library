---
id: ex-kaplan-meier-hand-risk-set-and-support-loss
kind: example
title: A hand Kaplan–Meier calculation and loss of tail support
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-event-time-observation-schemes
  - def-nelson-aalen-kaplan-meier-greenwood-estimators
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Qiqing Yu, Survival Analysis (Lecture Notes), §4.2.1, PDF pp. 30–32"
      url: "https://people.math.binghamton.edu/qyu/ftp/surv5.pdf"
    - title: "NIST/SEMATECH Engineering Statistics Handbook, Chapter 8, §8.2.1.5, PDF pp. 103–104"
      url: "https://www.itl.nist.gov/div898/handbook/toolaids/pff/apr.pdf"

---

## Example

The observed right-censored sample has failures at times $1$ and $2$, followed by two censorings at time $3$: $(U_i,\delta_i)=(1,1),(2,1),(3,0),(3,0)$. Consider also two possible IID event-time laws with deterministic censoring at $C_i=3$: under law $P_A$, $P(T_i=1)=1/4$, $P(T_i=2)=1/4$, and $P(T_i=4)=1/2$; under law $P_B$, the first two probabilities are the same and $P(T_i=5)=1/2$.

## Facts & Assumptions

**Given:** The four observed records above and the two candidate event-time/censoring laws.

[F1] Right censoring records $U_i=\min(T_i,C_i)$ and $\delta_i=\mathbf 1\{T_i\le C_i\}$, so a tie at the censoring time is recorded as an event. ([[def-event-time-observation-schemes]])

[F2] Nelson–Aalen uses each event count divided by its risk-set size, Kaplan–Meier multiplies the factors $1-d_j/Y_j$, and Greenwood uses $\widehat S^2\sum_j d_j/[Y_j(Y_j-d_j)]$ only when the event denominators are positive. ([[def-nelson-aalen-kaplan-meier-greenwood-estimators]])

[A1] Censoring is deterministic at time $3$ under both candidate laws, so $T_i$ and $C_i$ are independent.

## Verification

1.1 At time $1$, all four subjects are at risk and one fails, so $Y_1=4,d_1=1$. At time $2$, three remain at risk and one fails, so $Y_2=3,d_2=1$. By [F2], $\widehat\Lambda_n(3)=1/4+1/3=7/12$ and $\widehat S_n(3)=(1-1/4)(1-1/3)=1/2$. [F2, given, algebra]

2.1 Both Greenwood denominators are positive, and [F2] gives $\widehat V_G(3)=\frac14\left(\frac1{4\cdot3}+\frac1{3\cdot2}\right)=1/16$. The two censorings at time $3$ add no event increment, so all three estimates remain at these values after time $3$ if the product and sum are carried forward. [F2, step 1.1, algebra]

3.1 Under either law in [A1], an event time above $3$ produces the same observed record $(U,\delta)=(3,0)$; event times $1$ and $2$ produce $(1,1)$ and $(2,1)$. Thus the entire observed-data law is identical under $P_A$ and $P_B$, while $P_A(T>4.5)=0$ and $P_B(T>4.5)=1/2$. Survival beyond the censoring horizon is therefore not identified by these observations. [A1, F1, algebra] ∎
