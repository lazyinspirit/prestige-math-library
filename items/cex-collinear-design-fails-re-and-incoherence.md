---
id: cex-collinear-design-fails-re-and-incoherence
kind: counterexample
title: "A collinear design defeats a sparsity-only coefficient guarantee"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps:
  - def-fixed-design-incoherence-condition
  - def-restricted-eigenvalue-condition
generation:
  role: counterexample
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 2, Lemma 2.17 and Theorem 2.18"
      url: "https://arxiv.org/pdf/2310.19244v1"
    - title: "Peter J. Bickel, Ya'acov Ritov and Alexandre B. Tsybakov, Simultaneous Analysis of Lasso and Dantzig Selector, Section 3"
      url: "https://www.stat.berkeley.edu/~bickel/BickelRitovTsybakov2009aos.pdf"
---

## Statement refuted

Sparsity alone guarantees a positive restricted eigenvalue constant for every fixed design.

## Facts & Assumptions

**Given:** $n=1$, $d=2$, $X=(1\ \ 1)$, $s=1$, and $S=\{1\}$.

[F1] The restricted-eigenvalue cone condition is $\|v_{S^c}\|_1\le3\|v_S\|_1$ and requires a positive lower bound for $\|Xv\|_2^2/(n\|v_S\|_2^2)$ ([[def-restricted-eigenvalue-condition]]).

[F2] Incoherence at $s=1$ requires $\max_{j,k}|(X^{\mathsf T}X/n-I)_{jk}|\le1/14$ ([[def-fixed-design-incoherence-condition]]).

## Proof

1.1 The Gram matrix is $X^{\mathsf T}X/n=\begin{pmatrix}1&1\\1&1\end{pmatrix}$, so its maximum entrywise deviation from $I$ is $1>1/14$ and the incoherence condition fails. [F2, algebra]

2.1 Set $v=(1,-1)$. Then $\|v_{S^c}\|_1=1\le3\|v_S\|_1=3$, but $Xv=0$ while $\|v_S\|_2^2=1$. The ratio required to be bounded below by a positive restricted-eigenvalue constant is therefore zero. The two distinct one-sparse parameters $(1,0)$ and $(0,1)$ also have the same fitted mean $X\theta=1$. Thus sparsity by itself gives neither the RE condition nor coefficient identifiability. [F1, algebra] ∎
