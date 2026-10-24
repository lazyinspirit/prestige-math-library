---
id: cex-characteristic-line-data-do-not-determine-a-one-dimensional-wave
kind: counterexample
title: "Data on one characteristic line do not determine a one-dimensional wave"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
proof_strategy: direct
deps: [lem-general-solution-of-the-one-dimensional-wave-equation, lem-one-dimensional-wave-operator-factorisation, thm-dalembert-formula]
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
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§2.4.1–2.4.2, printed pp. 53–56, (2.4.2)–(2.4.4) and the Goursat problem: characteristic data need the two-sided setup"
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§7.1, printed p. 211: the general solution along characteristics"
---


## Statement refuted

"Prescribing $u$ and its first derivatives along a single characteristic line $x=ct$ (equivalently $\xi=x-ct=0$) determines the $C^2$ solution of $u_{tt}=c^2u_{xx}$ near that line."

## Facts & Assumptions

**Given:** a speed $c>0$, the characteristic coordinates $\xi=x-ct$, $\eta=x+ct$ of [[lem-one-dimensional-wave-operator-factorisation]], and the two functions $u_1(x,t)=\sin(x+ct)$, $u_2(x,t)=(x-ct)^3+\sin(x+ct)$.

[F1] On a nonempty open rectangle every $C^2$ solution of $u_{tt}=c^2u_{xx}$ has the form $u(x,t)=F(x-ct)+G(x+ct)$ with $F,G\in C^2$ on the projections, and every such sum is a solution; the pair is unique up to $F\mapsto F+k$, $G\mapsto G-k$ ([[lem-general-solution-of-the-one-dimensional-wave-equation]]).

## Counterexample

1.1 Reading the general solution on the line $\xi=0$: if $u=F(\xi)+G(\eta)$, then $u(0,\eta)=F(0)+G(\eta)$, $\partial_xu(0,\eta)=F'(0)+G'(\eta)$ and $\partial_tu(0,\eta)=-cF'(0)+cG'(\eta)$. Thus the line data determine the function $G$ up to an additive constant and the number $F'(0)$; $F(0)$ retains the common additive-shift freedom, but leave the function $F$ away from $\xi=0$ completely free; by [F1] every $C^2$ solution near the line has this form. [F1, algebra]

1.2 The witness pair. Both $u_1=0+\sin(\eta)$ and $u_2=\xi^3+\sin(\eta)$ are $C^2$ sums of a function of $\xi$ and a function of $\eta$, hence $C^2$ solutions by [F1]. On $\xi=0$ their traces agree: $u_1(0,\eta)=\sin\eta=u_2(0,\eta)$, $\partial_xu_1=\cos\eta$ and $\partial_xu_2=3\xi^2+\cos\eta$ coincide at $\xi=0$, and $\partial_tu_1=c\cos\eta$ and $\partial_tu_2=-3c\xi^2+c\cos\eta$ coincide there as well. [F1, algebra]

1.3 However $u_2-u_1=\xi^3$ is nonzero for every $\xi\ne0$, so the two solutions differ at points of every neighbourhood of the line $\xi=0$; hence data on the characteristic line do not determine the solution. This exhibits failure of uniqueness for these characteristic line data. [algebra]

2.1 Therefore the displayed statement is refuted: the same values of $u,\partial_xu,\partial_tu$ on the single characteristic line are shared by two $C^2$ solutions that disagree on every neighbourhood of it. [given] ∎ 