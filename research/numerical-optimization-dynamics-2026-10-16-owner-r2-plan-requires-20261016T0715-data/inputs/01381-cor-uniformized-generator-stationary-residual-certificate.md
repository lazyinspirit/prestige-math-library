---
id: cor-uniformized-generator-stationary-residual-certificate
kind: corollary
title: "Uniformized finite-generator stationary residual certificate"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - thm-corrected-stationary-residual-certificate-soundness
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
---

## Statement

Let $Q$ be a finite column generator, let $\nu>0$ satisfy $\nu\ge\max_j r_j$, and put $P=I+Q/\nu$. Let $m\ge1$ and $q=\delta(P^m)<1$. Then the finite master equation $p'=Qp$ has a unique stationary probability $\pi$, characterized by $Q\pi=0$. If the corrected-candidate algorithm applied to P and a raw vector y returns candidate x and correction $c=\|y-x\|_1$, then

$$\|y-\pi\|_1\le c+\frac{m\|Qx\|_1}{\nu(1-q)}.$$

The identity $Qx/\nu=Px-x$ makes the generator residual directly usable by the discrete certificate. A zero-rate generator with several states, a negative or nonnormalized input that cannot be corrected, or $q\ge1$ does not receive this certificate.

## Facts & Assumptions

**Given:** A finite column generator Q, an admissible $\nu>0$, its uniformized matrix P, an m-step coefficient q<1, and a successful corrected candidate x from raw vector y.

[F1] [[def-xd-finite-column-generator]]: Q has nonnegative off-diagonal entries, zero column sums, exit rates $r_j=-Q_{jj}$, and acts on column probability vectors.

[F2] [[lem-xd-uniformized-matrix-is-stochastic]]: if $\nu\ge\max_j r_j$ and $\nu>0$, then $P=I+Q/\nu$ is column-stochastic.

[F3] [[thm-xd-finite-generator-master-equation-uniformization]]: the solution of $p'=Qp$, $p(0)=p_0$, is the Poisson-weighted uniformization series with matrix P, and each $P^kp_0$ is a probability vector.

[F4] [[thm-corrected-stationary-residual-certificate-soundness]]: when the corrected-candidate algorithm succeeds with $q<1$, P has a unique stationary probability, and for the successful corrected candidate, $\|y-\pi_P\|_1\le c+m\|Px-x\|_1/(1-q)$, where $\pi_P$ is the unique stationary probability of P.

## Proof

**Given:** Q, $\nu$, P, m, q, y, x, and c as above.

**Proof technique:** identify the generator-stationary law with the stationary law of its uniformized matrix, then substitute the generator residual.

1.1 By [F1] and [F2], $Q=\nu(P-I)$ and P is column-stochastic. Since $q=\delta(P^m)<1$, [F4] gives a unique stationary probability $\pi_P$ for P. The identity $Q\pi_P=\nu(P-I)\pi_P=0$ makes the constant trajectory a solution of the master equation; [F3] identifies it with the unique solution for that initial law. Conversely, any time-independent solution of $p'=Qp$ satisfies $Q\pi=0$, hence $P\pi=\pi$, so it equals $\pi_P$. [F1, F2, F3, F4, given]

2.1 For the corrected probability x, $Px-x=Qx/\nu$ follows from $P=I+Q/\nu$. Apply [F4] with $\pi=\pi_P$ and substitute this identity to obtain $\|y-\pi\|_1\le c+m\|Qx\|_1/(\nu(1-q))$. [F1, F2, F4, step 1.1, algebra] ∎
