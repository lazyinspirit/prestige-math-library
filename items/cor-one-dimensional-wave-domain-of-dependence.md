---
id: cor-one-dimensional-wave-domain-of-dependence
kind: corollary
title: "The one-dimensional value depends on the characteristic interval"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
proof_strategy: direct
deps: [thm-dalembert-formula, lem-dalembert-formula-attains-both-initial-data]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§7.1, printed pp. 211–212: finite propagation and the interval of influence for the string"
    - title: "Per Kristen Jakobsen, An Introduction to Partial Differential Equations (arXiv:1901.03022)"
      url: "https://arxiv.org/pdf/1901.03022"
      locator: "§10.3.1, printed p. 142: the characteristic triangle as the domain of dependence"
    - title: "Jared Speck, MIT 18.152 Introduction to Partial Differential Equations, Class Meeting #10: Introduction to the Wave Equation (Fall 2011)"
      url: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/ccd4ae63858e855c18c96ce96a797b9b_MIT18_152F11_lec_10.pdf"
      locator: "§4, printed p. 5: the initial-data interval and finite speed of propagation (4.0.15)"
---


## Statement

Let $c>0$ and let $u$ be the solution of [[thm-dalembert-formula]] for data $u_0\in C^2(\mathbb R)$, $u_1\in C^1(\mathbb R)$. For every $(x,t)\in\mathbb R\times[0,\infty)$, the value $u(x,t)$ is determined by the restrictions of $u_0$ and $u_1$ to the closed interval $[x-ct,x+ct]$: if $(\tilde u_0,\tilde u_1)$ are admissible data agreeing with $(u_0,u_1)$ there, then the corresponding solution satisfies $\tilde u(x,t)=u(x,t)$. In particular, changing the data outside $[x-ct,x+ct]$ does not change the value at $(x,t)$.

## Facts & Assumptions

**Given:** a speed $c>0$, data $u_0\in C^2(\mathbb R)$, $u_1\in C^1(\mathbb R)$, a point $(x,t)\in\mathbb R\times[0,\infty)$, and admissible data $(\tilde u_0,\tilde u_1)$ with $\tilde u_0=u_0$ and $\tilde u_1=u_1$ on $[x-ct,x+ct]$.

[F1] The d'Alembert formula of [[thm-dalembert-formula]] reads $u(x,t)=\frac12\bigl(u_0(x-ct)+u_0(x+ct)\bigr)+\frac{1}{2c}\int_{x-ct}^{x+ct}u_1(y)\,dy$.

[F2] The d'Alembert expression attains both initial data and defines the unique classical solution of the corresponding Cauchy problem ([[lem-dalembert-formula-attains-both-initial-data]], [[thm-dalembert-formula]]).

## Proof

1.1 The formula of [F1] evaluates $u_0$ only at the two endpoints $x-ct$ and $x+ct$ of the interval and integrates $u_1$ only over that interval; hence replacing $(u_0,u_1)$ by any admissible pair with the same restrictions to $[x-ct,x+ct]$ leaves the right-hand side unchanged, so the d'Alembert expression of the new data equals $u(x,t)$ at the given point. [F1, algebra]

2.1 By [F2] both expressions are the solutions of their respective Cauchy problems, so the solution $\tilde u$ of the data $(\tilde u_0,\tilde u_1)$ satisfies $\tilde u(x,t)=u(x,t)$; in particular the value at $(x,t)$ is unchanged by altering the data off $[x-ct,x+ct]$. [F2, algebra] ∎ 