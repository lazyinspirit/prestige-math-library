---
id: def-qa-18-classical-hitting-time
kind: definition
title: "Finite-chain hitting time and survival law"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 4
deps:
  - def-qa-18-marked-set-and-stationary-mass
  - def-transition-matrix-and-n-step-transition-probabilities
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
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
---
## Definition

Let $X$ be the finite state set, $P$ its row-transition matrix, $\mathcal M\subseteq X$ the marked set, $U=X\setminus\mathcal M$, and $P_{UU}$ the principal submatrix indexed by $U$. For an initial probability row vector $\mu$, the **hitting-time survival law** is

$$\Pr_\mu(\tau_{\mathcal M}>t):=\mu_U P_{UU}^{\,t}\mathbf 1_U,\qquad t\in\mathbb N_0,$$

where $\mu_U$ is the restriction of $\mu$ to $U$ and $\mathbf 1_U$ is the all-ones column vector on $U$. This is the finite sum of probabilities of all length-$t$ paths that remain in $U$; it does not require a path-space construction. For $U=\varnothing$ the right side is $0$; for $\mathcal M=\varnothing$ it is $1$.

The hitting time $\tau_{\mathcal M}:=\inf\{t\ge0:X_t\in\mathcal M\}$ is the $\mathbb N_0\cup\{\infty\}$-valued variable determined by this survival law. Its extended expectation is $\mathbb E_\mu\tau_{\mathcal M}=\sum_{t\ge0}\Pr_\mu(\tau_{\mathcal M}>t)$, and a constant-success hitting bound is a specified integer $t$ for which $\Pr_\mu(\tau_{\mathcal M}\le t)$ is bounded below by a positive constant. These resource conventions are kept separate.
