---
id: cor-continuous-functionals-of-the-scaled-posterior-converge
kind: corollary
title: Continuous images of the scaled posterior converge weakly
status: published
origin: pipeline
dependency_level: 5
deps:
  - cor-weak-posterior-convergence-in-negative-sobolev-space
  - thm-weak-nonparametric-bernstein-von-mises-for-product-priors
  - lem-bounded-lipschitz-metric-characterizes-weak-convergence-on-polish-spaces
  - thm-continuous-mapping-theorem
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Castillo and Nickl, Nonparametric Bernstein–von Mises theorems in Gaussian white noise, continuous-mapping discussion, §4.1, printed pp. 2021–2022"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/AOS1133.pdf
    - title: "Giné and Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, continuous-mapping consequence, §7.3.4, printed pp. 600–601"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
---

## Statement

Assume AC and the hypotheses of [[thm-weak-nonparametric-bernstein-von-mises-for-product-priors]]. Let $T$ be a metric space and let $G:H(\delta)\to T$ be Borel measurable with $N(D_G)=0$, where $D_G:=\{x\in H(\delta):G\text{ is not continuous at }x\}$. For every bounded continuous $h:T\to\mathbb R$,

$$\int h\,d(\widetilde\Pi_n\circ G^{-1})\longrightarrow\int h\,d(N\circ G^{-1})$$

in $P_{f_0}^{(n)}$-probability. In particular this holds for continuous maps, including continuous linear functionals into $\mathbb R^m$.

## Facts & Assumptions

[F1] [[cor-weak-posterior-convergence-in-negative-sobolev-space]]: $\widetilde\Pi_n$ converges weakly in probability to $N$ on $H(\delta)$.

[F2] [[thm-continuous-mapping-theorem]]: If $\mu_n\Rightarrow\mu$ on a metric space and $G$ is measurable with $\mu(D_G)=0$, then $G_*\mu_n\Rightarrow G_*\mu$.

[F3] [[lem-bounded-lipschitz-metric-characterizes-weak-convergence-on-polish-spaces]]: Under AC, the bounded-Lipschitz metric metrizes weak convergence on Polish $H(\delta)$.

[A1] [[def-axiom-of-choice]]: AC is needed only for the weak-topology interpretation imported through [F1] and [F3]; the continuous-mapping step is the choice-free theorem [F2].

**Given:** AC, a metric target $T$, the map $G$, and the posterior and limit measures in the statement.

## Proof

1.1 Fix a bounded continuous $h:T\to\mathbb R$ and define $\Phi(\nu):=\int h\,d(\nu\circ G^{-1})$. If $\beta_{BL,H(\delta)}(\nu_m,N)\to0$, [F3] gives $\nu_m\Rightarrow N$ under [A1]; [F2] and $N(D_G)=0$ imply $\nu_m\circ G^{-1}\Rightarrow N\circ G^{-1}$, hence $\Phi(\nu_m)\to\Phi(N)$. Since $\beta_{BL}$ is a metric, this sequential criterion proves continuity of $\Phi$ at $N$. [A1, F2, F3, given]

2.1 Given $\varepsilon>0$, continuity from step 1.1 supplies $\eta>0$ such that $\beta_{BL,H(\delta)}(\nu,N)<\eta$ implies $|\Phi(\nu)-\Phi(N)|<\varepsilon$. Therefore $P_{f_0}^{(n)}\{|\Phi(\widetilde\Pi_n)-\Phi(N)|\ge\varepsilon\}\le P_{f_0}^{(n)}\{\beta_{BL,H(\delta)}(\widetilde\Pi_n,N)\ge\eta\}\longrightarrow0$ by [F1] and [F3], which give bounded-Lipschitz convergence in probability on $H(\delta)$. This is the stated convergence in probability for $h$. [F1, F3, step 1.1] ∎
