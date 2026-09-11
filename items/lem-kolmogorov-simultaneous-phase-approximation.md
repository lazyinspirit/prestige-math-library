---
id: "lem-kolmogorov-simultaneous-phase-approximation"
kind: "lemma"
title: "Kolmogorov simultaneous phase approximation"
deps: ["def-period-one-fourier-coefficients-partial-sums-and-convolution", "thm-fejer-uniform-convergence-for-continuous-periodic-functions"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Grafakos, Classical Fourier Analysis, third edition
      url: https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf
      locator: Lemma 4.2.2, printed pp.255–256
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Let $r\ge0$ be an integer such that $1,x_1,\ldots,x_r$ are linearly independent over $\mathbb Q$. For every $\varepsilon>0$ and $z_1,\ldots,z_r\in\mathbb C$ of modulus one, there is a positive integer $L$ such that $|e^{2\pi iLx_j}-z_j|<\varepsilon$ for all $1\le j\le r$.

## Facts & Assumptions

[F1] Period-one characters and their Fourier coefficient normalization are fixed [[def-period-one-fourier-coefficients-partial-sums-and-convolution]].

[F2] Every continuous one-periodic function is uniformly approximated by its finite Fejer polynomials [[thm-fejer-uniform-convergence-for-continuous-periodic-functions]].

## Proof

**Given:** The rational independence, unimodular targets and positive epsilon.

1.1 For $r=0$, take $L=1$. Otherwise put $b_j(t)=\max(0,1-2|e^{2\pi it}-z_j|/\varepsilon)$. This continuous periodic function lies between zero and one and is positive only when $|e^{2\pi it}-z_j|<\varepsilon/2$. It equals one at an argument of $z_j$, and continuity makes its integral $\beta_j$ strictly positive. Set $b(t_1,\ldots,t_r)=\prod_jb_j(t_j)$ and $\beta=\prod_j\beta_j>0$. [F1, given]

2.1 By F2, approximate each $b_j$ uniformly within $\rho\le1$ by a trigonometric polynomial $p_j$. Then $|p_j|\le2$, and telescoping products yields $\sup|\prod_jp_j-\prod_jb_j|\le r2^{r-1}\rho$. The constant coefficient of $p=\prod_jp_j$ as a polynomial in $r$ coordinates is the product of the individual constant coefficients. Each differs from $\beta_j$ by at most $\rho$, by the integral definition in F1. Thus that coefficient differs from $\beta$ by at most $r2^{r-1}\rho$ as well. This argument needs no multivariable approximation theorem or interchange of infinite series. [F1, F2, step 1.1]

3.1 For each nonzero integer vector $k\in\mathbb Z^r$, independence gives $k\cdot x\notin\mathbb Z$. Put $u=e^{2\pi i k\cdot x}\ne1$. Then $M^{-1}\sum_{L=1}^M u^L=u(1-u^M)/(M(1-u))\to0$. The zero vector gives average one. Applying these identities to the finitely many terms of $p$ proves that $M^{-1}\sum_{L=1}^M p(Lx_1,\ldots,Lx_r)$ tends to its constant coefficient. Step 2.1 bounds the limsup of the absolute difference between the corresponding average of $b$ and $\beta$ by $2r2^{r-1}\rho$. Since every positive $\rho\le1$ is allowed, the average of $b$ tends to $\beta>0$. [F1, step 2.1]

4.1 Some positive integer $L$ therefore has $b(Lx_1,\ldots,Lx_r)>0$. Every factor is positive, so step 1.1 gives all the required strict phase inequalities (indeed with epsilon/2). Positivity of $L$ follows from using averages indexed from one, not from a symmetry argument about negative times. Only finitely many approximants are selected for each fixed rho; the proof uses no axiom of choice. [step 1.1, step 3.1] ∎
