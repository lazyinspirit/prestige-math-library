---
id: thm-qa-finite-abelian-parseval
kind: theorem
title: Finite abelian Parseval identity
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [thm-qa-finite-abelian-fourier-transform-is-unitary, def-qa-normalized-finite-abelian-fourier-transform]
dependency_level: 5
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, version 6"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
---

## Statement

For $f,g:G\to\mathbb C$,
$$\sum_{\chi\in\widehat G}(F_Gf)(\chi)\overline{(F_Gg)(\chi)}=\sum_{x\in G}f(x)\overline{g(x)}.$$
For a finite set $X$, the counting inner product on $\mathbb C^X$ is $\langle f,g\rangle_X:=\sum_{x\in X}f(x)\overline{g(x)}$; it is linear in the first argument. The displayed identity says this inner product is preserved.

## Facts & Assumptions

**Given:** A finite abelian group $G$ and functions $f,g:G\to\mathbb C$.

[F1] The transform matrix $U$ satisfies $U^*U=I_G$ ([[thm-qa-finite-abelian-fourier-transform-is-unitary]]).

[F2] The transform is represented by the matrix entries $U_{\chi,x}=N_{\mathbb R}^{-1/2}\overline{\chi(x)}$ ([[def-qa-normalized-finite-abelian-fourier-transform]]).

## Proof

1.1 Expanding the left side in point-mass coordinates using [F2] gives $\sum_{\chi}(\sum_x U_{\chi,x}f(x))\overline{(\sum_y U_{\chi,y}g(y))}=\sum_{x,y}f(x)\overline{g(y)}(\sum_\chi U_{\chi,x}\overline{U_{\chi,y}})$. The inner finite sum is the conjugate of the $(x,y)$ entry of $U^*U$, so [F1] makes it $1$ if $x=y$ and $0$ otherwise. [F1, F2, algebra]

2.1 The diagonal terms remaining from step 1.1 are exactly $\sum_x f(x)\overline{g(x)}$. Taking $g=f$ gives preservation of the squared counting norm as well. [step 1.1] ∎
