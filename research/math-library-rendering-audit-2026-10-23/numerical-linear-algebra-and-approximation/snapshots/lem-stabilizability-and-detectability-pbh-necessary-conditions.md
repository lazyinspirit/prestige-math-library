---
id: lem-stabilizability-and-detectability-pbh-necessary-conditions
kind: lemma
title: "Stabilizability and detectability imply the closed-region PBH rank tests"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-lqr-stabilizability-and-detectability
  - thm-row-rank-equals-column-rank
  - thm-rank-nullity
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Daniel Liberzon, Calculus of Variations and Optimal Control Theory: A
        Concise Introduction, Chapter 6"
      url: "https://liberzon.csl.illinois.edu/teaching/cvoc/node113.html"
      locator: "§§6.2.1–6.2.4, stabilizability and detectability assumptions for
        continuous LQR"
    - title: "Peter Benner and Lihong Feng, Model Reduction for Dynamical Systems,
        Lecture 8"
      url: "https://www.mpi-magdeburg.mpg.de/2943737/lecture8.pdf"
      locator: "slides 26–29, stabilizability/detectability hypotheses and CARE theorem"
    - title: "Federico Poloni, Lecture notes on Riccati-type matrix equations"
      url: "https://pages.di.unipi.it/fpoloni/videolezioni/phd25/notes.pdf"
      locator: "§§5.1–5.2, discrete stabilizability/detectability and DARE convergence"
    - title: "A.A. Stoorvogel and A. Saberi, The discrete algebraic Riccati equation
        and linear matrix inequality, Memorandum COSOR 94-16"
      url: "https://pure.tue.nl/ws/portalfiles/portal/2465804/427410.pdf"
      locator: "§§2.5–2.7, DARE stabilizability/detectability context and pencil
        spectrum"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

For $F\in\{\mathbb R,\mathbb C\}$, $n,m,p\ge1$, $A\in F^{n\times n}$, $B\in F^{n\times m}$, and $C\in F^{p\times n}$, the following necessary conditions hold.

If $(A,B)$ is continuously stabilizable, then $\operatorname{rank}[\lambda I-A\;B]=n$ for every $\lambda\in\mathbb C$ with $\operatorname{Re}\lambda\ge0$. If it is discretely stabilizable, the same rank is $n$ for every $|\lambda|\ge1$.

If $(A,C)$ is continuously detectable, then $\operatorname{rank}\begin{bmatrix}\lambda I-A\\C\end{bmatrix}=n$ for every $\operatorname{Re}\lambda\ge0$. If it is discretely detectable, the same rank is $n$ for every $|\lambda|\ge1$.

This proves the necessary half of the PBH tests. The converse pole-placement implication is not asserted here.

## Facts & Assumptions

**Given:** The matrices and continuous/discrete stabilizability and detectability definitions of [[def-lqr-stabilizability-and-detectability]]. Every rank test and eigenvector argument is over $\mathbb C$; when $F=\mathbb R$, the real matrices and their real feedback or injection witnesses act complex-linearly on their complexifications.

[F1] [[def-lqr-stabilizability-and-detectability]]: continuous stabilizability means $A-BK$ is Hurwitz for some $K$; discrete stabilizability means $A-BK$ is Schur stable; detectability is the dual condition with $A-LC$.

[F2] [[thm-row-rank-equals-column-rank]]: for a finite matrix, row rank and column rank agree.

[F3] [[thm-rank-nullity]]: for a linear map with finite-dimensional domain, dimension of domain equals rank plus nullity.

[A1] For $F=\mathbb R$, real matrices and feedback/injection witnesses are extended complex-linearly when tested against a complex $\lambda$.

## Proof

1.1 Suppose $(A,B)$ is continuously stabilizable and fix its same-field feedback $K$ from [F1]. If for some $\lambda$ with $\operatorname{Re}\lambda\ge0$ the horizontal matrix $H_\lambda=[\lambda I-A\;B]$ has rank less than $n$, [F2] and [F3] applied over $\mathbb C$ to $H_\lambda^*$ give a nonzero $y\in\mathbb C^n$ with $y^*(\lambda I-A)=0$ and $y^*B=0$. By [A1], the same real or complex $K$ acts on this vector, so $y^*(A-BK)=\lambda y^*$. Thus $\det(\lambda I-(A-BK))=0$, contradicting that $A-BK$ is Hurwitz. [A1, F1, F2, F3, contradiction]

1.2 Suppose $(A,C)$ is continuously detectable and fix its same-field injection $L$ from [F1]. If $V_\lambda=\begin{bmatrix}\lambda I-A\\C\end{bmatrix}$ has rank less than $n$, rank-nullity over $\mathbb C$ gives a nonzero $x\in\mathbb C^n$ with $(\lambda I-A)x=0$ and $Cx=0$. Hence $(A-LC)x=\lambda x$, which contradicts that $A-LC$ is Hurwitz because $\operatorname{Re}\lambda\ge0$. [A1, F1, F3, contradiction]

2.1 Suppose $(A,B)$ is discretely stabilizable and fix its same-field Schur feedback $K$ from [F1]. If $[\lambda I-A\;B]$ has rank less than $n$ for some $|\lambda|\ge1$, the same complex left-kernel argument as in step 1.1 gives a nonzero $y$ with $y^*(A-BK)=\lambda y^*$. Thus $\det(\lambda I-(A-BK))=0$, contradicting Schur stability. [A1, F1, F2, F3, step 1.1, contradiction]

3.1 Suppose $(A,C)$ is discretely detectable and fix its same-field Schur injection $L$ from [F1]. If the vertical matrix has rank less than $n$ for some $|\lambda|\ge1$, its complex kernel contains a nonzero $x$ and $Cx=0$, so $(A-LC)x=\lambda x$. This contradicts Schur stability. [A1, F1, F3, step 1.2, contradiction] ∎
