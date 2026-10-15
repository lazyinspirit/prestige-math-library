---
id: thm-finite-support-nelson-aalen-kaplan-meier-consistency
kind: theorem
title: Finite-support consistency of Nelson–Aalen and Kaplan–Meier
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-nelson-aalen-kaplan-meier-greenwood-estimators
  - def-event-time-observation-schemes
  - lem-finite-support-risk-set-proportion-limits
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Qiqing Yu, Survival Analysis (Lecture Notes), §4.2.2, finite-support consistency proof, PDF pp. 35–36"
      url: "https://people.math.binghamton.edu/qyu/ftp/surv5.pdf"

---

## Statement

Let $(T_i,C_i)$ be IID subject pairs with $T_i$ independent of $C_i$, and suppose the event-time support is $0\le a_1<\cdots<a_m$. For any fixed $t\ge0$ with $S(t)=P(T>t)>0$ and $P(C\ge t)>0$, the Kaplan–Meier estimator satisfies $\widehat S_n(t)\to_P S(t)$. The Nelson–Aalen estimator satisfies
$$\widehat\Lambda_n(t)\to_P\Lambda_d(t):=\sum_{a_j\le t}q_j,\qquad q_j=P(T=a_j\mid T\ge a_j).$$
Only event times at or before $t$ enter the products and sums. In a discrete event-time model, $\Lambda_d(t)$ is the sum of discrete hazards and is generally not $-\log S(t)$.

## Facts & Assumptions

**Given:** IID subjects with right-censored observations $U_i=\min(T_i,C_i)$, $\delta_i=\mathbf 1\{T_i\le C_i\}$; independent $T_i,C_i$; finite nonnegative event-time support; and positive event and censoring survival through $t$. Prove the two stated limits.

[F1] Right-censored observations are $U_i=\min(T_i,C_i)$ and $\delta_i=\mathbf 1\{T_i\le C_i\}$. ([[def-event-time-observation-schemes]])

[F2] For pooled risk and failure counts, $\widehat\Lambda_n(t)=\int_{[0,t]}\frac{\mathbf 1\{Y_n(u)>0\}}{Y_n(u)}\,dN_n(u)$, with the integrand set to zero when $Y_n(u)=0$, and $\widehat S_n(t)=\prod_{0\le u\le t:\Delta N_n(u)>0}(1-\Delta N_n(u)/Y_n(u))$. A baseline event at $a_1=0$ is included; if $a_1>0$, there is no time-zero event contribution. ([[def-nelson-aalen-kaplan-meier-greenwood-estimators]])

[F3] At each support point $a_j$ through $t$, the empirical event-to-risk ratio $dN_n(a_j)/Y_n(a_j)$ converges in probability to $q_j$. ([[lem-finite-support-risk-set-proportion-limits]])

[A1] $T$ and $C$ are independent, event support is finite, and $S(t)>0$, $P(C\ge t)>0$.

## Proof

1.1 Let $k$ be the number of event support points not exceeding $t$. If $k=0$, then $a_1>t\ge0$, so $a_1>0$ and $T>t$ almost surely; the empty product and sum give the claimed limits. If $k\ge1$, positivity of $S(t)$ and $P(C\ge t)$ implies $P(T\ge a_j)P(C\ge a_j)>0$ for every $j\le k$, so [F3] applies at each of these finitely many points. [A1, F1, F2, F3, given]

1.2 Before the first support point, the product is $1=P(T\ge a_1)$. After the product limit through $a_{j-1}$ converges to $P(T>a_{j-1})$, this equals $P(T\ge a_j)$ because there is no support in $(a_{j-1},a_j)$. By [F1]–[F2], at $a_j$ the product is multiplied by $1-dN_n(a_j)/Y_n(a_j)$ and the sum is incremented by $dN_n(a_j)/Y_n(a_j)$. [F3] and continuity of finite products and sums give limits $P(T\ge a_j)(1-q_j)=P(T>a_j)=S(a_j)$ and $\sum_{\ell\le j}q_\ell$. This also handles $a_1=0$, since $P(T\ge0)=1$ and the baseline failure increment is included. [A1, F1, F2, F3, algebra]

2.1 Finite induction over $j=1,\ldots,k$ proves both limits at every support point through $t$. On each interval between successive support points, the estimators and their targets are constant, so the same limits hold at the given $t$. The Nelson–Aalen limit is the discrete hazard sum displayed in the statement; the proof does not replace it by a continuous cumulative hazard. [step 1.1, step 1.2, algebra] ∎
