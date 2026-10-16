---
id: thm-qa-finite-abelian-fourier-inversion
kind: theorem
title: Finite abelian Fourier inversion
status: draft
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

For every $f:G\to\mathbb C$ and $x\in G$,
$$f(x)=N_{\mathbb R}^{-1/2}\sum_{\chi\in\widehat G}(F_Gf)(\chi)\chi(x),\qquad N_{\mathbb R}:=\iota_{\mathbb R}(|G|).$$
Thus the inverse uses the positive character rather than its conjugate.

## Facts & Assumptions

**Given:** A finite abelian group $G$, the transform $F_G$, and a function $f:G\to\mathbb C$.

[F1] The coordinate matrix $U$ of $F_G$ satisfies $U^*U=I_G$ and $UU^*=I_{\widehat G}$ ([[thm-qa-finite-abelian-fourier-transform-is-unitary]]).

[F2] Its entries are $U_{\chi,x}=N_{\mathbb R}^{-1/2}\overline{\chi(x)}$ ([[def-qa-normalized-finite-abelian-fourier-transform]]).

## Proof

1.1 Write $F_Gf=Uf$ in the point-mass coordinate bases. From [F1], $U^*$ is a two-sided inverse of $U$, so $f=U^*(F_Gf)$. [F1, given]

2.1 The $x$ coordinate of $U^*(F_Gf)$ is $\sum_{\chi\in\widehat G}\overline{U_{\chi,x}}(F_Gf)(\chi)$. By [F2], $\overline{U_{\chi,x}}=N_{\mathbb R}^{-1/2}\chi(x)$, which gives exactly the displayed formula. [F2, step 1.1, algebra] ∎
