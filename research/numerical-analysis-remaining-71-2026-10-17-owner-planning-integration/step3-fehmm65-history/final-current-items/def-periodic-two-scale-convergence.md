---
id: def-periodic-two-scale-convergence
kind: definition
title: Two-scale weak convergence for periodic tests
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-periodic-zero-mean-cell-space, def-countable-choice]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Grégoire Allaire, Introduction to Homogenization Theory, Lecture 1"
      url: "https://www.cmap.polytechnique.fr/~allaire/homog/lect1.pdf"
      locator: "Definition 1.3.3, PDF p. 13: two-scale convergence on periodic test functions."
    - title: "Zhongwei Shen, Lectures on Periodic Homogenization of Elliptic Systems"
      url: "https://arxiv.org/pdf/1710.11257"
      locator: "Chapter 1 §1.3, printed pp. 14–19: periodic two-scale limits."
verification:
  precheck: n/a
---
## Definition

Let $Q=Y=(0,1)^d$, let $\epsilon_n>0$ tend to zero, and let $(u_n)$ be bounded in $L^2(Q)$. We say $u_n$ **two-scale converges weakly** to $u\in L^2(Q\times Y)$ along $(\epsilon_n)$ if for every finite sum
$$\Phi(x,y)=\sum_{r=1}^m\phi_r(x)\psi_r(y),\quad \phi_r\in C_c^\infty(Q),\quad\psi_r\in C_\#^\infty(Y),$$
one has
$$\lim_{n\to\infty}\int_Qu_n(x)\Phi(x,x/\epsilon_n)\,dx=\int_Q\int_Yu(x,y)\Phi(x,y)\,dy\,dx.$$
Here $C_\#^\infty(Y)$ is the smooth $\mathbb Z^d$-periodic class from [[def-periodic-zero-mean-cell-space]]. The test definition is independent of how a finite sum is represented because both sides are linear in $\Phi$.
