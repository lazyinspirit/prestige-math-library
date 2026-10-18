---
id: cor-periodic-dirichlet-homogenization-strong-l2
kind: corollary
title: Strong L2 convergence in periodic Dirichlet homogenization
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps:
  - thm-periodic-dirichlet-homogenization-on-unit-cube
  - lem-unit-cube-h01-separability-and-l2-compactness
  - def-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Grégoire Allaire, Introduction to Homogenization Theory, Lecture 1"
      url: "https://www.cmap.polytechnique.fr/~allaire/homog/lect1.pdf"
      locator: "§1.3.1, PDF pp. 11–16: compactness upgrades weak homogenization to strong L2 convergence."
    - title: "Zhongwei Shen, Lectures on Periodic Homogenization of Elliptic Systems"
      url: "https://arxiv.org/pdf/1710.11257"
      locator: "Chapter 1 §1.3, printed pp. 14–23: compactness of solutions and uniqueness of the homogenized limit."
verification:
  precheck: n/a
---
## Statement

Under the hypotheses and notation of [[thm-periodic-dirichlet-homogenization-on-unit-cube]], $u_\epsilon\to u_0$ strongly in $L^2(Q)$.

## Facts & Assumptions

**Given:** The periodic solutions are uniformly bounded in $H^1_0(Q)$, every weak cluster limit is $u_0$, and the cube embedding $H^1_0(Q)\hookrightarrow L^2(Q)$ is compact.

[F1] [[thm-periodic-dirichlet-homogenization-on-unit-cube]]: $u_\epsilon\rightharpoonup u_0$ in $H^1_0(Q)$ and hence weakly in $L^2(Q)$.

[F2] [[lem-unit-cube-h01-separability-and-l2-compactness]]: every bounded $H^1_0(Q)$ sequence has a strongly $L^2$-convergent subsequence.

[A1] [[def-countable-choice]]: subsequence selections use Countable Choice.

## Proof




1.1 Suppose strong convergence failed. Then some $\delta>0$ and sequence $\epsilon_n\to0$ satisfy $\|u_{\epsilon_n}-u_0\|_2\ge\delta$ for every $n$. The energy bound from [F1] makes this a bounded sequence in $H^1_0(Q)$; by [F2] and [A1], a subsequence converges strongly in $L^2$ to some $v$. Its weak $L^2$ limit is also $u_0$ by [F1], so uniqueness of weak limits in the Hilbert space $L^2(Q)$ gives $v=u_0$. This contradicts the lower bound $\delta$. [F1, F2, A1, algebra]

2.1 The contradiction proves $\|u_\epsilon-u_0\|_2\to0$ as $\epsilon\downarrow0$. [step 1.1, algebra] ∎
