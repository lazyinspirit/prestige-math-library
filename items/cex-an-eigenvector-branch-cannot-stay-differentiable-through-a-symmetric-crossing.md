---
id: cex-an-eigenvector-branch-cannot-stay-differentiable-through-a-symmetric-crossing
kind: counterexample
title: "At a symmetric crossing, an ordered eigenvector branch cannot remain differentiable"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cex-an-ordered-eigenvector-branch-need-not-be-differentiable-through-a-crossing]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Alan Edelman and Steven G. Johnson, Matrix Calculus for Machine Learning and Beyond"
      url: "https://ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec_full.pdf"
---

## Statement refuted

Across a symmetric eigenvalue crossing, one can keep the ordered eigenvector
branch differentiable by a clever normalization.

The family

$$A(t)=\begin{pmatrix}t&0\\0&-t\end{pmatrix}$$

shows that no normalization can fix the fact that the top eigendirection swaps
from $\operatorname{span}\{e_2\}$ to $\operatorname{span}\{e_1\}$ at $t=0$.

## Facts & Assumptions

**Given:** The symmetric crossing family
$A(t)=\begin{pmatrix}t&0\\0&-t\end{pmatrix}$.

[L1] An ordered eigenvector branch need not be differentiable through a
crossing ([[cex-an-ordered-eigenvector-branch-need-not-be-differentiable-through-a-crossing]]).

## Counterexample
**Proof technique:** direct.

1.1 For $t<0$, the larger eigenvalue is $-t$ with eigendirection $\operatorname{span}\{e_2\}$, while for $t>0$ the larger eigenvalue is $t$ with eigendirection $\operatorname{span}\{e_1\}$. [algebra]

2.1 Any normalization still has to represent those two different eigendirections on the two sides of the crossing, so the ordered branch cannot be continuous or differentiable through $t=0$. This is exactly the phenomenon recorded in [L1]. [L1, step 1.1] ∎