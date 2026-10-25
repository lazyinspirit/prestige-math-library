---
id: thm-conditional-bootstrap-hadamard-delta-method
kind: theorem
title: Conditional bootstrap delta method for Hadamard differentiable maps
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - def-conditional-weak-convergence-in-probability
  - def-hadamard-differentiability-tangentially
  - thm-continuous-mapping-theorem
  - thm-portmanteau-theorem
  - thm-subsequence-characterization-of-convergence-in-probability
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: D. Pilavakis, E. Paparoditis, and T. Sapatinas, Moving block and tapered block bootstrap for functional time series with an application to the K-sample mean problem, Bernoulli 25 (2019), Remark 2.1
      url: https://arxiv.org/pdf/1711.01070
dependency_level: 1
---

## Statement

Let $E,F$ be separable Banach spaces, $E_0\subseteq E$ a closed linear subspace, $\theta\in E$, and $D\subseteq E$ a neighbourhood of $\theta$. Let $t_n>0$ decrease to zero, let $Z_n\in E_0$ be data-measurable and tight, and let $Z_n^*\in E_0$ be bootstrap random elements such that $\theta+t_nZ_n$ and $\theta+t_n(Z_n+Z_n^*)$ lie in $D$ with probability tending to one. Supply weak-convergence metrics on probability laws on $E_0$ and $F$ as in [[def-conditional-weak-convergence-in-probability]], with measurable distances for the conditional laws below. Assume:

1. $\mathcal L^*(Z_n^*)$ converges conditionally weakly in probability to the fixed law of $G\in E_0$, as in [[def-conditional-weak-convergence-in-probability]];
2. $Z_n^*$ is conditionally tight in probability: for each $\epsilon,\eta>0$, there is a deterministic compact $K\subset E_0$ such that $\limsup_n\Pr\{\Pr^*(Z_n^*\notin K)>\epsilon\}<\eta$;
3. $D$ is Borel and $\Psi:D\to F$ is Borel measurable and Hadamard differentiable at $\theta$, tangentially to $E_0$, with continuous linear derivative $\Psi'_\theta$ as in [[def-hadamard-differentiability-tangentially]].

Then

$$\mathcal L^*\!\left(t_n^{-1}\{\Psi(\theta+t_n(Z_n+Z_n^*))-\Psi(\theta+t_nZ_n)\}\right)$$

converges conditionally weakly in probability to the law of $\Psi'_\theta(G)$. Define the displayed bootstrap difference to be $0\in F$ whenever either argument lies outside $D$; the assumed vanishing probability of this event makes this convention asymptotically immaterial.

## Facts & Assumptions

**Given:** The spaces, sequences, conditional convergence, conditional tightness, domain and differentiability assumptions in the Statement.

[F1] [[def-hadamard-differentiability-tangentially]]: Along every $t_m\to0$ and $h_m\to h\in E_0$, the difference quotient $\{\Psi(\theta+t_mh_m)-\Psi(\theta)\}/t_m$ converges to $\Psi'_\theta(h)$, where $\Psi'_\theta$ is continuous and linear.

[F2] [[def-conditional-weak-convergence-in-probability]]: Conditional weak convergence means that a metric generating weak convergence between the conditional bootstrap law and the fixed limiting law tends to zero in probability.

[F3] [[thm-portmanteau-theorem]]: Weak convergence of Borel probabilities is equivalent to the closed-set upper bound $\limsup_n\mu_n(C)\le\mu(C)$ for every closed set $C$.

[F4] [[thm-continuous-mapping-theorem]]: If $\mu_n\Rightarrow\mu$ and a measurable map $g$ is continuous $\mu$-almost everywhere, then the image laws satisfy $g_*\mu_n\Rightarrow g_*\mu$.

[F5] [[thm-subsequence-characterization-of-convergence-in-probability]]: A scalar sequence tends to zero in probability exactly when every subsequence has a further subsequence tending to zero almost surely.

## Proof

**Given:** The hypotheses and facts in the Statement and Facts & Assumptions.

1.1 For every compact $K\subset E_0$, $\sup_{h\in K}\left\|t_n^{-1}\{\Psi(\theta+t_nh)-\Psi(\theta)\}-\Psi'_\theta(h)\right\|_F\longrightarrow0$. If this failed, some subsequence would have $h_n\in K$ with the displayed norm bounded below by a positive constant. Compactness gives a further subsequence $h_n\to h\in K$; [F1] applied to that subsequence makes the norm tend to zero, a contradiction. [F1, given, choose]

2.1 Write $T_n^*$ for the bootstrap difference with the stated convention, and $R_n^*=T_n^*-\Psi'_\theta(Z_n^*)$. Fix $\delta,\rho,\eta>0$. Tightness gives a compact $K_0$ with $\limsup_n\Pr(Z_n\notin K_0)<\eta$; conditional tightness gives compact $K_1$ with $\limsup_n\Pr\{\Pr^*(Z_n^*\notin K_1)>\rho/2\}<\eta$. Because $D$ is a neighbourhood of $\theta$, the arguments associated to the bounded compact sets $K_0$ and $K_0+K_1$ lie in $D$ for all sufficiently large $n$. Step 1.1 on these two compact sets and linearity show uniformly there that $\|R_n^*\|<\delta$. Since $Z_n$ is fixed under conditioning, $\Pr^*(\|R_n^*\|>\delta)\le\mathbf1_{\{Z_n\notin K_0\}}+\Pr^*(Z_n^*\notin K_1)$ eventually. Thus the limit superior of $\Pr\{\Pr^*(\|R_n^*\|>\delta)>\rho\}$ is at most $2\eta$. Letting $\eta\downarrow0$ proves $\Pr^*(\|R_n^*\|>\delta)\to0$ in probability for every $\delta>0$. [F1, given, step 1.1, algebra]

3.1 Start with any subsequence. The nonnegative scalar $\min(1,d_w(\mathcal L^*(Z_n^*),\mathcal L(G)))+\sum_{j\ge1}2^{-j}\Pr^*(\|R_n^*\|>1/j)$ tends to zero in probability: truncate the sum, use step 2.1 for its finitely many terms, and bound the tail by its geometric sum. By [F5], extract a further subsequence along which this scalar tends to zero almost surely, so the input metric distance and every remainder probability do also. Fix an outcome in their common probability-one event. The continuous mapping theorem [F4] gives weak convergence of the conditional laws of $\Psi'_\theta(Z_n^*)$. For every closed $C\subset F$ and $\delta>0$, $\Pr^*(T_n^*\in C)\le\Pr^*(\|R_n^*\|>\delta)+\Pr^*(\Psi'_\theta(Z_n^*)\in C^\delta)$, where $C^\delta=\{y:d(y,C)\le\delta\}$ is closed. Apply [F3] and let $\delta\downarrow0$; continuity from above of the fixed limiting probability gives the closed-set bound for $T_n^*$. Thus [F3] gives weak convergence on this outcome, hence convergence to zero of the supplied output weak-metric distance. A final application of [F5] proves convergence of that distance in probability along the full sequence. [F2, F3, F4, F5, step 2.1] ∎

## Remarks

This theorem is conditional on the bootstrap limit and tightness hypotheses. It does not prove those hypotheses for a particular resampling algorithm.
