---
id: cex-smc-clt-class-does-not-ensure-target-moment
kind: counterexample
title: "The source function class need not give finite SMC CLT variances"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - def-smc-clt-function-classes-and-variance-recursions
proof_strategy: direct
axiom_use: "The countable-state construction and series calculations use no choice; the counterexample remains valid in the ambient AC setting of the cited CLT class."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "Nicolas Chopin, Central Limit Theorem for Sequential Monte Carlo Methods and its Application to Bayesian Inference, Theorem 1 and Appendix A.3"
      url: "https://arxiv.org/pdf/math/0508594"
---

## Statement refuted

The source class $\Phi_t$ in [[def-smc-clt-function-classes-and-variance-recursions]], together with $1\in\Phi_t$, guarantees that every displayed finite-horizon weighted and post-resampling CLT covariance is finite, including $V_0$ for a separately weighted initial proposal.

## Facts & Assumptions

**Given:** The recursive class $\Phi_t$, target/proposal laws, and variance notation in the cited definition.

[F1] [[def-smc-clt-function-classes-and-variance-recursions]]: $\Phi_0$ requires a finite proposal second moment; $\phi\in\Phi_t$ requires $\widetilde\pi_t(|\upsilon_t\phi|^{2+\delta})<\infty$ and $k_t(\upsilon_t\phi)\in\Phi_{t-1}$; the post-multinomial covariance adds $\operatorname{Var}_{\pi_t}(\phi)$.

[F2] [[def-smc-clt-function-classes-and-variance-recursions]]: For an initially weighted proposal, $V_0(\phi)=\operatorname{Cov}_{\widetilde\pi_0}(\upsilon_0(\phi-\pi_0\phi))$; finiteness requires its displayed second moment to exist.

## Counterexample

**Given:** Let $\Theta_0=\Theta_1=\mathbb N_0$ with its power-set sigma-algebra and proposal $p_0=1/2$, $p_n=2^{-(n+1)}$ for $n\ge1$. At time zero set $\widetilde\pi_0=\pi_0=p$ and $\upsilon_0=1$. Put $w_n=2^{-n^2}$ for $n\ge1$, $s=\sum_{n\ge1}p_nw_n$, and $w_0=(1-s)/p_0$. Let $k_1(n,\cdot)=\delta_n$, $\widetilde\pi_1=p$, $\upsilon_1(n)=w_n$, and $\pi_1(n)=p_nw_n$. Define $\phi(0)=0$ and $\phi(n)=w_n^{-3/4}$ for $n\ge1$.

1.1 The geometric proposal masses sum to one. Since $0<s<1/2$, $w_0$ is finite and positive, and $\sum_{n\ge0}p_nw_n=1$ by construction; hence $\pi_1$ is a probability law with density $w$ relative to $p$. The identity kernel gives $\widetilde\pi_1=p$. [given, algebra]

1.2 Choose $\delta=1$. For $n\ge1$, $w_n\phi(n)=w_n^{1/4}$, so $\sum p_n|w_n\phi(n)|^3=\sum_{n\ge1}p_nw_n^{3/4}<\infty$ and $\sum p_n|w_n\phi(n)|^2=\sum_{n\ge1}p_nw_n^{1/2}<\infty$. Thus $k_1(w\phi)=w\phi\in\Phi_0$ and $\phi\in\Phi_1$. Also $\sum p_nw_n^3<\infty$ and $k_1w=w\in\Phi_0$, so $1\in\Phi_1$. [F1, step 1.1]

2.1 The target mean is $\pi_1(\phi)=\sum_{n\ge1}p_nw_n^{1/4}<\infty$, but $\pi_1(\phi^2)=\sum_{n\ge1}p_nw_n^{-1/2}=\sum_{n\ge1}2^{-(n+1)}2^{n^2/2}=\infty,$ since the summands do not tend to zero. Therefore $\operatorname{Var}_{\pi_1}(\phi)=\infty$. [step 1.1, algebra]

3.1 The weighted covariance $V_1(\phi)$ is finite: the identity mutation has zero conditional variance, $w(\phi-\pi_1\phi)\in L^2(p)$ by step 1.2 and the finite mean in step 2.1, and the initial multinomial covariance at time zero is finite because $\upsilon_0=1$ and $g=w(\phi-\pi_1\phi)\in L^2(p)$. Yet the post-multinomial formula in [F1] adds the infinite target variance from step 2.1. Thus the source class and $1\in\Phi_1$ do not suffice for the claimed finite post-resampling covariance. [F1, step 1.2, step 2.1, algebra]

4.1 For a separate initial-proposal witness, let $\Theta_0=\mathbb N_{\ge1}$, $\widetilde\pi_0\{n\}=2^{-n}$, $c=(\sum_{n\ge1}2^{-n/2})^{-1}$, and $\upsilon_0(n)=c2^{n/2}$. Put $\pi_0\{n\}=2^{-n}\upsilon_0(n)$ and $\phi(n)=\mathbf1_{\{n\text{ even}\}}$. Then $\sum_n\widetilde\pi_0\{n\}\upsilon_0(n)=1$, so $\pi_0$ is a probability law and $\upsilon_0=d\pi_0/d\widetilde\pi_0$. Both $\phi$ and $1$ are bounded, hence belong to $\Phi_0$. [F1, F2, given, algebra]

4.2 Let $q=\pi_0(\phi)$. Positive proposal and target mass occur on both parities, so $0<q<1$. For every even $n$, $\widetilde\pi_0\{n\}\upsilon_0(n)^2(\phi(n)-q)^2=c^2(1-q)^2>0$, so the sum over even $n$ diverges. Thus $\widetilde\pi_0(\upsilon_0^2(\phi-q)^2)=\infty$ and [F2] gives $V_0(\phi)=\infty$, despite $\phi,1\in\Phi_0$. This independently refutes the claimed initial weighted-estimator covariance finiteness. [F2, step 4.1, algebra] ∎
