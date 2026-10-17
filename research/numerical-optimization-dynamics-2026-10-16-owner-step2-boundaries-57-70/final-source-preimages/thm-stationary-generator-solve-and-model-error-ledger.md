---
id: thm-stationary-generator-solve-and-model-error-ledger
kind: theorem
title: "Separate stationary solve residual from generator error"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - alg-corrected-stationary-residual-certificate
  - cor-uniformized-generator-stationary-residual-certificate
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice principle is used; the result is a finite-dimensional triangle inequality under an explicit contraction certificate."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Yuanyuan Liu, Perturbation Bounds for the Stationary Distributions of Markov Chains"
      url: "https://arxiv.org/pdf/1208.4974"
      locator: "§1, equations (1.1)–(1.4), and §2.1 Lemma 2.1, PDF pp. 1–5; stationary sensitivity is separated from transition-matrix perturbation."
    - title: "Ilse C. F. Ipsen and Teresa M. Selee, Ergodicity Coefficients Defined by Vector Norms"
      url: "https://ipsen.math.ncsu.edu/ps/simax75294.pdf"
      locator: "§3, Theorem 3.7 and Corollary 3.9, PDF pp. 12–13; the contraction coefficient on zero-sum vectors."
verification:
  precheck: pass
---

## Statement

Let Q be the true finite column generator, let $\nu>0$ satisfy $\nu\ge\max_j r_j$, and put $P=I+Q/\nu$. Suppose $q=\delta(P^m)<1$ for some $m\ge1$. Let $\widetilde Q$ be any computed matrix model on the same finite state set, let $y\in\mathbb R^n$, and let x be a column probability vector with $c=\|y-x\|_1$. Then, for the unique stationary probability $\pi_Q$ of Q,

$$\|y-\pi_Q\|_1\le c+\frac{m}{\nu(1-q)}\left(\|\widetilde Qx\|_1+\|(Q-\widetilde Q)x\|_1\right).$$

The first residual is the solve residual for the computed model; the second is the model perturbation evaluated at the chosen candidate. If $\widetilde Qx=0$, the solve-residual term vanishes. Every term must be supplied as an exact value or a certified outward upper bound before the displayed expression is reported as a numerical certificate.

In particular, if P and y are rational and the exact branch of [[alg-corrected-stationary-residual-certificate]] returns `certified`, its output x and c satisfy these conditions.

## Facts & Assumptions

**Given:** Q, $\nu$, P, m, q, y, a computed model $\widetilde Q$, a column probability vector x, and $c=\|y-x\|_1$.

[F1] [[alg-corrected-stationary-residual-certificate]]: on exact-branch success for rational P, y, and m, x is a column probability vector and $c=\|y-x\|_1$.

[F2] [[cor-uniformized-generator-stationary-residual-certificate]]: $\|y-\pi_Q\|_1\le c+m\|Qx\|_1/(\nu(1-q))$ for the true generator Q and the chosen column probability vector x.

## Proof

**Given:** Q, $\widetilde Q$, $\nu$, P, q, m, y, x, and c under the stated hypotheses.

**Proof technique:** write the exact generator residual as the sum of the computed solve residual and the model discrepancy.

1.1 The exact generator residual decomposes as $Qx=\widetilde Qx+(Q-\widetilde Q)x$. The triangle inequality gives $\|Qx\|_1\le\|\widetilde Qx\|_1+\|(Q-\widetilde Q)x\|_1$. [given, algebra]

2.1 By [F2], the generator certificate gives $\|y-\pi_Q\|_1\le c+m\|Qx\|_1/(\nu(1-q))$. Substitute the estimate from step 1.1; since $\nu(1-q)>0$, the result is the stated separate solve-residual and model-error bound. An outward upper bound for either norm preserves the inequality. If P and y are rational and the exact algorithm returns `certified`, [F1] supplies the required probability x and correction c. [F1, F2, step 1.1, algebra] ∎
