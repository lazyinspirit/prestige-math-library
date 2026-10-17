---
id: cor-uniformized-generator-stationary-residual-certificate
kind: corollary
title: "Uniformized finite-generator stationary residual certificate"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-corrected-stationary-residual-certificate
  - thm-m-step-dobrushin-stationary-residual-bound
  - def-xd-finite-column-generator
  - lem-xd-uniformized-matrix-is-stochastic
  - thm-xd-finite-generator-master-equation-uniformization
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice principle is used; the argument is finite-dimensional and uses the supplied uniformization theorem."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ilse C. F. Ipsen and Teresa M. Selee, Ergodicity Coefficients Defined by Vector Norms"
      url: "https://ipsen.math.ncsu.edu/ps/simax75294.pdf"
      locator: "§3, Theorem 3.7 and Corollary 3.9, PDF pp. 12–13; zero-sum ℓ1 contraction."
    - title: "Yuanyuan Liu, Perturbation Bounds for the Stationary Distributions of Markov Chains"
      url: "https://arxiv.org/pdf/1208.4974"
      locator: "§1, equations (1.1)–(1.3), PDF pp. 1–2; stationary residual sensitivity."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Let $Q$ be a finite column generator, let $\nu>0$ satisfy $\nu\ge\max_j r_j$, and put $P=I+Q/\nu$. Let $m\ge1$ and $q=\delta(P^m)<1$. Then the finite master equation $p'=Qp$ has a unique stationary probability $\pi$, characterized among column probability vectors by $Q\pi=0$. For any raw vector $y\in\mathbb R^n$ and column probability vector $x$, set $c=\|y-x\|_1$. Then

$$\|y-\pi\|_1\le c+\frac{m\|Qx\|_1}{\nu(1-q)}.$$

The identity $Qx/\nu=Px-x$ makes the generator residual directly usable by the discrete certificate. In the exact algorithm branch, $y^+=0$ returns `candidate-unavailable`, and $q\ge1$ returns `certificate-unavailable`; neither status supplies an algorithmic accuracy certificate.

In particular, when P and y are rational and the exact branch of [[alg-corrected-stationary-residual-certificate]] returns `certified` with candidate x and correction c, those outputs satisfy the conditions above.

## Facts & Assumptions

**Given:** A finite column generator Q, an admissible $\nu>0$, its uniformized matrix P, an m-step coefficient q<1, a raw vector y, and a column probability vector x.

[F1] [[def-xd-finite-column-generator]]: Q has nonnegative off-diagonal entries, zero column sums, exit rates $r_j=-Q_{jj}$, and acts on column probability vectors.

[F2] [[lem-xd-uniformized-matrix-is-stochastic]]: if $\nu\ge\max_j r_j$ and $\nu>0$, then $P=I+Q/\nu$ is column-stochastic.

[F3] [[thm-xd-finite-generator-master-equation-uniformization]]: the solution of $p'=Qp$, $p(0)=p_0$, is the Poisson-weighted uniformization series with matrix P, and each $P^kp_0$ is a probability vector.

[F4] [[thm-m-step-dobrushin-stationary-residual-bound]]: if $q=\delta(P^m)<1$, then P has a unique stationary probability $\pi_P$ and $\|x-\pi_P\|_1\le m\|Px-x\|_1/(1-q)$ for every column probability vector x.

[F5] [[alg-corrected-stationary-residual-certificate]]: in its exact rational domain, a `certified` output has a column probability candidate x and correction distance $c=\|y-x\|_1$.

## Proof

**Given:** Q, $\nu$, P, m, q, y, x, and $c=\|y-x\|_1$ as above.

**Proof technique:** identify the generator-stationary law with the stationary law of its uniformized matrix, then substitute the generator residual.

1.1 By [F1] and [F2], $Q=\nu(P-I)$ and P is column-stochastic. Since $q=\delta(P^m)<1$, [F4] gives a unique stationary probability $\pi_P$ for P. The identity $Q\pi_P=\nu(P-I)\pi_P=0$ makes the constant trajectory a solution of the master equation; [F3] identifies it with the unique solution for that initial law. Conversely, any time-independent probability solution $\pi$ of $p'=Qp$ satisfies $Q\pi=0$, hence $P\pi=\pi$, so it equals $\pi_P$. [F1, F2, F3, F4, given]

2.1 For the probability x, $Px-x=Qx/\nu$ follows from $P=I+Q/\nu$. By [F4] and the triangle inequality, $\|y-\pi_P\|_1\le\|y-x\|_1+\|x-\pi_P\|_1\le c+m\|Qx\|_1/(\nu(1-q))$. If P and y are rational and the exact algorithm returns `certified`, [F5] supplies precisely such x and c. [F1, F2, F4, F5, step 1.1, algebra] ∎
