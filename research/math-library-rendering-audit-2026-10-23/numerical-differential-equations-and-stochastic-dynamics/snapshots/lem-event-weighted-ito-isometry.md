---
id: lem-event-weighted-ito-isometry
kind: lemma
title: "Event-weighted Ito isometry after a conditioning time"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-continuous-brownian-ito-process
  - def-continuous-time-filtration-and-all-pairs-martingale
  - def-elementary-predictable-brownian-integrand
  - def-ito-integral-of-an-elementary-predictable-process
  - def-ito-integral-for-square-integrable-predictable-processes
  - thm-ito-isometry-and-linearity-in-predictable-l2
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Sections 3.2.2-3.2.3"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
    - title: "Kloeden and Platen, Numerical Solution of Stochastic Differential Equations, Sections 4.5 and 10.6, printed pp. 127-140 and 356-365"
      url: "https://stevencjxie8.com/files/refs/ref7.pdf"
---

## Statement

Assume AC and the Brownian filtration conventions in [[def-continuous-brownian-ito-process]]. Let $t\ge0$, $h>0$, let $A\in\mathcal F_t$, and let $H$ be a real predictable process with finite energy on $[t,t+h]$ and $H_s=0$ for $s\notin(t,t+h]$. For any coordinate $W^j$ of the driving finite-dimensional Brownian motion,
$$\mathbb E\!\left[\mathbf1_A\left|\int_t^{t+h}H_s\,dW_s^j\right|^2\right]=\mathbb E\!\left[\mathbf1_A\int_t^{t+h}|H_s|^2\,ds\right].$$

## Facts & Assumptions

**Given:** AC, the Brownian filtered probability space, deterministic $t,h$, $A\in\mathcal F_t$, and the predictable square-integrable integrand $H$ supported on $(t,t+h]$.

[F1] [[def-continuous-brownian-ito-process]]: each Brownian coordinate has increments independent of the current filtration, and finite-energy Ito integrals are defined on predictable integrands.

[F2] [[def-elementary-predictable-brownian-integrand]]: an elementary predictable integrand is constant on finitely many intervals $(s_k,s_{k+1}]$ with bounded coefficient measurable at $s_k$.

[F3] [[def-ito-integral-of-an-elementary-predictable-process]]: on a common partition the elementary integral is the finite sum of coefficient times Brownian increment, and it is linear in the integrand.

[F4] [[def-ito-integral-for-square-integrable-predictable-processes]]: a finite-energy predictable integrand is approximated in $L^2(ds\,dP)$ by elementary predictable integrands, and its Ito integral is their $L^2(P)$ limit.

[F5] [[thm-ito-isometry-and-linearity-in-predictable-l2]]: for every finite-energy predictable integrand $G$, $\mathbb E|\int G\,dW^j|^2=\mathbb E\int |G|^2ds$, and the extension is linear in $L^2$.

[F6] [[def-continuous-time-filtration-and-all-pairs-martingale]]: a continuous-time filtration satisfies $\mathcal F_s\subseteq\mathcal F_r$ whenever $0\le s\le r$.

[A1] [[def-axiom-of-choice]]: AC is part of the Brownian and Ito-integral interfaces [F1], [F4], and [F5].

## Proof

**Given:** The assumptions above.

1.1 Choose elementary predictable $H^n\to H$ in $L^2(ds\,dP)$ using [F4], and replace each $H^n$ by $\widetilde H^n=\mathbf1_{(t,t+h]}H^n$. Refining its finite partition at $t$ and $t+h$ makes $\widetilde H^n$ elementary; because $H$ vanishes off this interval, $\widetilde H^n\to H$ in $L^2(ds\,dP)$. [F2, F4, given]

2.1 Refine the partition of $\widetilde H^n$ so that every nonzero cell $(s_k,s_{k+1}]$ has $s_k\ge t$. Its coefficient $\xi_k$ is $\mathcal F_{s_k}$-measurable, and [F6] with $A\in\mathcal F_t$ makes $\mathbf1_A\xi_k$ also $\mathcal F_{s_k}$-measurable. Thus $\mathbf1_A\widetilde H^n$ is elementary predictable for the Brownian coordinate in [F1], and the finite-sum definition [F3] gives $\int\mathbf1_A\widetilde H^n dW^j=\mathbf1_A\int\widetilde H^n dW^j$. Applying [F5] to $\mathbf1_A\widetilde H^n$ yields $$\mathbb E\!\left[\mathbf1_A\left|\int\widetilde H^n dW^j\right|^2\right]=\mathbb E\!\left[\mathbf1_A\int|\widetilde H^n|^2ds\right].$$ [F1, F2, F3, F5, F6, step 1.1]

3.1 Multiplication by $\mathbf1_A$ is a contraction in both $L^2(P)$ and $L^2(ds\,dP)$. Hence [F4] and [F5] give $\int\widetilde H^n dW^j\to\int H dW^j$ and $\int\mathbf1_A\widetilde H^n dW^j\to\int\mathbf1_AH dW^j$ in $L^2(P)$, while $\mathbf1_A\widetilde H^n\to\mathbf1_AH$ in $L^2(ds\,dP)$. Passing the finite-sum identity of step 2.1 to these limits gives $\int\mathbf1_AH dW^j=\mathbf1_A\int H dW^j$ in $L^2(P)$. [F4, F5, step 2.1]

4.1 By [F5] and step 3.1, $$\mathbb E\!\left[\mathbf1_A\left|\int H dW^j\right|^2\right]=\mathbb E\left|\int\mathbf1_AH dW^j\right|^2=\mathbb E\int|\mathbf1_AH|^2ds=\mathbb E\!\left[\mathbf1_A\int|H|^2ds\right].$$ All terms are finite because $H$ has finite energy, so the asserted identity follows. [F5, step 3.1, algebra]

5.1 The argument applies to each coordinate separately and uses only finite partitions, $L^2$ limits, and the supplied Ito isometry. Its only inherited choice assumption is [A1]. [A1, step 4.1] ∎

