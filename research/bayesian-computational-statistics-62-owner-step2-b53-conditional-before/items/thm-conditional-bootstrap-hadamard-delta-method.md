---
id: thm-conditional-bootstrap-hadamard-delta-method
kind: theorem
title: Conditional bootstrap delta method for Hadamard differentiable maps
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps: [def-conditional-weak-convergence-in-probability, def-hadamard-differentiability-tangentially, thm-continuous-mapping-theorem, thm-portmanteau-theorem]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "D. Pilavakis, E. Paparoditis, and T. Sapatinas, Moving block and tapered block bootstrap for functional time series with an application to the K-sample mean problem, Bernoulli 25 (2019), Remark 2.1"
      url: https://arxiv.org/pdf/1711.01070
---

## Statement

Let $E,F$ be separable Banach spaces, $E_0\subseteq E$ a closed linear subspace, $\theta\in E$, and $D\subseteq E$ a neighbourhood of $\theta$. Let $t_n>0$ decrease to zero, let $Z_n\in E_0$ be tight, and let $Z_n^*\in E_0$ be bootstrap random elements such that $\theta+t_nZ_n$ and $\theta+t_n(Z_n+Z_n^*)$ lie in $D$ with probability tending to one. Assume:

1. $\mathcal L^*(Z_n^*)$ converges conditionally weakly in probability to the fixed law of $G\in E_0$, as in [[def-conditional-weak-convergence-in-probability]];
2. $Z_n^*$ is conditionally tight in probability: for each $\epsilon>0$, there is a compact $K_\epsilon\subset E_0$ such that $\Pr\{\Pr^*(Z_n^*\notin K_\epsilon)>\epsilon\}\to0$;
3. $\Psi:D\to F$ is Hadamard differentiable at $\theta$, tangentially to $E_0$, with continuous linear derivative $\Psi'_\theta$ as in [[def-hadamard-differentiability-tangentially]].

Then

$$\mathcal L^*\!\left(t_n^{-1}\{\Psi(\theta+t_n(Z_n+Z_n^*))-\Psi(\theta+t_nZ_n)\}\right)$$

converges conditionally weakly in probability to the law of $\Psi'_\theta(G)$.

## Facts & Assumptions

**Given:** The spaces, sequences, conditional convergence, conditional tightness, domain and differentiability assumptions in the Statement.

[F1] [[def-hadamard-differentiability-tangentially]]: Along every $t_m\to0$ and $h_m\to h\in E_0$, the difference quotient $\{\Psi(\theta+t_mh_m)-\Psi(\theta)\}/t_m$ converges to $\Psi'_\theta(h)$, where $\Psi'_\theta$ is continuous and linear.

[F2] [[def-conditional-weak-convergence-in-probability]]: Conditional weak convergence means that a metric generating weak convergence between the conditional bootstrap law and the fixed limiting law tends to zero in probability.

[F3] [[thm-portmanteau-theorem]]: Weak convergence of Borel probabilities is equivalent to the closed-set upper bound $\limsup_n\mu_n(C)\le\mu(C)$ for every closed set $C$.

[F4] [[thm-continuous-mapping-theorem]]: If $\mu_n\Rightarrow\mu$ and a measurable map $g$ is continuous $\mu$-almost everywhere, then the image laws satisfy $g_*\mu_n\Rightarrow g_*\mu$.

## Proof

**Given:** The hypotheses and facts in the Statement and Facts & Assumptions.

1.1 For every compact $K\subset E_0$, $\sup_{h\in K}\left\|t_n^{-1}\{\Psi(\theta+t_nh)-\Psi(\theta)\}-\Psi'_\theta(h)\right\|_F\longrightarrow0$. If this failed, some subsequence would have $h_n\in K$ with the displayed norm bounded below by a positive constant. Compactness gives a further subsequence $h_n\to h\in K$; [F1] applied to that subsequence makes the norm tend to zero, a contradiction. [F1, given, choose]

2.1 Fix $\epsilon>0$. Tightness of $Z_n$ gives a compact $K_0\subset E_0$ containing $Z_n$ with probability at least $1-\epsilon$ for all sufficiently large $n$; conditional tightness gives $K_1\subset E_0$ for which the conditional probability that $Z_n^*\notin K_1$ exceeds $\epsilon$ with outer probability tending to zero. The set $K_0+K_1$ is compact. Applying step 1.1 to $K_0$ and $K_0+K_1$, and using linearity of $\Psi'_\theta$, shows that the displayed bootstrap difference equals $\Psi'_\theta(Z_n^*)+o_{P^*}(1)$ in probability. [F1, given, step 1.1, algebra]

3.1 Along every subsequence on which the conditional weak convergence in [F2] holds almost surely, the continuous mapping theorem [F4] gives conditional weak convergence of $\Psi'_\theta(Z_n^*)$ to $\Psi'_\theta(G)$. The conditional remainder from step 2.1 does not change this limit: for a closed set $C\subseteq F$ and $\eta>0$, its conditional probability is bounded by the conditional probability that the remainder exceeds $\eta$, plus the conditional probability that $\Psi'_\theta(Z_n^*)$ lies in the closed $\eta$-neighbourhood of $C$. Apply the closed-set bound [F3] and then let $\eta\downarrow0$. The subsequence criterion for convergence in probability proves the claimed conditional weak convergence. [F2, F3, F4, step 2.1] ∎

## Remarks

This theorem is conditional on the bootstrap limit and tightness hypotheses. It does not prove those hypotheses for a particular resampling algorithm.
