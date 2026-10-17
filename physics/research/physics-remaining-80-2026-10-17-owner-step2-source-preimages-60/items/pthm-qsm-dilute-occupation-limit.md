---
id: pthm-qsm-dilute-occupation-limit
kind: physics-theorem
title: "Controlled dilute Bose/Fermi occupation limit"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - post-qsm-models-statistics-and-preparation
  - lem-qsm-models-diagonal-occupation-trace
dependency_roles:
  post-qsm-models-statistics-and-preparation: physical-assumption
  lem-qsm-models-diagonal-occupation-trace: mathematical-premise
physical_scope: "Conditional mode-by-mode approximation for a trace-class ideal Bose or Fermi grand state with dimensionless fugacities 0<q_j≤r<1 and summable squared fugacities. The occupation and log-partition errors are bounded explicitly. This is a controlled dilute or low-fugacity limit, not a high-temperature criterion, universality statement, interacting-gas result, or empirical observation."
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Statistical Physics, §§3.5.1–3.5.2, Bose and Fermi occupation factors"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
    - title: "Mehran Kardar, MIT OpenCourseWare 8.333, Lecture 23, quantum ideal gases"
      url: "https://live.ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/97bfdfb93240e2f48984629ad0c037de_MIT8_333F13_Lec23.pdf"
---

## Statement

Assume the preparation postulate [[post-qsm-models-statistics-and-preparation]] and the diagonal grand-trace hypotheses of [[lem-qsm-models-diagonal-occupation-trace]]. Let the mode set be finite or countable, with $0<q_j\le r<1$ and $\sum_jq_j^2<\infty$. Write $\bar n_j^B=q_j/(1-q_j)$ and $\bar n_j^F=q_j/(1+q_j)$. Then
$$|\bar n_j^B-q_j|\le\frac{q_j^2}{1-r},\qquad |\bar n_j^F-q_j|\le q_j^2,$$
and the total occupation approximation error is bounded by the corresponding summable right-hand sides. The grand log partition factors obey
$$0\le -\log(1-q_j)-q_j\le\frac{q_j^2}{2(1-r)},\qquad 0\le q_j-\log(1+q_j)\le\frac{q_j^2}{2}.$$
Thus the classical Maxwell–Boltzmann first-order terms have a controlled aggregate error under the stated squared-summability hypothesis.

## Facts & Assumptions

**Given:** Adopted preparation and trace-normalized diagonal occupation law; dimensionless $q_j\in(0,r]$.

[A1] [[post-qsm-models-statistics-and-preparation]]: the species sector and normalized grand preparation are adopted assumptions, not mathematical consequences.

[F1] [[lem-qsm-models-diagonal-occupation-trace]], Statement: under its stated summability conditions, bosonic and fermionic marginals have means $q/(1-q)$ and $q/(1+q)$, and $\log\Xi$ is the sum of $-\log(1-q)$ or $\log(1+q)$.

## Proof



1.1 For bosons, direct subtraction gives $\bar n^B-q=q^2/(1-q)$; because $q\le r$, this is nonnegative and at most $q^2/(1-r)$. For fermions, $q-\bar n^F=q^2/(1+q)$, which lies between zero and $q^2$. [given, F1, algebra]

1.2 The identity $-\log(1-q)-q=\int_0^q x/(1-x)\,dx$ follows by integrating the derivative of $-\log(1-x)-x$ from zero. Since $1/(1-x)\le1/(1-r)$ on $[0,q]$, the integral is between zero and $q^2/[2(1-r)]$. Also $q-\log(1+q)=\int_0^q x/(1+x)\,dx$, whose integrand lies between zero and $x$, giving the Fermi bound $q^2/2$. [given, algebra]

2.1 Summing the nonnegative mode errors over any finite subset preserves these bounds. Taking the increasing limit over finite subsets gives the same inequalities for the total error because $\sum_jq_j^2<\infty$. [step 1.1, A1, algebra]

3.1 By [F1], the log partition function is the sum of the corresponding mode log factors. Sum the nonnegative factor remainders from step 1.2 over finite subsets and pass to the countable limit; squared summability makes each aggregate error finite and proves the claimed controlled first-order approximation. [step 1.2, F1, algebra] ∎
