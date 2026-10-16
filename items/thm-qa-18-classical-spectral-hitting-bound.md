---
id: thm-qa-18-classical-spectral-hitting-bound
kind: theorem
title: "Classical marked-set hitting bound from a spectral gap"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 5
deps:
  - lem-qa-18-symmetric-compressed-walk-bound
  - def-qa-18-classical-hitting-time
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
justified_by: []
proof_strategy: direct
axiom_use: "None; the proof uses finite matrix powers and the geometric series."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 18, §18.4"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 8, §8.1"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Frédéric Magniez, Ashwin Nayak, Jérémie Roland, and Miklos Santha, Search via Quantum Walk, Proposition 1"
      url: "https://arxiv.org/pdf/quant-ph/0608026"
---
## Statement

Under the hypotheses of [[lem-qa-18-symmetric-compressed-walk-bound]], suppose $\varnothing\ne\mathcal M\ne X$ and start uniformly on $U=X\setminus\mathcal M$. Then

$$\Pr(\tau_{\mathcal M}>t)\le(1-\delta\varepsilon)^t\qquad(t\in\mathbb N_0),$$

so $\mathbb E\tau_{\mathcal M}\le1/(\delta\varepsilon)$ and $O(1/(\delta\varepsilon))$ steps give constant success probability. If $\mathcal M=X$, the hitting time is $0$.

## Facts & Assumptions

**Given:** The finite symmetric lazy chain and marked set from [[lem-qa-18-symmetric-compressed-walk-bound]], and the survival-law definition of [[def-qa-18-classical-hitting-time]].

[F1] [[lem-qa-18-symmetric-compressed-walk-bound]]: $\|P_{UU}\|\le1-\delta\varepsilon$, and the compression is positive semidefinite.

[F2] [[def-qa-18-classical-hitting-time]]: $\Pr_\mu(\tau_{\mathcal M}>t)=\mu_U P_{UU}^{\,t}\mathbf1_U$.

[F3] [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]: $|\langle v,w\rangle|\le\|v\|\|w\|$ in a finite-dimensional inner-product space.

## Proof
1.1 Let $u_U=|U|^{-1/2}\mathbf1_U$. For the uniform initial law on $U$, [F2] gives $\Pr(\tau_{\mathcal M}>t)=\langle u_U,P_{UU}^{\,t}u_U\rangle$. Since $P_{UU}$ is positive semidefinite, it has eigenvalues in $[0,1-\delta\varepsilon]$ by [F1]; its $t$th power therefore has operator norm at most $(1-\delta\varepsilon)^t$. [F3] and $\|u_U\|=1$ prove the survival bound, including $t=0$. [F1, F2, F3, algebra]

2.1 Put $a=\delta\varepsilon$. For $0<a<1$, the nonnegative-integer tail formula in [F2] and the finite geometric partial sums give $\mathbb E\tau_{\mathcal M}=\sum_{t\ge0}\Pr(\tau_{\mathcal M}>t)\le\sum_{t\ge0}(1-a)^t=1/a$. For the constant-success bound choose $t=\lceil1/a\rceil$. Since $(1-a)(1+a)=1-a^2\le1$, we have $1-a\le(1+a)^{-1}$; the finite binomial expansion gives $(1+a)^t\ge1+ta\ge2$. Hence $(1-a)^t\le(1+a)^{-t}\le1/2$. If $a=1$, step 1.1 gives zero no-hit probability for every $t\ge1$, so one step suffices. The case $\mathcal M=X$ is immediate from the definition. [F1, F2, step 1.1, algebra] ∎
