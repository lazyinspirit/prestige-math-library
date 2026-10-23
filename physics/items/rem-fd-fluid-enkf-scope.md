---
id: rem-fd-fluid-enkf-scope
kind: remark
title: EnKF large-ensemble scope and nonlinear limits
status: draft
origin: pipeline
pipeline_run: fluid-dynamics-all-47-2026-10-23
dependency_level: 2
domain: mathematics
library: mathematics
deps:
  - def-fd-fluid-coefficient-observation-model
  - prop-fd-linear-fluid-filter-interface
  - alg-ensemble-kalman-filter
  - thm-perturbed-observation-ensemble-kalman-large-ensemble-limit
  - def-axiom-of-choice
dependency_roles:
  def-fd-fluid-coefficient-observation-model: mathematical-premise
  prop-fd-linear-fluid-filter-interface: mathematical-premise
  alg-ensemble-kalman-filter: mathematical-premise
  thm-perturbed-observation-ensemble-kalman-large-ensemble-limit: mathematical-premise
  def-axiom-of-choice: mathematical-premise
axiom_use: Assume AC as required by the Gaussian-law construction and the
  supplied EnKF limit theorem; no stronger choice principle is used.
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-23
sources:
  references:
    - title: "K. J. H. Law, A. M. Stuart, and K. C. Zygalakis, Data Assimilation: A
        Mathematical Introduction, Chapter 4 §4.2.3"
      url: "https://arxiv.org/pdf/1506.07825v1"
    - title: "Jan Mandel, Loren Cobb, and Jonathan D. Beezley, On the Convergence of
        the Ensemble Kalman Filter, §§3–4, Theorem 1 and Corollary 1"
      url: "https://arxiv.org/pdf/0901.2951v2"
---

## Remark

Assume the Axiom of Choice (AC), meaning every family of nonempty sets has a choice function, for the Gaussian-law construction. Fix a nonnegative integer horizon $T\in\mathbb Z_{\ge0}$, positive integers $m_k$ for $0\le k\le T$ and $p_k$ for $1\le k\le T$, matrices $F_k\in\mathbb R^{m_k\times m_{k-1}}$ and $H_k\in\mathbb R^{p_k\times m_k}$ for $1\le k\le T$, and a finite linear-Gaussian coefficient model
$$a_k=F_ka_{k-1}+q_k,\qquad y_k=H_ka_k+r_k,$$
where $\mu_0\in\mathbb R^{m_0}$, $a_0\sim N_{m_0}(\mu_0,P_0)$, $q_k\sim N_{m_k}(0,Q_k)$, and $r_k\sim N_{p_k}(0,R_k)$ are mutually independent, $P_0,Q_k$ are positive semidefinite, and $R_k$ is positive definite. Fix arbitrary observation data $y_{1:T}$. For each integer ensemble size $N\ge2$, draw the initial members $a_{N,i}^{a,0}$ independently from $N_{m_0}(\mu_0,P_0)$. At each $k$, draw process perturbations $q_{N,i}^k\sim N_{m_k}(0,Q_k)$ and observation perturbations $\eta_{N,i}^k\sim N_{p_k}(0,R_k)$, with all these perturbations mutually independent across members and times and independent of the initial ensemble, and set $a_{N,i}^{f,k}=F_ka_{N,i}^{a,k-1}+q_{N,i}^k$. Define $\bar a_N^{f,k}=N^{-1}\sum_i a_{N,i}^{f,k}$ and the divisor-$N$ covariance $C_N^{f,k}=N^{-1}\sum_i(a_{N,i}^{f,k}-\bar a_N^{f,k})(a_{N,i}^{f,k}-\bar a_N^{f,k})^T$. The common gain and perturbed-observation update are
$$K_N^k=C_N^{f,k}H_k^T(H_kC_N^{f,k}H_k^T+R_k)^{-1},\qquad a_{N,i}^{a,k}=a_{N,i}^{f,k}+K_N^k(y_k+\eta_{N,i}^k-H_ka_{N,i}^{f,k}).$$
Since $C_N^{f,k}$ is positive semidefinite and $R_k$ is positive definite, this inverse exists. Define the analysis empirical mean and covariance by $\bar a_N^{a,k}=N^{-1}\sum_i a_{N,i}^{a,k}$ and $C_N^{a,k}=N^{-1}\sum_i(a_{N,i}^{a,k}-\bar a_N^{a,k})(a_{N,i}^{a,k}-\bar a_N^{a,k})^T$. Let $m_{k|k}$ and $P_{k|k}$ be the mean and covariance produced by the exact Kalman recursion in the preceding filtering proposition, which defines an everywhere-defined Gaussian filtering law at every fixed history $y_{1:k}$. At each fixed $k\le T$, $\bar a_N^{a,k}$ and $C_N^{a,k}$ converge in probability to $m_{k|k}$ and $P_{k|k}$ as $N\to\infty$; moreover, for each fixed bounded Lipschitz function $\varphi:\mathbb R^{m_k}\to\mathbb R$, $N^{-1}\sum_i\varphi(a_{N,i}^{a,k})$ converges in probability to its integral under that filtering law. Here bounded Lipschitz means $\sup_x|\varphi(x)|<\infty$ and $|\varphi(x)-\varphi(x')|\le L\|x-x'\|_2$ for some finite $L$ and all $x,x'$. Convergence in probability means that for every $\epsilon>0$, the probability that the error exceeds $\epsilon$ tends to zero; use Euclidean norm for vectors, Frobenius norm for matrices, and absolute value for scalars. All probabilities refer to the ensemble sampling just described. The horizon is fixed as $N$ grows, with no uniform-in-time conclusion. At finite $N$, the common sample-covariance gain couples the update, and the theorem does not assert independent posterior samples or an exact posterior law for the ensemble. It covers the stated linear maps and perturbed-observation formula only. Covariance localization here means replacing the sample covariance by its entrywise product with a prescribed taper matrix; covariance inflation means rescaling the ensemble anomalies by a factor greater than one or adding a prescribed positive-semidefinite covariance; a transport update means applying a selected map to ensemble members instead of the displayed perturbed-observation formula. These modified procedures and nonlinear state or observation maps require their own statements and proofs. The claim is conditional on the chosen finite model; it is not a conclusion that a nonlinear fluid equation or an actual flow is described by it.

## Remark references

[[def-fd-fluid-coefficient-observation-model]]

[[prop-fd-linear-fluid-filter-interface]]

[[alg-ensemble-kalman-filter]]

[[thm-perturbed-observation-ensemble-kalman-large-ensemble-limit]]

[[def-axiom-of-choice]]

[Law, Stuart, and Zygalakis, Chapter 4 §4.2.3, pp. 82–84](https://arxiv.org/pdf/1506.07825v1)

[Mandel, Cobb, and Beezley, §§3–4, Theorem 1 and Corollary 1](https://arxiv.org/pdf/0901.2951v2)
