---
id: def-subexponential-uniform-boundary
kind: definition
title: One-sided sub-exponential uniform boundary
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-filtration-and-filtered-probability-space
  - def-adapted-and-integrable-stochastic-process
  - def-nonnegative-test-supermartingale
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Steven R. Howard, Aaditya Ramdas, Jon McAuliffe, and Jasjeet Sekhon, Time-uniform, nonparametric, nonasymptotic confidence sequences"
      url: https://arxiv.org/pdf/1810.08240v9
    - title: "Joel A. Tropp, Probability Theory & Stochastic Processes, Caltech CMS 117 lecture notes"
      url: https://tropp.caltech.edu/notes/Tro24-Probability-Theory-LN.pdf
---

## Definition

Assume the Axiom of Choice and fix a scale $c>0$. For $0\leq\lambda<1/c$, define
$$\psi_{E,c}(\lambda):=\frac{-\log(1-c\lambda)-c\lambda}{c^2}.$$
On a discrete filtered probability space $(\Omega,\mathcal F,(\mathcal F_t)_{t\in\mathbb N_0},P)$, a pair of real processes $(S_t,V_t)_{t\in\mathbb N_0}$ is a **one-sided sub-exponential pair at scale $c$** when $S_0=V_0=0$, $V_t\geq0$, and both processes are $\mathcal F_t$-measurable at each time, and for every $\lambda\in[0,1/c)$ there is a real process $(L_t^\lambda)_{t\in\mathbb N_0}$ that is nonnegative, integrable, and $\mathcal F_t$-measurable at each time, satisfies $\mathbb E L_0^\lambda\leq1$ and $\mathbb E[L_t^\lambda\mid\mathcal F_{t-1}]\leq L_{t-1}^\lambda$ almost surely for each $t\geq1$, and obeys
$$\exp\!\left(\lambda S_t-\psi_{E,c}(\lambda)V_t\right)\leq L_t^\lambda\quad\text{almost surely for every }t\geq0.$$

For $\alpha\in(0,1)$, a Borel-measurable function $u:[0,\infty)\to[0,\infty)$ is a **one-sided sub-exponential uniform boundary with crossing probability $\alpha$ and scale $c$** if, for every discrete filtered probability space and every one-sided sub-exponential pair at scale $c$,
$$P\!\left(\exists t\geq1:S_t\geq u(V_t)\right)\leq\alpha.$$

## Definition references

[[def-filtration-and-filtered-probability-space]]: the filtration consists of sigma-algebras $\mathcal F_t\subseteq\mathcal F_{t+1}$ on one probability space, with time starting at zero.

[[def-adapted-and-integrable-stochastic-process]]: a real process is adapted when each value is measurable with respect to the corresponding $\mathcal F_t$; integrability is imposed at every fixed time.

[[def-nonnegative-test-supermartingale]]: the auxiliary process $L^\lambda$ is nonnegative, adapted, integrable, satisfies the conditional supermartingale inequalities, and has initial expectation at most one.

[[def-axiom-of-choice]]: AC is explicitly assumed for the conditional-expectation convention used by the supplied supermartingale definitions.

[A Howard et al., Definition 1 (sub-$\psi$ condition), Definition 2 (uniform boundary), and $\psi_{E,c}$, §2](https://arxiv.org/pdf/1810.08240v9)

[A Tropp, Lecture 26, §§26.4.3–26.4.4](https://tropp.caltech.edu/notes/Tro24-Probability-Theory-LN.pdf)
