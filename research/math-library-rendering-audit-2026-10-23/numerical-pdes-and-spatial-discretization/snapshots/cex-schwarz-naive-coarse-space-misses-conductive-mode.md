---
id: cex-schwarz-naive-coarse-space-misses-conductive-mode
kind: counterexample
title: "A one-node coarse space misses a high-conductance channel"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps:
  - def-overlapping-schwarz-subspace-correction-data
  - thm-additive-schwarz-stable-decomposition-condition-number
proof_strategy: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "Jinchao Xu, Iterative Methods by Space Decomposition and Subspace
        Correction, SIAM Review 34(4) (1992)"
      url: https://numerik.mi.fu-berlin.de/wiki/SS_2020/NumericsIII_Dokumente/Xu92.pdf
      locator: "Sections 3.1–3.2, pp. 585–587: local subspaces and additive
        preconditioning."
    - title: "Peter Bastian, Lecture Notes on Parallel Solution of Large Sparse Linear
        Systems, University of Heidelberg (2015)"
      url: https://conan.iwr.uni-heidelberg.de/data/scripts/num3.pdf
      locator: "Chapter 4 §§4.1–4.2, pp. 57–63: a coarse space and local spaces enter
        the same additive operator."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement refuted

A bounded-size one-node coarse space, together with bounded-overlap exact
local solves, guarantees an additive Schwarz condition number uniform in every
positive diffusion contrast.

## Facts & Assumptions

**Given:** A contrast parameter $\alpha>0$, global space $V=\mathbb R^2$, a
coarse space $V_0=\operatorname{span}\{e_1\}$, and one local space
$V_1=\operatorname{span}\{e_2\}$.

[F1] For full-column-rank prolongations, the exact additive preconditioner is
$B=\sum_iR_iA_i^{-1}R_i^{\mathsf T}$ with
$A_i=R_i^{\mathsf T}AR_i$
([[def-overlapping-schwarz-subspace-correction-data]]).

## Counterexample

1.1 The grounded two-node graph with unit conductance from each node to ground and conductance $\alpha$ between the nodes has matrix $A_\alpha=I_2+\alpha \begin{pmatrix}1&-1\\-1&1\end{pmatrix}.$ For $x=(x_1,x_2)$, $x^{\mathsf T}A_\alpha x=x_1^2+x_2^2+\alpha(x_1-x_2)^2$, so $A_\alpha$ is SPD. The coarse and local injections are $R_0=e_1$ and $R_1=e_2$, hence $A_0=A_1=1+\alpha$. The additive preconditioner from [F1] is therefore $B_\alpha=(1+\alpha)^{-1}I_2$. There is one local subspace, so its pairwise overlap matrix is the fixed $1\times1$ matrix $[1]$, independent of $\alpha$. [F1, given, algebra]

2.1 The vectors $(1,1)$ and $(1,-1)$ are eigenvectors of $A_\alpha$ with eigenvalues $1$ and $1+2\alpha$. Thus $B_\alpha A_\alpha$ has eigenvalues $(1+\alpha)^{-1}$ and $(1+2\alpha)/(1+\alpha)$, so $\kappa_A(B_\alpha A_\alpha)=1+2\alpha\to\infty$. The low-energy channel vector $(1,1)$ is not in the one-node coarse space $V_0$, and the growing condition number disproves the claim. [step 1.1, algebra] ∎
