---
id: lem-conditional-intensity-interevent-survival-and-density
kind: lemma
title: "Inter-event survival and density from a conditional intensity"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-temporal-point-process-and-conditional-intensity
  - def-absolutely-continuous-function
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous
  - thm-first-fundamental-theorem-of-calculus-for-l-one
  - thm-chain-rule
  - thm-algebra-of-derivatives
  - thm-derivative-of-exponential
  - thm-an-absolutely-continuous-function-with-zero-derivative-almost-everywhere-is-constant
  - lem-the-product-of-two-absolutely-continuous-functions-is-absolutely-continuous
  - cor-mean-value-theorem
  - thm-continuity-from-above-for-measures
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Joseph G. Rasmussen, Lecture Notes: Temporal Point Processes and the Conditional Intensity Function"
      url: "https://arxiv.org/pdf/1806.00221"
    - title: "Robert E. Kass, Uri T. Eden, and Emery N. Brown, Analysis of Neural Data, Chapter 19: Point Processes"
      url: "https://web.math.ku.dk/~susanne/BSc/Kass2014_Chapter_PointProcesses.pdf"
---

## Statement

Fix a supplied event history $h$ at time $t$ in the model of
[[def-temporal-point-process-and-conditional-intensity]]. Let
$\lambda_h^*(u)$ be its nonnegative no-event conditional hazard, supplied as
a locally integrable version on every finite interval, and put
$$\Lambda_h(u):=\int_t^u\lambda_h^*(s)\,ds.$$
For each finite $U>t$, on $t\le u\le U$ the conditional survivor and finite-
time density of the next event are
$$S_h(u)=\exp(-\Lambda_h(u)),\qquad f_h(u)=\lambda_h^*(u)\exp(-\Lambda_h(u))\quad\text{for almost every }u.$$
If $\Lambda_h(u)\to\Lambda_h(\infty)<\infty$ as $u\to\infty$, then
$K_h(\{\infty\})=\exp(-\Lambda_h(\infty))$. If
$\Lambda_h(u)\to\infty$, this terminal mass is zero. These conclusions
concern one next-event law and do not prove non-explosion of an entire
process.

## Facts & Assumptions

**Given:** A history $h$ at time $t$, a supplied probability kernel for the next waiting time on $(t,\infty]$, its finite-time density $f_h$, survivor $S_h$, and a nonnegative locally integrable hazard $\lambda_h^*$.

[F1] The conditional law is a probability kernel on $(t,\infty]$ with finite-time density $f_h$ relative to Lebesgue measure, survivor $S_h(u)=K_h((u,\infty])$, and hazard $\lambda_h^*(u)=f_h(u)/S_h(u)$ wherever $S_h(u)>0$. ([[def-temporal-point-process-and-conditional-intensity]], [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]])

[F2] The indefinite integral of an $L^1$ function is absolutely continuous and has derivative equal to its integrand almost everywhere; the $L^1$ fundamental theorem uses Countable Choice. ([[cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous]], [[thm-first-fundamental-theorem-of-calculus-for-l-one]])

[F3] Absolutely continuous functions obey the product and chain rules where the derivatives exist, $(\exp)'=\exp$, and products of absolutely continuous functions are absolutely continuous. ([[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[thm-derivative-of-exponential]], [[lem-the-product-of-two-absolutely-continuous-functions-is-absolutely-continuous]])

[F4] An absolutely continuous function with derivative zero almost everywhere is constant; this result uses Dependent Choice. ([[thm-an-absolutely-continuous-function-with-zero-derivative-almost-everywhere-is-constant]])

[F5] The mean value theorem applies to the exponential on compact intervals, so it is Lipschitz on every bounded interval. ([[cor-mean-value-theorem]], [[thm-derivative-of-exponential]])

[F6] A finite measure is continuous from above on a decreasing sequence of measurable sets. ([[thm-continuity-from-above-for-measures]])

[A1] Full AC is inherited from the temporal model. Countable Choice and Dependent Choice are declared for [F2] and [F4]. ([[def-axiom-of-choice]], [[def-countable-choice]], [[def-dependent-choice]])

## Proof

1.1 Since $K_h((t,\infty])=1$, [F1] gives $S_h(u)=1-\int_t^u f_h(s)\,ds$. By [F2], $S_h$ and $\Lambda_h$ are absolutely continuous and $S_h'=-f_h=-\lambda_h^*S_h$ almost everywhere where $S_h>0$, while $\Lambda_h'=\lambda_h^*$ almost everywhere. [A1, F1, F2, given]

2.1 Fix a compact interval on which $S_h>0$. The cumulative hazard is bounded there, say $0\le\Lambda_h\le M$. By [F5], there is $L>0$ such that $|\exp(x)-\exp(y)|\le L|x-y|$ for $x,y\in[0,M]$. Since $\Lambda_h$ is absolutely continuous by step 1.1, for every $\varepsilon>0$ its absolute-continuity condition supplies $\delta>0$ such that every permitted finite family of subintervals with total length below $\delta$ satisfies $\sum_j|\Lambda_h(v_j)-\Lambda_h(u_j)|<\varepsilon/L$. Therefore $$\sum_j|\exp(\Lambda_h(v_j))-\exp(\Lambda_h(u_j))|\le L\sum_j|\Lambda_h(v_j)-\Lambda_h(u_j)|<\varepsilon,$$ so $G_h:=\exp(\Lambda_h)$ is absolutely continuous. By [F3], $G_hS_h$ is absolutely continuous and $(G_hS_h)'=G_h(\lambda_h^*S_h+S_h')=0$ almost everywhere. By [F4], $G_hS_h$ is constant. Its value at $t$ is $1$, so $S_h(u)=\exp(-\Lambda_h(u))$ wherever $S_h$ is positive. [A1, F3, F4, F5, step 1.1]

3.1 Fix finite $U>t$ and suppose $S_h$ first reaches zero at some $\tau\le U$. On $[t,\tau)$, step 2.1 gives $S_h(u)=e^{-\Lambda_h(u)}\ge e^{-\Lambda_h(U)}>0$. Continuity of $S_h$ then gives $S_h(\tau)>0$, a contradiction. Thus the formula holds on all of $[t,U]$; substituting it into [F1] gives the density formula almost everywhere. Also $S_h(u)=K_h((u,\infty])$ decreases to $K_h(\{\infty\})$ along integer $u\to\infty$ by [F6]. Taking the limit in the survivor formula gives the two stated terminal-mass cases. [F1, F6, step 2.1, algebra] ∎

## Source notes

Rasmussen proves the hazard-to-survival relation by integrating the logarithmic derivative of the survivor, then differentiates to obtain the density. Kass, Eden, and Brown give the same conditional hazard identity and derive the waiting-time density in their full Section 19.4. The proof above keeps the finite-cumulative-hazard case, including its possible mass at $+\infty$, separate from process existence and non-explosion.
