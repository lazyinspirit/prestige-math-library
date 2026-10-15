---
id: def-nelson-aalen-kaplan-meier-greenwood-estimators
kind: definition
title: Nelson–Aalen, Kaplan–Meier, and Greenwood estimators
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-event-time-observation-schemes
  - def-statistic-and-estimator
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Lu Tian, STAT331 Unit 3: Kaplan-Meier (KM) Estimator, PDF pp. 1–12"
      url: "https://web.stanford.edu/~lutian/coursepdf/unit5.pdf"
    - title: "Lu Tian, STAT331 Unit 12: 1-Sample Problem: General Asymptotic Results, PDF pp. 5–14"
      url: "https://web.stanford.edu/~lutian/coursepdf/stat331-onesample.pdf"
    - title: "Qiqing Yu, Survival Analysis (Lecture Notes), §§4.2.1–4.2.2, PDF pp. 30–38"
      url: "https://people.math.binghamton.edu/qyu/ftp/surv5.pdf"
    - title: "NIST/SEMATECH Engineering Statistics Handbook, Chapter 8, §8.2.1.5, PDF pp. 103–104"
      url: "https://www.itl.nist.gov/div898/handbook/toolaids/pff/apr.pdf"

---

## Definition

For a positive integer sample size $n$, let $(T_i,C_i)$, $1\le i\le n$, be event and censoring times with right-censored observations $(U_i,\delta_i)$ as in [[def-event-time-observation-schemes]], so $U_i=\min(T_i,C_i)$ and $\delta_i=\mathbf 1\{T_i\le C_i\}$. The subject counting process and at-risk process are $N_i(t)=\mathbf 1\{U_i\le t,\ \delta_i=1\}$ and $Y_i(t)=\mathbf 1\{U_i\ge t\}$.
The endpoint convention makes $Y_i$ left-continuous at $U_i$: a subject is still at risk at the observed time, including a tied event and censoring time. Set $N_n=\sum_{i=1}^nN_i$, $Y_n=\sum_{i=1}^nY_i$, and $dN_n(u)=\Delta N_n(u)$; thus tied failures at $u$ contribute their full count and censorings at $u$ do not contribute to $dN_n(u)$.

For $t\ge0$, the **Nelson–Aalen estimator** is $\widehat\Lambda_n(t)=\int_{(0,t]}\frac{\mathbf 1\{Y_n(u)>0\}}{Y_n(u)}\,dN_n(u)$, where the integrand is defined to be zero when $Y_n(u)=0$. The **Kaplan–Meier estimator** is $\widehat S_n(t)=\prod_{\substack{0<u\le t:\,\Delta N_n(u)>0}}\left(1-\frac{\Delta N_n(u)}{Y_n(u)}\right)$.
Each product is finite and a factor is zero if every subject at risk fails at that time. The target survival function is $S(t)=P(T>t)$. If $T$ has density $f$, $S$ is positive on the horizon, and $\lambda=f/S$, the continuous cumulative hazard is $\Lambda(t)=\int_0^t\lambda(u)\,du=-\log S(t)$. For finite event support $a_1<\cdots<a_m$, write $q_j=P(T=a_j\mid T\ge a_j)$; the corresponding discrete cumulative hazard is $\Lambda_d(t)=\sum_{a_j\le t}q_j$. The Nelson–Aalen formula estimates this sum in the finite-support model; in general it is not $-\log S(t)$ for a discrete law.

An empty event product is $1$, and an empty Greenwood event sum is $0$.

On a horizon where every event contribution has $Y_n(u)-\Delta N_n(u)>0$, the **Greenwood variance estimate** is $\widehat V_G(t)=\widehat S_n(t)^2\sum_{0<u\le t:\,\Delta N_n(u)>0}\frac{\Delta N_n(u)}{Y_n(u)\{Y_n(u)-\Delta N_n(u)\}}$.
It is a first-order asymptotic variance estimate for $\widehat S_n(t)$ under the stated sampling and censoring model, not an exact finite-sample variance identity. It is undefined when a contributing denominator is zero.

For each fixed $t$, these are statistics of the observed sample in the sense of [[def-statistic-and-estimator]]. To express event-time sums and products as fixed finite operations, scan indices $i=1,\ldots,n$ and include only the first event observation at each distinct time; each inclusion condition uses finitely many Borel equalities and inequalities among the observed $U_i$ and $\delta_i$. Risk and event counts are finite Borel sums, and every division uses the stated positive-count branch. Greenwood is defined only on its positive-denominator domain.
