---
id: lem-finite-support-risk-set-proportion-limits
kind: lemma
title: Finite-support risk-set proportion limits
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-nelson-aalen-kaplan-meier-greenwood-estimators
  - def-event-time-observation-schemes
  - def-identically-distributed-and-iid-random-variables
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Qiqing Yu, Survival Analysis (Lecture Notes), §4.2.2, PDF pp. 35–36"
      url: "https://people.math.binghamton.edu/qyu/ftp/surv5.pdf"

---

## Statement

For every positive integer sample size $n$, let $(T_i,C_i)$ be IID subject pairs with $T_i$ independent of $C_i$, and let the event-time support be $0<a_1<\cdots<a_m$. Fix $j$ and suppose $P(T\ge a_j)>0$ and $P(C\ge a_j)>0$. Put $q_j=P(T=a_j\mid T\ge a_j)$, $r_j=P(U\ge a_j)$, $Y_n(a_j)=\sum_{i=1}^n\mathbf 1\{U_i\ge a_j\}$, and $dN_n(a_j)=\sum_{i=1}^n\mathbf 1\{U_i=a_j,\delta_i=1\}$.
Then $Y_n(a_j)/n\to_P r_j=P(T\ge a_j)P(C\ge a_j)>0$, $dN_n(a_j)/n\to_P P(T=a_j)P(C\ge a_j)$, and the ratio $dN_n(a_j)/Y_n(a_j)$, set to zero when its denominator is zero, converges in probability to $q_j$.

## Facts & Assumptions

**Given:** The right-censoring convention, IID subject pairs, within-subject independence of $T$ and $C$, and positive risk probability at $a_j$.

[F1] Under right censoring, $U_i=\min(T_i,C_i)$ and $\delta_i=\mathbf 1\{T_i\le C_i\}$ ([[def-event-time-observation-schemes]]); the at-risk process is $Y_i(u)=\mathbf 1\{U_i\ge u\}$ ([[def-nelson-aalen-kaplan-meier-greenwood-estimators]]).

[F2] IID means a common law and mutual independence across the entire subject family. ([[def-identically-distributed-and-iid-random-variables]])

[A1] Within each subject, $T_i$ and $C_i$ are independent, and $P(T\ge a_j)P(C\ge a_j)>0$.

## Proof

1.1 Let $D_{ij}=\mathbf 1\{U_i=a_j,\delta_i=1\}$. By [F1], $Y_i(a_j)=\mathbf 1\{T_i\ge a_j,C_i\ge a_j\}$ and $D_{ij}=\mathbf 1\{T_i=a_j,C_i\ge a_j\}$. Independence in [A1] therefore gives $E[Y_i(a_j)]=r_j=P(T\ge a_j)P(C\ge a_j)$ and $E[D_{ij}]=P(T=a_j)P(C\ge a_j)$. [A1, F1, given]

2.1 The two indicators are bounded IID sequences by [F2]. For either sequence, the variance of its sample mean is at most $1/(4n)$, so Chebyshev's inequality gives convergence in probability to its expectation. Since there are finitely many support points, these convergences hold jointly over $j=1,\ldots,m$. [F2, step 1.1, algebra]

3.1 Since $r_j>0$, with probability tending to one $Y_n(a_j)/n>r_j/2$. On that event the ratio is the quotient of the two convergent proportions from step 2.1, and its limit is $\frac{P(T=a_j)P(C\ge a_j)}{P(T\ge a_j)P(C\ge a_j)}=P(T=a_j\mid T\ge a_j)=q_j$. The zero-denominator event has probability tending to zero by the same risk-proportion convergence, so the stated zero convention does not change the limit. [A1, step 2.1, algebra] ∎
