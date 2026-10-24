---
id: thm-qa-finite-abelian-fourier-transform-is-unitary
kind: theorem
title: Finite abelian Fourier transform is unitary
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-qa-normalized-finite-abelian-fourier-transform, thm-qa-finite-abelian-dual-character-orthogonality, lem-additive-character-orthogonality-from-representation-orthogonality, thm-qa-finite-abelian-dual-has-same-cardinality, lem-finite-sum-reindexing-and-fubini, def-rational-power, lem-rational-power-laws]
dependency_level: 4
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

Let $N_{\mathbb R}$ be the canonical positive real image of $|G|$ from [[def-qa-normalized-finite-abelian-fourier-transform]]. Define the finite coefficient matrix $U$, with rows indexed by $\widehat G$ and columns by $G$, by
$$U_{\chi,x}=N_{\mathbb R}^{-1/2}\overline{\chi(x)},\qquad \chi\in\widehat G,\ x\in G.$$
It is square and satisfies $U^*U=I_G$ and $UU^*=I_{\widehat G}$, where $U^*$ is the conjugate transpose and $I_X$ is the identity matrix indexed by $X$, with $(I_X)_{x,y}=1$ when $x=y$ and $0$ otherwise. These two identities are the meaning of “unitary” here.

## Facts & Assumptions

**Given:** The normalized finite abelian Fourier transform on $G$.

[F1] The transform has coefficient $N_{\mathbb R}^{-1/2}\sum_x f(x)\overline{\chi(x)}$ ([[def-qa-normalized-finite-abelian-fourier-transform]]).

[F2] $|\widehat G|=|G|$, so the finite row and column index sets have equal cardinality ([[thm-qa-finite-abelian-dual-has-same-cardinality]]).

[F3] For additive characters $\chi,\psi$, $N_{\mathbb R}^{-1}\sum_{x\in G}\psi(x)\overline{\chi(x)}$ equals $1$ if $\chi=\psi$ and $0$ otherwise ([[lem-additive-character-orthogonality-from-representation-orthogonality]]).

[F4] $N_{\mathbb R}^{-1}\sum_{\chi\in\widehat G}\chi(x)\overline{\chi(y)}$ equals $1$ if $x=y$ and $0$ otherwise ([[thm-qa-finite-abelian-dual-character-orthogonality]]).

[F5] The matrix products and sums here are finite; sums over finite product index sets may be evaluated in either order ([[lem-finite-sum-reindexing-and-fubini]]).

[F6] Positive rational powers are defined for positive reals and obey $a^ra^s=a^{r+s}$ ([[def-rational-power]], [[lem-rational-power-laws]]).

## Proof

1.1 By [F1], the transform acts on a function $f$ by the coefficient formula defining $U$. By [F2], its row and column index sets have equal finite cardinality, so $U$ is square. [F1, F2]

1.2 For $x,y\in G$, the $(x,y)$ entry of $U^*U$ is $N_{\mathbb R}^{-1}\sum_{\chi\in\widehat G}\chi(x)\overline{\chi(y)}$, because [F6] gives $(N_{\mathbb R}^{-1/2})^2=N_{\mathbb R}^{-1}$. By [F4], this is $1$ when $x=y$ and $0$ otherwise, exactly the entry of $I_G$. Hence $U^*U=I_G$. [F4, F5, F6]

1.3 For $\chi,\psi\in\widehat G$, the $(\chi,\psi)$ entry of $UU^*$ is $N_{\mathbb R}^{-1}\sum_{x\in G}\overline{\chi(x)}\psi(x)$. By [F6] and [F3], this is $1$ when $\chi=\psi$ and $0$ otherwise, exactly the entry of $I_{\widehat G}$. Hence $UU^*=I_{\widehat G}$. [F3, F5, F6]

2.1 By [F1], the action of this coefficient matrix on the function values of any $f\in\mathbb C^G$ is exactly $F_Gf$. The two identities in steps 1.2 and 1.3 therefore prove the asserted unitarity of the transform as defined here. [F1, step 1.1, step 1.2, step 1.3] ∎
