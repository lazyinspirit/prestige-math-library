---
id: cex-csm-energy-concentration-not-local
kind: counterexample
title: Energy concentration without local equivalence
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps: []
dependency_roles: {}
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "H.-O. Georgii and H. Zessin, Large deviations and the maximum entropy principle for marked point random fields"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/GiiZess.pdf"
      locator: "Section 3, printed pp.186–190 / PDF viewer pp.10–14, conditional concentration context; the Bernoulli counterexample is constructed locally."
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, complete course text"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
      locator: "Section 4.2, printed pp.192–198 / PDF viewer pp.220–226: finite-volume energy and ensemble context only; the Bernoulli counterexample is proved locally."
---

## Statement refuted

Fix $0<\theta<1$ and $\epsilon>0$. For every integer $N\geq1$, let $P_N=\operatorname{Bernoulli}(\theta)^{\otimes N}$ be the product probability on $\{0,1\}^N$, where each coordinate equals $1$ with probability $\theta$, and define $H_N(x)=\epsilon\sum_{i=1}^N x_i$. The refuted claim is: every sequence of probability laws $A_N$ on $\{0,1\}^N$ for which there are deterministic numbers $e_N\to\epsilon\theta$ with $A_N(H_N/N=e_N)=1$ has first-coordinate marginals converging in event-supremum total variation to $P_N^{(1)}=\operatorname{Bernoulli}(\theta)$. Use $\|P-Q\|_{\rm TV}=\sup_A|P(A)-Q(A)|$. This is a finite-model claim, not an experimental assertion.

## Facts & Assumptions

**Given:** 0<θ<1, ε>0, the Bernoulli product reference, and the configurations above.

## Counterexample

**Given:** $0<\theta<1$, $\epsilon>0$, the independent Bernoulli-$\theta$ reference $P_N$, and $H_N(x)=\epsilon\sum_i x_i$.

1.1 Let $x^{(N)}$ have its first $\lfloor\theta N\rfloor$ coordinates equal to one and the rest zero, and set $A_N=\delta_{x^{(N)}}$. Then $H_N(x^{(N)})/N=\epsilon\lfloor\theta N\rfloor/N\to\epsilon\theta$, since $0\leq\theta N-\lfloor\theta N\rfloor<1$. For all sufficiently large $N$, the first coordinate of $A_N$ is one. [given, construct, algebra]

2.1 The event $\{1\}$ in the first-coordinate space has probability difference $1-\theta$, so $\|A_N^{(1)}-P_N^{(1)}\|_{\rm TV}\geq1-\theta>0$ for every sufficiently large $N$. In fact equality holds because on a two-point space the event-supremum difference between $\delta_1$ and Bernoulli-$\theta$ is $1-\theta$. Together with the deterministic energy limit in step 1.1, this refutes the stated implication. [step 1.1, algebra] ∎
